Checks whether each Server Load Balancer (SLB) instance uses certificates that are issued by Alibaba Cloud.

## Scenario

We recommend that you use certificates issued by Alibaba Cloud to enable HTTPS encryption on your websites. This ensures that the information displayed to users is reliable and the websites are protected against hijacking, tampering, or eavesdropping. You can manage certificates in a centralized manner. This simplifies certificate deployment.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If each SLB instance uses certificates that are issued by Alibaba Cloud, the evaluation result is compliant.
-   If an SLB instance uses certificates that are not issued by Alibaba Cloud, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

slb-aliyun-certificate-required

Rule ID

slb-aliyun-certificate-required

Tag

SLB and ServerCertificate

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Server certificate

Input parameter

None

## Non-compliance remediation

Configure Alibaba Cloud certificates for the SLB instance. For more information, see [Use a certificate from Alibaba Cloud SSL Certificates Service](/help/en/slb/classic-load-balancer/user-guide/use-a-certificate-from-alibaba-cloud-ssl-certificates-service#task-1597562 "This topic describes how to use a certificate from Alibaba Cloud SSL Certificates Service when you specify a certificate for Classic Load Balancer (CLB) instances. To provide reliable HTTPS services, Alibaba Cloud SSL Certificates Service offers digital certificates that are issued by different authorities. This prevents eavesdropping, tampering, and man-in-the-middle (MITM) attacks. You can use Alibaba Cloud SSL Certificates Service to manage the lifecycle of different certificates and efficiently deploy certificates.").
