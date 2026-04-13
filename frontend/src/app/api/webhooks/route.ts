import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Webhook handler will be implemented here
  return NextResponse.json({ message: 'Webhook received' })
}
