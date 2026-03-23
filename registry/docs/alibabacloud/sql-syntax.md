SQL clauses are fundamental components for constructing SQL statements. Each clause serves a distinct purpose, enabling users to perform operations such as retrieving, inserting, updating, or deleting data within a logstore. By integrating various clauses, you can execute complex queries and data processing.

The commonly used SQL clauses in Simple Log Service and their functions are as follows:

**SQL Clause**

**Description**

[EXCEPT clause](/help/en/sls/except-clause)

Used to combine the result sets of two SELECT clauses and returns the difference between the two result sets. The difference set includes the values that are included in the result set of the first SELECT statement, yet not in that of the second one.

[EXISTS clause](/help/en/sls/exists-clause)

Used to determine whether a query result exists within a subquery. If the subquery in an EXISTS clause returns a specific result, true is returned and the outer SQL statement is executed.

[GROUP BY clause](/help/en/sls/group-by-clause)

Used together with aggregate functions to group analysis results based on one or more columns that you specify. The GROUP BY clause can also be used together with ROLLUP, CUBE, and GROUPING SETS to generate multiple grouping sets.

[HAVING clause](/help/en/sls/having-clause)

Used to specify filter conditions for the results that are returned by GROUP BY clauses or aggregate functions.

[INSERT INTO clause](/help/en/sls/insert-into-clause)

Supports writing SQL calculation results into other logstores within the same project.

[INTERSECT clause](/help/en/sls/intersect-clause)

Used to combine the result sets of two SELECT clauses and returns only the rows that are common to both result sets.

[JOIN clause](/help/en/sls/join-clause)

Used to join multiple tables. Simple Log Service allows you to join data stored in different logstores of the same project. You can also join data that is stored in a logstore with data stored in a MySQL database or an Object Storage Service (OSS) bucket.

[LIMIT clause](/help/en/sls/limit-clause)

Used to specify the number of rows to return. By default, Simple Log Service returns 100 rows of data.

[ORDER BY clause](/help/en/sls/order-by-clause)

Used to sort query and analysis results based on specified column names.

[UNION clause](/help/en/sls/union-clause)

Used to merge the analysis results of multiple SELECT statements.

[UNNEST clause](/help/en/sls/unnest-clause)

In complex business scenarios, the values of log fields may be of types such as arrays or objects. When querying and analyzing these special types of log fields, you can first use the UNNEST clause to expand the field values.

[VALUES clause](/help/en/sls/values-clause)

Used to construct data, allowing you to insert a small amount of temporary data into a table for querying and analysis.

[WITH clause](/help/en/sls/with-clause)

Supports saving subquery results into a temporary table, enabling subsequent SQL analysis to be executed on the temporary table. The WITH clause can simplify SQL statements and improve readability.
