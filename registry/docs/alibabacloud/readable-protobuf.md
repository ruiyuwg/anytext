The readable Protobuf feature is added in PolarDB for MySQL. For fields of the Protobuf-serialized BLOB type stored in a database, you can configure Protobuf schemas for them and use the `PROTO_TO_JSON(_blob_field_)` function to read their data. You can also use the `JSON_EXTRACT()` function to extract some information from data to create indexes or virtual columns.

## Background information

In the game industry, some data is serialized by using Protobuf and even compressed by using zlib before being written into BLOB-type fields in the database. The BLOB-type data in the database cannot be directly read and is inconvenient to software debugging and development. Even in data analysis scenarios, additional components must be used to read the data.

The readable Protobuf function provided by PolarDB for MySQL provide visual functions to directly read data serialized by using Protobuf and compressed by using zlib without using additional components.

## Prerequisites

The PolarDB cluster is of PolarDB for MySQL 8.0 and uses revision version 8.0.2.2.5 or later. For more information about how to check the cluster version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Usage

-   Configure a Protobuf schema
    
    Syntax
    
    ```
    ALTER TABLE table_name ALTER COLUMN column_name
    [PROTO_NAME = protobuf_schema_name]
    PROTO_TEXT = protobuf_schema_definition
    PROTO_MESSAGE = protobuf_message
    [COMPRESSION = compression_algorithm]
    ```
    
    Parameters
    
      
    
    Parameter
    
    Required
    
    Description
    
    PROTO\_NAME
    
    No
    
    The name of the Protobuf schema.
    
    PROTO\_TEXT
    
    Yes
    
    The definition of the Protobuf schema.
    
    PROTO\_MESSAGE
    
    Yes
    
    The Protobuf serialization message.
    
    COMPRESSION
    
    No
    
    This parameter is required only when Protobuf serialization message data is compressed by using zlib before being written into the database. Set the value to zlib.
    
    **Note** Zlib-compressed data can be decompressed by using the `UNCOMPRESS()` function into hexadecimal data.
    
-   Remove the Protobuf schema definition of a field
    
    You can leave the PROTO\_TEXT parameter empty to remove the Protobuf schema definition of a field. Execute the following statement:
    
    ```
    ALTER TABLE table_name ALTER COLUMN column_name PROTO_NAME="" PROTO_TEXT="" PROTO_MESSAGE=''; 
    ```
    
    **Note** Before you remove the Protobuf schema definition of a field, confirm that the field has been disassociated from indexes and virtual columns.
    
-   View the Protobuf schema definition of a field
    1.  Execute the following statement to set the display\_readable\_proto\_info parameter to true:
        
        ```
        SET display_readable_proto_info=true;
        ```
        
    2.  Execute the following statement to view the Protobuf schema definition of a field:
        
        ```
        SHOW columns FROM table_name
        ```
        

## Examples

The following examples describe how to use the readable Protobuf feature and how to use the `PROTO_TO_JSON(_blob_field_)` function to extract some information from data to create indexes or virtual columns. The `t1` table is used in the examples.

1.  Create a table named `t1`. Execute the following statement:
    
    ```
    CREATE TABLE t1(c1 INT, c2 BLOB);
    ```
    
    The `c2` field is of the BLOB type and serialized by Protobuf.
