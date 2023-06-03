import bcrypt from 'bcrypt';
import prisma from "@/app/libs/prismadb";
import { NextResponse } from 'next/server';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from "next-auth/next";

export async function GET(
    request: Request,

) {
    const session = await getServerSession(authOptions);

    if(session) {
        return NextResponse.json({
            message: JSON.stringify(session)
        })
    }else {
        return NextResponse.json({
            message: "No session"
        })
    }

}