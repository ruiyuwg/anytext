Unexpected errors can halt critical operations when you manage ApsaraDB for MongoDB instances. The root cause can range from a simple misconfiguration, such as an incorrect whitelist entry or connection string, to more complex issues specific to a managed environment, like resource limitations in a zone, API rate-limiting, or high-availability failover events. This guide maps common error messages to their causes and provides actionable solutions to help you quickly resolve issues, minimize downtime, and ensure database stability.

**Error message**

**Cause and solution**

Specified parameter AccountDescription is not valid.

When you restore backup data to a new instance, ensure that the instance name meets the specified limits.

Shard total number is out of range.

When you restore data from a sharded cluster instance to a new instance, ensure that the new instance has the same number of shards as the source instance.

The downgrading dbinstance storage does not supported.

ApsaraDB for MongoDB does not support reducing the storage capacity of an instance. To reduce the storage capacity, create a new instance to replace the source one. See [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).

The classic network is no longer supported. We recommend that you use a VPC.

You can no longer renew, change the instance type, or change the billing method for ApsaraDB for MongoDB instances that are in the classic network. See [\[Notice\] EOL for ApsaraDB for MongoDB instances on the classic network](/help/en/mongodb/product-overview/eol-notice-for-apsaradb-for-mongodb-instances-in-the-classic-network).

Insufficient resources for the requested operation.

