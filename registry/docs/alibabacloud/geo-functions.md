This topic describes the syntax of geo functions. This topic also provides examples on how to use the functions.

The following table describes the geo functions that are supported by Simple Log Service.

**Important** If you want to use strings in analytic statements, you must enclose strings in single quotation marks (''). Strings that are not enclosed or enclosed in double quotation marks ("") indicate field names or column names. For example, 'status' indicates the status string, and status or "status" indicates the status log field.

**Function**

**Syntax**

**Description**

Supported in SQL

Supported in SPL

[geohash function](#section-v65-fai-y9f)

geohash(_x_)

Encodes latitudes and longitudes by using the Geohash algorithm.

**Note**

Simple Log Service allows you to convert IP addresses into geographic location information such as countries, provinces, cities, operators, and latitudes and longitudes. For more information, see [IP functions](/help/en/sls/ip-functions#concept-wmd-slq-zdb).

√

×

## geohash function

The geohash function encodes latitudes and longitudes by using the Geohash algorithm.

### Syntax

```
geohash(x)
```

### Parameters

**Parameter**

**Description**

_x_

The value of this parameter is of the string type. The value indicates a latitude and a longitude. Example: `ip_to_geo(longitude,latitude)`.

### Return value type

The string type.

### Examples

Use the ip\_to\_geo function to convert the value of the client\_ip field into a latitude and a longitude. Then, use the geohash function to encode the latitude and longitude.

-   Query statement
    
    ```
    * | SELECT geohash(ip_to_geo(client_ip)) AS hash
    ```
    
-   Query and analysis results![geohash](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7291235361/p300313.png)
