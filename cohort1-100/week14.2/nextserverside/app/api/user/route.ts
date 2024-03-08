import { NextRequest, NextResponse } from 'next/server';


export async function GET(){
    return Response.json({
        name:"Aditya kumar",
        email:"aditya@gmail.com"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();

    return NextResponse.json({ username: body.username, password: body.password })
}