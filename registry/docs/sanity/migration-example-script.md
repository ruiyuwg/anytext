## Migration example script

In a new directory, initialize an NPM/PNPM project. If you prefer, you can use an existing Sanity project, but we'll be adding some development dependencies.

> \[!WARNING]
> Experimental
> This script is experimental and intended as an example solution. While it has worked for many test cases, it is not an official drop-in solution. We highly suggest performing your own tests and modifying the code to fit your needs.
> If you're unsure, we recommend waiting until a direct migration tool is released.

**NPM**

```sh
npm init
```

**PNPM**

```sh
pnpm init
```

Install types and dependencies:

**NPM**

```sh
npm i dotenv ndjson
```

**PNPM**

```sh
npm add dotenv ndjson
```

And finally types:

**NPM**

```sh
npm i -D @types/node @types/ndjson
```

**PNPM**

```sh
pnpm add -D @types/node @types/ndjson
```

Next, create a `.env` file with the following values:

**.env**

```text
SANITY_TOKEN=
SANITY_PROJECT_ID=
SANITY_SOURCE_DATASET=
SANITY_MEDIA_LIBRARY_ID=
IMAGES_DIR=
FILES_DIR=
DATA_FILE_PATH=
ASSETS_FILE_PATH=
```

- `SANITY_TOKEN`: Run `npx sanity debug --secrets` to obtain your auth token. You'll need read/write access to the source dataset and Media Library.
- `SANITY_PROJECT_ID`: Copy your projectId from [sanity.io/manage](https://www.sanity.io/manage).
- `SANITY_SOURCE_DATASET`: Set to the dataset containing the documents and images you wish to update.
- `SANITY_MEDIA_LIBRARY_ID`: Set to your Media Library ID. You can obtain this from the Media Library URL. [See this guide for details](https://www.sanity.io/docs/media-library/configure-library).
- `IMAGES_DIR`: Set to the path to the `images` folder in the exported dataset archive. This path is relative to the current directory.
- `FILES_DIR`: Set to the path to the `files` folder in the exported dataset archive. This path is relative to the current directory.
- `DATA_FILE_PATH`: The path to the `data.ndjson` file relative to the current directory.
- `ASSETS_FILE_PATH`: The path to the `assets.json` file relative to the current directory.

Finally, create a TypeScript file and add code below. We'll name ours `migrate-media.ts`.

You can run the code with `tsx`.

**NPX**

```sh
npx tsx migrate-media.ts
```

It comes with a few options:

- `--dry-run`: Explains what the script *would do* based on your options, but won't perform any writes.
- `--verbose`: Outputs all logging details as each image is uploaded, linked, etc.
- `--test-image <image-name>`: You can pass an individual image name to see how the script will act on an individual image.
- `--include-aspects`: Use this flag to also map Media Plugin metadata onto aspects when available. Make sure to [create a new aspect](https://www.sanity.io/docs/media-library/create-aspect) named `metadata`. See the example aspect file.

**migrate-media.ts**

```
import * as fs from 'node:fs'
import * as path from 'node:path'
import {config} from 'dotenv'
import ndjson from 'ndjson'

// Define interface for migration options
export interface MigrateMediaOptions {
  projectId: string
  dataset: string
  mediaLibraryId: string
  sanityToken: string
  imagesDir: string
  filesDir: string
  dataFilePath: string
  assetsFilePath: string
  isDryRun?: boolean
  isVerbose?: boolean
  testImageName?: string
  includeAspects?: boolean
}

// Load environment variables from .env file when running as CLI
if (fs.existsSync('./.env')) {
  config({path: './.env'})
}

interface Document {
  _id: string
  _type: string
  [key: string]: any
}

interface UploadResult {
  assetId: string
  assetInstanceId: string
}

interface ImageProcessingResult {
  filename: string
  hash: string
  success: boolean
  error?: string
}

interface FileProcessingResult {
  filename: string
  hash: string
  success: boolean
  error?: string
}

// Add command line argument parsing
function parseCliArgs() {
  const args = process.argv.slice(2)
  const isDryRun = args.includes('--dry-run')
  const isVerbose = args.includes('--verbose')
  const includeAspects = args.includes('--include-aspects') // migrate legacy metadata to aspects
  const testImageIndex = args.indexOf('--test-image')
  const testImageName = testImageIndex !== -1 ? args[testImageIndex + 1] : undefined
  const BATCH_SIZE = 20 // Number of images to process in parallel

  return {
    isDryRun,
    isVerbose,
    testImageName,
    includeAspects,
    BATCH_SIZE,
  }
}

// Only logs if verbose flag is present
function logVerbose(isVerbose: boolean, ...args: any[]) {
  if (isVerbose) {
    console.log(...args)
  }
}

// Always prints a message, clearing the previous line if not in verbose mode
function logStatus(isVerbose: boolean, message: string) {
  if (!isVerbose) {
    process.stdout.write('\r'.padEnd(process.stdout.columns || 80) + '\r') // Clear line first
  }
  console.log(message) // Always log the status
}

// Function to validate path segments
function validatePathSegment(segment: string, index: number): void {
  if (segment === undefined || segment === null || segment === '') {
    throw new Error(`Invalid path segment at index ${index}: segment is empty or undefined`)
  }

  // Check if this is an array index
  if (!isNaN(Number(segment))) {
    return // Valid array index
  }

  // Check for valid property name format
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(segment)) {
    throw new Error(
      `Invalid property name at index ${index}: "${segment}" - must start with a letter or underscore and contain only alphanumeric characters and underscores`,
    )
  }
}

// Function to build field path. The path is used to patch documents that contain the image.
function buildFieldPath(fieldPath: string[]): string {
  if (!fieldPath || fieldPath.length === 0) {
    throw new Error('Field path cannot be empty')
  }

  // Validate all segments first
  fieldPath.forEach((segment, index) => validatePathSegment(segment, index))

  let path = fieldPath[0]

  for (let i = 1; i < fieldPath.length; i++) {
    const segment = fieldPath[i]
    // If the segment is a number or looks like an array index, wrap it in brackets
    if (/^\d+$/.test(segment) || segment.startsWith('[')) {
      path += `[${segment}]`
    } else {
      path += `.${segment}`
    }
  }

  return path
}

// Function to find image references in a document.
async function findImageReferences(
  doc: Document,
): Promise<{docId: string; path: string; fieldPath: string[]}[]> {
  const results: {docId: string; path: string; fieldPath: string[]}[] = []

  function traverse(obj: any, currentPath: string[] = []) {
    if (!obj || typeof obj !== 'object') return

    if (obj._sanityAsset && obj._sanityAsset.startsWith('image@file://./images/')) {
      const imagePath = obj._sanityAsset.replace('image@file://./images/', '')
      results.push({
        docId: doc._id,
        path: imagePath,
        fieldPath: [...currentPath],
      })
    }

    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        traverse(value, [...currentPath, key])
      }
    })
  }

  traverse(doc)
  return results
}

// Function to find file references in a document.
async function findFileReferences(
  doc: Document,
): Promise<{docId: string; path: string; fieldPath: string[]}[]> {
  const results: {docId: string; path: string; fieldPath: string[]}[] = []

  function traverse(obj: any, currentPath: string[] = []) {
    if (!obj || typeof obj !== 'object') return

    if (obj._sanityAsset && obj._sanityAsset.startsWith('file@file://./files/')) {
      const filePath = obj._sanityAsset.replace('file@file://./files/', '')
      results.push({
        docId: doc._id,
        path: filePath,
        fieldPath: [...currentPath],
      })
    }

    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        traverse(value, [...currentPath, key])
      }
    })
  }

  traverse(doc)
  return results
}

// Function to verify image file before upload
function verifyImageFile(filePath: string): {exists: boolean; size: number} {
  try {
    if (!fs.existsSync(filePath)) {
      return {exists: false, size: 0}
    }
    const stats = fs.statSync(filePath)
    return {exists: true, size: stats.size}
  } catch (error) {
    console.error(`Error verifying file ${filePath}: ${error.message || error}`)
    return {exists: false, size: 0}
  }
}

// Function to verify file before upload
function verifyFile(filePath: string): {exists: boolean; size: number} {
  try {
    if (!fs.existsSync(filePath)) {
      return {exists: false, size: 0}
    }
    const stats = fs.statSync(filePath)
    return {exists: true, size: stats.size}
  } catch (error) {
    console.error(`Error verifying file ${filePath}: ${error.message || error}`)
    return {exists: false, size: 0}
  }
}

// Function to upload asset to media library
// Returns an object with assetId and assetInstanceId or throws error
async function uploadAsset(
  mediaLibraryId: string,
  token: string,
  assetPath: string,
  isVerbose: boolean,
): Promise<UploadResult> {
  const baseUrl = `https://api.sanity.io/v2024-06-24/media-libraries/${mediaLibraryId}/upload`
  const parts = assetPath.split('/')
  const filename = parts[parts.length - 1]

  const fileInfo = verifyFile(assetPath)
  if (!fileInfo.exists) {
    throw new Error(`File not found: ${assetPath}`)
  }
  if (fileInfo.size === 0) {
    throw new Error(`File is empty: ${assetPath}`)
  }

  const params: Record<string, string> = {
    filename,
    autoGenerateTitle: 'true',
  }
  const queryParams = new URLSearchParams(params).toString()
  const url = `${baseUrl}?${queryParams}`

  try {
    logVerbose(isVerbose, 'Uploading asset with:', {
      mediaLibraryId,
      tokenLength: token.length,
      assetPath,
      url,
    })

    const body = fs.readFileSync(assetPath)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
      body,
    })

    const responseText = await response.text()
    if (!response.ok) {
      throw new Error(
        `Upload HTTP Error: ${response.status} ${response.statusText} - ${responseText}`,
      )
    }

    try {
      const parsedResponse = JSON.parse(responseText)

      const assetId = parsedResponse?.asset?._id
      const assetInstanceId = parsedResponse?.assetInstance?._id

      if (!assetId || !assetInstanceId) {
        throw new Error(
          `Required ID(s) not found in parsed response (assetId: ${assetId}, assetInstanceId: ${assetInstanceId}). Structure logged above. Response: ${responseText}`,
        )
      }
      logVerbose(
        isVerbose,
        `Upload successful for ${filename}, received assetId: ${assetId}, assetInstanceId: ${assetInstanceId}`,
      )
      return {assetId, assetInstanceId}
    } catch (parseError) {
      throw new Error(
        `Failed to parse upload server response: ${parseError.message} - Response: ${responseText}`,
      )
    }
  } catch (error) {
    throw new Error(`Upload failed for ${filename}: ${error.message}`)
  }
}

