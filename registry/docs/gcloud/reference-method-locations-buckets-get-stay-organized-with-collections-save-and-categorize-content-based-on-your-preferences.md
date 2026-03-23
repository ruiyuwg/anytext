-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Observability](https://docs.cloud.google.com/docs/observability)
-   [Cloud Logging](https://docs.cloud.google.com/logging/docs)
-   [參考資料](https://docs.cloud.google.com/logging/docs/apis)

Send feedback

# Method: locations.buckets.get Stay organized with collections Save and categorize content based on your preferences.

 

Gets a log bucket.

### HTTP request

`GET https://logging.googleapis.com/v2/{name=*/*/locations/*/buckets/*}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The resource name of the bucket:

```
"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
"organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
"billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
"folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
```

For example:

`"projects/my-project/locations/global/buckets/my-bucket"`

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `name`:

-   `logging.buckets.get`

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[LogBucket](/logging/docs/reference/v2/rest/v2/billingAccounts.locations.buckets#LogBucket)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/logging.read`
-   `https://www.googleapis.com/auth/logging.admin`
-   `https://www.googleapis.com/auth/cloud-platform.read-only`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-07-21 UTC.
