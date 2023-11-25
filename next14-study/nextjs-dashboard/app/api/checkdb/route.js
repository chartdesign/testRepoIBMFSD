import { dbConnect } from '../../lib/mongoConnect';
import { NextResponse } from 'next/server';

export async function Get() {
  const con = await dbConnect();
  return new NextResponse('connected');
}
