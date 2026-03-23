A Redis instance is considered compliant if specified high-risk commands are disabled.

## **Risk level**

The default risk level is High.

You can change the risk level as needed.

## **Detection logic**

-   A Redis instance is considered compliant if specified high-risk commands are disabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Specified high-risk commands are disabled for Redis instances

Rule identifier

[redis-instance-disable-specified-risk-commands](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-instance-disable-specified-risk-commands)

Tag

Redis

Automatic remediation

Not supported

Rule trigger

Configuration changes

Supported resource types

ACS::Redis::DBInstance

Input parameters

disableRiskCommands (Default value: flushall, flushdb, keys, hgetall)

## **Remediation**

To fix a non-compliant resource, disable the specified high-risk commands. For more information, see [Disable high-risk commands](/help/en/redis/user-guide/disable-high-risk-commands).
