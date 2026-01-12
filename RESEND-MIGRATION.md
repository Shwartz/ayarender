# Converting from Nodemailer to Resend

## Step 1: Update Environment Variables

Replace these in your `.env` file:
```env
# OLD (remove these)
GOOGLE_EMAIL=...
GOOGLE_EMAIL_PASSWORD=...

# NEW (add these)
RESEND_API_KEY=re_...
SENDER_EMAIL=noreply@yourdomain.com
RECIPIENT_EMAIL=your@email.com
```

## Step 2: Update `src/lib/emailSetup.server.js`

Replace the entire file with:

```javascript
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY must be set in environment variables.");
}

export const resend = new Resend(RESEND_API_KEY);
```

## Step 3: Update `src/routes/contact/+page.server.ts`

Replace the email sending logic:

```typescript
import { SENDER_EMAIL, RECIPIENT_EMAIL } from "$env/static/private";
import { resend } from "$lib/emailSetup.server.js";
import { superValidate, message, type SuperValidated } from "sveltekit-superforms/server"
import { contactSchema } from '$lib/contactSchema';
import { zod } from 'sveltekit-superforms/adapters';
import type { z } from 'zod';

interface Message { status: 'error' | 'success'; text: string }

type ContactForm = z.infer<typeof contactSchema>;

export const load = async () => {
  const form = await superValidate(zod(contactSchema));
  return { form };
};

export const actions = {
  contactForm: async ({ request }) => {
    const form = await superValidate(request, zod(contactSchema));

    if (!form.valid) {
      return message(form, { 
        status: 'error', 
        text: 'Sorry, I can\'t send the form. There might be missing info for some fields.' 
      });
    }

    const { communication, email, name } = form.data as ContactForm;
    
    // Honeypot check
    if ((name?.length ?? 0) > 0) {
      console.log('honeypot triggered');
      return message(form, { 
        status: 'success', 
        text: 'Thank you for your message!' 
      });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: SENDER_EMAIL,
        to: RECIPIENT_EMAIL,
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
          text: 'Sorry, there was an error sending your message. Please try again later.' 
        });
      }

      console.log('Email sent successfully:', data);
      return message(form, { 
        status: 'success', 
        text: 'Thank you for your message! We\'ll get back to you soon.' 
      });
    } catch (err) {
      console.error('Unexpected error:', err);
      return message(form, { 
        status: 'error', 
        text: 'Sorry, there was an error sending your message. Please try again later.' 
      });
    }
  }
};
```

## Step 4: Install Dependencies

```bash
npm install resend
npm uninstall nodemailer @types/nodemailer @sveltejs/adapter-vercel @vercel/analytics
npm install --save-dev wrangler
```

## Step 5: Set Up Resend

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain (or use their test domain for development)
3. Create an API key
4. Add the API key to your `.env` file and Cloudflare environment variables

## Important Notes

- **SENDER_EMAIL**: Must be a verified domain in Resend (e.g., `noreply@yourdomain.com`)
- **Development**: You can use Resend's test domain initially: `onboarding@resend.dev`
- **Reply-To**: The code includes `replyTo: email` so you can reply directly to the customer
- **Cloudflare**: Works perfectly without any special configuration!

