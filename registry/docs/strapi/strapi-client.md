# Strapi Client

The Strapi Client library simplifies interactions with your Strapi back end, providing a way to fetch, create, update, and delete content. This guide walks you through setting up the Strapi Client, configuring authentication, and using its key features effectively.

## Getting Started

- A Strapi project has been created and is running. If you haven't set one up yet, follow the [Quick Start Guide](/cms/quick-start) to create one.
- You know the URL of the Content API of your Strapi instance (e.g., `http://localhost:1337/api`).

### Installation

To use the Strapi Client in your project, install it as a dependency using your preferred package manager:

### Basic configuration

To start interacting with your Strapi back end, initialize the Strapi Client and set the base API URL:

The `baseURL` must include the protocol (`http` or `https`). An invalid URL will throw an error `StrapiInitializationError`.

### Authentication

The Strapi Client supports different authentication strategies to access protected resources in your Strapi back end.

If your Strapi instance uses [API tokens](/cms/features/api-tokens), configure the Strapi Client as follows:

```js
const client = strapi({
  baseURL: 'http://localhost:1337/api',
  auth: 'your-api-token-here',
});
```

This allows your requests to include the necessary authentication credentials automatically.
If the token is invalid or missing, the client will throw an error during initialization `StrapiValidationError`.

## API Reference

The Strapi Client provides the following key properties and methods for interacting with your Strapi back end:

| Parameter | Description                                                                                  |
| ----------| -------------------------------------------------------------------------------------------- |
| `baseURL`  | The base API URL of your Strapi back end.        |
| `fetch()`    | A utility method for making generic API requests similar to the native fetch API. |
| `collection()`  | Manages collection-type resources (e.g., blog posts, products). |
| `single()`  | Manages single-type resources (e.g., homepage settings, global configurations). |
| `files()`  | Enables upload, retrieve and management of files directly to/from the Strapi Media Library. |

### General purpose fetch

The Strapi Client provides access to the underlying JavaScript `fetch` function to make direct API requests. The request is always relative to the base URL provided during client initialization:

```js
const result = await client.fetch('articles', { method: 'GET' });
```

### Working with collection types

Collection types in Strapi are entities with multiple entries (e.g., a blog with many posts). The Strapi Client provides a `collection()` method to interact with these resources, with the following methods available:

| Parameter | Description                                                                                  |
| ----------| -------------------------------------------------------------------------------------------- |
| `find(queryParams?)`  | Fetch multiple documents with optional filtering, sorting, or pagination.       |
| `findOne(documentID, queryParams?)`    | Retrieve a single document by its unique ID.        |
| `create(data, queryParams?)`  | Create a new document in the collection. |
| `update(documentID, data, queryParams?)`  | Update an existing document. |
| `delete(documentID, queryParams?)`  | Update an existing document. |

**Usage examples:**

### Working with single types

Single types in Strapi represent unique content entries that exist only once (e.g., the homepage settings or site-wide configurations). The Strapi Client provides a `single()` method to interact with these resources, with the following methods available:
| Parameter | Description                                                                                  |
| ----------| -------------------------------------------------------------------------------------------- |
| `find(queryParams?)`  | Fetch the document.        |
| `update(documentID, data, queryParams?)`  | Update the document. |
| `delete(queryParams?)`  | Remove the document. |

**Usage examples:**

```js
const homepage = client.single('homepage');

// Fetch the default homepage content
const defaultHomepage = await homepage.find();

// Fetch the Spanish version of the homepage
const spanishHomepage = await homepage.find({ locale: 'es' });

// Update the homepage draft content
const updatedHomepage = await homepage.update(
  { title: 'Updated Homepage Title' },
  { status: 'draft' }
);

// Delete the homepage content
await homepage.delete();
```

### Working with files

The Strapi Client provides access to the [Media Library](/cms/features/media-library) via the `files` property. This allows you to retrieve and manage file metadata without directly interacting with the REST API.

The following methods are available for working with files. Click on the method name in the  table to jump to the corresponding section with more details and examples:

