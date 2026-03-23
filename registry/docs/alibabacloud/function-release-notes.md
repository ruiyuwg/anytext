This topic describes the release notes for functions in Hologres V1.3 and later.

## V4.0

**Version**

**Function type**

**Function**

**Category**

**Description**

**Execution engine**

**References**

4.0.1

Time and date conversion

Multiple functions

New

Supports multiple time and date truncation functions to facilitate migration from ClickHouse and Apache Doris.

HQE

[Date and time functions](/help/en/hologres/developer-reference/date-and-time-functions)

## **V3.2**

**Version**

**Function type**

**Function**

**Category**

**Description**

**Execution engine**

**References**

3.2.1

Array function

-   hg\_array\_map
    
-   hg\_array\_fill
    
-   hg\_array\_filter
    
-   hg\_array\_sort
    
-   hg\_array\_first\_index
    

New

Supports Lambda expressions and higher-order array functions containing Lambda expressions.

HQE

[LAMBDA expressions and related functions](/help/en/hologres/developer-reference/lambda-expressions-and-related-functions)

## **V3.1**

**Version**

**Function type**

**Function**

**Category**

**Description**

**Execution engine**

**References**

3.1.1

Roaring bitmap functions

Multiple roaring bitmap functions support 64-bit.

Enhanced feature

Multiple roaring bitmap functions support 64-bit.

HQE

[Roaring bitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function)

3.1.1

Presto-compatible functions

Multiple Presto-compatible functions are supported.

New function

Multiple Presto-compatible functions are supported.

HQE

[Presto compatible functions](/help/en/hologres/developer-reference/presto-compatible-functions)

3.1.1

Spark-compatible functions

Multiple Spark-compatible functions are supported.

New function

Multiple Spark-compatible functions are supported.

HQE

[Spark compatible functions](/help/en/hologres/developer-reference/spark-compatible-functions)

## V3.0

**Version**

**Function type**

**Function**

**Category**

**Description**

**Execution engine**

**References**

3.0.1

Data type conversion functions

TRY\_CAST

Enhanced feature

The following data types are supported by the TRY\_CAST function:

-   DATE
    
-   TIMESTAMP
    
-   TIMESTAMP\_TZ
    

HQE

[Data type conversion function](/help/en/hologres/developer-reference/try-cast-function)

3.0.1

Aggregate functions

-   STRING\_AGG
    
-   ARRAY\_AGG
    

Performance improvement

The following SQL functions that contain the deduplication and sorting clauses are supported by HQE:

-   STRING\_AGG(distinct|order by col)
    
-   ARRAY\_AGG(distinct|order by col)
    

**Note**

To use the functions, you must run the `set hg_experimental_enable_distinct_or_orderby_agg_in_hqe=true;` command to set the GUC parameter to true.

HQE

