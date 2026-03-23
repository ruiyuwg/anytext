DataWorks provides end-to-end data development and governance capabilities and a unified data development and governance process. This allows you to manage key stages in a process based on your business requirements. This topic describes the process management capabilities supported by DataWorks during data development.

## **Background information**

DataWorks provides workspaces in standard mode and workspaces in basic mode. The node development process varies based on the workspace mode. For more information about DataWorks workspaces, see [Comparison of basic mode and standard mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b).

-   Node development process in a workspace in standard mode
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5967785671/CAEQUBiBgMDZqIWa2RkiIGY2Y2ViNWM1NDMxYzQxYTk4ODczMzVhNTkyMWU0OTBl4603380_20240929110723.706.svg)
-   Node development process in a workspace in basic mode
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5967785671/CAEQUBiBgIDnj_2Z2RkiIGM1MjNmNjAzZmVhZTRlMDI4ZGY2ZDUzMTJkM2I4YTZk4603380_20240929112113.413.svg)

As shown in the preceding figures, you can manage key stages in a common node development process. For example, you can perform a check before you debug a node, or before you deploy a node to the development or production environment.

**Stage**

**Sample check**

Before a node is run

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855214.png)

Before a node is deployed to the development environment

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855223.png)

Before a node is deployed to the production environment

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855224.png)

You can use DataWorks services, such as Open Platform and Data Asset Governance, to manage key stages in the data development process.

**DataWorks service**

**Perform a check before a node is run**

**Perform a check before a node is deployed to the development environment**

**Perform a check before a node is deployed to the production environment**

**Description**

Data Asset Governance

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855226.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855227.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855228.png)

Data Asset Governance in DataWorks provides multiple built-in check items. You can enable a check item based on your business requirements. This way, when you perform the related operation, the corresponding built-in check item is triggered to check the operation. You can proceed to the subsequent operations in the process only after the check is complete.

Open Platform

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855229.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855230.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855231.png)

If the built-in check items cannot meet your process management requirements, you can use Open Platform to register and develop programs as DataWorks extensions to check related events and add the check events to the overall data development process.

The following sections use the data development process in a workspace in standard mode as an example to describe the process management capabilities.

-   [Enable the built-in check items provided by Data Asset Governance](#ba62c8cdcbw17)
    
-   [Develop custom extensions in Open Platform](#92e66bba57rtm)
    

## Enable the built-in check items provided by Data Asset Governance

Data Asset Governance in DataWorks provides multiple built-in check items. You can enable a check item based on your business requirements. This way, when you perform the related operation, the corresponding built-in check item is triggered to check the operation. You can proceed to the subsequent operations in the process only after the check is complete.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9935131471/p855236.png)

-   Before a node is debugged, you can select **Pre-event for Code Running** for the Effective Checkpoint parameter based on your business requirements.
    
-   Before a node is deployed to the development environment, you can select **Pre-event for Node Commit** for the Effective Checkpoint parameter based on your business requirements.
    
-   Before a node is deployed to the production environment, you can select **Pre-event for Node Deployment** for the Effective Checkpoint parameter based on your business requirements.
    

#### **Entry point for configuring check items and guidance**

You need to enable check items in Data Asset Governance and specify the workspace in which the check items that you enabled take effect. For more information, see [Configure governance items](/help/en/dataworks/user-guide/configure-governance-items#task-2113004).

## Develop custom extensions in Open Platform

If the built-in check items cannot meet your process management requirements, you can use Open Platform to register and develop programs as DataWorks extensions to check related events and add the check events to the overall data development process. The following content describes how a custom extension is used to check the node debugging.

**Note**

DataWorks Open Platform provides the following modules: OpenAPI, OpenEvent, and Extensions. You can use the OpenEvent module to subscribe to event messages generated for the operations that you perform on the Data Studio page in the DataWorks console, use the Extensions module to create an extension to process the event messages, and use the OpenAPI module to send processing results to DataWorks. For information about the OpenEvent and Extensions modules, see [Overview of OpenEvent](/help/en/dataworks/overview#concept-2080784) and [Overview of Extensions](/help/en/dataworks/overview-9#task-2118742).

If you use the features provided by Open Platform to subscribe to an event message generated for a specific operation that you perform on the Data Studio page and create an extension to process the event message, a check is triggered when the operation is performed. The following figure shows a check process before node running.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5967785671/CAEQUBiBgICg8P2Z2RkiIDQwYzhkYmZmOWY1YTQ1MjZiY2FlYmVmY2RhMzNlYTUw4603380_20240929134916.795.svg)

#### **Entry point for configuring check items and guidance**

In Open Platform, you need to subscribe to event messages generated for the operations that you perform on the Data Studio page, develop an extension that can be used to process the event messages, publish the extension to DataWorks, and then specify the workspace in which the extension is enabled.

-   Before a node is debugged, you can subscribe to events related to node running, such as the **pre-event for node running**.
    
-   Before a node is deployed to the development environment, you can subscribe to events related to node committing, such as the **pre-event for node committing** and **pre-event for table committing**.
    
-   Before a node is deployed to the production environment, you can subscribe to events related to node deployment, such as the **pre-event for node deployment** and **pre-event for table deployment**.
    

For more information about the event types supported by Open Platform, see [Overview of Extensions](/help/en/dataworks/overview-9#task-2118742).

-   For more information about common operations that are supported in Open Platform, see [Develop and deploy an extension based on a self-managed service](/help/en/dataworks/user-guide/preparations#task-2118743).
    
-   For more information about the best practices in typical process management scenarios, see the following topics:
    
    -   [Best practices: Custom task deployment lockdown](/help/en/dataworks/user-guide/best-practices-for-configuring-the-settings-in-dataworks-open-platform-to-perform-a-lockdown#task-2242163)
        
    -   [Best practices: (Advanced feature) Prohibit the use of the MAX\_PT function](/help/en/dataworks/user-guide/best-practices-for-prohibiting-the-use-of-the-max-pt-function#task-2242745)
        
    -   [Best practices for subscribing to status change events of an auto triggered node instance](/help/en/dataworks/user-guide/best-practices-for-subscribing-to-status-change-events-of-an-auto-triggered-node-instance#task-2247875)
