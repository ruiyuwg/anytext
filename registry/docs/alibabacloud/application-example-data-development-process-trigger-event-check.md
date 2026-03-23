In the DataWorks Open Platform, after you register, publish, and enable an extension program, DataWorks sends a message to the program when an extension point event is triggered in the workspace where the program is active. The response from the extension program determines whether the operation can proceed. This topic describes the extension point events supported by Data Studio and demonstrates how to use them to trigger an extension program.

## Prerequisites

-   Message subscription is enabled. For more information, see [Enable message subscription](/help/en/dataworks/user-guide/enable-event-message-subscription-1#task-2227121).
    
-   The extension program is developed and deployed. For more information, see [Develop and deploy an extension program: Function Compute](/help/en/dataworks/user-guide/develop-and-deploy-a-custom-extension).
    

## Background information

-   Enable the extension program.
    
    On the **Management Center** page, you can view **extension programs** and enable or disable their validation in the current workspace.
    
-   Extension point events in Data Development
    
    The Data Studio module of DataWorks supports extension point events such as the pre-publish event for files, the pre-commit event for files, and the pre-commit event for tables. For concepts and a detailed list of extension point events, see [List of supported extension point events](/help/en/dataworks/overview-9#section-snp-xg4-1bw).
    
-   DataWorks can send message notifications for extension point events. You can use an extension program to automate validation and response. For more information about the extension point triggering process, see [Supported extension point events](#title-uxg-7gg-l81).
    

## Limits

After you enable an extension program, the following limits apply to message notifications and responses when an extension event is triggered during data development.

-   After a built-in extension program is enabled, it takes effect only for ODPS SQL nodes.
    
    This means that when an extension point event is triggered for an ODPS SQL node, the process is blocked while the built-in extension program validates the logic and returns the result. If an event is triggered for a node other than an ODPS SQL node, the process is also blocked, but the built-in extension program does not perform a validation and immediately returns a success result.
    
-   The **pre-publish event for tables** and the **pre-commit event for tables** are extension point events that are currently triggered for detection only when you commit or publish **MaxCompute** tables.
    
-   For composite nodes that contain inner nodes, such as [do-while nodes](/help/en/dataworks/user-guide/logic-of-do-while-nodes#concept-2100823) and [for-each nodes](/help/en/dataworks/user-guide/logic-of-for-each-nodes#concept-2104382), all inner nodes must pass the validation before the operation can proceed.
    

## Features

In Data Studio, you can register a local service as a DataWorks extension program to receive messages for specific extension point events. The extension program can handle these events with custom logic and return the result to the platform by calling the [UpdateIDEEventResult](/help/en/dataworks/api-updateideeventresult#doc-api-dataworks-public-UpdateIDEEventResult) API. This process lets you implement custom control flows in DataWorks. The following extension points are supported:

-   File operations: run, commit, publish, and delete files.
    
-   Table operations: commit and publish tables.
    
    **Note**
    
    Extension events for table operations in Data Studio are triggered only for **MaxCompute** tables.
    

## Supported extension point events

In DataWorks Data Studio, you can use an extension program to validate and respond to the following extension point events.

### **Data Studio - Run file**![代码运行](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2641841371/p342263.png)

### **Data Studio - Commit file**![文件提交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1252618661/p334886.png)

### **Data Studio - Publish file**![文件发布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7199572371/p334887.png)

### **Data Studio - Delete file**![文件删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0063672371/p334888.png)

### **Data Studio - Commit table**![表提交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0063672371/p342276.png)

### **Data Studio - Publish table**![表发布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0063672371/p342279.png)

## **References**

-   For instructions on how to enable an extension program, see [Use extension programs](/help/en/dataworks/user-guide/test-application-extensions#d7ce496b9c2ii).
    
-   Data Development supports additional extension point events. For more information, see [Supported extension point events list](/help/en/dataworks/overview-9#section-snp-xg4-1bw).
    
-   For the message entity format of file change events, see [File change events (commit, publish, run, delete, and code review)](/help/en/dataworks/user-guide/formats-of-event-messages-sent-to-eventbridge#section-9ox-8kq-r81).
    
-   For the message entity format of table change events, see [Table change events (commit table to the development environment and publish table to the production environment)](/help/en/dataworks/user-guide/formats-of-event-messages-sent-to-eventbridge#section-wlf-emc-vjp).
