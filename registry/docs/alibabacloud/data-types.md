Hologres data types are compatible with PostgreSQL data types. This topic describes the data types and array types supported by Hologres.

## Data types

Hologres supports a subset of PostgreSQL data types. The following table lists the supported data types.

**Name**

**Supported versions**

**Storage size**

**Description**

**Value range**

**Example**

INTEGER (alias INT or INT4)

All Hologres versions

4 bytes

Common integers

\-2147483648 to +2147483647

2147483647

BIGINT (alias INT8)

All Hologres versions

8 bytes

Large-range integer

\-9223372036854775808 to +9223372036854775807

9223372036854775807

BOOLEAN (alias BOOL)

All Hologres versions

1 byte

Boolean type

-   True
    
-   False
    

True

REAL (alias FLOAT4)

All Hologres versions

4 bytes

Variable precision, inexact.

**Note**

In the PostgreSQL ecosystem, FLOAT without specified precision defaults to DOUBLE PRECISION (FLOAT8).

Precision of 6 decimal digits.

123.123

DOUBLE PRECISION (alias FLOAT8)

All Hologres versions

8 bytes

Variable precision, inexact.

Precision of 15 decimal digits.

123.123456789123

TEXT

All Hologres versions

Variable length

Variable-length string. TEXT offers more flexibility than VARCHAR(n) or CHAR(n). Use TEXT instead of VARCHAR(n) or CHAR(n).

None

abcdefg

TIMESTAMP WITH TIME ZONE (alias TIMESTAMPTZ)

All Hologres versions

8 bytes

Timestamp with time zone. Stored with millisecond precision.

**Note**

Standard PostgreSQL uses the `TIMESTAMPTZ` + or \- symbol and the following time zone offset to identify the time zone of `TIMESTAMP WITH TIME ZONE`. If no time zone offset is specified, the system automatically adds the default time zone to the data.

4713 BC to 294276 AD

2004-10-19 10:23:54+02

DECIMAL (alias NUMERIC)

All Hologres versions

Variable length

You must specify PRECISION and SCALE:

-   PRECISION: total number of digits, ranging from 0 to 38.
    
-   SCALE: number of digits after the decimal point, ranging from 0 to PRECISION.
    

A maximum of 38 digits (including both integer and fractional parts).

DECIMAL(38, 10)

DATE

Added in Hologres V0.8

4 bytes

Unit is one day.

4713 BC to 5874897 AD

2004-10-19

TIMESTAMP

Added in Hologres V0.8

8 bytes

Timestamp without time zone, stored with microsecond precision.

4713 BC to 5874897 AD

2020-01-01 01:01:01.123456

CHAR(n)

Added in Hologres V0.8

Fixed character length, up to n characters.

Storage size does not exceed 1 GB.

Fixed-length character string.

-   abcd
    
-   Chinese people
    

VARCHAR(n)

Added in Hologres V0.8

Variable length, up to n characters.

Storage size does not exceed 1 GB.

Variable-length string with a limited number of characters.

abcdefg

SERIAL (auto-increment sequence)

Added in Hologres V0.8

For details, see Auto-increment sequence.

None

None

None

SMALLINT

Added in Hologres V0.9

2 bytes

Small-range integer

\-32768 to +32767

32767

JSON and JSONB

Added in Hologres V0.9

For details, see JSON types.

None

None

None

BYTEA

Added in Hologres V0.9

