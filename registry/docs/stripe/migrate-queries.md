# Migrate queries

Migrate your Sigma queries from Presto to Trino.

We upgraded Sigma’s query infrastructure from [Presto v334](https://trino.io/docs/334/sql.html) to [Trino v414](https://trino.io/docs/414/sql/select.html). Most queries run faster as a result of the upgrade, but a few queries might error unexpectedly or produce results in different formats.

Use the following suggestions to make your Sigma queries compatible with Trino v414.

## Invalid time zones

The `AMERICA/NEW_YORK` time zone is no longer valid in Trino v414.

```sql
-- FAILED: Presto error: NOT_SUPPORTED: Time zone not supported: AMERICA/NEW_YORK
select
    date_format(
        c.created AT TIME ZONE 'AMERICA/NEW_YORK',
        '%Y-%m-%d'
    )
from
    charges c
```

Instead, use `America/New_York`.

```sql
-- VALID
select
    date_format(
        c.created AT TIME ZONE 'America/New_York',
        '%Y-%m-%d'
    )
from
    charges c
```

## Invalid column references

Trino v414 doesn’t allow referencing column names with their originating sub-query or conditional table expression (CTE) out of scope.

```sql
-- FAILED: Presto error: COLUMN_NOT_FOUND: Column 'c.created' can't be resolved
select c.created from (select created from charges c)
```

The previous query is invalid because the sub-query `c` isn’t defined at the top level but is referenced at the top level, out of its defined scope.

```sql
-- VALID
select created from (select created from charges c)
```

```sql
-- VALID
select c.created from (select created from charges) c
```

Either reference the column without the sub-query or define the sub-query at the same level as its reference.

## Scientific notation

Casting a [double](https://trino.io/docs/414/language/types.html#double) to a [varchar](https://trino.io/docs/414/language/types.html#string) in Trino v414 produces results in scientific notation instead of decimal notation as in Presto v334.

```sql
-- RESULT: 1.0E2
select cast(100.0 as varchar)
```

To maintain this decimal notation, cast the double as a [decimal](https://trino.io/docs/414/language/types.html#decimal) and then as a varchar.

```sql
-- RESULT: 100.0
select cast(cast(100.0 as decimal(18,1)) as varchar)
```

## Timestamp functions

### FROM\_UNIXTIME

Trino v414 assumes that the result timestamp is in UTC and adds a trailing “UTC” when using [from\_unixtime](https://trino.io/docs/414/functions/datetime.html?highlight=from_unixtime#from_unixtime).

```sql
-- Trino v414 RESULT: 1970-01-01 00:00:00.000 UTC
-- Presto v334 RESULT: 1970-01-01 00:00:00 +0000
select from_unixtime(0)
```

To remove the trailing “UTC”, cast the result of `from_unixtime` as `timestamp`.

```sql
-- RESULT: 1970-01-01 00:00:00 +0000
select cast(from_unixtime(0) as timestamp)
```

### TO\_ISO8601

In Presto v334, [to\_iso8601](https://trino.io/docs/414/functions/datetime.html?highlight=to_iso8601#to_iso8601) adds a trailing Zulu time zone suffix (“Z”) to a timestamp without a time zone while Trino v414 doesn’t.

```sql
-- Presto v334 RESULT: 2024-04-01T00:00:00.000Z
-- Trino v414 RESULT: 2024-04-01T00:00:00
select to_iso8601(timestamp '2024-04-01')
```

To make sure the trailing Zulu time zone suffix is added, interpret the timestamp in UTC before calling `to_iso8601`.

```sql
-- RESULT: 2024-04-01T00:00:00Z
select to_iso8601(timestamp '2024-04-01' at time zone 'UTC')
```

## Query non-determinism

If you query is non-deterministic, regardless of the Sigma version, different executions can yield different results. Here are common query patterns that can lead to non-deterministic results.

### Top K queries

```sql
-- POTENTIALLY NON-DETERMINISTIC
select * from charges order by created DESC limit 10
```

If the 10th and 11th latest created charges were created at the same time, there’s no guarantee which charge is returned. Make sure to also sort on a unique identifier for deterministic results.

```sql
-- DETERMINISTIC
select * from charges order by created DESC, id limit 10
```

### Window aggregation

```sql
-- POTENTIALLY NON-DETERMINISTIC
select
    *
from
    (
        select
            c.*,
            row_number() over (
                partition by c.customer_id
                order by
                    c.amount DESC
            ) as row_rank
        from
            charges c
    )
where
    row_rank = 1
```

The above query returns the biggest charge for each customer using [row\_number](https://trino.io/docs/414/functions/window.html?highlight=row_number#row_number). See [window functions](https://trino.io/docs/414/functions/window.html). If a customer has multiple charges with the same maximum amount, there’s no guarantee which charge is returned.

Sort on a unique identifier in the window ordering for deterministic results.

```sql
-- DETERMINISTIC
select
    *
from
    (
        select
            c.*,
            row_number() over (
                partition by c.customer_id
                order by
                    c.amount DESC, c.created DESC, c.id
            ) as row_rank
        from
            charges c
    )
where
    row_rank = 1
```
