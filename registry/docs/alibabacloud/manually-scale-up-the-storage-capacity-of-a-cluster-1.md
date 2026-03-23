You can manually scale up or scale down the storage capacity of your cluster. This topic describes how to manually scale up or scale down the storage capacity of a cluster.

## **Limits**

-   You can manually scale up or scale down the storage capacity of an Enterprise Edition cluster only if the cluster uses the subscription storage billing method.
    
-   You cannot downgrade the storage type of an existing cluster from PSL5 to PSL4.
    
-   You cannot scale down the storage capacity of a multi-master cluster.
    
-   You cannot scale down the storage capacity of a serverless cluster.
    
-   You cannot increase the storage capacity during storage scale-down. Before you scale down storage, assess the current storage usage levels to ensure that the reduction does not negatively impact your storage requirements.
    

## **Impacts**

-   Storage scale-up does not cause service interruption.
    
-   PSL4 or PSL5 storage scale-down does not cause service interruption.
    

## Manually scale up storage capacity

### **Procedure**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the **Distributed Storage** section of the **Basic Information** page, choose **Change Storage Capacity** > **Manually Scale Up**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3316924171/p789544.png)
    
5.  On the **Change Configurations** page, select the required storage capacity, select the Terms of Service, and then click **Buy Now**.
    
6.  On the **Purchase** page, confirm the order and click **Purchase**.
    

## Manually scale down storage capacity

### **Procedure**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the **Distributed Storage** section of the **Basic Information** page, choose **Change Storage Capacity** > **Manually Scale In**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3316924171/p789546.png)
    
5.  On the **Downgrade** page, select the required storage capacity, select the Terms of Service, and then click **Buy Now**.
    

## **Reference**

For information about how to resolve the issue that the storage space is fully occupied by data files, temporary files, and binary log files, see [FAQ](/help/en/polardb/polardb-for-mysql/user-guide/storage-space-common-problems-and-solutions/).
