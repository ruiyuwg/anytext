An Object Storage Service (OSS) object inspection node can be created in Data Studio to periodically detect whether a specific file exists based on FTP. If the OSS object inspection node detects that the file exists, the scheduling system runs the descendant node of the OSS object inspection node. Otherwise, the OSS object inspection node detects the file based on the configured detection interval. The OSS object inspection node stops the retry until the condition to stop the detection is met. In most cases, OSS object inspection nodes are used for communications between the DataWorks scheduling system and external scheduling systems. This topic describes how to use an OSS object inspection node and the related precautions.

## **Node introduction**

An OSS object inspection node is typically used in the following scenario: A task in the DataWorks scheduling system needs to access an external database in an external scheduling system, but an ongoing data write task for the database is not performed by DataWorks. In this case, the time when the data write task is complete and the time when the database can be accessed are unknown to DataWorks. If the task accesses the database, the data that is read from the database may be incomplete or the data read fails because the data write task is not complete. To ensure that the task can successfully read data from the external database, you can enable the external scheduling system to generate a mark that indicates the data write task is complete. For example, you can enable the external scheduling system to generate a marker file with the suffix `.done` in the file system to indicate that the data write task is complete. Then, you can create an OSS object inspection node in the DataWorks scheduling system to periodically detect whether the marker file with the suffix `.done` exists. If the file exists, the node that needs to access the external database can be scheduled.

**Note**

-   You can specify the file system that can be used to store the marker files.
    
-   In this example, a marker file with the suffix `.done` is used. You can customize the information for your marker file based on your business requirements.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2618395671/CAEQUBiBgIDlwbqo2RkiIDFiNzZhNTg5NDIzMjQxZTg4NThmYjhiYjBjZjgyNmQ24683765_20240929131805.231.svg)

1.  After a data write task for an external database in an external scheduling system is complete and the database can be accessed, the scheduling system generates a marker file, such as `XXXX2024-09-29.done`, in the specified file system. In this example, a marker file with the suffix `.done` is used. You can customize the information for your marker file based on your business requirements.
    
2.  An OSS data source reads the marker file in the file system.
    
3.  The OSS object inspection node periodically detects whether the marker file exists in the OSS data source based on the configured detection policy.
    
    -   If the OSS object inspection node detects that the marker file exists, the data write task for the external database is complete, and the database can be accessed. Then, the OSS object inspection node returns the detection result to its descendant node.
        
    -   If the OSS object inspection node detects that the marker file does not exist, the data write task for the external database is not complete, and the database cannot be accessed. In this case, the OSS object inspection node fails the check and does not return the detection result to the descendant node. Then, the OSS object inspection node continues the detection based on the configured detection policy until the specified condition for stopping the detection is met.
        
4.  The descendant node of the OSS object inspection node determines whether to access the external database based on the detection result returned by the OSS object inspection node.
    
    -   If the OSS object inspection node detects that the marker file exists, the descendant node accesses the external database.
        
    -   If the OSS object inspection node detects that the marker file does not exist, the descendant node does not access the external database.
        
5.  The descendant node accesses the external database.
    

**Note**

External databases include but are not limited to Oracle, MySQL, and SQL Server.

## **Prerequisites**

-   The RAM user that you want to use is added to your workspace.
    
    If you want to use a RAM user to develop tasks, you must add the RAM user to your workspace as a member and assign the **Develop** or **Workspace Administrator** role to the RAM user. The Workspace Administrator role has more permissions than necessary. Exercise caution when you assign the Workspace Administrator role. For more information about how to add a member and assign roles to the member, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
-   A serverless resource group is associated with your workspace. For more information, see the topics in the [Use serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups) directory.
    
-   An OSS object inspection node is created before you develop a task on the node. For more information, see [Create a task node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    

## **Precautions**

-   When the task is running, the task monitors the OSS object by using Resource Access Management (RAM) and Security Token Service (STS) to authorize MaxCompute to access OSS. Make sure that MaxCompute has the required permissions on the OSS bucket. For more information, see [STS mode authorization](/help/en/maxcompute/security-and-compliance/sts-authorization).
    
-   In the development or production environment, the task monitors the OSS object based on the responsibilities of a workspace administrator. Make sure that the workspace administrator has the required permissions on the OSS bucket. For more information, see [Responsibilities of a workspace administrator](/help/en/dataworks/user-guide/work-as-a-workspace-administrator).
    

## **Step 1: Develop a task based on the OSS object inspection node**

On the configuration tab of the OSS object inspection node, configure the parameters as prompted.

1.  Configure a detection object and a detection policy.
    
    -   **OSS Object**: Enter the OSS object path. The parameters, such as ${bizdate} and ${cyctime}, are supported.
        
    -   **Timeout**: Specify the timeout period for the node to check the object file.
        
2.  After you configure a detection policy for an OSS object, configure scheduling properties for the OSS object inspection node. For more information, see [Scheduling configurations](/help/en/dataworks/user-guide/node-scheduling/).
    

## **Step 2: Deploy the OSS object inspection node and perform O&M operations**

1.  After the node code and scheduling properties are configured, deploy the OSS object inspection node to the production environment. For more information, see [Deploy nodes](/help/en/dataworks/user-guide/task-release/).
    
2.  After the deployment is complete, go to the **Auto Triggered Nodes** page in **Operation Center** to view the node that is deployed and perform O&M operations on the node. The system periodically runs the node based on the scheduling properties that you configure. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
