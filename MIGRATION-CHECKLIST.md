# 🎯 Migration Checklist

Use this checklist to complete your migration from Vercel to Cloudflare.

## ✅ Code Changes (DONE)
- [x] Updated `svelte.config.js` to use Cloudflare adapter
- [x] Removed Vercel packages from `package.json`
- [x] Added Resend to `package.json`
- [x] Created `wrangler.toml` configuration
- [x] Updated `.gitignore` for Cloudflare
- [x] Added deployment scripts

## 📦 Install Dependencies (TODO - You Need to Do This)
```bash
npm install resend
npm install --save-dev wrangler
npm uninstall @sveltejs/adapter-vercel @vercel/analytics nodemailer @types/nodemailer
npm install
```

- [x] Install resend
- [x] Install wrangler
- [x] Uninstall Vercel/nodemailer packages
- [x] Run npm install

## 📧 Set Up Resend (TODO)
- [x] Sign up at https://resend.com
- [x] Add and verify your domain (or use onboarding@resend.dev for testing)
- [x] Create an API key
- [x] Save the API key securely

## 🔧 Update Environment Variables (TODO)

### Local (.env file)
- [x] Remove `GOOGLE_EMAIL`
- [x] Remove `GOOGLE_EMAIL_PASSWORD`
- [x] Add `RESEND_API_KEY=re_...`
- [x] Add `SENDER_EMAIL=noreply@yourdomain.com`
- [x] Add `RECIPIENT_EMAIL=your@email.com`

### Cloudflare Dashboard
- [x] Add `RESEND_API_KEY` (Production)
- [x] Add `SENDER_EMAIL` (Production)
- [x] Add `RECIPIENT_EMAIL` (Production)

## 💻 Update Code Files (TODO)

### src/lib/emailSetup.server.js
- [x] Replace nodemailer code with Resend
- [x] See `RESEND-MIGRATION.md` for complete code

### src/routes/contact/+page.server.ts
- [x] Update imports
- [x] Replace transporter.sendMail with resend.emails.send
- [x] See `RESEND-MIGRATION.md` for complete code

## 🧪 Test Locally (TODO)
```bash
npm run build
npm run cf-dev
```

- [x] Build succeeds without errors
- [x] Contact form works in cf-dev mode
- [x] Email sends successfully

## 🚀 Deploy to Cloudflare (TODO)

Choose one method:

### Method A: CLI Deployment
```bash
npm run deploy
```
- [x] Run deploy command
- [x] Set environment variables via CLI

### Method B: GitHub Integration (Recommended)
- [x] Go to Cloudflare Dashboard
- [x] Create new Pages project
- [x] Connect to Git repository
- [x] Set build command: `npm run build`
- [x] Set build output: `.svelte-kit/cloudflare`
- [x] Add environment variables
- [x] Deploy!

## ✅ Verify Deployment (TODO)
- [x] Site loads correctly
- [x] Navigation works
- [x] Static assets load from CDN
- [ ] Contact form submits successfully
- [ ] Email is received
- [ ] Check Cloudflare Analytics

## 🗑️ Clean Up Vercel (TODO)
- [ ] Delete project from Vercel dashboard (after verifying Cloudflare works)
- [ ] Update DNS if you used Vercel domains
- [ ] Remove any Vercel-specific environment variables

## 📚 Documentation
- Read `MIGRATION-SUMMARY.md` for overview
- Read `MIGRATION-TO-CLOUDFLARE.md` for detailed Cloudflare setup
- Read `RESEND-MIGRATION.md` for email implementation details

---

**Estimated Time:** 20-30 minutes

**Key Benefit:** Your site will be faster (Cloudflare's global CDN) and you'll have better email deliverability with Resend!

