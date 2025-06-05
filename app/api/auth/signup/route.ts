import { NextRequest, NextResponse } from 'next/server';
import { signupSchema } from '@/zod';
import { PrismaClient } from '@/app/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'jsonwebtoken';
import client from '@/db'
// const prisma = new PrismaClient().$extends(withAccelerate());

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const result = signupSchema.safeParse(body);

        if (!result.success) {
            console.error(result.error.format());
            return NextResponse.json({ msg: 'inputs are not valid' }, { status: 411 });
        }
        const { name, phone, email, password, company } = result.data;

        const existingUser = await client.user.findUnique({
            where: { email: email },
        });

        if (existingUser) {
            return NextResponse.json(
                { msg: "Email already registered" },
                { status: 400 }
            );
        }


        const user = await client.user.create({
            data: { name, phone, email, password, company },
        });

        const jwt = sign({ id: user.id }, process.env.JWT_SECRET as string);

        return NextResponse.json({
            msg: 'user created successfully',
            jwt,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { msg: 'Internal Server Error', error },
            { status: 500 }
        );
    }
}
