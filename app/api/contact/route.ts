import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
export async function POST(req: Request) {
	const body = await req.json()
	const { name, email, company, phone, projectType, budget, message } = body

	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_SERVER,
		port: Number.parseInt(process.env.EMAIL_PORT || "587"),
		secure: false,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	})

	const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: process.env.EMAIL_TO,
		subject: `New Contact Form Submission from ${name}`,
		text: `
      Name: ${name}
      Email: ${email}
      Company: ${company || "N/A"}
      Phone: ${phone}
      Project Type: ${projectType}
      Budget: ${budget}
      Message: ${message}
    `,
		html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
	}

	try {
		await transporter.sendMail(mailOptions)
		return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
	} catch (error) {
		console.error("Error sending email:", error)
		return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
	}
}


