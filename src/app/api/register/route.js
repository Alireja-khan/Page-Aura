import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const payload = await req.json();
    const result = await dbConnect("text_user").insertOne(payload);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Registration failed" }), { status: 500 });
  }
}
