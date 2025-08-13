import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    emailUser: process.env.EMAIL_USER || 'NOT SET',
    emailPass: process.env.EMAIL_PASS ? 'SET (hidden)' : 'NOT SET',
    recipientEmail: process.env.RECIPIENT_EMAIL || 'NOT SET',
    allEnvVars: Object.keys(process.env).filter(key => key.includes('EMAIL'))
  })
} 
