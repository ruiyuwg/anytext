This topic provides the usage notes that you must be familiar with before you use the database proxy feature of ApsaraDB RDS for PostgreSQL.

## Usage notes

-   General-purpose database proxies are provided free of charge. Dedicated database proxies, read-only ApsaraDB RDS for PostgreSQL instances, and primary RDS instances are separately billed.
    
-   When you change the specifications of the primary RDS instance or its read-only RDS instance, a transient connection may occur.
    
-   If you create or restart a read-only RDS instance after you enable the database proxy feature, only the requests that are sent over new connections are forwarded to the new or restarted read-only RDS instance.
    
-   If a database proxy endpoint is used to implement read/write splitting, the read consistency of the requests in a session cannot be ensured.
    
-   If you use a database proxy endpoint, you must add `/*force_master*/ /*force_slave*/` when you view session variables to check the configurations on the primary RDS instance and read-only RDS instances.
    
-   The database proxy feature uses the 1:N connection model. After your application initiates a connection request, a database proxy replicates the established connection to the primary RDS instance and all the read-only RDS instances. The maximum number of connections that are allowed for a database proxy is unlimited. The maximum number of connections that are allowed varies based on the specifications of the primary RDS instance and its read-only RDS instances. If you do not enable the transaction-level connection pooling feature, the database proxy establishes a separate connection from each client to the primary RDS instance and each of the read-only RDS instances. After you enable the database proxy feature, we recommend that you specify the **same maximum number of connections that are allowed for the primary RDS instance and its read-only RDS instances**. If the maximum numbers of connections that are allowed for the primary RDS instance and its read-only RDS instances are different, the maximum number of connections that are allowed for the database proxy is subject to the minimum number of connections that are allowed among these RDS instances.
    
-   If the primary RDS instance is locked, the database proxies that are enabled for the primary RDS instance are not released, but can process only read requests.
    
-   If the primary RDS instance is released, the database proxies that are enabled for the primary RDS instance are automatically released. You are no longer charged for the dedicated database proxies.
    
-   If you use the privileged account of an RDS instance to configure a CIDR block for the host on which the RDS instance is deployed, the CIDR block can be in the `10.1.2.%` format.
    
    **Note**
    
    You cannot configure a CIDR block that is in the `10.1.2.0/24` format for the host.
    
-   If you execute multi-statements or call stored procedures, all subsequent requests over the current connection are forwarded to the primary RDS instance. To perform read/write splitting again, you must close the current connection and establish a new connection.
    
-   The IP address whitelist of the database proxy is consistent with the IP address whitelist of the primary RDS instance. If the IP address whitelist of the primary RDS instance is updated, the IP address whitelist of the database proxy is also updated.
