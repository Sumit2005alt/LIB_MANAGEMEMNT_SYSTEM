# Omnilexis Frontend

Next.js 14 frontend for the Omnilexis Library Management System.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

3. Start development server:
```bash
npm run dev
```

Visit http://localhost:3000

## Project Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # Auth routes
│   │   ├── (dashboard)/    # Dashboard routes
│   │   └── api/            # API routes
│   ├── components/          # React components
│   ├── lib/                # Utilities and helpers
│   ├── store/              # Redux store
│   └── styles/             # Global styles
├── public/                  # Static assets
└── package.json
```

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Redux Toolkit
