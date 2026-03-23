Checks whether Internet access is disabled for each ApsaraDB for MongoDB instance. If so, the evaluation result is Compliant. Checks whether Internet access is enabled for each MongoDB instance and the instance denies access over the Internet. If so, the evaluation result is also Compliant.

## Scenarios

If 0.0.0.0/0 is added to the IP whitelist of a MongoDB instance, the instance can be accessed from all CIDR blocks. This causes data security risks. Proceed with caution when you add 0.0.0.0/0 to the IP whitelist of a MongoDB instance.

## Risk level

Default risk level: high.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If Internet access is disabled for each MongoDB instance, the evaluation result is Compliant. If Internet access is enabled for each MongoDB instance and the instance denies access over the Internet, the evaluation result is also Compliant.
-   If Internet access is enabled for a MongoDB instance and the instance allow access over the Internet, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-dw8-b2e-u93).

## Rule details

**Item**

**Description**

Rule name

mongodb-public-and-any-ip-access-check

Rule identifier

mongodb-public-and-any-ip-access-check

Tag

MongoDB and Public

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

MongoDB instances

Input parameter

None

## Incompliance remediation

Disable Internet access for a MongoDB instance or configure an IP whitelist for a MongoDB instance to deny access over the Internet. For more information, see [Modify a whitelist for an instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
