import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  return NextResponse.json({
      world:"hello"
  });
}

export async function GET(req: NextRequest) {
  return NextResponse.json({
      hello:"World"
  });
}

// Others methods like PUT, DELETE, OPTIONS