2.  Add the Protobuf schema definition for the `c2` field.
    
    An example where the addressbook.proto of the Protobuf community is used:
    
    ```
    syntax = "proto2";
    
    package tutorial;
    
    message Person {
    optional string name = 1;
    optional int32 id = 2;
    optional string email = 3;
    
    enum PhoneType {
    MOBILE = 0;
    HOME = 1;
    WORK = 2;
    }
    
    message PhoneNumber {
    optional string number = 1;
    optional PhoneType type = 2 [default = HOME];
    }
    
    repeated PhoneNumber phones = 4;
    }
    
    message AddressBook {
    repeated Person people = 1;
    }
    ```
    
    -   An example where the data is not compressed by using zlib:
        
        ```
        ALTER TABLE t1 ALTER COLUMN c2 PROTO_NAME="AddressBook" PROTO_TEXT="syntax = \"proto2\";\n\npackage tutorial;\n\nmessage Person {\n  optional string name = 1;\n  optional int32 id = 2;\n  optional string email = 3;\n\n  enum PhoneType {\n    MOBILE = 0;\n    HOME = 1;\n    WORK = 2;\n  }\n\n  message           PhoneNumber {\n    optional string number = 1;\n    optional PhoneType type = 2 [default = HOME];\n  }\n\n  repeated PhoneNumber phones = 4;\n}\n\nmessage  AddressBook {\n  repeated Person people = 1;\n}" PROTO_MESSAGE='AddressBook';
        ```
        
    -   An example where the data is compressed by using zlib:
        
        ```
        ALTER TABLE t1 ALTER COLUMN c2 PROTO_NAME="AddressBook" PROTO_TEXT="syntax = \"proto2\";\n\npackage tutorial;\n\nmessage Person {\n  optional string name = 1;\n  optional int32 id = 2;\n  optional string email = 3;\n\n  enum PhoneType {\n    MOBILE = 0;\n    HOME = 1;\n    WORK = 2;\n  }\n\n  message           PhoneNumber {\n    optional string number = 1;\n    optional PhoneType type = 2 [default = HOME];\n  }\n\n  repeated PhoneNumber phones = 4;\n}\n\nmessage  AddressBook {\n  repeated Person people = 1;\n}" PROTO_MESSAGE='AddressBook' COMPRESSION='zlib';
        ```
        
3.  Write data serialized by using Protobuf to the `t1` table.
    -   An example where the data is not compressed by using zlib:
        
        ```
        INSERT INTO t1 VALUES(1, X'0a380a0b56697375616c50726f746f10011a1776697375616c70726f746f40706f6c617264622e636f6d220e0a0a313233343536373839301002');
        ```
        
    -   An example where the data is compressed by using zlib:
        
        ```
        INSERT INTO t1 VALUES(1, X'3C000000785ee3b2e0e20ecb2c2e4dcc0928ca2fc9176094122f03730b405c8782fc9cc4a29424bde4fc5c253e2e2e432363135333730b4b03012600183d10de');
        ```
        
        Zlib-compressed data can be decompressed by using the `UNCOMPRESS()` function. An example where the data is compressed by using zlib:
        
        ```
        SELECT HEX(uncompress(X'3C000000785ee3b2e0e20ecb2c2e4dcc0928ca2fc9176094122f03730b405c8782fc9cc4a29424bde4fc5c253e2e2e432363135333730b4b03012600183d10de')) AS UNCOMPRESS_DATA;
        ```
        
        Sample result of the decompressed hexadecimal data:
        
        ```
        +----------------------------------------------------------------------------------------------------------------------+
        | UNCOMPRESS_DATA                                                                                                      |
        +----------------------------------------------------------------------------------------------------------------------+
        | 0A380A0B56697375616C50726F746F10011A1776697375616C70726F746F40706F6C617264622E636F6D220E0A0A313233343536373839301002 |
        +----------------------------------------------------------------------------------------------------------------------+
        ```
        
