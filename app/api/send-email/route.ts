
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(
    "https://smtp-server-871757115753.us-central1.run.app/sendEmail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.SMTP_API_KEY!,
      },
      body: JSON.stringify(body),
    }
  );

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    return NextResponse.json(
      { error: data || "Cloud Run email service error" },
      { status: res.status }
    );
  }

  return NextResponse.json(data);
}
