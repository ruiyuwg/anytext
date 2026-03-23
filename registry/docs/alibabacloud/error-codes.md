This topic lists common errors returned by Tablestore, organized by category: permission verification, HTTP message, API operation, and server errors. Use the error code, HTTP status code, and error message to identify and resolve issues.

> The **Retry** column indicates whether retrying the request can resolve the error. "Yes" means the error is transient and retrying with exponential backoff may succeed. "No" means you must fix the underlying issue before retrying.

## How to use this reference

When your application receives an error from Tablestore:

1.  Locate the error code (OTS-prefixed) in the tables below.
    
2.  Check the HTTP status code to confirm the error category.
    
3.  Read the description for the root cause and resolution.
    
4.  Check the **Retry** column to determine whether your application should retry the request.
    

Key abbreviations used in this document:

-   **Capacity unit (CU)**: The unit of measurement for read and write throughput in Tablestore.
    
-   **Time to live (TTL)**: The duration for which data is retained before automatic expiration.
    

## Permission verification errors

All permission verification errors return HTTP status code 403 and are not retryable. Fix the credential, permission, or network configuration before retrying.

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

403

OTSAuthFailed

The AccessKeyID does not exist.

The AccessKey ID does not exist. Verify that the AccessKey ID is correct.

No

403

OTSAuthFailed

The AccessKeyID is disabled.

The AccessKey ID is disabled. Enable it in the Alibaba Cloud console or use a different one.

No

403

OTSAuthFailed

The user does not exist.

The specified user does not exist. Verify that the RAM user account is valid.

No

403

OTSAuthFailed

The instance is not found.

The specified instance does not exist. Verify the instance name and region.

No

403

OTSAuthFailed

The user has no privilege to access the instance.

You do not have permissions to access the instance. Grant the required permissions to the RAM user.

No

403

OTSAuthFailed

The instance is not running.

The instance is not in the Running state. Check the instance status in the Tablestore console.

No

403

OTSAuthFailed

Signature mismatch.

The request signature does not match the signature you provided. Verify the AccessKey Secret and signing algorithm.

No

403

OTSAuthFailed

Mismatch between system time and x-ots-date: `{Date}`.

The difference between the server time and the time specified by the x-ots-date parameter exceeds the allowed range. Synchronize your system clock.

No

403

OTSAuthFailed

Request denied by instance ACL policies.

The request is rejected because the network type of the client is not allowed by the instance. For more information, see the "Request denied by instance ACL policies" exception that occurs when you use a Tablestore SDK to access Tablestore.

No

403

OTSNoPermissionAccess

You have no permission to access the requested resource, please contact the resource owner

You do not have permissions to manage the resource. Contact the resource owner for authorization. For more information, see [Use a RAM policy to grant permissions to a RAM user](/help/en/tablestore/configure-user-permissions).

No

## HTTP message errors

These errors indicate issues with the HTTP request itself, such as invalid headers, unsupported methods, or request size limits. All HTTP message errors are not retryable.

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

413

OTSRequestBodyTooLarge

The size of POST data is too large.

The POST request body exceeds the size limit. Reduce the request body size.

No

408

OTSRequestTimeout

Request timeout.

The request timed out on the client side. Check network connectivity and increase the timeout setting if needed.

No

405

OTSMethodNotAllowed

OTSMethodNotAllowedOnly POST method for requests is supported.

The request method is not supported. Only POST requests are supported.

No

403

OTSAuthFailed

Mismatch between MD5 value of request body and x-ots-contentmd5 in header.

The MD5 value calculated from the request body differs from the value specified by x-ots-contentmd5 in the request header. Recalculate the MD5 hash.

No

400

OTSParameterInvalid

Missing header: `{HeaderName}`.

A required header is missing. Add the specified header to the request.

No

400

OTSParameterInvalid

Invalid date format: `{Date}`.

The date format is invalid. Use a valid date format.

No

400

OTSParameterInvalid

Unsupported operation: `{Operation}`.

