This topic describes the permissions on ApsaraDB for MongoDB that are granted to the root account.

After you create an ApsaraDB for MongoDB instance, the system automatically creates a root account in the admin database. The permissions that are granted to the root account vary based on the instance version. The root account is granted the following permissions for different instance versions:

-   If the instance runs MongoDB 4.2 and earlier: the root account has the permissions of the built-in root role in ApsaraDB for MongoDB.
    
-   If the instance runs MongoDB 4.4 or later, the root account has the permissions of the [alibabaCloudAdmin](#f61d3389a0y5j) role.
    
    **Important**
    
    In some scenarios, severe performance jitter may occur when you write data to the admin database. Therefore, the alibabaCloudAdmin role does not have the write permissions on the admin database, and cannot create accounts that have the write permissions on the admin database.
    

You can run the `rolesInfo` command to view the permissions of a specific role. For more information about the permissions of the root role and the `rolesInfo` command, see [root](https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-root) and [rolesInfo](https://www.mongodb.com/docs/manual/reference/command/rolesInfo/).

**Important**

To ensure data security, we recommend that you do not use the root account to manage your databases. We recommend that you create a database account that has relevant permissions based on your business requirements. For more information, see [Create an account for an ApsaraDB for MongoDB instance](/help/en/mongodb/support/create-an-account-for-an-apsaradb-for-mongodb-instance#concept-vmn-5sc-lfb).

You can run the following command to view the permissions of the root account:

```
db.getSiblingDB("admin").runCommand({usersInfo: "root"});
```

**Note**

For more information about the `usersInfo` command, see [usersInfo](https://www.mongodb.com/docs/manual/reference/command/usersInfo/).

## **Permissions of the alibabaCloudAdmin role**

-   The role is granted the permissions (such as read and writing collections, managing accounts, and querying statistics) of the following built-in roles: [readWriteAnyDatabase](https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-readWriteAnyDatabase), [userAdminAnyDatabase](https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-userAdminAnyDatabase), [dbAdminAnyDatabase](https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-dbAdminAnyDatabase), [clusterMonitor](https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-clusterMonitor), [backup](https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-backup), [enableSharding](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-enableSharding), [restore](https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-restore).
    
    **Note**
    
    The alibabaCloudAdmin role has only read permissions on the admin database.
    
-   The following commands are supported for sharded cluster instances: flushRouterConfig, cleanupOrphaned, runCommandOnShard, splitVector, clearJumboFlag, moveChunk, and splitChunk.
    

## **FAQ**

**Why am I unable to create a privileged user or role such as clusterAdmin, clusterManager, and hostManager?**

The alibabaCloudAdmin role has limited permissions. Therefore, a custom user or role cannot be granted permissions that exceed the existing permission scope of the root account when you are creating the user or role.

**Why am I unable to create a user or role that has the readWrite, dbAdmin, or dbOwner permission in the admin database?**

The alibabaCloudAdmin role has only read permissions on the admin database. You cannot assume this role to write data to the database. You can create a user or role that has these built-in permissions in other databases.

**How do I create a user that has read/write permissions on all custom collections?**

You can create an account that has the readWriteAnyDatabase, dbAdminAnyDatabase, or userAdminAnyDatabase built-in role in the admin database. Sample command:

```
db.getSiblingDB("admin").createUser({user:"myName",pwd:"myPassword",roles:["readWriteAnyDatabase"]})
```

**The clusterManager role has permissions to run many commands related to the O&M of sharded cluster instances. How do I use these commands if I cannot create the role?**

By default, the root account that has the permissions of the alibabaCloudAdmin role can run some commands related to the O&M of sharded cluster instances. You can use the root account to run these commands.

If you want to create a custom account to run O&M commands, use the following method to create a user. The following example shows how to create a user that supports the splitVector command:

```
db.runCommand({createRole:'myRole',privileges:[{"resource":{"db":"","collection":""},"actions":['splitVector']}],roles:['readAnyDatabase']})

db.getSiblingDB("admin").createUser({user:"myUser",pwd:"myPassword",roles:["myRole"]})
```

**Why does an error indicate that my new account has no permissions to perform aggregation operations when I use change streams in the admin database?**

You must ensure that the new account has the readAnyDatabase permissions on other databases and then grant read permissions on the admin database to the account.

Assume that the custom account is `myUser`. You can run the following command to grant read permissionson the admin database to the custom account:

```
db.adminCommand({ grantRolesToUser: "myUser", roles: [{ role: "read", db: "admin"}]})
```

The built-in `xxxAnyDatabase` permission of ApsaraDB for MongoDB differs from the official behavior. The built-in permission does not cover the config, local, and admin databases. Therefore, you must additionally grant read permissions on the admin database.

**why does the returned result show that a role has no permissions when I use** [**flink-sql-connector-mongodb-cdc**](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.1/docs/connectors/flink-sources/mongodb-cdc/#availability) **to create the role based on a given example?**

The listDatabases action applies to the entire cluster and must be executed in Cluster Resource. You can run the following command to create a custom role:

```
db.createRole(
    {
        role: "flinkrole",
        privileges: [
        {
            resource: { db: "", collection: "" },
            actions: [
                "splitVector",
                "listCollections",
                "collStats",
                "find",
                "changeStream" ]
        },
        {
            resource: { "cluster": true }, 
            actions: [ "listDatabases" ]
        }
        ],
        roles: [
            { role: 'read', db: 'config' }
        ]
    }
);
```

If an error still occurs when you use the CDC service after the role and user are created, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact Alibaba Cloud technical support.
