import { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    let { email } = await req.json();

    console.log(email);
    console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    // Use service_role key (never expose to client)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    email = "usamadevio@gmail.com";
    const { data, error } = await supabase.auth.admin.inviteUserByEmail(email);
    console.log(data);

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (e: any) {
    console.log(e);
    console.log(e.message);
    return Response.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
