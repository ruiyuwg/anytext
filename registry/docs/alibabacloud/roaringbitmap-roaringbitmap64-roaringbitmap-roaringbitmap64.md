This topic describes parameters in roaring bitmap functions and how to use roaring bitmap functions in Hologres.

## Background information

Roaring bitmaps are efficiently compressed bitmaps that are used in different popular programming languages on various big data platforms. Roaring bitmaps are suitable for ultra-high-cardinality dimensions and can be used for deduplication, tag-based filtering, and collection of time series data.

In a roaring bitmap, 32-bit integers are divided into 216 chunks. The integers in each chunk share the same 16 most significant bits. The 16 least significant bits of integers are stored in a container. A roaring bitmap stores containers in a dynamic array as primary indexes. Two types of containers are available: array containers for sparse chunks and bitmap containers for dense chunks. An array container can store up to 4,096 integers. A bitmap container can store more than 4,096 integers.

Roaring bitmaps can use this storage structure to rapidly retrieve specific values. Roaring bitmaps also provide bitwise operations such as AND, OR, and XOR between the two types of containers. Therefore, roaring bitmaps can deliver excellent storage and computing performance.

## Limits

When you use roaring bitmap functions in Hologres, take note of the following limits:

-   Only exclusive instances of Hologres V0.10 and later support these functions.
    
    **Note**
    
    You can view the version of your Hologres instance in the Hologres console. If the version of your Hologres instance is earlier than V0.10, manually upgrade the instance in the Hologres console or join the DingTalk group for technical support. For more information about how to manually upgrade a Hologres instance in the Hologres console, see [Common upgrade preparation failure errors](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv). For more information about how to obtain technical support, see [Obtain online support for Hologres](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   These functions are loaded to the **public** schema by default and can be loaded only to the **public** schema.
    
-   Starting from Hologres V3.1, the [RoaringBitmap64](/help/en/hologres/developer-reference/data-types) data type is supported. Some roaring bitmap functions can process data of the RoaringBitmap64 type. When processing data of the RoaringBitmap64 type, these functions do not support constant input parameters.
    
-   Before you use roaring bitmap functions, you must execute the following statement to enable EXTENSION. EXTENSION is a database-level function. You need to execute the statement only once for a database. If you create a new database, you must execute the statement again.
    
    ```
    --Create an extension.
    CREATE EXTENSION roaringbitmap;
    ```
    
    If you want to drop the extension for roaring bitmap functions, execute the following statement:
    
    ```
    DROP EXTENSION roaringbitmap;
    ```
    
    **Important**
    
    We recommend that you do not execute the `DROP EXTENSION <extension_name> CASCADE;` statement to drop an extension. The CASCADE statement drops not only the specified extension but also the extension data and the objects that depend on the extension. The extension data includes the PostGIS data, roaring bitmap data, Proxima data, binary log data, and BSI data. The objects include metadata, tables, views, and server data.
    
-   You cannot specify the fields that store roaring bitmaps as bitmap or dictionary indexes.
    
-   When you create a table that contains a roaring bitmap column, you must explicitly specify the data type of the column as RoaringBitmap (32-bit) or RoaringBitmap64 (64-bit). The two types of roaring bitmap data cannot be used in mixed calculations.
    
    ```
    -- Create a table that contains a 32-bit roaring bitmap column.
    CREATE TABLE t_rb_32 (
        bucket int,
        x roaringbitmap
    );
    
    -- Create a table that contains a 64-bit roaring bitmap column.
    CREATE TABLE t_rb_64 (
        bucket int,
        x roaringbitmap64
    );
    
    -- Mixed calculations of the two types of roaring bitmap data are not supported and an error is returned.
    -- ERROR: operator does not exist: roaringbitmap & roaringbitmap64
    SELECT
        a.x & b.x
    FROM
        t_rb_32 a
    JOIN t_rb_64 b ON a.bucket = b.bucket;
    ```
    

## Operators

The following operators support processing data of the RoaringBitmap and RoaringBitmap64 types.

**Operator**

**Input type**

**Output type**

**Description**

**Example**

**Remarks**

&

RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64

Same as the input type

Performs an AND operation.

rb\_build('{1,2,3}') & rb\_build('{3,4,5}')

N/A

|

RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64

Same as the input type

Performs an OR operation.

rb\_build('{1,2,3}') | rb\_build('{3,4,5}')

N/A

RoaringBitmap | RoaringBitmap64, INTEGER

RoaringBitmap | RoaringBitmap64

rb\_build('{1,2,3}') | 6

Only Hologres V1.3.16 and later support this operator.

INTEGER, RoaringBitmap | RoaringBitmap64

RoaringBitmap | RoaringBitmap64

6 | rb\_build('{1,2,3}')

Only Hologres V1.3.16 and later support this operator.

#

RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64

Same as the input type

Performs an XOR operation.

rb\_build('{1,2,3}') # rb\_build('{3,4,5}')

N/A

<<

RoaringBitmap | RoaringBitmap64, BIGINT

RoaringBitmap | RoaringBitmap64

Shifts a value left by a specific number of places.

rb\_build('{1,2,3}') << 2

Only Hologres V1.3.16 and later support this operator.

\>>

RoaringBitmap | RoaringBitmap64, BIGINT

RoaringBitmap | RoaringBitmap64

Shifts a value right by a specific number of places.

rb\_build('{1,2,3}') >> 3

Only Hologres V1.3.16 and later support this operator.

\-

RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64

Same as the input type

Performs an ANDNOT operation.

rb\_build('{1,2,3}') - rb\_build('{3,4,5}')

Only Hologres V1.3.16 and later support this operator.

RoaringBitmap | RoaringBitmap64, INTEGER

RoaringBitmap | RoaringBitmap64

rb\_build('{1,2,3}') - 3

N/A

@>

RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64

BOOLEAN

Checks whether A contains B.

rb\_build('{1,2,3}') @> rb\_build('{3,4,5}')

N/A

RoaringBitmap | RoaringBitmap64, INTEGER

BOOLEAN

rb\_build('{1,2,3}') @> 3

N/A

<@

RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64

BOOLEAN

Checks whether A is contained by B.

rb\_build('{1,2,3}') <@ rb\_build('{3,4,5}')

N/A

integer, RoaringBitmap | RoaringBitmap64

BOOLEAN

3 <@ rb\_build('{1,2,3}')

N/A

&&

RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64

BOOLEAN

Checks whether A intersects with B.

rb\_build('{1,2,3}') && rb\_build('{3,4,5}')

N/A

\=

RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64

BOOLEAN

Checks whether two objects are equal.

rb\_build('{1,2,3}') = rb\_build('{3,4,5}')

N/A

<>

RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64

BOOLEAN

Checks whether two objects are not equal.

rb\_build('{1,2,3}') <> rb\_build('{3,4,5}')

N/A

## Roaring bitmap functions

-   Functions that support processing data of the RoaringBitmap and RoaringBitmap64 types
    
    **Function**
    
    **Input type**
    
    **Output type**
    
    **Description**
    
    **Example**
    
    rb\_build\_agg
    
    INTEGER|BIGINT
    
    When the input type is:
    
    -   INTEGER: Returns the RoaringBitmap type.
        
    -   BIGINT: Returns the RoaringBitmap64 type.
        
    
    Aggregates offsets into a roaring bitmap.
    
    **Note**
    
    Only Hologres V3.1 and later support the BIGINT input parameter type and return the RoaringBitmap64 type.
    
    `rb_build_agg(1)`
    
    rb\_cardinality
    
    RoaringBitmap | RoaringBitmap64
    
    INTEGER
    
    Calculates the cardinality.
    
    `rb_cardinality(rb_build('{1,2,3,4,5}'))`
    
    rb\_and\_cardinality
    
    RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64
    
    INTEGER
    
    Calculates the cardinality by performing an AND operation on two roaring bitmaps.
    
    `rb_and_cardinality(rb_build('{1,2,3}'),rb_build('{3,4,5}'))`
    
    rb\_or\_cardinality
    
    RoaringBitmap | RoaringBitmap64, RoaringBitmap | RoaringBitmap64
    
    INTEGER
    
    Calculates the cardinality by performing an OR operation on two roaring bitmaps.
    
    `rb_or_cardinality(rb_build('{1,2,3}'),rb_build('{3,4,5}'))`
    
    rb\_range
    
    RoaringBitmap | RoaringBitmap64, BIGINT, BIGINT
    
    RoaringBitmap | RoaringBitmap64
    
    Returns a new collection that ranges from the start position (included) to the end position (not included). The start position is 1.
    
    **Note**
    
    Only Hologres V1.3.16 and later support this function.
    
    `rb_range(rb_build('{1,2,3}'), 2, 3)`
    
    rb\_minimum
    
    RoaringBitmap | RoaringBitmap64
    
    INTEGER
    
    Returns the minimum offset in a roaring bitmap. If the roaring bitmap is empty, -1 is returned.
    
    `rb_minimum(rb_build('{1,2,3}'))`
    
    rb\_maximum
    
    RoaringBitmap | RoaringBitmap64
    
    INTEGER
    
    Returns the maximum offset in a roaring bitmap. If the roaring bitmap is empty, 0 is returned.
    
    `rb_maximum(rb_build('{1,2,3}'))`
    
    rb\_to\_array
    
    RoaringBitmap | RoaringBitmap64
    
    INTEGER\[\]
    
    Returns an integer array from which a roaring bitmap is created.
    
    `rb_to_array(rb_build('{1,2,3}'))`
    
    rb\_to\_array\_string
    
    RoaringBitmap | RoaringBitmap64, TEXT
    
    TEXT
    
    Returns a string that is generated by concatenating the integer array from which a roaring bitmap is created with input text.
    
    `rb_to_array_string(rb_build('{1,2,3}'),',')`
    
-   Functions that support processing only data of the RoaringBitmap64 type
    
    **Function**
    
    **Input type**
    
    **Output type**
    
    **Description**
    
    **Example**
    
    rb64\_build
    
    BIGINT\[\]
    
    RoaringBitmap64
    
    Creates a 64-bit roaring bitmap from an array.
    
    **Note**
    
    Hologres V3.1 and later support this function.
    
    ```
    --Prepare data.
    CREATE TABLE public.tn (
        id INT,
        num BIGINT[]
    );
    INSERT INTO public.tn ("id", "num") VALUES (01, '{1,2}');
    
    SELECT rb64_build (num) rb_num,num FROM public.tn;
    ```
    
    The following result is returned:
    
    ```
    rb_num	num
    \x030100000000000000000000003a30000001000000000001001000000001000200	{1,2}
    ```
    
-   Functions that support processing only data of the RoaringBitmap type
    
    **Function**
    
    **Input type**
    
    **Output type**
    
    **Description**
    
    **Example**
    
    rb\_build
    
    INTEGER\[\]
    
    RoaringBitmap
    
    Creates a 32-bit roaring bitmap from an array.
    
    ```
    --The following result is returned: \x3a3000000100000000000000100000000100
    SELECT rb_build_agg(1);
    ```
    
    roaringbitmap\_in
    
    TEXT
    
    RoaringBitmap
    
    Converts data of the TEXT type into the RoaringBitmap type.
    
    **Note**
    
    Hologres V2.1.33 and later support this function.
    
    ```
    --Create a sample table.
    CREATE TABLE rb_text (
        id int,
        a text
    );
    
    -- Insert data into the sample table.
    INSERT INTO rb_text
        VALUES (1, '\x3a300000010000000000090010000000010002000300040005000600070008000900c800');
    
    --Convert the data type of field a into the RoaringBitmap type and perform an AND operation.
    SELECT
        rb_and_cardinality_agg (roaringbitmap_in (a::cstring))
    FROM
        rb_text;
    --The following result is returned:
    rb_and_cardinality_agg|
    -----------------------
                        10|
    ```
    
    rb\_index
    
    RoaringBitmap, INTEGER
    
    BIGINT
    
    Returns the index of which the element in the roaring bitmap data starts from 0. If the element does not exist, -1 is returned.
    
    **Note**
    
    Only Hologres V1.3.16 and later support this function.
    
    `rb_index(rb_build('{1,2,3}'),3)`
    
    rb\_and\_null2empty
    
    RoaringBitmap, RoaringBitmap
    
    RoaringBitmap
    
    Performs an AND operation. If the value of an input parameter is null, the function considers the parameter value as empty.
    
    **Note**
    
    Only Hologres V1.1.42 and later support this function.
    
    `rb_and_null2empty(rb_build(null),rb_build('{3,4,5}'))`
    
    rb\_or\_null2empty
    
    RoaringBitmap, RoaringBitmap
    
    RoaringBitmap
    
    Performs an OR operation. If the value of an input parameter is null, the function considers the parameter value as empty.
    
    **Note**
    
    Only Hologres V1.1.42 and later support this function.
    
    `rb_or_null2empty(rb_build(null),rb_build('{3,4,5}'))`
    
    rb\_andnot\_null2empty
    
    RoaringBitmap, RoaringBitmap
    
    RoaringBitmap
    
    Performs an ANDNOT operation. If the value of an input parameter is null, the function considers the parameter value as empty.
    
    **Note**
    
    Only Hologres V1.1.42 and later support this function.
    
    `rb_andnot_null2empty(rb_build(null),rb_build('{3,4,5}'))`
    
    rb\_and\_null2empty\_cardinality
    
    RoaringBitmap, RoaringBitmap
    
    INTEGER
    
    Calculates the cardinality by performing an AND operation on two roaring bitmaps. If the value of an input parameter is null, the function considers the parameter value as empty.
    
    **Note**
    
    Only Hologres V1.1.42 and later support this function.
    
    `rb_and_null2empty_cardinality(rb_build(null),rb_build('{3,4,5}'))`
    
    rb\_or\_null2empty\_cardinality
    
    RoaringBitmap, RoaringBitmap
    
    INTEGER
    
    Calculates the cardinality by performing an OR operation on two roaring bitmaps. If the value of an input parameter is null, the function considers the parameter value as empty.
    
    **Note**
    
    Only Hologres V1.1.42 and later support this function.
    
    `rb_or_null2empty_cardinality(rb_build(null),rb_build('{3,4,5}'))`
    
    rb\_xor\_cardinality
    
    RoaringBitmap, RoaringBitmap
    
    INTEGER
    
    Calculates the cardinality by performing an XOR operation on two roaring bitmaps.
    
    `rb_xor_cardinality(rb_build('{1,2,3}'),rb_build('{3,4,5}'))`
    
    rb\_andnot\_cardinality
    
    RoaringBitmap, RoaringBitmap
    
    INTEGER
    
    Calculates the cardinality by performing an ANDNOT operation on two roaring bitmaps.
    
    `rb_andnot_cardinality(rb_build('{1,2,3}'),rb_build('{3,4,5}'))`
    
    rb\_andnot\_null2empty\_cardinality
    
    RoaringBitmap, RoaringBitmap
    
    INTEGER
    
    Calculates the cardinality by performing an ANDNOT operation on two roaring bitmaps. If the value of an input parameter is null, the function considers the parameter value as empty.
    
    **Note**
    
    Only Hologres V1.1.42 and later support this function.
    
    `rb_andnot_null2empty_cardinality(rb_build(null),rb_build('{3,4,5}'))`
    
    rb\_is\_empty
    
    RoaringBitmap
    
    BOOLEAN
    
    Checks whether a roaring bitmap is empty.
    
    `rb_is_empty(rb_build('{1,2,3,4,5}'))`
    
    rb\_fill
    
    RoaringBitmap, BIGINT, BIGINT
    
    RoaringBitmap
    
    Fills in the specified range excluding the range end in a roaring bitmap.
    
    **Note**
    
    Only Hologres V1.3.16 and later support this function.
    
    `rb_fill(rb_build('{1,2,3}'), 5, 7)`
    
    rb\_clear
    
    RoaringBitmap, BIGINT, BIGINT
    
    RoaringBitmap
    
    Clears the specified range excluding the range end in a roaring bitmap.
    
    **Note**
    
    Only Hologres V1.3.16 and later support this function.
    
    `rb_clear(rb_build('{1,2,3}'), 2, 3)`
    
    rb\_contains\_bitmap
    
    RoaringBitmap, RoaringBitmap
    
    BOOLEAN
    
    Checks whether the first bitmap contains the second bitmap.
    
    `rb_contains(rb_build('{1,2,3}'),rb_build('{3}'))`
    
    rb\_flip
    
    RoaringBitmap,INTEGER,INTEGER
    
    RoaringBitmap
    
    Flips the specified offsets in a roaring bitmap.
    
    `rb_flip(rb_build('{1,2,3}'),2,3)`
    
    rb\_range\_cardinality
    
    RoaringBitmap, BIGINT, BIGINT
    
    BIGINT
    
    Returns the cardinality of the range from the start position (included) to the end position (not included). The start position is 1.
    
    **Note**
    
    Only Hologres V1.3.16 and later support this function.
    
    `rb_range_cardinality(rb_build('{1,2,3}'), 2, 3)`
    
    rb\_rank
    
    RoaringBitmap,INTEGER
    
    INTEGER
    
    Returns the number of elements that are less than or equal to a specific offset in a roaring bitmap.
    
    `rb_rank(rb_build('{1,2,3}'),3)`
    
    rb\_jaccard\_dist
    
    RoaringBitmap, RoaringBitmap
    
    DOUBLE PRECISION
    
    Returns the Jaccard distance or the Jaccard similarity coefficient between two roaring bitmaps.
    
    **Note**
    
    Only Hologres V1.3.16 and later support this function.
    
    `rb_jaccard_dist(rb_build('{1,2,3}'), rb_build('{3,4}'))`
    
    rb\_select
    
    RoaringBitmap, bitset\_limit bigint, bitset\_offset bigint=0, reverse boolean=false, range\_start bigint=-2147483648, range\_end bigint=2147483647
    
    RoaringBitmap
    
    Returns the \[bitset\_offset,bitset\_offset+bitset\_limit) subset of the \[range\_start,range\_end) range in a roaring bitmap.
    
    rb\_select(rb\_build('{1,2,3,4,5,6,7,8,9}'), 5, 2)
    
    rb\_iterate
    
    RoaringBitmap
    
    Set of Integer
    
    Returns a list of offsets from a roaring bitmap.
    
    `rb_iterate(rb_build('{1,2,3}'))`
    

## Roaring bitmap aggregate functions

-   Functions that support processing data of the RoaringBitmap and RoaringBitmap64 types
    
    **Function**
    
    **Input type**
    
    **Output type**
    
    **Description**
    
    **Example**
    
    rb\_or\_agg
    
    RoaringBitmap | RoaringBitmap64
    
    Same as the input type
    
    Performs an OR aggregate operation.
    
    `rb_or_agg(rb_build('{1,2,3}'))`
    
    rb\_and\_agg
    
    RoaringBitmap | RoaringBitmap64
    
    Same as the input type
    
    Performs an AND aggregate operation.
    
    `rb_and_agg(rb_build('{1,2,3}'))`
    
    rb\_or\_cardinality\_agg
    
    RoaringBitmap | RoaringBitmap64
    
    INTEGER
    
    Calculates the cardinality from an OR aggregate operation on two roaring bitmaps.
    
    `rb_or_cardinality_agg(rb_build('{1,2,3}'))`
    
    rb\_and\_cardinality\_agg
    
    RoaringBitmap | RoaringBitmap64
    
    INTEGER
    
    Calculates the cardinality from an AND aggregate operation on two roaring bitmaps.
    
    `rb_and_cardinality_agg(rb_build('{1,2,3}'))`
    
-   Functions that support processing only data of the RoaringBitmap type
    
    **Function**
    
    **Input type**
    
    **Output type**
    
    **Description**
    
    **Example**
    
    rb\_xor\_agg
    
    RoaringBitmap
    
    RoaringBitmap
    
    Performs an XOR aggregate operation.
    
    `rb_xor_agg(rb_build('{1,2,3}'))`
    
    rb\_xor\_cardinality\_agg
    
    RoaringBitmap
    
    INTEGER
    
    Calculates the cardinality from an XOR aggregate operation on two roaring bitmaps.
    
    `rb_xor_cardinality_agg(rb_build('{1,2,3}'))`
    

## Other roaring bitmap functions

The following functions support processing only data of the RoaringBitmap type.

**Function**

**Input type**

**Output type**

**Description**

**Example**

roaringbitmap\_text

TEXT, BOOLEAN

RoaringBitmap

Deserializes binary RoaringBitmap data of TEXT type into a RoaringBitmap structure. The second parameter indicates whether to verify the format. We recommend that you set this parameter to true. Otherwise, invalid bitmap data will be returned.

`roaringbitmap_text(':0', true)`

rb\_to\_text

RoaringBitmap

TEXT

Converts a RoaringBitmap structure to binary RoaringBitmap data of TEXT type for output.

`rb_to_text(rb_build('{1,2,3}'))`

## Examples

The following examples describe how to use roaring bitmap functions.

1.  Install an extension.
    
    ```
    CREATE EXTENSION roaringbitmap;
    ```
    
2.  Create a table that is used to store roaring bitmap data.
    
    ```
    -- Create a table named t1.
    CREATE TABLE public.t1 (id integer, bitmap roaringbitmap);
    ```
    
3.  Use the rb\_build function to insert roaring bitmap data into the table.
    
    ```
    -- Set the bit value of an array to 1.
    INSERT INTO public.t1 SELECT 1,RB_BUILD(ARRAY[1,2,3,4,5,6,7,8,9,200]);
    
    -- Set the bit values of multiple elements to 1 and aggregate the bit values into a roaring bitmap.  
    INSERT INTO public.t1 SELECT 2,RB_BUILD_AGG(e) FROM GENERATE_SERIES(1,100) e;
    ```
    
4.  Perform bitwise operations such as OR, AND, XOR, and ANDNOT.
    
    ```
    SELECT  RB_OR(a.bitmap,b.bitmap)
    FROM    (
                SELECT  bitmap
                FROM    public.t1
                WHERE   id = 1
            ) AS a
            ,(
                SELECT  bitmap
                FROM    public.t1
                WHERE   id = 2
            ) AS b
    ;
    ```
    
5.  Perform bitwise aggregate operations such as OR, AND, XOR, and BUILD to generate a new roaring bitmap.
    
    ```
    SELECT RB_OR_AGG(bitmap) FROM public.t1;
    SELECT RB_AND_AGG(bitmap) FROM public.t1;
    SELECT RB_XOR_AGG(bitmap) FROM public.t1;
    SELECT RB_BUILD_AGG(id) FROM public.t1;
    ```
    
6.  Calculate the cardinality of the roaring bitmap. The cardinality is the number of bits that are set to 1 in the roaring bitmap.
    
    ```
    SELECT RB_CARDINALITY(bitmap) FROM public.t1;
    ```
    
7.  Obtain the subscripts of the bits that are set to 1.
    
    ```
    SELECT RB_ITERATE(bitmap) FROM public.t1 WHERE id = 1;
    ```
    
8.  Convert a roaring bitmap into an array.
    
    ```
    SELECT RB_TO_ARRAY(bitmap) FROM public.t1 WHERE id = 1;
    ```
