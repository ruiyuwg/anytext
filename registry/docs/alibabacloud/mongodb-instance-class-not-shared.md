If the ApsaraDB for MongoDB instance is a dedicated instance, the evaluation result is Compliant.

## Scenarios

Dedicated instances enjoy dedicated CPU and memory resources. The performance of a dedicated ApsaraDB for MongoDB instance is guaranteed and is not affected by the other instances that are deployed on the same physical host.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the ApsaraDB for MongoDB instance is a dedicated instance, the evaluation result is Compliant.
-   If the ApsaraDB for MongoDB instance is a general-purpose instance, the evaluation result is Incompliant. For information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-vj8-8v0-25z)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

mongodb-instance-class-not-shared

Rule identifier

mongodb-instance-class-not-shared

Tag

MongoDB and Instance

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

None

## Incompliance remediation

Change the category of the instance to a dedicated instance. For more information, see [Instance types](/help/en/mongodb/product-overview/instance-types/#concept-wrp-kg4-tdb).
