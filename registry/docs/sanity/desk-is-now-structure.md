# Desk is now Structure

The version [3.20.0](https://github.com/sanity-io/sanity/releases/tag/v3.20.0) update to Sanity Studio introduced a notable change: the tool previously known as "Desk" has been renamed to "Structure".

You may notice this renaming in the toolbar menu of your studio, as well as in the path segment of your studio URLs.

![Comparison of the studio toolbar and browser address field before and after the change](https://cdn.sanity.io/images/3do82whm/next/ff0863973edd5c2d65c1ed8cf3f106ecdc83cb1f-1024x227.png)

## **Why the Change?**

The "Desk" name suggested a singular, one-size-fits-all approach to content management. As Sanity Studio has grown, so have its capabilities. With features like [Presentation](https://www.sanity.io/blog/introducing-presentation) broadening your content interaction options, **Structure** is a more appropriate and descriptive name that reflects its status as one of the many diverse ways you can shape and organize your content models.

## **For Studio Users**

This update brings a minor yet significant change to your workspace:

- **Toolbar Update**: The studio toolbar label has changed from "Desk" to "Structure". Rest assured, this change is purely cosmetic, with no impact on the functionality you're familiar with.
- **URL Path Update**: The initial path segment of your studio URLs has changed from **/desk** to **/structure**. Existing bookmarks will automatically redirect, so there's no immediate need to update them.

## **For Studio Maintainers**

As of version [3.24.1](https://www.sanity.io/changelog/5784e03f-504d-4f74-a6be-443ad1fd96b6), the `deskTool` has been renamed `structureTool` and is found in `sanity/structure`. In other words, where you'd previously do this:

```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  // ...rest of config
  plugins: [
    deskTool(),
  ]
})
```

You should now update your code as follows:

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  // ...rest of config
  plugins: [
    structureTool(),
  ]
})
```

No rush! Everything will still work as before since we are keeping the previous naming around as valid aliases, but going forth you should get used to the `structureTool`.

> \[!TIP]
> Protip
> The Sanity Command Line Interface has a handy codemod to help you update your code with almost no effort! Run the following command in your studio root directory:
> `npx @sanity/cli codemod deskRename`
> Be sure to check in any local changes to version control *before* running the codemod in case it should fail!

## **Moving Forward**

This renaming is a step towards a more adaptable and intuitive Sanity Studio. We appreciate your flexibility and dedication as we evolve the platform to better meet your needs.

The 'Desk' name suggested a singular, one-size-fits-all approach to content management. As Sanity Studio has grown, so have its capabilities. With features like 'Presentation' broadening your content interaction options, 'Structure' is a more appropriate and descriptive name that reflects its status as one of the many diverse ways you can shape and organize your content models.

```typescript
import defineConfig from 'sanity'
import structureTool from 'sanity/structure'

export default defineConfig( 
  // ...rest of config
  plugins: 
    structureTool(),

 )
```

> \[!TIP]
> Protip
> The Sanity Command Line Interface has a handy codemod to help you update your code with almost no effort! Run the following command in your studio root directory:
> npx @sanity/cli codemod deskRename

# Invalid configuration for cross dataset reference

You may have received this error due to a misconfigured Cross Dataset Reference. See the resources below to ensure your type, or reference to the type, includes the required properties.

#### Learn more about Cross datset references

[Cross Dataset References](https://www.sanity.io/docs/studio/cross-dataset-references)

[Cross Dataset Reference](https://www.sanity.io/docs/studio/cross-dataset-reference-type)
