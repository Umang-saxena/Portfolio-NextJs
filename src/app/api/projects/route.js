import { NextResponse } from 'next/server';
import { portfolioData } from '@/lib/portfolioData';

/* ---------- helpers ---------- */
const isValidUrl = (value) => {
    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
};

const validateProjectData = (data) => {
    const errors = [];

    if (!data.title || data.title.trim().length < 3) {
        errors.push('Title must be at least 3 characters long');
    }

    if (!data.description || data.description.trim().length < 10) {
        errors.push('Description must be at least 10 characters long');
    }

    if (data.githublink && !isValidUrl(data.githublink)) {
        errors.push('GitHub link must be a valid URL');
    }

    if (data.demolink && !isValidUrl(data.demolink)) {
        errors.push('Demo link must be a valid URL');
    }

    return errors;
};

/* ---------- POST /api/projects ---------- */
export async function POST(request) {
    const body = await request.json();

    const validationErrors = validateProjectData(body);
    if (validationErrors.length > 0) {
        return NextResponse.json(
            { success: false, error: 'Validation failed', details: validationErrors },
            { status: 400 }
        );
    }

    return NextResponse.json(
        {
            success: true,
            message: 'Projects are now managed manually in the UI.',
            project: {
                id: body.id || `manual-${Date.now()}`,
                title: body.title.trim(),
                description: body.description.trim(),
                githublink: body.githublink?.trim() || '',
                demolink: body.demolink?.trim() || '',
                technologies: Array.isArray(body.technologies)
                    ? body.technologies.filter((t) => t && t.trim().length > 0)
                    : [],
                createdAt: new Date().toISOString(),
            },
        },
        { status: 201 }
    );
}

/* ---------- GET /api/projects ---------- */
export async function GET(request) {
    return NextResponse.json({ success: true, projects: portfolioData.projects });
}