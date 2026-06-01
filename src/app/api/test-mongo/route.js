export async function GET() {
    return new Response(JSON.stringify({ message: 'MongoDB integration has been removed from this portfolio.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
} 