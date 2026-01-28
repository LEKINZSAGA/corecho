# CoreEcho - Web3 Educational Onboarding Platform

A beginner-friendly educational platform that helps Web2 users understand Web3 fundamentals and choose their path in the ecosystem.

## Overview

CoreEcho is a simple, clean MVP built to help absolute beginners learn Web3 concepts through:
- 12 beginner-friendly lessons in plain English (starting from Web1/Web2 basics)
- Interactive quizzes after each lesson
- Progress tracking via localStorage
- Visual certificate upon completion

**Target User:** Someone who uses WhatsApp, Instagram, Gmail but has ZERO Web3 knowledge and is scared of jargon.

## Tech Stack

- **Vanilla JavaScript** - No frameworks, zero build time
- **HTML5** - Semantic structure
- **Tailwind CSS (CDN)** - Modern utility-first styling
- **localStorage** - Client-side progress persistence

## Features

- 🎓 12 foundational lessons organized into 8 modules:
  - MODULE 1: Understanding the Internet (Web1, Web2)
  - MODULE 2: The Problem Web2 Couldn't Solve (Trust, Double-Spending)
  - MODULE 3: Why Bitcoin Was Created
  - MODULE 4: What is Blockchain?
  - MODULE 5: Why Ethereum Exists (Bitcoin vs Ethereum, Smart Contracts)
  - MODULE 6: What is Web3?
  - MODULE 7: Wallets & Ownership
  - MODULE 8: Careers & Paths in Web3
- ✅ Multiple-choice quizzes with instant feedback after each lesson
- 📊 Progress tracking with visual indicators
- 🎨 Clean, modern UI with ocean wave theme (deep blues to cyan)
- 💾 Automatic progress saving via localStorage
- 📜 Completion certificate with learner's name
- 📱 Fully responsive (mobile, tablet, desktop)
- 🧠 Beginner-first approach: assumes ZERO prior Web3 knowledge

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in any modern browser. No installation needed.

### Option 2: Local Server
```bash
# Using Python 3
python -m http.server 8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080
```

Then visit: `http://localhost:8080`

## Deployment

This is a static site and can be deployed to:
- **Vercel**: Drag and drop the folder
- **Netlify**: Connect to repo or drag and drop
- **GitHub Pages**: Push to repo, enable Pages in settings
- **Any static host**: Upload all files

## File Structure

```
/
├── index.html      # Main app (landing, learn, certificate pages)
├── lessons.js      # Lesson content and quiz data
├── app.js          # Application logic and state management
└── README.md       # This file
```

## How It Works

1. **Landing Page**: User enters their name and starts learning
2. **Learn Page**: 
   - Sidebar shows lesson list with progress indicators
   - Main area displays lesson content
   - Each lesson ends with a quiz
3. **Quizzes**: Multiple-choice questions with instant feedback
4. **Progress**: Automatically saved to localStorage
5. **Certificate**: Displayed upon completing all 7 lessons

## Lessons Included

**MODULE 1: Understanding the Internet**
1. What is Web1? (Read-only internet)
2. What is Web2? (Read + Write, but companies control everything)

**MODULE 2: The Problem Web2 Couldn't Solve**
3. The Trust Problem (Middlemen everywhere)
4. The Digital Money Problem (Double-spending)

**MODULE 3: Why Bitcoin Was Created**
5. Bitcoin Explained Simply (First trustless digital money)

**MODULE 4: What is Blockchain?**
6. Blockchain Basics (Permanent, transparent, public ledger)

**MODULE 5: Why Ethereum Exists**
7. Bitcoin vs Ethereum (Digital gold vs programmable money)
8. Smart Contracts (Self-executing code on blockchain)

**MODULE 6: What is Web3?**
9. Web3 Explained (Read + Write + Own)

**MODULE 7: Wallets & Ownership**
10. What is a Wallet? (Not your keys, not your crypto)

**MODULE 8: Careers & Paths in Web3**
11. Web3 Career Paths (Technical and non-technical roles)
12. Choosing Your Path (Next steps and resources)

## Theme

**Ocean Wave** - Deep blues (#1e3a8a → #0ea5e9) with seafoam accents (#06b6d4) and clean whites. Designed to feel calm, trustworthy, and modern.

## Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Future Enhancements (Out of Scope for MVP)

- Wallet integration for on-chain certificates
- Backend for user accounts
- More advanced lessons and paths
- Community features
- Gamification elements

## License

Open source - feel free to fork and customize.

---

Built in under 48 hours as a lean MVP. Ship fast, iterate later.