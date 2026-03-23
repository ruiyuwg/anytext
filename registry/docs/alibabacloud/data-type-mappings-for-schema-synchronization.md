Heterogeneous databases support different data types. When you use Data Transmission Service (DTS) to synchronize data between heterogeneous databases, DTS maps data types during initial schema synchronization. This process converts the data types from the source database to data types supported by the destination database. This topic describes the data type mappings to help you evaluate the impact of data synchronization on your business.

## Overview

This section describes the data type mappings between heterogeneous databases for the following data synchronization scenarios:

-   [Data synchronization from a MySQL source](#section-4yx-7rq-9ix)
    
-   [Data synchronization from an Oracle source](#section-2hu-0st-wkf)
    
-   [Data synchronization from a PostgreSQL source](#section-rgb-f6y-g4d)
    
-   [Data synchronization from an SQL Server source](#section-r6z-qnh-j5k)
    
-   [Data synchronization from a Db2 for LUW source](#section-l2a-ots-yt8)
    
-   [Data synchronization from a Db2 for i source](#section-ya4-ejv-yjs)
    
-   [Data synchronization from a TiDB source](#094a562010yet)
    

## Data synchronization from a MySQL source

When the source database is a MySQL database, such as an RDS for MySQL instance, a self-managed MySQL database, or a PolarDB for MySQL cluster, and the destination instance is a heterogeneous database, such as AnalyticDB for MySQL or AnalyticDB for PostgreSQL, the data type mappings are as follows:

**Note**

If the value range of the data to be synchronized from the source instance exceeds the range supported by DTS, the data precision is reduced when the data is written to the destination instance.

### **Destination instance:** AnalyticDB for MySQL **or AnalyticDB for PostgreSQL**

**Note**

When you synchronize data to AnalyticDB for MySQL, note the following:

-   DTS converts an `INT` field with the `AUTO_INCREMENT` attribute in the source database to the `BIGINT` type in the destination database.
    
-   To avoid a performance impact, if a table used in a `JOIN` operation contains both `INT` and `BIGINT` fields, ensure that both fields use the same data type (`INT` or `BIGINT`) in the destination database.
    

**Type**

**Source data type**

**Value range**

**Data type in** **AnalyticDB for MySQL**

**Data type in AnalyticDB for PostgreSQL**

Integer

BIT\[(M)\]

1 to 64

VARCHAR

BIT\[(M)\]

TINYINT\[(M)\]

\-128 to 127

TINYINT

SMALLINT

TINYINT\[(M)\] \[UNSIGNED\]

0 to 255

SMALLINT

SMALLINT

SMALLINT\[(M)\]

\-32768 to 32767

SMALLINT

SMALLINT

SMALLINT\[(M)\] \[UNSIGNED\]

0 to 65535

INT

INTEGER

MEDIUMINT\[(M)\]

\-8388608 to 8388607

INT

INTEGER

MEDIUMINT\[(M)\] \[UNSIGNED\]

0 to 16777215

INT

INTEGER

INT\[(M)\]

\-2147483648 to 2147483647

INT

INTEGER

INT\[(M)\] \[UNSIGNED\]

0 to 4294967295

BIGINT

BIGINT

BIGINT\[(M)\]

\-9223372036854775808 to 9223372036854775807

BIGINT

BIGINT

BIGINT\[(M)\] \[UNSIGNED\]

0 to 18446744073709551615

DECIMAL(20,0)

NUMERIC(20)

Decimal

DECIMAL\[(M\[,D\])\]

M: 0 to 65

D: 0 to 30

DECIMAL\[(M\[,D\])\]

DECIMAL\[(M\[,D\])\]

FLOAT(p)

1.175494351E-38 to 3.402823466E+38

FLOAT

REAL

DOUBLE\[(M,D)\]

2.2250738585072014E-308 to 1.7976931348623157E+308

DOUBLE

DOUBLE PRECISION

Time Type

DATE

1000-01-01 to 9999-12-31

**Note**

Format: YYYY-MM-DD.

DATE

DATE

DATETIME\[(fsp)\]

1000-01-01 00:00:00.000000 to 9999-12-31 23:59:59.999999

**Note**

Format: YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

DATETIME

TIMESTAMP

TIMESTAMP\[(fsp)\]

1970-01-01 00:00:01.000000 to 2038-01-19 03:14:07.999999

**Note**

Format: YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

TIMESTAMP

TIMESTAMP WITH TIME ZONE

TIME\[(fsp)\]

\-838:59:59.000000 to 838:59:59.000000

**Note**

Format: hh:mm:ss\[.fraction\] (UTC).

TIME

TIMESTAMP WITH TIME ZONE

YEAR\[(4)\]

1901 to 2155, or 0000

INT

INTEGER

String

CHAR\[(M)\]

0 to 255 characters

VARCHAR

CHAR

VARCHAR(M)

0 to 65,535 characters

VARCHAR

VARCHAR

BINARY\[(M)\]

0 to 255 bytes

VARBINARY

BYTEA

VARBINARY(M)

0 to 65,535 bytes

VARBINARY

BYTEA

TINYBLOB

255 (2^8 - 1) bytes

VARBINARY

BYTEA

TINYTEXT

255 (2^8 - 1) characters

VARCHAR

TEXT

BLOB

65,535 (2^16 - 1) bytes

VARBINARY

BYTEA

TEXT

65,535 (2^16 - 1) characters

VARCHAR

TEXT

MEDIUMBLOB

16,777,215 (2^24 - 1) bytes

VARBINARY

BYTEA

MEDIUMTEXT

16,777,215 (2^24 - 1) characters

VARCHAR

TEXT

LONGBLOB

4,294,967,295 or 4 GB (2^32 - 1) bytes

VARBINARY

BYTEA

LONGTEXT

4,294,967,295 or 4 GB (2^32 - 1) characters

VARCHAR

TEXT

ENUM('value1','value2',...)

A maximum of 65,535 enumeration values.

VARCHAR

VARCHAR(128)

SET('value1','value2',...)

A maximum of 64 elements.

VARCHAR

VARCHAR(128)

Space types

GEOMETRY

A value of any geometry type.

VARBINARY

POLYGON

POINT

None

VARBINARY

POINT

LINESTRING

None

VARBINARY

PATH

POLYGON

None

VARBINARY

POLYGON

MULTIPOINT

None

VARBINARY

POLYGON

MULTILINESTRING

None

VARBINARY

PATH

MULTIPOLYGON

None

VARBINARY

POLYGON

GEOMETRYCOLLECTION

A collection of values of any geometry type.

VARBINARY

POLYGON

JSON data type

JSON

None

JSON

JSON

### **Destination instance: DataHub, Kafka (Message Queue for Apache Kafka or self-managed Kafka)**

**Type**

**Source data type**

**Value range**

**Data type in DataHub**

**Data type in Message Queue for Apache Kafka or self-managed Kafka**

Integer

BIT\[(M)\]

1 to 64

BOOLEAN | STRING

Same as the data type in MySQL or PolarDB for MySQL.

TINYINT\[(M)\]

\-128 to 127

BIGINT

TINYINT\[(M)\] \[UNSIGNED\]

0 to 255

BIGINT

SMALLINT\[(M)\]

\-32768 to 32767

BIGINT

SMALLINT\[(M)\] \[UNSIGNED\]

0 to 65535

BIGINT

MEDIUMINT\[(M)\]

\-8388608 to 8388607

BIGINT

MEDIUMINT\[(M)\] \[UNSIGNED\]

0 to 16777215

BIGINT

INT\[(M)\]

\-2147483648 to 2147483647

BIGINT

INT\[(M)\] \[UNSIGNED\]

0 to 4294967295

BIGINT

BIGINT\[(M)\]

\-9223372036854775808 to 9223372036854775807

BIGINT

BIGINT\[(M)\] \[UNSIGNED\]

0 to 18446744073709551615

BIGINT

Decimal

DECIMAL\[(M\[,D\])\]

M: 0 to 65

D: 0 to 30

DECIMAL

FLOAT(p)

1.175494351E-38 to 3.402823466E+38

DOUBLE

DOUBLE\[(M,D)\]

2.2250738585072014E-308 to 1.7976931348623157E+308

DOUBLE

Time

DATE

1000-01-01 to 9999-12-31

**Note**

Format: YYYY-MM-DD.

TIMESTAMP

DATETIME\[(fsp)\]

1000-01-01 00:00:00.000000 to 9999-12-31 23:59:59.999999

**Note**

Format: YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

TIMESTAMP

TIMESTAMP\[(fsp)\]

1970-01-01 00:00:01.000000 to 2038-01-19 03:14:07.999999

**Note**

Format: YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

TIMESTAMP

TIME\[(fsp)\]

\-838:59:59.000000 to 838:59:59.000000

**Note**

Format: hh:mm:ss\[.fraction\] (UTC).

STRING

YEAR\[(4)\]

1901 to 2155, or 0000

STRING

String

CHAR\[(M)\]

0 to 255 characters

STRING

VARCHAR(M)

0 to 65,535 characters

STRING

BINARY\[(M)\]

0 to 255 bytes

STRING

VARBINARY(M)

0 to 65,535 bytes

STRING

TINYBLOB

255 (2^8 - 1) bytes

STRING

TINYTEXT

255 (2^8 - 1) characters

STRING

BLOB

65,535 (2^16 - 1) bytes

STRING

TEXT

65,535 (2^16 - 1) characters

STRING

MEDIUMBLOB

16,777,215 (2^24 - 1) bytes

STRING

MEDIUMTEXT

16,777,215 (2^24 - 1) characters

STRING

LONGBLOB

4,294,967,295 or 4 GB (2^32 - 1) bytes

STRING

LONGTEXT

4,294,967,295 or 4 GB (2^32 - 1) characters

STRING

ENUM('value1','value2',...)

A maximum of 65,535 elements.

STRING

SET('value1','value2',...)

A maximum of 64 elements.

STRING

Space type

GEOMETRY

A value of any geometry type.

STRING

POINT

None

STRING

LINESTRING

None

STRING

POLYGON

None

STRING

MULTIPOINT

None

STRING

MULTILINESTRING

None

STRING

MULTIPOLYGON

None

STRING

GEOMETRYCOLLECTION

A collection of values of any geometry type.

STRING

JSON type

JSON

None

STRING

### **Destination instance: MaxCompute, Elasticsearch, or ClickHouse**

**Type**

**Source data type**

**Value range**

**MaxCompute**

**Elasticsearch**

**ClickHouse**

Integer

BIT\[(M)\]

1 to 64

BOOLEAN | STRING

BOOLEAN | LONG

**Note**

If the value is only 1 byte, use the BOOLEAN type in Elasticsearch.

UInt8

TINYINT\[(M)\]

\-128 to 127

BIGINT

SHORT

Int8

TINYINT\[(M)\] \[UNSIGNED\]

0 to 255

BIGINT

INTEGER

UInt8

SMALLINT\[(M)\]

\-32768 to 32767

BIGINT

SHORT

Int16

SMALLINT\[(M)\] \[UNSIGNED\]

0 to 65535

BIGINT

INTEGER

UInt16

MEDIUMINT\[(M)\]

\-8388608 to 8388607

BIGINT

INTEGER

Int32

MEDIUMINT\[(M)\] \[UNSIGNED\]

0 to 16777215

BIGINT

INTEGER

Int32

INT\[(M)\]

\-2147483648 to 2147483647

BIGINT

INTEGER

Int32

INT\[(M)\] \[UNSIGNED\]

0 to 4294967295

BIGINT

LONG

UInt32

BIGINT\[(M)\]

\-9223372036854775808 to 9223372036854775807

BIGINT

LONG

Int64

BIGINT\[(M)\] \[UNSIGNED\]

0 to 18446744073709551615

BIGINT

LONG

UInt64

Decimal

DECIMAL\[(M\[,D\])\]

M: 0 to 65

D: 0 to 30

DOUBLE

DOUBLE

**Note**

If a DECIMAL value contains a decimal point, use the TEXT type in Elasticsearch to ensure data consistency.

DECIMAL

FLOAT(p)

1.175494351E-38 to 3.402823466E+38

DOUBLE

FLOAT

Float32

DOUBLE\[(M,D)\]

2.2250738585072014E-308 to 1.7976931348623157E+308

DOUBLE

DOUBLE

Float64

Time

DATE

1000-01-01 to 9999-12-31

**Note**

Format: YYYY-MM-DD.

DATETIME

DATE

**Note**

Format: YYYY-MM-DD. For more information, see [date format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html).

DATE32

**Note**

The value range of the DATE type in ClickHouse is smaller than that in MySQL. If you also use the DATE type in ClickHouse, data may fail to be written.

DATETIME\[(fsp)\]

1000-01-01 00:00:00.000000 to 9999-12-31 23:59:59.999999

**Note**

Format: YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

DATETIME

DATE

**Note**

The DATE format is yyyy-MM-dd'T'HH:mm:ss (UTC). If the precision is microseconds, the format is yyyy-MM-dd'T'HH:mm:ss.S. For more information, see [date format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html).

DATETIME64

**Note**

The value range of the DATETIME type in ClickHouse is smaller than that in MySQL. If you also use the DATETIME type in ClickHouse, data may fail to be written.

TIMESTAMP\[(fsp)\]

1970-01-01 00:00:01.000000 to 2038-01-19 03:14:07.999999

**Note**

Format: YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

DATETIME

DATE

**Note**

The DATE format is yyyy-MM-dd'T'HH:mm:ss (UTC). If the precision is microseconds, the format is yyyy-MM-dd'T'HH:mm:ss.S. For more information, see [date format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html).

DATETIME

**Note**

Time zone information is not included.

TIME\[(fsp)\]

\-838:59:59.000000 to 838:59:59.000000

**Note**

Format: hh:mm:ss\[.fraction\] (UTC).

STRING

DATE

**Note**

Format: YYYY-MM-DD. For more information, see [date format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html).

STRING

YEAR\[(4)\]

1901 to 2155, or 0000

STRING

DATE

**Note**

The DATE format is yyyy. For more information, see [date format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html).

Int16

String

CHAR\[(M)\]

0 to 255 characters

STRING

KEYWORD

STRING

VARCHAR(M)

0 to 65,535 characters

STRING

-   If the data length is less than or equal to 255 characters: KEYWORD
    
-   If the data length is greater than 255 characters: TEXT
    

STRING

BINARY\[(M)\]

0 to 255 bytes

STRING

BINARY

STRING

VARBINARY(M)

0 to 65,535 bytes

STRING

BINARY

STRING

TINYBLOB

255 (2^8 - 1) bytes

STRING

BINARY

STRING

TINYTEXT

255 (2^8 - 1) characters

STRING

TEXT

STRING

BLOB

65,535 (2^16 - 1) bytes

STRING

BINARY

STRING

TEXT

65,535 (2^16 - 1) characters

STRING

TEXT

STRING

MEDIUMBLOB

16,777,215 (2^24 - 1) bytes

STRING

BINARY

STRING

MEDIUMTEXT

16,777,215 (2^24 - 1) characters

STRING

TEXT

STRING

LONGBLOB

4,294,967,295 or 4 GB (2^32 - 1) bytes

STRING

BINARY

STRING

LONGTEXT

4,294,967,295 or 4 GB (2^32 - 1) characters

STRING

TEXT

STRING

ENUM('value1','value2',...)

A maximum of 65,535 enumeration values.

STRING

KEYWORD

ENUM

SET('value1','value2',...)

A maximum of 64 elements.

STRING

KEYWORD

STRING

Space Type

GEOMETRY

A value of any geometry type.

STRING

GEO\_SHAPE

STRING

POINT

None

STRING

GEO\_POINT

STRING

LINESTRING

None

STRING

GEO\_SHAPE

STRING

POLYGON

None

STRING

GEO\_SHAPE

STRING

MULTIPOINT

None

STRING

GEO\_SHAPE

**Note**

If the value is only 1 byte, use the BOOLEAN type in Elasticsearch.

STRING

MULTILINESTRING

None

STRING

GEO\_SHAPE

STRING

MULTIPOLYGON

None

STRING

GEO\_SHAPE

STRING

GEOMETRYCOLLECTION

A collection of values of any geometry type.

STRING

GEO\_SHAPE

STRING

JSON type

JSON

None

STRING

OBJECT

**Note**

If the value is only 1 byte, use the BOOLEAN type in Elasticsearch.

STRING

### **Destination instance: Tablestore**

**Source data type**

**Corresponding data type in Tablestore**

INTEGER

INTEGER

INT

INTEGER

SMALLINT

INTEGER

TINYINT

INTEGER

MEDIUMINT

INTEGER

BIGINT

INTEGER

DECIMAL

DOUBLE

NUMERIC

DOUBLE

FLOAT

DOUBLE

DOUBLE

DOUBLE

BIT

BOOLEAN

DATE

STRING or INTEGER

**Note**

The default value is STRING.

TIMESTAMP

DATETIME

TIME

YEAR

CHAR

STRING

VARCHAR

STRING

BINARY

BINARY

VARBINARY

BINARY

TINYBLOB/BLOB/MEDIUMBLOB/LONGBLOB

BINARY

TINYTEXT/TEXT/MEDIUMTEXT/LONGTEXT

STRING

ENUM

STRING

SET

STRING

GEOMETRY

STRING

POINT

STRING

LINESTRING

STRING

POLYGON

STRING

MULTIPOINT

STRING

MULTILINESTRING

STRING

MULTIPOLYGON

STRING

GEOMETRYCOLLECTION

STRING

JSON

STRING

### **Destination instance: Lindorm**

**Source data type**

**Corresponding data type in Lindorm**

BOOLEAN

BOOLEAN

BIT

BOOLEAN

TINYINT

TINYINT

SMALLINT

SMALLINT

INTEGER

INTEGER

BIGINT

BIGINT

BIGINT UNSIGNED

**Important**

Only data within the value range of BIGINT (from -9223372036854775808 to 9223372036854775807) is supported.

BIGINT

FLOAT

FLOAT

DOUBLE

DOUBLE

DECIMAL

DECIMAL

**Important**

The precision must be the same as that of the corresponding field in the source instance.

CHAR/VARCHAR/TEXT/TINYTEXT/MEDIUMTEXT/LONGTEXT

CHAR/VARCHAR

BINARY

BINARY

BLOB

VARBINARY

VARBINAY

VARBINARY

TIMESTAMP

TIMESTAMP

YEAR

INTEGER

DATE

Select an option according to the version of your target Lindorm instance.

-   2.8.0.2 or later: DATE
    
-   Earlier than 2.8.0.2: VARCHAR
    

DATETIME

VARCHAR

**Important**

-   Map it to the VARCHAR type in the destination.
    
-   If you map it to the TIMESTAMP type, data inconsistency may occur due to time zone issues. Use the extract, transform, and load (ETL) feature during task configuration to ensure data consistency.
    

TIME

Select an option based on the version of the target Lindorm instance.

-   2.8.0.2 or later: TIME
    
    **Note**
    
    The format is `hh:mm:ss`. Excess time data is truncated. For example, if the source data is `08:11:15.354`, the data written to the destination is `08:11:15`.
    
-   Earlier than 2.8.0.2: VARCHAR
    

JSON

JSON

### **Destination instance: Oracle**

**Type**

**Source data type**

**Value range**

**Data type in Oracle**

Integer

BIT\[(M)\]

1 to 64

NUMBER(2,0)

TINYINT\[(M)\]

\-128 to 127

NUMBER(3,0)

TINYINT\[(M)\] \[UNSIGNED\]

0 to 255

NUMBER(3,0)

SMALLINT\[(M)\]

\-32768 to 32767

NUMBER(5,0)

SMALLINT\[(M)\] \[UNSIGNED\]

0 to 65535

NUMBER(5,0)

MEDIUMINT\[(M)\]

\-8388608 to 8388607

NUMBER(7,0)

MEDIUMINT\[(M)\] \[UNSIGNED\]

0 to 16777215

NUMBER(7,0)

INT\[(M)\]

\-2147483648 to 2147483647

INT

INT\[(M)\] \[UNSIGNED\]

0 to 4294967295

NUMBER(10,0)

BIGINT\[(M)\]

\-9223372036854775808 to 9223372036854775807

NUMBER(20,0)

BIGINT\[(M)\] \[UNSIGNED\]

0 to 18446744073709551615

NUMBER(20,0)

Decimal

DECIMAL\[(M\[,D\])\]

M: 0 to 65

D: 0 to 30

NUMBER(M,D)

**Note**

If the precision and scale are not specified, the data type is converted to NUMBER.

FLOAT(p)

1.175494351E-38 to 3.402823466E+38

FLOAT

DOUBLE\[(M,D)\]

2.2250738585072014E-308 to 1.7976931348623157E+308

DOUBLE

Time

DATE

1000-01-01 to 9999-12-31

**Note**

Format: YYYY-MM-DD.

DATE

DATETIME\[(fsp)\]

1000-01-01 00:00:00.000000 to 9999-12-31 23:59:59.999999

**Note**

Format: YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

TIMESTAMP\[(fsp)\]

**Note**

If the precision is not specified, the data type is converted to TIMESTAMP(0).

TIMESTAMP\[(fsp)\]

1970-01-01 00:00:01.000000 to 2038-01-19 03:14:07.999999

**Note**

Format: YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

TIMESTAMP\[(fsp)\] WITH LOCAL TIME ZONE

**Note**

If the precision is not specified, the data type is converted to TIMESTAMP\[(0)\] WITH LOCAL TIME ZONE.

TIME\[(fsp)\]

\-838:59:59.000000 to 838:59:59.000000

**Note**

Format: hh:mm:ss\[.fraction\] (UTC).

Not supported

YEAR\[(4)\]

1901 to 2155, or 0000

INT

String

CHAR\[(M)\]

0 to 255 characters

CHAR\[(M)\]

**Note**

If the length is not specified, the data type is converted to CHAR(1).

VARCHAR(M)

0 to 65,535 characters

VARCHAR(M)

BINARY\[(M)\]

0 to 255 bytes

RAW(M)

**Note**

If the length is not specified, the data type is converted to RAW(1).

VARBINARY(M)

0 to 65,535 bytes

RAW(M)

TINYBLOB

255 (2^8 - 1) bytes

BLOB

TINYTEXT

255 (2^8 - 1) characters

TEXT

BLOB

65,535 (2^16 - 1) bytes

BLOB

TEXT

65,535 (2^16 - 1) characters

TEXT

MEDIUMBLOB

16,777,215 (2^24 - 1) bytes

BLOB

MEDIUMTEXT

16,777,215 (2^24 - 1) characters

TEXT

LONGBLOB

4,294,967,295 or 4 GB (2^32 - 1) bytes

BLOB

LONGTEXT

4,294,967,295 or 4 GB (2^32 - 1) characters

TEXT

ENUM('value1','value2',...)

A maximum of 65,535 enumeration values.

Not supported

SET('value1','value2',...)

A maximum of 64 elements.

Not supported

Space types

GEOMETRY

A value of any geometry type.

Not supported

POINT

None

Not supported

LINESTRING

None

Not supported

POLYGON

None

Not supported

MULTIPOINT

None

Not supported

MULTILINESTRING

None

Not supported

MULTIPOLYGON

None

Not supported

GEOMETRYCOLLECTION

A collection of values of any geometry type.

Not supported

JSON type

JSON

None

CLOB

## Data synchronization from an Oracle source

When the source instance is a self-managed Oracle database and the destination instance is a heterogeneous database, such as AnalyticDB for PostgreSQL, the data type mappings are as follows:

**Note**

If the value range of the data to be synchronized from the source instance exceeds the range supported by DTS, the data precision is reduced when the data is written to the destination instance.

**Type**

**Data type in Oracle**

**Value range**

**Data type in MySQL, PolarDB for MySQL, or PolarDB-X**

**Data type in AnalyticDB for PostgreSQL**

Numeric

NUMBER(p,s)

1 to 22 bytes.

p specifies the precision. The value ranges from 1 to 38.

s specifies the scale. The value ranges from -84 to 127.

DECIMAL\[(p\[,s\])\]

**Note**

If the precision and scale are not specified, the data type is mapped to DECIMAL(65,30).

DECIMAL | TINYINT | SMALLINT | INTEGER | BIGINT

FLOAT(p)

1 to 22 bytes.

p specifies a pointer variable. The value ranges from 1 to 126 bits.

DOUBLE

DOUBLE PRECISION

BINARY\_FLOAT

A 32-bit floating-point number, which is 4 bytes.

FLOAT

DOUBLE PRECISION

BINARY\_DOUBLE

A 64-bit floating-point number, which is 8 bytes.

DOUBLE

DOUBLE PRECISION

Date

DATE

None

DATETIME

TIMESTAMP(0)

TIMESTAMP \[(fractional\_seconds\_precision)\]

None

DATETIME\[(fractional\_seconds\_precision)\]

TIMESTAMP

TIMESTAMP \[(fractional\_seconds\_precision)\] WITH TIME ZONE

None

DATETIME\[(fractional\_seconds\_precision)\]

TIMESTAMP WITH TIME ZONE

TIMESTAMP \[(fractional\_seconds\_precision)\] WITH LOCAL TIME ZONE

None

DATETIME\[(fractional\_seconds\_precision)\]

TIMESTAMP WITH TIME ZONE

INTERVAL YEAR \[(year\_precision)\] TO MONTH

None

Not supported

VARCHAR(32)

INTERVAL DAY \[(day\_precision)\] TO SECOND \[(fractional\_seconds\_precision)\]

None

Not supported

VARCHAR(32)

String

CHAR \[(size \[BYTE | CHAR\])\]

2,000 bytes.

CHAR\[(n)\]

**Note**

If the length is not specified, the data type is mapped to CHAR(1).

CHAR

NCHAR\[(size)\]

2,000 bytes.

NATIONAL CHAR\[(n)\]

**Note**

If the length is not specified, the data type is mapped to NATIONAL CHAR(1).

VARCHAR

VARCHAR(size \[BYTE | CHAR\])

If MAX\_STRING\_SIZE is set to EXTENDED, the maximum length is 32,767 bytes.

If MAX\_STRING\_SIZE is set to STANDARD, the maximum length is 4,000 bytes.

VARCHAR(n)

VARCHAR(n)

VARCHAR2(size \[BYTE | CHAR\])

If MAX\_STRING\_SIZE is set to EXTENDED, the maximum length is 32,767 bytes.

If MAX\_STRING\_SIZE is set to STANDARD, the maximum length is 4,000 bytes.

VARCHAR(n)

VARCHAR

NVARCHAR2(size)

If MAX\_STRING\_SIZE is set to EXTENDED, the maximum length is 32,767 bytes.

If MAX\_STRING\_SIZE is set to STANDARD, the maximum length is 4,000 bytes.

NATIONALVARCHAR\[(n)\]

VARCHAR

LONG

The maximum length is 2 GB (2^31-1).

LONGTEXT

TEXT

RAW(size)

The maximum length is 32,767 bytes or 2,000 bytes.

BINARY(2\*size)

BYTEA

LONG RAW

The maximum length is 2 GB.

LONGBLOB

BYTEA

CLOB

The maximum length is (4 GB -1) × DB\_BLOCK\_SIZE.

LONGTEXT

TEXT

NCLOB

The maximum length is (4 GB - 1) × DB\_BLOCK\_SIZE.

LONGTEXT

TEXT

BLOB

The maximum length is (4 GB - 1) × DB\_BLOCK\_SIZE.

LONGBLOB

BYTEA

BFILE

4G.

Not supported

Not supported

JSON type

JSON

The maximum length is 32 MB.

Not supported

JSON

ROWID type

ROWID

64 characters.

Not supported

OID

UROWID

64 characters.

Not supported

Not supported

Space type

Customization is required.

Not supported

**Note**

DTS converts field types that are not supported by AnalyticDB for PostgreSQL to BYTEA. If the conversion fails, DTS sets the field value to NULL.

## Data synchronization from a PostgreSQL source

When the source instance is a PostgreSQL database, such as a self-managed PostgreSQL database or an RDS for PostgreSQL instance, and the destination instance is a heterogeneous database, such as AnalyticDB for PostgreSQL, the data type mappings are as follows:

**Note**

If the value range of the data to be synchronized from the source instance exceeds the range supported by DTS, the data precision is reduced when the data is written to the destination instance.

**Type**

**Data type in PostgreSQL**

**Value range**

**Data type in AnalyticDB for PostgreSQL**

Integer

SMALLINT

\-32768 to +32767

SMALLINT

INTEGER

\-2147483648 to +2147483647

INTEGER

BIGINT

\-9223372036854775808 to +9223372036854775807

BIGINT

Decimal

DECIMAL

Up to 131,072 digits before the decimal point and 16,383 digits after the decimal point.

DECIMAL

NUMERIC

Up to 131,072 digits before the decimal point and 16,383 digits after the decimal point.

NUMERIC

REAL

6 decimal digits of precision

REAL

DOUBLE PRECISION

15 decimal digits of precision

DOUBLE PRECISION

Currency

MONEY

\-92233720368547758.08 to +92233720368547758.07

MONEY

String

CHARACTER VARYING(n)

None

CHARACTER VARYING(n)

CHARACTER(n)

None

CHARACTER(n)

TEXT

None

TEXT

CHAR

Default: 1 byte.

CHAR

NAME

Maximum length: 64 bytes.

NAME

Text search

TSQUERY

Indicates a text query.

TEXT

TSVECTOR

Indicates a document in a format that is optimized for text search.

TEXT

Binary data

BYTEA

1 or 4 bytes plus the actual binary string.

BYTEA

Date

TIMESTAMP \[ (p) \] \[ WITHOUT TIME ZONE \]

Indicates a date and time without a time zone. The storage size is 8 bytes.

TIMESTAMP \[ (p) \] \[ WITHOUT TIME ZONE \]

TIMESTAMP \[ (p) \] WITH TIME ZONE

Indicates a date and time with a time zone. The storage size is 8 bytes.

TIMESTAMP \[ (p) \] WITH TIME ZONE

DATE

Indicates a date. The storage size is 4 bytes.

DATE

TIME \[ (p) \] \[ WITHOUT TIME ZONE \]

Indicates a time without a time zone. The storage size is 8 bytes.

TIME \[ (p) \] \[ WITHOUT TIME ZONE \]

TIME \[ (p) \] WITH TIME ZONE

Indicates a time with a time zone. The storage size is 12 bytes.

TIME \[ (p) \] WITH TIME ZONE

interval \[ fields \] \[ (p) \]

Indicates a time interval. The storage size is 16 bytes.

interval \[ fields \] \[ (p) \]

Boolean

BOOLEAN

1 byte

BOOLEAN

**Important**

If the destination instance is ClickHouse, the data type is converted to STRING.

Enumeration types

Custom enumeration

None

VARCHAR(128)

Space Type

POINT

A point on a plane. The maximum length is 16 bytes.

POINT

LINE

An infinite line. The maximum length is 32 bytes.

LINE

LSEG

A finite line segment. The maximum length is 32 bytes.

LSEG

BOX

A rectangular box. The maximum length is 32 bytes.

BOX

PATH

A path. The maximum length is 16+16n bytes.

PATH

POLYGON

A polygon (similar to a closed path). The maximum length is 40+16n bytes.

POLYGON

CIRCLE

A circle. The maximum length is 24 bytes.

CIRCLE

Network address

CIDR

IPv4 and IPv6 networks. The maximum length is 7 or 19 bytes.

CIDR

INET

IPv4 and IPv6 hosts and networks. The maximum length is 7 or 19 bytes.

INET

MACADDR

A MAC address. The maximum length is 6 bytes.

MACADDR

MACADDR8

A MAC address in EUI-64 format. The maximum length is 8 bytes.

MACADDR8

Bit string types

Bit (n)

None

Bit (n)

BIT VARYING (n)

None

BIT VARYING (n)

UUID

UUID

None

VARCHAR(64)

XML type

XML

None

XML

JSON type

JSON

None

JSON

JSONB

None

JSONB

## Data synchronization from an SQL Server source

When the source instance is an SQL Server database, such as a self-managed SQL Server database or an RDS for SQL Server instance, and the destination instance is a heterogeneous database, such as an AnalyticDB for MySQL cluster, an AnalyticDB for PostgreSQL instance, a PostgreSQL database, a MySQL database, or a PolarDB for MySQL cluster, the data type mappings are as follows:

**Note**

If the value range of the data to be synchronized from the source instance exceeds the range supported by DTS, the data precision is reduced when the data is written to the destination instance.

**Type**

**Data type in SQL Server**

**Value range**

**AnalyticDB for MySQL** **Data Types**

**Data type in PostgreSQL or AnalyticDB for PostgreSQL**

**Data type in MySQL or PolarDB for MySQL**

Integer

BIT

An INTEGER data type that can be 1, 0, or NULL.

BOOLEAN

BIT(1)

BIT(1)

TINYINT

0 to 255

TINYINT

SMALLINT

TINYINT UNSIGNED

SMALLINT

\-2^15 (-32,768) to 2^15-1 (32,767)

SMALLINT

SMALLINT

SMALLINT

INT

\-2^31 (-2,147,483,648) to 2^31-1 (2,147,483,647)

INTEGER

INTEGER

INT

BIGINT

\-2^63 (-9,223,372,036,854,775,808) to 2^63-1 (9,223,372,036,854,775,807)

BIGINT

BIGINT

BIGINT

Decimal

NUMERIC\[ (p\[ ,s\] )\]

\-10^38+1 to 10^38-1; 1<=p<=38

DECIMAL

DECIMAL

DECIMAL\[ (p\[ ,s\] )\]

DECIMAL\[ (p\[ ,s\] )\]

\-10^38+1 to 10^38-1; 1<= p<=38

DECIMAL

DECIMAL

DECIMAL\[ (p\[ ,s\] )\]

FLOAT

\-1.79E+308 to -2.23E -308, 0, and 2.23E-308 to 1.79E+308

DOUBLE

DOUBLE PRECISION

DOUBLE

REAL

\-3.40E+38 to -1.18E- 38, 0, and 1.18E-38 to 3.40E +38

FLOAT

REAL

DOUBLE

Currency

MONEY

\-922,337,203,685,477.5808 to 922,337,203,685,477.5807

DECIMAL(19, 4)

DECIMAL(19, 4)

DECIMAL(19, 4)

SMALLMONEY

\-214,748.3648 to 214,748.3647

DECIMAL(10, 4)

DECIMAL(10, 4)

DECIMAL(10, 4)

Date

DATE

0001-01-01 to 9999-12-31

DATE

DATE

DATE

DATETIME

Date range: January 1, 1753 to December 31, 9999.

Time range: 00:00:00 to 23:59:59.997.

DATETIME

TIMESTAMP(3) WITHOUT TIME ZONE

DATETIME(3)

DATETIME2\[ (fractional seconds precision) \]

Date range: January 1, 0001 to December 31, 9999.

Time range: 00:00:00 to 23:59:59.9999999.

DATETIME

TIMESTAMP(7) WITHOUT TIME ZONE

DATETIME(p)

**Note**

The default precision is 6.

DATETIMEOFFSET \[ (fractional seconds precision) \]

Date range: January 1, 0001 to December 31, 9999.

Time range: 00:00:00 to 23:59:59.9999999.

Time zone offset range: -14:00 to +14:00.

TIMESTAMP

TIMESTAMP(7) WITH TIME ZONE

DATETIME(p)

**Note**

The default precision is 6.

SMALLDATETIME

The seconds are always zero (:00) and there is no fractional part for seconds.

DATETIME

TIMESTAMP WITHOUT TIME ZONE

DATETIME

TIME \[ (fractional second scale) \]

00:00:00.0000000 to 23:59:59.9999999

TIME

TIME(7) WITH TIME ZONE

TIME(p)

TIMESTAMP\[(fsp)\]

1970-01-01 00:00:01.000000 to 2038-01-19 03:14:07.999999

**Note**

Format: YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

VARBINARY(8)

BYTEA

VARBINARY(8)

String

BINARY \[ ( n ) \]

n ranges from 1 to 8,000.

VARBINARY

BYTEA

-   If length > 255: BLOB
    
-   Otherwise: BINARY(n)
    

VARBINARY \[ ( n | max) \]

n ranges from 1 to 8,000. max indicates that the maximum storage size is 2^31-1 bytes.

VARBINARY

BYTEA

-   If length = max: LONGBLOB
    
-   Otherwise: VARBINARY(n)
    

CHAR \[ ( n ) \]

n ranges from 1 to 8,000. The storage size is n bytes.

VARCHAR

CHARACTER

-   If length > 255: VARCHAR
    
-   Otherwise: CHAR
    

VARCHAR \[ ( n | max ) \]

n ranges from 1 to 8,000. max indicates that the maximum storage size is 2^31-1 bytes (2 GB).

VARCHAR

CHARACTER

-   If length = max: LONGTEXT
    
-   Otherwise: VARCHAR(n)
    

NCHAR \[ ( n ) \]

In double-bytes, n ranges from 1 to 4,000. The storage size is twice n bytes.

VARCHAR

CHARACTER VARYING

VARCHAR(200)

NVARCHAR \[ ( n | max ) \]

In double-bytes, n ranges from 1 to 4,000. max indicates that the maximum storage size is 2^30-1 characters (2 GB).

VARCHAR

CHARACTER VARYING

-   If length = max: LONGTEXT
    
-   Otherwise: VARCHAR(n)
    

NTEXT

Variable-length Unicode data. The maximum string length is 2^30-1 (1,073,741,823) bytes.

VARCHAR

TEXT

LONGTEXT

TEXT

The maximum string length is 2^31-1 (2,147,483,647) bytes.

VARCHAR

TEXT

LONGTEXT

IMAGE

Variable-length binary data from 0 to 2^31-1 (2,147,483,647) bytes.

VARBINARY

BYTEA

LONGBLOB

Spatial and geometry

GEOGRAPHY

None

VARCHAR

Not supported

BLOB

GEOMETRY

None

VARCHAR

Not supported

BLOB

XML type

XML ( \[ CONTENT | DOCUMENT \] xml\_schema\_collection )

None

VARCHAR

XML

LONGTEXT

Other types

UNIQUEIDENTIFIER

None

VARCHAR

CHARACTER(36)

CHAR(36)

SQL\_VARIANT

None

Not supported

Not supported

VARCHAR(200)

HIERARCHYID

None

Not supported

Not supported

VARCHAR(200)

SYSNAME

None

VARCHAR

CHARACTER VARYING(128)

VARCHAR(200)

## Data synchronization from a Db2 for LUW source

When the source instance is a Db2 for LUW database and the destination instance is a heterogeneous database, such as a MySQL database, the data type mappings are as follows:

**Note**

If the value range of the data to be synchronized from the source instance exceeds the range supported by DTS, the data precision is reduced when the data is written to the destination instance.

**Type**

**Data type in Db2 for LUW**

**Value range**

**Data type in MySQL**

Integer

SMALLINT

\-32,768 to +32,767

SMALLINT

INTEGER

\-2,147,483,648 to +2,147,483,647

INT

BIGINT

\-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807

BIGINT

Decimal

DECIMAL(precision-integer, scale-integer)

p<=38

DECIMAL

FLOAT(integer)

The value ranges from 1 to 53. A value from 1 to 24 indicates single precision. A value from 25 to 53 indicates double precision.

FLOAT

DECFLOAT(precision-integer)

None

DECIMAL(65,10)

Date

DATE

0001-01-01 to 9999-12-31

DATE

TIME

00:00:00 to 24:00:00

TIME

TIMESTAMP(integer)

0001-01-01-00.00.00.000000000000 to 9999-12-31-24.00.00.000000000000; 0<=p<= 12

DATETIME

String

CHARACTER(integer)

254

CHAR | VARCHAR

VARCHAR(integer)

32,672

VARCHAR

CHARACTER(integer) FOR BIT DATA

254

BLOB

CLOB

2,147,483,647

LONGTEXT

GRAPHIC(integer)

127

CHAR(length\*4)

VARGRAPHIC(integer)

16,336

CHAR(length\*4)

DBCLOB(integer)

1,073,741,823

VARCHAR | LONGTEXT

BLOB

2,147,483,647

LONGBLOB

Other types

XML

2,147,483,647

VARCHAR | LONGTEXT

## Data synchronization from a Db2 for i source

When the source instance is a Db2 for i database and the destination instance is a heterogeneous database, such as a MySQL database, the data type mappings are as follows:

**Note**

If the value range of the data to be synchronized from the source instance exceeds the range supported by DTS, the data precision is reduced when the data is written to the destination instance.

**Type**

**Data type in Db2 for i**

**Value range**

**Data type in MySQL**

Integer

SMALLINT

\-32,768 to +32,767

SMALLINT

INTEGER

\-2,147,483,648 to +2,147,483,647

INT

BIGINT

\-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807

BIGINT

Decimal

DECIMAL(precision-integer, scale-integer)

p<=63

DECIMAL

NUMERIC

None

DECIMAL

FLOAT(integer)

None

FLOAT

DECFLOAT(precision-integer)

None

DECIMAL(65,10)

Date

DATE

0001-01-0 to 9999-12-31

DATE

TIME

00:00:00 to 24:00:00

TIME

TIMESTAMP(integer)

0001-01-01-00.00.00.000000000000 to 9999-12-31-24.00.00.000000000000; 0 <=p <=12

DATETIME

String

CHAR(integer)

32,765

CHAR | VARCHAR

VARCHAR(integer)

32,739

VARCHAR

CHAR(integer) FOR BIT DATA

None

BLOB

CLOB

2,147,483,647

LONGTEXT

GRAPHIC(integer)

16,382

CHAR

VARGRAPHIC(integer)

16,369

VARCHAR

DBCLOB(integer)

1,073,741,823

LONGTEXT

BINARY

32,765

BINARY

VARBIN

32,739

VARBINARY

BLOB

2,147,483,647

LONGBLOB

Other

DATALINK

None

VARCHAR | LONGTEXT

ROWID

40

VARCHAR | LONGTEXT

XML

2,147,483,647

VARCHAR | LONGTEXT

## Data synchronization from a TiDB source

When the source instance is a self-managed TiDB database and the destination instance is a heterogeneous database, such as AnalyticDB for MySQL 3.0, the data type mappings are as follows:

**TiDB data type**

**MySQL data type**

BIGINT

BIGINT

BIGINT UNSIGNED

DECIMAL(20,0)

BINARY

BINARY

BIT

BIT

BOOL\\ BOOLEAN

TINYINT

CHAR

CHAR

DATE

DATE

DATETIME

DATETIME

DECIMAL

DECIMAL

DOUBLE

DOUBLE

ENUM

ENUM

FLOAT

FLOAT

INT

INT

INT UNSIGNED

BIGINT

INTEGER

INTEGER

JSON

JSON

MEDIUMBLOB/LONGBLOB

TINYBLOB / BLOB

MEDIUMBLOB/LONGBLOB

TINYBLOB or BLOB

MEDIUMINT

MEDIUMINT

SET

SET

SMALLINT

SMALLINT

SMALLINT UNSIGNED

INT

TEXT/LONGTEXT

TEXT/LONGTEXT

TIME

TIME

TIMESTAMP

TIMESTAMP

TINYINT

TINYINT

TINYINT UNSIGNED

SMALLINT

VARBINARY

VARBINARY

VARCHAR

VARCHAR

YEAR

YEAR
