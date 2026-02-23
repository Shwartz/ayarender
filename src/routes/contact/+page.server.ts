import { env as svelteEnv } from '$env/dynamic/private';
import { getResend } from "$lib/emailSetup.server";
import { superValidate, message } from "sveltekit-superforms";
import { contactSchema } from '$lib/contactSchema';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions } from './$types';


export const load = async () => {
  // @ts-expect-error - Type incompatibility between sveltekit-superforms and zod adapter
  const form = await superValidate(zod(contactSchema));
  return { form };
};

export const actions: Actions = {
  contactForm: async ({ request, platform }) => {
    // @ts-expect-error - Type incompatibility between sveltekit-superforms and zod adapter
    const form = await superValidate(request, zod(contactSchema));

    if (!form.valid) {
      return message(form, { status: 'error', text: 'Sorry, I can\'t send the form. There might be missing info for some fields.' });
    }

    const { communication, email, name } = form.data as { communication: string; email: string; name: string };

    // console.log('form.data.communication: ', communication, email, name);
    /* This is to catch spammers. Field 'name' is hidden and should not be filled
    * if it is filled, we simply return without sending anything
    **/
    if (name.length > 0) {
      console.log('honeypot');
      return message(form, { status: 'success', text: 'Thank you for your message!' });
    }

    try {
      // Access environment variables
      // - Cloudflare Pages: platform.env (production)
      // - Local dev: svelteEnv from $env/dynamic/private (.env file)
      const senderEmail = platform?.env?.SENDER_EMAIL || svelteEnv.SENDER_EMAIL;
      const recipientEmail = platform?.env?.RECIPIENT_EMAIL || svelteEnv.RECIPIENT_EMAIL;
      const resendApiKey = platform?.env?.RESEND_API_KEY || svelteEnv.RESEND_API_KEY;

      // Validate required env vars
      if (!senderEmail || !recipientEmail) {
        throw new Error('SENDER_EMAIL and RECIPIENT_EMAIL must be set');
      }

      if (!resendApiKey) {
        throw new Error('RESEND_API_KEY must be set');
      }

      // Get Resend instance with the API key
      const resend = getResend(resendApiKey);

      const { data, error } = await resend.emails.send({
        from: senderEmail,
        to: recipientEmail,
        subject: "Ayarender contact form",
        replyTo: email,
        html: `
          <h2>Ayarender Web Form!</h2>
          <p><strong>Client's Email:</strong> ${email}</p>
          <div style='max-width: 600px'>
            ${communication}
          </div>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        return message(form, {
          status: 'error',
          text: "Sorry, can't send for at the moment. Please try later"
        });
      }

      console.log('Email sent successfully:', data);
      return message(form, { status: 'success', text: "Thanks, I'll get back to you soon!" });
    } catch (error) {
      console.error('Email send error:', error);
      return message(form, { status: 'error', text: "Sorry, can't send for at the moment. Please try later" });
    }
  }
}
