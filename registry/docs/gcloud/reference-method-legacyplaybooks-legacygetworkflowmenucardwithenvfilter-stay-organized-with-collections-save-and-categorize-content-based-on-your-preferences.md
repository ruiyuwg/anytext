-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Google Security Operations](https://docs.cloud.google.com/chronicle/docs)
-   [Reference](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)

Send feedback

# Method: legacyPlaybooks.legacyGetWorkflowMenuCardWithEnvFilter Stay organized with collections Save and categorize content based on your preferences.

 

**Full name**: projects.locations.instances.legacyPlaybooks.legacyGetWorkflowMenuCardWithEnvFilter

Returns a playbook definition for the identifier, with metadata adjusted according to the user's environment permissions.

### HTTP request

Choose a location:

africa-south1 asia-northeast1 asia-south1 asia-southeast1 asia-southeast2 australia-southeast1 europe-central2 europe-west12 europe-west2 europe-west3 europe-west6 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast2 southamerica-east1 us eu

  
`GET https://chronicle.africa-south1.rep.googleapis.com/v1alpha/{instance}/legacyPlaybooks:legacyGetWorkflowMenuCardWithEnvFilter`

### Path parameters

Parameters

`instance`

`string`

Required. The instance to get the workflow menu card with env filter for. Format: projects/{project}/locations/{location}/instances/{instance}

### Query parameters

Parameters

`workflowIdentifier`

`string`

Required. Workflow identifier to get the workflow menu card for.

### Request body

The request body must be empty.

### Response body

If successful, the response body contains an instance of `[ApiWorkflowMenuCardDefinitionDataModel](/chronicle/docs/reference/rest/v1alpha/ApiWorkflowMenuCardDefinitionDataModel)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/chronicle`
-   `https://www.googleapis.com/auth/chronicle.readonly`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `instance` resource:

-   `chronicle.legacyPlaybooks.get`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-02-02 UTC.
