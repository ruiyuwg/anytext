The GEN\_RANDOM\_UUID function is used to generate a random universally unique identifier (UUID). This topic describes how to use the GEN\_RANDOM\_UUID function in Hologres.

## Limits

Before you use the GEN\_RANDOM\_UUID function, execute the CREATE EXTENSION statement to install an extension. The extension is installed at the database level. You need to install the extension only once for each database. If you create a database, you must execute the CREATE EXTENSION statement again.

```
-- Install an extension.
CREATE EXTENSION pgcrypto;

-- Drop the extension.
DROP EXTENSION pgcrypto;
```

## Syntax

The GEN\_RANDOM\_UUID function is used to generate a UUID of version 4. The UUID consists of random hexadecimal integers.

**Note**

A UUID has a fixed length of 128 bits. Its value ranges from `00000000-0000-0000-0000-000000000000 to ffffffff-ffff-ffff-ffff-ffffffffffff`. For more information about UUID data types, see [Data types](/help/en/hologres/developer-reference/data-types#concept-1597919).

```
GEN_RANDOM_UUID()
```

## Examples

-   Generate a random UUID.
    
    The following sample code provides an example:
    
    ```
    SELECT GEN_RANDOM_UUID();
    ```
    
    The following result is returned:
    
    ```
    gen_random_uuid
    ------------------------------------
    3a5401f1-0f0c-4380-8611-78e654efd86d
    ```
    
-   Generate a random UUID when data is written.
    
    The following sample code provides an example:
    
    ```
    -- Create a source table and write data to the table. You can also use other tables such as MaxCompute tables as source tables.
    CREATE TABLE t_source (a INT);
    INSERT INTO t_source SELECT * FROM generate_series(1, 5);
    
    -- Create a destination table.
    CREATE TABLE t_result (a INT, b UUID);
    
    -- Write data to the destination table and generate a random UUID.
    INSERT INTO t_result SELECT *, gen_random_uuid() FROM t_source;
    
    -- View the data write result.
    SELECT * FROM t_result;
    ```
    
    The following result is returned:
    
    ```
     a |                  b
    ---+--------------------------------------
     1 | 27477537-abc4-4c17-9cf3-91c856a3b298
     2 | 2522b1ce-fdf3-4b14-a3c3-78f4baac5186
     3 | c69959a3-ad40-424f-9eb1-3271d0c6a8d4
     4 | 5493e087-b1b8-47e2-8117-adea27aaa676
     5 | f0e55a29-e72e-42e6-99aa-486db4f8b624
    (5 rows)
    ```
