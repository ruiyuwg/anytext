DataService Studio lets you generate, manage, and publish APIs from data tables. Shared DataService Studio resource groups are billed based on the number of API calls and the running time. This topic describes the billing details for DataService Studio.

## Billable items

Fees for shared DataService Studio resource groups are based on **API Calls** and **Running Time**. Each user receives a free quota every month. You are billed only for successful API calls. This includes online test calls made from the DataService Studio page.

-   Successful call: A request that returns an errCode of 0 in the response.
    
-   Failed call: A request that returns an errCode other than 0 in the response.
    

## Billing granularity

Billable items are charged based on the Alibaba Cloud account to which the billable items belong and the region in which the billable items reside. The billable items in each region of each Alibaba Cloud account are independently charged.

## Pricing

Shared DataService Studio resource groups provide each user with a monthly free quota. Resource Access Management (RAM) users share the monthly free quota of the Alibaba Cloud account:

-   API calls: The first 1 million API calls per user per month are free.
    
-   Running time: The first 400,000 GB×s of running time per user per month is free.
    

**Note**

The free quota is reset at the beginning of each calendar month and does not roll over.

Usage that exceeds the free quota is billed at the prices listed in the following tables.

**Billable item**

**Unit**

**Unit price**

**Notes**

API calls

Millions of times

USD 0.21 per million calls

None

Running time

Memory × seconds (GB\*s)

USD 0.000017193 per GB\*s

The minimum time unit is 100 ms. Durations less than 100 ms are rounded up to 100 ms.

For example, if you make 10 million API calls this month, allocate 2 GB of memory to the API, and each call runs for 1,060 ms, your fees are calculated as follows:

-   Monthly API calls and fees
    
    The free quota includes 1 million API calls per month. Therefore, the number of billable calls for the month is 10 million - 1 million = 9 million. The price is USD 0.21 per million calls. The total monthly fee for API calls is `900 / 100 × 0.21 = 1.89` USD.
    
-   Monthly running time and fees
    
    Running time is measured in memory (GB) × seconds, or GB×s. The minimum time unit is 100 ms. Durations less than 100 ms are rounded up to 100 ms.
    
    Your total running time = Number of calls × Memory consumed per call (GB) × Running time per call (seconds), which is `10,000,000 × 2 × 1.1 = 22,000,000` GB×s. The free quota includes 400,000 GB×s of running time per month. Therefore, the billable running time is `22,000,000 - 400,000 = 21,600,000` GB×s. The price per GB×s of running time is USD 0.000017193. Your total monthly fee for running time is `21,600,000 × 0.000017193 = 371.37` USD.
    
-   Total monthly fee
    
    Total monthly fee = Monthly fee for API calls + Monthly fee for running time, which is `1.89 + 371.37 = 373.26` USD.
    

## Billing

Shared DataService Studio resource groups are billed on an hourly basis. At the beginning of each hour, the billing system calculates your usage fees from the previous hour, generates a bill, and deducts the amount from your Alibaba Cloud account balance.

## Overdue payments

If your account has an overdue payment, your service continues for 360 hours. You will receive notifications at the 192nd, 288th, and 336th hours after the payment becomes overdue, reminding you to renew the service as soon as possible.

-   If the payment remains overdue for more than 360 hours, the service is suspended. You will not be able to call published APIs.
    
-   If you add funds to your account within 360 hours after the payment becomes overdue, the service is not suspended.
    
-   If your account has another overdue payment after you have cleared the previous one, the service is suspended 360 hours after the new overdue payment occurs.
