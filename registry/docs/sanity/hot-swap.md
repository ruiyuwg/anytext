# Hot swap

*This is a paid feature, available on the Enterprise plan.*

![Flow diagram showcasing a dataset being changed beneath a single Alias used by the frontend codebase](https://cdn.sanity.io/images/3do82whm/next/58a6d2df8dbca8ca674a181dacddb2cd6e668100-590x590.svg)

Dataset Hot Swapping allows a codebase to reference a single, named entity, which can then point to different datasets depending on the need of the project.

By utilizing a Dataset Alias in a codebase, the underlying dataset referenced can be swapped without having to copy or migrate data. When preparing a large content change or a new feature, the data can be prepared in a staging or feature dataset and then Hot Swapped behind the "production" Alias with no code or data changes when ready and approved.

> \[!WARNING]
> Gotcha
> Dataset aliases are **read-only** references to the underlying dataset. Write actions will fail when run against an alias. For example, any Studio deployments must use the underlying dataset name to edit content.

## Using Dataset Hot Swapping

This enterprise feature is included in [the Sanity CLI](https://www.sanity.io/docs/apis-and-sdks/cli). By running a series of commands, an alias can be created, linked, unlinked, or deleted.

```sh
# List all aliases and datasets
sanity dataset list

# Create a new alias
sanity dataset alias create <new-alias> <dataset-to-alias>

# Change what dataset an alias points to
sanity dataset alias link <alias-to-point> <dataset-to-point-to>

# Unlink an alias
sanity dataset alias unlink <alias-to-unlink>

# Delete an Alias
sanity dataset alias delete <alias-to-delete>

# List all aliases and datasets
sanity dataset list
```

## Creating a new alias

### `sanity dataset alias create`

Before a dataset can be swapped, a new alias must be created and referenced by code. To create a new alias for use as a `production` alias run the following code:

```sh
# Creates a dataset alias and prompts for an alias name
sanity dataset alias create

# Creates an unlinked dataset alias named "production"
sanity dataset alias create production

# Creates a dataset alias named "production" linked to "productionDataset"
sanity dataset alias create production productionDataset
```

Anywhere the code references the `productionDataset` it can now be swapped for `~production`.

In order to identify incoming alias requests from a client, an alias should be prefixed with the special character `~`. In this example, even though the `create` command was given an alias name of `production`, when referencing it in requests, the string `~production` should be used.

> \[!WARNING]
> Gotcha
> When creating a new alias, the name should not include the `~` character. This special character is only used to reference the alias in your code.

```javascript
// Example from sanity.js file
// This code creates a connection to the datastore
// and connects to productionDataset through the production alias

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'abc123',
  dataset: '~production',
  apiVersion: '2021-03-25',
  useCdn: false,
})
```

## Hot-swapping the dataset behind an alias

### `sanity dataset alias link`

Once an alias is created, the dataset behind it can be hot-swapped at any time. In this example, the codebase references the `~production` alias. When a new release is ready, a dataset of `featureDataset` can be created via [Cloud Clone](https://www.sanity.io/docs/content-lake/how-to-use-cloud-clone-for-datasets) from the current dataset behind the `production` alias. Any data changes can be made, then the `production` alias can be Hot Swapped to the new `featureDataset`.

```sh
# Hot swap the production Alias to point to the featureDataset
sanity dataset alias link production featureDataset
```

> \[!TIP]
> Protip
> A single dataset can be linked to multiple aliases. When the dataset in this example is linked to the `production` alias, it can still be linked to a `staging` or `development` alias, as well.

## Unlink an alias

### `sanity dataset alias unlink`

When an alias is not currently being used, but should be included in the alias list, it can be unlinked from a dataset.

```sh
# Unlinks the development alias.
# The development alias will still appear 
# in the sanity dataset alias link command
sanity dataset alias unlink development
```

## Delete an alias

### `sanity dataset alias delete`

When an alias is no longer needed, it can be deleted from the alias list. The `delete` command only deletes the alias and not any datasets associated with it.

```sh
# Deletes the outdated alias
sanity dataset alias delete outdated
```

## List all aliases and datasets on a project

### `sanity dataset list`

The `list` command provides a list of all Datasets and aliases associated with the current project and shows the linked dataset for each alias.

```sh
# Returns a list of datasets and aliases with their associated datasets
sanity dataset list
```
