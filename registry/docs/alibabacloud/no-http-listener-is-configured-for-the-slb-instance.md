An SLB instance is considered compliant if no HTTP listener is configured for it.

## **Risk level**

Default risk level: High.

You can change the risk level as needed.

## **Detection logic**

-   An SLB instance is considered compliant if no HTTP listener is configured for it.
    

## **Rule details**

**Parameter**

**Description**

Rule name

HTTP listener is not configured for an SLB instance

Rule identifier

[slb-all-listener-http-disabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=slb-all-listener-http-disabled)

Tags

SLB,LoadBalancer

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

## **Remediation guide**

To fix an SLB instance that is non-compliant because it lacks an HTTP listener, follow the instructions in [TLS security policy](/help/en/slb/application-load-balancer/user-guide/tls-security-policies).
