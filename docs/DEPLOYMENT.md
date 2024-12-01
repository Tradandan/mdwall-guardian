# Deployment Guide

## Option 1: Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Option 2: Deploy to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Keep default settings (they work automatically with Vite)
6. Click "Deploy"

## Option 3: Manual Deployment (AWS)

See [AWS Setup Guide](AWS_SETUP.md) for detailed instructions.