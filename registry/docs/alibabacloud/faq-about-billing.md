If you have billing issues with Function Compute, such as overdue payments, unexpected bills, or resource plan purchases, you can find common questions and solutions in this topic.

## How to release Function Compute instances or stop the Function Compute service

Function Compute does not allow you to directly delete running instances. To release instances or stop the service, you must delete the functions and services.

**Important**

-   When a function is deleted, the system automatically recycles all of its running instances. Proceed with caution.
    
-   If you use reserved resources, you must release the reserved instances by adjusting the scaling rules before you delete the function. For more information, see [Elastic management (including reserved mode)](/help/en/functioncompute/fc-2-0/user-guide/configure-provisioned-instances-and-auto-scaling-rules#section-hw1-37d-ll5).
    

-   Delete a function
    
    In the [Function Compute console](https://fc.console.alibabacloud.com/), find the function that you want to delete. In the **Operation** column, click **More** > **Delete**. In the dialog box that appears, click **Delete {functionName}**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7433651371/p848992.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7433651371/p849038.png)
    
-   Deleting a service
    
    In the [Function Compute console](https://fc.console.alibabacloud.com/), find the target service. In the **Operation** column, click **More** > **Delete**. In the dialog box that appears, click **Delete {serviceName}**. Before you delete a service, ensure that it contains no functions, reserved instances, versions, aliases, or triggers. Otherwise, the deletion will fail.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7433651371/p848982.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7433651371/p848984.png)
    

## Can I switch between CPU and GPU instances?

No.

## When does my purchased resource plan expire?

Each resource plan is valid for 12 months and is paid annually. For example, if you purchase a plan on 2023-08-14, it expires on 2024-08-14.

Log on to the [Function Compute console](https://fc.console.alibabacloud.com/overview). On the **Overview** page, find the **Resource Plan** section on the right side of the page to view the expiration dates for all resource plans in your account.

## Do resource plans support cross-region deduction?

Resource plans support cross-region deduction for all regions on the Alibaba Cloud China Website (www.aliyun.com), such as East China, South China, North China, China (Hong Kong), Japan (Tokyo), US (Virginia), and Singapore. However, resource plans do not support cross-region deduction between regions on the Alibaba Cloud China Website (www.aliyun.com) and regions on Alibaba Cloud websites outside China. For example, deduction is not supported between the China (Hangzhou) region on a website outside China and the China (Hangzhou) region on the Alibaba Cloud China Website (www.aliyun.com).

## **My account has an overdue payment and I no longer want to use this product. How do I unsubscribe from the service? How do I pay the overdue amount?**

If you no longer need to use Function Compute, you can delete the functions and services. For more information, see [How to release Function Compute instances or stop the Function Compute service](#title-9cw-8bk-4dm).

Log on to [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/). On the **Account Overview** page, check your **Current Available Credit**. If the available credit is less than 0, your account has an overdue payment. You can click **Pay Now** to pay the overdue amount.

## **Why do I still see charges on my bill after I stopped the Function Compute service?**

Function Compute bills are delayed by about one hour. For example, if you invoke a function between 13:00 and 14:00 and then stop the service at 14:00, the bill for that period is generated at approximately 15:00. Therefore, the bill that you see after you stop the service is for charges that were incurred before you stopped the service.

Also, check your billing details for charges from other Alibaba Cloud products that are associated with Function Compute. If you find such charges, check whether the corresponding instances or resources are still in use. If they are not, log on to the console for that product and delete them promptly.

## **My function has no requests, so why are the charges increasing?**

If your function has no requests but you are still being charged, check whether your account uses reserved instances. In reserved mode, billing for the function execution duration starts when the Function Compute system starts the reserved instance and ends when you release the instance. Therefore, if you no longer need the reserved instances, delete them promptly. For more information, see [Elastic management (including reserved mode)](/help/en/functioncompute/fc-2-0/user-guide/configure-provisioned-instances-and-auto-scaling-rules).

Also, check whether your account has instances of other Alibaba Cloud products. You can log on to [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/) to view your billing details and check for bills from other products. For more information, see [Query bills](/help/en/functioncompute/fc-2-0/product-overview/bill-query).

## **I purchased a resource plan. Why am I still being charged?**

If your resource plan quota is used up or the plan has expired, any usage that exceeds the plan is billed on a pay-as-you-go basis. To learn how to view the remaining quota of your resource plan, see [Manage resource plans](/help/en/functioncompute/fc-2-0/product-overview/resource-plans#section-omy-m2t-2ht).

## **Do resource plans support auto-renewal? If so, can I disable it?**

No. Function Compute resource plans do not support auto-renewal and can only be purchased as new plans. You do not need to worry about recurring charges for resource plans.

## **Can I unsubscribe from messages such as text messages and emails sent by the product?**

Yes. You can log on to the [Alibaba Cloud website](https://www.aliyun.com/?spm=a2c4g.11186623.0.0.7bd9af63V7XmfX). In the upper-right corner, click **Console**. On the **Console** page, click your profile picture to go to the Account Center. In the navigation pane on the left side of the Account Center page, choose **Contact Management**. Then, you can add or remove message recipients as prompted.

## **Is the service free after I purchase a trial package? Will I still be charged?**

Function Compute provides a free trial package with a specific quota and validity period for first-time users. Resource usage that exceeds the trial quota or occurs after the trial period ends is billed on a pay-as-you-go basis. For more information, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview#p-9of-ih5-pvd).

## **After purchasing a trial package, my account has an overdue payment. How can I check the overdue amount and what might have caused it?**

After you purchase a trial package, you are charged for any resource usage that exceeds the trial quota. Overdue payments can also be caused using other Alibaba Cloud products without a resource plan.

If your account has an overdue payment, you can log on to [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/) to check the status. For more information, see [View overdue payments](/help/en/functioncompute/fc-2-0/product-overview/overdue-payments#title-zsw-fce-l88). You can also view your billing details to identify which billable items generated charges. For more information, see [Query bills](/help/en/functioncompute/fc-2-0/product-overview/bill-query).

## **What resource usage items are involved when running a GPU-accelerated instance?**

When you run a function on a GPU-accelerated instance, the billable items include **function invocations**, **active vCPU usage**, **light hibernation (formerly idle) vCPU usage**, **memory usage**, **disk usage**, **active GPU usage**, and **light hibernation (formerly idle) GPU usage**. If public network access is enabled, **outbound Internet traffic** is also billed. For more information, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview).

A GPU-accelerated instance cannot be used without a CPU instance. The following table describes the configuration rules for GPU-accelerated instances.

**Instance type**

**Supported**

**instance types**

**Full card GPU memory (GB)**

**Full card computing power (TFLOPS)**

**Optional chunking specifications**

**FP16 computing power**

**FP32 computing power**

**vGPU memory (MB)**

**vGPU computing power (card)**

**vCPU (core)**

**Memory size (MB)**

fc.gpu.tesla.1

Elastic instance

16

65

8

16384 (16 GB)

Note: Only full card memory is supported. If you purchase multiple cards, all resources are multiplied by the number of cards.

Full card computing power is allocated by default.

Note: The computing power is automatically allocated by Function Compute and does not need to be manually configured.

The value ranges from 0.05 to (vGPU memory in GB / 2).

Note: The value must be a multiple of 0.05.

The value ranges from 128 to (vGPU memory in GB × 2048).

Note: The value must be a multiple of 64.

fc.gpu.ada.1

-   Elastic instance
    
-   Resident instance
    

48

119

60

49152 (48 GB)

Note: Only full card memory is supported. If you purchase multiple cards, all resources are multiplied by the number of cards.

Valid values: 4, 8, or 16.

Valid values: 32768, 65536, or 98304.

fc.gpu.ada.2

-   Elastic instance
    
-   Resident instance
    

24

166

83

24576 (24 GB)

Note: Only full card memory is supported. If you purchase multiple cards, all resources are multiplied by the number of cards.

Valid values: 8 or 16.

Valid values: 32768 or 65536.

fc.gpu.ada.3

-   Elastic instance
    
-   Resident instance
    

48

148

73.54

49152 (48 GB)

Note: Only full card memory is supported. If you purchase multiple cards, all resources are multiplied by the number of cards.

Valid values: 8 or 16.

Valid values: 65536 or 98304.

fc.gpu.hopper.1

-   Elastic instance
    
-   Resident instance
    

96

148

44

98304 (96 GB)

Note: Only full card memory is supported. If you purchase multiple cards, all resources are multiplied by the number of cards.

16

Valid value: 98304.

fc.gpu.xpu.1

-   Elastic instance
    
-   Resident instance
    

96

123

61.5

98304 (96 GB)

Note: Only full card memory is supported. If you purchase multiple cards, all resources are multiplied by the number of cards.

16

Valid value: 98304.
