-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Data Catalog V1 Client - Class CloudBigtableClusterSpec (1.10.3) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.2 2.2.4 2.1.0 2.0.2 1.10.3 1.9.1 1.8.2 1.7.1 1.6.0 1.5.1 1.4.2 1.3.9

Reference documentation and code samples for the Google Cloud Data Catalog V1 Client class CloudBigtableClusterSpec.

Spec that applies to clusters of an Instance of Cloud Bigtable.

Generated from protobuf message `google.cloud.datacatalog.v1.CloudBigtableInstanceSpec.CloudBigtableClusterSpec`

## Namespace

Google \\ Cloud \\ DataCatalog \\ V1 \\ CloudBigtableInstanceSpec

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ display_name`

`string`  

Name of the cluster.

`↳ location`

`string`  

Location of the cluster, typically a Cloud zone.

`↳ type`

`string`  

Type of the resource. For a cluster this would be "CLUSTER".

`↳ linked_resource`

`string`  

A link back to the parent resource, in this case Instance.

### getDisplayName

Name of the cluster.

**Returns**

**Type**

**Description**

`string`

### setDisplayName

Name of the cluster.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLocation

Location of the cluster, typically a Cloud zone.

**Returns**

**Type**

**Description**

`string`

### setLocation

Location of the cluster, typically a Cloud zone.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getType

Type of the resource. For a cluster this would be "CLUSTER".

**Returns**

**Type**

**Description**

`string`

### setType

Type of the resource. For a cluster this would be "CLUSTER".

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLinkedResource

A link back to the parent resource, in this case Instance.

**Returns**

**Type**

**Description**

`string`

### setLinkedResource

A link back to the parent resource, in this case Instance.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
