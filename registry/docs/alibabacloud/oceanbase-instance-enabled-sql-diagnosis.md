Checks whether the SQL diagnostics feature is enabled for an ApsaraDB for OceanBase cluster.

## Scenarios

You can use the SQL diagnostics feature to analyze and diagnose suspicious SQL statements, slow SQL statements, and SQL statements that are most frequently executed.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the SQL diagnostics feature is enabled for the ApsaraDB for OceanBase cluster, the evaluation result is compliant.
-   If the SQL diagnostics feature is disabled for the ApsaraDB for OceanBase cluster, the evaluation result is non-compliant.

## Rule details

**Item**

**Description**

Rule name

oceanbase-instance-enabled-sql-diagnosis

Rule ID

oceanbase-instance-enabled-sql-diagnosis

Tag

OceanBase,Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Time interval

24 hours

Supported resource type

ApsaraDB for OceanBase cluster

Input parameter

None
