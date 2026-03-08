# ButterCMS & Astro

> Add content to your Astro project using ButterCMS

[ButterCMS](https://buttercms.com/) is a headless CMS and blog engine that allows you to publish structured content to use in your project.

## Integrating with Astro

[Section titled “Integrating with Astro”](#integrating-with-astro)

Note

For a full blog site example, see the [Astro + ButterCMS Starter Project](https://buttercms.com/starters/astro-starter-project/).

In this section, we’ll use the [ButterCMS SDK](https://www.npmjs.com/package/buttercms) to bring your data into your Astro project. To get started, you will need to have the following:

### Prerequisites

[Section titled “Prerequisites”](#prerequisites)

1. **An Astro project** - If you don’t have an Astro project yet, our [Installation guide](/en/install-and-setup/) will get you up and running in no time.

2. **A ButterCMS account**. If you don’t have an account, you can [sign up](https://buttercms.com/join/) for a free trial.

3. **Your ButterCMS API Token** - You can find your API Token on the [Settings](https://buttercms.com/settings/) page.

### Setup

[Section titled “Setup”](#setup)

1. Create a `.env` file in the root of your project and add your API token as an environment variable:

   .env

   ```ini
   BUTTER_TOKEN=YOUR_API_TOKEN_HERE
   ```

   Tip

   Read more about [using environment variables](/en/guides/environment-variables/) and `.env` files in Astro.

2. Install the ButterCMS SDK as a dependency:

   - npm

     ```shell
     npm install buttercms
     ```

   - pnpm

     ```shell
     pnpm add buttercms
     ```

   - Yarn

     ```shell
     yarn add buttercms
     ```

3. Create a `buttercms.js` file in a new `src/lib/` directory in your project:

   src/lib/buttercms.js

   ```js
   import Butter from "buttercms";


   export const butterClient = Butter(import.meta.env.BUTTER_TOKEN);
   ```

**This authenticates the SDK using your API Token and exports it to be used across your project.**

### Fetching Data

[Section titled “Fetching Data”](#fetching-data)

To fetch content, import this client and use one of its `retrieve` functions.

In this example, we [retrieve a collection](https://buttercms.com/docs/api/#retrieve-a-collection) that has three fields: a short text `name`, a number `price`, and a WYSIWYG `description`.

src/pages/ShopItem.astro

```astro
---
import { butterClient } from "../lib/buttercms";
const response = await butterClient.content.retrieve(["shopitem"]);


interface ShopItem {
  name: string,
  price: number,
  description: string,
}


const items = response.data.data.shopitem as ShopItem[];
---
<body>
  {items.map(item => <div>
    <h2>{item.name} - ${item.price}</h2>
    <p set:html={item.description}></p>
  </div>)}
</body>
```

The interface mirrors the field types. The WYSIWYG `description` field loads as a string of HTML, and [`set:html`](/en/reference/directives-reference/#sethtml) lets you render it.

Similarly, you can [retrieve a page](https://buttercms.com/docs/api/#get-a-single-page) and display its fields:

src/pages/ShopItem.astro

```astro
---
import { butterClient } from "../lib/buttercms";
const response = await butterClient.page.retrieve("*", "simple-page");
const pageData = response.data.data;


interface Fields {
  seo_title: string,
  headline: string,
  hero_image: string,
}


const fields = pageData.fields as Fields;
---
<html>
  <title>{fields.seo_title}</title>
  <body>
    <h1>{fields.headline}</h1>
    <img src={fields.hero_image} />
  </body>
</html>
```

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [Astro + ButterCMS Starter Project](https://buttercms.com/starters/astro-starter-project/)
- The [full ButterCMS API documentation](https://buttercms.com/docs/api/)
- ButterCMS’s [JavaScript Guide](https://buttercms.com/docs/api-client/javascript/)

## Community Resources

[Section titled “Community Resources”](#community-resources)

- Add yours!
