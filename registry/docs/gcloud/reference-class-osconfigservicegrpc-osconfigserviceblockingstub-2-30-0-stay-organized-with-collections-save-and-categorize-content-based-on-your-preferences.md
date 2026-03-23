-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class OsConfigServiceGrpc.OsConfigServiceBlockingStub (2.30.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.3 2.3.2

```
public static final class OsConfigServiceGrpc.OsConfigServiceBlockingStub extends AbstractBlockingStub<OsConfigServiceGrpc.OsConfigServiceBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service OsConfigService.

OS Config API The OS Config service is a server-side component that you can use to manage package installations and patch jobs for virtual machine instances.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> OsConfigServiceGrpc.OsConfigServiceBlockingStub

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
protected OsConfigServiceGrpc.OsConfigServiceBlockingStub build(Channel channel, CallOptions callOptions)
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

`[OsConfigServiceGrpc.OsConfigServiceBlockingStub](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.OsConfigServiceGrpc.OsConfigServiceBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### cancelPatchJob(PatchJobs.CancelPatchJobRequest request)

```
public PatchJobs.PatchJob cancelPatchJob(PatchJobs.CancelPatchJobRequest request)
```

Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.

**Parameter**

**Name**

**Description**

`request`

`[PatchJobs.CancelPatchJobRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.CancelPatchJobRequest)`  

**Returns**

**Type**

**Description**

`[PatchJobs.PatchJob](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.PatchJob)`

### createPatchDeployment(PatchDeployments.CreatePatchDeploymentRequest request)

```
public PatchDeployments.PatchDeployment createPatchDeployment(PatchDeployments.CreatePatchDeploymentRequest request)
```

Create an OS Config patch deployment.

**Parameter**

**Name**

**Description**

`request`

`[PatchDeployments.CreatePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.CreatePatchDeploymentRequest)`  

**Returns**

**Type**

**Description**

`[PatchDeployments.PatchDeployment](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.PatchDeployment)`

### deletePatchDeployment(PatchDeployments.DeletePatchDeploymentRequest request)

```
public Empty deletePatchDeployment(PatchDeployments.DeletePatchDeploymentRequest request)
```

Delete an OS Config patch deployment.

**Parameter**

**Name**

**Description**

`request`

`[PatchDeployments.DeletePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.DeletePatchDeploymentRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### executePatchJob(PatchJobs.ExecutePatchJobRequest request)

```
public PatchJobs.PatchJob executePatchJob(PatchJobs.ExecutePatchJobRequest request)
```

Patch VM instances by creating and running a patch job.

**Parameter**

**Name**

**Description**

`request`

`[PatchJobs.ExecutePatchJobRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.ExecutePatchJobRequest)`  

**Returns**

**Type**

**Description**

`[PatchJobs.PatchJob](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.PatchJob)`

### getPatchDeployment(PatchDeployments.GetPatchDeploymentRequest request)

```
public PatchDeployments.PatchDeployment getPatchDeployment(PatchDeployments.GetPatchDeploymentRequest request)
```

Get an OS Config patch deployment.

**Parameter**

**Name**

**Description**

`request`

`[PatchDeployments.GetPatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.GetPatchDeploymentRequest)`  

**Returns**

**Type**

**Description**

`[PatchDeployments.PatchDeployment](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.PatchDeployment)`

### getPatchJob(PatchJobs.GetPatchJobRequest request)

```
public PatchJobs.PatchJob getPatchJob(PatchJobs.GetPatchJobRequest request)
```

Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.

**Parameter**

**Name**

**Description**

`request`

`[PatchJobs.GetPatchJobRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.GetPatchJobRequest)`  

**Returns**

**Type**

**Description**

`[PatchJobs.PatchJob](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.PatchJob)`

### listPatchDeployments(PatchDeployments.ListPatchDeploymentsRequest request)

```
public PatchDeployments.ListPatchDeploymentsResponse listPatchDeployments(PatchDeployments.ListPatchDeploymentsRequest request)
```

Get a page of OS Config patch deployments.

**Parameter**

**Name**

**Description**

`request`

`[PatchDeployments.ListPatchDeploymentsRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.ListPatchDeploymentsRequest)`  

**Returns**

**Type**

**Description**

`[PatchDeployments.ListPatchDeploymentsResponse](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.ListPatchDeploymentsResponse)`

### listPatchJobInstanceDetails(PatchJobs.ListPatchJobInstanceDetailsRequest request)

```
public PatchJobs.ListPatchJobInstanceDetailsResponse listPatchJobInstanceDetails(PatchJobs.ListPatchJobInstanceDetailsRequest request)
```

Get a list of instance details for a given patch job.

**Parameter**

**Name**

**Description**

`request`

`[PatchJobs.ListPatchJobInstanceDetailsRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.ListPatchJobInstanceDetailsRequest)`  

**Returns**

**Type**

**Description**

`[PatchJobs.ListPatchJobInstanceDetailsResponse](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.ListPatchJobInstanceDetailsResponse)`

### listPatchJobs(PatchJobs.ListPatchJobsRequest request)

```
public PatchJobs.ListPatchJobsResponse listPatchJobs(PatchJobs.ListPatchJobsRequest request)
```

Get a list of patch jobs.

**Parameter**

**Name**

**Description**

`request`

`[PatchJobs.ListPatchJobsRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.ListPatchJobsRequest)`  

**Returns**

**Type**

**Description**

`[PatchJobs.ListPatchJobsResponse](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchJobs.ListPatchJobsResponse)`

### pausePatchDeployment(PatchDeployments.PausePatchDeploymentRequest request)

```
public PatchDeployments.PatchDeployment pausePatchDeployment(PatchDeployments.PausePatchDeploymentRequest request)
```

Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.

**Parameter**

**Name**

**Description**

`request`

`[PatchDeployments.PausePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.PausePatchDeploymentRequest)`  

**Returns**

**Type**

**Description**

`[PatchDeployments.PatchDeployment](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.PatchDeployment)`

### resumePatchDeployment(PatchDeployments.ResumePatchDeploymentRequest request)

```
public PatchDeployments.PatchDeployment resumePatchDeployment(PatchDeployments.ResumePatchDeploymentRequest request)
```

Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.

**Parameter**

**Name**

**Description**

`request`

`[PatchDeployments.ResumePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.ResumePatchDeploymentRequest)`  

**Returns**

**Type**

**Description**

`[PatchDeployments.PatchDeployment](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.PatchDeployment)`

### updatePatchDeployment(PatchDeployments.UpdatePatchDeploymentRequest request)

```
public PatchDeployments.PatchDeployment updatePatchDeployment(PatchDeployments.UpdatePatchDeploymentRequest request)
```

Update an OS Config patch deployment.

**Parameter**

**Name**

**Description**

`request`

`[PatchDeployments.UpdatePatchDeploymentRequest](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.UpdatePatchDeploymentRequest)`  

**Returns**

**Type**

**Description**

`[PatchDeployments.PatchDeployment](/java/docs/reference/google-cloud-os-config/2.30.0/com.google.cloud.osconfig.v1.PatchDeployments.PatchDeployment)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
