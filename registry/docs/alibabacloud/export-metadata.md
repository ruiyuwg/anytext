Data Lake Formation (DLF) provides a metadata export tool to help you export DLF metadata to Hive metastores.

## Prerequisites

1.  An E-MapReduce (EMR) cluster is created. The ApsaraDB RDS database specified in the export tool is a metadatabase configured for the Metastore service in the EMR cluster. A synchronization task uses the Metastore service in the EMR cluster and runs as a Spark job to export the metadata from the EMR cluster.
    
2.  The locations of all metadata are in Object Storage Service (OSS). If the locations of all metadata are in Apsara File Storage for HDFS (HDFS), the HDFS namespace for the locations of the databases and tables must be the same as that of the EMR cluster. Otherwise, an error occurs during metadata export. This means that cross-cluster metadata export is not supported if the locations of all metadata are in HDFS.
    
3.  The ApsaraDB RDS database specified in the export tool contains metadata tables. For more information about how to initialize ApsaraDB RDS metadata, see [Configure a self-managed ApsaraDB RDS for MySQL database](/help/en/emr/emr-on-ecs/user-guide/configure-a-self-managed-apsaradb-rds-for-mysql-database#section-9kv-2ju-ra6).
    

## **Procedure**

### 1\. Prepare a configuration file

Prepare a YAML file based on your environment and upload the file to your OSS path. The following section provides an example of the file.

```
!!com.aliyun.dlf.migrator.app.config.MigratorConfig
clientInfo:
  accessKeyId: <Your AccessKey ID.>
  accessKeySecret: <Your AccessKey secret.>
  endPoint: dlf-vpc.cn-hangzhou.aliyuncs.com
  regionId: cn-hangzhou
  catalogId: <Your catalog ID. The default value is the user ID of your Alibaba Cloud account.>
mysql:
  connectionUri: jdbc:mysql://emr-header-1:3306/hivemeta
  driver: com.mysql.cj.jdbc.Driver
  userName: root
  password: xxxx
runOptions:
  batchSize: 100
  lowerCaseTableNames: false
  schema: hivemeta
  records: oss://xxxx/migrator/validate/log/
  objectTypes:
    - database
    - table
    - partition
    - function
  operations:
    - validate
  fixIfInConsistence: true
  fixMode: to_hive
  validateDatabases: [db1,db2]
  excludeTables: [aa,bb]
  excludeTablePrefixes: [xx,yy]
  ignoreValidateCreateTime: true
  skipFixTime: 1
  ignoreDropOperation: false
```

#### Descriptions of configuration items

#### **Client-side DLF SDK configurations**

Parameter

Required

Description

accessKeyId

Yes

The AccessKey ID of your Alibaba Cloud account.

asscessKeySecret

Yes

The AccessKey secret of your Alibaba Cloud account.

endPoint

Yes

The endpoint of DLF. The value is dlf-vpc.\[region-id\].aliyuncs.com.

catalog

Yes

The DLF data catalog.

**Note**

Your Alibaba Cloud account must have read/write permissions on all DLF metadatabases and tables, such as ListDatabase and ListTables. You can log on to the DLF console and configure the required permissions on the Data Permissions page.

#### **Parameters related to a MySQL metadatabase**

Parameter

Required

Description

connectionUrl

Yes

The database URL that is used by Java Database Connectivity (JDBC) to connect to the MySQL metadatabase.

driver

Yes

The MySQL driver. You do not need to modify the setting of this parameter in most cases.

userName

Yes

The username that is used to access the metadatabase.

password

Yes

The password that is used to access the metadatabase.

#### **runOptions parameters**

Parameter

Required

Description

schema

Yes

The name of the Hive metadatabase.

**Note**

The database name specified in the value of connectionUrl for the MySQL metadatabase must be consistent with the database name specified by the schema parameter. If you modify the setting of either parameter, you must also modify the setting of the other parameter.

batchSize

Yes

The batch size for calling the DLF SDK cannot exceed 500. If the batch size is too large, the call operation may time out. If the batch size is too small, the call efficiency is slow. In most cases, 100 is a suitable size.

lownerCaseTableNames

Yes

Specifies whether the names of tables in your ApsaraDB RDS metadatabase are in uppercase or lowercase letters. The value false indicates that the names of tables in your ApsaraDB RDS metadatabase are in uppercase letters.

records

Yes

The path to store the running result logs of the tool. The logs contain processing records and error information.

objectTypes

Yes

The types of objects to be exported, which can be database, function, table, and partition.

operations

Yes

Set the value to validate.

fixIfInConsistence

Yes

Set the value to true.

fixMode

Yes

This field is fixed to 'to\_hive' and cannot be modified. DLF metadata will be compared with Hive metadata using DLF as the baseline, followed by migrating DLF metadata to the Hive Metastore.

validateDatabases

No

The names of databases to compare. Only the specified databases are exported.

excludeTablePrefixes

No

The names of tables to be excluded from comparison.

excludeTables

No

The prefixes of table names. Tables whose names start with the specified prefixes are excluded from comparison.

compareTotalNumber

No

Specifies whether to return the final result of comparing the amounts of DLF metadata and ApsaraDB RDS metadata. Default value: false.

ignoreValidateCreateTime

No

Specifies whether to ignore table creation time during comparison.

skipFixTime (unit: minute)

No

Only the metadata created before the time specified by skipFixTime is compared. The metadata created within the time specified by skipFixTime is not compared. Default value: 240.

ignoreDropOperation

No

Set this parameter to true if you do not want to delete the metadata after it is exported.

locationMappings

No

Specifies whether an object supports location mapping. You need to set this parameter if you want to change the location of an object such as a database, table, or partition.

source

No

The source path for replacement. We recommend that you end the path with a forward slash (/). Example:

```
runOptions:
 locationMappings:
 source: hdfs://emr-header-1:9000/user/hive/
 target: oss://hive/warehouse/
```

target

No

The destination path for replacement. Example:

```
runOptions:
 locationMappings:
 source: hdfs://emr-header-1:9000/user/hive/
 target: oss://hive/warehouse/
```

hiveConfPath

No

The path of the Hive configuration file in the cluster. Default value: /etc/ecm/hive-conf/hive-site.xml.

kerberosInfo

No

The configuration that needs to be added to runOptions for a task running in a cluster with Kerberos enabled. Example:

```
runOptions:
 kerberosInfo:
 principal: xxx/xxx@xxx.COM
 keytab: /xxx/xxx.keytab
```

### **2\. Prepare to run the Spark job**

1.  Log on to the header node of the EMR cluster.
    
2.  Obtain the JAR package of the export tool.
    

```
wget https://dlf-lib.oss-cn-hangzhou.aliyuncs.com/migrator_jar/application-1.1.jar
```

3.  Write an execution script for the Spark job.
    

```
vim /root/migrator_validate.sh
```

4.  Enter the following content:
    

```
#!/bin/bash
source /etc/profile
spark-submit --master yarn --deploy-mode client --driver-memory 12G --executor-memory 8G --executor-cores 2 --num-executors 4 --conf spark.sql.shuffle.partitions=200 --conf spark.sql.adaptive.enabled=false --class com.aliyun.dlf.migrator.app.MigratorApplication application-1.1.jar oss://xxxx/migrator_config_validate.yml
```

The path of the configuration file at the end of the code block is the OSS path to which you uploaded the configuration file in the section "1. Prepare a configuration file" of this topic.

5.  Modify the permissions to execute the script.
    

```
chmod +x /root/migrator_validate.sh
```

### **3\. Run the job**

**Manual execution**:

Run the preceding script directly.

**Scheduled execution**:

```
crontab -e
0 22 * * * nohup sh /root/migrator_validate.sh > /root/validate.txt 2>&1 &
```

**Note**

In this example, the cron job is configured to run at 22:00 every day.
