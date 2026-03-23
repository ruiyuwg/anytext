When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Design guidelines for Docker extensions

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

At Docker, we aim to build tools that integrate into a user's existing workflows rather than requiring them to adopt new ones. We strongly recommend that you follow these guidelines when creating extensions. We review and approve your Marketplace publication based on these requirements.

Here is a simple checklist to go through when creating your extension:

- Is it easy to get started?
- Is it easy to use?
- Is it easy to get help when needed?

## [Create a consistent experience with Docker Desktop](#create-a-consistent-experience-with-docker-desktop)

Use the [Docker Material UI Theme](https://www.npmjs.com/package/@docker/docker-mui-theme) and the [Docker Extensions Styleguide](https://www.figma.com/file/U7pLWfEf6IQKUHLhdateBI/Docker-Design-Guidelines?node-id=1%3A28771) to ensure that your extension feels like it is part of Docker Desktop to create a seamless experience for users.

- Ensure the extension has both a light and dark theme. Using the components and styles as per the Docker style guide ensures that your extension meets the [level AA accessibility standard.](https://www.w3.org/WAI/WCAG2AA-Conformance).

  ![Light and dark mode](https://docs.docker.com/extensions/extensions-sdk/design/images/light_dark_mode.webp)

- Ensure that your extension icon is visible both in light and dark mode.

  ![Icon colors in light and dark mode](https://docs.docker.com/extensions/extensions-sdk/design/images/icon_colors.webp)

- Ensure that the navigational behavior is consistent with the rest of Docker Desktop. Add a header to set the context for the extension.

  ![Header that sets the context](https://docs.docker.com/extensions/extensions-sdk/design/images/header.webp)

- Avoid embedding terminal windows. The advantage we have with Docker Desktop over the CLI is that we have the opportunity to provide rich information to users. Make use of this interface as much as possible.

  ![Terminal window used incorrectly](https://docs.docker.com/extensions/extensions-sdk/design/images/terminal_window_dont.webp)

  ![Terminal window used correctly](https://docs.docker.com/extensions/extensions-sdk/design/images/terminal_window_do.webp)

## [Build features natively](#build-features-natively)

- In order not to disrupt the flow of users, avoid scenarios where the user has to navigate outside Docker Desktop, to the CLI or a webpage for example, in order to carry out certain functionalities. Instead, build features that are native to Docker Desktop.

  ![Incorrect way to switch context](https://docs.docker.com/extensions/extensions-sdk/design/images/switch_context_dont.webp)

  ![Correct way to switch context](https://docs.docker.com/extensions/extensions-sdk/design/images/switch_context_do.webp)

## [Break down complicated user flows](#break-down-complicated-user-flows)

- If a flow is too complicated or the concept is abstract, break down the flow into multiple steps with one simple call-to-action in each step. This helps when onboarding novice users to your extension

  ![A complicated flow](https://docs.docker.com/extensions/extensions-sdk/design/images/complicated_flows.webp)

- Where there are multiple call-to-actions, ensure you use the primary (filled button style) and secondary buttons (outline button style) to convey the importance of each action.

  ![Call to action](https://docs.docker.com/extensions/extensions-sdk/design/images/cta.webp)

## [Onboarding new users](#onboarding-new-users)

When creating your extension, ensure that first time users of the extension and your product can understand its value-add and adopt it easily. Ensure you include contextual help within the extension.

- Ensure that all necessary information is added to the extensions Marketplace as well as the extensions detail page. This should include:

  - Screenshots of the extension. Note that the recommended size for screenshots is 2400x1600 pixels.
  - A detailed description that covers what the purpose of the extension is, who would find it useful and how it works.
  - Link to necessary resources such as documentation.
- If your extension has particularly complex functionality, add a demo or video to the start page. This helps onboard a first time user quickly.

  ![start page](https://docs.docker.com/extensions/extensions-sdk/design/images/start_page.webp)

## [What's next?](#whats-next)

- Explore our [design principles](https://docs.docker.com/extensions/extensions-sdk/design/design-principles/).
- Take a look at our [UI styling guidelines](https://docs.docker.com/extensions/extensions-sdk/design/).
- Learn how to [publish your extension](https://docs.docker.com/extensions/extensions-sdk/extensions/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/extensions-sdk/design/design-guidelines.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fextensions-sdk%2fdesign%2fdesign-guidelines%2f\&labels=status%2Ftriage)

Table of contents
