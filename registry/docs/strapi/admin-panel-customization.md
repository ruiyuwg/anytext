# Admin panel customization

The **front-end part of Strapi**  is called the admin panel. The admin panel presents a graphical user interface to help you structure and manage the content that will be accessible through the Content API. To get an overview of the admin panel, please refer to the [Getting Started > Admin panel](/cms/features/admin-panel) page.

From a developer point of view, Strapi's admin panel is a React-based single-page application that encapsulates all the features and installed plugins of a Strapi application.

Admin panel customization is done by tweaking the code of the `src/admin/app` file or other files included in the `src/admin` folder (see [project structure](/cms/project-structure)). By doing so, you can:

- Customize some parts of the admin panel to better reflect your brand identity (logos, favicon) or your language,
- Replace some other parts of the admin panel, such as the Rich text editor and the bundler,
- Extend the theme or the admin panel to add new features or customize the existing user interface.

In addition to supported customizations detailed in this section, you can go further and create plugins that tap into the [Admin Panel API](/cms/plugins-development/admin-panel-api).

## General considerations

Before updating code to customize the admin panel:

- Rename the default `app.example.tsx|js` file into `app.ts|js`.
- Create a new `extensions` folder in `/src/admin/`.
- If you want to see your changes applied live while developing, ensure the admin panel server is running (it's usually done with the `yarn develop` or `npm run develop` command if you have not changed the default [host, port, and path](/cms/configurations/admin-panel#admin-panel-server) of the admin panel).

Most basic admin panel customizations will be done in the `/src/admin/app` file, which includes a `config` object.

Any file used by the `config` object (e.g., a custom logo) should be placed in a `/src/admin/extensions/` folder and imported inside `/src/admin/app.js`.

This will replace the folder's content located at `./build`. Visit

## Basic example

The following is an example of a basic customization of the admin panel:

- You can see the full translation keys, for instance to change the welcome message, [on GitHub](https://github.com/strapi/strapi/blob/develop/packages/core/admin/admin/src/translations).
- Light and dark colors are also found [on GitHub](https://github.com/strapi/design-system/tree/main/packages/design-system/src/themes).

# Admin panel bundlers

Source: //cms/admin-panel-customization/bundlers

# Admin panel bundlers

Strapi's [admin panel](/cms/admin-panel-customization) is a React-based single-page application that encapsulates all the features and installed plugins of a Strapi application. 2 different bundlers can be used with your Strapi 5 application, [Vite](#vite) (the default one) and [webpack](#webpack). Both bundlers can be configured to suit your needs.

For simplification, the following documentation mentions the `strapi develop` command, but in practice you will probably use its alias by running either `yarn develop` or `npm run develop` depending on your package manager of choice.

## Vite

In Strapi 5,

## Webpack

In Strapi 5, the default bundler is Vite. To use

# Admin panel extension

Source: //cms/admin-panel-customization/extension

# Admin panel extension

Strapi's [admin panel](/cms/admin-panel-customization) is a React-based single-page application that encapsulates all the features and installed plugins of a Strapi application. If the [customization options](/cms/admin-panel-customization#available-customizations) provided by Strapi are not enough for your use case, you will need to extend Strapi's admin panel.

Extending Strapi's admin panel means leveraging its React foundation to adapt and enhance the interface and features according to the specific needs of your project, which might imply creating new components or adding new types of fields.

There are 2 use cases where you might want to extend the admin panel:

- As a Strapi plugin developer, you want to develop a Strapi plugin that extends the admin panel **everytime it's installed in any Strapi application**.

  👉 This can be done by taking advantage of the [Admin Panel API for plugins](/cms/plugins-development/admin-panel-api).

- As a Strapi developer, you want to develop a unique solution for a Strapi user who only needs to extend a specific instance of a Strapi application.

  👉 This can be done by directly updating the `/src/admin/app` file, which can import any file located in `/src/admin/extensions`.

* If you're searching for ways of replacing the default Rich text editor, please refer to the [corresponding page](/cms/admin-panel-customization/wysiwyg-editor).
* The  also provide extensive additional information on developing for Strapi's admin panel.

# Favicon

Source: //cms/admin-panel-customization/favicon

# Favicon

Strapi's [admin panel](/cms/admin-panel-customization) displays its branding on various places, including the [logo](/cms/admin-panel-customization/logos) and the favicon. Replacing these images allows you to match the interface and application to your identity.

There are 2 approaches to replacing the favicon:

- Replace the `favicon.png` file at the root of a Strapi project
- Edit the [`strapi::favicon` middleware configuration](/cms/configurations/middlewares#favicon) with the following code:

  ```js title="/config/middlewares.js"
  // …
  {
    name: 'strapi::favicon',
    config: {
      path: 'my-custom-favicon.png',
    },
  },
  // …
  ```

Once done, rebuild, launch and revisit your Strapi app by running `yarn build && yarn develop` in the terminal.

Make sure that the cached favicon is cleared. It can be cached in your web browser and also with your domain management tool like Cloudflare's CDN.

# Homepage customization

Source: //cms/admin-panel-customization/homepage
