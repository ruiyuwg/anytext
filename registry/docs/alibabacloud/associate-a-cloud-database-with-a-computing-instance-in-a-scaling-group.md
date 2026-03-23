Elastic Compute Service (ECS) instances or elastic container instances (ECI) in a scaling group can be automatically released at any time. To ensure data persistence, store your data on cloud databases. This topic describes how to associate instances in a scaling group with a cloud database by adding the private IP addresses of the instances to the database whitelist.

## **Association methods**

**Method**

**Applicable instance types**

**Supported cloud database types**

[(Recommended) Method 1: Add instances and cloud databases to the same security group](#section-iqh-mso-fw3)

ECS and ECI

-   RDS
    
-   PolarDB
    
-   Redis
    
-   MongoDB
    

[Method 2: Associate a scaling group with cloud databases](#section-zza-w3l-h4f)

ECS and ECI

-   RDS
    
-   Redis
    
-   MongoDB
    

[Method 3: Use a lifecycle hook and an OOS template](#section-fke-lx0-3bc)

ECS

-   PolarDB
    
-   Redis
    
-   MongoDB
    
-   AnalyticDB
    

## (Recommended) Method 1: Add instances and cloud databases to the same security group

When you assign a security group to a cloud database, the private IP addresses of all instances in that security group are automatically added to the database whitelist. This allows the ECS and ECI instances in the security group to directly access the cloud database.

### **Configure the security group for instances in a scaling group**

-   The security group for instances in a scaling group is determined by the scaling configuration. You can set the security group when you create or modify the scaling configuration. For more information, see [Create a scaling configuration for ECS instances](/help/en/auto-scaling/user-guide/create-scaling-configurations-of-the-ecs-type/) and [Create a scaling configuration for ECI instances](/help/en/auto-scaling/user-guide/create-a-scaling-configuration-of-the-eci-type/).
    
    **Note**
    
    If the instance configuration source is a launch template, modify the security group in the launch template.
    
-   For existing instances in the scaling group: You can change the security group for an ECS instance on the **Security Groups** tab of the instance details page. You cannot change the security group for an ECI instance. You must recreate the ECI instance.
    

### **Configure a security group for the cloud database**

Set the same security group for the cloud database that you use for the instances.

**Cloud database type**

**References**

RDS

[Configure a security group](/help/en/rds/apsaradb-rds-for-mysql/set-security-group#task-2020582)

PolarDB

[Configure a security group](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-security-group)

Redis

[Add the public and private IP addresses of instances in batches using a security group](/help/en/redis/user-guide/configure-whitelists#section-uk4-8yn-olz)

MongoDB

[Add a security group](/help/en/mongodb/user-guide/configure-an-ecs-security-group)

## Method 2: Associate a scaling group with cloud databases

After you associate a scaling group with a cloud database, the private IP addresses of the instances in the group are automatically added to the database whitelist. This allows the ECS and ECI instances to directly access the cloud database.

## Scaling group already associated with a database

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the top navigation bar, select the region where Auto Scaling is activated.
    
3.  In the left-side navigation pane, click **Scaling Groups**.
    
4.  On the **Scaling Groups** page, find the desired scaling group and click **Edit** in the Actions column. The **Edit Scaling Group** dialog box appears.
    
5.  In the **Edit Scaling Group** dialog box, find **Show Advanced Settings** > **Associate with ApsaraDB RDS, Redis, or MongoDB**, and click **Add Database**. Complete the configuration as prompted.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4888237271/p844288.png)
    
6.  Click **OK**.
    

## Associate databases when you create a scaling group

When you create a scaling group, under **Show Advanced Settings**, configure the **Associate with ApsaraDB RDS, Redis, or MongoDB** parameter.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4888237271/p844290.png)

For more information, see [Create an ECS scaling group](/help/en/auto-scaling/user-guide/create-an-ecs-scaling-group) and [Create an ECI scaling group](/help/en/auto-scaling/user-guide/create-an-eci-scaling-group).

## Method 3: Use a lifecycle hook and an OOS template

You can use a lifecycle hook to place newly scaled-out ECS instances into a pending state. A predefined Operation Orchestration Service (OOS) template then automatically runs to add the private IP addresses of the ECS instances to the cloud database whitelist. This allows the ECS instances to directly access the cloud database. For more information, see the following documents:

-   [Automatically add or remove the private IP addresses of ECS instances to or from the whitelist of a PolarDB cluster](/help/en/auto-scaling/use-cases/adds-or-removes-the-private-ip-addresses-of-ecs-instances-to-or-from-the-ip-address-whitelist-of-a-polardb-cluster#task-1937721)
    
-   [Automatically add or remove the private IP addresses of ECS instances to or from the whitelist of a Redis instance](/help/en/auto-scaling/use-cases/adds-or-removes-the-private-ip-addresses-of-ecs-instances-to-or-from-the-ip-address-whitelist-of-an-apsaradb-for-redis-instance)
    
-   [Automatically add or remove the private IP addresses of ECS instances to or from the whitelist of a MongoDB instance](/help/en/auto-scaling/use-cases/adds-or-removes-the-private-ip-addresses-of-ecs-instances-to-or-from-the-ip-address-whitelist-of-a-mongodb-instance#task-1936658)
    
-   [Automatically add or remove the private IP addresses of ECS instances to or from the whitelist of an AnalyticDB cluster](/help/en/auto-scaling/use-cases/adds-or-removes-the-private-ip-addresses-of-ecs-instances-to-or-from-the-ip-address-whitelist-of-an-analyticdb-for-mysql-cluster#task-1960759)
