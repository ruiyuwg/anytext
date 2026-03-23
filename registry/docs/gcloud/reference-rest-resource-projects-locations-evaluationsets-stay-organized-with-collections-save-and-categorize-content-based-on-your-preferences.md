-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [AI and ML](https://docs.cloud.google.com/docs/ai-ml)
-   [Vertex AI](https://docs.cloud.google.com/vertex-ai/docs)
-   [Generative AI on Vertex AI](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/overview)
-   [Referencia de la API](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)

Send feedback

# REST Resource: projects.locations.evaluationSets Stay organized with collections Save and categorize content based on your preferences.

 

## Resource: EvaluationSet

EvaluationSet is a collection of related EvaluationItems that are evaluated together.

Fields

`name` `string`

Identifier. The resource name of the EvaluationSet. Format: `projects/{project}/locations/{location}/evaluationSets/{evaluationSet}`

`displayName` `string`

Required. The display name of the EvaluationSet.

`evaluationItems[]` `string`

Required. The EvaluationItems that are part of this dataset.

`createTime` ``string (`[Timestamp](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp)` format)``

Output only. timestamp when this item was created.

Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: `"2014-10-02T15:01:23Z"`, `"2014-10-02T15:01:23.045123456Z"` or `"2014-10-02T15:01:23+05:30"`.

`updateTime` ``string (`[Timestamp](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp)` format)``

Output only. timestamp when this item was last updated.

Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: `"2014-10-02T15:01:23Z"`, `"2014-10-02T15:01:23.045123456Z"` or `"2014-10-02T15:01:23+05:30"`.

`metadata` ``value (`[Value](https://protobuf.dev/reference/protobuf/google.protobuf/#value)` format)``

Optional. metadata for the EvaluationSet.

JSON representation

{
  "name": string,
  "displayName": string,
  "evaluationItems": \[
    string
  \],
  "createTime": string,
  "updateTime": string,
  "metadata": value
}

 

## Methods

### `[create](/vertex-ai/generative-ai/docs/reference/rest/v1/projects.locations.evaluationSets/create)`

Creates an Evaluation Set.

### `[delete](/vertex-ai/generative-ai/docs/reference/rest/v1/projects.locations.evaluationSets/delete)`

Deletes an Evaluation Set.

### `[get](/vertex-ai/generative-ai/docs/reference/rest/v1/projects.locations.evaluationSets/get)`

Gets an Evaluation Set.

### `[list](/vertex-ai/generative-ai/docs/reference/rest/v1/projects.locations.evaluationSets/list)`

Lists Evaluation Sets.

### `[patch](/vertex-ai/generative-ai/docs/reference/rest/v1/projects.locations.evaluationSets/patch)`

Updates an Evaluation Set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-09-05 UTC.
