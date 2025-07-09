# Authentication & Dashboard - Task

✅ **Tech Stack**:  
- Next.js (App Router)  
- TypeScript  
- SCSS Module  

✅ **Pages**:
- `/auth`: ورود با شماره تلفن (تأیید 11 رقم)
- `/dashboard`: نمایش بعد از ورود، بررسی وجود user در localStorage

✅ **Data**:
- `api.json` located in `/public/api.json` is used for fake user info

📦 Components:
- `Input`: with validation for 11 digits
- `Button`: with disabled/loading states

📍 On successful login:
- user info is saved in `localStorage`
- then redirected to `/dashboard`

---

⌛ Deadline: 24 hours  
🔗 Link to Demo: (you can deploy to Vercel if you want)  


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://task-1h1u.vercel.app/auth) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