The operation name in the request URL is invalid. Verify the operation name.

No

400

OTSParameterInvalid

Can not reserve read capacity unit on capacity.

Reserved read or write throughput cannot be specified for tables in capacity instances.

No

400

OTSForbiddenUpdateCapacityUnit

Your instance is forbidden to update capacity unit.

Reserved read or write throughput cannot be updated for tables in capacity instances.

No

## API operation errors

These errors occur during Tablestore API operations. Most are caused by invalid parameters (HTTP 400) and are not retryable. Fix the request parameters based on the error message.

### HTTP 500 errors

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

500

OTSInternalServerError

Internal server error.

An internal error occurred. If the error persists after multiple retries, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createInd).

Yes

### HTTP 403 errors

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

403

OTSQuotaExhausted

Too frequent table operations.

The frequency of table operations exceeds the threshold. Wait and retry.

Yes

403

OTSQuotaExhausted

Number of tables exceeded the quota.

The maximum number of tables has been reached. Delete unused tables or request a quota increase.

No

### HTTP 400 errors: table and column validation

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

Invalid instance name: `{InstanceName}`.

The specified instance name is invalid.

No

400

OTSParameterInvalid

Invalid table name: `{TableName}`.

The specified table name is invalid.

No

400

OTSParameterInvalid

Invalid column name: `{ColumnName}`.

The specified column name is invalid.

No

400

OTSParameterInvalid

`{ColumnType}` is an invalid type for the primary key.

The primary key column type is invalid.

No

400

OTSParameterInvalid

`{ColumnType}` is an invalid type for the attribute column.

The attribute column type is invalid.

No

400

OTSParameterInvalid

The number of primary key columns must be in range: `[1, {Limit}]`.

The number of primary key columns is 0 or exceeds the limit.

No

400

OTSParameterInvalid

Value of column `{ColumnName}` must be UTF8 encoding.

The column values are not encoded in UTF-8.

No

400

OTSParameterInvalid

The length of attribute column: `{ColumnName}` exceeded the MaxLength:`{MaxSize} with Current Length:{CellSize}`.

The attribute column name exceeds the maximum length.

No

400

OTSParameterInvalid

Duplicated primary key name: `'{PKName}'`.

Duplicate primary keys exist.

No

400

OTSParameterInvalid

Duplicated attribute column name with primary key column: `{ColumnName}`.

An attribute column name is the same as a primary key column name in the row.

No

400

OTSParameterInvalid

The number of attribute columns exceeds the limit, limit count:`{Limit}`, column count: `{Count}`.

The number of attribute columns exceeds the limit.

No

400

OTSParameterInvalid

The length of primary key column: `{ColumnName}` exceeds the MaxLength: `{Limit}` with CurrentLength: `{Current}`.

The primary key length exceeds the maximum.

No

400

OTSParameterInvalid

No name is given for primary key.

No name is specified for the primary key column.

No

400

OTSParameterInvalid

No value is given for primary key name:`{PkName}`.

No value is specified for the primary key column.

No

400

OTSParameterInvalid

OpType cannot be given for primary key name :`{PkName}`.

An operation type is specified for the primary key. You cannot specify an operation type for the primary key.

No

400

OTSParameterInvalid

Timestamp cannot be given for primary key name:`{PkName}`.

A timestamp is specified for the primary key. You cannot specify a timestamp for the primary key.

No

400

OTSParameterInvalid

Duplicated primary key name: `{PkName}`.

Duplicate primary keys exist.

No

400

OTSParameterInvalid

No name is given for attribute column.

No attribute column name is specified.

No

400

OTSParameterInvalid

No value is given for column name.

No attribute column value is specified.

No

400

OTSParameterInvalid

Attribute column is missing.

No attribute column is specified.

No

400

OTSParameterInvalid

invalid name of column: empty name.

The attribute column name is empty.

No

400

OTSParameterInvalid

Invalid column type, only STRING,INTEGER,BINARY is allowed.

The column type is invalid. Primary key columns support only the STRING, INTEGER, and BINARY types.

