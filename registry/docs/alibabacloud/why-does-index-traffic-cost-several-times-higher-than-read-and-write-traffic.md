This topic describes the billing differences between index traffic and read and write traffic.

Index traffic is calculated based on the size of the raw data that is indexed or reindexed. Read and write traffic is calculated based on the size of transmitted data after compression. The size of index data is related to the complexity of log content and the number of indexed fields. For example, the size of raw data that is uploaded to Simple Log Service is 10 GB, the size of the created index file is 8 GB, and the size of compressed data is 2 GB. In this example, the index traffic is 8 GB, and the read and write traffic is 2 GB.

For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
