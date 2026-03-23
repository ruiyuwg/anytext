This topic outlines how to add a **Read-only IMCI Node** in the [**PolarDB console**](https://polardb.console.alibabacloud.com/), covering prerequisites, important considerations, and operational steps.

## Version requirements

To add a read-only In-Memory Columnar Index (IMCI) node, your cluster must meet specific kernel version requirements based on its edition and CPU architecture:

-   **Enterprise Edition** clusters:
    
    -   PolarDB for MySQL 8.0.1 with revision version 8.0.1.1.22 or later.
        
    -   PolarDB for MySQL 8.0.2 with revision version is 8.0.2.2.12 or later.
        
-   **Standard Edition** clusters that uses the **CPU architecture** of **X86**:
    
    -   MySQL 8.0.1 with revision version 8.0.1.1.38 or later.
        
    -   MySQL 8.0.2 with a revision version of 8.0.2.2.19 or later.
        

## Important considerations

-   Your cluster must have at least one existing read-only node; single-node clusters do not support adding columnar index read-only nodes.
    
-   For a [Multi-master Cluster (Limitless)](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) cluster, set the value of the [cluster parameter](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters) `loose_polar_enable_imci_with_mm` to `ON` before adding a global read-only IMCI node to the cluster.
    
-   For a cluster in a [global database network (GDN)](/help/en/polardb/polardb-for-mysql/user-guide/global-database-network/), if you enable the `loose_polar_enable_imci_with_standby` cluster parameter, you can directly add read-only IMCI nodes, and the cluster must meet one of the following conditions:
    
    -   MySQL 8.0.1 with revision version 8.0.1.1.48 or later.
        
    -   MySQL 8.0.2 with revision version 802 2.2.27 or later.
        
-   In cases where columnar statements have usage [limitations](/help/en/polardb/polardb-for-mysql/user-guide/limits-3), the system will automatically revert to row-store execution.
    
-   In-Memory Column Index (IMCI) v.s. [failover with hot replica](/help/en/polardb/polardb-for-mysql/user-guide/overview-28) compatibility:
    
    -   For a cluster whose **revision version** is **8.0.1.1.43 or later** or **8.0.2.2.24 or later**, the IMCI feature can be used together with the failover with hot replica feature.
        
    -   For a cluster whose **revision version** is **8.0.1.1.42** or **8.0.2.2.23**:
        
        -   If a cluster contains a read-only node where the failover with hot replica feature is enabled, you can add read-only IMCI nodes to the cluster.
            
        -   If a read-only IMCI node already exists in a cluster, you cannot enable the hot standby feature for any read-only node in the cluster.
            
    -   For a cluster whose **revision version** **is earlier than 8.0.1.1.42** or **earlier than 8.0.2.2.23**, the IMCI feature cannot be used together with the failover with hot replica feature.
        
        -   If a cluster contains a read-only node for which the failover with hot replica feature is enabled, you cannot add read-only IMCI nodes to the cluster.
            
            **Note**
            
            If you want to add a read-only IMCI node to the cluster, [contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us) to disable the high availability (HA) module Voting Disk of the failover with hot replica feature. When Voting Disk is being disabled, all nodes in the cluster are automatically restarted.
            
        -   If a read-only IMCI node already exists in a cluster, you cannot enable the hot standby feature for any read-only node in the cluster.
            

## Procedure

You can use one of the following methods to add read-only IMCI nodes:

## Add from the console

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the upper-left corner of the page, select the region in which the cluster resides. Go to the **Add/Remove Node** dialog box by using one of the following methods:
    
    -   On the **Clusters** page, click **Actions** in the **Add/Remove Node** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366852471/p931499.png)
        
    -   On the **Basic Information** page of the cluster, click **Add/Remove Node** in the **Database Nodes** section.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366852471/p931991.png)
        
2.  Select **Add Read-only IMCI Node** and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1288306471/p931993.png)
    
3.  Add a read-only IMCI node and complete the payment.
    
    1.  Click +**Add an IMCI Node**.
        
    2.  Select the node specifications.
        
    3.  Set the Switching Time parameter.
        
    4.  (Optional) View the Terms of Service and Service Level Agreement.
        
    5.  Click **Buy Now**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4056503471/p931996.png)
    
4.  After you complete the payment, go to the cluster details page. The node is successfully added after it enters the **Running** state.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0796695471/p931983.png)
    

## Add during purchase

In the [PolarDB buy page](https://polardb-buy-intl.alibabacloud.com/cusBuy/Prepaid), find the **Nodes** parameter and set **Read-only IMCI Nodes**. After you complete the purchase, check whether read-only IMCI node is added. For more information, see the [Results](#d41e62) section of this topic.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6833334371/p872952.png)

## Results

Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/), go to the Basic Information page of the cluster, and check whether the read-only IMCI node is added.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0796695471/p931983.png)

In the preceding figure, **Read-only IMCI Node** is the new IMCI node, and **Read-only Node** is the original row store node.

## **Related API operations**

API

Description

[CreateDBNodes](/help/en/polardb/api-polardb-2017-08-01-createdbnodes)

Adds a read-only node to a PolarDB cluster.
