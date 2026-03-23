## How does Simple Log Service store and manage user logs?

A logstore is the basic unit that is used to store and query logs in Simple Log Service. In most cases, a logstore is used to store a type of log data. Currently, you can add, delete, modify, and query logstores in the Simple Log Service console or by using the API. After a logstore is created, you can write logs to the logstore by using the API or SDK. Simple Log Service also provides Logtail to help you collect log data from Alibaba Cloud Elastic Compute Service (ECS) instances in an efficient manner.

## Are logs lost when I delete a logstore?

If you delete a logstore, all log data that is stored in the logstore is also deleted. Proceed with caution when you perform this operation.

## How long can log data be stored in Simple Log Service? Can I change the data retention period?

You can configure the log data to be either stored permanently or retained for a specified period, after which it will be automatically deleted. You can also enable [intelligent tiered storage](/help/en/sls/data-tiered-storage-overview), which transfers data that exceeds a certain timeframe to Infrequent Access (IA) or Archive storage to reduce storage costs.

After logs are shipped to Object Storage Service (OSS) or MaxCompute, you can specify a data retention period in OSS or MaxCompute.

## If I want to store logs to OSS, how do I reduce costs in Simple Log Service?

You are charged specific fees when you use the powerful indexing and analysis features of Simple Log Service. If you want to only store logs to OSS and do not have custom requirements for log query and analysis, you can use the following methods to reduce costs in Simple Log Service:

-   By default, the indexing feature is disabled. If the indexing and analysis features are disabled, you can shorten the data retention period of a logstore to reduce data storage costs.
    
-   After you disable the indexing and analysis features, relevant features also become unavailable, such as log query by keyword, log statistical analysis, dashboards, and alerting. Proceed with caution when you perform this operation.
    
-   Change the data retention period of a logstore.
    
    You can change the data retention period of a logstore to one day. Specific charges for storing data in a logstore are included into your Simple Log Service bill. Therefore, you can shorten the data retention period to reduce costs.
    
-   Disable the indexing feature.
    
    1.  Enable the OSS data shipping feature to ship log data from a logstore to OSS for storage in a quasi-real-time manner.
        
    2.  On the **Search & Analysis** page, disable the indexing feature.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1745543371/p879391.png)
        

After the indexing and analysis features are disabled, you are charged only small fees for using Simple Log Service. For more information, see [Pay-by-feature](/help/en/sls/pay-as-you-go#concept-y3m-g5n-vdb).

## How do I view the size of a logstore?

The log storage capacity of a logstore is a billable item of Simple Log Service. You can use CloudLens for SLS to view the log storage capacity of a logstore. Before you begin, make sure that you have read and understood the relevant usage notes. This helps you perform operations with ease. For more information, see [Usage notes](/help/en/sls/usage-notes-45).
