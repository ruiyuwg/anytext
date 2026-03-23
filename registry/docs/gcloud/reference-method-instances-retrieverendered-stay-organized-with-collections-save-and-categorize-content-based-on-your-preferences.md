-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Industry solutions](https://docs.cloud.google.com/docs/industry)
-   [Cloud Healthcare API](https://docs.cloud.google.com/healthcare-api/docs)
-   [Reference](https://docs.cloud.google.com/healthcare-api/docs/apis)

Send feedback

# Method: instances.retrieveRendered Stay organized with collections Save and categorize content based on your preferences.

 

**Full name**: projects.locations.datasets.dicomStores.studies.series.instances.retrieveRendered

instances.retrieveRendered returns instance associated with the given study, series, and SOP Instance UID in an acceptable Rendered Media Type. See [RetrieveTransaction](https://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4).

For details on the implementation of instances.retrieveRendered, see [Rendered resources](https://cloud.google.com/healthcare/docs/dicom#rendered_resources) in the Cloud Healthcare API conformance statement.

For samples that show how to call instances.retrieveRendered, see [Retrieve consumer image formats](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieve-consumer).

### HTTP request

`GET https://healthcare.googleapis.com/v1/{parent=projects/*/locations/*/datasets/*/dicomStores/*}/dicomWeb/{dicomWebPath=studies/*/series/*/instances/*/rendered}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The name of the DICOM store that is being accessed. For example, `projects/{projectId}/locations/{locationId}/datasets/{datasetId}/dicomStores/{dicomStoreId}`.

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `parent`:

-   `healthcare.dicomStores.dicomWebRead`

`dicomWebPath`

`string`

Required. The path of the instances.retrieveRendered DICOMweb request. For example, `studies/{studyUid}/series/{seriesUid}/instances/{instanceUid}/rendered`.

### Query parameters

 

Parameters

`viewport`

`string`

Optional. The viewport setting to use as specified in [https://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect\_8.3.5.html#sect\_8.3.5.1.3](https://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_8.3.5.html#sect_8.3.5.1.3)

### Request body

The request body must be empty.

### Response body

If successful, the response is a generic HTTP response whose format is defined by the method.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-healthcare`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-22 UTC.
