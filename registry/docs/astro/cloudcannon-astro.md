# CloudCannon & Astro

> Add content to your Astro project using CloudCannon as a CMS

[CloudCannon](https://cloudcannon.com) is a Git-based headless content management system that provides a visual editor for your content and UI components, providing a rich, live editing experience.

Tip

If you’re starting a project from scratch, you can use the [CloudCannon Astro Sendit Template](https://cloudcannon.com/templates/sendit/?ssg=astro) with commonly used CloudCannon features to cut down on setup time.

## Integrating with Astro

[Section titled “Integrating with Astro”](#integrating-with-astro)

This guide will describe the process of configuring CloudCannon as a CMS for Astro using the CloudCannon Site Dashboard.

The Site Dashboard provides you with an organized view of your Astro files and the ability to edit them using:

- A [Data Editor](https://cloudcannon.com/documentation/articles/the-data-editor/) for managing structured data files and markup.
- A [Content Editor](https://cloudcannon.com/documentation/articles/the-content-editor/) for WYSIWYG rich text editing in a minimal view.
- A [Visual Editor](https://cloudcannon.com/documentation/articles/the-visual-editor/) for an interactive preview of your site, allowing you to edit directly on the page.

You can also configure role-based access to a minimal [Source Editor](https://cloudcannon.com/documentation/articles/the-source-editor/), an in-browser code editor for making minor changes to the source code of your files.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

1. A CloudCannon account. If you don’t have an account, you can [sign up with CloudCannon](https://app.cloudcannon.com/register).
2. An existing Astro project stored locally, or on one of CloudCannon’s supported Git providers: GitHub, GitLab, or Bitbucket. If you do not have an existing project, you can start with CloudCannon’s [Astro Starter Template](https://cloudcannon.com/templates/astro-starter/).

## Configure a new CloudCannon Site

[Section titled “Configure a new CloudCannon Site”](#configure-a-new-cloudcannon-site)

The following steps will configure a new CloudCannon Site from your dashboard. This Site will connect to an existing Astro repository and allow you to manage and edit your content with CloudCannon’s WYSIWYG text editor.

1. In your CloudCannon Organization Home page, create a new Site.
2. Authenticate your Git provider and select the Astro repository you want to connect to.
3. Choose a name for your Site, then CloudCannon will create the Site and start syncing your files.
4. Follow CloudCannon’s guided tasks in your Site dashboard for completing your Site setup, including creating a CloudCannon configuration file (`cloudcannon.config.yml`).
5. Configure how CloudCannon looks and behaves for editors by adding configuration to your CloudCannon config file. You can make edits using CloudCannon’s [Configuration Mode](https://cloudcannon.com/documentation/articles/what-is-configuration-mode/), or you can add config manually yourself in a code editor.
6. Turn off Configuration Mode to return to the editing interface for content creators. Your configuration file will be saved back to your repository with the rest of your files.

You can now explore your Site Dashboard to see your Astro site’s content files and edit them with the [Content Editor](https://cloudcannon.com/documentation/articles/what-is-the-content-editor/) (e.g. `.md`, `.mdx`), [Data Editor](https://cloudcannon.com/documentation/articles/what-is-the-data-editor/) (e.g. `.yml`, `.json`), and [Visual Editor](https://cloudcannon.com/documentation/articles/what-is-the-visual-editor/) (e.g. `.astro`) as appropriate.

You may also want to take advantage of some CloudCannon features, such as [organizing your files into collections](#cloudcannon-collections-and-schemas), [creating CloudCannon schemas](#create-a-cloudcannon-schema-for-a-collection), and setting up your project for [visual editing](#configure-visual-editing).

For more detailed instructions, see [CloudCannon’s Getting Started Guide](https://cloudcannon.com/documentation/guides/getting-started-with-cloudcannon/).

## CloudCannon collections and schemas

[Section titled “CloudCannon collections and schemas”](#cloudcannon-collections-and-schemas)

If you use [Astro’s content collections](/en/guides/content-collections/), then you will be familiar with CloudCannon’s concepts of collections (used for organization/navigation in your Site Dashboard) and schemas (used to define the format of new content entries).

Your CloudCannon Site Dashboard allows you to organize your Astro project’s pages and content into collections: groups of related files with a similar format. This allows you to see similar types of content together for ease of editing and makes your content files easy to navigate, sort, and filter.

### Create a CloudCannon schema for a collection

[Section titled “Create a CloudCannon schema for a collection”](#create-a-cloudcannon-schema-for-a-collection)

To ensure that the data properties of your CloudCannon entries match the Zod validation `schema` defined in your content collection, you can create a [CloudCannon schema](https://cloudcannon.com/documentation/articles/what-is-a-schema/) (a blank template document for creating a new entry). Creating a template schema can ensure that any new documents created in CloudCannon will have the properties required by your content collection and avoid type errors in your project. Your CloudCannon schema can also include default values to start new documents, such as an author name for a single-person blog.

The following example will create a CloudCannon schema based on an Astro content collection (`blog`) for blog posts written in Markdown. This schema will be available when [creating a new entry](#creating-a-new-entry) from the CloudCannon “Posts” collection:

1. Create a folder at `.cloudcannon/schemas/` if it does not already exist.

2. Add an existing blank file in this folder to be used as a default blog post template. The name is unimportant, but the file must have the same file extension as your Astro content collection entries (e.g. `post.md`).

3. Provide the necessary frontmatter fields required by your content collection’s schema. You do not need to provide any values for these, but any content you do include will be automatically included when a new entry is created. These are fields that will be available in the sidebar of your Content Editor.

   The following example schema for a blog post has placeholders for the title, author, and date:

   .cloudcannon/schemas/post.md

   ```markdown
   ---
   title:
   author:
   date:
   ---
   ```

4. In your CloudCannon configuration file’s `collections_config` property, add the file path to your schema under the CloudCannon collection under the “Posts” collection.

   cloudcannon.config.yml

   ```diff
   collections_config:
     posts:
       path: content/blog
       name: Posts
       icon: post_add
       +schemas:
         +default:
           +path: .cloudcannon/schemas/post.md
           +name: Blog Post Entry
   ```

## Creating a new entry

[Section titled “Creating a new entry”](#creating-a-new-entry)

In your CloudCannon Site Dashboard, you can create new content using the “Add” button. You will be able to select an entry type from the schemas you have defined in `cloudcannon.config.yml`, depending on which collection you are currently in.

You can also upload files to CloudCannon, or create new files directly in your Astro project. When you save your Site changes, new files created in either location will be synchronized and available in both CloudCannon and your Astro project.

The following example will create a new blog post from the CloudCannon Site Dashboard “Posts” collection using the `post.md` template schema created to satisfy the `blog` Astro content collection:

1. In the CloudCannon Site Dashboard, navigate to the collection representing the kind of content you want to add. For example, navigate to the “Posts” collection to add a new blog post.

2. Use the “Add” button to create a new post. If you have configured CloudCannon’s `post.md` schema, then you can choose the default blog post entry to create a new post.

3. Fill in the necessary fields in the sidebar of your Content Editor (e.g. `title`, `author`, `date`), and post content and save your post.

4. This post is saved locally in CloudCannon and should now be visible from your Site Dashboard in your “Posts” collection. You can view and edit all your individual posts from this dashboard page.

5. When you are ready to commit this new post back to your Astro repository, select “Save” in the Site navigation sidebar from your Site Dashboard. This will show you all unsaved changes made to your site since your last commit back to your repository and allow you to review and select which ones to save or discard.

6. Return to view your Astro project files and pull new changes from git. You will now find a new `.md` file inside the specified directory for this new post, for example:

   - src/

     - content/

       - blog/

         - **my-new-post.md**

7. Navigate to that file in your code editor and verify that you can see the Markdown content you entered. For example:

   ```markdown
   ---
   title: My New Post
   author: Sarah
   date: 2025-11-12
   ---


   This is my very first post created in CloudCannon. I am **super** excited!
   ```

## Rendering CloudCannon content

[Section titled “Rendering CloudCannon content”](#rendering-cloudcannon-content)

Use Astro’s Content Collections API to [query and display your posts and collections](/en/guides/content-collections/#querying-collections), just as you would in any Astro project.

### Displaying a collection list

[Section titled “Displaying a collection list”](#displaying-a-collection-list)

The following example displays a list of each post title, with a link to an individual post page.

src/pages/blog.astro

```astro
---
import { getCollection } from 'astro:content';


const posts = await getCollection('blog');
---
<ul>
  {posts.map(post => (
    <li>
      <a href={`/posts/${post.slug}`}>{post.data.title}</a>
    </li>
  ))}
</ul>
```

### Displaying a single entry

[Section titled “Displaying a single entry”](#displaying-a-single-entry)

To display content from an individual post, you can import and use the `<Content />` component to [render your content to HTML](/en/guides/content-collections/#rendering-body-content):

src/pages/blog/my-first-post.astro

```astro
---
import { getEntry, render } from 'astro:content';


const entry = await getEntry('blog', 'my-first-post');
const { Content } = await render(entry);
---


<main>
  <h1>{entry.data.title}</h1>
  <p>By: {entry.data.author}</p>
  <Content />
</main>
```

For more information on querying, filtering, displaying your collections content, and more, see the full content [collections documentation](/en/guides/content-collections/).

## Deploying CloudCannon + Astro

[Section titled “Deploying CloudCannon + Astro”](#deploying-cloudcannon--astro)

[CloudCannon offers free web hosting](https://cloudcannon.com/documentation/articles/what-is-web-hosting/) as part of all of its plans, which uses Cloudflare under the hood. However, you can host with almost any hosting provider that can deploy from a Git repository.

To deploy your website, visit our [deployment guides](/en/guides/deploy/) and follow the instructions for your preferred hosting provider.

## Configure Visual Editing

[Section titled “Configure Visual Editing”](#configure-visual-editing)

CloudCannon’s [Visual Editor](https://cloudcannon.com/documentation/articles/the-visual-editor/) allows you to see and edit text, images, and other content in a live, interactive preview of your site. These updates can be made using editable regions, data panels, and the sidebar.

Follow [CloudCannon’s guide to set up visual editing](https://cloudcannon.com/documentation/guides/set-up-visual-editing/) (also available in your Site Dashboard). This will show you how to define [editable regions](https://cloudcannon.com/documentation/guides/set-up-visual-editing/an-overview-of-editable-regions/) of your live preview by setting HTML `data-` attributes on DOM elements, or by inserting web components.

For example, the following template creates an editable `author` value that can be updated in the live preview:

```html
<p>By: <editable-text data-prop="author">{author}</editable-text></p>
```

### Visual Editing with components

[Section titled “Visual Editing with components”](#visual-editing-with-components)

CloudCannon allows you to [define Component Editable Regions](https://cloudcannon.com/documentation/guides/set-up-visual-editing/visual-editing-for-components/) for live re-rendering of Astro components in the Visual Editor. This gives you the same interactive editing experience for your Astro components.

1. Install the [`@cloudcannon/editable-regions`](https://github.com/CloudCannon/editable-regions) package.

   - npm

     ```shell
     npm install @cloudcannon/editable-regions
     ```

   - pnpm

     ```shell
     pnpm add @cloudcannon/editable-regions
     ```

   - Yarn

     ```shell
     yarn add @cloudcannon/editable-regions
     ```

2. Add the `editableRegions` integration to your Astro config:

   astro.config.mjs

   ```diff
   import { defineConfig } from 'astro/config';
   +import editableRegions from "@cloudcannon/editable-regions/astro-integration";


   export default defineConfig({
     // ...
     integrations: [editableRegions()],
     // ...
   });
   ```

3. Follow [CloudCannon’s instructions to register your components](https://cloudcannon.com/documentation/guides/set-up-visual-editing/visual-editing-for-components/#register-your-components). This tells CloudCannon that those components should be bundled for client-side use in the Visual Editor.

4. Add the appropriate attributes to your components for visual editing. For example, the following `CTA.astro` component properties, such as description and button color, can be updated in CloudCannon’s Visual Editor:

   src/components/CTA.astro

   ```astro
   ---
   const { description, link, buttonText, buttonColor } = Astro.props;
   ---


   {description}

       {buttonText}

   ```

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [CloudCannon: The Astro CMS](https://cloudcannon.com/astro-cms/)
- [Astro Sendit Template](https://cloudcannon.com/templates/sendit/?ssg=astro)
- Video: [Getting started with Astro and CloudCannon CMS: WYSIWYG blogging](https://www.youtube.com/watch?v=VCbZV-SCr20)
- Video: [Using CloudCannon’s configuration mode](https://www.youtube.com/watch?v=3OOyYcPD46Y)
- Video: [Visually edit your Astro site](https://www.youtube.com/watch?v=RMbPsyJ5Gms)
