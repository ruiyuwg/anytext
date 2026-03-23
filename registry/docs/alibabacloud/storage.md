A stored procedure is a collection of precompiled SQL statements stored in a database and can be called repeatedly. This topic describes how to use stored procedures in Hologres.

## **Limits**

-   Hologres supports stored procedures that use PL/pgSQL syntax starting from Hologres V3.0. For more information about PL/pgSQL syntax, see [SQL Procedural Language](https://www.postgresql.org/docs/11/plpgsql.html).
    
-   In Hologres stored procedures, transactions with multiple Data Definition Language (DDL) statements and transactions with multiple Data Manipulation Language (DML) statements are supported. Transactions that mix DDL and DML statements are not supported. For more information, see [Transactions](/help/en/hologres/developer-reference/sql-transaction-capabilities).
    
-   Stored procedures do not support return values and cannot be used as user-defined functions (UDFs).
    

## **Permissions**

-   To use CREATE PROCEDURE, you must have the Create permission on the database. This is the same permission required to create a table. For more information, see [SQL-CREATE PROCEDURE](https://www.postgresql.org/docs/11/sql-createprocedure.html).
    
-   To use CREATE OR REPLACE, you must have both the Create permission on the database and the OWNER permission on the target stored procedure. For more information, see [SQL-CREATE PROCEDURE](https://www.postgresql.org/docs/11/sql-createprocedure.html).
    
-   To execute a stored procedure, you must have the EXECUTE permission on the stored procedure. For more information, see [SQL-CALL](https://www.postgresql.org/docs/11/sql-call.html).
    

## **Command reference**

The stored procedure syntax supported by Hologres is compatible with PostgreSQL. The syntax is as follows:

### **Create a stored procedure**

```
CREATE [ OR REPLACE ] PROCEDURE
    <procedure_name> ([<argname> <argtype>])
LANGUAGE 'plpgsql'
AS <definition>;
```

**Parameter**

**Description**

procedure\_name

The name of the stored procedure.

argname

The name of the parameter. This parameter is optional and depends on the stored procedure design.

argtype

The data type of the parameter.

definition

The definition of the stored procedure. This can be an SQL statement or a code block.

For more information about the parameters, see [SQL-CREATE PROCEDURE](https://www.postgresql.org/docs/11/sql-createprocedure.html).

### **Modify a stored procedure**

```
ALTER PROCEDURE <procedure_name> ([<argname> <argtype>])
    OWNER TO <new_owner> | CURRENT_USER | SESSION_USER;
```

**Parameter**

**Description**

new\_owner

The new username.

CURRENT\_USER

The current user.

SESSION\_USER

The session user.

For more information about the parameters, see [SQL-ALTER PROCEDURE](https://www.postgresql.org/docs/11/sql-alterprocedure.html).

### **Delete a stored procedure**

```
DROP PROCEDURE [ IF EXISTS ] <procedure_name> ([<argname> <argtype>]); 
```

For more information about the parameters, see [SQL-DROP PROCEDURE](https://www.postgresql.org/docs/11/sql-dropprocedure.html).

### **Execute a stored procedure**

```
CALL <procedure_name> ([<argument>]);
```

**Parameter**

**Description**

argument

The arguments required by the stored procedure. These arguments are optional and depend on the stored procedure design.

For more information about the parameters, see [SQL-CALL](https://www.postgresql.org/docs/11/sql-call.html).

## **Examples**

-   Example 1: Stored procedure with a transaction that contains multiple DDL statements.
    
    1.  Create the stored procedure.
        
        ```
        CREATE OR REPLACE PROCEDURE procedure_1()
        LANGUAGE 'plpgsql'
        AS $$
        BEGIN
            --- TXN1 --- 
            CREATE TABLE a1(key int);
            CREATE TABLE a2(key int);
            COMMIT; 
        
            --- TXN2 ---
            CREATE TABLE a3(key int);
            CREATE TABLE a4(key int);
            ROLLBACK;
        END; 
        $$;
        ```
        
    2.  Call the stored procedure. Tables a1 and a2 are created. Tables a3 and a4 are not created.
        
        ```
        CALL procedure_1();
        ```
        
-   Example 2: Stored procedure with a transaction that contains multiple DML statements.
    
    1.  Create the stored procedures.
        
        ```
        CREATE OR REPLACE PROCEDURE procedure_2()
        LANGUAGE 'plpgsql'
        AS $$
        BEGIN
            INSERT INTO a1 VALUES(1);
            INSERT INTO a2 VALUES(2);
            ROLLBACK;
        END;
        $$;
        
        CREATE OR REPLACE PROCEDURE procedure_3()
        LANGUAGE 'plpgsql'
        AS $$
        BEGIN
            INSERT INTO a1 VALUES(1);
            INSERT INTO a2 VALUES(2);
        END;
        $$;
        ```
        
    2.  Execute the stored procedures.
        
        -   Execute procedure\_2. ROLLBACK is supported, so the data is not written.
            
            ```
            -- Enable the DML transaction feature.
            SET hg_experimental_enable_transaction = ON;
            
            -- Execute the stored procedure.
            CALL procedure_2();
            ```
            
        -   Execute procedure\_3. The data is written successfully.
            
            ```
            -- Enable the DML transaction feature.
            SET hg_experimental_enable_transaction = ON;
            
            -- Execute the stored procedure.
            CALL procedure_3();
            ```
            
-   Example 3: Stored procedure with both DDL and DML statements.
    
    1.  Create the stored procedure. Because Hologres does not support transactions that mix DDL and DML statements, you must commit DDL and DML statements separately within the stored procedure.
        
        ```
        CREATE OR REPLACE PROCEDURE procedure_4()
        LANGUAGE 'plpgsql'
        AS $$
        BEGIN
            INSERT INTO a1 VALUES(1);
            COMMIT;	
            CREATE TABLE bb(key int);
            COMMIT;	
            INSERT INTO a1 VALUES(2);
            INSERT INTO bb VALUES(1);    
            COMMIT;	
        END;
        $$;
        ```
        
    2.  Execute the stored procedure. The table is created and the data is written successfully.
        
        ```
        -- Enable the DML transaction feature.
        SET hg_experimental_enable_transaction = ON;
        
        -- Execute the stored procedure.
        CALL procedure_4();
        ```
        
-   Example 4: Stored procedure that shows common operations, such as defining input parameters, intermediate variables, loops, IF conditions, and EXCEPTIONs.
    
    1.  Create the stored procedure.
        
        ```
        CREATE OR REPLACE PROCEDURE procedure_5(input text)
        LANGUAGE 'plpgsql'
        AS $$
        -- Define an intermediate variable.
        DECLARE
        sql1 text;
        BEGIN
            -- Write a row of data to the table specified by the input parameter.
            EXECUTE 'insert into ' || input || ' values(1);';
            COMMIT;
        
            -- Create table a3.
            CREATE TABLE a3(key int);
            COMMIT;
        
            -- Use the intermediate variable to write a row of data to table a3.
            sql1 = 'insert into a3 values(1);';
            EXECUTE sql1;
        
            -- Define a FOR loop.
            FOR i IN 1..10 LOOP
                BEGIN
                    -- i=1 already exists in the table, so only one log entry is printed.
                    IF i IN (SELECT KEY FROM a3) THEN
                        RAISE NOTICE 'Data already exists.';
                    -- Other numbers do not exist in the table. The procedure attempts to write them, raises an EXCEPTION, and then commits.
                    ELSE
                        INSERT INTO a3 VALUES(i);
                        RAISE EXCEPTION 'HG_PLPGSQL_NEED_RETRY';
                        COMMIT; 
                    END IF;
                -- For the raised EXCEPTION, print a log entry.
                EXCEPTION 
                    WHEN OTHERS THEN
                        RAISE NOTICE 'Catch error.';
                END;
            END LOOP;
        
        END;
        $$;
        ```
        
    2.  Execute the stored procedure. The value 1 is written to table a3. Other data is not written. All related logs are printed.
        
        ```
        -- Enable the DML transaction feature.
        SET hg_experimental_enable_transaction = ON;
        
        -- Execute the stored procedure.
        CALL procedure_5('a1');
        ```
        

## Manage stored procedures

-   View created stored procedures.
    
    ```
    SELECT
        p.proname AS procedure_name,
        pg_get_function_identity_arguments(p.oid) AS argument_types,
        REPLACE(pg_get_functiondef(p.oid),'$procedure$','$$') AS procedure_detail,
        n.nspname AS schema_name,
        r.rolname AS owner_name,
        d.description AS description
    FROM
        pg_proc p
        INNER JOIN pg_namespace n ON p.pronamespace = n.oid
        INNER JOIN pg_roles r ON p.proowner = r.oid
        LEFT JOIN pg_description d ON p.oid = d.objoid
    WHERE
        r.rolname != 'holo_admin'
        AND p.prokind = 'p'
    ORDER BY
        n.nspname,
        p.proname;
    ```
    
-   View a stored procedure definition.
    
    ```
    SELECT pg_get_functiondef('<procedure_name>'::regproc);
    ```
    

## FAQ

Hologres is a distributed system, and its front-end (FE) nodes are also distributed. When a DDL change occurs on a table, metadata must be synchronized across different FE nodes in real time. If metadata synchronization is not complete, the DDL change may fail. In most cases, Hologres automatically retries the operation. You do not need to manually resubmit the DDL change. However, automatic retries are not supported within stored procedures. In this scenario, an error message HG\_PLPGSQL\_NEED\_RETRY is returned.

For tables with frequent DDL changes, define a manual retry logic in the stored procedure to prevent frequent errors. The retry logic is as follows:

```
CREATE OR REPLACE PROCEDURE procedure_6()
LANGUAGE 'plpgsql'
AS $$
BEGIN
    WHILE TRUE LOOP
        BEGIN
            -- Try to execute the DDL statement. If it succeeds, exit the loop.
            CREATE TABLE a3(key int);
            COMMIT;
            EXIT;
        EXCEPTION
            -- If the HG_PLPGSQL_NEED_RETRY error occurs, print a log and automatically retry.
            WHEN HG_PLPGSQL_NEED_RETRY THEN 
                RAISE NOTICE 'DDL need retry';
        END;
    END LOOP;
END;
$$;
```
