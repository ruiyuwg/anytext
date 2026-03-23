This topic describes how to use bit-sliced index (BSI) functions in Hologres. BSI functions are extension functions of Hologres.

## **How it works**

The BSI technique is used to compress key-value pairs that are in the `cid::int, value::bigint` format. The following table provides sample data to help you better understand the principle and structure of a BSI.

**cid**

**value (decimal)**

**value (binary)**

1

3

0011

2

6

0110

3

4

0100

4

10

1010

5

7

0111

6

NULL

\-

The sample table contains a cid column and two value columns. The maximum decimal value is 10, which corresponds to a 4-bit binary value. All decimal values are converted into 4-bit binary values. The binary data is traversed from the low bit to the high bit. The roaring bitmap of each cid array whose bit value is 1 is recorded to form a **BSI**. The BSI with the following slices is generated based on the sample data:

-   slice 0: roaringbitmap '{1,5}'
    
-   slice 1: roaringbitmap '{1,2,4,5}'
    
-   slice 2: roaringbitmap '{2,3,5}'
    
-   slice 3: roaringbitmap '{4}'
    

A BSI also contains the following information:

-   Existence bitmap (EBM): the roaring bitmap that stores a non-empty cid array. In this example, roaringbitmap '{1,2,3,4,5}' is used.
    
-   max: the maximum value. In this example, the value is 10.
    
-   min: the minimum value. In this example, the value is 3.
    
-   bitCount: the number of bits of binary values that are converted from decimal values. In this example, the value is 4.
    

If bitmap operations are performed on the sample data by using roaring bitmaps, and the selection result of a crowd is crowd='{1,3,5}', you can use BSI functions to quickly obtain the calculation result. Examples:

-   Calculate the sum of the values of the selected crowd: `rb_and_cardinality(crowd, slice0) × 20 + ... + rb_and_cardinality(crowd, slice3) × 23 = 14`
    
-   Calculate the top 2 values of the selected crowd:
    
    ```
    crowd & slice3 = NULL
    crowd & slice2 = {3,5} -- The top 2 values are {3,5}.
    {3,5} & slice1 = {5} -- The top 1 value is {5}.
    ```
    

You can use the BSI algorithm to compress key-value pairs for storage. The roaring bitmap calculation of cids is combined with the calculation of values to improve the computing efficiency for user profile analysis scenarios in which both attribute tags and behavior tags are used. For more information about user profile analysis based on BSI functions, see [BSI (beta)](/help/en/hologres/use-cases/profile-analysis-bsi-optimization-beta).

## **Limits**

-   Only Hologres V2.1 and later support BSI functions. If your Hologres instance version is earlier than V2.1, upgrade your instance. For more information, see [Upgrade instances](/help/en/hologres/user-guide/instance-upgrades).
    
-   Each value in a BSI function must be an integer from 1 to 231 minus 1.
    
-   The superuser must execute the following statements to create two extensions. The extensions must be created at the database level. You need to create the extensions for a database only once.
    
    ```
    -- Create extensions. Before you create a BSI, you must create roaring bitmaps.
    CREATE EXTENSION roaringbitmap;
    CREATE EXTENSION bsi;
    
    -- Drop the extensions.
    DROP EXTENSION bsi;
    DROP EXTENSION roaringbitmap;
    ```
    
    **Important**
    
    We recommend that you do not execute the `DROP EXTENSION <extension_name> CASCADE;` statement to drop an extension. The CASCADE statement drops not only the specified extension but also the extension data and the objects that depend on the extension. The extension data includes the PostGIS data, roaring bitmap data, Proxima data, binary log data, and BSI data. The objects include metadata, tables, views, and server data.
    

## **Functions**

### **BSI constructors**

**Function**

**Input data type**

**Output data type**

**Description**

**Example**

**Returned result**

bsi\_build

integer\[\], bigint\[\]

bsi

Creates a BSI based on two one-dimensional data entries.

```
SELECT bsi_iterate(bsi_build('{1,2,3}','{2,4,6}'));
```

```
{1,2}
{2,4}
{3,6}
```

bsi\_add\_value

bsi, integer, bigint

bsi

Adds a key-value pair to the BSI.

```
SELECT bsi_iterate(bsi_add_value(bsi_build('{1,2,3}','{2,4,6}'),4,8));
```

```
{1,2}
{2,4}
{3,6}
{4,8}
```

### **BSI expansion functions**

**Function**

**Input data type**

**Output data type**

**Description**

**Example**

**Returned result**

bsi\_iterate

bsi

set of integer\[\]

