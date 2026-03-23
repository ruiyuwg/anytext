If different applications are used to send requests for OLAP and OLTP services, you can configure different cluster endpoints for the applications, and then associate row store and column store nodes with different cluster endpoints to distribute the requests.

## Manual request distribution solution

Request distribution rules:

-   OLTP service: generally includes read and write requests. All OLTP write requests are distributed to the primary node, and OLTP read requests are distributed to read-only row store nodes or the primary node.
    
-   OLAP service: generally includes only read requests. All OLTP read requests are distributed to read-only column store nodes.
    

Manual request distribution solution (**Read/Write (Automatic Read/Write Splitting)** or **Read-only**)

-   You can associate the application for OLTP requests with a cluster endpoint that does not contain the read-only column store node, so that OLTP read requests are processed by the primary node or read-only row store node.
    
-   You can associate the application for OLAP requests with a cluster endpoint that contains only the read-only column store node, so that OLAP read requests are processed by the read-only column store node.
    

![独立](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4902630961/p392701.png)

## Procedure

You must configure different cluster endpoints for OLTP and OLAP services. For more information about how to configure cluster endpoints, see [Manage the endpoints of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#task-1580301).

Take note of the following items when you configure cluster endpoints:

-   Cluster endpoints for the OLTP service:
    
    -   In **Read-only** mode, you can add only read-only row store nodes to the selected node list.
        
    -   In **Read/Write (Automatic Read/Write Splitting)** mode, we recommend that you add at least one read-only row store node to the selected node list. If the **Primary Node Accepts Read Requests** parameter is set to **Yes**, read requests are also distributed to the primary node.
        
        **Note**
        
        In **Read/Write (Automatic Read/Write Splitting)** mode, all write requests are distributed only to the primary node, regardless of whether the primary node is added to the selected node list.
        
-   Cluster endpoints for the OLAP service: In most cases, the OLAP service involves only read requests. Therefore, we recommend that you select the **Read-only** mode. In Read-only mode, you must add at least one read-only column store node to the selected node list.
    

## Use `hints` to forcefully execute a request by using a column store or row store execution plan

If the outcome of manual request distribution does not meet your expectations, you can use `hints` to execute a request by using a column store or row store execution plan.

**Note**

-   A `hint` takes effect only for the SQL statement in which it is contained. The hint does not take effect for other statements in the same connection or statements in other connections.
    
-   If you execute statements together with `hints` by using MySQL 5.7.7 or earlier, you must add the `--comments` option when you connect to the database engine. You can run the `mysql --version` command to check the version of your MySQL client.
    

-   **Forcefully execute a statement by using a column store execution plan**
    
    After a statement is distributed to a read-only column store node, the system determines whether to execute the statement by using a row store or column store execution plan based on the estimated execution cost. If the execution cost is greater than the `loose_cost_threshold_for_imci` value, a column store execution plan is used. Otherwise, a row store execution plan is used. If you want to forcefully execute a statement by using a column store execution plan regardless of the loose\_cost\_threshold\_for\_imci value, you can add a /\*+SET\_VAR(cost\_threshold\_for\_imci=0)\*/ `hint` to the statement to change the threshold value to 0. Example:
    
    ```
    /*FORCE_IMCI_NODES*/EXPLAIN SELECT /*+ SET_VAR(cost_threshold_for_imci=0) */ COUNT(*) FROM t1 WHERE t1.a > 1;
    ```
    
    **Note**
    
    When you use `/*+SET_VAR()*/` to change the threshold value, you must omit the `loose_` prefix of the parameter name. Otherwise, the `hint` does not take effect.
    
-   **Forcefully execute a statement by using a row store execution plan**
    
    If you want to forcefully execute a statement by using a row store execution plan, you can add the /\*+ SET\_VAR(USE\_IMCI\_ENGINE=OFF) \*/ hint to the statement. Example:
    
    ```
    EXPLAIN SELECT /*+ SET_VAR(USE_IMCI_ENGINE=OFF) */ COUNT(*) FROM t1 WHERE t1.a > 1;
    ```
