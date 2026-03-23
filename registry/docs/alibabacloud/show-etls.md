The SHOW ETLS statement lists all extract, transform, and load (ETL) tasks in the current resource group, or lists the ETL tasks whose names match a specified pattern.

## **Engine and version**

SHOW ETLS applies only to the stream engine. Version 3.1.8 or later is required.

**Note**

You can view the current version and [update the minor version](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance) in the console.

## **Syntax**

```
show_etls_statement ::= SHOW ETLS [ LIKE string_literal ]
```

## **Usage notes**

### **Matching expression (LIKE** string\_literal**)**

The expression that follows the `LIKE` keyword is a string literal. The system uses this string literal to perform a wildcard match on system properties. This string literal supports only the following wildcard characters:

-   `%`: Represents zero or more characters.
    
-   `_`: Represents a single character.
    

## **Result set description**

**Field**

**Description**

ETL\_ID

The name of the ETL task.

ETL\_VERSION

The version number of the ETL task. Only the latest version is displayed.

STATUS

The status of the ETL task. Valid values:

-   SUBMIT: The task is submitted.
    
-   RUNNING: The task is running.
    
-   DELETE: The task is being deleted.
    

JOB\_RESTART\_NUM

The number of times the ETL task has been restarted.

NUM\_RECORDS

The number of data records processed by the ETL task.

RECORDS\_PER\_SEC

The number of data records processed per second by the ETL task.

NUM\_BYTES

The total amount of data processed by the ETL task, in bytes.

BYTES\_PER\_SEC

The amount of data processed per second by the ETL task, in bytes.

EVENT\_TIME\_LAG

The data processing latency of the ETL task, in milliseconds (ms). A negative value indicates that no data is flowing in.

## **Examples**

### **Show all ETL tasks**

Lists all ETL tasks in the current resource group.

```
SHOW ETLS;
```

Result:

```
+---------+---------------+---------+-----------------+-------------+-----------------+-----------+---------------+----------------+
| ETL_ID  | ETL_VERSION   | STATUS  | JOB_RESTART_NUM | NUM_RECORDS | RECORDS_PER_SEC | NUM_BYTES | BYTES_PER_SEC | EVENT_TIME_LAG |
+---------+---------------+---------+-----------------+-------------+-----------------+-----------+---------------+----------------+
| filter1 | 1753940184757 | RUNNING | 0               | 0.0         | 0.0             | 0.0       | 0.0           | -1.0           |
| filter2 | 1753945414775 | RUNNING | 0               | 0.0         | 0.0             | 0.0       | 0.0           | -1.0           |
+---------+---------------+---------+-----------------+-------------+-----------------+-----------+---------------+----------------+
```

### **Perform a wildcard match on ETL task names**

Lists all ETL tasks in the current resource group whose names start with `filter`.

```
SHOW ETLS LIKE 'filter%';
```

Result:

```
+---------+---------------+---------+-----------------+-------------+-----------------+-----------+---------------+----------------+
| ETL_ID  | ETL_VERSION   | STATUS  | JOB_RESTART_NUM | NUM_RECORDS | RECORDS_PER_SEC | NUM_BYTES | BYTES_PER_SEC | EVENT_TIME_LAG |
+---------+---------------+---------+-----------------+-------------+-----------------+-----------+---------------+----------------+
| filter1 | 1753940184757 | RUNNING | 0               | 0.0         | 0.0             | 0.0       | 0.0           | -1.0           |
| filter2 | 1753945414775 | RUNNING | 0               | 0.0         | 0.0             | 0.0       | 0.0           | -1.0           |
+---------+---------------+---------+-----------------+-------------+-----------------+-----------+---------------+----------------+
```
