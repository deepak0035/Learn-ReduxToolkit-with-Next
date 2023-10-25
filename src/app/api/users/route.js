import Chance from "chance";
import { NextResponse } from "next/server";

export async function GET() {
  const chance = Chance();
  const res = chance.name({ middle: true });
  return NextResponse.json(res);
}
