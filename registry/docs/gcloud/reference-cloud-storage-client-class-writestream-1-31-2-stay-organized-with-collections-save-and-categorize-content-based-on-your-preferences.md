-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Storage Client - Class WriteStream (1.31.2) Stay organized with collections Save and categorize content based on your preferences.

1.49.2 (latest) 1.49.1 1.48.7 1.47.0 1.46.0 1.45.0 1.44.0 1.43.1 1.42.1 1.41.4 1.37.0 1.36.1 1.35.0 1.34.0 1.33.4 1.32.0 1.31.2 1.30.3

Reference documentation and code samples for the Cloud Storage Client class WriteStream.

A Stream implementation that uploads in chunks to a provided uploader when we reach a certain chunkSize. Upon `close`, we will upload the remaining chunk.

## Namespace

Google \\ Cloud \\ Storage

## Methods

### \_\_construct

Create a new WriteStream instance

**Parameters**

**Name**

**Description**

`uploader`

`Google\Cloud\Core\Upload\AbstractUploader`  

The uploader to use.

`options`

`array`  

Configuration options.

`↳ chunkSize`

`int`  

The size of the buffer above which we attempt to upload data

### close

Close the stream. Uploads any remaining data.

### write

Write to the stream. If we pass the chunkable size, upload the available chunk.

**Parameter**

**Name**

**Description**

`data`

`string`  

Data to write

**Returns**

**Type**

**Description**

`int`

The number of bytes written

### setUploader

Set the uploader for this class. You may need to set this after initialization if the uploader depends on this stream.

**Parameter**

**Name**

**Description**

`uploader`

`Google\Cloud\Core\Upload\AbstractUploader`  

The new uploader to use.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-11 UTC.
