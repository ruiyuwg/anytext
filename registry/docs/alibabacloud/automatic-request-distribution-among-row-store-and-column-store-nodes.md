If your application sends requests to access both OLAP and OLTP services, and you want the requests to be automatically distributed based on execution costs, you must configure the read/write mode of the cluster endpoint and enable the automatic request distribution feature. When the automatic request distribution feature is enabled, the database proxy automatically distributes requests based on the estimated number of scanned rows to accelerate request processing. When the estimated number of rows scanned by an SQL request exceeds the threshold, the request is distributed to a column store node. When the estimated number of rows scanned by an SQL request does not exceed the threshold, the request is distributed to a row store node or the primary node.

## Automatic distribution solution

The database proxy of PolarDB for MySQL determines whether to distribute an SQL request to a column store node based on whether the **estimated number of rows scanned** by the request exceeds the specified threshold. This can fully leverage the performance of the row store and column store nodes.

Request distribution rules:

-   OLTP service: includes read and write requests in most cases. All write requests are processed by the primary node. Read requests are processed by the read-only row store nodes or the primary node.
    
-   OLAP service: includes only read requests in most cases. All read requests are processed by the read-only column store nodes.
    

Automatic request distribution solution:

-   Request distribution between the primary node and read-only column store nodes: The primary node can process OLTP read requests because the primary node is also in row store mode. In this solution, write requests and OLTP read requests are distributed to the primary node. OLAP read requests are distributed to the read-only column store nodes.
    
-   Request distribution between the read-only row store nodes and read-only column store nodes: In this solution, write requests are distributed to the primary node, OLTP read requests are distributed to the read-only row store nodes or the primary node, and OLAP read requests are distributed to the read-only column store nodes.
    

![混合下分流](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1679411661/p392700.png)

## Limits

Your cluster contains at least one read-only column store node and one row store node.

## Step 1: Enable automatic request distribution among column store and row store nodes

