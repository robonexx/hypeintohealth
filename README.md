# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Issue using routes on vercel
Gives a 404 pages when trying to go to other pages then home /

fixed by adding a vercel.json file with the below directives
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}