-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Google Security Operations](https://docs.cloud.google.com/chronicle/docs)
-   [Reference](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)

Send feedback

# Method: announcements.create Stay organized with collections Save and categorize content based on your preferences.

 

**Full name**: projects.locations.instances.announcements.create

Creates a new announcement. Use this method to broadcast platform-wide information to users, specifying the content, a title, and an optional expiration time. The system automatically records the creator.

### HTTP request

Choose a location:

africa-south1 asia-northeast1 asia-south1 asia-southeast1 asia-southeast2 australia-southeast1 europe-central2 europe-west12 europe-west2 europe-west3 europe-west6 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast2 southamerica-east1 us eu

  
`POST https://chronicle.africa-south1.rep.googleapis.com/v1alpha/{parent}/announcements`

### Path parameters

Parameters

`parent`

`string`

Required. The parent resource where this Announcement will be created. Format: projects/{project}/locations/{location}/instances/{instance}/announcements

### Request body

The request body contains an instance of `[Announcement](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.announcements#Announcement)`.

### Response body

If successful, the response body contains a newly created instance of `[Announcement](/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.announcements#Announcement)`.

### Authorization scopes

Requires one of the following OAuth scopes:

-   `https://www.googleapis.com/auth/cloud-platform`
-   `https://www.googleapis.com/auth/chronicle`
-   `https://www.googleapis.com/auth/chronicle.readonly`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

### IAM Permissions

Requires the following [IAM](https://cloud.google.com/iam/docs) permission on the `parent` resource:

-   `chronicle.announcements.update`

For more information, see the [IAM documentation](https://cloud.google.com/iam/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-02-20 UTC.
