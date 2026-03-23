-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Google Security Operations](https://docs.cloud.google.com/chronicle/docs)
-   [Reference](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)

Send feedback

# Method: legacyPublisher.legacyGetIntegrationDependencies Stay organized with collections Save and categorize content based on your preferences.

 

**Full name**: projects.locations.instances.legacyPublisher.legacyGetIntegrationDependencies

Retrieves the full set of functional dependencies required for a specific integration to operate correctly on a remote agent.

### HTTP request

Choose a location:

africa-south1 asia-northeast1 asia-south1 asia-southeast1 asia-southeast2 australia-southeast1 europe-central2 europe-west12 europe-west2 europe-west3 europe-west6 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast2 southamerica-east1 us eu

  
`GET https://chronicle.africa-south1.rep.googleapis.com/v1alpha/{instance}/legacyPublisher:legacyGetIntegrationDependencies`

### Path parameters

Parameters

`instance`

`string`

Required. The instance of the legacy publisher. Format: projects/{project}/locations/{location}/instances/{instance}/legacyPublisher

### Query parameters

Parameters

`integration_identifier`

`string`

Required. The integration identifier to get the dependencies for.

`integration_version`

`string`

Required. The integration version to get the dependencies for.

`agent_identifier`

`string`

Required. The agent identifier to get the dependencies for.

### Request body

The request body must be empty.

### Response body

Response message for legacyPublisher.legacyGetIntegrationDependencies.

If successful, the response body contains data with the following structure:

JSON representation

{
  "python\_version": string,
  "last\_integration\_definition\_update": string,
  "dependencies\_info": \[
    {
      object (`[DependenciesInfo](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacyPublisher/legacyGetIntegrationDependencies#DependenciesInfo)`)
    }
  \]
}

Fields

`python_version`

`string`

Output only. The python version of the integration.

`last_integration_definition_update`

`string ([int64](https://developers.google.com/discovery/v1/type-format) format)`

Output only. The last integration definition update time.

`dependencies_info[]`

``object (`[DependenciesInfo](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacyPublisher/legacyGetIntegrationDependencies#DependenciesInfo)`)``

Output only. The dependencies info.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/chronicle`
-   `https://www.googleapis.com/auth/chronicle.readonly`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `instance` resource:

-   `chronicle.legacyPublisher.get`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

## DependenciesInfo

Response message for legacyPublisher.legacyGetIntegrationDependencies.

JSON representation

{
  "OsType": string,
  "FileName": string,
  "Hash": string
}

Fields

`OsType`

`string`

Output only. The OS type of the dependency.

`FileName`

`string`

Output only. The file name of the dependency.

`Hash`

`string`

Output only. The hash of the dependency.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-02-02 UTC.
