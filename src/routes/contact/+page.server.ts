import { GOOGLE_EMAIL, RECIPIENT_EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";
import { superValidate, message } from "sveltekit-superforms/server"
import { contactSchema } from "../../lib/contactSchema";

type Message = { status: 'error' | 'success'; text: string };

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
      return message(form, {status: 'error', text: 'There are some form errors'});
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
      const sendEmail = async (mailDetails) => {
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
      };

      await sendEmail(mailDetails);
      return message(form, {status: 'success', text: 'Thanks, I will get back to you soon!'});
    } catch (error) {
      return message(form, {status: 'error', text: "Sorry, can't send for at the moment. Please try later"});
    }
  }
}
