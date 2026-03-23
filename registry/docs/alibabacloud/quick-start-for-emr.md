This topic describes how to quickly create a DataLake cluster that is based on the open source Hadoop ecosystem in the E-MapReduce (EMR) console and use the cluster to submit WordCount jobs. WordCount jobs are the most basic and typical distributed computing jobs in Hadoop. WordCount jobs are used to count the number of words in large amounts of text data. You can use WordCount jobs in various scenarios, such as data analysis and data mining.

## **Overview**

You can follow the instructions provided in this topic to:

-   Quickly create a DataLake cluster
    
-   Use the DataLake cluster to submit and run WordCount jobs
    
-   Have a basic understanding of the core features of Alibaba Cloud EMR and basic usage of the Hadoop ecosystem
    

## Prerequisites

-   An Alibaba Cloud account is created, and real-name verification is complete.
    
-   The default EMR and Elastic Compute Service (ECS) roles are assigned to your Alibaba Cloud account. For more information, see [Assign roles to an Alibaba Cloud account](/help/en/emr/emr-on-ecs/user-guide/assign-a-role-to-an-alibaba-cloud-account#concept-ykn-bd3-y2b).
    

## **Precautions**

The runtime environment of the code is managed and configured by the owner of the environment.

## Procedure

### **Step 1: Create a cluster**

1.  Go to the cluster creation page.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click **EMR on ECS**.
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
        -   You cannot change the region of a cluster after the cluster is created.
            
        -   By default, all resource groups in your account are displayed.
            
        
    3.  On the EMR on ECS page, click **Create Cluster**.
        
2.  On the page that appears, configure the parameters. The following table describes the parameters.
    
    **Step**
    
    **Parameter**
    
    **Example**
    
    **Description**
    
    **Software Configuration**
    
    **Region**
    
    China (Hangzhou)
    
    The geographic location where the ECS instances of the cluster reside.
    
    **Important**
    
    You cannot change the region after the cluster is created. Select a region based on your business requirements.
    
    **Business Scenario**
    
    Data Lake
    
    The business scenario of the cluster. Select a business scenario based on your business requirements. Alibaba Cloud EMR automatically configures the components, services, and resources to simplify cluster configuration and provide a cluster environment that meets the requirements of a specific business scenario.
    
    **Product Version**
    
    EMR-5.18.1
    
    The version of EMR. Select the latest version.
    
    **High Service Availability**
    
    Off
    
    Specifies whether to enable high availability (HA) for the EMR cluster. If you turn on the **High Service Availability** switch, EMR distributes master nodes across different underlying hardware devices to reduce the risk of failures. By default, the switch is turned off.
    
    **Optional Services**
    
    Hadoop-Common, OSS-HDFS, YARN, Hive, Spark3, Tez, Knox, and OpenLDAP
    
    The optional services for the cluster. You can select services based on your business requirements. The processes that are related to the selected services are automatically started.
    
    **Note**
    
    If you want to access the web UI of the services, you also need to select Knox and OpenLDAP.
    
    **Collect Service Operational Logs**
    
    On
    
    Specifies whether to enable log collection for all services. By default, this switch is turned on to collect the service operational logs of your cluster. The logs are used only for cluster diagnostics.
    
    After you create a cluster, you can modify the **Collection Status of Service Operational Logs** parameter on the **Basic Information** tab.
    
    **Important**
    
    If you turn off this switch, the EMR cluster health check and service-related technical support are limited. For more information about how to disable log collection and the impacts imposed by disabling of log collection, see [How do I stop collection of service operational logs?](/help/en/emr/emr-on-ecs/user-guide/faq-about-cluster-management#a33f96804dkef)
    
    **Metadata**
    
    Built-in MySQL
    
    If you select Built-in MySQL for Metadata, metadata is stored in MySQL.
    
    **Important**
    
    Built-in MySQL is suitable for the test environment. We recommend that you do not use Built-in MySQL in the production environment. If you plan to use the metadata service in the production environment, we recommend that you select Self-managed RDS or DLF Unified Metadata based on your business requirements.
    
    **Root Storage Directory of Cluster**
    
    oss://\*\*\*\*\*\*.cn-hangzhou.oss-dls.aliyuncs.com
    
    The root storage directory of cluster data. This parameter is required only if you select the OSS-HDFS service.
    
    **Note**
    
    -   Before you use the OSS-HDFS service, make sure that the OSS-HDFS service is available in the region in which you want to create a cluster. If the OSS-HDFS service is unavailable in the region, you can change the region or use HDFS instead of OSS-HDFS. For more information about the regions in which OSS-HDFS is available, see [Enable OSS-HDFS and grant access permissions](/help/en/oss/user-guide/enable-oss-hdfs-service#section-ztd-rfm-vvz).
        
    -   You can select the OSS-HDFS service when you create a DataLake cluster in the new data lake scenario, a Dataflow cluster, a DataServing cluster, or a custom cluster of EMR V5.12.1, EMR V3.46.1, or a minor version later than EMR V5.12.1 or EMR V3.46.1.
        
    
    **Hardware Configuration**
    
    **Billing Method**
    
    Pay-as-you-go
    
    The billing method of the cluster. If you want to perform a test, we recommend that you use the **pay-as-you-go** billing method. After the test is complete, you can release the cluster and create a **subscription** cluster in the production environment.
    
    **Zone**
    
    Zone I
    
    The zone where the cluster resides. You cannot change the zone after the cluster is created. Select a zone based on your business requirements.
    
    **VPC**
    
    vpc\_Hangzhou/vpc-bp1f4epmkvncimpgs\*\*\*\*
    
    The virtual private cloud (VPC) in which the cluster is deployed. Select a VPC in the current region. If no VPC is available, click **Create VPC** to create a VPC. After the VPC is created, click the **Refresh** icon and select the created VPC.
    
    **vSwitch**
    
    vsw\_i/vsw-bp1e2f5fhaplp0g6p\*\*\*\*
    
    The vSwitch of the cluster. Select a vSwitch in the specified zone. If no vSwitch is available in the zone, create a vSwitch.
    
    **Default Security Group**
    
    sg\_seurity/sg-bp1ddw7sm2risw\*\*\*\*
    
    **Important**
    
    You are not allowed to use an advanced security group that is created in the ECS console.
    
    The security group to which you want to add the cluster. If you have created security groups in EMR, you can select a security group based on your business requirements. You can also create a security group.
    
    **Node Group**
    
    Turn on the **Assign Public Network IP** switch for the master node group and use default settings of other parameters
    
    The instances in the cluster. Configure the master node, core nodes, and task nodes based on your business requirements. For more information, see [Select hardware specifications and network configurations](/help/en/emr/emr-on-ecs/user-guide/hardware-and-network-configurations).
    
    **Basic Configuration**
    
    **Cluster Name**
    
    Emr-DataLake
    
    The name of the cluster. The name must be 1 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (\_).
    
    **Identity Credentials**
    
    Password
    
    The identity credentials that you want to use to remotely access the master node of the cluster.
    
    **Note**
    
    If you want to perform authentication without the need to enter a password, you can select **Key Pair** for this parameter. For more information, see [Manage SSH key pairs](/help/en/ecs/user-guide/ssh-key-pairs/).
    
    **Password** and **Confirm Password**
    
    Custom password
    
    The password that you want to use to access the cluster. Record this password for subsequent operations.
    
3.  Click **Next: Confirm**. Follow the on-screen instructions to complete the creation.
    
    The cluster is successfully created if the cluster is in the **Running** state. For more information about cluster parameters, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page).
    

### **Step 2: Prepare data**

After the cluster is created, you can use the preset WordCount program of the cluster to analyze data or upload and run a self-developed big data program. This topic uses the preset WordCount program as an example to describe how to prepare data and submit a job for data analysis.

1.  Log on to your cluster in SSH mode. For more information, see [Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster#task-2508490).
    
2.  Prepare a data file.
    
    Create a text file named `wordcount.txt` as the input data of the WordCount program. Sample code:
    
    ```
    hello world
    hello wordcount
    ```
    
3.  Upload the data file.
    
    **Note**
    
    You can upload the data file to HDFS, OSS, or OSS-HDFS based on your business requirements. In this example, the data file is uploaded to OSS-HDFS. For information about how to upload a file to OSS, see [Simple upload](/help/en/oss/user-guide/simple-upload).
    
    1.  Run the following command to create a directory named `input`:
        
        ```
        hadoop fs -mkdir oss://<yourBucketname>.cn-hangzhou.oss-dls.aliyuncs.com/input/
        ```
        
    2.  Run the following command to upload the `wordcount.txt` file in the local root directory to the `input` directory of OSS-HDFS:
        
        ```
        
        hadoop fs -put wordcount.txt oss://<yourBucketname>.cn-hangzhou.oss-dls.aliyuncs.com/input/
        ```
        

### **Step 3: Submit a job**

You can use the WordCount program to analyze the frequency of words in text data.

Run the following command to submit a WordCount job:

```
hadoop jar /opt/apps/HDFS/hadoop-3.2.1-1.2.16-alinux3/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.2.1.jar wordcount -D mapreduce.job.reduces=1 "oss://<yourBucketname>.cn-hangzhou.oss-dls.aliyuncs.com/input/wordcount.txt" "oss://<yourBucketname>.cn-hangzhou.oss-dls.aliyuncs.com/output/"
```

The following table describes the parameters in the command.

**Parameter**

**Description**

`/opt/apps/.../hadoop-mapreduce-examples-3.2.1.jar`

The built-in Hadoop JAR package that contains specific sample MapReduce programs. `hadoop-mapreduce-examples-3.2.1.jar` is the name of the JAR package in your cluster, and 3.2.1 is the version of the JAR package. If you use a cluster of EMR V5.X, the version of the JAR package is 3.2.1. If you use a cluster of EMR V3.X, the version of the JAR package is 2.8.5.

`-D mapreduce.job.reduces`

The number of reduce tasks allowed for a MapReduce job.

By default, Hadoop automatically determines the number of reduce tasks based on the input data volume. If you do not configure this parameter, multiple output files, such as `part-r-00000` and `part-r-00001`, may be generated. You can set the parameter to 1 to ensure that only one output file, such as `part-r-00000`, is generated.

`oss://<yourBucketname>.cn-hangzhou.oss-dls.aliyuncs.com/input/wordcount.txt`

The input path of the WordCount job, which is the path that stores the data file uploaded in the previous step. `<yourBucketname>` is the name of the OSS bucket, and `cn-hangzhou` is the region name.

`oss://<yourBucketname>.cn-hangzhou.oss-dls.aliyuncs.com/output/`

The output path of the WordCount job, which is used to store the calculation results of the job.

### **Step 4: View the results**

## View the execution result of a job

You can run a Hadoop Shell command to view the execution result of a job.

1.  Log on to your cluster in SSH mode. For more information, see [Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster#task-2508490).
    
2.  Run the following command to view the execution result of the job:
    
    ```
    hadoop fs -cat oss://<yourBucketname>.cn-hangzhou.oss-dls.aliyuncs.com/output/part-r-00000
    ```
    
    The following figure shows the output.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8530474471/p939669.png)
    

## View the details of a job

YARN is the resource management framework of Hadoop and is used to schedule and manage jobs submitted to a cluster. You can view the details of a job on the web UI of YARN. For example, you can view the status, task details, logs, and resource usage of a job.

1.  Enable port 8443. For more information, see [Manage security groups](/help/en/emr/emr-on-ecs/user-guide/manage-security-groups-1#task-2139484).
    
2.  Add a user. For more information, see [Manage OpenLDAP users](/help/en/emr/emr-on-ecs/user-guide/cluster-openldap-user-management#task-2142443).
    
    To access the web UI of YARN by using your Knox account, you must obtain the username and password of the Knox account.
    
3.  On the **EMR on ECS** page, find your cluster and click **Services** in the **Actions** column.
    
4.  On the page that appears, click the **Access Links and Ports** tab.
    
5.  On the **Access Links and Ports** tab, click the link to the right of Internet in the **Knox Proxy Address** column for **YARN UI**.
    
    You can use the added user for logon authentication and access the YARN web UI.
    
6.  On the **All Applications** page, click the ID of the job to view the details of the job.
    
    ![Hadoop控制台](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8947632361/p326889.png)
    

### **(Optional) Step 5: Release the cluster**

If you no longer need to use the cluster, you can release it to reduce costs. After you confirm the release of a cluster, the system performs the following operations on the cluster:

1.  Forcibly terminate all jobs in the cluster.
    
2.  Terminate and release all ECS instances that are created for the cluster.
    

The time required to release a cluster is based on the size of the cluster. Most clusters can be released in seconds. It does not require more than 5 minutes to release a large cluster.

**Important**

-   A pay-as-you-go cluster can be released at any time. A subscription cluster can be released only after the cluster expires.
    
-   Before you release a cluster, make sure that the cluster is in the Initializing, Running, or Idle state.
    

1.  On the **EMR on ECS** page, find your cluster, move the pointer over the ![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1703822761/p526890.png) icon, and then select **Release**.
    
    You can also release the cluster by performing the following operations: Click the name of the cluster. In the upper-right corner of the **Basic Information** tab, choose **All Operations** > **Release**.
    
2.  In the **Release Cluster** message, click **OK**.
    

## References

-   For information about the paths of files that are frequently used in EMR, see [Paths of frequently used files](/help/en/emr/emr-on-ecs/user-guide/paths-of-frequently-used-files#concept-1012525).
    
-   For more information about the API operations that are available for cluster management and cluster service management, see [List of operations by function](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-overview).
    

## FAQ

For information about some frequently asked questions about EMR, see [FAQ](/help/en/emr/emr-on-ecs/support/faq#concept-bw2-5s1-pfb).
