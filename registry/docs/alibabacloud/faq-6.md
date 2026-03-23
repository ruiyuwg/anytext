This topic provides answers to some frequently asked questions about real-time data synchronization to Hologres.

-   [What do I do if the connectivity test fails for a PolarDB data source?](#section-xfl-0kv-6i3)
    
-   [What do I do if the connectivity test fails for an Oracle data source?](#section-lq1-h68-ctg)
    
-   [What do I do if the connectivity test fails for a MySQL data source?](#section-ziv-x1z-576)
    
-   [The system displays the following error message for a real-time data synchronization node: com.alibaba.otter.canal.parse.exception.PositionNotFoundException: can't find start position for XXX. What do I do?](#section-r3j-npw-ivi)
    
-   [The system displays the following error message for a real-time data synchronization node: com.alibaba.otter.canal.parse.exception.CanalParseException: command : 'show master status' has an error! pls check. you need (at least one of) the SUPER,REPLICATION CLIENT privilege(s) for this operation. What do I do?](#section-l6e-zbs-vmc)
    
-   [The system displays the following error message for a real-time data synchronization node: com.alibaba.datax.plugin.reader.mysqlbinlogreader.MysqlBinlogReaderException: The mysql server does not enable the binlog write function. Please enable the mysql binlog write function first. What do I do?](#section-tig-5zz-2ev)
    

## What do I do if the connectivity test fails for a PolarDB data source?

-   Problem description: The connectivity test fails when I add a PolarDB data source.
    
-   Solution: Set Configuration Mode to Connection Mode and check the whitelist configuration of the PolarDB cluster and the virtual private cloud (VPC) configuration of your exclusive resource group.
    

## What do I do if the connectivity test fails for an Oracle data source?

-   Problem description: The connectivity test fails when I add an Oracle data source.
    
-   Solution: Set Configuration Mode to Connection Mode and check the whitelist configuration of the PolarDB cluster and the virtual private cloud (VPC) configuration of your exclusive resource group.
    

## What do I do if the connectivity test fails for a MySQL data source?

-   Problem description: The connectivity test fails when I add a MySQL data source.
    
-   Solution: Set Configuration Mode to Connection Mode and check the whitelist configuration of the PolarDB cluster and the virtual private cloud (VPC) configuration of your exclusive resource group.
    

## The system displays the following error message for a real-time data synchronization node: com.alibaba.otter.canal.parse.exception.PositionNotFoundException: can't find start position for XXX. What do I do?

-   Problem description: The real-time synchronization node fails to run, and the system displays the error message "`com.alibaba.otter.canal.parse.exception.PositionNotFoundException: can't find start position for XXX`."
    
-   Cause: The binary logging feature is disabled for the PolarDB data source.
    
-   Solution: Enable the binary logging feature for the PolarDB data source. For more information, see [Configure a data source (PolarDB)](/help/en/dataworks/configure-a-polardb-data-source-as-the-source#task-2010754). Change one or more data records and change the start time to run the real-time data synchronization node to the current time.
    

## The system displays the following error message for a real-time data synchronization node: com.alibaba.otter.canal.parse.exception.CanalParseException: command : 'show master status' has an error! pls check. you need (at least one of) the SUPER,REPLICATION CLIENT privilege(s) for this operation. What do I do?

-   Problem description: The real-time synchronization node fails to run, and the system displays the error message "`com.alibaba.otter.canal.parse.exception.CanalParseException: command : 'show master status' has an error! pls check. you need (at least one of) the SUPER,REPLICATION CLIENT privilege(s) for this operation`."
    
-   Cause: The account used to synchronize data is not authorized to access the PolarDB data source, or the PolarDB database connected is not deployed on the PolarDB Writer node.
    
-   Solution: Refer to the operations in [Configure a data source (PolarDB)](/help/en/dataworks/configure-a-polardb-data-source-as-the-source#task-2010754) to authorize the account to access the PolarDB data source. Alternatively, check whether the PolarDB database connected is deployed on the primary node. During the running of a real-time data synchronization node, the system cannot capture data from the read-only nodes of the PolarDB cluster.
    

## The system displays the following error message for a real-time data synchronization node: com.alibaba.datax.plugin.reader.mysqlbinlogreader.MysqlBinlogReaderException: The mysql server does not enable the binlog write function. Please enable the mysql binlog write function first. What do I do?

-   Problem description: The real-time synchronization node fails to run, and the system displays the error message "`com.alibaba.datax.plugin.reader.mysqlbinlogreader.MysqlBinlogReaderException: The mysql server does not enable the binlog write function. Please enable the mysql binlog write function first`."
    
-   Cause: The loose\_polar\_log\_bin parameter is not specified for the PolarDB data source.
    
-   Solution: Specify the loose\_polar\_log\_bin parameter. For more information, see [Configure a data source (PolarDB)](/help/en/dataworks/configure-a-polardb-data-source-as-the-source#task-2010754).
