Window function is a feature introduced in MySQL Community Edition 8.0 to improve query and analysis capabilities. Window function is fully supported in PolarDB for MySQL 8.0 and can be executed in parallel.

## Prerequisites

-   Your cluster is of PolarDB for MySQL Cluster Edition 8.0 and its revision version is 8.0.2.2.0 or later. For more information about how to query the version of a cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).
    
-   Only window functions that use the PARTITION BY clause can be executed in parallel.
    

## Usage notes

-   Syntax
    
    In PolarDB, you can use only the `EXPLAIN FORMAT=TREE` statement to check whether window functions are used.
    
-   Examples
    
    In the following example, a table named `employee_salaries` is created and data is inserted into the table:
    
    ```
    CREATE TABLE `employee_salaries` (
      `dept` varchar(20) DEFAULT NULL,
      `name` varchar(20) DEFAULT NULL,
      `salary` int DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    INSERT INTO `employee_salaries` VALUES
    ('Engineering','Dharma',3500),
    ('Engineering','Bình',3000),
    ('Engineering','Adalynn',2800),
    ('Engineering','Samuel',2500),
    ('Engineering','Cveta',2200),
    ('Engineering','eve',2000),
    ('Engineering','Dharma',3500),
    ('Sales','Carbry',500),
    ('Sales','Clytemnestra',400),
    ('Sales','Juraj',300),
    ('Sales','Kalpana',300),
    ('Sales','Svantepolk',250),
    ('Sales','Angelo',200);
    ```
    
    The following example shows the parallel query execution plan for the `employee_salaries` table:
    
    ```
    explain format=tree select ROW_NUMBER() OVER(partition by dept order by salary desc) AS 'row_number' from employee_salaries\G
    *************************** 1. row ***************************
    EXPLAIN:
    -> Gather (slice: 1; workers: 4)  (cost=26.42 rows=12)
        -> Window aggregate  (cost=15.67 rows=3)
            -> Repartition (hash keys: employee_salaries.dept; slice: 2; workers: 4)  (cost=15.33 rows=3)
                -> Sort: employee_salaries.dept, employee_salaries.salary DESC  (cost=1.55 rows=13)
                    -> Parallel table scan on employee_salaries, with parallel partitions: 4
    ```
    
    In the preceding execution plan, after the `employee_salaries` table is scanned in parallel, data is distributed to the worker in the next stage by the key (`employee_salaries.dept`) specified in the Partition By clause. This ensures that the window functions can complete parallel computing and the results are correct. Finally, the leader summarizes the results.
