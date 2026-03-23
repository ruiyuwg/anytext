This topic describes the paths of files that are frequently used in E-MapReduce (EMR). You can log on to the master node of your cluster to view the file paths.

## DataLake cluster

### Big data service directories

Big data services are installed in directories in the /opt/apps/xxx format. Examples:

-   HDFS: /opt/apps/HDFS/hdfs-current
    
-   Hive: /opt/apps/HIVE/hive-current
    
-   Hudi: /opt/apps/HUDI/hudi-current
    
-   YARN: /opt/apps/YARN/yarn-current
    
-   Presto: /opt/apps/PRESTO/presto-current
    
-   Ranger: /opt/apps/RANGER/ranger-current
    

You can also log on to the master node of your cluster and run the `env |grep xxx` command to query the directory where a service is installed. Replace `xxx` with the related service name.

For example, you can run the `env |grep hive` command to query the directory where the Hive service is installed.

```
JINDOTABLE_EXTRA_CLASSPATH=/opt/apps/METASTORE/metastore-current/hive2
HIVE_HOME=/opt/apps/HIVE/hive-current
HIVE_LOG_DIR=/var/log/taihao-apps/hive
HIVE_CONF_DIR=/etc/taihao-apps/hive-conf
PATH=/opt/apps/JINDOSDK/jindosdk-current/bin:/opt/apps/HADOOP-COMMON/hadoop-common-current/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/opt/apps/HIVE/hive-current/bin:/opt/apps/JINDODATA/jindodata-current/bin:/opt/apps/JINDODATA/jindodata-current/sbin:/opt/apps/SPARK-EXTENSION/spark-extension-current/bin:/opt/apps/SPARK3/spark-current/bin:/root/bin
OLDPWD=/var/log/emr/hive
```

### Log directories

Logs are stored in directories in the /var/log/emr/xxx format. Examples:

-   Spark: /var/log/emr/spark/
    
-   Hive: /var/log/emr/hive/
    
-   YARN: /var/log/emr/yarn/
    
-   JindoSDK: /var/log/emr/jindosdk/
    

### Configuration file directories

Configuration files are stored in directories in the /etc/emr/xxx format. Examples:

-   HDFS: /etc/emr/hdfs-conf/
    
-   Spark: /etc/emr/spark-conf/
    
-   Hive: /etc/emr/hive-conf/
    
-   Hudi: /etc/emr/hudi-conf/
    
-   Knox: /etc/emr/knox-conf/
    
-   YARN: /etc/emr/hadoop-conf/
    
-   ZooKeeper: /etc/emr/zookeeper-conf/
    

## Hadoop cluster

### Big data service directories

Big data services are installed in directories in the /usr/lib/xxx format. Examples:

-   Hadoop: /usr/lib/hadoop-current
    
-   Spark: /usr/lib/spark-current
    
-   Hive: /usr/lib/hive-current
    
-   Flink: /usr/lib/flink-current
    
-   Flume: /usr/lib/flume-current
    

You can also log on to the master node of your cluster and run the env |grep xxx command to query the directory where a service is installed.

For example, you can run the following command to query the directory where the Spark service is installed:

```
env |grep spark
```

The following information is returned. /usr/lib/spark-current is the directory where the Spark service is installed.

```
SPARK_HOME=/usr/lib/spark-current
SPARK_CONF_DIR=/etc/ecm/spark-conf
SPARK_LOG_DIR=/mnt/disk1/log/spark
PATH=/usr/lib/sqoop-current/bin:/usr/lib/jindosdk-current/bin:/usr/lib/hudi-current/bin:/usr/lib/hive-current/hcatalog/bin:/usr/lib/hive-current/bin:/usr/lib/datafactory-current/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/lib/flow-agent-current/bin:/usr/lib/hadoop-current/bin:/usr/lib/hadoop-current/sbin:/usr/lib/jindodata-current//bin:/usr/lib/jindodata-current//sbin:/usr/lib/spark-current/bin:/usr/lib/hadoop-current/bin:/usr/lib/hadoop-current/sbin:/root/bin
HADOOP_CLASSPATH=/opt/apps/extra-jars/*:/usr/lib/spark-current/yarn/spark-3.2.1-yarn-shuffle.jar
SPARK_PID_DIR=/usr/lib/spark-current/pids
```

### Log directories

Service logs are stored in directories in the /mnt/disk1/log/xxx format. Examples:

-   YARN ResourceManager logs: /mnt/disk1/log/hadoop-yarn in the master node
    
-   YARN NodeManager logs: /mnt/disk1/log/hadoop-yarn in a core node or a task node
    
-   HDFS NameNode logs: /mnt/disk1/log/hadoop-hdfs in the master node
    
-   HDFS DataNode logs: /mnt/disk1/log/hadoop-hdfs in a core node or a task node
    
-   Hive logs: /mnt/disk1/log/hive in the master node
    
-   ESS logs: /mnt/disk1/log/ess/ in the master node, a core node, or a task node
    

### Configuration file directories

Configuration files are stored in directories in the /etc/ecm/xxx format. Examples:

-   Hadoop: /etc/ecm/hadoop-conf/
    
-   Spark: /etc/ecm/spark-conf/
    
-   Hive: /etc/ecm/hive-conf/
    
-   Flink: /etc/ecm/flink-conf/
    
-   Flume: /etc/ecm/flume-conf/
    

If you log on to your cluster in SSH mode, you can only view the parameters in configuration files. To modify the parameters in configuration files, you must log on to the EMR console.

### Data directories

Cached data in JindoFS: /mnt/disk1/jindodata/
