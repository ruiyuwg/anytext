Cloud Security Posture Management (CSPM) discovers and manages security risks in your cloud assets through automated risk checks, baseline scans, and attack path analysis. This feature identifies security vulnerabilities, such as cloud service misconfigurations and server configuration flaws, and recommends fixes for risks from improper configurations.

## **Use Cases**

#### Perform security checks on cloud assets

-   **Description**: To perform a comprehensive security assessment of your cloud resources, combine **Cloud service configuration check** and **Baseline check**.
    
-   **Instructions**:
    
    -   **Initial assessment**: Use over 100 free check items to perform a preliminary risk **scan** of your cloud services and servers.
        
    -   **In-depth scan and remediation**: After activating a paid edition (**Pay-as-you-go** or **Subscription**), you can use all check items for in-depth **scans** and fix discovered risks.
        

#### Meet compliance and internal security standards

-   **Description**: To meet specific security standards, such as Multi-Level Protection Scheme (MLPS) 2.0, or meet internal security baseline requirements, you can use **Baseline check** for automated compliance auditing and continuous monitoring.
    
-   **Instructions**: This feature includes built-in compliance check packages for major standards like MLPS 2.0 and CIS. It also supports custom policies, making it the preferred choice for automated compliance auditing.
    

#### Analyze and block potential internal attack paths

-   **Description**: To analyze and block potential paths where an attacker could use a compromised resource to move laterally and access other core assets, use **Attack path analysis**.
    
-   **Instructions**: This feature intelligently links discrete configuration risks and presents the complete attack path in a visual topology graph. For example: `Publicly accessible ECS` → `Bound to a high-privilege RAM Role` → `Can control all core OSS Buckets`.
    

## **Core Features**

### **Cloud service configuration check**

**Cloud service configuration check** scans your cloud asset configurations to find and fix security vulnerabilities and compliance gaps from improper configurations, such as overly permissive ECS security group rules or publicly accessible OSS Buckets.

The following figure illustrates the workflow. For more details, see [Cloud service configuration check](/help/en/security-center/user-guide/cloud-service-configuration-assessment/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8417981671/CAEQORiBgIDWqIvmrxkiIDZkYjM5NjI5ZjQ0MDRjZTI4MjRkMmM5Mjk3ZWY1ZDk34982127_20250321133309.206.svg)

### **Baseline check**

**Baseline check** scans the host's operating system. It identifies and helps you fix issues like weak passwords, insecure configurations, or missing critical patches based on industry standards and security best practices to ensure compliance.

The following figure illustrates the workflow. For more details, see [Baseline check](/help/en/security-center/user-guide/baseline-check/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8417981671/CAEQORiBgICcm57isBkiIDQ5Mjk5MmQyNzJlYTQzODRhY2NiY2ZiM2VlZWM1MTg54918270_20250321200203.006.svg)

### **Attack path analysis**

**Attack path analysis** comprehensively scans and analyzes access paths between cloud services (for example, an ECS instance controlling an OSS Bucket through a granted RAM Role). It provides visualizations to clarify the connections and potential risk points between cloud services. This allows you to identify unnecessary access permissions and discover potential weak points that could be exploited.

The following figure illustrates the workflow. For more details, see [Attack path analysis](/help/en/security-center/user-guide/attack-path-analysis).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8417981671/CAEQORiBgIDsj5DmrxkiIGQ5MDA1MjZhMzE3YzQyNDBhZjUwYTM2NjAyYjVkYmM44918270_20250321200639.602.svg)

## **Billing**

### **Billing concepts**

-   **Quota**: **Quota** is the unit of measurement for the paid features of **CSPM**. Successfully performing a billable operation (scan, verify, or fix) on an asset Instance consumes one Quota unit.
    
    For example, if you have 10 products, each with 15 Instances, and you choose to scan all Instances with 5 check items, the task consumes `10 × 15 × 5 = 750` Quota units.
    
-   **Instance**: An **Instance** refers to a specific cloud resource, such as an OSS Bucket or an ECS security group.
    
