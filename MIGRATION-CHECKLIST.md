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
- [ ] Sign up at https://resend.com
- [ ] Add and verify your domain (or use onboarding@resend.dev for testing)
- [ ] Create an API key
- [ ] Save the API key securely

## 🔧 Update Environment Variables (TODO)

### Local (.env file)
- [ ] Remove `GOOGLE_EMAIL`
- [ ] Remove `GOOGLE_EMAIL_PASSWORD`
- [ ] Add `RESEND_API_KEY=re_...`
- [ ] Add `SENDER_EMAIL=noreply@yourdomain.com`
- [ ] Add `RECIPIENT_EMAIL=your@email.com`

### Cloudflare Dashboard
- [ ] Add `RESEND_API_KEY` (Production)
- [ ] Add `SENDER_EMAIL` (Production)
- [ ] Add `RECIPIENT_EMAIL` (Production)
- [ ] Add `RESEND_API_KEY` (Preview - optional)
- [ ] Add `SENDER_EMAIL` (Preview - optional)
- [ ] Add `RECIPIENT_EMAIL` (Preview - optional)

## 💻 Update Code Files (TODO)

### src/lib/emailSetup.server.js
- [ ] Replace nodemailer code with Resend
- [ ] See `RESEND-MIGRATION.md` for complete code

### src/routes/contact/+page.server.ts
- [ ] Update imports
- [ ] Replace transporter.sendMail with resend.emails.send
- [ ] See `RESEND-MIGRATION.md` for complete code

## 🧪 Test Locally (TODO)
```bash
npm run build
npm run cf-dev
```

- [ ] Build succeeds without errors
- [ ] Contact form works in cf-dev mode
- [ ] Email sends successfully

## 🚀 Deploy to Cloudflare (TODO)

Choose one method:

### Method A: CLI Deployment
```bash
npm run deploy
```
- [ ] Run deploy command
- [ ] Set environment variables via CLI

### Method B: GitHub Integration (Recommended)
- [ ] Go to Cloudflare Dashboard
- [ ] Create new Pages project
- [ ] Connect to Git repository
- [ ] Set build command: `npm run build`
- [ ] Set build output: `.svelte-kit/cloudflare`
- [ ] Add environment variables
- [ ] Deploy!

## ✅ Verify Deployment (TODO)
- [ ] Site loads correctly
- [ ] Navigation works
- [ ] Static assets load from CDN
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

