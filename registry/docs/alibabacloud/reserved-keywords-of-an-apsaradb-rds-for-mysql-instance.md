This topic describes the keywords that are reserved in an ApsaraDB RDS for MySQL instance. Do not use these reserved keywords when you create objects in databases, including tables, columns, indexes, and user-defined functions (UDFs).

ApsaraDB RDS provides a few more reserved keywords in addition to the reserved keywords that are provided by open source MySQL. The following table lists the new reserved keywords that are provided by ApsaraDB RDS. For more information about the reserved keywords that are provided by open source MySQL, see the following topics:

-   [MySQL 8.0 Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/keywords.html)
    
-   [MySQL 5.7 Reference Manual](https://dev.mysql.com/doc/refman/5.7/en/keywords.html)
    
-   [MySQL 5.6 Reference Manual](https://dev.mysql.com/doc/refman/5.6/en/keywords.html)
    

**Engine version**

**Reserved keyword**

**Description**

MySQL 8.0

MySQL 5.7

NEXTVAL

An operator that is used to access the value of a sequence in SQL statements. If a UDF has the same name as the NEXTVAL operator, the priorities of the UDF and the NEXTVAL operator vary based on the minor engine version of your RDS instance.

-   If the minor engine version is 20201031 or earlier, the priority of the NEXTVAL operator is higher than the priority of the UDF.
    
-   If the minor engine version is later than 20201031, the priority of the UDF is higher than the priority of NEXTVAL operator.
    

CURRVAL

An operator that is used to access the value of a sequence in SQL statements. If a UDF has the same name as the CURRVAL operator, the priorities of the UDF and the CURRVAL operator vary based on the minor engine version of your RDS instance.

-   If the minor engine version is 20201031 or earlier, the priority of the CURRVAL operator is higher than the priority of the UDF.
    
-   If the minor engine version is later than 20201031, the priority of the UDF is higher than the priority of CURRVAL operator.
