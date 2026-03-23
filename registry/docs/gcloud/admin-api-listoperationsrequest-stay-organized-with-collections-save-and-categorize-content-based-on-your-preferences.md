-   [Home](https://docs.cloud.google.com/)
-   [Technology areas](https://docs.cloud.google.com/docs)
-   [App Engine](https://docs.cloud.google.com/appengine)
-   [Admin API](https://docs.cloud.google.com/appengine/docs/admin-api)
-   [Reference](https://docs.cloud.google.com/appengine/docs/admin-api/apis)

Send feedback

# ListOperationsRequest Stay organized with collections Save and categorize content based on your preferences.

 

The request message for `[Operations.ListOperations](/appengine/docs/admin-api/reference/rest/v1/apps.operations/list#google.longrunning.Operations.ListOperations)`.

JSON representation

{
  "name": string,
  "filter": string,
  "pageSize": integer,
  "pageToken": string
}

 

Fields

`name`

`string`

The name of the operation's parent resource.

`filter`

`string`

The standard list filter.

`pageSize`

`integer`

The standard list page size.

`pageToken`

`string`

The standard list page token.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-06-16 UTC.
