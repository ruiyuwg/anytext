The billing for Elastic GPU Service is the same as the billing for Elastic Compute Service (ECS). This topic describes the billing details of Elastic GPU Service, including the billable items, billing methods, renewal policy, and refund policy.

## Billable items and billing methods

A GPU-accelerated instance is configured with computing resources including vCPUs, memory, and GPUs, and other resources such as images and block storage devices. The following table describes the billable items of Elastic GPU Service.

**Billable item**

**Description**

**Billing rule**

**Billing method switching**

**Billing references**

Computing resources (vCPU, memory, and GPU)

You are charged for the computing resources required by instance types, including vCPUs, memory, and GPUs.

The price of an instance type varies based on the region. For more information, go to the [pricing](https://www.alibabacloud.com/product/ecs) page.

Subscription, pay-as-you-go, and preemptible instance. You can use the pay-as-you-go billing method together with reserved instances or savings plans.

-   [Change the billing method of an instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1#concept-hzg-ggr-l2b)
    
-   [Change the billing method of an instance from pay-as-you-go to subscription](/help/en/ecs/change-the-billing-method-of-an-ecs-instance-from-pay-as-you-go-to-subscription-1#PAYGtoSubs-china)
    

[Instance types](/help/en/ecs/instance-types#concept-1937440)

Image

Image fees vary based on the image type and the usage duration. Images are classified into public images, custom images, shared images, and Alibaba Cloud Marketplace images. The billing for an image varies based on the image type.

Subscription and pay-as-you-go. You can use the pay-as-you-go billing method together with reserved instances.

**Note**

Images must be used only with ECS instances. The fees for Windows reserved instances include the fees for public images.

Not supported

[Images](/help/en/ecs/images#concept-1937441)

Block storage device

Block storage devices are classified into cloud disks and local disks.

-   Cloud disk: Fees vary based on the unit price, capacity, and usage duration. The billing method of a cloud disk varies based on the method that you use to create the cloud disk.
    
-   Local disk: Local disks must be created together with specific instance types and cannot be separately purchased. The fees for local disks are included in the fees for the instance types.
    

Subscription, pay-as-you-go, and storage capacity unit (SCU). You can use the pay-as-you-go billing method together with savings plans.

-   [Change the billing method of a cloud disk](/help/en/ecs/switch-the-billing-method-of-a-disk#task-2347916)
    
-   [Change the billing method of an instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1#concept-hzg-ggr-l2b)
    
-   [Change the billing method of an instance from pay-as-you-go to subscription](/help/en/ecs/change-the-billing-method-of-an-ecs-instance-from-pay-as-you-go-to-subscription-1#PAYGtoSubs-china)
    

[Block storage devices](/help/en/ecs/block-storage-devices#concept-1937442)

Public bandwidth

You can access the Internet by using static public IP addresses, elastic IP addresses (EIPs), and NAT gateways.

-   If you use a static public IP address to access the Internet, you are charged only for the outbound public bandwidth.
    
-   If you use an EIP or a NAT gateway to access the Internet, you must separately purchase the EIP or the NAT gateway. For more information about the billing details, see [EIP billing overview](/help/en/eip/billing-overview#concept-645525) and [Billing of Internet NAT gateways](/help/en/nat-gateway/nat-gateway-billing#concept-z13-hty-ydb).
    

Pay-by-bandwidth and pay-by-data-transfer.

[Change the billing method for network usage of an ECS instance that uses a static public IP address](/help/en/ecs/change-the-billing-method-for-network-usage-1#task-1935423)

[Public bandwidth](/help/en/ecs/public-bandwidth#publicIP-china)

Snapshot

-   When you create snapshots, you are charged for region-specific snapshot storage based on the size of the snapshots that are stored in each region.
    
-   When you copy snapshots, you are charged for snapshot storage and data transfers of snapshot replication.
    

Pay-as-you-go, Standard locally redundant storage (LRS) storage plan, and SCU.

Not supported

[Snapshots](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb)

## Renewal policy

You can renew only subscription instances. For pay-as-you-go instances, you do not need to renew them, but you must make sure that your account has sufficient balance. For more information, see [Renew a subscription instance](/help/en/ecs/manually-renew-an-instance-1).

**Note**

You can enable the economical mode for pay-as-you-go instances. The fees for a GPU-accelerated instance type include the fees for GPU resources. If you enable the economical mode for the instance, you are not charged for GPU resources. For more information, see [Economical mode](/help/en/ecs/user-guide/economical-mode#concept-js1-1fd-5db).

The following table describes the features that are related to the renewal of subscription instances.

**Feature**

**Scenario description**

**References**

Manual renewal

Before an instance is automatically released, you can renew the instance in the ECS console to extend the expiration date.

[Renew a subscription instance](/help/en/ecs/manually-renew-an-instance-1#Manualrenew-china)

Auto-renewal

-   Enable auto-renewal: If you enable the auto-renewal feature for an instance, the instance is automatically renewed before it expires. You can enable this feature to prevent the instance from being automatically released.
    
-   View the auto-renewal status: On the Instances page or Renewal page, you can check whether the auto-renewal feature is enabled for the instance.
    
-   Disable auto-renewal: If you no longer require the auto-renewal feature for an instance after the current billing cycle of the instance ends, you can disable this feature before the fees are automatically deducted from your account.
    

[Configure auto-renewal settings of an instance](/help/en/ecs/enable-auto-renewal-for-an-instance-1#autoRenew-china)

Renewal and configuration downgrade

If the configurations of an ECS instance exceed your requirements, you can renew the instance and downgrade the configurations within 15 days before the instance expires or the time period when the instance has expired but is not released.

[Renew an instance and downgrade its configurations](/help/en/ecs/downgrade-instance-configurations-during-renewal#concept-pjr-l2d-5db)

Unified expiration date

If you have multiple subscription instances that expire on different dates, you can synchronize the expiration dates to the same day of the month to simplify management and renewal.

[Synchronize the expiration dates of subscription instances](/help/en/ecs/synchronize-the-expiration-dates-of-subscription-instances#expireChinaOnly)

## Bills

You can go to the **Expenses and Costs** console to view the bills and the consumption details of your ECS resources. For more information, see [Bill Query](/help/en/ecs/view-billing-details#task-1938255).

## Expiration or overdue payments

After ECS resources expire, the resource status and how overdue payments are handled vary based on the billing method. For more information, see [Overdue payments](/help/en/ecs/overdue-payments#concept-2128819).

## Billing FAQ

If billing issues occur when you purchase or use Elastic GPU Service, you can obtain information to help resolve the issues. For more information, see [FAQ about billing](/help/en/ecs/billing-faq#concept-827517). You can also [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact technical support.

**Note**

For more information about the cost components, cost benefits, and cost optimization suggestions of ECS, see [Best practices for cost optimization](/help/en/ecs/best-practices-for-cost-optimization#concept-2406629).
