Create cloud-based IDE instances for AI development with JupyterLab or VS Code, configure resources, storage, and networking options.

## Quick start

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/), select a **Region**, click **Workspaces** in the left navigation pane, and select your workspace.
    
2.  Click **Interactive Modeling (DSW)** > **Create Instance**. Configure these parameters (leave others at defaults, see [Console parameters](#title-ji9-re9-88x) for all parameters):
    
    **Parameter**
    
    **Description**
    
    **Instance Name**
    
    Example: `dsw_test`.
    
    **Resource Type**
    
    Select **Public Resources** (pay-as-you-go billing).
    
    **Instance Type**
    
    Example: `ecs.gn7i-c8g1.2xlarge` (1 × A10 GPU, 8 vCPUs, 30 GiB memory).
    
    > If out of stock, select another instance type.
    
    **Image config**
    
    Select **Alibaba Cloud Image**, then search for and select `modelscope:1.31.0-pytorch2.8.0-gpu-py311-cu124-ubuntu22.04` (Python 3.11, CUDA 12.4).
    
    > ModelScope images offer broad compatibility and comprehensive third-party libraries.
    
    Click **OK**. When the status changes to **Running**, the instance is ready.
    
    > If the instance fails to start, see [Instance start failures](#80786c8c1b2qs).
    
3.  Find the instance on the list page and click **Open** in the **Actions** column to open the IDE.
    
    For more instance operations, see [Access and manage DSW instances in the console](/help/en/pai/user-guide/access-dsw-instance).
    

**Warning**

-   DSW instances with public resources start incurring runtime charges as soon as they enter the **running** state, **even if you don't open WebIDE or run code**. **Stop or delete the instance when not in use to avoid charges**.
    
-   The system disk for this instance is a free cloud disk. **If the instance remains stopped for more than 15 consecutive days, data on the cloud disk is permanently deleted and cannot be recovered.** Back up important data or [mount](/help/en/pai/user-guide/read-and-write-dataset-data) cloud storage to transfer data.
    

## Common configuration scenarios

A basic instance might not meet all AI development needs. Configure additional features for specific use cases:

**Use case**

**Need**

**Configuration**

**Documentation**

Persistently store code and data

System disks provide temporary storage only. Data is deleted when instances are deleted or remain stopped for extended periods. Save important files for long-term use or share data between instances.

Mount cloud storage via **Dataset Mounting** or **Mount storage** (OSS, NAS, or CPFS) to a folder on the instance.

[Mount a dataset, OSS bucket, NAS file system, or CPFS file system](/help/en/pai/user-guide/read-and-write-dataset-data)

Increase public network download speed

DSW instances use a shared gateway by default. Bandwidth limitations might cause slow downloads for large files.

Configure a **VPC** and use a **Private Gateway**. Requires a NAT Gateway and EIP for the VPC.

[Use a dedicated gateway to increase the public network access speed](/help/en/pai/user-guide/configure-a-dsw-instance-to-access-the-internet-through-a-private-nat-gateway)

Develop remotely using SSH

Develop with local tools like VSCode or PyCharm instead of web-based IDE.

Select **Enable SSH**, enter your **SSH Public Key**, and select **Access over Internet**. Associate an existing NAT Gateway and EIP.

[Remote connection: Direct SSH connection](/help/en/pai/user-guide/dsw-direct-connection)

Access web services within the instance

Publish a web application running inside the instance to the public internet.

Add a **Custom Services**, configure the service port, and enable public network access. Add an inbound rule to the security group for that port.

[Access services in an instance over the Internet](/help/en/pai/user-guide/custom-services-access-configurations)

## Console parameters

### Basic information

**Parameter**

**Description**

**Instance Name**

Enter a unique descriptive name for the instance.

**Tag**

Add tags based on business needs for search, location, batch operations, and billing.

### Resource information

**Parameter**

**Description**

**Resource Type**

-   **Public Resources**: Pay-as-you-go billing. **Cannot be converted to subscription.**
    
    **Note**
    
    **GPU Limit**: Each Alibaba Cloud account is limited to two GPUs per region for public resources. To request a quota increase, submit a ticket.
    
    -   **Instance Type**: Choose GPU, CPU, or free trial resources. See [Instance families](/help/en/ecs/user-guide/overview-of-instance-families) for specifications.
        
    -   **Bidding Purchase**: Use [spot instances](/help/en/pai/user-guide/bid-for-dsw-instance) to reduce costs. If **No preemptible instances in stock** appears, try another instance type.
        
        Supported only in China (Hangzhou), China (Shanghai), China (Beijing), China (Ulanqab), China (Shenzhen), China (Guangzhou), Japan (Tokyo), and Singapore regions.
        
    -   **Driver Settings**: For GPU instances with public resources, set the driver version. The dropdown shows major versions supported by the GPU type.
        
-   **Resource Quota**: Prepaid subscription billing
    
    -   **Resource Quota**: Select general computing or Lingjun resources. If none are available, click **Associate Resource Quota** to configure.
        
    -   **Instance Type**: Set the GPU, CPU, and memory as needed.
        
    -   **Priority**: The priority level ranges from 1 to 9. A larger value indicates a higher priority.
        
    -   **CPU Affinity**: Binds container or pod processes to specific CPU cores. Reduces CPU cache misses and context switches, improving CPU utilization and application performance. Suitable for performance-sensitive and real-time scenarios. Supported only in China (Beijing) and China (Shenzhen) regions.
        
    -   **Driver Settings**: For Lingjun resource quotas, set the driver version for the instance. The dropdown shows major versions supported by the GPU type.
        

### Environment information

**Parameter**

**Description**

**Image Configuration**

Supported image types:

-   **Alibaba Cloud Image**: PAI provides images for popular frameworks and Python versions. For example, `pytorch:2.4.1-gpu-py312-cu124-ubuntu22.04` includes PyTorch 2.4.1, runs on GPU, and includes Python 3.12 with CUDA 12.4.
    
    Search by keyword to find images with specific dependencies. For example, searching `cu124` returns images using CUDA 12.4.
    
-   **Custom Image**: Use custom images added to PAI. Image repository must allow public pulls or be stored in [Container Registry (ACR)](/help/en/acr/product-overview/what-is-container-registry). See [Custom images](/help/en/pai/user-guide/view-and-add-images) for more information.
    
-   **Image Address**: Configure the URL of a custom or official image accessible on the public network.
    
    -   To speed up image pulls, see [Image acceleration](/help/en/pai/user-guide/use-accelerated-image-in-pai).
        
    -   For private image URLs, click **enter the username and password** and configure credentials.
        

**System Disk**

Stores files during development. When **Resource Type** is **Public Resources**, or when **Resource Quota** uses subscription general computing resources (CPU cores ≥ 2 and memory ≥ 4 GB, or with GPU), each instance gets a free 100 GiB disk. Disk can be expanded at console-listed prices.

**Warning**

-   If using only the free quota, disk contents are deleted if stopped for more than 15 consecutive days.
    
-   After expansion, the entire disk (free and paid portions) is no longer released after 15 days stopped. However, billing for expanded portions continues until deletion.
    
-   Downgrading disk size after expansion is not supported. Expand as needed.
    
-   When an instance is deleted, the cloud disk is also deleted. Back up necessary data before deletion.
    

For permanent storage, configure **Dataset Mounting** or **Mount storage**.

**Dataset Mounting**

Stores datasets for reading or persists files created during development. The following two dataset types are supported:

-   **Custom Dataset**: [Create a custom dataset](/help/en/pai/user-guide/create-and-manage-datasets#title-4d2-ipn-vww) to store your training data files. You can set it to read-only and select a specific version.
    
-   **Public Dataset**: PAI provides pre-built public datasets, which can only be mounted in read-only mode.
    

**Mount Path**: The path where the dataset is mounted in the DSW instance, for example, `/mnt/data`. Access the dataset from your code using this path.

**Note**

-   The mount paths for multiple datasets cannot be the same.
    
-   If you configure a [CPFS](/help/en/cpfs/what-is-cpfs) type dataset, you must configure the network settings and ensure the selected VPC is the same as the one used by CPFS. Otherwise, the DSW instance will fail to create.
    
-   When the resource group is a dedicated resource group, the first dataset must be a NAS type, and it will be mounted to both your specified path and the default DSW working directory `/mnt/workspace/`.
    

For more information about mounting, see [Mount a dataset, OSS bucket, NAS file system, or CPFS file system](/help/en/pai/user-guide/read-and-write-dataset-data).

**Mount storage**

Use storage mounting to access datasets or persist files.

-   Supported types: [Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss), [General-purpose NAS file system](/help/en/nas/product-overview/what-is-nas), [Extreme NAS file system](/help/en/nas/product-overview/what-is-nas), [CPFS](/help/en/cpfs/what-is-cpfs), and [AI-CPFS](/help/en/cpfs/bmcpfs/product-overview/what-is-cpfs-for-lingjun).
    
-   **Mount Path**: The path where the dataset is mounted to DSW, for example, `/mnt/data`. You can retrieve the dataset from this path in your code.
    

For more information about mounting, see [Mount a dataset, OSS bucket, NAS file system, or CPFS file system](/help/en/pai/user-guide/read-and-write-dataset-data).

**Working Directory**

The startup directory for JupyterLab and the Web IDE. The default is `/mnt/workspace`.

**Expand for more configurations**

**Parameter**

**Description**

**Custom Startup Script**

Customizes the environment or performs initialization tasks during instance startup. The custom script runs after the image and resources are ready but before development applications like JupyterLab and Web IDE start.

**Note**

-   **Timeout is 3 minutes**: The custom script increases instance startup time and has a timeout of 3 minutes. Do not perform long-running tasks like image downloads in the script.
    
-   **View script run logs**: After the instance starts, find the logs generated by the custom script in the `/var/log/user-command/` directory.
    

**Environment Variable**

Used for the main container startup, system processes, and user processes. Add custom environment variables or override system defaults as needed.

**Note**: Do not modify the following environment variables:

```
# Modification will not take effect
USER_NAME # Will be overwritten by the logic in the service

# System variables that are not recommended for modification. Modification may affect normal use.
JUPYTER_NAME: Constructed from instance information by default. Can be used to modify the jupyterlab URL access path.
JUPYTER_COMMAND: Jupyter startup command. Default is set to lab to start jupyterlab.
JUPYTER_SERVER_ADDR: JupyterLab service listening address. Default is 0.0.0.0.
JUPYTER_SERVER_PORT: JupyterLab service listening port. Default is 8088.
JUPYTER_SERVER_AUTH: JupyterLab access password. Default is empty.
JUPYTER_SERVER_ROOT: Jupyter working directory. Priority is lower than WORKSPACE_DIR.
CODE_SERVER_ADDR: code-server service listening address. Default is 0.0.0.0.
CODE_SERVER_PORT: code-server service listening port. Default is 8082.
CODE_SERVER_AUTH: code-server access password. Default is empty.
WORKSPACE_DIR: The system sets this environment variable based on the working directory parameter set when the instance is created. It can change the startup directory of jupyter and code-server. An error may occur if the path does not exist.
```

**Advanced Configurations**

Adjusts certain secure kernel parameters required by your services. T**his is currently supported only for Lingjun resource group instances**. For parameter details, see the table below.

**Advanced configuration parameter**

**Default value**

**Description**

**Notes**

VmMaxMapCount

65530

Sets the maximum number of memory map areas a process can have. For example, it can be set to 1024000.

Values below 65530 do not take effect. Excessively high values can lead to wasted memory resources.

### Network information

**Parameter**

**Description**

**VPC Settings**

This parameter is available only when **Resource Type** is set to **Public Resources**.

To use a DSW instance within a Virtual Private Cloud (VPC), create a VPC in the same region as the DSW instance and configure this parameter. You also need to configure a **vSwitch** and a **Security Group**. For details on configuration policies for different scenarios, see [Network configuration](/help/en/pai/user-guide/dsw-network-configuration/).

**vSwitch**

This parameter can be configured when a VPC is configured. A vSwitch is a subnet within a VPC. Your DSW instance and other cloud resources connect to the vSwitch.

**Security Group**

This parameter is required when a VPC is configured. A security group is a virtual firewall for a DSW instance. It controls all inbound and outbound network traffic.

**Internet Access Gateway**

The following configuration methods are supported:

-   **Public Gateway**: The network bandwidth is limited. During periods of high user concurrency or when downloading large files, the network speed might be insufficient.
    
-   **Private Gateway**: To solve the bandwidth limitations of the public gateway, create a public NAT Gateway in the DSW instance's VPC, bind an EIP, and configure SNAT entries. For more information, see [Improve public network access speed with a dedicated gateway](/help/en/pai/user-guide/configure-a-dsw-instance-to-access-the-internet-through-a-private-nat-gateway).
    

The following parameters are available only when a CPFS dataset is mounted:

-   **Enable All Options**: Disabled by default. The system will disable VPCs that are not connected to the CPFS dataset.
    

**Note**

If a CPFS dataset is mounted, you must configure a VPC, and the selected VPC must be the same as the one used by CPFS.

**Extended CIDR Block**

This parameter can be configured after you configure a **vSwitch**. If the number of available IP addresses in the VPC is insufficient for your growing business, or if the initial network planning resulted in an address shortage, you can use an extended CIDR block to expand the VPC address space. For more information, see [Use a secondary CIDR block](/help/en/vpc/vpc-and-vswitch#ee83206b26nsr).

### Access configuration

**Parameter**

**Description**

**Enable SSH**

For remote connection to the instance. This option is available only after you select a VPC. When enabled, a **Custom Services** named SSH appears. If you use a custom image, ensure that `sshd` is installed.

**SSH Public Key**

You can configure this parameter after turning on the **SSH Configuration** switch.

**Note**

To support both VPC and public network login, add public keys from multiple clients. Add each public key on a new line. You can add up to 10 public keys.

**Custom Services**

Used to configure SSH remote access or [access services in an instance over the Internet](/help/en/pai/user-guide/custom-services-access-configurations).

-   **Listener Port**: The port that the service running in the DSW instance listens on.
    
-   **Service Access Method**:
    
    -   **Access over VPC**: This access method is supported by default. You can access services in DSW from other terminals within the VPC, such as an ECS instance.
        
    -   **Access over Internet**: Select this option to add public network access. You must also configure a **NAT Gateway** and an **EIP**.
        
-   **Internet Access Port**: The port that allows access from the public network.
    

**Create Private Zone in VPC**

Creates an internal authoritative domain (PrivateZone). Use this domain within the VPC to access the instance's SSH service or other custom services, which avoids the inconvenience of a changing instance IP address. Creating a PrivateZone domain incurs charges. For more information, see [Alibaba Cloud DNS Product Billing](/help/en/dns/product-billing).

**NAT Gateway**

When accessing a service in the instance from the public network, this gateway maps public requests (`EIP:Port`) to the private DSW instance (`Private IP:Port`).

**EIP**

Provides a public IP address for accessing services in the instance from the public network.

### Roles and permissions

**Parameter**

**Description**

**Visibility**

Choose **Visible to the Instance Owner** or **Visible to Current Workspace**.

**Instance Owner**

Only the workspace administrator can change the instance owner.

**Show More**

**Parameter**

**Description**

**Instance RAM Role**

Associate a RAM role with the instance to grant it access to other cloud resources. This method uses temporary credentials from STS to access other cloud resources, which avoids using long-term AccessKeys and reduces the risk of key exposure.  
The following options are available:  

-   **Default Roles of PAI**: Has permissions to access internal PAI products, [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute), and OSS. Temporary access credentials issued based on the default PAI role have permissions equivalent to the DSW instance owner when accessing internal PAI products and MaxCompute tables. When accessing OSS, it can only access the default storage path bucket configured for the current workspace.
    
-   **Custom Roles**: Configure a custom role for customized or more fine-grained permission management.
    
-   **Does Not Associate Role**: Select this if you want to access other cloud products directly using an AccessKey.
    

For more information on configuring instance RAM roles, see [Configure an instance RAM role for a DSW instance](/help/en/pai/user-guide/configure-dsw-instance-ram-roles).

## Troubleshooting

### Instance start failures

Click to expand

#### **Q:** How can I diagnose and fix DSW instance startup failures?

First, check the **Events** tab on the instance details page for specific error messages. Common errors and their solutions are listed below.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2671317371/p890901.png)

The following are common errors and their solutions:

-   Your requested resource type \[ecs.\*\*\*\*\*\*\] is not enough currently, please try other regions or other resource types
    
    -   **Cause:** The selected instance type is unavailable in the current region.
        
    -   **Solution:** Try creating the instance again later, or switch to a different instance type or region.
        
    
-   Your resource usage has exceeded the default limitation. Please contact us via ticket system to raise the limitation.
    
    -   **Cause:** Your account has a default quota that limits instance specifications (e.g., a maximum of two GPUs per region per creation). This error occurs if your selection exceeds this limit.
        
    -   **Solution:** To request a quota increase, submit a ticket.
        
    
-   Sales of this resource are temporarily suspended in the specified zone. We recommend that you use the multi-zone creation function to avoid the risk of insufficient resource.
    
    -   **Cause:** Resource sales are temporarily suspended in the selected Availability Zone (AZ).
        
    -   **Soluition:**
        
        -   Switch to another region.
            
        -   Select a different instance type.
            
        -   Try to start the instance during off-peak hours.
            
    
-   CommodityInstanceNotAvailableError: Commodity instance has been released due to prolonged arrears at past. Please create a new instance for use
    
    -   **Cause:** The system automatically released the instance due to prolonged payment arrears.
        
    -   **Solution:** You must create a new DSW instance.
        
    
-   `The charge of current ECI instance has been stopped, but the related resources are still being cleaned`. or `The cluster resources are fully utilized. Please try later or other regions.` or `Create ECI failed because the specified instance is out of stock.`
    
    -   **Cause:** The compute resources in the current region are temporarily sold out or fully utilized. Free trial resources are shared, so this is more common during peak hours.
        
    -   **Solution:**
        
        -   Switch to a different region.
            
        -   Change the instance type. You must first stop the pending instance before changing its specification.
            
        -   Try again during off-peak hours (e.g., outside of business hours).
            
        -   If none of the preceding methods resolve the issue, contact your account manager.
            
    
-   back-off 10s restarting failed container=dsw-notebook pod
    
    -   **Cause:** This error indicates your system disk is full. You can check disk usage in the DSW terminal:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5555447371/p902069.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5198746371/p902070.png)
        
    -   **Solution:** Expand the system disk. Go to the instance details page and use the **Change Configuration** feature.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0722113271/p822504.png)
        
        **Important**
        
        An expanded system disk incurs continuous billing even when the instance is stopped. To stop all billing, delete the instance. Back up all necessary data before deletion.
        
    
-   the available zone with vSwitch is out of stock
    
    -   **Cause:** If a VPC was configured at creation, the associated vSwitch locks resource search to a single availability zone, which may have a resource shortage.
        
    -   **Solution:**
        
        1.  Create a vSwitch and DSW instance in a different zone.
            
        2.  Select a different DSW instance type.
            
    
-   Startup failed with the message "Workspace member not found"
    
    -   **Cause:** Your account is not a member of the target workspace.
        
    -   **Solution:** Contact the Workspace Administrator to add your account as a member.
        
    
-   failed to create containerd container: failed to prepare layer from archive: failed to validate archive quota ...
    
    -   **Cause:** The image used for the instance is too large for the current system disk size.
        
    -   **Solution:** Expand the system disk using the **Change Settings** feature on the instance details page. This incurs additional storage charges.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8018475571/p1000103.png)
        
    
-   **Overdue payments**
    
    -   DSW instances cannot be created if your account has an overdue balance. Log in to the **Billing Management** console at [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/) to check your account status.
        
    

#### **Q:** What should I do when resources are out of stock or quotas are insufficient?

**Common errors:**

-   "Your requested resource type \[ecs.\*\*\*\*\*\*\] is currently unavailable" (Out of stock).
    
-   "Your resource usage has exceeded the default limitation" (The two-GPU limit per region has been exceeded).
    
-   "The cluster resources are fully utilized" (All available computing resources are in use).
    

**Causes:**

-   Insufficient public resource inventory
    
    -   Public resources are shared among multiple users. The inventory may be low during peak hours.
        
    -   Specific GPU types, such as high-end GPUs, are more likely to be out of stock.
        
    -   Each account is limited to two GPUs per region.
        
-   Insufficient dedicated resource quota
    
    -   The purchased dedicated resource quota is exhausted.
        
    -   Ineffective quota allocation results in an insufficient quota for a workspace.
        

**Solutions**:

-   **Change specification:** If the selected GPU type is out of stock, select a different one.
    
-   **Switch region:** In the upper-left corner of the PAI console, switch to another region and create an instance there.
    
-   **Increase GPU quota:** To use more than two GPUs from public resources, submit a ticket.
    
-   **Purchase dedicated resources:** To guarantee resource availability, purchase a dedicated resource quota. For more information, see [Create a resource group and purchase resources](/help/en/pai/user-guide/create-and-manage-general-training-resources/) and [Manage resource quotas](/help/en/pai/user-guide/manage-resource-quotas).
    

#### **Q:** Can I run a Python file when a DSW instance starts?

Use the **Custom Startup Script** option. Set this when creating a new instance or by modifying an existing one via the **Change Settings** panel.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3937636571/p1002090.png)

