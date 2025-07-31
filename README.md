**Installation & Running Locally**

Follow these steps to run the project on any device:

Prerequisites
Make sure you have the following installed:

Node.js (v18 or higher recommended)
npm or pnpm
Git (optional, for cloning)
**
**Steps to Run the Project**
**
1. Clone the Repository
2. git clone https://github.com/riya26/PromptToWebsite-main.git
3. cd PromptToWebsite-main
4. Or download the ZIP and extract it manually.

5. Install Dependencies
6.Using npm:
 on terminal run command:
 * npm install*
  Or using pnpm:

*pnpm install*
7.Run the Development Server
Using npm:

8.npm run dev
Or using pnpm:

9.pnpm dev

Open in Browser
Visit:

http://localhost:3000

server should run on http://localhost:5000


# Prompt-to-Website Generator

An AI-powered tool that generates and deploys websites from natural language prompts.
# PromptToWebsite

✅ Update triggered on Vercel!

✅ Update triggered on Vercel!

## 🎯 How it works:
1. User describes their desired website in plain English
2. AI generates React/Next.js code using OpenAI GPT-4
3. Code is automatically pushed to GitHub
4. Site is deployed to Vercel
5. User receives live URL

## 📁 Project Structure:
```
prompt-to-website/
├── frontend/          # React app for user interface
├── backend/           # Express.js API server
├── templates/         # Base website templates
└── README.md         # This file
```

## 🚀 Tech Stack:
- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Express.js (or Next.js API routes)
- **AI**: OpenAI GPT-4 API
- **Deployment**: GitHub API + Vercel API
- **Hosting**: Vercel

## 📋 Development Phases:
1. ✅ Setup Foundation - Project structure
2. ✅ Build Frontend Interface - User input form
3. ⏳ Build Backend API - Orchestration server
4. ⏳ Code Generation Logic - AI prompt processing
5. ⏳ Deployment Automation - GitHub + Vercel integration
6. ⏳ Connect Everything - End-to-end testing

## 🚀 Current Status:
- ✅ Frontend React app is complete with Next.js + Tailwind CSS
- ✅ User interface includes prompt input, submit button, loading states
- ✅ Mock API integration ready for backend connection
- ✅ Development server running at http://localhost:3000

## 🎯 Features Implemented:
- Large text area for website descriptions
- "Generate Website" button with loading spinner
- Success/error result display
- Example prompts for user guidance
- Responsive design with modern UI
- Clean gradient background and professional styling

## 🎯 Example Usage:
```
Input: "Build me a portfolio site with dark theme"
Output: https://yoursite.vercel.app
``` 
