To use Realtime Compute for Apache Flink, you need to activate a workspace. Each workspace has isolated computing resources and a separate development console. This topic describes how to activate a Flink workspace and provides important notes for the process.

## Prerequisites

You have an Alibaba Cloud account. If you do not have one, you must first register an account.

If you use an identity such as a Resource Access Management (RAM) user or a RAM role, you must have the required permissions to access the Realtime Compute for Apache Flink console. For more information, see [Permission management](/help/en/flink/realtime-flink/user-guide/permission-management/).

## **Notes**

-   Creating a Flink workspace involves other Alibaba Cloud services, such as VPC, OSS, and monitoring-related services. For more information about the fees, see [Billing items](/help/en/flink/realtime-flink/product-overview/billable-items#section-apy-nmt-ip6).
    
-   Realtime Compute for Apache Flink uses a storage-compute disaggregation architecture when you attach an OSS Bucket, note the following:
    
    -   If you have not activated OSS, see [Activate OSS](/help/en/oss/getting-started/activate-oss#task-njz-hf4-tdb) to activate it. The OSS bucket must be in the same region as the Flink workspace and must use the **Standard** storage class.
        
    -   Do not set any policies, such as versioning or compliance retention, on the attached OSS bucket. This prevents Flink jobs from running correctly.
        
        If you enable versioning for your OSS bucket, an excessive number of delete markers can slow down List operations. Therefore, if you enable versioning, you should configure a lifecycle rule to periodically clean up delete markers and unneeded historical versions. This practice reduces storage costs and improves OSS performance. For more information about how to clean up delete markers, see [Use a lifecycle rule based on the last modified time to reduce storage costs when versioning is used](/help/en/oss/user-guide/configure-lifecycle-rules-to-manage-object-versions#concept-2514466).
        
        **Warning**
        
        If versioning is disabled for your OSS bucket and you need to set a lifecycle rule, do not set a purge policy for Flink-related folders. These folders include artifacts, flink-jobs, flink-savepoints, sql-artifacts, plan, and flink-sessionclusters. A purge policy might delete Flink-related files and cause Flink jobs to fail.
        
    -   When you activate a workspace and set the storage type to an OSS bucket, you must ensure that the attached bucket is of the **Zone-redundant Storage** class to ensure zone-redundant high availability for the Flink workspace. For more information, see [Switch the storage redundancy type of a bucket](/help/en/oss/user-guide/converting-storage-redundancy-types). Otherwise, if a zone becomes unavailable, state data cannot be accessed, and Flink cannot guarantee stateful job startup.
        
        **Note**
        
        If a workspace contains both zone-redundant high-availability projects and single-zone projects, directly upgrading the attached bucket to zone-redundant storage may increase storage costs. To balance cost and reliability, you can activate a new workspace specifically for zone-redundant high availability and attach a zone-redundant OSS bucket to it. For more information about OSS storage fees, see [Storage fees](/help/en/oss/storage-fees).
        
    -   If the storage type is OSS Bucket, make sure to **disable** the [Malicious File Detection SDK](/help/en/security-center/user-guide/sdk-for-malicious-file-detection/#2a3124877e5ew) in Security Center. Enabling this detection can trigger OSS traffic control, which causes Flink jobs to become stuck in the initialization state.
        

## Activate a subscription workspace

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV).
    
2.  Next to ****Stream Compute Flink****, click **Buy Now**.
    
3.  If this is your first purchase, you must grant Flink the permissions to access the required cloud resources.
    
    Click **Go to RAM for Authorization**. On the **Resource Access Authorization** page, click **Agree to Authorization**. Flink is then granted the required permissions to access cloud resources.
    
4.  On the purchase page, specify the configurations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1236852471/p925927.png)
    
    **Category**
    
    **Configuration item**
    
    **Description**
    
    **Example**
    
    Basic configurations
    
    **Billing method**
    
    Set this to **Subscription**. For more information about billing, see [Subscription](/help/en/flink/realtime-flink/product-overview/subscription).
    
    Subscription
    
    **Duration**
    
    Select the subscription duration.
    
    1 Month
    
    **Auto-renewal**
    
    If you do not select **Enable**, you can later modify the renewal policy in the [Alibaba Cloud Management Console](https://home.console.alibabacloud.com) by choosing **Expenses** > **Renewal Management**.
    
    \-
    
    **Processor architecture**
    
    The Intel x86 and YiTian ARM architectures are available to meet your requirements.
    
    **Note**
    
    Currently, the YiTian ARM architecture is supported only for subscription workspaces in the China (Beijing), China (Ulanqab), and China (Hangzhou) regions. The actual options on the console prevail.
    
    Intel x86 architecture
    
    **Region**
    
    We recommend that you select the same **region** as your upstream and downstream storage.
    
    Beijing
    
    Network configurations
    
    **Deployment mode**
    
    This option is available only for some **subscription** workspaces that use the Intel x86 architecture. The supported **deployment modes** are as follows:
    
    -   **Single zone** (cost-effective): Flink automatically allocates the optimal compute zone in the selected region and connects the resource inventory of the zone. This enables imperceptible resource scheduling across zones and improves elastic scaling.
        
    -   **Cross-zone** (high business availability): This mode provides zone-redundant high availability. When the zone where a cross-zone project job is running fails, the job is automatically rescheduled to another stable zone in the same region to resume. This effectively prevents service interruptions caused by single-zone failures and ensures job continuity and high availability.
        
        **Important**
        
        -   To ensure end-to-end high availability, you must make sure that your upstream and downstream systems are also highly available.
            
        -   If you do not set **Deployment Mode** to **Cross-zone** during activation, you can enable zone-redundant high availability later using other methods. However, you must ensure that the workspace has sufficient cross-zone CU resources. For more information, see Methods 2 and 3 in [Zone-redundant high availability](/help/en/flink/realtime-flink/user-guide/high-availability-zone-disaster-recovery).
            
        
    
    \-
    
    **CU information**
    
    -   Deployment mode is **Single Zone**: You only need to configure **Single Zone** compute resources.
        
    -   If the deployment mode is **Cross-zone**, you can select or deselect **Enable Single-zone Hybrid Purchase** as needed.
        
        -   If you clear this option, you only need to configure **cross-zone** compute resources.
            
        -   If you select this option, you must set the **Compute Resource Quota** for both **single-zone** and **cross-zone** resources.
            
    
    **Note**
    
    Each Realtime Compute for Apache Flink development console and its necessary components require an additional 2 CUs of management resources. These resources are configured automatically. For more information, see [Billing items](/help/en/flink/realtime-flink/product-overview/billable-items).
    
    \-
    
    **VPC**
    
    Select a VPC in the corresponding region. You cannot change the VPC after the workspace is activated. To create a VPC, see [Create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx).
    
    -   If the target upstream and downstream storage is in a VPC, the Flink workspace must be in the same VPC.
        
    -   Only the 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8 standard private CIDR blocks and their subnets are supported.
        
    
    flink-test-vpc
    
    **vSwitch**
    
    If **Deployment Mode** is set to **Cross-zone**, you must select two vSwitches in different zones.
    
    Each workspace requires two to three IP addresses. You must select at least one vSwitch for each zone. Plan your CIDR blocks based on the scale of your Flink jobs.
    
    **Note**
    
    -   Only created vSwitches that are in the target VPC and in zones supported by Flink are displayed. You can [modify the vSwitches](/help/en/flink/realtime-flink/user-guide/modify-a-vswitch) after activation.
        
    -   **The zone of the selected vSwitch is independent of the zone where the job runs.** The vSwitch is used only for network connectivity to ensure that your jobs can access network resources.
        
    -   Do not modify or delete the configurations of these vSwitches. This can affect network connectivity and normal job operation.
        
    
    flinktest
    
    Workspace configuration
    
    **Workspace name**
    
    The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). It cannot end with a hyphen. The name must be 1 to 60 characters in length.
    
    **Important**
    
    The **workspace name** must be globally unique, including across workspaces created by other users. If the name is a duplicate, the system prompts that the **workspace name already exists**. You must change the name. The name cannot be changed after the workspace is activated.
    
    flinktestnamespace
    
    Storage configuration
    
    **OSS storage**
    
    The OSS Bucket is used to store information such as system checkpoints, job snapshots, logs, and JAR packages. For more information about the content stored in each folder of the OSS Bucket, see [File management](/help/en/flink/realtime-flink/user-guide/resource-management).
    
    **Important**
    
    -   When you attach an OSS Bucket, see [Notes](#a420254f2ee9t).
        
    -   If **Deployment Mode** is set to **Cross-zone**, the OSS configuration is verified. Only OSS Buckets of the **Zone-redundant Storage** class are displayed.
        
    -   You cannot change the OSS Bucket after the Flink workspace is created.
        
    
    flink-test-oss
    
    Tags and tag values
    
    A tag consists of a tag key and a tag value. Tags identify cloud resources. They help you classify, search for, and aggregate cloud resources that have the same characteristics from different dimensions. This simplifies resource management. You can manage tags in a centralized manner in [Tag Management](https://resourcemanager.console.alibabacloud.com/tags?spm=a2ctu.28197638.0.0.5b925879AT5jQC).
    
    \-
    
    Monitoring service
    
    **Monitoring service**
    
    You can select **Free Monitoring Service** or **Pay-as-you-go Prometheus Service**. For a comparison of their features, see [Feature comparison between Cloud Monitor and ARMS alerting](/help/en/flink/realtime-flink/user-guide/feature-comparison-between-cloudmonitor-and-arms).
    
    -   Free Monitoring Service: After you create the Flink workspace, Cloud Monitor provides basic monitoring and alerting capabilities. For more information, see [Free trial](/help/en/cms/product-overview/free-quotas).
        
    -   Prometheus Service: After you create the Flink workspace, ARMS is automatically activated to provide commercial Prometheus monitoring and alerting features. For more information about billing, see [Billing of Prometheus Service](/help/en/arms/prometheus-monitoring/product-overview/billing-description/).
        
    
    Free Monitoring Service
    
5.  To activate the service, select **Terms of Service**, click **Buy Now**, and complete the payment.
    
    After the payment is complete, click **Management Console** to view the workspace. Workspace creation is typically complete within **5 to 10 minutes**.
    

## Activate a pay-as-you-go workspace

**Important**

To activate more than 1,000 CUs at a time, you must [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//smartservice.console.alibabacloud.com/%23).

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV).
    
2.  Click **Buy Now** next to **Stream Compute Flink**.
    
3.  (Optional) If this is your first purchase, you must grant Flink the permissions to access the required cloud resources.
    
    Click **Go to RAM for Authorization**. On the **Resource Access Authorization** page, click **Agree to Authorization**. After the authorization is complete, Flink is granted the permissions to access the required cloud resources.
    
    **Note**
    
    If this is not your first purchase, you can skip this step.
    
4.  On the purchase page, specify the configurations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1236852471/p925929.png)
    
    **Category**
    
    **Configuration item**
    
    **Description**
    
    **Example**
    
    Basic configurations
    
    **Billing method**
    
    Set this to **Pay-as-you-go**. For more information about billing, see [Pay-as-you-go](/help/en/flink/realtime-flink/product-overview/pay-as-you-go).
    
    Pay-as-you-go
    
    **Region**
    
    We recommend that you select the same **region** as your upstream and downstream storage.
    
    Beijing
    
    Network configurations
    
    **VPC**
    
    Select a VPC in the corresponding region. You cannot change the VPC after the workspace is activated. To create a VPC, see [Create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx).
    
    -   If the target upstream and downstream storage is in a VPC, the Flink workspace must be in the same VPC.
        
    -   Only the 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8 standard private CIDR blocks and their subnets are supported.
        
    
    flink-test-vpc
    
    **vSwitch**
    
    If **Deployment Mode** is set to **Cross-zone**, you must select two vSwitches in different zones.
    
    Each workspace requires two to three IP addresses. You must select at least one vSwitch for each zone. Plan your CIDR blocks based on the scale of your Flink jobs.
    
    **Note**
    
    -   Only created vSwitches that are in the target VPC and in zones supported by Flink are displayed. You can [modify the vSwitches](/help/en/flink/realtime-flink/user-guide/modify-a-vswitch) after activation.
        
    -   **The zone of the selected vSwitch is independent of the zone where the job runs.** The vSwitch is used only for network connectivity to ensure that your jobs can access network resources.
        
    -   Do not modify or delete the configurations of these vSwitches. This can affect network connectivity and normal job operation.
        
    
    flinktest
    
    Workspace configuration
    
    **Workspace name**
    
    The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). It cannot end with a hyphen. The name must be 1 to 60 characters in length.
    
    **Important**
    
    The **workspace name** must be globally unique, including across workspaces created by other users. If the name is a duplicate, the system prompts that the **workspace name already exists**. You must change the name. The name cannot be changed after the workspace is activated.
    
    flinktestnamespace
    
    Compute resource **Quota Limit**
    
    The default value is 1,000 CUs. You can change this value. The maximum value is 9,999,999.
    
    **Note**
    
    Each Realtime Compute for Apache Flink development console and its necessary components require an additional 2 CUs of management resources. These resources are configured automatically. For more information, see [Billing items](/help/en/flink/realtime-flink/product-overview/billable-items).
    
    100
    
    Storage configuration
    
    **OSS storage**
    
    The OSS Bucket is used to store information such as system checkpoints, job snapshots, logs, and JAR packages. For more information about the content stored in each folder of the OSS Bucket, see [File management](/help/en/flink/realtime-flink/user-guide/resource-management).
    
    **Important**
    
    -   When you attach an OSS Bucket, see [Notes](#a420254f2ee9t).
        
    -   If **Deployment Mode** is set to **Cross-zone**, the OSS configuration is verified. Only OSS Buckets of the **Zone-redundant Storage** class are displayed.
        
    -   You cannot change the OSS Bucket after the Flink workspace is created.
        
    
    flink-test-oss
    
    Tags and tag values
    
    A tag consists of a tag key and a tag value. Tags identify cloud resources. They help you classify, search for, and aggregate cloud resources that have the same characteristics from different dimensions. This simplifies resource management. You can manage tags in a centralized manner in [Tag Management](https://resourcemanager.console.alibabacloud.com/tags?spm=a2ctu.28197638.0.0.5b925879AT5jQC).
    
    \-
    
    Monitoring service
    
    **Monitoring service**
    
    You can select **Free Monitoring Service** or **Pay-as-you-go Prometheus Service**. For a comparison of their features, see [Feature comparison between Cloud Monitor and ARMS alerting](/help/en/flink/realtime-flink/user-guide/feature-comparison-between-cloudmonitor-and-arms).
    
    -   Free Monitoring Service: After you create the Flink workspace, Cloud Monitor provides basic monitoring and alerting capabilities. For more information, see [Free trial](/help/en/cms/product-overview/free-quotas).
        
    -   Prometheus Service: After you create the Flink workspace, ARMS is automatically activated to provide commercial Prometheus monitoring and alerting features. For more information about billing, see [Billing of Prometheus Service](/help/en/arms/prometheus-monitoring/product-overview/billing-description/).
        
    
    Free Monitoring Service
    
5.  To activate the service, select **Terms of Service**, click **Buy Now**, and complete the payment.
    
    After the payment is complete, click **Management Console** to view the workspace. Workspace creation is typically complete within **5 to 10 minutes**.
    

## **What to do next**

After you activate the Flink workspace, you can perform the following operations.

**Feature**

**Operation**

View workspace details

In the Realtime Compute for Apache Flink console, click **More > Workspace Details** for the target workspace to view information such as the workspace name, workspace ID, OSS Bucket, VPC name and ID, vSwitch.

Enable and use elastic computing resources

You can configure elastic computing resources on top of the subscription billing method. This hybrid billing method combines the flexibility of pay-as-you-go with the cost-effectiveness of subscriptions to provide a more optimized billing strategy. For more information, see [Hybrid billing](/help/en/flink/realtime-flink/product-overview/hybrid-pricing).

[Basic Concepts](/help/en/flink/realtime-flink/product-overview/basic-concepts)

You can learn about the hierarchy of the basic concepts of Realtime Compute for Apache Flink. This provides guidance for subsequent operations such as job development, deployment, O&M, and security management.

[Permission management](/help/en/flink/realtime-flink/user-guide/permission-management/)

Identities such as RAM users and RAM roles require RAM permissions (for example, to view and purchase workspaces) and project permissions (for example, for job development and O&M) to access the Flink console.

[Add a project](/help/en/flink/realtime-flink/user-guide/create-and-manage-a-namespace#task-1965113)

A project is the basic unit for managing Flink jobs. All your configurations, jobs, and permissions are managed within a single project. After a workspace is created, a default project is generated. The default project is named `workspace-name-default` for a single-zone project or `workspace-name-default-ha` for a cross-zone project. You can create multiple projects and assign separate resources and permissions to each. This allows for complete resource and permission isolation among multiple tenants using projects.

[Job development](/help/en/flink/realtime-flink/user-guide/job-development/) and [operations management](/help/en/flink/realtime-flink/user-guide/o-and-m-management/)

In the **Actions** column of the target workspace, click **Console** to go to the Realtime Compute for Apache Flink development console. You can develop and perform O&M on jobs.

This product also has a rich set of built-in connectors for upstream and downstream systems. For more information, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors).

[Resource adjustment](/help/en/flink/realtime-flink/user-guide/reconfigure-resources)

You can adjust the resources of workspaces and projects.

[Switch between billing methods](/help/en/flink/product-overview/switch-between-billing-methods/)

You can switch between the pay-as-you-go and subscription billing methods.

[Modify a vSwitch](/help/en/flink/realtime-flink/user-guide/modify-a-vswitch)

You can modify a vSwitch to resolve job startup failures caused by insufficient IP addresses in the vSwitch.

Release resources

Click **More > Release Resources** for the target workspace. After the resources are released, the Flink workspace is no longer billed, and the related ARMS resources are released at the same time.

## **References**

-   [Why is my activated Flink workspace not displayed in the Realtime Compute for Apache Flink console?](/help/en/flink/realtime-flink/support/reference#4a3ce90601sd2)
    
-   [How do I view information such as the workspace ID?](/help/en/flink/realtime-flink/support/reference#section-lpq-5h8-0l9)
    
-   [Can I change the workspace name?](/help/en/flink/realtime-flink/support/reference#a563767c5bg9r)
    
-   [Can I change the VPC and vSwitch?](/help/en/flink/realtime-flink/support/reference#96cba8e742xdx)
