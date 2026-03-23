Official Elastic Algorithm Service (EAS) SDKs are provided to call services deployed based on their models. EAS SDKs reduce the amount of time required for defining the call logic and improve call stability. This topic describes EAS SDK for Go. Demos are provided to show how to use EAS SDK for Go to call services. In these demos, inputs and outputs are of commonly used types.

## Background information

You do not need to install EAS SDK for Go in advance. The SDK is automatically downloaded from GitHub by the package manager of the GO language during code compilation. To customize specific parts of the call logic, you can download EAS SDK for Go and modify the code. To download the SDK, visit [eas-golang-sdk](https://github.com/pai-eas/eas-golang-sdk).

## Methods

**Class**

**Method**

**Description**

PredictClient

`NewPredictClient(endpoint string, serviceName string) *PredictClient`

-   Description: Creates a client object of the PredictClient class.
    
-   Parameters:
    
    -   endpoint: required. The endpoint of the server. To call a service in regular mode, set this parameter to the endpoint of the default gateway.
        
    -   serviceName: required. The name of the service to be called.
        
-   Return value: the created client object.
    

`SetEndpoint(endpointName string)`

-   Description: Specifies the endpoint of the server.
    
-   Parameter: endpointName: the endpoint of the server. To call a service in regular mode, set this parameter to the endpoint of the default gateway.
    

`SetServiceName(serviceName string)`

-   Description: Specifies the name of the service.
    
-   Parameter: serviceName: the name of the service.
    

`SetEndpointType(endpointType string)`

-   Description: Specifies the gateway type of the server.
    
-   Parameter: endpointType: the gateway type to be used. The following gateway types are supported:
    
    -   "DEFAULT": the default gateway. If you do not specify the gateway type, the default gateway is used.
        
    -   "DIRECT": Virtual Private Cloud (VPC) direct connection channels.
        

`SetToken(token string)`

-   Description: Specifies the service access token.
    
-   Parameter: token: the token that is used to authenticate the service.
    

`SetHttpTransport(transport *http.Transport)`

-   Description: Sets the transport attribute of the HTTP client.
    
-   Parameter: transport: the transport object that is used to send HTTP requests.
    

`SetRetryCount(max_retry_count int)`

-   Description: Specifies the maximum number of retries allowed after a request failure.
    
-   Parameter: max\_retry\_count: the maximum number of retries allowed after a request failure. Default value: 5.
    
    **Important**
    
    The client must resend requests if process errors occur on the server, server errors occur, or persistent connections to gateways are closed. Therefore, we recommend that you do not set this parameter to 0.
    

`SetTimeout(timeout int)`

-   Description: Sets the timeout period of a request.
    
-   Parameter: timeout: the timeout period of a request. Unit: milliseconds. Default value: 5000.
    

`Init()`

Description: Initializes a client object. When any of the preceding methods that are used to set parameters is called, the parameters do not take effect until you call the `Init()` method.

`Predict(request Request) Response`

-   Description: Sends a prediction request to the online prediction service.
    
-   Parameter: Request: the request to be sent. It can be a string, a TFRequest object, or a TorchRequest object.
    
-   Return value: the response to the prediction request. It can be a string, a TFResponse object, or a TorchResponse request.
    

`StringPredict(request string) string`

-   Description: Sends a prediction request to the online prediction service.
    
-   Parameter: request: the request string to be sent.
    
-   Return value: the response to the prediction request, returned as a string.
    

`TorchPredict(request TorchRequest) TorchResponse`

-   Description: Sends a PyTorch prediction request to the online prediction service.
    
-   Parameter: request: the request to be sent, which is a TorchRequest object.
    
-   Return value: the response to the prediction request. It is a TorchResponse object.
    

`TFPredict(request TFRequest) TFResponse`

-   Description: Sends a prediction request to the online prediction service.
    
-   Parameter: request: the request to be sent, which is a TFRequest object.
    
-   Return value: the response to the prediction request. It is a TFResponse object.
    

TFRequest

`TFRequest(signatureName string)`

-   Description: Creates an object of the TFRequest class.
    
-   Parameter: signatureName: the signature name of the model of the service to be called.
    

`AddFeed(?)(inputName string, shape []int64{}, content []?)`

-   Description: Specifies the input tensor of the TensorFlow model of the online prediction service to be called.
    
-   Parameters:
    
    -   inputName: the alias of the input tensor.
        
    -   shape: the shape of the input tensor.
        
    -   content: the data of the input tensor. Specify the value in the form of a one-dimensional array. The data type can be INT32, INT64, FLOAT32, FLOAT64, STRING, or BOOL. The name of this method is determined by the specific data type that is used. Example: `AddFeedInt32()`. If you want to use other data types, construct them in the protocol buffer (PB) format based on the given code.
        

`AddFetch(outputName string)`

-   Description: Specifies the alias of the output tensor to be exported of the TensorFlow model.
    
-   Parameter: outputName: the alias of the output tensor to be exported.
    
    If the TensorFlow model is in the SavedModel format, this parameter is optional. If this parameter is not specified, all output tensors are exported.
    
    If the TensorFlow model is a frozen model, this parameter is required.
    

TFResponse

`GetTensorShape(outputName string) []int64`

-   Description: Queries the shape of the output tensor identified by the specified alias.
    
-   Parameter: outputName: the alias of the output tensor whose shape you want to query.
    
-   Return value: the shape of the output tensor. Each dimension is displayed as an array.
    

`Get(?)Val(outputName string) [](?)`

-   Description: Queries the data of the specified output tensor. The return value is a one-dimensional array. You can call this method together with the `GetTensorShape()` method to query the shape of the output tensor. The return value is a multi-dimensional array. The data type can be FLOAT, DOUBLE, INT, INT64, STRING, or BOOL. The name of this method is determined by the specific data type that is used. Example: `GetFloatVal()`.
    
-   Parameter: outputName: the alias of the output tensor whose data you want to query.
    
-   Return value: a one-dimensional array converted from the retrieved output tensor data.
    

TorchRequest

`TorchRequest()`

Description: Creates an object of the TFRequest class.

`AddFeed(?)(index int, shape []int64{}, content []?)`

-   Description: Specifies the input tensor of the PyTorch model of the online prediction service to be called.
    
-   Parameters:
    
    -   index: the index of the input tensor.
        
    -   shape: the shape of the input tensor.
        
    -   content: the data of the input tensor. Specify the value in the form of a one-dimensional array. The data type can be INT32, INT64, FLOAT32, or FLOAT64. The name of this method is determined by the specific data type that is used. Example: `AddFeedInt32()`. If you want to use other data types, construct them in the protocol buffer (PB) format based on the given code.
        

`AddFetch(outputIndex int)`

-   Description: Specifies the index of the output tensor to be exported of the PyTorch model. This method is optional. If you do not call this method to set the index of the output tensor, all output tensors are exported.
    
-   Parameter: outputIndex: the index of the output tensor to be exported.
    

TorchResponse

`GetTensorShape(outputIndex int) []int64`

-   Description: Queries the shape of the output tensor identified by the specified index.
    
-   Parameter: outputIndex: the index of the output tensor.
    
-   Return value: the shape of the output tensor. Each dimension is displayed as an array.
    

`Get(?)Val(outputIndex int) [](?)`

-   Description: Queries the data of the specified output tensor. The return value is a one-dimensional array. You can call this method together with the `GetTensorShape()` method to obtain the shape of the output tensor. The return value is a multi-dimensional array. The data type can be FLOAT, DOUBLE, INT, or INT64. The name of this method is determined by the specific data type that is used. Example: `GetFloatVal()`.
    
-   Parameter: outputName: the index of the output tensor whose data you want to query.
    
-   Return value: a one-dimensional array converted from the retrieved output tensor data.
    

QueueClient

`NewQueueClient(endpoint, queueName, token string) (*QueueClient, error)`

-   Description: Creates a client object of the QueueClient class.
    
-   Parameters:
    
    -   endpoint: the endpoint of the server.
        
    -   queueName: the name of the queue to be created.
        
    -   token: the token of the queue to be created.
        
-   Return value: the created client object.
    

`Truncate(ctx context.Context, index uint64) error`

-   Description: Truncates the data before a specific index value and retains only data after the index value.
    
-   Parameters:
    
    -   ctx: the context of this operation.
        
    -   index: the index value that is used to truncate data.
        

`Put(ctx context.Context, data []byte, tags types.Tags) (index uint64, requestId string, err error)`

-   Description: Writes a data record to a queue.
    
-   Parameters:
    
    -   ctx: the context of this operation.
        
    -   data: the data record that you want to write to the queue.
        
-   Return values:
    
    -   index: the index value of the written data record. The value can be used to query data in the queue.
        
    -   requestId: the request ID automatically generated for the written data record in the queue. requestId can be used as a special tag to query data in the queue.
        

`GetByIndex(ctx context.Context, index uint64) (dfs []types.DataFrame, err error)`

-   Description: Queries a data record from a queue based on the index value of the record and then deletes the record.
    
-   Parameters:
    
    -   ctx: the context of this operation.
        
    -   index: the index value of the data record that you want to query.
        
-   Return value: dfs: the obtained data record in the DataFrame format.
    

`GetByRequestId(ctx context.Context, requestId string) (dfs []types.DataFrame, err error)`

-   Description: Queries a data record from a queue based on the request ID of the record and then deletes the record.
    
-   Parameters:
    
    -   ctx: the context of this operation.
        
    -   requestId: the request ID of the data record that you want to query.
        
-   Return value: dfs: the obtained data record in the DataFrame format.
    

`Get(ctx context.Context, index uint64, length int, timeout time.Duration, autoDelete bool, tags types.Tags) (dfs []types.DataFrame, err error)`

-   Description: Queries data in a queue based on specific conditions. The `GetByIndex()` and `GetByRequestId()` methods are encapsulation of the `get()` method.
    
-   Parameters:
    
    -   ctx: the context of this operation.
        
    -   index: the start index to query.
        
    -   length: the number of data records to query. If this parameter is specified, the maximum number of data records starting from index is returned. The data record that matches the index value is also returned.
        
    -   timeout: the timeout period of the query. During the timeout period, if the queue contains data, the number of data records that meet the specified conditions is returned. Otherwise, the query stops after the timeout period is over.
        
    -   auto\_delete: specifies whether to automatically delete the obtained data records from the queue. If you set auto\_delete to False, data records can be repeatedly queried. In this case, you can use the `Del()` method to manually delete data.
        
    -   tags: the tags used to query data records. The key and value of a tag must both be of the STRING type. If this parameter is specified, the data records starting from index that are added with specified tags are returned.
        
-   Return value: dfs: the obtained data records in the DataFrame format.
    

`Del(ctx context.Context, indexes ...uint64)`

-   Description: Deletes data records that match specified index values from a queue.
    
-   Parameters:
    
    -   ctx: the context of this operation.
        
    -   indexes: the specified index values used to delete data records.
        

`Attributes() (attrs types.Attributes, err error)`

-   Description: Queries the attributes of a queue. The attributes include the total number of data records in the queue and the number of data records in the current queue.
    
-   Return value: attrs: the attributes of the queue. The key and value of an attribute must both be of the STRING type.
    

`Watch(ctx context.Context, index, window uint64, indexOnly bool, autocommit bool) (watcher types.Watcher, err error)`

-   Description: Subscribes to data records in a queue. Then, the queuing service pushes data to clients based on specified conditions.
    
-   Parameters:
    
    -   ctx: the context of this operation.
        
    -   index: the start index of the data records that are subscribed.
        
    -   window: the maximum number of data records allowed to be pushed to a single client by the queuing service.
        
        **Note**
        
        If the data is not committed, the server does not push other data records to the client. Then, if N data records are committed, N data records are pushed to the server. This ensures that the number of data records handled by the client does not exceed the value specified for window. This way, the computing concurrency on the client side is controlled.
        
    -   index\_only: specifies whether to push only the index value.
        
    -   auto\_commit: specifies whether to automatically commit a data record after the record is pushed. We recommend that you set auto\_commit to False. In this case, you must manually commit a data record after the record is received and computed. If an exception occurs on the instance before the computation is complete, uncommitted data records are pushed to other instances by the queuing service.
        
-   Return value: a watcher that is used to read pushed data.
    

`Commit(ctx context.Context, indexes ...uint64) error`

-   Description: Commits specified data records.
    
    **Note**
    
    If a data record is processed and does not need to be pushed to other instances, it is committed. Then, the data record can be deleted from the queue.
    
-   Parameters:
    
    -   ctx: the context of this operation.
        
    -   indexes: the specified index values that match committed data records.
        

types.Watcher

`FrameChan() <-chan types.DataFrame`

-   Description: Returns a pipeline that contains data pushed from the server. The pipeline can be used to repeatedly read data.
    
-   Return value: a pipeline that can be used to read pushed data.
    

`Close()`

Description: Stops a watcher to close backend connections.

**Note**

Only one watcher can be started for a single client. You must close the watcher before you can start another watcher.

## Demos

-   **Input and output as strings**
    
    If you use custom processors to deploy models as services, strings are often used to call the services, such as a service deployed based on a Predictive Model Markup Language (PMML) model. For more information, see the following demo:
    
    ```
    package main
    
    import (
            "fmt"
            "github.com/pai-eas/eas-golang-sdk/eas"
    )
    
    func main() {
        client := eas.NewPredictClient("182848887922****.cn-shanghai.pai-eas.aliyuncs.com", "scorecard_pmml_example")
        client.SetToken("YWFlMDYyZDNmNTc3M2I3MzMwYmY0MmYwM2Y2MTYxMTY4NzBkNzdj****")
        client.Init()
        req := "[{\"fea1\": 1, \"fea2\": 2}]"
        for i := 0; i < 100; i++ {
            resp, err := client.StringPredict(req)
            if err != nil {
                fmt.Printf("failed to predict: %v\n", err.Error())
            } else {
                fmt.Printf("%v\n", resp)
            }
        }
    }
    ```
    
-   **Input and output as tensors**
    
    If you use TensorFlow to deploy models as services, you must use the TFRequest and TFResponse classes to call the services. For more information, see the following demo:
    
    ```
    package main
    
    import (
            "fmt"
            "github.com/pai-eas/eas-golang-sdk/eas"
    )
    
    func main() {
        client := eas.NewPredictClient("182848887922****.cn-shanghai.pai-eas.aliyuncs.com", "mnist_saved_model_example")
        client.SetToken("YTg2ZjE0ZjM4ZmE3OTc0NzYxZDMyNmYzMTJjZTQ1YmU0N2FjMTAy****")
        client.Init()
    
        tfreq := eas.TFRequest{}
        tfreq.SetSignatureName("predict_images")
        tfreq.AddFeedFloat32("images", []int64{1, 784}, make([]float32, 784))
    
        for i := 0; i < 100; i++ {
            resp, err := client.TFPredict(tfreq)
            if err != nil {
                fmt.Printf("failed to predict: %v", err)
            } else {
                fmt.Printf("%v\n", resp)
            }
        }
    }
    ```
    
-   **Call a PyTorch model**
    
    If you use PyTorch to deploy models as services, you must use the TorchRequest and TorchResponse classes to call the services. For more information, see the following demo:
    
    ```
    package main
    
    import (
            "fmt"
            "github.com/pai-eas/eas-golang-sdk/eas"
    )
    
    func main() {
        client := eas.NewPredictClient("182848887922****.cn-shanghai.pai-eas.aliyuncs.com", "pytorch_resnet_example")
        client.SetTimeout(500)
        client.SetToken("ZjdjZDg1NWVlMWI2NTU5YzJiMmY5ZmE5OTBmYzZkMjI0YjlmYWVl****")
        client.Init()
        req := eas.TorchRequest{}
        req.AddFeedFloat32(0, []int64{1, 3, 224, 224}, make([]float32, 150528))
        req.AddFetch(0)
        for i := 0; i < 10; i++ {
            resp, err := client.TorchPredict(req)
            if err != nil {
                fmt.Printf("failed to predict: %v", err)
            } else {
                fmt.Println(resp.GetTensorShape(0), resp.GetFloatVal(0))
            }
        }
    }
    ```
    
-   **Use a VPC direct connection channel to call a service**
    
    You can use a VPC direct connection channel to access only the services that are deployed in the dedicated resource group for EAS. In addition, to use the channel, the dedicated resource group for EAS and the specified vSwitch must be connected to the VPC. For more information, see [Work with EAS resource groups](/help/en/pai/user-guide/work-with-dedicated-resource-groups#multiTask4399) and [Configure network connectivity](/help/en/pai/user-guide/configure-network-connectivity#multiTask1215). Compared with the regular mode, this mode contains an additional line of code: `client.SetEndpointType(eas.EndpointTypeDirect)`. You can use this mode in high-concurrency and heavy-traffic scenarios. For more information, see the following demo:
    
    ```
    package main
    
    import (
            "fmt"
            "github.com/pai-eas/eas-golang-sdk/eas"
    )
    
    func main() {
        client := eas.NewPredictClient("pai-eas-vpc.cn-shanghai.aliyuncs.com", "scorecard_pmml_example")
        client.SetToken("YWFlMDYyZDNmNTc3M2I3MzMwYmY0MmYwM2Y2MTYxMTY4NzBkNzdj****")
        client.SetEndpointType(eas.EndpointTypeDirect)
        client.Init()
        req := "[{\"fea1\": 1, \"fea2\": 2}]"
        for i := 0; i < 100; i++ {
            resp, err := client.StringPredict(req)
            if err != nil {
                fmt.Printf("failed to predict: %v\n", err.Error())
            } else {
                fmt.Printf("%v\n", resp)
            }
        }
    }
    ```
    
-   **Set the connection parameters of the client**
    
    You can set the connection parameters of the client by using the `http.Transport` attribute. For more information, see the following demo:
    
    ```
    package main
    
    import (
            "fmt"
            "github.com/pai-eas/eas-golang-sdk/eas"
            "net/http"
            "time"
    )
    
    func main() {
        client := eas.NewPredictClient("pai-eas-vpc.cn-shanghai.aliyuncs.com", "network_test")
        client.SetToken("MDAwZDQ3NjE3OThhOTI4ODFmMjJiYzE0MDk1NWRkOGI1MmVhMGI0****")
        client.SetEndpointType(eas.EndpointTypeDirect)
        client.SetHttpTransport(&http.Transport{
            MaxConnsPerHost:       300,
            TLSHandshakeTimeout:   100 * time.Millisecond,
            ResponseHeaderTimeout: 200 * time.Millisecond,
            ExpectContinueTimeout: 200 * time.Millisecond,
        })
    }
    ```
    
-   **Use the queuing service to send and subscribe to data**
    
    You can send and query data in a queue, query the state of a queue, and subscribe to data pushed by a queue. In the following demo, a thread pushes data to a queue, and another thread uses a watcher to subscribe to the pushed data. For more information, see the following demo:
    
    **Note**
    
    When deploying an asynchronous inference service in EAS, input and output queues will be automatically generated in the following format:
    
    **Input queue**: <domain>/api/predict/<service\_name>
    
    **Output queue:** <domain>/api/predict/<service\_name>/sink
    
    Build the QueueClient using <service\_name> or <service\_name>/sink according to your actual needs.
    
    ```
        const (
            QueueEndpoint = "182848887922****.cn-shanghai.pai-eas.aliyuncs.com"
            // For example: If the EAS service name is test_qservice, then the input queue name will be test_qservice, and the output queue name will be test_qservice/sink.
            QueueName     = "test_qservice"
            QueueToken    = "YmE3NDkyMzdiMzNmMGM3ZmE4ZmNjZDk0M2NiMDA3OTZmNzc1MTUx****"
        )
        queue, err := NewQueueClient(QueueEndpoint, QueueName, QueueToken)
    
        // truncate all messages in the queue
        attrs, err := queue.Attributes()
        if index, ok := attrs["stream.lastEntry"]; ok {
            idx, _ := strconv.ParseUint(index, 10, 64)
            queue.Truncate(context.Background(), idx+1)
        }
    
        ctx, cancel := context.WithCancel(context.Background())
    
        // create a goroutine to send messages to the queue
        go func() {
            i := 0
            for {
                select {
                case <-time.NewTicker(time.Microsecond * 1).C:
                    _, _, err := queue.Put(context.Background(), []byte(strconv.Itoa(i)), types.Tags{})
                    if err != nil {
                        fmt.Printf("Error occured, retry to handle it: %v\n", err)
                    }
                    i += 1
                case <-ctx.Done():
                    break
                }
            }
        }()
    
        // create a watcher to watch the messages from the queue
        watcher, err := queue.Watch(context.Background(), 0, 5, false, false)
        if err != nil {
            fmt.Printf("Failed to create a watcher to watch the queue: %v\n", err)
            return
        }
    
        // read messages from the queue and commit manually
        for i := 0; i < 100; i++ {
            df := <-watcher.FrameChan()
            err := queue.Commit(context.Background(), df.Index.Uint64())
            if err != nil {
                fmt.Printf("Failed to commit index: %v(%v)\n", df.Index, err)
            }
        }
    
        // everything is done, close the watcher
        watcher.Close()
        cancel()
    ```
