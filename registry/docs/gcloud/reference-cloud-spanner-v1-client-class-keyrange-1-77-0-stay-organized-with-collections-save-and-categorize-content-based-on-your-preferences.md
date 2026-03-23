-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Spanner V1 Client - Class KeyRange (1.77.0) Stay organized with collections Save and categorize content based on your preferences.

2.6.0 (latest) 2.5.1 2.4.1 2.3.0 2.2.0 2.1.0 2.0.1-RC1 1.106.0 1.105.1 1.104.1 1.103.0 1.102.0 1.101.0 1.100.0 1.98.0 1.97.0 1.96.0 1.95.0 1.94.0 1.93.1 1.92.1 1.91.0 1.90.0 1.89.0 1.88.0 1.87.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.81.0 1.80.0 1.79.0 1.78.0 1.77.0 1.76.1 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.2 1.62.1 1.61.0 1.60.0 1.59.0 1.58.4 1.57.0 1.56.0 1.55.0 1.54.2

Reference documentation and code samples for the Cloud Spanner V1 Client class KeyRange.

KeyRange represents a range of rows in a table or index.

A range has a start key and an end key. These keys can be open or closed, indicating if the range includes rows with that key. Keys are represented by lists, where the ith value in the list corresponds to the ith component of the table or index primary key. Individual values are encoded as described [here](/php/docs/reference/cloud-spanner/1.77.0/V1.TypeCode). For example, consider the following table definition: CREATE TABLE UserEvents ( UserName STRING(MAX), EventDate STRING(10) ) PRIMARY KEY(UserName, EventDate); The following keys name rows in this table: \["Bob", "2014-09-23"\] \["Alfred", "2015-06-12"\] Since the `UserEvents` table's `PRIMARY KEY` clause names two columns, each `UserEvents` key has two elements; the first is the `UserName`, and the second is the `EventDate`. Key ranges with multiple components are interpreted lexicographically by component using the table or index key's declared sort order. For example, the following range returns all events for user `"Bob"` that occurred in the year 2015: "start\_closed": \["Bob", "2015-01-01"\] "end\_closed": \["Bob", "2015-12-31"\] Start and end keys can omit trailing key components. This affects the inclusion and exclusion of rows that exactly match the provided key components: if the key is closed, then rows that exactly match the provided components are included; if the key is open, then rows that exactly match are not included. For example, the following range includes all events for `"Bob"` that occurred during and after the year 2000: "start\_closed": \["Bob", "2000-01-01"\] "end\_closed": \["Bob"\] The next example retrieves all events for `"Bob"`: "start\_closed": \["Bob"\] "end\_closed": \["Bob"\] To retrieve events before the year 2000: "start\_closed": \["Bob"\] "end\_open": \["Bob", "2000-01-01"\] The following range includes all rows in the table: "start\_closed": \[\] "end\_closed": \[\] This range returns all users whose `UserName` begins with any character from A to C: "start\_closed": \["A"\] "end\_open": \["D"\] This range returns all users whose `UserName` begins with B: "start\_closed": \["B"\] "end\_open": \["C"\] Key ranges honor column sort order. For example, suppose a table is defined as follows: CREATE TABLE DescendingSortedTable { Key INT64, ... ) PRIMARY KEY(Key DESC); The following range retrieves all rows with key values between 1 and 100 inclusive: "start\_closed": \["100"\] "end\_closed": \["1"\] Note that 100 is passed as the start, and 1 is passed as the end, because `Key` is a descending column in the schema.

Generated from protobuf message `google.spanner.v1.KeyRange`

## Namespace

Google \\ Cloud \\ Spanner \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ start_closed`

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)`  

If the start is closed, then the range includes all rows whose first `len(start_closed)` key columns exactly match `start_closed`.

`↳ start_open`

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)`  

If the start is open, then the range excludes rows whose first `len(start_open)` key columns exactly match `start_open`.

`↳ end_closed`

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)`  

If the end is closed, then the range includes all rows whose first `len(end_closed)` key columns exactly match `end_closed`.

`↳ end_open`

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)`  

If the end is open, then the range excludes rows whose first `len(end_open)` key columns exactly match `end_open`.

### getStartClosed

If the start is closed, then the range includes all rows whose first `len(start_closed)` key columns exactly match `start_closed`.

**Returns**

**Type**

**Description**

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)|null`

### hasStartClosed

### setStartClosed

If the start is closed, then the range includes all rows whose first `len(start_closed)` key columns exactly match `start_closed`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)`  

**Returns**

**Type**

**Description**

`$this`

### getStartOpen

If the start is open, then the range excludes rows whose first `len(start_open)` key columns exactly match `start_open`.

**Returns**

**Type**

**Description**

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)|null`

### hasStartOpen

### setStartOpen

If the start is open, then the range excludes rows whose first `len(start_open)` key columns exactly match `start_open`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)`  

**Returns**

**Type**

**Description**

`$this`

### getEndClosed

If the end is closed, then the range includes all rows whose first `len(end_closed)` key columns exactly match `end_closed`.

**Returns**

**Type**

**Description**

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)|null`

### hasEndClosed

### setEndClosed

If the end is closed, then the range includes all rows whose first `len(end_closed)` key columns exactly match `end_closed`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)`  

**Returns**

**Type**

**Description**

`$this`

### getEndOpen

If the end is open, then the range excludes rows whose first `len(end_open)` key columns exactly match `end_open`.

**Returns**

**Type**

**Description**

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)|null`

### hasEndOpen

### setEndOpen

If the end is open, then the range excludes rows whose first `len(end_open)` key columns exactly match `end_open`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\ListValue](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/ListValue)`  

**Returns**

**Type**

**Description**

`$this`

### getStartKeyType

**Returns**

**Type**

**Description**

`string`

### getEndKeyType

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
