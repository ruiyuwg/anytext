You can choose an appropriate billing method based on the Elastic Compute Service (ECS) resource types. This topic describes all billing methods used in ECS, compares the subscription and pay-as-you-go billing methods, and elaborates the cost-effective billing methods such as spot instance and savings plans.

## Basic billing methods

An ECS instance includes computing resources (vCPUs and memory), an image, and Elastic Block Storage (EBS) devices, and uses one of the following basic billing methods: subscription, pay-as-you-go, or spot instance. The following table describes the applicable resources and scenarios of each billing method.

**Billing method**

**Applicable resources**

**Description**

**References**

Subscription

-   Computing resources (vCPUs and memory)
    
-   Image
    
-   Disk
    
-   Public bandwidth
    

A billing method that allows you to use ECS resources only after you pay for them. Subscription is applicable to services that run for 24 hours a day and seven days a week, such as web services. You must pay for subscription resources before you can use them.

[Subscription](/help/en/ecs/subscription#subs-china)

Pay-as-you-go

-   Computing resources (vCPUs and memory)
    
-   Image
    
-   Disk
    
-   Public bandwidth
    
-   Snapshot
    

A billing method that allows you to use ECS resources and pay for them afterwards. Pay-as-you-go is applicable to applications or services that experience traffic spikes, such as temporary scaling, interim testing, and scientific computing. You can activate and use pay-as-you-go resources before you pay for them. The system generates bills in each billing cycle and deducts corresponding fees from your account.

[Pay-as-you-go](/help/en/ecs/pay-as-you-go-1#Pay-As-You-Go)

Spot instance

Computing resources (vCPUs and memory)

Spot Instances are on-demand instances that you can use before you pay for them. Spot instances offer some discounts compared with pay-as-you-go instances and are charged based on the actual usage duration. Prices of spot instances fluctuate based on the changes in supply and demand.

[Spot Instances](/help/en/ecs/spot-instance#concept-1936192)

Subscription instances, pay-as-you-go instances, and spot instances support different features. The following table describes the differences.

**Feature**

**Subscription instance**

**Pay-as-you-go instance**

**Spot instance**

Release instances

-   To release an instance before it expires, you must first change its billing method from subscription to pay-as-you-go.
    
-   If you do not renew an instance within the required period of time after the instance expires, the instance is automatically released.
    

Supported.

Release pay-as-you-go instances that you no longer need at the earliest opportunity. If you do not release them, the ECS resources continue to incur charges until the instances are stopped and released due to overdue payments.

Supported. The system may also release an instance when the market price exceeds your bid or when the resources of the instance are insufficient.

Change instance types

Supported.

Supported.

Not supported.

Change bandwidth configurations

Supported.

Supported.

Not supported.

Change billing methods

Supported.

Supported.

Not supported.

Use subscription images from Alibaba Cloud Marketplace

Supported.

Not supported.

Not supported.

Apply for ICP filings for websites that are deployed on ECS instances in the Chinese mainland

Supported.

You can apply for ICP filings only for ECS instances that have a subscription period of at least three months.

**Note**

Public bandwidth must be purchased for the ECS instances.

Not supported.

Not supported.

Create instances by calling API operations

Supported.

Supported.

Supported.

Use Security Center Basic and CloudMonitor Basic

Supported.

Supported.

Supported.

## Cost-effective combinations of billing methods

In addition to subscription, pay-as-you-go and spot instance, Alibaba Cloud provides some combinations of billing methods for different ECS resources to reduce costs. You can use a proper combination of billing methods based on your business requirements.

**Billing method**

**Applicable resources**

**Description**

**References**

Reserved instance

-   Compute resources (vCPUs and memory)
    
-   Image
    

Reserved instances are coupons that can be used to offset the bills of pay-as-you-go instances.

[What is a reserved instance?](/help/en/ecs/reserved-instances#concept-t2m-n4q-dgb)

SCU

-   Disk
    
-   Snapshot
    

Storage capacity units (SCUs) are storage resource plans that can be used to offset the bills of different pay-as-you-go storage resources.

[SCUs](/help/en/ecs/storage-capacity-units-1#concept-2150938)

Data transfer plan

Public bandwidth

Data transfer plans provide economical solutions designed to offset the fees of IPv4 data transfers from instances billed on a pay-by-traffic basis for network usage.

[Data Transfer Plan](https://www.alibabacloud.com/help/en/data-transfer-plan)

## Switch billing methods

You can switch between billing methods for ECS instances as your business requirements change and evolve. The following table describes the resources whose billing methods can be changed.

**Resource**

**Description**

**References**

Instance

When you change the billing method of ECS instances, the billing methods of their computing resources and system disks are changed to match the billing method of the instance.

-   If your workloads become intermittent or you no longer need the instance, you can change the billing method of an instance from subscription to pay-as-you-go. Then, you need to pay only for what you use and can release the instance at any time. This lets you recover a portion of the subscription costs.
    
    **Note**
    
    Alibaba Cloud determines whether you can switch the billing method of an instance based on usage metrics of the instance. Go to the ECS console and check for the button or menu item that is used to change the billing method of an instance. If the button or menu item does not exist, the billing method of the instance cannot be changed.
    
-   If your workloads shift towards long-term, sustained business, you can change the billing method of an instance from pay-as-you-go to subscription to save on costs in the long run.
    

-   [Change the billing method from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1#concept-hzg-ggr-l2b)
    
-   [Change the billing method from pay-as-you-go to subscription](/help/en/ecs/change-the-billing-method-of-an-ecs-instance-from-pay-as-you-go-to-subscription-1#PAYGtoSubs-china)
    

Cloud disks

-   You can freely change the billing method of data disks that are attached to subscription instances.
    
-   However, the billing methods of system disks and data disks on pay-as-you-go instances change together with the billing methods of the instances.
    

-   [Change the billing method of a cloud disk](/help/en/ecs/switch-the-billing-method-of-a-disk#task-2347916)
    
-   [Change the billing method from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1#concept-hzg-ggr-l2b)
    
-   [Change the billing method from pay-as-you-go to subscription](/help/en/ecs/change-the-billing-method-of-an-ecs-instance-from-pay-as-you-go-to-subscription-1#PAYGtoSubs-china)
    

Public bandwidth

You can change the billing method for network usage by upgrading or downgrading instance configurations for instances that have system-assigned public IP addresses.

[Change the billing method for network usage of an ECS instance that uses a static public IP address](/help/en/ecs/change-the-billing-method-for-network-usage-1#task-1935423)
