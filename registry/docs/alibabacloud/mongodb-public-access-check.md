Checks whether 0.0.0.0/0 is added to the IP address whitelist of an ApsaraDB for MongoDB instance.

## Scenario

If 0.0.0.0/0 is added to the IP address whitelist of an ApsaraDB for MongoDB instance, the instance can be accessed from all CIDR blocks. This poses data security risks. We recommend that you add 0.0.0.0/0 to the IP address whitelist with caution.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If 0.0.0.0/0 is not added to the IP address whitelist of the ApsaraDB for MongoDB instance, the configuration is considered compliant.
-   If 0.0.0.0/0 is added to the IP address whitelist of the ApsaraDB for MongoDB instance, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

mongodb-public-access-check

Rule ID

mongodb-public-access-check

Tag

MongoDB and VPC

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

None

## Non-compliance remediation

Delete 0.0.0.0/0 from the IP address whitelist of the ApsaraDB for MongoDB instance. For more information, see [Modify a whitelist for an instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
