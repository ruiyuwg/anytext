A warehouse is a group of compute nodes (CNs) or backend nodes (BEs) in a StarRocks instance. A warehouse provides computing resources for you to run query, import, and data processing tasks. Each warehouse can be used as an independent computing resource pool. Different warehouses are physically isolated from each other.

## **Limits**

Default warehouse

-   When you create an instance, a default warehouse is created. This default warehouse cannot be deleted.
    
-   The number of nodes in the default warehouse cannot be reduced to zero. We recommend that you keep at least three nodes running in the default warehouse. The number of nodes in other warehouses can be reduced to zero.
    

Multiple warehouses

-   Only shared-data instances of StarRocks 3.3 or later support multiple warehouses.
    
-   The maximum number of warehouses in an instance is 50.
    

## **Features**

-   Resource isolation: You can allocate different computing resources (only CNs) into different warehouses. This ensures that each business unit or department has independent computing resources, prevents resource competition and mutual influence, and improves the stability of business operations and the reliability of query responses.
    
-   Data sharing: All warehouses share the same storage layer. This allows different departments or business units to access the same underlying data. This improves data reuse and collaboration efficiency and reduces the risk of data redundancy and inconsistency.
    
-   Flexible scaling: You can quickly increase or decrease the number of nodes in a specific warehouse based on business requirements without the need to reallocate data. This helps meet the needs of business growth, reduce the interference on existing business, and improve the scalability and flexibility of the system.
    
-   Efficient auto scaling: You can configure auto scaling rules in a warehouse to meet different business requirements in peak and off-peak hours.
    
-   Scalability: When new business scenarios or departments are added, new warehouses can be created for them. Each warehouse can have an independent resource pool to ensure the independent operation of new and old businesses and reduce the O&M complexity in multi-business environments.
    

## **Scenarios**

-   Resource isolation for different types of tasks: You can allocate different warehouses to different types of tasks to isolate resources. This ensures that all types of tasks can run independently and stably. For example, you can use one warehouse to run query and analysis tasks and another warehouse to run extract, transform, and load (ETL) tasks. This ensures that query and ETL tasks use isolated computing resources without mutual interference.
    
-   Cross-department collaborative analysis: Multiple departments can share data assets and use different warehouses for query and analysis. This ensures that the query tasks of different departments do not affect each other.
    
-   Centralized management: You can merge multiple instances into one instance with multiple warehouses for centralized management by O&M personnel. Typically, merging multiple instances is considered only when the data needs to be shared.
