# Homepage customization

The

The `app.widgets.register` API only works with Strapi 5.13 and above. Trying to call the API with older versions of Strapi will crash the admin panel.
Plugin developers who want to register widgets should either:

- set `^5.13.0` as their `@strapi/strapi` peerDependency in their plugin `package.json`. This peer dependency powers the Marketplace's compatibility check.
- or check if the API exists before calling it:

  ```js
  if ('widgets' in app) {
    // proceed with the registration
  }
  ```

The peerDependency approach is recommended if the whole purpose of the plugin is to register widgets. The second approach makes more sense if a plugin wants to add a widget but most of its functionality is elsewhere.

#### Widget API reference

The `app.widgets.register()` method can take either a single widget configuration object or an array of configuration objects. Each widget configuration object can accept the following properties:

| Property    | Type                   | Description                                           | Required |
|-------------|------------------------|-------------------------------------------------------|----------|
| `icon`      | `React.ComponentType`  | Icon component to display beside the widget title     | Yes      |
| `title`     | `MessageDescriptor`    | Title for the widget with translation support         | Yes      |
| `component` | \`() => Promise

For simplicity, the example below uses data fetching directly inside a useEffect hook. While this works for demonstration purposes, it may not reflect best practices in production.

For more robust solutions, consider alternative approaches recommended in the [React documentation](https://react.dev/learn/build-a-react-app-from-scratch#data-fetching). If you're looking to integrate a data fetching library, we recommend using [TanStackQuery](https://tanstack.com/query/v3/).

**Data management**:

![Rendering and Data management](/img/assets/homepage-customization/rendering-data-management.png)

The green box above represents the area where the user’s React component (from `widget.component` in the [API](#widget-api-reference)) is rendered. You can render whatever you like inside of this box. Everything outside that box is, however, rendered by Strapi. This ensures overall design consistency within the admin panel. The `icon`, `title`, and `link` (optional) properties provided in the API are used to display the widget.

#### Widget helper components reference

Strapi provides several helper components to maintain a consistent user experience across widgets:

| Component        | Description                                         | Usage                                |
|------------------|-----------------------------------------------------|--------------------------------------|
| `Widget.Loading` | Displays a loading spinner and message              | When data is being fetched           |
| `Widget.Error`   | Displays an error state                             | When an error occurs                 |
| `Widget.NoData`  | Displays when no data is available                  | When the widget has no data to show  |
| `Widget.NoPermissions` | Displays when user lacks required permissions | When the user cannot access the widget |

These components help maintain a consistent look and feel across different widgets.
You could render these components without children to get the default wording: \`

```
    ))}
  
```

);
};

````

The following file defines a custom controller that counts all content-types:

```js title="src/plugins/content-metrics/server/src/controllers/metrics.js"
'use strict';
module.exports = ({ strapi }) => ({
  async getContentCounts(ctx) {
    try {
      // Get all content types
      const contentTypes = Object.keys(strapi.contentTypes)
        .filter(uid => uid.startsWith('api::'))
        .reduce((acc, uid) => {
          const contentType = strapi.contentTypes[uid];
          acc[contentType.info.displayName || uid] = 0;
          return acc;
        }, {});
      
      // Count entities for each content type
      for (const [name, _] of Object.entries(contentTypes)) {
        const uid = Object.keys(strapi.contentTypes)
          .find(key => 
            strapi.contentTypes[key].info.displayName === name || key === name
          );
          
        if (uid) {
          // Using the count() method from the Document Service API
          const count = await strapi.documents(uid).count();
          contentTypes[name] = count;
        }
      }
      
      ctx.body = contentTypes;
    } catch (err) {
      ctx.throw(500, err);
    }
  }
});
````

The following file ensures that the metrics controller is reachable at a custom `/count` route:

```js title="src/plugins/content-metrics/server/src/routes/index.js"

  'content-api': {
    type: 'content-api',
    routes: [
      {
        method: 'GET',
        path: '/count',
        handler: 'metrics.getContentCounts',
        config: {
          policies: [],
        },
      },
    ],
  },
};
```

</TabItem>

```
        </Td>
        
        </Td>
      </Tr>
    ))}
  </Tbody>
</Table>
```

);
};

````

The following file defines a custom controller that counts all content-types:

