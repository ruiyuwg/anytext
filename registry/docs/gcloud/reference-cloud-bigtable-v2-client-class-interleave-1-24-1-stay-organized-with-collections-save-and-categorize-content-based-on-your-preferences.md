-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class Interleave (1.24.1) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class Interleave.

A RowFilter which sends each row to each of several component RowFilters and interleaves the results.

Generated from protobuf message `google.bigtable.v2.RowFilter.Interleave`

## Namespace

Google \\ Cloud \\ Bigtable \\ V2 \\ RowFilter

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ filters`

`array<[Google\Cloud\Bigtable\V2\RowFilter](/php/docs/reference/cloud-bigtable/1.24.1/V2.RowFilter)>`  

The elements of "filters" all process a copy of the input row, and the results are pooled, sorted, and combined into a single output row. If multiple cells are produced with the same column and timestamp, they will all appear in the output row in an unspecified mutual order. Consider the following example, with three filters: input row | ----------------------------------------------------- | | | f(0) f(1) f(2) | | | 1: foo,bar,10,x foo,bar,10,z far,bar,7,a 2: foo,blah,11,z far,blah,5,x far,blah,5,x | | | ----------------------------------------------------- | 1: foo,bar,10,z // could have switched with #2 2: foo,bar,10,x // could have switched with #1 3: foo,blah,11,z 4: far,bar,7,a 5: far,blah,5,x // identical to #6 6: far,blah,5,x // identical to #5 All interleaved filters are executed atomically.

### getFilters

The elements of "filters" all process a copy of the input row, and the results are pooled, sorted, and combined into a single output row.

If multiple cells are produced with the same column and timestamp, they will all appear in the output row in an unspecified mutual order. Consider the following example, with three filters: input row

## |

       ```
       |                         |                         |
      f(0)                      f(1)                      f(2)
       |                         |                         |
1: foo,bar,10,x             foo,bar,10,z              far,bar,7,a
2: foo,blah,11,z            far,blah,5,x              far,blah,5,x
       |                         |                         |
       -----------------------------------------------------
                                 |
1:                      foo,bar,10,z   // could have switched with #2
2:                      foo,bar,10,x   // could have switched with #1
3:                      foo,blah,11,z
4:                      far,bar,7,a
5:                      far,blah,5,x   // identical to #6
6:                      far,blah,5,x   // identical to #5
```

All interleaved filters are executed atomically.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setFilters

The elements of "filters" all process a copy of the input row, and the results are pooled, sorted, and combined into a single output row.

If multiple cells are produced with the same column and timestamp, they will all appear in the output row in an unspecified mutual order. Consider the following example, with three filters: input row

## |

       ```
       |                         |                         |
      f(0)                      f(1)                      f(2)
       |                         |                         |
1: foo,bar,10,x             foo,bar,10,z              far,bar,7,a
2: foo,blah,11,z            far,blah,5,x              far,blah,5,x
       |                         |                         |
       -----------------------------------------------------
                                 |
1:                      foo,bar,10,z   // could have switched with #2
2:                      foo,bar,10,x   // could have switched with #1
3:                      foo,blah,11,z
4:                      far,bar,7,a
5:                      far,blah,5,x   // identical to #6
6:                      far,blah,5,x   // identical to #5
```

All interleaved filters are executed atomically.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Bigtable\V2\RowFilter](/php/docs/reference/cloud-bigtable/1.24.1/V2.RowFilter)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
