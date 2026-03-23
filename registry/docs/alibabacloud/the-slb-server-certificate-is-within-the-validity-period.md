Checks whether the certificate of each Server Load Balancer (SLB) instance is within its validity period. If so, the evaluation result is Compliant.

## Scenarios

To ensure business continuity, we recommend that you renew each subscription instance before it expires.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the certificate of each SLB instance is within its validity period, the evaluation result is Compliant.
    
-   If the certificate of an SLB instance expires, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

slb-server-certificate-expired

Rule ID

[slb-server-certificate-expired](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=slb-server-certificate-expired)

Tag

SLB and ServerCertificate

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

SLB server certificate

Input parameter

None

## **Non-compliance remediation**

Ensure that the certificate of each SLB instance is within its validity period. For more information, see [Replace a certificate](/help/en/slb/classic-load-balancer/user-guide/replace-a-certificate).
