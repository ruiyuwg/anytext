# Create an aspect

Aspects are sets of properties that describe an asset and are defined just like schemas. Asset managers can apply aspects to assets in the library, with mutations, or programmatically during upload. This information stored in aspects is specific to the Media Library. For local metadata, you should use fields in your Studio projects.

In this guide, you'll create a new aspect and deploy it to your Media Library.

Prerequisites:

- `sanity` v3.85.1 or higher

## Configure your aspect directory

In a project with a `sanity.cli.ts` file, edit the configuration to include a `mediaLibrary.aspectsPath`.

**sanity.cli.ts**

```
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3do82whm',
    dataset: 'production'
  },
  mediaLibrary: {
    aspectsPath: 'aspects',
  },
  autoUpdates: true,
})
```

In the example above, the `aspects` directory is relative to the location of the `sanity.cli.ts` file.

> \[!NOTE]
> Where should you place aspect definitions?
> At this time, in order to deploy aspects you need a `sanity.cli.ts` configuration connected to a project and dataset. We're working to improve this experience in the future. For the time being, we recommend manually setting up a configuration file, or working directly in an existing Sanity Studio project.

## Define a new aspect

In the same directory, generate a new aspect with the Sanity CLI.

```sh
sanity media create-aspect
```

This command prompts you for a name and creates a new aspect in your project. Aspect names must be unique and contain only letters, numbers, and hyphens.

Aspects can be a single field or an object containing multiple fields. They can contain strings, objects, arrays, or nearly any [Studio schema type](https://www.sanity.io/docs/studio/schema-types).

> \[!NOTE]
> Aspect schema limitations
> Aspects support most schema types including strings, numbers, booleans, dates, objects, and arrays. However, you can't use executable code in aspect definitions. This includes custom validation functions, custom input or preview components, callback functions like `hidden`, `readOnly`, or `initialValue`, the preview `prepare` function, or functions in `options` or other configuration properties. Aspects also don't support image or file types.

The CLI creates an object-type aspect with a single string field similar to the example below. In this case, we set the name as `copyright`.

**copyright.ts**

```
import {defineAssetAspect, defineField} from 'sanity'

export default defineAssetAspect({
  name: 'copyright',
  title: 'copyright',
  type: 'object',
  fields: [
    defineField({
      name: 'string',
      title: 'Plain String',
      type: 'string',
    }),
  ],
})

```

Modify the aspect with more fields. In this example, we'll update the existing string field and add a `date` type field.

**copyright.ts**

```
import {defineAssetAspect, defineField} from 'sanity'

export default defineAssetAspect({
  name: 'copyright',
  title: 'copyright',
  type: 'object',
  fields: [
    defineField({
      name: 'copyrightHolder',
      title: 'Copyright Holder',
      type: 'string',
    }),
    defineField({
      name: 'copyrightDate',
      title: 'Date',
      type: 'date',
    }),
  ],
})

```

Once deployed, this will look like the following in your Media Library:

![a screenshot of a web page that says aspects copyright copyright holder and date .](https://cdn.sanity.io/images/3do82whm/next/49ac62823d932a41274fce626ea3b92e1e2e02eb-882x806.png)

You can see more aspect examples in the [aspect patterns cheat sheet](https://www.sanity.io/docs/media-library/aspect-patterns).

### Public aspects

If you want to easily query the aspect value from your dataset, unauthenticated, you can mark the aspect as public:

**public.ts**

```
import {defineAssetAspect, defineField} from 'sanity'

export default defineAssetAspect({
  name: 'copyright',
  title: 'copyright',
  type: 'object',
  fields: [
    defineField({
      name: 'copyrightHolder',
      title: 'Copyright Holder',
      type: 'string',
    }),
    defineField({
      name: 'copyrightDate',
      title: 'Date',
      type: 'date',
    }),
  ],
  public: true
})
```

When the aspect definition is marked as public you can then resolve the value from your dataset by using `media::aspect(MEDIA_REF, "ASPECT")`:

**aspect.groq**

```groq
*[_type == "post"] {
  _id,
  title,
  mainImage {
    asset,
    "copyright": media::aspect(media, "copyright")
  }
}
```

## Deploying an aspect

With your aspect defined, it's time to deploy it to your Media Library.

Run the following to deploy a single aspect. Replace `copyright` with your aspect name.

**CLI**

```sh
sanity media deploy-aspect copyright
```

If you make additional changes to the aspect, you can update it by running the `deploy-aspect` command again.

### Delete an aspect

To delete an aspect from your library, run the following command, replacing `copyright` with the name of your aspect.

**CLI**

```sh
sanity media delete-aspect copyright
```

This deletes the aspect from your Library, but will not remove the local definition file.
