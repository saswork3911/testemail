# Email API with Cron Job

## Setup:
1. `npm install`
2. Gmail App Password banayein: Google Account > Security > 2-Step Verification > App passwords
3. `.env` file mein apna email aur app password dalein
4. `npm start`

## Usage:
- Manual email: `POST /send-email` with `{to, subject, text}`
- Automatic email: Daily 9 AM (cron job)

## Example:
```bash
curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{"to":"test@example.com","subject":"Test","text":"Hello!"}'
```