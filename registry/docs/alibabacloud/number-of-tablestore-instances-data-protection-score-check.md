A Tablestore instance is considered compliant if its data protection score is higher than the specified star rating.

## **Risk level**

Default risk level: High.

You can change the risk level as needed.

## **Detection logic**

-   A Tablestore instance is considered compliant if its data protection score is higher than the specified star rating.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the data protection score of Tablestore instances

Rule identifier

[ots-instance-backup-score-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ots-instance-backup-score-check)

Tag

OTS

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::OTS::Instance

Input parameters

starThreshold (Default value: 1)

## **Remediation**

For information about how to remediate a non-compliant resource, see [Data protection score](/help/en/bdrc/user-guide/data-protection-score).
