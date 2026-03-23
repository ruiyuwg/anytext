-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Migration Center V1 Client - Class RuntimeNetworkInfo (1.2.3) Stay organized with collections Save and categorize content based on your preferences.

1.2.3 (latest) 1.2.2 1.1.2 1.0.3 0.4.5 0.3.1 0.2.0 0.1.0

Reference documentation and code samples for the Google Cloud Migration Center V1 Client class RuntimeNetworkInfo.

Runtime networking information.

Generated from protobuf message `google.cloud.migrationcenter.v1.RuntimeNetworkInfo`

## Namespace

Google \\ Cloud \\ MigrationCenter \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ scan_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Time of the last network scan.

`↳ connections`

`[NetworkConnectionList](/php/docs/reference/cloud-migrationcenter/latest/V1.NetworkConnectionList)`  

Network connections.

### getScanTime

Time of the last network scan.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasScanTime

### clearScanTime

### setScanTime

Time of the last network scan.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getConnections

Network connections.

**Returns**

**Type**

**Description**

`[NetworkConnectionList](/php/docs/reference/cloud-migrationcenter/latest/V1.NetworkConnectionList)|null`

### hasConnections

### clearConnections

### setConnections

Network connections.

**Parameter**

**Name**

**Description**

`var`

`[NetworkConnectionList](/php/docs/reference/cloud-migrationcenter/latest/V1.NetworkConnectionList)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