No

400

OTSParameterInvalid

Invalid column type: `{ColumnType}`.

The column type is invalid.

No

400

OTSParameterInvalid

double can not be used as primary key.

The Double type cannot be used for primary keys.

No

400

OTSParameterInvalid

Column does not exist:`{ColumnName}`.

The specified column does not exist.

No

400

OTSParameterInvalid

The number of columns from the request exceeds the limit, limit count: `{Limit}` , column count:`{current}`.

The number of columns in the request exceeds the limit.

No

400

OTSParameterInvalid

The number of defined columns must be in range: \[0, 32\].

The number of predefined columns exceeds 32.

No

400

OTSParameterInvalid

PK column size not the same for all rows in table: `{TableName}`.

Different rows have different numbers of primary key columns.

No

400

OTSInvalidPK

Primary key schema mismatch.

The specified primary key does not match the primary key of the data table.

No

400

OTSOutOfRowSizeLimit

The total data size of columns in one row exceeded the limit.

The total data size of all columns in the row exceeds the limit.

No

400

OTSOutOfColumnCountLimit

The number of columns in one row exceeded the limit.

The number of columns in the row exceeds the limit.

No

### HTTP 400 errors: auto-increment primary key

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

AUTO\_INCREMENT primary key must be integer.

Only INTEGER type columns can be set as auto-increment primary key columns.

No

400

OTSParameterInvalid

AUTO\_INCREMENT primary key count must <= 1.

You can specify only one auto-increment primary key column.

No

400

OTSParameterInvalid

First primary key can't be auto increment, table: `{TableName}`.

The first primary key column cannot be an auto-increment primary key column.

No

400

OTSParameterInvalid

PkAutoIncr cannot be set as first pk column.

The auto-increment primary key column cannot be the first primary key column.

No

400

OTSParameterInvalid

the count of auto-incremental primary keys can not be more than 1.

You can specify only one auto-increment primary key column.

No

400

OTSParameterInvalid

Auto increment pk must be integer, name: `{PkName}`.

The auto-increment primary key column is not of the INTEGER type.

No

400

OTSParameterInvalid

`{Count}` pk auto increment exist in row.

More than one auto-increment primary key column exists.

No

400

OTSParameterInvalid

PKAutoIncr can't be used for read operations.

You cannot specify the auto-increment primary key column attribute for read operations.

No

400

OTSParameterInvalid

Invalid row to delete which with pk auto increment.

You cannot specify the auto-increment primary key column attribute for delete operations.

No

400

OTSParameterInvalid

Invalid expect:`{RowExpect}` when modify row with pk auto increment.

The existence condition is invalid for the row with an auto-increment primary key column.

No

400

OTSParameterInvalid

Can't set condition when modify row with pk auto increment.

You cannot configure conditional update for rows with auto-increment primary key columns.

No

400

OTSParameterInvalid

Invalid expect: `{RowExpect}` when modify a specific row for table with pk auto increment.

The existence condition of the row to be modified in the table with an auto-increment primary key column is invalid.

No

### HTTP 400 errors: row operations (PutRow, UpdateRow, DeleteRow)

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

OpType cannot be given for column name:`{ColumnName}` in PutRow.

An operation type is specified for PutRow. You can specify an operation type only for UpdateRow.

No

400

OTSParameterInvalid

Column value cannot be given when type is DELETE\_ONE\_VERSION,DELETE\_ALL\_VERSION.

Attribute column values cannot be specified for delete operations such as DELETE\_ONE\_VERSION or DELETE\_ALL\_VERSION.

No

400

OTSParameterInvalid

Timestamp must be given when type is DELETE\_ONE\_VERSION.

No version number is specified. To delete a version, specify a version number.

No

400

OTSParameterInvalid

Timestamp cannot be given when type is DELETE\_ALL\_VERSION.

A version number is specified. To delete all versions, do not specify a version number.

No

400

OTSParameterInvalid

Invalid cell: `{Cell}`. missing timestamp.

