import nodemailer from "nodemailer";
import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from "$env/static/private";

// Ensure that the environment variables are set
if (!GOOGLE_EMAIL || !GOOGLE_EMAIL_PASSWORD) {
  throw new Error("GOOGLE_EMAIL and GOOGLE_EMAIL_PASSWORD must be set in environment variables.");
}

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: GOOGLE_EMAIL,
    pass: GOOGLE_EMAIL_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;
