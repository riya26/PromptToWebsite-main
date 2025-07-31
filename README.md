**Installation & Running Locally**
Repo Link: https://github.com/riya26/PromptToWebsite-main

To run the project locally on any device:

✅ Installation Steps:

-Clone the repository:
-git clone https://github.com/riya26/PromptToWebsite-main.git
-cd PromptToWebsite-main
-Install dependencies:
-npm install
-Start the development server:
-npm run dev


⚠️ If something doesn’t work:

Ensure Node.js v18+ and npm are installed.
Delete node_modules and package-lock.json, then reinstall:
rm -rf node_modules package-lock.json
npm install
npm run dev

If you're on Mac/Linux and get permission errors, try:
sudo npm install

**Open in Browser Visit:**

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
