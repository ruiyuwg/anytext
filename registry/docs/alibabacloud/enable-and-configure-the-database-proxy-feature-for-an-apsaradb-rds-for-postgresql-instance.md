The database proxy feature for ApsaraDB RDS for PostgreSQL sits between your application and the RDS instance, providing read/write splitting and transaction splitting. Use it to offload requests from the primary instance, handle high connection volumes, and distribute workloads across read-only instances.

## Prerequisites

Before you begin, make sure that:

-   The RDS instance runs PostgreSQL 10 or later
    
-   The RDS instance uses cloud disks
    
-   The RDS instance runs RDS High-availability Edition
    
-   The RDS instance is a primary RDS instance
    
-   The RDS instance does not reside in Hangzhou Zone C or Hangzhou Zone D. If it does, [migrate the instance to another zone](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region) before enabling database proxy.
    

## Billing

**Proxy type**

**Cost**

**General-purpose**

Free of charge

**Dedicated**

Pay-as-you-go. For details, see [Billing rules for database proxies](/help/en/rds/apsaradb-rds-for-postgresql/billing-rules-for-the-database-proxy-of-an-apsaradb-rds-for-postgresql-instance#concept-2191080).

## Proxy types

ApsaraDB RDS for PostgreSQL offers two proxy types. For a detailed comparison, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-postgresql/what-are-database-proxies#b65ad4e0830z0)

**Aspect**

**General-purpose**

**Dedicated**

**Cost**

Free

Pay-as-you-go

**Maximum specification**

16 CPU cores

32 CPU cores

**Specification at enablement**

System-recommended (adjustable later)

User-configurable

### Sizing guidance

The proxy specification is calculated as:

```
Specification = Recommended number of proxies x 2 CPU cores
```

The unit specification of each database proxy is fixed at 2 CPU cores. The recommended number of proxies depends on the proxy type:

**Proxy type**

**Recommended count formula**

**General-purpose**

`(CPU cores of primary instance + CPU cores of all read-only instances) / 4`, rounded up

**Dedicated**

`(CPU cores of primary instance + CPU cores of all read-only instances) / 8`, rounded up

**Example:** A primary RDS instance (RDS High-availability Edition) with 8 CPU cores and a read-only instance with 4 CPU cores produces a dedicated proxy count of `ceil((8 + 4) / 8) = 2`. The recommended specification is `2 x 2 = 4` CPU cores.

## Enable database proxy

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance, then click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  Select a proxy type (**General-purpose** or **Dedicated**) and click **Enable Now**.
    
    -   **General-purpose** -- The system automatically assigns the recommended specification. After enablement, you can adjust it.
        
    -   **Dedicated** -- Configure the proxy specification during enablement.
        
    
    **Note**
    
    If prompted that service-linked role (SLR) authorization is incomplete, click **Authorize**, then click **OK** in the dialog box. Alibaba Cloud creates a service-linked role named [AliyunServiceRoleForRdsProxyOnEcs](/help/en/rds/apsaradb-rds-for-postgresql/service-linked-roles) that allows the database proxy to bind elastic network interfaces (ENIs) and establish network connections.
    
4.  Click **OK**.
    

## Verify enablement

After the database proxy is enabled, the **Database Proxy** page displays the proxy's basic information, node details, and connection endpoints.

### Basic Information

**Parameter**

**Description**

**Primary Instance**

The ID of the RDS instance.

**Proxy Instance Status**

The current status of the database proxy instance.

**Proxy Type**

**General-purpose** or **Dedicated**. For differences, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-postgresql/what-are-database-proxies#b65ad4e0830z0)

**Zone**

The zone of the database proxy instance. By default, this matches the zone of the primary RDS instance.

**Proxy Specifications**

The total specification of the database proxy, calculated as `Unit specification (2 CPU cores) x Number of proxies`. For example, 3 proxies produce a specification of `2 x 3 = 6` CPU cores.

**Proxy Version**

The database proxy version.

**Proxy Instance ID**

The ID of the proxy instance.

### Proxy Node

**Parameter**

**Description**

**Node ID**

The ID of the proxy node.

**Zone**

The zone of the proxy node.

**CPU Cores on Proxy Node**

The specification of a single proxy node.

### Connection Information

**Parameter**

**Description**

**Proxy Endpoint (Terminal) ID**

The ID of the database proxy endpoint. Each RDS instance supports up to seven database proxy endpoints. Each endpoint can have one internal endpoint and one public endpoint. Hover over the endpoint ID to view its **Read/Write Attributes** and **Read Weight Information**. For configuration details, see [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy) and [Use a database proxy endpoint to connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-database-through-proxy-connection-address).

**Read/Write Attributes**

The read/write mode of the proxy endpoint: **Read/Write** or **Read-only**. For details, see [Configure the read/write attributes and the read weight of the database proxy](/help/en/rds/apsaradb-rds-for-postgresql/configure-read-write-attributes-and-read-weights).

**Internal Endpoint/Port**

The internal endpoint and port for connecting to the RDS instance over the internal network through the database proxy. The internal endpoint is bound to the proxy endpoint ID. Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7854183071/p739396.png) icon next to the endpoint to modify the endpoint prefix or port. For details, see [Manage the database proxy endpoints](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-database-proxy-endpoints-of-an-apsaradb-rds-for-postgresql-instance#task-2199206).

**Public Endpoint/Port**

The public endpoint and port for connecting to the RDS instance over the Internet through the database proxy. An internal endpoint is provided by default; apply for a public endpoint separately. After applying, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7854183071/p739396.png) icon next to the endpoint to modify the endpoint prefix or port. For details, see [Manage the database proxy endpoints](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-database-proxy-endpoints-of-an-apsaradb-rds-for-postgresql-instance#task-2199206).

## Important considerations

-   After the database proxy feature is enabled, we recommend that you do not migrate the primary RDS instance across zones. If you migrate the primary RDS instance across zones, the primary RDS instance and its proxy instances are in different zones. This increases access latency and slows down responses.
    
    **Note**
    
    If a primary/secondary switchover is triggered by a service failure, the primary RDS instance and its database proxy instances may end up in different zones. To reduce latency, perform another primary/secondary switchover to bring them back into the same zone. For details, see [Switch workloads over between primary and secondary ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances).
    
-   A read-only RDS instance must exist for the primary instance before you can configure connection settings for a database proxy endpoint. Without a read-only instance, you can enable the database proxy feature but cannot configure connection settings. To create one, see [Create a read-only ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-read-only-apsaradb-rds-for-postgresql-instance).
    

## Next steps

-   [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy) -- Set up read/write splitting rules, connection limits, and access policies for your proxy endpoints.
    
-   [Configure the read/write attributes and the read weight of the database proxy](/help/en/rds/apsaradb-rds-for-postgresql/configure-read-write-attributes-and-read-weights) -- Control how read traffic is distributed across the primary and read-only instances.
    
-   [Manage the database proxy endpoints](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-database-proxy-endpoints-of-an-apsaradb-rds-for-postgresql-instance#task-2199206) -- Apply for public endpoints, modify endpoint prefixes, or change ports.
    

## API reference

**API**

**Description**

[ModifyDBProxy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbproxy-postgresql)

Enable or disable the database proxy feature for an instance.

[DescribeDBProxy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxy-postgresql)

Query the details of a database proxy.
