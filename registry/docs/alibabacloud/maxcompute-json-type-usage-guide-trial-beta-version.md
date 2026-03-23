MaxCompute supports the JSON data type. This data type improves the performance of computing and analyzing JSON data in tables. This topic describes how to use the JSON data type.

## **Introduction to the JSON data type**

### **Background**

Semi-structured data falls between structured and unstructured data. This type of data has a schema, but the schema is flexible and does not have strong constraints. The schema is usually self-describing. JSON data is a typical example. MaxCompute already enhances SQL support for semi-structured data with features such as schema evolution, JSON strings, built-in functions for complex types, and Lambda expressions. In this model, you must process semi-structured data in a standardized way before you can import it into structured tables with a defined schema. If your business data changes, you must explicitly run schema evolution Data Definition Language (DDL) statements to modify the table schema.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8807540961/p686801.png)

This model has strong schema constraints. You cannot quickly import semi-structured data into the system. During data import, data that does not conform to the table schema is discarded and cannot be fully saved. To solve these problems, MaxCompute provides a new data type: JSON. The JSON type supports semi-structured data without strong schema constraints. It also takes full advantage of column-oriented storage optimizations to meet the requirements for high flexibility and high performance.

### **Basic principles**

The JSON data type is a new data type that you can use just like other types. You do not need to manage schema information. After you insert JSON data, MaxCompute automatically extracts a public schema and performs optimizations. MaxCompute stores the data in a column-oriented format whenever possible to improve performance. The following example uses test data:

```
CREATE TABLE json_table
(
    json_val  json
);

CREATE TABLE string_table
(
    string_val  STRING
);

INSERT INTO string_table VALUES
        ('{"a":1, "b":2}')
        ,('{"a":"key", "b":2}')
        ,('{"c":3}');

INSERT INTO json_table
SELECT  json_parse(string_val)
FROM    string_table;
```

When you write data, MaxCompute automatically extracts the public schema `<"a":binary, "b":bigint, "c":bigint>`. When you read data, MaxCompute can perform column pruning based on the schema. This reduces the amount of data that needs to be read and improves efficiency. For example:

```
SELECT  json_val["b"]
        ,json_val["c"]
FROM    json_table
;  
-- When reading the table, column pruning is performed to keep only the b and c variables.
+-----+-----+
| _c0 | _c1 |
+-----+-----+
| 2   | NULL |
| 2   | NULL |
| NULL | 3   |
+-----+-----+
```

For the non-public part of the schema, MaxCompute uses the BINARY type for storage. This reduces storage space compared to the STRING type. The new JSON data type also greatly improves the conversion efficiency between STRING and JSON compared to user-defined functions (UDFs).

## **Use the JSON data type**

-   In new MaxCompute projects, the `odps.sql.type.json.enable` parameter is set to true by default.
    
-   In existing MaxCompute projects, the `odps.sql.type.json.enable` parameter is set to false by default.
    

To use the JSON data type in an existing MaxCompute project, run `SET odps.sql.type.json.enable=true;` to enable the feature. You can run the `setproject;` command to check the current value of the `odps.sql.type.json.enable` parameter.

### **Usage notes**

-   **SDK version requirements**
    
    -   Only Java SDK V0.44.0 and later versions are supported.
        
    -   Only PyODPS V0.11.4.1 and later versions are supported.
        
-   **Table operation limits**
    
    -   You cannot add a JSON column to a table.
        
    -   Clustered tables are not supported.
        
    -   Tables of the Delta Table type are not supported.
        
-   **SQL operation limits**
    
    -   Comparison operations on the JSON type are not supported.
        
    -   You cannot use `ORDER BY` or `GROUP BY` clauses on the JSON type. You also cannot use a JSON type column as a `JOIN` key.
        
-   **Data precision**
    
    -   The integer part of a JSON NUMBER is stored as a BIGINT type. An overflow occurs if the integer is outside the BIGINT range.
        
    -   The decimal part of a JSON NUMBER is stored as a DOUBLE type. Precision loss may occur when the decimal part is converted to the DOUBLE type.
        
-   **Character limits**: The Unicode character `\u0000` is not supported in strings that are used to generate JSON data.
    
-   **Engine compatibility**: If you use another engine, such as Hologres, to read data from a table, the JSON data type cannot be read.
    
-   Java UDFs and Python UDFs do not support the JSON type.
    
-   The JSON data type can be nested up to 20 levels deep.
    
