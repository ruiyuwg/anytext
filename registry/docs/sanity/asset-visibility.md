# Asset visibility

Asset visibility controls how individual assets like images and files can be accessed from Sanity’s Content Delivery Network (CDN). This feature ensures Media Library can securely manage confidential assets, embargoed launches, and other sensitive or licensed materials.

- **Public**: Anyone with the asset's URL or identifier can request and view it.
- **Private**: Access is restricted to authenticated Media Library and Studio users. External controlled access can be granted using signed URLs.

> \[!NOTE]
> Video assets
> Private visibility is not yet available for video assets. Uploaded videos are public, so plan your use of video content with this in mind.

## Updating asset visibility

![Screenshot of the Media Library showing the visibility switcher](https://cdn.sanity.io/images/3do82whm/next/2f91af899fd1556702a756d3dc7f0b708c48fc6c-1600x1035.webp)

1. Select the asset in Media Library.
2. In the asset sidebar, select the visibility indicator. If the asset is public, it will display **Public** with a globe icon. If the asset is private, it will display **Private** with a lock icon.
3. Select the desired visibility from the list in the popover.

> \[!TIP]
> Note that switching visibility does not require a **Publish** action for changes to take affect.

## Setting asset visibility

By default, assets are uploaded with public visibility. To change this for your session, select **Upload** at the top of the asset grid and use the visibility switcher in the upload modal before uploading.

![Media library interface with a Upload modal open, showing the visibility switcher affordance for setting the visibility of assets as they are uploaded.](https://cdn.sanity.io/images/3do82whm/next/189e9a91d87ff820822db70021bdc16d96ae6214-2822x1908.webp)

### Caching and propagation

When switching an asset's visibility from public to private, the CDN may continue serving cached responses for up to 30 days. To minimize exposure, set sensitive assets to private before upload.

## Signed URLs

Signed URLs provide a secure way to deliver private assets through Sanity's CDN. Each URL includes a signature that both validates access and ensures the asset is served only with the exact transformations specified in the URL. This prevents unauthorized use, hotlinking, and unapproved image manipulation.

To display images with private visibility using signed URLs, the `@sanity/image-url` [package](https://github.com/sanity-io/image-url?tab=readme-ov-file#signed-urls) exports an extended image URL builder with signing methods via the `@sanity/image-url/signed` export path.

For non-image assets such as PDFs and audio files, use the lower level `@sanity/signed-urls` [package](https://github.com/sanity-io/signed-urls) to create a signed version of a given asset URL.

Check the READMEs of both packages for more details on signing URLs.

### Signing keys

Signing URLs using the above packages requires providing a private key and an associated key ID to whichever helper functions you are using. Signing keys are managed in the Media Library itself:

1. At the top of the left panel, click the Media Library dropdown.
2. Select **Signing keys**

![Media library interface with a "Signing keys" modal open, listing keys for marketing, mobile, and web applications, and a button to add a new key.](https://cdn.sanity.io/images/3do82whm/next/c3ede98db5b642f8eafee90a03d9b473ec6a0e19-2823x2007.webp)

# Container URLs

Container URLs provide a stable, shareable link to Media Library assets.\* \*They automatically reflect changes to an asset’s version or visibility (public or private), so you never need to update links manually. Container URLs are optimised for delivery by Sanity’s CDN and are available through both the Media Library UI and GROQ.

## Copy a Container URL from the UI

1. Open Media Library from your Dashboard.
2. Select an asset to view its details in the right panel.
3. Click the ellipsis menu at the bottom of the right panel.
4. Select **Copy URL > Copy asset CDN URL** to copy the Container URL to your clipboard.

![Screenshot of an asset management interface with abstract colorful thumbnails and a menu showing options to copy asset URLs.](https://cdn.sanity.io/images/3do82whm/next/64009dbcd795aa4adfe383620ace3b738613f8a5-1300x786.png)

## Querying Container URLs

**GROQ**

```groq
*[_type=="event"][0] {
  poster {
    "containerURL": documents::get(media).url
  }
}
```

## Update durations

Because Container URLs are served by Sanity’s CDN, it can take some time for visibility or version changes to propagate. **Updates typically appear within minutes.**