4.  Read the data in the `c2` column or extract data from `c2` column to create indexes or virtual columns.
    -   Read the data in the `c2` column.
        -   Read the data in the `c2` column when the `PROTO_TO_JSON(_blob_field_)` function is not used.
            -   If the data is not compressed by using zlib, execute the following statement to read data from the `c2` column:
                
                ```
                SELECT c2 FROM t1\G
                ```
                
                Sample result of the read data:
                
                ```
                *************************** 1. row ***************************
                c2:
                8
                
                VisualProtovisualproto@polardb.com"
                
                1234567890
                ```
                
            -   If the data is compressed by using zlib, execute the following statement to read the data in the `c2` column:
                
                ```
                SELECT c2 FROM t1\G
                ```
                
                Sample result of the read data:
                
                ```
                *************************** 1. row ***************************
                c2: <   x^����,. M�    (�/�'�/s
                                                @\���Ģ�$���\%>..C#cS3s
                                                                      K& =�
                ```
                
        -   Read the data in the `c2` column when the `PROTO_TO_JSON(_blob_field_)` function is used.
            
            ```
            SELECT PROTO_TO_JSON(c2) FROM t1;
            ```
            
            Sample result of the read data:
            
            ```
            +------------------------------------------------------------------------------------------------------------------------------------------+
            | PROTO_TO_JSON(c2)                                                                                                                        |
            +------------------------------------------------------------------------------------------------------------------------------------------+
            | {"people": [{"id": 1, "name": "VisualProto", "email": "visualproto@polardb.com", "phones": [{"type": "WORK", "number": "1234567890"}]}]} |
            +------------------------------------------------- ----------------------------------------------------------------------+
            ```
            
            **Note** The `PROTO_TO_JSON(_blob_field_)` function can read both the data compressed by using zlib and the data not compressed by using zlib.
            
        -   Use the JSON function to extract the data in `c2` column. Example:
            
            ```
            SELECT json_extract(PROTO_TO_JSON(c2), '$.people[0].name') FROM t1;
            ```
            
            Sample result of the extracted data:
            
            ```
            +-----------------------------------------------------+
            | json_extract(PROTO_TO_JSON(c2), '$.people[0].name') |
            +-----------------------------------------------------+
            | "VisualProto"                                       |
            +-----------------------------------------------------+
            ```
            
    -   Extract the data in the `c2` column to create an index. Example:
        
        ```
        CREATE INDEX i_email ON t1((cast(JSON_UNQUOTE(json_extract(PROTO_TO_JSON(c2), '$.people[0].email')) AS char(100))));
        ```
        
        Execute the EXPLAIN statement to check the execution performance of the preceding SQL statement. Example:
        
        ```
        EXPLAIN SELECT * FROM t1 WHERE (cast(JSON_UNQUOTE(json_extract(PROTO_TO_JSON(c2), '$.people[0].ema
        ```
        
        Sample result:
        
        ```
        +----+-------------+-------+------------+------+---------------+---------+---------+-------+------+----------+-------+
        | id | select_type | table | partitions | type | possible_keys | key     | key_len | ref   | rows | filtered | Extra |
        +----+-------------+-------+------------+------+---------------+---------+---------+-------+------+----------+-------+
        |  1 | SIMPLE      | t1    | NULL       | ref  | i_email       | i_email | 403     | const |    1 |   100.00 | NULL  |
        +----+-------------+-------+------------+------+---------------+---------+---------+-------+------+----------+-------+
        ```
        
    -   Extract the data in the `c2` column to create a virtual column. Example:
        
        ```
        ALTER TABLE t1 ADD COLUMN c3 varchar(100) AS (json_extract(proto_to_json(`c2`), _utf8mb4'$.people[0].email'));
        ```
        
        Execute the following statement to view the schema of the `t1` table:
        
        ```
        desc t1;
        ```
        
        Sample schema of the `t1` table:
        
        ```
        +-------+--------------+------+-----+---------+-------------------+
        | Field | Type         | Null | Key | Default | Extra             |
        +-------+--------------+------+-----+---------+-------------------+
        | c1    | int(11)      | YES  |     | NULL    |                   |
        | c2    | blob         | YES  |     | NULL    |                   |
        | c3    | varchar(100) | YES  |     | NULL    | VIRTUAL GENERATED |
        +-------+--------------+------+-----+---------+-------------------+
        ```
        
        `c3` is the newly created virtual column.
