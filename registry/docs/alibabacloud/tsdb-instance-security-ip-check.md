If 0.0.0.0/0 is not included in the whitelists of the Time Series Database (TSDB) instance, the evaluation result is Compliant.

## Scenarios

If 0.0.0.0/0 is included in the whitelists of a TSDB instance, the instance allows access from all IP addresses. This causes high security risks.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If 0.0.0.0/0 is not included in the whitelists of the TSDB instance, the evaluation result is Compliant.
-   If 0.0.0.0/0 is included in a whitelist of the TSDB instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-sdu-gnv-ewh)" section of this topic.

## Rule details

 

Item

Description

Rule name

tsdb-instance-security-ip-check

Rule identifier

tsdb-instance-security-ip-check

Tag

TSDB and Public

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

TSDB instances

Input parameter

None

## Incompliance remediation

Delete 0.0.0.0/0 from all whitelists of TSDB instances. For more information, see [Network connection](/help/en/time-series-database/latest/network-connection#task515).
