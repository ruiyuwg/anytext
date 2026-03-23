This topic describes the common ports of open source components.

**Component**

**Port**

**Description**

**Hadoop 2.X**

**50070**

The web UI port of HDFS.

Parameter: dfs.namenode.http-address or dfs.http.address.

**Note**

The dfs.http.address parameter has expired but can still be used.

**50075**

The web UI port of DataNode.

**50010**

The service port of DataNode. This port is used to transfer data.

**50020**

The port of the inter-process communication (IPC) service.

**8020**

The remote procedure call (RPC) port of HDFS in a high-availability (HA) cluster.

**8025**

The port of ResourceManager.

Parameter: yarn.resourcemanager.resource-tracker.address.

**9000**

The RPC port of HDFS in a non-HA cluster.

Parameter: fs.defaultFS or fs.default.name.

**Note**

The fs.default.name parameter has expired but can still be used.

**8088**

The web UI port of YARN.

**8485**

The RPC port of JournalNode.

**8019**

The port of ZKFailoverController (ZKFC).

**19888**

The web UI port of JobHistory Server.

Parameter: mapreduce.jobhistory.webapp.address.

**10020**

The web UI port of JobHistory Server.

Parameter: mapreduce.jobhistory.address.

**Hadoop 3.X**

**8020**

The port of NameNode.

Parameter: dfs.namenode.http-address or dfs.http.address.

**Note**

The dfs.http.address parameter has expired but can still be used.

**9870**

**9871**

The port of NameNode.

**9866**

The port of DataNode.

**9864**

The port of DataNode.

**9865**

The port of DataNode.

**8088**

The port of ResourceManager.

Parameter: yarn.resourcemanager.webapp.address.

**MapReduce**

**8021**

The port of JobTracker.

Parameter: mapreduce.jobtracker.address.

**Zookeeper**

**2181**

The port that is used to connect a client to ZooKeeper.

**2888**

The internal communication port of a ZooKeeper cluster. The leader listens on this port.

**3888**

The ZooKeeper port that is used to elect a leader.

**HBase**

**16010**

The web UI port of the master node of HBase.

Parameter: hbase.master.info.port.

**16000**

The port of HMaster.

Parameter: hbase.master.port.

**16030**

The web UI management port of RegionServer of HBase.

Parameter: hbase.regionserver.info.port.

**16020**

The port of HRegionServer.

Parameter: hbase.regionserver.port.

**9099**

The port of Thrift Server.

**Hive**

**9083**

The default listening port of the MetaStore service.

**10000**

The Java Database Connectivity (JDBC) port of Hive.

**10001**

The JDBC port of Spark Thrift Server.

**Spark**

**7077**

-   The port on which the master node of Spark communicates with the worker nodes.
    
-   The port on which a standalone cluster submits applications.
    

**8080**

The web UI port of the master node. This port is used to schedule resources.

**8081**

The web UI port of a worker node. This port is used to schedule resources.

**4040**

The web UI port of Driver. This port is used to schedule tasks.

**18080**

The web UI port of Spark History Server.

**Kafka**

**9092**

The RPC port that is used for communication among the nodes of a Kafka cluster.

**Redis**

**6379**

The port of the Redis service.

**HUE**

**8888**

The web UI port of Hue.

**Oozie**

**11000**

The web UI port of Oozie.

**Druid**

**18888**

The web UI port of Druid.

**18090**

The port of Overlord.

Parameter: **druid.plaintextPort** on the **overlord.runtime** tab.

**18091**

The port of MiddleManager.

Parameter: **druid.plaintextPort** on the **middleManager.runtime** tab.

**18081**

The port of Coordinator.

Parameter: **druid.plaintextPort** on the **coordinator.runtime** tab.

**18083**

The port of Historical.

Parameter: **druid.plaintextPort** on the **historical.runtime** tab.

**18082**

The port of Broker.

Parameter: **druid.plaintextPort** on the **broker.runtime** tab.

**Ganglia**

**9292**

The web UI port of Ganglia.

**Ranger**

**6080**

The web UI port of Ranger.

**Kafka Manager**

**8085**

The port of Kafka Manager.

**Superset**

**18088**

The web UI port of Superset.

**Impala**

**21050**

The JDBC port that is used to connect to Impala.

**Presto**

**9090**

The web UI port of Presto.
