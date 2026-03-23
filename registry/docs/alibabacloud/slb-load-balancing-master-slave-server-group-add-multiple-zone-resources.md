Checks whether the resources that are added to the primary/secondary server group of each Server Load Balancer (SLB) instance are distributed across multiple zones. If so, the evaluation result is Compliant.

## Scenarios

Distributing the resources that are added to primary/secondary server groups across multiple zones can improve the disaster recovery capability of the system and reduce the risk of business interruption.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the resources that are added to the primary/secondary server group of each SLB instance are distributed across multiple zones, the evaluation result is Compliant.
    
-   If the resources that are added to the primary/secondary server group of an SLB instance are distributed in one zone, the evaluation result is Non-compliant.
    
-   If no resources are added to the primary/secondary server group of an SLB instance, the evaluation result is Not Applicable.
    

## **Rule details**

**Item**

**Description**

Rule name

slb-master-slave-server-group-multi-zone

Rule ID

[slb-master-slave-server-group-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=slb-master-slave-server-group-multi-zone)

Tag

SLB

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

Primary/Secondary server group

Input parameter

None

## **Non-compliance remediation**

Ensure that the resources that are added to the primary/secondary server group of each SLB instance are distributed across multiple zones. For more information, see [Create and manage a primary/secondary server group](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-a-primary-or-secondary-server-group).
