import { NextResponse } from 'next/server';
import { portfolioData } from '@/lib/portfolioData';

export async function GET(request) {
    return NextResponse.json({ success: true, about: portfolioData.about });
}

export async function POST(request) {
    const body = await request.json();

    return NextResponse.json(
        {
            success: true,
            message: 'About data is now managed manually in the UI.',
            about: {
                ...portfolioData.about,
                ...body,
            },
        },
        { status: 201 }
    );
}