-   **Development tools**
    
    Supported development tools include the MaxCompute client (odpscmd), MaxCompute Studio, and DataWorks. External ecosystems such as Dataphin are not supported. If you want to use the JSON data type with an external system, you must confirm its compatibility before you start. When you use the odpscmd client, note the following:
    
    -   You must upgrade the client to V0.46.5 or later. Otherwise, you cannot run the `DESC json_table` command or download JSON data using Tunnel.
        
    -   In the `conf\odps_config.ini` file in the client installation path, set the `use_instance_tunnel` parameter to `false`. Otherwise, queries will fail.
        

### Literal constants

The JSON type is strictly defined according to JSON standards. It supports BOOLEAN, NUMBER, STRING, NULL, ARRAY, and OBJECT. The NUMBER type uses BIGINT and DOUBLE for storage. Values that exceed the limits may experience precision loss. Note that `json 'null'` is different from `sql null`.

```
JSON 'null'
JSON '123'
JSON '123.34'
JSON 'true'
JSON '{"id":123,"name":"MaxCompute"}'
JSON '[12, 34]'
```

Constants must conform to JSON standards. For example, `JSON '{id:123,"name":"MaxCompute"}'` is an invalid JSON string because the key `id` must be enclosed in double quotation marks (`""`).

### **JSON type definition**

You do not need to specify a schema. You can create a JSON type just as you would a basic data type.

```
CREATE TABLE mf_json_table (json_val JSON);
```

### Generate JSON data

You can generate JSON data in several ways:

-   **JSON literal**
    
    ```
    INSERT INTO mf_json_table VALUES (json '123');
    ```
    
-   **JSON functions**
    
    ```
    -- JSON_OBJECT and JSON_ARRAY are built-in functions of MaxCompute.
    INSERT INTO mf_json_table SELECT JSON_OBJECT("key",123, "value", "abc");
    
    SELECT * FROM mf_json_table;
    
    -- The following result is returned:
    +----------+
    | json_val |
    +----------+
    | 123      |
    | {"key":123,"value":"abc"} |
    +----------+
    
    
    INSERT INTO mf_json_table SELECT JSON_ARRAY("key",234, "value", "abc");
    
    SELECT * FROM mf_json_table;
    
    -- The following result is returned:
    +----------+
    | json_val |
    +----------+
    | 123      |
    | ["key",234,"value","abc"] |
    | {"key":123,"value":"abc"} |
    +----------+
    ```
    
-   **Type conversion**
    
    Note the differences between converting data using [CAST](/help/en/maxcompute/user-guide/cast) and parsing data using json\_parse. For more information, see [JSON functions](/help/en/maxcompute/user-guide/json-function/).
    
    ```
    INSERT INTO mf_json_table SELECT CAST("abc" AS json);
    SELECT * FROM mf_json_table;
    -- The following result is returned:
    +----------+
    | json_val |
    +----------+
    | 123      |
    | "abc"    |
    | ["key",234,"value","abc"] |
    | {"key":123,"value":"abc"} |
    +----------+
    ```
    

### **Access JSON data**

You can access JSON data using indexing, or using the json\_extract and get\_json\_object functions. These functions return a JSON type.

#### **Access by index**

Access by index uses the **strict** mode. This includes access by index number and field name. If the JSON Path does not match the actual structure, NULL is returned.

`json_val['a'][0][1]` is equivalent to `json_extract(json_val, 'strict $.a[0][1]')`.

```
-- Returns 123
SELECT v['id'] 
  FROM VALUES (JSON '{"id":123}') AS t(v);
  
-- Returns 12
SELECT v[0] 
  FROM VALUES (JSON '[12, 34]') AS t(v);
  
-- Returns 1
SELECT v['x']['a']  FROM VALUES (json '{"x": {"a": 1, "b": 2}}') AS t(v);

-- Returns NULL
SELECT v[0] 
FROM VALUES (JSON '{"id":123}') AS t(v);

-- Returns NULL
SELECT v['not_exists'] 
FROM VALUES (JSON '{"id":123}') AS t(v);
```

#### **Access using JSON functions**

For example, you can access data using the [JSON\_EXTRACT](/help/en/maxcompute/user-guide/json-extract) or [GET\_JSON\_OBJECT](/help/en/maxcompute/user-guide/get-json-object) function.

