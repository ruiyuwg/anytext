In DataWorks task development, you can create a CDH MR (MapReduce) node to process large datasets. This topic explains how to configure and use a CDH MR node in DataWorks.

## Prerequisites

-   You have created an Alibaba Cloud CDH cluster and bound it to a DataWorks workspace. For more information, see [Data Studio: Associate a CDH computing resource](/help/en/dataworks/user-guide/bind-cdh-computing-resources).
    
-   (Optional) If you are using a RAM user, you must add the user to the workspace and grant them the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions and must be granted with caution. For more information about how to add members to a workspace, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    **Note**
    
    If you are using your root account, you can skip this step.
    
-   You have configured a Hive data source in DataWorks and passed the connectivity test. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).
    

## **Create a CDH JAR resource**

You can upload a JAR package to DataWorks and use a CDH MR node to schedule it for periodic execution.

1.  [Resource management](/help/en/dataworks/user-guide/resource-management-of-data-studio/)Upload a JAR package from your local machine. Click **Click to Upload** to add the resource.
    
2.  Specify the **Storage Path**, **Data Source**, and **Resource Group**.
    
3.  Click **Save**.
    

## **Create a node**

For instructions, see [Create a node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).

## **Develop the node**

In the CDH MR node editor:

1.  Open the **CDH MR** node that you created. The code editor opens.
    
2.  In the Resource Management pane on the left, find the resource you want to reference. Right-click it and select **Reference Resource**.
    
3.  After you reference the resource, DataWorks adds a statement in the format `##@resource_reference{""}` to the code editor. You can then run the following command to execute the job. The resource package, bucket name, and path in the command are examples.
    

```
##@resource_reference{"onaliyun_mr_wordcount-1.0-SNAPSHOT.jar"}
onaliyun_mr_wordcount-1.0-SNAPSHOT.jar cn.apache.hadoop.onaliyun.examples.EmrWordCount oss://onaliyun-bucket-2/cdh/datas/wordcount02/inputs oss://onaliyun-bucket-2/cdh/datas/wordcount02/outputs
```

## **Debug the node**

1.  In the **Run Configuration** **Compute Resource** section, select the **Compute Resource** and **Resource Group**.
    
    1.  For Compute Resource, select the CDH cluster you registered in DataWorks.
        
    2.  For Resource Group, select a scheduling resource group that is connected to the data source.[Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b)
        
2.  On the node editor toolbar, click **Run**.
    

## Next steps

-   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): To run a node on a recurring schedule, configure its **Time Property** and related scheduling properties in the **Scheduling configuration** panel on the right side of the page.
    
-   [Publish a node](/help/en/dataworks/user-guide/task-release/): To publish a node to the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon. Only nodes that are published to the production environment are scheduled.
    
-   **Task O&M**: After you publish a node, you can monitor its scheduled runs in the O&M Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
