import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export async function GET() {
    try {
        if (!MONGODB_URI) {
            throw new Error('MONGODB_URI not set in environment');
        }
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(MONGODB_URI, { bufferCommands: false });
        }
        return new Response(JSON.stringify({ message: 'Connected to MongoDB!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
} 