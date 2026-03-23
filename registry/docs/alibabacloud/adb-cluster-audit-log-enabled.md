If the SQL audit log feature is enabled for the AnalyticDB for MySQL cluster, the evaluation result is Compliant.

## Scenarios

AnalyticDB for MySQL provides the SQL audit feature to log data manipulation language (DML) and data definition language (DDL) operations. You can use the logs to perform fault analysis, behavior analysis, and security auditing. This improves the security of AnalyticDB for MySQL databases.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the SQL audit log feature is enabled for the AnalyticDB for MySQL cluster, the evaluation result is Compliant.
-   If the SQL audit log feature is not enabled for the AnalyticDB for MySQL cluster, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-qoa-ws5-anj)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

adb-cluster-audit-log-enabled

Rule identifier

adb-cluster-audit-log-enabled

Tag

ADB and Cluster

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

AnalyticDB for MySQL clusters

Input parameter

None

## Incompliance remediation

Enable the SQL audit log feature for AnalyticDB for MySQL clusters. For more information, see [SQL audit](/help/en/analyticdb/analyticdb-for-mysql/security-and-compliance/configure-sql-audit#task-2548879).
