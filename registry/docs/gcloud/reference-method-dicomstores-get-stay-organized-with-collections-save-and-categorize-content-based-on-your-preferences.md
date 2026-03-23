-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Industry solutions](https://docs.cloud.google.com/docs/industry)
-   [Cloud Healthcare API](https://docs.cloud.google.com/healthcare-api/docs)
-   [참조](https://docs.cloud.google.com/healthcare-api/docs/apis)

Send feedback

# Method: dicomStores.get Stay organized with collections Save and categorize content based on your preferences.

 

**Full name**: projects.locations.datasets.dicomStores.get

Gets the specified DICOM store.

### HTTP request

`GET https://healthcare.googleapis.com/v1beta1/{name=projects/*/locations/*/datasets/*/dicomStores/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The resource name of the DICOM store to get.

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `name`:

-   `healthcare.dicomStores.get`

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[DicomStore](/healthcare-api/docs/reference/rest/v1beta1/projects.locations.datasets.dicomStores#DicomStore)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-healthcare`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-27 UTC.
