If the number of your active shards exceeds the upper limit specified by the free quota that is provided by Simple Log Service, you are charged rental fees.

## Rental fees

Simple Log Service allows you to read data from and write data to active shards. You are charged for active shards based on the number of used active shards and the rental period.

## Billing examples

**Important**

-   For more information about the rental fees of active shards, see [Simple Log Service Pricing](https://www.alibabacloud.com/product/log-service/pricing?spm=a3c0i.139163.9288850920.1.7690637avzyiqo).
    
-   By default, two shards are created when you create a Logstore. For more information, see [Manage a Logstore](/help/en/sls/manage-a-logstore#concept-xkb-zh5-vdb).
    

## Pay-as-you-go

If you use the pay-as-you-go billing method, Simple Log Service provides a free quota of 31 shard days for each month.

-   If you use 1 **active shard** per day, you can use the shard for 31 days free of charge.
    
-   If you use 2 **active shards** per day, you can use the shards for the first 15 days in a month free of charge. From the 16th day, you are charged for the shards. This conclusion is made based on the following calculation: 2 (shards) × 15 (days) = 30 (shard days) < 31 (shard days).
    
-   If you use 4 **active shards** per day, you can use the shards for the first 7 days in a month free of charge. From the 8th day, you are charged for the shards. This conclusion is made based on the following calculation: 4 (shards) × 7 (days) = 28 (shard days) < 31 (shard days).
    

## Subscription

If you use the subscription billing method, Simple Log Service does not provide a free quota for active shards. Rental fees are generated every day.

## Cost saving

Each shard supports a write speed of up to 5 MB/s and a read speed of up to 10 MB/s. If the data traffic is very small compared with the maximum read speed or write speed of your shards, we recommend that you merge the shards. The merged shard is inactive, and no rental fees are generated. For more information about how to merge shards, see [Merge shards](/help/en/sls/manage-shards#section-tqj-l5f-vdb).