// Helper function for delaying execution
async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Function to link media library asset with exponential backoff retry
async function linkMediaLibraryAsset(
  token: string,
  projectId: string,
  dataset: string,
  mediaLibraryId: string,
  assetInstanceId: string,
  assetId: string,
  isVerbose: boolean,
) {
  const baseUrl = `https://${projectId}.api.sanity.io/v2025-01-04/assets/media-library-link/${dataset}`
  const maxRetries = 6 // Will give us roughly 1 minute total (1+2+4+8+16+32 = 63 seconds)
  const baseDelay = 1000 // Start with 1 second
  const maxTimeout = 60000 // 1 minute total timeout

  const startTime = Date.now()

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    // Check if we've exceeded the total timeout
    if (Date.now() - startTime > maxTimeout) {
      throw new Error(`Failed to link Media Library asset (ID: ${assetId}): Timeout after ${maxTimeout}ms`)
    }

    try {
      logVerbose(isVerbose, `Linking media library asset (attempt ${attempt + 1}/${maxRetries + 1}):`, {
        url: baseUrl,
        mediaLibraryId,
        assetId,
        assetInstanceId,
      })

      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          mediaLibraryId,
          assetInstanceId,
          assetId,
        }),
      })

      if (!response.ok) {
        let errorData = {}
        let errorText = ''
        try {
          errorData = await response.json()
          errorText = JSON.stringify(errorData)
        } catch (e) {
          errorText = await response.text()
          errorData = {
            error: 'Failed to parse error response',
            responseText: errorText,
          }
        }

        // Check if this is a "Media library asset is not ready" error
        if (errorText.includes('Media library asset is not ready')) {
          if (attempt < maxRetries) {
            const delay = Math.min(baseDelay * Math.pow(2, attempt), maxTimeout - (Date.now() - startTime))
            logVerbose(isVerbose, `Media library asset not ready, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries + 1})`)
            await sleep(delay)
            continue
          }
        }

        throw new Error(
          `Link HTTP Error: ${response.status} ${response.statusText} - ${errorText}`,
        )
      }

      const result = await response.json()
      logVerbose(isVerbose, `Media Library asset linked successfully on attempt ${attempt + 1}:`, result)
      return result
    } catch (error) {
      // If it's a network error or other non-HTTP error, retry as well
      if (attempt < maxRetries && (error.message.includes('fetch') || error.message.includes('network'))) {
        const delay = Math.min(baseDelay * Math.pow(2, attempt), maxTimeout - (Date.now() - startTime))
        logVerbose(isVerbose, `Network error, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries + 1}): ${error.message}`)
        await sleep(delay)
        continue
      }
      
      // If it's the final attempt or a non-retryable error, throw
      throw new Error(`Failed to link Media Library asset (ID: ${assetId}): ${error.message}`)
    }
  }

  // This should never be reached, but just in case
  throw new Error(`Failed to link Media Library asset (ID: ${assetId}): Maximum retry attempts exceeded`)
}

