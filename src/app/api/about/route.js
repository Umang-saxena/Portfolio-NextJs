import dbConnect from '@/utils/mongoose';
import { About } from '@/utils/models/About';

// GET: Fetch all about records or specific record by ID
export async function GET(request) {
    try {
        await dbConnect();

            // Get all records
            const aboutData = await About.findOne().lean();
            return new Response(
                JSON.stringify({ success: true, about: aboutData }),
                { status: 200 }
            )}
        catch (err) {
        console.error('Error fetching about data:', err);
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to fetch about data' }),
            { status: 500 }
        );
    }
}

// POST: Add a new about record
export async function POST(request) {
    try {
        await dbConnect();

        const body = await request.json();
        const {
            name,
            email,
            githublink,
            linkedinlink,
            leetcodelink,
            resumedrivelink,
            phone,
            address,
            image,
            description,
            tagline
        } = body;

        // Basic validation
        if (!name || !email) {
            return new Response(
                JSON.stringify({ success: false, error: 'Name and email are required fields' }),
                { status: 400 }
            );
        }

        const newAbout = await About.create({
            name,
            email,
            githublink,
            linkedinlink,
            leetcodelink,
            resumedrivelink,
            phone,
            address,
            image,
            description,
            tagline
        });

        return new Response(
            JSON.stringify({ success: true, message: 'About record created successfully', about: newAbout }),
            { status: 201 }
        );

    } catch (err) {
        console.error('Error creating about record:', err);
        
        // Handle duplicate email error (if you add unique constraint)
        if (err.code === 11000) {
            return new Response(
                JSON.stringify({ success: false, error: 'Email already exists' }),
                { status: 400 }
            );
        }

        return new Response(
            JSON.stringify({ success: false, error: 'Failed to create about record' }),
            { status: 500 }
        );
    }
}