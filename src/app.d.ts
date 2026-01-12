// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env?: {
				RESEND_API_KEY?: string;
				SENDER_EMAIL?: string;
				RECIPIENT_EMAIL?: string;
			};
		}
	}
}

export {};
