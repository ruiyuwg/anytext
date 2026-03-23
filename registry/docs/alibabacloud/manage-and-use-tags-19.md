Tags are used to label clusters. You can use tags to identify and manage your cluster resources. You can add tags when you create a cluster. You can also add tags on the Cluster Overview page of a created cluster. You can add up to 20 tags to a single cluster. This topic describes how to add, remove, and view tags and how to use tags to search for clusters.

## Background information

An E-MapReduce (EMR) cluster contains multiple Elastic Compute Service (ECS) instances. When you create an EMR cluster, two system tags are automatically added to each ECS instance in the cluster. To identify the cluster to which an ECS instance belongs and to identify the role of the ECS instance in the cluster, perform the following steps: Log on to the [Alibaba Cloud ECS console](https://ecs.console.alibabacloud.com) and move the pointer over the tag icon of an ECS instance on the Instances page. ![View system tags](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1221596761/p327398.png)

For example, an ECS instance has the following system tags:

-   acs:emr:clusterId=c-59efc7546480\*\*\*\*
-   acs:emr:nodeGroupType=CORE

In this example, the ECS instance is a core node of an EMR cluster whose ID is _c-59efc7546480\*\*\*\*_.

## Precautions

-   If you update the tags of an EMR cluster, the tags of the ECS instances in the cluster are also updated in the ECS console.
-   If you update the tags of ECS instances in the ECS console, the tags of the EMR cluster to which the ECS instances belong are not updated. To make sure that the tags of ECS instances are consistent with the tags of the EMR cluster, we recommend that you do not update the tags of ECS instances in the ECS console. If the number of tags of an ECS instance in a cluster reaches the upper limit, you can no longer create tags for the cluster.
-   Tag information is not shared across regions.
    
    For example, tags that are created in the China (Hangzhou) region are invisible in the China (Shanghai) region.
    
-   You can add up to 20 tags to a cluster. If the number of tags that are added to a cluster exceeds the upper limit, you must remove some of the tags before you add new tags.

## Create or attach tags when you create a cluster

You can create new tags or attach existing tags when you create a cluster.

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
    
2.  In the top menu bar, select the desired region and resource group.
    
3.  Click **Create Cluster**. On the **Basic Configuration** page, in the **Advanced Settings** section, click **Add Tag** in the **Tags** row.
    
    For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    
4.  Select an existing tag key and tag value to attach a tag, or enter a new tag key and tag value to create and attach a new tag.
    
    Selecting an existing tag key and tag value attaches a tag. Entering a new tag key and tag value creates a tag.
    
    **Note** Each tag consists of a key-value pair. Tag keys and tag values have the following limits:
    
    -   A tag key cannot be empty and can be up to 128 characters in length. A tag value can be empty and can be up to 128 characters in length.
    -   Tag keys and tag values cannot start with aliyun or acs: and cannot contain http:// or https://.
    -   A tag key must be unique in a cluster. For example, the **city/shanghai** tag is added to a cluster. If the **city/newyork** tag is then added to the cluster, the **city/shanghai** tag is automatically removed.
    

## Manage tags for an existing cluster

You can create, attach, and detach tags for an existing cluster.

1.  On the **EMR on ECS** page, find the target cluster. In the Actions column, choose **![label](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4827393761/p376996.png)** > **Edit Tag**.
    
2.  In the **Edit Tag** dialog box, you can manage the tags for the cluster.
    
    -   Create a new tag
        
        1.  Click **Add New Tag**.
            
        2.  Enter a **Key** and a **Value**. Then, click **OK**.
            
        3.  Click **OK**.
            
    -   Attach an existing tag
        
        1.  Click **Add Existing Tag**.
            
        2.  Select an existing **Tag Key** and **Tag Value**.
            
        3.  Click **OK**.
            
    -   Detach a tag
        
        Click the ![Delete](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4827393761/p377260.png) icon next to a tag to detach it.
        
        **Note**
        
        When you detach a tag, it is deleted if it is not attached to any other resources. You can still view and reattach historical tags.
        

## Search for clusters by tag

On the cluster management page, you can search for clusters by tag key and tag value.

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
    
2.  Select a tag key and a tag value from the **Search by tag** drop-down list.
    
    The clusters that match the selected tag are displayed in the list.
    
    **Note**
    
    If you do not select a tag value, all clusters to which the tag key is attached are displayed.
