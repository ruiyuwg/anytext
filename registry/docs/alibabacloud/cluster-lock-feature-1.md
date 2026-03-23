You can enable the cluster lock feature for your clusters that carry key business to prevent potential irreversible consequences arising from accidental manual release of the clusters. This topic describes how to enable or disable the cluster lock feature.

## Precautions

-   The cluster lock feature cannot prevent the automatic release of clusters in normal cases such as the following ones:
    
    -   A payment in your account is overdue for more than eight days.
        
    -   The cluster does not comply with the applicable security compliance policies.
        

## Enable the cluster lock feature

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region in which the cluster is deployed.
    
4.  You can use one of the following methods to enable the cluster lock feature:
    
    -   Method 1
        
        On the **Clusters** page, find the cluster and choose **More** > **Add Cluster Lock** in the **Actions** column.![添加集群保护锁](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7023096561/p441610.png)
        
    -   Method 2
        
        1.  On the **Clusters** page, find the cluster and click its ID.
            
        2.  On the **Overview** page, click **Enable** next to **Cluster Lock**.![开启保护锁](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6023096561/p442521.png)
            
    
5.  In the dialog box that appears, click **OK**.
    

## Disable the cluster lock feature

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region in which the cluster is deployed.
    
4.  You can use one of the following methods to disable the cluster lock feature:
    
    -   Method 1
        
        On the **Clusters** page, find the cluster and choose **More** > **Release Cluster Lock** in the **Actions** column.![释放集群保护锁](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6023096561/p441614.png)
        
    -   Method 2
        
        1.  On the **Clusters** page, find the cluster and click its ID.
            
        2.  On the **Overview** page, click **Disable** next to **Cluster Lock**.![关闭保护锁](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6023096561/p442518.png)
            
    
5.  In the dialog box that appears, click **OK**.
    

## View the status of the cluster lock feature

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region in which the cluster is deployed.
    
4.  On the **Clusters** page, click the name of the cluster.
    
5.  On the **Overview** page, view the status of **Cluster Lock**.
    
    ![查看状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6023096561/p442571.png)
    

## Related API operations

**Operation**

**Description**

[ModifyDBClusterDeletion](/help/en/polardb/polardb-for-mysql/api-deletion#doc-api-polardb-ModifyDBClusterDeletion)

Enables or disables the cluster lock feature.
