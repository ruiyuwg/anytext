-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Workflows](https://docs.cloud.google.com/workflows/docs)
-   [Référence](https://docs.cloud.google.com/workflows/docs/apis)

Send feedback

# Method: googleapis.documentai.v1beta3.projects.locations.processors.processorVersions.evaluations.get Stay organized with collections Save and categorize content based on your preferences.

Retrieves a specific evaluation.

## Arguments

Parameters

`name`

`string`

Required. The resource name of the Evaluation to get. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}/evaluations/{evaluation}`

`location`

`string`

Location of the HTTP endpoint: `us` or `eu`. If not set, `us` is used by default.

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

If successful, the response contains an instance of [`GoogleCloudDocumentaiV1beta3Evaluation`](/workflows/docs/reference/googleapis/documentai/v1beta3/Overview#GoogleCloudDocumentaiV1beta3Evaluation).

## Subworkflow snippet

Some fields might be optional or required. To identify required fields, refer to the [API documentation](https://cloud.google.com/document-ai/docs/reference/rest/v1beta3/projects.locations.processors.processorVersions.evaluations/get).

### YAML

\- get:
    call: googleapis.documentai.v1beta3.projects.locations.processors.processorVersions.evaluations.get
    args:
        name: ...
    result: getResult

### JSON

\[
  {
    "get": {
      "call": "googleapis.documentai.v1beta3.projects.locations.processors.processorVersions.evaluations.get",
      "args": {
        "name": "..."
      },
      "result": "getResult"
    }
  }
\]

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
