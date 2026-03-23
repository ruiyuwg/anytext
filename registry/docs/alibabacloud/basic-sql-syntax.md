This topic describes the basic syntax of the SELECT statement that is used in advanced search.

## Query syntax

A query is the process of searching for data in a database by using query statements. In the SQL syntax, the [SELECT](https://www.postgresql.org/docs/11/sql-select.html) statement is used to specify a query. The following code shows the basic syntax of the SELECT statement:

```
	SELECT [DISTINCT] column1 [AS column_name], column2, function
	FROM table_name
	[JOIN table_name ON join_condition]
	[WHERE search_condition]
	[GROUP BY column1, column2, ...]
	[HAVING search_condition]
	[ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...]
	[LIMIT number_of_rows OFFSET start_row]
```

## **Keywords in the SQL syntax**

-   SELECT: specifies the fields from which you want to query data. You can specify one or more fields. If you specify multiple fields, separate the field names with commas (,).
    
-   DISTINCT: an optional keyword. This keyword is used for deduplication and can ensure that the query result does not contain duplicate rows.
    
-   AS: an optional keyword. This keyword is used to rename fields in the query result.
    
-   FROM: specifies the name of the table from which you want to query data.
    
-   JOIN: an optional keyword. This keyword is used to join multiple tables. In most cases, you must use this keyword together with a join condition.
    
-   ON: specifies a join condition.
    
-   WHERE: an optional keyword. This keyword is used to specify a filter condition. A combination of multiple filter conditions based on AND or OR is supported.
    
-   GROUP BY: an optional keyword. This keyword is used to specify the basis for grouping fields in the query result.
    
-   HAVING: an optional keyword. This keyword is used to specify the filter condition for grouped fields.
    
-   ORDER BY: an optional keyword. This keyword is used to specify the order in which you want to sort the query result. Sorting based on multiple fields is supported. If you specify multiple fields, separate the field names with commas (,). ASC indicates the ascending order, and DESC indicates the descending order. By default, the query result is sorted in ascending order.
    
-   LIMIT: an optional keyword. This keyword is used to limit the maximum number of rows that can be returned in the query result.
    
-   OFFSET: an optional keyword. This keyword is used to specify the start row in the query result.
    

## Descriptions of the keywords

### SELECT list

In the SELECT statement, the SELECT list is located between the keywords SELECT and FROM. The SELECT list specifies the fields that need to be returned in the query result. You can use aliases to rename the fields to facilitate understanding. You can also perform computing and other operations on the fields by using expressions such as functions, operators, and expressions for string operations. This query method allows you to flexibly control the output of the query result based on your business requirements.

The following code shows the syntax of the SELECT statement:

```
SELECT 
	column1, column2, ... , columnN 
FROM 
	table_name;
```

-   `column1, column2,...columnN` indicates the names of fields in a table.
    
-   `table_name` indicates the name of a table.
    

You can use the following SELECT statements to query data in a table based on your business requirements:

Query data of all fields in the table.

```
SELECT
	*
FROM
	table_name;
```

Query data of specific fields in the table.

```
SELECT
	column1, column2, ...columnN
FROM
	table_name;
```

Use an alias to rename a field in the table.

```
SELECT 
	column1 AS alias_name 
FROM 
	table_name; 
```

Use an expression to perform operations on fields in the table.

```
SELECT 
	column1 + column2 AS expression 
FROM 
	table_name;
```

### FROM

The FROM clause declares one or more tables for the SELECT statement. If the FROM clause declares multiple tables for the SELECT statement, the query scope is the Cartesian product (cross join) of the tables. In most cases, you can specify the WHERE clause to limit the rows that can be returned to a small subset of the Cartesian product.

The FROM clause can contain the following elements:

-   `table_name`: the name of an existing table.
    
-   `alias`: the alias that you want to specify for the table. An alias is used to simplify the name of a table and eliminate ambiguity. If you specify an alias, the actual name of the table is hidden. For example, if you specify `FROM resources AS a` in the SELECT statement, all remaining clauses in the SELECT statement must reference the alias `a` to access the resources table.
    
-   `select`: an inner query in the FROM clause. If you specify the element select in the FROM clause, the SELECT statement is a nested query structure. A temporary table is generated based on the query result returned by the inner query, and the outer query is executed in the temporary table. You must enclose the code of the inner query in parentheses () and specify an alias for the inner query.
    
-   `join_type`: the type of join. For more information, see [JOIN](#f31cce4050hdx).
    

In advanced search, the resources table is the core data table, which stores information about resource properties. For information about the structure of the resources table, see the [Table used for queries](/help/en/resource-management/resource-center/user-guide/advanced-search-overview#e865d78047ym1) section in Overview.

### JOIN

The JOIN clause is used to join the rows of two or more tables based on the common fields in the tables.

Five join types are supported. You can select a join type based on the dataset that you want to obtain and the data relationships. You can select one of the following join types based on your business requirements to join tables and obtain data that you need.

-   CROSS JOIN: the cross join. This type of join returns the Cartesian product of two tables. This indicates that each row in one table is joined with each row in the other table. In most cases, this type of join is used to generate data combinations.
    
-   INNER JOIN: the inner join. This type of join matches common fields in two tables, combines rows in the tables based on the common fields, and returns only the rows that are matched.
    
-   LEFT OUTER JOIN: the left outer join. This type of join returns all rows in the left table and the rows in the right table that match with the rows in the left table. If no matched rows exist in the right table, NULL is returned.
    
-   RIGHT OUTER JOIN: the right outer join. This type of join returns all rows in the right table and the rows in the left table that match with the rows in the right table. If no matched rows exist in the left table, NULL is returned.
    
-   FULL OUTER JOIN: the full outer join. This type of join returns all rows in the left table and all rows in the right table. If the rows in the two tables do not match each other, NULL is returned.
    

### WHERE

The WHERE clause is used to return data of rows that meet the specified filter condition. The following code shows the syntax:

```
SELECT 
	column1, column2, ... , columnN 
FROM 
	table_name 
WHERE 
	[condition]
```

You can specify different filter conditions in the WHERE clause to filter data. The WHERE clause can contain comparison operators, logical operators, special relational operators such as LIKE and IN, and NULL operators. The comparison operators include equal to (=), greater than (>), and less than (<). The logical operators include AND, OR, and NOT. The NULL operators include IS NULL and IS NOT NULL.

-   Comparison operators:
    
    If you use the equal to (=) operator in the WHERE clause, data of rows that are exactly matched is returned. For example, you can use the following SELECT statement to query the resources of Elastic Compute Service (ECS) instances.
    
    ```
    SELECT 
    	resource_id,
    	resource_name,
    	resource_type,
     	region_id,
     	account_id 
    FROM 
    	resources 
    WHERE 
    	resource_type = 'ACS::ECS::Instance';
    ```
    
    If you specify the greater than (>), less than (<), greater than or equal to (>=), less than or equal to (<=), or not equal to (!=) operator in the WHERE clause, resources that meet the specified filter condition are returned. For example, you can use the following SELECT statement to query resources that are created later than a specified date.
    
    ```
    SELECT
    	resource_id,
     	resource_name,
     	region_id,
     	resource_type,
     	account_id,
     	create_time
    FROM
     	resources
    WHERE
     	create_time > '20230607';
    ```
    
-   Logical operators:
    
    Logical operators are used to connect multiple filter conditions. Common logical operators include AND, OR, and NOT.
    
    If you use the AND operator to connect multiple filter conditions in the WHERE clause, only rows that meet all specified filter conditions are returned. For example, you can use the following SELECT statement to query ECS instances that reside in the China (Hangzhou) region.
    
    ```
    SELECT
    	resource_id,
    	resource_name,
    	resource_type,
    	region_id,
    	account_id
    FROM
    	resources
    WHERE
    	region_id = 'cn-hangzhou'
    	AND resource_type = 'ACS::ECS::Instance';
    ```
    
    If you use the OR operator to connect multiple filter conditions in the WHERE clause, rows that meet any of the filter conditions are returned. For example, you can use the following SELECT statement to query ECS instances and disks that are attached to ECS instances.
    
    ```
    SELECT
    	resource_id,
    	resource_name,
    	resource_type,
    	region_id,
    	account_id
    FROM
    	resources
    WHERE
    	resource_type = 'ACS::ECS::Disk'
    	OR resource_type = 'ACS::ECS::Instance';
    ```
    
-   LIKE operator:
    
    The LIKE operator is used for fuzzy match. In most cases, the LIKE operator is used together with a wildcard to filter data. A wildcard indicates any character. PostgreSQL supports the following two wildcards:
    
    -   Percent sign (**%**)**:** indicates a character sequence whose length is unlimited. This wildcard can match zero or multiple characters.
        
    -   Underscore (**\_**)**:** indicates a single character. This wildcard can match any character.
        
    
    If the preceding wildcards are not used in the LIKE clause, the LIKE clause returns the same result as the equal to (=) operator. Using wildcards can help you perform fuzzy match and range queries on data in a more flexible manner. For example, you can use the following SELECT statement to query all ECS resource types.
    
    ```
    SELECT
     resource_id,
     resource_name,
     region_id,
     zone_id,
     resource_type,
     account_id,
    FROM
     resources
    WHERE
     resource_type LIKE 'ACS::ECS::%';
    ```
    
-   IN operator:
    
    The IN operator is a Boolean operator, which is used to check whether a value list contains a specific value. If the value list contains the value, the IN operator returns true. Otherwise, the IN operator returns false.
    
    ```
    SELECT 
    	column1, column2, ... , columnN 
    FROM 
    	table_name 
    WHERE 
    	exp IN (value1, value2, ..., valueN);
    ```
    
    -   `exp` can be a field name, a value, or an expression such as an expression for a function call or for an operation.
        
    -   `value1, value2, ..., valueN` indicates a value list. Separate the values in the value list with commas (,).
        
    
    For example, you can use the following SELECT statement to query ECS instances and disks that are attached to the ECS instances.
    
    ```
    SELECT
    	resource_id,
    	resource_name,
    	region_id,
    	zone_id,
    	resource_type,
    	account_id,
    FROM
    	resources
    WHERE
    	resource_type IN('ACS::ECS::Instance', 'ACS::ECS::Disk');
    ```
    
-   NULL operators:
    
    Fields may contain NULL values. IS NULL is used to determine whether a field has a NULL value. IS NOT NULL is used to determine whether a field does not have a NULL value. For example, you can use the following SELECT statement to query resources whose resource\_name property has a NULL value.
    
    ```
    SELECT
    	resource_id,
    	resource_name,
    	region_id,
    	zone_id,
    	resource_type,
    	account_id,
    FROM
    	resources
    WHERE
    	resource_name IS NULL;
    ```
    

You can use operators to filter data based on specific filter conditions and obtain the desired query result.

### **ORDER BY**

The ORDER BY clause is used to sort the query result. The following code shows the syntax:

```
SELECT 
	column1, column2, ... , columnN
FROM 
	table_name
ORDER BY 
	column1, column2, .. columnN ASC | DESC;
```

In the ORDER BY clause, the keyword ASC or DESC is used to specify the order in which you want the query result to return. ASC indicates the ascending order, and DESC indicates the descending order. If you do not specify an order in the ORDER BY clause, the query result is sorted in ascending order by default.

The order that you specify in the ORDER BY clause takes effect only for the expression closely followed by the order. For example, the object for which the order specified in `ORDER BY column1, column2 DESC` takes effect is different from the object for which the order specified in `ORDER BY column1 DESC, column2 DESC` takes effect. For ORDER BY column1, column2 DESC, the query result is first sorted based on column1 in ascending order, and then sorted based on column2 in descending order for rows with duplicate values in column1. For ORDER BY column1 DESC, column2 DESC, the query result is first sorted based on column1 in descending order, and then sorted based on column2 in descending order for rows with duplicate values in column1.

You can specify one or more fields in the ORDER BY clause as the sorting basis. The fields that are not specified in the SELECT list are also supported. If you specify multiple fields, separate the field names with commas (,). The query result is first sorted based on the first field that you specify. If the first field has duplicate values, the query result is then sorted based on the second field that you specify.

When you specify the fields based on which you want to sort the query result, take note of the following items:

-   We recommend that you do not use property fields that have NULL values for resource sorting. If you use such property fields, you must perform special processing. If you do not perform special processing, resources cannot be correctly sorted based on the property fields.
    
-   If the field that you specify has duplicate values, different results may be returned after you execute the same SELECT statement multiple times. To ensure the consistency of query results, we recommend that you add another field in the ORDER BY clause for sorting.
    

For example, you can use the following SELECT statement to first sort resources by resource type and then sort resources of the same type by resource ID.

```
SELECT
	resource_id,
	resource_name,
	region_id,
	zone_id,
	resource_type,
	account_id,
FROM
	resources
ORDER BY
	resource_type,
	resource_id;
```

### **GROUP BY**

The GROUP BY clause is used to specify one or more fields based on which you want to group the query result. For each group, you can further perform the statistics collection, aggregation, or filtering operation. The following code shows the syntax:

```
SELECT 
	column1, column2, ... , columnN
FROM 
	table_name
WHERE 
	[ conditions ]
GROUP BY 
	column1, column2....columnN
ORDER BY 
	column1, column2....columnN
```

The GROUP BY clause must be located between the WHERE clause (if any) and the ORDER BY clause (if any).

You can specify one or more fields in the GROUP BY clause as the grouping basis. However, you must make sure that the fields are included in the SELECT list. Otherwise, an error is reported when you execute the SELECT statement. When you use the GROUP BY statement, you can use an aggregate function such as SUM, COUNT, or AVG to perform computing on each group. The aggregate function performs computing on each group and returns the aggregate result of computing on all groups. This facilitates the statistical analysis on each group for data aggregation.

For example, you can use the following SELECT statement to group resources by resource type and query the numbers of resources of different types. The query result that is returned contains only two columns: a column whose values are strings and a column whose values are numeric values. The advanced search feature allows you to view the query result that contains only two columns in a chart.

```
SELECT
 	resource_type,
 	COUNT(*) AS cnt
FROM
 	resources
GROUP BY
 	resource_type
ORDER BY
 	cnt DESC;
```

### **LIMIT**

The LIMIT clause is used to limit the maximum number of rows that can be returned by the SELECT statement in the query result. The LIMIT clause can contain the maximum number of rows that can be returned and the offset from which you want the query result to be returned.

```
LIMIT 
	count OFFSET start
```

The following code shows the syntax in which the LIMIT clause includes the OFFSET keyword:

```
SELECT 
	column1, column2, ... , columnN 
FROM 
	table_name 
LIMIT 
	[no of rows] OFFSET [row num]
```

The LIMIT clause is used to limit the maximum number of rows that can be returned by the SELECT statement in the query result. For example, LIMIT 10 indicates that a maximum of 10 rows of data can be returned.

The OFFSET keyword is used to specify the start row in the query result. You can specify a numeric value to determine the offset. For example, OFFSET 10 indicates that the start row in the query result is the 11th row of the source table. If you do not specify the OFFSET keyword in the LIMIT clause, the start row in the query result is the first row of the source table by default.

In most cases, if you specify the LIMIT clause, you must also use the ORDER BY clause to specify the order in which you want to sort the query result. If you do not use the LIMIT clause together with the ORDER BY clause, the query results that are returned after you execute the same SELECT statement multiple times may be different. This is because the queries are performed in different orders. Therefore, if you use the LIMIT clause, we recommend that you use the ORDER BY clause to control the order of rows in the specified fields. This ensures that the returned rows in the query result are consecutive and consistent.

For example, you can use the following SELECT statement to query the first 20 resources sorted by resource ID in descending order.

```
SELECT
	resource_id,
	resource_name,
	region_id,
	resource_type,
	account_id
FROM
	resources
ORDER BY
	resource_id DESC
LIMIT
	20;
```

In some cases, you may want the query to start to return data from a specified offset. A query that is performed by using the advanced search feature can return a maximum of 1,000 rows. If the amount of data on which you want to perform a query is excessively large, you can use the LIMIT clause with the OFFSET keyword to perform a paged query. Each time you perform a query, you can use the LIMIT clause to specify the maximum number of rows that can be returned and use the OFFSET keyword to obtain the next page of data. To ensure that consecutive and consistent rows can be returned in the query result, you must also use the ORDER BY clause to enable the query result to be sorted based on specific fields.

For example, you can use the following SELECT statement to sort resources by resource ID in descending order and query the data from Row 1001 to Row 2000.

```
SELECT
 	resource_id,
 	resource_name,
 	region_id,
 	resource_type,
 	account_id
FROM
 	resources
ORDER BY
 	resource_id DESC
LIMIT
 	1000 OFFSET 1000;
```

## **Examples**

For information about sample query templates, see [Supported sample query templates](/help/en/resource-management/resource-center/user-guide/supported-sample-query-templates).
