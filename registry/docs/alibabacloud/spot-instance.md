Spot Instances use the pay-as-you-go billing method. The market price changes in real time based on the supply and demand. Compared with Spot Instances, spot instances can reduce costs by up to 90%.

## **Billable item**

A spot instance is billed only based on the instance type. Charges do not include images, disks, public bandwidth (based on the pay-by-bandwidth metering method), or snapshots.

## **Billing rules**

### **Billing formulas**

-   **Billing duration**: the duration from when a spot instance is created to when the instance is released.
    
-   **Market price**: the price of the instance type, which does not include the prices of other resources, such as disks and public bandwidth.
    
-   **Bid price**: the highest price you are willing to pay for a spot instance.
    

**Note**

The bid price is not the actual price. The actual billing price is calculated based on the market price.

**Instance usage duration**

**1 hour**

**Undefined (None)**

**Billing diagram**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4577719471/CAEQORiBgMCR47ruqRkiIDc2YWE3ODI3YWE1MjQ1ZWFhMjU4ODAxMmM5NDU1MTQw4111252_20250108172428.856.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4577719471/CAEQORiBgMCk8LvuqRkiIGQ3MGE0Y2E5OGViMjQyZDc5ZDUxZmFlYWMzYzdiMjc44111252_20250108172428.856.svg)

**Description**

Alibaba Cloud does not automatically release a spot instance within 1 hour after the instance is created. After the 1-hour protection period ends, the system compares the bid price with the real-time market price and checks the resource inventory to determine whether to retain or release the instance.

If you do not specify a protection period for the spot instance, the system immediately compares the bid price with the real-time market price and checks the resource inventory to determine whether to retain or release the instance.

**Price used for the instance per hour**

-   Usage duration ≤ 1 hour: Market price at the time of purchase.
    
-   Usage duration > 1 hour: Real-time market price in each period.
    

Real-time market prices in different periods.

**Billing formulas**

-   Usage duration ≤ 1 hour: Market price at the time of purchase × Usage duration.
    
-   Usage duration > 1 hour: Market price at the time of purchase × 1 hour + ∑ (Real-time market price in period 1 × Period 1 + Real-time market price in period 2 × Period 2 +…+ Real-time market price in period N × Period N)
    

∑ (Real-time market price in period 1 × Period 1 + Real-time market price in period 2 × Period 2 +…+ Real-time market price in period N × Period N).

**Note**

If the instance type is the same, the market price of a spot instance whose usage duration is **None** is lower than the price of a spot instance whose usage duration is **1 Hour**, regardless of whether the specified usage duration is exceeded.

### **Billing cycle**

Fees are calculated by second. Bills are settled on an **hourly basis**.

## Billing examples

**Note**

The market price varies based on the supply and demand for the instance type. The following examples are provided only for reference.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4577719471/CAEQORiBgMDc3r3uqRkiIDljMjAxMGZiYTk0YzRiNTZhYjY3Mzc0YWE4MjFjYTQ03962790_20230830113154.948.svg)

**Scenario 1: set the** **Instance Usage Duration** **to 1 hour.**

For example, you bid USD 3 per hour as the maximum price per instance at 9:40 and bid for a spot instance at a market price of USD 2.5 per hour. You **set the Instance Usage Duration to 1 hour**. At 11:00, the bid price falls below the market price, and the instance is interrupted and reclaimed. After 5 minutes, the instance is released.

**Billing**

**Note**

Spot instances are billed by **second** based on usage duration. If an hourly price is displayed, you can divide the price by 3,600 to obtain the price per second.

The actual usage duration is 5,100 seconds (9:40 to 11:05) and exceeds 1 hour. The billing price within 1 hour is the market price at the time of purchase, which is USD 2.5 per hour. After 1 hour, the market price in each period applies before the spot instance is interrupted and reclaimed. The fees are calculated by using the following formulas:

-   Fees for **the first hour** = Market price at the time of purchase × Billing duration.
    
    9:40 to 10:40, during which the market price is 2.5 USD per hour and the usage duration is 3,600 seconds: (2.5/3,600) × 3,600 = USD 2.5.
    
-   **Fees for a usage duration after the first hour** = ∑ (Real-time market price in period 1 × Period 1 + Real-time market price in period 2 × Period 2 +…+ Real-time market price in period N × Period N)
    
    10:40 to 11:00, during which the market price is USD 3 per hour and the usage duration is 1,200 seconds: (3/3,600) × 1,200 = USD 1.
    
    11:00 to 11:05, during which the market price is USD 4 per hour and the usage duration is 300 seconds: (4/3,600) × 300 = USD 0.33.
    

Total fees = 2.5 + 1 + 0.33 = USD 3.83.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4577719471/CAEQORiBgID8hL_uqRkiIDc3MTZlZGNhYjVjNzQyZWZiOTMwMzdiOWI1YmQwMDk23962790_20230830113154.948.svg)

**Scenario 2: set the Instance Usage Duration to None.**

For example, you bid on a spot instance at 9:40 by using automatic bidding based on a market price of USD 2 per hour. If you set the Instance Usage Duration parameter to **None**, the instance is interrupted and reclaimed due to insufficient inventory at 11:00. Then, the instance is released after 5 minutes.

**Billing**

**Note**

Spot instances are billed by **second** based on usage duration. If an hourly price is displayed, you can divide the price by 3,600 to obtain the price per second.

The actual usage duration is 5,100 seconds (9:40 to 11:05), and the billing price is the market price in each period. The fees are calculated by using the following formulas:

Fees for a usage duration = ∑ (Real-time market price in period 1 × Period 1 + Real-time market price in period 2 × Period 2 +…+ Real-time market price in period N × Period N)

-   9:40 to 10:00, during which the market price is USD 2 per hour and the usage duration is 1,200 seconds: (2/3,600) × 1,200 = USD 0.67.
    
-   10:00 to 11:00, during which the market price is 2.5 USD per hour and the usage duration is 3,600 seconds: (2.5/3,600) × 3,600 = USD 2.5.
    
-   11:00 to 11:05, during which the market price is USD 3 per hour and the usage duration is 300 seconds: (3/3,600) × 300 = USD 0.25.
    

Total fees = 0.67 + 2.5 + 0.25 = USD 3.42.

## **View billing details**

For more information about how to view the bills of spot instances, see the [Example: View the bills for spot instances](/help/en/ecs/view-billing-details#section-h5i-gdu-dnm) section of the "View billing details" topic.

## Overdue payments

If you have overdue payments within your Alibaba Cloud account, you cannot use spot instances. Overdue payments cause instances to stop or resources to be released. To prevent the preceding issues and ensure service continuity, we recommend that you regularly add funds to your account to prevent overdue payments.

## References

-   [Overview](/help/en/ecs/user-guide/what-is-a-spot-instance#concept-t3p-gv2-5db)
    
-   [Create a spot instance](/help/en/ecs/user-guide/create-a-spot-instance)
    
-   [Best practices for spot instances](/help/en/ecs/use-cases/best-practices-for-preemptible-instances/)
