-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Artifact Registry V1 Client - Class ImportYumArtifactsGcsSource (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

1.7.1 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.1 1.1.3 1.0.0 0.6.5 0.5.1 0.4.4 0.3.13

Reference documentation and code samples for the Google Cloud Artifact Registry V1 Client class ImportYumArtifactsGcsSource.

Google Cloud Storage location where the artifacts currently reside.

Generated from protobuf message `google.devtools.artifactregistry.v1.ImportYumArtifactsGcsSource`

## Namespace

Google \\ Cloud \\ ArtifactRegistry \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ uris`

`array`  

Cloud Storage paths URI (e.g., gs://my\_bucket//my\_object).

`↳ use_wildcards`

`bool`  

Supports URI wildcards for matching multiple objects from a single URI.

### getUris

Cloud Storage paths URI (e.g., gs://my\_bucket//my\_object).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setUris

Cloud Storage paths URI (e.g., gs://my\_bucket//my\_object).

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getUseWildcards

Supports URI wildcards for matching multiple objects from a single URI.

**Returns**

**Type**

**Description**

`bool`

### setUseWildcards

Supports URI wildcards for matching multiple objects from a single URI.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
