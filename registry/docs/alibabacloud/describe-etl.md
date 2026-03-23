The DESCRIBE ETL statement displays the details of a specified ETL task.

## **Engine and version**

DESCRIBE ETL is only available for the stream engine. Version 3.1.8 or later is required.

**Note**

You can view the current version in the console and [upgrade the minor version](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance).

## **Syntax**

```
describe_etl_statement ::= { DESCRIBE | DESC } ETL etl_name
```

## **Usage notes**

**etl\_name** specifies the name of the ETL task. This parameter is required.

## **Description of the result set**

**Field**

**Description**

SOURCE\_SCHEMA

The fields of the source table.

SINK\_SCHEMA

The fields of the sink table.

CONTENT

The complete data insertion logic of the ETL task. Use the [ALTER ETL](/help/en/lindorm/user-guide/alter-etl) statement to modify the logic.

ATTRIBUTES

The [ETL properties (etl\_properties)](/help/en/lindorm/user-guide/create-etl#689f514499fjy) set when the ETL task was created. If no properties were set, this field is empty.

STATUS

The status of the ETL task. Valid values:

-   SUBMIT: The task is submitted.
    
-   RUNNING: The task is running.
    
-   DELETE: The task is being deleted.
    

RESOURCE\_GROUP

The resource group in use. Use the [SET statement](/help/en/lindorm/user-guide/stream-resource-group-management) to modify the resource group.

CREATE\_USER

The user who created the ETL task.

CREATE\_TIME

The time when the ETL task was created.

## **Example**

Display the details of the ETL task `filter1` in the current resource group.

```
DESC ETL filter1;
```

The following result is returned:

```
+---------+---------------+------------------------------------------+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+------------+---------+------------------+-------------+------------------------------+
| ETL_ID  | ETL_VERSION   | SOURCE_SCHEMA                            | SINK_SCHEMA                            | CONTENT                                                                                                                             | ATTRIBUTES | STATUS  | RESOURCE_GROUP   | CREATE_USER | CREATE_TIME                  |
+---------+---------------+------------------------------------------+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+------------+---------+------------------+-------------+------------------------------+
| filter1 | 1747293558894 | `lindorm_table`.`default`.`source`:p1,c1 | `lindorm_table`.`default`.`sink`:p1,c1 | INSERT INTO `lindorm_table`.`default`.`sink` (`p1`, `c1`) SELECT `p1`, `c1` FROM `lindorm_table`.`default`.`source` WHERE `c1` > 10 | {}         | RUNNING | lstream-e00s**** | r***        | Thu May 15 15:19:18 CST 2025 |
+---------+---------------+------------------------------------------+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+------------+---------+------------------+-------------+------------------------------+
```
