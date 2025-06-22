import { NextResponse } from 'next/server';
import dbConnect from '@/utils/mongoose';
import { Project } from '@/utils/models/Projects';

// URL validation helper
const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

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

// GET single project by ID
export async function GET(request, { params }) {
  try {
    await dbConnect();
    
    const { id } = params;
    
    const project = await Project.findById(id);
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

// PUT (update) project by ID
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    
    const { id } = params;
    const body = await request.json();
    const { title, description, image, githublink, demolink, technologies } = body;

    // Check if project exists
    const existingProject = await Project.findById(id);
    if (!existingProject) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

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

    // Check if another project with same title exists (excluding current project)
    if (title && title !== existingProject.title) {
      const duplicateProject = await Project.findOne({ 
        title: { $regex: new RegExp(`^${title}$`, 'i') },
        _id: { $ne: id }
      });

      if (duplicateProject) {
        return NextResponse.json(
          { error: 'A project with this title already exists' },
          { status: 409 }
        );
      }
    }

    // Process technologies array
    const processedTechnologies = Array.isArray(technologies) 
      ? technologies.filter(tech => tech && tech.trim().length > 0)
      : [];

    // Update project
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title: title ? title.trim() : existingProject.title,
        description: description ? description.trim() : existingProject.description,
        image: image ? image.trim() : existingProject.image,
        githublink: githublink ? githublink.trim() : existingProject.githublink,
        demolink: demolink ? demolink.trim() : existingProject.demolink,
        technologies: processedTechnologies.length > 0 ? processedTechnologies : existingProject.technologies
      },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      message: 'Project updated successfully',
      project: updatedProject
    });

  } catch (error) {
    console.error('Error updating project:', error);
    
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
      { error: 'Failed to update project. Please try again.' },
      { status: 500 }
    );
  }
}

// DELETE project by ID
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    
    const { id } = params;
    
    const project = await Project.findByIdAndDelete(id);
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Project deleted successfully',
      deletedProject: {
        id: project._id,
        title: project.title
      }
    });

  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
} 