import NextAuth from "next-auth";
import type { NextAuthConfig, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { ExtendedUser, LoginResponse, RoleType } from "@/common/types";

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
  debug: true,
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
            const AuthUrl = new URL(`${process.env.BACKEND_URL}/auth/login`);

            const res = await fetch(AuthUrl, {
              method: "POST",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            });

            const response: LoginResponse = await res.json();

            if (res.ok && response) {
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
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.name = token.firstName + " " + token.lastName;
        session.user.role = token.role as RoleType;
      }
      return session;
    },
    async jwt({ token, user }) {
      if(!token.sub) return token;
      if(user) {
        token.id = user.id;
        token.name = user.firstName + " " + user.lastName;
        token.picture = user.avatar;
        token.email = user.email;
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.expiresAt = user.expiresAt;
      }
      return token;
    },
  },
});