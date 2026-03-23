If the encryption feature is enabled for all tables on the Tablestore instance, the evaluation result is Compliant.

## Scenarios

Enabling encryption for tables in Tablestore can significantly enhance data security.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the encryption feature is enabled for all tables on the Tablestore instance, the evaluation result is Compliant.
-   If the encryption feature is disabled for any table on the Tablestore instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-sjm-mm5-4es)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

ots-instance-all-table-encrypted

Rule identifier

ots-instance-all-table-encrypted

Tag

OTS and Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

Tablestore instance

Input parameter

None

## Incompliance remediation

Enable encryption for all tables on the Tablestore instance. For more information, see [Instances](/help/en/tablestore/product-overview/instance-of-tablestore#concept-hz2-btj-bfb).
