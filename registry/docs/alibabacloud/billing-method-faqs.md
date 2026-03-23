## Subscription instance billing questions

-   [Why do my subscription ECS instances incur pay-as-you-go charges? Why is my account overdue when I purchased only subscription ECS instances that have not expired?](#9672f7251fhrr)
    
-   [Why did I receive an overdue payment notification for my subscription instance that has not expired?](#title-n06-vj2-3mp)
    
-   [What are the differences among subscription, reserved instances, and savings plans?](#3fafcdb5301jh)
    

## Pay-as-you-go instance billing questions

-   [How is the settlement time for pay-as-you-go instances calculated?](#title-bbs-pee-2nj)
    
-   [Are charges incurred for a pay-as-you-go ECS instance that is stopped manually or due to an overdue payment?](#title-bkx-7b1-tg0)
    

## **Billing method conversion questions**

### **Subscription to pay-as-you-go**

-   [What should I do if the conversion of a subscription instance to a pay-as-you-go instance fails?](#title-7st-j7v-1k4)
    

### **Pay-as-you-go to subscription**

-   [What should I do if an order to convert a pay-as-you-go instance to a subscription instance fails?](#title-vxq-e4i-ng9)
    
-   [I have an unpaid order to convert a pay-as-you-go instance to a subscription instance. If I upgrade the instance configuration, is the conversion order still valid?](#title-zpp-r46-j5y)
    
-   [Why can't I convert a pay-as-you-go instance to a subscription instance?](#title-c7p-de1-sc8)
    

## Economical mode questions

-   [What types of ECS instances support economical mode?](#title-qyg-85d-9ly)
    
-   [After I enable economical mode by default, can I stop a single ECS instance without releasing its computing and network resources?](#title-23o-35o-d77)
    
-   [Can I trigger economical mode by shutting down an ECS instance from within its operating system?](#title-pkl-65c-3oo)
    
-   [Do instances with local storage support automatic triggering of economical mode?](#title-y73-rky-9yg)
    
-   [After an ECS instance enters economical mode, why does an OperationConflict error occur when I try to start it immediately?](#title-88a-9y6-5rz)
    
-   [After an ECS instance enters economical mode, why does an OperationDenied.NoStock error occur when I call StartInstance?](#title-p17-mva-fai)
    
-   [After I enable economical mode, the public IP address changes when I stop and then start the instance. How can I keep the public IP address unchanged?](#title-jkh-fyr-zfa)
    

## **Appendix**

#### **What are the differences among subscription, reserved instances, and savings plans?**

For stable workloads, you can use subscription, pay-as-you-go with reserved instance credits, or pay-as-you-go with savings plan credits to receive discounts. For the same subscription duration, the flexibility of these options is ranked as follows: savings plans > reserved instances > subscription. The following table compares the features of the three options.

Comparison

Subscription

Reserved instance

Savings plan

Discount restrictions

Provides a discount for a specific instance.

A single reserved instance can provide discounts for up to 100 specific instances. The discount is applied only to instances that match the reserved instance.

Applies discounts directly to your bill based on consumption. This option does not limit the number of instances and offers high flexibility.

Resource reservation

Supported.

Supported. You can select a zonal reserved instance.

Not supported.

Cross-product

Not supported.

Supported. It can be applied to both Elastic Compute Service (ECS) and Elastic Container Instance (ECI).

Supported. It can be applied to both ECS and ECI.

Cross-region

Not supported.

Not supported.

Supported. You can select a general-purpose savings plan.

Cross-zone within the same region

Not supported.

Supported. You can select a regional reserved instance.

Supported.

Cross-instance family

Not supported.

Not supported.

Supported. You can select a general-purpose savings plan.

Cross-instance type within the same family

Not supported.

Supported.

Supported.

Cross-operating system

Not supported.

Not supported.

Supported.

Cross-account sharing

Not supported.

Supported.

Supported.

Installment payments

Not supported.

Supported. You can choose all upfront, partial upfront, or no upfront payment options.

Supported. You can choose all upfront, partial upfront, or no upfront payment options.

### **Why are pay-as-you-go fees generated for my subscription ECS instance? Why do I have overdue payments for my subscription ECS instance before it expires?**

Pay-as-you-go fees may be generated for a subscription instance if you enable pay-as-you-go features when you purchase the instance, or if you change configurations or attach pay-as-you-go resources while the instance is in use. Common scenarios are as follows:

**You configured the following settings when you purchased the subscription ECS instance, or you changed the instance configurations to the following while the instance is in use:**

-   You selected the pay-by-traffic billing method when you configured the public bandwidth.
    
-   The system disk or data disk is an ESSD AutoPL disk and you configured provisioned performance.
    
-   The system disk or data disk is an ESSD AutoPL disk and you configured performance burst. When a performance burst occurs, burst fees are charged on a pay-as-you-go basis.
    
-   You configured an automatic snapshot policy for the instance. When the policy is triggered and snapshots are created, snapshot storage fees are generated.
    
-   If the instance is a burstable instance with unlimited mode enabled, overusing its CPU credits incurs [extra credit charges](/help/en/ecs/user-guide/billing#section-lqi-vqf-dsc).
    

**You performed the following operations while using the subscription instance:**

-   Attached a pay-as-you-go data disk.
    
-   Attached pay-as-you-go Internet-facing products, such as elastic IP addresses (EIPs), Server Load Balancer (SLB) instances, or NAT gateways.
    
-   Created a custom image or a manual snapshot.
    

If you want to switch the billing method of these pay-as-you-go resources to subscription, see [Switch between billing methods](/help/en/ecs/change-the-billing-method/).

#### **What do I do if converting a subscription instance to a pay-as-you-go instance fails?**

The conversion from subscription to pay-as-you-go may fail for the following reasons:

1.  **The current instance status does not support conversion**: For example, the instance has an unpaid order.
    
2.  **The instance has expired**: An expired instance cannot be converted.
    
3.  **Instance information has changed**: If the instance configuration has changed, such as a temporary bandwidth upgrade, the conversion may fail.
    

To resolve these issues, you can perform the following steps:

-   **Check the instance status**: Make sure that the instance has no unpaid orders and is not expired.
    
-   **Review the instance configuration**: If you recently modified the instance, you may need to revert the changes to restore the instance to its original configuration before you can perform the conversion.
    

If the issue persists after you follow these suggestions, or if you receive an unclear error message, contact technical support for assistance.

#### **Why did I receive an overdue payment notification for my subscription instance that has not expired?**

After you purchase a subscription instance, if you use services that are billed on a pay-as-you-go basis, such as those for snapshot size or pay-by-traffic public bandwidth, pay-as-you-go bills are generated. These fees are not collected when you purchase the subscription instance. Therefore, if your account balance cannot cover the pay-as-you-go bills, your account has an overdue payment. You can view your consumption details to check for pay-as-you-go bills. For more information, see [Query bills](/help/en/ecs/view-billing-details#task-1938255).

#### **How is the settlement time for pay-as-you-go instances calculated?**

Pay-as-you-go instances are billed by the second and settled hourly. The settlement time is determined by the system. For example, if you create an ECS instance at 01:30 and release it at 02:00, the settlement cycle is from 01:00:00 to 02:00:00. The actual billable duration is 30 minutes × 60 = 1,800 seconds.

#### **Are charges incurred for a pay-as-you-go ECS instance that is stopped manually or due to an overdue payment?**

-   **Instance stop due to an overdue payment**: This refers to an instance that is automatically stopped because of an overdue payment in your account. No charges are incurred for an instance in this state. However, after your account has an overdue payment, the instance does not remain in this state indefinitely. For more information, see [Pay-as-you-go](/help/en/ecs/pay-as-you-go-1#Pay-As-You-Go).
    
-   **Manually Stopped**: This refers to an instance that you place in the **Stopped** state from the ECS console or by calling the StopInstance API operation. In this case, billing depends on the instance's network type and whether **economical mode** is enabled.
    
    -   **Virtual private cloud (VPC)**:
        
        -   **Economical mode enabled**: Billing starts at creation. When the instance is in the **Stopped** state, billing for some resources stops. Billing resumes after the instance is started. For pay-as-you-go instances, economical mode applies only to computing resources (vCPUs and memory) and static public IP addresses. Other resources, such as disks and EIPs, are still billed normally. For more information, see [Economical mode](/help/en/ecs/user-guide/economical-mode#concept-js1-1fd-5db).
            
        -   **Economical mode disabled**: Billing continues normally even if the instance is stopped.
            
    -   **Classic network**: Billing continues normally if the instance is stopped, regardless of whether economical mode is enabled.
        

In summary, no charges are incurred for an instance stopped due to an overdue payment. Whether charges are incurred for a manually stopped instance depends on the instance configuration and network type.

#### **What do I do if placing an order to convert a pay-as-you-go instance to a subscription instance fails?**

An order to convert a pay-as-you-go ECS instance to a subscription instance may fail for the following reasons:

1.  **The current instance status does not support conversion**: For example, the instance has an overdue bill or an automatic release time is set.
    
2.  **Instance information has changed**: The instance configuration has changed or there is an unpaid conversion order.
    
3.  **Conversion conditions are not met**: For example, the instance is of a retired instance type, is a spot instance, or has an automatic release setting that is not disabled.
    

To resolve these issues, you can perform the following actions:

-   Resolve any overdue payment issues in your account and disable the automatic release time setting.
    
-   Check whether the instance has any ongoing configuration changes or incomplete orders. You must complete or cancel these operations before you proceed.
    
-   Make sure the instance is not a spot instance and its instance type is not retired.
    

If the issue persists after you follow these suggestions, contact technical support for assistance.

#### **Does the bandwidth billing method change after converting from pay-as-you-go to subscription?**

**No, it does not.** The feature to convert a billing method from pay-as-you-go to subscription supports changing the billing method only for instances and disks. For more information about how to change the bandwidth billing method, see [Overview of instance upgrade or downgrade](/help/en/ecs/user-guide/overview-of-instance-configuration-changes#concept-anb-bbf-5db).

#### **I have an unpaid order to convert a pay-as-you-go instance to a subscription instance. If I upgrade the instance configuration, is the conversion order still valid?**

When you convert a pay-as-you-go instance to a subscription instance, a new purchase order is created. If you upgrade the instance configuration before you pay for this order, the instance components change. The original order amount no longer matches the current instance configuration. Therefore, payment for the order is blocked, and the conversion order becomes invalid.

If you still want to convert the billing method, you must first cancel the unpaid order on the [Order Management](https://usercenter2-intl.console.alibabacloud.com/order/list) page. Then, you must create another order to convert the billing method from pay-as-you-go to subscription based on the upgraded instance configuration.

#### **Why can't I convert a pay-as-you-go instance to a subscription instance?**

The pay-as-you-go ECS instance that you want to convert must meet the following conditions:

-   The instance is not a [retired instance type](/help/en/ecs/user-guide/retired-instance-types#concept-t1v-lxw-wgb) or a spot instance.
    
-   Pay for or cancel all unpaid orders for the instance.
    
-   If an automatic release time is set for the instance, you must first [disable the automatic release setting](/help/en/ecs/user-guide/release-an-instance#6d45118678ic0).
    
-   The instance is in the **Running** or **Stopped** state. If the instance is in economical mode, start the instance.
    
    > If you place an order while the instance is in the Running or Stopped state, but the instance enters a different state before you complete the payment, the payment and conversion fail. Go to the Order Hub and pay for the order again after the instance returns to the Running or Stopped state.
    

#### **What types of ECS instances support economical mode?**

An ECS instance must meet the following conditions to support economical mode:

-   The network type is VPC.
    
-   The billing method is pay-as-you-go (including spot instances).
    
-   The instance family does not include local storage.
    
-   The instance family does not include persistent memory.
    

For more information, see [Economical mode](/help/en/ecs/user-guide/economical-mode#concept-js1-1fd-5db).

#### **After I enable economical mode by default, can I stop a single ECS instance without releasing its computing and network resources?**

After you enable economical mode by default, you must still set the stop mode for each instance individually. If economical mode is not triggered, the ECS instance will not release its compute and network resources.

To stop and then restart an ECS instance within a short period, you can set the StoppedMode parameter to KeepCharging when you call the [StopInstance](/help/en/ecs/api-stopinstance#doc-api-Ecs-StopInstance) operation, or select **Standard Mode** when you stop the ECS instance in the console.

#### **Can I trigger economical mode by shutting down an ECS instance from within its operating system?**

No, you cannot. Stopping an instance from within its operating system cannot trigger economical mode. After you enable economical mode, the instance must be stopped in one of the following ways to trigger the mode.

-   In the ECS console. For more information, see [Stop an instance](/help/en/ecs/user-guide/stop-an-instance#task-1909833).
    
-   You can send API requests using the Cloud Assistant CLI or an SDK. For more information, see [StopInstance](/help/en/ecs/api-stopinstance#doc-api-Ecs-StopInstance).
    
-   Automatic stop due to an overdue payment in your account.
    

#### **Do instances with local storage support automatic triggering of economical mode?**

No, they do not. Instances with local storage do not support economical mode.

#### **After an ECS instance enters economical mode, why does an OperationConflict error occur when I try to start it immediately?**

When an ECS instance enters economical mode, its computing resources (CPU and memory) and static public IP address are revoked.

To stop and then restart an instance within a short period, you can prevent it from entering economical mode. To do this, set the StoppedMode parameter to KeepCharging when you call the [StopInstance](/help/en/ecs/api-stopinstance#doc-api-Ecs-StopInstance) operation, or select **Standard Mode** in the ECS console.

#### **After an ECS instance enters economical mode, why does an OperationDenied.NoStock error occur when I call StartInstance?**

When an ECS instance enters economical mode, its computing resources are revoked. If the resource inventory in the zone is insufficient, an OperationDenied.NoStock error occurs when you start the ECS instance. We recommend that you try to start the ECS instance again later.

#### **After I enable economical mode, the public IP address changes when I stop and then start the instance. How can I keep the public IP address unchanged?**

When an ECS instance enters economical mode, its static public IP address is revoked. A new static public IP address is automatically assigned the next time the instance starts. This is why the IP address changes.

To keep the public IP address unchanged, you can convert the static public IP address of the ECS instance to an elastic IP address (EIP). An EIP is not released when an ECS instance enters economical mode, which ensures that the public IP address remains the same. For more information, see [Convert a static public IP address to an elastic IP address](/help/en/ecs/user-guide/convert-the-public-ip-address-of-an-instance-in-a-vpc-to-an-eip#concept-l2l-jgn-xdb) and [ConvertNatPublicIpToEip](/help/en/ecs/api-convertnatpubliciptoeip#doc-api-Ecs-ConvertNatPublicIpToEip).

**Important**

After you convert a static public IP address to an EIP, you are charged for outbound public bandwidth, EIP configuration fees, and EIP attachment fees when you use the EIP to access the Internet. Configuration and attachment fees are waived if specific conditions are met. For detailed billing rules, see [Elastic IP Address Billing overview](/help/en/eip/billing-overview#concept-645525).
