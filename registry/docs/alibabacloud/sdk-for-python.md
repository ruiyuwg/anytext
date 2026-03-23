Call EAS services using the official Python SDK with support for TensorFlow, PyTorch, string-based models, and VPC direct connections.

## Installation

```
pip install -U eas-prediction --user
```

## API reference

### Common parameters

endpoint: server endpoint.

-   For regular mode, use the default gateway endpoint. Example: `182848887922***.cn-shanghai.pai-eas.aliyuncs.com`.
    
-   For VPC direct connection, use the regional common endpoint. For example, in China (Shanghai): `pai-eas-vpc.cn-shanghai.aliyuncs.com`.
    

### PredictClient

**Method**

**Description**

`PredictClient(endpoint, service_name, custom_url)`

-   Creates a client object of the PredictClient class.
    
-   Parameters:
    
    -   endpoint: server endpoint. See [Common parameters](#6431e7f471vd3).
        
    -   service\_name: service name.
        
    -   **custom\_url**: service URL. Optional. Required only for services with non-standard endpoints (not in `<uid>.<region>.pai-eas.aliyuncs.com` format), such as web UI services. Example: `client = PredictClient(custom_url='<url>')`.
        

`set_endpoint(endpoint)`

-   Specifies the server endpoint. See [Common parameters](#6431e7f471vd3).
    
-   Parameter: endpoint: server endpoint.
    

`set_service_name(service_name)`

-   Specifies the service name.
    
-   Parameter: service\_name: service name.
    

`set_endpoint_type(endpoint_type)`

-   Specifies the gateway type.
    
-   Parameter: endpoint\_type: gateway type. Supported values:
    
    -   ENDPOINT\_TYPE\_GATEWAY: default gateway.
        
    -   ENDPOINT\_TYPE\_DIRECT: VPC direct connection. If not set, defaults to default gateway.
        

`set_token(token)`

-   Specifies the service access token.
    
-   Parameter: token: service access token.
    

`set_retry_count(max_retry_count)`

-   Sets the maximum number of retries after request failure.
    
-   Parameter: max\_retry\_count: maximum number of retries after request failure. Default: 5.
    
    **Important**
    
    The client must resend requests if server errors occur or gateway connections close. Do not set this to 0.
    

`set_max_connection_count(max_connection_count)`

-   Specifies the maximum number of persistent connections in the client connection pool. The client maintains persistent connections to the server for better performance, using idle connections from the pool for each request.
    
-   Parameter: max\_connection\_count: maximum number of persistent connections in the pool. Default: 100.
    

`set_timeout(timeout)`

-   Specifies the request timeout period.
    
-   Parameter: timeout: request timeout in milliseconds. Default: 5000.
    

`init()`

Initializes the client object. Call this method after all configuration methods to make parameters take effect.

`predict(request)`

-   Sends a prediction request to the service.
    
-   Parameter: request: request object (StringRequest, TFRequest, TorchRequest, etc.).
    
-   Return value: prediction response.
    

### StringRequest

**Method**

**Description**

`StringRequest(request_data)`

-   Creates a StringRequest object.
    
-   Parameter: request\_data: request string to send.
    

### StringResponse

**Method**

**Description**

`to_string()`

-   Converts the StringResponse to a string.
    
-   Return value: response body.
    

### TFRequest

**Method**

**Description**

`TFRequest(signature_name)`

-   Creates a TFRequest object.
    
-   Parameter: signature\_name: model signature name.
    

`add_feed(self, input_name, shape, data_type, content)`

-   Specifies the input tensor for the TensorFlow service.
    
-   Parameters:
    
    -   input\_name: input tensor alias.
        
    -   shape: input tensor shape.
        
    -   data\_type: input tensor data type. Supported types:
        
        -   TFRequest.DT\_FLOAT
            
        -   TFRequest.DT\_DOUBLE
            
        -   TFRequest.DT\_INT8
            
        -   TFRequest.DT\_INT16
            
        -   TFRequest.DT\_INT32
            
        -   TFRequest.DT\_INT64
            
        -   TFRequest.DT\_STRING
            
        -   TFRequest.TF\_BOOL
            
    -   content: input tensor content as a one-dimensional array.
        

`add_fetch(self, output_name)`

-   Specifies the output tensor alias to return from the TensorFlow service.
    
-   Parameter: output\_name: output tensor alias to return.
    
    Optional for SavedModel format. If not specified, all output tensors are returned.
    
    Required for frozen models.
    

`to_string()`

-   Serializes the TFRequest protocol buffer object to a string for transmission.
    
-   Return value: serialized TFRequest string.
    

### TFResponse

**Method**

**Description**

`get_tensor_shape(output_name)`

-   Queries the shape of the specified output tensor.
    
-   Parameter: output\_name: output tensor alias.
    
-   Return value: output tensor shape.
    

`get_values(output_name)`

-   Queries the data vectors of the specified output tensor.
    
-   Parameter: output\_name: output tensor alias.
    
-   Return value: one-dimensional array. Use with `get_tensor_shape()` to restore the array to the required multi-dimensional format. The array data type matches the output tensor data type.
    

### TorchRequest

**Method**

**Description**

`TorchRequest()`

Creates a TorchRequest object.

`add_feed(self, index, shape, data_type, content)`

-   Specifies the input tensor for the PyTorch service.
    
-   Parameters:
    
    -   index: input tensor index.
        
    -   shape: input tensor shape.
        
    -   data\_type: input tensor data type. Supported types:
        
        -   TFRequest.DT\_FLOAT
            
        -   TFRequest.DT\_DOUBLE
            
        -   TFRequest.DT\_INT8
            
        -   TFRequest.DT\_INT16
            
        -   TFRequest.DT\_INT32
            
        -   TFRequest.DT\_INT64
            
        -   TFRequest.DT\_STRING
            
        -   TFRequest.TF\_BOOL
            
    -   content: input tensor content as a one-dimensional array.
        

`add_fetch(self, output_index)`

-   Specifies the output tensor index to return from the PyTorch service. Optional. If not called, all output tensors are returned.
    
-   Parameter: output\_index: output tensor index.
    

`to_string()`

-   Serializes the TorchRequest protocol buffer object to a string for transmission.
    
-   Return value: serialized TorchRequest string.
    

### TorchResponse

**Method**

**Description**

`get_tensor_shape(output_index)`

-   Queries the shape of the specified output tensor.
    
-   Parameter: output\_index: output tensor index.
    
-   Return value: output tensor shape.
    

`get_values(output_index)`

-   Queries the data vector of the specified output tensor. Returns a one-dimensional array. Use with `get_tensor_shape()` to restore to multi-dimensional format. The array data type matches the output tensor data type.
    
-   Parameter: output\_index: output tensor index.
    
-   Return value: one-dimensional array.
    

### QueueClient

**Method**

**Description**

`QueueClient(endpoint, queue_name)`

-   Creates a QueueClient object.
    
-   Parameters:
    
    -   endpoint: server endpoint.
        
    -   queue\_name: queue name.
        
-   Return value: created client object.
    

`set_token(token)`

-   Creates an authentication token for the QueueClient.
    
-   Parameter: token: queue authentication token.
    

`init(uid=None,gid='eas')`

-   Initializes the QueueClient object.
    
-   Parameters:
    
    -   uid: client user ID for server registration. Each client instance must have a unique user ID, registered only once. Data is evenly distributed among user IDs.
        
    -   gid: client group ID for server registration. Clients with the same group ID belong to the same group. If different groups exist, a copy of each data record is pushed to all groups.
        

`set_logger(logger=None)`

-   Configures a logger for the queue. Defaults to displaying warnings. Set to None to disable logging.
    
-   Parameter: logger: logger to configure.
    

`truncate(index)`

-   Truncates queue data before a specific index, retaining only data after the index.
    
-   Parameter: index: index for truncation.
    

`put(data,tags:dict={})`

-   Writes a data record to the queue.
    
-   Parameters:
    
    -   data: data record to write.
        
    -   tags: optional data record tags.
        
-   Return values:
    
    -   index: index of the written data record. Can be used to query data.
        
    -   requestId: auto-generated request ID for the data record. Can be used as a special tag to query data.
        

`get(request_id=None, index=0, length=1, timeout='5s', auto_delete=True, tags={})`

-   Queries queue data based on specified conditions.
    
-   Parameters:
    
    -   request\_id: request ID of the data record to query. If specified, queries length records starting from index. Returns the matching record if found, otherwise null.
        
    -   index: start index for query. Default: 0 (first record).
        
    -   length: number of records to query. Returns up to length records starting from index (inclusive).
        
    -   timeout: query timeout period. Returns immediately if length records are available, otherwise waits until timeout.
        
    -   auto\_delete: whether to auto-delete obtained records from the queue. If False, records are repeatedly queried. Use `Del()` to manually delete.
        
    -   tags: tags for filtering records (dict). If specified, queries length records from index and returns only records with matching tags.
        
-   Return value: obtained data records in DataFrame format.
    

`attributes()`

-   Queries queue attributes including total length and current data length.
    
-   Return value: attrs: queue attributes (dict).
    

`delete(indexes)`

-   Deletes data records at specified index values from the queue.
    
-   Parameter: indexes: index values for deletion. Single value (string) or multiple values (list).
    

`search(index)`

-   Description: queries the queue information of a data record.
    
-   Parameter: **index**: the index of the data record.
    
-   Return value: the queue information of the data record. The queue information is of the JSONObject type and contains the following fields:
    
    -   **ConsumerId**: the ID of the instance that processes the data record.
        
    -   **IsPending**: indicates whether the data record is being processed. Valid values:
        
        -   True: The data record is being processed.
            
        -   False: The data record is waiting in a queue to be processed.
            
    -   **WaitCount**: indicates the number of the data records that are waiting to be processed before the current data record in the queue. This parameter is valid only when IsPending is set to False. If IsPending is set to True, the value of this parameter is 0.
        
    
    Sample responses:
    
    -   If `{'ConsumerId': 'eas.****', 'IsPending': False, 'WaitCount':2}` is returned, the data record is waiting to be processed in a queue.
        
    -   If the returned log displays `search error:Code 404, Message: b'no data in stream'` and `{}` is returned, the data record is not found in the queue. This may be because the data record has been processed by the server and a result has been returned to the client, or the index parameter is incorrectly configured.
        

`watch(index, window, index_only=False, auto_commit=False)`

-   Subscribes to queue data records. The queuing service pushes data to clients based on specified conditions.
    
-   Parameters:
    
    -   index: start index for subscription.
        
    -   window: maximum number of records pushed to a single client.
        
        **Note**
        
        If pushed records are not committed, the server stops pushing. After N records are committed, N more are pushed, ensuring the client handles no more than window records. This controls client-side concurrency.
        
    -   index\_only: whether to push only the index value.
        
    -   auto\_commit: whether to auto-commit after push. Recommended: False. Manually commit after receiving and computing. If an exception occurs before computation completes, uncommitted records are pushed to other instances.
        
-   Return value: watcher for reading pushed data.
    

`commit(index)`

-   Commits the data record at the specified index.
    
    **Note**
    
    When a record is processed and no longer needs pushing to other instances, commit it for deletion from the queue.
    
-   Parameter: index: index values to commit. Single value (string) or multiple values (list).
    

### Watcher

**Method**

**Description**

`run()`

-   Runs the watcher to establish a WebSocket connection, receives server-pushed data, and returns it to the caller in real time.
    
-   Return value: real-time pushed data in DataFrame format.
    

`close()`

Closes the watcher and terminates backend connections.

**Note**

Only one watcher can run per client. Close the current watcher before starting another.

## Examples

-   **String input and output**
    
    For services deployed with custom processors (e.g., PMML models), use strings for service calls:
    
    ```
    #!/usr/bin/env python
    
    from eas_prediction import PredictClient
    from eas_prediction import StringRequest
    
    if __name__ == '__main__':
        client = PredictClient('http://182848887922****.cn-shanghai.pai-eas.aliyuncs.com', 'scorecard_pmml_example')
        client.set_token('YWFlMDYyZDNmNTc3M2I3MzMwYmY0MmYwM2Y2MTYxMTY4NzBkNzdj****')
        client.init()
    
        request = StringRequest('[{"fea1": 1, "fea2": 2}]')
        for x in range(0, 1000000):
            resp = client.predict(request)
            print(resp)
    ```
    
-   **Tensor input and output**
    
    For TensorFlow services, use TFRequest and TFResponse classes:
    
    ```
    #!/usr/bin/env python
    
    from eas_prediction import PredictClient
    from eas_prediction import StringRequest
    from eas_prediction import TFRequest
    
    if __name__ == '__main__':
        client = PredictClient('http://182848887922****.cn-shanghai.pai-eas.aliyuncs.com', 'mnist_saved_model_example')
        client.set_token('YTg2ZjE0ZjM4ZmE3OTc0NzYxZDMyNmYzMTJjZTQ1YmU0N2FjMTAy****')
        client.init()
    
        #request = StringRequest('[{}]')
        req = TFRequest('predict_images')
        req.add_feed('images', [1, 784], TFRequest.DT_FLOAT, [1] * 784)
        for x in range(0, 1000000):
            resp = client.predict(req)
            print(resp)
    ```
    
-   **VPC direct connection**
    
    VPC direct connection is available only for services in EAS dedicated resource groups. The resource group and vSwitch must be in the same VPC. For setup, see [Work with dedicated resource groups](/help/en/pai/user-guide/work-with-dedicated-resource-groups#multiTask4399) and [Network access configuration](/help/en/pai/user-guide/configure-network-connectivity#multiTask1215). This mode adds `client.set_endpoint_type(ENDPOINT_TYPE_DIRECT)` and is recommended for high-concurrency scenarios:
    
    ```
    #!/usr/bin/env python
    
    from eas_prediction import PredictClient
    from eas_prediction import StringRequest
    from eas_prediction import TFRequest
    from eas_prediction import ENDPOINT_TYPE_DIRECT
    
    if __name__ == '__main__':
        client = PredictClient('http://pai-eas-vpc.cn-hangzhou.aliyuncs.com', 'mnist_saved_model_example')
        client.set_token('M2FhNjJlZDBmMzBmMzE4NjFiNzZhMmUxY2IxZjkyMDczNzAzYjFi****')
        client.set_endpoint_type(ENDPOINT_TYPE_DIRECT)
        client.init()
    
        request = TFRequest('predict_images')
        request.add_feed('images', [1, 784], TFRequest.DT_FLOAT, [1] * 784)
        for x in range(0, 1000000):
            resp = client.predict(request)
            print(resp)
    ```
    
-   **PyTorch model**
    
    For PyTorch services, use TorchRequest and TorchResponse classes:
    
    ```
    #!/usr/bin/env python
    
    from eas_prediction import PredictClient
    from eas_prediction import TorchRequest
    
    if __name__ == '__main__':
        client = PredictClient('http://182848887922****.cn-shanghai.pai-eas.aliyuncs.com', 'pytorch_gpu_wl')
        client.init()
    
        req = TorchRequest()
        req.add_feed(0, [1, 3, 224, 224], TorchRequest.DT_FLOAT, [1] * 150528)
        # req.add_fetch(0)
        import time
        st = time.time()
        timer = 0
        for x in range(0, 10):
            resp = client.predict(req)
            timer += (time.time() - st)
            st = time.time()
            print(resp.get_tensor_shape(0))
            # print(resp)
        print("average response time: %s s" % (timer / 10) )
    ```
    
-   **Blade processor-based model**
    
    For Blade processor services, use BladeRequest and BladeResponse classes:
    
    ```
    #!/usr/bin/env python
    
    from eas_prediction import PredictClient
    from eas_prediction import BladeRequest 
    
    if __name__ == '__main__':
        client = PredictClient('http://182848887922****.cn-shanghai.pai-eas.aliyuncs.com', 'nlp_model_example')
        client.init()
    
        req = BladeRequest()
    
        req.add_feed('input_data', 1, [1, 360, 128], BladeRequest.DT_FLOAT, [0.8] * 85680)
        req.add_feed('input_length', 1, [1], BladeRequest.DT_INT32, [187])
        req.add_feed('start_token', 1, [1], BladeRequest.DT_INT32, [104])
        req.add_fetch('output', BladeRequest.DT_FLOAT)
        import time
        st = time.time()
        timer = 0
        for x in range(0, 10):
            resp = client.predict(req)
            timer += (time.time() - st)
            st = time.time()
            # print(resp)
            # print(resp.get_values('output'))
            print(resp.get_tensor_shape('output'))
        print("average response time: %s s" % (timer / 10) )
    ```
    
-   **Blade with TensorFlow compatibility**
    
    For EAS Blade models compatible with TensorFlow, use TFRequest and TFResponse classes:
    
    ```
    #!/usr/bin/env python
    
    from eas_prediction import PredictClient
    from eas_prediction.blade_tf_request import TFRequest # Need Importing blade TFRequest 
    
    if __name__ == '__main__':
        client = PredictClient('http://182848887922****.cn-shanghai.pai-eas.aliyuncs.com', 'nlp_model_example')
        client.init()
    
        req = TFRequest(signature_name='predict_words')
    
        req.add_feed('input_data', [1, 360, 128], TFRequest.DT_FLOAT, [0.8] * 85680)
        req.add_feed('input_length', [1], TFRequest.DT_INT32, [187])
        req.add_feed('start_token', [1], TFRequest.DT_INT32, [104])
        req.add_fetch('output')
        import time
        st = time.time()
        timer = 0
        for x in range(0, 10):
            resp = client.predict(req)
            timer += (time.time() - st)
            st = time.time()
            # print(resp)
            # print(resp.get_values('output'))
            print(resp.get_tensor_shape('output'))
        print("average response time: %s s" % (timer / 10) )
    ```
    
-   **Queue service for data streaming**
    
    Send and query data in queues, query queue state, and subscribe to pushed data. This example demonstrates one thread pushing data to a queue while another thread uses a watcher to subscribe:
    
    ```
    #!/usr/bin/env python
    
    from eas_prediction import QueueClient
    import threading
    
    if __name__ == '__main__':
        endpoint = '182848887922****.cn-shanghai.pai-eas.aliyuncs.com'
        queue_name = 'test_group.qservice/sink'
        token = 'YmE3NDkyMzdiMzNmMGM3ZmE4ZmNjZDk0M2NiMDA3OTZmNzc1MTUx****'
    
        queue = QueueClient(endpoint, queue_name)
        queue.set_token(token)
        queue.init()
        queue.set_timeout(30000)
    
        # truncate all messages in the queue
        attributes = queue.attributes()
        if 'stream.lastEntry' in attributes:
            queue.truncate(int(attributes['stream.lastEntry']) + 1)
    
        count = 100
        # create a thread to send messages to the queue
        def send_thread():
            for i in range(count):
                index, request_id = queue.put('[{}]')
                print('send: ', i, index, request_id)
    
        # create a thread to watch messages from the queue
        def watch_thread():
            watcher = queue.watch(0, 5, auto_commit=True)
            i = 0
            for x in watcher.run():
                print('recv: ', i, x.index, x.tags['requestId'])
                i += 1
                if i == count:
                    break
            watcher.close()
    
        thread1 = threading.Thread(target=watch_thread)
        thread2 = threading.Thread(target=send_thread)
    
        thread1.start()
        thread2.start()
    
        thread1.join()
        thread2.join()
    ```
