import nodemailer from 'nodemailer'

// Email configuration using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    console.log('Attempting to send email with transporter config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER?.slice(0, 5) + '***' // Partially hide email
    })
    // Email to yourself (notification)
    const notificationEmail = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #64f4ab; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #64f4ab; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #25262a; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply email to the sender
    const autoReplyEmail = {
      from: process.env.SMTP_USER,
      to: formData.email,
      subject: `Thank you for contacting me, ${formData.name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #64f4ab; padding-bottom: 10px;">
            Thank You for Getting in Touch!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Hi <strong>${formData.name}</strong>,
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Thank you for reaching out! I've received your message about "<strong>${formData.subject}</strong>" 
            and I'll get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
            <ul style="color: #555; line-height: 1.6;">
              <li>I typically respond within 24-48 hours</li>
              <li>For urgent matters, feel free to call me directly</li>
              <li>I'll review your message and provide a detailed response</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Best regards,<br>
            <strong>Mends Gyan</strong><br>
            Software Developer
          </p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #25262a; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">
              📧 Email: ${process.env.SMTP_USER}<br>
              🌍 Website: Your Portfolio URL
            </p>
          </div>
        </div>
      `,
    }

    // Test transporter first
    console.log('Testing transporter connection...')
    await transporter.verify()
    console.log('Transporter verified successfully')

    // Send both emails
    console.log('Sending notification email...')
    const notificationResult = await transporter.sendMail(notificationEmail)
    console.log('Notification email sent:', notificationResult.messageId)
    
    console.log('Sending auto-reply email...')
    const autoReplyResult = await transporter.sendMail(autoReplyEmail)
    console.log('Auto-reply email sent:', autoReplyResult.messageId)

    return { success: true, message: 'Emails sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email. Please try again.' }
  }
}

// Test email configuration
export async function testEmailConnection() {
  try {
    await transporter.verify()
    return { success: true, message: 'Email configuration is valid!' }
  } catch (error) {
    console.error('Email configuration error:', error)
    return { success: false, message: 'Email configuration is invalid.' }
  }
}