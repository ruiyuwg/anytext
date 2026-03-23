The SHOW JOBS statement lists all stream jobs in the current resource group.

## **Engine and version**

The SHOW JOBS statement is available only for stream engines of version 3.1.8 or later.

**Note**

You can view the engine version and [update the minor version](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance) in the console.

## **Syntax**

```
show_jobs_statement ::= SHOW JOBS
```

## **Examples**

List all stream jobs in the current resource group.

```
SHOW JOBS;
```

The following result is returned:

```
+-----------------+------------+-----------+
| Query ID | Job Status | Job Start |
+-----------------+------------+-----------+
| test_datagen2   | RUNNING    | 310029    |
| filter1         | RUNNING    | 1732491   |
| test_datagen    | RUNNING    | 540327    |
| sync_task       | RUNNING    | 47336395  |
| datagen_job     | RUNNING    | 87726     |
| filter2         | CANCELED   | 38779     |
+-----------------+------------+-----------+
```
