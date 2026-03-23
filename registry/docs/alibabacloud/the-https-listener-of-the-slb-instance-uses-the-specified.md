Checks whether the HTTPS listeners of each Server Load Balancer (SLB) instance use a specified security policy suite version. If so, the evaluation result is Compliant.

## Scenarios

Transport Layer Security (TLS) security policies are used to ensure the security, integrity, and reliability of data transferred over the Internet. HTTPS communication with later versions of TLS is more secure.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the HTTPS listeners of each SLB instance use a specified security policy suite version, the evaluation result is Compliant.
    
-   If some HTTPS listeners of an SLB instance do not use a specified security policy suite version, the evaluation result is Non-compliant.
    
-   For SLB instances without HTTPS listeners, the evaluation result is Not Applicable.
    

## **Rule details**

**Item**

**Description**

Rule name

slb-all-listenter-tls-policy-check

Rule ID

[slb-all-listenter-tls-policy-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=slb-all-listenter-tls-policy-check)

Tag

SLB and LoadBalancer

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

SLB instance

Input parameter

tlsCipherPolicy. Default value: tls\_cipher\_policy\_1\_2, tls\_cipher\_policy\_1\_2\_strict, or tls\_cipher\_policy\_1\_2\_strict\_with\_1\_3

## **Non-compliance remediation**

Ensure that the HTTPS listeners of each SLB instance use a specified security policy suite version. For more information, see [TLS security policies](/help/en/slb/application-load-balancer/user-guide/tls-security-policies).
