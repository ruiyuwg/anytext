-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Workflows](https://docs.cloud.google.com/workflows/docs)
-   [Reference](https://docs.cloud.google.com/workflows/docs/apis)

Send feedback

# Method: googleapis.spanner.v1.projects.instances.backups.list Stay organized with collections Save and categorize content based on your preferences.

Lists completed and pending backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.

For more information about retries and long-running operations, see Understand connectors.

## Arguments

Parameters

`parent`

`string`

Required. The instance to list backups from. Values are of the form `projects//instances/`.

`filter`

`string`

An expression that filters the list of returned backups. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Backup are eligible for filtering: \* `name` \* `database` \* `state` \* `create_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) \* `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) \* `version_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) \* `size_bytes` \* `backup_schedules` You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly. Here are a few examples: \* `name:Howl` - The backup's name contains the string "howl". \* `database:prod` - The database's name contains the string "prod". \* `state:CREATING` - The backup is pending creation. \* `state:READY` - The backup is fully created and ready for use. \* `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")` - The backup name contains the string "howl" and `create_time` of the backup is before 2018-03-28T14:50:00Z. \* `expire_time < \"2018-03-28T14:50:00Z\"` - The backup `expire_time` is before 2018-03-28T14:50:00Z. \* `size_bytes > 10000000000` - The backup's size is greater than 10GB \* `backup_schedules:daily` - The backup is created from a schedule with "daily" in its name.

`pageSize`

`integer ([int32](https://developers.google.com/discovery/v1/type-format?tenant=cloud) format)`

Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.

`pageToken`

`string`

If non-empty, `page_token` should contain a next\_page\_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`.

## Raised exceptions

Exceptions

`ConnectionError`

In case of a network problem (such as DNS failure or refused connection).

`HttpError`

If the response status is >= 400 (excluding 429 and 503).

`TimeoutError`

If a long-running operation takes longer to finish than the specified timeout limit.

`TypeError`

If an operation or function receives an argument of the wrong type.

`ValueError`

If an operation or function receives an argument of the right type but an inappropriate value. For example, a negative timeout.

## Response

If successful, the response contains an instance of [`ListBackupsResponse`](https://cloud.google.com/workflows/docs/reference/googleapis/spanner/v1/Overview#ListBackupsResponse).

## Subworkflow snippet

Some fields might be optional or required. To identify required fields, refer to the [API documentation](https://cloud.google.com/spanner/docs/reference/rest/v1/projects.instances.backups/list).

### YAML

\- list:
    call: googleapis.spanner.v1.projects.instances.backups.list
    args:
        parent: ...
        filter: ...
        pageSize: ...
        pageToken: ...
    result: listResult

### JSON

\[
  {
    "list": {
      "call": "googleapis.spanner.v1.projects.instances.backups.list",
      "args": {
        "parent": "...",
        "filter": "...",
        "pageSize": "...",
        "pageToken": "..."
      },
      "result": "listResult"
    }
  }
\]

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
