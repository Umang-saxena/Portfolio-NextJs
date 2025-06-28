import dbConnect from '@/utils/mongoose';
import { Experience } from '@/utils/models/Experience';

// GET: Fetch all experiences
export async function GET(request) {
    try {
        await dbConnect();

        const experiences = await Experience.find().sort({ startDate: -1 }).lean();

        return new Response(
            JSON.stringify({ success: true, experiences }),
            { status: 200 }
        );
    } catch (err) {
        console.error('Error fetching experiences:', err);
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to fetch experiences' }),
            { status: 500 }
        );
    }
}

// POST: Add a new experience
export async function POST(request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { company, role, startDate, endDate, description } = body;

        // Basic validation
        if (!company || !role || !startDate) {
            return new Response(
                JSON.stringify({ success: false, error: 'Company, role, and startDate are required.' }),
                { status: 400 }
            );
        }

        const newExperience = await Experience.create({
            company,
            role,
            startDate,
            endDate,
            description
        });

        return new Response(
            JSON.stringify({ success: true, message: 'Experience added successfully', experience: newExperience }),
            { status: 201 }
        );
    } catch (err) {
        console.error('Error adding experience:', err);
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to add experience' }),
            { status: 500 }
        );
    }
}
