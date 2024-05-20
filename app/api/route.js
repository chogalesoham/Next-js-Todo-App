import { NextResponse } from "next/server";
import { connectDB } from "../lib/config/db";
import TodoModel from "../lib/config/models/DotoModel";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(Request) {
  const Todos = await TodoModel.find({});
  return NextResponse.json({ Todos: Todos });
}

export async function POST(Request) {
  const { title, dsccription } = await Request.json();
  await TodoModel.create({
    title,
    dsccription,
  });
  return NextResponse.json({ msg: "Todo Created" });
}

export async function DELETE(Request) {
  const mongoID = await Request.nextUrl.searchParams.get("mongoId");

  await TodoModel.findOneAndDelete(mongoID);
  return NextResponse.json({ msg: "Todo Deleted" });
}
