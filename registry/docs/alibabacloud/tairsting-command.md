A TairString (exString) is a string that includes a version number. This topic describes the commands supported by the TairString data structure.

## Overview

Native Redis strings use a key-value pair structure. TairStrings contain keys, values, and version numbers to support scenarios such as optimistic locking. In native Redis strings, the INCRBY and INCRBYFLOAT commands are used to increase or decrease string values. In TairStrings, you can limit the range of the outputs returned by these commands. If an output falls outside of the specified range, an error message is returned.

**Main features**

-   A TairString contains a version number.
    
-   TairStrings allow you to limit the range of the INCRBY and INCRBYFLOAT command outputs when you run these commands to increase values.
    

This module is open-sourced. For more information, see [GitHub](https://github.com/alibaba/TairString).

## Best practices

-   [Implement high-performance distributed locks by using TairString](/help/en/redis/use-cases/implementation-of-high-performance-distributed-lock-based-on-tairstring)
    
-   [Implement high-performance optimistic locking by using TairString](/help/en/redis/use-cases/implementation-of-high-performance-optimistic-lock-based-on-tairstring)
    
-   [Implement bounded counters by using TairString](/help/en/redis/use-cases/implementation-of-high-efficiency-current-limiter-based-on-tairstring)
    

## Prerequisites

The instance is a Tair [DRAM-based](/help/en/redis/product-overview/dram-based-instances) or [persistent memory-optimized](/help/en/redis/product-overview/persistent-memory-optimized-instances-1) instance whose minor version is 1.2.3 or later.

**Note**

The latest minor version provides more features and higher stability. We recommend that you update the instance to the latest minor version. For more information, see [Update the minor version of an instance](/help/en/redis/user-guide/update-the-minor-version). If your instance is a cluster instance or read/write splitting instance, we recommend that you update the proxy nodes in the instance to the latest minor version to ensure that all commands can be run as expected.

## Precautions

The TairString data that you want to manage is stored on a Tair instance.

**Note**

You can manage native Redis strings and TairStrings on the Tair instance at the same time. However, native Redis strings do not support the commands described in this topic.

## Supported commands

Table 1. TairString commands

**Command**

**Syntax**

**Description**

[EXSET](#section-vbp-rx3-ln9)

`EXSET key value [EX|PX|EXAT|PXAT time] [NX|XX] [VER|ABS version] [KEEPTTL]`

Creates a TairString key if the key does not exist and writes a value to the key. If the key already exists, the command overwrites the value of the key.

[EXGET](#section-twa-bv5-6lw)

`EXGET key`

Retrieves the value and version number of a TairString key.

[EXSETVER](#section-r3b-3yf-98a)

`EXSETVER key version`

Specifies the version number of a TairString key.

[EXINCRBY](#section-r3q-c56-81d)

`EXINCRBY key num [EX|PX|EXAT|PXAT time] [NX|XX] [VER|ABS version] [MIN minval] [MAX maxval] [KEEPTTL]`

Increases or decreases the value of a TairString key. The value of the num parameter must be of the LONG type.

[EXINCRBYFLOAT](#section-rwj-5pc-8g8)

`EXINCRBYFLOAT key num [EX|PX|EXAT|PXAT time] [NX|XX] [VER|ABS version] [MIN minval] [MAX maxval] [KEEPTTL]`

Increases or decreases the value of a TairString key. The value of the num parameter must be of the DOUBLE type.

[EXCAS](#section-eaj-ag8-jrf)

`EXCAS key newvalue version`

Updates the value of the specified TairString key if the current version number of the key matches the specified one. If the numbers do not match, the command returns the original value and version number of the key.

[EXCAD](#section-vnu-75a-jjj)

`EXCAD key version`

Deletes a TairString key when the current version number of the key matches the specified one.

[DEL](https://valkey.io/commands/del/)

`DEL key [key ...]`

Deletes one or more TairString keys.

**Note**

The following list describes the conventions for the command syntax used in this topic:

-   `Uppercase keyword`: indicates the command keyword.
    
-   `Italic text`: indicates variables.
    
-   `[options]`: indicates that the enclosed parameters are optional. Parameters that are not enclosed by brackets must be specified.
    
-   `A|B`: indicates that the parameters separated by the vertical bars (|) are mutually exclusive. Only one of the parameters can be specified.
    
-   `...`: indicates that the parameter preceding this symbol can be repeatedly specified.
    

## EXSET

**Item**

**Description**

Syntax

`EXSET key value [EX|PX|EXAT|PXAT time] [NX|XX] [VER|ABS version] [KEEPTTL]`

Time complexity

O(1)

Command description

Creates a TairString key if the key does not exist and writes a value to the key. If the key already exists, the command overwrites the value of the key.

Parameter

-   key: the key that you want to manage by running this command.
    
-   value: the value that you want to write to the key.
    
-   EX: the relative expiration time of the key. Unit: seconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   EXAT: the absolute expiration time of the key. Unit: seconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   PX: the relative expiration time of the key. Unit: milliseconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   PXAT: the absolute expiration time of the key. Unit: milliseconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   NX: specifies that the value is written to the key only if the key does not exist.
    
-   XX: specifies that the value is written to the key only if the key exists.
    
-   VER: the version number of the key.
    
    -   If the key exists, the version number specified by this parameter is matched against the current version number.
        
        -   If the version numbers match, the value is written to the key and the version number is increased by 1.
            
        -   If the version numbers do not match, an error message is returned.
            
    -   If the key does not exist or if the current version number of the key is 0, the specified version number does not take effect. In this case, the value is written to the key and the version number is set to 1.
        
-   ABS: the absolute version number of the key. After this parameter is specified, the value is written to the key regardless of the current version number of the key. Then, the version number is overwritten with the ABS value.
    
-   KEEPTTL: inherits the remaining time-to-live (TTL) of the key. You cannot set this parameter together with EX, PX, EXAT, or PXAT.
    
    **Note**
    
    If you do not set parameters related to the expiration time of the key, such as KEEPTTL, EX, or PX, the key does not expire.
    

Output

-   If the operation is successful, OK is returned.
    
-   If the XX parameter is specified and the key does not exist, nil is returned.
    
-   If the NX parameter is specified and the key already exists, nil is returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXSET foo bar EX 10 NX ABS 100
```

Sample output:

```
OK
```

  

## EXGET

**Item**

**Description**

Syntax

`EXGET key`

Time complexity

O(1)

Command description

Retrieves the value and version number of a TairString key.

Parameter

-   key: the key that you want to manage by running this command.
    

Output

-   If the operation is successful, the value and version number of the key are returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXGET foo
```

Sample output:

```
1) "bar"
2) (integer) 1
```

## EXSETVER

**Item**

**Description**

Syntax

`EXSETVER key version`

Time complexity

O(1)

Command description

Specifies the version number of a TairString key.

Parameter

-   key: the key that you want to manage by running this command.
    
-   version: the version number that you want to specify.
    

Output

-   If the operation is successful, a value of 1 is returned.
    
-   If the key does not exist, a value of 0 is returned.
    
-   Otherwise, an error message is returned.
    

Example

Sample command:

```
EXSETVER foo 2
```

Sample output:

```
(integer) 1
```

## EXINCRBY

**Item**

**Description**

Syntax

`EXINCRBY key num [EX|PX|EXAT|PXAT time] [NX|XX] [VER|ABS version] [MIN minval] [MAX maxval] [KEEPTTL]`

Time complexity

O(1)

Command description

Increases or decreases the value of a TairString key. The value of the num parameter must be of the LONG type.

Parameter

-   key: the key that you want to manage by running this command.
    
-   num: the value by which the key is increased or decreased. This value must be an integer.
    
-   EX: the relative expiration time of the key. Unit: seconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   EXAT: the absolute expiration time of the key. Unit: seconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   PX: the relative expiration time of the key. Unit: milliseconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   PXAT: the absolute expiration time of the key. Unit: milliseconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   NX: specifies that the value is written to the key only if the key does not exist.
    
-   XX: specifies that the value is written to the key only if the key exists.
    
-   VER: the version number of the key.
    
    -   If the key exists, the version number specified by this parameter is matched against the current version number.
        
        -   If the version numbers match, the value of the key is increased by the num value and the version number is increased by 1.
            
        -   If the version numbers do not match, an error message is returned.
            
    -   If the key does not exist or if the current version number of the key is 0, the specified version number does not take effect. In this case, the value is increased by the num value and the version number is set to 1.
        
-   ABS: the absolute version number of the key. After this parameter is specified, the value is written to the key regardless of the current version number of the key. Then, the version number is overwritten with the ABS value.
    
-   MIN: the minimum value of the key.
    
-   MAX: the maximum value of the key.
    
-   KEEPTTL: inherits the remaining TTL of the key. You cannot set this parameter together with EX, PX, EXAT, or PXAT.
    
    **Note**
    
    If you do not set parameters related to the expiration time of the key, such as KEEPTTL, EX, or PX, the key does not expire.
    

Output

-   If the operation is successful, the updated value of the key is returned.
    
-   If the MAX or MIN parameter is specified and the updated value of the key is out of this value range, the "(error) ERR increment or decrement would overflow" error message is returned.
    
-   Otherwise, an error message is returned.
    

Example

The `EXSET foo 1` command is run in advance.

Sample command:

```
EXINCRBY foo 100 MAX 300
```

Sample output:

```
(integer) 101
```

## EXINCRBYFLOAT

**Item**

**Description**

Syntax

`EXINCRBYFLOAT key num [EX|PX|EXAT|PXAT time] [NX|XX] [VER|ABS version] [MIN minval] [MAX maxval] [KEEPTTL]`

Time complexity

O(1)

Command description

Increases or decreases the value of a TairString key. The value of the num parameter must be of the DOUBLE type.

Parameter

-   key: the key that you want to manage by running this command.
    
-   num: the value by which the key is increased or decreased. The value must be a floating-point number.
    
-   EX: the relative expiration time of the key. Unit: seconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   EXAT: the absolute expiration time of the key. Unit: seconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   PX: the relative expiration time of the key. Unit: milliseconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   PXAT: the absolute expiration time of the key. Unit: milliseconds. A value of 0 indicates that the key immediately expires. If this parameter is not specified, the key does not expire.
    
-   NX: specifies that the value is written to the key only if the key does not exist.
    
-   XX: specifies that the value is written to the key only if the key exists.
    
-   VER: the version number of the key.
    
    -   If the key exists, the version number specified by this parameter is matched against the current version number.
        
        -   If the version numbers match, the value of the key is increased by the num value and the version number is increased by 1.
            
        -   If the version numbers do not match, an error message is returned.
            
    -   If the key does not exist or if the current version number of the key is 0, the specified version number does not take effect. In this case, the value is increased by the num value and the version number is set to 1.
        
-   ABS: the absolute version number of the key. After this parameter is specified, the value is written to the key regardless of the current version number of the key. Then, the version number is overwritten with the ABS value.
    
-   MIN: the minimum value of the key.
    
-   MAX: the maximum value of the key.
    
-   KEEPTTL: inherits the remaining TTL of the key. You cannot set this parameter together with EX, PX, EXAT, or PXAT.
    
    **Note**
    
    If you do not set parameters related to the expiration time of the key, such as KEEPTTL, EX, or PX, the key does not expire.
    

Output

-   If the operation is successful, the updated value of the key is returned.
    
-   If the MAX or MIN parameter is specified and the updated value of the key is out of this value range, the "(error) ERR increment or decrement would overflow" error message is returned.
    
-   Otherwise, an error message is returned.
    

Example

The `EXSET foo 1` command is run in advance.

Sample command:

```
EXINCRBYFLOAT foo 10.123
```

Sample output:

```
(integer) 11.123
```

## EXCAS

**Item**

**Description**

Syntax

`EXCAS key newvalue version`

Time complexity

O(1)

Command description

Updates the value of the specified TairString key if the current version number of the key matches the specified one. If the numbers do not match, the command returns the original value and version number of the key.

Parameter

-   key: the key that you want to manage by running this command.
    
-   newvalue: the new value that you want to use to overwrite the current value of the key if the current version number of the key matches the specified version number.
    
-   version: the version number that you want to compare with the current version number of the key.
    

Output

-   If the operation is successful, the "\["OK", "",latest version\]" message is returned. The "" characters in the middle of the message indicate empty strings that do not carry meanings.
    
-   If the operation fails, the following error message is returned: \["ERR update version is stale", value, version\]. value indicates the current value of the key. version indicates the current version number of the key.
    
-   If the key does not exist, a value of -1 is returned.
    
-   Otherwise, an error message is returned.
    

Example

The `EXSET foo bar` command is run in advance.

Sample command:

```
EXCAS foo bzz 1
```

Sample output:

```
1) OK
2)
3) (integer) 2
```

## EXCAD

**Item**

**Description**

Syntax

`EXCAD key version`

Time complexity

O(1)

Command description

Deletes a TairString key when the current version number of the key matches the specified one.

Parameter

-   key: the key that you want to manage by running this command.
    
-   version: the version number that you want to compare with the current version number of the key.
    

Output

-   If the operation is successful, a value of 1 is returned.
    
-   If the operation fails, a value of 0 is returned.
    
-   If the key does not exist, a value of -1 is returned.
    
-   Otherwise, an error message is returned.
    

Example

The `EXSET foo bar` command is run in advance.

Sample command:

```
EXCAD foo 1
```

Sample output:

```
(integer) 1
```
