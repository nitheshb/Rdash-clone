import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { issueKey, emailAddress, subject, message }: { issueKey: string, emailAddress: string, subject: string, message: string } = await req.json();

    if (!issueKey || !emailAddress || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Issue key, email address, subject, and message are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER!,
      to: emailAddress,
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: `Email notification sent to ${emailAddress}` }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error sending email notification:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email notification" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
