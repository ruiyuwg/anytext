-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Datastore V1 Client - Class PropertyOrder (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

2.0.5 (latest) 2.0.4 1.34.2 1.33.1 1.32.3 1.31.0 1.30.0 1.29.2 1.28.2 1.26.0 1.25.0 1.24.4 1.23.0 1.22.1 1.21.2 1.19.0 1.18.1 1.17.1

Reference documentation and code samples for the Cloud Datastore V1 Client class PropertyOrder.

The desired order for a specific property.

Generated from protobuf message `google.datastore.v1.PropertyOrder`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ property`

`[Google\Cloud\Datastore\V1\PropertyReference](/php/docs/reference/cloud-datastore/1.19.0/V1.PropertyReference)`  

The property to order by.

`↳ direction`

`int`  

The direction to order by. Defaults to `ASCENDING`.

### getProperty

The property to order by.

**Returns**

**Type**

**Description**

`[Google\Cloud\Datastore\V1\PropertyReference](/php/docs/reference/cloud-datastore/1.19.0/V1.PropertyReference)|null`

### hasProperty

### clearProperty

### setProperty

The property to order by.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Datastore\V1\PropertyReference](/php/docs/reference/cloud-datastore/1.19.0/V1.PropertyReference)`  

**Returns**

**Type**

**Description**

`$this`

### getDirection

The direction to order by. Defaults to `ASCENDING`.

**Returns**

**Type**

**Description**

`int`

### setDirection

The direction to order by. Defaults to `ASCENDING`.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
