Checks whether each Container Registry instance is associated with an OSS bucket that uses the zone-redundant storage (ZRS) architecture. If so, the evaluation result is Compliant.

## **Scenarios**

By associating Container Registry instances with OSS buckets that use ZRS, you can achieve high availability storage and fast distribution of image data. This ensures efficient image pulling for application scaling or recovery even during a single point of failure.

## **Risk level**

Default risk level: medium.

Change the risk level as needed.

## **Detection logic**

Checks whether each Container Registry instance is associated with an OSS bucket that uses the ZRS architecture. If so, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

Container Registry instance associated with ZRS OSS bucket

Rule identifier

[cr-instance-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=cr-instance-multi-zone)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Supported resource type

ACS::CR::Instance

Input parameter

None

## **Remediation guidance**

For more information, see [Billing of Enterprise Edition instances](/help/en/acr/product-overview/billing-of-container-registry-enterprise-edition-instances).
