// import { mongooseConnect } from '@/utils/mongoose';
import dbConnect from '@/utils/mongoose'
import { Project } from '@/utils/models/Projects';

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
    try {
        await dbConnect();

        const body = await request.json();
        const { title, description, githublink, demolink, technologies } = body;

        /* validation -------------------------------------------------------- */
        const validationErrors = validateProjectData(body);
        if (validationErrors.length > 0) {
            return new Response(
                JSON.stringify({ success: false, error: 'Validation failed', details: validationErrors }),
                { status: 400 }
            );
        }

        /* duplicate-title check -------------------------------------------- */
        const duplicate = await Project.findOne({ title: { $regex: new RegExp(`^${title}$`, 'i') } });
        if (duplicate) {
            return new Response(
                JSON.stringify({ success: false, error: 'A project with this title already exists' }),
                { status: 409 }
            );
        }

        /* create ----------------------------------------------------------- */
        const processedTech = Array.isArray(technologies)
            ? technologies.filter((t) => t && t.trim().length > 0)
            : [];

        const project = await Project.create({
            title: title.trim(),
            description: description.trim(),
            githublink: githublink?.trim() || '',
            demolink: demolink?.trim() || '',
            technologies: processedTech,
        });

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Project created successfully',
                project: {
                    id: project._id,
                    title: project.title,
                    description: project.description,
                    githublink: project.githublink,
                    demolink: project.demolink,
                    technologies: project.technologies,
                    createdAt: project.createdAt,
                },
            }),
            { status: 201 }
        );
    } catch (err) {
        console.error('Error creating project:', err);

        /* Mongo validation duplicate-key, etc. */
        if (err?.name === 'ValidationError') {
            const details = Object.values(err.errors).map((e) => e.message);
            return new Response(
                JSON.stringify({ success: false, error: 'Validation failed', details }),
                { status: 400 }
            );
        }

        if (err?.code === 11000) {
            return new Response(
                JSON.stringify({ success: false, error: 'A project with this title already exists' }),
                { status: 409 }
            );
        }

        return new Response(
            JSON.stringify({ success: false, error: 'Failed to create project. Please try again.' }),
            { status: 500 }
        );
    }
}

/* ---------- GET /api/projects ---------- */
export async function GET(request) {
    try {
        await dbConnect();

        const projects = await Project.find().sort({ createdAt: -1 }).lean();

        return new Response(
            JSON.stringify({
                success: true,
                projects,
            }),
            { status: 200 }
        );
    } catch (err) {
        console.error('Error fetching projects:', err);
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to fetch projects' }),
            { status: 500 }
        );
    }
}