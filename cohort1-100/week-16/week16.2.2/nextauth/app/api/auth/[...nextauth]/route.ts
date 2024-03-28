

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
                id: "user1"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
