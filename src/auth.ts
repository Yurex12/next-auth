import { PrismaClient } from '@/generated/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const { auth, signIn, signOut, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // null was returned in all due to the fact that next-auth treats all error as same, it doesnt send generic errors to the client, so errors that returned null would be treated as CredentialsSignin error and others Configuration (db errors, network)
        try {
          if (!credentials?.email || !credentials?.password)
            // throw new Error('Kindly provide details.');
            return null;

          const email = credentials.email as string;
          const password = credentials.password as string;

          const user = await prisma.user.findUnique({
            where: { email: email },
          });

          const isValidPassword =
            user?.password && (await bcrypt.compare(password, user.password));

          if (!user || !isValidPassword) {
            // throw new Error('Email or password is incorrect.');
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch {
          throw new Error('Something went wrong.');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name;
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;

      if (pathname === '/auth/signin' || pathname === '/auth/signup')
        return true;
      return !!auth;
    },
  },
});
