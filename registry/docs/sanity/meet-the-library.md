# Meet the library

## Media Library at a glance

*This is a paid feature, available as an addon on the Enterprise plan.*

Media Library is home to your organization's shared assets. It stores assets for use across your projects and datasets, and allows content teams to have a central source of truth for their media.

![a screenshot of a media library showing various images](https://cdn.sanity.io/images/3do82whm/next/cae386064a9678b739ff46b3370a3773a92c6c10-3136x1596.png)

Media Library is an organization-wide application. [You can access it from the dashboard](https://www.sanity.io/docs/dashboard) by selecting the "Media" icon in the left navigation bar. Media Library requires the dashboard.

> \[!NOTE]
> Where are my existing assets?
> If you've been using Sanity already, you may have images and other files that you're using in your studios. These files are saved within your datasets, and they are not automatically copied into the media library.
> Soon, we will add the capability to migrate existing assets into the media library and preserve connections to those assets within your studios.

## The library interface

The library adapts based on the assets you have selected.

![a view of the three main panels in the media library](https://cdn.sanity.io/images/3do82whm/next/0771a14ab13fa57617b60a79fda2c3f416825d5b-3128x1596.png)

The core of the interface is split into three sections:

1. The asset list: View existing assets, filter the results, and upload new assets.
2. The library menu: Narrow your view of the asset list, explore collections, and see recently uploaded assets.
3. The asset sidebar: Edit asset metadata, apply aspects, and view additional details about the asset.

### Uploading assets

There are two ways to upload assets in the library interface:

1. Select the **Upload** button in the top right of the asset list to upload an asset.
2. Drag-and-drop one or more assets directly into the asset list to start an upload.

As your assets upload, you'll see a status screen showing the progress of each asset.

### Select multiple assets

Click **Select** in the top-right of the asset list, then click each asset to add to your selection.

![A dark-themed media library interface displaying a grid of pink, purple, and blue image thumbnails, with the "Select" button highlighted and "4 assets selected" visible.](https://cdn.sanity.io/images/3do82whm/next/85243b40d8e9e34c244fad9fab00ecd77c49d0ce-1585x966.png)

### Delete assets

To delete one or more assets, first select them in the asset list.

Next, select the vertical **"..."** icon from the popover at the bottom of the asset list.

![a screenshot of the popover that says delete 1 asset](https://cdn.sanity.io/images/3do82whm/next/1582b2b41d1a0b92c88cb6742a396be2af2da257-1306x826.png)

Select **"Delete 1 asset"** to delete the asset.

## Aspects

![a screenshot of a media library with an asset detail panel open](https://cdn.sanity.io/images/3do82whm/next/6bb17c72377a527f1b361a8ede94a1877f2360b1-3388x1910.png)

Aspects let you organize your assets with customly defined fields. Aspects are defined programatically with a schema-like syntax.

#### Developing aspects

[Create an aspect](https://www.sanity.io/docs/media-library/create-aspect)

[Aspect patterns](https://www.sanity.io/docs/media-library/aspect-patterns)

You can use aspects to sort and filter results in the asset list, or to store internal metadata.

### Add aspects to an asset, or edit an aspect

To add aspects to an asset, first select one or more assets in the asset list.

The sidebar will list all available aspects. You can click the title of any aspect to expand it and change its values.

![A digital asset manager interface showing a grid of image thumbnails, with an image selected  and its metadata details in a side panel](https://cdn.sanity.io/images/3do82whm/next/f9d9bacf93e99fe5ec37866b8f69b1b59305a36a-720x556.png)

Once you've made changes to an aspect, select the\*\* "Publish"\*\* button to publish the changes to the asset.

> \[!TIP]
> Publishing changes
> Don't forget to publish changes whenever you add or remove aspects, or when you make updates to the asset title.

## Collections

![a screenshot of the media library showing a collection of landscapes](https://cdn.sanity.io/images/3do82whm/next/de4563243f810e5c856444146aa6c22544debc80-3070x1596.png)

Collections allow further grouping of assets and are not limited to available aspects. You can create new collections while selecting an asset, or from the collection's screen.

### Add an asset to a collection

You can add an asset to a collection in two ways:

1. Navigate to the collection, then select **"Add"** in the top right, where the upload button normally is.
2. In any view, select the asset then, then select the vertical **"..."** icon, then select **"Add to existing collection"** from the popover menu.

## Public and private assets

By default, assets are public to any person or app with the URL or identifier. You can set an asset to private to limit its visibility to logged-in users of the Media Library.

To change an asset's visibility:

1. Select the asset in Media Library.
2. In the [asset sidebar](https://www.sanity.io/docs/media-library/interface), select the visibility indicator. If the asset is public, it will display **Public** with a globe icon. If the asset is private, it will display **Private** with a lock icon.
3. Select the desired visibility from the popover list.

![User interface with the visibility selector open and "Private" selected.](https://cdn.sanity.io/images/3do82whm/next/c73070a8ecc248111f9324f07fb7d430bd73b6d2-770x672.png)

### Private asset restrictions

When setting an asset's visibility to private, keep the following in mind:

- Assets set to "Private" are only visible in Media Library for logged-in users. Any apps, websites, or other consumers of the asset will no longer have access.
- Switching visibility does not require a "Publish" for changes to take affect.
- When changing from public to private, the asset's URL may remain active for up to 30 days if it was previously cached. To limit this, set assets to private during upload.
