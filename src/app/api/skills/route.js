import dbConnect from '@/utils/mongoose';
import { Skills } from '@/utils/models/Skills';

// GET: Fetch all skills
export async function GET(request) {
    try {
        await dbConnect();

        const skills = await Skills.find().sort({ createdAt: -1 }).lean();

        return new Response(
            JSON.stringify({ success: true, skills }),
            { status: 200 }
        );
    } catch (err) {
        console.error('Error fetching skills:', err);
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to fetch skills' }),
            { status: 500 }
        );
    }
}

// POST: Add comma-separated skills
export async function POST(request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { skills } = body;

        if (!skills || typeof skills !== 'string') {
            return new Response(
                JSON.stringify({ success: false, error: 'Please provide skills as a comma-separated string.' }),
                { status: 400 }
            );
        }

        // Split and trim the input string
        const skillArray = skills
            .split(',')
            .map((s) => s.trim())
            .filter((s) => s.length > 0);

        // Prepare for insertion
        const newSkills = skillArray.map((name) => ({ name }));

        // Insert into DB
        await Skills.insertMany(newSkills);

        return new Response(
            JSON.stringify({ success: true, message: 'Skills added successfully', added: newSkills }),
            { status: 201 }
        );
    } catch (err) {
        console.error('Error adding skills:', err);
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to add skills' }),
            { status: 500 }
        );
    }
}
