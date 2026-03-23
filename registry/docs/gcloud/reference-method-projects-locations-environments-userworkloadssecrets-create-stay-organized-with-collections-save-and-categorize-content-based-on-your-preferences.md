On **September 15, 2026**, all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will **reach their planned end of life**. You will not be able to use environments with these versions. We recommend planning [migration to Cloud Composer 3](/composer/docs/latest/migrate-composer-1-to-3). Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Data analytics](https://docs.cloud.google.com/docs/data)
-   [Cloud Composer](https://docs.cloud.google.com/composer/docs)
-   [Referenzen](https://docs.cloud.google.com/composer/docs/apis)

Send feedback

# Method: projects.locations.environments.userWorkloadsSecrets.create Stay organized with collections Save and categorize content based on your preferences.

 

Creates a user workloads Secret.

This method is supported for Cloud Composer environments in versions composer-3-airflow-\*.\*.\*-build.\* and newer.

### HTTP request

`POST https://composer.googleapis.com/v1beta1/{parent=projects/*/locations/*/environments/*}/userWorkloadsSecrets`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The environment name to create a Secret for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"

Authorization requires the following [IAM](https://cloud.google.com/iam/docs/) permission on the specified resource `parent`:

-   `composer.userworkloadssecrets.create`

### Request body

The request body contains an instance of `[UserWorkloadsSecret](/composer/docs/reference/rest/v1beta1/projects.locations.environments.userWorkloadsSecrets#UserWorkloadsSecret)`.

### Response body

If successful, the response body contains a newly created instance of `[UserWorkloadsSecret](/composer/docs/reference/rest/v1beta1/projects.locations.environments.userWorkloadsSecrets#UserWorkloadsSecret)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloudcomposer`
-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-02-18 UTC.
