import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration - temporarily hardcoded for testing
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Vaibhav.100acress@gmail.com', // Hardcoded for testing
    pass: 'wmto yadm tkrk iddq', // Hardcoded for testing
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, number, property } = body

    console.log('Received form data:', { name, number, property })
    
    // Debug environment variables
    console.log('Environment variables check:')
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'SET' : 'NOT SET')
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET' : 'NOT SET')
    console.log('RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL ? 'SET' : 'NOT SET')

    // Validate required fields
    if (!name || !number || !property) {
      console.log('Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('Email credentials found, attempting to send email...')

    // Email content
    const mailOptions = {
      from: 'Vaibhav.100acress@gmail.com', // Hardcoded for testing
      to: 'Vaibhav.100acress@gmail.com', // Hardcoded for testing
      subject: `New Site Visit Request - ${property}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Site Visit Request
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Customer Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 8px 0; color: #6b7280;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone Number:</td>
                <td style="padding: 8px 0; color: #6b7280;">${number}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Interested Property:</td>
                <td style="padding: 8px 0; color: #6b7280;">${property}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-weight: 500;">
              ⏰ Please contact this customer within 24 hours to schedule their site visit.
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This inquiry was submitted from the IREO website contact form.
            </p>
          </div>
        </div>
      `,
    }

    // Send email
    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 