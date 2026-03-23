To collect server logs for a Simple Log Service (SLS) project, you must first install the Logtail client on the target server. This topic describes how to install, run, upgrade, and uninstall Logtail on a target server.

## **Overview**

Logtail can be used in two types of scenarios based on the server type:

-   [Host scenarios](#95ec750b4blsn): These apply to traditional computing environments, such as physical servers and Elastic Compute Service (ECS) instances.
    
-   [Container scenarios](#4c5ba22190185): These apply to business scenarios where applications are deployed on the Kubernetes containerization platform.
    

Choose the appropriate method based on your server environment. The procedures and configuration requirements differ between scenarios. For hybrid environments, you must complete the installation and configuration for each environment separately.

## **Host scenarios**

### **Install Logtail**

Install Logtail using one-click installation or manual installation. One-click installation is supported only if you use an ECS instance that is in the same region and belongs to the same Alibaba Cloud account as the project. Otherwise, you must manually install Logtail.

## One-click installation

SLS lets you install Logtail on ECS instances with a single click. This feature uses CloudOps Orchestration Service (OOS) and eliminates the need to log on to an ECS instance to perform manual installation steps. If you log on with an Alibaba Cloud account, you have all the required permissions by default and can perform the operations directly.

If you log on with a Resource Access Management (RAM) user, contact your Alibaba Cloud account to grant the permissions to operate OOS resources. The Alibaba Cloud account can create a RAM user and grant permissions to you. For more information, see [Create a RAM user and grant permissions](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#undefined).

-   System permissions:
    
    -   AliyunOOSFullAccess: Grants full permissions to manage CloudOps Orchestration Service (OOS).
        
    -   AliyunECSFullAccess: Grants permissions to manage ECS.
        
-   Custom policies: If you have high data security requirements, [create custom permission policies](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m) for fine-grained authorization. The following code shows an access policy for operating OOS resources.
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "ecs:DescribeTagKeys",
                    "ecs:DescribeTags",
                    "ecs:DescribeInstances",
                    "ecs:DescribeInvocationResults",
                    "ecs:RunCommand",
                    "ecs:DescribeInvocations",
                    "ecs:InvokeCommand"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "oos:ListTemplates",
                    "oos:StartExecution",
                    "oos:ListExecutions",
                    "oos:GetExecutionTemplate",
                    "oos:ListExecutionLogs",
                    "oos:ListTaskExecutions"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    

Follow these steps to install Logtail on an ECS instance with a single click and create and configure a machine group at the same time.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). Click the project that is used to manage log resources to view the list of logstores. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9751085571/p986961.png) icon before the name of the destination logstore to expand it. Then, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9751085571/p986962.png) icon that appears after **Data Collection**. In the dialog box that appears, select a text log collection template and click **Integrate Now**.
    
    > SLS provides various text log templates, such as regular expression, single-line, and multi-line templates. These templates differ only in their log parsing plug-ins. You can also add or remove log parsing plug-ins within a template. Select a template based on the characteristics of your logs or select any text log template and then configure the plug-ins as needed.
    
2.  On the **Machine Group Configurations** page, set **Scenario** to **Servers** and **Installation Environment** to **ECS** for the installation environment, and then click **Create Machine Group**.
    
3.  In the **Create Machine Group** panel, select one or more ECS instances that are in the same region as the project. Click **Install and Create Machine Group**. Wait for the installation to complete, specify a **Name** for the machine group, and then click **OK**.
    
    > If the installation fails or remains in the waiting state, check whether the ECS instance is in the same region as the project.
    
4.  After the installation, go to the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9751085571/p986960.png)Resources** > **Machine Groups** page. Click the new machine group. In the **Machine Group Configurations** > **Machine Group Status** section, check the **Heartbeat** status. If the status is OK, the machine group is created.
    

## Manual installation

Select a download and installation method from the following table.

**Note**

