The SELECT statement retrieves rows from zero or more tables.

## Syntax

```
[ WITH with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    * | expression [ [ AS ] output_name ] [, ...]
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY grouping_element [, ...] ]
    [ HAVING condition [, ...] ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
    [ ORDER BY expression [ ASC | DESC | USING operator ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start ]
```

Where `from_item` is one of:

```
table_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
from_item [ NATURAL ] join_type from_item
          [ ON join_condition | USING ( join_column [, ...] ) ]
```

Where `grouping_element` is an expression. An expression can be a column name, a constant, a function, or any combination of column names and constants connected by arithmetic or bitwise operators.

## Processing order

The SELECT statement processes clauses in this logical order:

1.  **FROM**: All items in the FROM list (real or virtual tables) are evaluated. Multiple items produce a cross join of all source tables.
    
2.  **WHERE**: Rows that do not satisfy the condition are removed.
    
3.  **GROUP BY and aggregates**: Rows are combined into groups by matching values. Aggregate functions compute a result for each group. If a HAVING clause is present, groups that do not meet the condition are removed.
    
4.  **SELECT**: Output expressions compute the actual result rows from the selected rows or groups.
    
5.  **DISTINCT**: Duplicate rows are removed from the result set.
    
6.  **UNION / INTERSECT / EXCEPT**: Multiple SELECT results are combined using set operators. Duplicates are removed unless ALL is specified.
    
7.  **ORDER BY**: Rows are sorted in the specified order. Without an ORDER BY clause, rows return in whatever order the system produces fastest.
    
8.  **LIMIT (or FETCH FIRST) / OFFSET**: Only a subset of the result rows is returned.
    

## Clauses

### WITH clause

The WITH clause defines one or more subqueries referenced by name in the main query. These named subqueries are called Common Table Expressions (CTEs).

```
WITH query_name [ ( column_name [, ...] ) ] AS ( select )
```

**Parameter**

**Description**

`query_name`

The CTE name. Any valid identifier is accepted.

`column_name`

Column names corresponding to the subquery return values, similar to AS semantics in a SELECT clause. The subquery can be any valid SELECT query.

Separate multiple CTEs with commas. A later CTE can reference an earlier one. In subsequent queries, use `query_name` directly as a view.

If no `column_name` list is specified, the column names default to those returned by the subquery. If a `column_name` list is specified, use those defined names, and the count must match the number of columns returned by the SELECT statement.

**Note**

Recursive CTEs are not supported.

### SELECT list

The SELECT list (between the SELECT and FROM keywords) specifies expressions that form the output rows.

Each output column has a name. To assign a name, add `AS output_name` after the column expression. The AS keyword can be omitted if the desired output name does not match any PostgreSQL keyword. To avoid potential conflicts with future keywords, use AS or enclose the output name in double quotes. If no column name is specified, PostgreSQL assigns one automatically: a simple column reference uses the column name, while more complex expressions may generate a name such as `?column?`.

Reference an output column by name in ORDER BY and GROUP BY clauses. In WHERE and HAVING clauses, use the full expression instead -- output column names are not recognized there.

Use an asterisk (`*`) as a shorthand for all columns of the selected rows, or `table_name.*` for all columns from a specific table. When using `*` or `table_name.*`, AS cannot rename the output columns.

### FROM clause

The FROM clause specifies one or more source tables. Multiple source tables produce a Cartesian product (cross join) of all rows. Typically, a WHERE clause with join conditions restricts the result to a small subset of the Cartesian product.

The FROM clause supports these elements:

**Element**

**Description**

`table_name`

The name of an existing table or view, optionally schema-qualified.

`alias`

An alternative name for a FROM item. Aliases simplify queries and resolve ambiguity in self-joins. When an alias is provided, the actual table or function name is hidden. For example, given `FROM foo AS f`, the rest of the query must refer to the item as `f`, not `foo`.

`select`

A sub-SELECT in the FROM clause acts as a temporary table for the duration of the query. Enclose the sub-SELECT in parentheses and provide an alias.

`function_name`

A function call in the FROM clause acts as a temporary table. This is especially useful for set-returning functions, though any function is allowed. Provide an alias as with a table, and optionally a column alias list to rename attributes of the function's composite return type, including any column added by ORDINALITY. Combine multiple function calls into a single FROM item by enclosing them in `ROWS FROM( ... )`. The output concatenates the first row of each function, then the second row, and so on. Functions producing fewer rows fill missing positions with NULLs. The total row count equals the maximum produced by any single function.

