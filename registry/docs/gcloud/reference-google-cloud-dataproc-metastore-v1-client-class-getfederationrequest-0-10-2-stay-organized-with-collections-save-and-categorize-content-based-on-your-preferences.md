-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataproc Metastore V1 Client - Class GetFederationRequest (0.10.2) Stay organized with collections Save and categorize content based on your preferences.

1.2.3 (latest) 1.2.2 1.1.1 1.0.4 0.11.5 0.10.2 0.9.0 0.8.1 0.7.0 0.6.1 0.5.1 0.4.1

Reference documentation and code samples for the Google Cloud Dataproc Metastore V1 Client class GetFederationRequest.

Request message for GetFederation.

Generated from protobuf message `google.cloud.metastore.v1.GetFederationRequest`

## Namespace

Google \\ Cloud \\ Metastore \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. The relative resource name of the metastore federation to retrieve, in the following form: `projects/{project_number}/locations/{location_id}/federations/{federation_id}`.

### getName

Required. The relative resource name of the metastore federation to retrieve, in the following form: `projects/{project_number}/locations/{location_id}/federations/{federation_id}`.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The relative resource name of the metastore federation to retrieve, in the following form: `projects/{project_number}/locations/{location_id}/federations/{federation_id}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. The relative resource name of the metastore federation to retrieve, in the following form:

`projects/{project_number}/locations/{location_id}/federations/{federation_id}`. Please see [Google\\Cloud\\Metastore\\V1\\DataprocMetastoreFederationClient::federationName()](/php/docs/reference/cloud-dataproc-metastore/0.10.2/V1.DataprocMetastoreFederationClient#_Google_Cloud_Metastore_V1_DataprocMetastoreFederationClient__federationName__) for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Metastore\V1\GetFederationRequest](/php/docs/reference/cloud-dataproc-metastore/0.10.2/V1.GetFederationRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
