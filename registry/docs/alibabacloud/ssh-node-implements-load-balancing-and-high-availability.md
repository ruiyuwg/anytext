DataWorks SSH nodes can use the intelligent load balancing feature provided by Alibaba Cloud Network Load Balancer (NLB) to prevent single points of failure (SPOFs) and significantly simplify task configuration and O&M management. This topic describes how to deploy and use the intelligent load balancing feature in DataWorks to ensure stable running of SSH tasks.

## **Background information**

In most cases, an SSH data source is configured with a fixed host address of an Elastic Compute Service (ECS) instance in DataWorks. If an exception, such as breakdown or resource exhaustion, occurs on the ECS instance, an SSH node that runs on the ECS instance may fail to be run. To resolve this issue, you can add multiple [ECS instances](/help/en/ecs/user-guide/overview-52) to an [NLB](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/) server group. Then, NLB distributes tasks to available ECS instances based on internal algorithm policies and continuously monitors the health status of the ECS instances. If an ECS instance becomes faulty, NLB automatically transfers task requests to other normally running instances to prevent task interruption. This ensures continuous, stable task running.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5239395671/CAEQUBiBgMDlk9.o2RkiIGFlZmRkZjVlZTMwNDRjY2I4Mzg5ZGQ5YzQ1NGVhNDc45048736_20250414171206.411.svg)

Information in the preceding figure:

-   **Load balancing not enabled**: Tasks on DataWorks SSH nodes can be run only on the currently connected ECS instance. If the ECS instance becomes faulty or the resources in the ECS instance are exhausted, the tasks will be delayed or interrupted.
    
-   **Load balancing enabled**: Tasks on DataWorks SSH nodes are automatically distributed to a specific ECS instance in a server group based on the algorithm policy provided by NLB. In addition, NLB performs a health check on the server group. When a faulty ECS instance is detected, NLB distributes the tasks that run on the faulty ECS instance to another normally running ECS instance to ensure the continuity and high availability for task running.
    

This solution addresses resource exhaustion and SPOF issues and improves efficiency and reliability during task running.

## **Prerequisites**

-   The RAM user that you want to use is added to your workspace.
    
    If you want to use a RAM user to develop tasks, you must add the RAM user to your workspace as a member and assign the **Develop** or **Workspace Administrator** role to the RAM user. The Workspace Administrator role has more permissions than necessary. Exercise caution when you assign the Workspace Administrator role. For more information about how to add a member and assign roles to the member, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
-   A serverless resource group is associated with your workspace. For more information, see the topics in the [Use serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups) directory.
    

## **Limits**

-   The code that is run in an SSH node cannot exceed `128 KB` in size.
    
-   DataWorks resource groups, ECS instances, and NLB instances must be deployed in the same virtual private cloud (VPC) in the same region.
    

## **Environment preparation**

To implement load balancing and high availability for SSH nodes, you must create at least two ECS instances and configure different sample data for the ECS instances for verification.

### **Create ECS** instances

Perform the following steps to create required ECS instances:

1.  Select specifications.
    
    Go to the [buy page of ECS instances](https://ecs-buy.alibabacloud.com/wizard/#/). Click the **Custom Launch** tab. On the **Custom Launch** tab, configure the parameters that are described in the following table. For more information about parameter settings, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#title-ekk-a29-0de).
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    Select the region in which your DataWorks workspace resides.
    
    **Network and Zone**
    
    Select the VPC and vSwitch that are used when you create a serverless resource group.
    
    **Security Group**
    
    Select the security group associated with the vSwitch of the serverless resource group.
    
    **Other parameters**
    
    Configure other parameters based on your business requirements.
    
2.  Specify the number of ECS instances that you want to create.
    
    On the buy page of ECS instances, find the **Quantity** parameter on the right side and enter the number of required ECS instances. In this example, two ECS instances are created.
    
3.  Click **Create Order** to complete the creation as prompted.
    

### **Prepare sample data**

Find the created ECS instances and specify different sample data on ECS Instance 1 and ECS Instance 2 respectively for subsequent result comparison.

1.  Access the ECS instances.
    
    1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/server/region/cn-hangzhou). Select the region in which the created ECS instances reside, and find the created ECS instances on the Instance page.
        
    2.  Click **Connect** in the **Actions** column of each ECS instance. In the **Remote connection** dialog box, click **Sign in now**.
        
    3.  In the **Instance Login** dialog box, configure the authentication information to complete the logon.
        