-   **Check item**: Check items fall into two categories: free check items and paid check items.
    
    -   **Free check items**: **Cloud service configuration check** provides a set of free check items for basic risk awareness. There is no limit on the number of scans and verifications. Only successful remediation consumes Quota.
        
        **Important**
        
        For users who authorized CSPM (formerly Cloud service configuration check) before July 7, 2023, you retain access to the number of free check items corresponding to your original Security Center edition (80+ for Anti-virus Edition, 90+ for Advanced Edition, 250+ for Enterprise/Ultimate Edition), both before your subscription expires and upon renewal.
        
    -   **Paid check items**: These require purchasing a corresponding service edition or activating the **CSPM** service separately. The cost is either included in the edition's fee or consumes Quota.
        

For more billing information, see [Billing overview](/help/en/security-center/product-overview/billing-overview).

### **Billing details**

Security Center offers two billing models: Subscription and Pay-as-you-go. These models cover **Cloud service configuration check**, **Baseline check**, and **Attack path analysis**. The supported features and billing details for each model are as follows.

**Note**

Before choosing a paid model, you can try the basic detection features with the Basic Edition or apply for a 7-day free trial to evaluate the full functionality of the Enterprise Edition.

-   **Basic Edition features**: The Basic Edition of **Security Center** supports detection and verification of free check items for **Cloud service configuration check**. It does not support **risk remediation**, **Baseline check**, or **Attack path analysis**.
    