The timestamp is not specified.

No

400

OTSParameterInvalid

Invalid cell timestamp: `{Timestamp}`. Expect: \[0, Version::kMax.mVersion / kUsecPerMsec\]..

The specified timestamp is invalid.

No

400

OTSParameterInvalid

Invalid timestamp. Cell:`{CellName}`.

Data can be written only when the specified timestamp in milliseconds divided by 1000 is within the valid version range. The valid version range is calculated by using the following formula: **Valid version range = \[max{Data written time - Max version offset, Data written time - TTL value}, Data written time + Max version offset)**

No

400

OTSParameterInvalid

Invalid timestamp for cell: `{Timestamp}`. timestamp is inapplicable to DELETE\_ALL\_VERSION.

A version is specified when DELETE\_ALL\_VERSION is used to delete all versions. Do not specify a version with DELETE\_ALL\_VERSION.

No

400

OTSParameterInvalid

Invalid op type of cell: `{OpType}`.

The operation type is invalid.

No

400

OTSParameterInvalid

Invalid cell: `{Cell}`. Reason: missing value.

The cell value is not specified.

No

400

OTSParameterInvalid

Invalid request of delete row: missing RowDeleteMarker in request.

RowDeleteMarker is not included in the delete request.

No

400

OTSParameterInvalid

Invalid request of put/update row: unexpected RowDeleteMarker in request.

RowDeleteMarker is included in PutRow or UpdateRow. Do not include RowDeleteMarker in PutRow or UpdateRow.

No

400

OTSParameterInvalid

Invalid update row request: missing cells in request.

The attribute column values are not specified in UpdateRow.

No

400

OTSParameterInvalid

Invalid delete row request: unexpected cells in request.

An attribute column value is specified in DeleteRow. Do not specify attribute column values in DeleteRow.

No

400

OTSParameterInvalid

Invalid request of put row: find cells without values.

The attribute column values are not specified in PutRow.

No

400

OTSParameterInvalid

Invalid action: `{Action}`.

The operation type is invalid.

No

400

OTSParameterInvalid

Invalid row-existence expectation: `{Expectation}`.

The row existence condition is invalid.

No

400

OTSParameterInvalid

Attribute column cannot be given while reading data.

Do not specify attribute column values for read operations.

No

400

OTSParameterInvalid

Delete marker cannot be given.

The operation does not support the DeleteMarker parameter. Only delete operations support DeleteMarker.

No

### HTTP 400 errors: batch operations (BatchGetRow, BatchWriteRow)

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

No row specified in the request of BatchGetRow.

No row is specified for the BatchGetRow operation.

No

400

OTSParameterInvalid

Duplicated table name: `{TableName}`.

Tables with the same name are specified for the BatchGetRow or BatchWriteRow operation.

No

400

OTSParameterInvalid

Rows count exceeds the upper limit:`{limit}`.

The number of rows exceeds the write limit for the table.

No

400

OTSParameterInvalid

No row is specified in BatchWriteRow.

No row is specified for the BatchWriteRow operation. Specify at least one row.

No

400

OTSParameterInvalid

No operation is specified for table:`{TableName}`.

No operation is specified for the table in the BatchWriteRow operation.

No

400

OTSParameterInvalid

The type of row in batch write operation is invalid.

The row type in the BatchWriteRow operation is invalid.

No

400

OTSParameterInvalid

The modify type is invalid.

The operation type in the BatchWriteRow operation is invalid. Only the PUT, UPDATE, and DELETE operation types are supported.

No

400

OTSParameterInvalid

The total data size of BatchWriteRow request exceeds the limit, limit size: `{LimitSize}`, data size:`{UserSize}`.

The data size of the BatchWriteRow request exceeds the limit.

No

400

OTSParameterInvalid

The total data size of PutRow request exceeds the limit, limit size: `{Limit}` , data size: `{Current}`.

The data size of the PutRow request exceeds the limit.

No

400

OTSParameterInvalid

