Spark is a versatile, high-performance, and easy-to-use big data analytics engine for complex in-memory analysis and large-scale, low-latency data applications. DataWorks provides the CDH Spark node for developing and periodically scheduling Spark tasks. This topic explains how to configure and use the node.

## Prerequisites

-   You have created an Alibaba Cloud CDH cluster and bound it to a DataWorks workspace. For more information, see [Data Studio: Associate a CDH computing resource](/help/en/dataworks/user-guide/bind-cdh-computing-resources).
    
    **Important**
    
    Ensure the Spark component is installed on your CDH cluster and that its information was configured when you registered the cluster in DataWorks.
    
-   (Optional) If you are using a RAM user, you must add the user to the workspace and grant them the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions and must be granted with caution. For more information about how to add members to a workspace, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    **Note**
    
    If you are using your root account, you can skip this step.
    
-   You have configured a Hive data source in DataWorks and passed the connectivity test. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).
    

## Prepare Spark task and JAR package

Before you use DataWorks to schedule a CDH Spark task, you must develop the Spark task code in your CDH environment and compile the code into a JAR package. For more information about how to develop a CDH Spark task, see [Overview](/help/en/emr/emr-on-ecs/user-guide/spark-overview).

### **Create a CDH JAR resource**

Upload your task's JAR package to DataWorks to periodically schedule it on your CDH cluster.

1.  For more information, see [Resource management](/help/en/dataworks/user-guide/resource-management-of-data-studio/). Click **Upload** to upload the JAR package from your local computer.
    
2.  Select the **Storage Path**, **Data Source**, and **Resource Group**.
    
3.  Click **Save**.
    

## **Create a node**

For instructions, see [Create a node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).

## **Develop the node**

On the CDH Spark node configuration tab, perform the following steps.

### **Reference the CDH JAR resource**

1.  Open the **CDH Spark** node that you created and go to the code editor.
    
2.  In the **Resource Management** panel on the left, find the resource that you want to use, right-click the resource, and then select **Reference Resource**.
    
3.  After you reference the resource, a statement in the format `##@resource_reference{""}` appears in the code editor, confirming that the resource is successfully referenced. The following code provides an example. Replace the example information with your own.
    

```
##@resource_reference{"spark_examples_2.11_2.4.0.jar"}
spark_examples_2.11_2.4.0.jar
```

### **Edit the CDH Spark node code**

Modify the CDH Spark node code to add the spark-submit command. The following code provides an example:

**Important**

The CDH Spark node editor does not support comments. To avoid execution errors, ensure your code matches the example's format and contains no comments.

```
##@resource_reference{"spark-examples_2.11-2.4.0.jar"}
spark-submit --class org.apache.spark.examples.SparkPi --master yarn  spark-examples_2.11-2.4.0.jar 100
```

**Note**

-   `org.apache.spark.examples.SparkPi`: The main class of the task in your JAR package.
    
-   `spark-examples_2.11-2.4.0.jar`: The name of the uploaded CDH JAR resource.
    

## **Debug the node**

1.  In the **Run Configuration** **Compute Resources** section, configure the **Compute Resources** and **Resource Group** parameters.
    
    1.  For **Compute Resources**, select the name of the CDH cluster that you registered in DataWorks.
        
    2.  For **Resource Group**, select a scheduling resource group with a successful data source connection. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
    
    **Note**
    
    You can also adjust the **Compute CUs** based on the task's resource requirements. The default value is `0.5`.
    
2.  In the toolbar above the code editor, click **Run**.
    

## Next steps

-   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): To run a node on a recurring schedule, configure its **Time Property** and related scheduling properties in the **Scheduling configuration** panel on the right side of the page.
    
-   [Publish a node](/help/en/dataworks/user-guide/task-release/): To publish a node to the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon. Only nodes that are published to the production environment are scheduled.
    
-   **Task O&M**: After you publish a node, you can monitor its scheduled runs in the O&M Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
