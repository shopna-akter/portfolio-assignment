import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github";

export const authOptions:NextAuthOptions = {
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID as String,
        clientSecret: process.env.GITHUB_SECRET as String,
      })
  ],
}