`join_type`

See [Join types](#section-3c533ebb) below.

`join_condition`

An expression evaluating to a Boolean value (similar to a WHERE clause) that specifies which rows match in a join.

`USING (a, b, ...)`

Shorthand for `ON left_table.a = right_table.a AND left_table.b = right_table.b ...`. USING also ensures only one copy of each matched column appears in the join output.

`NATURAL`

Shorthand for a USING clause that lists all columns with identical names in both tables.

#### Join types

For INNER and OUTER join types, specify exactly one join condition: `NATURAL`, `ON join_condition`, or `USING (join_column [, ...])`. CROSS JOIN does not accept a join condition.

Without parentheses, JOINs nest left to right. JOIN binds more tightly than commas in the FROM list. Use parentheses to control nesting order.

**Join type**

**Behavior**

`[INNER] JOIN`

Returns all row combinations from both tables that satisfy the join condition.

`LEFT [OUTER] JOIN`

Returns all matched rows, plus one copy of each unmatched left-table row extended with NULLs in the right-side columns. Only the JOIN condition determines which rows match; outer conditions apply afterward.

`RIGHT [OUTER] JOIN`

Returns all matched rows, plus each unmatched right-table row extended with NULLs on the left. Equivalent to a LEFT OUTER JOIN with swapped tables.

`FULL [OUTER] JOIN`

Returns all matched rows, plus each unmatched left-table row (extended with NULLs on the right), plus each unmatched right-table row (extended with NULLs on the left).

`CROSS JOIN`

Produces a simple Cartesian product, equivalent to `INNER JOIN ON (TRUE)`. No join condition is allowed.

### WHERE clause

The optional WHERE clause filters rows from the result.

```
WHERE condition
```

**Parameter**

**Description**

`condition`

Any expression that evaluates to a Boolean result. Rows that do not satisfy this condition are removed from the output. A row satisfies the condition when substituting its actual values for variable references returns true.

### GROUP BY clause

The optional GROUP BY clause condenses rows sharing the same grouping-expression values into a single summary row.

```
GROUP BY grouping_element [, ...]
```

The `grouping_element` expression can be an input column name, the name or ordinal number of an output column from the SELECT list, or an expression formed from input column values. If a name is ambiguous, GROUP BY interprets it as an input column name rather than an output column name.

If a grouping element contains GROUPING SETS, ROLLUP, or CUBE, the GROUP BY clause defines multiple independent grouping sets. This is equivalent to a UNION ALL of subqueries with individual GROUP BY clauses for each grouping set.

Aggregate functions compute across all rows in each group, producing a single value per group. Without a GROUP BY clause, the query treats all selected rows as a single group.

Filter the rows passed to an aggregate function by appending a FILTER clause to the aggregate function call. Only rows matching the filter condition are included in that aggregate's input.

When a GROUP BY clause or any aggregate function is present, SELECT list expressions cannot reference ungrouped columns except within an aggregate function or when the ungrouped column is functionally dependent on grouped columns. A functional dependency exists when the grouped columns include the primary key (or a subset thereof) of the table containing the ungrouped column.

All aggregate functions are computed before any scalar expressions in the HAVING clause or SELECT list. A CASE expression cannot skip the computation of an aggregate function.

### HAVING clause

The HAVING clause filters groups produced by GROUP BY. Its syntax is identical to the WHERE clause, but HAVING operates on grouped rows rather than individual rows.

```
HAVING condition [, ...]
```

Use HAVING to filter on aggregate results. For example, `HAVING sum(length) < interval '5 hours'` removes groups where the total length is 5 hours or more.

**Note**

Output column names cannot be referenced in the HAVING clause. Use the full expression instead.

### CUBE, ROLLUP, and GROUPING SETS

These subclauses extend GROUP BY to define multiple grouping sets in a single query.

#### CUBE

CUBE generates subtotals for all combinations of the specified grouping columns. For \*n\* expressions, CUBE produces 2^\*n\* groups: all combinations of dimension-column values along with aggregated values from matching base rows.

```
CUBE ( { expression | ( expression [, ...] ) } [, ...] )
```

For example, `CUBE (a, b, c)` produces 2^3 = 8 groups. Rows grouped by all \*n\* expressions are regular rows; all others are super-aggregate rows.

#### ROLLUP

ROLLUP returns a subtotal for each group and a grand total for all groups.

```
ROLLUP ( { expression | ( expression [, ...] ) } [, ...] )
```

#### GROUPING SETS

GROUPING SETS specifies exactly which grouping sets to compute. Unlike CUBE or ROLLUP, it does not generate every possible combination, making it more efficient when only specific groups are needed.

```
GROUPING SETS ( grouping_element [, ...] )
```

### DISTINCT clause

SELECT DISTINCT removes all duplicate rows from the result set, keeping one row per group of duplicates.

**Note**

SELECT DISTINCT on columns of the ARRAY data type is not supported.

```
SELECT DISTINCT accountid FROM table;
```

### COUNT DISTINCT

COUNT DISTINCT counts the number of distinct values in a column. A value appearing multiple times is counted only once. NULL values are excluded from the count.

**Exact count:**

```
SELECT c1, COUNT(DISTINCT c2) FROM table GROUP BY c1;
```

**Approximate count:**

An exact COUNT DISTINCT calculation can consume significant resources. Hologres provides `approx_count_distinct` as a less resource-intensive alternative for approximate calculations:

```
SELECT c1, approx_count_distinct(c2) FROM table GROUP BY c1;
```

### UNION clause

UNION computes the set union of rows returned by two SELECT statements.

```
select_statement UNION [ ALL | DISTINCT ] select_statement
```

**Parameter**

**Description**

`select_statement`

Any SELECT statement without ORDER BY, LIMIT, FOR NO KEY UPDATE, FOR UPDATE, FOR SHARE, or FOR KEY SHARE clauses. If the subexpression is enclosed in parentheses, ORDER BY and LIMIT can be attached to it. Without parentheses, these clauses apply to the entire UNION result.

`UNION`

Returns rows that appear in either or both result sets. Both SELECT statements must produce the same number of columns, and corresponding columns must have compatible data types. Duplicate rows are removed unless ALL is specified. ALL prevents duplicate removal, which is typically faster -- use ALL when possible. Specify DISTINCT explicitly to remove duplicates. Multiple UNION operators in the same query are evaluated left to right unless parentheses override the order.

### INTERSECT clause

INTERSECT computes the set intersection of rows returned by two SELECT statements.

```
select_statement INTERSECT [ ALL | DISTINCT ] select_statement
```

**Parameter**

**Description**

`select_statement`

Any SELECT statement without an ORDER BY or LIMIT clause.

`INTERSECT`

Returns rows that appear in both result sets. Duplicates are removed unless ALL is specified. With ALL, a row appearing \*m\* times in the left table and \*n\* times in the right table appears min(\*m\*, \*n\*) times in the result. Specify DISTINCT explicitly to remove duplicates. Multiple INTERSECT operators are evaluated left to right unless parentheses override the order. INTERSECT has higher precedence than UNION. For example, `A UNION B INTERSECT C` is evaluated as `A UNION (B INTERSECT C)`.

### EXCEPT clause

EXCEPT computes the set difference: rows in the left SELECT result that are not in the right SELECT result.

```
select_statement EXCEPT [ ALL | DISTINCT ] select_statement
```

**Parameter**

**Description**

`select_statement`

Any SELECT statement without an ORDER BY or LIMIT clause.

`EXCEPT`

Returns rows from the left result that do not appear in the right result. Duplicates are removed unless ALL is specified. With ALL, a row appearing \*m\* times in the left table and \*n\* times in the right table appears max(\*m\* - \*n\*, 0) times in the result. Specify DISTINCT explicitly to remove duplicates. Multiple EXCEPT operators are evaluated left to right unless parentheses override the order. EXCEPT has the same precedence as UNION.

**Note**

FOR NO KEY UPDATE, FOR UPDATE, FOR SHARE, and FOR KEY SHARE cannot be used with EXCEPT results or any EXCEPT input.

### ORDER BY clause

The optional ORDER BY clause sorts result rows by one or more expressions.

```
ORDER BY expression [ ASC | DESC | USING operator ] [ NULLS { FIRST | LAST } ] [, ...]
```

Rows are sorted by the leftmost expression first. Rows equal on the leftmost expression are compared on the next expression, and so on. Rows equal on all expressions return in an implementation-dependent order.

Each expression can be:

-   The name or ordinal number of an output column from the SELECT list.
    
-   An arbitrary expression formed from input column values.
    

The ordinal number refers to the position of the output column from left to right. This allows ordering by columns that do not have unique names. Assigning a unique name with AS is generally preferred.

When an ORDER BY expression is a simple name that matches both an output column name and an input column name, ORDER BY uses the output column name. This differs from GROUP BY, which uses the input column name in the same situation. The inconsistency exists for SQL standard compatibility.

**Sort direction:**

-   Add ASC (ascending, the default) or DESC (descending) after any expression.
    
-   Alternatively, use a USING clause with a sort operator that is a less-than or greater-than member of a B-tree operator family. ASC is generally equivalent to `USING <`, and DESC to `USING >`.
    

**NULL ordering:**

-   `NULLS LAST`: NULLs sort after all non-NULL values (default for ASC).
    
-   `NULLS FIRST`: NULLs sort before all non-NULL values (default for DESC).
    
-   By default, NULLs are treated as greater than non-NULL values.
    
-   With a USING clause, the default NULL position depends on whether the operator is less-than or greater-than.
    

Ordering options apply only to the expression they follow. For example, `ORDER BY x, y DESC` is not the same as `ORDER BY x DESC, y DESC`.

**Limitation:** When ORDER BY is applied to a UNION, INTERSECT, or EXCEPT result, only output column names or ordinal numbers are allowed -- not expressions.

### LIMIT clause

The LIMIT clause restricts the number of rows returned. FETCH FIRST is an equivalent SQL-standard syntax.

```
LIMIT { count | ALL }
OFFSET start
```

FETCH FIRST can be used as an alternative to LIMIT:

```
FETCH FIRST count ROWS ONLY
```

**Parameter**

**Description**

`count`

The maximum number of rows to return. A NULL value is treated as LIMIT ALL (no limit).

`start`

The number of rows to skip before returning rows. A NULL value is treated as OFFSET 0.

When both are specified, `start` rows are skipped before counting `count` rows to return.

Use an ORDER BY clause with LIMIT for predictable results. Without ORDER BY, different executions may return different subsets -- this is expected behavior, not a bug.

The query planner factors LIMIT into the query plan. Different LIMIT and OFFSET values may produce different plans and row orders. To get consistent results across different subsets, enforce a deterministic order with ORDER BY.

## Limitations

Hologres is compatible with PostgreSQL but does not support every PostgreSQL SELECT feature. These restrictions apply:

-   Recursive CTEs are not supported.
    
-   SELECT DISTINCT on columns of the ARRAY data type is not supported.
    
-   FOR NO KEY UPDATE, FOR UPDATE, FOR SHARE, and FOR KEY SHARE cannot be used with EXCEPT results or EXCEPT inputs.
    

## Examples

### Basic query

Retrieve all columns from a table:

```
SELECT * FROM distributors ORDER BY name;
```

### Join two tables

```
SELECT f.title, f.did, d.name, f.date_prod, f.kind
FROM distributors d, films f
WHERE f.did = d.did;
```

### WITH clause (CTE)

```
WITH distributor_name(name) AS (
    SELECT name FROM distributors
)
SELECT name FROM distributor_name ORDER BY name;
```

### GROUP BY

```
SELECT kind, sum(length) AS total
FROM films
GROUP BY kind;
```

### GROUP BY with HAVING

```
SELECT kind, sum(length) AS total
FROM films
GROUP BY kind
HAVING sum(length) < interval '5 hours';
```

### GROUP BY CUBE

```
SELECT l_returnflag,
       l_shipmode,
       SUM(l_quantity)
FROM public.lineitem
GROUP BY CUBE ((l_returnflag), (l_shipmode))
ORDER BY l_returnflag, l_shipmode;
```

### GROUP BY ROLLUP

```
SELECT l_returnflag,
       l_shipmode,
       SUM(l_quantity)
FROM public.lineitem
GROUP BY ROLLUP ((l_returnflag), (l_shipmode))
ORDER BY l_returnflag, l_shipmode;
```

### GROUP BY GROUPING SETS

```
SELECT l_returnflag,
       l_shipmode,
       SUM(l_quantity)
FROM public.lineitem
GROUP BY GROUPING SETS ((l_returnflag, l_shipmode), ())
ORDER BY l_returnflag, l_shipmode;
```

### DISTINCT

```
SELECT DISTINCT accountid FROM table;
```

### COUNT DISTINCT (exact and approximate)

Exact:

```
SELECT c1, COUNT(DISTINCT c2) FROM table GROUP BY c1;
```

Approximate:

```
SELECT c1, approx_count_distinct(c2) FROM table GROUP BY c1;
```
