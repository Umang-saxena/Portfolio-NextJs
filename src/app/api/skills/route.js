import { NextResponse } from 'next/server';
import { portfolioData } from '@/lib/portfolioData';

// GET: Fetch all skills
export async function GET(request) {
    return NextResponse.json({ success: true, skills: portfolioData.skills });
}

// POST: Add comma-separated skills
export async function POST(request) {
    const body = await request.json();
    const { skills } = body;

    if (!skills || typeof skills !== 'string') {
        return NextResponse.json(
            { success: false, error: 'Please provide skills as a comma-separated string.' },
            { status: 400 }
        );
    }

    const added = skills
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
        .map((name) => ({ id: name.toLowerCase().replace(/\s+/g, '-'), name }));

    return NextResponse.json(
        { success: true, message: 'Skills are now managed manually in the UI.', added },
        { status: 201 }
    );
}
