The TRUNCATE statement is used to clear data from a table. This topic describes the syntax of the TRUNCATE statement in Hologres.

## Limits

The `TRUNCATE` statement has the following limits:

-   Hologres supports sequences but currently supports only CONTINUE IDENTITY, not RESTART IDENTITY.
    
-   You can execute the `TRUNCATE` statement on standard tables, parent partition tables, and child partition tables.
    
-   You cannot execute the `TRUNCATE` statement on foreign tables.
    

## Syntax

The syntax for the `TRUNCATE` statement is as follows.

```
TRUNCATE [ TABLE ] name [, ... ]
    [CONTINUE IDENTITY ] 
```

The CONTINUE IDENTITY parameter does not modify the current value of the sequence.

**Note**

-   The `TRUNCATE` command does not generate binary logs.
    
-   In versions earlier than V3.1, `TRUNCATE` was a Data Definition Language (DDL) statement. If you execute the `TRUNCATE` statement on a table for which binary logging is enabled, no error is reported and no binary logs are generated.
    
-   In V3.1 and later, `TRUNCATE` is a Data Manipulation Language (DML) statement. This change reduces the pressure on the frontend (FE) in scenarios that involve frequent `TRUNCATE` operations. If you execute the TRUNCATE statement on a table for which binary logging is enabled, an error is reported. In this case, run one of the following commands:
    
    -   Method 1 (Recommended): At the session level, change the TRUNCATE operation to a DDL operation by setting the Grand Unified Configuration (GUC) parameter `SET hg_enable_truncate_as_dml = off`.
        
    -   Method 2: At the session level, disable the binary logging feature by setting the GUC parameter `SET hg_experimental_generate_binlog = off`. Note: This GUC parameter affects all tables and DML operations. For more information, see [Disable binary logging for DML operations on a table](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#oCpTq).
        

## Examples

The following examples show how to use the `TRUNCATE` statement.

-   Example 1:
    
    ```
    CREATE TABLE event (
        id INT,
        name text,
        tag text
    );
    INSERT INTO event (id,name,tag) values (23,'buy', 'num');
    
    SELECT * FROM event;
    
    TRUNCATE TABLE event ;
    ```
    
-   Example 2:
    
    ```
    CREATE TABLE event_1 (
        id serial,
        name text,
        tag text
    );
    
    INSERT INTO event_1 (name,tag) values ('buy', 'num');
    
    SELECT * FROM event_1;
    
    # CONTINUE IDENTITY is the default.
    TRUNCATE TABLE event_1 CONTINUE IDENTITY;
    ```
