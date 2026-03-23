-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Workflows](https://docs.cloud.google.com/workflows/docs)
-   [Referência](https://docs.cloud.google.com/workflows/docs/apis)

Send feedback

# Method: googleapis.compute.beta.instances.list Stay organized with collections Save and categorize content based on your preferences.

Retrieves the list of instances contained within the specified zone.

## Arguments

Parameters

`project`

`string`

Required. Project ID for this request.

`zone`

`string`

Required. The name of the zone for this request.

`filter`

`string`

A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: `labels.owner:*` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: `(scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake")` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: `(cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true)` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.

`maxResults`

`integer ([uint32](https://developers.google.com/discovery/v1/type-format?tenant=cloud) format)`

The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)

`orderBy`

`string`

Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.

`pageToken`

`string`

Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.

`returnPartialSuccess`

`boolean`

Opt-in for partial success behavior which provides partial results in case of failure. The default value is false.

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

If successful, the response contains an instance of [`InstanceList`](/workflows/docs/reference/googleapis/compute/beta/Overview#InstanceList).

## Subworkflow snippet

Some fields might be optional or required. To identify required fields, refer to the [API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/instances/list).

### YAML

\- list:
    call: googleapis.compute.beta.instances.list
    args:
        project: ...
        zone: ...
        filter: ...
        maxResults: ...
        orderBy: ...
        pageToken: ...
        returnPartialSuccess: ...
    result: listResult

### JSON

\[
  {
    "list": {
      "call": "googleapis.compute.beta.instances.list",
      "args": {
        "project": "...",
        "zone": "...",
        "filter": "...",
        "maxResults": "...",
        "orderBy": "...",
        "pageToken": "...",
        "returnPartialSuccess": "..."
      },
      "result": "listResult"
    }
  }
\]

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
