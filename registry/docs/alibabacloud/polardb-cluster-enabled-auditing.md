Checks whether the SQL explorer and audit feature is enabled for each PolarDB cluster. If so, the evaluation result is Compliant.

## Scenarios

After you enable the SQL explorer and audit feature, the features provided by Database Autonomy Service (DAS) Professional Edition are also enabled. The features include search, SQL explorer, security auditing, traffic playback, and stress testing. You can use the features to obtain the details of SQL statements, troubleshoot performance issues, identify high-risk data sources, and perform traffic playback and stress testing. This way, you can check whether a cluster needs to be scaled out to handle traffic spikes.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the SQL explorer and audit feature is enabled for each PolarDB cluster, the evaluation result is Compliant.
-   If the SQL explorer and audit feature is disabled for a PolarDB cluster, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-wli-21r-me8).

## Rule details

 

Item

Description

Rule name

polardb-cluster-enabled-auditing

Rule identifier

polardb-cluster-enabled-auditing

Tag

PolarDB, SQLAuditing, and AuditBaseline

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

PolarDB cluster

Input parameter

None.

## Incompliance remediation

Enable the SQL explorer and audit feature for a PolarDB cluster. For more information, see [SQL Explorer](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit#task-1580371 "provides the SQL Explorer feature that integrates the specific features of Database Autonomy Service (DAS). You can enable SQL Explorer to use the search, SQL Explorer, and security audit features of DAS Professional Edition in a convenient manner. This helps you obtain the details about SQL statements, troubleshoot performance issues, and identify the sources of high-risk SQL statements. In addition, the traffic playback and stress testing feature is also provided to help you verify whether your instance type needs to be scaled up or scaled out to handle traffic spikes.").
