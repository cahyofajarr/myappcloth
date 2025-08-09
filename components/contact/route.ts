import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

export async function POST(req: Request) {
  const data = await req.json();
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
  }

  // simulasi proses (kirim email, simpan DB, dll.)
  await new Promise((r) => setTimeout(r, 400));

  return NextResponse.json({ ok: true });
}
