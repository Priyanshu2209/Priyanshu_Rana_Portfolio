import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email environment variables are not set');
    return res.status(500).json({ error: 'Email service not configured.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const accent = '#c9a961';

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'priyanshurana2228@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1f;">
          <h2 style="color: ${accent}; font-weight: 600;">New message from your portfolio</h2>
          <div style="background: #f7f6f3; padding: 24px; border-radius: 10px; margin: 20px 0; font-family: Arial, sans-serif;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p style="margin-top: 16px;"><strong>Message:</strong></p>
            <p style="background: #fff; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out — Priyanshu Rana',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1f;">
          <h2 style="color: ${accent}; font-weight: 600;">Thank you for getting in touch</h2>
          <p style="font-family: Arial, sans-serif;">Hi ${name},</p>
          <p style="font-family: Arial, sans-serif;">I&apos;ve received your message and will get back to you as soon as I can.</p>
          <div style="background: #f7f6f3; padding: 24px; border-radius: 10px; margin: 20px 0; font-family: Arial, sans-serif;">
            <p><strong>Your message:</strong></p>
            <p style="background: #fff; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-family: Arial, sans-serif;">Best regards,<br/><strong>Priyanshu Rana</strong><br/>
          <span style="color: #71717a;">Data Analyst &amp; Database Developer</span></p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
}