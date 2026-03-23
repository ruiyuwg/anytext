Checks whether the IOPS of an ApsaraDB for MongoDB instance is greater than or equal to a specified value.

## Scenario

Make sure that the IOPS of an ApsaraDB for MongoDB instance meets your business requirements. Otherwise, your business system may be interrupted.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the IOPS of the ApsaraDB for MongoDB instance is greater than or equal to the specified value, the configuration is considered compliant.
-   If the IOPS of the ApsaraDB for MongoDB instance is less than the specified value, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

mongodb-min-maxiops-limit

Rule ID

mongodb-min-maxiops-limit

Tag

MongoDB and MaxIOPS

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

`MaxIOPS`. Default value: 1000.

## Non-compliance remediation

Change the specifications of the ApsaraDB for MongoDB instance. For more information, see [Change the configurations of an instance](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-1580302).
