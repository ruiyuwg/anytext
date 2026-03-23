Security Center provides the Basic edition for all Alibaba Cloud users. The Basic edition provides basic security protection features to strengthen the security of your assets. You can use the features to detect risks on your assets. The risks include unusual logons, DDoS trojans, and common vulnerabilities. You can use Security Center Basic free of charge. You need to only install the Security Center agent on your servers to use the security protection features of the Basic edition.

## Intended users

Enterprise and individual users who need to manage servers in a centralized manner

## Supported features

Security Center Basic supports Alibaba Cloud Elastic Compute Service (ECS) instances and servers that are not deployed on Alibaba Cloud, including servers in data centers. Security Center Basic provides the following features: vulnerability detection, urgent vulnerability detection, unusual logon detection, AccessKey pair leak detection, and compliance check.

**Important**

Security Center Basic can detect risks such as vulnerabilities and generate alerts. However, Security Center Basic cannot handle the risks.

**Feature**

**Description**

**References**

Vulnerability detection

This feature detects Linux software vulnerabilities, Windows system vulnerabilities, and Web-CMS vulnerabilities. Security Center automatically scans your servers every two days. You can view the vulnerabilities that are detected on your servers on the **Vulnerabilities** page.

[Overview of vulnerability management](/help/en/security-center/user-guide/overview-4#task-2330063)

Urgent vulnerability detection (warning for major security events)

This feature detects high-risk vulnerabilities that are recently exposed on the Internet. This helps you identify critical vulnerabilities on your servers at the earliest opportunity and reduces the risk of intrusions into your servers.

**Note**

To detect urgent vulnerabilities, you must manually perform a quick scan on the **Vulnerabilities** page.

[Overview of vulnerability management](/help/en/security-center/user-guide/overview-4#task-2330063)

Unusual logon detection

The alerting feature detects logons from unapproved locations and brute-force attacks, and generates alerts. This helps you identify unusual logons at the earliest opportunity and reduces the risk of system attacks.

[Overview of alerting](/help/en/security-center/user-guide/overview-6#concept-l5g-fzc-zdb)

Cloud threat detection

This feature detects unusual use of cloud services based on user behavior analysis. For example, an attacker uses your AccessKey pair to purchase a large number of ECS instances for data mining.

Detection of AccessKey pair leaks or unusual calls of AccessKey pairs

This feature checks the usernames and passwords in source code that is stored on platforms such as GitHub. This helps you detect leaks of the usernames and passwords for your assets. If leaks are detected, Security Center generates alerts. You can identify and handle potential AccessKey pair leaks at the earliest opportunity.

[Detection of AccessKey pair leaks](/help/en/security-center/user-guide/detection-of-accesskey-pair-leaks#concept-vb5-3jw-f2b)

Compliance check

Security Center provides the classified protection compliance check and ISO 27001 compliance check features. The features help you build systems that meet the requirements of classified protection and attain the ISO 27001 certification.

[Compliance check](/help/en/security-center/user-guide/compliance-check#task-2236833)

## **How to obtain Security Center Basic**

By default, all Alibaba Cloud users can use Security Center Basic. You can view the identifier of the Basic edition on the **Overview** page of the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0684626071/p747428.png)

## How to use Security Center Basic to protect servers

After you install the Security Center agent on ECS instances or servers that are not deployed on Alibaba Cloud, you can use the features of Security Center Basic to protect the instances or servers.

The following list describes how to install the agent:

-   Alibaba Cloud ECS instances
    
    -   When you purchase an ECS instance, select **Security Hardening**. This way, the agent is automatically installed on your ECS instance.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9303913961/p699373.png)
        
    -   You can also manually install the agent in the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). For more information, see [Install the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent#concept-dl4-ykc-zdb).
        
-   Servers that are not deployed on Alibaba Cloud
    
    You must manually install the agent in the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). For more information, see [Manually install the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent#section-qxq-hkv-ghb).
    

## How to apply for a 7-day free trial

If you have purchased an ECS instance and require additional protection features, you can apply for a 7-day free trial of Security Center Enterprise or Ultimate. For more information, see [Apply for a 7-day free trial of Security Center](/help/en/security-center/user-guide/apply-for-a-7-day-free-trial-of-security-center#task-1940261).

## **References**

-   [What are the differences between Security Center Basic and the free trial edition?](/help/en/security-center/product-overview/faq-4#c4b08897c1xg8)
    
-   [Does Security Center automatically protect ECS instances that I purchased?](/help/en/security-center/product-overview/faq-4#504954e47bp1g)
    
-   [View security information about ECS instances](/help/en/security-center/getting-started/view-security-information-of-ecs-instances)
