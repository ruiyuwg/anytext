A Redis instance is considered compliant if it is updated to the latest minor version.

## **Risk level**

Default risk level: Medium.

You can change the risk level for this rule as needed.

## **Detection logic**

-   A Redis instance is considered compliant if it is updated to the latest minor version.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Update a Redis instance to the latest minor version

Rule identifier

[redis-instance-upgrade-latest-version](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-instance-upgrade-latest-version)

Tags

Redis,Instance

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::Redis::DBInstance

Input parameters

None

## **Remediation**

For remediation instructions, see [Update the minor version and proxy version](/help/en/redis/user-guide/update-the-minor-version).
