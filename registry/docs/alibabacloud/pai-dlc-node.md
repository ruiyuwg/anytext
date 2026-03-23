Distributed training with Deep Learning Containers (DLC) from Platform for AI (PAI) offers a flexible, reliable, and high-performance machine learning training environment. DataWorks provides PAI DLC nodes that you can use to load DLC jobs and configure scheduling dependencies to run jobs on a schedule.

## **Prerequisites**

-   You have granted DataWorks the required permissions to access Platform for AI (PAI).
    
    You can go to the [authorization page to grant the permissions with a single click](https://dataworks.console.aliyun.com/slr?request=%5B%22AliyunServiceRoleForDataworksEngine%22%5D). For more information about the access policy, see [AliyunServiceRoleForDataWorksEngine](/help/en/dataworks/user-guide/service-linked-roles-used-by-dataworks-to-access-alibaba-cloud-services-to-which-compute-engines-belong/#section-5te-pml-k0s). Only an Alibaba Cloud account or a Resource Access Management (RAM) user with the **AliyunDataWorksFullAccess** policy can perform the one-click authorization.
    
-   You have created a project folder. For more information, see [Project Folder](/help/en/dataworks/user-guide/dataworks-project-development).
    
-   You have created a PAI DLC node. For more information, see [Create a node for a scheduling workflow](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    

## **Procedure**

1.  On the PAI DLC node editing page, develop the task.
    
    #### **Develop task code**
    
    You can write the DLC job code in one of the following ways:
    
    ## Write task code based on an existing DLC job
    
    Search for a DLC job in PAI by its name and load it. After you load the job, the DLC node editor generates node code based on the job's configuration in PAI. You can then edit the code.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6466460471/p877294.png)
    
    **Note**
    
    -   If you do not have the permissions to load or create a job, follow the on-screen instructions to grant the permissions.
        
    -   If no jobs are available, go to the PAI console to create one. You can create a PAI DLC job in several ways. For more information, see [Create a training job](/help/en/pai/user-guide/create-a-training-task/), [Create a training job: Python SDK](/help/en/pai/submit-jobs-by-using-the-sdk-for-python), and [Create a training job: command line](/help/en/pai/submit-jobs-by-using-clis).
        
    
    ## Write DLC task code directly
    
    In the PAI DLC node editor in DataWorks, you can write the task code directly.
    
    You can develop task code in the node editor and define variables using the **${variable\_name}** format. Then, you can assign values to the variables in the **Scheduling Parameters** section under **Properties** on the right side of the page. This lets you dynamically pass parameters to the code in a scheduling scenario. For more information about scheduling parameters, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). The following code provides an example.
    
    ```
    dlc submit pytorchjob \    # Submit a PyTorch job using DLC.
        --name=test \    # The name of the DLC job. Use a variable name or the DataWorks node name.
        --command='echo '\''hi'\''' \    # The command to be executed for the job. In this example, the command is echo 'hi'.    
        --workspace_id=309801 \   # The workspace where the job is executed.
        --priority=1 \   # The job priority. Valid values: 1 to 9. A value of 1 indicates the lowest priority, and a value of 9 indicates the highest priority.
        --workers=1 \    # The number of task nodes. If the value is greater than 1, the job is a distributed task and can be concurrently run on multiple nodes.
        --worker_image=<image> \   # The path of the image for the worker to run.
        --image_repo_username=<username> \   # Provide authorization for the private image.
        --image_repo_password=<password> \   # Provide authorization for the private image.
        --data_source_uris=oss://oss-cn-shenzhen.aliyuncs.com/::/mnt/data/:{mountType:jindo} \   # Mount the Object Storage Service (OSS) data source to a specified path in the container. In this example, the mount type is jindo.
        --worker_spec=ecs.g6.xlarge   # The node configuration, which is the specification of the compute node to use. 
    ```
    
2.  After you develop the task code, configure and run the node.
    
    1.  In the **Run Configurations** section, configure the **Resource Group**.
        
        Select a scheduling resource group that can connect to the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
    2.  In the toolbar, click **Run** to run the node task.
        
    
3.  To run the node task on a schedule, you can configure its scheduling properties. For more information, see [Configure scheduling properties for a node](/help/en/dataworks/user-guide/node-scheduling/).
    
4.  After you configure the node, you must publish it. For more information, see [Publish a node or workflow](/help/en/dataworks/user-guide/task-release/).
    
5.  After the node is published, you can view the running status of the auto triggered task in the Operation Center. For more information, see [Get started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
