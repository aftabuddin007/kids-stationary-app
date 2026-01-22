export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
    // (e.g. 'Sign in with...')
    name: 'Credentials',
   
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
     return null
    }
  })
   
  ],
}
