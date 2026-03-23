This topic describes the new CAS and CAD commands for Tair instances, which enhance Redis string functionality.

## Prerequisites

The instance is a Tair [DRAM-based](/help/en/redis/product-overview/dram-based-instances) or [persistent memory-optimized](/help/en/redis/product-overview/persistent-memory-optimized-instances-1) instance whose minor version is 1.2.3 or later.

**Note**

The latest minor version provides more features and higher stability. We recommend that you update the instance to the latest minor version. For more information, see [Update the minor version of an instance](/help/en/redis/user-guide/update-the-minor-version). If your instance is a cluster instance or read/write splitting instance, we recommend that you update the proxy nodes in the instance to the latest minor version to ensure that all commands can be run as expected.

## Usage notes

The commands in this topic apply to native Redis strings.

**Note**

A Tair instance can contain both Redis strings and TairStrings. The commands in this topic do not apply to TairStrings.

## Command list

Table 1. String enhancement commands

**Command**

**Syntax**

**Description**

[CAS](#section-grp-odg-i2l)

`CAS key oldvalue newvalue [EX|PX|EXAT|PXAT time]`

CAS (Compare And Set) checks if the value of a target key is equal to the specified **oldvalue**. If they are equal, the command updates the value to the new **newvalue**. Otherwise, the command does nothing.

**Note**

This command applies only to Redis strings. To perform the same operation on TairStrings, use the EXCAS command.

[CAD](#section-dcp-pdf-67w)

`CAD key value`

CAD (Compare And Delete) checks if the value of a target key is equal to the specified value. If they are equal, the command deletes the key. Otherwise, the command does nothing.

**Note**

This command applies only to Redis strings. To perform the same operation on TairStrings, use the EXCAD command.

**Note**

The following list describes the conventions for the command syntax used in this topic:

-   `Uppercase keyword`: indicates the command keyword.
    
-   `Italic text`: indicates variables.
    
-   `[options]`: indicates that the enclosed parameters are optional. Parameters that are not enclosed by brackets must be specified.
    
-   `A|B`: indicates that the parameters separated by the vertical bars (|) are mutually exclusive. Only one of the parameters can be specified.
    
-   `...`: indicates that the parameter preceding this symbol can be repeatedly specified.
    

## CAS

**Item**

**Description**

Syntax

`CAS key oldvalue newvalue [EX|PX|EXAT|PXAT time]`

Time complexity

O(1)

Command description

CAS (Compare And Set) checks if the value of a target key is equal to the specified **oldvalue**. If they are equal, the command updates the value to the new **newvalue**. Otherwise, the command does nothing.

**Note**

This command applies only to Redis strings. To perform the same operation on TairStrings, use the EXCAS command.

Options

-   Key: The target key of the string type.
    
-   oldvalue: The original value to compare with the current value of the key.
    
-   newvalue: The new value. If \`oldvalue\` is equal to the current value of the key, the value is updated to \`newvalue\`.
    
-   EX: Sets the relative expiration time of the key in seconds. A value of 0 means the key expires immediately. If you do not specify this parameter, the key does not expire.
    
-   EXAT: Sets the absolute expiration time of the key as a UNIX timestamp in seconds. A value of 0 means the key expires immediately. If you do not specify this parameter, the key does not expire.
    
-   PX: Sets the relative expiration time of the key in milliseconds. A value of 0 means the key expires immediately. If you do not specify this parameter, the key does not expire.
    
-   PXAT: Sets the absolute expiration time of the key as a UNIX timestamp in milliseconds. A value of 0 means the key expires immediately. If you do not specify this parameter, the key does not expire.
    

**Note**

If the original string has a Time to Live (TTL) set, running the **CAS** command without a TTL parameter removes the TTL. The key will then not expire.

Return value

-   1: The operation was successful.
    
-   0: The operation failed.
    
-   \-1: The key does not exist.
    
-   In other cases, an error message is returned.
    

Example

Run the `SET foo bar` command first.

Sample command:

```
CAS foo bar bzz EX 10
```

Sample return value:

```
(integer) 1
```

If you then run the `GET foo` command, `"bzz"` is returned.

  

## CAD

**Item**

**Description**

Syntax

`CAD key value`

Time complexity

O(1)

Command description

CAD (Compare And Delete) checks if the value of a target key is equal to the specified value. If they are equal, the command deletes the key. Otherwise, the command does nothing.

**Note**

This command applies only to Redis strings. To perform the same operation on TairStrings, use the EXCAD command.

Options

-   Key: The target key of the string type.
    
-   value: The value to compare with the current value of the key.
    

Return value

-   1: The operation was successful.
    
-   0: The operation failed.
    
-   \-1: The key does not exist.
    
-   In other cases, an error message is returned.
    

Example

Run the `SET foo bar` command first.

Sample command:

```
CAD foo bar
```

Sample return value:

```
(integer) 1
```

The foo key is deleted. If you then run the `GET foo` command, `(nil)` is returned.
