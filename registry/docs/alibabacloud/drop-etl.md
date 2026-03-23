The DROP ETL statement deletes an ETL task in the current resource group.

## **Engine and version**

The DROP ETL statement is available only for the stream engine in versions 3.1.8 and later.

**Note**

You can view and [upgrade minor versions](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance) in the console.

## **Syntax**

```
drop_etl_statement ::= DROP ETL [ IF EXISTS ] etl_name
```

## **Example**

Delete the ETL task named `filter2` in the current resource group.

```
DROP ETL IF EXISTS filter2;
```

**Verify the result**

Use the `SHOW ETLS;` statement to verify that the task was deleted.
