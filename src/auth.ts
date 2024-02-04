import NextAuth from "next-auth";
import type { NextAuthConfig, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { ExtendedUser, LoginResponse, RoleType } from "@/common/types";
import axios, { setAxiosAuthorization } from "@/lib/axios";

declare module "next-auth" {
  interface User {
    role: RoleType;
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    avatar: string;
    phone: string;
    isActive: boolean;
    accessToken: string;
    expiresAt: number;
  }
  interface Session {
    user: ExtendedUser;
    token: {
      accessToken: string;
      expiresAt: number;
    };
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "john.doe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, request) {
        const validatedCredentials = LoginSchema.safeParse(credentials);

        if (validatedCredentials.success) {
          try {
            const { email, password } = validatedCredentials.data;

            const res = await axios.post("/auth/login", {
              email,
              password,
            });

            const response: LoginResponse = res.data;

            if (response.user) {
              const user: User & {
                isOAuth: boolean;
                isTwoFactorEnabled: boolean;
              } = {
                ...response.user,
                role: response.user.role as RoleType,
                accessToken: response.token.accessToken,
                expiresAt: Date.now() + response.token.expiresIn * 1000,
                isOAuth: false,
                isTwoFactorEnabled: false,
              };
              setAxiosAuthorization(user.accessToken);
              return user;
            } else {
              throw new Error("Authentication failed");
            }
          } catch (error) {
            return null;
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return {...token, ...user};
    },
    async session({ session, token }) {
      const sanitizedToken = Object.keys(token).reduce((p, c) => {
        // strip unnecessary properties
        if (c !== "iat" && c !== "exp" && c !== "jti" && c !== "apiToken") {
          return { ...p, [c]: token[c] };
        } else {
          return p;
        }
      }, {});
      return { ...session, user: sanitizedToken, token: token.accessToken };
    },
  },
});