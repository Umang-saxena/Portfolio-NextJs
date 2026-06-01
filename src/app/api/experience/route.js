import { NextResponse } from 'next/server';
import { portfolioData } from '@/lib/portfolioData';

// GET: Fetch all experiences
export async function GET(request) {
    return NextResponse.json({ success: true, experiences: portfolioData.experience });
}

// POST: Add a new experience
export async function POST(request) {
    const body = await request.json();
    const { company, role, startDate, endDate, description } = body;

    if (!company || !role || !startDate) {
        return NextResponse.json(
            { success: false, error: 'Company, role, and startDate are required.' },
            { status: 400 }
        );
    }

    return NextResponse.json(
        {
            success: true,
            message: 'Experience is now managed manually in the UI.',
            experience: {
                id: `manual-${Date.now()}`,
                company,
                role,
                startDate,
                endDate,
                description,
            },
        },
        { status: 201 }
    );
}
