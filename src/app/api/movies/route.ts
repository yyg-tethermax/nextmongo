import { NextResponse } from "next/server";
import Movie from "@/models/Movie";
import connectDB from "@/lib/connectDB";

export async function GET(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get("page")) || 0;
  const skip = page * 50;
  
  const movies = JSON.parse(JSON.stringify(await Movie.find().skip(skip).limit(50).lean()));
  return NextResponse.json(movies);
}
