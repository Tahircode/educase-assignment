import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { signinSchema } from '@/zodSchema';
import { sign } from 'jsonwebtoken';
import { withAccelerate } from '@prisma/extension-accelerate';
import client from '@/db'

export async function POST(req: NextRequest) {
    const body = await req.json();
    const result = signinSchema.safeParse(body);
    console.log(body);
    if (!result.success) {
        console.error(result.error.format());
        return NextResponse.json(
            { msg: 'Inputs are not valid' },
            { status: 411 }
        );
    }

    const { email, password } = result.data;

    try {
        const user = await client.user.findUnique({
            where: { email },
        });
        if (!user || user.password !== password) {
            return NextResponse.json(
                { msg: 'Invalid email or password' },
                { status: 401 }
            );
        }

        const jwt = sign({ id: user.id }, process.env.JWT_SECRET!, {
            expiresIn: '7d',
        });

        return NextResponse.json({ msg: 'Signed in successfully', jwt });
    } catch (e) {
        return NextResponse.json({ msg: 'Server error', error: e }, { status: 500 });
    }
}