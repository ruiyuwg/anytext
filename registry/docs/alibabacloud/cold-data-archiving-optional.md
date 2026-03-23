When you enable [cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/overview-cold-data), cold data is separated from the source table and archived to Object Storage Service (OSS). PolarDB charges fees based on the storage usage of cold data in OSS. This topic describes the billing rules for cold data archiving.

## Prices

**The Chinese mainland**

**China (Hong Kong) and other regions**

USD 0.0000325 per GB-hour

USD 0.0000455 per GB-hour

For example, if you archive 100 GB of cold data for a cluster in the Chinese mainland, the hourly fee is 100 GB × USD 0.0000325 per GB-hour = USD 0.00325 per hour.

**Note**

For more information about how to view the amount of archived cold data, see [View cold data archiving information](/help/en/polardb/polardb-for-mysql/user-guide/enable-cold-data-archiving#section-xbv-s8x-687).
