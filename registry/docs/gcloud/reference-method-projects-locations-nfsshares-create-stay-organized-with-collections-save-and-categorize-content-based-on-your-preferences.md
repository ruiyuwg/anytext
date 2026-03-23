The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new [Oracle and Google Cloud strategic partnership offerings](/bare-metal/docs/explore-oracle-partnership-offerings).

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Distributed, hybrid, and multicloud](https://docs.cloud.google.com/docs/dhm-cloud)
-   [Bare Metal](https://docs.cloud.google.com/bare-metal/docs)
-   [Reference](https://docs.cloud.google.com/bare-metal/docs/reference)

Send feedback

# Method: projects.locations.nfsShares.create Stay organized with collections Save and categorize content based on your preferences.

 

Create an NFS share.

### HTTP request

`POST https://baremetalsolution.googleapis.com/v2/{parent=projects/*/locations/*}/nfsShares`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`parent`

`string`

Required. The parent project and location.

### Request body

The request body contains an instance of `[NfsShare](/bare-metal/docs/reference/rest/v2/projects.locations.nfsShares#NfsShare)`.

### Response body

If successful, the response body contains a newly created instance of `[Operation](/bare-metal/docs/reference/rest/v2/projects.locations.operations#Operation)`.

### Authorization Scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authentication Overview](https://cloud.google.com/docs/authentication/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-05-30 UTC.