Variable length. For details, see [Binary Data Types](https://www.postgresql.org/docs/11/datatype-binary.html).

Variable-length binary string.

Storage size does not exceed 1 GB.

None

RoaringBitmap

Added in Hologres V0.10

Variable length. For details, see [RoaringBitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function#concept-2069643).

Efficient INT array that supports constant array bitmap operations.

None

None

RoaringBitmap64

Added in Hologres V3.1

Variable length. For details, see [RoaringBitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function#concept-2069643).

Efficient BIGINT array that supports constant array bitmap operations.

None

None

BIT(n)

Added in Hologres V0.9

n-bit binary string

Fixed-length binary string.

Storage size does not exceed 1 GB.

None

VARBIT(n)

Hologres V0.9

Variable length, up to n bits

Binary string with a limited number of bits

Storage size does not exceed 1 GB.

None

INTERVAL

All Hologres versions

16 bytes

None

\-178000000 years to 178000000 years

interval '1 year'

TIMETZ

Added in Hologres V0.9

12 bytes

Time of day with time zone, with microsecond precision.

00:00:00 to 24:00:00

12:00:00+08

TIME

Added in Hologres V0.9

8 bytes

Time of day without time zone, with microsecond precision.

00:00:00 to 24:00:00

12:00:00

INET

Added in Hologres V0.9

For details, see [Network address types](http://www.postgres.cn/docs/11/datatype-net-types.html#DATATYPE-INET).

INET stores an IPv4 or IPv6 host address in a single data domain.

None

192.168.100.128/25

MONEY

Added in Hologres V0.9

8 bytes. For details, see [Currency types](http://www.postgres.cn/docs/11/datatype-money.html).

The money type stores currency amounts with fixed fractional precision.

\-92233720368547758.08 to +92233720368547758.07

12.34 USD

OID

Added in Hologres V0.9

4 bytes

Numeric object identifier.

None

1024

UUID

Added in Hologres V0.9

16 bytes

Universally unique identifier, fixed-length 128 bits.

**Note**

Algorithms implemented in uuid-ossp are not currently supported.

00000000-0000-0000-0000-000000000000~ffffffff-ffff-ffff-ffff-ffffffffffff

a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11

The following SQL statements provide examples of TIMESTAMP WITH TIME ZONE, DATE, and DECIMAL.

```
CREATE TABLE test_data_type (
  tswtz_column TIMESTAMP WITH TIME ZONE,
  date_column date,
  decimal_column decimal(38, 10),
  char_column char(20),
  varchar_volumn varchar(225)
);

INSERT INTO test_data_type
VALUES ('2004-10-19 08:08:08', '2004-10-19', 123.456, 'abcd', 'a');

SELECT * FROM test_data_type;
      tswtz_column      | date_column | decimal_column |     char_column      | varchar_volumn 
------------------------+-------------+----------------+----------------------+----------------
 2004-10-19 08:08:08+08 | 2004-10-19  | 123.4560000000 | abcd                 | a
(1 row)
```

The following SQL statements provide examples of BIT, VARBIT, and BYTEA.

```
//BIT, VARBIT

CREATE TABLE test (a BIT(3), b BIT VARYING(5));
INSERT INTO test VALUES (B'101', B'00');
INSERT INTO test VALUES (B'10', B'101');

ERROR:  bit string length 2 does not match type bit(3)

INSERT INTO test VALUES (B'10'::bit(3), B'101');
SELECT * FROM test;

  a  |  b
-----+-----
 101 | 00
 100 | 101

//BYTEA

SET bytea_output = 'escape';

SELECT 'abc \153\154\155 \052\251\124'::bytea;
     bytea
----------------
 abc klm *\251T
 
RESET bytea_output;  -- 'hex' by default

SELECT 'abc \153\154\155 \052\251\124'::bytea;
          bytea
--------------------------
 \x616263206b6c6d202aa954
(1 row)
```

## Array types

Hologres supports only the following one-dimensional arrays:

-   int4\[\]
    
-   int8\[\]
    
-   float4\[\]
    
-   float8\[\]
    
-   boolean\[\]
    
-   text\[\]
    

Usage examples:

-   Declare an array.
    
    ```
    CREATE TABLE array_example(
    int4_array int4[],
    int8_array int8[],
    float4_array float4[],
    float8_array float8[],
    boolean_array boolean[],
    text_array text[]);
    ```
    
-   Insert an array.
    
    -   Use the ARRAY keyword.
        
        ```
        INSERT INTO array_example(
        int4_array,
        int8_array,
        float4_array,
        float8_array,
        boolean_array,
        text_array)
        VALUES (ARRAY[1, 2, 3, 4],
        ARRAY[1, 2, 3, 4],
        ARRAY[1.0, 2.0],
        ARRAY[1.0, 2.0, 3.0],
        ARRAY[true, true, false],
        ARRAY['foo1', 'foo2', 'foo3']);
        ```
        
    -   Use the `{}` expression.
        
        ```
        INSERT INTO array_example(
        int4_array,
        int8_array,
        float4_array,
        float8_array,
        boolean_array,
        text_array)
        VALUES ('{1, 2, 3, 4}',
        '{1, 2, 3, 4}',
        '{1.0, 2.0}',
        '{1.0, 2.0, 3.0}',
        '{true, true, false}',
        '{"foo1", "foo2", "foo3"}');
        ```
        
-   Query an array.
    
    -   Query a single element in an array.
        
        ```
        SELECT int4_array[3] FROM array_example;
        ```
        
    -   Query multiple elements in an array.
        
        ```
        SELECT int4_array[1:2] FROM array_example;
        ```
        

## Data type mapping between MaxCompute and Hologres

The following table shows the data type mapping between MaxCompute and Hologres when you create a MaxCompute foreign table.

**MaxCompute data type**

**Hologres data type**

**Supported mapping version**

**Description**

JSON

JSONB

Added in Hologres V4.1

-   STRING
    
-   VARCHAR
    

TEXT

All Hologres versions

None

BIGINT

INT8

All Hologres versions

None

INT

-   INT4
    
-   INT
    

All Hologres versions

None

FLOAT

-   FLOAT4
    
-   REAL
    

All Hologres versions

None

DOUBLE

-   FLOAT
    
-   FLOAT8
    

All Hologres versions

None

BOOLEAN

BOOL

All Hologres versions

None

DATETIME

TIMESTAMP WITH TIME ZONE

All Hologres versions

MaxCompute DATETIME is a date-time type that uses China Standard Time (UTC+8) as the system standard time. The value range is from January 1, 0000 to December 31, 9999, with millisecond precision.

DECIMAL

NUMERIC

All Hologres versions

If no precision is specified for MaxCompute DECIMAL, the default is (38,18). When you use [IMPORT FOREIGN SCHEMA](/help/en/hologres/developer-reference/import-foreign-schema#concept-2441235) to create a table, the system automatically converts the precision.

TIMESTAMP

TIMESTAMP WITH TIME ZONE

Added in Hologres V0.8

-   MaxCompute TIMESTAMP ranges from 0000-01-01 00:00:00.000000000 to 9999-12-31 23:59:59.999999999, with nanosecond precision.
    
-   Hologres TIMESTAMPTZ has millisecond precision.
    
    Hologres internally converts the precision and automatically handles it as milliseconds during reads.
    

CHAR(n)

Defaults to CHAR(n).

Hologres also supports mapping MaxCompute CHAR(n) to TEXT. Set the parameter `set hg_enable_convert_type_for_foreign_table = true` and change the field type to TEXT when creating the table.

Added in Hologres V0.8

MaxCompute CHAR(n) is a fixed-length character type, where n is the length. The maximum value is 255. If the length is insufficient, it is padded with spaces.

VARCHAR(n)

Defaults to VARCHAR(n).

Hologres also supports mapping MaxCompute VARCHAR(n) to TEXT. Set the parameter `set hg_enable_convert_type_for_foreign_table = true` and change the field type to TEXT when creating the table.

Added in Hologres V0.8

MaxCompute VARCHAR(n) is a variable-length character type, where n is the length. The value range is 1 to 65535.

DATE

DATE

Added in Hologres V0.8

None

SMALLINT

Defaults to INT2.

Hologres also supports mapping MaxCompute SMALLINT to INT8. Set the parameter `set hg_enable_convert_type_for_foreign_table = true` and change the field type to INT8 when creating the table.

All Hologres versions (INT4 in V0.8, INT2 in V0.9)

None

TINYINT

Defaults to INT2.

Hologres also supports mapping MaxCompute TINYINT to INT8. Set the parameter `set hg_enable_convert_type_for_foreign_table = true` and change the field type to INT8 when creating the table.

All Hologres versions (INT4 in V0.8, INT2 in V0.9)

None

CHAR

Not supported

Not supported

None

ARRAY<INT>

INT4\[\]

Added in Hologres V0.8

None

ARRAY<BIGINT>

INT8\[\]

Added in Hologres V0.8

None

ARRAY<FLOAT>

FLOAT4\[\]

Added in Hologres V0.8

None

ARRAY<DOUBLE>

FLOAT8\[\]

Added in Hologres V0.8

None

ARRAY<BOOLEAN>

BOOLEAN\[\]

Added in Hologres V0.8

None

ARRAY<STRING>

TEXT\[\]

Added in Hologres V0.8

None

BINARY

BYTEA

Added in Hologres V0.9

None

ARRAY<TINYINT>

Not supported

Not supported

None

ARRAY<SMALLINT>

Not supported

Not supported

None

**Note**

If a MaxCompute data table contains fields of data types that are not supported by Hologres, you can still query the supported fields, provided that the query does not access the unsupported fields.

## Data type mapping between Blink/Flink and Hologres

The following table shows the data type mapping between Blink/Flink and Hologres.

**Note**

Binlog source tables support only a subset of data types. For more information, see [Consume Hologres Binlog in real time with Flink/Blink](/help/en/hologres/user-guide/consume-hologres-binary-logs-in-real-time#task-2116233).

**Flink data type**

**Hologres data type**

**Supported Hologres version**

**Supported Flink version**

INT

-   INT4
    
-   INT
    

All Hologres versions

All versions

BIGINT

INT8

All Hologres versions

All versions

VARCHAR

TEXT

All Hologres versions

All versions

DOUBLE

-   FLOAT
    
-   FLOAT8
    
-   DOUBLE PRECISION
    

All Hologres versions

All versions

BOOLEAN

BOOL

All Hologres versions

All versions

DECIMAL

NUMERIC

**Note**

When using CTAS to synchronize data to Hologres:

-   DECIMAL primary keys are mapped to TEXT.
    
-   Non-primary key DECIMAL fields are mapped to DECIMAL.
    

For more information, see [Why does the primary key of a MySQL table with bigint unsigned become decimal when registering the Flink Catalog, but become text after synchronizing to Hologres using CTAS?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#adb58a1440628).

All Hologres versions

All versions

DATE

DATE

Added in Hologres V0.8

All versions

TIMESTAMP

TIMESTAMP WITH TIME ZONE

All Hologres versions

All versions

FLOAT

-   FLOAT4
    
-   REAL
    

All Hologres versions

All versions

TIME

TIME and TIMETZ

All Hologres versions

**Note**

Starting from Hologres V2.1.24, [Fixed Plan accelerates SQL execution](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#section-gi5-47f-s59) supports TIME and TIMETZ types.

-   Sink table: Supported starting from Flink engine VVR-4.0.13-Flink-1.13. RPC mode is not supported.
    
    **Note**
    
    Because Fixed Plan does not support the TIME type, we do not recommend using this type. For details, see [Fixed Plan accelerates SQL execution](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#task-2183947).
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported starting from Flink engine VVR-4.0.13-Flink-1.13. RPC mode is not supported.
    

VARCHAR

JSONB

Added in Hologres V0.10

-   Sink table: Supported starting from Flink engine VVR-4.0.12-Flink-1.13. RPC mode is not supported.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported starting from Flink engine VVR-4.0.12-Flink-1.13. RPC mode is not supported.
    

VARCHAR

JSON

Added in Hologres V0.9

-   Sink table: Supported starting from Flink engine VVR-4.0.12-Flink-1.13. RPC mode is not supported.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported starting from Flink engine VVR-4.0.12-Flink-1.13. RPC mode is not supported.
    

BYTES

RoaringBitmap

Added in Hologres V0.10

-   Sink table: Supported starting from Flink engine VVR-4.0.12-Flink-1.13. RPC mode is not supported.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported starting from Flink engine VVR-4.0.12-Flink-1.13. RPC mode is not supported.
    

VARCHAR

GEOMETRY and GEOGRAPHY

All Hologres versions

**Note**

Starting from Hologres V2.1, [Fixed Plan accelerates SQL execution](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#section-gi5-47f-s59) supports writing GEOMETRY and GEOGRAPHY data.

-   Sink table: Supported starting from Flink engine VVR-4.0.13-Flink-1.13. RPC mode is not supported.
    
-   Source table: Not supported.
    
-   Dimension table: Not supported.
    

TINYINT

SMALLINT

All Hologres versions

-   Sink table: Supported starting from Flink engine VVR-4.0.13-Flink-1.13. RPC mode is not supported.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported starting from Flink engine VVR-4.0.13-Flink-1.13. RPC mode is not supported.
    

SMALLINT

SMALLINT

All Hologres versions

-   Sink table: Supported in all versions.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported in all versions.
    

ARRAY<INT>

int4\[\]

Added in Hologres V0.8

-   Sink table: Supported in all versions.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported in all versions.
    

ARRAY<BIGINT>

int8\[\]

Added in Hologres V0.8

-   Sink table: Supported in all versions.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported in all versions.
    

ARRAY<FLOAT>

float4\[\]

Added in Hologres V0.8

-   Sink table: Supported in all versions.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported in all versions.
    

ARRAY<DOUBLE>

float8\[\]

Added in Hologres V0.8

-   Sink table: Supported in all versions.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported in all versions.
    

ARRAY<BOOLEAN>

boolean\[\]

Added in Hologres V0.8

-   Sink table: Supported in all versions.
    
-   Source table: Supported starting from Flink engine VVR-6.0.3-Flink-1.15. RPC mode is not supported.
    
-   Dimension table: Supported in all versions.
    

ARRAY<VARCHAR>

TEXT\[\]

Added in Hologres V0.8

-   Sink table: Supported in all versions.
    
-   Source table: Supported starting with Flink engine VVR 6.0.3-Flink 1.15. RPC mode is not supported.
    
-   Dimension table: Supported in all versions.
    

ARRAY<VARCHAR>

VARCHAR\[\]

Added in Hologres V0.8

-   Sink table: Supported in all versions.
    
-   Source table: Supported starting from Hologres instance V4.0.19 and Flink engine VVR-11.6-JDK11-Flink-1.20.
    
-   Dimension table: Supported in all versions.
    

CHAR

Not supported

Not supported

Not supported

BINARY

Not supported

Not supported

Not supported

## Data type mapping between MySQL and Hologres

The following table shows the data type mapping between MySQL and Hologres. For more information, see [Migrate MySQL to Hologres](/help/en/hologres/user-guide/migrate-data-from-mysql-to-hologres#task-2101345).

**MySQL data type**

**Hologres data type**

BIGINT

BIGINT

BINARY(n)

BYTEA

BIT

BOOLEAN

-   CHAR(n)
    
-   CHARACTER(n)
    

-   CHAR(n)
    
-   CHARACTER(n)
    

DATE

DATE

DATETIME

TIMESTAMP \[WITHOUT TIME ZONE\]

-   DECIMAL(p,s)
    
-   DEC(p,s)
    

-   DECIMAL(p,s)
    
-   DEC(p,s)
    

DOUBLE

DOUBLE PRECISION

FLOAT

REAL

-   INT
    
-   INTEGER
    

-   INT
    
-   INTEGER
    

MEDIUMINT

INTEGER

NUMERIC(p,s)

NUMERIC(p,s)

SMALLINT

SMALLINT

-   TINYBLOB
    
-   BLOB
    
-   MEDIUMBLOB
    
-   LONGBLOB
    

BYTEA

TINYINT

SMALLINT

-   TINYTEXT
    
-   TEXT
    
-   MEDIUMTEXT
    
-   LONGTEXT
    

TEXT

TIME

TIME \[WITHOUT TIME ZONE\]

TIMESTAMP

TIMESTAMP \[WITH TIME ZONE\]

-   VARBINARY(n)
    
-   VARBINARY(max)
    

BYTEA

VARCHAR(n)

VARCHAR(n)

VARCHAR(max)

TEXT

## Data type mapping between DLF and Hologres

**DLF data type**

**Hologres data type**

TINYINT

SMALLINT

SMALLINT

SMALLINT

INT

INT

BIGINT

BIGINT

BOOLEAN

BOOLEAN

FLOAT

REAL

DOUBLE

DOUBLE PRECISION

DATE

DATE

TIMESTAMP

TIMESTAMP WITHOUT TIME ZONE

STRING

TEXT

BINARY

BYTEA

DECIMAL(m,n)

NUMERIC(m,n)

VARCHAR(n)

CHARACTER VARYING(n)

CHAR(n）

CHARACTOR(n)

ARRAY<type>

ARRAY<hologres\_data\_type>

Supported types:

-   INT
    
-   BIGINT
    
-   FLOAT
    
-   BOOLEAN
    
-   DOUBLE
    
-   STRING
    

## Data type mapping between Hive and Hologres

**Hive data type**

**Hologres data type**

TINYINT

SMALLINT

SMALLINT

SMALLINT

INT

INT

BIGINT

BIGINT

FLOAT

REAL

DOUBLE

DOUBLE PRECISION

DECIMAL

NUMERIC

NUMERIC

NUMERIC

DATE

DATE

TIMESTAMP

TIMESTAMP WITHOUT TIME ZONE

STRING

TEXT

VARCHAR

VARCHAR

CHAR

CHAR

BINARY

BYTEA

BOOL

BOOLEAN

ARRAY<type>

ARRAY<hologres\_data\_type>

Supported types:

-   INT
    
-   BIGINT
    
-   FLOAT
    
-   BOOLEAN
    
-   DOUBLE PRECISION
    
-   STRING
    

## Data type mapping between Hudi and Hologres

This feature is supported in Hologres V1.3 and later.

**Hudi data type**

**Hologres data type**

IntegerType

INT

LongType

BIGINT

FloatType

REAL

DoubleType

DOUBLE PRECISION

DecimalType

NUMERIC

TimestampType

TIMESTAMP WITHOUT TIME ZONE

DateType

DATE

YearMonthIntervalType

Not supported

DayTimeIntervalType

Not supported

StringType

TEXT

VarcharType

Not supported

CharType

Not supported

BooleanType

BOOL

BinaryType

BYTEA

ByteType

Not supported

ShortType

Not supported

ArrayType(elementType, containsNull)

ARRAY<hologres\_data\_type>

Supported types:

-   INT
    
-   BIGINT
    
-   FLOAT
    
-   BOOLEAN
    
-   DOUBLE PRECISION
    
-   STRING
    

## Data type mapping between Delta Lake and Hologres

This feature is supported in Hologres V1.3 and later.

**Delta Lake data type**

**Hologres data type**

TINYINT

SMALLINT

SMALLINT

SMALLINT

INT

INT

BIGINT

BIGINT

FLOAT

REAL

DOUBLE

DOUBLE PRECISION

DECIMAL(p,s)

NUMERIC

TIMESTAMP

TIMESTAMP WITHOUT TIME ZONE

DATE

DATE

INTERVAL intervalQualifier

Not supported

STRING

TEXT

BOOLEAN

BOOLEAN

BINARY

BYTEA

ARRAY<elementType>

ARRAY<hologres\_data\_type>

Supported types:

-   INT
    
-   BIGINT
    
-   FLOAT
    
-   BOOLEAN
    
-   DOUBLE PRECISION
    
-   STRING
    

## Data type mapping between Paimon and Hologres

**Paimon data type**

**Hologres data type**

TINYINT

SMALLINT

SMALLINT

SMALLINT

INT

INT

BIGINT

BIGINT

FLOAT

REAL

DOUBLE

DOUBLE PRECISION

DECIMAL(p,s)

DECIMAL

TIMESTAMP

TIMESTAMP WITHOUT TIME ZONE

DATE

DATE

CHAR

CHAR

VARCHAR

VARCHAR

BINARY

BYTEA

ARRAY

ARRAY<hologres\_data\_type>

Supported types:

-   INT
    
-   BIGINT
    
-   FLOAT
    
-   BOOLEAN
    
-   DOUBLE PRECISION
    
-   STRING
    

## Data type mapping between Iceberg and Hologres

**Iceberg data type**

**Hologres data type**

BOOLEAN

BOOLEAN

INT

INTEGER

LONG

BIGINT

FLOAT

REAL

DOUBLE

DOUBLE PRECISION

DECIMAL(P,S)

NUMERIC(P,S)

DATE

DATE

TIME

TEXT (Spark does not support the TIME type. Flink's TIME type becomes STRING when written to DLF.)

TIMESTAMP

TIMESTAMP WITHOUT TIME ZONE

TIMESTAMPTZ

Not supported

STRING

TEXT

UUID

Not supported (Flink/Spark cannot write this type.)

FIXED(L)

BYTEA

BINARY

BYTEA

LIST

ARRAY<hologres\_data\_type>

Supported types:

-   INT
    
-   BIGINT
    
-   FLOAT
    
-   BOOLEAN
    
-   DOUBLE PRECISION
    
-   STRING
    

STRUCT

Not supported

MAP

Not supported