In the sample code, `${region_id}` is the region where the SLS project is located. Replace it as needed. For more information, see [Regions and endpoints](/help/en/sls/sls-supported-regions1#title-noy-ano-5fm). For example, the `${region_id}` for China (Hangzhou) is `cn-hangzhou`.

**Important**

-   If you use a machine with low specifications or an old operating system, you may encounter compatibility issues when you install Logtail 2.0, which can prevent the software from running correctly. We recommend that you download version [1.8.7](https://logtail-release-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/linux64/1.8.7/logtail.sh) and run the `./logtail.sh install ${region_id} -v 1.8.7` command to install it.
    

**Host type**

**Architecture**

**Download method**

**Installation method**

**Linux**

-   Supports the following versions of Linux x86-64 (64-bit) servers.
    
    -   Alibaba Cloud Linux 2 and 3
        
    -   Anolis OS 7 and 8
        
    -   CentOS Linux 6, 7, and 8
        
    -   Debian GNU/Linux 8, 9, 10, 11, and 12
        
    -   Red Hat Enterprise Linux 6, 7, 8, and 9
        
    -   openSUSE 15.1, 15.2, and 42.3
        
    -   SUSE Linux Enterprise Server 11, 12, and 15
        
    -   Ubuntu 14.04, 16.04, 18.04, 20.04, 22.04, and 24.0
        
    -   Other Linux operating systems based on glibc 2.5 or later (Logtail 2.0 or later requires glibc 2.6 or later)
        
    -   CPU must support the sse4\_2 and avx instruction sets (for Logtail 2.0 or later)
        
-   Supports the following versions of Linux ARM (64-bit) servers.
    
    -   Alibaba Cloud Linux 3.2 ARM
        
    -   Anolis OS 8.2 ARM or later
        
    -   CentOS 8.4 ARM
        
    -   Debian 11.2 and 12.2 ARM
        
    -   Ubuntu 20.04, 22.04, and 24.04 ARM
        
    -   CPU architecture must be at least ARMv8.2-A (for iLogtail 2.0 or later)
        

ARM

For hosts with an internet connection, download directly:

```
# Download using the internal network
wget http://logtail-release-${region_id}.oss-${region_id}-internal.aliyuncs.com/linux64/logtail.sh -O logtail.sh; 
# Download using the internet
wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail.sh -O logtail.sh; 
```

Select an installation command based on your [network type](/help/en/sls/select-a-network-type#title-hjo-dyx-san):

```
# To install using the internet
chmod +x logtail.sh; ./logtail.sh install ${region_id}-internet
# If your servers are in on-premises data centers or from cloud vendors outside China, data transfer over the internet may cause high latency and instability. We recommend that you use transfer acceleration.
chmod +x logtail.sh; ./logtail.sh install ${region_id}-acceleration
# To install using the internal network, which is suitable for on-premises data centers with internal network access
chmod +x logtail.sh; ./logtail.sh install ${region_id}
```

x86-64

ARM

For offline hosts, first download the installation script and package on a server with an internet connection: `wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail.sh; wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/aarch64/logtail-linux64.tar.gz`

Copy the installation script and package to the server where you want to install Logtail. Then, select an installation command based on your [network type](/help/en/sls/select-a-network-type#title-hjo-dyx-san):

```
# To install using the internet
chmod +x logtail.sh; ./logtail.sh install-local ${region_id}-internet
# If your servers are in on-premises data centers or from cloud vendors outside China, data transfer over the internet may cause high latency and instability. We recommend that you use transfer acceleration.
chmod +x logtail.sh; ./logtail.sh install-local ${region_id}-acceleration
```

x86-64

For offline hosts, first download the installation script and package on a server with an internet connection: `wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail.sh; wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail-linux64.tar.gz`

**Windows**

**Note**

-   For Microsoft Windows Server 2008 and Microsoft Windows 7, install Logtail on their x86 or x86-64 versions.
    
-   For other Windows operating systems, install Logtail only on their x86-64 versions.
    

-   Microsoft Windows Server 2008, 2012, 2016, 2019, 2022, and 2025
    
-   Microsoft Windows 7
    
-   Microsoft Windows 10
    
-   Microsoft Windows Server Version 1909
    
-   Microsoft Windows Server Version 2004
    

32-bit

China regions: [Logtail 32-bit installation package](https://logtail-release.oss-cn-hangzhou.aliyuncs.com/win/win32/1.6.1.0/logtail_installer.zip)

Unzip the installation package. Run Windows PowerShell as an administrator and go to the `logtail_installer` directory, which is the directory where you unzipped the package. Select an installation command based on your [network type](/help/en/sls/select-a-network-type#title-hjo-dyx-san):

```
# To install using the internet
.\logtail_installer.exe install ${region_id}-internet
# If your servers are in on-premises data centers or from cloud vendors outside China, data transfer over the internet may cause high latency and instability. We recommend that you use transfer acceleration.
.\logtail_installer.exe install ${region_id}-acceleration
```

Regions outside China: [Logtail 32-bit installation package](https://logtail-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/win/win32/1.6.1.0/logtail_installer.zip)

64-bit

China regions: [Logtail 64-bit installation package](https://logtail-release.oss-cn-hangzhou.aliyuncs.com/win/win64/1.6.1.0/logtail_installer.zip)

Regions outside China: [Logtail 64-bit installation package](https://logtail-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/win/win64/1.6.1.0/logtail_installer.zip)

### **Batch install Logtail**

Use one of the following methods to install Logtail in batches.

-   OOS orchestration: This method is suitable for scenarios with permission requirements. It supports high concurrency and is ideal for large-scale batch operations. For more information, see [Use OOS to install or upgrade Logtail in batches](/help/en/sls/best-practice-use-oos-to-batch-install-or-upgrade-logtail).
    
-   ECS Cloud Assistant: This method is easy to use. Run commands to execute temporary tasks. The procedure is as follows.
    

1.  Go to [ECS console - ECS Cloud Assistant](https://ecs.console.alibabacloud.com/cloud-assistant/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  In the upper-right corner of the **ECS Cloud Assistant** page, click **Create/Run Command**.
    
4.  In the **Create Command** panel, enter the installation command in the **Command content** field. This example uses the internet installation method. For more installation commands, see [Install Logtail](#7c991da88a9td).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6569530571/p975035.png)
    
    The installation command used here is as follows:
    
    ```
    #!/bin/bash
    region_id='cn-hangzhou'
    wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail.sh -O logtail.sh
    chmod +x logtail.sh
    ./logtail.sh install ${region_id}-internet
    ```
    
    **Important**
    
    After you install Logtail, if you switch the network type of the ECS instance from classic network to VPC, you must update the Logtail configuration. For more information, see [How do I update the machine group configuration after I switch an ECS instance from the classic network to a VPC?](/help/en/sls/update-a-logtail-configuration-after-i-switch-the-network-type-to-vpc#concept-vcg-wpw-dgb).
    
5.  In the **Select Instance** section, confirm that the agent status of the target instance is **Normal**. If the status is not Normal, see [Install the Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent) to install Cloud Assistant. Select the target instance and click **Run**. The execution status then becomes **Successful**. If the execution fails, see [View execution results and fix common issues](/help/en/ecs/user-guide/check-execution-results-and-troubleshoot-common-issues#concept-jf4-btt-q2b).
    

### **Start and stop Logtail**

## Linux

-   Start Logtail
    
    ```
    sudo /etc/init.d/ilogtaild start
    ```
    
-   Stop Logtail
    
    ```
    sudo /etc/init.d/ilogtaild stop
    ```
    

## Windows

1.  Log on to the target server.
    
2.  Choose **Start** > **Control Panel** > **Administrative Tools** > **Services**.
    
3.  In the **Services** dialog box, select the corresponding service.
    
    -   For version 0.x.x.x, select the LogtailWorker service.
        
    -   For version 1.0.0.0 or later, select the LogtailDaemon service.
        
    
4.  Right-click and select the desired operation, such as **Start**, **Stop**, or **Restart**.
    

### **Check the Logtail status and version**

## Linux

### Check the Logtail status

Run the `sudo /etc/init.d/ilogtaild status` command to check the Logtail status. If the system returns `ilogtail is running`, Logtail is running. If the Logtail status shows that it is not running, uninstall and then reinstall it.

### Check the Logtail version

Logtail stores its version information in the `logtail_version` field of the `/usr/local/ilogtail/app_info.json` file. Run the following command to view the Logtail version information.

```
cat /usr/local/ilogtail/app_info.json
```

The following result is returned:

```
{
   "logtail_version" : "0.16.30",
}
```

## Windows

### **Check the Logtail status**

Check the Logtail status to determine whether Logtail is installed on the target server.

1.  Open the Run window, enter `services.msc`, and open the Services window.
    
2.  Check the running status of the LogtailDaemon service (for Logtail 1.0.0.0 or later) or the LogtailWorker service (for Logtail 0.x.x.x).
    
    If it shows as running, Logtail is running.
    

### **Check the Logtail version**

Check the Logtail version in the `logtail_version` field of the app\_info.json file in the installation path.

For example, the following content indicates that the Logtail version is 1.0.0.0.

```
{
    "logtail_version" : "1.0.0.0"
}
```

### **Upgrade Logtail**

## Linux

**Important**

-   To upgrade Logtail, use the `upgrade` command. If you use the `install` command, it performs an overwrite installation and the original configuration will be lost.
    
-   During the upgrade, Logtail stops briefly. After the upgrade is complete, Logtail starts automatically and is registered as a startup item. The upgrade overwrites only necessary files. Configuration files and checkpoint files are retained to ensure that no logs are lost during the upgrade.
    

**Note**

In the sample code, `${region_id}` is the region where the SLS project is located. Replace it as needed. For more information, see [Regions and endpoints](/help/en/sls/sls-supported-regions1#title-noy-ano-5fm). For example, the `${region_id}` for China (Hangzhou) is `cn-hangzhou`.

Select a Logtail upgrade method from the following table.

**Operating system**

**Download method**

**Upgrade method**

ARM and x86-64

For hosts with an internet connection: `wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail.sh -O logtail.sh;`

After the download is complete, run the upgrade command: `chmod +x logtail.sh; sudo ./logtail.sh upgrade;`

ARM

For offline hosts, first download the installation script and package on a server with an internet connection:

`wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail.sh; wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/aarch64/logtail-linux64.tar.gz;`

Copy the installation script and package to the server where you want to upgrade Logtail. Then, run the following upgrade command: `chmod +x logtail.sh; ./logtail.sh upgrade-local;`

x86-64

For offline hosts, first download the installation script and package on a server with an internet connection: `wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail.sh; wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail-linux64.tar.gz;`

If the following information is displayed, the upgrade is successful.

```
stop successfully
Stop logtail successfully.
Upgrading logtail files ...
Upgrade logtail files successfully.
Starting logtail ...
ilogtail is running
Upgrade logtail successfully.
{
        "UUID" : "XXXXXXXX-XXXX",
        "compiler" : "GCC 9.3.1",
        "hostname" : "xxx",
        "instance_id" : "XXXXXXXX-XXXX_172.16.0.75_1730950372",
        "ip" : "172.16.0.75",
        "logtail_version" : "2.0.8",
        "os" : "Linux; 5.10.134-13.an8.x86_64; #1 SMP Mon Jan 9 10:39:46 CST 2023; x86_64",
        "update_time" : "2024-11-07 11:32:52"
}
```

## Windows

The upgrade procedure is the same as the installation procedure. Download and unzip the latest installation package, and then follow the steps to install it. For more information, see [Install Logtail](#7c991da88a9td).

**Important**

-   Upgrading is equivalent to automatically uninstalling and reinstalling. The contents of your original installation directory will be deleted. Back up your data before upgrading.
    
-   On a 64-bit Windows operating system, if you want to upgrade a 32-bit Logtail to a 64-bit version, you must first uninstall the 32-bit Logtail and then reinstall the 64-bit Logtail.
    

### **Uninstall Logtail**

## Linux

Obtain the `${region_id}` that corresponds to the region of your Simple Log Service project. Replace `${region_id}` and run the following command to uninstall Logtail.

**Important**

For the `${region_id}` of each region, see [Regions and endpoints](/help/en/sls/sls-supported-regions1#title-noy-ano-5fm). For example, the `${region_id}` for China (Hangzhou) is `cn-hangzhou`.

```
wget http://logtail-release-${region_id}.oss-${region_id}.aliyuncs.com/linux64/logtail.sh -O logtail.sh; chmod +x logtail.sh; ./logtail.sh uninstall
```

## Windows

Run Windows PowerShell or Command Prompt as an administrator. Go to the `logtail_installer` directory, which is the directory where you unzipped the installation package, and run the following command.

```
.\logtail_installer.exe uninstall
```

After a successful uninstallation, the Logtail installation directory is deleted. However, some configuration files are retained in the C:\\LogtailData directory. You can manually delete them as needed. The remaining information includes the following:

-   checkpoint: Stores the checkpoint information for all Logtail plug-ins. This file is created only after you use a Logtail plug-in.
    
-   user\_config.d: The directory where local collection configurations are stored.
    
    Files ending with .json are treated as collection configurations. The format is similar to /usr/local/ilogtail/user\_log\_config.json.
    
-   logtail\_check\_point: Stores the checkpoint information for the main part of Logtail.
    
-   users: Stores the user identity files that you have configured.
    

## **Container scenarios**

### **Install the Logtail component**

If you use an ACK cluster and the cluster belongs to the same Alibaba Cloud account as SLS, follow the instructions for ACK clusters. If you use a self-managed cluster, or if the ACK cluster and SLS belong to different Alibaba Cloud accounts, follow the instructions for self-managed clusters.

## Installation on ACK clusters

**Important**

This operation applies only to ACK dedicated clusters and ACK managed clusters.

### **Install the Logtail component on an existing ACK cluster**

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com).
    
2.  On the **Clusters** page, find the target cluster and choose **More** > **Operations** > **Manage Components** in the Actions column.
    
3.  On the **Logs and Monitoring** tab, find **logtail-ds** and click **Install**.
    

After the installation is complete, SLS automatically creates a project named `k8s-log-${your_k8s_cluster_id}`.

### Install the Logtail component when creating a new ACK cluster

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com).
    
2.  In the navigation pane on the left, click **Clusters**.
    
3.  On the **Clusters** page, click **Create Kubernetes Cluster**.
    
4.  Select **Enable Log Service**.
    
    **Note**
    
    This section describes only the key steps to enable SLS. For more information about how to create a cluster, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
    When you select **Enable Log Service**, a prompt to create a project appears. For more information about the organization of logs in SLS, see [Projects](/help/en/sls/project#concept-t3x-hqn-vdb). Create a project in one of the following two ways.
    
    -   **Select Project**
        
        Select an existing project to manage the collected container logs.
        
        ![安装logtail组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2322899361/p343126.png)
        
    -   **Create Project**
        
        SLS automatically creates a project to manage the collected container logs. `ClusterID` is the unique identifier of your new Kubernetes cluster.
        
        ![安装logtail组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2322899361/p343128.png)
        
    

After the installation is complete, the following SLS resources are automatically created in the selected project.

**Resource type**

**Resource name**

**Purpose**

**Example**

Machine group

k8s-group-${your\_k8s\_cluster\_id}

The machine group for the logtail-daemonset, mainly used for log collection scenarios.

k8s-group-my-cluster-123

k8s-group-${your\_k8s\_cluster\_id}-statefulset

The machine group for the logtail-statefulset, mainly used for metric collection scenarios.

k8s-group-my-cluster-123-statefulset

k8s-group-${your\_k8s\_cluster\_id}-singleton

A single-instance machine group, mainly used for some single-instance collection configurations.

k8s-group-my-cluster-123-singleton

Logstore

config-operation-log

Used to store the logs of the alibaba-log-controller in the Logtail component. We recommend that you do not create collection configurations in this logstore. You can delete this logstore. After deletion, the runtime logs of the alibaba-log-controller will no longer be collected. The billing for this logstore is the same as for a normal logstore. For more information, see [Pay-by-data-written billing items](/help/en/sls/billing-items-in-the-pay-per-data-write-mode).

config-operation-log

## Installation on self-managed clusters

1.  Log on to your Kubernetes cluster. Select a command based on the region to download Logtail and its dependent components.
    
    ```
    # China regions
    wget https://logtail-release-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/kubernetes/0.5.5/alibaba-cloud-log-all.tgz; tar xvf alibaba-cloud-log-all.tgz; chmod 744 ./alibaba-cloud-log-all/k8s-custom-install.sh
    # Regions outside China
    wget https://logtail-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/kubernetes/0.5.5/alibaba-cloud-log-all.tgz; tar xvf alibaba-cloud-log-all.tgz; chmod 744 ./alibaba-cloud-log-all/k8s-custom-install.sh
    ```
    
2.  Modify the `./alibaba-cloud-log-all/values.yaml` configuration file.
    
    **Metric description**
    
    ## values.yaml
    
    ```
    # ===================== Required fields =====================
    # The name of the destination Project.
    SlsProjectName: 
    # The region where the Project is located.
    Region: 
    # The ID of the Alibaba Cloud account that owns the Project. Enclose the ID in double quotation marks ("").
    AliUid: "11099"
    # The AccessKey ID and AccessKey secret of the Alibaba Cloud account or RAM user. The AliyunLogFullAccess permission is required.
    AccessKeyID: 
    AccessKeySercret: 
    # The custom cluster ID. The name can contain only uppercase letters, lowercase letters, digits, and hyphens (-).
    ClusterID: 
    # ==========================================================
    # Whether to enable metric collection components. Optional values: true, false. Default value: true.
    SlsMonitoring: true
    # The network type. Optional values: Internet, Intranet. Default value: Internet.
    Net: Internet
    # Whether the container runtime is containerd. Optional values: true, false. Default value: false.
    SLS_CONTAINERD_USED: true
    ```
    
    `**SlsProjectName**`
    
    The name of the project to which Logtail will upload logs.
    
    `**Region**`
    
    The ID of the region where your project is located. For example, the region ID for China (Hangzhou) is `cn-hangzhou`. For more information, see [Regions and endpoints](/help/en/sls/sls-supported-regions1#reference-2084283).
    
    `**AliUid**`
    
    The ID of the Alibaba Cloud account that owns the project. Enclose the ID in double quotation marks (""), for example, `AliUid: "11**99"`. For information about how to obtain the ID, see [Obtain the ID of the Alibaba Cloud account that owns Simple Log Service](/help/en/sls/configure-a-user-identifier#section-dzm-o12-6id).
    
    `**AccessKeyID**`  
    
    The AccessKey ID of the Alibaba Cloud account that owns the project. We recommend that you use the AccessKey of a RAM user and grant the AliyunLogFullAccess permission to the RAM user. For more information, see [Create a RAM user and grant permissions](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#task-xsk-ttc-ry).
    
    `**AccessKeySecret**`
    
    The AccessKey secret of the Alibaba Cloud account that owns the project. We recommend that you use the AccessKey of a RAM user and grant the AliyunLogFullAccess permission to the RAM user. For more information, see [Create a RAM user and grant permissions](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#task-xsk-ttc-ry).
    
    `**ClusterID**`
    
    The custom cluster ID. The name can contain only uppercase letters, lowercase letters, digits, and hyphens (-). This parameter corresponds to `${your_k8s_cluster_id}` in subsequent operations. Do not configure the same cluster ID for different Kubernetes clusters.
    
    `**SlsMonitoring**`
    
    A switch to enable cluster metric data collection. The options are:
    
    -   true (default): Enable.
        
    -   false: Disable.
        
    
    `**Net**`
    
    The network type for Logtail data transfer. If your cluster does not have access to the Alibaba Cloud internal network, use the internet. The options are:
    
    -   Internet (default): Internet.
        
    -   Intranet: Internal network.
        
    
    `**SLS_CONTAINERD_USED**`
    
    Specifies whether the container runtime is containerd. The options are:
    
    -   true: Yes.
        
    -   false (default): No.
        
    
    In a self-managed Kubernetes cluster that uses containerd as the container runtime, if this parameter is not enabled, Logtail may not collect logs.
    
3.  Install Logtail and its dependent components.
    
    **Note**
    
    Run the `echo "$(uname -s | tr '[:upper:]' '[:lower:]')-$(uname -m)"` command to query your host's `OS-architecture`. The `k8s-custom-install.sh` script supports the following `OS-architecture` combinations: linux-386, linux-amd64, linux-arm, linux-arm64, linux-ppc64le, linux-s390x, and darwin-amd64.
    
    ```
    bash k8s-custom-install.sh; kubectl apply -R -f result
    ```
    

After the installation is complete, the following SLS resources are automatically created in the project. If the creation fails, carefully check the modified `values.yaml` file.

**Resource type**

**Resource name**

**Purpose**

**Example**

Machine group

k8s-group-${your\_k8s\_cluster\_id}

The machine group for the logtail-daemonset, mainly used for log collection scenarios.

k8s-group-my-cluster-123

k8s-group-${your\_k8s\_cluster\_id}-statefulset

The machine group for the logtail-statefulset, mainly used for metric collection scenarios.

k8s-group-my-cluster-123-statefulset

k8s-group-${your\_k8s\_cluster\_id}-singleton

A single-instance machine group, mainly used for some single-instance collection configurations.

k8s-group-my-cluster-123-singleton

Logstore

config-operation-log

Used to store the logs of the alibaba-log-controller in the Logtail component. We recommend that you do not create collection configurations in this logstore. You can delete this logstore. After deletion, the runtime logs of the alibaba-log-controller will no longer be collected. The billing for this logstore is the same as for a normal logstore. For more information, see [Pay-by-data-written billing items](/help/en/sls/billing-items-in-the-pay-per-data-write-mode).

None

### **Check the Logtail status, version, and IP address**

-   Run the following command to check the Logtail status.
    
    ```
    kubectl get po -n kube-system | grep logtail
    ```
    
    The following result is returned:
    
    ```
    NAME            READY     STATUS    RESTARTS   AGE
    logtail-ds-gb92k   1/1       Running   0          2h
    logtail-ds-wm7lw   1/1       Running   0          4d
    ```
    
-   Run the following command to view information, such as the Logtail version number and IP address.
    
    ```
    kubectl exec logtail-ds-gb92k -n kube-system cat /usr/local/ilogtail/app_info.json
    ```
    
    The following result is returned:
    
    ```
    {
       "hostname" : "logtail-ds-gb92k",
       "instance_id" : "0EBB2B0E-0A3B-11E8-B0CE-0A58AC140402_172.20.4.2_1517810940",
       "ip" : "192.0.2.0",
       "logtail_version" : "0.16.2",
       "os" : "Linux; 3.10.0-693.2.2.el7.x86_64; #1 SMP Tue Sep 12 22:26:13 UTC 2017; x86_64",
       "update_time" : "2021-02-05 06:09:01"
    }
    ```
    

### **Upgrade and roll back Logtail**

1.  Before upgrading, back up the description files related to the Logtail component.
    
    **Important**
    
    If significant collection latency exists before the upgrade, the upgrade may cause a small amount of log loss.
    
    ```
    kubectl get ds -n kube-system logtail-ds -o yaml > logtail-ds.yaml
    kubectl get deployment -n kube-system alibaba-log-controller -o yaml > alibaba-log-controller.yaml
    kubectl get crd aliyunlogconfigs.log.alibabacloud.com -o yaml > aliyunlogconfigs-crd.yaml
    kubectl get cm -n kube-system alibaba-log-configuration -o yaml > alibaba-log-configuration.yaml
    kubectl get aliyunlogconfigs --all-namespaces -o yaml > aliyunlogconfigs-cr.yaml
    ```
    
2.  Select an upgrade method based on your cluster type. If you use an ACK cluster and the cluster belongs to the same Alibaba Cloud account as SLS, follow the instructions for ACK clusters. If you use a self-managed cluster, or if the ACK cluster and SLS belong to different Alibaba Cloud accounts, follow the instructions for self-managed clusters.
    
    ## Upgrade on ACK clusters
    
    We recommend that you use the automatic upgrade method. If you have modified parameters, such as environment variables, in the logtail-ds DaemonSet or the alibaba-log-controller deployment, use the manual upgrade method to prevent your changes from being reset.
    
    #### Automatic upgrade
    
    **Important**
    
    Automatic upgrade will reset the configurations that you manually modified in logtail-ds and alibaba-log-controller.
    
    1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com).
        
    
    On the **Clusters** page, find the target cluster and choose **More** > **Operations** > **Manage Components** in the Actions column.
    
    3.  On the **Logs and Monitoring** tab, find **logtail-ds** and click **Upgrade**.
        
    4.  In the **Upgrade Component** dialog box, click **OK**.
        
        **Important**
        
        If you cannot upgrade to the latest version of Logtail, your Kubernetes cluster version may be too old. Upgrade your Kubernetes cluster first or use the manual upgrade method.
        
        After you perform the upgrade, view the status of the logtail-ds pods in the ACK console. If all logtail-ds pods are in the running state, the upgrade is successful.
        
    
    #### **Manual upgrade**
    
    **Important**
    
    Manual upgrade does not update your configuration based on the latest Logtail component. Some feature optimizations may not be available.
    
    Manual upgrade includes upgrading logtail-ds and alibaba-log-controller. Typically, you only need to upgrade logtail-ds to obtain the collection capabilities provided by the new Logtail version. When you need to obtain the collection capabilities of the new Logtail CRD method, you need to upgrade alibaba-log-controller. The following steps use logtail-ds as an example.
    
    1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com).
        
    
    On the **Clusters** page, find the target cluster and choose **More** > **Operations** > **Manage Components** in the Actions column.
    
    3.  Choose **Workloads** > **DaemonSets**.
        
        **Note**
        
        To upgrade alibaba-log-controller, choose **Workloads** > **Deployments**. Then, in the **kube-system** namespace, find alibaba-log-controller and complete the upgrade.
        
    4.  Set **Namespace** to **kube-system**, and then click **Edit** in the row of **logtail-ds**.
        
    5.  Check whether the following environment variables exist.
        
        If the ALIYUN\_LOGTAIL\_CONFIG, ALIYUN\_LOGTAIL\_USER\_ID, and ALIYUN\_LOGTAIL\_USER\_DEFINED\_ID environment variables do not exist, your Logtail version may be too old. Upgrade Logtail.
        
    6.  Click **Select Image Tag** next to **Image Tag**.
        
    7.  In the **Image Tag** dialog box, click the latest version, and then click **OK**.
        
    8.  On the right side of the page, click **Update**.
        
        After you perform the upgrade, view the status of the logtail-ds pods in the ACK console. If all logtail-ds pods are in the Running state, the upgrade is successful.
        
    
    ## Upgrade on self-managed clusters
    
    **Note**
    
    We recommend that you upgrade by installing the latest Logtail component. If you only update the image version of some components, such as logtail-ds or alibaba-log-controller, the upgrade may fail.
    
    Reinstall the Logtail component to complete the automatic upgrade. For more information, see [Install the Logtail component](#c55a7a01d3y8f).
    
3.  To roll back to a specific version, follow these steps.
    
    **Note**
    
    The YAML files backed up before the upgrade contain redundant information that you need to manually delete before using them to restore the Logtail configuration. You can use the kubectl-neat tool to do this. The fields to be deleted are metadata.creationTimestamp, metadata.generation, metadata.resourceVersion, metadata.uid, and status.
    
    1.  Determine whether to keep the new Logtail configuration after the upgrade based on your business needs.
        
        If you do not need to keep it, delete the new Logtail configuration.
        
    2.  Delete the redundant information from the backup files.
        
        ```
        cat logtail-ds.yaml | kubectl-neat > neat-logtail-ds.yaml
        cat alibaba-log-controller.yaml | kubectl-neat > neat-alibaba-log-controller.yaml
        cat aliyunlogconfigs-crd.yaml | kubectl-neat > neat-aliyunlogconfigs-crd.yaml
        cat alibaba-log-configuration.yaml | kubectl-neat > neat-alibaba-log-configuration.yaml
        cat aliyunlogconfigs-cr.yaml | kubectl-neat > neat-aliyunlogconfigs-cr.yaml
        ```
        
    3.  Apply the streamlined backup files to restore the Logtail configuration.
        
        ```
        kubectl apply -f neat-logtail-ds.yaml
        kubectl apply -f neat-alibaba-log-controller.yaml
        kubectl apply -f neat-aliyunlogconfigs-crd.yaml
        kubectl apply -f neat-alibaba-log-configuration.yaml
        kubectl apply -f neat-aliyunlogconfigs-cr.yaml
        ```
        

### **Uninstall Logtail**

Select an uninstallation method based on your cluster type. If you use an ACK cluster and the cluster belongs to the same Alibaba Cloud account as SLS, follow the instructions for ACK clusters. If you use a self-managed cluster, or if the ACK cluster and SLS belong to different Alibaba Cloud accounts, follow the instructions for self-managed clusters.

## Uninstallation from ACK clusters

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com).
    

On the **Clusters** page, find the target cluster and choose **More** > **Operations** > **Manage Components** in the Actions column.

3.  On the **Logs and Monitoring** tab, find **logtail-ds** and click **Uninstall**.
    
4.  Follow the on-screen prompts and click **OK** to complete the uninstallation.
    

## Uninstallation from self-managed clusters

### **How do I uninstall installed components such as logtail-ds and alibaba-log-controller?**

Run `kubectl delete -R -f result` to uninstall installed components such as logtail-ds and alibaba-log-controller.

**Important**

This command recursively deletes all resources in the result directory. Use it with caution if the directory contains other resources.

### **Cluster FAQ**

#### **How do I use one SLS Project for multiple Kubernetes clusters?**

If you want to collect container logs from multiple clusters into the same SLS project, set the installation parameters for the other clusters' SLS components to be the same as those you used when you first installed the components.

#### **How do I view Logtail logs?**

Logtail logs are stored in the /usr/local/ilogtail/ directory within the Logtail container. The file names are ilogtail.LOG and logtail\_plugin.LOG.

The standard output in the Logtail container is not for reference. You can ignore the following standard output content.

```
start umount useless mount points, /shm$|/merged$|/mqueue$
umount: /logtail_host/var/lib/docker/overlay2/3fd0043af174cb0273c3c7869500fbe2bdb95d13b1e110172ef57fe840c82155/merged: must be superuser to unmount
umount: /logtail_host/var/lib/docker/overlay2/d5b10aa19399992755de1f85d25009528daa749c1bf8c16edff44beab6e69718/merged: must be superuser to unmount
umount: /logtail_host/var/lib/docker/overlay2/5c3125daddacedec29df72ad0c52fac800cd56c6e880dc4e8a640b1e16c22dbe/merged: must be superuser to unmount
......
xargs: umount: exited with status 255; aborting
umount done
start logtail
ilogtail is running
logtail status:
ilogtail is running
```

#### **How do I check the status of SLS components in a Kubernetes cluster?**

Run the following commands to check.

```
kubectl get deploy alibaba-log-controller -n kube-system
kubectl get ds logtail-ds -n kube-system
```

#### **What do I do if the alibaba-log-controller fails to start?**

Confirm that you have followed these installation instructions.

-   Run the installation command on the master node of the Kubernetes cluster.
    
-   Enter your cluster ID as a parameter in the installation command.
    

If the installation fails because of these issues, run the `kubectl delete -f deploy` command to delete the generated installation template and then run the installation command again.

#### **How do I check the status of the Logtail-ds DaemonSet in a Kubernetes cluster?**

Run the `kubectl get ds -n kube-system` command to check the status of the Logtail-ds DaemonSet.

**Note**

The namespace where the Logtail container is located is kube-system by default.

#### **How do I view the Logtail runtime logs?**

Logtail runtime logs are saved in the /usr/local/ilogtail/ directory. The file name is ilogtail.LOG. Rotated files are compressed and stored as ilogtail.LOG.x.gz. For example, run the following command to view the logs.

```
kubectl exec logtail-ds-gb92k -n kube-system tail /usr/local/ilogtail/ilogtail.LOG
```

The result is as follows:

```
[2018-02-05 06:09:02.168693] [INFO] [9] [build/release64/sls/ilogtail/LogtailPlugin.cpp:104] logtail plugin Resume:start
[2018-02-05 06:09:02.168807] [INFO] [9] [build/release64/sls/ilogtail/LogtailPlugin.cpp:106] logtail plugin Resume:success
[2018-02-05 06:09:02.168822] [INFO] [9] [build/release64/sls/ilogtail/EventDispatcher.cpp:369] start add existed check point events, size:0
[2018-02-05 06:09:02.168827] [INFO] [9] [build/release64/sls/ilogtail/EventDispatcher.cpp:511] add existed check point events, size:0 cache size:0 event size:0 success count:0
```

#### **How do I restart Logtail in a specific pod?**

1.  Stop Logtail.
    
    `logtail-ds-gb92k` is the container name and `kube-system` is the namespace. Replace them as needed.
    
    ```
    kubectl exec logtail-ds-gb92k -n kube-system /etc/init.d/ilogtaild stop
    ```
    
2.  The following result indicates that Logtail is stopped.
    
    ```
    kill process Name: ilogtail pid: 7
    kill process Name: ilogtail pid: 9
    stop success
    ```
    
3.  Start Logtail.
    
    `logtail-ds-gb92k` is the container name and `kube-system` is the namespace. Replace them as needed.
    
    ```
    kubectl exec logtail-ds-gb92k -n kube-system /etc/init.d/ilogtaild start
    ```
    

The following result indicates that Logtail is started.

```
ilogtail is running 
```