The script runs after the instance's underlying resources are ready but before development tools like JupyterLab or WebIDE are started. This is useful for environment customization or initialization tasks.

**Note**

-   **3-Minute Timeout:** The script has a 3-minute timeout. Avoid long-running tasks like downloading large files.
    
-   **Log location:** After startup, find the script's execution logs in the `/var/log/user-command/` directory inside the instance.
    

#### **Q:** How do I find my DSW instance if it's not visible in the console?

Your instance may be in a different region or workspace. Use the dropdown menus on the PAI-DSW console page to switch between available regions and workspaces.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0514085571/p997308.png)

#### **Q:** Why is my DSW page blank or the Notebook/Terminal unresponsive?

These issues are typically caused by your local browser or network environment. Try the following steps in order:

1.  Clear your browser's cache and cookies, then reload the page.
    
2.  Open the DSW page in your browser's incognito or private mode.
    
3.  Switch your network. For example, if you are on a corporate network, try a mobile hotspot to rule out firewall issues.
    
4.  Try a different browser, such as Chrome or Firefox.
    

#### **Q:** What happens to my data on a DSW instance's Cloud Disk when I stop, restart, or modify the instance?

Data persistence depends on the action taken and whether the instance uses a **Cloud Disk** or **Temporary Storage** for its system disk. This answer applies to instances with a **Cloud Disk system disk**.

