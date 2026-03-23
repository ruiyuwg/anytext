This topic describes how to unbind a tag from a PolarDB cluster. You can unbind a tag from a PolarDB cluster if the tag is not needed.

## Precautions

After you unbind a tag from a cluster, the tag is automatically deleted unless you bind it to another cluster.

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region in which the cluster is deployed.
    
4.  On the **Clusters** page, find the cluster and move the pointer over the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4803222061/p74099.png) icon in the **Tag** column and click **Edit**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0673643371/p742666.png)
    
5.  In the **Edit Tags** dialog box, find the tag and click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2136931071/p742670.png) icon.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8572993471/p742673.png)
    
6.  Click **OK**.
    
    **Note**
    
    Unbinding a tag from a cluster does not affect other clusters to which the tag is bound.
    

## Related API operations

**Operation**

**Description**

[UntagResources](/help/en/polardb/polardb-for-mysql/api-untagresources#doc-api-polardb-UntagResources)

Unbinds tags from PolarDB clusters.