The total data size of UpdateRow request exceeds the limit, limit size: `{Limit}` , data size: `{Current}`.

The data size of the UpdateRow request exceeds the limit.

No

400

OTSParameterInvalid

Repeated rows do not support row exist expectation check in BatchModify.

Row existence check is not allowed for duplicate rows in BatchWriteRow.

No

400

OTSParameterInvalid

Repeated rows do not support row condition check in BatchModify.

Conditional update is not allowed for duplicate rows in BatchWriteRow.

No

400

OTSParameterInvalid

Duplicate rows detected in MultiPut.

Duplicate rows exist in MultiPut.

No

400

OTSParameterInvalid

Duplicate rows detected in MultiGet.

Duplicate rows exist in MultiGet.

No

### HTTP 400 errors: range query (GetRange)

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

The limit must be greater than 0.

The limit value is less than or equal to 0. Set the limit to a value greater than 0.

No

400

OTSParameterInvalid

Start and end time must be given at the same time.

Specify both StartTime and EndTime together for the GetRange operation.

No

400

OTSParameterInvalid

Begin key must less than end key in FORWARD.

The start key must be less than the end key for forward queries.

No

400

OTSParameterInvalid

Begin key must more than end key in BACKWARD.

The start key must be greater than the end key for backward queries.

No

400

OTSParameterInvalid

Invalid max scan size: `{Limit}`.

The limit value for range query exceeds the threshold.

No

400

OTSParameterInvalid

invalid range, the begin's type is different from the end's,`{BeginType}`:`{EndType}`.

The start key type differs from the end key type for range query.

No

### HTTP 400 errors: version and TTL

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

Time-to-live is missing while creating table.

TTL is not specified when creating the table.

No

400

OTSParameterInvalid

MaxVersions is missing while creating table.

No value is specified for the max versions parameter when creating the table.

No

400

OTSParameterInvalid

TimeToLive cannot be 0 or less than -1.

TTL cannot be 0 or less than -1. You can set TTL to -1.

No

400

OTSParameterInvalid

The maximum versions cannot be less than or equal to 0.

The max versions value must be greater than 0.

No

400

OTSParameterInvalid

Timestamp must be in range \[0, INT64\_MAX/1000).

The timestamp must be greater than or equal to 0 and less than INT64\_MAX/1000.

No

400

OTSParameterInvalid

Specific timestamp cannot be less than 0.

The specified timestamp is less than 0.

No

400

OTSParameterInvalid

The maximum deviation must be in range \[0, INT64\_MAX/1000000\].

The max version offset value is out of range.

No

400

OTSParameterInvalid

No version condition is specified while querying row.

No version condition is specified for the query.

No

400

OTSParameterInvalid

Specific tiemstamp and max versions cannot be given at the same time.

A timestamp and the max versions parameter cannot be specified at the same time.

No

400

OTSParameterInvalid

Specific tiemstamp and time range cannot be given at the same time.

A timestamp and a timestamp range cannot be specified at the same time.

No

400

OTSParameterInvalid

Specific timestamp, time range and max versions cannot be given at the same time.

A timestamp, a timestamp range, and the max versions parameter cannot be specified at the same time. Specify only one.

No

400

OTSParameterInvalid

Invalid max versions: `{Version}` . Reason: Max versions must be positive.

The max versions value is invalid. The value must be greater than 0 or equal to -1.

No

400

OTSParameterInvalid

Duplicated attribute column name with primary key column:`{PkName}`.

The attribute column name is the same as the primary key column name.

No

### HTTP 400 errors: capacity unit

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

The value of read capacity unit can not be less than `{Limit}`.

The read CU value is less than the lower limit.

No

400

OTSParameterInvalid

The value of write capacity unit can not be less then `{Limit}`.

The write CU value is less than the lower limit.

No

400

OTSParameterInvalid

Invalid Capacity Unit for UpdateTable: Either read(`{CU}`) or write(`{CU}`) should be non-negative.

The read or write CU count is less than 0. Both values must be greater than or equal to 0.

No

400

