Checks whether the hot and cold-tiered storage feature is enabled for Logstores in Simple Log Service. If so, the evaluation result is Compliant.

## Scenarios

Enabling the hot and cold-tiered storage feature for Logstores in Simple Log Service can reduce storage costs, improve access performance, optimize data processing, and simplify management and maintenance.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the hot and cold-tiered storage feature is enabled for Logstores in Simple Log Service, the evaluation result is Compliant.
    
-   If the hot and cold-tiered storage feature is not enabled for Logstores in Simple Log Service, the evaluation result is Non-compliant.
    
-   If the data retention period of Logstores in Simple Log Service is less than or equal to seven days, the hot and cold-tiered storage feature cannot be enabled and the evaluation result is Not Applicable.
    

## **Rule details**

**Item**

**Description**

Rule name

sls-logstore-hot-ttl-check

Rule ID

[sls-logstore-hot-ttl-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=sls-logstore-hot-ttl-check)

Tag

SLS and Logstore

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

Logstore

Input parameter

None

## **Non-compliance remediation**

Enable the hot and cold-tiered storage feature for Logstores in Simple Log Service. For more information, see [Enable intelligent tiered storage](/help/en/sls/enable-hot-and-cold-tiered-storage-for-a-logstore).
