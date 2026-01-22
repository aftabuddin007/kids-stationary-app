import { loginUser } from "@/actins/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
    // (e.g. 'Sign in with...')
    name: 'Credentials',
   
    credentials: {
     
    },
    async authorize(credentials, req) {

      const user = await loginUser(credentials)

     return user
    }
  })
   
  ],
}