OTSParameterInvalid

Invalid Capacity Unit:`{CU}` . Capacity Unit must be nonnegative.

The CU value is less than 0. The value must be greater than or equal to 0.

No

400

OTSParameterInvalid

Can not reserve read capacity unit on hybrid storage cluster: `{TableName}`.

Reserved read CUs cannot be specified for capacity instances.

No

400

OTSParameterInvalid

Can not reserve write capacity unit on hybrid storage cluster: `{TableName}`.

Reserved write CUs cannot be specified for capacity instances.

No

400

OTSParameterInvalid

No parameter is specified in table options.

No parameter is specified in TableOption.

No

### HTTP 400 errors: filter

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

Deserialize filter failed.

Filter deserialization failed. The filter format encapsulated by the SDK is invalid.

No

400

OTSParameterInvalid

Offset in ColumnPaginationFilter must be greater than or equal to 0.

The ColumnPaginationFilter offset value is less than 0. Set the offset to 0 or greater.

No

400

OTSParameterInvalid

Limit in ColumnPaginationFilter must be greater than 0.

The ColumnPaginationFilter limit value is less than 0. Set the limit to 0 or greater.

No

400

OTSParameterInvalid

Deserialize relation filter failed.

Deserialization of the single column filter failed. The SDK filter format may be invalid.

No

400

OTSParameterInvalid

Deserialize composite filter failed.

Deserialization of the combined filter failed. The SDK filter format may be invalid.

No

400

OTSParameterInvalid

Deserialize column pagination filter failed.

Deserialization of the wide row filter failed. The SDK filter format may be invalid.

No

400

OTSParameterInvalid

The count of filter exceeds the max:`{Limit}`.

The number of filters exceeds the limit.

No

400

OTSParameterInvalid

Invalid offset of Filter: `{Filter}` . Reason: Offset must be nonnegative.

The filter offset value is less than 0. Set the offset to 0 or greater.

No

400

OTSParameterInvalid

Invalid relation operator: `{Operation}`.

The relational operator is invalid.

No

400

OTSParameterInvalid

Invalid type of filter: `{Type}`.

The filter type is invalid.

No

400

OTSParameterInvalid

Invalid NOT operator: the number of sub-filters must be 1.

The NOT operator supports only one subfilter.

No

400

OTSParameterInvalid

Invalid AND/OR operator: the number of sub-filters must be 2.

The AND and OR operators require exactly two subfilters.

No

400

OTSParameterInvalid

Invalid type of sub-filter: `{Filter}`.

The subfilter type is invalid.

No

### HTTP 400 errors: return type and condition

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

Invalid return type: `{ReturnType}`.

The return type is invalid.

No

400

OTSParameterInvalid

Invalid condition:`{Condition}`.

The specified condition is invalid.

No

400

OTSParameterInvalid

Invalid ModifyType:`{ModifyType}`.

The update type is invalid.

No

### HTTP 400 errors: PlainBuffer encoding

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

Input encoded PK broken, invalidate cell key type:xx.

The primary key encoded in PlainBuffer format is invalid. The cell type is invalid.

No

400

OTSParameterInvalid

Input encoded PK broken, length is shorter than expect.

The primary key encoded in PlainBuffer format is invalid. The primary key length is less than expected.

No

400

OTSParameterInvalid

data format is invalid.

The row data encoded in PlainBuffer format is invalid.

No

400

OTSParameterInvalid

data format is invalid, unknown variant type occured.

The row data encoded in PlainBuffer format is invalid. The value type is invalid.

No

400

OTSParameterInvalid

Cell data broken, mismatch header, actual: `{Header}` , expect: `{Header}`.

The row data encoded in PlainBuffer format is invalid due to a header mismatch.

No

400

OTSParameterInvalid

Cell data broken, PK value cannot be NULL, name: `{PkName}`.

The row data encoded in PlainBuffer format is invalid. The primary key value for PkName is empty.

No

400

OTSParameterInvalid

Cell data broken, PK is empty.

