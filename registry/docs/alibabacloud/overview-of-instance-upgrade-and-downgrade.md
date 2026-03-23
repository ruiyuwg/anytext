If the configurations of an Elastic Compute Service (ECS) instance do not meet your business requirements, you can change the configurations, including the instance type (vCPUs and memory), public bandwidth configurations, and billing methods of data disks. This topic describes the methods that you can use to change the configurations of an ECS instance.

## Change the instance type

An instance type is a predefined combination of vCPUs and memory. When you change the instance type of an instance, you must change the number of vCPUs and memory size. You cannot individually change the number of vCPUs or memory size.

**Note**

Before you can change the instance type of an instance, you must identify the compatible instance types and learn about the instance types. The compatible instance types are displayed on the configuration change page.

-   For information about instance types, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
-   For information about instance families that support instance type changes, see [Instance families that support instance type changes](/help/en/ecs/user-guide/instance-families-that-support-instance-type-changes#concept-mdh-2rb-1fb).
    

The method for changing the instance type of an instance varies based on the billing method of the instance. The following table describes the most suitable methods for different billing methods of instances.

**Billing method**

**Operating Period**

**Effective time**

**Related operations**

Subscription

Before the instance expires

After the instance is restarted

-   [Upgrade the instance types of subscription instances](/help/en/ecs/user-guide/upgrade-the-instance-types-of-subscription-instances#concept-jl1-2bf-5db)
    
-   [Downgrade the instance types of subscription instances](/help/en/ecs/user-guide/downgrade-the-instance-types-of-subscription-instances#concept-52574-zh)
    

Within 15 days before the instance expires

For the change to take effect, you must restart the instance within 7 days after the new billing cycle starts.

[Downgrade the configurations of an instance during renewal](/help/en/ecs/downgrade-instance-configurations-during-renewal#concept-pjr-l2d-5db)

Pay-as-you-go

N/A

After the instance is restarted

[Change the instance type of a pay-as-you-go instance](/help/en/ecs/user-guide/change-the-instance-type-of-a-pay-as-you-go-instance#concept-fzw-gbf-5db)

## Change the billing method for network usage

You can use different methods to change the billing method for network usage of an instance based on the public IP address type. The following table describes the methods.

**Public IP address type**

**Effective time**

**Related operations**

System-assigned public IP address

Immediately

[Change the billing method for network usage](/help/en/ecs/change-the-billing-method-for-network-usage-1)

Elastic IP address (EIP)

Immediately

[Modify the bandwidth of an EIP](/help/en/ecs/user-guide/modify-the-bandwidth-of-an-eip#task-2348706)

## Modify the maximum public bandwidth

You can use different methods to modify the public bandwidth of an instance as needed and the billing method of the instance. The following table describes the methods.

**Important**

-   If you change the public bandwidth from a non-zero value to 0 Mbit/s, whether the system-assigned public IP address of the instance is retained varies based on the network type of the instance.
    
    -   If the instance resides in a virtual private cloud (VPC), the public IP address of the instance is immediately released.
        
    -   If the instance resides in the classic network, the instance can no longer access the Internet, but the public IP address of the instance is retained.
        

-   If you change the public bandwidth from 0 Mbit/s to a non-zero value, the system assigns a public IP address to the instance.
    
    The first time you change the public bandwidth of an ECS instance that resides in the classic network from 0 Mbit/s to a non-zero value, you must restart the instance in the ECS console or by calling the [RebootInstance](/help/en/ecs/api-rebootinstance) operation for the new configuration to take effect.
    

**Public IP address type**

**Applicable scope**

**Effective time**

**Reference**

System-assigned public IP address

Modify the base public bandwidth of a subscription instance

Immediately

[Modify the bandwidth configurations of subscription instances](/help/en/ecs/user-guide/modify-the-bandwidth-configurations#concept-vvc-kcb-1gb)

Modify the base public bandwidth of a subscription instance during renewal

After the new billing cycle starts

[Downgrade the configurations of an instance during renewal](/help/en/ecs/downgrade-instance-configurations-during-renewal#concept-pjr-l2d-5db)

Modify the base public bandwidth of a pay-as-you-go instance

Immediately

[Modify the bandwidth configurations of pay-as-you-go instances](/help/en/ecs/user-guide/modify-the-bandwidth-configurations-of-pay-as-you-go-instances#concept-eqg-jbf-5db)

EIP

Modify the bandwidth of an EIP for a subscription or pay-as-you-go instance

Immediately

[Modify the bandwidth of an EIP](/help/en/ecs/user-guide/modify-the-bandwidth-of-an-eip#task-2348706)

## Change the billing methods of data disks

You can attach only pay-as-you-go data disks to pay-as-you-go instances. As a result, you can change the billing methods of data disks only on subscription instances. The following table describes the methods.

**Change time**

**Effective time**

**Related operations**

Before the workspace expires

Immediately

[Change the billing method of a disk](/help/en/ecs/switch-the-billing-method-of-a-disk)

Within 15 days before the instance expires or when the instance has expired but not been released

Immediately

[Downgrade the configurations of an instance during renewal](/help/en/ecs/downgrade-instance-configurations-during-renewal#concept-pjr-l2d-5db)

## FAQ

#### **How are the fees for upgrading an ECS instance calculated?**

-   You are charged for upgrading the instance type and configurations of a subscription ECS instance. The fee is the difference between the price of the new configurations and the remaining price of the original configurations.
    
-   After you upgrade a pay-as-you-go ECS instance, you are periodically charged for the instance based on the new instance type.
    

The actual fee is displayed on the page when you upgrade the instance. You can also view the fee details on the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/home/#/account/overview) page.

#### **Does upgrading or downgrading an ECS instance affect business operations?**

**It might.** The cloud platform guarantees only that the instance can start and that the new resources are provisioned. Before you change the configuration, you must evaluate your business requirements. Make sure that the target specifications, including the CPU, memory, network, and storage performance, can support your business. This helps prevent service startup failures that are caused by insufficient resources.

#### What impact does upgrading or downgrading an ECS instance have on the services on the instance?

Upgrading or downgrading an instance causes a **brief service interruption**. We recommend that you perform the operation during off-peak hours and back up your data in advance.

-   **Pay-as-you-go instances**: You must stop the instance before you can change its configuration.
    
-   **Subscription instances**: You must restart the instance for the new configuration to take effect.
    

If any of the following conditions apply, you must back up data by creating snapshots or images before the operation to prevent potential issues:

-   **Stateful services**: Perform a primary/secondary switchover or configure a maintenance window in advance.
    
-   **Custom images**: Confirm the compatibility between the target instance type and the current operating system. For more information, see [Check OS compatibility](/help/en/ecs/user-guide/instance-families-that-support-instance-type-changes#12bb21f68eduj).
    
-   **Cross-generation upgrades (for example, from generation 7 to 8)**: The device names of NVMe disks may change. You must check for conflicts in fstab or startup scripts. For more information, see [Device names of NVMe disks](/help/en/ecs/user-guide/nvme-protocol#ee892f302cnh4).
    

#### **Can I cancel an upgrade order to restore the original configuration?**

No, after an order to upgrade the configurations of an instance takes effect, the order cannot be canceled and the configurations of the instance are upgraded. If you want to restore the instance to its original configurations, you can downgrade its configurations. You are charged for the configuration downgrade.

For more information, see [Instance FAQ](/help/en/ecs/user-guide/instance-faq/#concept-gqy-fyx-wgb).
