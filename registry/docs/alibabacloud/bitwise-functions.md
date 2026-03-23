This topic describes the syntax of bitwise functions. This topic also provides examples on how to use the functions.

The following table describes the bitwise functions that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[bit\_count function](#section-aib-2nh-wyg)

bit\_count(_x_, _bits_)

Returns the number of bits 1 in _x_ in binary representation.

√

√

[bitwise\_and function](#section-s2v-apf-tdu)

bitwise\_and(_x_, _y_)

Returns the result of the bitwise AND operation on _x_ and _y_ in binary representation.

√

√

[bitwise\_not function](#section-nwe-g6f-mk2)

bitwise\_not(_x_)

Returns the result of the bitwise NOT operation on _x_ in binary representation.

√

√

[bitwise\_or function](#section-oxc-w47-xz8)

bitwise\_or(_x_, _y_)

Returns the result of the bitwise OR operation on _x_ and _y_ in binary representation.

√

√

[bitwise\_xor function](#section-9bf-ttf-aey)

bitwise\_xor(_x_, _y_)

Returns the result of the bitwise XOR operation on _x_ and _y_ in binary representation.

√

√

## bit\_count function

The bit\_count function returns the number of bits 1 in _x_ in binary representation.

### Syntax

```
bit_count(x, bits)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint type.

_bits_

This parameter specifies the number of bits, such as 64 bits.

### Return value type

The bigint type.

### Examples

Convert the number 24 into a binary number and obtain the number of bits 1 in the binary number.

-   Query statement
    
    ```
    * | SELECT bit_count(24, 64)
    ```
    
-   Query and analysis results![bit_count](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9632235361/p300158.png)
    

## bitwise\_and function

The bitwise\_and function returns the result of the bitwise AND operation on _x_ and _y_ in binary representation.

### Syntax

```
bitwise_and(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint type.

_y_

The value of this parameter is of the bigint type.

### Return value type

The bigint type.

### Examples

Perform a bitwise AND operation on 3 and 5 in binary representation.

-   Query statement
    
    ```
    * | SELECT bitwise_and(3, 5)
    ```
    
-   Query and analysis results![bitwise_and](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7311035361/p300167.png)
    

## bitwise\_not function

The bitwise\_not function returns the result of the bitwise NOT operation on _x_ in binary representation.

### Syntax

```
bitwise_not(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint type.

### Return value type

The bigint type.

### Examples

Perform a bitwise NOT operation on 4 in binary representation.

-   Query statement
    
    ```
    * | SELECT bitwise_not(4)
    ```
    
-   Query and analysis results![bitwise_not](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9632235361/p300172.png)
    

## bitwise\_or function

The bitwise\_or function returns the result of the bitwise OR operation on _x_ and _y_ in binary representation.

### Syntax

```
bitwise_or(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint type.

_y_

The value of this parameter is of the bigint type.

### Return value type

The bigint type.

### Examples

Perform a bitwise OR operation on 3 and 5 in binary representation.

-   Query statement
    
    ```
    * | SELECT bitwise_or(3, 5)
    ```
    
-   Query and analysis results![bitwise_or](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9632235361/p300169.png)
    

## bitwise\_xor function

The bitwise\_xor function returns the result of the bitwise XOR operation on _x_ and _y_ in binary representation.

### Syntax

```
bitwise_xor(x, y)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint type.

_y_

The value of this parameter is of the bigint type.

### Return value type

The bigint type.

### Examples

Perform a bitwise XOR operation on 3 and 5 in binary representation.

-   Query statement
    
    ```
    ?1* | SELECT bitwise_xor(3, 5)
    ```
    
-   Query and analysis results![bitwise_xor](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7311035361/p300171.png)
