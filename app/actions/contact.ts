import type { ActionFunctionArgs } from 'react-router'
import { sendContactEmail, type ContactFormData } from '../lib/email'

export async function submitContactForm({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData()
    
    // Extract form data
    const contactData: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    console.log('Form data received:', contactData)

    // Basic validation
    if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
      return {
        success: false,
        message: 'All fields are required.',
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contactData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
      }
    }

    console.log('About to send email with config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      // Don't log password
    })

    // Send email
    const result = await sendContactEmail(contactData)
    
    console.log('Email result:', result)
    
    if (result.success) {
      return {
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.',
      }
    } else {
      return {
        success: false,
        message: result.message,
      }
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    }
  }
}