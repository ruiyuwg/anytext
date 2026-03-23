E-MapReduce (EMR) allows you to use bootstrap actions to install third-party software and modify the runtime environment of your clusters. This topic describes how to add bootstrap actions and provides some examples.

## Background information

Bootstrap actions can enable the system to automatically execute a specific script on the new nodes when a cluster is created or scaled out or auto scaling is triggered. The manual execution feature allows you to execute a specified script on multiple existing nodes at the same time to meet your requirements. For more information about how to manually execute scripts, see [Manually execute scripts](/help/en/emr/emr-on-ecs/user-guide/manually-run-scripts#concept-xv2-j5n-y2b).

Bootstrap actions are similar to manually executed scripts. When you create a cluster or after a cluster is created, you can use bootstrap actions to perform some operations that are not supported by EMR clusters. For example, you can perform the following operations:

-   Use Yellowdog Updater, Modified (YUM) to install software whose installation package is available.
    
-   Download public software from the Internet.
    
-   Read your data from Object Storage Service (OSS).
    
-   Install and run services, such as Flink or Impala.
    

## Limits

-   You can add a maximum of 10 bootstrap actions in a cluster. Bootstrap actions are performed in the order that you specified.
    
-   By default, the root account is used to execute the specified script. You can also run the `su - hadoop` command in the script to switch to the hadoop user.
    

## Add a bootstrap action

You can use one of the following methods to add a bootstrap action:

### Method 1: Add a bootstrap action when you create a cluster

1.  Go to the EMR on ECS page.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
2.  On the **EMR on ECS** page, click **Create Cluster**.
    
3.  In the **Advanced Settings** section of the **Basic Configuration** step, find **Bootstrap Actions** and click **Add Bootstrap Action**.
    
4.  Configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Action Name**
    
    The name of the bootstrap action that you want to add.
    
    **Script Path**
    
    The OSS path where the script file is located.
    
    You must configure this parameter in the oss://\*\*/\*.sh format.
    
    **Parameter**
    
    The parameter of the bootstrap action script. The parameter is used to specify the value of the variable that is referenced in the script.
    
    **Execution Time**
    
    -   **Before Component Installation**: The system executes the script before the services are installed.
        
    -   **Before Component Startup**: The system executes the script before the installed services are started.
        
    -   **After Component Startup**: The system executes the script after the deployed services are started.
        
        The following figure shows the procedure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7350771471/CAEQORiBgIDl_5LvqRkiIDY1N2U2NDU1M2FiNDQ3YWRhNjc4NjMxNTAyZmRhMjZi4753293_20241115144720.556.svg)
        
    
    **Execution Failure Policy**
    
    -   **Proceed**: If the script fails to be executed, the system continues to execute the next script. This does not affect the creation or scale-out of clusters.
        
    -   **Stop**: If the script fails to be executed, the system stops executing the script. The cluster creation or scale-out fails.
        
    
    **Execution Scope**
    
    The execution scope. Valid values:
    
    -   **Cluster**: The bootstrap action is applicable to the entire cluster.
        
    -   **Node Group Type**: The bootstrap action is applicable only to node groups of specific types.
        
    
    You can refer to examples of bootstrap actions in [Examples](#section-a1c-yhd-l3d).
    
    **Note**
    
    The added bootstrap action may fail to be executed. However, the failure does not affect the creation of the cluster.
    
    For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630). After the cluster is created, you can check whether an exception occurs on the **Script Operation** tab. If an exception occurs, you can [view script execution logs](#section-hb6-7kw-ur7) for troubleshooting.
    

### Method 2: Add a bootstrap action after you create a cluster

1.  Go to the **Script Operation** tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
    3.  Find the cluster that you want to manage and click **Services** in the **Actions** column.
        
    4.  Click the **Script Operation** tab.
        
2.  On the **Bootstrap Actions** tab, click **Add Bootstrap Action**.
    
3.  In the **Add Bootstrap Action** dialog box, configure the parameters described in the following table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1932640471/p920484.png)
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the bootstrap action that you want to add.
    
    **Script Address**
    
    The OSS path where the script file is located.
    
    You must configure this parameter in the oss://\*\*/\*.sh format.
    
    **Parameter**
    
    The parameter of the bootstrap action script. The parameter is used to specify the value of the variable that is referenced in the script.
    
    **Execution Scope**
    
    The execution scope. Valid values:
    
    -   **Cluster**: The bootstrap action is applicable to the entire cluster.
        
    -   **Node Group Type**: The bootstrap action is applicable only to node groups of the types that you select.
        
    -   **Node Group**: The bootstrap action is applicable only to the node groups that you select.
        
    
    **Execution Time**
    
    -   **Before Component Installation**: The system executes the script before the services are installed.
        
    -   **Before Component Startup**: The system executes the script before the installed services are started.
        
    -   **After Component Startup**: The system executes the script after the deployed services are started.
        
        The following figure shows the procedure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7350771471/CAEQORiBgIDl_5LvqRkiIDY1N2U2NDU1M2FiNDQ3YWRhNjc4NjMxNTAyZmRhMjZi4753293_20241115144720.556.svg)
        
    
    **Execution Failure Policy**
    
    -   **Proceed**: If the script fails to be executed, the system continues to execute the next script. This does not affect the creation or scale-out of clusters.
        
    -   **Stop**: If the script fails to be executed, the system stops executing the script. The cluster creation or scale-out fails.
        
    