2.  Create sample data.
    
    -   Run the following command on ECS Instance 1:
        
        ```
        echo "I am the first server" > /tmp/a.txt
        ```
        
    -   Run the following command on ECS Instance 2:
        
        ```
        echo "I am the second server" > /tmp/a.txt
        ```
        

## **Perform configuration in NLB**

Perform the following operations to create an NLB instance, configure a backend server group to which the preceding ECS instances are to be added, and configure a listener to implement traffic load balancing.

### Create an NLB instance

Perform the following steps to create an NLB instance. For more information, see [Prerequisites for creating an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance#title-ejv-562-box) and [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance).

1.  Go to the buy page of NLB instances.
    
    Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb). In the top navigation bar, select a region in which you want to create an NLB instance. In the left-side navigation pane, click Instances. On the Instances page, click **Create NLB**. The **Cloud Service Buy Page** page appears.
    
    **Important**
    
    Select the region in which your DataWorks workspace resides to prevent repeated instance creation due to incorrect configurations.
    
2.  Select specifications.
    
    Configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Network**
    
    **Network Type**
    
    Select **Internal-facing**.
    
    **VPC**
    
    Select the VPC in which your serverless resource group is deployed.
    
    **Zone**
    
    Select the zone in which the vSwitch of your serverless resource group resides.
    
    **IP Version**
    
    Select **IPv4**.
    
    **Management Settings**
    
    **Instance Name**
    
    Enter a custom instance name.
    
    **Resource Group**
    
    Select the default resource group provided by the system.
    
3.  Confirm the information and complete the creation.
    
    After all parameters are configured, click **Create Now**. On the **Confirm Order** page, click **Activate Now**.
    

### Create a backend server group

After the NLB instance enters the **Active** state, you can perform the following steps to create a server group for the NLB instance and add backend servers to the server group. For more information, see [NLB server groups](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group#title-yhq-f8o-kpb).

1.  Go to the instance details page.
    
    1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb). In the top navigation bar, select the region in which the created NLB instance resides. Then, find the instance on the Instances page.
        
    2.  Click the ID of the instance in the Instance ID/Name column to go to the instance details page.
        
2.  Create a backend server group.
    
    1.  In the Quick Start with NLB section, click **Create Server Group**.
        
    2.  In the Create Server Group dialog box, set **Server Group Name** to `ECS_NLB` and then click **Create**.
        
3.  Add backend servers to the server group.
    
    1.  In the dialog box that indicates the **server group is successfully created**, click **Add Backend Server**.
        
    2.  On the **Backend Servers** tab, click **Add Backend Server**. The **Add Backend Server** panel appears.
        
    3.  Select the two ECS instances that you created.
        
    4.  Click **Next** to proceed to the **Ports/Weights** step.
        
4.  Configure the port and weight for each ECS instance.
    
    1.  Set **Port** to `22`.
        
    2.  Click **OK**.
        

Wait until the addition is complete.

### Configure a listener

After the ECS instances are added to the backend server group of the NLB instance as backend servers, you can perform the following steps to configure a listener for the NLB instance. For more information, see [Add a TCP listener](/help/en/slb/network-load-balancer/user-guide/add-a-tcp-listener).

1.  Go to the details page of the NLB instance.
    
    1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb). In the top navigation bar, select the region in which your NLB instance resides. Then, find the instance on the Instances page.
        
    2.  Click the ID of the instance in the Instance ID/Name column to go to the instance details page.
        
2.  Configure a listener.
    
    1.  In the Quick Start with NLB section, click **Create Listener**. The Configure Listener step on the **Configure Server Load Balancer** page appears.
        
    2.  Set Listener Protocol to **TCP** and Listener Port to `22`.
        
    3.  Click **Next**.
        
