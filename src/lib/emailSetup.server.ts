import { Resend } from 'resend';

const resendInstances = new Map<string, Resend>();

/**
 * Get or create the Resend client instance
 * This uses lazy initialization to ensure env vars are loaded
 * @param apiKey - The Resend API key
 */
export function getResend(apiKey: string): Resend {
  if (!apiKey) {
    throw new Error("RESEND_API_KEY must be provided");
  }

  // Cache instances by API key to avoid recreating
  if (!resendInstances.has(apiKey)) {
    resendInstances.set(apiKey, new Resend(apiKey));
  }

  return resendInstances.get(apiKey)!;
}

