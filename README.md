# Wallet Ledger

[![Live Demo](https://img.shields.io/badge/View%20Live-Demo-brightgreen)](https://wallet-ledger.vercel.app/)

A modern financial dashboard application built with Next.js, React, and Material-UI.

## 📋 Design Reference

This project is based on the **Fintrack** design from Figma:
- **Figma Design**: [Fintrack Dashboard](https://www.figma.com/design/Eb05Zt2nUUFmJ5kj4whu96/Fintrack?node-id=0-1&p=f&t=nGzipmoXmK8jKk36-0)
- **Design System**: Material-UI with custom theming
- **Color Palette**: Teal-based color scheme (#0D9488, #0F766E)
- **Typography**: Geist font family

## 🚀 Live Demo

Check out the live demo: [Wallet Ledger](https://wallet-ledger.vercel.app/)

## ✨ Features

### 🎨 UI/UX Features
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Interactive Sidebar**: Hover-to-expand navigation with smooth animations
- **Modern Dashboard**: Clean, minimalist design with Material-UI components
- **Smooth Transitions**: Cubic-bezier animations for enhanced user experience
- **Accessibility**: Focus states and keyboard navigation support

### 🏗️ Technical Features
- **Next.js 14**: App Router with TypeScript
- **Material-UI**: Custom themed components with consistent design system
- **State Management**: React hooks for local state management
- **Responsive Layout**: Adaptive sidebar and main content areas
- **Performance Optimized**: Efficient re-renders and smooth animations

### 📊 Dashboard Components
- **Summary Cards**: Financial overview with key metrics
- **Transaction Table**: Sortable and filterable transaction data
- **User Management**: Avatar groups and user collaboration features
- **Navigation**: Collapsible sidebar with hover interactions
- **Status Indicators**: Visual badges for transaction states

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/             # Reusable UI components
│   ├── dashboard/         # Dashboard-specific components
│   ├── layout/           # Layout components (Sidebar, Navigation)
│   └── ui/               # Base UI components
├── data/                 # Sample data and mock APIs
├── hooks/                # Custom React hooks
├── store/                # State management
├── theme/                # Material-UI theme configuration
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wallet-ledger
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Development

- **Hot Reload**: The page auto-updates as you edit files
- **TypeScript**: Full type safety with strict configuration
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting

### Key Files

- `src/app/page.tsx` - Main dashboard page
- `src/components/layout/Sidebar.tsx` - Interactive sidebar component
- `src/components/dashboard/` - Dashboard-specific components
- `src/theme/theme.tsx` - Material-UI theme configuration

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🎨 Design Implementation

### Color Scheme
- **Primary**: `#0D9488` (Teal)
- **Primary Dark**: `#0F766E` (Dark Teal)
- **Background**: `#F8F9FA` (Light Gray)
- **Text**: `#374151` (Gray)
- **Border**: `#E5E7EB` (Light Gray)

### Typography
- **Font Family**: Geist (Vercel's custom font)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Sizes**: 0.875rem (14px) to 2rem (32px)

### Animations
- **Sidebar Expansion**: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- **Hover Effects**: 200ms ease-in-out
- **Content Transitions**: Smooth margin adjustments

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Material Icons
- **Font**: Geist (Optimized with next/font)
- **Deployment**: Vercel

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
