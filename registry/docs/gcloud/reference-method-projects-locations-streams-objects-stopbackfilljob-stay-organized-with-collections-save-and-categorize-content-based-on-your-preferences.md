-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Data analytics](https://docs.cloud.google.com/docs/data)
-   [Datastream](https://docs.cloud.google.com/datastream/docs)

Send feedback

# Method: projects.locations.streams.objects.stopBackfillJob Stay organized with collections Save and categorize content based on your preferences.

 

This item is deprecated!

Stops the backfill job for the specified stream object.

### HTTP request

`POST https://datastream.googleapis.com/v1alpha1/{object}:stopBackfillJob`

### Path parameters

 

Parameters

`object`

`string`

Required. The name of the stream object resource to stop the backfill job for.

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

Response for manually stop a backfill job for a specific stream object.

JSON representation

{
  "object": {
    object (`[StreamObject](/datastream/docs/reference/rest/v1alpha1/projects.locations.streams.objects#StreamObject)`)
  }
}

 

Fields

`object`

``object (`[StreamObject](/datastream/docs/reference/rest/v1alpha1/projects.locations.streams.objects#StreamObject)`)``

The stream object resource the backfill job was stopped for.

### Authorization Scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-13 UTC.
