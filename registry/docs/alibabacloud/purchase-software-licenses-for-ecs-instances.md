Alibaba Cloud provides the software license feature that allows you to purchase software licenses for existing Elastic Compute Service (ECS) instances running specific operating systems, such as Red Hat Enterprise Linux (RHEL) and SUSE Linux Enterprise Server (SLES). This topic describes the application scope of software licenses and how to buy them through Alibaba Cloud.

## Application scope and scenarios

**License name**

**Supported operating system that can be activated by the license**

**Scenario**

Red Hat Enterprise Linux

CentOS 7 and 8

If you want to [convert the operating system of an ECS instance from CentOS 7 to RHEL 7](/help/en/ecs/faq-about-images-in-use-of-ecs-instances/) after CentOS reached its end of life (EOL), you must purchase this license before you can download the RHEL software and complete the conversion.

RHEL 7, 8, and 9

If you migrate your instance from an on-premises environment or another cloud platform to Alibaba Cloud as an RHEL instance, purchase this license to continue receiving RHEL image updates and after-sales support.

**Note**

If your instance runs a Red Hat image purchased from Alibaba Cloud, the image already has this license, and you do not need to purchase one.

Red Hat Enterprise Linux Extended Lifecycle Support

RHEL 7.9

The Red Hat Enterprise Linux Extended Life Cycle Support (RHEL ELS) Add-on subscription is released by Red Hat for extended life support. The subscription provides you with critical and important security bug fixes and specific emergency bug fixes, which mitigates security risks in the ELS phase.

**Important**

-   The RHEL ELS Add-on subscription is suitable only for RHEL 7.9 and will expire on June 30, 2028. If you use RHEL 6 or an earlier version of RHEL 7, upgrade to RHEL 7.9 before you can subscribe to RHEL ELS Add-on.
    
-   If your ECS instance is created from a Red Hat image provided by Alibaba Cloud, you can directly purchase and activate this license for the RHEL ELS Add-on subscription. If you migrate your ECS instance from an on-premises environment or another cloud platform to Alibaba Cloud as an RHEL instance, purchase an RHEL license and then this license for the RHEL ELS Add-on subscription.
    
-   If you want to maintain business stability for an extended period of time, we recommend that you [upgrade RHEL to a recent version](/help/en/ecs/user-guide/rhel-upgrade).
    

SUSE Linux Enterprise Server

SLES 12 and 15

If you migrate your instance from an on-premises environment or another cloud platform to Alibaba Cloud as a SUSE instance, purchase a SUSE license to continue receiving SUSE image updates and after-sales support.

SUSE Linux Enterprise Server for SAP

SLES for SAP 12 and 15

## Billing

The operating system license on an ECS instance is bound to the instance. When you purchase an operating system license for an ECS instance, take note of the following items:

-   For a subscription ECS instance, you are charged operating system license fees for the remaining subscription period of the instance.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2154582771/CAEQOhiBgICk2eqishkiIDIzODQxY2NkYzhlNjQ3YzY4NTc1MTA1MjFiOTIxNjcy5054561_20250415101429.492.svg)
-   For a pay-as-you-go ECS instance, billing starts for the operating system license at the point in time when the license is purchased.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2154582771/CAEQOhiBgIDCnMzbshkiIGM5MTA4Y2Y2ZmQ5MzQ1MWNhYjJjZWFkZjZkOGQ4YWQ15054561_20250415101429.492.svg)
    
    The following section describes the unit price details of each software license. Click the pane to view the price details.
    
    #### **Unit price details for ECS instance software licenses**
    
    ### **Red Hat**
    
    The RHEL and RHEL ELS Add-on subscription licenses support tiered pricing per vCPU. The price per vCPU varies based on the number of vCPUs on an ECS instance.
    
    **Important**
    
    When you purchase an RHEL ELS Add-on subscription license, pay for the license order, and query billing details, the final price is the sum of the price of an RHEL license and the price of the Add-on subscription license. If you already purchased an RHEL license for a period of time and the period does not end when you subscribe to RHEL ELS Add-on, contact your sales manager to refund the RHEL license fees for the remaining time of the period.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2154582771/CAEQOhiBgMD6oqjdshkiIDYzYTI5NmU0Y2Y5YTQxYTdiYmM4M2MxNTYyMGVhYWFl4975465_20250313153234.284.svg)
    
    **License**
    
    **vCPUs**
    
    **Pay-as-you-go unit price** **(USD per vCPU per hour)**
    
    **Subscription unit price** **(USD per vCPU per month)**
    
    Red Hat Enterprise Linux
    
    1 to 8 vCPUs
    
    0.015
    
    10.15
    
    9 to 127 vCPUs
    
    0.011
    
    7.61
    
    128 vCPUs or more
    
    0.01
    
    6.60
    
    Red Hat Enterprise Linux Extended Lifecycle Support
    
    1 to 8 vCPUs
    
    0.0084
    
    5.24
    
    9 to 127 vCPUs
    
    0.006
    
    3.93
    
    128 vCPUs or more
    
    0.0048
    
    3.41 
    
    **Note**
    
    After June 30, 2024, RHEL 7 entered the ELS phase. We recommend that you upgrade to RHEL 8. If you want to use RHEL 7, purchase a RHEL 7 ELS Add-on subscription to continue obtaining security updates and bug fixes. [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for purchase consultation.
    
    ### **SUSE**
    
    SUSE licenses support tiered pricing based on the number of vCPUs on an ECS instance. Compared with Red Hat images, the unit price of a SUSE license is the unit price for all vCPUs instead of per vCPU during a unit billing cycle. The unit price varies based on the number of vCPUs. The following figure shows the formula to calculate the unit price.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2154582771/CAEQOhiBgICO46zdshkiIDgwMzMyMWJjZmQzNzRiNzE5Y2IzYWM3MDMyNmQ5Y2Ex4975465_20250313153234.284.svg)
    
    The following table describes the license unit prices of different vCPU ranges for different billing methods.
    
    **License**
    
    **vCPUs**
    
    **Pay-as-you-go unit price** **(USD/hour)**
    
    **Subscription unit price** **(USD/month)**
    
    SUSE Linux Enterprise Server
    
    1 or 2 vCPUs
    
    0.064
    
    24.46
    
    3 or 4 vCPUs
    
    0.127
    
    50.15
    
    5 vCPUs or more
    
    0.152
    
    58.62
    
    SUSE Linux Enterprise Server for SAP
    
    1 to 4 vCPUs
    
    0.387
    
    186.07
    
    5 vCPUs or more
    
    0.466
    
    224.17
    

## **Prerequisites**

To ensure that you can activate a software license on an ECS instance after you purchase the license for it, make sure that the following conditions are met:

-   The instance resides in a virtual private cloud (VPC). If the instance resides in the classic network, [migrate the instance from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc) before you purchase the software license. If you have any issues with this, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   [Cloud Assistant Agent is installed](/help/en/ecs/user-guide/install-the-cloud-assistant-agent) and Cloud Assistant is in the **Normal** state on the instance.
    
-   If you log on as a Resource Access Management (RAM) user, the owner of the Alibaba Cloud account to which the RAM user belongs already grants the RAM user the [System policies for OOS](/help/en/oos/security-and-compliance/oos#MYaof) permission to access CloudOps Orchestration Service (OOS) resources. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    

## **Procedure**

1.  Go to [ECS console - Software Licenses](https://ecs.console.alibabacloud.com/license/).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click **Create License Purchase Task**. In the panel that appears, select a software name from the **Product Name** drop-down list and ECS instances in the **ECS Instances** section.
    
    ECS instances that are not eligible for a software license are grayed out and unselectable. An ECS instance must meet the following requirements to be eligible for a software license:
    
    -   The instance cannot have an existing paid order for the software license.
        
    -   The operating system of the instance must be supported and can be activated by the software license.
        
    
4.  Click **OK**. After the license is purchased, find the task and click **Activate** in the **Actions** column to activate the license.
    
    **Note**
    
    During the activation process, only the activation configuration is issued. The associated ECS instances are not restarted.
    
5.  On the **Software Licenses** page, check the status of the activation task in the **Task Status** column.
    
    If the activation task fails, click **View** in the **Most Recent Activation Task** column to check the logs. Identify and resolve the issue, and then click **Activate** in the **Actions** column to re-create the activation task.
