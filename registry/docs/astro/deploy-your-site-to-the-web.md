# Deploy your site to the web

> Tutorial: Build your first Astro blog —
> Connect your tutorial project's GitHub repo to Netlify and deploy to the web

Get ready to…

- Add your GitHub repository as a new Netlify app
- Deploy your Astro site to the web

Here, you will connect your GitHub repository to Netlify. Netlify will use that project to build and deploy your site live on the web every time you commit a change to your code.

We’ll use…

This tutorial will use **Netlify**, but you are welcome to use your preferred hosting service for deploying your site to the internet.

## Create a new Netlify site

[Section titled “Create a new Netlify site”](#create-a-new-netlify-site)

1. Create a free account at [Netlify](https://netlify.com) if you do not already have one.

   Make a note of your username. You will view your dashboard and any sites you create at `https://app.netlify.com/teams/username`

2. Click `Add new project` > `Import an existing project`.

   You will be asked to connect to a Git provider. Choose GitHub and follow the steps onscreen to authenticate your GitHub account. Then, choose your Astro project’s GitHub repository from the list provided.

3. At the final step, Netlify will show you your app’s site settings. The defaults should be correct for your Astro project, so you can scroll down and click `Deploy site`.

Congratulations, you have an Astro website!

## Change your project name

[Section titled “Change your project name”](#change-your-project-name)

On your site’s overview page in Netlify, you will see your randomly-generated project name, and your website URL of the form `https://project-name-123456.netlify.app`. You can change your project name to something more memorable, and this will automatically update your URL.

## Visit your new website

[Section titled “Visit your new website”](#visit-your-new-website)

Click on the URL in your site settings, or type it into a browser window to view your new website.

### Test your knowledge

[Section titled “Test your knowledge”](#test-your-knowledge)

You want to update the home page of your existing website. What steps do you take?

1. I open a terminal, run `create astro`, and then visit my Netlify URL.
2. I change a setting in my Netlify app, then start a new Astro project on astro.new.
3. I make an edit to `index.astro`. I commit and push my changes to GitHub. Netlify will handle the rest!

Submit

## Checklist

[Section titled “Checklist”](#checklist)

- I can view my updated website online.
- I’m ready to get back to coding!

### Resources

[Section titled “Resources”](#resources)

- [A step-by-step guide to deploying on Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) external

# Check in: Unit 2 - Pages

> Tutorial: Build your first Astro blog —
> Create, style, and link to pages posts on your site

Now that you have a working site on the web, it’s time to add pages and posts!

## Looking ahead

[Section titled “Looking ahead”](#looking-ahead)

In this unit, you will:

- Create your first Astro pages with the `.astro` syntax
- Add blog posts with Markdown (`.md`) files
- Style an individual page with `<style>`
- Apply global styles across pages

Along the way, you’ll learn how the **two sections of a `.astro` file** work together to create a page, and how to use variables and conditional rendering on your pages.

## Checklist

[Section titled “Checklist”](#checklist)

- I am ready to make some new pages for my Astro website!
