-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProjectServiceGrpc.ProjectServiceBlockingStub (2.53.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static final class ProjectServiceGrpc.ProjectServiceBlockingStub extends AbstractBlockingStub<ProjectServiceGrpc.ProjectServiceBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service ProjectService.

Service for settings at Project level.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> ProjectServiceGrpc.ProjectServiceBlockingStub

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

io.grpc.stub.AbstractStub.withOnReadyThreshold(int)

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

### acceptTerms(AcceptTermsRequest request)

```
public Project acceptTerms(AcceptTermsRequest request)
```

Accepts service terms for this project. By making requests to this API, you agree to the terms of service linked below. [https://cloud.google.com/retail/data-use-terms](https://cloud.google.com/retail/data-use-terms)

**Parameter**

**Name**

**Description**

`request`

`[AcceptTermsRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.AcceptTermsRequest)`  

**Returns**

**Type**

**Description**

`[Project](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.Project)`

### build(Channel channel, CallOptions callOptions)

```
protected ProjectServiceGrpc.ProjectServiceBlockingStub build(Channel channel, CallOptions callOptions)
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

`[ProjectServiceGrpc.ProjectServiceBlockingStub](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.ProjectServiceGrpc.ProjectServiceBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### enrollSolution(EnrollSolutionRequest request)

```
public Operation enrollSolution(EnrollSolutionRequest request)
```

The method enrolls a solution of type Retail Search into a project. The Recommendations AI solution type is enrolled by default when your project enables Retail API, so you don't need to call the enrollSolution method for recommendations.

**Parameter**

**Name**

**Description**

`request`

`[EnrollSolutionRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.EnrollSolutionRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### getAlertConfig(GetAlertConfigRequest request)

```
public AlertConfig getAlertConfig(GetAlertConfigRequest request)
```

Get the AlertConfig of the requested project.

**Parameter**

**Name**

**Description**

`request`

`[GetAlertConfigRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.GetAlertConfigRequest)`  

**Returns**

**Type**

**Description**

`[AlertConfig](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.AlertConfig)`

### getLoggingConfig(GetLoggingConfigRequest request)

```
public LoggingConfig getLoggingConfig(GetLoggingConfigRequest request)
```

Gets the LoggingConfig of the requested project.

**Parameter**

**Name**

**Description**

`request`

`[GetLoggingConfigRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.GetLoggingConfigRequest)`  

**Returns**

**Type**

**Description**

`[LoggingConfig](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.LoggingConfig)`

### getProject(GetProjectRequest request)

```
public Project getProject(GetProjectRequest request)
```

Gets the project. Throws `NOT_FOUND` if the project wasn't initialized for the Retail API service.

**Parameter**

**Name**

**Description**

`request`

`[GetProjectRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.GetProjectRequest)`  

**Returns**

**Type**

**Description**

`[Project](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.Project)`

### listEnrolledSolutions(ListEnrolledSolutionsRequest request)

```
public ListEnrolledSolutionsResponse listEnrolledSolutions(ListEnrolledSolutionsRequest request)
```

Lists all the retail API solutions the project has enrolled.

**Parameter**

**Name**

**Description**

`request`

`[ListEnrolledSolutionsRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.ListEnrolledSolutionsRequest)`  

**Returns**

**Type**

**Description**

`[ListEnrolledSolutionsResponse](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.ListEnrolledSolutionsResponse)`

### updateAlertConfig(UpdateAlertConfigRequest request)

```
public AlertConfig updateAlertConfig(UpdateAlertConfigRequest request)
```

Update the alert config of the requested project.

**Parameter**

**Name**

**Description**

`request`

`[UpdateAlertConfigRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.UpdateAlertConfigRequest)`  

**Returns**

**Type**

**Description**

`[AlertConfig](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.AlertConfig)`

### updateLoggingConfig(UpdateLoggingConfigRequest request)

```
public LoggingConfig updateLoggingConfig(UpdateLoggingConfigRequest request)
```

Updates the LoggingConfig of the requested project.

**Parameter**

**Name**

**Description**

`request`

`[UpdateLoggingConfigRequest](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.UpdateLoggingConfigRequest)`  

**Returns**

**Type**

**Description**

`[LoggingConfig](/java/docs/reference/google-cloud-retail/2.53.0/com.google.cloud.retail.v2alpha.LoggingConfig)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
