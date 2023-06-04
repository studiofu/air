import bcrypt from 'bcrypt';
import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt"

export async function GET(
    request: NextRequest,

) {
    //const session = await getServerSession(authOptions);

    //const token = await getToken({ request, secret: process.env.SECRET as string, encryption: true })

    const token = await getToken({ req: request })

    console.log('calling: test/token/route.ts');

    if(token) { 
        return NextResponse.json({
            message: JSON.stringify(token)
        })
    }else {
        return NextResponse.json({
            message: "No token"
        })
    }

}