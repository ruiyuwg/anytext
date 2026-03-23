You can create E-MapReduce (EMR) Shell nodes in DataWorks to meet specific business requirements. Editing custom Shell scripts lets you use advanced features, such as data processing, calling Hadoop components, and managing files. This topic describes how to configure and use an EMR Shell node in DataWorks to edit and run Shell tasks.

## Prerequisites

-   Before you develop a node, create a [custom image](/help/en/dataworks/user-guide/custom-image) based on the official `dataworks_emr_base_task_pod` image and [use the image in Data Studio](/help/en/dataworks/user-guide/custom-image#228efc577f20j) to customize the component environment.
    
    For example, when you create a custom image, you can replace Spark JAR packages or include specific `libraries`, `files`, or `JAR packages`.
    
-   You have created an Alibaba Cloud EMR cluster and bound it to DataWorks. For more information, see [Data Studio: Associate an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources).
    
-   (Optional) If you are a Resource Access Management (RAM) user, ensure that you have been added to the workspace for task development and have been assigned the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions. Grant this role with caution. For more information about adding members, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    > If you use an Alibaba Cloud account, you can skip this step.
    

## Limitations

-   This type of node can run only on a [serverless resource group](/help/en/dataworks/dataworks-resource-group-overview#c47e4feb45n5u) (recommended) or an exclusive resource group for scheduling. To use an image in Data Studio, you need to use a serverless resource group.
    
-   If you want to manage metadata for a DataLake or custom cluster in DataWorks, you must first configure EMR-HOOK in the cluster. For more information about how to configure EMR-HOOK, see [Configure EMR-HOOK for Hive](/help/en/emr/emr-on-ecs/user-guide/hive-uses-the-extension-to-record-data-consanguinity-and-access).
    
    **Note**
    
    If EMR-HOOK is not configured in your cluster, metadata cannot be displayed in real time, audit logs cannot be generated, data lineage cannot be displayed, or EMR-related administration tasks cannot be performed in DataWorks.
    
-   For tasks submitted using spark-submit, we recommend that you set deploy-mode to cluster instead of client.
    
-   EMR Shell nodes run on DataWorks resource groups for scheduling, not in EMR clusters. You can use some EMR component commands, but you cannot directly read resource information from EMR. To reference a resource, you must first upload the resource to DataWorks. For more information, see [Resource Management](/help/en/dataworks/user-guide/resource-management-of-data-studio/).
    
-   EMR Shell nodes do not support running Python files. You can use [Shell nodes](/help/en/dataworks/user-guide/create-a-shell-node) to run Python files.
    

## Procedure

1.  On the node editor page of the EMR Shell node, develop the node.
    
    #### Develop the Shell code
    
    You can choose one of the following methods based on your scenario:
    
    ## Method 1: Upload and then reference an EMR JAR resource
    
    DataWorks lets you upload a resource from your local machine to Data Studio and then reference the resource. If you use a DataLake cluster, you must follow these steps to reference an EMR JAR resource. If an EMR Shell node depends on a large resource that cannot be uploaded from the DataWorks page, you can store the resource in the Hadoop Distributed File System (HDFS) and reference it in your code.
    
    1.  Create an EMR JAR resource.
        
        1.  For more information, see [Resource Management](/help/en/dataworks/user-guide/resource-management-of-data-studio/). Store the JAR package generated in [Prepare initial data and a JAR package](/help/en/dataworks/user-guide/emr-mr-node-new-data-studio#4879ebe118ybd) in the `emr/jars` directory for JAR resources. Then, click **Upload** to upload the JAR resource.
            
        2.  Select the **Storage Path**, **Data Source**, and **Resource Group**.
            
        3.  Click **Save**.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1975611471/p852418.png)
        
    2.  Reference the EMR JAR resource.
        
        1.  Open the created **EMR Shell** node to go to the code editor page.
            
        2.  Find the resource that you want to reference (for example, `onaliyun_mr_wordcount-1.0-SNAPSHOT.jar`) in Resource Management in the navigation pane on the left, right-click the resource, and then select **Reference Resources**.
            
        3.  After you reference the resource, a reference statement is automatically added to the code editor of the **EMR Shell** node. Then, run the following command. The resource package, bucket name, and path information in the command are for demonstration purposes only. You must replace them with your actual information.
            
        
        ```
        ##@resource_reference{"onaliyun_mr_wordcount-1.0-SNAPSHOT.jar"}
        onaliyun_mr_wordcount-1.0-SNAPSHOT.jar cn.apache.hadoop.onaliyun.examples.EmrWordCount oss://onaliyun-bucket-2/emr/datas/wordcount02/inputs oss://onaliyun-bucket-2/emr/datas/wordcount02/outputs
        ```
        
        **Note**
        
        Comments are not supported when you edit code for an EMR Shell node.
        
    
    ### Method 2: Directly reference an OSS resource
    
    You can directly reference an Object Storage Service (OSS) resource from a node using an [OSS REF](/help/en/oss/developer-reference/ossfs) statement. When you run the EMR node, DataWorks automatically loads the OSS resource specified in the code to your local machine. This method is often used in scenarios where EMR tasks require JAR dependencies or depend on scripts. The reference format is as follows:
    
    ```
    ossref://{endpoint}/{bucket}/{object}
    ```
    
    -   **endpoint**: The endpoint used to access OSS. If you leave this parameter empty, you can use only an OSS bucket that is in the same region as the EMR cluster.
        
    -   **Bucket**: A container used to store objects in OSS. Each **Bucket** has a unique name. You can log on to the [OSS console](https://oss.console.alibabacloud.com/) to view all **Buckets** under the current account.
        
    -   **object**: A specific object (file name or path) stored in a **Bucket**.
        
    
    #### **Example**
    
    1.  Upload a sample file to an OSS bucket. This topic uses `emr_shell_test.sh` as an example. The sample file contains the following content:
        
        ```
        #!/bin/sh
        echo "Hello, DataWorks!"
        ```
        
    2.  Directly reference the OSS resource in the EMR Shell node.
        
        ```
        sh ossref://oss-cn-shanghai.aliyuncs.com/test-oss-of-dataworks/emr_shell_test.sh
        ```
        
        **Note**
        
        `oss-cn-shanghai.aliyuncs.com` is the **endpoint**, `test-oss-of-dataworks` is the **Bucket** name, and `emr_shell_test.sh` is the **object** file name.
        
        The following result is returned, which is the output of the `emr_shell_test.sh` file:
        
        ```
        ...
        >>> [2024-10-24 15:46:01][INFO   ][CommandExecutor       ]: Process ready to execute. command: sh ./emr_shell_test.sh
        >>> [2024-10-24 15:46:01][INFO   ][CommandExecutor       ]: Command state update to RUNNING
        >>> [2024-10-24 15:46:01][INFO   ][CommandExecutor       ]: Process start to execute...
        Process Output>>> Hello, DataWorks!
        ...
        ```
        
    
    #### Configure scheduling parameters for the EMR Shell node
    
    You can develop the task code in the Shell editor and define variables in the **${variable\_name}** format. Then, on the **Schedule** tab on the right side of the node editor page, assign values to the variables in the **Scheduling Parameters** section. This allows parameters to be passed dynamically when the node is scheduled to run. For more information about how to use scheduling parameters, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). The following code provides an example.
    
    ```
    DD=`date`;
    echo "hello world, $DD"
    ## You can use scheduling parameters.
    echo ${var};
    ```
    
    **Note**
    
    If you use a DataLake cluster, the following commands are also supported:
    
    -   Shell commands: Shell commands in the `/usr/bin` and `/bin` directories, such as ls and echo.
        
    -   Yarn components: hadoop, hdfs, and yarn.
        
    -   Spark components: spark-submit.
        
    -   Sqoop components: sqoop-export, sqoop-import, and sqoop-import-all-tables.
        
    
    When you use this component, you must add the IP address of the resource group to the RDS whitelist.
    
    #### **Run the Shell task**
    
    1.  On the ****Run Configuration**** tab, configure the **Compute Resource** and **Resource Group**.
        
        **Note**
        
        -   You can also configure **CUs For Scheduling** based on the resources required for task execution. The default value is `0.25` CUs.
            
        -   You can configure the **Image** information as needed.
            
        -   To access a data source over the public network or in a VPC, you must use a resource group for scheduling that has passed the connectivity test with the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
            
        
    2.  In the toolbar, click **Run** to run the Shell task.
        
    
2.  To run the node task on a regular basis, you can configure scheduling properties for the node as needed. For more information, see [Configure scheduling properties for a node](/help/en/dataworks/user-guide/node-scheduling/).
    
    **Note**
    
    To customize the component environment, you can create a [custom image](/help/en/dataworks/user-guide/custom-image) based on the official `dataworks_emr_base_task_pod` image and [use the image in Data Studio](/help/en/dataworks/user-guide/custom-image#228efc577f20j).
    
    For example, when you create a custom image, you can replace Spark JAR packages or include specific `libraries`, `files`, or `JAR packages`.
    
3.  After you configure the node task, deploy the node. For more information, see [Deploy nodes and workflows](/help/en/dataworks/user-guide/task-release/).
    
4.  After the task is published, you can view the running status of the auto triggered task in Operation Center. For more information, see [Get started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## References

-   To learn how to run Python scripts on EMR Shell nodes using Python 2 or Python 3 commands, see [Run Python scripts on Shell nodes](/help/en/dataworks/user-guide/run-a-python-script-on-a-shell-type-node).
    
-   To learn how to use the ossutil tool on EMR Shell nodes, see [Use ossutil on Shell nodes](/help/en/dataworks/user-guide/use-the-ossutils-tool-for-shell-type-nodes).