Expands a BSI into key-value pairs.

```
SELECT bsi_iterate(bsi_build('{1,2,3}','{2,4,6}'));
```

```
{1,2}
{2,4}
{3,6}
```

bsi\_show

bsi/bytea, integer

text

Expands a BSI into key-value pairs and displays the first N key-value pairs. N is an integer.

```
SELECT bsi_show(bsi_build('{1,2,3}','{2,4,6}'),2);
```

```
1=2,2=4...left 1
```

### **BSI query functions**

**Function**

**Input data type**

**Output data type**

**Description**

**Example**

**Returned result**

bsi\_ebm

bsi/bytea

roaringbitmap

Queries the roaring bitmap of the EBM array of a BSI.

```
SELECT rb_to_array(bsi_ebm(bsi_build('{1,2,3}','{2,4,6}')));
```

```
{1,2,3}
```

bsi\_eq

bsi, bigint \[, bytea\]

roaringbitmap

Queries the part whose first input parameter of the BSI type is equal to the second input parameter of the BIGINT type and returns the roaring bitmap of the EBM array.

If the third input parameter is configured and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the third input parameter of the BYTEA type and then performs a comparison.

```
SELECT rb_to_array(bsi_eq(bsi_build('{1,2,3,4}','{2,4,4,8}'),4));
```

```
{2,3}
```

bsi\_filter

bsi/bytea, bytea

bsi

Queries the intersection between the EBM array of the first input parameter of the BSI type and the second input parameter of the BYTEA type and then returns a new BSI.

```
SELECT bsi_iterate(bsi_filter(bsi_build('{1,2,3}','{2,4,6}'),rb_build('{1,2}')));
```

```
{1,2}
{2,4}
```

bsi\_ge

bsi, bigint \[, bytea\]

roaringbitmap

Queries the part of the first input parameter value of the BSI type that is greater than or equal to the second input parameter value of the BIGINT type, and then returns a value of the roaring bitmap type that contains EBM arrays.

If the third input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the third input parameter of the BYTEA type and then performs a comparison.

```
SELECT rb_to_array(bsi_ge(bsi_build('{1,2,3,4}','{2,4,4,8}'),4));
```

```
{2,3,4}
```

bsi\_gt

bsi, bigint \[, bytea\]

roaringbitmap

Queries the part of the first input parameter value of the BSI type that is greater than the second input parameter value of the BIGINT type and then returns a value of the roaring bitmap type that contains EBM arrays.

If the third input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the third input parameter of the BYTEA type and then performs a comparison.

```
SELECT rb_to_array(bsi_gt(bsi_build('{1,2,3,4}','{2,4,4,8}'),4));
```

```
{4}
```

bsi\_le

bsi, bigint \[, bytea\]

roaringbitmap

Queries the part of the first input parameter value of the BSI type that is less than or equal to the second input parameter value of the BIGINT type and then returns a value of the roaring bitmap type that contains EBM arrays.

If the third input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the third input parameter of the BYTEA type and then performs a comparison.

```
SELECT rb_to_array(bsi_le(bsi_build('{1,2,3,4}','{2,4,4,8}'),4));
```

```
{1,2,3}
```

bsi\_lt

bsi, bigint \[, bytea\]

roaringbitmap

Queries the part of the first input parameter value of the BSI type that is less than the second input parameter value of the BIGINT type, and then returns a value of the roaring bitmap type that contains EBM arrays.

If the third input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the third input parameter of the BYTEA type and then performs a comparison.

```
SELECT rb_to_array(bsi_lt(bsi_build('{1,2,3,4}','{2,4,4,8}'),4));
```

```
{1}
```

bsi\_neq

bsi, bigint \[, bytea\]

roaringbitmap

Queries the part of the first input parameter value of the BSI type that is not equal to the second input parameter value of the BIGINT type, and returns a value of the roaring bitmap type that contains EBM arrays.

If the third input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the third input parameter of the BYTEA type and then performs a comparison.

```
SELECT rb_to_array(bsi_neq(bsi_build('{1,2,3,4}','{2,4,4,8}'),4));
```

```
{1,4}
```

bsi\_range

bsi, bigint, bigint \[, bytea\]

roaringbitmap

Queries the part of the first input parameter of the BSI type that is between the second and third input parameter values of the BIGINT type, and then returns a value of the roaring bitmap type that contains EBM arrays.

If the third input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the third input parameter of the BYTEA type and then performs a comparison.

```
SELECT rb_to_array(bsi_range(bsi_build('{1,2,3,4}','{2,4,4,8}'),3,5));
```

