After you enable auto updates for a Container Service for Kubernetes (ACK) managed cluster, the Kubernetes version of the cluster is automatically updated on a regular basis. This simplifies your O&M work. After you configure an auto update policy, the system automatically generates an update schedule in advance, and runs a precheck and updates the control planes of the cluster within the maintenance window of the cluster. This allows you to focus on application development.

## **Limits**

You can enable auto updates only for ACK managed clusters that run Kubernetes 1.20 or later.

## **Benefits of auto updates**

-   ACK stops releasing new features, feature patches, or security patches for ACK managed clusters that run outdated Kubernetes versions. ACK only provides limited technical support for these Kubernetes versions. For more information, see [Risks in outdated Kubernetes versions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/#section-wvf-h9b-563). To ensure security and stability, we recommend that you use the Kubernetes versions supported by ACK.
    
-   Auto updates simplify your O&M work. After you enable auto updates for your cluster, ACK updates the Kubernetes version of your cluster to a later version supported by ACK on a regular basis. This allows you to use the new features provided by the new Kubernetes version.
    

## **Auto update policies**

After you configure an auto update policy for your cluster, ACK automatically generates an update schedule based on the policy and the Kubernetes versions supported by the ACK managed cluster. ACK runs update tasks in the cluster within the maintenance window specified in the update schedule. You can configure the maintenance window and update frequency in an auto update policy. After you enable auto updates for a cluster, ACK does not immediately update the cluster. If you require an immediate update, we recommend that you manually update the cluster. For more information, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

**Important**

-   ACK uses the same procedure to update a cluster, regardless of whether the cluster is automatically updated or manually updated. You can manually update a cluster after you enable auto updates for the cluster.
    
-   You cannot roll back manual updates or auto updates. For more information about the precautions for manual updates, see [Manually update a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    

### **Maintenance window**

You can specify a maintenance window for each cluster. The maintenance window is applied in the auto updates of a cluster and the auto O&M of managed node pools in the cluster. ACK automatically generates an update scheduled based on the specified maintenance window and then runs a precheck and update tasks within the maintenance window.

If you modify the maintenance window before the update schedule is implemented, ACK cancels the orchestrated schedule. If you modify the maintenance window when a cluster is being updated, the update process will be cancelled.

To ensure a sufficient time for cluster updates, we recommend that you set the maintenance window to at least 2 hours.

### **Update frequency**

You can select different update frequencies based on your business requirements.

For example, if your current cluster is version 1.26.3-aliyun.1, the latest version is 1.30, and the second-latest version is 1.28, you can update to the following three versions: 1.26.15-aliyun.1, 1.28.9-aliyun.1, and 1.30.1-aliyun.1. The following table describes the update frequency and the specific version to which your cluster will automatically upgrade under different frequencies.

**channel**

**Description**

**New update version**

Patch

If a patch version is available for the current minor version, the cluster is automatically updated to the patch version. The new Kubernetes version does not contain breaking changes.

1.26.15-aliyun.1

Stable

Automatically update to the latest patch version of the second-latest minor version. The new Kubernetes version may involve changes in APIs and features, but its stability is verified.

1.28.9-aliyun.1

Rapid

Automatically update to the latest patch version of the latest minor version to quickly obtain new features provided by the Kubernetes community.

1.30.1-aliyun.1

For more information about patch versions and minor versions, see [Versioning](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/#p-qx0-n4f-vuu).

### **Update schedule**

Based on your configured auto update policy and the release schedule of new ACK versions, the system will check if your cluster is eligible for an auto update. If your cluster is eligible, an update plan will be generated at least one day in advance. You can view the plan's details in the ACK console or through the OpenAPI.

To skip a scheduled update, you can cancel it manually. Canceling a plan only affects the current scheduled update; it does not disable the auto update feature. ACK will continue to schedule future updates for your ACK managed cluster during its maintenance window.

After you configure an auto update policy, the system does not perform the update immediately. Instead, update plans are scheduled in advance based on the overall orchestration strategy, and are then rolled out in batches over time.

Once an upgrade plan is generated, you can view its details on the **O&M Plan** tab in the cluster details page or by calling the [ListOperationPlans](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-listoperationplans) API.

**Note**

The purpose of update prechecks is to verify the compatibility between the new Kubernetes version and the Kubernetes API server and cluster components. If the cluster fails a precheck, you must fix the issues. After the issues are fixed, ACK runs a precheck again. You can view the details of precheck failures in the **History** section of the **Upgrade Cluster** page.

### **Update notifications**

-   After the update process of an ACK managed cluster is completed, ACK notifies you of the result (success of failure) by text message.
    

## **Enable** auto updates

After you enable auto updates for an ACK managed cluster, ACK checks the overall scheduling policy and then runs update tasks within a maintenance window.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Operations** > **Upgrade Cluster**.
    
3.  On the **Upgrade Cluster** page, configure the auto update policy and the maintenance window based on the instructions in the [Auto update policies](#96e660679307d) section.
    
    ACK performs a precheck before running auto update tasks. If your cluster fails a precheck, you must fix the issues based on the details displayed on the Upgrade Cluster page. You can view precheck details, update status, and update task details in the **History** section of the Upgrade Cluster page.
    
    You can manually cancel the schedule on demand.
    
4.  (Optional) After an update is completed, you can check the Kubernetes version of the cluster on the **Clusters** page to confirm that the update is successful.
    

## **References**

-   If auto updates cannot meet your requirements, you can manually upgrade your cluster:
    
    -   Use the ACK console: [Manually update a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
        
    -   Use the ACK API: [UpgradeCluster](/help/en/ack/serverless-kubernetes/developer-reference/api-cs-2015-12-15-upgradecluster-serverless).
        
-   If you use ACK Basic clusters to run large-scale services in production environments, we recommend that you perform hot migration from the ACK Basic clusters to ACK Pro clusters. For more information, see [Hot migration from ACK Basic clusters to ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-standard-clusters-to-ack-pro-clusters).
    
    If you have existing ACK dedicated clusters and want to use the features of ACK Pro clusters, such as control plane management, you can perform a hot migration from the ACK dedicated clusters to ACK Pro clusters. For more information, see [Hot migration from ACK dedicated clusters to ACK managed Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters).
    
-   For more information about the Kubernetes versions supported by an ACK managed cluster and the version list update cycle, see [Versioning](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/). In this topic, you can also view the description, update notes, new features, deprecated features, and deprecated APIs of each Kubernetes version.
