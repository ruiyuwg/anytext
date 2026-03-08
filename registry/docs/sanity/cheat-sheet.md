# Cheat sheet

Interfacing with [Content Releases](https://www.sanity.io/docs/apis-and-sdks/content-releases-api) is similar to interfacing with other documents and relationships in the Content Lake.

**Prerequisites:**

- The examples below use a variety of APIs to cover common patterns. As releases aren't public, make sure your requests are [authenticated](https://www.sanity.io/docs/content-lake/http-auth) and match the correct [URL format](https://www.sanity.io/docs/content-lake/http-urls) for each API. For example, using Sanity clients or other integrations, you'll need to configure them with an appropriate token and permissions to view unpublished content.
- Release APIs and features are available in API version `2025-02-19` and later unless otherwise noted.
- Many query interactions on this page assume a perspective that can view release information. You should set the perspective to `raw` or a unique release stack when viewing release information.
- For examples that use the `@sanity/client` actions and shorthand methods, version 7.13.0 or higher is recommended.

## Create a new release

As releases are Sanity documents (`system.release`), you can interact with them the same way you would mutate any other document. The Sanity client also offers helpers methods. For example:

```
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset>',
    useCdn: true,
    apiVersion: '2025-02-19',
    token: '<token>',
})

const {releaseId} = await client.releases.create({
  metadata: {
    title: 'New bike release',
    releaseType: 'asap'
  }
})
```

For a full list of available metadata properties, see the type definitions in your editor or the `sanity.action.release.create` [reference documentation](https://www.sanity.io/docs/http-actions#b6800cddd015).

## Modify release information

You can modify an existing releases metadata by passing a patch in along with the releaseId. For example:

```
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset>',
    useCdn: true,
    apiVersion: '2025-02-19',
    token: '<token>',
})

const release = await client.releases.edit({
  releaseId: 'r123456', // your releaseId
  patch: {
      set: {
        metadata: {
          releaseType: 'asap',
        },
      },
    },
})
```

You can also edit releases using the [Mutate API](https://www.sanity.io/docs/http-reference/mutation).

## Get all releases for a project and dataset

Access releases by querying the documents with the `releases::all()` GROQ function. This is the preferred method for retrieving a list of releases.

### JS Client

Use the client's fetch method to query for releases.

Input

```typescript
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset>',
    useCdn: true,
    apiVersion: '2025-02-19',
    token: '<token>',
    perspective: 'raw'
})

const query = "releases::all()"
const params = {}
client.fetch(query, params).then((data)=>{
  console.log(data)
})
```

Response

```json
[
    {
      "_createdAt": "2024-11-26T21:30:57Z",
      "finalDocumentStates": null,
      "_updatedAt": "2024-12-17T16:33:26Z",
      "_type": "system.release",
      "name": "rHw6FBu82",
      "_id": "_.releases.rHw6FBu82",
      "state": "active",
      "metadata": {
        "releaseType": "scheduled",
        "title": "End of year release",
        "intendedPublishAt": "Mon Dec 30 2024"
      },
      "publishAt": "2024-12-30T08:00:00Z",
      "_rev": "JmI5JuFTDPq3paS6p09Jmu",
      "userId": "paATypsg4"
    },
    {
      "publishAt": null,
      "_rev": "1kbjGQwz5Z0FmijO2l7Lwl",
      "finalDocumentStates": [
        {
          "id": "versions.rglJO3Sfg.movie_70981",
          "_key": "1kbjGQwz5Z0FmijO2l7M0E"
        }
      ],
      "_id": "_.releases.rglJO3Sfg",
      "state": "published",
      "metadata": {
        "title": "Quick fixes",
        "releaseType": "asap"
      },
      "_createdAt": "2024-11-26T22:01:56Z",
      "_type": "system.release",
      "name": "rglJO3Sfg",
      "_updatedAt": "2024-12-02T17:32:59Z",
      "userId": ""
    },
    {
      "_createdAt": "2024-11-26T18:34:14Z",
      "name": "rqZSzJ1uS",
      "finalDocumentStates": [
        {
          "id": "versions.rqZSzJ1uS.movie_10681"
        }
      ],
      "userId": "paATypsg4",
      "_id": "_.releases.rqZSzJ1uS",
      "state": "published",
      "_updatedAt": "2024-12-05T17:22:00Z",
      "metadata": {
        "releaseType": "scheduled",
        "description": "Experimental updates for testing",
        "title": "Experimental updates",
        "intendedPublishAt": "2024-12-05T17:22:00.000Z"
      },
      "publishAt": "2024-12-05T17:22:00Z",
      "_rev": "5dKCVUpSDccCmU1E23aUAc",
      "_type": "system.release"
    },
  // ...
  ],
```

### Query API

You access releases by querying for documents with the `releases::all()` GROQ function using the [Query API](https://www.sanity.io/docs/http-reference/query). This is the preferred method for retrieving a list of releases.

Use the following GROQ query in the API request:

```groq
releases::all()
```

Input

```sh
curl "https://<project-id>.api.sanity.io/2025-02-19/data/query/<dataset-name>?query=<GROQ-QUERY>" \
    --H "Authorization: Bearer <token>" \
```

Example response

```json
{
  "query": "*[releases::all()]",
  "result": [
    {
      "_createdAt": "2024-11-26T21:30:57Z",
      "finalDocumentStates": null,
      "_updatedAt": "2024-12-17T16:33:26Z",
      "_type": "system.release",
      "name": "rHw6FBu82",
      "_id": "_.releases.rHw6FBu82",
      "state": "active",
      "metadata": {
        "releaseType": "scheduled",
        "title": "End of year release",
        "intendedPublishAt": "Mon Dec 30 2024"
      },
      "publishAt": "2024-12-30T08:00:00Z",
      "_rev": "JmI5JuFTDPq3paS6p09Jmu",
      "userId": "paATypsg4"
    },
    {
      "publishAt": null,
      "_rev": "1kbjGQwz5Z0FmijO2l7Lwl",
      "finalDocumentStates": [
        {
          "id": "versions.rglJO3Sfg.movie_70981",
          "_key": "1kbjGQwz5Z0FmijO2l7M0E"
        }
      ],
      "_id": "_.releases.rglJO3Sfg",
      "state": "published",
      "metadata": {
        "title": "Quick fixes",
        "releaseType": "asap"
      },
      "_createdAt": "2024-11-26T22:01:56Z",
      "_type": "system.release",
      "name": "rglJO3Sfg",
      "_updatedAt": "2024-12-02T17:32:59Z",
      "userId": ""
    },
    {
      "_createdAt": "2024-11-26T18:34:14Z",
      "name": "rqZSzJ1uS",
      "finalDocumentStates": [
        {
          "id": "versions.rqZSzJ1uS.movie_10681"
        }
      ],
      "userId": "paATypsg4",
      "_id": "_.releases.rqZSzJ1uS",
      "state": "published",
      "_updatedAt": "2024-12-05T17:22:00Z",
      "metadata": {
        "releaseType": "scheduled",
        "description": "Experimental updates for testing",
        "title": "Experimental updates",
        "intendedPublishAt": "2024-12-05T17:22:00.000Z"
      },
      "publishAt": "2024-12-05T17:22:00Z",
      "_rev": "5dKCVUpSDccCmU1E23aUAc",
      "_type": "system.release"
    },
  ],
  "syncTags": [
    "s1:r6H+EQ"
  ],
  "ms": 3
}
```

To view only active releases, and exclude archived releases, adjust your GROQ query to compare the `state` property.

```text
releases::all()[state == 'active']
```

## Get all documents from a release

Query all documents associated with a release.

### JS client

```
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset>',
    useCdn: true,
    apiVersion: '2025-02-19',
    token: '<token>',
})

const release = await client.releases.get({
  releaseId: 'r123456',
})
```

This is the equivalent of using the `sanity::partOfRelease` GROQ function.

### `sanity::partOfRelease` GROQ function

The sanity::partOfRelease GROQ function accepts a release name and returns all documents associated with the release.

> \[!TIP]
> Release ID vs. release name
> Release names are the final piece of a release ID. For example, a release with an id of `_.releases.rEGM2JqQ3` has a name of `rEGM2JqQ3`. Use just the name final portion of the ID when referencing releases by name.

Use the function in a GROQ query and pass the release name string.

```typescript
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset>',
    useCdn: false,
    apiVersion: '2025-02-19',
    token: '<token>',
    perspective: 'raw'
})

const query = "*[sanity::partOfRelease(<release-name>)] { _id }"
const params = {}
client.fetch(query, params).then((data)=>{
  console.log(data)
})
```

## Get all versions of a document

Query all versions (published, drafts, and release versions) of a document.

### `sanity::versionOf` GROQ function

The `sanity::versionOf` GROQ function accepts a document ID and returns all versions of a document.

Use the function in a GROQ query and pass the document ID string.

```typescript
import { createClient } from "@sanity/client";
import { getPublishedId } from "sanity"

const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset>',
    useCdn: false,
    apiVersion: '2025-02-19',
    token: '<token>',
    perspective: 'raw'
})

const query = "*[sanity::versionOf($publishedId)] { _id }"
const params = {
  publishedId: getPublishedId(documentId)
}
client.fetch(query, params).then((data)=>{
  console.log(data)
})
```

> \[!WARNING]
> Gotcha
> The function expects a published document ID. For example: `abc123` is acceptable, but `drafts.abc123` and `versions.r1324.abc123` are not. You can use the `getPublishedId` helper imported from `sanity` to derive it from any Id.

The function also works with the Query API and anywhere that supports GROQ functions.

### Doc API

Use the document ID, along with the [Doc API endpoint](https://www.sanity.io/docs/http-reference/doc) to retrieve all versions of a specific document. The `includeAllVersions` boolean query parameter returns all versions for the document.

Input

```sh
GET /vX/data/doc/production/movie_70981?includeAllVersions=true
```

Example response

```json
{
  "documents": [
    {
      "_createdAt": "2018-06-13T08:57:45Z",
      "_id": "movie_70981",
      "_rev": "1kbjGQwz5Z0FmijO2l7Lwl",
      "_type": "movie",
      "_updatedAt": "2024-12-02T17:32:59Z",
      // ...
    },
    {
      "_createdAt": "2018-06-13T08:57:45Z",
      "_id": "drafts.movie_70981",
      "_rev": "3276f9d1-0343-4b78-a79e-8c6561942f1b",
      "_type": "movie",
      "_updatedAt": "2024-12-02T17:14:27Z",
      // ...
    },
    {
      "_createdAt": "2018-06-13T08:57:45Z",
      "_id": "versions.rHw6FBu82.movie_70981",
      "_rev": "a000fa99-072c-434c-8669-825103a111b7",
      "_type": "movie",
      "_updatedAt": "2024-11-27T18:36:19Z",
      // ...
    }
  ],
  "omitted": []
}

```

## Use releases in perspective queries

Content Releases use a layering system that layers document versions atop one another, allowing you to create a custom perspective stack. You can learn more about layering in the [Content Releases User Guide](https://www.sanity.io/docs/user-guides/content-releases).

Perspective in addition to accepting the `raw`, `published`, and `drafts` states, also accepts a comma-separated list of release names. Releases take priority from left to right.

For example, in the perspective `a,b,c` you would see changes in `a` take priority over `b` and `c`, and changes in `b` take priority over `c`.

The `published` perspective is automatically added to the end, so even if a release only contains changes to one document, the response will include all matching published documents in addition to the release changes.

### Query API

To query against a list of releases, use the `perspective` query parameter and order the release names by priority from left to right. For example: `?perspective=a,b,c`.

Using a GROQ query such as `*[_type == 'movie'] { _id }` will return all document IDs that match the releases layer.

Input

```sh
GET https://<projectId>.api.sanity.io/vX/data/query/<dataset>?query‌‌‌‌‌‌=<GROQ-QUERY>&perspective=<release-name1>,<release-name2>
```

Example response

```json
{
  "query": "*[_type == 'movie']{ _id }",
  "result": [
    { "_id": "a306e7cf-ea18-4a43-8ce2-0586073c41c8" },
    { "_id": "movie_10681" },
    { "_id": "movie_118340" },
    { "_id": "movie_126889" },
    { "_id": "movie_157336" },
    { "_id": "movie_17654" },

  ],
  "syncTags": ["s1:+jIWIw"],
  "ms": 5
}

```

### JavaScript Client

In addition to the `raw`, `published`, and `drafts` values, the client also accepts an array of release name strings. You can add `drafts` to the end of the array to include drafts that aren't part of any release.

Edit the perspective value to insert your release names.

```typescript
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset>',
    useCdn: false, // Don't use the CDN for draft/release previewing
    apiVersion: '2025-02-19',
    token: '<token>',
    perspective: ['<release-name-1>', '<release-name-2>']
})

const query = "*[_type == 'movie']"
const params = {}
client.fetch(query, params).then((data)=>{
  console.log(data)
})
```

Another common pattern is to extend your client configuration for releases and draft preview by creating a new client from the existing one.

```tsx
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset>',
    useCdn: true,
    apiVersion: '2024-08-01',
    token: '<token>',
    perspective: 'published' //default
})

const previewClient = client.withConfig({
  useCdn: false,
  apiVersion: '2025-02-19',
  perspective: ['<release name>', 'drafts']
})
```

## Trigger webhook or functions by release state

The Release documents can be queried and trigger assigned webhooks.

The most useful way of triggering webhooks might be off the release `state`.

A release may have the following states:

- `active`: The general state of a release that is not within one of the other states.
- `scheduled`: A state resulting from calling the `sanity.action.release.schedule` action on the release.
- `published`: A state resulting from either calling the `sanity.action.release.publish` action, or when a scheduled release is published due to reaching its `publishAt` time.
- `archived`: A state resulting from calling the `sanity.action.release.archive` action.
- `deleted`: A state resulting from calling the `sanity.action.release.delete` action on an archived release.

Additional transient states exist to indicate the asynchronous points when releases move between states:

- `scheduling`/`unscheduling`: Intermediate states which will exist when moving to/from the `scheduled` state.
- `archiving`/`unarchiving`: Intermediate states which will exist when moving to/from the `archived` state.
- `publishing`: Intermediate state which will exist before reaching the `published` state. Note that a scheduled release will also transition through `publishing`.

### Functions

You can create [Sanity Functions](https://www.sanity.io/docs/functions/functions-introduction) that activate when you create a release, or when it moves through different states.

**Every release creation or update**

```
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: 'release-function',
      event: {
        on: ['create', 'update'],
        filter: '_type == "system.release"'
      }
    }),
  ],
})‌
```

**State changed**

```
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: 'release-function',
      event: {
        on: ['update'],
        filter: '_type == "system.release" && delta::changedAny(state) && state == "published"'
      }
    }),
  ],
})‌
```

### Webhook

To create a webhook that listens to all new releases, define a webhook rule as follows:

```json
"rule":{
  "on":["create"],
  "filter":"_type == 'system.release'"
}
```

Additionally filters can enable triggering only on releases of a particular state. In this example only releases that have transitioned into a `published` state will trigger the webhook:

```json
"rule": {
  "on": ["update"],
  "filter": "_type == 'system.release' && delta::changedAny(state) && state == 'published'"
}
```

## Find documents scheduled for deletion

Sometimes you have a release that will delete documents. You can query for a list of scheduled-for-deletion docs with GROQ. Replace the `$releaseName` parameter in the following example with your own release name.

```
releases::all()[name == $releaseName] {
  _id,
  "docs": *[sanity::partOfRelease(^.name) && _system.delete == true]._id
}
```

## Patch all versions of a document

If you need to make an update to all versions of a document, you can use the mutations API along with the `sanity::versionOf` GROQ function.

**JS Client**

```
await client
  .patch({query: `*[sanity::versionOf('your-document-id')]`})
  .set({
    title: "example"
  })
  .commit()
```

**HTTP**

```text
curl --location 'https://<project-id>.api.sanity.io/v2025-03-01/data/mutate/<dataset>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <token>' \
--data '{ 
  "mutations": [
    {"patch": {
        "query": "*[sanity::versionOf('\''{doc-id}'\'')]",
        "set": {
            "field": "value"   
        }
    }
    }
  ]
}'
```

## Query and sort releases for perspective-building

Sometimes you want to build your own perspective stack outside of a preview / visual editing context. You can do so by querying, filtering, and then sorting the releases.

This example:

- Queries releases by their type.
- Orders the results by descending date, so the furthest in the future show first. For scheduled releases, this uses the scheduled date or the target release date. For other types, it uses the \_createdAt datetime value.
- Builds a perspective stack that you can use to query content. Note that using the full stack like this will essentially act as "raw", with some slight layering differences depending on the ordering.

In practice, you should adjust the criteria for which releases to include.

**Example**

```
// make sure your client uses the `raw` perspective and a supported API version.
import { client } from "./client.ts";

type Release = { name: string };

const RELEASES_QUERY = `{
  "undecided": *[_type == "system.release" && state == "active" && metadata.releaseType == "undecided"] | order(_createdAt desc) {
    _id,
    _createdAt,
    name,
    metadata {
      title
    }
  },
  "asap": *[_type == "system.release" && state == "active" && metadata.releaseType == "asap"] | order(_createdAt desc) {
    _id,
    _createdAt,
    name,
    metadata {
      title
    }
  },
  "scheduled": *[_type == "system.release" && state in ["active", "scheduled"] && metadata.releaseType == "scheduled"]  | order(coalesce(publishAt, metadata.intendedPublish), desc) {
    _id,
    _createdAt,
    name,
    publishAt,
    metadata {
      title,
      intendedPublishAt
    },
  }
}`;

const releasesByType = await client.fetch(RELEASES_QUERY);
const { undecided, asap, scheduled }: { undecided: Release[]; asap: Release[]; scheduled: Release[] } = releasesByType;

const perspectiveStack = [
  'drafts', 
  ...asap.map(release => release.name), 
  ...scheduled.map(release => release.name), 
  ...undecided.map(release => release.name)
  // published is automatically applied to perspective stacks
];

// use your new perspective to create a new client
const pespectiveClient = client.withConfig({ perspective: perspectiveStack });
```

Perspectives take priority from left to right. Learn more in the [perspective documentation](https://www.sanity.io/docs/content-lake/perspectives).

## Get perspective stack in custom components

If you're building with Studio, you can use the [usePerspective hook](https://reference.sanity.io/sanity/index/usePerspective/) to retrieve the active perspective stack.

```
import { usePerspective } from 'sanity'

function MyComponent() {
 const { perspectiveStack } = usePerspective()
  // ...
}
```
