# Datasets

A dataset is a collection of JSON documents that can be of different types and have references to each other. You can think of a dataset as a “database” where all of your content is stored, whereas the document‘s types would constitute “tables”. Using GROQ or GraphQL you can always query and join data across documents within a dataset, but not across them. Typical applications of datasets are:

- operate with different environments for testing, staging, and production
- localization and segmentation across all content types
- different purpose content, but with same user access and billing

```
https://<projectId>.api.sanity.io/v2021-06-07/data/query/<dataset>?query=*
```

You can also specify which dataset to use with the [client libraries](https://www.sanity.io/docs/client-libraries) (configured when initializing a client) and [Sanity Studio](https://www.sanity.io/docs/sanity-studio) (configured in [sanity.config.ts](https://www.sanity.io/docs/studio/config-api-reference) or using [environment variables](https://www.sanity.io/docs/studio/environment-variables)).

![Explainer: Projects, Users, Datasets](https://www.youtube.com/watch?v=hgMl5dofhoU)

## Dataset management

Datasets can be created and managed using the `sanity` [command-line tool](https://www.sanity.io/docs/cli-reference/dataset), e.g. by running `sanity dataset create <name>` or `sanity dataset list`. To see all dataset-related subcommands, run `sanity dataset`.

Datasets can also be created and deleted in the project's [management console](https://manage.sanity.io), under the "Datasets" tab.

A dataset name must be between 1 and 64 characters long. It may only contain lowercase characters (`a-z`), numbers (`0-9`), hyphens (`-`), and underscores (`_`), and must begin and end with a lowercase letter or number.

## Add-on datasets

Some features automatically create "add-on" datasets and pair them to your dataset. These are complimentary and don't count toward your plan's dataset limit.

![Comments add-on dataset for the production dataset](https://cdn.sanity.io/images/3do82whm/next/4958f8aaa9759681a7e3df864abc13d1c0fd1951-1790x474.png)

You can manage these as you would any other dataset. Learn more about [configuring comments and the comments dataset](https://www.sanity.io/docs/studio/configuring-comments).

## Dataset migration

You can [export](https://www.sanity.io/docs/http-reference/export) and [import](https://www.sanity.io/docs/content-lake/importing-data) content to datasets, as well as performing [mutations](https://www.sanity.io/docs/http-reference/mutation) and [patches](https://www.sanity.io/docs/content-lake/http-patches) to documents in them.

Dataset exports are billed against your API quota. Documents are streamed to minimize quota usage, but using cursor mode for large datasets will use more requests than stream mode.

## Advanced Dataset Management

*This is a paid feature, available on the Enterprise plan.*

You can initiate dataset copying directly in the cloud and create aliases to hot swap between datasets without changing the underlying code for your project.

- [Full documentation for cloning datasets in the cloud](https://www.sanity.io/docs/content-lake/how-to-use-cloud-clone-for-datasets)
- [Full documentation for hot swapping your datasets without changing your code ](https://www.sanity.io/docs/content-lake/how-to-use-hot-swapping-for-datasets)
