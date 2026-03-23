To mitigate security risks, ContainerOS restricts direct system logon for untraceable operations. For administrative tasks such as troubleshooting and package installation, it provides an administrative container. This topic describes how to perform common administrative operations in ContainerOS, including logon, startup, shutdown, restart, and status query.

> This topic is only applicable to nodes that are [not managed by Auto Mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#a1c996ce1cjsg).

## **ContainerOS O&M** methods

Compared with hosts, the administrative container is pre-installed with additional software packages, and allows package installations by using the software package manager YUM. The administrative container displays information about system processes, networks, and system configurations. Additionally, it provides commands to log on to the host from the container. This logon method is similar to logging on to the instance using Workbench, SSH, or VNC.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2220067671/CAEQQRiBgIDC7MyUvRkiIDUwYTY4MWU2MDkyNTQ1YjlhMGIxMWJmOTQ3MDFiMDM05245881_20250623160135.212.svg)

Starting from ContainerOS 3.5, Shell is removed from the host environment. Refer to the following table to choose how to maintain ContainerOS nodes:

**Method**

**ContainerOS 3.5 and later**

**ContainerOS earlier than 3.5**

**Log on to the administrative container**

-   Workbench (secret-free only) logon
    
-   VNC logon
    

1.  Ensure an SSH key pair is bound to the node.
    
    For **new node pools**, you must configure the logon mode as **Key Pair**. For instructions, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    
    For **existing node pools**, [bind an SSH key pair](/help/en/ecs/user-guide/bind-an-ssh-key-pair-to-an-instance#concept-zzt-nl1-ydb) to the running instance.
    
2.  Connect to the node's host OS via Workbench (password-free only).
    
3.  Run `sudo lifseacli container start` to start the administrative container.
    
4.  Log on through SSH.
    

> The host does not enable SSH by default.

**Log on to the host**

After logging on to the administrative container, run the `sudo superman` command.

-   Workbench (secret-free only) logon
    
-   VNC logon
    

You can also maintain ContainerOS using the `kubectl debug` command.

## Logon methods for administrative containers in ContainerOS 3.5 and later

**Category**

**Workbench (secret-free only) logon**

**VNC logon**

**Prerequisites**

None.

> The [Cloud Assistant](/help/en/ecs/user-guide/overview-10#concept-qg3-5dx-ydb) is pre-installed in the administrative container.

VNC logon requires password authentication. First, you must set the administrative container logon password through the Workbench (secret-free only) logon method.

**Procedure**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  In the **Actions** column of the target node, choose **More** > **Workbench Remote Connection**.
    
4.  Log on using the secret-free connection method.
    

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  In the **Actions** column of the target node, choose **More** > **VNC Remote Connection**, and follow the page prompts to complete identity authentication.
    

## **Host logon methods for ContainerOS earlier than 3.5**

### **Log on to the host**

**Category**

**Workbench (secret-free only) logon**

**VNC logon**

**Prerequisites**

Ensure that the node can access the Cloud Assistant service.

VNC logon requires password authentication. First, you must set the administrative container logon password through the Workbench (secret-free only) logon method.

**Procedure**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  In the **Actions** column of the target node, choose **More** > **Workbench Remote Connection**.
    

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  In the **Actions** column of the target node, choose **More** > **VNC Remote Connection**, and follow the page prompts to complete identity authentication.
    

## **Log on to the administrative container**

### **Preparations**

-   For **new node pools**, you must configure the logon mode as **Key Pair**. For instructions, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    
    For **existing node pools**, [bind an SSH key pair](/help/en/ecs/user-guide/bind-an-ssh-key-pair-to-an-instance#concept-zzt-nl1-ydb) to the running instance.
    
-   The [ECS Cloud Assistant](/help/en/ecs/user-guide/overview-10#concept-qg3-5dx-ydb) is installed. For details, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#concept-wtg-32x-ydb).
    
-   Port 22 is allowed by the security group. For more information, see [Manage security group rules](/help/en/ecs/user-guide/manage-security-group-rules).
    
-   Log on to the ECS instance using **Secret-free login**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4963538271/p771073.png)
    

### **Enter the host environment**

1.  Log on to [ECS console - ECS Cloud Assistant](https://ecs.console.alibabacloud.com/cloud-assistant/region) and click **Create/Run Command** in the upper-right corner of the **ECS Cloud Assistant** page. For more information, see [Create and run commands](/help/en/ecs/user-guide/use-the-immediate-execution-feature#task-2406329).
    
2.  In the **Create Command** panel, run the following command to start the administrative container:
    
    ```
    sudo lifseacli container start
    ```
    
    Expected output:![启动运维容器.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3591410461/p358161.png)
    
    The output shows that the Cloud Assistant successfully started the administrative container.
    
3.  Run the following command to log on to the administrative container using the specified private key from a terminal that supports SSH commands:
    
    **Note**
    
    -   Replace `<ssh-private-key.pem>` with the private key from the key pair bound to the instance, and `<instance-ip>` with the IP address of the instance.
        
    -   Alternatively, you can log on directly as admin using Workbench. The private key is from the key pair that is bound to the instance. Make sure that port 22 on the instance is open.
        
    
    ```
    ssh -i <ssh-private-key.pem> admin@<instance-ip>
    ```
    
    The administrative container interface after successful logon is shown below. The root file system of the host is mounted in read-only mode to the `/.lifsea/rootfs` directory of the administrative container. You can directly obtain system information and configurations from this directory.
    
    ![登录运维容器.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3591410461/p358260.png)
    
4.  Run the following command to log on to the host from the administrative container:
    
    ```
    sudo superman
    ```
    
5.  Run the `ls` command to list the available system commands.
    
    Expected output:![进入目录.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5530716271/p358281.png)
    
    The output indicates that the host offers a limited set of system commands.
    

### **Administrative container operations**

After logging on to the host environment, use the `exit` command to exit the host environment. Run the `exit` command once more to exit the administrative container. It's still running and can be reconnected using SSH. Additionally, you can run commands to stop, restart, and delete the administrative container.

**Operation**

**Description**

Stop

```
sudo lifseacli container stop
```

Restart

If you bind a new key pair to or unbind the key pair from the instance after starting the administrative container, you must restart the container for the change to take effect.

```
sudo lifseacli container restart
```

Delete

```
sudo lifseacli container rm
```

**Important**

Deleting the administrative container also removes installed software and saved files. Restarting the container initializes a new environment. Do not save important data in the administrative container.

Query status

```
sudo lifseacli container status
```

### **FAQ**

#### **What do I do if the error** `**UNPROTECTED PRIVATE KEY FILE!**` **occurs when I connect to the administrative container?**

**Description**

An error message is shown in the following figure:

![FAQ.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3591410461/p358304.png)

**Cause**

The private key file is accessible by other users.

**Solution**

Run the `chmod 400 <ssh-private-key.pem>` command to adjust the permissions to 400 on the private key file. Replace `<ssh-private-key.pem>` with the name of your private key file.

## **Reference**

[ContainerOS image release notes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-release-record)
