Hologres lets you execute tasks using serverless computing resources. These resources are limited at both the instance and SQL levels. This topic describes the resource limits for serverless computing and explains how to manage serverless resources for your SQL queries.

## Serverless resource quota

The serverless resource quota is the maximum amount of serverless computing resources that a Hologres instance can request. This quota is determined by the dedicated computing resources of the instance. The following table describes this relationship.

**Instance Compute Unit (CU)**

**Serverless resource quota**

Instance compute resources < 32

Serverless Computing is not supported.

The value of the instance compute resource must be greater than or equal to 32 and less than 688.

-   The quota is 3 times the instance's dedicated computing resources. For example, an instance with 32 dedicated CUs has a quota of 32 × 3 = 96 CUs.
    
-   Starting with Hologres v3.0.33, the quota increases to 5 times the instance's dedicated computing resources, capped at 2048 CUs. This cap is raised to 4096 CUs starting with v3.1.9.
    
-   Starting with Hologres v4.0.13, the quota increases to 10 times the instance's dedicated computing resources, capped at 4096 CUs.
    

Compute resources for the instance >= 688

The quota is capped at 2048 CUs.

This cap increases to 4096 CUs starting with v3.1.9.

**Note**

-   The serverless resource quota is the maximum amount of serverless resources that can be concurrently used by all active SQL queries (in the EXECUTE state) on an instance.
    
-   The serverless resource pool in each zone is shared by all instances within that zone.
    
-   Serverless computing is a pay-as-you-go computing resource, and resource allocation is not guaranteed. If the instance quota is exceeded or the serverless resource pool in the zone is full, submitted SQL queries are queued (enter the QUEUE state) to wait for resources.
    

## Set serverless resources for SQL queries

The amount of resources allocated to an SQL query is the minimum of the three factors that are described in the following table. Resources are requested in increments of 15 CUs.

**Parameter or limit**

**Description**

Quota

The maximum serverless computing resources a Hologres instance can use.

hg\_experimental\_serverless\_computing\_max\_cores (Max Cores)

The upper limit of serverless computing resources that can be allocated to a single SQL query. You can change this parameter.

-   Before v3.0.42 and v3.1.10: The default value is 512.
    
-   v3.0.42, v3.1.10, and later: The default value is 1024.
    

hg\_experimental\_serverless\_computing\_required\_cores (Required Cores)

The amount of serverless computing resources that the system estimates a SQL query requires. The default value is 0, which enables automatic estimation. If you specify a non-zero value, the system uses the greater of your specified value or 50% of its own estimate.

### **Set Max Cores**

You can run the following statement to set the upper limit of serverless resources for a single SQL query.

**Note**

-   To ensure that sufficient resources are available for SQL execution, avoid changing this parameter. If you must change it, perform thorough testing first.
    

```
-- Set the maximum CUs to allocate for a single serverless computing task. Default: 512.
SET hg_experimental_serverless_computing_max_cores = 512;

-- Reset the configuration.
reset hg_experimental_serverless_computing_max_cores;
```

Example:

```
-- Use serverless computing resources to execute the SQL query.
SET hg_computing_resource = 'serverless';

-- Set the maximum CUs for a single SQL query to 32.
SET hg_experimental_serverless_computing_max_cores = 32;

-- Execute the SQL query.
INSERT INTO sink_tbl SELECT * FROM source_tbl;

-- Reset the configuration.
reset hg_computing_resource;
reset hg_experimental_serverless_computing_max_cores;
```

### **Set Required Cores**

By default, the system automatically estimates the resources required for a query based on its complexity. This automatic estimation provides a balance between resource utilization and query execution time.

To improve the performance of a query by allocating more serverless computing resources, you can run the following statement to specify the amount of resources.

**Note**

-   Do not change this parameter. Allocating insufficient resources can cause an out-of-memory (OOM) error. If you must change this parameter, perform thorough testing first.
    
-   To ensure stability, if you specify a value for Required Cores, the system performs resource optimization. The actual amount of resources used to execute the SQL query is max(required\_cores, estimated\_resources \* 0.5).
    

```
-- The default value of 0 enables automatic resource estimation.
SET hg_experimental_serverless_computing_required_cores = XX;

-- Reset the configuration.
reset hg_experimental_serverless_computing_required_cores;
```

Example:

```
-- Use serverless computing resources to execute the SQL query.
SET hg_computing_resource = 'serverless';

-- The computing resources for serverless computing are not estimated by the system. The actual requested resource amount is max(96, system_estimated_resources * 0.5).
SET hg_experimental_serverless_computing_required_cores = 96;

-- Execute the SQL query.
INSERT INTO sink_tbl SELECT * FROM source_tbl;

-- Reset the configuration.
reset hg_computing_resource;
reset hg_experimental_serverless_computing_required_cores;
```

#### **Adjust the Required Cores strategy**

If you find that the amount of computing resources automatically estimated by the system is insufficient or excessive, you can modify the following parameter to adjust the strategy for estimating Required Cores.

-   The default value of this parameter is 4, which represents a neutral policy.
    
-   If the system underestimates the required resources, you can increase the value of the parameter. For example, if you set the value to 8, a request that would otherwise require 60 CUs is adjusted to request 120 CUs.
    
-   If the system overestimates the required resources, you can decrease the value of the parameter. For example, if you set the value to 2, a request that would otherwise require 60 CUs is adjusted to request 30 CUs.
    

```sql
-- Modify at the SQL level
SET hg_experimental_serverless_computing_resource_allocation_ratio = 4;

-- Modify at the user level
ALTER USER "ROLE_NAME" IN DATABASE DB_NAME SET hg_experimental_serverless_computing_resource_allocation_ratio = 4;

-- Modify at the DB level
ALTER DATABASE DB_NAME SET hg_experimental_serverless_computing_resource_allocation_ratio = 4;
```
