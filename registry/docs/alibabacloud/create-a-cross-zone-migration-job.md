Server Migration Center (SMC) allows you to migrate an Elastic Compute Service (ECS) instance **across zones in a region** and **change the instance type** at the same time based on your business requirements. The instance type specifies the number of vCPUs and the memory size and can be changed **within the same instance family**.

## Scenarios

-   Change the instance type of an ECS instance
    
    If the current configurations of your ECS instance cannot meet your business requirements and the required instance type is sold out in the current zone, you can change the number of vCPUs and the memory size of instances within the same instance family while migrating the ECS instance across zones. For example, you can change the instance type of `2 vCPUs and 8 GiB of ecs.g6e.large` to `4 vCPUs and 16 GiB of ecs.g6e.xlarge`.
    
-   Change the zone of an ECS instance
    
    You can deploy your application on ECS instances across different zones in a region to ensure that when a zone fails, services can be quickly switched to another zone to continue running. This improves the overall availability and stability of your system. For example, migrate an instance from **Hangzhou Zone H** to **Hangzhou Zone K**.
    

**Important**

If you want to migrate your ECS instance to another region, we recommend the following solutions:

-   Utilize the server migration feature to migrate your ECS instance from one region to another. For more information, see [Migrate ECS instances between accounts or within the same account](/help/en/smc/user-guide/migrate-servers-between-ecs-instances).
    
-   Create a custom image of your current instance, copy the custom image to the destination region, and use this custom image to create an instance there. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance), [Copy a custom image](/help/en/ecs/user-guide/copy-an-image), and [Create an instance from custom image or shared image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image).
    

## Limits

-   Preemptible Instances do not support cross-zone migration.
    
-   You can change the number of vCPUs and the memory size of an ECS instance **within the same instance family**. For more information about instance families, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
    **Note**
    
    If you want to change the instance type of an ECS instance to a different family across zones, we recommend that you perform a cross-zone migration first, and then change the instance type. For more information, see [Upgrade the instance types of subscription instances](/help/en/ecs/user-guide/upgrade-the-instance-types-of-subscription-instances) or [Change the instance type of a pay-as-you-go instance](/help/en/ecs/user-guide/change-the-instance-type-of-a-pay-as-you-go-instance).
    
-   You can migrate up to 5 instances across availability zones in a single batch operation via the ECS console. To request an increase, contact technical support.
    
-   The following instance families do not support instance type changes across zones:
    
    -   Heterogeneous computing instance families
        
    -   ECS Bare Metal Instance families
        
    -   Super Computing Cluster (SCC) instance families
        
    -   u2a, universal instance family
        
    -   e, economy instance family (only e-c1m1, e-c1m2 and e-c1m4 are supported)
        
    -   x86-based instance families
        
        -   Big data instance families
            
        -   Instance families with local SSDs
            
        -   Security-enhanced instance families
            
    -   Instance families of the eighth generation, excluding hfr8i, hfc8i, hfg8i, r8ae, g8ae, c8ae, r8y, c8y, g8y, r8a, g8a, c8a, g8i, r8i and c8i
        
    -   Instance families of the ninth generation, excluding r9i, g9i and c9i
        
    

## Migration impacts

**Item**

**Description**

Amount of time that is required to migrate an ECS instance

Approximately 15 minutes are required from the time when an instance is stopped until the time when the instance is migrated and started.

**Important**

After the computing and network resources of an ECS instance are migrated, the instance is started. After the instance is started, the system continues to migrate the disk data of the instance. In most cases, approximately 4 hours are required to migrate 100 GiB of disk data. During the migration, the I/O performance of disks degrades and you cannot perform snapshot-related and disk-related operations.

Instance status

During the migration, the ECS instance is stopped and then restarted. We recommend that you migrate the instance during off-peak hours.

Software authorization codes

After an ECS instance is migrated, its software authorization codes may change.

If the software vendor did not approve the migration certificate issued by Alibaba Cloud, we recommend that you contact the software vendor or channel partner to submit a verification form for re-authorization.

Public/private IP address

-   **The public IP address of the ECS instance may change.**
    
    After the instance is migrated, the system attempts to assign the original public IP address to the instance. If the original public IP address cannot be assigned to the instance, the system assigns a new public IP address to the instance.
    
