

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

import { NEXT_AUTH } from "@/app/lib/auth"
import NextAuth from "next-auth"


const handler = NextAuth(NEXT_AUTH)

export { handler as GET, handler as POST }
