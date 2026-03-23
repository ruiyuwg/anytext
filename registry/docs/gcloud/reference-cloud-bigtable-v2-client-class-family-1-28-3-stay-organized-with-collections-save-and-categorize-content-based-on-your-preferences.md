-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class Family (1.28.3) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class Family.

Specifies (some of) the contents of a single row/column family intersection of a table.

Generated from protobuf message `google.bigtable.v2.Family`

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

`↳ name`

`string`  

The unique key which identifies this family within its row. This is the same key that's used to identify the family in, for example, a RowFilter which sets its "family\_name\_regex\_filter" field. Must match `[-_.a-zA-Z0-9]+`, except that AggregatingRowProcessors may produce cells in a sentinel family with an empty name. Must be no greater than 64 characters in length.

`↳ columns`

`array<[Google\Cloud\Bigtable\V2\Column](/php/docs/reference/cloud-bigtable/1.28.3/V2.Column)>`  

Must not be empty. Sorted in order of increasing "qualifier".

### getName

The unique key which identifies this family within its row. This is the same key that's used to identify the family in, for example, a RowFilter which sets its "family\_name\_regex\_filter" field.

Must match `[-_.a-zA-Z0-9]+`, except that AggregatingRowProcessors may produce cells in a sentinel family with an empty name. Must be no greater than 64 characters in length.

**Returns**

**Type**

**Description**

`string`

### setName

The unique key which identifies this family within its row. This is the same key that's used to identify the family in, for example, a RowFilter which sets its "family\_name\_regex\_filter" field.

Must match `[-_.a-zA-Z0-9]+`, except that AggregatingRowProcessors may produce cells in a sentinel family with an empty name. Must be no greater than 64 characters in length.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getColumns

Must not be empty. Sorted in order of increasing "qualifier".

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setColumns

Must not be empty. Sorted in order of increasing "qualifier".

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Bigtable\V2\Column](/php/docs/reference/cloud-bigtable/1.28.3/V2.Column)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
