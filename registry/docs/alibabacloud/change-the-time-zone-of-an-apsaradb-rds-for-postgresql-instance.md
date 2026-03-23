If the time zone of your ApsaraDB RDS for PostgreSQL instance does not match business logic or your application needs to handle the data of multiple time zones, you can change the time zone of the RDS instance. This ensures that the data is correctly converted and displayed in different time zones.

## Prerequisites

Your RDS instance uses cloud disks.

## Usage notes

-   The `SET timezone` statement takes effect only for the current session. If you want the change to permanently take effect, we recommend that you change the time zone based on the description in [Modify instance parameters](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance#concept-lfl-xmn-wdb).
    
-   If you want to specify a time zone for a database, execute the `ALTER DATABASE <Name of the database> SET timezone TO '<Name of the time zone>';` statement.
    
    **Note**
    
    If you want to restore the time zone of a database to the default time zone, execute the `ALTER DATABASE <Name of the database> SET timezone TO DEFAULT;` statement.
    
-   PostgreSQL supports two data types for timestamps: **TIMESTAMP** and **TIMESTAMPTZ**. We recommend that you select a data type based on your business requirements.
    
    -   **TIMESTAMP**: stores a combined date and time value in UTC, but does not store time zone data. If you change the time zone based on this topic, the query results of the value of this type remain unchanged.
        
    -   **TIMESTAMPTZ**: stores a combined time zone-aware date and time value. When you insert a value of the TIMESTAMPTZ type, the system converts the value into a UTC value and stores the UTC value in a table. When you query the value from your RDS instance, the system converts the value into the time that is specified by the configured time zone for the instance or database. If you change the time zone based on this topic, the query results of the value of this type vary based on the new time zone.
        

## Change the time zone

You can change the time zone only of an RDS instance that uses cloud disks. To change the time zone, log on to the ApsaraDB RDS console and modify the **timezone** parameter on the **Parameters** page. For more information, see [Modify instance parameters](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance#concept-lfl-xmn-wdb).

![timezone](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3883187761/p562658.png)

**Note**

If an RDS instance uses Premium Local SSDs, the **timezone** parameter is not supported.

## Query supported time zones

You can execute the following statement to query supported time zones:

```
SELECT name,utc_offset FROM pg_timezone_names;
```

**Note**

For more information about the pg\_timezone\_names table, see [pg\_timezone\_names](https://www.postgresql.org/docs/12/view-pg-timezone-names.html).

![查看支持时区](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9676252061/p163755.png)

## **References**

-   If you do not specify a time zone when you create an RDS instance, the system assigns the default time zone of the region that you specify for the RDS instance. For more information, see [Mappings between the regions and default time zones of ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/time-zones#section-330-qk5-nba).
    
-   ApsaraDB RDS for PostgreSQL allows you to configure only time zone names. Time zones represented in UTC offsets are not supported. For more information, see [Mappings between time zone abbreviations and time zones supported by ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-postgresql/time-zones#conbody-jjh-kqp-4ha).
    
-   You can also modify the **timezone** parameter by calling an API operation.
    
    **Operation**
    
    **Description**
    
    [ModifyParameter](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyparameter-postgresql)
    
    Modifies the parameters of an instance.
