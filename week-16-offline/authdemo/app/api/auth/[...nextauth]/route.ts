import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import { any } from "zod";
const handler = NextAuth(NEXT_AUTH);
export const GET = handler;
export const POST = handler;