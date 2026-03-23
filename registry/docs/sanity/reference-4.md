# Reference

The `plugin` configuration property accepts an array of plugin definitions. The plugin configuration accepts most of the same properties as the workspace config API, the notable exceptions being `dataset`, `projectId`,  `auth` and `theme`.

> \[!TIP]
> Protip
> While entirely optional, wrapping your plugin configuration object with the `definePlugin()`-helper function (exported from 'sanity') will make most editors show helpful type information and autocomplete suggestions even if you're not using TypeScript!
> The helper can also accept a function that returns a plugin configuration object. This allows you to make the plugin configurable, by passing arguments to the plugin configuration factory. For example: `definePlugin((options) => ({ ... }))`, where options are configuration options you want to use to allow end-users to modify the plugin.

```javascript
import { definePlugin } from 'sanity'

export const previewUrlPlugin = definePlugin({
  name: 'preview-url-plugin'
  document: {
    productionUrl: async (prev, { document }) => {
      const slug = document.slug?.current;
			return slug ? ‘https://some-custom-url.xyz/${slug}’ : prev
    }
	}
})
```

## Properties

#### Properties

| Property | Description |
| --- | --- |
| name \* | Unique identifier for the plugin |
| document | Accepts custom components for document actions and badges, as well as a custom productionUrl resolver and default configuration for new documents. Read more about the document API. |
| form | Extensions / customizations to the studio forms. Accepts configurations for image and file asset sources as well as custom components to override the default studio rendering. Read more about the form API. |
| plugins | Studio plugins - takes an array of plugin declarations that can be called with or without a configuration object. Read more about plugins. |
| tools | Studio tools – takes an array of tool declarations that can be called with or without a configuration object. Read more about the tool API. |
| schema | Schema definition - takes an array of types and an optional array of templates (initial value templates). While defining a schema is not required, there are few things inside the studio that works without one. Read more about the schema API. |
| studio | Accepts a components object which will let you override the default rendering of certain bits of the studio UI. Read more about studio components. |
| title | Human-readable name for the plugin |
| onUncaughtError | Accepts a callback function containing an error: Error and and errorInfo: ErrorInfo arguments. Commonly used by plugin developers to implement customized error handling, external logging, and telemetry. |
