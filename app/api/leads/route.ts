import {NextResponse} from "next/server";
import {createClient} from "@/lib/supabase/server";

export async function POST(req:Request){
  try{
    const body=await req.json();
    const required=["name","phone","email"] as const;
    for(const field of required){
      if(!body?.[field]) return NextResponse.json({error:`Missing ${field}`},{status:400});
    }
    const supabase=await createClient();
    const {error}=await supabase.from("leads").insert({
      name:body.name,
      phone:body.phone,
      email:body.email,
      property:body.property||null,
      message:body.message||null
    });
    if(error) return NextResponse.json({error:error.message,code:error.code||null},{status:400});
    return NextResponse.json({ok:true});
  }catch(error){
    return NextResponse.json({error:error instanceof Error?error.message:"Invalid request"},{status:500});
  }
}
