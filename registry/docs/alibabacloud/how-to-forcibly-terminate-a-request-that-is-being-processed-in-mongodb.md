## Overview

This topic describes how to force terminate a request that is being processed in MongoDB.

## Description

> Alibaba Cloud reminds you that:
> 
> -   Before you perform operations that may cause risks, such as modifying instance configurations or data, we recommend that you check the disaster recovery and fault tolerance capabilities of the instances to ensure data security.
> -   You can modify the configurations and data of instances including but not limited to Elastic Compute Service (ECS) and Relational Database Service (RDS) instances. Before the modification, we recommend that you create snapshots or enable RDS log backup.
> -   If you have authorized or submitted sensitive information such as the logon account and password in the Alibaba Cloud Management Console, we recommend that you modify such information in a timely manner.

MongoDB allows you to forcibly terminate a request that is being processed and is not finished. However, you must analyze the request before terminating it. For more information, see the following sections.

1.  Connect to an ApsaraDB for MongoDB instance through the mongo shell.
    
    > **Description**: For more information about how to connect to the instance, see [connect to a standalone instance through the Mongo Shell](/help/en/mongodb/connect-to-a-standalone-instance-by-using-the-mongo-shell), [connect to a replica set instance through the Mongo Shell](/help/en/mongodb/connect-to-a-replica-set-instance-by-using-the-mongo-shell), [connect to a sharded cluster instance through the Mongo Shell](/help/en/mongodb/connect-to-a-sharded-cluster-apsaradb-for-mongodb-instance-by-using-the-mongo-shell).
    
2.  Run the `db.currentOp()` command to check running operations in ApsaraDB for MongoDB.
    
    > **Description**: after you run this command, a description of the output parameters is provided as follows:  
    > 
    > -   client: the client that sends the request.
    > -   opid: the unique identifier of the operation.
    > -   secs\_running: the duration that the operation has been running. Unit: seconds.
    > -   microsecs\_running: the duration that the operation has been running, in microseconds.
    > -   ns: The Target collection of the operation.
    > -   op: indicates the operation type. which is usually query, insert, update, or delete.
    > -   locks: the information about the lock.
    > 
    >   
    
3.  Based on the operation information obtained in the previous step, confirm that the `opid`.
    
    > **Description**: generally, due to business needs, instance CPU usage rises and business responses are slow. In this case, we recommend that you focus on the secs\_running and microsecs\_running parameters. If the value returned by the field is large, check whether the request is reasonable.
    
4.  Run the following command to terminate abnormal requests:
    
    db.killOp(\[$OPID\])
    
    > **Description**:\[$OPID\] is the opid of the operation that terminates the request.
    

## Application scope

-   Metrics for ApsaraDB for MongoDB
