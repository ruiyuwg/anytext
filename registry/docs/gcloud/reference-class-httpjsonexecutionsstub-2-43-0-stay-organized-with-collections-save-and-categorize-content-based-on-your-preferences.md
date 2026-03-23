-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonExecutionsStub (2.43.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.7

```
public class HttpJsonExecutionsStub extends ExecutionsStub
```

REST stub implementation for the Executions service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ExecutionsStub](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub) \> HttpJsonExecutionsStub

## Inherited Members

[ExecutionsStub.cancelExecutionCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_cancelExecutionCallable__)

[ExecutionsStub.close()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_close__)

[ExecutionsStub.createExecutionCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_createExecutionCallable__)

[ExecutionsStub.getExecutionCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_getExecutionCallable__)

[ExecutionsStub.listExecutionsCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_listExecutionsCallable__)

[ExecutionsStub.listExecutionsPagedCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_listExecutionsPagedCallable__)

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Methods

### create(ClientContext clientContext)

```
public static final HttpJsonExecutionsStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonExecutionsStub](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.HttpJsonExecutionsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonExecutionsStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonExecutionsStub](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.HttpJsonExecutionsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ExecutionsStubSettings settings)

```
public static final HttpJsonExecutionsStub create(ExecutionsStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[ExecutionsStubSettings](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStubSettings)`  

**Returns**

**Type**

**Description**

`[HttpJsonExecutionsStub](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.HttpJsonExecutionsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### getMethodDescriptors()

```
public static List<ApiMethodDescriptor> getMethodDescriptors()
```

**Internal Only**: This feature is not stable for application use.

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ApiMethodDescriptor](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.ApiMethodDescriptor.html)>`

## Constructors

### HttpJsonExecutionsStub(ExecutionsStubSettings settings, ClientContext clientContext)

```
protected HttpJsonExecutionsStub(ExecutionsStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonExecutionsStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ExecutionsStubSettings](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonExecutionsStub(ExecutionsStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonExecutionsStub(ExecutionsStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonExecutionsStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ExecutionsStubSettings](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Exceptions**

**Type**

**Description**

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

### cancelExecutionCallable()

```
public UnaryCallable<CancelExecutionRequest,Execution> cancelExecutionCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CancelExecutionRequest](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.CancelExecutionRequest),[Execution](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.Execution)>`

**Overrides**

[ExecutionsStub.cancelExecutionCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_cancelExecutionCallable__)

### close()

```
public final void close()
```

**Overrides**

[ExecutionsStub.close()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_close__)

### createExecutionCallable()

```
public UnaryCallable<CreateExecutionRequest,Execution> createExecutionCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateExecutionRequest](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.CreateExecutionRequest),[Execution](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.Execution)>`

**Overrides**

[ExecutionsStub.createExecutionCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_createExecutionCallable__)

### getExecutionCallable()

```
public UnaryCallable<GetExecutionRequest,Execution> getExecutionCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetExecutionRequest](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.GetExecutionRequest),[Execution](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.Execution)>`

**Overrides**

[ExecutionsStub.getExecutionCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_getExecutionCallable__)

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### listExecutionsCallable()

```
public UnaryCallable<ListExecutionsRequest,ListExecutionsResponse> listExecutionsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListExecutionsRequest](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.ListExecutionsRequest),[ListExecutionsResponse](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.ListExecutionsResponse)>`

**Overrides**

[ExecutionsStub.listExecutionsCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_listExecutionsCallable__)

### listExecutionsPagedCallable()

```
public UnaryCallable<ListExecutionsRequest,ExecutionsClient.ListExecutionsPagedResponse> listExecutionsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListExecutionsRequest](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.ListExecutionsRequest),[ListExecutionsPagedResponse](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.ExecutionsClient.ListExecutionsPagedResponse)>`

**Overrides**

[ExecutionsStub.listExecutionsPagedCallable()](/java/docs/reference/google-cloud-workflow-executions/2.43.0/com.google.cloud.workflows.executions.v1.stub.ExecutionsStub#com_google_cloud_workflows_executions_v1_stub_ExecutionsStub_listExecutionsPagedCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