The row data encoded in PlainBuffer format is invalid. The primary key is not specified.

No

400

OTSParameterInvalid

Cell data broken, no PK follow PKTag.

The row data encoded in PlainBuffer format is invalid. The primary key does not follow the primary key tag.

No

400

OTSParameterInvalid

Cell data broken, attr has no name.

The row data encoded in PlainBuffer format is invalid. The attribute column name is not specified.

No

400

OTSParameterInvalid

Cell data broken, attr has no value, name:`{Name}`.

The row data encoded in PlainBuffer format is invalid. The attribute column value is not specified.

No

400

OTSParameterInvalid

Cell data broken, no Cells follow CellTag.

The row data encoded in PlainBuffer format is invalid. The cell content does not follow the cell tag.

No

400

OTSParameterInvalid

Cell data broken, no valid element in Cell, name: `{Name}`.

The row data encoded in PlainBuffer format is invalid due to different cell formats.

No

400

OTSParameterInvalid

Cell data broken, cell is not end with checksum\[`{0x0A}`\]"\] tag.

The row data encoded in PlainBuffer format is invalid. The cell does not end with CheckSumFlag after encoding.

No

400

OTSParameterInvalid

Cell data broken, row is not end with checksum tag.

The row data encoded in PlainBuffer format is invalid. The row data does not end with CheckSumTag after encoding.

No

400

OTSParameterInvalid

Cell data broken, mismatch tag, actual tag(`{TAG}`), expect(`{TAG}`).

The row data encoded in PlainBuffer format is invalid. The specified tag does not exist.

No

400

OTSParameterInvalid

Cell data broken, wrong string format, size: `{Size}`.

The row data encoded in PlainBuffer format is invalid. The string encoding format is invalid.

No

400

OTSParameterInvalid

Cell data broken, checksum is mismatch, `{UserChecksum}` :`{ServiceChecksum}` :

The row data encoded in PlainBuffer format is invalid. The UserChecksum value differs from the ServiceChecksum value calculated by the server.

No

400

OTSParameterInvalid

Cell data broken, has more data in cell, but they can't be parsed.

The column data encoded in PlainBuffer format is invalid due to excess data.

No

400

OTSParameterInvalid

Invalid row: missing checksum.

The row data encoded in PlainBuffer format is invalid. The row checksum value is not specified.

No

400

OTSParameterInvalid

Invalid Column(`{ColumnName}`): missing checksum.

The column data encoded in PlainBuffer format is invalid. The cell checksum value is not specified.

No

400

OTSParameterInvalid

Parse PBMessage from RawString failed.

Protobuf deserialization failed. The SDK serialization code may be invalid.

No

400

OTSParameterInvalid

Cannot deserialize the request data.

Request data deserialization failed due to an empty value or invalid format.

No

400

OTSParameterInvalid

Unknown or unsupported CellType in primary key: `{PkName}`.

The cell type of the primary key is unrecognized.

No

400

OTSParameterInvalid

Invalid boolean real value, value length: `{Length}`.

The column data encoded in PlainBuffer format is invalid. The Boolean value length is invalid.

No

400

OTSParameterInvalid

NaN can't be set to double value.

The value of a Double type column is set to NaN.

No

400

OTSParameterInvalid

Infinity can't be set to double value.

The value of a Double type column is set to Infinity.

No

### HTTP 400 errors: search index and advanced features

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSParameterInvalid

Can't write index table directly.

Write operations cannot be performed on index tables.

No

400

OTSParameterInvalid

Try to call method using explicit transaction on explicit-transaction-disabled table.

Local transaction is disabled for the table.

No

400

OTSParameterInvalid

Table\[tablename\] who has at least one search index cannot be deleted.

Tables with search indexes cannot be deleted. Delete the search indexes first.

No

400

OTSParameterInvalid

nested field aggregation/groupby must not be recursive.

Recursive GroupBy or aggregation cannot be used in nested fields.

No

400

OTSParameterInvalid

failed to query index, please check if 'Index' is enabled for query fields.

