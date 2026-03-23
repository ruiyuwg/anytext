-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Vision V1 Client - Class InputConfig (1.10.3) Stay organized with collections Save and categorize content based on your preferences.

2.2.0 (latest) 2.1.3 2.0.3 1.10.3 1.9.4 1.8.0 1.7.6 1.6.8

Reference documentation and code samples for the Cloud Vision V1 Client class InputConfig.

The desired input location and metadata.

Generated from protobuf message `google.cloud.vision.v1.InputConfig`

## Namespace

Google \\ Cloud \\ Vision \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ gcs_source`

`[GcsSource](/php/docs/reference/cloud-vision/1.10.3/V1.GcsSource)`  

The Google Cloud Storage location to read the input from.

`↳ content`

`string`  

File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.

`↳ mime_type`

`string`  

The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.

### getGcsSource

The Google Cloud Storage location to read the input from.

**Returns**

**Type**

**Description**

`[GcsSource](/php/docs/reference/cloud-vision/1.10.3/V1.GcsSource)|null`

### hasGcsSource

### clearGcsSource

### setGcsSource

The Google Cloud Storage location to read the input from.

**Parameter**

**Name**

**Description**

`var`

`[GcsSource](/php/docs/reference/cloud-vision/1.10.3/V1.GcsSource)`  

**Returns**

**Type**

**Description**

`$this`

### getContent

File content, represented as a stream of bytes.

Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.

**Returns**

**Type**

**Description**

`string`

### setContent

File content, represented as a stream of bytes.

Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getMimeType

The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.

**Returns**

**Type**

**Description**

`string`

### setMimeType

The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
