The DataHub console provides several metrics that you can view on the topic details page, such as **read/write requests, real-time traffic, and historical traffic**. This topic describes these metrics.

## **Metrics**

-   QPS: Read/write requests per second.
    
-   RPS: Read/write records per second.
    
-   Throughput: Read/write throughput per second, in KB.
    
-   Throughput (Uncompressed): Uncompressed read/write throughput per second, in KB.
    
-   Fails: The data volume of failed requests per second, in KB.
    
-   Latency: Read/write request latency per request, in microseconds.
    

### **QPS metrics**

The QPS metrics show the number of read and write requests per second, as shown in the following graph:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4539422471/p748578.png)

### **RPS metrics**

The RPS metrics show the number of read and write records per second, as shown in the following graph:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4539422471/p748580.png)

### **Throughput**

The throughput metrics show the read and write data throughput, as shown in the following graph:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4539422471/p748583.png)

### Throughput (Uncompressed) metrics

**Note**

This metric was added in DataHub 2.25.

The Throughput (Uncompressed) metric shows the read/write data throughput when compression is disabled, as shown in the following graph:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4539422471/p748586.png)

**Note**

If the compressed read/write throughput is higher than the uncompressed read/write throughput, this usually occurs for one of two reasons:

-   Compression is not enabled for read/write requests for the topic.
    
-   Compression is enabled, but read/write requests are not sent in batches and the write protocol is JSON.
    

### **Fails metrics**

**Note**

This metric was added in DataHub 2.25.

If a single request writes to multiple shards, the entire request is considered failed if any write operation fails.

The Fails metric shows the number of failed requests, as shown in the following graph:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4539422471/p748593.png)

### **Latency metrics**

The Latency metric shows the read/write request latency, as shown in the following graph:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4539422471/p748598.png)

## **Real-time and historical traffic metrics**

In the upper-right corner of the topic details page, you can click the dots below the chart to switch views.

**Note**

The charts for historical traffic and real-time traffic (uncompressed) were added in DataHub 2.25.

### **Real-time traffic**

When data is uncompressed, the chart appears as follows:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4539422471/p748601.png)

When data is compressed, the chart appears as follows:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4539422471/p748602.png)

### **Historical traffic**

The historical traffic metric shows the request traffic for the topic over the **last seven days**.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4539422471/p748603.png)
