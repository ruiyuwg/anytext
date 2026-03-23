ApsaraDB RDS for PostgreSQL provides an internal endpoint by default for connections from Elastic Compute Service (ECS) instances in the same virtual private cloud (VPC). To connect from a different VPC or from outside Alibaba Cloud, apply for a public endpoint.

## Internal endpoint compared with public endpoint

**Endpoint type**

**Default**

**Can be released**

**When to use**

Internal endpoint

Yes

No. The network type can be changed.

The ECS instance and the RDS instance are in the same VPC. Recommended for better security and performance.

Public endpoint

No. Must be applied for manually.

Yes

The ECS instance is in a different VPC, or the client is outside Alibaba Cloud.

**Important**

Applying for a public endpoint and the traffic it generates are both free of charge. However, a public endpoint exposes the RDS instance to the Internet and compromises data security. For faster transmission and higher security, migrate your application to an ECS instance in the same region with the same network type as the RDS instance, and connect through the internal endpoint.

## Prerequisites

Before you begin, make sure that you have:

-   An ApsaraDB RDS for PostgreSQL instance
    
-   The instance ID and region
    

## Apply for a public endpoint

1.  Go to the [**Instances**](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of the RDS instance. Find the instance and click its ID.
    
2.  In the left-side navigation pane, click **Database Connection**.
    
3.  Click **Apply for Public Endpoint**.
    
    **Warning**
    
    By default, **Add 0.0.0.0/0 to the whitelist** is selected. This CIDR block allows all IP addresses to access the RDS instance. Use this setting only for connectivity tests. Do not keep 0.0.0.0/0 in a whitelist for production workloads.
    
4.  In the confirmation message, click **OK**.
    

## Release a public endpoint

1.  Go to the [**Instances**](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of the RDS instance. Find the instance and click its ID.
    
2.  In the left-side navigation pane, click **Database Connection**.
    
3.  Click **Disable Public Endpoint**.
    
4.  In the confirmation message, click **OK**.
    

## API operations

**Operation**

**Description**

[AllocateInstancePublicConnection](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-allocateinstancepublicconnection-postgresql)

Applies for a public endpoint for an instance.

[ReleaseInstancePublicConnection](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-releaseinstancepublicconnection-postgresql)

Releases the public endpoint of an instance.

## Next steps

-   Add the public IP address of your client or application to an IP address whitelist. See [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1).
    
-   Connect to the RDS instance through pgAdmin, the PostgreSQL CLI, or your application. See [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance).
