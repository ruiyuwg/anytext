# Common Sanity document types

The example document shapes in this article are presented in JSON as reference. Keep in mind that you can adjust the shape of query responses using GROQ projections.

## Project datasets

The following document types are found when querying a project's dataset.

### Schema-based Sanity documents

Your documents differ based on your schema. In addition to the schema you define, the basic Sanity document has the following shape.

```json
{
  "_createdAt": "2022-11-23T20:00:13Z",
  "_id": "004fecc4-d324-49b5-b78c-7216f539b3d5",
  "_originalId": "004fecc4-d324-49b5-b78c-7216f539b3d5",
  "_rev": "O2LflXWjWDt48mytHz2LFT",
  "_type": "your-document-type",
  "_updatedAt": "2025-05-15T14:31:46Z",
  // ...rest of schema
}
```

### Assets

Learn more about [assets in Content Lake](https://www.sanity.io/docs/content-lake/assets), or how to [query them in your front end](https://www.sanity.io/docs/apis-and-sdks/presenting-images). Asset type is detected at upload and will be either `sanity.imageAsset` or `sanity.fileAsset`.

**sanity.imageAsset**

```json
{
  "_createdAt": "2022-06-14T13:21:36Z",
  "_id": "image-000d3a19d7bb022f39de0b0b7baff6ed95c2b7f1-2132x1876-png",
  "_originalId": "image-000d3a19d7bb022f39de0b0b7baff6ed95c2b7f1-2132x1876-png",
  "_rev": "6uwRxsZd4dJaf44JVxaEuT",
  "_type": "sanity.imageAsset",
  "_updatedAt": "2022-06-14T13:21:36Z",
  "assetId": "000d3a19d7bb022f39de0b0b7baff6ed95c2b7f1",
  "extension": "png",
  "metadata": {
    "_type": "sanity.imageMetadata",
    "blurHash": "e03SL--?vJRNR1?dj^Mwj=fkvcMwIux^S7abk8o#WEe:MHt6NNIVRj",
    "dimensions": {
      "_type": "sanity.imageDimensions",
      "aspectRatio": 1.1364605543710022,
      "height": 1876,
      "width": 2132
    },
    "hasAlpha": true,
    "isOpaque": false,
    "lqip": "data:image/png;base64...",
    "palette": {
      "_type": "sanity.imagePalette",
      "darkMuted": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#3a385e",
        "foreground": "#fff",
        "population": 0.09,
        "title": "#fff"
      },
      "darkVibrant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#14245c",
        "foreground": "#fff",
        "population": 0,
        "title": "#fff"
      },
      "dominant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#bfc9d1",
        "foreground": "#000",
        "population": 1.36,
        "title": "#fff"
      },
      "lightMuted": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#bfc9d1",
        "foreground": "#000",
        "population": 1.36,
        "title": "#fff"
      },
      "lightVibrant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#92a5e7",
        "foreground": "#000",
        "population": 0,
        "title": "#fff"
      },
      "muted": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#50698f",
        "foreground": "#fff",
        "population": 0.16,
        "title": "#fff"
      },
      "vibrant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#2d51d1",
        "foreground": "#fff",
        "population": 0,
        "title": "#fff"
      }
    }
  },
  "mimeType": "image/png",
  "originalFilename": "example.png",
  "path": "images/3do82whm/next/000d3a19d7bb022f39de0b0b7baff6ed95c2b7f1-2132x1876.png",
  "sha1hash": "000d3a19d7bb022f39de0b0b7baff6ed95c2b7f1",
  "size": 458453,
  "uploadId": "ewspz9k52x2uIex0RXIdqUwctLPio2Rf",
  "url": "https://cdn.sanity.io/images/3do82whm/next/000d3a19d7bb022f39de0b0b7baff6ed95c2b7f1-2132x1876.png"
}
```

**sanity.fileAsset**

```json
{
  "_createdAt": "2024-01-22T12:27:32Z",
  "_id": "file-050de1efeee92e61ed7d8210a6ed9c598128e59e-csv",
  "_originalId": "file-050de1efeee92e61ed7d8210a6ed9c598128e59e-csv",
  "_rev": "YgFRxBViy44CfW0H4Ry4Qp",
  "_type": "sanity.fileAsset",
  "_updatedAt": "2024-01-22T12:27:33Z",
  "assetId": "050de1efeee92e61ed7d8210a6ed9c598128e59e",
  "extension": "csv",
  "mimeType": "text/csv",
  "originalFilename": "050de1efeee92e61ed7d8210a6ed9c598128e59e.csv",
  "path": "files/3do82whm/next/050de1efeee92e61ed7d8210a6ed9c598128e59e.csv",
  "sha1hash": "050de1efeee92e61ed7d8210a6ed9c598128e59e",
  "size": 18193,
  "uploadId": "SjqHLO18Iz5bAIF9vDtsufIFFKcz1aoO",
  "url": "https://cdn.sanity.io/files/3do82whm/next/050de1efeee92e61ed7d8210a6ed9c598128e59e.csv"
}
```

### Content release system document

The `system.release` document type is used for [Content Releases](https://www.sanity.io/docs/apis-and-sdks/content-releases-api) and [scheduled drafts](https://www.sanity.io/docs/studio/scheduled-drafts). This contains information about the release itself. After publishing, the document also contains the `_id`s of affected documents.

**Active (undecided type)**

```json
{
  "_createdAt": "2025-11-05T21:29:26Z",
  "_id": "_.releases.rD1Xd4ncd",
  "_rev": "dr42QZx7KPEhsymkMySD7L",
  "_type": "system.release",
  "_updatedAt": "2025-11-06T15:17:25Z",
  "metadata": {
    "description": "",
    "releaseType": "undecided",
    "title": "📝 docs: Document shape reference"
  },
  "name": "rD1Xd4ncd",
  "state": "active"
}
```

**Active (at time type)**

```json
{
  "_createdAt": "2025-11-05T21:29:26Z",
  "_id": "_.releases.rD1Xd4ncd",
  "_rev": "dr42QZx7KPEhsymkMySD7L",
  "_type": "system.release",
  "_updatedAt": "2025-11-06T15:17:25Z",
  "metadata": {
    "description": "",
    "releaseType": "scheduled",
    "intendedPublishAt": "2025-12-19T13:04:00.000Z",
    "title": "📝 docs: Document shape reference"
  },
  "name": "rD1Xd4ncd",
  "state": "active"
}
```

**Published**

```json
{
  "_createdAt": "2025-10-27T17:04:11Z",
  "_id": "_.releases.r0NTEBzIk",
  "_rev": "3yqUckHTy25h67wlKTbN4l",
  "_type": "system.release",
  "_updatedAt": "2025-10-27T17:33:46Z",
  "finalDocumentStates": [
    {
      "id": "versions.r0NTEBzIk.237c16b0-a9f4-4e82-b595-49c16488987b"
    }
  ],
  "metadata": {
    "description": "",
    "releaseType": "asap",
    "title": "docs: custom auth updates"
  },
  "name": "r0NTEBzIk",
  "publishAt": "2025-10-27T17:33:43.286273143Z",
  "publishedAt": "2025-10-27T17:33:46.857738394Z",
  "state": "published",
  "userId": "pplmUjjS1"
}
```

**Archived**

```json
{
  "_createdAt": "2025-02-07T11:59:48Z",
  "_id": "_.releases.r0bFlTPnM",
  "_rev": "CTPe2v8JIKtoV0Y6xK47fi",
  "_type": "system.release",
  "_updatedAt": "2025-02-07T12:00:38Z",
  "metadata": {
    "description": "",
    "releaseType": "asap",
    "title": "Archived release title"
  },
  "name": "r0bFlTPnM",
  "state": "archived",
  "userId": "p70uuxnEh"
}
```

**Scheduled draft**

```json
{
  "_createdAt": "2025-11-18T21:50:09Z",
  "_id": "_.releases.rl1x5tuDA",
  "_originalId": "_.releases.rl1x5tuDA",
  "_rev": "5qJ56lhgtn32Bpl4tfE4FQ",
  "_type": "system.release",
  "_updatedAt": "2025-11-18T21:50:12Z",
  "metadata": {
    "cardinality": "one",
    "description": "",
    "intendedPublishAt": "2025-11-29T21:50:00.000Z",
    "releaseType": "scheduled",
    "title": "Scheduled publish"
  },
  "name": "rl1x5tuDA",
  "publishAt": "2025-11-29T21:50:00Z",
  "state": "scheduled",
  "userId": "pplmUjjS1",
  "workflowId": "release-rl1x5tuDA-K76KLi6SbRI9Qep6KPCyRr"
}
```

## Media Library

The following document types are found when querying your organization's [Media Library](https://www.sanity.io/docs/media-library/introduction).

### Assets

- `sanity.asset`: The container for Media Library assets, this contains details about the asset, versions, and aspects.
- `sanity.imageAsset`: The document for an individual image asset version. It contains metadata from the image file as well as the URL.
- `sanity.fileAsset`: The document for an individual file asset version.

**sanity.asset**

```json
{
  "_createdAt": "2025-10-27T21:21:41Z",
  "_id": "34fMJaofTI5ptNBZFOYoBNfy6NM",
  "_rev": "eefe4de2-7ec8-4307-aecc-1b0e890fa4e6",
  "_system": {
    "createdBy": "gvRshKueQ"
  },
  "_type": "sanity.asset",
  "_updatedAt": "2025-11-05T19:19:24Z",
  "aspects": {
    "photographer": {
      "_ref": "dataset:y856rro4.production:200e44f2-14a9-4c7a-a621-a4ca4d9b559c",
      "_type": "globalDocumentReference",
      "_weak": true
    }
  },
  "assetType": "sanity.imageAsset",
  "cdnAccessPolicy": "public",
  "currentVersion": {
    "_ref": "image-5e510a718d122013621f6f2ac5c8fefda767181b-2410x1940-png",
    "_type": "reference"
  },
  "title": "agent-context.png",
  "versions": [
    {
      "_key": "34fMJa5D3oyeodCbUK85oqzmRCh",
      "_type": "sanity.asset.version",
      "instance": {
        "_ref": "image-5e510a718d122013621f6f2ac5c8fefda767181b-2410x1940-png",
        "_type": "reference"
      },
      "title": "agent-context.png"
    }
  ]
}
```

**sanity.imageAsset**

```json
{
  "_createdAt": "2025-05-05T16:17:18Z",
  "_id": "image-049cdf41569df83dae668a4578e5d768ab0e3af7-4000x6000-jpg",
  "_rev": "jvG3hn4E5wAByM2zqNN5yk",
  "_system": {
    "createdBy": "gvRshKueQ"
  },
  "_type": "sanity.imageAsset",
  "_updatedAt": "2025-05-05T16:17:23Z",
  "extension": "jpg",
  "metadata": {
    "_type": "sanity.imageMetadata",
    "blurHash": "dfCZ^dtlRPj[?wtSaejYWCt7t7aeIUaeozfQV@RjWBkC",
    "dimensions": {
      "_type": "sanity.imageDimensions",
      "aspectRatio": 0.6666666666666666,
      "height": 6000,
      "width": 4000
    },
    "exif": {
      "ApertureValue": 2.970854,
      "ColorSpace": 65535,
      "Contrast": 2,
      "CustomRendered": 1,
      "DateTimeDigitized": "2025-01-23T22:36:48.000Z",
      "DateTimeOriginal": "2025-01-23T22:36:48.000Z",
      "ExposureBiasValue": 0,
      "ExposureMode": 0,
      "ExposureProgram": 3,
      "ExposureTime": 0.00125,
      "FNumber": 2.8,
      "Flash": 16,
      "FocalLength": 26,
      "FocalLengthIn35mmFormat": 40,
      "FocalPlaneResolutionUnit": 3,
      "FocalPlaneXResolution": 2556.533905029297,
      "FocalPlaneYResolution": 2556.533905029297,
      "ISO": 100,
      "LensModel": "GR LENS 26mm F2.8",
      "MeteringMode": 255,
      "Saturation": 0,
      "SceneCaptureType": 0,
      "SensingMethod": 2,
      "SensitivityType": 1,
      "Sharpness": 0,
      "ShutterSpeedValue": 9.643856,
      "StandardOutputSensitivity": 100,
      "SubjectDistanceRange": 3,
      "WhiteBalance": 1,
      "_type": "sanity.imageExifMetadata"
    },
    "hasAlpha": false,
    "image": {
      "Copyright": "MARK MICHON",
      "ExifOffset": 256,
      "GPSInfo": 784,
      "Make": "RICOH IMAGING COMPANY, LTD.",
      "Model": "RICOH GR IIIx",
      "ModifyDate": "2025-02-21T18:37:52.000Z",
      "ResolutionUnit": 2,
      "Software": "Adobe Lightroom 8.2 (Macintosh)",
      "XResolution": 240,
      "YResolution": 240,
      "_type": "sanity.imageExifTags"
    },
    "isOpaque": true,
    "keywords": [
      "landscape",
      "hillside",
      "trees",
      "foliage",
      "bare branches",
      "clear sky",
      "architecture",
      "building",
      "outdoor",
      "daytime",
      "natural light",
      "scenic",
      "rural",
      "countryside",
      "hill",
      "vegetation",
      "nature",
      "exterior",
      "structure",
      "view",
      "scenery"
    ],
    "location": {
      "_type": "geopoint",
      "alt": 0,
      "lat": 35.188269,
      "lng": 139.135506
    },
    "lqip": "data:image/jpeg;base64...",
    "palette": {
      "_type": "sanity.imagePalette",
      "darkMuted": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#604c32",
        "foreground": "#fff",
        "population": 3.89,
        "title": "#fff"
      },
      "darkVibrant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#261b04",
        "foreground": "#fff",
        "population": 1.13,
        "title": "#fff"
      },
      "dominant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#604c32",
        "foreground": "#fff",
        "population": 3.89,
        "title": "#fff"
      },
      "lightMuted": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#abccd2",
        "foreground": "#000",
        "population": 3.5,
        "title": "#fff"
      },
      "lightVibrant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#aad1e5",
        "foreground": "#000",
        "population": 0.04,
        "title": "#fff"
      },
      "muted": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#8a7f74",
        "foreground": "#fff",
        "population": 2.6,
        "title": "#fff"
      },
      "vibrant": {
        "_type": "sanity.imagePaletteSwatch",
        "background": "#706532",
        "foreground": "#fff",
        "population": 0.01,
        "title": "#fff"
      }
    }
  },
  "mimeType": "image/jpeg",
  "originalFilename": "japan-2025-08.JPG",
  "path": "media-libraries/mlNBkjZ8wqSZ/images/049cdf41569df83dae668a4578e5d768ab0e3af7-4000x6000.jpg",
  "sha1hash": "049cdf41569df83dae668a4578e5d768ab0e3af7",
  "size": 16096156,
  "source": {
    "id": "sanity-image-image-049cdf41569df83dae668a4578e5d768ab0e3af7-4000x6000-jpg",
    "name": "sanity-image",
    "url": "https://cdn.sanity.io/media-libraries/mlNBkjZ8wqSZ/images/049cdf41569df83dae668a4578e5d768ab0e3af7-4000x6000.jpg"
  },
  "state": "ready",
  "url": "https://cdn.sanity.io/media-libraries/mlNBkjZ8wqSZ/images/049cdf41569df83dae668a4578e5d768ab0e3af7-4000x6000.jpg"
}
```

**sanity.fileAsset**

```json
{
  "_createdAt": "2025-06-17T15:22:03Z",
  "_id": "file-6476df3aac780622368173fe6e768a2edc3932c8-txt",
  "_rev": "zOr4hk5Ojjq0FM4nUeCABF",
  "_system": {
    "createdBy": "gvRshKueQ"
  },
  "_type": "sanity.fileAsset",
  "_updatedAt": "2025-06-17T15:22:03Z",
  "extension": "txt",
  "metadata": {
    "_type": "sanity.fileMetadata"
  },
  "mimeType": "text/plain; charset=utf-8",
  "originalFilename": "text-file.txt",
  "path": "media-libraries/mlNBkjZ8wqSZ/files/6476df3aac780622368173fe6e768a2edc3932c8.txt",
  "sha1hash": "6476df3aac780622368173fe6e768a2edc3932c8",
  "size": 15,
  "source": {
    "id": "sanity-file-file-6476df3aac780622368173fe6e768a2edc3932c8-txt",
    "name": "sanity-file",
    "url": "https://cdn.sanity.io/media-libraries/mlNBkjZ8wqSZ/files/6476df3aac780622368173fe6e768a2edc3932c8.txt"
  },
  "state": "ready",
  "url": "https://cdn.sanity.io/media-libraries/mlNBkjZ8wqSZ/files/6476df3aac780622368173fe6e768a2edc3932c8.txt"
}
```

### Aspects

The following is the shape of an aspect document (`sanity.asset.aspect`), along with the aspect schema used to create it.

**sanity.asset.aspect**

```json
{
  "_createdAt": "2025-04-25T16:18:31Z",
  "_id": "copyright",
  "_rev": "jvG3hn4E5wAByM2zqNPrvO",
  "_system": {
    "createdBy": "gvRshKueQ"
  },
  "_type": "sanity.asset.aspect",
  "_updatedAt": "2025-05-05T16:21:56Z",
  "definition": {
    "fields": [
      {
        "name": "copyrightHolder",
        "title": "Copyright Holder",
        "type": "string"
      },
      {
        "name": "copyrightDate",
        "title": "Date",
        "type": "date"
      }
    ],
    "name": "copyright",
    "title": "copyright",
    "type": "object"
  }
},
```

**Source aspect schema**

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
