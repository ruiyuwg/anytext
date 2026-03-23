To replicate container images between instances across regions, you can configure replication rules. These rules replicate images from a source instance to a destination instance.

## Scope

-   The source instance must be a Premium Edition instance. The destination instance can be an Basic or Premium Edition instance.
    
    > In the [Container Registry console](https://cr.console.alibabacloud.com), click **Upgrade** in the lower-right corner of the Enterprise Edition instance.
    
-   You cannot replicate images from a public cloud region to a non-public cloud region, such as a Finance Cloud or Gov Cloud region.
    
-   Some regions support only [custom replication links](/help/en/acr/user-guide/accelerate-image-replication#4b0d62a108qi0) because of special restrictions. For example, OSS buckets in these regions do not support public network access.
    

## Automatic instance synchronization within the same account

You can configure a replication rule to automate image replication between instances that belong to the same account. After you push an image to the source instance, the system automatically replicates the image to the destination instance.

**Important**

Automatic replication applies only to images that are pushed after the replication rule is created. Existing images are not replicated.

Two solutions can be used to replicate existing images:

-   If you have a small number of existing images, you can manually replicate them. For more information, see [Manually replicate images](#section-6rx-ikx-jkh) and [CreateRepoSyncTask](/help/en/acr/api-createreposynctask#doc-api-cr-CreateRepoSyncTask).
    
-   If you have many existing images, use the **OSS replication and ACR image import** solution:
    
    1.  Copy all files in an OSS bucket to the OSS bucket of a Container Registry instance. For more information, see [Data replication](/help/en/oss/user-guide/data-replication-2/).
        
    2.  [Create an import rule](/help/en/acr/user-guide/import-a-personal-edition-instance-image-to-an-enterprise-edition-instance#title-hn0-d79-uwj), select an OSS bucket as the migration source, and start an image import task.
        

New images can be automatically replicated between instances that belong to the same account by namespace or image repository.

-   To automate image replication by namespace, the destination instance and the source instance must share a namespace and automatic repository creation is configured for the namespace.
    
-   To automate image replication by image repository, the destination instance and the source namespace must share a namespace and an image repository.
    

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the navigation pane on the left of the management page of the Enterprise Edition instance, choose **Distribution** > **Instance Replication**. On the page that appears, click **Create Rule**.
    
6.  In the **Instance Information** step of the **Create Rule** wizard, configure parameters and then click **Next**. The following table describes the parameters.
    
    **Note**
    
    You cannot specify the source instance in a replication rule as the destination instance in another replication rule. You cannot specify the destination instance in a replication rule as the source instance or destination instance in another replication rule. For example, you specify Instance A as the source instance when you create a replication rule. When you create another replication rule, you can specify Instance A as the source instance instead of the destination instance.
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    Enter a name for the replication rule.
    
    **Replication Scenario**
    
    Select **Same Account**.
    
    **Destination Instance**
    
    Select the region where the destination instance resides, and then select the destination instance.
    
    **Note**
    
    Images can be automatically replicated across regions when Internet access is disabled. This prevents security risks that are caused by Internet access.
    
7.  In the **Replication Information** step of the **Create Rule** wizard, configure parameters and then click **Create Rule**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Replication Level**
    
    You can synchronize by namespace and repository.
    
    **Source Address**
    
    -   If you set **Replication Level** to **Namespace**, select the source namespace and enter a regular expression to filter image versions.
        
    -   If you set **Replication Level** to **Repository**, select the source namespace and repository, and enter a regular expression to filter image versions.
        
    
    A replication task is automatically triggered when a new image is pushed to the repository that matches the created replication rule.
    
    In the navigation pane on the left of the management page of the instance, choose **Distribution** > **Replication Record**. On the page that appears, you can view replication tasks.
    

## Manual synchronization of instances within the same account

You can configure a replication rule to manually replicate images between instances that belong to the same account.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the left-side navigation pane, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the left-side navigation pane of the management page of the Enterprise Edition instance, choose **Repository** > **Repositories**.
    
6.  On the Repositories page, click the name of the repository in which the images to be replicated reside.
    
7.  In the navigation pane on the left of the details page of the image repository, click **Tags**. On the page that appears, find the image that you want to replicate and click **Replicate** in the **Actions** column that corresponds to the image.
    
8.  In the **Image Replication** dialog box, set **Replication Scenario** to **Same Account**, select the region where the destination instance resides and select the name and namespace of the destination instance. Enter the name of the destination repository and the image tag, specify whether to overwrite the existing image that has the same name as the pushed image, and then click **OK**.
    
    In the navigation pane on the left of the management page of the Container Registry Enterprise Edition instance, choose **Distribution** > **Replication Record**. On the **Replication Record** page, the status of the replication task is displayed as **Completed**. If the manual replication is successful, the image appears in the destination instance.
    

## **References**

To replicate images between instances that belong to different Alibaba Cloud accounts, see [Replicate images across accounts](/help/en/acr/user-guide/synchronize-instances-across-accounts).
