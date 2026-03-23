-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Oracle Database V1 Client - Class GetCloudVmClusterRequest (0.1.2) Stay organized with collections Save and categorize content based on your preferences.

0.8.2 (latest) 0.8.1 0.7.1 0.6.1 0.4.1 0.3.0 0.2.1 0.1.2

Reference documentation and code samples for the Google Cloud Oracle Database V1 Client class GetCloudVmClusterRequest.

The request for `CloudVmCluster.Get`.

Generated from protobuf message `google.cloud.oracledatabase.v1.GetCloudVmClusterRequest`

## Namespace

Google \\ Cloud \\ OracleDatabase \\ V1

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

Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud\_vm\_cluster}.

### getName

Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud\_vm\_cluster}.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud\_vm\_cluster}.

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

Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud\_vm\_cluster}. Please see OracleDatabaseClient::cloudVmClusterName() for help formatting this field.

**Returns**

**Type**

**Description**

`[GetCloudVmClusterRequest](/php/docs/reference/cloud-oracledatabase/0.1.2/V1.GetCloudVmClusterRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
