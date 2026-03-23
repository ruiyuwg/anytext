This topic describes how to log on to the nodes of an E-MapReduce (EMR) cluster in SSH mode or by connecting to an Elastic Compute Service (ECS) instance based on specific tools, such as Workbench. After you log on to a node of an EMR cluster, you can manage the cluster or perform operations on the cluster.

## Prerequisites

-   Your on-premises machine is connected to the master node of the cluster. You can turn on **Assign Public IP Address** during cluster creation to associate an elastic IP address (EIP) with your cluster. You can also assign a fixed public IP address or an EIP address to the master node of your cluster in the ECS console after the cluster is created. For more information, see [How do I assign a public IP address or an EIP address to a node of a cluster after the cluster is created?](#5e4909e96alb5) in the FAQ section in this topic.
    
-   Port 22 is enabled for the security group to which your cluster belongs. For more information, see the [Add a security group rule](/help/en/emr/emr-on-ecs/user-guide/manage-security-groups-1#section-7wh-x1n-6jy) section in the "Manage security groups" topic.
    

## **Obtain the public IP address and the name of a node**

You can perform the following operations to obtain the public IP address and the name of a node.

1.  Go to the Nodes tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
    3.  On the EMR on ECS page, find the desired cluster and click **Nodes** in the Actions column.
        
2.  On the **Nodes** tab, find the desired node group and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340399371/p899985.png) icon.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340399371/p899991.png)
    
    -   **Public IP Address**: You can view the public IP address of a node in the Public IP Address column.
        
        **Note**
        
        If no public IP address is available in the Public IP Address column, the **Assign Public IP Address** switch was not turned on when you created the cluster. For information about how to assign a public IP address or an EIP address to a node of your cluster, see [How do I assign a public IP address or an EIP address to a node of a cluster after the cluster is created?](#5e4909e96alb5) in the FAQ section in this topic.
        
    -   **Node Name/ID**: You can view the name of the master node in the Node Name/ID column. Examples: master-1-1, core-1-1, and task-1-1.
        
    

## Log on to the master node of a cluster

### Log on to the master node of a cluster by using an SSH key pair

After you create a key pair, a private key file in the .pem format is automatically downloaded.

The operations for logging on to the master node of a cluster vary based on the operating system of your on-premises machine.

## Linux

In this example, the private key file ecs.pem is used.

1.  Run the following command to modify the attribute of the private key file:
    
    ```
    chmod 400 ~/.ssh/ecs.pem
    ```
    
    `~/.ssh/ecs.pem` is the path where the ecs.pem file is stored on your on-premises machine.
    
2.  Run the following command to log on to the master node:
    
    ```
    ssh -i ~/.ssh/ecs.pem emr-user@<Public IP address of the master node>
    ```
    
    > For more information about how to obtain the public IP address of the master node, see the [Obtain the public IP address and the name of a node](#0b8169f598gmg) section in this topic.
    

## Windows

In Windows, you can use Command Prompt or PuTTY to log on to the master node a cluster.

## Log on to the master node of a cluster by using Command Prompt

Open Command Prompt and run the following command to log on to the master node of a cluster:

```
ssh -i <Storage path of the .pem file on your on-premises machine> emr-user@<Public IP address of the master node>
```

> For more information about how to obtain the public IP address of the master node, see the [Obtain the public IP address and the name of a node](#0b8169f598gmg) section in this topic.

## Log on to the master node of a cluster by using PuTTY

1.  Download [PuTTY and PuTTYgen](https://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).
    
2.  Use PuTTYgen to convert the format of the private key file from .pem to .ppk.
    
    1.  Run PuTTYgen. In this example, PuTTYgen 0.82 is used.
        
    2.  In the **Actions** section, click **Load** to import the private key file that is saved when you create a cluster.
        
        Make sure that the format of the file that you want to import is **All files (\*.\*)**.
        
    3.  Select the specific .pem file and click **Open**.
        
    4.  Click **Save private key**.
        
    5.  In the dialog box that appears, click **Yes**. Specify a name for the .ppk file and click **Save**.
        
        Save the .ppk file to your on-premises machine. In this example, kp-123.ppk is used.
        
3.  Log on to the master node of the cluster by using PuTTY.
    
    1.  Run PuTTY.
        
    2.  In the left-side navigation pane, choose **Connection** > **SSH** > **Auth** > **Credentials to authenticate with**. Click **Browse** below **Private key file for authentication** and select the .ppk file.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340399371/p901662.png)
        
    3.  Click **Session**. Enter the logon account and the public IP address of the master node in the **Host Name (or IP address)** field.
        
        The format is emr-user@<Public IP address of the master node>, such as emr-user@10.10.\*\*.\*\*. For more information about how to obtain the public IP address of the master node, see the [Obtain the public IP address and the name of a node](#0b8169f598gmg) section in this topic.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340399371/p899862.png)
        
    4.  Click **Open**. In the dialog box that appears, select **Accept**.
        

### Log on to the master node of a cluster by using an SSH password

**Note**

The username and password used in the following operations are the root user and password you specified when you created a cluster.

The operations for logging on to the master node of a cluster vary based on the operating system of your on-premises machine.

## Linux

Run the following command in the CLI of your on-premises machine to log on to the master node of a cluster:

```
ssh root@<Public IP address of the master node>
```

> For more information about how to obtain the public IP address of the master node, see the [Obtain the public IP address and the name of a node](#0b8169f598gmg) section in this topic.

## Windows

1.  Download and install PuTTY. Download link: [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).
    
2.  Start PuTTY.
    
3.  Configure the parameters for logging on to the master node of a cluster.
    
    -   **Host Name (or IP address)**: Specify the fixed public IP address of the master node or the EIP address associated with the master node. For more information about how to obtain the public IP address of the master node, see the [Obtain the public IP address and the name of a node](#0b8169f598gmg) section in this topic.
        
    -   **Port**: Enter the port number **22**.
        
    -   **Connection type**: Select **SSH**.
        
    -   **Saved Sessions**: optional. Enter a session name that is easy to identify and click **Save**. This way, you do not need to enter session information such as the public IP address when you connect to the instance again.
        
4.  Click **Open**.
    
5.  Specify the username and password and press Enter. The default username is root.
    

### **Log on to the master node of a cluster by connecting to the specific ECS instance**

1.  Go to the Nodes tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
    3.  On the EMR on ECS page, find the desired cluster and click **Nodes** in the Actions column.
        
2.  On the **Nodes** tab, find the desired node and click the node ID to go to the ECS console.
    
3.  On the Instances page, click **Connect** in the Actions column of the ECS instance.
    
    You can also select an appropriate tool to connect to the ECS instance. For more information, see [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
    **Note**
    
    If a permission error occurs when you use Workbench to connect to an ECS instance, see [What do I do if I do not have permission to use Workbench to connect to an ECS instance?](#6361f14701tiz) in the FAQ section in this topic.
    

## Log on to other nodes of a cluster

### Log on to other nodes of a cluster in password-free mode

You can perform the following operations to log on to a core node or a task node.

1.  Log on to the master node of a cluster. For more information, see the [Log on to the master node of a cluster](#section-gzt-pty-s93) section in this topic.
    
2.  On the master node, run the following command to switch to the user emr-user:
    
    ```
    su emr-user
    ```
    
3.  Log on to the core node or the task node in password-free mode.
    
    ```
    ssh <The node name of the core or task node>
    ```
    
    > For more information about how to obtain the name of a core or task node, see the [Obtain the public IP address and the name of a node](#0b8169f598gmg) section in this topic. Example: core-1-1 or task-1-1.
    

### Log on to other nodes of a cluster by connecting to the specific ECS instances

1.  Go to the Nodes tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
    3.  On the EMR on ECS page, find the desired cluster and click **Nodes** in the Actions column.
        
2.  On the **Nodes** tab, find the desired node and click the node ID to go to the ECS console.
    
3.  On the Instances page, reset the instance password. For more information, see [Reset the logon password of an instance](/help/en/ecs/user-guide/reset-the-logon-password-of-an-instance).
    
    **Important**
    
    By default, no logon password is specified for core or task nodes. If you want to log on to a core or task node by using a password, modify the instance logon password in the ECS console.
    
4.  Select an appropriate tool to connect to the ECS instance. For more information, see [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
    **Note**
    
    If a permission error occurs when you use Workbench to connect to an ECS instance, see [What do I do if I do not have permission to use Workbench to connect to an ECS instance?](#6361f14701tiz) in the FAQ section in this topic.
    

## FAQ

### How do I assign a public IP address or an EIP address to a node of a cluster after the cluster is created?

After a cluster is created, you can perform the following steps to assign a public IP address or an EIP address to a node of the cluster.

1.  Go to the Nodes tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
    3.  On the EMR on ECS page, find the desired cluster and click **Nodes** in the Actions column.
        
2.  On the **Nodes** tab, find the desired node group, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340399371/p906621.png) icon, and then click the ID of the desired node. The **Instance Details** page appears.
    
3.  In the **Configuration Information** section, find **Public IP Address** and click **Associate EIP** or **Assign Public IP Address**.
    
    -   Associate EIP: Create an EIP and associate the EIP with the ECS instance. For more information, see [EIPs](/help/en/ecs/user-guide/associate-or-disassociate-an-eip).
        
    -   Assign Public IP Address: Set the public bandwidth of the instances to a value greater than 0 Mbit/s. The system automatically assigns a public IP address to the ECS instance. For more information, see [Static public IP address](/help/en/ecs/user-guide/public-ip-address).
        
    
4.  On the **Nodes** page, find the desired node group and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340399371/p906621.png) icon to view the public IP address.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1340399371/p906672.png)
    

### How do I log on to a cluster from my on-premises machine without using the password?

Perform the following steps:

1.  Open Command Prompt and run the following command to generate a public key:
    
    ```
    ssh-keygen
    ```
    
    A public key file is generated on your on-premises machine.![ssh-key](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4648108461/p256483.png)
    
2.  Add the generated public key to the master node of the cluster to which you want to log on.
    
    1.  Go to the /.ssh directory of the cluster.
        
        ```
        cd ~/.ssh
        ```
        
    2.  Edit the key information of the master node of the cluster.
        
        ```
        vim authorized_keys
        ```
        
    3.  Add the content of the generated public key file id\_rsa.pub to the authorized\_keys file.
        
3.  Add the IP address of your on-premises machine to the security group to which the cluster belongs.
    
    1.  Obtain the public IP address of your on-premises machine.
        
        For security purposes, we recommend that you allow access only from the current public IP address when you configure a security group rule. To obtain your current public IP address, visit [http://myip.ipip.net/](https://myip.ipip.net/).
        
    2.  Add a security group rule in which port 22 is enabled.
        
        For more information about how to add a security group rule, see the [Add a security group rule](/help/en/emr/emr-on-ecs/user-guide/manage-security-groups-1#section-7wh-x1n-6jy) section in the "Manage security groups" topic.![Security group](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2706603261/p256318.png)
        
4.  Run the following command in Command Prompt to log on to the cluster in password-free mode:
    
    ```
    ssh root@<Public IP address of the master node>
    ```
    

### **Can I use the password that I specified when I created a cluster to log on to the nodes of the cluster?**

After an EMR cluster is created, you can use the password that you specified when you created the cluster to log on to the master node of the cluster. For information about how to log on to other nodes of the cluster, see the [Log on to other nodes of a cluster](#section-09n-qt6-wsa) section in this topic.

### **How do I reset my password?**

To reset the password, perform the following operations in the ECS console:

1.  On the **Nodes** tab in the EMR console, find the desired node.
    
2.  Click the ID of the node to go to the ECS console.
    
3.  On the Instances page, click **More** in the Actions column of the ECS instance and choose Password/Key Pair > Reset Instance Password.
    
    For more information, see [Reset the logon password of an instance](/help/en/ecs/user-guide/reset-the-logon-password-of-an-instance).
    

### **What do I do if I do not have permission to use Workbench to connect to an ECS instance?**

If you do not have permissions to use Workbench to connect to an ECS instance, troubleshoot the issue based on the account that you use.

-   Alibaba Cloud account: Check whether the service-linked role for Workbench is created. The first time you use Workbench to connect to an ECS instance, a message appears, and you are prompted to create the service-linked role for Workbench. You can click **OK** to allow the system to create the service-linked role for Workbench.
    
-   RAM account: You must contact the owner of the Alibaba Cloud account or the RAM administrator to attach the AliyunECSWorkbenchFullAccess system policy to the RAM user. Only RAM users to which the AliyunECSWorkbenchFullAccess system policy is attached can create the service-linked role for Workbench and use Workbench to log on to an ECS instance. For more information, see the [Service-linked role of Workbench](/help/en/ecs/user-guide/workbench-overview/#2b13d0d00ajyu) section in the "Connect to an instance through Workbench" topic.
    

## **References**

To ensure cluster security, the ports over which you can access the web UIs of open source components, such as Hadoop, Spark, and Flink, are not enabled. To access the web UIs of open source components, see the following topics:

-   [Create an SSH tunnel to access the web UIs of open source components](/help/en/emr/emr-on-ecs/user-guide/create-an-ssh-tunnel-to-access-web-uis-of-open-source-components)
    
-   [Access the web UIs of open source components in the EMR console](/help/en/emr/emr-on-ecs/user-guide/access-the-web-uis-of-open-source-components#section-t42-smw-jeo)