-   [Apply for a 7-day free trial](/help/en/security-center/user-guide/apply-for-a-7-day-free-trial-of-security-center): You will get access to all the features of the Enterprise Edition. For details on what is supported, see the [Enterprise Edition service description](#36b162c993jbb) below.
    

## **Subscription**

This prepaid plan is ideal for users with long-term security needs, offering better cost control. You get these features by purchasing a service edition (such as Advanced, Enterprise, or Ultimate Edition) or the CSPM value-added service.

-   Purchase the **Advanced, Enterprise, or Ultimate Edition**
    
    **Important**
    
    If your current edition is **Anti-virus** or the **value-added plan** and you have not purchased the **CSPM** value-added service, you can detect and verify the free check items of **Cloud service configuration check**. However, **risk remediation**, **baseline check**, and **attack path analysis** are not supported.
    
    **Feature**
    
    **Feature details**
    
    **Quota consumption**
    
    **Cloud service configuration check**
    
    **Check items**: Free check items.
    
    **Note**
    
    The Ultimate Edition additionally supports KSMP check items.
    
    **Operations**: Detection and verification are supported. Remediation is not supported.
    
    Does not consume Quota.
    
    **Baseline check**
    
    **Check items**:
    
    -   Advanced Edition: Supports only weak password check items.
        
    -   Enterprise Edition: Supports all check items except those for container security.
        
    -   Ultimate Edition: Supports all check items.
        
    
    **Operations**: Scanning, verification, and remediation are supported.
    
    Included in the edition fee; does not consume Quota.
    
    **Attack path analysis**
    
    Not supported
    
    N/A
    
-   Purchase the **CSPM** value-added service
    
    **Important**
    
    If you purchase a service edition at the same time, feature support is as follows:
    
    -   **For Advanced, Enterprise, or Ultimate Edition**: Your current edition determines the supported check items and operations for **Baseline check** (see the [description of Advanced, Enterprise, or Ultimate Editions](#36b162c993jbb)). **Cloud service configuration check** and **Attack path analysis** are not affected by the edition and are detailed in the table below.
        
    -   **For Anti-virus Edition and value-added plan**: **Baseline check**, **Cloud service configuration check**, and **Attack path analysis** are not affected by the edition and are detailed in the table below.
        
    
    **Feature**
    
    **Feature details**
    
    **Quota consumption**
    
    **Cloud service configuration check**
    
    **Check items**: All check items (free + paid).
    
    **Operations**: Detection, verification, and remediation are supported.
    
    **Free check items**: Successful remediation consumes Quota.
    
    **Paid check items**: Scanning, verification, or successful remediation consumes Quota.
    
    **Baseline check**
    
    **Check items**: All check items.
    
    **Operations**: Detection, verification, and remediation are supported.
    
    Scanning, verification, or successful remediation consumes Quota.
    
    **Attack path analysis**
    
    Supported
    
    This feature is included with the paid CSPM service and does not consume Quota.
    

### **Pay-as-you-go**

This is a postpaid plan suitable for flexible, short-term, or dynamically scaling scenarios. You get these features by purchasing the **CSPM** postpaid feature.

**Important**

If you only purchase the **host and container protection** postpaid feature, you can detect and verify the free check items for **Cloud service configuration check**. However, **risk remediation**, **Baseline check**, and **Attack path analysis** are not supported.

**Feature**

**Feature details**

**Quota consumption**

**Cloud service configuration check**

**Check items**: All check items (free + paid).

**Operations**: Detection, verification, and remediation are supported.

-   **Free check items**: Successful remediation consumes Quota.
    
-   **Paid check items**: Scanning, verification, or successful remediation consumes Quota.
    

**Baseline check**

**Check items**: All check items.

**Operations**: Detection, verification, and remediation are supported.

Scanning, verification, or successful remediation consumes Quota.

**Attack path analysis**

Supported

This feature is included with the paid CSPM service and does not consume Quota.

## **Get Started**

1.  Purchase and activate the service: [Authorize and activate CSPM](/help/en/security-center/user-guide/authorize-and-activate-cspm).
    
2.  Use the product features:
    
    -   **Cloud service configuration check**
        
        1.  Add cloud services: [Add cloud services to be checked](/help/en/security-center/user-guide/initialize-configuration).
            
        2.  Configure and run policies: [Configure and run check policies](/help/en/security-center/user-guide/use-cloud-platform-configuration-check).
            
        3.  Handle risks: [View and handle failed check items](/help/en/security-center/user-guide/view-and-handle-failed-check-items).
            
    -   **Baseline check**
        
        1.  Add server assets: [Install the agent](/help/en/security-center/user-guide/install-the-security-center-agent) and [Manage servers](/help/en/security-center/user-guide/manage-servers#section-szp-09j-9di).
            
        2.  Configure and run policies: [Configure and run baseline check policies](/help/en/security-center/user-guide/set-and-apply-baseline-check-policies).
            
        3.  Handle risks: [View and handle baseline risks](/help/en/security-center/user-guide/view-and-handle-baseline-risks).
            
    -   **Attack path analysis**: [Attack path analysis](/help/en/security-center/user-guide/attack-path-analysis)
        

## **FAQ**

### **Billing and quota**

-   **Can I switch from Subscription to Pay-as-you-go?**
    
    **You cannot switch directly.** You must wait for your subscription to expire or unsubscribe from it before you can activate Pay-as-you-go.
    
    **Important**
    
    After unsubscribing or expiration, any unused **Quota** from the subscription will be **forfeited**.
    
-   **What happens if I run out of Quota?**
    
    -   **Subscription model**: If the remaining Quota is insufficient to complete an entire scan task, the task stops prematurely. The system displays results only for checks completed before your Quota ran out. To upgrade your edition or purchase more Quota, see [Upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
        
    -   **Pay-as-you-go model**: There is no Quota limit. The system continuously bills based on actual usage, ensuring all tasks run to completion.
        

### **Feature usage**

-   **How can I quickly get started with CSPM for security hardening?**
    
    1.  **Activate and authorize**: Activate the CSPM service and follow the prompts to grant the necessary management permissions.
        
    2.  **Add assets to check**: Add the cloud service Instances (such as ECS, RDS, etc.) you want to check to Security Center.
        
    3.  **Run checks and remediate**: Configure a check policy and run a scan. After the scan is complete, perform security hardening based on the risk report and remediation recommendations.
        
-   **How can I use Security Center to make my database configurations more secure?**
    
    Security Center enhances database security in two ways:
    
    -   **CSPM**:
        
        -   **Scope**: Checks the **external configuration risks** of the database.
            
        -   **Example checks**: Whether the access control whitelist is too permissive, or whether automatic backup and log audit features are enabled.
            
    -   **Baseline check**:
        
        -   **Scope**: Checks for **internal security flaws on the server** where the database is hosted.
            
        -   **Example checks**: Whether database login accounts have weak passwords, or whether the server configuration adheres to security best practices.
            

### **Unsubscribe and deactivate**

**How do I deactivate the CSPM feature?**

-   **Basic Edition**: **You do not need to deactivate this feature**. The Basic Edition only provides limited detection capabilities and does not involve any fees or Quota consumption.
    
-   **Subscription Edition**: Refer to [Downgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#section-9aq-kgp-fzl). In the order management center, downgrade your Security Center edition to an edition without the CSPM feature.
    
-   **Pay-as-you-go Edition**: On the **Overview** page, in the **Pay-as-you-go** area, disable **CSPM**.
