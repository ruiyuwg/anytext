This topic describes the changes of DataHub in the new release. This topic mainly introduces the principle and implementation of batch serialization as well as the performance improvement and cost reduction brought by batch serialization. Batch serialization benefits both the service side and the user side of DataHub. The resource consumption on the service side can be significantly reduced, the performance can be significantly improved, and costs can be greatly reduced for users.

## **Upgrade details**

### **Support for zstd compression**

DataHub starts to support Zstandard (zstd) in the latest version. Compared with LZ4 and Deflate, which are also supported by DataHub, zstd can provide better performance.

**Note**

Zstd is a high-performance compression algorithm developed by Facebook. It was open-sourced in 2016. Zstd performs well in terms of both compression speed and ratio, making it well-suited for the use scenarios of DataHub.

### **Serialization transformation**

Batch serialization is also introduced in DataHub. Batch serialization is essentially a method for organizing data in DataHub. The term "batch" does not specifically refer to a particular serialization method but rather involves a secondary encapsulation of serialized data. For example, 100 data records need to be sent in a batch. These 100 data records are serialized to generate a buffer, the buffer is compressed by using a compression algorithm, and then a header is added to the compressed buffer to record the size, number of data records, compression algorithm, CRC information, and other information of the buffer. This final buffer with the added header represents a complete batch of data.

Batch serialization provides the following benefits:

-   It is highly effective in mitigating dirty data.
    
-   It can help reduce the CPU overheads of backend servers and improve the data processing performance.
    
-   It can help reduce the latency in read and write operations.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4124823771/CAEQUBiBgID1sdmX2RkiIDU0MjdjMTliZjdjZjQ2OGRiMTdiZDg5NGEzNjEyN2Ux4869558_20250109144130.823.svg)

**Note**

After the batch buffer is sent to the server, as the client has already performed thorough data validity checks, the server only needs to verify the CRC results in the data to confirm the integrity of the buffer. After the batch buffer is confirmed to be valid, the server can directly persist the buffer to a disk without the need for additional operations such as serialization, deserialization, compression, decompression, and further validation. This optimization improves server performance by more than 80%. By compressing multiple data entries together, the compression ratio is also improved, resulting in reduced storage costs.

## **Cost comparison**

In order to verify the benefits brought by batch serialization, the following data is used to conduct a comparative test:

-   About 200 columns of advertising-related data are used for the test. The ratio of null values in the test data is about 20% to 30%.
    
-   Each 1,000 data entries comprise a batch.
    
-   Apache Avro is used for batch serialization.
    
-   Before the upgrade, LZ4 is used for data compression by default. After the upgrade, zstd is used for data compression by default.
    

The following table lists the test results.

**Original data size (unit: bytes)**

**Size of data compressed by using LZ4 (unit: bytes)**

**Size of data compressed by using zstd (unit: bytes)**

Protobuf serialization

11,506,677

3,050,640

1,158,868

Batch serialization

11,154,596

2,931,729

1,112,693

We compare the cost reduction mainly from the two billing dimensions of DataHub: storage and traffic. Other billable items are mainly set to prevent abuse and can be ignored in normal cases.

-   Storage costs: When DataHub uses Protobuf serialization, data in storage is not compressed but data is compressed only during transmission over HTTP. After the batch serialization+zstd mode is used, the storage size is reduced from 11,506 KB to 1,112 KB. This means that the storage costs are reduced by about 90%.
    
-   Traffic costs: When DataHub uses the Protobuf+LZ4 mode, the data size is 3,050 KB. When DataHub uses the batch serialization+zstd mode, the data size is 1,112 KB. This means that the traffic costs are reduced by about 60%.
    

**Important**

The preceding table lists the test results based on sample data. The actual test results vary based on data. You can conduct a test based on your business requirements.

## **Use batch serialization**

### **Usage notes**

-   The major advantage of batch writing is to **gather data records in batches**. If a client cannot gather data records in a batch or the number of data records in a batch is small, the improvements may fail to reach your expectation.
    
-   For the consideration of user convenience, we provide the compatibility between various read and write methods to ensure smoother transition. This means that the data written in a batch can still be read in the original mode and that the data written in the original mode can also be read in a batch. If data is written in batches, we recommend that the data is also consumed in batches. **Otherwise, the performance may be deteriorated**.
    

### **Prerequisites**

-   The **multi-version schema** feature is enabled.
    
-   The Client library 1.4 or later is used.
    