```
{2,3}
```

bsi\_compare

text, bsi, \[bytea,\] bigint, bigint

roaringbitmap

Compares and filters BSIs.

-   The first input parameter of the TEXT type specifies the comparison type. Valid values: LT, LE, GT, GE, EQ, NEQ, and RANGE.
    
-   The third parameter is of the BYTEA type and is optional. The third parameter is used to filter BSIs.
    
-   The fourth and fifth parameters of the BIGINT type specify the values for comparison. Two input parameters of the BIGINT type are required only for RANGE-based comparisons.
    

```
SELECT rb_to_array(bsi_compare('RANGE',bsi_build('{1,2,3,4}','{2,4,4,8}'),3,5));
```

```
{2,3}
```

### **BSI aggregate and analytic functions**

**Function**

**Input data type**

**Output data type**

**Description**

**Example**

**Returned result**

bsi\_add

bsi, bsi

bsi

Queries the same EBM arrays of the two input parameters of the BSI type, adds the values of the EBM arrays, and then returns a new BSI.

```
SELECT bsi_iterate(bsi_add(bsi_build('{1,2,3}','{2,4,6}'),bsi_build('{1,2}','{2,4}')));
```

```
{1,4}
{2,8}
{3,6}
```

bsi\_add\_agg

bsi

bsi

Performs addition and aggregate operations.

```
SELECT bsi_iterate(bsi_add_agg(bsi_build('{1,2,3}','{2,4,6}')));
```

```
{1,2}
{2,4}
{3,6}
```

bsi\_merge

bsi, bsi

bsi

Merges two BSIs. The EBM arrays of the two BSIs do not have an intersection.

```
SELECT bsi_iterate(bsi_merge(bsi_build('{1,2}','{2,4}'),bsi_build('{3,4}','{6,8}')));
```

```
{1,2}
{2,4}
{3,6}
{4,8}
```

bsi\_merge\_agg

bsi

bsi

Merges aggregate results. The EBM arrays of the input BSI do not have an intersection.

```
SELECT bsi_iterate(bsi_merge_agg(bsi_build('{1,2,3}','{2,4,6}')));
```

```
{1,2}
{2,4}
{3,6}
```

bsi\_stat

bigint\[\], bsi/bytea \[, bytea\]

text

Queries the distribution statistics of BSI values. The distribution interval is split based on the input boundary value array.

If the third input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the second input parameter of the BSI type and the third input parameter of the BYTEA type and then queries the distribution statistics.

```
SELECT bsi_stat('{1,3,5}',bsi_build('{1,2,3,4}','{2,4,6,8}'));
```

```
(0,1]=0;(1,3]=1;(3,5]=1;(5,8]=2
```

bsi\_sum

bsi/bytea \[, bytea\]

bigint\[\]

Returns an array that contains the sum of BSI values and EBM cardinality.

If the second input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the second input parameter of the BYTEA type and then calculates the sum and cardinality.

```
SELECT bsi_sum(bsi_build('{1,2,3,4}','{2,4,6,8}'));
```

```
{20,4}
```

bsi\_topk

bsi/bytea, \[bytea, \] integer

roaringbitmap

Queries the EBM array that corresponds to the top K largest BSI values and returns the roaring bitmap that consists of the EBM array.

If the second input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the second input parameter of the BYTEA type and then calculates the top K largest BSI values.

```
SELECT rb_to_array(bsi_topk(bsi_build('{1,2,3,4,5}','{2,4,6,8,10}'),3));
```

```
{3,4,5}
```

bsi\_transpose

bsi/bytea \[, bytea\]

roaringbitmap

Returns the transposition result of a BSI, which is a value of the roaring bitmap type after deduplication.

If the second input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the second input parameter of the BYTEA type and then performs transposition.

```
SELECT rb_to_array(bsi_transpose(bsi_build('{1,2,3,4,5}','{2,4,4,8,8}')));
```

```
{2,4,8}
```

bsi\_transpose\_with\_count

bsi/bytea \[, bytea\]

bsi

Transposes a value of the BSI type, collects statistics, and returns a new BSI.

If the second input parameter is specified and is of the BYTEA type that is serialized from the roaring bitmap type, this function queries the intersection between the EBM array of the first input parameter of the BSI type and the second input parameter of the BYTEA type and then performs transposition and collects statistics.

```
SELECT bsi_iterate(bsi_transpose_with_count(bsi_build('{1,2,3,4,5}','{2,4,4,8,8}')));
```

```
{2,1}
{4,2}
{8,2}
```