Indexing is disabled for the query field. Enable indexing for the field.

No

400

OTSParameterInvalid

\[table ttl\] must be bigger than or equal search index ttl, but table ttl is xxxx and search index ttl is \[`{IndexName}`:xxxx\]

The data table TTL is smaller than the search index TTL. The data table TTL must be greater than or equal to the search index TTL.

No

400

OTSParameterInvalid

the number of index in creating has exceed the instance quota, limit: 10

The total number of search indexes being created and indexes undergoing dynamic schema modification cannot exceed 10. Wait until synchronization completes and try again.

No

400

OTSParameterInvalid

can't delete analytical store with sql binding

The analytical store used in a mapping table cannot be deleted. Delete the mapping table first.

No

### HTTP 400 errors: stream

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

400

OTSTunnelServerUnavailable

OTSTrimmedDataAccess Requested stream data is already trimmed or does not exist.

Stream logs have expired and data has not been pulled for a long period.

No

## Tablestore server errors

These errors originate from Tablestore server-side operations. Errors with HTTP status code 503, 409 (OTSRowOperationConflict), and 404 (OTSTableNotReady) are transient and can be retried with exponential backoff.

### HTTP 503 errors (transient)

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

503

OTSServerBusy

Server is busy.

An internal Tablestore server is busy. Try again later.

Yes

503

OTSPartitionUnavailable

The partition is not available.

The partition is being loaded. Try again later.

Yes

503

OTSTimeout

Operation timeout.

An internal Tablestore operation timed out.

Yes

503

OTSServerUnavailable

Server is not available.

An internal Tablestore server is inaccessible.

Yes

### HTTP 409 errors (conflict)

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

409

OTSRowOperationConflict

Data is being modified by the other request.

Concurrent write requests to the same row caused a conflict. Retry the request.

Yes

409

OTSObjectAlreadyExist

Requested table already exists.

The data table or index table that you want to create already exists.

No

### HTTP 404 errors (not found)

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

404

OTSObjectNotExist

Requested table does not exist.

The requested table does not exist. Verify the table name.

No

404

OTSTableNotReady

The table is not ready.

The table is being initialized. Wait a few seconds and try again.

Yes

### HTTP 403 errors (forbidden)

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

403

OTSTooFrequentReserved ThroughputAdjustment

Capacity unit adjustment is too frequent.

The read/write CUs are adjusted too frequently. Wait before adjusting again.

Yes

403

OTSCapacityUnitExhausted

Capacity unit is not enough.

The read/write CUs for the partition are exhausted.

No

403

OTSConditionCheckFail

Condition check failed.

Condition check failed. Verify the row existence condition or column condition.

No

### HTTP 429 errors (throttling)

**HTTP status code**

**Error code**

**Error message**

**Description**

**Retry**

429

OTSFlowControl

The requests have been throttled.

Analyze this error based on the actual scenario. [Submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createInd) to contact Tablestore technical support for troubleshooting.

No

## Common error handling patterns

When handling Tablestore errors in your application, follow these guidelines:

-   **Implement exponential backoff for retryable errors.** For errors marked as retryable (such as OTSServerBusy, OTSPartitionUnavailable, OTSTimeout, OTSServerUnavailable, OTSRowOperationConflict, and OTSTableNotReady), retry the request with exponential backoff. Start with a short delay (for example, 100 ms) and double the delay for each subsequent retry, up to a maximum delay.
    
-   **Handle batch operation partial failures.** BatchGetRow and BatchWriteRow operations may partially succeed. Always check the response for per-row error information, even when the HTTP response returns 200.
    
-   **Distinguish client errors from server errors.** HTTP 4xx errors (400, 403, 404, 405, 408, 413, 429) indicate client-side issues. Fix the request before retrying. HTTP 5xx errors (500, 503) indicate server-side issues and are typically transient.
    
-   **Log error details for debugging.** Include the error code, error message, HTTP status code, and request ID in your error logs to help troubleshooting when you need to [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createInd).
