-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WorkflowsGrpc.WorkflowsBlockingStub (2.20.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.10

```
public static final class WorkflowsGrpc.WorkflowsBlockingStub extends AbstractBlockingStub<WorkflowsGrpc.WorkflowsBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service Workflows.

Workflows is used to deploy and execute workflow programs. Workflows makes sure the program executes reliably, despite hardware and networking interruptions.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> WorkflowsGrpc.WorkflowsBlockingStub

## Inherited Members

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withWaitForReady()

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

## Methods

### build(Channel channel, CallOptions callOptions)

```
protected WorkflowsGrpc.WorkflowsBlockingStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[WorkflowsGrpc.WorkflowsBlockingStub](/java/docs/reference/google-cloud-workflows/2.20.0/com.google.cloud.workflows.v1.WorkflowsGrpc.WorkflowsBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createWorkflow(CreateWorkflowRequest request)

```
public Operation createWorkflow(CreateWorkflowRequest request)
```

Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY\_EXISTS error.

**Parameter**

**Name**

**Description**

`request`

`[CreateWorkflowRequest](/java/docs/reference/google-cloud-workflows/2.20.0/com.google.cloud.workflows.v1.CreateWorkflowRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteWorkflow(DeleteWorkflowRequest request)

```
public Operation deleteWorkflow(DeleteWorkflowRequest request)
```

Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.

**Parameter**

**Name**

**Description**

`request`

`[DeleteWorkflowRequest](/java/docs/reference/google-cloud-workflows/2.20.0/com.google.cloud.workflows.v1.DeleteWorkflowRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### getWorkflow(GetWorkflowRequest request)

```
public Workflow getWorkflow(GetWorkflowRequest request)
```

Gets details of a single Workflow.

**Parameter**

**Name**

**Description**

`request`

`[GetWorkflowRequest](/java/docs/reference/google-cloud-workflows/2.20.0/com.google.cloud.workflows.v1.GetWorkflowRequest)`  

**Returns**

**Type**

**Description**

`[Workflow](/java/docs/reference/google-cloud-workflows/2.20.0/com.google.cloud.workflows.v1.Workflow)`

### listWorkflows(ListWorkflowsRequest request)

```
public ListWorkflowsResponse listWorkflows(ListWorkflowsRequest request)
```

Lists Workflows in a given project and location. The default order is not specified.

**Parameter**

**Name**

**Description**

`request`

`[ListWorkflowsRequest](/java/docs/reference/google-cloud-workflows/2.20.0/com.google.cloud.workflows.v1.ListWorkflowsRequest)`  

**Returns**

**Type**

**Description**

`[ListWorkflowsResponse](/java/docs/reference/google-cloud-workflows/2.20.0/com.google.cloud.workflows.v1.ListWorkflowsResponse)`

### updateWorkflow(UpdateWorkflowRequest request)

```
public Operation updateWorkflow(UpdateWorkflowRequest request)
```

Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.

**Parameter**

**Name**

**Description**

`request`

`[UpdateWorkflowRequest](/java/docs/reference/google-cloud-workflows/2.20.0/com.google.cloud.workflows.v1.UpdateWorkflowRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
