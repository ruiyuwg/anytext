# Add dynamic content about you

> Tutorial: Build your first Astro blog —
> Use variables and conditional rendering on your Astro pages

Now that you have a multi-page website with HTML content, it’s time to add some dynamic HTML!

Get ready to…

- Define your page title in frontmatter, and use it in your HTML
- Conditionally display HTML elements
- Add some content about you

Any HTML file is valid Astro language. But, you can do more with Astro than just regular HTML!

## Define and use a variable

[Section titled “Define and use a variable”](#define-and-use-a-variable)

Open `about.astro`, which should look like this:

src/pages/about.astro

```astro
---
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astro</title>
  </head>
  <body>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/blog/">Blog</a>
    <h1>About Me</h1>
    <h2>... and my new Astro site!</h2>


    <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p>


    <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p>
  </body>
</html>
```

1. Add the following line of JavaScript in the frontmatter script, between the **code fences**:

   src/pages/about.astro

   ```diff
   ---
   +const pageTitle = "About Me";
   ---
   ```

2. Replace both the static “Astro” title and “About Me” heading in your HTML with the dynamic variable `{pageTitle}`.

   src/pages/about.astro

   ```diff

     
       
       
       Astro
       {pageTitle}
     
     
       Home
       About
       Blog
       About Me
       {pageTitle}
       ... and my new Astro site!


       I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!


       This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!
     

   ```

3. Refresh the live preview of your `/about` page.

   Your page text should look the same, and your page title displayed in your browser tab should now read “About Me” instead of “Astro.”

   Instead of typing text directly into HTML tags, you just **defined and then used a variable** in the two sections of your `.astro` file, respectively.

4. Use the same pattern to create a `pageTitle` value to use in `index.astro` (“Home Page”) and `blog.astro` (“My Astro Learning Blog”). Update the HTML of these pages in both places so that your page title matches the heading displayed on each page.

Takeaways

1. **Define** variables in your Astro script using JavaScript or TypeScript expressions.
2. **Use** these variables in your Astro template inside curly braces `{ }` to tell Astro you’re using some JavaScript.

## Write JavaScript expressions in Astro

[Section titled “Write JavaScript expressions in Astro”](#write-javascript-expressions-in-astro)

1. Add the following JavaScript to your frontmatter, between the **code fences**:

   (You can customize the code for yourself, but this tutorial will use the following example.)

   src/pages/about.astro

   ```diff
   ---
   const pageTitle = "About Me";


   +const identity = {
     firstName: "Sarah",
     country: "Canada",
     occupation: "Technical Writer",
     hobbies: ["photography", "birdwatching", "baseball"],
   +};


   +const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
   ---
   ```

2. Then, add the following code to your HTML template, below your existing content:

   src/pages/about.astro

   ```astro
   Here are a few facts about me:

     My name is {identity.firstName}.
     I live in {identity.country} and I work as a {identity.occupation}.
     {identity.hobbies.length >= 2 &&
       Two of my hobbies are: {identity.hobbies[0]} and {identity.hobbies[1]}
     }

   My skills are:

     {skills.map((skill) => {skill})}

   ```

Takeaways

1. Writing an Astro template is very much like **writing HTML**, but you can include JavaScript expressions within it.
2. The Astro frontmatter script contains only JavaScript.
3. You can use all modern JavaScript **logical operators**, **expressions** and **functions** in either section of your `.astro` file. But, curly braces are necessary (only) in the HTML template body.

### Test your knowledge

[Section titled “Test your knowledge”](#test-your-knowledge)

1. A `.astro` file’s frontmatter is written in:

   1. HTML
   2. YAML
   3. JavaScript

   Submit

2. In addition to HTML, Astro syntax allows you to include:

   1. JavaScript logical operators, expressions and functions
   2. YAML
   3. Markdown

   Submit

3. When do you need to write your JavaScript inside curly braces?

   1. When you’re not sure whether it’s correct.
   2. When inside the HTML template section of an Astro component.
   3. Between the code fences in an Astro component.

   Submit

## Conditionally render elements

[Section titled “Conditionally render elements”](#conditionally-render-elements)

You can also use your script variables to choose **whether or not** to render individual elements of your HTML `<body>` content.

1. Add the following lines to your frontmatter script to **define variables**:

   src/pages/about.astro

   ```diff
   ---
   const pageTitle = "About Me";


   const identity = {
     firstName: "Sarah",
     country: "Canada",
     occupation: "Technical Writer",
     hobbies: ["photography", "birdwatching", "baseball"],
   };


   const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];


   +const happy = true;
   +const finished = false;
   +const goal = 3;
   ---
   ```

2. Add the following lines below your existing paragraphs.

   Then, check the live preview in your browser tab to see what is displayed on the page:

   src/pages/about.astro

   ```astro
   {happy && I am happy to be learning Astro!}


   {finished && I finished this tutorial!}


   {goal === 3 ? My goal is to finish in 3 days. : My goal is not 3 days.}
   ```

3. Commit your changes to GitHub before moving on. Do this any time you want to save your work and update your live website.

Tip

Astro’s templating syntax is similar to JSX syntax. If you’re ever wondering how to use your script in your HTML, then searching for how it is done in JSX is probably a good starting point!

### Analyze the Pattern

[Section titled “Analyze the Pattern”](#analyze-the-pattern)

Given the following `.astro` script:

src/pages/about.astro

```astro
---
const operatingSystem = "Linux";
const quantity = 3;
const footwear = "boots";
const student = false;
---
```

For each Astro template expression, can you predict the HTML (if any!) that will be sent to the browser? Click to reveal if you’re right!

1. `<p>{operatingSystem}</p>`

   \[ ] `<p>Linux</p>`

2. `{student && <p>I am still in school.</p>}`

   \[ ] Nothing will display because `student` evaluates to false.

3. `<p>I have {quantity + 8} pairs of {footwear}</p>`

   \[ ] `<p>I have 11 pairs of boots</p>`

4. `{operatingSystem === "MacOS" ? <p>I am using a Mac.</p> : <p>I am not using a Mac.</p>}`

   \[ ] `<p>I am not using a Mac.</p>`

## Checklist

[Section titled “Checklist”](#checklist)

- I can define values in and use values in `.astro` files.
- I can conditionally render HTML elements.

### Resources

[Section titled “Resources”](#resources)

- [Dynamic expressions in Astro](/en/reference/astro-syntax/#jsx-like-expressions)
