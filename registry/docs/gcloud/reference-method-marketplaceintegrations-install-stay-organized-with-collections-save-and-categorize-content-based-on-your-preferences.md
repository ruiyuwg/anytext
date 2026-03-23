-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Google Security Operations](https://docs.cloud.google.com/chronicle/docs)
-   [Reference](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)

Send feedback

# Method: marketplaceIntegrations.install Stay organized with collections Save and categorize content based on your preferences.

 

**Full name**: projects.locations.instances.marketplaceIntegrations.install

Installs a specific version of a marketplace integration into a SecOps instance. This process sets up the necessary components (actions, connectors, etc.) and can optionally override existing mappings.

### HTTP request

Choose a location:

africa-south1 asia-northeast1 asia-south1 asia-southeast1 asia-southeast2 australia-southeast1 europe-central2 europe-west12 europe-west2 europe-west3 europe-west6 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast2 southamerica-east1 us eu

  
`POST https://chronicle.africa-south1.rep.googleapis.com/v1alpha/{parent}:install`

### Path parameters

Parameters

`parent`

`string`

Required. The instance to install MarketplaceIntegrations for. Format: projects/{project}/locations/{location}/instances/{instance} Override integration's ontology if integration is already installed. Can be optional, if not provided set to false by default.

### Request body

The request body contains data with the following structure:

JSON representation

{
  "overrideMapping": boolean,
  "staging": boolean,
  "version": string,
  "restoreIntegrationSnapshot": boolean
}

Fields

`overrideMapping`

`boolean`

Optional. Determines if the integration should override the ontology if already installed, if not provided, set to false by default.

`staging`

`boolean`

Optional. Determines if the integration should be installed as staging or production, if not provided, installed as production.

`version`

`string`

Optional. Determines which version of the integration should be installed.

`restoreIntegrationSnapshot`

`boolean`

Optional. Determines if the integration should be installed from existing integration snapshot.

### Response body

Response message for marketplaceIntegrations.install.

If successful, the response body contains data with the following structure:

JSON representation

{
  "identifier": string,
  "version": string
}

Fields

`identifier`

`string`

Required. The installed integration.

`version`

`string`

Output only. The installed integration version.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/chronicle`
-   `https://www.googleapis.com/auth/chronicle.readonly`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `parent` resource:

-   `chronicle.marketplaceIntegrations.install`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-02-02 UTC.
