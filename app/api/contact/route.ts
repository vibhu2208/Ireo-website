import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration - temporarily hardcoded for testing
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'officialhundredacress@gmail.com', // Hardcoded for testing
    pass: 'qiax smom umkl suyh', // Hardcoded for testing
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
      from: 'officialhundredacress@gmail.com', // Hardcoded for testing
      to: 'officialhundredacress@gmail.com', // Hardcoded for testing
      subject: `New Site Visit: ${property} — ${name}`,
      text: `New site visit request\n\nName: ${name}\nPhone: ${number}\nProperty: ${property}\n\nPlease contact the customer within 24 hours.\nCall: ${number}\nWhatsApp: https://wa.me/${number.replace(/\D/g, '')}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #111827;">
          <!-- Preheader (hidden in many clients) -->
          <div style="display:none;opacity:0;visibility:hidden;height:0;width:0;overflow:hidden;mso-hide:all;">
            New site visit request for ${property} — ${name} (${number})
          </div>

          <div style="padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff;">
            <h1 style="margin: 0 0 12px; font-size: 20px; line-height: 1.2; color: #111827;">
              New Site Visit Request
            </h1>
            <p style="margin: 0 0 16px; color: #6b7280;">Please contact this customer within 24 hours.</p>

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-top: 8px;">
              <tbody>
                <tr>
                  <td style="padding: 10px 12px; border: 1px solid #e5e7eb; background:#f9fafb; width: 180px; font-weight: 600;">Name</td>
                  <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border: 1px solid #e5e7eb; background:#f9fafb; font-weight: 600;">Phone</td>
                  <td style="padding: 10px 12px; border: 1px solid #e5e7eb;"><a href="tel:${number}" style="color:#2563eb; text-decoration:none;">${number}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border: 1px solid #e5e7eb; background:#f9fafb; font-weight: 600;">Property</td>
                  <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${property}</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top: 20px; display: flex; gap: 12px;">
              <a href="tel:${number}" style="display:inline-block;padding:10px 14px;border-radius:10px;background:#16a34a;color:#fff;text-decoration:none;font-weight:600;">Call Now</a>
              <a href="https://wa.me/${number.replace(/\D/g, '')}" style="display:inline-block;padding:10px 14px;border-radius:10px;background:#22c55e;color:#fff;text-decoration:none;font-weight:600;">WhatsApp</a>
            </div>

            <p style="margin: 20px 0 0; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 12px;">
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