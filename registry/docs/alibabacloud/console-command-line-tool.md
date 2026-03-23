You can use the console command line interface to access DataHub projects and run commands. This topic describes how to install, configure, and run the client, and provides instructions on how to use it.

## Prerequisites

Before you use the console command line interface, make sure that the following requirement is met:

-   The device where you want to install the console client has Java 8 or a later version installed.
    

​

## Install and configure the console client

1.  Download the [datahub\_console.tar.gz](https://aliyun-datahub.oss-cn-hangzhou.aliyuncs.com/bigint_test/datahub_console.tar.gz) package and decompress it.
    
2.  After you decompress the package, you will find the bin, conf, and lib folders.
    
3.  Go to the conf folder and enter the AccessKey and endpoint information in the datahub.properties file. The file content is as follows:
    

```
datahub.accessid=
datahub.accesskey=
datahub.endpoint=
```

The parameters are described as follows:

Parameter

Required

Description

Example

datahub.accessid

Yes

The AccessKey ID of your Alibaba Cloud account or Resource Access Management (RAM) user.

N/A

datahub.accesskey

Yes

The AccessKey secret that corresponds to the AccessKey ID.

N/A

datahub.endpoint

Yes

The endpoint of the DataHub service.

You must configure the endpoint based on the region and network connectivity type that you selected when you created the DataHub project. For more information about the endpoints for different regions and network types, see [DataHub Domain Names](/help/en/datahub/product-overview/endpoints).

https://dh-cn-hangzhou.aliyuncs.com

## Run the console client

You can start the console client in one of the following ways:

-   Method 1: In the bin folder of the console client installation path, double-click the datahubcmd.bat file (for Windows) to start the console client. The following information is returned, which indicates that the client has started.
    

-   Method 2: In the command line window of your operating system, go to the bin folder of the console client installation path. Run the datahubcmd command (for Windows) or the sh datahubcmd.sh command (for Linux or macOS) to start the client. The following figure shows that the client is connected to DataHub.
    

## Get command help

You can obtain help for console client commands in one of the following ways:

### Method 1: View command help information in the console client

-   View help for all commands.
    

```
help
```

-   Specify a keyword to view help information for related commands.
    

For example, to retrieve a list of topics:

```
DataHub=>help lt
NAME
        lt - List topic

SYNOPSYS
        lt [-p] string

OPTIONS
        -p  string
                projectName
                [Mandatory]
```

### Method 2: In the command line window of your operating system, switch to the **bin** folder of the console client installation path. Run the following command to view help information for all commands:

```
...\bin>datahubcmd help
```

## Usage guide

### **Project operations**

#### Create a project

-   \-p: The project name.
    
-   \-c: The project description.
    

```
cp -p test_project  -c test_comment
```

#### Delete a project

-   \-p: The project name.
    

```
dp -p test_project
```

**Note:** Before you delete a project, you must delete all resources in the project, including topics, subscriptions, and sync tasks. Otherwise, the deletion fails.

#### Get a list of projects

```
lp
```

### **Topic operations**

#### Create a topic

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-m: The topic category. BLOB indicates a BLOB topic, and TUPLE indicates a TUPLE topic.
    
-   \-f: The field format for a TUPLE topic is \[(fieldName,fieldType,isNull)\]. Separate multiple fields with commas (,).
    
-   \-s: The number of shards.
    
-   \-l: The time to live of data in days. Valid values: 1 to 7.
    
-   \-c: The topic description.
    

```
ct -p test_project -t test_topic -m TUPLE -f [(name,string,true)] -s 3 -l 3 -c test_comment
```

#### Delete a topic

-   \-p: The project name.
    
-   \-t: The topic name.
    

```
dt -p test_project -t test_topic
```

#### Get topic information

-   \-p: The project name.
    
-   \-t: The topic name.
    

```
gt -p test_project -t test_topic
```

#### Export a topic schema to a JSON file

-   \-f: The path where the file is saved.
    
-   \-p: The project name.
    
-   \-t: The topic name.
    

```
gts -f filepath -p test_project -t test_topic
```

#### Get a list of topics

-   \-p: The project name.
    

```
lt -p test_project
```

#### Create a topic from a JSON file

-   \-s: The number of shards.
    
-   \-l: The time to live of data in days. Valid values: 1 to 7.
    
-   \-f: The file path.
    
-   \-p: Specifies the name of the project.
    
-   \-t: The topic name.
    

```
rtt -s 3 -l 3 -c test_comment -f filepath -p test_project -t test_topic
```

#### Modify the lifecycle of a topic

-   \-p: Specifies the name of the project.
    
-   \-t: The topic name.
    
-   \-l: Specifies the topic lifecycle.
    
-   \-c: The topic description.
    

```
utl -p test_project -t test_topic -l 3 -c test_comment
```

### **Connector operations**

#### Create an ODPS connector

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-m: The synchronization type. The following synchronization types are supported for ODPS: SYSTEM\_TIME, USER\_DEFINE, EVENT\_TIME, and META\_TIME.
    
-   \-e: The ODPS endpoint. You must enter the classic network endpoint.
    
-   \-op: The ODPS project name.
    
-   \-oa: The AccessKey ID used to access ODPS.
    
-   \-ok: The AccessKey used to access ODPS.
    
-   \-tr: The partition interval in minutes. The default value in the console tool is 60.
    
-   \-tf: The partition format. \`ds\` indicates partitioning by day, \`ds hh\` indicates partitioning by hour, and \`ds hh mm\` indicates partitioning by minute.
    

```
coc -p test_project -t test_topic -m SYSTEM_TIME -e odpsEndpoint -op odpsProject -ot odpsTable -oa odpsAccessId -ok odpsAccessKey -tr 60 -c (field1,field2) -tf ds hh mm
```

#### Add a field for ODPS synchronization

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-c: The connector ID. You can view the ID on the Data Synchronization tab.
    
-   \-f: The name of the new field.
    

```
acf -p test_project -t test_topic -c connectorId -f fieldName
```

#### Create a connector to sync data to MySQL or RDS

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-h: The host. You must enter the classic network address.
    
-   \-po: The port.
    
-   \-ty: The synchronization type. Two types are available:
    
-   SINK\_MYSQL: Creates a connector to sync data to MySQL.
    
-   SINK\_ADS: Creates a connector to sync data to ADS.
    
-   \-d: Specifies the name of the database.
    
-   \-ta: The table name.
    
-   \-u: Username
    
-   \-pa: Password.
    
-   \-ht: The insert mode. Two modes are available:
    
-   IGNORE
    
-   OVERWRITE
    
-   \-n: The fields to sync. For example, (field1,field2).
    

```
cdc -p test_project -t test_topic -h host -po 3306 -ty mysql -d mysql_database -ta msyql_table -u username -pa password -ht IGNORE -n (field1,field2)
```

#### Create a DataHub connector

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-sp: The sink project where data is imported.
    
-   \-st: The sink topic where data is imported.
    
-   \-m: The authentication type.
    
-   AK: Authentication using an AccessKey. You must specify the AccessKey ID and AccessKey secret.
    
-   Specifies that authentication is performed using STS.
    

```
cdhc -p test_project -t test_topic -sp sinkProject -st sinkTopic -m AK -i accessid k accessKey
```

#### Create an FC connector

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-e: The FC endpoint. You must enter the classic network endpoint.
    
-   \-s: The FC service name.
    
-   \-f: The name of the FC function
    
-   \-au: The authentication method.
    
-   AK: Authentication using an AccessKey. You must specify the AccessKey ID and AccessKey secret.
    
-   STS: Authentication using STS.
    
-   \-n: The fields to sync. For example, (field1,field2).
    

```
cfc -p test_project -t test_topic -e endpoint -s service -f function -au AK -i accessId -k accessKey -n (field1,field2)
```

#### Create a Hologres connector

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-e: The endpoint.
    
-   \-cl: The fields to sync to Hologres.
    
-   \-au: The authentication method. Currently, only AccessKey authentication is supported for syncing data to Hologres.
    
-   \-m: The parsing type. If you select Delimiter, you must specify the lineDelimiter, parseData, and columnDelimiter properties. If you select InformaticaJson, you must specify the parseData property.
    
-   Delimiter
    
-   InformaticaJson
    

```
chc -p test_project -t test_topic -e endpoint -cl (field,field2) -au AK -hp holoProject -ht holoTopic -i accessId -k accessKey -m Delimiter -l 1 -b false -n (field1,field2)
```

#### Create an OTS connector

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   it: The name of the OTS instance.
    
-   \-m: The authentication type. STS is used by default.
    
-   AK: Authentication using an AccessKey. You must specify the AccessKey ID and AccessKey secret.
    
-   STS: Authentication using STS.
    
-   \-t: The OTS table name.
    
-   \-wm: The write mode. Two write modes are supported:
    
-   PUT
    
-   UPDATE
    
-   \-c: The fields to sync. For example, (field1,field2).
    

```
cotsc -p test_project -t test_topic -i accessId -k accessKey -it instanceId -m AK -t table -wm PUT -c (field1,field2)
```

#### Create an OSS connector

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-b: The OSS bucket name.
    
-   \-e: The OSS endpoint name.
    
-   \-pr: The directory prefix for syncing data to OSS.
    
-   \-tf: The synchronization time format. For example, %Y%m%d%H%M indicates partitioning by minute.
    
-   \-tr: The partition interval.
    
-   \-c: The fields to sync.
    

```
csc -p test_project -t test_topic -b bucket -e endpoint -pr ossPrefix -tf ossTimeFormat -tr timeRange -c (f1,f2)
```

#### Delete connectors

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-c: The connector ID. You can view the ID on the Data Synchronization tab.
    

```
dc -p test_project -t test_topic -c connectorId
```

#### Get connector details

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-c: The connector ID. You can view the ID on the Data Synchronization tab.
    

```
gc -p test_project -t test_topic -c connectorId
```

#### Get a list of connectors in a topic

-   \-p: The project name.
    
-   \-t: The topic name.
    

```
lc -p test_project -t test_topic
```

#### Restart a connector

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-c: The connector ID. You can view the ID on the Data Synchronization tab.
    

```
rc -p test_project -t test_topic -c connectorId
```

#### Update the AccessKey of a connector

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-ty: The synchronization type. For example: SINK\_ODPS.
    

```
uca -p test_project -t test_topic -ty SINK_ODPS  -a accessId -k accessKey
```

### **Shard operations**

#### Merge shards

-   \-p: Specifies the name of the project.
    
-   \-t: The topic name.
    
-   \-s: The ID of the shard to merge.
    
-   \-a: The ID of the other shard to merge.
    

```
ms -p test_project -t test_topic -s shardId -a adjacentShardId
```

#### Split a shard

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-s: The ID of the shard to split.
    

```
ss -p test_project -t test_topic -s shardId
```

#### Get all shards in a topic

-   \-p: The project name.
    
-   \-t: The topic name.
    

```
ls -p test_project -t topicName
```

#### Get the synchronization status of a shard

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-s: The shard ID.
    
-   \-c: The connector ID. You can view the ID on the Data Synchronization tab.
    

```
gcs -p test_project -t test_topic -s shardId -c connectorId
```

#### Get the consumer offset of each shard for a subscription

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-s: The subscription ID.
    
-   \-i: The shard ID.
    

```
gso -p test_project -t test_topic -s subid -i shardId
```

### **Subscription operations**

#### Create a subscription

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-c: The subscription description.
    

```
css -p test_project -t test_topic -c comment
```

#### Delete a subscription

-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-s: The subscription ID.
    

```
dsc -p test_project -t test_topic -s subId
```

#### Query a list of subscriptions

-   \-p: The project name.
    
-   \-t: The topic name.
    

```
lss -p test_project -t test_topic
```

### **Upload and download data**

#### Upload data

-   \-f: The file path. Note: For a path in Windows, you must add escape characters. For example, D:\\\\test\\\\test.txt.
    
-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-m: The text separator. Commas (,) and spaces are supported.
    
-   \-n: The batch size for each upload. The default value is 1000.
    

```
uf -f filepath -p test_topic -t test_topic -m "," -n 1000
```

**Example: Upload a CSV file**

This example shows how to use the console command line interface to upload a CSV file to DataHub. The format of the CSV file is as follows:

```
1. 0,qe614c760fuk8judu01tn5x055rpt1,true,100.1,14321111111
2. 1,znv1py74o8ynn87k66o32ao4x875wi,true,100.1,14321111111
3. 2,7nm0mtpgo1q0ubuljjjx9b000ybltl,true,100.1,14321111111
4. 3,10t0n6pvonnan16279w848ukko5f6l,true,100.1,14321111111
5. 4,0ub584kw88s6dczd0mta7itmta10jo,true,100.1,14321111111
6. 5,1ltfpf0jt7fhvf0oy4lo8m3z62c940,true,100.1,14321111111
7. 6,zpqsfxqy9379lmcehd7q8kftntrozb,true,100.1,14321111111
8. 7,ce1ga9aln346xcj761c3iytshyzuxg,true,100.1,14321111111
9. 8,k5j2id9a0ko90cykl40s6ojq6gruyi,true,100.1,14321111111
10. 9,ns2zcx9bdip5y0aqd1tdicf7bkdmsm,true,100.1,14321111111
11. 10,54rs9cm1xau2fk66pzyz62tf9tsse4,true,100.1,14321111111
```

In the CSV file, each line is a record, and fields are separated by commas (,). The file is saved to the local path /temp/test.csv. The DataHub topic has the following format:

Field name

Field type

id

BIGINT

name

STRING

gender

BOOLEAN

salary

DOUBLE

my\_time

TIMESTAMP

The command for the console tool is:

```
uf -f /temp/test.csv -p test_topic -t test_topic -m "," -n 1000
```

#### Download data

-   \-f: The file path. Note: For a path in Windows, you must add escape characters. For example, D:\\\\test\\\\test.txt.
    
-   \-p: The project name.
    
-   \-t: The topic name.
    
-   \-s: The shard ID.
    
-   \-d: The subscription ID.
    
-   \-f: The download path.
    
-   \-ti: The point in time after which you want to read data. The format is yyyy-mm-dd hh:mm:ss.
    
-   \-l: The number of records to read each time.
    
-   \-g: Specifies whether to read data continuously.
    
-   0: Reads only once. After the current number of records is read, consumption stops.
    
-   1: Reads continuously.
    

```
down -p test_project -t test_topic -s shardId -d subId -f filePath -ti "1970-01-01 00:00:00" -l 100 -g 0
```

### **FAQ**

-   The script fails to start: If you run the script in a Windows environment, check whether the script path contains parentheses.
