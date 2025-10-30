import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Check if environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email environment variables are not set');
    return res.status(500).json({ 
      error: 'Email service not configured. Please contact the administrator.',
      details: 'Missing environment variables'
    });
  }

  try {
    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to yourself (receiving the contact form submission)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: 'priyanshurana2228@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">This message was sent from your portfolio website contact form.</p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    };

    // Confirmation email to the sender
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out! - Priyanshu Rana',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14b8a6;">Thank you for contacting me!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>Best regards,<br><strong>Priyanshu Rana</strong></p>
          <p style="color: #6b7280; font-size: 12px;">Database Developer & Software Engineer</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              Email: priyanshurana2228@gmail.com<br>
              LinkedIn: <a href="https://linkedin.com/in/priyanshu-rana-230a152a4" style="color: #14b8a6;">linkedin.com/in/priyanshu-rana-230a152a4</a><br>
              GitHub: <a href="https://github.com/Priyanshu2209" style="color: #14b8a6;">github.com/Priyanshu2209</a>
            </p>
          </div>
        </div>
      `,
      text: `
        Thank you for contacting me!
        
        Hi ${name},
        
        I've received your message and will get back to you as soon as possible.
        
        Your message:
        ${message}
        
        Best regards,
        Priyanshu Rana
        Database Developer & Software Engineer
        
        Email: priyanshurana2228@gmail.com
        LinkedIn: linkedin.com/in/priyanshu-rana-230a152a4
        GitHub: github.com/Priyanshu2209
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToSender);

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send message. Please try again later.',
      details: error.message
    });
  }
}