```js title="src/plugins/content-metrics/server/src/controllers/metrics.js"
'use strict';
module.exports = ({ strapi }) => ({
  async getContentCounts(ctx) {
    try {
      // Get all content types
      const contentTypes = Object.keys(strapi.contentTypes)
        .filter(uid => uid.startsWith('api::'))
        .reduce((acc, uid) => {
          const contentType = strapi.contentTypes[uid];
          acc[contentType.info.displayName || uid] = 0;
          return acc;
        }, {});
      
      // Count entities for each content type using Document Service
      for (const [name, _] of Object.entries(contentTypes)) {
        const uid = Object.keys(strapi.contentTypes)
          .find(key => 
            strapi.contentTypes[key].info.displayName === name || key === name
          );
          
        if (uid) {
          // Using the count() method from Document Service instead of strapi.db.query
          const count = await strapi.documents(uid).count();
          contentTypes[name] = count;
        }
      }
      
      ctx.body = contentTypes;
    } catch (err) {
      ctx.throw(500, err);
    }
  }
});
````

The following file ensures that the metrics controller is reachable at a custom `/count` route:

```js title="src/plugins/content-metrics/server/src/routes/index.js"

  'content-api': {
    type: 'content-api',
    routes: [
      {
        method: 'GET',
        path: '/count',
        handler: 'metrics.getContentCounts',
        config: {
          policies: [],
        },
      },
    ],
  },
};
```

# Locales & translations

Source: //cms/admin-panel-customization/locales-translations

# Locales & translations

The Strapi [admin panel](/cms/admin-panel-customization) ships with English strings and supports adding other locales so your editorial team can work in their preferred language. Locales determine which languages appear in the interface, while translations provide the text displayed for each key in a locale.

This guide targets project maintainers customizing the admin experience from the application codebase. All examples modify the configuration exported from `/src/admin/app` file, which Strapi loads when the admin panel builds. You'll learn how to declare additional locales and how to extend Strapi or plugin translations when a locale is missing strings.

## Defining locales

To update the list of available locales in the admin panel, set the `config.locales` array in `src/admin/app` file:

- The `en` locale cannot be removed from the build as it is both the fallback (i.e. if a translation is not found in a locale, the `en` will be used) and the default locale (i.e. used when a user opens the administration panel for the first time).
- The full list of available locales is accessible on

A plugin's key/value pairs are declared independently in the plugin's files at `/admin/src/translations/[language-name].json`. These key/value pairs can similarly be extended in the `config.translations` key by prefixing the key with the plugin's name (i.e. `[plugin name].[key]: 'value'`) as in the following example:

If you need to ship additional translation JSON files—for example to organize large overrides or to support a locale not bundled with Strapi—place them in the `/src/admin/extensions/translations` folder and ensure the locale code is listed in `config.locales`.

Translation changes apply when the admin rebuilds. If updates don’t show, re-run your dev server or rebuild the admin to refresh bundled translations.

# Logos

Source: //cms/admin-panel-customization/logos

# Logos

Strapi's [admin panel](/cms/admin-panel-customization) displays its branding on both the login screen and in the main navigation. Replacing these images allows you to match the interface to your identity. The present page shows how to override the two logo files via the admin panel configuration. If you prefer uploading them directly in the UI, see [Customizing the logo](/cms/features/admin-panel#customizing-the-logo).

The Strapi admin panel displays a logo in 2 different locations, represented by 2 different keys in the admin panel configuration:

| Location in the UI     | Configuration key to update |
| ---------------------- | --------------------------- |
| On the login page      | `config.auth.logo`          |
| In the main navigation | `config.menu.logo`          |

Logos uploaded via the admin panel supersede any logo set through the configuration files.

### Logos location in the admin panel

The logo handled by `config.auth.logo` logo is only shown on the login screen:

![Location of the auth logo](/img/assets/development/config-auth-logo.png)

The logo handled by `config.menu.logo` logo is located in the main navigation at the top left corner of the admin panel:

![Location of Menu logo](/img/assets/development/config-menu-logo.png)

### Updating logos

To update the logos, put image files in the `/src/admin/extensions` folder, import these files in `src/admin/app` and update the corresponding keys as in the following example:

There is no size limit for image files set through the configuration files.

# Theme extension

Source: //cms/admin-panel-customization/theme-extension

# Theme extension

Strapi's [admin panel](/cms/admin-panel-customization) can be displayed either in light or dark mode (see [profile setup](/cms/getting-started/setting-up-admin-panel#setting-up-your-administrator-profile)), and both can be extended through custom theme settings.

To extend the theme, use either:

- the `config.theme.light` key for the Light mode
- the `config.theme.dark` key for the Dark mode

The default

# Customizing the rich text editor

Source: //cms/admin-panel-customization/wysiwyg-editor

# Change the default rich text editor

Strapi's [admin panel](/cms/admin-panel-customization) comes with a built-in rich text editor. To change the default editor, several options are at your disposal:

- You can install a third-party plugin, such as one for CKEditor, by visiting .
- You can create your own plugin to create and register a fully custom WYSIWYG field (see [custom fields documentation](/cms/features/custom-fields)).

When evaluating editors, start with a plugin from the Marketplace for a quick trial, then consider a custom field if you need deeper integration (schema, validation, or custom toolbar behavior).

# Strapi Client

Source: //cms/api/client
