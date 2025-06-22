import { NextResponse } from 'next/server';
import dbConnect from '@/utils/mongoose';
import { Project } from '@/utils/models/Projects';

// Validation function for project data
const validateProjectData = (data) => {
    const errors = [];

    if (!data.title || data.title.trim().length < 3) {
        errors.push('Title must be at least 3 characters long');
    }

    if (!data.description || data.description.trim().length < 10) {
        errors.push('Description must be at least 10 characters long');
    }

    if (!data.image || !isValidUrl(data.image)) {
        errors.push('Valid image URL is required');
    }

    if (data.githublink && !isValidUrl(data.githublink)) {
        errors.push('GitHub link must be a valid URL');
    }

    if (data.demolink && !isValidUrl(data.demolink)) {
        errors.push('Demo link must be a valid URL');
    }

    return errors;
};

// URL validation helper
const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};

export async function POST(request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { title, description, image, githublink, demolink, technologies } = body;

        // Validate the data
        const validationErrors = validateProjectData(body);
        if (validationErrors.length > 0) {
            return NextResponse.json(
                { 
                    error: 'Validation failed', 
                    details: validationErrors 
                },
                { status: 400 }
            );
        }

        // Check if project with same title already exists
        const existingProject = await Project.findOne({ 
            title: { $regex: new RegExp(`^${title}$`, 'i') } 
        });

        if (existingProject) {
            return NextResponse.json(
                { error: 'A project with this title already exists' },
                { status: 409 }
            );
        }

        // Process technologies array
        const processedTechnologies = Array.isArray(technologies) 
            ? technologies.filter(tech => tech && tech.trim().length > 0)
            : [];

        // Create new project
        const project = new Project({
            title: title.trim(),
            description: description.trim(),
            image: image.trim(),
            githublink: githublink ? githublink.trim() : '',
            demolink: demolink ? demolink.trim() : '',
            technologies: processedTechnologies
        });

        await project.save();

        return NextResponse.json(
            { 
                success: true, 
                message: 'Project created successfully', 
                project: {
                    id: project._id,
                    title: project.title,
                    description: project.description,
                    image: project.image,
                    githublink: project.githublink,
                    demolink: project.demolink,
                    technologies: project.technologies,
                    createdAt: project.createdAt
                }
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error creating project:', error);
        
        // Handle specific MongoDB errors
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return NextResponse.json(
                { error: 'Validation failed', details: validationErrors },
                { status: 400 }
            );
        }

        if (error.code === 11000) {
            return NextResponse.json(
                { error: 'A project with this title already exists' },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to create project. Please try again.' },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit')) || 50;
        const page = parseInt(searchParams.get('page')) || 1;
        const sortBy = searchParams.get('sortBy') || 'createdAt';
        const sortOrder = searchParams.get('sortOrder') || 'desc';

        // Validate sort parameters
        const allowedSortFields = ['title', 'createdAt', 'updatedAt'];
        const allowedSortOrders = ['asc', 'desc'];
        
        if (!allowedSortFields.includes(sortBy)) {
            return NextResponse.json(
                { error: 'Invalid sort field' },
                { status: 400 }
            );
        }

        if (!allowedSortOrders.includes(sortOrder)) {
            return NextResponse.json(
                { error: 'Invalid sort order' },
                { status: 400 }
            );
        }

        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

        const skip = (page - 1) * limit;

        const [projects, total] = await Promise.all([
            Project.find({})
                .sort(sortOptions)
                .skip(skip)
                .limit(limit)
                .lean(),
            Project.countDocuments({})
        ]);

        const totalPages = Math.ceil(total / limit);

        return NextResponse.json({
            projects,
            pagination: {
                currentPage: page,
                totalPages,
                totalProjects: total,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
        });

    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json(
            { error: 'Failed to fetch projects' },
            { status: 500 }
        );
    }
} 