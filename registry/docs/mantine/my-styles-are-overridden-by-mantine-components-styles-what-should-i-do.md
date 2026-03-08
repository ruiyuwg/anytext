# My styles are overridden by Mantine components styles, what should I do?

Learn how to use CSS layers to control styles order and prevent Mantine components from overriding your styles

## How Mantine styles work

All `@mantine/*` packages that include styles export `@mantine/*/styles.css`
file which includes all the styles for the package.
These files are handled by your framework/build tool (Next.js, Vite, React Router, etc.)
and included in the final bundle.

Most of Mantine styles (99%+) have low specificity (class selectors) to allow
easy customization and overrides.

## Styles overriding conflicts

In some cases, you might experience conflicts when Mantine styles override your
styles. It happens when your styles have the same or lower specificity than
Mantine styles and Mantine styles are imported after your styles. Usually, this
issue can be resolved by changing the import order:

```tsx
// ❌ Wrong order – Mantine styles override your styles
import './styles.css';
import '@mantine/core/styles.css';
```

```tsx
// ✅ Correct order – your styles override Mantine styles
import '@mantine/core/styles.css';
import './styles.css';
```

## CSS layers

Some frameworks/build tools might not allow you to fully control styles order.
This usually happens when the framework has a bug/limitation or when you use
specific features that mess up styles order (for example dynamic components imports).

In this case the only solution is to use [CSS layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer).
The `@layer` CSS at-rule is used to declare a cascade layer and can also be used to define the order of precedence in case of multiple cascade layers.
When styles are wrapped with `@layer` at-rule, their specificity is automatically reduced
compared to regular styles.

In addition to regular styles, `@mantine/*` packages also provide `@mantine/*/styles.layer.css`
in which all selectors are wrapped with `@layer mantine {}`. To use CSS layers in your application,
simply replace `@mantine/*/styles.css` imports with `@mantine/*/styles.layer.css`:

```tsx
import '@mantine/core/styles.layer.css';
```

# How can I submit a template to Mantine documentation?

Learn how to create and submit a template to Mantine documentation

# Submit a template

You are welcome to create and share a template with the community. Templates that you submit
are listed on the [getting started](https://mantine.dev/getting-started/) page.

## What is a template

Template is a GitHub repository that has the following properties:

- It depends on `@mantine/hooks` and `@mantine/core` packages version 7.0.0 or higher
- It has a "Use this template" button
- It has MIT license

Official Mantine templates provide minimal setup for different use cases.
Community templates, on the other hand, can provide more complex setups or
implement specific features that are not available in official templates.
For example, there are no official templates for Mantine + runtime CSS-in-JS libraries,
but there are community templates available to get you started.

Template examples:

- Next.js pages router + MDX + Mantine blog template
- Next.js app router + Mantine + styled-components template
- Vite + Mantine + Emotion template

## How to submit a template

- Make sure that features you want to implement are not available in official templates or other community templates
- Create a repository on GitHub
- Add your template code to the repository
- Go to repository settings and enable the "Template repository" option
- Make sure that your template has all the properties listed above
- Submit your template by creating [an issue on Github](https://github.com/mantinedev/mantine/issues/new/choose)
- After your template is reviewed, it will be added to the [getting started](https://mantine.dev/getting-started/) page

# How can I change Tabs border color?

Learn how to use Styles API with Tabs component

[Tabs](https://mantine.dev/core/tabs) border is added with `::before` on the `list`
element. You can use [Styles API](https://mantine.dev/styles/styles-api) to change
styles of inner elements:

#### Example: TabsBorderColor

```tsx
import { Tabs } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs defaultValue="gallery" classNames={classes}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

# How to use Mantine template on GitHub?

Learn how to create a new repository based on Mantine template

# Templates

Mantine provides a set of templates for most common use cases.
A template is a set of configuration files that are required to
get started with Mantine and a React framework of your choice.
You can find a list of all available templates on the [getting started page](/getting-started).

## Prerequisites

In order to use any of the templates, install the following software:

- [Node.js](https://nodejs.org/en/) version 22 or higher
- [Yarn](https://yarnpkg.com/) version 4 or higher

## Getting started with a template

To get started with one of the templates:

- Open it on GitHub
- Click "Use this template" button
- Click "Create a new repository" in the dropdown
- Enter repository name and click "Create repository from template"
- Clone your new repository
- Install dependencies by running `yarn`
- Start development server by running `yarn dev`/`yarn start` (exact command depends on the framework of the template)

## Without GitHub account

If you do not have a GitHub account, you can download a template as a zip archive:

- Open template on GitHub
- Click "Code" button (it is next to the "Use this template" button)
- Click "Download ZIP"
- Extract downloaded archive
- Install dependencies by running `yarn`
- Start development server by running `yarn dev`/`yarn start` (exact command depends on the framework of the template)
