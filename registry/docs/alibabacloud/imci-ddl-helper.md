When you use an IMCI to query complex SQL statements, the IMCI must be valid for all columns involved in the SQL statements. PolarDB for MySQL provides a set of built-in stored procedures, which allow you to obtain the names of columns for the IMCI is invalid in SQL statements and obtain the DDL statements for creating IMCIs. This topic describes the built-in stored procedures provided by PolarDB for MySQL and how to create IMCIs by using the stored procedures.

## Overview

PolarDB for MySQL provides the following built-in procedures:

-   Check whether the IMCI is valid for all columns in the SQL statement: dbms\_imci.check\_columnar\_index()
    
-   Obtain the DDL statements for creating IMCIs: dbms\_imci.columnar\_advise() and dbms\_imci.columnar\_advise\_by\_columns()
    
-   Batch obtain the DDL statements for creating IMCIs: dbms\_imci.columnar\_advise\_begin(), dbms\_imci.columnar\_advise\_show(), and dbms\_imci.columnar\_advise\_end()
    

## **Usage notes**

When you use an IMCI to query complex SQL statements, you must [check whether the columns for which the IMCI is invalid are involved in the SQL statements](/help/en/polardb/polardb-for-mysql/user-guide/check-whether-the-imci-is-valid-for-all-columns-in-the-sql-statement). If yes, you can [obtain the DDL statement for creating an IMCI](/help/en/polardb/polardb-for-mysql/user-guide/obtain-the-ddl-statement-used-to-create-an-imci) for a SQL statement or [obtain the DDL statements for batch creating IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/batch-obtain-the-ddl-statements-used-to-create-imcis) for a service. Execute the obtained DDL statements to set the IMCI valid for all columns in the SQL statements, and then use the IMCI to accelerate the query.