-   **Stopping the instance:** Data may be lost.
    
    -   If the Cloud Disk was **expanded** or the instance is stopped for **fewer than 15 days**, data is preserved.
        
    -   If the Cloud Disk was **not expanded** and the instance remains stopped for **more than 15 days**, the system permanently erases all data.
        
-   **Restarting the instance:** Data is retained. All files and installed packages on the system disk are preserved.
    
-   **Changing instance specification (CPU/GPU/memory):** Data is retained.
    
-   **Changing instance image:** Data on the system disk may be lost. The system may reset disk contents. Data on mounted storage (OSS or NAS) is unaffected. **Always back up system disk data before changing the image.**
    

For instances using **Temporary Storage**, all data on the system disk is permanently deleted upon stopping, restarting, or any configuration change.

#### **Q:** Can I recover a DSW instance from a public resource group that was auto-released after 15 days?

No. Instances created from public resources with an un-expanded Cloud Disk are automatically and permanently deleted if they remain stopped for more than 15 consecutive days. Data cannot be recovered.

### Instance stop and release issues

Click to expand

#### **Q:** What is the correct way to release a DSW instance and its resources?

On the DSW console, either **Stop** or **Delete** an instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4901123571/p871079.png)

-   **Stop:** Halts compute billing but preserves the instance for later use.
    
