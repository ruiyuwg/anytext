You can use DMS or the mongo shell to log on to the ApsaraDB for MongoDB console. This topic describes the typical problems that may occur when you use the mongo shell to log on to ApsaraDB for MongoDB and the corresponding solutions.

## The message "connection attempt failed" is displayed

Issue:

```
#mongo --host ali12345678.mongodb.rds.aliyuncs.com:3717 --authenticationDatabase admin -u test -p xxx
MongoDB shell version: 3.2.3
DB Prefix:
connecting to: 10.1.2.8:3717/admin
2016-05-31T15:25:58.940+0800 W NETWORK  Failed to connect to 10.*.*.8:3717 after 5000 milliseconds, giving up.
2016-05-31T15:25:58.943+0800 E QUERY    Error: couldn't connect to server 10.*.*.8:3717 (10.1.2.8), connection attempt failed
    at connect (src/mongo/shell/mongo.js:181:14)
    at (connect):1:6 at src/mongo/shell/mongo.js:181
exception: connect failed
```

**Possible cause**

**Solution**

The Elastic Compute Service (ECS) instance on which you run the mongo shell command and the ApsaraDB for MongoDB instance are not in the same virtual private cloud (VPC) or have different network types.

-   If the ECS instance and the ApsaraDB for MongoDB instance are not located in the same VPC, switch the network type of the ApsaraDB for MongoDB instance to classic network and then switch back to VPC.
    
    **Note**
    
    When you switch the network type of the ApsaraDB for MongoDB instance back to VPC, select the VPC of the ECS instance for the ApsaraDB for MongoDB instance.
    
-   If the ECS instance and the ApsaraDB for MongoDB instance have different network types, perform the corresponding operations. For more information, see [Connect an ECS instance to an ApsaraDB for MongoDB instance when their network types are different](/help/en/mongodb/user-guide/connect-an-ecs-instance-to-an-apsaradb-for-mongodb-instance-when-their-network-types-are-different#concept-pqx-xcv-hhb).
    

Supplementary troubleshooting method: You can run a Telnet command such as `telnet dds-ali123456789.mongodb.rds.aliyuncs.com 3717` to check whether the ApsaraDB for MongoDB instance is accessible.

![Test the port](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7837297751/p34454.png)This figure shows that the URL can be resolved and port 3717 works as expected.

## The message "Authentication failed" is displayed

Issue:

```
#mongo --host ali12345678.mongodb.rds.aliyuncs.com:3717  --authenticationDatabase admin -u test -p xxx
MongoDB shell version: 3.2.3
connecting to: 10.1.2.8:3717/test
2016-05-31T15:50:18.623+0800 E QUERY    Error: 18 Authentication failed.
    at DB._authOrThrow (src/mongo/shell/db.js:1271:32)
    at (auth):6:8
    at (auth):7:2 at src/mongo/shell/db.js:1271
exception: login failed
```

**Possible cause**

**Solution**

The username used for database logon is incorrect.

Log on to the database with the correct username.

The password used for database logon is incorrect.

Log on to the database with the correct password.

The logon user does not match the authentication database.

Match the user with the authentication database. For example, the root user is a user of the admin database, so the authentication database must be assigned as admin if you want to use this user for database logon.

The client version is outdated.

Make sure that the mongo shell version is 3.0 or later. For information about how to install the mongo shell, see [Install MongoDB](https://docs.mongodb.com/v3.4/installation/). For version requirements of clients in other programming languages, see [Driver compatibility documentation](https://docs.mongodb.com/ecosystem/drivers/driver-compatibility-reference/).

## A network error occurs when you run the isMaster command

Issue:

```
#mongo --host ali12345678.mongodb.rds.aliyuncs.com:3717 --authenticationDatabase test -u test -p xxxxxx
MongoDB shell version v3.4.10
connecting to: mongodb:ali1234567878.mongodb.rds.aliyuncs.com:3717/
2018-12-18T14:26:11.946+0800 E QUERY    [thread1] Error: network error while attempting to run command 'isMaster' on host 'ft12345678.mongodb.rds.aliyuncs.com:3717'  :
connect@src/mongo/shell/mongo.js:237:13
@(connect):1:6
exception: connect failed
```

**Possible cause**

**Solution**

The IP address of the ECS instance is not in a whitelist of the ApsaraDB for MongoDB instance.

Add the IP address of the ECS instance to a whitelist of the ApsaraDB for MongoDB instance. For more information, see [Configure a whitelist or an ECS security group for an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-s1t-yhg-y2b).

## The message "Timeout while receiving message" is displayed

```
org.springframework.data.mongodb.UncategorizedMongoDbException: Timeout while receiving message; nested exception is com.mongodb.MongoSocketReadTimeoutException: Timeout while receiving message
```

**Possible cause**

**Solution**

Abnormal slow queries occupy instance resources and cause CPU utilization to surge or even peak.

Check for slow queries. We recommend that you create indexes for optimization. For more information, see [How do I troubleshoot the high CPU utilization of ApsaraDB for MongoDB?](/help/en/mongodb/use-cases/troubleshoot-the-high-cpu-utilization-of-apsaradb-for-mongodb#concept-62224-zh).

The configuration of the application connection pool, such as the timeout setting, is incorrect.

For more information, see [How do I query and limit the number of connections?](/help/en/mongodb/how-do-i-query-and-limit-the-number-of-connections#concept-xzf-lyd-lfb)

## Common connection scenarios

-   [Connect to an ApsaraDB for MongoDB instance over the Internet](/help/en/mongodb/user-guide/connect-to-an-apsaradb-for-mongodb-instance-over-the-internet#concept-183456)
    
-   [Connect an ECS instance to an ApsaraDB for MongoDB instance when their network types are different](/help/en/mongodb/user-guide/connect-an-ecs-instance-to-an-apsaradb-for-mongodb-instance-when-their-network-types-are-different#concept-pqx-xcv-hhb)
    
-   [Connect an ECS instance in a region to an ApsaraDB for MongoDB instance in another region](/help/en/mongodb/user-guide/how-to-connect-an-ecs-instance-to-an-apsaradb-for-mongodb-instance-when-they-are-in-different-regions#concept-zmx-c1g-jhb)
    
-   [Connect an ECS instance to an ApsaraDB for MongoDB instance in another Alibaba Cloud account](/help/en/mongodb/user-guide/connect-an-ecs-instance-with-an-apsaradb-for-mongodb-instance-in-another-alibaba-cloud-account#concept-tqc-nxm-jhb)
