## Vite + React + TypeScript + Tailwind + React-router-dom + framer-motion + Vercel


# Hype in to healt - your first step to start exercising

[Link to the website.](https://hypeintohealth.vercel.app/)

I did a training app, with some lists suggesting exercises that you can do at home. 
You have the possiblity to add your own exercises saved on local storage. 

## Tech used in this project

-   Vite
-   React
-   React-router-dom
-   TypeScript
-   Tailwind
-   Framer-motion
-   LocalStorage



## What I Learned?

I stumbled on a lot of issues, so debugging with developer tools, and here is where Typescript becomes very powerful when using data, you can see every argument a component needs etc, and if something is missing or wrong it wont push it up to vercel and will give you the errors so you can handle them before it actually is visible. Very good. 😍

I've started learning more about and getting deeper knowledge for the use of Typescript and its benefits and issues it solves. 

Example of one issue i stumbled up on...
### Issue using routes on vercel:
Gives a 404 pages when trying to go to other pages then home /

fixed by adding a vercel.json file with the below directives
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}

Not sold on Tailwind or Bootstrapwas... 
I Like css and sass so to do my own styling feels good, I also like styled components, coming up in a future project 🥳 