-   [STRING\_AGG](/help/en/hologres/developer-reference/string-functions#0addb20903o1g)
    
-   [ARRAY\_AGG](/help/en/hologres/developer-reference/array-functions#e73ed17e8a9sj)
    

## V2.2

**Version**

**Function type**

**Function**

**Category**

**Description**

**Execution engine**

**References**

2.2.7

Data type conversion functions

text::roaringbitmap

Performance improvement

Conversion between the TEXT and roaring bitmap data types is supported by HQE.

HQE

[Roaring bitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function)

2.2.1

Data type conversion functions

TRY\_CAST

New function

The data type conversion function TRY\_CAST is supported by Hologres.

HQE

[Data type conversion function](/help/en/hologres/developer-reference/try-cast-function)

2.2.0

Traffic analysis functions

Path analysis functions

New function

Path analysis functions are supported to facilitate business traffic analysis in an efficient manner.

HQE

[Path analysis functions](/help/en/hologres/developer-reference/path-analysis-function)

2.2.0

General-purpose aggregate functions

-   CORR
    
-   COVAR\_POP
    
-   COVAR\_SAMP
    
-   REGR\_AVGX
    
-   REGR\_AVGY
    
-   REGR\_INTERCEPT
    
-   REGR\_R2
    
-   REGR\_SLOPE
    
-   REGR\_SXX
    
-   REGR\_SXY
    
-   REGR\_SYY
    

Performance improvement

Multiple general-purpose aggregate functions are supported by HQE.

HQE

[General-purpose aggregate functions](/help/en/hologres/developer-reference/general-purpose-aggregate-functions)

## V2.1

**Version**

**Function type**

**Function**

**Category**

**Description**

**Execution engine**

**References**

2.1.33

Data type conversion functions

text::roaringbitmap

Performance improvement

Conversion between the TEXT and roaring bitmap data types is supported by HQE.

HQE

[Roaring bitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function#undefined)

2.1.33

Roaring bitmap functions

ROARINGBITMAP\_IN

New function

This function is used to convert data of the TEXT type into the roaring bitmap type.

HQE

[Roaring bitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function#t2069643.html)

2.1.0

Funnel analysis functions

-   RANGE\_FUNNEL
    
-   RANGE\_FUNNEL\_TIME
    
-   RANGE\_FUNNEL\_LEVEL
    

New function

The RANGE\_FUNNEL, RANGE\_FUNNEL\_TIME, and RANGE\_FUNNEL\_LEVEL functions are supported by Hologres.

-   RANGE\_FUNNEL: Calculates grouping statistics and aggregates the calculation results of a time window.
    
-   RANGE\_FUNNEL\_TIME: Decodes the event time in the result returned by the RANGE\_FUNNEL function.
    
-   RANGE\_FUNNEL\_LEVEL: Decodes the event level in the result returned by the RANGE\_FUNNEL function.
    

HQE

[Funnel functions](/help/en/hologres/developer-reference/funnel-analysis-functions/)

2.1.0

Bit-sliced Index (BSI) functions

-   BSI constructor function
    
-   BSI expansion function
    
-   BSI query function
    
-   BSI aggregate and analytic function
    

New function

BSI functions are supported to improve user profile analysis capabilities.

PQE

[BSI functions](/help/en/hologres/developer-reference/bsi-functions)

2.1.0

Supported MySQL functions

IF

New function

The IF function is supported by Hologres.

HQE

[IF](/help/en/hologres/if)

2.1.0

Array functions

-   ARRAY\[\]
    
-   ARRAY\_APPEND
    

Performance improvement

The ARRAY\[\] function that is used to obtain an array subscript and the ARRAY\_APPEND function that is used to append elements to an array are supported by HQE.

HQE

[Array functions](/help/en/hologres/developer-reference/array-functions)

2.1.0

String functions

REGEXP\_SPLIT\_TO\_TABLE

Performance improvement

The REGEXP\_SPLIT\_TO\_TABLE function that is used to split strings is supported by HQE.

HQE

[String functions](/help/en/hologres/developer-reference/string-functions)

2.1.0

Set returning functions

GENERATE\_SERIES

Performance improvement

The GENERATE\_SERIES function that is used to generate a sequence is supported by HQE. The data types can be INT, BIGINT, or NUMERIC.

HQE

[Set returning functions](/help/en/hologres/developer-reference/set-returning-functions)

## V2.0

**Version**

**Function type**

**Function**

**Category**

**Description**

**Execution engine**

**References**

2.0.31

Date and time conversion functions

-   DATEADD
    
-   DATEDIFF
    
-   LAST\_DAY
    

New function

The DATEADD, DATEDIFF, and LAST\_DAY functions are supported by Hologres.

HQE

[Date and time functions](/help/en/hologres/developer-reference/date-and-time-functions)

2.0.24

JSONB functions

TRY\_CAST\_TO\_JSONB

New function

The TRY\_CAST\_TO\_JSONB function is supported by Hologres.

HQE

[JSON and JSONB data types](/help/en/hologres/developer-reference/json-and-jsonb-data-types)

2.0.8

Geographic information analysis functions

-   ST\_DISTANCE\_SPHERE\_S2
    
-   ST\_DWITHIN\_S2
    

New function

The ST\_DISTANCE\_SPHERE\_S2 function that is used to calculate the spherical distance and the ST\_DWITHIN\_S2 function that is used to check the distance relationship are supported by Hologres.

HQE

[PostGIS spatial functions](/help/en/hologres/developer-reference/postgis-for-geographic-information-analysis)

2.0.1

Supported ClickHouse functions

HG\_SIP\_HASH\_64(TEXT)

New function

The ClickHouse built-in function HG\_SIP\_HASH\_64(TEXT) is added.

HQE

[Supported ClickHouse functions](/help/en/hologres/developer-reference/supported-clickhouse-functions#main-2298341)

2.0.1

Data type conversion functions

-   TEXT::TIMESTAMP
    
-   CAST(TEXT AS TIMESTAMP)
    
-   TIMESTAMP::TEXT
    
-   CAST(TIMESTAMP AS TEXT)
    

Performance improvement

Conversion between the TEXT and TIMESTAMP data types is supported by HQE.

HQE

[Optimize query performance](/help/en/hologres/user-guide/optimize-performance-of-queries-on-hologres-internal-tables)

2.0.1

String functions

-   LEFT
    
-   RIGHT
    

Performance improvement

The string truncation functions LEFT and RIGHT are supported by HQE.

HQE

[String functions](/help/en/hologres/developer-reference/string-functions)

## V1.3

**Version**

**Function type**

**Function**

**Category**

**Description**

**Execution engine**

**References**

1.3.39

Date and time functions

-   EXTRACT
    
-   DATE\_PART
    
-   DATE\_TRUNC
    

Performance improvement

The following date and time truncation functions are supported by HQE:

-   EXTRACT
    
-   DATE\_PART
    
-   DATE\_TRUNC
    

HQE

[Date/time field extraction and truncation](/help/en/hologres/developer-reference/date-and-time-functions#section-3j7-45r-tav)

1.3.39

Roaring bitmap functions

RB\_BUILD

Performance improvement

The RB\_BUILD function allows you to use columns of the ARRAY type as input parameters.

HQE

[Roaring bitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function#concept-2069643)

1.3.37

Array operators

ARRAY && ARRAY

Performance improvement

The && operator allows you to use columns of the ARRAY type as input parameters.

HQE

[Array functions](/help/en/hologres/developer-reference/array-functions#concept-1664134)

1.3.36

Supported ClickHouse functions

-   TOSTRING
    
-   TOINT64
    
-   TOINT32
    
-   TODATE
    
-   TOFLOAT64
    

New function

Some ClickHouse type conversion functions are supported.

HQE

[Supported ClickHouse functions](/help/en/hologres/developer-reference/supported-clickhouse-functions#main-2298341)

1.3.36

Aggregate functions

-   MAX\_BY
    
-   MIN\_BY
    

New function

The MAX\_BY and MIN\_BY functions are supported.

HQE

[MAX\_BY](/help/en/hologres/developer-reference/general-purpose-aggregate-functions#fe48f235fafnz) and [MIN\_BY](/help/en/hologres/developer-reference/general-purpose-aggregate-functions#dca17c97efldq)

1.3.19

Array functions

-   ARRAY\_MAX
    
-   ARRAY\_MIN
    
-   ARRAY\_CONTAINS
    
-   ARRAY\_EXCEPT
    
-   ARRAY\_DISTINCT
    
-   ARRAY\_UNION
    

New function

Some array functions are supported.

HQE

[Array functions](/help/en/hologres/developer-reference/array-functions#concept-1664134)

1.3.18

Array functions

ARRAY\_SORT

Performance improvement

The ARRAY\_SORT function supports more types of arrays.

HQE

[Array functions](/help/en/hologres/developer-reference/array-functions#concept-1664134)

1.3.16

Roaring bitmap operators

-   |
    
-   <<
    
-   \>>
    
-   \-
    

New function

The roaring bitmap operators are supported in specific scenarios.

HQE

[Roaring bitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function#concept-2069643)

1.3.16

Roaring bitmap functions

-   RB\_INDEX
    
-   RB\_FILL
    
-   RB\_CLEAR
    
-   RB\_RANGE
    
-   RB\_RANGE\_CARDINALITY
    

New function

Some roaring bitmap functions are supported.

HQE

[Roaring bitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function#concept-2069643)

1.3.12

JSON functions

IS\_VALID\_JSON

New function

The IS\_VALID\_JSON function is supported to validate JSON strings.

HQE

[JSON and JSONB data types](/help/en/hologres/developer-reference/json-and-jsonb-data-types#concept-2036063)

1.3.1

Aggregate functions

UNIQ

New function

The UNIQ function is supported for precise deduplication.

HQE

[UNIQ](/help/en/hologres/developer-reference/general-purpose-aggregate-functions#25448b4e36tq7)

1.3.1

-   String functions
    
-   Array functions
    

-   ARRAY\_AGG
    
-   STRING\_AGG
    

Performance improvement

Filter conditions are supported in expressions.

HQE

-   [String functions](/help/en/hologres/developer-reference/string-functions#concept-1664134)
    
-   [Array functions](/help/en/hologres/developer-reference/array-functions#concept-1664134)
    

1.3.1

JSON functions

ROW\_TO\_JSON

New function

A JSON function is supported.

PQE

[row\_to\_json](/help/en/hologres/developer-reference/get-json-object#2ed18aa6c8k7d)

1.3.1

String functions

ROW()

New function

Some string functions are supported.

HQE

[String functions](/help/en/hologres/developer-reference/string-functions#concept-1664134)

1.3.1

PostGIS spatial functions

-   Geometry Constructors
    
-   Geometry Accessors
    
-   Geometry Editors
    
-   Spatial Reference System
    
-   Geometry Input
    
-   Geometry Output
    
-   Spatial Relationships
    
-   Measurement
    
-   Overlay
    
-   Geometry Processing
    
-   Bounding Box
    
-   Linear Referencing
    

Performance improvement

HQE supports most spatial functions and supports PostGIS at the production level.

HQE

[PostGIS spatial functions](/help/en/hologres/developer-reference/postgis-for-geographic-information-analysis#concept-2086375)

1.3.1

Supported Oracle functions

Other functions such as DATE functions and STRING functions

New function

The orafce extension is introduced to support Oracle functions.

HQE

[Supported Oracle functions](/help/en/hologres/supported-oracle-functions#concept-2206615)
