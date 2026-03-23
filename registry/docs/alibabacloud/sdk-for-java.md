Elastic Algorithm Service (EAS) SDK allows you to call a model service in a simple and stable manner. This topic describes the methods of EAS SDK for Java and provides sample code for common use cases, such as string input and output, tensor input and output, the queue service, and request data compression.

## Add dependencies

To integrate EAS SDK for Java in your project, add the eas-sdk dependency in the pom.xml file. For information about the latest version of the SDK, visit the [Maven repository](https://mvnrepository.com/artifact/com.aliyun.openservices.eas/eas-sdk). Sample code:

```
<dependency>
  <groupId>com.aliyun.openservices.eas</groupId>
  <artifactId>eas-sdk</artifactId>
  <version>2.0.20</version>
</dependency>
```

As of version 2.0.5, the SDK supports the queue service, which manages priority for asynchronous requests. To use the queue service without compatibility issues, add the required versions of the following dependencies:

```
<dependency>
    <groupId>org.java-websocket</groupId>
    <artifactId>Java-WebSocket</artifactId>
    <version>1.5.1</version>
</dependency>
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.1</version>
</dependency>
```

## **Interfaces**

### **PredictClient class**

This is the main client class. You can use it to configure service information, send requests, and receive prediction results.

**Interface**

**Description**

`PredictClient(HttpConfig httpConfig)`

-   Description: constructs a PredictClient instance.
    
-   Parameter: httpConfig specifies the HttpConfig instance that is used to construct the PredictClient instance.
    

`void setToken(String token)`

-   Description: configures the token that is used in an HTTP request.
    
-   Parameter: token specifies the token that is used for service authentication.
    

`void setModelName(String modelName)`

-   Description: configures the name of the model that is used for online prediction.
    
-   Parameter: modelName specifies the name of the model.
    

`void setEndpoint(String endpoint)`

-   Description: configures the endpoint of the service in the "host:port" format.
    
-   Parameter: endpoint specifies the endpoint that receives requests.
    

`void setDirectEndpoint(String endpoint)`

-   Description: configures the endpoint that is used to access the service through a virtual private cloud (VPC) direct connection channel. Endpoint example: pai-eas-vpc.cn-shanghai.aliyuncs.com.
    
-   Parameter: endpoint specifies the endpoint of the service for VPC direct connection.
    

`void setRequestPath(String requestPath)`

-   Description: configures the request path that is defined in the server code.
    
-   Parameter: requestPath specifies the server request path. Example: `client.setRequestPath("/custom_path")`.
    

`void setRetryCount(int retryCount)`

-   Description: configures the maximum number of retries if a request fails.
    
-   Parameter: retryCount specifies the maximum number of retries if a request fails.
    

`void setRetryConditions(EnumSet retryConditions)`

-   Description: configures retry conditions if a request fails. This method can be used together with the `setRetryCount` method. By default, all requests are retried if they fail. You can use this method to configure retry conditions for only specific request errors.
    
-   Parameter: **retryConditions** specifies one or more retry conditions of the EnumSet type. The following retry conditions are supported:
    
    -   RetryCondition.CONNECTION\_FAILED: The connection request failed.
        
    -   RetryCondition.CONNECTION\_TIMEOUT: The connection request timed out.
        
    -   RetryCondition.READ\_TIMEOUT: The response for a request timed out.
        
    -   RetryCondition.RESPONSE\_5XX: The status code 5xx is returned.
        
    -   RetryCondition.RESPONSE\_4XX: The status code 4xx is returned.
        
-   Sample code:
    
    ```
    client.setRetryConditions(
        EnumSet.of(
            RetryCondition.READ_TIMEOUT,    // Retry if a read timeout occurs.
            RetryCondition.RESPONSE_5XX // Retry if the status code 5xx is returned.
        )
    );
    ```
    
    The preceding sample code indicates that the request is retried only if the request times out or the status code 5xx is returned.
    

`void setContentType(String contentType)`

-   Description: configures the data stream type for the HTTP client. By default, the data stream type is set to "application/octet-stream".
    
-   Parameter: contentType specifies the type of the data stream to be sent.
    

`void setUrl(String url)`

Description: customizes the URL of a request.

`void setCompressor(Compressor compressor)`

-   Description: configures the compression method of request data.
    
-   Parameter: **compressor** specifies the compression method. The Compressor.Gzip and Compressor.Zlib compression methods are supported.
    
-   Example: For more information, see [Compress request data](#c03211c6baea0).
    

`void addExtraHeaders(Map<String, String> extraHeaders)`

-   Description: adds a custom HTTP header.
    
-   Parameter: Map<String, String> specifies an HTTP header of the Map<String, String> type.
    

`void createChildClient(String token, String endpoint, String modelName)`

-   Description: creates a child client that uses the thread pool of the parent client. Call this method to perform multi-thread predictions.
    
-   Parameters:
    
    -   token: the token that is used for service authentication.
        
    -   endpoint: the endpoint of the service.
        
    -   modelName: the name of the service.
        

`void predict(TFRequest runRequest)`

-   Description: sends a TensorFlow request to the service.
    
-   Parameter: runRequest specifies a TensorFlow request instance.
    

`void predict(String requestContent)`

-   Description: sends a request to the service by formatting the request content as a string.
    
-   Parameter: requestContent specifies the string that contains the request content.
    

`void predict(byte[] requestContent)`

-   Description: sends a request to the service by formatting the request content as a byte array.
    
-   Parameter: requestContent specifies the byte array that contains the request content.
    

### **HttpConfig class**

Used to configure underlying HTTP connection parameters, such as timeouts, thread counts, and the connection pool.

**Interface**

**Description**

`void setIoThreadNum(int ioThreadNum)`

-   Description: configures the number of I/O threads that are used to send HTTP requests. By default, two I/O threads are used.
    
-   Parameter: ioThreadNum specifies the number of I/O threads that are used to send HTTP requests.
    

`void setReadTimeout(int readTimeout)`

-   Description: configures the timeout period for waiting for a response after a request is sent. Default value: 5000, which indicates 5s.
    
-   Parameter: readTimeout specifies the timeout period for reading request content.
    

`void setConnectTimeout(int connectTimeout)`

-   Description: configures the connection timeout period for requests. Default value: 5000, which indicates 5s.
    
-   Parameter: connectTimeout specifies the connection timeout period for requests.
    

`void setMaxConnectionCount(int maxConnectionCount)`

-   Description: configures the maximum number of connections. Default value: 1000.
    
-   Parameter: maxConnectionCount specifies the maximum number of connections that are allowed in the connection pool of the PredictClient instance.
    

`void setMaxConnectionPerRoute(int maxConnectionPerRoute)`

-   Description: configures the maximum number of default connections on each route. Default value: 1000.
    
-   Parameter: maxConnectionPerRoute specifies the maximum number of default connections on each route.
    

`void setKeepAlive(boolean keepAlive)`

-   Description: specifies whether to enable the keep-alive mechanism for HTTP connections.
    
-   Parameter: keepAlive specifies whether to enable the keep-alive mechanism for HTTP connections. Default value: true.
    

`int getErrorCode()`

Returns the status code of the last call.

`string getErrorMessage()`

Returns the error message of the last call.

### **TFRequest class**

Used to build input data for a TensorFlow model.

**Interface**

**Description**

`void setSignatureName(String value)`

-   Description: configures the SignatureDef of the TensorFlow model that is used in the service and saved in the SavedModel format.
    
-   Parameter: value specifies the name of the SignatureDef of the TensorFlow model.
    

`void addFetch(String value)`

-   Description: configures the alias of the output tensor of the TensorFlow model that is used in the service.
    
-   Parameter: value specifies the alias of the output tensor.
    

`void addFeed(String inputName, TFDataType dataType, long[]shape, ?[]content)`

-   Description: configures the input tensor of the TensorFlow model that is used in the service.
    
-   Parameters:
    
    -   inputName: the alias of the input tensor.
        
    -   dataType: the data type of the input tensor.
        
    -   shape: the shape of the input tensor.
        
    -   content: the content of the input tensor. Specify this parameter in the one-dimensional array form.
        
        If you set the dataType parameter to DT\_FLOAT, DT\_COMPLEX64, DT\_BFLOAT16, or DT\_HALF, the content parameter must be a one-dimensional array of FLOAT type elements. If you set the dataType parameter to DT\_COMPLEX64, every two adjacent elements in the array represent the real part and imaginary part of a complex number.
        
        If you set the dataType parameter to DT\_DOUBLE or DT\_COMPLEX128, the content parameter must be a one-dimensional array of DOUBLE type elements. If you set the dataType parameter to DT\_COMPLEX128, every two adjacent elements in the array represent the real part and imaginary part of a complex number.
        
        If you set the dataType parameter to DT\_INT32, DT\_UINT8, DT\_INT16, DT\_INT8, DT\_QINT8, DT\_QUINT8, DT\_QINT32, DT\_QINT16, DT\_QUINT16, or DT\_UINT16, the content parameter must be a one-dimensional array of INT type elements.
        
        If you set the dataType parameter to DT\_INT64, the content parameter must be a one-dimensional array of LONG type elements.
        
        If you set the dataType parameter to DT\_STRING, the content parameter must be a one-dimensional array of STRING type elements.
        
        If you set the dataType parameter to DT\_BOOL, the content parameter must be a one-dimensional array of BOOLEAN type elements.
        

`List<Long> getTensorShape(String outputName)`

-   Description: queries the shape of the output tensor by using the alias of the output tensor.
    
-   Parameter: outputName specifies the alias of the output tensor whose shape you want to query.
    
-   Return value: a one-dimensional array that represents the shape of the output tensor.
    

`List<Float> getFloatVals(String outputName)`

-   Description: extracts the content of the output tensor whose data type is DT\_FLOAT, DT\_COMPLEX64, DT\_BFLOAT16, or DT\_HALF.
    
-   Parameter: outputName specifies the alias of the output tensor whose content you want to extract.
    
-   Return value: a one-dimensional array that specifies the content of the output tensor.
    

`List<Double> getDoubleVals(String outputName)`

-   Description: extracts the content of the output tensor whose data type is DT\_DOUBLE or DT\_COMPLEX128.
    
-   Parameter: outputName specifies the alias of the output tensor whose content you want to extract.
    
-   Return value: a one-dimensional array that specifies the content of the output tensor.
    

`List<Integer> getIntVals(String outputName)`

-   Description: extracts the content of the output tensor whose data type is DT\_INT32, DT\_UINT8, DT\_INT16, DT\_INT8, DT\_QINT8, DT\_QUINT8, DT\_QINT32, DT\_QINT16, DT\_QUINT16, or DT\_UINT16.
    
-   Parameter: outputName specifies the alias of the output tensor whose content you want to extract.
    
-   Return value: a one-dimensional array that specifies the content of the output tensor.
    

`List<String> getStringVals(String outputName)`

-   Description: extracts the content of the output tensor whose data type is DT\_STRING.
    
-   Parameter: outputName specifies the alias of the output tensor whose content you want to extract.
    
-   Return value: a one-dimensional array that specifies the content of the output tensor.
    

`List<Long> getInt64Vals(String outputName)`

-   Description: extracts the content of the output tensor whose data type is DT\_INT64.
    
-   Parameter: outputName specifies the alias of the output tensor whose content you want to extract.
    
-   Return value: a one-dimensional array that specifies the content of the output tensor.
    

`List<Boolean> getBoolVals(String outputName)`

-   Description: extracts the content of the output tensor whose data type is DT\_BOOL.data
    
-   Parameter: outputName specifies the alias of the output tensor whose content you want to extract.
    
-   Return value: a one-dimensional array that specifies the content of the output tensor.
    

### **QueueClient class**

Used to interact with the EAS queue service to produce, consume, and manage data.

**Interface**

**Description**

`QueueClient(String endpoint, String queueName, String token, HttpConfig httpConfig, QueueUser user)`

-   Description: constructs a QueueClient instance.
    
-   Parameters:
    
    -   **endpoint**: the endpoint of the service.
        
    -   **queueName**: the name of the service.
        
    -   **token**: the token of the service.
        
    -   **httpConfig**: the configuration of service requests.
        
    -   **user**: contains the UserId and GroupName parameters. By default, the value of UserId is a random number and the value of GroupName is eas.
        

`JSONObject attributes()`

-   Description: retrieves details of the queue service.
    
-   Return value: a JSONObject instance that contains the following information about the queue service:
    
    -   **meta.maxPayloadBytes**: the maximum size of each data record in the queue.
        
    -   **meta.name**: the name of the queue.
        
    -   **stream.approxMaxLength**: the maximum number of data records that can be stored in the queue.
        
    -   **stream.firstEntry**: the index of the first data record in the queue.
        
    -   **stream.lastEntry**: the index of the last data record in the queue.
        
    -   **stream.length**: the number of data records that are stored in the queue.
        

`Pair<Long, String> put(byte[] data, long priority, Map<String, String> tags)`

-   Description: writes data to the queue service.
    
-   Parameters:
    
    -   **data**: an data record of the Byte\[\] type.
        
    -   **priority**: the priority of the data record. The default value is 0, which specifies that the data record has a low priority. A value of 1 specifies a high priority.
        
    -   **tags**: a custom parameter.
        
-   Return value: an ordered pair of two elements. The first element is of the Long type and indicates the index of the data record. The second element is of the string type and indicates the request ID.
    

`DataFrame[] get(long index, long length, long timeout, boolean autoDelete, Map<String, String> tags)`

-   Description: retrieves data records from the queue service.
    
-   Parameters:
    
    -   **index**: the starting index for the retrieval. A value of -1 specifies that the retrieval starts from the latest data records.
        
    -   **length**: the amount of data records that you want to retrieve.
        
    -   **timeout**: the timeout period for the retrieval. Unit: seconds.
        
    -   **autoDelete**: specifies whether to automatically delete the data records from the queue after they are retrieved.
        
    -   **tags**: a custom parameter. For example, you can set this parameter to the request ID.
        
-   Return value: an array of DataFrame.
    

`void truncate(Long index)`

-   Description: deletes the data records whose index is smaller than an index in a queue.
    

`String delete(Long index)`

-   Description: deletes a data record in a queue by specifying the index of the data record.
    
-   Parameter: **index** specifies the index of the data record that you want to delete.
    
-   Return value: OK returned if a data record is deleted.
    

`JSONObject search(long index)`

-   Description: queries the queue information of a data record.
    
-   Parameter: **index** specifies the index of the data record that you want to query.
    
-   Return value: the queue information of the data record of the JSONObject type. The information contains the following fields:
    
    -   **ConsumerId**: the ID of the instance that processes the data record.
        
    -   **IsPending**: indicates whether the data record is being processed.
        
        -   True indicates that the data record is being processed.
            
        -   False indicates that the data record is in a queue and waiting for being processed.
            
    -   **WaitCount**: indicates the number of data records before the data record. This parameter is valid only when IsPending is set to False. If IsPending is set to True, the value of this parameter is 0.
        
    
    Sample responses:
    
    -   If `{'ConsumerId': 'eas.****', 'IsPending': False, 'WaitCount':2}` returns, the data record is in a queue and waiting for being processed.
        
    -   If the log displays `no data in stream` and `{}` returns, the data record is not found in a queue. This may be because the data record has been processed and a result has been returned to the client, or the index parameter is incorrectly configured.
        
        **Important**
        
        When you use QueueClient to call the search operation, you must set the group ID to the service name. Otherwise, the value of IsPending in the result returned by the search operation will be false. Sample code:
        
        -   Set the group ID to the service name
            
            ```
            QueueUser u = new QueueUser(UUID.randomUUID().toString(), "<service_name>");
            QueueClient input_queue = new QueueClient(queueEndpoint, inputQueueName, queueToken, new HttpConfig(), u);
            ```
            
        -   Query the queuing information of data in the specified index
            
            ```
            System.out.println(input_queue.search(index));
            ```
            
        

`WebSocketWatcher watch(long index, long window, boolean indexOnly, boolean autoCommit, Map<String, String> tags)`

-   Description: subscribes to the data in the output queue.
    
-   Parameters:
    
    -   **index**: the starting index from which data are retrieved. If the value is -1, only the most recent data is retrieved.
        
    -   **window**: the size of the sending window, which is the maximum length of uncommitted data. If the length of uncommitted data exceeds the value of this parameter, the queue service stops sending.
        
    -   **indexOnly**: specifies whether to return only the index and tags parameters to save bandwidth.
        
    -   **autoCommit**: specifies whether to automatically commit data after data is sent to avoid invoking the commit operation. If you set **autoCommit** to **true**_,_ the **window** parameter is invalid.
        
    -   **tags:** a custom parameter.
        
-   Return value: a WebSocketWatcher instance that is used to obtain the subscribed data. For more information, see the "[Use the queue service](#5156869f)" section of this topic.
    

`String commit(Long index)` or `String commit(Long[] index)`

-   Description: confirms that the data is consumed and deletes the data in the queue.
    
-   Return value: OK indicates that the operation is successful.
    

`void end(boolean force)`

Description: stops the queue service.

### **DataFrame class**

An encapsulation object for a data item in the queue service.

**Interface**

**Description**

`byte[] getData()`

-   Description: retrieves values of data records.
    
-   Return value: values of the Byte\[\] type.
    

`long getIndex()`

-   Description: retrieves the index of a data record.
    
-   Return value: the index of the Long type.
    

`Map<String, String> getTags()`

-   Description: retrieves tags of data records.
    
-   Return value: tags of the Map<String,String> type, which can be used to obtain the request ID. Example: `df.getTags().get("requestId")`.
    

## Demos

### **Use string input and output**

If you use custom processors to deploy a model, such as a Predictive Model Markup Language (PMML) model, the request content is often formatted as a string. Sample code:

```
import com.aliyun.openservices.eas.predict.http.PredictClient;
import com.aliyun.openservices.eas.predict.http.HttpConfig;

public class TestString {
    public static void main(String[] args) throws Exception {
        // Start and initialize a client. A PredictClient instance is shared by multiple requests. Do not create a PredictClient instance for each request. 
        PredictClient client = new PredictClient(new HttpConfig());
        client.setToken("YWFlMDYyZDNmNTc3M2I3MzMwYmY0MmYwM2Y2MTYxMTY4NzBkNzdj****");
        // To use the VPC direct connection feature, call the setDirectEndpoint method.
        // Example: client.setDirectEndpoint("pai-eas-vpc.cn-shanghai.aliyuncs.com");
        // You must enable the VPC direct connection feature and configure a vSwitch in the PAI console. After you enable the feature, you can call the service without the need to passing a gateway, which improves stability and performance. 
        // Note: To call a service by using a gateway, use the endpoint that starts with your user ID. To obtain the endpoint, find the service that you want to call on the EAS-Online Model Services page and click Invocation Method in the Service Type column. In the dialog box that appears, you can view the endpoint. To call a service by using the VPC direct connection feature, use the endpoint in the pai-eas-vpc.{region_id}.aliyuncs.com format. 
        client.setEndpoint("182848887922****.vpc.cn-shanghai.pai-eas.aliyuncs.com");
        client.setModelName("scorecard_pmml_example");

        // Define the input string.
        String request = "[{\"money_credit\": 3000000}, {\"money_credit\": 10000}]";
        System.out.println(request);

        // EAS returns a string.
        try {
            String response = client.predict(request);
            System.out.println(response);
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Close the client.
        client.shutdown();
        return;
    }
}
```

The preceding sample code performs the following steps:

1.  Call the `PredictClient` method to create a client for the service. If multiple services are involved, create multiple clients.
    
2.  Configure the token, endpoint, and model name parameters for the client.
    
3.  Create a request variable of the STRING type as the input and call the `client.predict` method to send an HTTP request. The service returns the response parameter.
    

### **Use TensorFlow input and output**

If your service uses TensorFlow models, the input must use the TFRequest format and the output must use the TFResponse format. Sample code:

```
import java.util.List;

import com.aliyun.openservices.eas.predict.http.PredictClient;
import com.aliyun.openservices.eas.predict.http.HttpConfig;
import com.aliyun.openservices.eas.predict.request.TFDataType;
import com.aliyun.openservices.eas.predict.request.TFRequest;
import com.aliyun.openservices.eas.predict.response.TFResponse;

public class TestTF {
    public static TFRequest buildPredictRequest() {
        TFRequest request = new TFRequest();
        request.setSignatureName("predict_images");
        float[] content = new float[784];
        for (int i = 0; i < content.length; i++) {
            content[i] = (float) 0.0;
        }
        request.addFeed("images", TFDataType.DT_FLOAT, new long[]{1, 784}, content);
        request.addFetch("scores");
        return request;
    }

    public static void main(String[] args) throws Exception {
        PredictClient client = new PredictClient(new HttpConfig());

        // To use the VPC direct connection feature, call the setDirectEndpoint method. 
        // Example: client.setDirectEndpoint("pai-eas-vpc.cn-shanghai.aliyuncs.com");
        // You must enable the VPC direct connection feature and configure a vSwitch in the PAI console. After you enable the feature, you can call the service without the need to passing a gateway, which improves stability and performance. 
        // Note: To call a service by using a gateway, use the endpoint that starts with your user ID. To obtain the endpoint, find the service that you want to call on the EAS-Online Model Services page and click Invocation Method in the Service Type column. In the dialog box that appears, you can view the endpoint. To call a service by using the VPC direct connection feature, use the endpoint in the pai-eas-vpc.{region_id}.aliyuncs.com format. 
        client.setEndpoint("182848887922****.vpc.cn-shanghai.pai-eas.aliyuncs.com");
        client.setModelName("mnist_saved_model_example");
        client.setToken("YTg2ZjE0ZjM4ZmE3OTc0NzYxZDMyNmYzMTJjZTQ1YmU0N2FjMTAy****");
        long startTime = System.currentTimeMillis();
        int count = 1000;
        for (int i = 0; i < count; i++) {
            try {
                TFResponse response = client.predict(buildPredictRequest());
                List<Float> result = response.getFloatVals("scores");
                System.out.print("Predict Result: [");
                for (int j = 0; j < result.size(); j++) {
                    System.out.print(result.get(j).floatValue());
                    if (j != result.size() - 1) {
                        System.out.print(", ");
                    }
                }
                System.out.print("]\n");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        long endTime = System.currentTimeMillis();
        System.out.println("Spend Time: " + (endTime - startTime) + "ms");
        client.shutdown();
    }
}
```

The preceding sample code performs the following steps:

1.  Call the `PredictClient` method to create a client for the service. If multiple services are involved, create multiple clients.
    
2.  Configure the token, endpoint, and model name parameters for the client.
    
3.  Encapsulate the input by using the TFRequest class and the output by using the TFResponse class.
    

### **Use the queue service**

Use the QueueClient class to implement the queue service. Sample code:

```
import com.alibaba.fastjson.JSONObject;
import com.aliyun.openservices.eas.predict.http.HttpConfig;
import com.aliyun.openservices.eas.predict.http.QueueClient;
import com.aliyun.openservices.eas.predict.queue_client.QueueUser;
import com.aliyun.openservices.eas.predict.queue_client.WebSocketWatcher;

public class DemoWatch {
    public static void main(String[] args) throws Exception {
        /** Create a client for the queue service. */
        String queueEndpoint = "18*******.cn-hangzhou.pai-eas.aliyuncs.com";
        String inputQueueName = "test_queue_service";
        String sinkQueueName = "test_queue_service/sink";
        String queueToken = "test-token";

        /** Create the input queue. After you add data to the input queue, the inference service automatically reads the request data from the input queue. */
        QueueClient inputQueue =
            new QueueClient(queueEndpoint, inputQueueName, queueToken, new HttpConfig(), new QueueUser());
        /** Create the output queue. After the inference service processes the input data, the result is written to the output queue. */
        QueueClient sinkQueue =
            new QueueClient(queueEndpoint, sinkQueueName, queueToken, new HttpConfig(), new QueueUser());
        /** Clear data in the queue. Use with caution. */
        inputQueue.clear();
        sinkQueue.clear();

        /** Add data to the input queue. */
        int count = 10;
        for (int i = 0; i < count; ++i) {
            String data = Integer.toString(i);
            inputQueue.put(data.getBytes(), null);
            /** The queue service supports multi-priority queues. You can call the put method to set the data priority. The default priority is 0. */
            //  inputQueue.put(data.getBytes(), 0L, null);
        }

        /** Call the watch method to subscribe to the data of the output queue. The window size is 5. */
        WebSocketWatcher watcher = sinkQueue.watch(0L, 5L, false, true, null);
        /** You can configure the WatchConfig parameter to specify the number of retries, the retry interval (in seconds), and whether to retry indefinitely. If you do not configure the WatchConfig parameter, the default number of retries is 3 and the default retry interval is 5. */
        //  WebSocketWatcher watcher = sink_queue.watch(0L, 5L, false, true, null, new WatchConfig(3, 1));
        //  WebSocketWatcher watcher = sink_queue.watch(0L, 5L, false, true, null, new WatchConfig(true, 10));

        /** Obtain output data. */
        for (int i = 0; i < count; ++i) {
            try {
                /** Call the getDataFrame method to obtain data of the DataFrame type. If no data is available, the method blocks until data is available. */
                byte[] data = watcher.getDataFrame().getData();
                System.out.println("[watch] data = " + new String(data));
            } catch (RuntimeException ex) {
                System.out.println("[watch] error = " + ex.getMessage());
                break;
            }
        }
        /** Close the watcher. Each client can have only one watcher. If you do not close a watcher, an error is reported when you create another client for the queue service. */
        watcher.close();

        Thread.sleep(2000);
        JSONObject attrs = sinkQueue.attributes();
        System.out.println(attrs.toString());

        /** Close the client. */
        inputQueue.shutdown();
        sinkQueue.shutdown();
    }
}
```

The preceding sample code performs the following steps:

1.  Call the `QueueClient` method to create a client for queue service. Make sure that you create an input queue and an output queue, which are required for an inference service.
    
2.  Call the `put()` method to send data to the input queue and the `watch()` method to subscribe to data in the output queue.
    
    **Note**
    
    For the convenience of demonstration, this example sends data and subscribes to data in the same thread. In your actual implementation, you can send data and subscribe to data in different threads.
    

### Compress request data

If the size of request data is large, EAS SDK allows you to compress the data in the Zlib or Gzip format before you send the data to the server. To use the data compression feature, configure the `rpc.decompressor` parameter when you deploy the service.

Sample configuration for service deployment:

```
"metadata": {
  "rpc": {
    "decompressor": "zlib"
  }
}
```

Sample code for sending compressed data:

```
package com.aliyun.openservices.eas.predict;
import com.aliyun.openservices.eas.predict.http.Compressor;
import com.aliyun.openservices.eas.predict.http.PredictClient;
import com.aliyun.openservices.eas.predict.http.HttpConfig;
public class TestString {
    public static void main(String[] args) throws Exception{
    	  // Start and initialize a client. 
        PredictClient client = new PredictClient(new HttpConfig());
        client.setEndpoint("18*******.cn-hangzhou.pai-eas.aliyuncs.com");
        client.setModelName("echo_compress");
        client.setToken("YzZjZjQwN2E4NGRkMDMxNDk5NzhhZDcwZDBjOTZjOGYwZDYxZGM2****");
        // You can also set the compressor to Compressor.Gzip. 
        client.setCompressor(Compressor.Zlib);  
        // Define the input string. 
        String request = "[{\"money_credit\": 3000000}, {\"money_credit\": 10000}]";
        System.out.println(request);
        // EAS returns a string. 
        String response = client.predict(request);
        System.out.println(response);
        // Close the client. 
        client.shutdown();
        return;
    }
}
```

## **References**

-   The status code in the response indicates whether the request is successful. For more information, see [Appendix: Status codes](/help/en/pai/user-guide/status-codes).
    
-   For information about other methods to call a model service, see [Service invocation methods](/help/en/pai/user-guide/methods-for-calling-services/).