-   **Delete:** Permanently removes the instance and all its resources, stopping all billing.
    

**Important:** If the system disk was expanded, it continues to incur storage charges even when the instance is stopped. To stop all charges, **delete** the instance.

#### **Q:** How do I find my DSW instance if it's not visible in the console?

Your instance may be in a different region or workspace. Use the dropdown menus on the PAI-DSW console page to switch between available regions and workspaces.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4901123571/p988210.png)

#### **Q:** Do I need to manually release a free trial resource package?

No. Free trial resource packages expire automatically and do not need to be manually stopped or released.

#### **Q:** What is the difference between stopping and deleting a DSW instance, and how do I stop all billing?

To completely stop all billing for a DSW instance, **delete** it.

-   **Stop:** Releases compute resources (CPU/GPU) and pauses billing for them. However, if the system disk was expanded, **storage charges continue**.
    
-   **Delete:** Permanently removes the instance and all resources, including the system disk. All billing stops completely.
    

**How to choose:**

-   Use **Stop** to preserve the instance environment and data for later use.
    
-   Use **Delete** to avoid all future charges. **Always back up data before deleting.**
    

#### **Q:** What should I do if my DSW instance is stuck in the 'Stopping' or 'Deleting' state?

This can happen if processes inside the instance are not terminating correctly or if high memory usage prevents the instance from responding.

