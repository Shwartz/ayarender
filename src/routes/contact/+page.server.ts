import transporter from "$lib/emailSetup.server.js";
import type { Actions } from './$types';
import { GOOGLE_EMAIL, RECIPIENT_EMAIL } from "$env/static/private";

export const actions = {
  contactForm: async ({request}) => {
    try {
      const data = await request.formData();
      const email = data.get('email');
      const message = data.get('message');
      const subject = 'AyaRender contact form'
      console.log({ email, message });

      let html = `<h2>AyaRender Web Form!</h2><p>Email: ${email}</p><pre>${message}</pre>`;

      const mailDetails = {
        from: GOOGLE_EMAIL,
        to: RECIPIENT_EMAIL,
        subject: subject,
        text: message,
        html: html,
      };

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

      return {
        success: true,
        resEmail: email,
        resMsg: message
      };
    } catch (error) {
      console.log(error);
      return {error: error}
    }
  }
} satisfies Actions;