```
-- Access data using the GET_JSON_OBJECT function. A STRING value 'MaxCompute' is returned.
SELECT GET_JSON_OBJECT(v, '$.x.name')
  FROM VALUES (JSON '{"x": {"id": 1001, "name": "MaxCompute"}}') AS t(v);
  
-- The following result is returned:
+-----+
| _c0 |
+-----+
| MaxCompute |
+-----+

-- Access data using the JSON_EXTRACT function. A JSON value 'MaxCompute' is returned.
SELECT JSON_EXTRACT(v, '$.x.name') 
  FROM VALUES (JSON '{"x": {"id": 1001, "name": "MaxCompute"}}') AS t(v);
  
-- The following result is returned:
+-----+
| _c0 |
+-----+
| "MaxCompute" |
+-----+
```

The new JSON type uses a more standardized JSON Path parser. This parser differs from the one that is used by the GET\_JSON\_OBJECT function and may cause compatibility issues. We recommend that you use the JSON\_EXTRACT function in new SQL statements.

For more information about built-in JSON functions, see [JSON functions](/help/en/maxcompute/user-guide/json-function/).

#### JSON Path specifications

A JSON Path specifies the location of a node in JSON data. It helps you find nodes and retrieve the data that you want. It is often used as a parameter in JSON functions. The JSON Path parser that is used for the new JSON type is consistent with the PostgreSQL parser and is a subset of it. An example is shown below:

-   JSON data:
    
    ```
    { "name": "Molly",
      "phones": [ 
        { "phonetype": "work",
        "phone#": "650-506-7000" 
        },
        { "phonetype": "cell",
          "phone#": "650-555-5555" 
        }
      ]
    }
    ```
    
-   JSON Path example: The result of `$.phones[1]."phone#"` is "650-555-5555".
    

The following table describes the JSON Path specifications based on the preceding JSON data:

**Variable**

**Access operator**

accessor

-   member accessor: `$.phone`. For special characters, you can use expressions such as `$."sf*"`.
    
-   wildcard member accessor: `$.*`.
    
-   element accessor: `$[1, 2, 4 to 7]`.
    
-   wildcard element accessor: `$[*]`.
    

mode

The optional values are **lax** and **strict**. The default mode is **lax**.

-   **lax**: The lax mode includes wrapper and unwrapper processes. For example, `'lax $.phones.phonetype'`.
    
    The following list shows the results of different expressions based on the preceding JSON data:
    
    -   `$[0]`: Wraps the object \[{....}\]. This accesses the data at index 0 and returns `{....}`.
        
    -   `$[1]`: Wraps the object \[{....}\]. This accesses the data at index 1 and returns `NULL`.
        
    -   `$.name.*`: The value under "name" is "Molly". An object is expected, so `NULL` is returned.
        
    -   `$.name[*]`: The value of "name" is "Molly". Because an array is expected, the value is wrapped into `["Molly"]`, and `["Molly"]` is returned.
        
    -   `$.phones.phonetype`: The value of phones is an array. The array is unwrapped into two objects. The system then gets the phonetype from each object and returns `["work","cell"]`.
        
    -   `$.phones[*].phonetype`: Directly gets the value of phonetype and returns `["work","cell"]`.
        
    
-   **strict**: The strict mode requires that the JSON Path matches the actual data structure. Otherwise, NULL is returned. For example, `'strict $.phones.phonetype'`.
    
    The following list shows the results of different expressions based on the preceding JSON data:
    
    -   `strict $.phones.phonetype`: The child node of phones is an array, but an object is expected. `NULL` is returned.
        
    -   `strict $.address`: The address variable does not exist, so `NULL` is returned.
        
    

**Important**

The **lax** mode does not support column pruning optimization. The **strict** mode supports it.

## **JSON type usage examples**

```
-- If the odps.sql.type.json.enable parameter for your project is false, run the following command.
SET odps.sql.type.json.enable=true;
CREATE TABLE json_table(json_val json);

CREATE TABLE mf_string_table(string_val string);
INSERT INTO mf_string_table VALUES('{"a":1, "b":2}');

INSERT INTO json_table SELECT json_parse(string_val) 
                         FROM mf_string_table 
                         WHERE json_valid(string_val);


SELECT * FROM json_table WHERE json_val IS NOT NULL;
-- The following result is returned:
+----------+
| json_val |
+----------+
| {"a":1,"b":2} |
+----------+

SELECT json_val['b'] FROM json_table WHERE json_val IS NOT NULL;
-- The following result is returned:
+-----+
| _c0 |
+-----+
| 2   |
+-----+
```