3.  Select a server group.
    
    1.  In the **Select Server Group** step, select **Server Type** from the Server Group drop-down list and select the server group `ECS_NLB` that you created in the [Create a backend server group](#b1cc741ac3v8s) section in this topic.
        
    2.  Click **Next**.
        
4.  Submit the configurations for a review.
    
    In the **Configuration Review** step, make sure that the ECS instances and listener port that you specified are correct, and click **Submit** to complete the configuration.
    

## **Configure an SSH data source**

After the preceding configuration is complete, you can perform the following steps to associate the NLB instance with DataWorks as an SSH data source. For more information, see [SSH data source](/help/en/dataworks/user-guide/create-an-ssh-data-source).

1.  Go to the SettingCenter page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
    
2.  In the left-side navigation pane, click **Data Sources**.
    
3.  On the Data Sources tab of the Data Sources page, click **Add Data Source**.
    
4.  In the **Add Data Source** dialog box, click **SSH**. On the **Add SSH Data Source** page, configure parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Data Source Name**
    
    Specify a custom name. Example: `SSH_DB`.
    
    **Configuration Mode**
    
    The value of this parameter is fixed as **Connection String Mode**.
    
    **Authentication Method**
    
    We recommend that you select **DataWorks SSH Public Key Authentication**.
    
    **Host Address**
    
    Use the domain name of the NLB instance as the host address. To obtain the domain name of the NLB instance, perform the following steps: Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb). In the top navigation bar, select the region in which the NLB instance resides. Then, find the NLB instance on the Instances page. Click the ID of the instance in the Instance ID/Name column to go to the instance details page. In the Basic Information section of the Instance Details tab, click Copy to the right of **Domain Name****.**
    
    **Host Port**
    
    Set this parameter to `22`.
    
    **Username**
    
    Set this parameter to `root`.
    
    **Public Key**
    
    Click **Generate Key Pair**. The system will randomly generate a public key based on the username that you specified.
    
    **Important**
    
    Before you perform a network connectivity test, configure the public key in the key pair to the `.ssh/authorized_keys` file of each of the `two` created ECS instances to prevent a failed network connection.
    
5.  Test the network connectivity between the data source and a resource group.
    
    In the **Connection Configuration** section, find the serverless resource group that is associated with your workspace, and click **Test Network Connectivity** in the **Connection Status** column.
    

## **Run tasks on an SSH node**

You can perform the following operations to create and develop an SSH node and view task running results to verify functionality.

### Create an SSH node

Perform the following steps to create an SSH node. For more information, see [Node development](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5969899371/p859647.png) icon. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3390150471/p859711.png) icon to the right of the **Workspace Directories** section in the DATA STUDIO pane and choose **Create Node** > **General** > **SSH**.
    
3.  In the **Create Node** dialog box, configure the **Name** parameter.
    
4.  Click **OK**. The configuration tab of the SSH node appears.
    

### Develop the SSH node

On the configuration tab of the SSH node, you can add the following sample code and configure a code execution environment.

1.  Write code.
    
    Enter the following sample command in the code editor of the configuration tab of the SSH node:
    
    ```
    cat /tmp/a.txt
    ```
    
2.  Configure a code execution environment.
    
    -   **Data source**: Select the added SSH data source `SSH_DB` from the **Select DataSource** drop-down list in the upper part of the configuration tab of the SSH node.
        
    -   **Resource group:** Click **Debugging Configurations** in the right-side navigation pane of the configuration tab of the SSH node. On the Debugging Configurations tab, select the serverless resource group that you created from the **Resource Group** drop-down list.
        
3.  Click **Save** in the top toolbar of the configuration tab of the node to save the node.
    

### View running results

You can run code of the SSH node multiple times and compare the running results to check whether the configurations take effect.

1.  Run a task on the SSH node.
    
    Click **Run** in the top toolbar of the configuration tab of the node to run a task on the node. Then, rerun the task after running results are returned.
    
2.  View running results.
    
    **Note**
    
    After you submit a task for running, NLB randomly distributes the task to an ECS instance based on the logic algorithm. In this case, you may obtain different results after you run the task multiple times. This is because the task may be distributed to a different ECS instance each time you run the task.
    
    **Execution result 1**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2299737471/p941452.png)
    
    **Execution result 2**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2299737471/p941453.png)
    

## **Appendix: Implementation principles**

The following figure shows how to use Alibaba Cloud NLB in DataWorks to ensure stable running of SSH tasks in high concurrency scenarios.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5239395671/CAEQUBiBgICC292o2RkiIDU4ODMyY2MwNzNlODQwZGE5NGE2YmQ5NjFkODU5ODU35048736_20250411170541.025.svg)

After you add multiple ECS instances to a server group of an NLB instance, and specify the domain name of the NLB instance as the host address of an SSH data source in DataWorks, when you configure an SSH node, task requests on the SSH node are monitored by a listener configured for the NLB instance based on the data source and corresponding tasks are distributed to healthy ECS instances for running based on a load balancing policy. The running results are transparently returned by the NLB instance and are displayed in real time in the run log of the SSH node.