4.  Click **OK**.
    
    You can refer to examples of bootstrap actions in [Examples](#section-a1c-yhd-l3d).
    
    You can perform the following operations on an existing bootstrap action:
    
    -   Edit a bootstrap action: Find the bootstrap action that you want to edit and click **Edit** in the Actions column.
        
    -   Clone a bootstrap action: Find the bootstrap action that you want to clone and click **Clone** in the Actions column.
        
    -   Delete a bootstrap action: Find the bootstrap action that you want to delete and click **Delete** in the Actions column.
        

## View script execution logs

**Note**

We recommend that you add the log printing logic at the desired locations in the script. This way, you can view the status of the script based on the operational log.

You can perform the following operations to view the execution logs of bootstrap action scripts in the Operation History panel:

1.  Go to the Services tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, click **EMR on ECS**.
        
    3.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
    4.  On the **EMR on ECS** page, find the desired cluster and click **Services** in the **Actions** column.
        
2.  On the **Script Operation** tab, find the script that you want to manage, and click **View Execution Result** in the **Actions** column.
    
3.  In the **Operation History** panel, find an operation record of a bootstrap action script and view the details.
    
    -   DataLake, Dataflow, OLAP, DataServing, and custom clusters: Find the create or increaseNodeGroup operation record and click ![展开](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9770724761/p539968.png) to view activity details. Tasks whose names start with `RUN_BOOTSTRAP_CLUSTER_SCRIPT_<Bootstrap action name>_<Bootstrap action ID>` are activities related to bootstrap actions. You can view Stdout and Stderr logs.
        
    -   Hadoop, Data Science, and EMR Studio clusters: Find the CREATE\_CLUSTER or RESIZE\_CLUSTER operation record and click ![展开](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9770724761/p539968.png) to view activity details. Tasks whose names start with RUN\_SCRIPT\_HOST\_\*\* under pollDeployTaskStatusActivity are activities related to bootstrap actions. You can view the execution logs of Stdout and Stderr.
        

## Examples

When you add a bootstrap action, you must specify a bootstrap action name, the OSS path of a script file, and a parameter of the script based on your business requirements. When the bootstrap action is performed, each node downloads the script from the specified OSS path and executes the script directly or based on optional parameters. This section provides two examples.

-   Example 1
    
    You can specify the file that you want to download from OSS in the script. In this example, you can use the following script to download the <myFile>.tar.gz file from the oss://<yourBucket>/ directory and decompress the file to the /<yourDir> directory on your on-premises machine.
    
    **Important**
    
    The OSS endpoint in the script can be an internal, public, or VPC endpoint. If you use the classic network, you must specify an internal endpoint. For example, the internal endpoint that corresponds to the China (Hangzhou) region is oss-cn-hangzhou-internal.aliyuncs.com. If you use a virtual private cloud (VPC), you must specify an endpoint that you can access from the VPC. For example, the endpoint that corresponds to the China (Hangzhou) region is vpc100-oss-cn-hangzhou.aliyuncs.com.
    
    -   DataLake, Dataflow, OLAP, DataServing, and custom clusters
        
        ```
        #!/bin/bash
        ossutil64 cp oss://<yourBucket>/<myFile>.tar.gz  ./  -e oss-cn-hangzhou-internal.aliyuncs.com -i <yourAccessKeyId>  -k <yourAccessKeySecret>
        mkdir -p /<yourDir>
        tar -zxvf <myFile>.tar.gz -C /<yourDir>
        ```
        
    -   Hadoop clusters
        
        ```
        #!/bin/bash
        osscmd --id=<yourAccessKeyId> --key=<yourAccessKeySecret> --host=oss-cn-hangzhou-internal.aliyuncs.com get oss://<yourBucket>/<myFile>.tar.gz ./
        mkdir -p /<yourDir>
        tar -zxvf <myFile>.tar.gz -C /<yourDir>
        ```
        
    
-   Example 2
    
    You can use YUM to install additional system software. For example, you can use the following script to install ld-linux.so.2:
    
    ```
    #!/bin/bash
    yum install -y ld-linux.so.2
    ```
    

## FAQ

-   What do I do if the script of a bootstrap action is interrupted but no error message is displayed in the script logs?
    
    We recommend that you add the log printing logic at the desired locations in the script. This way, you can view the status of the script based on the operational log. In most cases, the errors that occur in cluster scripts may be caused by one of the following reasons:
    
    -   The network connection is abnormal. The ECS instances of the cluster and the OSS bucket must reside in the same region. For example, an ECS instance in the China (Beijing) region cannot connect to an OSS bucket in a region other than the China (Beijing) region.
        
    -   The ECS instances of the cluster fail to obtain the AccessKey pair. In most cases, this issue occurs because the ECS instances are not assigned the role AliyunECSInstanceForEMRRole.
        
    -   The nohup command is used in the script but the output is not redirected. As a result, the task fails to exit for a long time. `nohup ... >*** 2>&1` needs to be used.
        
    -   Line feeds are included when the script is edited in your ECS instance that runs the Windows operating system. As a result, an error occurs when the script is executed in a Linux environment. You can check whether the error log in the operation history contains `^M`. If the error log contains ^M, we recommend that you edit the script again in the Linux environment and upload it to OSS.
        
    
-   What do I do if the script of a bootstrap action contains no commands related to YARN or Hadoop Distributed File System (HDFS)?
    
    By default, no profile information is contained in scripts of EMR clusters. If you want to run commands related to YARN or HDFS in a script, add `. /etc/profile` to the beginning of the script.
    
    **Important**
    
    When you add `. /etc/profile`, take note that a space exists between `.` and `/etc/profile`.
