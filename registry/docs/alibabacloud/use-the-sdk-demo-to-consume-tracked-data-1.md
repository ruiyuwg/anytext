After you configure a change tracking task, you can use the SDK demo that is provided by Data Transmission Service (DTS) to track and consume data. This topic describes how to use the SDK demo to consume tracked data.

## Procedure

**Important**

-   For information about how to consume the tracked data from a PolarDB-X 1.0 instance or Data Management (DMS) logical database, see [Use the SDK demo code to consume the tracked data from a PolarDB-X 1.0 instance](/help/en/dts/user-guide/use-the-sdk-demo-code-to-consume-the-tracked-data-from-a-polardb-x-1-0-instance-1#task-2158747).
    
-   If you track and consume data as a RAM user, the RAM user must have the **AliyunDTSFullAccess** permission and the permissions to access the source objects. For more information about how to grant the permissions, see [Use a system policy to authorize a RAM user to manage DTS instances](/help/en/dts/user-guide/use-a-system-policy-to-authorize-a-ram-user-to-manage-dts-instances#concept-47568-zh) and [Grant permissions to a RAM user](/help/en/ram/grant-permissions-to-a-ram-user#task-187800).
    
-   Consumer groups are independent of each other.
    

This topic describes how to use the SDK demo to consume tracked data. In this example, IntelliJ IDEA Community Edition 2020.1 for Windows is used.

1.  Create a change tracking task. For more information, see [Track data changes from an ApsaraDB RDS for MySQL instance](/help/en/dts/user-guide/track-data-changes-from-an-apsaradb-rds-for-mysql-instance-1#concept-388493), [Track data changes from a PolarDB for MySQL cluster](/help/en/dts/user-guide/track-data-changes-from-a-polardb-for-mysql-cluster-1#concept-1079223), or [Track data changes from a self-managed Oracle database](/help/en/dts/user-guide/track-data-changes-from-a-self-managed-oracle-database#concept-byv-frc-bhb).
    
2.  Create one or more consumer groups. For more information, see [Create consumer groups](/help/en/dts/user-guide/create-consumer-groups-1#concept-388593).
    
3.  Use the SDK demo based on your business requirements.
    
    -   (Recommended) Use the packaged new change tracking SDK
        
        1.  Open IntelliJ IDEA and click **Create New Project**.
            
        2.  In the project that you created, find the pom.xml file.
            
        3.  Add the following dependency to the pom.xml file:
            
            ```
            <dependency>
                <groupId>com.aliyun.dts</groupId>
                <artifactId>dts-new-subscribe-sdk</artifactId>
                <version>{dts_new_sdk_version}</version>
            </dependency>
            ```
            
            **Note**
            
            You can view the latest version of the change tracking SDK on the [dts-new-subscribe-sdk](https://s01.oss.sonatype.org/#nexus-search;quick~dts-new-subscribe-sdk) page.
            
        4.  Use the new change tracking SDK. For more information about the demo code, see [SDK demo code](https://github.com/aliyun/aliyun-dts-subscribe-sdk-java/tree/master/src/test/java/com/aliyun/dts/subscribe/clients).
            
    -   Use the new change tracking SDK by customizing code
        
        1.  Download the [SDK demo package](https://github.com/aliyun/aliyun-dts-subscribe-sdk-java) and decompress the package.
            
            **Note**
            
            To download the package, choose ![code](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9253405761/p471496.png) > **Download ZIP**.
            
        2.  Go to the directory in which the package is decompressed. Then, open the pom.xml file by using a text editor and change the SDK version to the latest. ![Set the SDK version](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2283191261/p99955.png)
            
            **Important**
            
            You can obtain the latest version of the change tracking SDK from the Maven website. For more information, visit the [Maven page of the change tracking SDK](https://mvnrepository.com/artifact/com.aliyun.dts/dts-new-subscribe-sdk/).
            
        3.  Open IntelliJ IDEA. In the window that appears, click **Open or Import**. ![Open a project](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6160806261/p274737.png)
            
        4.  In the dialog box that appears, go to the directory in which the package is decompressed, and find the pom.xml file. Then, click OK. ![Find the pom.xml file](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5586814951/p99824.png)
            
        5.  In the dialog box that appears, select **Open as Project**.
            
        6.  In IntelliJ IDEA, expand the folders to find the Java files. Then, double-click a Java file based on the mode in which you use an SDK client. The DTSConsumerAssignDemo.java and DTSConsumerSubscribeDemo.java Java files are available. ![Java files of the client](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6160806261/p274738.png)
            
            **Note**
            
            DTS supports the following modes in which you use the SDK client:
            
            -   ASSIGN mode: To ensure the global order of messages, DTS assigns only a single partition (Partition 0) to each tracked topic. If you use the SDK client in ASSIGN mode, we recommend that you start only a single SDK client.
                
            -   SUBSCRIBE mode: To ensure the global order of messages, DTS assigns only a single partition (Partition 0) to each tracked topic. In SUBSCRIBE mode, you can start multiple SDK clients in a consumer group at the same time to implement disaster recovery. If an SDK client in the consumer group fails, other SDK clients are randomly and automatically allocated to Partition 0 to resume data consumption.
                
            
    
4.  Set the required parameters in the code of the Java file.
    
    ![assigndemo](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6160806261/p274744.png)
    
    Table 1. The following table describes the required parameters.
    
    **Parameter**
    
    **Description**
    
    **Method to obtain**
    
    `brokerUrl`
    
    The endpoint and port number of the change tracking instance.
    
    **Note**
    
    If you track data changes over internal networks, the network latency is minimal. This is applicable if the Elastic Compute Service (ECS) instance on which you deploy the SDK client belongs to the classic network or the same virtual private cloud (VPC) as the change tracking instance.
    
    In the new DTS console, click the instance ID. On the **Basic Information** page, you can obtain the endpoint and port number in the **Network** section. ![Network](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6937894761/p540008.jpg)
    
    `topic`
    
    The name of the topic of the change tracking instance.
    
    In the DTS console, click the instance ID. On the **Basic Information** page, you can obtain the tracked topic in the **Basic Information** section. ![topic](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6937894761/p539999.jpg)
    
    `sid`
    
    The ID of the consumer group.
    
    In the DTS console, click the instance ID. In the left-side navigation pane, click **Consume Data**. You can obtain the ID and account of the consumer group.
    
    **Note**
    
    The password of the consumer group account is automatically specified when you create the consumer group.
    
    ![Consumer group account](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6937894761/p540013.jpg)
    
    `userName`
    
    The account of the consumer group.
    
    **Warning**
    
    If you are not using the SDK client that is described in this topic, you must specify this parameter in the following format: `<Username>-<Consumer group ID>`. Example: `dtstest-dtsae******bpv`. Otherwise, the connection fails.
    
    `password`
    
    The password of the account.
    
    `initCheckpoint`
    
    The consumption checkpoint. It is the timestamp when the SDK client consumes the first data record. The value is a UNIX timestamp. Example: 1620962769.
    
    **Note**
    
    The consumption checkpoint can be used in the following scenarios:
    
    -   If the consumption process is interrupted, you can specify the consumption checkpoint to resume data consumption. This allows you to prevent data loss.
        
    -   When you start the change tracking client, you can specify the consumption checkpoint to consume data on demand.
        
    
    The consumption checkpoint must be within the data range of the change tracking instance, as shown in the following figure. The consumption checkpoint must be converted to a UNIX timestamp. ![Data range](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6937894761/p540017.jpg)
    
    **Note**
    
    You can use a search engine to obtain a UNIX timestamp converter.
    
    `ConsumerContext.ConsumerSubscribeMode subscribeMode`
    
    The mode in which you use the SDK client. Valid values:
    
    -   `ConsumerContext.ConsumerSubscribeMode.ASSIGN`: In ASSIGN mode, only a single SDK client in a consumer group can consume tracked data.
        
    -   `ConsumerContext.ConsumerSubscribeMode.SUBSCRIBE`: In SUBSCRIBE mode, you can start multiple SDK clients in a consumer group at the same time to implement disaster recovery.
        
    
    N/A
    
5.  In the top navigation bar of IntelliJ IDEA, choose **Run** > **Run** to run the client.
    
    **Note**
    
    When you run IntelliJ IDEA for the first time, it takes a period of time to load and install relevant dependencies.
    
    -   The following figure shows the result. This result indicates that the SDK client can track data changes from the source database. ![Consume data](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1565279261/p275068.png)
        
    -   The SDK client calculates and displays information about the consumed data at regular intervals. The information includes the total number of data records that are sent and received, the total amount of data, and the number of requests per second (RPS). ![Information about the consumed data](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1565279261/p275067.png)
        
        Table 2. The following table describes the parameters in the information.
        
        **Parameter**
        
        **Description**
        
        `outCounts`
        
        The total number of data records consumed by the SDK client.
        
        `outBytes`
        
        The total amount of data consumed by the SDK client. Unit: bytes.
        
        `outRps`
        
        The RPS in which the SDK client consumes data.
        
        `outBps`
        
        The number of bits transmitted per second in which the SDK client consumes data.
        
        `inBytes`
        
        The total amount of data that is sent by the DTS server. Unit: bytes.
        
        `DStoreRecordQueue`
        
        The size of the current data cache queue when the DTS server sends data.
        
        `inCounts`
        
        The total number of data records that are sent by the DTS server.
        
        `inRps`
        
        The RPS in which the DTS server sends data.
        
        `__dt`
        
        The timestamp that is generated when the SDK client receives data. Unit: milliseconds.
        
        `DefaultUserRecordQueue`
        
        The size of the current data cache queue after serialization.
        
    

## Save and query the consumption checkpoint

When the SDK client is started for the first time or restarted, or an internal retry occurs, you must query and specify the consumption checkpoint to start or resume data consumption. The following table describes how to manage and query the consumption checkpoint in different scenarios. This prevents data loss or duplicate data and allows you to consume data on demand.

**Scenario**

**Usage mode of the SDK client**

**Query method**

Query the consumption checkpoint

ASSIGN and SUBSCRIBE

-   The SDK client saves the consumption checkpoint every 5 seconds and submits the consumption checkpoint to the DTS server. To query the last consumption checkpoint, you can use the following methods:
    
    -   Find the localCheckpointStore file of the server on which the SDK client resides.
        
    -   Go to the **Consume Data** page of the change tracking instance.
        
-   If you configured an external persistent shared storage medium such as a database in the `setUserRegisteredStore(newUserMetaStore())` parameter in the consumerContext.java file, the storage medium saves the consumption checkpoint every 5 seconds. You can query the consumption checkpoint by using the storage medium.
    

When you start the SDK client for the first time, you must specify the consumption checkpoint to consume data.

ASSIGN and SUBSCRIBE

Select the DTSConsumerAssignDemo.java or DTSConsumerSubscribeDemo.java file based on the mode in which you use the SDK client. Then, specify the `initCheckpoint` parameter to consume data. For more information, see [3](#step-vd4-6ps-m2u) and [4](#step-vsz-479-spf).

When an internal retry occurs, you must specify the consumption checkpoint of the previous data record to resume data consumption.

ASSIGN

Perform the following steps to find the consumption checkpoint of the previous data record:

1.  Find the external storage medium that you configured in the `setUserRegisteredStore(newUserMetaStore())` parameter in the consumerContext.java file.
    
2.  Find the localCheckpointStore file of the server on which the SDK client resides.
    
3.  Find the start timestamp that you specified in the `initCheckpoint` parameter in the DTSConsumerSubscribeDemo.java file.
    

SUBSCRIBE

Perform the following steps to find the consumption checkpoint of the previous data record:

1.  Find the external storage medium that you configured in the `setUserRegisteredStore(newUserMetaStore())` parameter in the consumerContext.java file.
    
2.  Find the saved consumption checkpoint of the DTS server (DStore).
    
3.  Find the start timestamp that you specified in the `initCheckpoint` parameter in the DTSConsumerSubscribeDemo.java file.
    
4.  Use the start consumption checkpoint of the DTS server (new DStore).
    

After the SDK client is restarted, you must specify the consumption checkpoint of the last data record to resume data consumption.

ASSIGN

Check the setting of the `setForceUseCheckpoint` parameter in the consumerContext.java file and query the consumption checkpoint.

-   If the parameter is set to `true`, the value of the initCheckpoint parameter is used as the consumption checkpoint each time the SDK client is restarted.
    
-   If the parameter is set to `false` or is not specified, perform the following steps to find the consumption checkpoint of the previous data record:
    
    1.  Find the localCheckpointStore file of the server on which the SDK client resides.
        
    2.  Find the saved consumption checkpoint of the DTS server (DStore).
        
    3.  Find the external storage medium that you configured in the `setUserRegisteredStore(newUserMetaStore())` parameter in the consumerContext.java file.
        

SUBSCRIBE

In this mode, the setting of the `setForceUseCheckpoint` parameter in the consumerContext.java file does not take effect. Perform the following steps to find the consumption checkpoint of the previous data record:

1.  Find the external storage medium that you configured in the `setUserRegisteredStore(newUserMetaStore())` parameter in the consumerContext.java file.
    
2.  Find the saved consumption checkpoint of the DTS server (DStore).
    
3.  Find the start timestamp that you specified in the `initCheckpoint` parameter in the DTSConsumerSubscribeDemo.java file.
    
4.  Use the start consumption checkpoint of the DTS server (new DStore).
    

## Troubleshooting

**Issue**

**Error message**

**Cause**

**Solution**

The connection failed.

```
ERROR
CheckResult{isOk=false, errMsg='telnet dts-cn-hangzhou.aliyuncs.com:18009
failed, please check the network and if the brokerUrl is correct'}
(com.aliyun.dts.subscribe.clients.DefaultDTSConsumer)
```

The value of the `brokerUrl` parameter is invalid.

Enter valid values for the `brokerUrl`, `userName`, and `password` parameters. For more information, see [The following table describes the required parameters.](#table-xc9-u44-r7h).

```
telnet real node *** failed, please check the network
```

The broker address cannot be redirected to the real IP address.

```
ERROR CheckResult{isOk=false, errMsg='build kafka consumer failed, error: org.apache.kafka.common.errors.TimeoutException: Timeout expired while fetching topic metadata, probably the user name or password is wrong'} (com.aliyun.dts.subscribe.clients.DefaultDTSConsumer)
```

The specified username or password is invalid.

```
com.aliyun.dts.subscribe.clients.exception.TimestampSeekException: RecordGenerator:seek timestamp for topic [cn_hangzhou_rm_bp11tv2923n87081s_rdsdt_dtsacct-0] with timestamp [1610249501] failed
```

The `setUseCheckpoint` parameter in the consumerContext.java file is set to `true`, but the consumption checkpoint is not within the data range of the change tracking instance.

Specify a consumption checkpoint within the data range of the change tracking instance. For more information, see [The following table describes the required parameters.](#table-xc9-u44-r7h).

The response time of data consumption increased.

N/A

You can analyze the cause by querying the DStoreRecordQueue and DefaultUserRecordQueue parameters. For more information, see [The following table describes the parameters in the information.](#table-o1p-h7k-i7a).

-   If the value of the DStoreRecordQueue parameter is 0, the rate at which DTS server pulls data decreases.
    
-   If the value of the DefaultUserRecordQueue parameter is the default value 512, the rate at which the SDK client consumes data decreases.
