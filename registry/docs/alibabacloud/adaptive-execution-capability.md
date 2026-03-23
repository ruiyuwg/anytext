In some scenarios, the optimizer cannot accurately estimate the number of rows to be scanned in a table, the predicate selection rate, and the cost of an execution plan. To resolve this issue, PolarDB for MySQL provides the adaptive execution plan switching feature to automatically adjust execution plans based on the actual information. This topic describes the adaptive execution plan switching feature.

## **Background information**

The optimizer estimates the cardinality and selection rate based on statistics and parts of the sampled data. The estimated results may deviate from the actual information due to the sampling precision and sampling method. Statistics are also not collected in various scenarios. In this case, the optimizer estimates the statistics based on empirical values or a mathematical assumption, which may cause large deviations between the estimated values and the actual values. In scenarios in which the estimated results of the optimizer are inconsistent with the actual values and improper execution plans are selected, the optimizer cannot easily pre-collect the required information.

## **Adaptive execution plan switching**

**Note**

Adaptive execution plan switching supports two modes: adaptive row-column routing and adaptive selection of ordered indexes.

### **Adaptive row-column routing**

When you use the [In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) feature with [automatic row-column routing](/help/en/polardb/polardb-for-mysql/user-guide/request-distribution-among-row-store-and-column-store-nodes/) enabled, some slow queries may be routed to row store nodes when the estimated execution costs of the slow queries on row store nodes are comparatively low.

To resolve the issues, you can use one of the following solutions:

-   Reduce the cost threshold of queries routed to column store nodes. However, if you use this solution, a large number of short queries are routed to column store nodes. As a result, loads on column store nodes become high and other queries are blocked.
    
-   Use the [statement outline](/help/en/polardb/polardb-for-mysql/user-guide/statement-outline) feature to route queries that have fixed templates to column store nodes. For example, you can add the outline described in the following sample statement to forcibly route the queries to the column store nodes. However, this solution causes a significant increase in O&M costs.
    
    ```
    CALL dbms_outln.add_optimizer_outline("<Schema_name>", "/*+ SET_VAR(cost_threshold_for_imci=0) SET_VAR(imci_ap_threshold=0) */","<query>");
    ```
    

The adaptive execution plan switching feature in PolarDB for MySQL can be applied to adaptive row-column routing to automatically switch slow queries that are incorrectly routed to row store nodes to column store nodes and to improve execution efficiency. As shown in the following figure, when the adaptive execution plan switching feature is used, the database marks the number of rows to be scanned in each query block and in the entire query in the optimization phase and add them to the monitoring information. If IMCI is not selected after cost calculation, the optimizer calculates the threshold for triggering the adaptive execution plan switching feature. In newer versions (such as 8.0.1.1.49 and later or 8.0.2.2.29 and later), this threshold is calculated based on the parameter `loose_adaptive_cost_threshold_for_imci`. In earlier cluster versions, it is calculated based on the parameter `loose_cost_threshold_for_imci`. In the execution phase, when the number of rows scanned in a query block or in the entire query reaches the threshold for triggering the adaptive execution plan switching feature, the system checks whether to switch to column store execution. Monitoring scanned rows in the core path only compares integers and does not affect the execution performance. Before switching to column store execution, the optimizer ensures that the result sets of row store execution are not returned to the client. After switching to column store execution, the system clears the cached result sets.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4808785671/CAEQTxiBgMCR1cmc2BkiIGMzNWRlZTM3NTA4ZjQ4N2Y4NWE0NDkyYTkzM2VmM2Q24178581_20240123112508.090.svg)

### **Adaptive selection of ordered indexes**

In database query optimization, the prefer\_ordering\_index optimization instructs the optimizer to prioritize indexes that support sort operations. However, in some cases, this optimization may degrade query performance. Especially when the ordered index and query selectivity do not match, choosing an ordered index with low selectivity or requiring a large amount of data scanning and table lookups may cause the query to scan substantial irrelevant data and therefore increase I/O and CPU workloads.

The following solution can address slow queries caused by the prefer\_ordering\_index optimization:

You can use the [statement outline](/help/en/polardb/polardb-for-mysql/user-guide/statement-outline) feature to disable the `prefer_ordering_index` optimization for specific SQL templates. However, this solution significantly increases O&M costs. Additionally, it affects some queries that use the SQL templates and perform better with the `prefer_ordering_index` optimization enabled.