**Solution:** Wait a few minutes and refresh the page. The system is designed to eventually terminate the instance safely. The status should update to "Stopped" or the instance will be removed from the list if deleted.

#### **Q:** Is my data preserved when I stop or delete a DSW instance?

It depends on the action and the type of system disk your instance uses.

-   **Stopping an instance:**
    
    -   **Cloud Disk system disk:** Data is preserved if the disk was expanded or if the instance is stopped for less than 15 days. If the disk was not expanded and the instance remains stopped for more than 15 days, all data is permanently erased.
        
    -   **Temporary Storage** **system disk:** All data is permanently erased upon stopping.
        
-   **Deleting an instance:**  
    Regardless of the disk type, all data on the system disk is **permanently erased and cannot be recovered**.  
      
    

**Recommendation:** To ensure data persistence, save important files to mounted storage (OSS or NAS). Always back up data before deleting an instance.

#### **Q:** Why did my DSW instance shut down automatically while it was running?

The instance was likely stopped by the **Idle Auto-shutdown** policy. This feature automatically stops an instance if CPU and GPU utilization remains below a set threshold for a specified period (e.g., 3 hours). It is enabled by default on free trial instances to conserve resources.

**How to disable or modify the policy:**

-   **Manual stop:** Manually stop the instance when not in use to ensure resource savings. The auto-shutdown policy is not guaranteed to trigger every time.
    
-   **Modify policy:** To run long-term tasks, modify or disable this policy:
    
    **Modify the DSW auto-shutdown policy**
    
    1.  Navigate to your workspace details page and go to **Configure Workspace** > **Auto-stop Settings**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8827183571/p991147.png)
        
    2.  In the DSW configuration section, modify the shutdown policy or add your instance's name to the exclusion list to prevent automatic stopping.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8844277671/p1041840.png)
        
    

#### **Q:** Why am I still being billed or seeing a 'Running' status after stopping/deleting all my DSW instances?

This usually happens for one of three reasons:

1.  **"Running" status refers to a resource package:** The "Running" status you see on a billing or free trial page may refer to an active resource package (e.g., "250 compute hours/month"), not an actual DSW instance. The package remains active until it expires.
    
2.  **Expanded system disk charges:** Stopping an instance only pauses compute charges. If the system disk was expanded, storage charges continue. To stop these charges, **delete** the instance.
    
3.  **Billing data delay:** Charges shown may be for usage _before_ stopping or deleting the instance due to billing system delays.
