TairHash (exHash) is a hash data structure that lets you set an expiration time and version for each field. This capability enhances the flexibility of the hash data structure and simplifies development in many scenarios.

## Introduction to TairHash

TairHash provides rich data interfaces and high performance, similar to Redis Hash. However, unlike Redis Hash, which only allows setting an expiration time at the key level, TairHash enables you to set an expiration time and version for each individual field. This significantly improves the flexibility of the hash data structure and streamlines development. TairHash uses an efficient Active Expire algorithm that checks for and deletes expired fields without noticeably affecting response time.

**Main features**

-   Set an expiration time and version for each field.
    
-   Supports efficient and flexible active and passive expiration policies for fields.
    
-   Uses syntax similar to the native Redis Hash data type.
    

This module is open source. For more information, see [TairHash](https://github.com/alibaba/TairHash).

## Prerequisites

The instance is Tair.

-   [Memory-optimized](/help/en/redis/product-overview/dram-based-instances)
    
-   [Persistent memory-optimized](/help/en/redis/product-overview/persistent-memory-optimized-instances-1) (minor version 1.2.6 or later)
    

**Note**

The latest minor version provides additional features and improved stability. Update your instance to the latest minor version. For more information, see [Minor version update](/help/en/redis/user-guide/update-the-minor-version). If your instance uses a cluster architecture or read/write splitting architecture, update the proxy nodes to the latest minor version. Otherwise, some commands may not be recognized.

## Precautions

The commands operate on TairHash data in a Tair instance.

## Commands

Table 1. TairHash commands

**Command**

**Syntax**

**Description**

[EXHSET](#section-hv7-qy7-uyv)

`EXHSET key field value [EX time] [EXAT time] [PX time] [PXAT time] [NX | XX] [VER | ABS version] [KEEPTTL]`

Adds a field to the specified TairHash key. If the key does not exist, a key is automatically created. If the field already exists, its value is overwritten.

[EXHGET](#section-f7u-x4v-2tb)

`EXHGET key field`

Gets the value of a field in the specified TairHash key. Returns nil if the key or field does not exist.

[EXHMSET](#section-968-uj1-h0u)

`EXHMSET key field value [field value ...]`

Adds multiple fields to the specified TairHash key. If the key does not exist, a key is automatically created. If a field already exists, its value is overwritten.

[EXHPEXPIREAT](#section-li7-8yw-tcz)

`EXHPEXPIREAT key field milliseconds-timestamp [VER | ABS version]`

Sets an absolute expiration time for a field in the specified TairHash key. The time is accurate to the millisecond.

[EXHPEXPIRE](#section-x7p-l5m-fcg)

`EXHPEXPIRE key field milliseconds [VER | ABS version]`

Sets a relative expiration time in milliseconds for a field in the specified TairHash key.

[EXHEXPIREAT](#section-4kw-v1m-3xq)

`EXHEXPIREAT key field timestamp [VER | ABS version]`

Sets an absolute expiration time for a field in the specified TairHash key. The time is accurate to the second.

[EXHEXPIRE](#section-fqo-r69-8h7)

`EXHEXPIRE key field seconds [VER | ABS version]`

Sets a relative expiration time in seconds for a field in the specified TairHash key.

[EXHPTTL](#section-9y3-i2f-ju3)

`EXHPTTL key field`

Gets the remaining TTL of a field in the specified TairHash key. The time is in milliseconds.

[EXHTTL](#section-h4z-kmk-q7f)

`EXHTTL key field`

Gets the remaining TTL of a field in the specified TairHash key. The time is in seconds.

[EXHVER](#section-ibd-0k6-ge5)

`EXHVER key field`

Gets the current version number of a field in the specified TairHash key.

[EXHSETVER](#section-iae-mes-v3w)

`EXHSETVER key field version`

Sets the version number of a field in the specified TairHash key.

[EXHINCRBY](#section-kaw-41f-vkc)

`EXHINCRBY key field num [EX time] [EXAT time] [PX time] [PXAT time] [VER | ABS version] [MIN minval] [MAX maxval] [KEEPTTL]`

Increments the integer value of a field in the specified TairHash key by a number. If the key does not exist, a key is automatically created. If the specified field does not exist, the field is created with a value of 0 before the increment operation.

**Note**

After you set a timeout for a field, if you run this command again on the field without specifying a timeout, the field is set to never expire.

[EXHINCRBYFLOAT](#section-tf8-p9n-f0a)

`EXHINCRBYFLOAT key field num [EX time] [EXAT time] [PX time] [PXAT time] [VER | ABS version] [MIN minval] [MAX maxval] [KEEPTTL]`

Increments the floating-point value of a field in the specified TairHash key by a number. If the key does not exist, a key is automatically created. If the specified field does not exist, the field is created with a value of 0 before the increment operation.

**Note**

After you set a timeout for a field, if you run this command again on the field without specifying a timeout, the field is set to never expire.

[EXHGETWITHVER](#section-kdp-tly-be4)

`EXHGETWITHVER key field`

Gets the value and version of a field in the specified TairHash key. Returns nil if the key or field does not exist.

[EXHMGET](#section-0aw-j4x-dze)

`EXHMGET key field [field ...]`

Gets the values of multiple fields in the specified TairHash key. Returns nil if the key or a field does not exist.

[EXHMGETWITHVER](#section-yru-dse-enn)

`EXHMGETWITHVER key field [field ...]`

Gets the values and versions of multiple fields in the specified TairHash key.

[EXHLEN](#section-u02-tx9-j8r)

`EXHLEN key [NOEXP]`

Gets the number of fields in the specified TairHash key. This command does not trigger passive eviction or filter out expired fields. Therefore, the result may include fields that have expired but have not been deleted. To return only the number of non-expired fields, specify the NOEXP option.

[EXHEXISTS](#section-fkd-njb-mxn)

`EXHEXISTS key field`

Checks whether the specified field exists in the TairHash key.

[EXHSTRLEN](#section-1eo-8to-7qq)

`EXHSTRLEN key field`

Gets the length of the value of a field in the specified TairHash key.

[EXHKEYS](#section-nvw-15x-rno)

`EXHKEYS key`

Gets all fields in the specified TairHash key.

[EXHVALS](#section-dei-ykx-s7c)

`EXHVALS key`

Gets the values of all fields in the specified TairHash key.

[EXHGETALL](#section-kcg-mwl-9jj)

`EXHGETALL key`

Gets all fields and their values in the specified TairHash key.

[EXHSCAN](#section-g70-zpa-g87)

`EXHSCAN key op subkey [MATCH pattern] [COUNT count]`

Scans the specified TairHash key.

**Note**

This command is supported only for memory-optimized instances.

[EXHDEL](#section-8bd-dkz-57q)

`EXHDEL key field [field ...]`

Deletes a field from the specified TairHash key. Returns 0 if the key or field does not exist. Returns 1 if the deletion is successful.

[DEL](https://valkey.io/commands/del/)

`DEL <key> [key ...]`

Deletes one or more TairHash keys using the native Redis DEL command.

**Note**

The following list describes the conventions for the command syntax used in this topic:

-   `Uppercase keyword`: indicates the command keyword.
    
-   `_Italic text_`: indicates variables.
    
-   `[options]`: indicates that the enclosed parameters are optional. Parameters that are not enclosed by brackets must be specified.
    
-   `A|B`: indicates that the parameters separated by the vertical bars (|) are mutually exclusive. Only one of the parameters can be specified.
    
-   `...`: indicates that the parameter preceding this symbol can be repeatedly specified.
    

## EXHSET

**Category**

**Description**

Syntax

`EXHSET key field value [EX time] [EXAT time] [PX time] [PXAT time] [NX | XX] [VER | ABS version] [KEEPTTL]`

time complexity

O(1)

Command description

Adds a field to the specified TairHash key. If the key does not exist, a key is automatically created. If the field already exists, its value is overwritten.

**Note**

-   After you set a timeout for a field, if you run this command again on the field without specifying a timeout, the field is set to never expire.
    
-   Use the EXPIRE or EXPIREAT command to set an expiration time for the key.
    

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    
-   value: The value of the field. A field can have only one value.
    
-   EX: The relative expiration time of the field, in seconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   EXAT: The absolute expiration time of the field, in seconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   PX: The relative expiration time of the field, in milliseconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   PXAT: The absolute expiration time of the field, in milliseconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   NX: Inserts the field only if it does not exist.
    
-   XX: Inserts the field only if it already exists.
    
-   VER: The version number.
    
    -   If the field exists, its current version is compared with the specified version:
        
        -   If they are the same, the operation proceeds and the version number is incremented by 1.
            
        -   If they are different, an error is returned.
            
    -   If the field does not exist or its current version is 0, the specified version is ignored and the operation proceeds. After the operation is successful, the version number becomes 1.
        
-   ABS: The absolute version number. When you insert a field, you can set its version to the value of this parameter, regardless of whether the field exists.
    
-   KEEPTTL: Retains the current expiration setting of the field if you do not specify the EX, EXAT, PX, or PXAT option.
    
    **Note**
    
    If you do not use the KEEPTTL option, the EXHSET command deletes the original expiration time of the field by default.
    

Return value

-   1: A new field is created and its value is set.
    
-   0: The field exists and its old value is overwritten.
    
-   \-1: The XX option is specified but the field does not exist.
    
-   \-1: The NX option is specified but the field already exists.
    
-   "ERR update version is stale": The VER option is specified and the version does not match the current version.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHSET myhash field1 val EX 10
```

Sample return value:

```
(integer) 1
```

  

## EXHGET

**Category**

**Description**

Syntax

`EXHGET key field`

Time complexity

O(1)

Command description

Gets the value of a field in the specified TairHash key. Returns nil if the key or field does not exist.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   The value of the field: The field exists and the operation is successful.
    
-   nil: The key or field does not exist.
    
-   Otherwise, an error message is returned.
    

Example

Run the `EXHSET myhash field1 val` command in advance.

Sample command:

```
EXHGET myhash field1
```

Sample return value:

```
"val"
```

## EXHMSET

**Category**

**Description**

Syntax

`EXHMSET key field value [field value ...]`

Time complexity

O(N)

Command description

Adds multiple fields to the specified TairHash key. If the key does not exist, a key is automatically created. If a field already exists, its value is overwritten.

**Note**

After you create a key, you can use the EXHPEXPIREAT, EXHPEXPIRE, EXHEXPIREAT, or EXHEXPIRE command to set an expiration time for a field. You can also use the EXPIRE or EXPIREAT command to set an expiration time for the key.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    
-   value: The value of the field. A field can have only one value.
    

Return value

-   OK: The operation is successful.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHMSET myhash field1 val1 field2 val2
```

Sample return value:

```
OK
```

## EXHPEXPIREAT

**Category**

**Description**

Syntax

`EXHPEXPIREAT key field milliseconds-timestamp [VER | ABS version]`

Time complexity

O(1)

Command description

Sets an absolute expiration time for a field in the specified TairHash key. The time is accurate to the millisecond.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    
-   milliseconds-timestamp: A UNIX timestamp that is accurate to the millisecond.
    
-   VER: The version number.
    
    -   If the field exists, its current version is compared with the specified version:
        
        -   If they are the same, the operation proceeds and the version number is incremented by 1.
            
        -   If they are different, an error is returned.
            
    -   If the field does not exist or its current version is 0, the specified version is ignored and the operation proceeds. After the operation is successful, the version number becomes 1.
        
-   ABS: The absolute version number. When you insert a field, you can set its version to the value of this parameter, regardless of whether the field exists.
    

Return value

-   The field exists and is successfully set to 1.
    
-   0: The field does not exist.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHPEXPIREAT myhash field1 1293840000
```

Sample return value:

```
(integer) 1
```

## EXHPEXPIRE

**Category**

**Description**

Syntax

`EXHPEXPIRE key field milliseconds [VER | ABS version]`

Time complexity

O(1)

Command description

Sets a relative expiration time in milliseconds for a field in the specified TairHash key.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    
-   milliseconds: The relative expiration time, in milliseconds.
    
-   VER: The version number.
    
    -   If the field exists, its current version is compared with the specified version:
        
        -   If they are the same, the operation proceeds and the version number is incremented by 1.
            
        -   If they are different, an error is returned.
            
    -   If the field does not exist or its current version is 0, the specified version is ignored and the operation proceeds. After the operation is successful, the version number becomes 1.
        
-   ABS: The absolute version number. When you insert a field, you can set its version to the value of this parameter, regardless of whether the field exists.
    

Return value

-   A value of 1 indicates that the field exists and was set successfully.
    
-   0: The field does not exist.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHPEXPIRE myhash field1 1000
```

Sample return value:

```
(integer) 1
```

## EXHEXPIREAT

**Category**

**Description**

Syntax

`EXHEXPIREAT key field timestamp [VER | ABS version]`

Time complexity

O(1)

Command description

Sets an absolute expiration time for a field in the specified TairHash key. The time is accurate to the second.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    
-   timestamp: A UNIX timestamp that is accurate to the second.
    
-   VER: The version number.
    
    -   If the field exists, its current version is compared with the specified version:
        
        -   If they are the same, the operation proceeds and the version number is incremented by 1.
            
        -   If they are different, an error is returned.
            
    -   If the field does not exist or its current version is 0, the specified version is ignored and the operation proceeds. After the operation is successful, the version number becomes 1.
        
-   ABS: The absolute version number. When you insert a field, you can set its version to the value of this parameter, regardless of whether the field exists.
    

Return value

-   The field is successfully set to 1.
    
-   0: The field does not exist.
    
-   In other cases, the corresponding abnormal information is returned.
    

Example

Sample command:

```
EXHEXPIREAT myhash field1 1293840000
```

Sample return value:

```
(integer) 1
```

## EXHEXPIRE

**Category**

**Description**

Syntax

`EXHEXPIRE key field seconds [VER | ABS version]`

Time complexity

O(1)

Command description

Sets a relative expiration time in seconds for a field in the specified TairHash key.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    
-   seconds: The relative expiration time, in seconds.
    
-   VER: The version number.
    
    -   If the field exists, its current version is compared with the specified version:
        
        -   If they are the same, the operation proceeds and the version number is incremented by 1.
            
        -   If they are different, an error is returned.
            
    -   If the field does not exist or its current version is 0, the specified version is ignored and the operation proceeds. After the operation is successful, the version number becomes 1.
        
-   ABS: The absolute version number. When you insert a field, you can set its version to the value of this parameter, regardless of whether the field exists.
    

Return value

-   The field exists and is set successfully: 1.
    
-   0: The field does not exist.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHEXPIRE myhash field1 100
```

Sample return value:

```
(integer) 1
```

## EXHPTTL

**Category**

**Description**

Syntax

`EXHPTTL key field`

Time complexity

O(1)

Command description

Gets the remaining TTL of a field in the specified TairHash key. The time is in milliseconds.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   \-1: The field exists but has no expiration time set.
    
-   \-2: The key does not exist.
    
-   \-3: The field does not exist.
    
-   The remaining TTL in milliseconds: The field exists and has an expiration time set.
    
-   Otherwise, an error message is returned.
    

Example

Run the `EXHSET myhash field1 val1 EX 100` command in advance.

Sample command:

```
EXHPTTL myhash field1
```

Sample return value:

```
(integer) 97213
```

## EXHTTL

**Category**

**Description**

Syntax

`EXHTTL key field`

Time complexity

O(1)

Command description

Gets the remaining TTL of a field in the specified TairHash key. The time is in seconds.

Options

-   Key: The key that specifies the TairHash on which the command is invoked.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   \-2: The key does not exist.
    
-   \-3: The field does not exist.
    
-   \-1: The field exists but has no expiration time set.
    
-   The remaining TTL in seconds: The field exists and has an expiration time set.
    
-   In other cases, return the corresponding abnormal information.
    

Example

Run the `EXHSET myhash field1 val1 EX 100` command in advance.

Sample command:

```
EXHTTL myhash field1
```

Sample return value:

```
(integer) 85
```

## EXHVER

**Category**

**Description**

Syntax

`EXHVER key field`

Time complexity

O(1)

Command description

Gets the current version number of a field in the specified TairHash key.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   \-1: The key does not exist.
    
-   \-2: The field does not exist.
    
-   The version number of the field: The query is successful.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHVER myhash field1
```

Sample return value:

```
(integer) 1
```

## EXHSETVER

**Category**

**Description**

Syntax

`EXHSETVER key field version`

Time complexity

O(1)

Command description

Sets the version number of a field in the specified TairHash key.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   0: The TairHash key or the field does not exist.
    
-   Successfully set: 1.
    
-   Otherwise, the corresponding error message is returned.
    

Example

Sample command:

```
EXHSETVER myhash field1 3
```

Sample return value:

```
(integer) 1
```

## EXHINCRBY

**Category**

**Description**

Syntax

`EXHINCRBY key field num [EX time] [EXAT time] [PX time] [PXAT time] [VER | ABS version] [MIN minval] [MAX maxval] [KEEPTTL]`

Time complexity

O(1)

Command description

Increments the integer value of a field in the specified TairHash key by a number. If the key does not exist, a key is automatically created. If the specified field does not exist, the field is created with a value of 0 before the increment operation.

**Note**

After you set a timeout for a field, if you run this command again on the field without specifying a timeout, the field is set to never expire.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    
-   num: The integer by which to increment the value of the field.
    
-   EX: The relative expiration time of the field, in seconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   EXAT: The absolute expiration time of the field, in seconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   PX: The relative expiration time of the field, in milliseconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   PXAT: The absolute expiration time of the field, in milliseconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   VER: The version number.
    
    -   If the field exists, its current version is compared with the specified version:
        
        -   If they are the same, the operation proceeds and the version number is incremented by 1.
            
        -   If they are different, an error is returned.
            
    -   If the field does not exist or its current version is 0, the specified version is ignored and the operation proceeds. After the operation is successful, the version number becomes 1.
        
-   ABS: The absolute version number. When you insert a field, you can set its version to the value of this parameter, regardless of whether the field exists.
    
-   MIN: The minimum value. An error is returned if the value is less than the minimum value.
    
-   MAX: The maximum value. An error is returned if the value is greater than the maximum value.
    
-   KEEPTTL: Retains the current expiration setting of the field if you do not specify the EX, EXAT, PX, or PXAT option.
    

Return value

-   Success: The sum of value and num.
    
-   Otherwise, an error occurs.
    

Example

Run the `EXHMSET myhash field1 10` command in advance.

Sample command:

```
EXHINCRBY myhash field1 100
```

Sample return value:

```
(integer) 110
```

## EXHINCRBYFLOAT

**Category**

**Description**

Syntax

`EXHINCRBYFLOAT key field num [EX time] [EXAT time] [PX time] [PXAT time] [VER | ABS version] [MIN minval] [MAX maxval] [KEEPTTL]`

Time complexity

O(1)

Command description

Increments the floating-point value of a field in the specified TairHash key by a number. If the key does not exist, a key is automatically created. If the specified field does not exist, the field is created with a value of 0 before the increment operation.

**Note**

After you set a timeout for a field, if you run this command again on the field without specifying a timeout, the field is set to never expire.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    
-   num: The floating-point number by which to increment the value of the field.
    
-   EX: The relative expiration time of the field, in seconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   EXAT: The absolute expiration time of the field, in seconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   PX: The relative expiration time of the field, in milliseconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   PXAT: The absolute expiration time of the field, in milliseconds. A value of 0 indicates that the field expires immediately. If you do not specify this parameter, the field does not expire.
    
-   VER: The version number.
    
    -   If the field exists, its current version is compared with the specified version:
        
        -   If they are the same, the operation proceeds and the version number is incremented by 1.
            
        -   If they are different, an error is returned.
            
    -   If the field does not exist or its current version is 0, the specified version is ignored and the operation proceeds. After the operation is successful, the version number becomes 1.
        
-   ABS: The absolute version number. When you insert a field, you can set its version to the value of this parameter, regardless of whether the field exists.
    
-   MIN: The minimum value. An error is returned if the value is less than the minimum value.
    
-   MAX: The maximum value. An error is returned if the value is greater than the maximum value.
    
-   KEEPTTL: Retains the current expiration setting of the field if you do not specify the EX, EXAT, PX, or PXAT option.
    

Return value

-   Success: The sum of value and num.
    
-   In other cases, an exception is returned.
    

Example

Run the `EXHMSET myhash field1 10` command in advance.

Sample command:

```
EXHINCRBYFLOAT myhash field1 9.235
```

Sample return value:

```
"19.235"
```

## EXHGETWITHVER

**Category**

**Description**

Syntax

`EXHGETWITHVER key field`

Time complexity

O(1)

Command description

Gets the value and version of a field in the specified TairHash key. Returns nil if the key or field does not exist.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   The value and version of the field: The field exists and the operation is successful.
    
-   nil: The key or field does not exist.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHGETWITHVER myhash field1
```

Sample return value:

```
1) "19.235"
2) (integer) 5
```

## EXHMGET

**Category**

**Description**

Syntax

`EXHMGET key field [field ...]`

Time complexity

O(1)

Command description

Gets the values of multiple fields in the specified TairHash key. Returns nil if the key or a field does not exist.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   nil: The key does not exist.
    
-   An array where each element is the value of a field: The key exists and all specified fields exist.
    
-   An array where each element is the value of a field. The elements for non-existent fields are nil: The key exists but some specified fields do not exist.
    
-   Otherwise, an exception message is returned.
    

Example

Run the `EXHMSET myhash field1 10 field2 var1` command in advance.

Sample command:

```
EXHMGET myhash field1 field2
```

Sample response:

```
1) "10"
2) "var1"
```

## EXHMGETWITHVER

**Category**

**Description**

Syntax

`EXHMGETWITHVER key field [field ...]`

Time complexity

O(1)

Command description

Gets the values and versions of multiple fields in the specified TairHash key.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   nil: The key does not exist.
    
-   An array where each element is the value and version of a field: The key exists and all specified fields exist.
    
-   An array where each element is the value and version of a field. The elements for non-existent fields are nil: The key exists but some specified fields do not exist.
    
-   Otherwise, an error message is returned.
    

Example

Run the `EXHMSET myhash field1 10 field2 var1` command in advance.

Sample command:

```
 EXHMGETWITHVER myhash field1 field2
```

Example response:

```
1) 1) "10"
   2) (integer) 1
2) 1) "var1"
   2) (integer) 1
```

## EXHLEN

**Category**

**Description**

Syntax

`EXHLEN key [NOEXP]`

Time complexity

O(1) if the NOEXP option is not specified. O(N) if the NOEXP option is specified.

Command description

Gets the number of fields in the specified TairHash key. This command does not trigger passive eviction or filter out expired fields. Therefore, the result may include fields that have expired but have not been deleted. To return only the number of non-expired fields, specify the NOEXP option.

Options

-   Key: The TairHash key.
    
-   NOEXP: By default, this command does not trigger passive eviction or filter out expired fields. The result may include fields that have expired but have not been deleted. To return only the number of non-expired fields, specify the NOEXP option. When you specify the NOEXP option, note the following:
    
    -   The response time of the EXHLEN command is affected by the size of the TairHash key because the entire key is traversed.
        
    -   The EXHLEN command filters out expired fields from the result, but the expired fields are not evicted.
        

Return value

-   0: The key or field does not exist.
    
-   The number of fields: The operation is successful.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHLEN myhash
```

Sample response:

```
(integer) 2
```

## EXHEXISTS

**Category**

**Description**

Syntax

`EXHEXISTS key field`

Time complexity

O(1)

Command description

Checks whether the specified field exists in the TairHash key.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   0: The key or field does not exist.
    
-   1: The field exists.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHEXISTS myhash field1
```

Sample return value:

```
(integer) 1
```

## EXHSTRLEN

**Category**

**Description**

Syntax

`EXHSTRLEN key field`

Time complexity

O(1)

Command description

Gets the length of the value of a field in the specified TairHash key.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   0: The key or field does not exist.
    
-   The length of the value: The query is successful.
    
-   Otherwise, a corresponding error message is returned.
    

Example

Sample command:

```
EXHSTRLEN myhash field1
```

Sample return value:

```
(integer) 2
```

## EXHKEYS

**Category**

**Description**

Syntax

`EXHKEYS key`

Time complexity

O(N)

Command description

Gets all fields in the specified TairHash key.

Options

-   Key: The TairHash key.
    

Return value

-   An empty array: The key does not exist.
    
-   If the key exists, the returned value is an array whose elements correspond to the fields in the TairHash.
    
-   Otherwise, an error message is returned.
    

Example

Run the `EXHMSET myhash field1 10 field2 var1` command in advance.

Sample command:

```
EXHKEYS myhash
```

Sample return value:

```
1) "field1"
2) "field2"
```

## EXHVALS

**Category**

**Description**

Syntax

`EXHVALS key`

Time complexity

O(N)

Command description

Gets the values of all fields in the specified TairHash key.

Options

-   Key: The TairHash key.
    

Return value

-   If the key is not found, an empty array is returned.
    
-   An array where each element is the value of a field in the TairHash key: The key exists.
    
-   Otherwise, an error message is returned.
    

Example

Run the `EXHMSET myhash field1 10 field2 var1` command in advance.

Sample command:

```
EXHVALS myhash
```

Sample return value:

```
1) "10"
2) "var1"
```

## EXHGETALL

**Category**

**Description**

Syntax

`EXHGETALL key`

Time complexity

O(N)

Command description

Gets all fields and their values in the specified TairHash key.

Options

-   Key: The TairHash key.
    

Return value

-   An empty array: The key does not exist.
    
-   An array where each element is a field-value pair in the TairHash key: The key exists.
    
-   Otherwise, an error message is returned.
    

Example

Run the `EXHMSET myhash field1 10 field2 var1` command in advance.

Sample command:

```
EXHGETALL myhash
```

Example response:

```
1) "field1"
2) "10"
3) "field2"
4) "var1"
```

## EXHSCAN

**Category**

**Description**

Syntax

`EXHSCAN key op subkey [MATCH pattern] [COUNT count]`

Time complexity

O(1) for each call, and O(N) for a full traversal.

Command description

Scans the specified TairHash key.

**Note**

This command is supported only for memory-optimized instances.

Options

-   key: The TairHash key.
    
-   op: The starting point of the scan. Valid values:
    
    -   \>: Starts from the first field that is greater than the subkey.
        
    -   \>=: Starts from the first field that is greater than or equal to the subkey.
        
    -   <: Starts from the first field that is less than the subkey.
        
    -   <=: Starts from the first field that is less than or equal to the subkey.
        
    -   \==: Starts from the first field that is equal to the subkey.
        
    -   ^: Starts from the first field.
        
    -   $: Starts from the last field.
        
-   subkey: Used with the op option to set the starting position of the scan. This value is ignored when op is set to ^ or $.
    
-   MATCH: Filters the scan results based on the specified regular expression pattern for the subkey.
    
-   COUNT: The number of fields to scan in a single operation. The default value is 10.
    
    **Note**
    
    COUNT specifies the number of fields to scan each time. It does not guarantee that the number of fields in the result set is the same as the value of COUNT. The size of the result set depends on the current number of fields in the TairHash key and whether the MATCH option is specified for filtering.
    

Return value

-   If the key does not exist, it returns an empty array.
    
-   If the key exists, the return value is an array containing two elements:
    
    -   The first element: The starting field for the next scan. If the scan of the key is complete, this element is empty.
        
    -   The second element: The result of the current scan, which includes the field and value.
        
-   Otherwise, an error message is returned.
    

Example

Run the `EXHMSET myhashkey field1 val1 field2 val2 field3 val3 field4 val4 field5 val5` command in advance.

Sample command:

```
EXHSCAN myhashkey ^ xx COUNT 3
```

Sample return value:

```
1) "field4"
2) 1) "field1"
   2) "val1"
   3) "field2"
   4) "val2"
   5) "field3"
   6) "val3"
```

## EXHDEL

**Category**

**Description**

Syntax

`EXHDEL key field [field ...]`

Time complexity

O(1)

Command description

Deletes a field from the specified TairHash key. Returns 0 if the key or field does not exist. Returns 1 if the deletion is successful.

Options

-   Key: The TairHash key.
    
-   field: An element in the TairHash key. A key can have multiple fields.
    

Return value

-   0: The key or field does not exist.
    
-   1: The deletion is successful.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXHDEL myhash field1
```

Sample return value:

```
(integer) 1
```

## **FAQ**

-   Q: Why does exHash use more memory than the standard hash of Redis Open-Source Edition for the same data?
    
    A: exHash lets you set expiration times and versions for individual fields. This requires storing additional metadata in the data structure, resulting in higher memory usage compared to the standard hash of Redis Open-Source Edition.
