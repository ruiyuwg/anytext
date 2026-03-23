This topic describes how to restore data from an ApsaraDB for MongoDB instance to a self-managed MongoDB database standalone or replica set mode by using physical backup files.

## Prerequisites

-   The instance is a replica set instance.
    
-   The instance uses local disks to store data.
    
-   The Transparent Data Encryption (TDE) feature is disabled for the instance. For more information, see [Configure TDE for an instance](/help/en/mongodb/user-guide/configure-tde-for-an-apsaradb-for-mongodb-instance#task-1796793).
    
-   The storage engine of the instance is WiredTiger or RocksDB. If the storage engine of the instance is TerarkDB, you can restore the instance data to a self-managed database by using logical backup. For more information, see [Restore the instance data to a self-managed MongoDB database by using logical backup](/help/en/mongodb/user-guide/restore-data-of-an-apsaradb-for-mongodb-instance-to-a-self-managed-mongodb-database-by-using-logical-backup#task336).
    
    **Note**
    
    -   You can view the storage engine of the instance on the **Basic Information** page in the ApsaraDB for MongoDB console.
        
    -   If the storage engine of the instance is RocksDB, you must compile and install a MongoDB application that is equipped with the RocksDB storage engine.
        
    

## Database version requirements

The version of the instance must correspond to the version of the self-managed MongoDB database. The following table lists the mappings between the instance and the self-managed MongoDB database.

**ApsaraDB for MongoDB instance**

**Self-managed MongoDB database**

MongoDB 3.2

MongoDB 3.2 or 3.4

MongoDB 3.4

MongoDB 3.4

MongoDB 4.0

MongoDB 4.0

MongoDB 4.2

MongoDB 4.2

## Formats of physical backup files

**Physical backup file format**

**File name extension**

**Description**

TAR

.tar.gz

ApsaraDB for MongoDB instances that were created before March 26, 2019 have physical backup files in the .tar format.

xbstream

\_qp.xb

ApsaraDB for MongoDB instances that were created on or after March 26, 2019 have physical backup files in the .xbstream format.

**Note**

The .xbstream format is available only for Linux. The .xbstream format is unavailable for Windows because Windows does not support the Percona XtraBackup tool that is used to decompress the files in the .xbstream format.

## Environment

-   The following procedure uses an Elastic Compute Service (ECS) instance created from an Ubuntu 16.04 64-bit image. For more information about how to create an ECS instance, see [Create an instance by using the wizard](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    
-   MongoDB of the required version is installed on the ECS instance. For more information about how to install MongoDB, see [Add a MongoDB Driver](https://docs.mongodb.com/guides/server/install/).
    
-   Environment variables are configured for the self-managed MongoDB database on the ECS instance. When you run commands, you do not need to enter executable file paths again. For more information, see [Step 1: Configure environment variables](#section-qbj-vae-xyv).
    
-   The /test/mongo/data directory of the ECS instance is used for the replica set instance.
    
-   The /test/mongo/data1 and /test/mongo/data2 directories of the ECS instance are used for the self-managed MongoDB database in a replica set node.
    

## Step 1: Configure environment variables

Configure environment variables for the self-managed MongoDB database. This way, you do not need to enter executable file paths when you run commands. Before you perform this step, make sure that MongoDB is installed. For more information, visit [Install MongoDB](https://docs.mongodb.com/guides/server/install/).

If environment variables are configured for MongoDB, skip this step and perform the operations in Step 2. For more information, see [Step 2: Download and decompress a physical backup file](#section-lxg-5xp-5fb).

1.  Run the following command to open the `profile` file in Linux:
    
    ```
    sudo vi /etc/profile
    ```
    
2.  Press the `i` key to enter the edit mode. Then, enter the following code in the last line:
    
    ```
    export PATH=$PATH:/<The path of the MongoDB server>/bin
    ```
    
    **Note**
    
    /test/mongo/bin is used as the path of the MongoDB server in this example. Use the actual path when you configure environment variables.
    
    Example:
    
    ```
    export PATH=$PATH:/test/mongo/bin
    ```
    
3.  Press the Esc key to exit the edit mode, and enter `:wq` to save the file and exit.
    
4.  Run the following command to make the configured environment variables take effect:
    
    ```
    source /etc/profile
    ```
    

## Step 2: Download and decompress a physical backup file

1.  Run the following command to download the physical backup data of the instance in the ApsaraDB for MongoDB console. For more information, see [Download the physical backup data of a replica set instance](/help/en/mongodb/user-guide/download-backup-files#task329).
    
    ```
    wget -c '<External download URL of the data backup file>' -O <Custom name of the downloaded data backup file>.<File name extension>
    ```
    
    **Note**
    
    Make sure that the file name extension is `.tar.gz` or `_qp.xb`.
    
2.  Run the following command to create a directory named `data` in the /test/mongo/ directory. Then, move the downloaded physical backup file of the instance to the /test/mongo/data/ directory.
    
    ```
    mkdir -p /test/mongo/data && mv <Name of the physical backup file.Extension> /test/mongo/data
    ```
    
3.  Decompress the physical backup file.
    
    -   If the physical backup file name contains a .tar.gz extension, such as hins20190412.tar.gz, run the following command to decompress the file:
        
        ```
        cd /test/mongo/data/ && tar xzvf hins20190412.tar.gz 
        ```
        
    -   If the physical backup file name contains a \_qp.xb extension, such as hins20190412\_qp.xb, perform the following operations to decompress the file:
        
        1.  Install the Percona XtraBackup and qpress tools. For more information, visit [Installing Percona XtraBackup on Debian and Ubuntu](https://www.percona.com/doc/percona-xtrabackup/2.4/installation/apt_repo.html).
            
        2.  Decompress the physical backup file. In this example, the file name is hins20190412\_qp.xb.
            
            ```
            # Go to the directory where the file is located. 
            cd /test/mongo/data/
            # Decompress the package. 
            cat hins20190412_qp.xb | xbstream -x -v
            # Decompress the physical backup file. 
            innobackupex --decompress --remove-original /test/mongo/data
            ```
            

## Step 3: Restore data to the self-managed MongoDB database in standalone mode

1.  Run the following command to create a configuration file named mongod.conf in the /test/mongo directory:
    
    ```
    touch /test/mongo/mongod.conf
    ```
    
2.  On the command line, enter `vi /test/mongo/mongod.conf` to open the mongod.conf file. Then, press the `i` key to enter the edit mode.
    
    You can select a configuration template based on the storage engine of the instance, and copy the selected configuration template to the mongod.conf configuration file.
    
    **Note**
    
    In this file, enable standalone startup and authorization.
    
    -   WiredTiger
        
        ```
        systemLog:
            destination: file
            path: /test/mongo/mongod.log
            logAppend: true
        security:
            authorization: enabled
        storage:
            dbPath: /test/mongo/data
            directoryPerDB: true
        net:
            port: 27017
            unixDomainSocket:
                enabled: false
        processManagement:
            fork: true
            pidFilePath: /test/mongo/mongod.pid
        ```
        
        **Note**
        
        By default, ApsaraDB for MongoDB uses the WiredTiger storage engine, and the directoryPerDB option is enabled. Therefore, the directoryPerDB option is set to true in the preceding configuration.
        
    -   RocksDB
        
        ```
        systemLog:
            destination: file
            path: /test/mongo/logs/mongod.log
            logAppend: true
        security:
            authorization: enabled
        storage:
            dbPath: /test/mongo/data
                engine: rocksdb
        net:
            port: 27017
            unixDomainSocket:
                enabled: false
        processManagement:
            fork: true
            pidFilePath: /test/mongo/mongod.pid
        ```
        
3.  Press the Esc key to exit the edit mode, and enter `:wq` to save the file and exit.
    
4.  Use the mongod.conf configuration file to start MongoDB.
    
    ```
    mongod -f /test/mongo/mongod.conf
    ```
    
5.  After you start MongoDB, run the following command to log on to the self-managed MongoDB database and go to the mongo shell:
    
    ```
    mongo --host 127.0.0.1 -u <username> -p <password> --authenticationDatabase admin
    ```
    
    -   <username>: the account used to log on to the self-managed MongoDB database. The default value is root.
        
    -   <password>: the password used to log on to the self-managed MongoDB database.
        
        **Note**
        
        If the password contains special characters, you must enclose the password in single quotation marks (' '). Example: 'test123!@#' Otherwise, you may fail to log on to the database.
        
6.  Run the `show dbs` command in the mongo shell to query all available databases on the MongoDB server. This way, you can check whether the restoration is successful.
    
7.  Run the `exit` command in the mongo shell to exit the mongo shell.
    

After you complete the preceding steps, you can start the MongoDB database in standalone mode. To start the database in replica set mode, perform the operations in Step 4.

## Step 4: Start the self-managed MongoDB database in replica set mode

By default, the physical backup files of the instance contain its replica set configurations. To start the self-managed MongoDB database in replica set mode, you must delete the configurations from the physical backups. To start the self-managed MongoDB database in replica set mode, perform the following operations:

1.  On the command line, log on to the database as the test user by using the mongo shell:
    
    ```
    mongo --host 127.0.0.1 -u test -p <Password of the test account> --authenticationDatabase admin
    ```
    
    **Note**
    
    If the password contains special characters, you must enclose the password in single quotation marks (' '). Example: 'test123!@#' Otherwise, you may fail to log on to the database.
    
2.  After you log on to the database, run the commands in the sample code to perform the following operations:
    
    1.  Create a temporary user in the admin database and grant the temporary user the read and write permissions on the local database.
        
    2.  Switch to the temporary user and delete the original replica set configuration of the local database.
        
    3.  Switch back to the test user and delete the temporary user and the temporary permissions.
        
        **Note**
        
        Replace `<Password of the test account>` in the following code with the password of your test account.
        
    
    ```
    use admin
    db.runCommand({
        createRole: "tmprole",
        roles: [
            {
                role: "test",
                db: "admin"
            }
        ],
        privileges: [
            {
                resource: {
                    db: 'local',
                    collection: 'system.replset'
                },
                actions: [
                    'remove'
                ]
            }
        ]
    })
    db.runCommand({
        createUser: "tmpuser",
        pwd: "tmppwd",
        roles: [
            'tmprole'
        ]
    })
    db.auth('tmpuser','tmppwd')
    use local
    db.system.replset.remove({})
    use admin
    db.auth('test','<Password of the test account>')
    db.dropRole('tmprole')
    db.dropUser('tmpuser')
    ```
    
3.  Run the following commands to shut down the MongoDB service and exit the mongo shell:
    
    ```
    use admin
    db.shutdownServer()
    exit
    ```
    
4.  Create the authentication file on the replica set.
    
    To start the database in replica set mode, you must create a key file for all replica set nodes to authenticate each other.
    
    1.  Run the following command to create the keyFile folder in the mongo directory as the authentication file directory and create a key file in the authentication file directory:
        
        ```
        mkdir -p /test/mongo/keyFile && touch /test/mongo/keyFile/mongodb.key
        ```
        
    2.  Run the `vi /test/mongo/keyFile/mongodb.key` command to open the mongodb.key file. Then, press the `i` key to enter the edit mode. Example:
        
        ```
        MongoDB Encrypting File
        ```
        
        **Note**
        
        The key that is used to encrypt data has the following limits:
        
        -   The key must be 6 to 1,024 characters in length.
            
        -   The key can contain only Base64-encoded characters.
            
        -   The key cannot contain equal signs (=).
            
        
    3.  Press the Esc key to exit the edit mode, and enter `:wq` to save the file and exit.
        
    4.  On the command line, run the following command to change the permissions on the authentication file to `400`. This way, only the owner of the file can view the content of the file.
        
        ```
        sudo chmod 400 /test/mongo/keyFile/mongodb.key
        ```
        
    
    **Note**
    
    This authentication file applies to all replica set nodes.
    
5.  Perform the following operations to prepare two empty nodes for the replica set:
    
    1.  Run the following command to create two copies of the mongod.conf file. The two copies are used as the configuration files for the other two nodes.
        
        ```
        cp /test/mongo/mongod.conf /test/mongo/mongod1.conf && cp /test/mongo/mongod.conf /test/mongo/mongod2.conf
        ```
        
    2.  Run the following command to create data directories for the other two nodes:
        
        ```
        mkdir -p /test/mongo/data1 && mkdir -p /test/mongo/data2
        ```
        
6.  Modify the configuration file of each node by performing the following operations:
    
    -   Run the `vi /test/mongo/mongod.conf` command to open the configuration file of Node 1 and modify the file based on the following content. Then, save and exit the configuration file.
        
        ```
        systemLog:
            destination: file
            path: /test/mongo/mongod.log
            logAppend: true
        security:
            authorization: enabled
            keyFile: /test/mongo/keyFile/mongodb.key
        storage:
            dbPath: /test/mongo/data
            directoryPerDB: true
        net:
            bindIp: 127.0.0.1
            port: 27017
            unixDomainSocket:
                enabled: false
        processManagement:
            fork: true
            pidFilePath: /test/mongo/mongod.pid
        replication:
            replSetName: "rs0"
        ```
        
    -   Run the `vi /test/mongo/mongod1.conf` command to open the configuration file of Node 2 and modify the file based on the following content. Then, save and exit the configuration file.
        
        ```
        systemLog:
            destination: file
            path: /test/mongo/mongod1.log
            logAppend: true
        security:
            authorization: enabled
            keyFile: /test/mongo/keyFile/mongodb.key
        storage:
            dbPath: /test/mongo/data1
            directoryPerDB: true
        net:
            bindIp: 127.0.0.1
            port: 27018
            unixDomainSocket:
                enabled: false
        processManagement:
            fork: true
            pidFilePath: /test/mongo/mongod1.pid
        replication:
            replSetName: "rs0"
        ```
        
    -   Run the `vi /test/mongo/mongod2.conf` command to open the configuration file of Node 3 and modify the file based on the following content. Then, save and exit the configuration file.
        
        ```
        systemLog:
            destination: file
            path: /test/mongo/mongod2.log
            logAppend: true
        security:
            authorization: enabled
            keyFile: /test/mongo/keyFile/mongodb.key
        storage:
            dbPath: /test/mongo/data2
            directoryPerDB: true
        net:
            bindIp: 127.0.0.1
            port: 27019
            unixDomainSocket:
                enabled: false
        processManagement:
            fork: true
            pidFilePath: /test/mongo/mongod2.pid
        replication:
            replSetName: "rs0"
        ```
        
    
    You can modify the following parameters in the configuration files:
    
    -   path in systemLog.path: the path to store the MongoDB log files in the current node.
        
    -   dbpath: the path to store the MongoDB data files in the current node.
        
    -   pidFilePath: the path to store the MongoDB process ID (PID) files in the current node.
        
    -   keyFile: the path to store the authentication file for the replica set. All nodes in the replica set must use the same authentication file.
        
    -   bindIp: the IP address of the current node. If all nodes in the replica set are deployed on the same server, they can use the same IP address.
        
    -   port: the port number of the current node. If all nodes in the replica set are deployed on the same server, they must use different port numbers.
        
    -   replication: the configuration of the replica set.
        
    -   replSetName: the name of the replica set.
        
7.  Run the following command to start the three nodes:
    
    ```
    mongod -f /test/mongo/mongod.conf && mongod -f /test/mongo/mongod1.conf && mongod -f /test/mongo/mongod2.conf
    ```
    
8.  After you start the three nodes, use the test account to log on to the self-managed MongoDB database.
    
    ```
    mongo --host 127.0.0.1 -u test -p <Password of the test account> --authenticationDatabase admin
    ```
    
    **Note**
    
    If the password contains special characters, you must enclose the password in single quotation marks (' '). Example: 'test123!@#' Otherwise, you may fail to log on to the database.
    
9.  In the mongo shell, run the following command to add the nodes that you created in the preceding operations to the replica set and initialize the replica set:
    
    ```
    rs.initiate( {
       _id : "rs0",
       version : 1,
       members: [
          { _id: 0, host: "127.0.0.1:27017" , priority : 1},
          { _id: 1, host: "127.0.0.1:27018" , priority : 0},
          { _id: 2, host: "127.0.0.1:27019" , priority : 0}
       ]
    })
    ```
    
    Example of successful initialization:![初始化成功示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7482651161/p207069.png)
    
    **Note**
    
    The `rs.initiate()` command is used in this step. For more information about the command, visit [rs.initiate()](https://docs.mongodb.com/manual/reference/method/rs.initiate/).
    
    After the command is executed, data is synchronized between the two added nodes and the primary node. The time consumed in this process varies based on the size of the backup file. After the data is synchronized, the self-managed MongoDB database is started in replica set mode.
    
10.  Perform the following operations to check whether the self-managed MongoDB database in replica set mode is started:
     
     1.  Run the `exit` command to exit the mongo shell.
         
     2.  Run the following command to log on to the self-managed MongoDB database again:
         
         ```
         mongo -u <username> -p <password> --authenticationDatabase admin
         ```
         
         -   <username>: the account used to log on to the self-managed MongoDB database. The default value is root.
             
         -   <password>: the password used to log on to the self-managed MongoDB database.
             
             **Note**
             
             If the password contains special characters, you must enclose the password in single quotation marks (' '). Example: 'test123!@#' Otherwise, you may fail to log on to the database.
             
     3.  Check whether the self-managed MongoDB database is started in replica set mode. If `<Name of the replica set>:PRIMARY>` is displayed on the left side of the command line in the mongo shell, the self-managed MongoDB database is started in replica set mode.
         

## FAQ

Why does an error occur when I use the specified `mongod.conf` configuration file to start the self-managed MongoDB database?

The common causes include:

-   You may have started the self-managed MongoDB database before you specified the `mongod.conf` configuration file. As a result, the `storage.bson` file is automatically generated in the data directory. In this case, remove the storage.bson file and specify the `mongod.conf` configuration file to start the self-managed MongoDB database.
    
-   Another mongod process may be running in the current system. In this case, run the `ps -e | grep mongod` command to query the PID and run the `kill <PID>` command to stop the process. Then, specify the `mongod.conf` configuration file to start the self-managed MongoDB database.
    
-   The invalid systemLog.path log path may be specified in the `mongod.conf` configuration file. In this case, check whether the specified path exists and whether the log file has the specified name. Example: `path: /<Path of the log file>/<Name of the log file>.log`.
    

Why does an error occur when I use the `mongod.conf` configuration file to start the self-managed MongoDB database in replica set mode?

You may fail to change the permissions on the specified `keyFile` authentication file to `600`. On the command line, run the `sudo chmod 600 <Path of keyFile>` command to modify the permissions.

Why does the system performance become low after I start the self-managed MongoDB database in replica set mode?

After you start the self-managed MongoDB database in replica set mode, the system automatically starts to synchronize the data of the primary node to other nodes. This process can affect the system performance. The system performance returns to normal after the data is synchronized.
