TairCpc is a data structure developed based on the compressed probability counting (CPC) sketch. It enables high-performance computing on sampled data while using minimal memory.

## Background information

In real-time decision-making scenarios involving big data, the real-time computing system processes incoming business logs, the online storage system stores the processing results, and the real-time rule-based or decision-making system makes decisions. Sample scenarios:

-   Prevention and control of credit card fraud: In this scenario, your systems must determine whether a credit card is used in a safe environment and stop suspicious transactions at the earliest opportunity.
    
-   Prevention and control of ticket scalping: In this scenario, your systems must identify and stop activities in real time that use virtual devices and fake IP addresses to undermine platform interests.
    

In these cases, you can use TairCpc to deduplicate real-time data by dimension and store the data in a structured format in Tair databases. These operations allow fast access to data and integration of storage and computing. TairCpc also supports multiple aggregation operations to aggregate data within nanoseconds and provide real-time risk control.

## Overview

[CPC](https://arxiv.org/abs/1708.06839) is a high-performance data deduplication algorithm that counts different values as data streams. It allows you to combine data blocks and deduplicate them to obtain a total number. CPC achieves the same level of accuracy as HLL with about 40% less memory.

Developed based on open source CPC, TairCpc reduces the error rate to 0.008%, compared to 0.67% of open source CPC and 1.95% of HLL.

**Main features**

-   Low memory usage, incremental reads and writes, and minimal I/O
    
-   High-performance and ultra-high-accuracy deduplication
    
-   Reduced stable error rate
    

**Typical scenarios**

-   Security systems for banks
    
-   Flash sales
    
-   Prevention and control of ticket scalping
    

## Prerequisites

The instance is of one of the following Tair series types:

-   [DRAM-based](/help/en/redis/product-overview/dram-based-instances). If the instance is compatible with Redis 5.0, the minor version of the instance must be 1.7.20 or later.
    
-   [Persistent memory-optimized](/help/en/redis/product-overview/persistent-memory-optimized-instances-1) instance whose minor version is 1.2.3.3 or later
    

**Note**

The latest minor version provides more features and higher stability. We recommend that you update the instance to the latest minor version. For more information, see [Update the minor version of an instance](/help/en/redis/user-guide/update-the-minor-version). If your instance is a cluster instance or read/write splitting instance, we recommend that you update the proxy nodes in the instance to the latest minor version to ensure that all commands can be run as expected.

## Precautions

The TairCpc data you want to manage is stored on a Tair instance.

## Supported commands

Table 1. TairCpc commands

**Command**

**Syntax**

**Description**

[CPC.UPDATE](#section-yea-ji8-dm1)

`CPC.UPDATE _key item_ [EX|EXAT|PX|PXAT _time_]`

Adds an item to the specified TairCpc key. If the key does not exist, the key is created. If the item already exists in the key, the item is not added.

[CPC.ESTIMATE](#section-zau-qfg-zh7)

`CPC.ESTIMATE _ke_y`

Retrieves the cardinality estimate of the specified TairCpc key after deduplication. The return value is of the DOUBLE type, but you can ignore the decimals and round it to the nearest integer.

[CPC.UPDATE2EST](#section-f1w-7nx-98g)

`CPC.UPDATE2EST _key item_ [EX|EXAT|PX|PXAT _time_]`

Adds an item to the specified TairCpc key and returns the updated cardinality estimate of the key. If the key does not exist, the key is created.

[CPC.UPDATE2JUD](#section-pny-jzo-4of)

`CPC.UPDATE2JUD _key item_ [EX|EXAT|PX|PXAT _time_]`

Adds an item to the specified TairCpc key and returns the new cardinality estimate of the key after the update and the difference between the original and new estimates. If a difference of 1 is returned, the item is added and no duplication exists. If a difference of 0 is returned, the item already exists. If the key does not exist, the key is created.

[CPC.ARRAY.UPDATE](#section-n9h-v3x-7xi)

`CPC.ARRAY.UPDATE _key timestamp item_ [EX|EXAT|PX|PXAT _time_] [SIZE _size_] [WIN _window_length_]`

Adds an item to the specified TairCpc key within the time window to which the specified timestamp belongs. If the key does not exist, the key is created. `SIZE` indicates the number of time windows, and `WIN` indicates the length of each time window. The length is measured in milliseconds. The key is updated as data streams are added to the key. During this process, data that is generated during a time-window range is saved. The time-window range is calculated by using the following formula: Time-window range = `SIZE` \* `WIN`. Data that is generated outside of this time-window range is overwritten and deleted. `SIZE` and `WIN` are valid only at the point in time when the key is created.

**Note**

For example, if you want to calculate the amount of data in the key that was generated per minute in the previous 10 minutes, you can set `SIZE` to 10 (10 time windows) and `WIN` to 60000 (1 minute for each time window). In this case, if you write the data that was generated during the 11th minute to the key, the data that was generated during the first minute is overwritten and deleted.

[CPC.ARRAY.ESTIMATE](#section-vvf-b68-5ce)

`CPC.ARRAY.ESTIMATE _key timestamp_`

Retrieves the cardinality estimate of the specified TairCpc key within the time window to which the specified timestamp belongs.

[CPC.ARRAY.ESTIMATE.RANGE](#section-oam-tzi-yrm)

`CPC.ARRAY.ESTIMATE.RANGE _key start_time end_time_`

Retrieves the cardinality estimates of the specified TairCpc key across the time windows within the specified time range. The time range is a closed interval.

[CPC.ARRAY.ESTIMATE.RANGE.MERGE](#section-hwa-8m0-d47)

`CPC.ARRAY.ESTIMATE.RANGE.MERGE _key timestamp range_`

Retrieves the cardinality estimate of the specified TairCpc key after merging and deduplication from a specific point in time to the Nth time window backward. N is the value of the range parameter.

[CPC.ARRAY.UPDATE2EST](#section-qbd-ii8-jtp)

`CPC.ARRAY.UPDATE2EST _key timestamp item_ [EX|EXAT|PX|PXAT _time_] [SIZE _size_] [WIN _window_length_]`

Adds an item to the time window to which the specified timestamp belongs in the specified TairCpc key and returns the updated cardinality estimate of the key within the time window. If the key does not exist, the key is created. This command creates the key by using parameters consistent with those used for the [CPC.ARRAY.UPDATE](#section-n9h-v3x-7xi) command.

[CPC.ARRAY.UPDATE2JUD](#section-530-e40-bcv)

`CPC.ARRAY.UPDATE2JUD _key timestamp item_ [EX|EXAT|PX|PXAT _time_] [SIZE _size_] [WIN _window_length_]`

Adds an item to the time window to which the specified timestamp belongs in the specified TairCpc key and returns the updated cardinality estimate of the key within the time window and the difference between the original and updated estimates. If a difference of 1 is returned, the item is added and no duplication exists. If a difference of 0 is returned, the item already exists. If the key does not exist, the key is created. This command creates the key by using parameters consistent with those used for the [CPC.ARRAY.UPDATE](#section-n9h-v3x-7xi) command.

[DEL](https://valkey.io/commands/del/)

`DEL key [key ...]`

Deletes one or more TairCpc keys.

**Note**

The following list describes the conventions for the command syntax used in this topic:

-   `Uppercase keyword`: indicates the command keyword.
    
-   `_Italic text_`: indicates variables.
    
-   `[options]`: indicates that the enclosed parameters are optional. Parameters that are not enclosed by brackets must be specified.
    
-   `A|B`: indicates that the parameters separated by the vertical bars (|) are mutually exclusive. Only one of the parameters can be specified.
    
-   `...`: indicates that the parameter preceding this symbol can be repeatedly specified.
    

## CPC.UPDATE

**Item**

**Description**

Syntax

`CPC.UPDATE _key item_ [EX|EXAT|PX|PXAT _time_]`

Time complexity

O(1)

Command description

Adds an item to the specified TairCpc key. If the key does not exist, the key is created. If the item already exists in the key, the item is not added.

Parameter

-   key: the name of the TairCpc key that you want to manage by running this command.
    
-   item: the item that you want to add.
    
-   EX: the relative expiration time of the key. Unit: seconds. If this parameter is not specified, the key does not expire.
    
-   EXAT: the absolute expiration time of the key. Unit: seconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    
-   PX: the relative expiration time of the key. Unit: milliseconds. If this parameter is not specified, the key does not expire.
    
-   PXAT: the absolute expiration time of the key. Unit: milliseconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    

Output

-   If the operation is successful, OK is returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.UPDATE foo f1 EX 3600
```

Sample output:

```
OK
```

  

## CPC.ESTIMATE

**Item**

**Description**

Syntax

`CPC.ESTIMATE _ke_y`

Time complexity

O(1)

Command description

Retrieves the cardinality estimate of the specified TairCpc key after deduplication. The return value is of the DOUBLE type, but you can ignore the decimals and round it to the nearest integer.

Parameter

-   key: the name of the TairCpc key.
    

Output

-   If the operation is successful, the DOUBLE-type estimate is returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.ESTIMATE foo
```

Sample output:

```
"19.000027716212127"
```

## CPC.UPDATE2EST

**Item**

**Description**

Syntax

`CPC.UPDATE2EST _key item_ [EX|EXAT|PX|PXAT _time_]`

Time complexity

O(1)

Command description

Adds an item to the specified TairCpc key and returns the updated cardinality estimate of the key. If the key does not exist, the key is created.

Parameter

-   key: the name of the TairCpc key that you want to manage by running this command.
    
-   item: the item that you want to add.
    
-   EX: the relative expiration time of the key. Unit: seconds. If this parameter is not specified, the key does not expire.
    
-   EXAT: the absolute expiration time of the key. Unit: seconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    
-   PX: the relative expiration time of the key. Unit: milliseconds. If this parameter is not specified, the key does not expire.
    
-   PXAT: the absolute expiration time of the key. Unit: milliseconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    

Output

-   If the operation is successful, the DOUBLE-type estimate after the update is returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.UPDATE2EST foo f3
```

Sample output:

```
"3.0000004768373003"
```

## CPC.UPDATE2JUD

**Item**

**Description**

Syntax

`CPC.UPDATE2JUD _key item_ [EX|EXAT|PX|PXAT _time_]`

Time complexity

O(1)

Command description

Adds an item to the specified TairCpc key and returns the new cardinality estimate of the key after the update and the difference between the original and new estimates. If a difference of 1 is returned, the item is added and no duplication exists. If a difference of 0 is returned, the item already exists. If the key does not exist, the key is created.

Parameter

-   key: the name of the TairCpc key that you want to manage by running this command.
    
-   item: the item that you want to add.
    
-   EX: the relative expiration time of the key. Unit: seconds. If this parameter is not specified, the key does not expire.
    
-   EXAT: the absolute expiration time of the key. Unit: seconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    
-   PX: the relative expiration time of the key. Unit: milliseconds. If this parameter is not specified, the key does not expire.
    
-   PXAT: the absolute expiration time of the key. Unit: milliseconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    

Output

-   If the operation is successful, the new estimate after the update and the difference between the original and new estimates are returned. The new estimate and the difference are both of the DOUBLE type.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.UPDATE2JUD foo f20
```

Sample output:

```
1) "20.000027716212127"    // The new cardinality estimate of the key after the update is 20.
2) "1.0000014901183398"    // 20 - 19 = 1
```

## CPC.ARRAY.UPDATE

**Item**

**Description**

Syntax

`CPC.ARRAY.UPDATE _key timestamp item_ [EX|EXAT|PX|PXAT _time_] [SIZE _size_] [WIN _window_length_]`

Time complexity

O(1)

Command description

Adds an item to the specified TairCpc key within the time window to which the specified timestamp belongs. If the key does not exist, the key is created. `SIZE` indicates the number of time windows, and `WIN` indicates the length of each time window. The length is measured in milliseconds. The key is updated as data streams are added to the key. During this process, data that is generated during a time-window range is saved. The time-window range is calculated by using the following formula: Time-window range = `SIZE` \* `WIN`. Data that is generated outside of this time-window range is overwritten and deleted. `SIZE` and `WIN` are valid only at the point in time when the key is created.

**Note**

For example, if you want to calculate the amount of data in the key that was generated per minute in the previous 10 minutes, you can set `SIZE` to 10 (10 time windows) and `WIN` to 60000 (1 minute for each time window). In this case, if you write the data that was generated during the 11th minute to the key, the data that was generated during the first minute is overwritten and deleted.

Parameter

-   key: the name of the TairCpc key that you want to manage by running this command.
    
-   timestamp: the UNIX timestamp. Unit: milliseconds.
    
-   item: the item that you want to add.
    
-   EX: the relative expiration time of the key. Unit: seconds. If this parameter is not specified, the key does not expire.
    
-   EXAT: the absolute expiration time of the key. Unit: seconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    
-   PX: the relative expiration time of the key. Unit: milliseconds. If this parameter is not specified, the key does not expire.
    
-   PXAT: the absolute expiration time of the key. Unit: milliseconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    
-   SIZE: the number of time windows. Default value: 10. Valid values: 1 to 1000. We recommend that you set this parameter to a value that is smaller than 120.
    
-   WIN: the length of each time window. Unit: milliseconds. Default value: 60000. 60000 milliseconds is equal to 1 minute.
    

Output

-   If the operation is successful, OK is returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.ARRAY.UPDATE foo 1645584510000 f1 SIZE 120 WIN 10000
```

Sample output:

```
OK
```

## CPC.ARRAY.ESTIMATE

**Item**

**Description**

Syntax

`CPC.ARRAY.ESTIMATE _key timestamp_`

Time complexity

O(1)

Command description

Retrieves the cardinality estimate of the specified TairCpc key within the time window to which the specified timestamp belongs.

Parameter

-   key: the name of the TairCpc key that you want to manage by running this command.
    
-   timestamp: the UNIX timestamp. Unit: milliseconds.
    

Output

-   If the operation is successful, the cardinality estimate of the key within the time window is returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.ARRAY.ESTIMATE foo 1645584532000
```

Sample output:

```
"2"
```

## CPC.ARRAY.ESTIMATE.RANGE

**Item**

**Description**

Syntax

`CPC.ARRAY.ESTIMATE.RANGE _key start_time end_time_`

Time complexity

O(1)

Command description

Retrieves the cardinality estimates of the specified TairCpc key across the time windows within the specified time range. The time range is a closed interval.

Options

-   key: the name of the TairCpc key that you want to manage by running this command.
    
-   start\_time: the beginning of the time range to query. Unit: milliseconds. The value must be a UNIX timestamp.
    
-   end\_time: the end of the time range to query. Unit: milliseconds. The value must be a UNIX timestamp.
    

Output

-   If the operation is successful, the cardinality estimates of the key within the time windows are returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.ARRAY.ESTIMATE.RANGE foo 1645584510000 1645584550000
```

Sample output:

```
1) "2"
2) "0"
3) "1"
4) "0"
5) "0"
```

## CPC.ARRAY.ESTIMATE.RANGE.MERGE

**Item**

**Description**

Syntax

`CPC.ARRAY.ESTIMATE.RANGE.MERGE _key timestamp range_`

Time complexity

O(1)

Command description

Retrieves the cardinality estimate of the specified TairCpc key after merging and deduplication from a specific point in time to the Nth time window backward. N is the value of the range parameter.

Parameter

-   key: the name of the TairCpc key that you want to manage by running this command.
    
-   timestamp: the beginning of the time range to query. Unit: milliseconds. The value must be a UNIX timestamp.
    
-   range: the number of time windows to query.
    

Output

-   If the operation is successful, the cardinality estimate of the key after deduplication in the specified time range is returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.ARRAY.ESTIMATE.RANGE.MERGE foo 1645584510000 3
```

Sample output:

```
"6"
```

## CPC.ARRAY.UPDATE2EST

**Item**

**Description**

Syntax

`CPC.ARRAY.UPDATE2EST _key timestamp item_ [EX|EXAT|PX|PXAT _time_] [SIZE _size_] [WIN _window_length_]`

Time complexity

O(1)

Command description

Adds an item to the time window to which the specified timestamp belongs in the specified TairCpc key and returns the updated cardinality estimate of the key within the time window. If the key does not exist, the key is created. This command creates the key by using parameters consistent with those used for the [CPC.ARRAY.UPDATE](#section-n9h-v3x-7xi) command.

Parameter

-   key: the name of the TairCpc key that you want to manage by running this command.
    
-   timestamp: the UNIX timestamp. Unit: milliseconds.
    
-   item: the item that you want to add.
    
-   EX: the relative expiration time of the key. Unit: seconds. If this parameter is not specified, the key does not expire.
    
-   EXAT: the absolute expiration time of the key. Unit: seconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    
-   PX: the relative expiration time of the key. Unit: milliseconds. If this parameter is not specified, the key does not expire.
    
-   PXAT: the absolute expiration time of the key. Unit: milliseconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    
-   SIZE: the number of time windows. Default value: 10. Valid values: 1 to 1000. We recommend that you set this parameter to a value that is smaller than 120.
    
-   WIN: the length of each time window. Unit: milliseconds. Default value: 60000. 60000 milliseconds is equal to 1 minute.
    

Output

-   If the operation is successful, the new cardinality estimate of the key after the update within the time window is returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.ARRAY.UPDATE2EST foo 1645584530000 f3
```

Sample output:

```
"3"
```

## CPC.ARRAY.UPDATE2JUD

**Item**

**Description**

Syntax

`CPC.ARRAY.UPDATE2JUD _key timestamp item_ [EX|EXAT|PX|PXAT _time_] [SIZE _size_] [WIN _window_length_]`

Time complexity

O(1)

Command description

Adds an item to the time window to which the specified timestamp belongs in the specified TairCpc key and returns the updated cardinality estimate of the key within the time window and the difference between the original and updated estimates. If a difference of 1 is returned, the item is added and no duplication exists. If a difference of 0 is returned, the item already exists. If the key does not exist, the key is created. This command creates the key by using parameters consistent with those used for the [CPC.ARRAY.UPDATE](#section-n9h-v3x-7xi) command.

Parameter

-   key: the name of the TairCpc key that you want to manage by running this command.
    
-   timestamp: the UNIX timestamp. Unit: milliseconds.
    
-   item: the item that you want to add.
    
-   EX: the relative expiration time of the key. Unit: seconds. If this parameter is not specified, the key does not expire.
    
-   EXAT: the absolute expiration time of the key. Unit: seconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    
-   PX: the relative expiration time of the key. Unit: milliseconds. If this parameter is not specified, the key does not expire.
    
-   PXAT: the absolute expiration time of the key. Unit: milliseconds. The value must be a UNIX timestamp. If this parameter is not specified, the key does not expire.
    
-   SIZE: the number of time windows. Default value: 10. Valid values: 1 to 1000. We recommend that you set this parameter to a value that is smaller than 120.
    
-   WIN: the length of each time window. Unit: milliseconds. Default value: 60000. 60000 milliseconds is equal to 1 minute.
    

Output

-   If the operation is successful, the new estimate after the update within the time window and the difference between the original and new estimates are returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
CPC.ARRAY.UPDATE2JUD foo 1645584530000 f7
```

Sample output:

```
1) "8"            // The new cardinality estimate of the key after the update is 8.
2) "1"            // 8 - 7 = 1
```
