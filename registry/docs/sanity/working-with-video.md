# Working with video

Media Library lets you stream video directly from your library. Uploaded videos are automatically optimized for adaptive streaming and delivered via a global CDN.

Learn how to display videos from your library in your frontend.

## Prerequisites

*This is a paid feature, available on the Enterprise plan.*

- A Sanity project with **Media Library enabled** and **Studio v4.0.1 or later.**
- **Video addon enabled for your project.** Video is an addon feature of Media Library and is not enabled by default. Contact [sales](https://www.sanity.io/contact/sales?ref=docs) to learn more.
- **Video assets** uploaded to your Media Library.

## Understanding video representation in Media Library

Before implementing videos in your front-end, it's important to understand how Media Library handles videos:

- Video fields are created using the `defineVideoField` helper from `sanity/media-library`
- Videos are processed to generate **playback IDs** for streaming
- Each video asset contains **metadata,** including aspect ratio, duration, and framerate

**Note:** Currently, only public videos are supported. Signed URLs for video are coming in a future release.

## Supported formats and limitations

Media Library accepts most common video formats for upload, including MP4, MOV, AVI, MKV, WebM, and most other standard containers. Processing time depends on format, length, and resolution—non-standard formats and 4K+ videos take longer.

For fastest processing, use H.264 video and AAC audio in an MP4 container. See [Mux's standard input specifications](https://www.mux.com/docs/guides/minimize-processing-time#standard-input-specs) for detailed encoding recommendations.

### Video asset structure

Video assets in your Media Library have a nested structure:

```json
{
  "_id": "2yg9Un9RMsQjuf3WDqEo70ggi8D",
  "_type": "sanity.asset",
  "assetType": "sanity.videoAsset",
  "title": "video-filename.mp4",
  "versions": [
    {
      "instance": {
        "_id": "2yg9UGEpG8H4xjgMj8YSstwpfVh",
        "_type": "sanity.videoAsset",
        "originalFilename": "video-filename.mp4",
        "metadata": {
          "_type": "sanity.videoMetadata",
          "aspectRatio": 0.5625,
          "duration": 8.86,
          "playbacks": [
            {
              "_id": "V5uFaHghtnzgV6lYlBkrbehGkvd5KNGHYU7w2Eo7HoQ",
              "_type": "sanity.videoMetadata.playback",
              "policy": "public"
            }
          ]
        },
        "mimeType": "video/mp4",
        "originalFilename": "video-filename.mp4"
      }
    }
  ]
}

```

## Setting up video fields in Studio

Use the `defineVideoField` helper to create video fields in your studio schemas:

**video-document.ts**

```
import { defineVideoField } from 'sanity/media-library'

export default {
  name: 'videoDocument',
  title: 'Video Document',
  type: 'document',
  fields: [
    defineVideoField({
      title: 'Featured Video',
      name: 'video',
    }),
    // ... other fields
  ]
}

```

## Get the video data

There are two methods to fetch video data from your Media Library: using the Sanity client (recommended) or using GROQ queries.

### Using the Sanity client (recommended)

The Sanity client provides a `getPlaybackInfo()` method that retrieves all necessary video information in a single call. This method requires API version `v2025-03-25` or later.

First, configure your client to use Media Library:

```
import {createClient} from '@sanity/client'

const client = createClient({
  apiVersion: '2025-03-25',
  useCdn: false,
  token: 'your-token',
  resource: {
    type: 'media-library',
    id: 'your-media-library-id',
  },
})
```

Query for the document with your `video` field:

**GROQ**

```groq
*[_type == 'videoDocument'] {
  title,
  video
}
```

```json
{
  "title": "My Video Document",
  "video": {
    "_type": "sanity.video",
    "asset": {
      "_ref": "media-library:mlZxz9rvqf76:video-30rh9U3GDEK3ToiId1Zje4uvalC-mp4",
      "_type": "reference"
    }
  }
}
```

Fetch playback information using the video asset reference:

```
const document = await client.fetch(
  `*[_type == 'videoDocument']{ title, video }`
)

const playbackInfo = await client.mediaLibrary.video.getPlaybackInfo(
  document.video.asset
)
```

The response contains URLs for stream and images like the thumbnail, as well as useful metadata like duration and aspect ratio.

```json
{
  id: "30rh9U3GDEK3ToiId1Zje4uvalC", // Playback ID
  stream: { url: "https://stream.m.sanity-cdn.com/..." },
  thumbnail: { url: "https://image.m.sanity-cdn.com/..." },
  animated: { url: "https://image.m.sanity-cdn.com/..." },
  storyboard: { url: "https://image.m.sanity-cdn.com/..." },
  duration: 120.5,
  aspectRatio: 1.77
}
```

### Alternative: Using GROQ queries

You can also fetch video data using GROQ queries. Use the `documents::get()` function to follow the Global Dataset Reference and access the video asset:

**GROQ**

```groq
*[_type == 'videoDocument'] {
  title,
  "video": documents::get(video.asset){
    _id,
    "aspectRatio": metadata.aspectRatio,
    "playbackId": metadata.playbacks[policy == "public"][0]._id
  }
}
```

**RESULT**

```json
{
  "title": "My Video Document",
  "video": {
    "_id": "video-30rh9U3GDEK3ToiId1Zje4uvalC-mp4",
    "aspectRatio": 0.5625,
    "playbackId": "V5uFaHghtnzgV6lYlBkrbehGkvd5KNGHYU7w2Eo7HoQ"
  }
}
```

For more comprehensive video information, you can query additional metadata:

**GROQ**

```groq
*[_type == 'videoDocument'] {
  title,
  "video": documents::get(video.asset){
    _id,
    "aspectRatio": metadata.aspectRatio,
    "duration": metadata.duration,
    "originalFilename": originalFilename,
    "playbackId": metadata.playbacks[policy == "public"][0]._id
  }
}
```

## Display videos with Mux Player

To present videos from Media Library in your frontend, we'll use the Mux video player.

Install the Mux React player component:

**Terminal**

```sh
pnpm install @mux/mux-player-react
```

### Basic implementation

Here's the simplest way to display a video from your Media Library:

**video-player.tsx**

```tsx
import MuxPlayer from '@mux/mux-player-react'

type VideoPlayerProps = {
  playbackId: string
  aspectRatio: number
}

export default function VideoPlayer({ playbackId, aspectRatio }: VideoPlayerProps) {
  return (
    <MuxPlayer
      customDomain="m.sanity-cdn.com"
      playbackId={playbackId}
      style={{
        width: '100%',
        height: '100%',
        aspectRatio: aspectRatio
      }}
    />
  )
}

```

### Using with queried data

Integrate with your GROQ query results:

**video-player.tsx**

```tsx
import MuxPlayer from '@mux/mux-player-react'

type VideoData = {
  playbackId: string
  aspectRatio: number
  originalFilename: string
}

type DocumentWithVideoProps = {
  video: VideoData
}

export default function DocumentWithVideo({ video }: DocumentWithVideoProps) {
  if (!video?.playbackId) {
    return <div>No video available</div>
  }

  return (
    <div className="video-container">
      <MuxPlayer
        customDomain="m.sanity-cdn.com"
        playbackId={video.playbackId}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: video.aspectRatio
        }}
      />
    </div>
  )
}

```

## Displaying thumbnails

Thumbnail images are automatically generated for your videos. You can use these as poster images:

**video-player-poster.tsx**

```tsx
import MuxPlayer from '@mux/mux-player-react'

export default function VideoWithPoster({ video }: { video: VideoData }) {
  const posterUrl = `https://image.m.sanity-cdn.com/${video.playbackId}/thumbnail.jpg`

  return (
    <MuxPlayer
      customDomain="m.sanity-cdn.com"
      playbackId={video.playbackId}
      poster={posterUrl}
      style={{
        width: '100%',
        height: '100%',
        aspectRatio: video.aspectRatio
      }}
    />
  )
}

```

You can also customize the poster image size and format:

**video-poster.ts**

```
// Custom poster with specific dimensions
const posterUrl = `https://image.m.sanity-cdn.com/${video.playbackId}/thumbnail.jpg?width=800&height=${Math.round(800 / video.aspectRatio)}&fit_mode=crop`

// Use WebP format for better compression
const optimizedPoster = `https://image.m.sanity-cdn.com/${video.playbackId}/thumbnail.webp?width=800&fit_mode=preserve`

```

## Streaming and preview URLs

Every video gets a streaming URL and preview images you can customize:

### Streaming URLs

Videos are delivered via HLS (HTTP Live Streaming) using this URL pattern:

```text
https://stream.m.sanity-cdn.com/{playbackId}.m3u8
```

The Mux Player handles this automatically, but you can access the raw streaming URL if needed:

**video-url.ts**

```
const hlsUrl = `https://stream.m.sanity-cdn.com/${video.playbackId}.m3u8`

```

### Thumbnail URLs

Preview thumbnail are automatically generated using this URL pattern:

```text
https://image.m.sanity-cdn.com/{playbackId}/thumbnail.{format}
```

You can customize thumbnails with query parameters, similar to Sanity's image pipeline:

**video-urls-params.ts**

```
// Basic thumbnail
const thumbnail = `https://image.m.sanity-cdn.com/${video.playbackId}/thumbnail.jpg`

// Specific size and format
const customThumb = `https://image.m.sanity-cdn.com/${video.playbackId}/thumbnail.webp?width=400&height=300`

// Crop and fit options
const croppedThumb = `https://image.m.sanity-cdn.com/${video.playbackId}/thumbnail.jpg?width=200&height=200&fit_mode=crop`

// Thumbnail from specific time (in seconds)
const timeThumb = `https://image.m.sanity-cdn.com/${video.playbackId}/thumbnail.jpg?time=30`

```

**Available thumbnail parameters:**

- `width` and `height` - Resize the thumbnail
- `fit_mode` - How to fit within dimensions (`crop`, `preserve`, `stretch`, `pad`)
- `time` - Extract thumbnail from specific video timestamp (in seconds)
- Format options: `.jpg`, `.png`, `.webp`

For the complete list of thumbnail transformation options, see the [Mux thumbnail documentation](https://www.mux.com/docs/guides/get-images-from-a-video#get-an-image-from-a-video).

## Advanced player configuration

Configure additional player features:

**video-player-config.tsx**

```tsx
import MuxPlayer from '@mux/mux-player-react'

type AdvancedVideoProps = {
  video: {
    playbackId: string
    aspectRatio: number
    originalFilename: string
  }
  autoPlay?: boolean
  muted?: boolean
  onPlay?: () => void
  onEnded?: () => void
}

export default function AdvancedVideo({
  video,
  autoPlay = false,
  muted = false,
  onPlay,
  onEnded
}: AdvancedVideoProps) {
  return (
    <MuxPlayer
      customDomain="m.sanity-cdn.com"
      playbackId={video.playbackId}
      autoPlay={autoPlay}
      muted={muted}
      loop={false}
      preload="metadata"
      style={{
        width: '100%',
        height: '100%',
        aspectRatio: video.aspectRatio
      }}
      onPlay={onPlay}
      onEnded={onEnded}
    />
  )
}

```

## Customizing player appearance

For styling and theming options, see the [Mux Player customization guide](https://www.mux.com/docs/guides/player-customize-look-and-feel). The player supports:

- Custom accent colors
- CSS custom properties for extensive styling
- Multiple built-in themes
- Custom CSS for complete control over appearance

## Performance considerations

To maximize performance when displaying videos:

**Preload settings**

Use appropriate preload settings based on your use case:

- `preload="none"` - Don't preload anything. Best for pages with many videos.
- `preload="metadata"` - Preload video metadata only. Default setting.
- `preload="auto"` - Preload the entire video. Use sparingly, and avoid when loading multiple videos.

**Loading strategies**

Lazy load videos below the fold as users scroll to reduce initial page load time.

**Resolution control**

Set `maxResolution` on the player to cap the maximum video quality and reduce bandwidth usage. Available options are `"720p"`, `"1080p"`, `"1440p"`, and `"2160p"`.

**Player.tsx**

```tsx
<MuxPlayer 
  playbackId={playbackId}  
  maxResolution="1080p"  
  style={{  
    width: '100%',  
    height: '100%',  
    aspectRatio: aspectRatio,
  }} 
/>
```

**Image optimization**

Use appropriately sized thumbnails instead of full-resolution images by utilizing the [transformation options](https://github.com/sanity-io/client#getting-video-playback-information).

**User interaction**

Consider implementing click-to-play for videos that aren't essential to the user experience to save bandwidth.

## Common issues

**Video not loading**

- Check that the playback ID exists in your query: `video.asset->metadata.playbacks[policy == "public"][0]._id`
- Ensure your Media Library integration is properly configured
- Verify the GROQ query is returning the expected data structure

**Player not displaying**

- Confirm `@mux/mux-player-react` is properly installed
- Check browser console for JavaScript errors
- Verify the container element has appropriate dimensions

**Aspect ratio issues**

- Ensure you're using the correct aspect ratio from `video.asset->metadata.aspectRatio`
- Note that aspect ratio is width/height (e.g., 0.5625 for 9:16 vertical video)
- Set proper container styles to maintain aspect ratio

## Additional resources

[Mux Player documentation](https://www.mux.com/docs/guides/mux-player-web)

Complete guide to Mux Player features and customization options.

[Media Library documentation](https://www.sanity.io/docs/media-library)

Learn more about configuring and using Media Library.

[Creating custom aspects](https://www.sanity.io/docs/media-library/create-aspect)

Add custom metadata fields to your video assets.

# Migrate assets from Media Plugin

*This is a paid feature, available as an addon on the Enterprise plan.*

In this guide, we'll look at one approach to migrate assets from the Media Plugin to Media Library. At the end of this guide, we've included an example migration script and instructions on how to run it. You can go directly to the code if you aren't interested in the core parts of the script.

In the future, we plan to offer a more direct dataset to Media Library migration tool. For now, we recommend adapting this code to your needs.

## Limitations and tips

- This approach is intended for assets stored in a Sanity dataset that you want migrated to Media Library. If you have assets stored elsewhere, you'll need to adjust the download/upload approach. For example, if you use an external asset source, you'll need to download those assets and adjust how you identify their connection to documents.
- Keep rate limits and API quota in mind. Downloading all assets, and making high volumes of document mutations, can drastically affect your usage.
