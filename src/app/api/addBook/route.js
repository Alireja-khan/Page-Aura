import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const payload = await req.json();
    
    // Basic validation
    if (!payload.title || !payload.author) {
      return new Response(JSON.stringify({ error: "Title and author are required" }), { status: 400 });
    }

    // Add timestamp
    const bookWithTimestamp = {
      ...payload,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await dbConnect("books").insertOne(bookWithTimestamp);
    
    return new Response(JSON.stringify({
      success: true,
      insertedId: result.insertedId,
      message: "Book added successfully"
    }), { status: 200 });
    
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add book" }), { status: 500 });
  }
}