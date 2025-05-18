# messaging-app

Web app that allows users to send messages to each other

## 📘 Project Introduction

This project is designed to strengthen technical proficiency in building a secure web messaging app:

- **Authentication & Authorization** via Passport
- **Role-Based Access Control**

It supports one front-end:

- Web interface to send and receive messages

> ⚠️ **Note**: As the front end is hosted on GitHub Pages using React Router, directly accessing nested routes (e.g., `/send`) may lead to a 404 error. Please use the navigation within the site.

## 🚀 Live Demo

- **Front End (GitHub Pages):** [https://www.amalk.au/messaging-app](https://www.amalk.au/messaging-app)
- **Database (Neon):** [https://neon.tech/](https://neon.tech/)
- **Backend (Render):** []()
  > Note: Free hosting tiers may cause delays of up to 50 seconds on first load.

---

## 💻 Source Code

- **Main GitHub Repository:** [Main GitHub Repository](https://github.com/amaldevelops/messaging-app)
- **Front End Code:** [Front End Source Code](https://github.com/amaldevelops/messaging-app/tree/main/frontend)
- **Back End Code:** [Back End Source Code](https://github.com/amaldevelops/messaging-app/tree/main/backend)

---

## 🧱 Tech Stack

### Front End

- JavaScript, React, Vite, HTML, CSS

#### Message Web App

- Messages (create, edit, delete)

### Back End

- Node.js, Express, PostgreSQL, Prisma, Postman
- REST API with JWT auth
- Database interaction via Prisma

## ⚙️ Deployment Guide

### Local Setup

```bash
git clone git@github.com:amaldevelops/messaging-app.git

# Front End
cd frontend
npm install

# Back End
cd ../backend
npm install
npx prisma generate
npx prisma db push
npm run seed  # (Optional)
```