```
CALL dbms_outln.add_optimizer_outline("<Schema_name>", "/*+ SET_VAR(optimizer_switch='prefer_ordering_index=off') */","<query>");
```

The adaptive execution plan switching feature can be applied to adaptive selection of ordered indexes. If query performance is degraded by the prefer\_ordering\_index optimization, the execution plan will abandon ordered indexes. If a query selects ordered indexes due to the prefer\_ordering\_index optimization, the optimizer calculates the threshold for triggering the adaptive execution plan switching feature. In the execution phase, when the number of rows executed on ordered indexes reaches the threshold for triggering the adaptive execution plan switching feature, the system checks whether to switch to column store execution. Monitoring scanned rows in the core path only compares integers and does not affect the execution performance. Before switching to column store execution, the optimizer ensures that the result sets of row store execution are not returned to the client. After switching to column store execution, the system clears the cached result sets.

## **Prerequisites**

-   To enable adaptive row-column routing (corresponding to the **imci\_chosen=on** value), your cluster must meet the following requirements:
    
    -   PolarDB for MySQL 8.0.1 with revision version 8.0.1.1.39 or later.
        
    -   PolarDB for MySQL 8.0.2 with revision version 8.0.2.2.29 or later.
        
-   To enable adaptive selection of ordered indexes (corresponding to the **ordering\_index=on** value), your cluster must meet the following requirements:
    
    -   PolarDB for MySQL 8.0.1 with revision version 8.0.1.1.47 or later.
        
    -   PolarDB for MySQL 8.0.2 with revision version 8.0.2.2.29 or later.
        

## **Usage notes**

### **Enable or disable the adaptive execution plan switching feature**

Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). Configure the adaptive execution plan switching feature on the **Parameters** page:

-   Set the parameter `loose_adaptive_plans_switch` to `'imci_chosen=on'` to enable adaptive row-column routing.
    
-   Set the parameter `loose_adaptive_plans_switch` to `'ordering_index=on'` to enable adaptive selection of ordered indexes selected by the `prefer_ordering_index` optimization.
    
-   Set the parameter `loose_adaptive_plans_switch` to `'imci_chosen=on,ordering_index=on'` to enable both modes, or set one of them to `'off'` to disable the corresponding mode.
    

For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters). The following table describes the parameters that you can configure.

**Parameter**

**Level**

**Description**

loose\_adaptive\_plans\_switch

Global/Session

Specifies whether to enable the adaptive execution plan switching feature. Valid values:

-   **imci\_chosen**: Specifies whether to enable adaptive row-column routing. Valid values:
    
    -   **ON** (default): Enables adaptive row-column routing. You must correctly configure column store nodes for this mode take effect.
        
    -   **OFF**: Disables adaptive row-column routing.
        
-   **ordering\_index**: Specifies whether to enable adaptive selection of ordered indexes. Valid values:
    
    -   **ON**
        
    -   **OFF** (default)
        

loose\_adaptive\_cost\_threshold\_for\_imci

Global/Session

The cost threshold for adaptive row-column routing.

Valid values: 1-18446744073709551615. Default value: 50000.

**Note**

This parameter is available only for the following database engine versions:

-   PolarDB for MySQL 8.0.1 with revision version 8.0.1.1.49 or later.
    
-   PolarDB for MySQL 8.0.2 with revision version 8.0.2.2.29 or later.
    

loose\_adaptive\_plans\_max\_time

Global/Session

The maximum execution time of a SQL statement that can be routed by using the adaptive execution plan switching feature. If the execution time of an SQL statement exceeds the specified period, the execution plan of the statement is not switched even if the threshold for execution plan switching is reached.

Valid values: 0~1800000. Default value: 500. Unit: milliseconds.

loose\_adaptive\_ordering\_rows\_threshold

Global/Session

The checkpoint for adaptive selection of ordered indexes. A small value means that the system checks the number of scanned rows and triggers adaptive execution plan switching at a short interval.

Valid values: 0～4294967295. Default value: 50000.

### **View the number of adaptive switching acts**

You can execute the following statement to view the number of adaptive switching acts:

```
SHOW GLOBAL STATUS LIKE 'Adaptive_plan_used';
```

The following table describes the `Adaptive_plan_used` variable.

**Variable name**

**Level**

**Description**

Adaptive\_plan\_used

Global

The number of adaptive switching acts that have been performed from the time when the adaptive execution plan switching feature is enabled.
