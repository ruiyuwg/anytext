This topic describes JSON functions related to Hologres.

## **GET\_JSON\_OBJECT**

-   Syntax
    
    GET\_JSON\_OBJECT extracts a JSON object from a JSON string. Before you use the GET\_JSON\_OBJECT function, you must create an extension. For more information, see [Extensions](/help/en/hologres/developer-reference/extensions).
    
    ```
    -- Create an extension.
    CREATE EXTENSION IF NOT EXISTS hive_compatible SCHEMA <schema_name>;
    SELECT get_json_object ( json_string, path );
    ```
    
-   Parameters
    
    **Parameter**
    
    **Description**
    
    json\_string
    
    The JSON object. The value is of the TEXT type. The value must be a valid JSON string.
    
    path
    
    The JSON path that specifies the object to extract. The dollar sign (`$`) represents a JSON variable. The dot operator (`.`) or the square brackets (`[]`) are used to access the JSON object or array.
    
    If the JSON string is invalid, NULL is returned.
    
-   Examples
    
    Prepare sample data.
    
    ```
    -- Create an extension.
    CREATE EXTENSION IF NOT EXISTS hive_compatible SCHEMA pg_catalog;
    -- Prepare sample data.
    BEGIN;
    CREATE TABLE hive_json_example (
        col_json text
    );
    COMMIT;
    INSERT INTO hive_json_example VALUES 
    ('{"store":{"fruit":[{"weight":8,"type":"apple"}, {"weight":9,"type":"pear"}],"bicycle":{"price":19.95,"color":"red"}},"email":"amy@only_for_json_udf_test.net","owner":"amy"}');
    ```
    
    -   Example 1: Query data in the `$.owner` path in a JSON object from a `col_json` column.
        
        ```
        -- The return value is amy.
        SELECT
            get_json_object (col_json, '$.owner')
        FROM
            hive_json_example;
        ```
        
    -   Example 2: Query data in the `$.store.bicycle.price` path of a JSON object from the `col_json` column.
        
        ```
        -- The return value is 19.95.
        SELECT
            get_json_object (col_json, '$.store.bicycle.price')
        FROM
            hive_json_example;
        ```
        
    -   Example 3: Query the first element with the index of 0 of the `fruit` array in the `$.store.fruit` path of the JSON object from the `col_json` column.
        
        ```
        -- The return value is {"weight":8, "type":"apple"}.
        SELECT
            get_json_object (col_json, '$.store.fruit[0]')
        FROM
            hive_json_example;
        ```
        
    -   Example 4: Query the data of a non-JSON object variable.
        
        ```
        -- The return value is NULL.
        SELECT
            get_json_object (col_json, '$.no_key')
        FROM
            hive_json_example;
        ```
        

## **ROW\_TO\_JSON**

The ROW\_TO\_JSON function is used to concatenate multiple strings or columns into a JSON string and return the JSON string. A maximum of 50 columns can be concatenated.

**Note**

Only Hologres V1.3 and later support the row\_to\_json function. If you want to use this function, you can join the Hologres DingTalk group to apply for the upgrade of your Hologres instance or [upgrade your instance](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv). For more information about how to join the Hologres DingTalk group, see [Obtain online support for Hologres](/help/en/hologres/support/obtain-online-support-for-hologres) .

-   Syntax
    
    ```
    SELECT ROW_TO_JSON(record)
    ```
    
-   Parameters
    
    record: a row-type parameter, which can be a table name, view name, or query result.
    
-   Examples
    
    ```
    -- Prepare test data.
    CREATE TABLE interests_test (
        name text,
        intrests text
    );
    
    INSERT INTO interests_test 
      VALUES 
      ('Ava', 'singing, dancing'), ('Bob', 'playing football, running, painting'), ('Jack', 'arranging flowers, writing calligraphy, playing the piano, sleeping');
    
    SELECT
        ROW_TO_JSON(t)
    FROM (
        SELECT
            name,
            intrests
        FROM
            interests_test) AS t;
    ```
    
    In Hologres V1.3.52 and later, keys in JSON objects can be generated based on column names.
    
    -   In Hologres versions earlier than V1.3.52, the following result is returned:
        
        ```
        row_to_json                
        ------------------------------
        {"f1":"Ava","f2":"singing, dancing"}
        {"f1":"Bob","f2":"playing football, running, painting"}
        {"f1":"Jack","f2":"arranging flowers, writing calligraphy, playing the piano, sleeping"}
        ```
        
    -   In Hologres V1.3.52 and later, the following result is returned:
        
        ```
        row_to_json                
        ------------------------------
        "{"name": "Jack", "interests": "arranging flowers, writing calligraphy, playing the piano, sleeping"}"
        "{"name": "Ava", "interests": "singing, dancing"}"
        "{"name": "Bob", "interests": "playing football, running, painting"}"
        ```
        

## Common errors

-   `ERROR: function get_json_object (text, unknown) does not exist`
    
    -   Possible cause 1
        
        In the schema-level permission model (SLPM), the RAM user does not have permissions to query the schema in which the extension is created. For example, the RAM user does not have permissions to query the public schema in which the extension is created.
        
    -   Solution 1
        
        -   Grant the RAM user permissions to query the schema.
            
        -   Execute the following statements to create the extension in the pg\_catalog schema. This way, all users have permissions to query this schema.
            
            ```
            DROP EXTENSION hive_compatible;
            CREATE EXTENSION hive_compatible schema pg_catalog;
            ```
            
    -   Possible cause 2
        
        The first parameter of GET\_JSON\_OBJECT is not of the TEXT type.
        
    -   Solution 2
        
        Convert the data type of the first parameter into TEXT.
        
-   `ERROR: get_json_object for fe, should not be evaluated`
    
    -   Possible cause 1
        
        The first parameter of GET\_JSON\_OBJECT is a constant.
        
    -   Solution 1
        
        Set the first parameter to the name of a table column.
        
    -   Possible cause 2
        
        The first parameter of GET\_JSON\_OBJECT contains a value of NULL.
        
    -   Solution 2
        
        Remove the NULL value from the first parameter.
