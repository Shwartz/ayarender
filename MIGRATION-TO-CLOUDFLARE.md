# Migration from Vercel to Cloudflare - Next Steps

## ✅ Changes Already Made

1. ✅ Updated `svelte.config.js` to use `@sveltejs/adapter-cloudflare`
2. ✅ Removed `@sveltejs/adapter-vercel` from `package.json`
3. ✅ Removed `@vercel/analytics` from `package.json`
4. ✅ Created `wrangler.toml` configuration file
5. ✅ Added deployment scripts to `package.json`

## 🔧 Required Actions

### 1. Install Dependencies
Run the following command to clean up Vercel packages and install Wrangler:

```bash
npm uninstall @sveltejs/adapter-vercel @vercel/analytics
npm install --save-dev wrangler
npm install
```

### 2. Set Up Environment Variables in Cloudflare

Set Resend API key and email addresses as environment variables in Cloudflare Pages. You will need:
RESEND_API_KEY
RECIPIENT_EMAIL

**Set them in Cloudflare Dashboard:**
1. Go to your Cloudflare Pages project
2. Navigate to Settings → Environment Variables
3. Add the variables for both Production and Preview environments

**Or use Wrangler CLI:**
```bash
npx wrangler secret put GOOGLE_EMAIL
npx wrangler secret put GOOGLE_EMAIL_PASSWORD
npx wrangler secret put RECIPIENT_EMAIL
```

### 3. Test Locally

```bash
npm run build
npm run cf-dev
```

This will run your app locally with Cloudflare Workers runtime.

### 4. Deploy to Cloudflare Pages

**Option A: Via Wrangler CLI (recommended for first deployment)**
```bash
npm run deploy
```

**Option B: Connect GitHub Repository**
1. Go to Cloudflare Dashboard → Pages
2. Create a new project
3. Connect your GitHub repository
4. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `.svelte-kit/cloudflare`
5. Add environment variables
6. Deploy

### 5. Set Up Resend Email Service

Resend works perfectly with Cloudflare Workers - no Node.js compatibility flags needed!

**Steps:**
1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain (or use `onboarding@resend.dev` for testing)
3. Create an API key in the Resend dashboard
4. Update your local `.env` file:
   ```env
   RESEND_API_KEY=re_...
   SENDER_EMAIL=noreply@yourdomain.com
   RECIPIENT_EMAIL=your@email.com
   ```
5. Add the same variables to Cloudflare environment variables (see step 2 above)

**Why Resend over nodemailer?**
- ✅ Native HTTP API works perfectly with Cloudflare Workers
- ✅ No Node.js compatibility flags needed - simpler setup!
- ✅ Better email deliverability with proper SPF/DKIM
- ✅ More reliable and easier to debug
- ✅ Free tier: 3,000 emails/month

**Update Your Code:** See `RESEND-MIGRATION.md` for detailed code changes to replace nodemailer with Resend.

### 6. Analytics (Optional)

To replace Vercel Analytics with Cloudflare Web Analytics:
1. Go to Cloudflare Dashboard → Analytics → Web Analytics
2. Enable it for your domain
3. Add the provided script tag to `src/app.html` if needed

Cloudflare Pages automatically provides basic analytics in the dashboard.

## 📝 Important Notes

- **Static Assets**: All files in `/static` will be served from Cloudflare's CDN
- **SSR Routes**: Your contact form (`/contact`) uses server-side rendering and will run on Cloudflare Workers
- **Email Service**: Using Resend works perfectly with Cloudflare Workers - no special configuration needed
- **Environment Variables**: Make sure to add your Resend API key and email addresses in Cloudflare Dashboard

## 🚀 New Available Scripts

- `npm run deploy` - Build and deploy to Cloudflare Pages
- `npm run cf-dev` - Test locally with Cloudflare Workers runtime

## 📚 Documentation

- [SvelteKit Cloudflare Adapter](https://kit.svelte.dev/docs/adapter-cloudflare)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Resend Documentation](https://resend.com/docs)
- [Resend with SvelteKit](https://resend.com/docs/send-with-svelte)

## 📄 Additional Guides

- `RESEND-MIGRATION.md` - Step-by-step guide to update your email code
- `MIGRATION-SUMMARY.md` - Quick reference and overview
- `MIGRATION-CHECKLIST.md` - Complete checklist to track your progress

