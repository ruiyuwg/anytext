You can attach tags to Elastic Container Instance (ECI) resources, such as ECI instances, image caches, and virtual nodes. This lets you implement enterprise cost allocation based on tag categorization. This topic describes how to query split bill information based on tags.

## **Bind tags to Elastic Container Instance resources**

Tags are similar to Kubernetes labels. You can use tags to mark ECI resources that share the same management or business requirements for easier resource categorization and filtering. You can attach tags to various ECI resources. For more information, see the following table.

**Scenario**

**Resource**

**References**

You can perform operations in the ECI console or through OpenAPI.

Elastic container instances

[Use tags to manage elastic container instances](/help/en/eci/user-guide/use-tags-to-manage-elastic-container-instances)

Image caches

[Manage an image cache](/help/en/eci/user-guide/manage-an-image-cache)

VNodes

[Manually deploy a VNode in a self-managed Kubernetes cluster](/help/en/eci/user-guide/manually-connect-a-vnode-to-a-self-managed-kubernetes-cluster)

Add tags by adding annotations to Kubernetes clusters

Elastic container instances

[Bind custom tags to a pod](/help/en/eci/user-guide/bind-custom-tags-to-a-pod)

By default, the following tags are added to the elastic container instances that are created using Container Service for Kubernetes:

-   ManagedBy: the type of the cluster.
    
-   ClusterId: the cluster ID.
    
-   NameSpace: the namespace of the cluster.
    
-   OwnerReferenceKind: the type of the workload that is created in the cluster, such as Deployment and Job.
    
-   OwnerReferenceName: the name of the workload that is created in the cluster, such as Deployment name and Job name.
    
-   PodName: the name of the pod.
    

## **Query split bills based on tags**

1.  Log on to the [Elastic Container Instance console](https://eci.console.alibabacloud.com/?#/eci/cn-hangzhou/welcome).
    
2.  In the top navigation bar, click **Expenses** to go to the **Expenses and Costs**.
    
3.  In the navigation pane on the left, choose **Manage Split** > **Cost allocation tags**.
    
4.  Enable cost allocation tags.
    
    ## Enabling for the first time
    
    1.  On the **Cost allocation tags** page, read the description of tags and click **Next**.
        
    2.  Select a tag that you want to enable, click ">" to move the tag to the **Selected Tags** list, and then click **Next**.
        
    
    ![启用费用标签1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5418843761/p533925.png)
    
    Click **Enable**.
    
    ## Previously enabled
    
    -   To enable a single tag, find the tag and click **Enable** in the Operations column.
        
    -   To enable multiple tags at a time, select the tags and click **Batch Enable** in the lower part of the page.
        
        ![启用费用标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5418843761/p533787.png)
        
    
    **Note**
    
    Tags are case-sensitive. If many tags are displayed in the list, you can search for tags by key.
    
5.  In the navigation pane on the left, choose **Manage Split** > **Cost Center**. You can allocate resources to cost centers by tag.
    
    1.  Add a cost center.
        
        1.  In the navigation pane on the left of the **Cost Centers** page, click the "+" icon next to Cost Center.
            
            ![新增财务单元](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9065070071/p533788.png)
            
        2.  In the Add Cost Center dialog box, enter a name for the cost center and click **OK**.
            
    2.  Allocate resources to the cost center.
        
        1.  In the navigation pane on the left of the **Cost Centers** page, click **All Resources**.
            
        2.  In the **Tag** column of the resource list on the right, click the filter icon. In the dialog box that appears, select the tags that you enabled and click **OK**.
            
            ![财务单元筛选标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5418843761/p533792.png)
            
        3.  Select Elastic Container Instance resources from the filter results and click **Allocate**. In the Allocate dialog box, select the cost center that you added and click **OK**.
            
            ![分配财务单元](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5418843761/p533802.png)
            
6.  In the navigation pane on the left, choose **Manage Split** > **Split Bill**. On the Split Bill page, filter and view split bills by cost center.
    
    **Note**
    
    The first time you use the split bill feature, follow the on-screen instructions to enable the feature.
    
    ![财务单元筛选.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0342609861/p690506.png)
    
7.  In the navigation pane on the left, choose **Cost Management** > **Cost Analysis**. Filter costs by cost center and tag to view the cost analysis.
    
    **Note**
    
    The first time you use the cost analysis feature, follow the on-screen instructions to enable the feature.
    
    On the **Cost Analysis** page, the display mode of charts varies based on the value of **Category**. The filters that you select from the Filters section on the right filter the data that you want to view. For example, you can select **Instance Tag** from the **Category** drop-down list, and then select the tags that you want to view in the Filters section. This way, you can view the cost details of the resources to which the tags are added.
    
    ![成本分析-intl.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0342609861/p690508.png)
