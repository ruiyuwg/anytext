Answers to common questions about MaxCompute built-in functions, organized by category.

**Category**

**Questions**

[Date functions](#section-1484bc00)

[Convert date formats](#section-pgy-2nf-kf2), [UNIX timestamp to DATETIME](#section-s03-6hw-l7b), [Get current time](#section-5ae-wka-ivn), ["cannot be resolved" error](#section-u5f-omu-paw), [TO\_DATE minute format error](#section-0oi-4cd-0v8)

[Mathematical functions](#section-f31a9458)

[ROUND precision with DOUBLE](#section-djc-iek-pog)

[Window functions](#section-18e119ee)

[Auto-increment sequence](#section-j3a-tor-2s3)

[Aggregate functions](#section-48e7d927)

[Concatenate field values](#section-rcr-tkg-cly)

[String functions](#section-5858543a)

[MD5 support](#section-bov-hw2-08f), [Left pad with zeros](#section-r5l-ubg-wl2), [SUBSTRING\_INDEX support](#section-rfw-6k4-olb), [REGEXP\_COUNT nested queries](#section-ycz-2qs-unl), [Oracle TO\_CHAR formatting](#section-4kd-4mj-lrc)

[Complex type functions](#section-3b8f0c9f)

[Filter and aggregate JSON fields](#section-jg9-06s-gwd), [Extract JSON keys as columns](#section-r4e-2vh-us2), [JSON string to array](#section-pc0-gfy-0ei)

[Other functions](#section-a15133ef)

[IFNULL equivalent and errors](#section-29f-4w0-93n), [One row to multiple rows](#section-6o4-yjb-9bv), [COALESCE GROUP BY error](#section-8n7-d70-mr1)

[Implicit type conversions](#section-e5fbbeab)

[Conversion errors with V2.0 data types](#section-r3d-19c-mev)

## Date functions

### How do I convert a date like 2010/1/3 to 2010-01-03?

For zero-padded input (e.g., `2010/01/03`), combine `TO_DATE` and `TO_CHAR`:

```
SELECT TO_CHAR(TO_DATE('2010/01/03', 'yyyy/mm/dd'), 'yyyy-mm-dd');
-- Returns: 2010-01-03
```

For non-zero-padded input (e.g., `2010/1/3`), built-in functions cannot parse it directly. Write a [user-defined function (UDF)](/help/en/maxcompute/user-guide/overview-22). This topic describes the types, scenarios, development process, and usage notes of UDFs that are supported in MaxCompute.") to handle variable-length date parts.

For more information, see [TO\_DATE](/help/en/maxcompute/user-guide/date-functions/#section-b3z-1fm-vdb) and [TO\_CHAR](/help/en/maxcompute/user-guide/date-functions/#section-a2d-rfm-vdb).

### How do I convert a UNIX timestamp to a DATETIME value?

Use `FROM_UNIXTIME`:

```
SELECT FROM_UNIXTIME(1609459200);
-- Returns: 2021-01-01 08:00:00
```

For more information, see [FROM\_UNIXTIME](/help/en/maxcompute/user-guide/date-functions/#section-c38-7d4-35t).

### How do I get the current system time?

Use `GETDATE`:

```
SELECT GETDATE();
-- Returns the current date and time, e.g., 2026-02-15 10:30:00
```

For more information, see [GETDATE](/help/en/maxcompute/user-guide/date-functions/#section-o4p-45l-vdb).

### Why do I get a "cannot be resolved" error with YEAR, QUARTER, MONTH, or DAY?

```
FAILED: ODPS-0130071:[1,8] Semantic analysis exception - function or view 'year' cannot be resolved
```

`YEAR`, `QUARTER`, `MONTH`, and `DAY` are extension functions introduced in MaxCompute V2.0. They require the V2.0 data type edition.

Add the following setting before your SQL statement:

```
SET odps.sql.type.system.odps2 = true;
SELECT YEAR(GETDATE());
```

### Why does TO\_DATE fail with a "missing minute part" error?

```
FAILED: ODPS-0121095:Invalid arguments - format string has second part, but doesn't have minute part : yyyy-MM-dd HH:mm:ss
```

In MaxCompute, both `mm` and `MM` represent the month. Use `mi` for minutes:

```
-- Incorrect
SELECT TO_DATE('2016-07-18 18:18:18', 'yyyy-MM-dd HH:mm:ss');

-- Correct
SELECT TO_DATE('2016-07-18 18:18:18', 'yyyy-MM-dd HH:mi:ss');
```

This differs from many other SQL platforms where `mm` represents minutes. In MaxCompute, always use `mi` for the minute component.

## Mathematical functions

### Why does ROUND(4.515, 2) return 4.51 instead of 4.52?

DOUBLE values are 8-byte floating-point numbers with limited precision. The value `4.515` is stored internally as approximately `4.514999999...`, so rounding to two decimal places produces `4.51`:

```
SELECT ROUND(4.515, 2), ROUND(125.315, 2);
-- Returns: 4.51, 125.32
```

For exact rounding, use the DECIMAL type:

```
SELECT ROUND(4.515BD, 2);
-- Returns: 4.52
```

The DECIMAL type stores values with exact precision, avoiding floating-point representation issues.

## Window functions

### How do I generate an auto-increment sequence?

Use `ROW_NUMBER` as a window function:

```
SELECT ROW_NUMBER() OVER (ORDER BY id) AS row_num, *
FROM my_table;
```

For more information, see [ROW\_NUMBER](/help/en/maxcompute/user-guide/window-functions-1/#section-22b-f5e-tbt).

## Aggregate functions

### How do I concatenate values in a column?

Use `WM_CONCAT`:

```
SELECT WM_CONCAT(',', name) AS all_names
FROM my_table;
-- Returns: Alice,Bob,Charlie
```

For more information, see [WM\_CONCAT](/help/en/maxcompute/user-guide/aggregate-functions/#section-ddm-tv1-wdb).

## String functions

### Does MaxCompute support MD5?

Yes. `MD5` computes the hash of a string:

```
SELECT MD5('hello');
-- Returns: 5d41402abc4b2a76b9719d911017c592
```

For more information, see [MD5](/help/en/maxcompute/user-guide/string-functions/#section-hbw-xzz-vdb).

### How do I left pad a string with zeros?

Use `LPAD`:

```
SELECT LPAD('42', 6, '0');
-- Returns: 000042
```

For more information, see [LPAD](/help/en/maxcompute/user-guide/string-functions/#section-mcj-zj1-wdb).

### Does MaxCompute support SUBSTRING\_INDEX?

Yes. `SUBSTRING_INDEX` works the same way as in MySQL:

```
SELECT SUBSTRING_INDEX('www.example.com', '.', 2);
-- Returns: www.example
```

For more information, see [SUBSTRING\_INDEX](/help/en/maxcompute/user-guide/string-functions/#section-uw3-hl1-wdb).

### Does REGEXP\_COUNT support nested queries in the pattern parameter?

No. The `pattern` parameter of `REGEXP_COUNT` does not support nested query statements.

For more information, see [REGEXP\_COUNT](/help/en/maxcompute/user-guide/string-functions/#section-ctz-0l2-qyd).

### Does MaxCompute support Oracle's TO\_CHAR number formatting?

MaxCompute does not support Oracle's `TO_CHAR(Data, FM9999.00)` syntax. Use `FORMAT_NUMBER` instead:

```
SELECT FORMAT_NUMBER(12332.123456, '#,###,###,###.###');
-- Returns: 12,332.123
```

For more information, see [FORMAT\_NUMBER](/help/en/maxcompute/user-guide/string-functions/#section-hia-g4n-z7l).

## Complex type functions

### How do I aggregate JSON fields that match a condition?

Filter records with SQL conditions such as `LIKE`, then use [ARRAY](/help/en/maxcompute/user-guide/complex-type-functions#section-zln-uwi-ar5) or [MAP](/help/en/maxcompute/user-guide/complex-type-functions#section-1uq-s39-4zh) to construct a complex type from the results. Convert the result to a JSON string with [TO\_JSON](/help/en/maxcompute/user-guide/complex-type-functions#section-7nq-0gr-t4n):

```
SELECT TO_JSON(ARRAY(col1, col2))
FROM my_table
WHERE col1 LIKE '%keyword%';
```

### How do I extract JSON keys as separate columns?

Use `GET_JSON_OBJECT`:

```
SELECT
  GET_JSON_OBJECT(json_col, '$.name') AS name,
  GET_JSON_OBJECT(json_col, '$.age') AS age
FROM my_table;
```

For more information, see [GET\_JSON\_OBJECT](/help/en/maxcompute/user-guide/complex-type-functions#section-un5-mvg-on2).

### How do I convert a JSON string to an array?

Use `FROM_JSON` with the target type as a string:

```
SELECT FROM_JSON(json_col, 'array<bigint>');
-- Converts a JSON array string like "[1, 2, 3]" to a MaxCompute ARRAY<BIGINT>
```

For more information, see [FROM\_JSON](/help/en/maxcompute/user-guide/complex-type-functions#section-4at-wo3-wll).

## Other functions

### MaxCompute does not support IFNULL. What should I use instead?

MaxCompute does not have an `IFNULL` function. If you try to use it, you get:

```
Semantic analysis exception - Invalid function : line 1:41 'ifnull'
```

Use one of these alternatives:

**Function**

**Syntax**

**Use when**

`NVL`

`NVL(expr, default_value)`

Direct replacement for MySQL's `IFNULL` -- returns `default_value` if `expr` is NULL

`COALESCE`

`COALESCE(expr1, expr2, ...)`

Multiple fallback values needed -- returns the first non-NULL expression

`CASE WHEN`

`CASE WHEN expr IS NULL THEN default_value ELSE expr END`

Complex conditional logic beyond simple NULL checks

For most cases, `NVL` is the simplest drop-in replacement:

```
-- MySQL
SELECT IFNULL(col, 0) FROM my_table;

-- MaxCompute equivalent
SELECT NVL(col, 0) FROM my_table;
```

For more information, see [NVL](/help/en/maxcompute/user-guide/other-functions/), [COALESCE](/help/en/maxcompute/user-guide/other-functions/#section-dts-3y1-wdb), [CASE WHEN expression](/help/en/maxcompute/user-guide/other-functions/#section-jvg-uf1-mnr), and [function mappings between MaxCompute, Hive, MySQL, and Oracle](/help/en/maxcompute/user-guide/mappings-between-built-in-functions-of-maxcompute-and-built-in-functions-of-hive-mysql-and-oracle).

### How do I split one row into multiple rows?

Use `TRANS_COLS`. The output includes an index column followed by the transposed data columns, so the number of aliases must equal 1 + the number of data columns:

```
SELECT TRANS_COLS(2, col1, col2) AS (idx, key, value)
FROM my_table;
```

For more information, see [TRANS\_COLS](/help/en/maxcompute/user-guide/other-functions/#section-vxw-9dg-ypz).

### Why do I get "Expression not in GROUP BY key" when using COALESCE?

```
FAILED: ODPS-0130071:Semantic analysis exception - Expression not in GROUP BY key : line 8:9 "$.table"
```

This error occurs when a non-aggregated expression inside `COALESCE` references a column not listed in `GROUP BY`.

In the following example, the query fails because `get_json_object(extended_x, '$.table')` inside `decode` is not aggregated and not in `GROUP BY`:

```
SELECT
  md5(concat(aid, bid)) AS id,
  aid,
  bid,
  sum(amountdue) AS amountdue,
  coalesce(
    sum(regexp_count(get_json_object(extended_x, '$.table.tableParties'), '{')),
    decode(get_json_object(extended_x, '$.table'), null, 0, 1)
  ) AS tableparty
FROM e_orders
WHERE pt = '20170425'
GROUP BY aid, bid;
```

The `decode(get_json_object(extended_x, '$.table'), null, 0, 1)` expression operates on individual rows but appears outside any aggregate function. Either wrap it in an aggregate function or include it in the `GROUP BY` clause.

## Implicit type conversions

### Why do I get implicit type conversion errors after enabling MaxCompute V2.0?

When the MaxCompute V2.0 data type edition is enabled (`odps.sql.type.system.odps2=true`), the following implicit type conversions are disabled:

**Source type**

**Target type**

STRING

BIGINT

STRING

DATETIME

DOUBLE

BIGINT

DECIMAL

DOUBLE

DECIMAL

BIGINT

These conversions can cause precision loss, so V2.0 blocks them by default. To resolve this:

-   **Explicit conversion (recommended):** Use `CAST` to convert types explicitly: For more information, see [CAST](/help/en/maxcompute/user-guide/type-conversions#section-gvj-1jl-vdb).
    
    ```
      SELECT CAST(string_col AS BIGINT) FROM my_table;
    ```
    
-   **Disable V2.0 data types:** Set `odps.sql.type.system.odps2=false` to re-enable implicit conversions. Note that this setting may also disable V2.0 extension functions like `YEAR`, `QUARTER`, `MONTH`, and `DAY`, depending on the project-level configuration.
