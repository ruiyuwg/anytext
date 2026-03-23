This topic describes how to add tags to PolarDB clusters. To easily manage a large number of PolarDB clusters, you can create tags and add tags to the clusters. You can also filter the clusters by tag.

## Precautions

-   A tag consists of a key-value pair. Each key must be unique for an Alibaba Cloud account in a region. This constraint does not apply to key values.
    
-   Up to 20 tags can be added to a cluster.
    
-   Clusters deployed in different regions do not share the same tag.
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region in which the cluster is deployed.
    
4.  On the **Clusters** page, move the pointer over the ![More](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4803222061/p74099.png) icon in the **Tag** column of the target cluster.
    
5.  Click **Edit**.
    
    ![Edit Tag](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7158603471/p74100.png)
    
6.  In the **Modify Tags** dialog box, enter the tag key and tag value.
    
    **Note**
    
    After you create a tag for a cluster, you can add the tag to other clusters.
    
7.  Click **OK**.
    

## Related API operations

**Operation**

**Description**

[TagResources](/help/en/polardb/api-polardb-2017-08-01-tagresources)

Adds tags to PolarDB clusters.
