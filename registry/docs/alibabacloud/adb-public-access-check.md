If Internet access is disabled for the AnalyticDB for MySQL cluster, the evaluation result is Compliant.

## Scenarios

Enabling Internet access for AnalyticDB for MySQL clusters may cause higher security risks. We recommend that you access AnalyticDB for MySQL through private networks.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If Internet access is disabled for the AnalyticDB for MySQL cluster, the evaluation result is Compliant.
-   If Internet access is enabled for the AnalyticDB for MySQL cluster, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-nn7-x37-iaq)" section of this topic.

## Rule details

 

Item

Description

Rule name

adb-public-access-check

Rule identifier

adb-public-access-check

Tag

ADB and Public

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

Disable Internet access for AnalyticDB for MySQL clusters. For more information, see [AllocateClusterPublicConnection](/help/en/analyticdb-for-mysql/api-allocateclusterpublicconnection#doc-api-adb-AllocateClusterPublicConnection).