This error occurs because the zone where the instance resides has insufficient resources for the upgrade. Try changing the instance to a different specification or [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact technical support for assistance.

The oplog of the source database is not enabled.

This error occurs if you fail to configure a data migration task. Check the instance architecture. Standalone instances do not have an oplog and therefore do not support incremental migration with Data Transmission Service (DTS). Configure a full migration instead.

The request references an incorrect component. Contact customer support.

This error can occur during instance purchase because resource availability varies by zone. Try changing the zone or instance type, or [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact technical support for assistance.

The request was denied due to API rate limiting.

To manage and control API access, Alibaba Cloud limits the frequency of API calls. View your quotas and [request a quota increase](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota) in the **Quota Center**.

Insufficient read privileges for the database.

When you use DTS to migrate data, the database accounts for the source and destination databases must have the required permissions. Here's how to grant the permissions:

-   [Permissions required for database accounts of standalone instances](/help/en/dts/user-guide/migrate-data-from-a-standalone-apsaradb-for-mongodb-instance-to-another-apsaradb-for-mongodb-instance#title-dpc-o3p-qjp)
    
-   [Permissions required for database accounts of replica set instances](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-for-mongodb-instance-to-another-apsaradb-for-mongodb-instance#title-6l2-zuk-cg7)
    
-   [Permissions required for database accounts of sharded cluster instances](/help/en/dts/user-guide/migrate-a-user-created-database-from-mongodb-sharded-cluster-architecture-to#title-5xr-jkh-fve)
    

Specified restore time is not valid.

When you restore an instance by calling an API, ensure that the restore time is valid. The time must be in the _yyyy-MM-dd_T_HH:mm:ss_Z format and specified in UTC. For example, to convert the Beijing time (UTC+8) of \`2024-11-08 20:00:00\` to UTC, subtract 8 hours. The result is \`2024-11-08T12:00:00Z\`.

server returned error on SASL authentication step: BSON field 'saslContinue.mechanism' is an unknown field.

When you restore an instance across versions, authentication fails if the authentication mechanisms are different. The default authentication mechanism for MongoDB 4.0 is SCRAM-SHA-1. The default for MongoDB 5.0 and later is SCRAM-SHA-256. **When you restore an instance across versions, use an earlier version of the mongorestore tool, such as version 4.0.**

TypeError: db.xxx.find is not a function.

The collection name might be a reserved keyword. Use `db.getCollection("xxx").find` to run the query, or rename the collection.

createUser failed: Command failed with error xx (Unauthorized): 'not authorized on admin to execute command xxx.

An Alibaba Cloud account has limited permissions and cannot be granted write permissions on the admin system database. This is to prevent performance jitter that can be caused by writing data to the admin database. For more information about how to create an account with the required permissions, see [Permissions of the root account specified during instance creation](/help/en/mongodb/support/what-permissions-are-the-root-account-granted-when-an-instance-is-created#f61d3389a0y5j).

The specified network type does not match.

If a classic network security group is already added to the instance, you cannot add a VPC security group.

The instance's minor version is not supported by this API.

The minor version of the instance is too old. [Upgrade the minor version of the database](/help/en/mongodb/user-guide/upgrade-the-minor-version-of-an-apsaradb-for-mongodb-instance).

The instance is at the End of Full Support (EOFS) stage.

The instance version is in the End of Full Support (EOFS) stage and cannot be renewed. [Upgrade the major version of the database](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance).

Resource unavailable.

This error indicates that a resource issue occurred when you created, upgraded, or downgraded an instance. We recommend that you [obtain the Request ID](/help/en/redis/support/how-do-i-obtain-the-id-of-a-request) and [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact technical support for assistance.

### **Connection and network errors**

**Error message**

**Cause and solution**

`network error while attempting to run command 'isMaster' on host 'dds-xxxx.mongodb.rds.aliyuncs.com:3717' :exception: connect failed`

-   **Cause 1**: The instance connections have been exhausted.
    
    **Solution**:
    
    1.  Check whether the instance connections are exhausted. For more information, see [How do I query the number of connections to my instance?](/help/en/mongodb/support/connection-access-and-network#c28cd557bcwc6)
        
    2.  Optimize connection usage. For more information, see [What do I do if the number of connections to my instance reaches the upper limit?](/help/en/mongodb/support/connection-access-and-network#ab798c52f500i)
        
-   **Cause 2**: Incorrect whitelist settings.
    
    **Solution**: [Add the correct IP address to an IP address whitelist of the ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    

-   `Timed out after 3000ms while waiting for a server that matches ReadPreferenceServerSelector{readPreference=primary}. exception=(com.mongodb.MongoSocketReadException: Prematurely reached end of stream)`
    
-   `Socket recv() errno:54 Connection reset by peer x.x.x.x:27017`
    

The number of connections to the ApsaraDB for MongoDB instance may have reached the upper limit, and no new connections can be established.

**Solution**:

1.  Check whether the instance connections are exhausted. For more information, see [How do I query the number of connections to my instance?](/help/en/mongodb/support/connection-access-and-network#c28cd557bcwc6)
    
2.  Optimize connection usage. For more information, see [What do I do if the number of connections to my instance reaches the upper limit?](/help/en/mongodb/support/connection-access-and-network#ab798c52f500i)
    

`MongoDB.Driver.MongoWaitQueueFullException: The wait queue for acquiring a connection to server xxx is full.`

The wait queue of the MongoDB driver is full, which may be caused by a small number of connections specified for a connection pool or high concurrent requests. Therefore, no available connections are provided.

**Solution**:

1.  We recommend that you first check the connection pool settings of the program for which this error is reported. For example, make sure that a reasonable number of connections is specified for a connection pool. For more information, see [How do I limit the number of connections from my client?](/help/en/mongodb/support/connection-access-and-network#6f31e2f557p4u)
    
2.  If this issue persists after you adjust the program, check whether the ApsaraDB for MongoDB instance has exhausted its connections. For more information, see the following topics:
    
    1.  [How do I query the number of connections to my instance?](/help/en/mongodb/support/connection-access-and-network#c28cd557bcwc6)
        
    2.  [What do I do if the number of connections to my instance reaches the upper limit?](/help/en/mongodb/support/connection-access-and-network#ab798c52f500i)
        

`(TooManyLogicalSessions) Unable to add session into the cache because the number of active sessions is too high.`

When an excessive number of concurrent connections are established, available sessions may be exhausted.

**Solution**:

1.  Troubleshoot failed connection issues caused by exhausted connections. For more information, see the following topics:
    
    1.  [How do I query the number of connections to my instance?](/help/en/mongodb/support/connection-access-and-network#c28cd557bcwc6)
        
    2.  [What do I do if the number of connections to my instance reaches the upper limit?](/help/en/mongodb/support/connection-access-and-network#ab798c52f500i)
        
2.  If no issues occur in the terms of the number of connections, check whether other instance performance items cannot meet business requirements.
    
    1.  Use the [node monitoring](/help/en/mongodb/user-guide/basic-monitoring#3164bdd90de40) feature to check the usage of common resources (such as CPU utilization and memory usage) and then determine whether the instance specifications meet business requirements.
        
    2.  If the instance specifications are excessively small but the load is high, you can [change the instance configurations](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-1580302) during off-peak hours.
        

-   `getaddrinfo failed.`
    
-   ``No suitable servers found (`serverSelectionTryOnce` set).``
    

Check whether the used instance endpoint is correct. For more information about instance endpoints, see the following topics:

-   [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance#concept-44623-zh)
    
-   [Connect to a sharded cluster instance](/help/en/mongodb/user-guide/connect-to-a-sharded-cluster-instance)
    

-   `Failed to connect to 10.*.*.8:3717 after 5000 milliseconds, giving up.Error: couldn't connect to server 10.*.*.8:3717 (10.*.*.8), connection attempt failed`
    
-   `pymongo.errors.ServerSelectionTimeoutError: dds-xxxx.mongodb.rds.aliyuncs.com:3717: [Errno 113] No route to host,dds-xxxx.mongodb.rds.aliyuncs.com:3717`
    
-   `InvalidInstanceId.NotFound: The instance not in current vpc.`
    

The ECS instance fails to connect to the ApsaraDB for MongoDB instance over a private network.

**Solution**:

1.  Check whitelist settings. Make sure that the private IP address of the ECS instance is [added to an IP address whitelist of the ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    
2.  Ensure network connectivity between the ECS instance and the ApsaraDB for MongoDB instance.
    
    If the ECS instance and the ApsaraDB for MongoDB instance are in the same VPC, the two instances can directly interconnect over a private network. To connect the ECS instance to the ApsaraDB for MongoDB instance across VPCs, you can use one of the following methods:
    
    -   Migrate the two instances to the same VPC. For more information, see [Connect an ECS instance to an ApsaraDB for MongoDB instance in a different region over the internal network](/help/en/mongodb/user-guide/how-to-connect-an-ecs-instance-to-an-apsaradb-for-mongodb-instance-when-they-are-in-different-regions) and [Connect an ECS instance to an ApsaraDB for MongoDB instance within a different Alibaba Cloud account over the internal network](/help/en/mongodb/user-guide/connect-an-ecs-instance-with-an-apsaradb-for-mongodb-instance-in-another-alibaba-cloud-account).
        
    -   Make sure that the network segments to be interconnected do not conflict, and a connection is established between different VPCs. For more information, see [Method 3: Establish a connection between the ECS instance and the ApsaraDB for MongoDB instance by using CEN](/help/en/mongodb/user-guide/connect-an-ecs-instance-with-an-apsaradb-for-mongodb-instance-in-another-alibaba-cloud-account#section-y3p-rcn-jhb).
        

`org.springframework.data.mongodb.UncategorizedMongoDbException: Timeout while receiving message; nested exception is com.mongodb.MongoSocketReadTimeoutException: Timeout while receiving message`

-   **Cause 1**: Abnormal slow queries consume instance resources, which causes CPU utilization to spike or even reach its peak.
    
    **Solution**: Check whether slow queries exist and consider adding indexes for optimization. For more information, see [Troubleshoot high CPU utilization issues on an instance](/help/en/mongodb/user-guide/troubleshoot-high-cpu-utilization-on-an-apsaradb-for-mongodb-instance#concept-2039531).
    
-   **Cause 2**: Incorrect connection pool settings on the application side, such as timeout settings.
    
    **Solution**: For more information, see the following topics:
    
    1.  [How do I query the number of connections to my instance?](/help/en/mongodb/support/connection-access-and-network#c28cd557bcwc6)
        
    2.  [What do I do if the number of connections to my instance reaches the upper limit?](/help/en/mongodb/support/connection-access-and-network#ab798c52f500i)
        

-   `"errmsg": "not master", "code": 10107, "codeName": "NotMaster"`
    
-   `"errmsg": "not master", "code": 10107, "codeName": "NotWritablePrimary"`
    
-   `Time out after 30000ms while waiting for a server that matches writableServerSelector.`
    
-   `Command failed with error 10107 (NotWritablePrimary): 'not primary' on server xxx`.
    
-   `Explain's child command cannot run on this node. Are you explaining a write command on a secondary?`
    
-   `not master and slaveOk=false.`
    
-   `MongoNotPrimaryException: Command failed with error 10107 (NotMaster): 'not master' on server xxx.`
    
-   `reason: TopologyDescription { type: 'ReplicaSetNoPrimary',...}`
    

Data is not written to the primary node in the replica set instance.

**Cause**: You can perform write operations only on the primary node. If you previously used the endpoint of the primary node for connection, the connected node becomes a secondary node and write operations fail after a primary/secondary switchover.

**Solution**:

-   If your application runs in a production environment, we recommend that you use a connection string URI to connect your application to the instance. When a node fails, read/write operations on your application are not affected by a primary/secondary switchover. For more information about instance endpoints, see the following topics:
    
    -   [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance#concept-44623-zh)
        
    -   [Connect to a sharded cluster instance](/help/en/mongodb/user-guide/connect-to-a-sharded-cluster-instance)
        
-   Manually [switch the role of a node](/help/en/mongodb/user-guide/switch-node-roles#concept-943865). Switch the node whose endpoint is used for connection to the new primary node.
    

We recommend that you ensure that your application can automatically reconnect to an ApsaraDB for MongoDB instance after it is disconnected and handle exceptions to protect business continuity.

`[Unauthorized] cloud instance error, disk locked, plz check and upgrade your disk quota,`

The ApsaraDB for MongoDB instance is locked due to exhausted disk space.

**Solution**: For more information, see [What do I do if my instance is locked or data cannot be written to the instance due to exhausted disk space?](/help/en/mongodb/support/what-do-i-do-if-my-apsaradb-for-mongodb-instance-is-locked-due-to-exhausted-disk-space#concept-1235079)

`(AuthenticationFailed) Authentication failed.`

-   **Cause 1**: The password of the database account contains special characters. Special characters include `! @ # $ % ^ & * ( ) _ + =`
    
    **Solution**: For more information, see [How do I resolve failed connection issues due to special characters in the account name or password in a connection string?](/help/en/mongodb/support/connection-access-and-network#f6af5f0b4fvfk)
    
-   **Cause 2:** The password of the provided database account is incorrect.
    
    **Solution**: Confirm the account name and passwor, or [reset the password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance#concept-lps-vqr-33b) and try again.
    
-   **Cause 3**: The authentication database in the used instance endpoint is incorrect.
    
    **Solution**: Specify the correct authentication database in the instance endpoint. For more information, see [How do I specify an authentication database in a connection?](/help/en/mongodb/support/connection-access-and-network#d9f159a056idz)
    
-   **Cause 4**: The client version is excessively earlier.
    
    **Solution**: The mongo shell version must be 3.0 or later. For more information about detailed installation steps, see [Install MongoDB](https://docs.mongodb.com/v3.4/installation/). For more information about the version requirements of clients in other languages, see [MongoDB Compatibility Tables](https://docs.mongodb.com/ecosystem/drivers/driver-compatibility-reference/).
    

-   `!xxx@dds-xxx.mongodb.rds.aliyuncs.com: event not found`
    

The password of the provided database account contains special characters. Special characters include `! @ # $ % ^ & * ( ) _ + =`

**Solution**: For more information, see [How do I resolve failed connection issues due to special characters in the account name or password in a connection string?](/help/en/mongodb/support/connection-access-and-network#f6af5f0b4fvfk)

`error getting cluster ID: (CommandNotFound) replSetGetConfig is forbidden by cloud provider for security reason`

ApsaraDB for MongoDB does not support the `replSetGetConfig` command. For more information, see [What commands are supported and not supported by ApsaraDB for MongoDB?](/help/en/mongodb/support/what-commands-are-supported-and-not-supported-by-apsaradb-for-mongodb#concept-39953-zh)

### **Errors when upgrading from version 4.2 to 4.4**

**Error message**

**Cause and solution**

CHECK\_USER\_COLLECTIONS\_IN\_ADMIN\_FAILED

**Cause**: The `admin` database contains non-system collections. For security reasons, root and custom accounts can no longer have write permissions on the \`admin\` database in versions 4.4 and later. You must move these custom collections to other databases.

**Solution**:

1.  Run the following command to move the `old_collection` collection to the `new_collection` collection in `new_db`. The old and new collection names can be the same.
    
    ```
    db.getSiblingDB("admin").runCommand({renameCollection: "<admin.old_collection>", to: "<new_db.new_collection>"})
    ```
    
    **Important**
    
    If the collection is large, the command might take a long time to run. During this time, all write operations to the collection are blocked. Reserve a sufficient O&M window for the migration.
    
2.  After the rename operation is complete, run the `drop` command to delete the original collection. You can then upgrade to version 4.4.
    
    ```
    db.getSiblingDB("admin").getCollection("<old_collection>").drop()
    ```
    

CHECK\_USERS\_AND\_ROLES\_FAILED

**Cause**: The `admin` database contains custom privileged accounts. For security reasons, root and custom accounts can no longer have write permissions on the `admin` database in versions 4.4 and later. You must remove the `admin` database write permissions from custom accounts.

**Solution**: The account and role that require changes are displayed in the error message in the console: "user **my\_user** has high privilege role **readWrite**". Run the following command to remove the `readWrite` role from the `my_user` account on the `admin` database.

**Important**

Before you run the command, make sure that your application does not use this account to write data to the `admin` database.

```
db.getSiblingDB("admin").runCommand({revokeRolesFromUser: "my_user", roles: [{role: "readWrite", db: "admin"}]})
```