1.  Log on to the [**PolarDB** console](https://polardb.console.alibabacloud.com/). In the upper-left corner, select the **region** in which the cluster is deployed. Click **Clusters** in the left-side navigation pane. Find the cluster and click its ID.
    
2.  In the **Enterprise Edition** section of the **Basic Information** page, find the cluster endpoint and click **Modify** on the right side of the cluster endpoint.
    
3.  Select the appropriate **Read/Write**.
    
    -   The read/write mode of the cluster endpoint is set to **Read/Write (Automatic Read/Write Splitting)**.
        
    -   The read/write mode of the cluster endpoint is set to **Read-only**, and the load balancing policy is set to **Active requests-based load balancing**.
        
    
4.  In the **Node Settings** section, select the primary node and read-only row store and column store nodes that are used to process requests. In the **HTAP Optimization** section, enable **Transactional/Analytical Processing Splitting**. Click **OK**.
    
    **Note**
    
    -   You must select at least one read-only column store node in **Node Settings**.
        
    -   After you enabled **automatic request distribution among column store and row store nodes**, you must add IMCIs to implement the feature.
        
    
    Example 1: In the following figure, one primary node, one read-only row store node, and two read-only column store nodes are selected. In this case, the system distributes queries based on the following policy:
    
    -   Write requests are distributed to the primary node.
        
    -   OLAP read requests are distributed to the read-only column store nodes.
        
    -   OLTP read requests are distributed to the read-only row store node. When **Primary Node Accepts Read Requests** in the **SLB Settings** section is set to **Yes**, OLTP read requests may also be distributed to the primary node.
        
    
    ![服务节点示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9361078761/p389271.png)
    
    Example 2: In the following figure, one primary node and one read-only column store node are selected. When the automatic request distribution feature is enabled, write requests and OLTP read requests are distributed to the primary node, and OLAP read requests are distributed to the read-only column store node.
    
    ![无行存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9361078761/p390952.png)
    
    **Note**
    
    In **Read/Write (Automatic Read/Write Splitting)** mode, all write requests are distributed only to the primary node, regardless of whether the primary node is selected in the Node Settings section.
    

## Step 2: Specify the thresholds for automatic request distribution

After you enable automatic request distribution, you must specify the threshold for **the number of scanned rows for an SQL statement**. After the threshold is specified, the database proxy determines to which nodes requests are distributed based on this threshold. When the estimated number of rows scanned by an SQL request exceeds the threshold, the request is distributed to a column store node. When the estimated number of rows scanned by an SQL request does not exceed the threshold, the request is distributed to a row store node or the primary node.

The parameters described in the following table determine the thresholds related to the execution costs. On the **Parameters** page of the cluster, you can modify the values of the parameters.

**Parameter**

**Description**

loose\_imci\_ap\_threshold

The threshold that determines whether SQL statements are distributed to column store nodes. Default value: 50000.

**Note**

For example, when the default value is used, if the number of rows scanned by an SQL statement is estimated to be greater than 50,000, the statement is distributed to a column store node.

**Important**

The `loose_cost_threshold_for_imci` parameter is used instead of this parameter in PolarDB for MySQL 8.0.1.x versions that are equal to or later than 8.0.1.1.39 and 8.0.2.x versions that are equal to or later than 8.0.2.2.23.

loose\_cost\_threshold\_for\_imci

The threshold that determines whether SQL statements are executed by using column store execution plans in column store nodes. Default value: 50000.

**Note**

For example, when the default value is used, if the number of rows scanned by an SQL statement is estimated to be greater than 50,000, the statement is executed by using a column store execution plan. Otherwise, a row store execution plan is used.

You can execute the `SHOW STATUS LIKE 'Last_query_cost` statement to query the estimated execution cost of the last SQL statement and use the queried value to modify the parameter values.

**Note**

If you use a cluster endpoint to connect to a database, you must add the `/* ROUTE_TO_LAST_USED*/` hint before the `SHOW STATUS LIKE 'Last_query_cost'` statement to ensure that the estimated execution cost of the last SQL statement is queried on the expected node. The following statement provides an example:

```
/*ROUTE_TO_LAST_USED*/SHOW STATUS LIKE 'Last_query_cost';
```

Example:

```
SHOW STATUS LIKE 'Last_query_cost';
```

The following result is returned:

```
+----------------------+-------+
| Variable_name        | Value |
+----------------------+-------+
| Last_query_cost      | 2     |
+----------------------+-------+
1 row in set (0.01 sec)
```

The query result indicates that the execution cost of the SQL statement is 2.

To distribute the SQL statement to a column store node and execute it by using a column store execution plan, make the following configurations:

-   PolarDB for MySQL 8.0.1.1.38 and 8.0.2.2.22 or earlier
    
    Set the loose\_imci\_ap\_threshold and loose\_cost\_threshold\_for\_imci parameters to 1.
    
-   PolarDB for MySQL 8.0.1.x versions that are equal to or later than 8.0.1.1.39 and 8.0.2.x versions that are equal to or later than 8.0.2.2.23.
    
    Set the loose\_cost\_threshold\_for\_imci parameter to 1.
    

## Use `hints` to forcibly execute a request by using a column store execution plan or a row store execution plan

If the outcome of automatic request distribution does not meet your expectations, you can use `hints` to forcibly execute a request by using a column store execution plan or a row store execution plan.

**Note**

-   A `hint` takes effect only for the SQL statement in which it is contained. The hint does not take effect for other statements in the same connection or statements in other connections.
    
-   If you execute statements together with `hints` by using MySQL 5.7.7 or earlier, you must add the `--comments` option when you connect to the database engine. You can run the `mysql --version` command to check the version of your MySQL client.
    

-   **Forcibly execute a statement by using a column store execution plan**
    
    -   PolarDB for MySQL 8.0.1.1.38 and 8.0.2.2.22 or earlier
        
        If you want to forcibly distribute a request to a column store node regardless of the loose\_imci\_ap\_threshold value, you can add the `/* FORCE_IMCI_NODES */` hint before the SQL keyword. Sample statement:
        
        ```
        /*FORCE_IMCI_NODES*/EXPLAIN SELECT COUNT(*) FROM t1 WHERE t1.a > 1;
        ```
        
        If you want to forcibly execute a statement by using a column store execution plan regardless of the value of the loose\_cost\_threshold\_for\_imci parameter, you can change the threshold value to 0 by adding the /\*+SET\_VAR(cost\_threshold\_for\_imci=0)\*/ hint to the statement. Sample statement:
        
        ```
        /*FORCE_IMCI_NODES*/EXPLAIN SELECT /*+ SET_VAR(cost_threshold_for_imci=0) */ COUNT(*) FROM t1 WHERE t1.a > 1;
        ```
        
    -   PolarDB MySQL 8.0.1.x versions that are equal to or later than 8.0.1.1.39 and 8.0.2.x versions that are equal to or later than 8.0.2.2.23.
        
        Use **hints** to set the loose\_cost\_threshold\_for\_imci parameter to 0.
        
        ```
        EXPLAIN SELECT /*+ SET_VAR(cost_threshold_for_imci=0) */ COUNT(*) FROM t1 WHERE t1.a > 1;
        ```
        
    
    **Note**
    
    When you use `/*+SET_VAR()*/` to change the threshold value, you must omit the `loose_` prefix of the parameter name. Otherwise, the `hint` does not take effect.
    
-   **Forcibly execute a statement by using a row store execution plan**
    
    If you want to forcibly execute a statement by using a row store execution plan, you can add the /\*+ SET\_VAR(USE\_IMCI\_ENGINE=OFF) \*/ hint to the statement. Sample statement:
    
    ```
    EXPLAIN SELECT /*+ SET_VAR(USE_IMCI_ENGINE=OFF) */ COUNT(*) FROM t1 WHERE t1.a > 1;
    ```
