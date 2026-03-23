If you use Redis as a data caching solution for RDS, you can use Data Transmission Service (DTS) data synchronization to ensure real-time cache consistency.

## **Scenarios**

Redis caches data to improve query performance. DTS data synchronization synchronizes data changes from RDS to Redis in real time to ensure consistency between the cache and the database. Keeping the data in Redis current improves user experience and system reliability.

## **Risk level**

Default risk level: Low risk.

You can change the risk level as needed.

## **Detection logic**

This rule checks whether DTS data synchronization is used to ensure real-time cache consistency when Redis is used as a data caching solution for RDS.

## **Rule details**

**Parameter**

**Description**

Rule name

Use DTS data synchronization for real-time cache consistency

Rule identifier

[recommend-use-dts-for-cache-consistency](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=recommend-use-dts-for-cache-consistency)

Automatic remediation

Not supported

Rule trigger

Every 24 hours

Supported resource types

ACS::::Account

Input parameters

None
