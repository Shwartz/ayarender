# AI Assistant Workflow Guidelines

## Commit & Push Policy
**CRITICAL: NEVER auto-commit or auto-push changes.**
- Always present changes for user review with `git diff`
- Wait for explicit user approval before ANY git operations
- Let user write their own commit messages and execute commits
- User wants to review and learn from every change

## Communication Style
**Keep explanations SHORT and bullet-pointed.**
- Format: "I did A, to achieve B, because X"
- Avoid long explanations of things user likely knows
- Let user ask follow-up questions for deeper details
- Focus on the 20% that's new/important, not the 70% they know
- Example GOOD: "Added React as devDep → satisfies resend's peer dependency → fixes npm ci on Cloudflare"
- Example BAD: Long paragraph explaining what peer dependencies are, how npm works, etc.

## Code Changes
- Show `git diff` after modifications
- Brief bullet explanation of what changed and why
- Run tests/builds to verify changes work
- If something is complex, say "ask if you want details on X"

## Decision Making
- Suggest alternatives when relevant (e.g., "Cloudflare Email Workers might replace resend later")
- Ask for user input on architectural decisions
- Explain trade-offs briefly, let user decide

## Tool Preferences
- Never auto-install packages without showing what will be added
- Check with user before adding new dependencies
- Prefer showing commands user can run themselves

## Project-Specific
- See technical context in `.github/copilot-instructions.md`
- This is a SvelteKit + Cloudflare Pages project
- User values learning and understanding changes
