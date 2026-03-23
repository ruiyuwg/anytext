To standardize the viewing of O&M events for an ApsaraDB RDS instance, improve user experience, and make the event information more transparent, Alibaba Cloud stops maintaining the **event history** feature on the Event Center page of the ApsaraDB RDS console from May 31, 2023. Historical events supported by the **event history** feature will be split into ActionTrail events and instance management events. ActionTrail provides event tracking, and CloudMonitor provides event subscription capabilities. You can view the event information based on the **Suggestions** section in this topic.

## Discontinued feature

The **event history** feature on the Event Center page of the ApsaraDB RDS console

## Effective date

May 31, 2023

## Impacts

-   If the **event history** feature is enabled for your RDS instance, the **Historical Event** tab on the Event Center page and the operations such as [DescribeEvents](/help/en/rds/api-query-events-of-apsaradb-for-rds-instances-in-a-region#doc-api-Rds-DescribeEvents), [DescribeActionEventPolicy](/help/en/rds/api-query-status-of-the-event-history-feature#doc-api-Rds-DescribeActionEventPolicy), and [ModifyActionEventPolicy](/help/en/rds/api-enable-or-disable-the-event-history-feature#doc-api-Rds-ModifyActionEventPolicy) are not updated and maintained after May 31, 2023. The data that is displayed on the Historical Event tab may be incomplete and incorrect.
    
-   If the **event history** feature is disabled for your RDS instance, your RDS instance is not affected.
    

## Suggestions

After the **event history** feature is discontinued, you can use the following methods to view the historical events:

-   ActionTrail events: record the actions of your Alibaba Cloud account. The actions include your access to and use of cloud services by using the Alibaba Cloud Management Console, APIs, and SDKs. You can go to the [ActionTrail](https://actiontrail.console.alibabacloud.com/cn-hangzhou/event-list) console to view ActionTrail events. You can also call the ActionTrail API to configure trails and query events. For more information about the ActionTrail API, see [API overview](/help/en/actiontrail/developer-reference/api-overview).
    
-   Instance management events: include the instance exceptions that are identified by the Alibaba Cloud management and control system or O&M events that are automatically delivered. You can subscribe to [system events](https://cloudmonitor.console.alibabacloud.com/system-events) of CloudMonitor to view the instance management events such as scheduled O&M events, primary/secondary switchover events, unavailability events, serverless events, notification events, and optimization events.
