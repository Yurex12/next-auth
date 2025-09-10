// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

// Extend the User object returned by NextAuth
declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string; // add role
  }

  interface Session {
    user?: {
      id?: string;
      role?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
  }
}
