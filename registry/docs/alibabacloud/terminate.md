The TERMINATE statement stops a stream job.

## **Engine and version**

The TERMINATE statement applies only to the stream engine and requires version 3.1.8 or later.

**Note**

You can view the current version and perform a [minor version update](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance) in the console.

## **Syntax**

```
terminate_job_statement ::= TERMINATE JOB job_name
```

## **Usage notes**

**job\_name** specifies the name of a running stream job. You can use the [DESCRIBE](/help/en/lindorm/user-guide/describe-flink-job) statement to confirm that the job status is `RUNNING`.

## **Examples**

Stop the job `test_datagen2`.

```
TERMINATE JOB test_datagen2;
```

**Verify the result**

Run the `SHOW JOBS;` command to view the status of `test_datagen2`. After the statement is successfully executed, the `Job Status` is displayed as `CANCELED`.