| Method | Description |
|--------|-------------|
| [`find(params?)`](#find) | Retrieves a list of file metadata based on optional query parameters |
| [`findOne(fileId)`](#findone) | Retrieves the metadata for a single file by its ID |
| [`update(fileId, fileInfo)`](#update) | Updates metadata for an existing file |
| [`upload(file, options)`](#upload) | Uploads a file (Blob or Buffer) with an optional `options` object for metadata |
| [`delete(fileId)`](#delete) | Deletes a file by its ID |

#### `find`

The `strapi.client.files.find()` method retrieves a list of file metadata based on optional query parameters.

The method can be used as follows:

```js
// Initialize the client
const client = strapi({
  baseURL: 'http://localhost:1337/api',
  auth: 'your-api-token',
});

// Find all file metadata
const allFiles = await client.files.find();
console.log(allFiles);

// Find file metadata with filtering and sorting
const imageFiles = await client.files.find({
  filters: {
    mime: { $contains: 'image' }, // Only get image files
    name: { $contains: 'avatar' }, // Only get files with 'avatar' in the name
  },
  sort: ['name:asc'], // Sort by name in ascending order
});
```

#### `findOne`

The `strapi.client.files.findOne()` method retrieves the metadata for a single file by its id.

The method can be used as follows:

```js
// Initialize the client
const client = strapi({
  baseURL: 'http://localhost:1337/api',
  auth: 'your-api-token',
});

// Find file metadata by ID
const file = await client.files.findOne(1);
console.log(file.name);
console.log(file.url); 
console.log(file.mime); // The file MIME type
```

#### `update`

The `strapi.client.files.update()` method updates metadata for an existing file, accepting 2 parameters, the `fileId`, and an object containing options such as the name, alternative text, and caption for the media.

The methods can be used as follows:

```js
// Initialize the client
const client = strapi({
  baseURL: 'http://localhost:1337/api',
  auth: 'your-api-token',
});

// Update file metadata
const updatedFile = await client.files.update(1, {
  name: 'New file name',
  alternativeText: 'Descriptive alt text for accessibility',
  caption: 'A caption for the file',
});
```

#### `upload`

##### Response Structure

The `strapi.client.files.upload()` method returns an array of file objects, each with fields such as:

```json
{
  "id": 1,
  "name": "image.png",
  "alternativeText": "Uploaded from Node.js Buffer",
  "caption": "Example upload",
  "mime": "image/png",
  "url": "/uploads/image.png",
  "size": 12345,
  "createdAt": "2025-07-23T12:34:56.789Z",
  "updatedAt": "2025-07-23T12:34:56.789Z"
}
```

The upload response includes additional fields beyond those shown above. See the complete FileResponse interface in the  for all available fields.

#### `delete`

The `strapi.client.files.delete()` method deletes a file by its ID.

The method can be used as follows:

```js
// Initialize the client
const client = strapi({
  baseURL: 'http://localhost:1337/api',
  auth: 'your-api-token',
});

// Delete a file by ID
const deletedFile = await client.files.delete(1);
console.log('File deleted successfully');
console.log('Deleted file ID:', deletedFile.id);
console.log('Deleted file name:', deletedFile.name);
```

## Handling Common Errors

The following errors might occur when sending queries through the Strapi Client:

| Error | Description |
|-------|-------------|
| Permission Errors | If the authenticated user does not have permission to upload or manage files, a `FileForbiddenError` is thrown. |
| HTTP Errors|If the server is unreachable, authentication fails, or there are network issues, an `HTTPError` is thrown. |
| Missing Parameters|When uploading a `Buffer`, both `filename` and `mimetype` must be provided in the options object. If either is missing, an error is thrown. |

More details about the Strapi Client may be found in the .

# Content API

Source: //cms/api/content-api

# Strapi APIs to access your content

Once you've created and configured a Strapi project, created a content structure with the [Content-Type Builder](/cms/features/content-type-builder) and started adding data through the [Content Manager](/cms/features/content-manager), you likely would like to access your content.

From a front-end application, your content can be accessed through Strapi's Content API, which is exposed:

- by default through the [REST API](/cms/api/rest)
- and also through the [GraphQL API](/cms/api/graphql) if you installed the Strapi built-in [GraphQL plugin](/cms/plugins/graphql).

You can also use the [Strapi Client](/cms/api/client) library to interact with the REST API.

REST and GraphQL APIs represent the top-level layers of the Content API exposed to external applications. Strapi also provides 2 lower-level APIs:

- The [Document Service API](/cms/api/document-service), accessible through `strapi.documents`, is the recommended API to interact with your application's database within the [backend server](/cms/customization) or through [plugins](/cms/plugins-development/developing-plugins). The Document Service is the layer that handles **documents**

# Documents

Source: //cms/api/document
