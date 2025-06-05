This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# Next.js Auth App 📱✨

## 📖 Overview

This is a simple authentication web application built with **Next.js**.  
The app allows users to **sign up**, **sign in**, and view their **profile page** with personalized details (name and email).  

It uses a secure backend with **JWT authentication**, **PostgreSQL** (via **NeonDB**), and **Prisma ORM** for database management. Form validation is handled with **Zod**.

---

## 🛠️ Tech Stack

- **Next.js 14 (App Router)**
- **Prisma ORM**
- **NeonDB (PostgreSQL Database)**
- **JWT (JSON Web Tokens) for authentication**
- **Zod** for form validation
- **Axios** for API requests
- **Tailwind CSS** for UI styling

---

## 📚 Features

- User **Sign Up** with validation and hashed passwords
- User **Sign In** with JWT token-based authentication
- **Profile Page** showing logged-in user's name and email
- API routes for **sign up** and **sign in** inside `app/api/`
- **NeonDB** as cloud-hosted PostgreSQL database
- **Prisma Studio** for database browsing and management
- Form validation via **Zod schema**

---

## 📦 How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
