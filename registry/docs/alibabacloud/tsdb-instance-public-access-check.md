If Internet access is disabled for the Time Series Database (TSDB) instance, the evaluation result is Compliant.

## Scenarios

Accessing TSDB instances over the Internet may cause high security risks. We recommend that you access TSDB instances through private networks.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If Internet access is disabled for the TSDB instance, the evaluation result is Compliant.
-   If Internet access is enabled for the TSDB instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-aqr-c60-loz)" section of this topic.

## Rule details

 

Item

Description

Rule name

tsdb-instance-public-access-check

Rule identifier

tsdb-instance-public-access-check

Tag

TSDB and Pbulic

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

Disable Internet access for TSDB instances. For more information, see [Network connection](/help/en/time-series-database/latest/network-connection#task515).
