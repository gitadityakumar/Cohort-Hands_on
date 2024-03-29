

// export function GET(req:NextRequest){
//     return NextResponse.json({
//         message:"Hi From next Server"
//     })
// }

// import NextAuth from "next-auth/next";

// import { NextRequest, NextResponse } from "next/server"

// export function GET(req: NextRequest, { params }: { params: { nextauth: string[] } }) {
//     console.log(params.nextauth[0])
//     return NextResponse.json({
//         message: "Hi From NextServer"
//     })
// }

import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'Email', type: 'text', placeholder: 'Email' },
          password: { label: 'Password', type: 'Password', placeholder: 'Password' },
        },
        async authorize(credentials: any) {
          console.log(credentials);

//do validation from db and then return something 
// here i am allowing everyone to login by returing hardcoded values
          
            
            return {
                id: "1",
                name:"Aditya kumar",
                email:"aditya@gmail.com"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  //callbacks for extra info(persist more data) or blocking some explicit user
  callbacks: {
    // jwt: async ({ user, token }: any) => {
    //   if (user) {
    //       token.uid = user.id;
    //   }
    //   return token;
    // },
  session: ({ session, token, user }: any) => {
    console.log(session);
      if (session.user && session) {
          session.user.id = token.sub
      }
      return session
  }
},

})

export { handler as GET, handler as POST }
