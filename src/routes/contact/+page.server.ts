import { GOOGLE_EMAIL, RECIPIENT_EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";
import { superValidate, message } from "sveltekit-superforms/server"
import { contactSchema } from "../../lib/contactSchema";

interface Message { status: 'error' | 'success'; text: string }

interface Email {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export const load = async (event) => {
  const form = await superValidate(event, contactSchema);
  return {
    form
  };
};
export const actions = {
  contactForm: async (event) => {
    const form = await superValidate<typeof contactSchema, Message>(event, contactSchema);

    if (!form.valid) {
      return message(form, {status: 'error', text: 'Sorry, I can\'t send the form. There might be missing info for some fields.'});
    }

    const subject = "AyaRender contact form";
    const {communication, email} = form.data;
    const html = `<h2>AyaRender Web Form!</h2><p>Email: ${email}</p><pre>${communication}</pre>`;
    const mailDetails = {
      from: GOOGLE_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: subject,
      text: communication,
      html: html
    };

    console.log('form.data.communication: ', communication, email);

    try {
      const sendEmail = async (mailDetails: Email) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(mailDetails, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
        // await new Promise(r => setTimeout(r, 5000));
      };

      await sendEmail(mailDetails);
      return message(form, {status: 'success', text: "Thanks, I'll get back to you soon!"});
    } catch (error) {
      return message(form, {status: 'error', text: "Sorry, can't send for at the moment. Please try later"});
    }
  }
}