// Process a single image through all steps
async function processImage(
  filename: string,
  index: number,
  totalImagesInThisRun: number,
  imagesDir: string,
  dataFilePath: string,
  mediaLibraryId: string,
  sanityToken: string,
  projectId: string,
  dataset: string,
  documentUpdateLimiter: RateLimiter,
  mediaLibraryLimiter: RateLimiter,
  aspectUpdateLimiter: RateLimiter,
  parsedDocuments: Document[],
  parsedAssets: any,
  tags: Map<string, string>,
  uploadedAssetIds: Map<string, UploadResult>,
  isDryRun: boolean,
  isVerbose: boolean,
  includeAspects: boolean,
): Promise<ImageProcessingResult> {
  const hash = filename.split('-')[0]
  const result: ImageProcessingResult = {
    filename,
    hash,
    success: false,
  }

  try {
    // Only log detailed progress in verbose mode
    const imageProgress = `(${index + 1}/${totalImagesInThisRun})`
    logVerbose(isVerbose, `\nProcessing ${filename} ${imageProgress}`)

    // Upload step
    // Uploads the image to the media library,
    // adds the actualAssetId to a map of asset IDs.
    const filepath = path.resolve(imagesDir, filename)
    if (isDryRun) {
      logVerbose(
        isVerbose,
        `DRY RUN ${imageProgress}: Would upload ${filename} with auto-generated title`,
      )
    } else {
      logVerbose(isVerbose, `Uploading ${imageProgress} ${filename}...`)

      const actualAssetId = await mediaLibraryLimiter.enqueue(() =>
        uploadAsset(mediaLibraryId, sanityToken, filepath, isVerbose),
      )
      uploadedAssetIds.set(hash, actualAssetId)
      logVerbose(isVerbose, `Upload ${imageProgress}: ${filename} uploaded successfully.`)
    }

    // Link step: Take the assetId and asset instance ID from the upload step,
    // and link them to the source dataset.

    // Pull the asset details from the upload map.
    const uploadResult = uploadedAssetIds.get(hash)
    if (!isDryRun && !uploadResult) {
      throw new Error(
        `Cannot link, upload result for hash ${hash} not found (upload likely failed).`,
      )
    }

    if (isDryRun) {
      const dryAssetId = uploadResult?.assetId || `mock-asset-id-${hash}`
      logVerbose(
        isVerbose,
        `DRY RUN ${imageProgress}: Would link ${filename} (using Asset ID: ${dryAssetId})`,
      )
    } else {
      const {assetId, assetInstanceId} = uploadResult!
      logVerbose(isVerbose, `Linking ${imageProgress} ${filename}...`)

      await mediaLibraryLimiter.enqueue(() =>
        linkMediaLibraryAsset(
          sanityToken,
          projectId,
          dataset,
          mediaLibraryId,
          assetInstanceId,
          assetId,
          isVerbose,
        ),
      )
      logVerbose(isVerbose, `Link ${imageProgress}: ${filename} linked.`)
    }

    // Documents step: Find all documents that contain the image.
    // This is done by searching through the parsed documents from the data file.
    // The field path is used to patch the document.
    const matchingDocs: {docId: string; fieldPath: string[]}[] = []
    logVerbose(isVerbose, `Docs ${imageProgress}: Reading references for ${filename}...`)
    try {
      for (const doc of parsedDocuments) {
        const refs = await findImageReferences(doc)
        const matches = refs.filter((ref) => ref.path.startsWith(hash))
        if (matches.length > 0) {
          for (const match of matches) {
            matchingDocs.push({docId: doc._id, fieldPath: match.fieldPath})
          }
        }
      }
    } catch (readError) {
      throw new Error(`Failed reading/parsing ${dataFilePath}: ${readError.message}`)
    }

    logVerbose(isVerbose, `Found ${matchingDocs.length} document references for ${filename}.`)

    if (isDryRun) {
      logVerbose(
        isVerbose,
        `DRY RUN ${imageProgress}: Would update ${matchingDocs.length} documents for ${filename}`,
      )
    } else {
      const uploadResult = uploadedAssetIds.get(hash)
      if (!uploadResult) {
        throw new Error(`Cannot update docs, asset ID for hash ${hash} not found.`)
      }

      const {assetId} = uploadResult
      if (matchingDocs.length > 0) {
        logVerbose(
          isVerbose,
          `Docs ${imageProgress}: Updating ${matchingDocs.length} refs for ${filename}...`,
        )

        const docBatchSize = 10
        let failedBatchCount = 0

        // Patch documents in batches with the GDR.
        for (let i = 0; i < matchingDocs.length; i += docBatchSize) {
          const batch = matchingDocs.slice(i, i + docBatchSize)
          const mutations = batch.map((doc) => ({
            patch: {
              id: doc.docId,
              set: {
                [`${buildFieldPath(doc.fieldPath)}.media`]: {
                  _type: 'globalDocumentReference',
                  _ref: `media-library:${mediaLibraryId}:${assetId}`,
                  _weak: true,
                },
              },
            },
          }))

          const url = `https://${projectId}.api.sanity.io/vX/data/mutate/${dataset}`

          await documentUpdateLimiter.enqueue(async () => {
            try {
              const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${sanityToken}`,
                },
                body: JSON.stringify({mutations}),
              })

              if (!response.ok) {
                const error = await response.json()
                logVerbose(isVerbose, 'Failed to update document batch:', error)
                failedBatchCount++
                return
              }

              logVerbose(
                isVerbose,
                `Successfully updated batch of ${batch.length} documents for ${filename}`,
              )
            } catch (fetchError) {
              logVerbose(isVerbose, 'Error during document update fetch:', fetchError)
              failedBatchCount++
            }
          })
        }

        if (failedBatchCount > 0) {
          throw new Error(`${failedBatchCount} batch(es) failed to update for ${filename}.`)
        }

        logVerbose(isVerbose, `Docs ${imageProgress}: ${filename} refs updated.`)
      } else {
        logVerbose(
          isVerbose,
          `Docs ${imageProgress}: No documents needed updating for ${filename}.`,
        )
      }
    }

    // Copy metadata to aspect.
    // use --include-aspects to enable.
    // Requires a deployed aspect named 'metadata' that matches the aspect shape.
    // Edit the shape in the patch below to match the desired shape in Media Library.

    if (isDryRun && includeAspects) {
      logVerbose(isVerbose, 'DRY RUN: Would update aspect with metadata.')
    } else if (includeAspects) {
      logVerbose(isVerbose, `Updating aspect data for ${imageProgress} ${filename}...`)
      // Assert non-null as we checked above
      const {assetId, assetInstanceId} = uploadResult!
      // We have to build the ID to match the key format found in assets.json
      const idParts = assetInstanceId.split('-')
      const assetDataId = `${idParts[0]}-${idParts[1]}`
      const asset = parsedAssets[assetDataId]
      // Pull the tags from the media plugin.
      const assetTags = asset?.opt?.media?.tags?.map((tag: any) => tags.get(tag._ref))
      const mutations = JSON.stringify({
        mutations: [
          {
            patch: {
              id: assetId,
              // Create an empty aspects object if it doesn't exist.
              setIfMissing: {aspects: {}},
              set: {
                'aspects.metadata': {
                  title: asset?.title || '',
                  description: asset?.description || '',
                  tags: assetTags || [],
                  creditLine: asset?.creditLine || '',
                  altText: asset?.altText || '',
                  originalFilename: asset?.originalFilename || '',
                },
              },
            },
          },
        ],
      })

      // Update the aspect by patching the asset in Media Library.
      await aspectUpdateLimiter.enqueue(async () => {
        const url = `https://api.sanity.io/v2024-06-24/media-libraries/${mediaLibraryId}/mutate`
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sanityToken}`,
            },
            body: mutations,
          })
          if (!response.ok) {
            const error = await response.json()
            logVerbose(isVerbose, 'Failed to update aspect:', error)
            return
          }
          logVerbose(isVerbose, `Successfully updated aspect for ${filename}`)
        } catch (error) {
          logVerbose(isVerbose, 'Error updating aspect with metadata:', error)
        }
      })
    }

    // Mark as successful
    result.success = true
    return result
  } catch (error) {
    result.error = error.message || String(error)
    logVerbose(isVerbose, `Error processing ${filename}: ${result.error}`)
    return result
  }
}

// Process a single file through all steps
async function processFile(
  filename: string,
  index: number,
  totalFilesInThisRun: number,
  filesDir: string,
  dataFilePath: string,
  mediaLibraryId: string,
  sanityToken: string,
  projectId: string,
  dataset: string,
  documentUpdateLimiter: RateLimiter,
  mediaLibraryLimiter: RateLimiter,
  aspectUpdateLimiter: RateLimiter,
  parsedDocuments: Document[],
  parsedAssets: any,
  tags: Map<string, string>,
  uploadedAssetIds: Map<string, UploadResult>,
  isDryRun: boolean,
  isVerbose: boolean,
  includeAspects: boolean,
): Promise<FileProcessingResult> {
  const hash = filename.split('-')[0]
  const result: FileProcessingResult = {
    filename,
    hash,
    success: false,
  }

  try {
    // Only log detailed progress in verbose mode
    const fileProgress = `(${index + 1}/${totalFilesInThisRun})`
    logVerbose(isVerbose, `\nProcessing ${filename} ${fileProgress}`)

    // Upload step
    // Uploads the file to the media library,
    // adds the actualAssetId to a map of asset IDs.
    const filepath = path.resolve(filesDir, filename)
    if (isDryRun) {
      logVerbose(
        isVerbose,
        `DRY RUN ${fileProgress}: Would upload ${filename} with auto-generated title`,
      )
    } else {
      logVerbose(isVerbose, `Uploading ${fileProgress} ${filename}...`)

      const actualAssetId = await mediaLibraryLimiter.enqueue(() =>
        uploadAsset(mediaLibraryId, sanityToken, filepath, isVerbose),
      )
      uploadedAssetIds.set(hash, actualAssetId)
      logVerbose(isVerbose, `Upload ${fileProgress}: ${filename} uploaded successfully.`)
    }

    // Link step: Take the assetId and asset instance ID from the upload step,
    // and link them to the source dataset.

    // Pull the asset details from the upload map.
    const uploadResult = uploadedAssetIds.get(hash)
    if (!isDryRun && !uploadResult) {
      throw new Error(
        `Cannot link, upload result for hash ${hash} not found (upload likely failed).`,
      )
    }

    if (isDryRun) {
      const dryAssetId = uploadResult?.assetId || `mock-asset-id-${hash}`
      logVerbose(
        isVerbose,
        `DRY RUN ${fileProgress}: Would link ${filename} (using Asset ID: ${dryAssetId})`,
      )
    } else {
      const {assetId, assetInstanceId} = uploadResult!
      logVerbose(isVerbose, `Linking ${fileProgress} ${filename}...`)

      await mediaLibraryLimiter.enqueue(() =>
        linkMediaLibraryAsset(
          sanityToken,
          projectId,
          dataset,
          mediaLibraryId,
          assetInstanceId,
          assetId,
          isVerbose,
        ),
      )
      logVerbose(isVerbose, `Link ${fileProgress}: ${filename} linked.`)
    }

    // Documents step: Find all documents that contain the file.
    // This is done by searching through the parsed documents from the data file.
    // The field path is used to patch the document.
    const matchingDocs: {docId: string; fieldPath: string[]}[] = []
    logVerbose(isVerbose, `Docs ${fileProgress}: Reading references for ${filename}...`)
    try {
      for (const doc of parsedDocuments) {
        const refs = await findFileReferences(doc)
        const matches = refs.filter((ref) => ref.path.startsWith(hash))
        if (matches.length > 0) {
          for (const match of matches) {
            matchingDocs.push({docId: doc._id, fieldPath: match.fieldPath})
          }
        }
      }
    } catch (readError) {
      throw new Error(`Failed reading/parsing ${dataFilePath}: ${readError.message}`)
    }

    logVerbose(isVerbose, `Found ${matchingDocs.length} document references for ${filename}.`)

    if (isDryRun) {
      logVerbose(
        isVerbose,
        `DRY RUN ${fileProgress}: Would update ${matchingDocs.length} documents for ${filename}`,
      )
    } else {
      const uploadResult = uploadedAssetIds.get(hash)
      if (!uploadResult) {
        throw new Error(`Cannot update docs, asset ID for hash ${hash} not found.`)
      }

      const {assetId} = uploadResult
      if (matchingDocs.length > 0) {
        logVerbose(
          isVerbose,
          `Docs ${fileProgress}: Updating ${matchingDocs.length} refs for ${filename}...`,
        )

        const docBatchSize = 10
        let failedBatchCount = 0

        // Patch documents in batches with the GDR.
        for (let i = 0; i < matchingDocs.length; i += docBatchSize) {
          const batch = matchingDocs.slice(i, i + docBatchSize)
          const mutations = batch.map((doc) => ({
            patch: {
              id: doc.docId,
              set: {
                [`${buildFieldPath(doc.fieldPath)}.media`]: {
                  _type: 'globalDocumentReference',
                  _ref: `media-library:${mediaLibraryId}:${assetId}`,
                  _weak: true,
                },
              },
            },
          }))

          const url = `https://${projectId}.api.sanity.io/vX/data/mutate/${dataset}`

          await documentUpdateLimiter.enqueue(async () => {
            try {
              const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${sanityToken}`,
                },
                body: JSON.stringify({mutations}),
              })

              if (!response.ok) {
                const error = await response.json()
                logVerbose(isVerbose, 'Failed to update document batch:', error)
                failedBatchCount++
                return
              }

              logVerbose(
                isVerbose,
                `Successfully updated batch of ${batch.length} documents for ${filename}`,
              )
            } catch (fetchError) {
              logVerbose(isVerbose, 'Error during document update fetch:', fetchError)
              failedBatchCount++
            }
          })
        }

        if (failedBatchCount > 0) {
          throw new Error(`${failedBatchCount} batch(es) failed to update for ${filename}.`)
        }

        logVerbose(isVerbose, `Docs ${fileProgress}: ${filename} refs updated.`)
      } else {
        logVerbose(
          isVerbose,
          `Docs ${fileProgress}: No documents needed updating for ${filename}.`,
        )
      }
    }

    // Copy metadata to aspect.
    // use --include-aspects to enable.
    // Requires a deployed aspect named 'metadata' that matches the aspect shape.
    // Edit the shape in the patch below to match the desired shape in Media Library.

    if (isDryRun && includeAspects) {
      logVerbose(isVerbose, 'DRY RUN: Would update aspect with metadata.')
    } else if (includeAspects) {
      logVerbose(isVerbose, `Updating aspect data for ${fileProgress} ${filename}...`)
      // Assert non-null as we checked above
      const {assetId, assetInstanceId} = uploadResult!
      // We have to build the ID to match the key format found in assets.json
      const idParts = assetInstanceId.split('-')
      const assetDataId = `${idParts[0]}-${idParts[1]}`
      const asset = parsedAssets[assetDataId]
      // Pull the tags from the media plugin.
      const assetTags = asset?.opt?.media?.tags?.map((tag: any) => tags.get(tag._ref))
      const mutations = JSON.stringify({
        mutations: [
          {
            patch: {
              id: assetId,
              // Create an empty aspects object if it doesn't exist.
              setIfMissing: {aspects: {}},
              set: {
                'aspects.metadata': {
                  title: asset?.title || '',
                  description: asset?.description || '',
                  tags: assetTags || [],
                  creditLine: asset?.creditLine || '',
                  altText: asset?.altText || '',
                  originalFilename: asset?.originalFilename || '',
                },
              },
            },
          },
        ],
      })

      // Update the aspect by patching the asset in Media Library.
      await aspectUpdateLimiter.enqueue(async () => {
        const url = `https://api.sanity.io/v2024-06-24/media-libraries/${mediaLibraryId}/mutate`
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sanityToken}`,
            },
            body: mutations,
          })
          if (!response.ok) {
            const error = await response.json()
            logVerbose(isVerbose, 'Failed to update aspect:', error)
            return
          }
          logVerbose(isVerbose, `Successfully updated aspect for ${filename}`)
        } catch (error) {
          logVerbose(isVerbose, 'Error updating aspect with metadata:', error)
        }
      })
    }

    // Mark as successful
    result.success = true
    return result
  } catch (error) {
    result.error = error.message || String(error)
    logVerbose(isVerbose, `Error processing ${filename}: ${result.error}`)
    return result
  }
}

// Rate limiter class to help avoid rate limiting errors.
class RateLimiter {
  private queue: (() => Promise<any>)[] = []
  private processing = false
  private lastRequestTime = 0
  private activeRequests = 0

  constructor(
    private requestsPerSecond: number,
    private maxConcurrent: number = 25,
  ) {}

  async enqueue<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          this.activeRequests++
          const result = await fn()
          this.activeRequests--
          resolve(result)
        } catch (error) {
          this.activeRequests--
          reject(error)
        }
      })
      this.processQueue()
    })
  }

  private async processQueue() {
    if (this.processing || this.queue.length === 0) return
    this.processing = true

    while (this.queue.length > 0) {
      const now = Date.now()
      const timeSinceLastRequest = now - this.lastRequestTime
      const minTimeBetweenRequests = 1000 / this.requestsPerSecond

      // Wait if we've hit the concurrent request limit
      if (this.activeRequests >= this.maxConcurrent) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        continue
      }

      // Wait if we need to respect the rate limit
      if (timeSinceLastRequest < minTimeBetweenRequests) {
        await new Promise((resolve) =>
          setTimeout(resolve, minTimeBetweenRequests - timeSinceLastRequest),
        )
      }

      const batch = this.queue.splice(0, this.maxConcurrent - this.activeRequests)
      await Promise.all(batch.map((fn) => fn()))
      this.lastRequestTime = Date.now()
    }

    this.processing = false
  }
}

// Main function that can be imported or run from CLI
export async function migrateMedia(options: MigrateMediaOptions): Promise<void> {
  const {
    projectId,
    dataset,
    mediaLibraryId,
    sanityToken,
    imagesDir,
    filesDir,
    dataFilePath,
    assetsFilePath,
    isDryRun = false,
    isVerbose = false,
    testImageName = null,
    includeAspects = false,
  } = options

  if (!sanityToken || sanityToken.trim() === '') {
    throw new Error(
      "Sanity auth token not provided. Please run 'sanity debug --secrets' to find it, then provide it using --token argument.",
    )
  }

  if (!mediaLibraryId || mediaLibraryId.trim() === '') {
    throw new Error(
      'MEDIA_LIBRARY_ID is not set. Ensure it is defined in the environment variables.',
    )
  }

  if (!projectId || projectId.trim() === '') {
    throw new Error('Project ID not provided.')
  }

  if (!dataset || dataset.trim() === '') {
    throw new Error('Dataset name not provided.')
  }

  if (!imagesDir || !fs.existsSync(imagesDir)) {
    throw new Error(`Images directory not found: ${imagesDir}`)
  }
  logStatus(isVerbose, `Using images directory: ${imagesDir}`)
  
  if (!filesDir || !fs.existsSync(filesDir)) {
    throw new Error(`Files directory not found: ${filesDir}`)
  }
  logStatus(isVerbose, `Using files directory: ${filesDir}`)
  // --- End Determine Images Directory ---

  const mediaLibraryLimiter = new RateLimiter(25, 25)
  const documentUpdateLimiter = new RateLimiter(25, 25)
  const aspectUpdateLimiter = new RateLimiter(25, 25)

  const uploadedAssetIds = new Map<string, UploadResult>()
  let allImageFiles: string[]
  let allFileFiles: string[]
  const parsedDocuments: Document[] = []
  let parsedAssets: any

  const tags = new Map<string, string>() // store tags from media plugin

  // load ndjson data file
  try {
    const dataFilePath = process.env.DATA_FILE_PATH || 'data.ndjson'
    const fileStream = fs.createReadStream(dataFilePath)
    const parsedData = fileStream.pipe(ndjson.parse())
    for await (const doc of parsedData) {
      parsedDocuments.push(doc)
    }
  } catch (error) {
    console.error(`Error reading data file: ${error}`)
    throw error
  }

  // load assets data file
  try {
    parsedAssets = JSON.parse(fs.readFileSync(assetsFilePath, 'utf8'))
  } catch (error) {
    console.error(`Error reading assets file: ${error}`)
    throw error
  }

  // parse tags from media plugin
  try {
    for await (const doc of parsedDocuments) {
      if (doc._type === 'media.tag') {
        tags.set(doc._id, doc.name.current)
      }
    }
  } catch (error) {
    console.error(`Error reading tags from data file: ${error}`)
    throw error
  }

  // read images directory
  try {
    allImageFiles = fs.readdirSync(imagesDir).filter((filename) => !filename.startsWith('.'))
    if (allImageFiles.length === 0) {
      throw new Error(`No non-hidden images found in directory: ${imagesDir}`)
    }
    // Use logStatus
    logStatus(
      isVerbose,
      `Found ${allImageFiles.length} total images in directory (excluding hidden).`,
    )
  } catch (error) {
    console.error(`Error reading images directory: ${error}`) // Keep console.error for errors
    throw error
  }

  // read files directory
  try {
    allFileFiles = fs.readdirSync(filesDir).filter((filename) => !filename.startsWith('.'))
    if (allFileFiles.length === 0) {
      throw new Error(`No non-hidden files found in directory: ${filesDir}`)
    }
    // Use logStatus
    logStatus(
      isVerbose,
      `Found ${allFileFiles.length} total files in directory (excluding hidden).`,
    )
  } catch (error) {
    console.error(`Error reading files directory: ${error}`) // Keep console.error for errors
    throw error
  }

  let imageFilesToProcess: string[]
  let fileFilesToProcess: string[]

  if (testImageName) {
    const testImage = allImageFiles.find((file) => file === testImageName)
    if (!testImage) {
      console.error(`Error: Image "${testImageName}" not found in images directory`)
      throw new Error(`Test image "${testImageName}" not found`)
    }
    imageFilesToProcess = [testImage]
    fileFilesToProcess = [] // Skip files when testing specific image
    logStatus(isVerbose, `--test-image specified. Processing only: ${testImageName}`)
  } else {
    imageFilesToProcess = allImageFiles
    fileFilesToProcess = allFileFiles

    if (isDryRun && !isVerbose) {
      const limit = 5
      if (imageFilesToProcess.length > limit) {
        logStatus(
          isVerbose,
          `\nLimiting dry run to the first ${limit} *unprocessed* image files found...`,
        )
        imageFilesToProcess = imageFilesToProcess.slice(0, limit)
      }
      if (fileFilesToProcess.length > limit) {
        logStatus(
          isVerbose,
          `\nLimiting dry run to the first ${limit} *unprocessed* files found...`,
        )
        fileFilesToProcess = fileFilesToProcess.slice(0, limit)
      }
    }
  }

  const totalImagesInThisRun = imageFilesToProcess.length
  const totalFilesInThisRun = fileFilesToProcess.length
  let overallProcessedCount = 0
  let overallErrorCount = 0

  logStatus(isVerbose, `Starting migration process for ${totalImagesInThisRun} image(s) and ${totalFilesInThisRun} file(s)...`)

  const BATCH_SIZE = 20

  // Process images in batches
  const totalBatches = Math.ceil(imageFilesToProcess.length / BATCH_SIZE)

  for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
    const batchStart = batchIndex * BATCH_SIZE
    const batchEnd = Math.min(batchStart + BATCH_SIZE, imageFilesToProcess.length)
    const currentBatch = imageFilesToProcess.slice(batchStart, batchEnd)
    const batchNumber = batchIndex + 1

    try {
      // Process all images in this batch in parallel
      const batchPromises = currentBatch.map((filename, index) =>
        processImage(
          filename,
          batchStart + index,
          totalImagesInThisRun,
          imagesDir,
          dataFilePath,
          mediaLibraryId,
          sanityToken,
          projectId,
          dataset,
          documentUpdateLimiter,
          mediaLibraryLimiter,
          aspectUpdateLimiter,
          parsedDocuments,
          parsedAssets,
          tags,
          uploadedAssetIds,
          isDryRun,
          isVerbose,
          includeAspects,
        ),
      )

      // Wait for all images in the batch to complete
      const results = await Promise.all(batchPromises)

      const successfulResults = results.filter((r) => r.success)
      overallProcessedCount += successfulResults.length
      overallErrorCount += results.length - successfulResults.length

      // Report batch results
      const batchMessage = isDryRun
        ? `Batch ${batchNumber}/${totalBatches} simulated: ${successfulResults.length}/${currentBatch.length} processed`
        : `Batch ${batchNumber}/${totalBatches} completed: ${successfulResults.length}/${currentBatch.length} processed`

      // Always show a message about the batch completion, even in verbose mode
      if (isVerbose) {
        logStatus(isVerbose, batchMessage)
      }

      if (!isVerbose) {
        // Show any errors in non-verbose mode (they're already shown in verbose mode)
        const failedResults = results.filter((r) => !r.success)
        if (failedResults.length > 0) {
          logStatus(isVerbose, `  ${failedResults.length} images failed in this batch:`)
          failedResults.forEach((result) => {
            logStatus(isVerbose, `  - ${result.filename}: ${result.error}`)
          })
        }
      }

      // Small delay between batches to allow rate limiting to catch up
      if (batchIndex < totalBatches - 1) {
        await sleep(500) // Half second between batches
      }
    } catch (batchError) {
      console.error(`Error processing batch ${batchNumber}:`, batchError)
    }
  }

  // Process files in batches
  const totalFileBatches = Math.ceil(fileFilesToProcess.length / BATCH_SIZE)

  for (let batchIndex = 0; batchIndex < totalFileBatches; batchIndex++) {
    const batchStart = batchIndex * BATCH_SIZE
    const batchEnd = Math.min(batchStart + BATCH_SIZE, fileFilesToProcess.length)
    const currentBatch = fileFilesToProcess.slice(batchStart, batchEnd)
    const batchNumber = batchIndex + 1

    try {
      // Process all files in this batch in parallel
      const batchPromises = currentBatch.map((filename, index) =>
        processFile(
          filename,
          batchStart + index,
          totalFilesInThisRun,
          filesDir,
          dataFilePath,
          mediaLibraryId,
          sanityToken,
          projectId,
          dataset,
          documentUpdateLimiter,
          mediaLibraryLimiter,
          aspectUpdateLimiter,
          parsedDocuments,
          parsedAssets,
          tags,
          uploadedAssetIds,
          isDryRun,
          isVerbose,
          includeAspects,
        ),
      )

      // Wait for all files in the batch to complete
      const results = await Promise.all(batchPromises)

      const successfulResults = results.filter((r) => r.success)
      overallProcessedCount += successfulResults.length
      overallErrorCount += results.length - successfulResults.length

      // Report batch results
      const batchMessage = isDryRun
        ? `File Batch ${batchNumber}/${totalFileBatches} simulated: ${successfulResults.length}/${currentBatch.length} processed`
        : `File Batch ${batchNumber}/${totalFileBatches} completed: ${successfulResults.length}/${currentBatch.length} processed`

      // Always show a message about the batch completion, even in verbose mode
      if (isVerbose) {
        logStatus(isVerbose, batchMessage)
      }

      if (!isVerbose) {
        // Show any errors in non-verbose mode (they're already shown in verbose mode)
        const failedResults = results.filter((r) => !r.success)
        if (failedResults.length > 0) {
          logStatus(isVerbose, `  ${failedResults.length} files failed in this batch:`)
          failedResults.forEach((result) => {
            logStatus(isVerbose, `  - ${result.filename}: ${result.error}`)
          })
        }
      }

      // Small delay between batches to allow rate limiting to catch up
      if (batchIndex < totalFileBatches - 1) {
        await sleep(500) // Half second between batches
      }
    } catch (batchError) {
      console.error(`Error processing file batch ${batchNumber}:`, batchError)
    }
  }

  // --- Final Summary ---
  logStatus(isVerbose, '\n--- Migration Summary ---')
  logStatus(
    isVerbose,
    `Total images found in directory (excluding hidden): ${allImageFiles.length}`,
  )
  logStatus(
    isVerbose,
    `Total files found in directory (excluding hidden): ${allFileFiles.length}`,
  )
  logStatus(isVerbose, `Images attempted this run: ${totalImagesInThisRun}`)
  logStatus(isVerbose, `Files attempted this run: ${totalFilesInThisRun}`)
  logStatus(isVerbose, `Successfully processed assets this run: ${overallProcessedCount}`)
  if (overallErrorCount > 0) {
    logStatus(isVerbose, `Assets with errors during this run: ${overallErrorCount}`)
  }
  if (!isDryRun && overallProcessedCount > 0) {
    logStatus(isVerbose, `Successfully processed ${overallProcessedCount} asset(s).`)
  }
  logStatus(isVerbose, 'Processing complete!')
}

// CLI entry point when script is run directly
if (require.main === module) {
  const args = parseCliArgs()

  if (args.isDryRun) {
    logStatus(args.isVerbose, '\n=== DRY RUN MODE ===')
    logStatus(args.isVerbose, 'No actual changes will be made to the media library or documents')
    logStatus(args.isVerbose, 'This will simulate the entire process and show what would be done\n')
  }

  if (args.testImageName) {
    logStatus(args.isVerbose, `\n=== TESTING SINGLE IMAGE: ${args.testImageName} ===`)
    logStatus(args.isVerbose, 'This will process only the specified image through all steps\n')
  }

  // Read from environment variables when run as CLI
  const sanityToken = process.env.SANITY_TOKEN || ''
  const projectId = process.env.SANITY_PROJECT_ID || ''
  const dataset = process.env.SANITY_SOURCE_DATASET || ''
  const mediaLibraryId = process.env.SANITY_MEDIA_LIBRARY_ID || ''
  let imagesDir = process.env.IMAGES_DIR ? path.resolve(process.env.IMAGES_DIR) : ''
  let filesDir = process.env.FILES_DIR ? path.resolve(process.env.FILES_DIR) : ''

  // Fallback for imagesDir
  if (!imagesDir) {
    logStatus(
      args.isVerbose,
      'Warning: IMAGES_DIR environment variable not set. Falling back to relative path.',
    )
    imagesDir = path.resolve(__dirname, 'export', 'images')
  }

  // Fallback for filesDir
  if (!filesDir) {
    logStatus(
      args.isVerbose,
      'Warning: FILES_DIR environment variable not set. Falling back to relative path.',
    )
    filesDir = path.resolve(__dirname, 'export', 'files')
  }

  // Get the data file path
  let dataFilePath = ''
  if (process.env.DATA_FILE_PATH) {
    dataFilePath = path.resolve(process.env.DATA_FILE_PATH)
  } else {
    dataFilePath = path.resolve(__dirname, 'export', 'data.ndjson')
  }
  let assetsFilePath = ''
  if (process.env.ASSETS_FILE_PATH) {
    assetsFilePath = path.resolve(process.env.ASSETS_FILE_PATH)
  } else {
    assetsFilePath = path.resolve(__dirname, 'export', 'assets.ndjson')
  }

  migrateMedia({
    projectId,
    dataset,
    mediaLibraryId,
    sanityToken,
    imagesDir,
    filesDir,
    dataFilePath,
    assetsFilePath,
    isDryRun: args.isDryRun,
    isVerbose: args.isVerbose,
    testImageName: args.testImageName,
    includeAspects: args.includeAspects,
  }).catch((error) => {
    logStatus(args.isVerbose, '\n--- UNHANDLED SCRIPT ERROR ---')
    console.error('Error:', error.message || error)
    process.exit(1)
  })
}
```

**metadata-aspect.ts**

```
import {defineAssetAspect, defineField} from 'sanity'

export default defineAssetAspect({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'creditLine',
      title: 'Credit line',
      type: 'string',
    }),
    defineField({
      name: 'altText',
      title: 'Alt text',
      type: 'string',
    }),
    defineField({
      name: 'originalFilename',
      title: 'Original filename',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    
  ],
})

```

# Media Library API reference

The Media Library API lets you programmatically interact with assets in your organization’s Media Library.

#### Want to get started?

[Media Library Introduction](https://www.sanity.io/docs/media-library/introduction)

[Upload assets programmatically](https://www.sanity.io/docs/media-library/upload-assets)

## Authentication

- All requests to private data must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth). Requests to public information, like public assets, are available without an authentication token.
- Manipulating documents requires read+write access permission for Media Library.
