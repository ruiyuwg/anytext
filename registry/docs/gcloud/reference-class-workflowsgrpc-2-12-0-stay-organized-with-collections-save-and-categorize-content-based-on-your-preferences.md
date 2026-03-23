-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WorkflowsGrpc (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.10

```
public final class WorkflowsGrpc
```

Workflows is used to deploy and execute workflow programs. Workflows makes sure the program executes reliably, despite hardware and networking interruptions.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> WorkflowsGrpc

## Inherited Members

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

## Static Fields

### SERVICE\_NAME

```
public static final String SERVICE_NAME
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Static Methods

### getCreateWorkflowMethod()

```
public static MethodDescriptor<CreateWorkflowRequest,Operation> getCreateWorkflowMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateWorkflowRequest](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.CreateWorkflowRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteWorkflowMethod()

```
public static MethodDescriptor<DeleteWorkflowRequest,Operation> getDeleteWorkflowMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteWorkflowRequest](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.DeleteWorkflowRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getGetWorkflowMethod()

```
public static MethodDescriptor<GetWorkflowRequest,Workflow> getGetWorkflowMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetWorkflowRequest](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.GetWorkflowRequest),[Workflow](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.Workflow)>`

### getListWorkflowsMethod()

```
public static MethodDescriptor<ListWorkflowsRequest,ListWorkflowsResponse> getListWorkflowsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListWorkflowsRequest](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.ListWorkflowsRequest),[ListWorkflowsResponse](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.ListWorkflowsResponse)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getUpdateWorkflowMethod()

```
public static MethodDescriptor<UpdateWorkflowRequest,Operation> getUpdateWorkflowMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateWorkflowRequest](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.UpdateWorkflowRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### newBlockingStub(Channel channel)

```
public static WorkflowsGrpc.WorkflowsBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[WorkflowsGrpc.WorkflowsBlockingStub](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.WorkflowsGrpc.WorkflowsBlockingStub)`

### newFutureStub(Channel channel)

```
public static WorkflowsGrpc.WorkflowsFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[WorkflowsGrpc.WorkflowsFutureStub](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.WorkflowsGrpc.WorkflowsFutureStub)`

### newStub(Channel channel)

```
public static WorkflowsGrpc.WorkflowsStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[WorkflowsGrpc.WorkflowsStub](/java/docs/reference/google-cloud-workflows/2.12.0/com.google.cloud.workflows.v1.WorkflowsGrpc.WorkflowsStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
