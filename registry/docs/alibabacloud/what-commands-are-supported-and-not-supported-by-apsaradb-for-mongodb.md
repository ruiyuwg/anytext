For more information about official MongoDB commands, see [MongoDB commands](http://docs.mongodb.org/master/reference/command/).

The following table lists the commands supported on ApsaraDB for MongoDB.

  

Command category

Supported

Not supported

Aggregation Commands

-   aggregate
-   distinct
-   count
-   mapReduce

group

**Note** The command is not supported in MongoDB 3.4 and later.

Geospatial Commands

-   geoNear
-   geoSearch

None

Query and Write Operation Commands

-   insert
-   update
-   delete
-   findAndModify
-   getLastError
-   getPrevError
-   resetError
-   parallelCollectionScan

eval

**Note** The command is not supported in MongoDB 3.0 version. The command is removed in MongoDB 4.2.

Query Plan Cache Commands

-   planCacheListFilters
-   planCacheSetFilter
-   planCacheClearFilters
-   planCacheListQueryShapes
-   planCacheListPlans
-   planCacheClear

None

Authentication

-   logout
-   authenticate

-   authSchemaUpgrade
-   copydbgetnonce
-   getnonce
    
    **Note** The command is not supported in MongoDB 4.0 and later.
    

User Management Commands

-   createUser
-   updateUser
-   dropUser
-   dropAllUsersFromDatabase
-   grantRolesToUser
-   revokeRolesFromUser
-   usersInfo

None

Role Management Commands

-   createRole
-   updateRole
-   dropRole
-   dropAllRolesFromDatabase
-   grantPrivilegesToRole
-   revokePrivilegesFromRole
-   grantRolesToRole
-   revokeRolesFromRole
-   rolesInfo
-   invalidateUserCache

None

Diagnostic Commands

-   explain
-   listDatabases
-   dbHash
-   listCommands
-   availableQueryOptions
-   buildInfo
-   collStats
-   dbStats
-   cursorInfo
-   dataSize
-   ping
-   profile
-   top
-   whatsmyuri
-   serverStatus
-   features
-   isSelf
-   validate
-   netstat
-   hostInfo
    
    **Note** The command is supported in Mongodb\_20190725\_1.1.8 and later, and is not supported in Mongodb\_20190409\_1.1.7 and earlier.
    
-   currentConn
    
    The command is self-developed for ApsaraDB for MongoDB and can be used to view the current connection status of an instance. Example: db.adminCommand({currentConn:1}).
    

-   driverOIDTest
-   connPoolStats
-   shardConnPoolStats
-   getCmdLineOpts
-   diagLogging

Instance Administration Commands

-   renameCollection
-   dropDatabase
-   listCollections
-   drop
-   create
-   cloneCollectionAsCapped
-   convertToCapped
-   filemd5
-   createIndexes
-   listIndexes
-   dropIndexes
-   fsync
-   connectionStatus
-   collMod
-   reIndex
-   touch
-   getParameter
-   compact

-   copydb
-   clone
-   clean
-   shutdown
-   logRotate
-   repairDatabase
-   repairCursor
-   setParameter
-   connPoolSync
-   cloneCollection

Replication Commands

-   isMaster
-   applyOps

-   replSetInitiate
-   replSetFreeze
-   replSetMaintenance
-   replSetGetConfig
-   replSetRequestVotes
-   replSetReconfig
-   replSetStepDown
-   replSetSyncFrom
-   replSetElect
-   replSetUpdatePosition
-   resync
-   appendOplogNote

Sharding Commands

\-

-   addShard
-   removeShard
-   getShardVersion
-   setShardVersion
-   unsetSharding
-   checkShardingIndex
