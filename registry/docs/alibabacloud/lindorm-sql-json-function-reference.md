This document describes the usage, parameters, and examples of all JSON functions in Lindorm SQL.

## **JSON function overview**

**Function classification**

**Function name**

**Function description**

JSON constructor functions

[json\_object](#c7f2675e4ahu8)

Creates a JSON object.

[json\_array](#06f5e6e65brov)

Creates a JSON array.

JSON extraction functions

[json\_extract](#91630f8347syp)

Extracts a value from a JSON document at a specified path.

[json\_extract\_string](#e69554b3ebvev)

Extracts a value at a specified path and converts it to a string.

[json\_extract\_long](#f566160a1e3bl)

Extracts a value at a specified path and converts it to a long integer.

[json\_extract\_double](#c5aa1e07f5q0b)

Extracts a value at a specified path and converts it to a floating-point number.

JSON containment check functions

[json\_contains](#ccdb10eaedein)

Checks if a JSON document contains all specified values or objects.

[json\_contains\_any](#076158aa88kg2)

Checks if a JSON document contains any of the specified values or objects.

JSON update functions

[json\_set](#608a4fc134hj6)

Inserts or updates data in a JSON document and returns the new document. This is equivalent to `json_insert` + `json_replace`.

[json\_insert](#da8daa69fe6vi)

Inserts data into a JSON document and returns the new document. It only inserts a new field if the field does not exist.

[json\_replace](#5ab82adaadnqp)

Replaces existing data in a JSON document and returns the new document. It only updates the value if the field exists.

[json\_remove](#3cd15db1308ph)

Deletes data from a JSON document at a specified path and returns the modified document.

[json\_upsert](#a62589ddb6kuo)

Semantically the same as `json_set`, but it can handle NULL values.

## **Function descriptions**

### **JSON constructor functions**

#### **json\_object**

Creates a JSON object.

**Syntax**:

```
json_object(key1, value1, key2, value2, ...)
```

**Parameters**:

-   `key`: The key name. It must be a string.
    
-   `value`: The value. It can be of any type.
    

**Examples**:

```
-- Create a simple object
SELECT json_object('name', 'Alice', 'age', 25);
-- Result: {"name": "Alice", "age": 25}

-- Use in an INSERT statement
UPSERT INTO users (id, data) VALUES (1, json_object('name', 'Charlie', 'city', 'Beijing'));
```

#### **json\_array**

Creates a JSON array.

**Syntax**:

```
json_array(value1, value2, value3, ...)
```

**Parameters**:

-   `value`: The value. It can be a scalar, object, or array.
    

**Examples**:

```
-- Create a simple array
SELECT json_array('apple', 'banana', 'orange');
-- Result: ["apple", "banana", "orange"]

-- Use in an INSERT statement
UPSERT INTO products (id, tags) VALUES (1, json_array('electronics', 'mobile', 'smartphone'));
```

### **JSON extraction functions**

#### **json\_extract**

Extracts a value from a JSON document at a specified path.

**Syntax**:

```
json_extract(json_column, 'path')
```

**Parameters**:

-   `json_column`: A column or expression of the JSON type.
    
-   `path`: A JSON path expression, such as `$.field`, `$.array[0]`, or `$.nested.field`.
    

**Examples**:

```
-- Extract a simple field
SELECT json_extract('{"name": "Alice", "age": 25}', '$.name');
-- Result: "Alice"

-- Extract a nested field
SELECT json_extract('{"user": {"name": "Bob", "age": 30}}', '$.user.name');
-- Result: "Bob"

-- Extract an array element
SELECT json_extract('{"skills": ["Java", "Python"]}', '$.skills[0]');
-- Result: "Java"

-- Extract the entire array
SELECT json_extract('{"skills": ["Java", "Python"]}', '$.skills');
-- Result: ["Java", "Python"]

-- WHERE clause with a number
select * from tb where json_extract(c2, '$.k3.k4') > 5;

-- WHERE clause with a string
select * from tb where json_extract_string(c2, '$.k2') = '1';
```

#### **Type-safe extraction functions: json\_extract\_type**

#### json\_extract\_string

Extracts a value at a specified path and converts it to a string. If the value at the path is not a string, it returns `NULL` by default.

```
SELECT json_extract_string('{"name": "Alice"}', '$.name');
-- Result: Alice (VARCHAR type)

SELECT json_extract_string('{"number": "30"}', '$.name');
-- Result: NULL. (The type is Number, which does not match.)
```

#### json\_extract\_long

Extracts a value at a specified path and converts it to a long integer. If the value at the path is not a number, Java Database Connectivity (JDBC) throws an error.

```
SELECT json_extract_long('{"id": 123456789}', '$.id');
-- Result: 123456789 (LONG type)

SELECT json_extract_long('{"id": 123456.789}', '$.id');
-- Throws an error

SELECT json_extract_long('{"id": "123456.789"}', '$.id');
-- Throws an error
```

#### json\_extract\_double

Extracts a value at a specified path and converts it to a floating-point number. If the value at the path is not a floating-point number, JDBC throws an error.

```
SELECT json_extract_double('{"id": 12345.56}', '$.id');
-- Result: 12345.56 (Double type)

SELECT json_extract_double('{"id": 12345}', '$.id');
-- Result: 12345.0 (Double type)

SELECT json_extract_double('{"id": "123456.789"}', '$.id');
-- Throws an error
```

These three functions are strongly typed. The element at the specified path must strictly match the function's type. Otherwise, the function returns NULL or throws an error. You can configure the cluster to enforce type conversion, but this is not recommended. We recommend that you define data types before you insert JSON data because mixed types can cause unexpected logical problems.

### **JSON containment check functions**

#### **json\_contains**

Checks if a JSON document contains all specified values or objects.

**Syntax**:

```
json_contains(target, candidate[, path])
```

**Parameters**:

-   `target_json`: Required. The JSON document.
    
-   `candidate_json`: Required. The JSON document to check for.
    
-   `path`: Optional. The path expression.
    

For more information about the parameters, see [Additional parameter information](#713775b65ekqg).

**Return value**:

-   `1` (true): The specified value is found.
    
-   `0` (false): The target does not contain the candidate.
    

The json\_contains function returns `1` if the `target_json` document contains the `candidate_json` document, and `0` otherwise. If you specify the `path` parameter, the function checks whether the data at the specified `path` contains the `candidate_json` document.

The `json_contains` function returns `NULL` in the following cases:

-   The specified path does not exist in the JSON document.
    
-   Any parameter is `NULL`.
    

**Examples**:

```
-- Create a table and insert data
CREATE TABLE test_table (id INT, c1 VARCHAR, data JSON, PRIMARY KEY(id));
UPSERT INTO test_table (id, data) VALUES (1, NULL);
UPSERT INTO test_table (id, data) VALUES (2, '{"skills": ["Java", "Python"]}');
UPSERT INTO test_table (id, data) VALUES (3, '{"skills": ["Go", "C"]}');
UPSERT INTO test_table (id, data) VALUES (4, '{"technical_skills": ["Java", "Go", "Rust"]}');
UPSERT INTO test_table (id, data) VALUES (5, '["Java","C++", "JavaScript"]');
UPSERT INTO test_table (id, data) VALUES (6, '{"skills": "Java"}');
UPSERT INTO test_table (id, data) VALUES (7, '["Java", "C#"]');
UPSERT INTO test_table (id, data) VALUES (8, '{"skills": ["Go", "Rust"]}');
```

```
-- Two-parameter form. The default path is '$'.
mysql>  SELECT id, data FROM test_table WHERE json_contains(data, '["Java"]') and id>0 and id<10;
+------+------------------------------+
| id   | data                         |
+------+------------------------------+
|    5 | ["Java","C++", "JavaScript"] |
|    7 | ["Java", "C#"]               |
+------+------------------------------+
2 rows in set (0.01 sec)

-- Three-parameter form: Check a specified path
mysql>  SELECT id, data FROM test_table WHERE json_contains(data, '["Java"]', '$.skills') and id>0 and id<10;
+------+--------------------------------+
| id   | data                           |
+------+--------------------------------+
|    2 | {"skills": ["Java", "Python"]} |
+------+--------------------------------+
1 row in set (0.01 sec)

-- Contains both "Java" and "Go"
mysql>  SELECT id, data FROM test_table WHERE json_contains(data, '["Java","Go"]', '$.skills') and id>0 and id<10;
Empty set (0.02 sec)

-- The array or element contains the scalar "Java" 
mysql>  SELECT id, data FROM test_table WHERE json_contains(data, '"Java"', '$.skills') and id>0 and id<10;
+------+--------------------------------+
| id   | data                           |
+------+--------------------------------+
|    2 | {"skills": ["Java", "Python"]} |
|    6 | {"skills": "Java"}             |
+------+--------------------------------+
2 rows in set (0.01 sec)

-- The array element contains an array with only the scalar "Java". (For id=6, the JSON document at the path is a scalar. A subset of a scalar can only be a scalar, not an array.)
mysql>  SELECT id, data FROM test_table WHERE json_contains(data, '["Java"]', '$.skills') and id>0 and id<10;
+------+--------------------------------+
| id   | data                           |
+------+--------------------------------+
|    2 | {"skills": ["Java", "Python"]} |
+------+--------------------------------+
1 row in set (0.01 sec)

-- Check if the entire document contains an object
SELECT json_contains('{"a": 1, "b": 2}', '{"a": 1}');
-- Result: 1

-- Check if a specified path contains a value
SELECT json_contains('{"a": 1, "b": 2}', '1', '$.a');
-- Result: 1

SELECT json_contains('{"a": 1, "b": 2}', '1', '$.b');
-- Result: 0

-- Check for containment in an array
SELECT json_contains('{"skills": ["Java", "Python"]}', '"Java"', '$.skills');
-- Result: 1
```

**Additional parameter information**

1.  `candidate_json` is a JSON document. You must represent the corresponding element as a JSON string.
    
    -   JSON document that contains the number 10: `'10'`
        
    -   JSON document that contains the string "10": `'"10"'`
        
    -   JSON document that contains a list of numbers: `'[1,2,3]'`
        
    -   JSON document that contains a list of strings: `'["10","abc","key"]'`
        
2.  A subset of a scalar can only be a scalar. A subset of an array can be an element or an array.
    
    JSON type classifications:
    
    -   Scalar: String, Number (Integer/Double), Boolean, Null
        
    -   Complex type: Array, Object
        
    
    Consider the check condition `json_contains_any(skills, '["Java"]', '$.technical_skills')`. For the JSON at the `$.technical_skills` path:
    
    -   If the value is `{"technical_skills":"Java"}`, the function returns `false`. A subset of a string cannot be a list.
        
    -   If the value is `{"technical_skills":["Java"]}` or `{"technical_skills":["Java","Go"]}`, the function returns `true`.
        
    
    Consider the check condition `json_contains_any(skills, '"Java"', '$.technical_skills')` . For the JSON at the `$.technical_skills` path:
    
    -   If the value is `{"technical_skills":"Java"}`, the function returns `true`.
        
    -   If the value is `{"technical_skills":["Java"]}` or `{"technical_skills":["Java","Go"]}`, the function returns `true`.
        

#### **json\_contains\_any**

Checks if a JSON document contains any of the specified values or objects.

**Syntax**:

The syntax is the same as for `json_contains`. For more information about the differences, see [Comparison of JSON containment check functions](#cb942526709x3).

**Examples**:

```
mysql> select json_contains_any('{"skills": ["Java", "Python"]}', '["Java", "Go"]');
+--------+
| EXPR$0 |
+--------+
|      0 |
+--------+
1 row in set (0.02 sec)

mysql> select json_contains_any('{"skills": ["Java", "Python"]}', '["Java", "Go"]','$.skills');
+--------+
| EXPR$0 |
+--------+
|      1 |
+--------+
1 row in set (0.03 sec)

-- Default two-parameter form. The path defaults to '$'.
mysql> SELECT id, data FROM test_table WHERE json_contains_any(data, '["Java", "Go"]') limit 10;
+------+------------------------------+
| id   | data                         |
+------+------------------------------+
|    5 | ["Java","C++", "JavaScript"] |
|    7 | ["Java", "C#"]               |
+------+------------------------------+
2 rows in set (0.01 sec)

-- Three-parameter form
mysql>  SELECT id, data FROM test_table WHERE json_contains_any(data, '["Java", "Go", "Rust"]', '$.skills') limit 10;
+------+--------------------------------+
| id   | data                           |
+------+--------------------------------+
|    2 | {"skills": ["Java", "Python"]} |
|    3 | {"skills": ["Go", "C"]}        |
|    6 | {"skills": "Java"}             |
|    8 | {"skills": ["Go", "Rust"]}     |
+------+--------------------------------+
4 rows in set (0.01 sec)

-- Check if it contains any value from the array
SELECT json_contains_any('{"skills": ["Java", "Python"]}', '["Java", "Go"]');
-- Result: 0
SELECT json_contains_any('{"skills": ["Java", "Python"]}', '["Java", "Go"]','$.skills');
-- Result: 1

-- Check at a specified path
SELECT json_contains_any('{"departments": ["Engineering", "Sales"]}', '["Marketing", "Engineering"]', '$.departments');
-- Result: 1
```

### **JSON update functions**

#### **json\_set**

Inserts or updates data in a JSON document and returns the modified document. This function is equivalent to `json_insert` + `json_replace`.

**Syntax**:

```
json_set(json_column, 'path', new_value)
```

**Behavior**:

-   If the specified path exists, this function updates the value at that path.
    
-   If the specified path does not exist, this function inserts the value at that path.
    
-   **If the JSON column is NULL, the result is also NULL. No action is taken.**
    

**Examples**:

```
-- Update an existing field
UPSERT INTO test_table (id, data) VALUES (3, '{"name": "Charlie", "age": 30}');
UPDATE test_table SET data = json_set(data, '$.age', 31) WHERE id = 3;
-- Result: {"name": "Charlie", "age": 31}

-- Insert a new field
UPDATE test_table SET data = json_set(data, '$.department', 'Engineering') WHERE id = 3;
-- Result: {"name": "Charlie", "age": 31, "department": "Engineering"}

-- When the JSON column is NULL (key difference from json_upsert)
UPSERT INTO test_table (id,c1) VALUES (4,'test');
UPDATE test_table SET data = json_set(data, '$.name', 'David') WHERE id = 4;
-- Result: NULL
```

#### **json\_insert**

Inserts data into a JSON document and returns the modified document. This function inserts a new value only if the value does not exist at the specified path.

**Syntax**:

```
json_insert(json_column, 'path', new_value)
```

**Behavior**:

-   If the specified path does not exist, this function inserts the value at that path.
    
-   If the specified path already exists, **this function takes no action.**
    

**Examples**:

```
-- Insert a new field
UPSERT INTO test_table (id, data) VALUES (5, '{"name": "Eve"}');
UPDATE test_table SET data = json_insert(data, '$.age', 28) WHERE id = 5;
-- Result: {"name": "Eve", "age": 28}

-- Attempt to insert an existing field (no effect)
UPDATE test_table SET data = json_insert(data, '$.name', 'New Name') WHERE id = 5;
-- Result: {"name": "Eve", "age": 28} (The name field remains unchanged)
```

#### **json\_replace**

Replaces existing data in a JSON document and returns the modified document. This function updates a value only if the value exists at the specified path.

**Syntax**:

```
json_replace(json_column, 'path', new_value)
```

**Behavior**:

-   If the specified path exists, this function updates the value at that path.
    
-   If the specified path does not exist, **this function takes no action.**
    

**Examples**:

```
-- Update an existing field
UPSERT INTO test_table (id, data) VALUES (6, '{"name": "Frank", "age": 35}');
UPDATE test_table SET data = json_replace(data, '$.age', 36) WHERE id = 6;
-- Result: {"name": "Frank", "age": 36}

-- Attempt to update a non-existent field (no effect)
UPDATE test_table SET data = json_replace(data, '$.city', 'Shanghai') WHERE id = 6;
-- Result: {"name": "Frank", "age": 36} (No city field)
```

#### **json\_remove**

Deletes data from a JSON document at a specified path and returns the modified document.

**Syntax**:

```
json_remove(json_column, 'path')
```

**Behavior**:

-   If the specified path exists, this function deletes the data at that path.
    
-   If the specified path does not exist, **this is a safe operation and no error occurs.**
    

**Examples**:

```
-- Delete a field
UPSERT INTO test_table (id, data) VALUES (7, '{"name": "Grace", "temp_field": "to_remove"}');
UPDATE test_table SET data = json_remove(data, '$.temp_field') WHERE id = 7;
-- Result: {"name": "Grace"}

-- Delete a non-existent field (safe)
UPDATE test_table SET data = json_remove(data, '$.nonexistent') WHERE id = 7;
-- Result: {"name": "Grace"} (No error)
```

#### **json\_upsert**

This function is semantically the same as `json_set`, but it can handle NULL values.

**Syntax**:

```
json_upsert(json_column, 'path', new_value)
```

**Behavior**:

-   If the JSON column is NULL, this function creates a new object: `{path: new_value}`
    
-   If the specified path exists, this function updates the value at that path.
    
-   If the specified path does not exist, this function inserts the value at that path.
    

**Examples**:

```
-- When the JSON column is NULL
CREATE TABLE test_table (id INT, c1 VARCHAR, data JSON, PRIMARY KEY(id));
UPSERT INTO test_table (id,c1) VALUES (1,'test');
UPDATE test_table SET data = json_upsert(data, '$.name', 'Alice') WHERE id = 1;
-- Result: {"name": "Alice"}

-- Update an existing field
UPSERT INTO test_table (id, data) VALUES (2, '{"name": "Bob", "age": 25}');
UPDATE test_table SET data = json_upsert(data, '$.age', 26) WHERE id = 2;
-- Result: {"name": "Bob", "age": 26}

-- Insert a new field
UPDATE test_table SET data = json_upsert(data, '$.city', 'Beijing') WHERE id = 2;
-- Result: {"name": "Bob", "age": 26, "city": "Beijing"}
```

For more information about the differences between these JSON update functions, see [Comparison of JSON update functions](#2f1abd86dbdxa).

## **Function comparison summary**

### **Comparison of JSON containment check functions**

**Function**

**Difference**

`json_contains`

For `json_contains`, every element in `candidate_json` must also be an element in `target_json`.

In other words, `candidate_json` must be a subset of `target_json`.

`json_contains_any`

For `json_contains_any`, at least one element in `candidate_json` must also be an element in `target_json`.

In other words, `candidate_json` and `target_json` must have at least one element in common.

### **Comparison of JSON update functions**

**Function**

**NULL column handling**

**Field exists**

**Field does not exist**

**Primary use case**

`json_set`

Remains NULL

Update

Insert

Updates a column that is known to be not NULL. (Aligns with MySQL semantics).

`json_upsert`

Creates a new object

Update

Insert

General-purpose updates. Inserts even if the column is NULL.

`json_insert`

Remains NULL

No operation

Insert

Inserts only new fields.

`json_replace`

Remains NULL

Update

No operation

Updates only existing fields.

`json_remove`

Remains NULL

Delete

No operation

Deletes fields.

## Function-based index support

### **Syntax**

```
create_index_statement ::=  CREATE INDEX [ index_name ]
                                ON table_name '(' index_identifier ')'
                              [INCLUDE include_identifier]
                              [ASYNC]
                                 [ index_options ]
index_identifier       ::=  '('json_extract_type(column, json_path)')'
include_identifier   ::= '('column_name1,...,column_namen ')'
```

### **Parameter descriptions**

**Parameter**

**Description**

index\_name

The name of the index table.

table\_name

The name of the wide table.

json\_extract\_type

Extracts a field of a specific data type from a JSON column to use as a secondary index. If the data type does not match, a secondary index is not built. The following function types are supported:

-   json\_extract\_string
    
-   json\_extract\_long
    
-   json\_extract\_double
    

column

The name of the JSON column.

json\_path

The path in the JSON column. It is used to extract the value at the specified path.

ASYNC

Builds the index asynchronously. If you do not add ASYNC, the index is built synchronously.

For more information about search index support for JSON functions, see Use search indexes for the Lindorm JSON type.

### Supported functions

The following JSON functions support the creation of function-based indexes:

#### **Accelerate queries related to** `**json_extract**` **and** `**json_extract_type**`

-   `json_extract_string(json_column, 'path')`
    
-   `json_extract_long(json_column, 'path')`
    
-   `json_extract_double(json_column, 'path')`
    

Lindorm wide table SQL lets you create secondary indexes for data at specific paths within a column of the JSON data type. However, when you build a secondary index, you must specify the type of the `json_extract` function for the JSON column.

#### **Accelerate queries related to** `json_contains`

`json_contains(json_column, 'value', 'path')`

Currently, the `value` and `path` parameters must be fixed values. The query conditions must be static.

### Index creation examples

```
-- Create an index for json_contains
CREATE INDEX idx_user_role ON test_table (json_contains(data, '"admin"', '$.roles')) INCLUDE(data) SYNC;

-- Create an index for json_extract_string
CREATE INDEX idx_user_city ON test_table (json_extract_string(data, '$.address.city')) INCLUDE(data) SYNC;

-- Create an index for json_extract_string without including columns
CREATE INDEX idx_user_city ON test_table (json_extract_string(data, '$.address.city'));

-- Create an index for json_extract_long
CREATE INDEX idx_user_age ON test_table (json_extract_long(data, '$.age')) INCLUDE(data) SYNC;

-- View the index creation result
SHOW INDEX FROM test_table;
```

## **Limitations**

-   Always follow the standard syntax when you use JsonPath.
    
-   Be aware of the performance impact of complex JSON operations.
    
-   For frequently queried paths, you can create an index to improve the query response speed.
    

## Common error handling

-   **Invalid JSON path**
    
    An `illegal json path` error occurs if the `JsonPath` is not a valid `JsonPath`. For more information, see [MySQL's definition of `JsonPath`](https://dev.mysql.com/doc/refman/8.4/en/json-search-functions.html).
    
-   **Invalid JSON value**
    
    `json_contain candidate is not a valid value`: Check that the `candidate` parameter is a valid JSON string.
    
-   **Full table scan warning**
    
    `This query may be a full table scan and thus may have unpredictable performance`: This warning indicates an inefficient full table scan. You can create an index to accelerate the query or add a \`LIMIT\` clause to filter a subset of the data.
    

## Recommendations

1.  **Choose the right update function**
    
    You can choose `json_upsert` or `json_set` based on your business needs.
    
2.  **Index planning**
    
    You can create function-based indexes for frequently queried JSON paths.
    
3.  **Type safety**
    
    You can use type-specific extraction functions to ensure data type correctness. Avoid mixing numbers and numeric strings, which can cause ambiguity. For example, avoid mixing the number 10 and the string "10".