-   **The private IP address of the ECS instance may change.**
    
    After the instance is migrated, the new vSwitch assigns a new private IP address to the instance. You can modify the private IP address. For more information, see [Modify the primary private IPv4 address of an existing instance's primary ENI](/help/en/ecs/user-guide/modify-a-private-ip-address#bf60f728d0p4m).
    

Other

-   After an ECS instance is migrated, the following attributes of the instance remain unchanged: instance ID, elastic IP address (EIP), media access control (MAC) address, security groups, disk serial numbers, disk IDs, username, and logon password.
    
-   If the ECS instance is added to the vServer group of a Server Load Balancer (SLB) instance before the ECS instance is migrated, the ECS instance is not automatically associated with the SLB instance after the ECS instance is migrated. You must add the ECS instance to the vServer group of the SLB instance. For more information, see the "Modify a vServer group" section of the [Create and manage a vServer group](/help/en/slb/classic-load-balancer/user-guide/create-and-manage-a-vserver-group#section-zsm-sfo-r85) topic.
    

## **Billing**

-   When you migrate an ECS instance, if you do not change its instance type, no fee changes are involved.
    
-   Otherwise, fees are changed based on the following rules:
    
    -   If you downgrade the instance type of a subscription ECS instance, the instance type downgrade may result in a refund. The refund amount is calculated by using the following formula: Refund amount = Remaining amount of the configuration price before the downgrade - Price of the new configurations.
        
        **Important**
        
        A monthly quota is enforced on instance type downgrades of subscription instances. The monthly quota is determined based on your historical consumption. The actual quota is displayed in the ECS console. If the monthly downgrade quota is exhausted, you cannot downgrade instance types until the quota is reset on the first day of the next month.
        
    -   If you upgrade the instance type of a subscription ECS instance, you must pay for the price difference between the original instance type and the new instance type for the remainder of the current billing cycle. Actual fees are displayed in the ECS console.
        
    -   If you change the instance type of a pay-as-you go ECS instance, you are charged based on the new instance type.
        

## Preparations

-   Create snapshots for the disks of the ECS instances to ensure data security during the migration. For more information, see [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
    
-   Make sure that the ECS instances are deployed in virtual private clouds (VPCs). If you want to change the instance type of an ECS instance that resides in the classic network, you must migrate the instance from the classic network to a VPC. For more information, see [Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc#task-2009036).
    
-   Make sure that applications deployed on the ECS instances do not depend on the current private IP addresses of the instances. If you select a new vSwitch when you change the instance type of an ECS instance across zones, the system assigns a new private IP address to the instance.
    
-   If security software such as Safedog, Huweishen, and Yunsuo is installed on the ECS instances whose instance types you want to change, disable the software before you make cross-zone instance type changes. Otherwise, virtualization drivers may fail to be installed and the instances cannot be started. You can enable the software after the cross-zone instance type changes.
    
-   Make sure that the system disks of the ECS instances have more than 500 MiB of available space. Otherwise, virtualization drivers may fail to be installed and the instances cannot be started.
    
-   Make sure that Alibaba Cloud Global Accelerator is disabled and the following items are not configured for the instances: IPv6 addresses, high-availability virtual IP addresses (HAVIPs), elastic network interfaces (ENIs), reverse proxies, and route tables.
    

## **Procedure**

1.  Log on to the [Server Migration Center (SMC) console](https://smc.console.alibabacloud.com/toCloud/server).
    
2.  Click **Start Migration** or **Migrate Now**.
    
3.  In the **Change instance types across zones** dialog box, select a region from the region drop-down box, select the ECS instance from which you want to migrate data, and click **Configure Parameters**.
    
4.  After you configure the parameters in the dialog box, click **OK**.
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Migration Task Type**
    
    By default, **ECS Instance Migration** is selected. The setting cannot be changed.
    
    **Current Region**
    
    The region where the ECS instance to be migrated is located.
    
    **Preferred Destination Zone**
    
    Select the zone to which you want to migrate the instances.
    
    **Preferred Network Settings**
    
    Select a destination vSwitch. After the instance is migrated, a new private IP address that belongs to the CIDR block of the vSwitch is randomly assigned to the instance.
    
    You need to create a VPC and vSwitch in the zone to which you want to migrate the instances in advance. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    
    **Important**
    
    -   After the instance type of an instance is changed across zones, the original private IP address of the instance is not retained. Make sure that applications deployed on the instance do not depend on the original private IP address.
        
    -   You can modify the private IP address after the migration is complete. For more information, see [Modify the primary private IPv4 address of an existing instance's primary ENI](/help/en/ecs/user-guide/modify-a-private-ip-address#bf60f728d0p4m).
        
    
    **Instance Type**
    
    Specify whether to change the instance types based on your business requirements. Valid values:
    
    -   **Use Current Instance Type**: Do not change the instance types.
        
    -   **Change Instance Type**: Change the instance types. For information about the instance families that support instance type changes across zones and other limits on instance type changes, see [Limits](/help/en/ecs/user-guide/change-instance-types-across-zones#59f5efba7514o).
        
        **Important**
        
        You can change an instance type only to another type within the same instance family.
        
    
    **Preferred New Instance Type**
    
    Select a destination instance type.
    
    **Note**
    
    -   This parameter is displayed only if you select **Change Instance Type**.
        
    -   The system automatically displays a list of instance types that support replacement. If there is no corresponding type, resources in the current zone inventory may be insufficient.
        
    
    **Instance to Be Migrated**
    
    Display information about the selected **Instance ID/Name**, **Destination Zone**, **Destination Instance Type**, and **Destination vSwitch**.
    
    **Note**
    
    Select **I have backed up data**.
    
5.  In the dialog box that appears, click **Pay** to complete the payment as prsompted.
    

## **Verify the migration result**

-   The migration is successful if the migration job enters the **Completed** state.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0999500471/p815588.png)After the cross-zone migration job is complete, perform the following operations to check the migration result:
    
    1.  Click **View Destination Instance** in the **Actions** column of a migration source.
        
    2.  On the **Instance Details** tab, view the **Zone** and **Instance Type** parameters of the migrated ECS instance.
        
    
-   The migration failed if the migration job enters the **InError** state.
    
    In this case, you need to perform the following operations:
    
    1.  In the **Actions** column, click **Troubleshoot Error** and resolve the issue based on the error code and error message. For more information, see [SMC FAQ](/help/en/smc/support/faq#concept-610474) and [Troubleshoot errors](/help/en/smc/support/troubleshoot-server-migration-failures/).
        
    2.  On the **Migration Jobs** page, click **Retry Migration Job**.
        
        The migration job resumes from the point where it was suspended.
        
    

## FAQ

During cross-zone migration, a prompt as shown in the following figure is displayed.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6936154371/p883557.png)

To troubleshoot the issue, perform the following operations:

1.  Check for Workbench private links.
    
    Log on to the [Workbench console](https://ecs-workbench.alibabacloud.com/), choose **Instance** > **Private Links**, and check whether there is a private link for the ECS instance.
    
    **Note**
    
    When logging in to the Workbench console, you need to click **Show/Hide Instance Navigation Pane** to display the Workbench menu bar.
    
    -   If yes, click **Release Link** and proceed to the next step.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0124381471/p883632.png)
        
    -   If no, proceed to the next step.
        
2.  Check whether there is a custom route entry whose next hop is an ECS instance.
    
    Log on to the [VPC Console](https://vpc.console.alibabacloud.com/vpc/cn-shanghai/route-tables), find the route table used by the ECS instance based on its VPC, and check whether there is a custom route entry whose next hop is an ECS instance.
    
    -   If yes, delete the custom route entry and proceed to the next step.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6936154371/p883663.png)
        
    -   If no, proceed to the next step.
        
3.  Check whether there is a DTS migration task whose source database is **Self-managed Database on ECS**.
    
    Log on to the [DTS console](https://dts.console.alibabacloud.com/overview) and check whether there is a DTS migration task whose source database is **Self-managed Database on ECS**.
    
    -   If yes, delete the migration task and proceed to the next step.
        
        **Important**
        
        Before deleting a DTS task, make sure that the data transfer is complete and backups are made.
        
    -   If no, proceed to the next step.
        
4.  Check for associated VPC resources.
    
    Log on to the [VPC Console](https://vpc.console.alibabacloud.com/vpc/cn-shanghai/route-tables) and check whether associated VPC resources (including DHCP options sets, network ACLs, route tables, and IPv4 gateways) exist. If yes, delete the resources before proceeding with the operations in this topic.
    
    For more information about the associated VPC resources, see [DHCP options sets and DNS hostnames](/help/en/vpc/dhcp-option-set-and-dns-hostname), [Create and manage a network ACL](/help/en/vpc/work-with-network-acls), [Use custom route tables to manage network traffic](/help/en/vpc/network-traffic-management-using-custom-routing-tables), and [Create and manage an IPv4 gateway](/help/en/vpc/user-guide/create-and-manage-an-ipv4-gateway).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6936154371/p883714.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6936154371/p883719.png)
