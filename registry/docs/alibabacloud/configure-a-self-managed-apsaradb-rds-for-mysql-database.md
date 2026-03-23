You can use self-hosted RDS for MySQL database or an ApsaraDB RDS for MySQL database, as the metadata storage service for DataLake clusters, custom clusters, or Hadoop clusters in E-MapReduce (EMR).

## Prerequisites

You have created a RDS for MySQL instance.

> This topic uses the purchase of an ApsaraDB RDS for MySQL instance as an example. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).

## Precaution

Please check network connectivity between the creating EMR cluster and the existing RDS for MySQL instance, ensure it works.

If you are using an ApsaraDB RDS for MySQL instance:

-   Same VPC:
    
    -   The EMR cluster and the RDS for MySQL instance can communicate through the private network by default. However, you need to configure a whitelist in the RDS for MySQL instance. Add the IPv4 CIDR block of the VPC where the EMR cluster will be created to the allowed access range.
        
    -   After configuring the whitelist, you can create the connection.
        
-   Different VPCs:
    
    -   If the EMR cluster and the RDS for MySQL instance are in different VPCs, you can establish network connectivity through methods, such as VPC peering connection. For more information, see [Use VPC peering connections for private network communication between VPCs](/help/en/vpc/create-and-manage-vpc-peering-connection#a416dca7725ox).
        
    -   You need to configure a whitelist in the RDS for MySQL instance after the connection. Then add the IPv4 CIDR block of the VPC, where the EMR cluster will be created, to the access range.
        

## **Procedure**

### **Step 1: Prepare a metadatabase**

1.  Create a database. For more information, see [Create a database](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#section-6hn-wc7-g8k).
    
2.  Create a standard account and grant read and write permissions to the account. For more information, see [Create an account](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#section-wkq-j35-q2b).
    
    **Note**
    
    Record the username and password of the account. They will be used in [Step 2: Create a cluster](#section-13x-gol-ybr).
    
3.  Obtain the internal endpoint of the database.
    
    1.  Add the IPv4 CIDR block of the VPC, where the EMR cluster will be created, to the whitelist of the RDS for MySQL instance. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance).
        
    2.  In the left-side navigation pane of the instance details page, click **Database Connection**.
        
    3.  On the **Database Connection** page, click the address of the internal endpoint to copy it.
        
        **Note**
        
        Record the internal endpoint. They will be used in [Step 2: Create a cluster](#section-13x-gol-ybr).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8552828471/p952610.png)
        

### **Step 2: Create a cluster**

In the **Software Configuration** step, configure the parameters described in the following table. For more information about other parameters, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).

**DataLake and Custom cluster parameter**

**Hadoop cluster parameter**

**Description**

**Metadata**

Select **Self-managed RDS**.

**Note**

The **Metadata** parameter is available only if you select the HDFS (OSS-HDFS), YARN, and Hive services for DataLake and custom clusters.

**javax.jdo.option.ConnectionURL**

**RDS Endpoint**

Specify an endpoint in the format of `jdbc:mysql://rm-xxxxxx.mysql.rds.aliyuncs.com/<Database name>`.

-   `rm-xxxxxx.mysql.rds.aliyuncs.com`: Enter the internal endpoint recorded in [Step 1: Prepare a metadatabase](#2bdda95a0e7u0).
    
-   `<Database name>`: Enter the database name recorded in [Step 1: Prepare a metadatabase](#2bdda95a0e7u0).
    

**javax.jdo.option.ConnectionUserName**

**RDS Username**

Enter the username recorded in [Step 1: Prepare a metadatabase](#2bdda95a0e7u0).

**javax.jdo.option.ConnectionPassword**

**RDS Password**

Enter the password recorded in [Step 1: Prepare a metadatabase](#2bdda95a0e7u0).

### **(Optional) Step 3: Initialize the Metastore service**

**Important**

-   If you created a Hadoop cluster of EMR V3.38.X or earlier, EMR V4.9.X or earlier, or EMR V5.4.X or earlier in the previous step, or you changed the metadata storage of an existing cluster to an RDS for MySQL database, you need to initialize the Metastore service.
    
    The HiveMetaStore and HiveServer2 components of Hive and the ThriftServer component of Spark may be in abnormal status before the Metastore service is initialized. These components will recover after the initialization.
    
-   Skip this step if you use a DataLake or Custom cluster. They will automatically initialize the Hive Meta database during their creation.
    

1.  Log on to the master node of the cluster in SSH mode. For more information, see [Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster#task-2508490).
    
2.  Run the following command to switch to the hadoop user:
    
    ```
    su - hadoop
    ```
    
3.  Run the following command to initialize the Metastore service:
    
    ```
    schematool -initSchema -dbType mysql
    ```
    
    After the service is initialized, you can use the RDS for MySQL database as the Hive metadatabase.
