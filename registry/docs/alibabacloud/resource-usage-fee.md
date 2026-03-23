You are charged a monthly subscription port fee for both dedicated and shared Express Connect circuits. This fee is determined by the port's bandwidth and the geographic region.

## Billing rules

Port fees are charged monthly on a subscription basis.

**Attribute**

**Rule**

Billing cycle

All billing is calculated in the **UTC+8** time zone.

A subscription cycle lasts for a full calendar month from the moment of activation or renewal.

-   **Start Time:** The exact time (accurate to the second) when the port is activated or renewed.
    
-   **End Time:** The same time on the same day of the following month(s).
    
-   **Bill Generation:** Your bill is typically generated on the first day of the calendar month after a billing cycle ends. The actual bill generation time is subject to what is displayed in the system.
    

**Example:**

Assume you create a port at **13:00:00 on August 09, 2022**, with a one-month subscription, and then renew it for a second month.

-   **First billing cycle:** 13:00:00, August 9, 2022 - 00:00:00, September 10, 2022.
    
-   **Second billing cycle:** 00:00:00, September 10, 2022 - 00:00:00, October 10, 2022.
    

Billing formula

The fee for your ports in a region is calculated as follows:

```
Port Fee = Sum of monthly prices for all your ports in the region(USD/month) × Subscription duration (months)
```

Your total account bill is the sum of port fees across all regions where you have active ports.

## Billing

### Dedicated port

The prices listed below are for reference only. For actual prices, see the [buy page](https://expressconnect.console.alibabacloud.com/physicalconnection/cn-hangzhou/buy).

**Port specification**

**Chinese Mainland (USD/month)**

**Outside Chinese Mainland (USD/month)**

**SAU (Riyadh - Partner Region)(USD/month)**

1 Gbps

85

210

252

10 Gbps

720

1,600

1,920

40 Gbps

2,450

5,500

6,600

100 Gbps

5,200

11,700

14,040

### Shared port

To create or use a shared port, a dedicated connection must first be established by the circuit owner.

The prices listed below are for reference only. For actual prices, see the buy page on the console when [Create a shared port for a new tenant](/help/en/express-connect/user-guide/manage-connections-for-tenants#section-we6-ay8-jok).

**Port specification**

**Chinese Mainland (USD/month)**

**Outside Chinese Mainland (USD/month)**

**SAU (Riyadh - Partner Region)(USD/month)**

50 Mbps

20

20

24

100 Mbps

30

40

48

200 Mbps

40

55

66

300 Mbps

45

85

102

400 Mbps

55

115

138

500 Mbps

60

140

168

1 Gbps

85

210

252

2 Gbps

150

475

570

5 Gbps

375

1,100

1,320

8 Gbps

600

1,400

1,680

10 Gbps

720

1,600

1,920

20 Gbps

1,250

2,887

3,464.4

40 Gbps

2,450

5,500

6,600

50 Gbps

2,675

6,142

7,370.4

60 Gbps

2,900

7,371

8,845.2

80 Gbps

3,800

9,828

11,793.6

100 Gbps

5,200

11,700

14,040

## Billing example

### **Scenario**

On August 9, 2022, you subscribe to the following ports in the **China (Beijing)** region for **two months**.

1.  One **10 Gbps dedicated port**
    
2.  One **2 Gbps shared port**
    

### **Fee calculation**

The China (Beijing) region falls under the Chinese Mainland pricing column.

1.  **Find the monthly price for each port:**
    
    -   10 Gbps dedicated port (Chinese Mainland): USD 720/month
        
    -   2 Gbps shared port (Chinese Mainland): USD 150/month
        
2.  **Calculate the total monthly cost:**
    
    -   USD 720 + USD 150 = USD 870/month
        
3.  **Calculate the total fee for the subscription duration:**
    
    -   USD 870/month × 2 months = USD 1,740
        

The total port fee for this two-month subscription would be USD 1,740.
