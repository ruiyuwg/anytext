PolarDB for PostgreSQL clusters support the read/write splitting feature. If you use cluster endpoints whose read/write mode is Read and Write (Automatic Read-write Splitting), the cluster endpoints automatically forward read and write requests to the relevant nodes.

## Background information

If a large number of read requests but a few write requests are sent to databases, a single node may not be able to handle the workloads. This may affect services. If you use cluster endpoints whose read/write mode is Read and Write (Automatic Read-write Splitting), the cluster endpoints automatically forward write requests to the primary node, and forward read requests to read-only nodes. In this way, the read capability can be elastically scaled to handle a large number of read requests that are sent to databases.

## Benefits

-   Easy maintenance based on a unified endpoint
    
    If you do not use cluster endpoints whose read/write mode is Read and Write (Automatic Read-write Splitting), you must configure the endpoints of the primary node and each read-only node in your application. Otherwise, you cannot send write requests to the primary node and read requests to read-only nodes. If you connect your application to cluster endpoints whose read/write mode is Read and Write (Automatic Read-write Splitting), the cluster endpoints can automatically forward read and write requests to the relevant nodes. This reduces maintenance costs. You need only to add read-only nodes to improve the processing capabilities of clusters, and do not need to modify your applications.
    
-   Session-level read consistency
    
    When a client connects to the backend by using the cluster endpoint, the built-in proxy for read/write splitting automatically establishes a connection to the primary node and each read-only node. In the same session, the built-in proxy first selects an appropriate node based on the data synchronization progress of each database node. Then, the proxy forwards read and write requests to the nodes whose data is up-to-date and correct. This balances read and write requests among the nodes.
    
-   Even distribution of the PREPARE statements
    
    The PREPARE statements that contain write operations and the related EXECUTE statements are sent to only the primary node. The PREPARE statements that contain read-only operations are broadcast to all the nodes, and the related EXECUTE statements are routed based on the loads on these nodes. This achieves load balancing for query requests.
    
-   Support for native high security links, and improved performance
    
    You can build your own proxy on the cloud to achieve read/write splitting. However, an excessive latency may occur because data is parsed and forwarded by multiple components before the data arrives at a database. However, PolarDB uses a built-in proxy that works as a cluster component for read/write splitting. The built-in proxy provides a lower latency and higher data processing speed than external components.
    
-   Node health checks to enhance database availability
    
    The read/write splitting module of PolarDB performs health checks on the primary node and read-only nodes of a cluster. If a node fails or its latency exceeds a specified threshold, PolarDB stops distributing read requests to this node, and distributes write and read requests to other healthy nodes. This ensures that applications can access the cluster even if a single read-only node fails. After the node recovers, PolarDB automatically adds the node into the list of nodes that are available to receive requests.
    

## Limits

-   PolarDB does not support the following statements or features:
    
    -   Connect to a cluster through the replication-mode method. If you need to set up dual-node clusters based on a primary/secondary replication architecture, use the endpoint of the primary node.
        
    -   Use the name of the temporary table to declare the %ROWTYPE attribute.
        
        ```
        create temp table fullname (first text, last text);
        select '(Joe,von Blow)'::fullname, '(Joe,d''Blow)'::fullname;
        ```
        
    -   Create temporary resources by using functions.
        
        -   If you create a temporary table by using functions and execute an SQL statement to query the temporary table, an error message may be returned. The error message indicates that the table does not exist.
            
        -   If your function contains the PREPARE statement, an error message may be returned when you execute the EXECUTE statement. The error message indicates that the PREPARE statement name does not exist.
            
-   Routing-related restrictions:
    
    -   Requests in the transaction are routed to the primary node, and load balancing is resumed after the transaction terminates.
        
    -   All functions that involve write operations or mixed read-write operations are routed to the primary node. All read-only functions, including cutomized read-only functions, are routed to read-only nodes.
        

## Create or modify a cluster endpoint

-   For more information about how to create a custom cluster endpoint, see [Configure PolarProxy](/help/en/polardb/polardb-for-postgresql/create-a-custom-cluster-endpoint#task-2556887).
    
-   For more information about how to modify a cluster endpoint, see [Configure PolarProxy](/help/en/polardb/polardb-for-postgresql/create-a-custom-cluster-endpoint#section-yrp-f58-0i1).
    

## Configure transaction splitting

For more information, see [Transaction splitting](/help/en/polardb/polardb-for-postgresql/transaction-splitting#task-2038574).

## Specify a consistency level

For more information, see [Consistency levels](/help/en/polardb/polardb-for-postgresql/consistency-levels#concept-2477746).

## Add hints to specify routing directions of SQL statements

Add the `/*FORCE_MASTER*/` or `/*FORCE_SLAVE*/` hint before an SQL statement to specify the direction that you want to route the SQL statement. By default, the `SELECT * FROM test` statement is routed to a read-only node. If you change the SQL statement to `/*FORCE_MASTER*/ SELECT * FROM test`, the SQL statement is routed to the primary node.

## Connect to a PolarDB for PostgreSQL cluster

[Connect to a PolarDB for PostgreSQL cluster](/help/en/polardb/polardb-for-postgresql/connect-to-polardb-for-postgresql-cluster#task-nhk-4qg-tdb)

**Note**

After the cluster endpoint is created, you need only to configure the cluster endpoint in your application to achieve automatic read/write splitting.

## Related operations

**API**

**Description**

[CreateDBEndpointAddress](/help/en/polardb/polardb-for-mysql/api-createdbendpointaddress#doc-api-polardb-CreateDBEndpointAddress)

Creates a public-facing endpoint for a PolarDB cluster.

[DescribeDBClusterEndpoints](/help/en/polardb/polardb-for-mysql/api-describedbclusterendpoints#doc-api-polardb-DescribeDBClusterEndpoints)

Queries endpoint information about a PolarDB cluster.

[ModifyDBClusterEndpoint](/help/en/polardb/polardb-for-mysql/api-modifydbclusterendpoint#doc-api-polardb-ModifyDBClusterEndpoint)

Modifies the configurations of a cluster endpoint for a PolarDB cluster.

[ModifyDBEndpointAddress](/help/en/polardb/polardb-for-mysql/api-modifydbendpointaddress#doc-api-polardb-ModifyDBEndpointAddress)

Modifies an endpoint for a PolarDB cluster, for example, a custom cluster endpoint.

[DeleteDBEndpointAddress](/help/en/polardb/polardb-for-mysql/api-deletedbendpointaddress#doc-api-polardb-DeleteDBEndpointAddress)

Releases the public-facing endpoint of the primary endpoint, the default cluster endpoint, or a custom cluster endpoint for a PolarDB cluster.
