This topic describes how to create, view, and delete a custom event bus in the EventBridge console.

## Prerequisites

EventBridge is activated and the required permissions are granted to a Resource Access Management (RAM) user. For more information, see [Activate EventBridge and grant permissions](/help/en/eventbridge/getting-started/activate-eventbridge-and-grant-permissions-to-a-ram-user#task-1947668).

## Create a custom event bus

1.  Log on to the [EventBridge console](https://eventbridge.console.alibabacloud.com/). In the left-side navigation pane, click **Event Buses**.
    
2.  In the top navigation bar, select a region.
    
3.  On the **Event Buses** page, click **Quickly Create** in the **Custom Event Buses** section.
    
4.  In the **Create Custom Event Bus** panel, perform the following operations:
    
    1.  (Required) In the **Event Bus** step, configure the **Name** and **Description** parameters and click **Next Step**.
        
    2.  **(Optional)** In the **Event Source** step, configure the **Event Source Name** and **Description** parameters, select an event provider, configure resource information, and then click **Next Step**.
        
        If you do not want to create a custom event source, click **Skip**.
        
    3.  **(Optional)** In the **Event Rule** step, configure the **Event Rule Name** and **Description** parameters, specify an event pattern in the **Pattern Content** code editor, and then click **Next Step**.
        
        If you do not want to create an event rule or configure an event target, click **Skip** and then click **OK** in the **Skip Subsequent Steps** message.
        
    4.  **(Optional)** In the **Event Target** step, follow the on-screen instructions to configure the parameters and click **Create**.
        
        **Important**
        
        -   You can add up to five targets to an event rule.
            
        -   The target service and the event rule must be in the same region.
            
        
        EventBridge supports the following event targets:
        
        -   Function Compute: Processes events.
            
            For more information, see [What is Function Compute?](/help/en/functioncompute/fc-2-0/product-overview/what-is-function-compute#concept-2259850).
            
        -   Message Queue for Apache RocketMQ: Stores and transfers events.
            
            For more information, see [What is Message Queue for Apache RocketMQ?](/help/en/apsaramq-for-rocketmq/product-overview/what-is-apsaramq-for-rocketmq#concept-2047055).
            
        -   Message Queue for RabbitMQ: Stores and transfers events.
            
            For more information, see [What is Message Queue for RabbitMQ?](/help/en/apsaramq-for-rabbitmq/product-overview/what-is-apsaramq-for-rabbitmq#concept-101631-zh).
            
        -   Simple Message Queue (formerly MNS): Stores events.
            
            For more information, see [What is Simple Message Queue (formerly MNS)?](/help/en/mns/product-overview/what-is-mns#concept-2028739).
            
        -   Event bus: Filters and transforms events.
            
            For more information, see [What is EventBridge?](/help/en/eventbridge/product-overview/what-is-eventbridge).
            
        -   HTTP gateway: Processes events for your business.
            
        -   HTTPS gateway: Processes events for your business.
            
        -   Direct Mail: Pushes event notifications as emails.
            
            For more information, see [What is Direct Mail?](/help/en/direct-mail/product-overview/directmail).
            
        -   DingTalk: Sends event notifications to DingTalk.
            
        -   ApsaraDB RDS for MySQL: Stores and transfers events.
            
            For more information, see [Overview of ApsaraDB RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/overview-3#concept-gws-2dh-wdb).
            
        -   Self-managed MySQL database: Stores and transfers events.
            
        
        You can also select a method to transform the event content. For more information, see [Event transformation](/help/en/eventbridge/user-guide/event-transformation#task-1938346).
        
        If you do not want to create an event rule or configure an event target, click **Skip** and then click **OK** in the **Skip Subsequent Steps** message.
        

## View a custom event bus

1.  Log on to the [EventBridge console](https://eventbridge.console.alibabacloud.com/). In the left-side navigation pane, click **Event Buses**.
    
2.  In the top navigation bar, select a region.
    
3.  On the **Event Buses** page, find the custom event bus that you want to view and click **Details** in the **Actions** column.
    
    The **Overview** page displays the basic information and endpoint information about the custom event bus.
    

## Delete a custom event bus

You must delete all event sources and event rules created in a custom event bus before you delete the custom event bus. Otherwise, the custom event bus fails to be deleted.

1.  Log on to the [EventBridge console](https://eventbridge.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Event Buses**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Event Buses** page, find the custom event bus that you want to delete and click **Delete** in the **Actions** column.
    
5.  In the **Note** message, read the note and click **OK**.
    
6.  **(Optional)** In the **Verify Account Security** dialog box, click **Obtain Verification Code**, enter the verification code in the **Verification Code** field, and then click **OK**.
    
    **Warning**
    
    After you delete a custom event bus, the data in the custom event bus cannot be restored.
