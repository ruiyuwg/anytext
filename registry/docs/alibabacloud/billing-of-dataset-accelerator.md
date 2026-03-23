This topic describes the billing rules for Dataset Accelerator.

## **Billable items**

The following figure shows the billable items for Dataset Accelerator:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6497417171/p607658.png)

## **Billing methods**

The following billing methods are available for dataset accelerators.

**Billing method**

**Billable item**

**Billing entity**

**Billing rule**

**Stop billing**

Subscription

Accelerator instance capacity

Capacity and subscription duration.

Billing is based on capacity and subscription duration.

N/A

### **Subscription**

The subscription billing method is the only supported option. The details are as follows.

**Resource type**

**Billing formula**

**Unit price**

**Billing duration**

**Scaling description**

**Other notes**

Capacity

`Bill amount = Unit price of capacity × Capacity (GB) × Subscription duration (months)`

For details about capacity pricing, go to the [AI Dataset Accelerator (Subscription)](https://common-buy-intl.alibabacloud.com/?commodityCode=learn_DatasetAccPrepay_public_intl&regionId=ap-southeast-1) page.

-   Billing start time: 00:00:00 on the day after the purchase.
    
-   Billing end time: The expiration time.
    

-   Scale-out: Upgrade an existing accelerator instance. The scaled-out capacity takes effect immediately after purchase. The scaled-out capacity expires at the same time as the original subscription instance.
    
-   Scale-in: Not applicable.
    

N/A

## **Billing examples**

**Important**

The following billing examples are for reference only. For actual fees, see the purchase page or the console.

-   Scenario description:
    
    An accelerator instance with 500 GB of capacity is purchased for two months in the Singapore region.
    
-   Fee calculation:
    
    ```
    Bill amount = 265.00 × 2 = 530.00 USD
    ```
