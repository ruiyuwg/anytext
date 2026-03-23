Different types of databases, known as heterogeneous databases, support different data types. When Data Transmission Service (DTS) migrates data between heterogeneous databases, it maps data types during the schema migration phase. This process converts data types from the source database to data types supported by the destination database. This topic lists the detailed data type mappings. You can use these mappings to check and assess the impact of data migration on your services.

## Overview

Find the data type mappings for your migration scenario:

-   [Data migration from PolarDB for MySQL, RDS for MySQL, and self-managed MySQL](#section-muh-f3z-8zf)
    
-   [Data migration from Oracle](#section-pna-1cw-05u)
    
-   [Data migration from SQL Server](#section-iv2-0hd-zte)
    
-   [Data migration from self-managed TiDB](#section-wm3-582-je8)
    
-   [Data migration from DB2 for LUW](#section-73j-m3p-xvj)
    
-   [Data migration from Db2 for i](#section-alv-29l-8sg)
    
-   [Data migration from Teradata](#section-r4e-js9-w0c)
    

**Important**

If the source time field has the TIMESTAMP WITH TIME ZONE data type and the destination time field has a different data type, such as DATETIME, the time zone information is lost.

## Data migration from PolarDB for MySQL, RDS for MySQL, and self-managed MySQL

When the source instance is PolarDB for MySQL, RDS for MySQL, or a self-managed MySQL database, and the destination instance is a heterogeneous database such as AnalyticDB for MySQL and 2.0, or AnalyticDB for PostgreSQL, the data type mappings are as follows.

**Note**

If the data to be migrated from the source instance is outside the range supported by DTS, the precision of the migrated data in the destination instance is reduced.

### **Destination instance is** AnalyticDB for MySQL **or AnalyticDB for PostgreSQL**

**Category**

**Source instance data type**

**Value range**

**AnalyticDB for MySQL data type**

**AnalyticDB for PostgreSQL data type**

Integer types

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

Decimal types

DECIMAL\[(M\[,D\])\]

M: 0 to 65.

D: 0 to 30.

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

Time types

DATE

1000-01-01 to 9999-12-31

**Note**

The format is YYYY-MM-DD.

DATE

DATE

DATETIME\[(fsp)\]

1000-01-01 00:00:00.000000 to 9999-12-31 23:59:59.999999

**Note**

The format is YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

DATETIME

TIMESTAMP

TIMESTAMP\[(fsp)\]

1970-01-01 00:00:01.000000 to 2038-01-19 03:14:07.999999

**Note**

The format is YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

TIMESTAMP

TIMESTAMP WITH TIME ZONE

TIME\[(fsp)\]

\-838:59:59.000000 to 838:59:59.000000

**Note**

The format is hh:mm:ss\[.fraction\] (UTC).

TIME

TIME WITHOUT TIME ZONE

YEAR\[(4)\]

1901 to 2155, or 0000

INT

INTEGER

String types

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

Up to 65,535 enumeration values

VARCHAR

VARCHAR(128)

SET('value1','value2',...)

Up to 64 elements

VARCHAR

VARCHAR(128)

Spatial types

GEOMETRY

Value of any geometry type

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

A collection of values of any geometry type

VARBINARY

POLYGON

JSON type

JSON

None

JSON

JSON

Destination database: a DataHub project, an ApsaraMQ for Kafka instance, or a self-managed Kafka cluster

**Type**

**Data type in the source database**

**Value range**

**Data type in DataHub**

**Data type in an ApsaraMQ for Kafka instance or a self-managed Kafka cluster**

Integer

BIT\[(M)\]

1 ~ 64

BOOLEAN | STRING

Consistent with the data types in MySQL or PolarDB for MySQL

TINYINT\[(M)\]

\-128 ~ 127

BIGINT

TINYINT\[(M)\] \[UNSIGNED\]

0 ~ 255

BIGINT

SMALLINT\[(M)\]

\-32768 ~ 32767

BIGINT

SMALLINT\[(M)\] \[UNSIGNED\]

0 ~ 65535

BIGINT

MEDIUMINT\[(M)\]

\-8388608 ~ 8388607

BIGINT

MEDIUMINT\[(M)\] \[UNSIGNED\]

0 ~ 16777215

BIGINT

INT\[(M)\]

\-2147483648 ~ 2147483647

BIGINT

INT\[(M)\] \[UNSIGNED\]

0 ~ 4294967295

BIGINT

BIGINT\[(M)\]

\-9223372036854775808 ~ 9223372036854775807

BIGINT

BIGINT\[(M)\] \[UNSIGNED\]

0 ~ 18446744073709551615

BIGINT

Decimal

DECIMAL\[(M\[,D\])\]

M: 0 to 65

D: 0 to 30

DECIMAL

FLOAT(p)

1.175494351E-38 ~ 3.402823466E+38

DOUBLE

DOUBLE\[(M,D)\]

2.2250738585072014E-308 ~ 1.7976931348623157E+308

DOUBLE

Date and time

DATE

1000-01-01~9999-12-31

**Note**

The format is YYYY-MM-DD.

TIMESTAMP

DATETIME\[(fsp)\]

1000-01-01 00:00:00.000000 ~ 9999-12-31 23:59:59.999999

**Note**

The format is YYYY-MM-DD hh:mm:ss\[.fraction\], in UTC.

TIMESTAMP

TIMESTAMP\[(fsp)\]

1970-01-01 00:00:01.000000 ~ 2038-01-19 03:14:07.999999

**Note**

The format is YYYY-MM-DD hh:mm:ss\[.fraction\], in UTC.

TIMESTAMP

TIME\[(fsp)\]

\-838:59:59.000000 ~ 838:59:59.000000

**Note**

The format is hh:mm:ss\[.fraction\], in UTC.

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

An ENUM column can have a maximum of 65,535 distinct elements.

STRING

SET('value1','value2',...)

A SET column can have a maximum of 64 distinct elements.

STRING

Spatial

GEOMETRY

Geometry values of any type

STRING

POINT

N/A

STRING

LINESTRING

N/A

STRING

POLYGON

N/A

STRING

MULTIPOINT

N/A

STRING

MULTILINESTRING

N/A

STRING

MULTIPOLYGON

N/A

STRING

GEOMETRYCOLLECTION

A collection of geometry values of any type

STRING

JSON

JSON

N/A

STRING

Destination database: a MaxCompute project, an Elasticsearch cluster, or a ClickHouse cluster

**Type**

**Data type in the source database**

**Value range**

**MaxCompute**

**Elasticsearch**

**ClickHouse**

Integer

BIT\[(M)\]

1 ~ 64

BOOLEAN | STRING

BOOLEAN | LONG

**Note**

If the data is only one byte long, we recommend that you use the BOOLEAN data type in Elasticsearch.

UInt8

TINYINT\[(M)\]

\-128 ~ 127

BIGINT

SHORT

Int8

TINYINT\[(M)\] \[UNSIGNED\]

0 ~ 255

BIGINT

INTEGER

UInt8

SMALLINT\[(M)\]

\-32768 ~ 32767

BIGINT

SHORT

Int16

SMALLINT\[(M)\] \[UNSIGNED\]

0 ~ 65535

BIGINT

INTEGER

UInt16

MEDIUMINT\[(M)\]

\-8388608 ~ 8388607

BIGINT

INTEGER

Int32

MEDIUMINT\[(M)\] \[UNSIGNED\]

0 ~ 16777215

BIGINT

INTEGER

Int32

INT\[(M)\]

\-2147483648 ~ 2147483647

BIGINT

INTEGER

Int32

INT\[(M)\] \[UNSIGNED\]

0 ~ 4294967295

BIGINT

LONG

UInt32

BIGINT\[(M)\]

\-9223372036854775808 ~ 9223372036854775807

BIGINT

LONG

Int64

BIGINT\[(M)\] \[UNSIGNED\]

0 ~ 18446744073709551615

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

If the DECIMAL value contains a decimal point, we recommend that you use the TEXT data type in Elasticsearch to ensure data consistency.

DECIMAL

FLOAT(p)

1.175494351E-38 ~ 3.402823466E+38

DOUBLE

FLOAT

Float32

DOUBLE\[(M,D)\]

2.2250738585072014E-308 ~ 1.7976931348623157E+308

DOUBLE

DOUBLE

Float64

Date and time

DATE

1000-01-01~9999-12-31

**Note**

The format is YYYY-MM-DD.

DATETIME

DATE

**Note**

The format is YYYY-MM-DD. For more information, see [format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html).

DATE32

**Note**

The valid values of DATE data type in ClickHouse is smaller than that in MySQL. If ClickHouse uses the DATE data type, the data write operation may fail.

DATETIME\[(fsp)\]

1000-01-01 00:00:00.000000 ~ 9999-12-31 23:59:59.999999

**Note**

The format is YYYY-MM-DD hh:mm:ss\[.fraction\], in UTC.

DATETIME

DATE

**Note**

The DATE data format is yyyy-MM-dd'T'HH:mm:ss, in UTC. If the DATE data is accurate to microseconds, the data format is yyyy-MM-dd'T'HH:mm:ss.S. For more information, see [format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html)

DATETIME64

**Note**

The valid values of DATETIME data type in ClickHouse is smaller than that in MySQL. If ClickHouse uses the DATETIME data type, the data write operation may fail.

TIMESTAMP\[(fsp)\]

1970-01-01 00:00:01.000000 ~ 2038-01-19 03:14:07.999999

**Note**

The format is YYYY-MM-DD hh:mm:ss\[.fraction\], in UTC.

DATETIME

DATE

**Note**

The DATE data format is yyyy-MM-dd'T'HH:mm:ss, in UTC. If the DATE data is accurate to microseconds, the data format is yyyy-MM-dd'T'HH:mm:ss.S. For more information, see [format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html).

DATETIME

**Note**

The DATETIME data does not contain information about the time zone.

TIME\[(fsp)\]

\-838:59:59.000000 ~ 838:59:59.000000

**Note**

The format is hh:mm:ss\[.fraction\], in UTC.

STRING

DATE

**Note**

The format is YYYY-MM-DD. For more information, see [format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html).

STRING

YEAR\[(4)\]

1901 to 2155, or 0000

STRING

DATE

**Note**

The DATE format is yyyy, in UTC. For more information, see [format](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html).

Int16

String

CHAR\[(M)\]

0 to 255 characters

STRING

TEXT

STRING

VARCHAR(M)

0 to 65,535 characters

STRING

TEXT

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

An ENUM column can have a maximum of 65,535 distinct elements.

STRING

KEYWORD

ENUM

SET('value1','value2',...)

A SET column can have a maximum of 64 distinct elements.

STRING

KEYWORD

STRING

Spatial

GEOMETRY

Geometry values of any type

STRING

GEO\_SHAPE

STRING

POINT

N/A

STRING

GEO\_POINT

STRING

LINESTRING

N/A

STRING

GEO\_SHAPE

STRING

POLYGON

N/A

STRING

GEO\_SHAPE

STRING

MULTIPOINT

N/A

STRING

GEO\_SHAPE

**Note**

If the data is only one byte long, we recommend that you use the BOOLEAN data type in Elasticsearch.

STRING

MULTILINESTRING

N/A

STRING

GEO\_SHAPE

STRING

MULTIPOLYGON

N/A

STRING

GEO\_SHAPE

STRING

GEOMETRYCOLLECTION

A collection of geometry values of any type

STRING

GEO\_SHAPE

STRING

JSON

JSON

N/A

STRING

OBJECT

**Note**

If the data is only one byte long, we recommend that you use the BOOLEAN data type in Elasticsearch.

STRING

Destination database: a Tablestore instance

**Data type in the source database**

**Data type in Tablestore**

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

Default value: STRING.

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

Destination database: a Lindorm instance

**Data type in the source database**

**Data type in Lindorm**

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

Only the BIGINT type that ranges from -9223372036854775808 to 9223372036854775807 is supported.

BIGINT

FLOAT

FLOAT

DOUBLE

DOUBLE

DECIMAL

DECIMAL

**Important**

The destination instance must have the same precision as the field of the source instance.

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

Select the data type based on the versions of the destination Lindorm instance.

-   V2.8.0.2 or later: DATE
    
-   Earlier than V2.8.0.2: VARCHAR
    

DATETIME

VARCHAR

**Important**

-   We recommend that you map the DATETIME data in the source database to data of the VARCHAR type in the destination database.
    
-   If you want to map the DATETIME data to data of the TIMESTAMP type, data inconsistency may occur due to the difference in time zones. We recommend that you use the extract, transform, and load (ETL) feature when you configure the data synchronization task. This ensures data consistency.
    

TIME

Select the data type based on the versions of the destination Lindorm instance.

-   V2.8.0.2 or later: TIME
    
    **Note**
    
    The TIME format is `hh:mm:ss`. If the time exceeds the threshold, the part beyond the threshold is truncated. For example, if the time of the source data is `08:11:15.354`, the data wrote to the destination database is `08:11:15`.
    
-   Earlier than V2.8.0.2: VARCHAR
    

JSON

JSON

### **Destination instance is Oracle**

**Category**

**Source instance data type**

**Value range**

**Oracle data type**

Integer types

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

Decimal types

DECIMAL\[(M\[,D\])\]

M: 0 to 65.

D: 0 to 30.

NUMBER(M,D)

**Note**

If precision and decimal place are missing, maps to NUMBER.

FLOAT(p)

1.175494351E-38 to 3.402823466E+38

FLOAT

DOUBLE\[(M,D)\]

2.2250738585072014E-308 to 1.7976931348623157E+308

DOUBLE

Time types

DATE

1000-01-01 to 9999-12-31

**Note**

The format is YYYY-MM-DD.

DATE

DATETIME\[(fsp)\]

1000-01-01 00:00:00.000000 to 9999-12-31 23:59:59.999999

**Note**

The format is YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

TIMESTAMP\[(fsp)\]

**Note**

If precision is missing, maps to TIMESTAMP(0).

TIMESTAMP\[(fsp)\]

1970-01-01 00:00:01.000000 to 2038-01-19 03:14:07.999999

**Note**

The format is YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

TIMESTAMP\[(fsp)\] WITH LOCAL TIME ZONE

**Note**

If precision is missing, maps to TIMESTAMP\[(0)\] WITH LOCAL TIME ZONE.

TIME\[(fsp)\]

\-838:59:59.000000 to 838:59:59.000000

**Note**

The format is hh:mm:ss\[.fraction\] (UTC).

Not supported

YEAR\[(4)\]

1901 to 2155, or 0000

INT

String types

CHAR\[(M)\]

0 to 255 characters

CHAR\[(M)\]

**Note**

If length is missing, maps to CHAR(1).

VARCHAR(M)

0 to 65,535 characters

VARCHAR(M)

BINARY\[(M)\]

0 to 255 bytes

RAW(M)

**Note**

If length is missing, maps to RAW(1).

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

Up to 65,535 enumeration values

Not supported

SET('value1','value2',...)

Up to 64 elements

Not supported

Spatial types

GEOMETRY

Value of any geometry type

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

A collection of values of any geometry type

Not supported

JSON type

JSON

None

CLOB

## Data migration from Oracle

When the source instance is a self-managed Oracle database and the destination instance is a heterogeneous database such as MySQL, PolarDB for MySQL, AnalyticDB for MySQL, AnalyticDB for PostgreSQL, or PolarDB for PostgreSQL (Compatible with Oracle), the data type mappings are as follows.

**Note**

If the data to be migrated from the source instance is outside the range supported by DTS, the precision of the migrated data in the destination instance is reduced.

**Category**

**Oracle data type**

**Value range**

**MySQL, PolarDB for MySQL, and PolarDB-X data type**

**ApsaraDB RDS for PPAS data type**

**AnalyticDB for MySQL** **data type**

**AnalyticDB for PostgreSQL data type**

**PolarDB for PostgreSQL (Compatible with Oracle) data type**

Numeric types

NUMBER(p,s)

1 to 22 bytes.

p represents precision and ranges from 1 to 38.

s represents decimal place and ranges from -84 to 127.

DECIMAL\[(p\[,s\])\]

**Note**

If both precision and decimal place are absent, maps to DECIMAL(65,30).

NUMBER\[(p\[,s\])\]

DECIMAL | TINYINT | SMALLINT | INTEGER | BIGINT

DECIMAL | TINYINT | SMALLINT | INTEGER | BIGINT

NUMBER(p,s)

FLOAT(p)

1 to 22 bytes.

p represents a pointer variable and ranges from 1 to 126 bits.

FLOAT

DOUBLE PRECISION

DOUBLE

DOUBLE PRECISION

DOUBLE PRECISION

BINARY\_FLOAT

32-bit floating-point number, which is 4 bytes.

FLOAT

REAL

DOUBLE

DOUBLE PRECISION

REAL

BINARY\_DOUBLE

64-bit floating-point number, which is 8 bytes.

DOUBLE

DOUBLE PRECISION

DOUBLE

DOUBLE PRECISION

DOUBLE PRECISION

Date types

DATE

None

DATETIME

DATE

DATETIME

TIMESTAMP(0)

DATE

TIMESTAMP \[(fractional\_seconds\_precision)\]

None

DATETIME\[(fractional\_seconds\_precision)\]

TIMESTAMP \[(fractional\_seconds\_precision)\]

DATETIME

TIMESTAMP

TIMESTAMP \[(fractional\_seconds\_precision)\]

TIMESTAMP \[(fractional\_seconds\_precision)\] WITH TIME ZONE

None

DATETIME\[(fractional\_seconds\_precision)\]

TIMESTAMP \[(fractional\_seconds\_precision)\] WITH TIME ZONE

TIMESTAMP

TIMESTAMP WITH TIME ZONE

TIMESTAMP \[(fractional\_seconds\_precision)\] WITH TIME ZONE

TIMESTAMP \[(fractional\_seconds\_precision)\] WITH LOCAL TIME ZONE

None

DATETIME\[(fractional\_seconds\_precision)\]

TIMESTAMP \[(fractional\_seconds\_precision)\] WITH TIME ZONE

DATETIME

TIMESTAMP WITH TIME ZONE

TIMESTAMP \[(fractional\_seconds\_precision)\] WITH TIME ZONE

INTERVAL YEAR \[(year\_precision)\] TO MONTH

None

Not supported

Not supported

VARCHAR

VARCHAR(32)

INTERVAL

INTERVAL DAY \[(day\_precision)\] TO SECOND \[(fractional\_seconds\_precision)\]

None

Not supported

Not supported

VARCHAR

VARCHAR(32)

INTERVAL

String types

CHAR \[(size \[BYTE | CHAR\])\]

2000 bytes.

CHAR\[(n)\]

**Note**

If length is absent, maps to CHAR(1).

CHAR\[(n)\]

VARCHAR

CHAR

CHAR \[(size \[BYTE | CHAR\])\]

NCHAR\[(size)\]

2000 bytes.

NATIONAL CHAR\[(n)\]

**Note**

If length is absent, maps to NATIONAL CHAR(1).

NCHAR\[(n)\]

VARCHAR

VARCHAR

NCHAR\[(size)\]

VARCHAR(size \[BYTE | CHAR\])

When MAX\_STRING\_SIZE = EXTENDED, the maximum length is 32767 bytes.

When MAX\_STRING\_SIZE = STANDARD, the maximum length is 4000 bytes.

VARCHAR(n)

VARCHAR(n)

VARCHAR(n)

VARCHAR(n)

VARCHAR(n)

VARCHAR2(size \[BYTE | CHAR\])

When MAX\_STRING\_SIZE = EXTENDED, the maximum length is 32767 bytes.

When MAX\_STRING\_SIZE = STANDARD, the maximum length is 4000 bytes.

VARCHAR(n)

VARCHAR2\[(n)\]

VARCHAR

VARCHAR

VARCHAR2(size \[BYTE | CHAR\])

NVARCHAR2(size)

When MAX\_STRING\_SIZE = EXTENDED, the maximum length is 32767 bytes.

When MAX\_STRING\_SIZE = STANDARD, the maximum length is 4000 bytes.

NATIONALVARCHAR\[(n)\]

VARCHAR2\[(n)\]

VARCHAR

VARCHAR

NVARCHAR2(size)

LONG

Maximum length 2 GB (2^31-1).

LONGTEXT

LONG

VARCHAR

TEXT

LONG

RAW(size)

Maximum length 32767 bytes or 2000 bytes.

BINARY(2\*size)

RAW(size)

VARBINARY

BYTEA

RAW(size)

LONG RAW

Maximum length 2 GB.

LONGBLOB

LONG RAW

VARBINARY

BYTEA

LONG RAW

CLOB

Maximum length (4 GB - 1) × DB\_BLOCK\_SIZE.

LONGTEXT

CLOB

VARCHAR

TEXT

CLOB

NCLOB

Maximum length (4 GB - 1) × DB\_BLOCK\_SIZE.

LONGTEXT

NCLOB

VARCHAR

TEXT

CLOB

BLOB

Maximum length (4 GB - 1) × DB\_BLOCK\_SIZE.

LONGBLOB

BLOB

VARBINARY

BYTEA

BLOB

BFILE

4G.

Not supported

Not supported

Not supported

Not supported

Not supported

JSON type

JSON

Maximum length 32 MB.

Not supported

Not supported

JSON

JSON

JSON

ROWID type

ROWID

64 characters.

Not supported

Not supported

ROWID

OID

VARCHAR

UROWID

64 characters.

Not supported

Not supported

Not supported

Not supported

Not supported

Spatial type

Requires customization

Not supported

**Note**

-   When the destination instance is MySQL, PolarDB for MySQL, or PolarDB-X:
    
    -   For the CHAR type, if the defined length exceeds 255, DTS converts the type to VARCHAR(n).
        
    -   MySQL does not support data types such as BFILE, INTERVAL YEAR TO MONTH, and INTERVAL DAY TO SECOND that are available in Oracle. During schema migration, DTS cannot find corresponding data types in MySQL. Therefore, these three types are not converted.
        
        If a table contains these three data types, the schema migration will fail. When you select migration objects, you must exclude the columns that use these three data types.
        
    -   The TIMESTAMP type in MySQL does not include time zone information. The TIMESTAMP WITH TIME ZONE and TIMESTAMP WITH LOCAL TIME ZONE types in Oracle include time zone information by default. When DTS migrates data of these two types, it converts the data to UTC before storing it in the destination instance.
        
-   When the destination instance is ApsaraDB RDS for PPAS:
    
    ApsaraDB RDS for PPAS does not support TIMESTAMP\[(fractional\_seconds\_precision)\] WITH LOCAL TIME ZONE. When DTS migrates data of this type, it converts the data to UTC and then stores it in a TIMESTAMP\[(fractional\_seconds\_precision)\] WITH TIME ZONE column in the destination ApsaraDB RDS for PPAS instance.
    
-   When the destination instance is AnalyticDB for PostgreSQL:
    
    For field types that are not supported by AnalyticDB for PostgreSQL, DTS converts them directly to BYTEA. If the conversion fails, the data content is set to NULL.
    

## Data migration from SQL Server

When the source instance is SQL Server (including self-managed SQL Server and RDS for SQL Server) and the destination instance is a heterogeneous database such as AnalyticDB for MySQL, AnalyticDB for PostgreSQL, PostgreSQL, or PolarDB for MySQL clusters, the data type mappings are as follows.

**Note**

If the data to be migrated from the source instance is outside the range supported by DTS, the precision of the migrated data in the destination instance is reduced.

**Category**

**SQL Server data type**

**Value range**

**AnalyticDB for MySQL** **data type**

**PostgreSQL and AnalyticDB for PostgreSQL data type**

**MySQL and PolarDB for MySQL data type**

Integer types

BIT

An INTEGER data type that can be 1, 0, or NULL

BOOLEAN

BIT(1)

BIT(1)

TINYINT

0 to 255

TINYINT

SMALLINT

TINYINT UNSIGNED

SMALLINT

\-2^15 (-32768) to 2^15-1 (32767)

SMALLINT

SMALLINT

SMALLINT

INT

\-2^31 (-2147483648) to 2^31-1 (2147483647)

INTEGER

INTEGER

INT

BIGINT

\-2^63 (-9223372036854775808) to 2^63-1 (9223372036854775807)

BIGINT

BIGINT

BIGINT

Decimal types

NUMERIC\[ (p\[ ,s\] )\]

\-10^38+1 to 10^38-1; 1 <= p <= 38

DECIMAL

DECIMAL

DECIMAL\[ (p\[ ,s\] )\]

DECIMAL\[ (p\[ ,s\] )\]

\-10^38+1 to 10^38-1; 1 <= p <= 38

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

Currency types

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

Date types

DATE

0001-01-01 to 9999-12-31

DATE

DATE

DATE

DATETIME

Date range: January 1, 1753 to December 31, 9999.

Time range: 00:00:00 to 23:59:59.997

DATETIME

TIMESTAMP(3) WITHOUT TIME ZONE

DATETIME(3)

DATETIME2\[ (fractional seconds precision) \]

Date range: January 1, 0001 to December 31, 9999.

Time range: 00:00:00 to 23:59:59.9999999

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

Seconds are always zero (:00) and have no fractional part.

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

The format is YYYY-MM-DD hh:mm:ss\[.fraction\] (UTC).

VARBINARY(8)

BYTEA

VARBINARY(8)

String types

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

In double-byte units, n ranges from 1 to 4,000. The storage size is twice n bytes.

VARCHAR

CHARACTER VARYING

VARCHAR(200)

NVARCHAR \[ ( n | max ) \]

In double-byte units, n ranges from 1 to 4,000. max indicates that the maximum storage size is 2^30-1 characters (2 GB).

VARCHAR

TEXT

-   If length = max: LONGTEXT
    
-   Otherwise: VARCHAR(n)
    

NTEXT

Variable-length Unicode data with a maximum string length of 2^30-1 (1,073,741,823) bytes.

VARCHAR

TEXT

LONGTEXT

TEXT

Maximum string length is 2^31-1 (2,147,483,647) bytes.

VARCHAR

TEXT

LONGTEXT

IMAGE

Variable-length binary data from 0 to 2^31-1 (2,147,483,647) bytes.

VARBINARY

BYTEA

LONGBLOB

Spatial and geometry types

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

## Data migration from self-managed TiDB

When the source instance is a self-managed TiDB database and the destination instance is a heterogeneous database, such as MySQL or AnalyticDB for MySQL 3.0, the data type mappings are as follows:

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

## Data migration from DB2 for LUW

When the source instance is DB2 for LUW and the destination instance is a heterogeneous database, such as MySQL, the data type mappings are as follows:

**Note**

If the data to be migrated from the source instance is outside the range supported by DTS, the precision of the migrated data in the destination instance is reduced.

**Category**

**DB2 for LUW data type**

**Value range**

**MySQL data type**

Integer types

SMALLINT

\-32,768 to +32,767

SMALLINT

INTEGER

\-2,147,483,648 to +2,147,483,647

INT

BIGINT

\-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807

BIGINT

Decimal types

DECIMAL(precision-integer, scale-integer)

p <= 38

DECIMAL

FLOAT(integer)

The value range is 1 to 53. A value from 1 to 24 indicates single-precision. A value from 25 to 53 indicates double-precision.

FLOAT

DECFLOAT(precision-integer)

None

DECIMAL(65,10)

Date types

DATE

0001-01-01 to 9999-12-31

DATE

TIME

00:00:00 to 24:00:00

TIME

TIMESTAMP(integer)

0001-01-01-00.00.00.000000000000 to 9999-12-31-24.00.00.000000000000; 0 <= p <= 12

DATETIME

String types

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

GRAPHIC(integer）

127

CHAR(length\*4)

VARGRAPHIC(integer）

16,336

CHAR(length\*4)

DBCLOB(integer）

1,073,741,823

VARCHAR | LONGTEXT

BLOB

2,147,483,647

LONGBLOB

Other types

XML

2,147,483,647

VARCHAR | LONGTEXT

## Data migration from Db2 for i

When the source instance is Db2 for i and the destination instance is a heterogeneous database, such as MySQL, the data type mappings are as follows:

**Note**

If the data to be migrated from the source instance is outside the range supported by DTS, the precision of the migrated data in the destination instance is reduced.

**Category**

**Db2 for i data type**

**Value range**

**MySQL data type**

Integer types

SMALLINT

\-32,768 to +32,767

SMALLINT

INTEGER

\-2,147,483,648 to +2,147,483,647

INT

BIGINT

\-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807

BIGINT

Decimal types

DECIMAL(precision-integer, scale-integer)

p <= 63

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

Date types

DATE

0001-01-01 to 9999-12-31

DATE

TIME

00:00:00 to 24:00:00

TIME

TIMESTAMP(integer)

0001-01-01-00.00.00.000000000000 to 9999-12-31-24.00.00.000000000000; 0 <= p <= 12

DATETIME

String types

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

GRAPHIC(integer）

16,382

CHAR

VARGRAPHIC(integer）

16,369

VARCHAR

DBCLOB(integer）

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

Other types

DATALINK

None

VARCHAR | LONGTEXT

ROWID

40

VARCHAR | LONGTEXT

XML

2,147,483,647

VARCHAR | LONGTEXT

## Data migration from Teradata

When the source instance is Teradata and the destination instance is a heterogeneous database, such as AnalyticDB for PostgreSQL, the data type mappings are as follows:

**Teradata data type**

**AnalyticDB for PostgreSQL data type**

BYTEINT

SMALLINT

SMALLINT

SMALLINT

BIGINT

BIGINT

INTEGER

INTEGER

DATE

DATE

JSON

JSON

XML

XML

CLOB

text

Float

real

CHAR

CHAR

VARCHAR

VARCHAR

Timestamp

Timestamp

TIME

TIME

Timestamp With Time Zone

Timestamp With Time Zone

Time With Time Zone

Time With Time Zone

Decimal

Decimal

Number

numeric

BYTE

bytea

VARBYTE

bytea

BLOB

bytea

PERIOD

varchar(100)

INTERVAL

varchar(100)

**Teradata data type**

**AnalyticDB for PostgreSQL data type**

SMALLINT

SMALLINT

INTEGER

INT

BIGINT

BIGINT

DECIMAL(precision-integer, scale-integer)

DECIMAL

NUMERIC

DECIMAL

FLOAT(integer)

FLOAT

DECFLOAT(precision-integer)

DECIMAL(65,10)

DATE

DATE

TIME

TIME

TIMESTAMP(integer)

DATETIME

CHAR(integer)

CHAR | VARCHAR

VARCHAR(integer)

VARCHAR

CHAR(integer) FOR BIT DATA

BLOB

CLOB

LONGTEXT

GRAPHIC(integer）

CHAR

VARGRAPHIC(integer）

VARCHAR

DBCLOB(integer）

LONGTEXT

BINARY

BINARY

VARBIN

VARBINARY

BLOB

LONGBLOB

DATALINK

VARCHAR | LONGTEXT

ROWID

VARCHAR | LONGTEXT

XML

VARCHAR | LONGTEXT
