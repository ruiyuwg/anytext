You can create multiple consumer groups when you use the change tracking feature. Consumers in different consumer groups can track data changes from the same data source. Consumer groups allow you to reduce usage costs and improve the efficiency of data consumption.

## Usage notes

-   You can create a maximum of 20 consumer groups in a change tracking instance to achieve repeated data consumption.
-   You can create only a single consumer in each consumer group.
-   DTS reads incremental data by using the DStore module or a client. If you switch the module or client, data duplication may occur.

## Procedure

1.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
2.  In the left-side navigation pane, click Change Tracking.
3.  In the upper part of the Change Tracking Tasks page, select the region where the change tracking instance resides.
4.  Find the change tracking instance that you have purchased and click the instance ID. ![Click the instance ID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6483097951/p48136.png)
5.  In the left-side navigation pane, click Data Consume.
6.  On the Data Consume page, click Add consumer group in the upper-right corner. ![Add a consumer group](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5483097951/p48139.png)
7.  In the Create consumer group dialog box, set parameters for the consumer group. ![Create a consumer group](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5483097951/p48835.png)
    
    Parameter
    
    Description
    
    Consumer Group Name
    
    Enter a new name for the consumer group. We recommend that you use a descriptive name that makes it easy to identify the consumer group.
    
    Account
    
    Enter the username of the consumer group.
    
    -   The username can contain uppercase letters, lowercase letters, digits, and underscores (\_).
    -   The username must be 1 to 16 characters in length.
    
    Password
    
    Enter the password that corresponds to the username of the consumer group.
    
    -   The password must contain at least two of the following character types: uppercase letters, lowercase letters, digits, and special characters.
    -   The password must be 8 to 32 characters in length.
    
    Confirm Password
    
    Enter the password again.
    
8.  Click Create.

## What to do next

After you create consumer groups, choose one of the following methods based on the client type to consume the tracked data:

-   (Recommended) [Use the SDK demo to consume tracked data](/help/en/dts/user-guide/use-the-sdk-demo-to-consume-tracked-data-1#multiTask2832)
-   [Use flink-dts-connector to consume tracked data](/help/en/dts/user-guide/use-flink-dts-connector-to-consume-tracked-data#task-2092206)
-   [Use a Kafka client to consume tracked data](/help/en/dts/user-guide/use-a-kafka-client-to-consume-tracked-data#concept-508217)
