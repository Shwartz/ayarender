import { fail } from "@sveltejs/kit";
import type { Actions } from './$types';

export const actions = {
  contactForm: async ({request}) => {
    const data = await request.formData();
    const email = data.get('email');
    const message = data.get('message');
    console.log({email, message});

    if (!email) {
      return fail(400, { email, missing: true });
    }

    if (!message) {
      console.log('fail: ', fail(400, { message, missing: true }));
      return fail(400, { message, missing: true });
    }

    return {success: true, resEmail: email, resMsg: message};
  }
} satisfies Actions;
