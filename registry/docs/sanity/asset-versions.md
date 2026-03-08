# Asset Versions

Asset versioning allows you to maintain different versions of the same media library asset while controlling which version is used across your content. This feature is ideal for managing subtle variations of an asset, such as retouched photos or updated files, without creating entirely new assets.

![Sanity Media Library with the versions inspector open](https://cdn.sanity.io/images/3do82whm/next/d7fe7acd92b21c417ae080b44a11b5a335af9f2b-1443x974.png)

This guide explains how to use asset versioning to manage different iterations of your media assets while maintaining content integrity.

### Prerequisites:

- Access to Sanity [Media Library](https://www.sanity.io/docs/media-library)
- Assets uploaded to your Media Library
- Content that references your assets (optional)

## View asset versions

1. Open Media Library from your Dashboard.
2. Select an asset to view its details in the right panel.
3. Click the dropdown menu button labeled **Aspects** in the right panel.
4. Select **Versions** to view all versions of the selected asset.

![Shows Sanity Media Library with the versions inspector open and the menu option highlighted](https://cdn.sanity.io/images/3do82whm/next/993d7d54a3ed502fa0ddf887c5b4a71f4cbce620-1443x974.png)

The versions panel displays all available versions of your asset. The current version is marked with a blue indicator, while any outdated versions in use are marked with an orange indicator.

> \[!TIP]
> Access and usage
> Note that you will only see version usage from documents you have access to. Depending on your organization's setup a version could potentially be in use even if no usage is listed.

## Upload a new version

1. Navigate to the versions panel for your asset.
2. Click **Upload new version** at the bottom of the panel.
3. Select a file from your device to upload as a new version.
4. Once uploaded, the new version will appear in the list.

The uploaded file should be a variation of the original asset, such as a color correction or minor edit, rather than an entirely different asset.

![Shows Sanity Media Library with the versions inspector open, and an option to upload new versions highlighted](https://cdn.sanity.io/images/3do82whm/next/fd724bc8f8bb9bd4961ad9aed1e8266b76d20db6-1443x974.png)

## Set a version as current

1. In the versions panel, locate and select the version you want to set as current.
2. Select **Set as current and sync all usage** to make it the current version and update all existing usage.

![Shows Sanity Media Library with the versions inspector open, and options to sync usage highlighted](https://cdn.sanity.io/images/3do82whm/next/b196087850e16fd1377ad64aea0e91a1a1a3a1d1-1443x974.png)

Alternatively, you can set a version as current without updating existing usage by selecting **Set as current** from the context menu available by clicking the three dots next to the aforementioned button. This is useful for previewing changes before applying them everywhere.

## Sync usage with current version

When you have outdated usage (orange indicators), you can update all instances to use the current version:

1. In the versions panel, look for the warning about outdated usage at the bottom.
2. Click **Sync all usage with current** to update all instances to use the current version.

![Shows Sanity Media Library with the versions inspector open, and options for selective sync highlighted](https://cdn.sanity.io/images/3do82whm/next/03876f085fd04aa5c9b7c2d034b559034630dfbc-1443x974.png)

To selectively update specific usage:

1. Click the usage indicator (dot) next to a version to expand the usage list.
2. For each document listed, click **Sync version usage with Current** to update only that specific instance.

![Shows Sanity Media Library with the versions inspector open, and options for selective sync highlighted](https://cdn.sanity.io/images/3do82whm/next/3bd7a57bd7a1929fd8fdce92848738c327f107cd-1443x974.png)

## Querying for versions

Asset versions can be retrieved using GROQ [the same way as aspects](https://www.sanity.io/docs/media-library/query-aspects). The same restrictions and access requirements apply.

```
*[_type == 'myDocumentType']{
  "versions": documents::get(imageField.media).versions
} 
```

## Best practices

- Use versions for subtle variations of the same asset (retouches, minor edits), not for completely different assets.
- Keep version usage in sync with the current version when possible to maintain consistency.
- Use descriptive version names to easily identify different versions (note: version renaming will be available in a future update).

## Further reading

- [Media Library overview](https://www.sanity.io/docs/media-library)
- [Meet the library](https://www.sanity.io/docs/media-library/interface)
- [Link assets to documents](https://www.sanity.io/docs/media-library/link-media-assets)
