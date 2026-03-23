-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class ReadModifyWriteRowRequest (1.27.0) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class ReadModifyWriteRowRequest.

Request message for Bigtable.ReadModifyWriteRow.

Generated from protobuf message `google.bigtable.v2.ReadModifyWriteRowRequest`

## Namespace

Google \\ Cloud \\ Bigtable \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ table_name`

`string`  

Required. The unique name of the table to which the read/modify/write rules should be applied. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.

`↳ app_profile_id`

`string`  

This value specifies routing for replication. If not specified, the "default" application profile will be used.

`↳ row_key`

`string`  

Required. The key of the row to which the read/modify/write rules should be applied.

`↳ rules`

`array<[Google\Cloud\Bigtable\V2\ReadModifyWriteRule](/php/docs/reference/cloud-bigtable/1.27.0/V2.ReadModifyWriteRule)>`  

Required. Rules specifying how the specified row's contents are to be transformed into writes. Entries are applied in order, meaning that earlier rules will affect the results of later ones.

### getTableName

Required. The unique name of the table to which the read/modify/write rules should be applied. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.

**Returns**

**Type**

**Description**

`string`

### setTableName

Required. The unique name of the table to which the read/modify/write rules should be applied. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAppProfileId

This value specifies routing for replication. If not specified, the "default" application profile will be used.

**Returns**

**Type**

**Description**

`string`

### setAppProfileId

This value specifies routing for replication. If not specified, the "default" application profile will be used.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRowKey

Required. The key of the row to which the read/modify/write rules should be applied.

**Returns**

**Type**

**Description**

`string`

### setRowKey

Required. The key of the row to which the read/modify/write rules should be applied.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRules

Required. Rules specifying how the specified row's contents are to be transformed into writes. Entries are applied in order, meaning that earlier rules will affect the results of later ones.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setRules

Required. Rules specifying how the specified row's contents are to be transformed into writes. Entries are applied in order, meaning that earlier rules will affect the results of later ones.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Bigtable\V2\ReadModifyWriteRule](/php/docs/reference/cloud-bigtable/1.27.0/V2.ReadModifyWriteRule)>`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`tableName`

`string`  

Required. The unique name of the table to which the read/modify/write rules should be applied. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`. Please see [Google\\Cloud\\Bigtable\\V2\\BigtableClient::tableName()](/php/docs/reference/cloud-bigtable/1.27.0/V2.BigtableClient#_Google_Cloud_Bigtable_V2_BigtableClient__tableName__) for help formatting this field.

`rowKey`

`string`  

Required. The key of the row to which the read/modify/write rules should be applied.

`rules`

`array<[Google\Cloud\Bigtable\V2\ReadModifyWriteRule](/php/docs/reference/cloud-bigtable/1.27.0/V2.ReadModifyWriteRule)>`  

Required. Rules specifying how the specified row's contents are to be transformed into writes. Entries are applied in order, meaning that earlier rules will affect the results of later ones.

**Returns**

**Type**

**Description**

`[Google\Cloud\Bigtable\V2\ReadModifyWriteRowRequest](/php/docs/reference/cloud-bigtable/1.27.0/V2.ReadModifyWriteRowRequest)`

### static::buildFromTableNameRowKeyRulesAppProfileId

**Parameters**

**Name**

**Description**

`tableName`

`string`  

Required. The unique name of the table to which the read/modify/write rules should be applied. Values are of the form `projects/<project>/instances/<instance>/tables/<table>`. Please see [Google\\Cloud\\Bigtable\\V2\\BigtableClient::tableName()](/php/docs/reference/cloud-bigtable/1.27.0/V2.BigtableClient#_Google_Cloud_Bigtable_V2_BigtableClient__tableName__) for help formatting this field.

`rowKey`

`string`  

Required. The key of the row to which the read/modify/write rules should be applied.

`rules`

`array<[Google\Cloud\Bigtable\V2\ReadModifyWriteRule](/php/docs/reference/cloud-bigtable/1.27.0/V2.ReadModifyWriteRule)>`  

Required. Rules specifying how the specified row's contents are to be transformed into writes. Entries are applied in order, meaning that earlier rules will affect the results of later ones.

`appProfileId`

`string`  

This value specifies routing for replication. If not specified, the "default" application profile will be used.

**Returns**

**Type**

**Description**

`[Google\Cloud\Bigtable\V2\ReadModifyWriteRowRequest](/php/docs/reference/cloud-bigtable/1.27.0/V2.ReadModifyWriteRowRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
