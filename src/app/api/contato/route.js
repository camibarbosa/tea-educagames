import connectDB from "@/app/lib/mongodb";
import Contato from "@/app/models/contato";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();
    await Contato.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["Comentário enviado com sucesso"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Não é possível enviar comentário."] });
    }
  }
}