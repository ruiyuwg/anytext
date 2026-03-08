# How can I contribute to the library?

There are multiple ways to contribute even without writing code

## Ways to contribute

- Share your feedback in [GitHub Discussions](https://github.com/mantinedev/mantine/discussions/categories/feedback) –
  we are always happy to hear your thoughts on how to make Mantine better. Most of the new features and components
  are based on the feedback we receive from the community.
- Help others on [Discord](https://discord.gg/wbH82zuWMN) and/or [GitHub Discussions](https://github.com/mantinedev/mantine/discussions). There are usually 10-20 new questions every day,
  you can help people with their issues and questions. While helping others, you will learn yourself and become
  more proficient with React and Mantine.
- Give us a code review. You are welcome to explore `@mantine/*` packages [source code](https://github.com/mantinedev/mantine)
  and provide your feedback on how we can improve it. We are always open to new ideas and suggestions.
- Send us some [kind words](https://github.com/mantinedev/mantine/discussions/categories/kind-words). We usually receive only
  bug reports and feature requests, it is always nice to hear that people enjoy working with Mantine.
- Star the project on [GitHub](https://github.com/mantinedev/mantine). It is a small thing that helps us grow and get more
  people interested in the project.
- [Contribute](/contribute) to the Mantine codebase. We welcome all kinds of contributions: if you do not have much
  experience with React/TypeScript, you can help us improve the documentation to make it more clear and understandable
  for new developers. If you are an experienced React developer, you can help us with open [issues](https://github.com/mantinedev/mantine/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).

## How to contribute to the codebase

- Decide on what you want to contribute.
- If you would like to implement a new feature, discuss it with the maintainer ([GitHub Discussions](https://github.com/mantinedev/mantine/discussions/new) or [Discord](https://discord.gg/wbH82zuWMN)) before jumping into coding.
- After finalizing issue details, as you begin working on the code.
- Run tests with `npm test` and submit a PR once all tests have passed.
- Get a code review and fix all issues noticed by the maintainer.
- If you cannot finish your task or if you change your mind – that's totally fine! Just let us know in the GitHub issue that you created during the first step of this process. The Mantine community is friendly – we won't judge or ask any questions if you decide to cancel your submission.
- Your PR is merged. You are awesome ❤️!

## How to get started with Mantine locally

- Install the [editorconfig](https://editorconfig.org/) extension for your editor.
- Fork the [repository](https://github.com/mantinedev/mantine), then clone or download your fork.
- Run `nvm use` to switch to the Node version specified in `.nvmrc` file ([install nvm](https://github.com/nvm-sh/nvm)).
- Install dependencies with yarn – `yarn`
- Setup project – `npm run setup`
- Build local version of all packages – `npm run build all`
- To start storybook – `npm run storybook`
- To start docs – `npm run docs`
- To rebuild props descriptions – `npm run docs:docgen`

# How that thing is done on mantine.dev website?

Learn how various elements are implemented on mantine.dev website

## mantine.dev website

[Mantine documentation](https://mantine.dev) website is built with Next.js and Mantine.
You can find the source code of the website in the [repository](https://github.com/mantinedev/mantine).
If you are interested how specific part of the website is implemented, you can browse the source code and learn from it.

## How can I build the same footer?

- Give footer fixed position with `position: fixed` and `bottom: 0` properties.
- Create a div element that will contain all content except footer.
- Set `min-height: 100vh` on the content container to make sure that footer is always under by the content.
- Make sure that your content container has background color.
- Done! You have a footer at the bottom of the page.

# How can I add hover styles to an element?

Learn how to add hover classes to an element with CSS modules, &:hover or @mixin hover

## &:hover

The simplest way of adding `:hover` styles to an element is to use the `&` selector:

```scss
// Element.module.css
.element {
  &:hover {
    background-color: red;
  }
}
```

Then import the styles into your component:

```tsx
import { Box } from '@mantine/core';
import styles from './Element.module.css';

export const Element = () => {
  return <Box className={styles.element}>Element</Box>;
};
```

## @mixin hover

If you have [postcss-preset-mantine](https://mantine.dev/styles/postcss-preset/) in your
project, you can use `@mixin hover` to add hover styles. Unlike `&:hover`,
`@mixin hover` will also add styles for touch devices.

```scss
// Import the css file in your component the same way as in &:hover example
.demo {
  @mixin hover {
    color: orange;
  }
}
```

The code above will be transformed into:

```scss
@media (hover: hover) {
  .demo:hover {
    color: orange;
  }
}

@media (hover: none) {
  .demo:active {
    color: orange;
  }
}
```

## Is there a way to add hover styles inline in jsx?

Mantine does not provide a way to add hover styles inline in jsx as a library feature.
However, in your project you can use any third-party styling library that supports
inline styles, for example [styled-components](https://styled-components.com/)
or [emotion](https://emotion.sh/).

# How to call a function when Modal/Drawer closes and animation completes?

How to use transitionProps in Modal/Drawer components

[Modal](https://mantine.dev/core/modal/) and [Drawer](https://mantine.dev/core/drawer/) components
use [Transition](https://mantine.dev/core/transition/) component under the hood to animate
presence. You can use `transitionProps` property to pass props to `Transition` component:

```tsx
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, handlers] = useDisclosure();

  return (
    <Modal
      title="Modal title"
      opened={opened}
      onClose={handlers.close}
      transitionProps={{
        onEntered: () => console.log('Modal opened, animation done'),
        onExited: () => console.log('Modal closed, animation done'),
      }}
    >
      Modal content
    </Modal>
  );
}
```
