import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";

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
      authorize: async (credentials, request) => {

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
              return response.user;
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
});