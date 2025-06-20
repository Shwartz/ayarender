import { GOOGLE_EMAIL, RECIPIENT_EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";
import { superValidate, message, type SuperValidated } from "sveltekit-superforms/server"
import { contactSchema } from '$lib/contactSchema';
import { zod } from 'sveltekit-superforms/adapters';
import type { z } from 'zod';

interface Message { status: 'error' | 'success'; text: string }

interface Email {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

type ContactForm = z.infer<typeof contactSchema>;

export const load = async () => {
  const form = await superValidate(zod(contactSchema));
  return { form };
};

export const actions = {
  contactForm: async ({ request }) => {
    const form = await superValidate(request, zod(contactSchema));

    if (!form.valid) {
      return message(form, { status: 'error', text: 'Sorry, I can\'t send the form. There might be missing info for some fields.' });
    }

    const subject = "Ayarender contact form";
    const { communication, email, name } = form.data as ContactForm;
    const html = `<h2>Ayarender Web Form!</h2><p>Client's Email: ${email}</p><div style='max-width: 600px'>${communication}</div>`;
    const mailDetails = {
      from: GOOGLE_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: subject,
      text: communication,
      html: html
    };

    console.log('form.data.communication: ', communication, email, name);
    /* This is to catch spammers. Field 'name' is hidden and should not be filled
    * if it is filled, we simply return without sending anything
    **/
    if ((name?.length ?? 0) > 0) {
      console.log('honeypot');
      return message(form, { status: 'error', text: 'Hello, our AI detected spammer.' });
    }

    try {
      const sendEmail = async (mailDetails: Email) => {
        // comment out this promise and uncomment the next one for debugging
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
      return message(form, { status: 'success', text: "Thanks, I'll get back to you soon!" });
    } catch (error) {
      return message(form, { status: 'error', text: "Sorry, can't send for at the moment. Please try later" });
    }
  }
}
