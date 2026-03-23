You can manually add or remove read-only nodes for a PolarDB cluster.

## Background information

A PolarDB cluster can have up to 15 read-only nodes. To ensure high availability, reserve one read-only node with the same specifications as the primary node. You can configure the remaining read-only nodes based on the workload requirements.

## Billing

You are charged for new nodes based on the following billing rules:

-   If you add a node to a **subscription** cluster, you are charged for the node on a **subscription** basis.
    
-   If you add a node to a **pay-as-you-go** cluster, you are charged for the node on a **pay-as-you-go** basis.
    

**Note**

-   You can release a subscription or pay-as-you-go read-only node as needed. After a node is released, [you receive a refund or billing for the node stops](/help/en/polardb/polardb-for-oracle/configuration-change-fees-1#concept-269560).
    
-   The new node in a cluster is billed based on the [compute node billing rules](/help/en/polardb/polardb-for-oracle/billing-methods/). Storage fees remain unchanged and are not affected by the number of compute nodes.
    

## Precautions

-   You can add or remove read-only nodes only if the cluster does not have ongoing configuration changes.
    
-   You can remove multiple read-only nodes at a time. However, to avoid operational errors, add or remove one read-only node at a time.
    
-   Adding a read-only node takes approximately 5 minutes and does not affect database operations.
    
-   When you remove a read-only node, a brief interruption occurs on the connections to it. Other nodes in the cluster are unaffected. We recommend that you remove nodes during off-peak hours and make sure that your application can automatically reconnect to the cluster. If your application connects to the cluster by using the cluster endpoint, PolarDB automatically blocks the removed node, and you do not need to modify the application configurations.
    

## Add a read-only node

**Note**

Only the read/write splitting connections established after you add a read-only node forward requests to the node. To include the new node in the request distribution of the connections established before the node is added, disconnect and re-establish these connections. For example, you can restart the application to force it to create new connections.

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster.
    
2.  Go to the **Add/Remove Node** page by using one of the following methods:
    
    -   In the **Actions** column of the cluster, click **Add/Remove Node**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3938966471/p952769.png)
        
    -   Click the cluster ID to go to its **Basic Information** page. In the **Database Nodes** section, click **Add/Remove Node**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3938966471/p952772.png)
        
3.  Select **Add Node** and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3938966471/p891821.png)
    
4.  Click **\+ Add Read-only Node** and configure the **Switching Time** parameter. Review and confirm the terms of service, and then click **Buy Now**.
    
    **Note**
    
    -   To add multiple nodes to your cluster at the same time, repeatedly click **\+ Add a Read-only Node**.
        
    -   You can select **Switch Now** or **Switch At** for **Switching Time**. If you select **Switch At**, you can select a time within the next 24 hours. The task of adding a node is completed within 30 minutes after the selected time. You can also view the task details or cancel it on the **Scheduled Tasks** page. For more information, see [Scheduled tasks](/help/en/polardb/polardb-for-mysql/user-guide/view-or-cancel-a-scheduled-task#task-2067266).
        
    

## Remove a read-only node

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster.
    
2.  Go to the **Add/Remove Node** page by using one of the following methods:
    
    -   In the **Actions** column of the cluster, click **Add/Remove Node**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3938966471/p952769.png)
        
    -   Click the cluster ID to go to its **Basic Information** page. In the **Database Nodes** section, click **Add/Remove Node**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3938966471/p952772.png)
        
3.  Select **Delete Node** and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3938966471/p891823.png)
    
4.  Click the ![减号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3828449951/p3601.png) icon to the right of the node name to remove it.
    
5.  Review and confirm the terms of service, and then click **Buy Now**.
    
    **Note**
    
    You can release a subscription or pay-as-you-go read-only node as needed. After a node is released, [you receive a refund or billing for the node stops](/help/en/polardb/polardb-for-oracle/configuration-change-fees-1#concept-269560).
    

## Related API operations

**Operation**

**Description**

[CreateDBNodes](/help/en/polardb/polardb-for-oracle/api-createdbnodes-2#doc-api-polardb-CreateDBNodes)

Adds a node to a PolarDB cluster.

[ModifyDBNodeClass](/help/en/polardb/polardb-for-oracle/api-modifydbnodeclass-2#doc-api-polardb-ModifyDBNodeClass)

Changes the node specifications of a PolarDB cluster.

[RestartDBNode](/help/en/polardb/polardb-for-oracle/api-restartdbnode-2#doc-api-polardb-RestartDBNode)

Restarts a node in a PolarDB cluster.

[DeleteDBNodes](/help/en/polardb/polardb-for-oracle/api-deletedbnodes-2#doc-api-polardb-DeleteDBNodes)

Removes a read-only node from a PolarDB cluster.
