Checks whether the remaining validity period of each Server Load Balancer (SLB) certificate is longer than the period specified by the input parameter.

## Scenario

You may forget to update an expired SLB certificate for your website. In this case, if a user visits the website, an alert is generated, indicating that the security certificate of the website has expired. Malicious users may exploit the expired SLB certificate to tamper with or steal the data transmitted between browsers and servers. This affects data security.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the remaining validity period of each SLB certificate is longer than the period specified by the input parameter, the evaluation result is compliant.
-   If the remaining validity period of an SLB certificate is shorter than or equal to the period specified by the input parameter, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

slb-server-certificate-expired

Rule ID

slb-servercertificate-expired-check

Tag

SLB, ServerCertificate, and ResourceExpired

Automatic remediation

Not supported

Trigger type

Configuration change and periodic execution

Time interval

24 hours

Supported resource type

Server certificate

Input parameter

`days`. Default value: 90.

## Non-compliance remediation

Replace the SLB certificate that is about to expire with a new certificate. For more information, see [Replace a certificate](/help/en/slb/classic-load-balancer/user-guide/replace-a-certificate#task-ayx-qqn-vdb "This topic describes how to replace a certificate with a new certificate. We recommend that you replace certificates before they expire to avoid service interruption.").
