This topic describes the syntax of binary functions. This topic also provides examples on how to use the functions.

The following table describes the binary functions that are supported by Simple Log Service.

**Important**

-   If you want to use strings in analytic statements, you must enclose the strings in single quotation marks (''). Strings that are not enclosed or strings that are enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.
    
-   varbinary is a binary character type, and varchar is a variable-length character type.
    

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[from\_base64 function](#section-9og-jyd-ps0)

from\_base64(_x_)

Decodes a Base64-encoded string into a binary number.

√

√

[from\_base64url function](#section-w5g-8cg-djn)

from\_base64url(_x_)

Decodes a Base64-encoded string into a binary number by using URL reserved characters.

√

×

[from\_big\_endian\_64 function](#section-oxn-3kn-a8b)

from\_big\_endian\_64(_x_)

Decodes a binary number in big endian into a bigint value.

√

×

[from\_hex function](#section-a4v-mgy-ywe)

from\_hex(_x_)

Decodes a hexadecimal number into a binary number.

√

√

[length function](#section-1jc-wum-8uv)

length(_x_)

Returns the length of a binary number.

√

×

[md5 function](#section-jer-81l-cc9)

md5(_x_)

Computes the MD5 hash value for a binary number.

√

√

[to\_base64 function](#section-5x1-csg-cai)

to\_base64(_x_)

Encodes a binary number into a Base64 string representation.

√

[to\_base64url function](#section-drw-fnv-c5u)

to\_base64url(_x_)

Encodes a binary number into a Base64 string representation by using URL reserved characters.

√

×

[to\_hex function](#section-xg5-lhn-jpi)

to\_hex(_x_)

Encodes a binary number into a hexadecimal number.

√

√

[to\_big\_endian\_64 function](#section-nwk-fez-9sx)

to\_big\_endian\_64(_x_)

Encodes a bigint value into a binary number in big endian.

√

×

[sha1 function](#section-t4y-j41-wvt)

sha1(_x_)

Computes the SHA-1 hash value for a binary number.

√

√

[sha256 function](#section-5fp-yu1-g0b)

sha256(_x_)

Computes the SHA-256 hash value for a binary number.

√

√

[sha512 function](#section-czx-wjm-6a5)

sha512(_x_)

Computes the SHA-512 hash value for a binary number.

√

√

[xxhash64 function](#section-dtj-4ze-oha)

xxhash64(_x_)

Computes the xxhash64 hash value for a binary number.

√

√

## from\_base64 function

The from\_base64 function decodes a Base64-encoded string into a binary number.

### Syntax

```
from_base64(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The varbinary type.

**Important**

The return value of the varbinary type contains invisible characters and is displayed in the Base64-encoded format.

-   If the returned binary number is an invisible character, you can use the to\_hex function to encode the number into a hexadecimal number.
    
-   If the returned binary number is a visible character, you can use the from\_utf8 function to encode the number into a UTF-8 string.
    

### Examples

Decode a Base64-encoded string into a binary number and then encode the binary number into a hexadecimal number.

-   Query statement
    
    ```
    * | SELECT to_hex(from_base64('c2xz'))
    ```
    
-   Query and analysis results![from_base64](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p302780.png)
    

## from\_base64url function

The from\_base64url function decodes a Base64-encoded string into a binary number by using URL reserved characters.

### Syntax

```
from_base64url(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The varbinary type.

**Important**

The return value of the varbinary type contains invisible characters and is displayed in the Base64-encoded format.

-   If the returned binary number is an invisible character, you can use the to\_hex function to encode the number into a hexadecimal number.
    
-   If the returned binary number is a visible character, you can use the from\_utf8 function to encode the number into a UTF-8 string.
    

### Examples

Decode a Base64-encoded string into a binary number by using URL reserved characters.

-   Query statement
    
    ```
    * | SELECT to_hex(from_base64url('c2xz'))
    ```
    
-   Query and analysis results![from_base64](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p302780.png)
    

## from\_big\_endian\_64 function

The from\_big\_endian\_64 function decodes a binary number in big endian into a bigint value.

### Syntax

```
from_big_endian_64(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The bigint type.

### Examples

Decode the binary number 10 in big endian into a bigint value.

-   Query statement
    
    ```
    * | SELECT from_big_endian_64(to_big_endian_64(10))
    ```
    
-   Query and analysis results![from_big_endian_64](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p301239.png)
    

## from\_hex function

The from\_hex function decodes a hexadecimal number into a binary number.

### Syntax

```
from_hex(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the varbinary type.

### Return value type

The varbinary type.

### Examples

Decode the hexadecimal number D74D into a binary number.

-   Query statement
    
    ```
    * | SELECT from_hex('D74D')
    ```
    
-   Query and analysis results![from_hex](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p301237.png)
    

## length function

The length function returns the length of a binary number.

### Syntax

```
length(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The bigint type.

### Examples

Calculate the length of the region field value.

-   Query statement
    
    ```
    * | SELECT length('00101000')
    ```
    
-   Query and analysis results![length](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p300787.png)
    

## md5 function

The md5 function computes the MD5 hash value for a binary number.

### Syntax

```
md5(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the varbinary type.

### Return value type

The varbinary type.

### Examples

Compute the MD5 hash value for the binary number 1101.

-   Query statement
    
    ```
    * | SELECT MD5(from_base64('1101')) AS md5
    ```
    
-   Query and analysis results![MD5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p301139.png)
    

## to\_base64 function

The to\_base64 function encodes a binary number into a Base64 string representation.

### Syntax

```
to_base64(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The varchar type.

### Examples

Encode the binary number 10 into a Base64 string representation.

-   Query statement
    
    ```
    * | SELECT  to_base64(from_base64('10')) AS base64
    ```
    
-   Query and analysis results![to_base64](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p301152.png)
    

## to\_base64url function

The to\_base64url function encodes a binary number into a Base64 string representation by using URL reserved characters.

### Syntax

```
to_base64url(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The varchar type.

### Examples

Encode the binary number 100 into a Base64 string representation by using URL reserved characters.

-   Query statement
    
    ```
    * | SELECT  to_base64url(from_base64('100'))
    ```
    
-   Query and analysis results![ to_base64url](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p301236.png)
    

## to\_hex function

The to\_hex function encodes a binary number into a hexadecimal number.

### Syntax

```
to_hex(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The varchar type.

### Examples

Encode the binary number 100 into a hexadecimal number.

-   Query statement
    
    ```
    * | SELECT to_hex(from_base64('100'))
    ```
    
-   Query and analysis results![to_hex](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p301230.png)
    

## to\_big\_endian\_64 function

The to\_big\_endian\_64 function encodes a bigint value into a binary number in big endian.

### Syntax

```
to_big_endian_64(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the bigint type.

### Return value type

The varbinary type.

### Examples

Encode the bigint value 0 into a binary number in big endian.

-   Query statement
    
    ```
    * | SELECT to_big_endian_64(0)
    ```
    
-   Query and analysis results![to_big_endian_64](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6887082361/p301147.png)
    

## sha1 function

The sha1 function computes the SHA-1 hash value for a binary number.

### Syntax

```
sha1(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The varbinary type.

### Examples

Compute the SHA-1 hash value for the binary number 1101.

-   Query statement
    
    ```
    * | SELECT sha1(from_base64('1101')) AS sha1
    ```
    
-   Query and analysis results![sha1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7887082361/p301142.png)
    

## sha256 function

The sha256 function computes the SHA-256 hash value for a binary number.

### Syntax

```
sha256(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The varbinary type.

### Examples

Compute the SHA-256 hash value for the binary number 1101.

-   Query statement
    
    ```
    * | SELECT sha256(from_base64('1101')) AS sha256
    ```
    
-   Query and analysis results![sha256](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7887082361/p301143.png)
    

## sha512 function

The sha512 function computes the SHA-512 hash value for a binary number.

### Syntax

```
sha512(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The varbinary type.

### Examples

Compute the SHA-512 hash value for the binary number 1101.

-   Query statement
    
    ```
    * | SELECT sha512(from_base64('1101')) AS sha512
    ```
    
-   Query and analysis results![sha512](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7887082361/p301145.png)
    

## xxhash64 function

The xxhash64 function computes the xxhash64 hash value for a binary number.

### Syntax

```
xxhash64(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the binary type.

### Return value type

The varbinary type.

### Examples

Compute the xxhash64 hash value for the binary number 10.

-   Query statement
    
    ```
    * | SELECT xxhash64(from_base64('10'))
    ```
    
-   Query and analysis results![xxhash64](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7887082361/p301227.png)
