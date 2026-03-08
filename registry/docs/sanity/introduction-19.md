# Introduction

Media Library is a Sanity app for managing your organization's assets.

*This is a paid feature, available as an addon on the Enterprise plan.*

Media Library allows you to:

- Centrally store assets for use across multiple applications and datasets.
- Create custom groupings, called aspects, to make managing assets easier.

[Configure your library](https://www.sanity.io/docs/media-library/configure-library)

[Configure Studio](https://www.sanity.io/docs/media-library/configure-studio)

## Requirements

- Dashboard
- Studio v3.82.0 or later is required to incorporate Media Library assets in the Studio.
- API v2024-06-24 or later is required for any Media Library API requests.

## Core Concepts

The Media Library introduces a few new concepts in addition to the image and asset workflows in the rest of the Sanity ecosystem.

### Assets

An asset is a digital file that your apps and Studio can use, like an image, video, or document.

Common examples include product photos, marketing videos, and downloadable PDFs. Beyond standard image previews, Media Library supports specialized previews for multimedia and document formats.

Video files display in a preview player, PDF documents open in a full-screen viewer where you can browse pages, audio files include playback controls, and animation formats like Lottie and Rive render their animations.

Files without specialized preview support display as standard file types.

Outside of Media Library, these assets live alongside your dataset. In Media Library, they live in a special dataset your organization shares.

You can set assets as public or private. Private assets are only accessible inside Media Library to logged-in users. Learn more about changing asset visibility in [the interface guide](https://www.sanity.io/docs/media-library/interface).

> \[!TIP]
> Your Sanity project still supplies the assets to your applications
> With Media Library, you can treat it as the source of truth for your assets, but your project is still the access point for rendering images and creating download links. All requests for Media Library assets should go through your project datasets.
> [Enable library access](https://www.sanity.io/docs/media-library/configure-studio) in your studios, then continue [presenting images](https://www.sanity.io/docs/apis-and-sdks/presenting-images) as if they were coming straight from the same dataset as the rest of your content. This could be by passing `asset` into a URL builder, or expanding the asset reference with `asset -> {...}` and building the URL yourself.

### The library

The library is the interface that your content teams use to manage assets. Users can upload, search, manage, and assign aspects to assets.

[Meet the library](https://www.sanity.io/docs/media-library/interface)

### Aspects

Aspects are schema-style fields that apply to assets. They include additional, identifying information that helps asset managers search and organize assets. Some examples are usage licenses, references to products in your organization, and copyright details. This extra level of information is specific to the Media Library. For local metadata, you should create schemas in your Studio projects.

Developers define aspects that users can then apply to an asset. Depending on your plan, there are limits to the number of aspects each asset can have.

[Create an aspect](https://www.sanity.io/docs/media-library/create-aspect)

[Aspect patterns](https://www.sanity.io/docs/media-library/aspect-patterns)

### Collections

Collections allow teams to group assets for better organization and sharing.

### Global document references

Media Library assets exist outside your projects and datasets, so you need a way to connect them. Global document references are a new reference type that allows you to target a reference in a different resource. Resources are currently limited to datasets and media libraries, and at this time you can only reference dataset documents from Media Library aspects. See the [common aspect patterns guide](https://www.sanity.io/docs/media-library/aspect-patterns) for details on referencing documents from within aspects.

## Limitations

- Media Library is only available within [Dashboard](https://www.sanity.io/docs/dashboard).
- For additional usage limits, see the [limits and usage document](https://www.sanity.io/docs/media-library/limits-and-usage).
- Original video files are not retained; videos are transcoded and the source file cannot be downloaded later.
