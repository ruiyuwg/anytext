This topic describes the features of serverless synchronization tasks and how to configure them in Data Integration.

## **Limitations**

-   Supported regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Hong Kong), UK (London), US (Silicon Valley), US (Virginia), Japan (Tokyo), Germany (Frankfurt), Malaysia (Kuala Lumpur).
    
-   Supported synchronization types:
    
    -   MySQL to Hologres full-database real-time synchronization
        
    -   MySQL to MaxCompute full-database real-time synchronization
        
    -   MySQL to StarRocks full-database real-time synchronization
        
-   You can only use data sources in the current region that belong to your Alibaba Cloud account.
    

## **Usage notes**

-   Serverless synchronization tasks do not involve resource groups, allowing you to focus on the tasks themselves.
    
-   You do not need to configure network connectivity for serverless synchronization tasks. However, the CIDR blocks of the VPCs associated with the source and destination data sources cannot overlap.
    
-   Serverless synchronization tasks use pay-as-you-go billing. When you start a task, an order ID is automatically generated. You can use the order ID to view billing details in the Alibaba Cloud orders system. For more information about billing, see [Performance metrics of DataWorks serverless resource groups](/help/en/dataworks/new-resource-group-overview#4a1273623e2gr).
    
-   A serverless task is billed on a pay-as-you-go basis only when it is running. Billing stops when the task is stopped or fails. If you no longer need a task, you can delete it. Deleting a task is irreversible and releases the associated order.
    

**Note**

You can view the fees incurred by a serverless task on its [Order ID](#f134287ccb5sb) in the or [Orders](https://usercenter2-intl.console.alibabacloud.com/order/list) page.

## **Configure a Serverless synchronization task**

### **Step 1: Create a serverless synchronization task**

1.  Go to the Data Integration page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Integration** > **Data Integration**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Integration**.
    
2.  In the left-side navigation pane, click **Serverless Synchronization Task**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1272770371/p855825.png)
    
3.  In the **Serverless Synchronization Task** section, select a **Source** and a **Destination**, and then click **Create Serverless Synchronization Task**.
    

### **Step 2: Configure basic information**

-   You do not need to add the **Source** and **Destination** data sources in advance; you can configure details for the **Source** or **Destination** directly on this page.
    
-   After you configure the source and destination data sources, click **Test**. For Alibaba Cloud RDS and Hologres instances, the network connectivity test automatically passes if no IP address whitelist is configured. If an IP address whitelist is configured, you must add the required IP addresses. For a list of IP addresses, see [Configure network connectivity and an IP address whitelist](/help/en/dataworks/user-guide/configure-network-connectivity).
    

### **Step 3: Configure the task**

Configure the synchronization settings based on your specific task type by following the on-screen instructions.

### **Step 4: Complete the configuration**

After completing the configuration, click **Complete**.

The first time you click **Complete**, a **configuration check** is automatically performed. This **check** does not block the **Complete** action.

## **Start the task**

-   When you start a task, a **configuration check** is triggered again. This **check** is mandatory. If the check fails, the task cannot start.
    
-   The items in the configuration check vary depending on the synchronization task.
    
-   When you start a task for the first time, the system checks whether the user has the required policies. The policies are the same as those required for purchasing a serverless resource group on a pay-as-you-go basis. The user must have the **AliyunBSSOrderAccess** and **AliyunDataWorksFullAccess** policies to start the task.
    

## **Task details**

Click the entry in the **Name/ID** or **Execution Overview** column of a serverless synchronization task to open the task details page.

-   **Basic Information**: Displays information about the task's data sources, the Order ID, and the synchronization solution.
    
-   **Execution status**: Displays the execution status of each step in the task. You can also view the Runtime Log, failover details, and resource utilization.
    
-   **Details**: Displays detailed information about schema migration, full data initialization, and real-time synchronization.
    

## **Modify the task**

1.  In the **Actions** column of the target serverless synchronization task, click **Edit** to open the task configuration page.
    
2.  You can add, delete, or modify synchronization tables, and then click **Complete**.
    
3.  In the **Actions** column, click **Apply Updates**.
    
    -   When you click **Apply Updates**, a pre-check is automatically triggered. If the check fails, the **Apply Updates** action is blocked.
        
    -   The **Apply Updates** action has fewer check items than the initial start. Since resources are already initialized, the **Apply Updates** action does not include the resource preparation phase that occurs during the initial start.
        

## **Appendix**

### **View task order details**

Unlike other synchronization tasks, serverless synchronization tasks are not associated with resource groups. These tasks are billed based on a task order and are pay-as-you-go.

**Note**

A serverless task is billed on a pay-as-you-go basis only while running. Billing stops if the task is stopped or fails. If you no longer need a task, you can delete it. Deleting a task is irreversible and also releases the order.

You can view the order in the following ways:

1.  Click the entry in the **Name/ID** or **Execution Overview** column of a serverless synchronization task to open the task details page.
    
2.  In the **Basic Information** section, find the **Order ID**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2844490371/p855904.png)
    
3.  Go to the Alibaba Cloud or [Orders](https://usercenter2-intl.console.alibabacloud.com/order/list) page and search for the order details by using the order ID.
    

### **Advanced configurations**

#### **Configure source and rules**

By default, after you select the source databases and tables to synchronize, the task writes the data to a destination schema or table with the same name. If the schema or table does not exist in the destination, it is created automatically. You can also use **Customize Mapping Rules for Destination Schema Names** and **Customize Mapping Rules for Destination Table Names** to define the final schema or table names in the destination. This lets you replace a fixed prefix in source database or table names with another prefix when writing to the destination.

#### **Configure the destination table**

You can define the properties of the destination table. For example, you can choose to write to an existing table or create a new table, add fields, specify whether to write to a partitioned table, set the **Partition Field** name and **Storage Mode**, and configure **Value Assignment**.

**Note**

In this step, after you click the **Apply and Refresh Mapping** button, the system maps source tables to destination tables based on your table rules.

#### **Configure write rules**

The source data source can contain numerous DDL or DML operations. To ensure that the data meets your expectations, you can configure DDL or DML message processing policies based on the type of destination data source. For more information about DDL message processing policies, see [DDL message processing rules](/help/en/dataworks/user-guide/configure-a-real-time-synchronization-node-in-datastudio/#step-n7i-5m0-g2y) and [DML message processing policies](/help/en/dataworks/user-guide/create-a-real-time-synchronization-solution-to-synchronize-data-to-hologres#step-j42-9fb-h1x).