-   Only DataHub SDK for Java is supported.
    

### **Enable the multi-version schema feature**

#### **Enable the multi-version schema feature in the console**

You cannot modify the information of created topics in the console. If you want to use batch serialization, you must turn on Enable Multi-version when you create a topic. For more information about how to create a topic, see [Create and configure topics](/help/en/datahub/user-guide/manage-topics).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0398579371/p902527.png)

#### **Enable the multi-version schema feature by using an SDK**

```
  public static void createTopicWithOption() {
    try {RecordSchema recordSchema = new RecordSchema() {{
        this.addField(new Field("field1", FieldType.STRING));
        this.addField(new Field("field2", FieldType.BIGINT));
      }};
      TopicOption option = new TopicOption();
       // Enable the multi-version schema feature.   
      option.setEnableSchemaRegistry(true);
     
      option.setComment(Constant.TOPIC_COMMENT);
      option.setExpandMode(ExpandMode.ONLY_EXTEND);
      option.setLifeCycle(Constant.LIFE_CYCLE);
      option.setRecordType(RecordType.TUPLE);
      option.setRecordSchema(recordSchema);
      option.setShardCount(Constant.SHARD_COUNT);
      datahubClient.createTopic(Constant.PROJECT_NAME, Constant.TOPIC_NAME, option);
      LOGGER.info("create topic successful");
    } catch (ResourceAlreadyExistException e) {
      LOGGER.info("topic already exists, please check if it is consistent");
    } catch (ResourceNotFoundException e) {
      // project not found
      e.printStackTrace();
      throw e;
    } catch (DatahubClientException e) {
      // other error
      e.printStackTrace();
      throw e;
    }
  }
```

### **Configure batch serialization**

If the server supports the batch transmission protocol, DataHub uses batch serialization by default. If the server does not support the batch transmission protocol, for example, the server does not use the latest version of Apsara Stack or the server uses a version earlier than Apsara Stack V3.16, DataHub automatically uses the original serialization method. The clients automatically adapt to the serialization method without the need for any additional configurations. Client library 1.4.1 is used in the following example. The system automatically adapts to a better compression algorithm. If a version later than client library 1.4 is used, zstd is selected by default.

#### **Add Maven dependencies**

```
<dependency>
  <groupId>com.aliyun.datahub</groupId>
  <artifactId>aliyun-sdk-datahub</artifactId>
  <version>2.25.3</version>
</dependency>
<dependency>
  <groupId>com.aliyun.datahub</groupId>
  <artifactId>datahub-client-library</artifactId>
  <version>1.4.3</version>
</dependency>
```

#### **Configure batch serialization**

```
ProducerConfig config = new ProducerConfig(endpoint, accessId, accessKey);
DatahubProducer producer = new DatahubProducer(projectName, topicName, config);

RecordSchema schema = producer.getTopicSchema();
List<RecordEntry> recordList = new ArrayList<>();
// To achieve better performance, we recommend that you add as many records as possible to recordList. 
// Set the size of recordList to be within the range of 512 KB to 1 MB if possible.
for (int i = 0; i < 1000; ++i) {
    RecordEntry record = new RecordEntry();
    TupleRecordData data = new TupleRecordData(schema);
    // Assume that the following schema is used: {"fields":[{"name":"f1", "type":"STRING"},{"name":"f2", "type":"BIGINT"}]}
    data.setField("f1", "value" + i);
    data.setField("f2", i);
    record.setRecordData(data);

    // Optional. Add custom attributes.
    record.addAttribute("key1", "value1");
    recordList.add(record);
}

try {
      // Write data repeatedly for 1,000 times.
      for (int i = 0; i < 1000; ++i) {
        try {
          String shardId = datahubProducer.send(recordList);
          LOGGER.info("Write shard {} success, record count:{}", shardId, recordList.size());
        } catch (DatahubClientException e) {
          if (!ExceptionChecker.isRetryableException(e)) {
            LOGGER.info("Write data fail", e);
            break;
          }
          // Execute the sleep statement to retry data writing.
          Thread.sleep(1000);
        }
      }
    } finally {
      // Disable producer-related resources.
      datahubProducer.close();
    }
```

## **What to do next**

If you encounter any problems or have any questions in using DataHub, [submit tickets](https://smartservice.console.alibabacloud.com/service/list?spm=5176.12818093.console-base_top-nav.dticket.610016d0xfmpb2) or join the DingTalk group 33517130.
