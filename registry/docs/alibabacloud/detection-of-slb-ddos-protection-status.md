An SLB instance is considered compliant if its Anti-DDoS status is not "Black Hole Activated".

## **Threat level**

Default threat level: High.

You can change the risk level as needed.

## **Detection logic**

-   An SLB instance is considered compliant if its Anti-DDoS status is not "Black Hole Activated".
    

## **Rule details**

**Parameter**

**Description**

Rule name

SLB Anti-DDoS status check

Rule identifier

[slb-ddos-status-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=slb-ddos-status-check)

Tag

SLB

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::SLB::LoadBalancer

Input parameters

None

## **Remediation**

To remediate a non-compliant resource, see [Thresholds for blackhole filtering in Anti-DDoS Basic](/help/en/anti-ddos/basic-ddos-protection/product-overview/view-the-thresholds-that-trigger-blackhole-filtering-in-anti-ddos-origin-basic).
