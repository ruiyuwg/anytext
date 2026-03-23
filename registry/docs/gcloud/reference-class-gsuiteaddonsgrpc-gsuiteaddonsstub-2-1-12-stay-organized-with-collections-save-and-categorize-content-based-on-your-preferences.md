-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GSuiteAddOnsGrpc.GSuiteAddOnsStub (2.1.12) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.1 2.1.12

```
public static final class GSuiteAddOnsGrpc.GSuiteAddOnsStub extends AbstractAsyncStub<GSuiteAddOnsGrpc.GSuiteAddOnsStub>
```

A service for managing Google Workspace Add-ons deployments. A Google Workspace Add-on is a third-party embedded component that can be installed in Google Workspace Applications like Gmail, Calendar, Drive, and the Google Docs, Sheets, and Slides editors. Google Workspace Add-ons can display UI cards, receive contextual information from the host application, and perform actions in the host application (See: [https://developers.google.com/gsuite/add-ons/overview](https://developers.google.com/gsuite/add-ons/overview) for more information). A Google Workspace Add-on deployment resource specifies metadata about the add-on, including a specification of the entry points in the host application that trigger add-on executions (see: [https://developers.google.com/gsuite/add-ons/concepts/gsuite-manifests](https://developers.google.com/gsuite/add-ons/concepts/gsuite-manifests)). Add-on deployments defined via the Google Workspace Add-ons API define their entrypoints using HTTPS URLs (See: [https://developers.google.com/gsuite/add-ons/guides/alternate-runtimes](https://developers.google.com/gsuite/add-ons/guides/alternate-runtimes)), A Google Workspace Add-on deployment can be installed in developer mode, which allows an add-on developer to test the experience an end-user would see when installing and running the add-on in their G Suite applications. When running in developer mode, more detailed error messages are exposed in the add-on UI to aid in debugging. A Google Workspace Add-on deployment can be published to Google Workspace Marketplace, which allows other Google Workspace users to discover and install the add-on. See: [https://developers.google.com/gsuite/add-ons/how-tos/publish-add-on-overview](https://developers.google.com/gsuite/add-ons/how-tos/publish-add-on-overview) for details.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> GSuiteAddOnsGrpc.GSuiteAddOnsStub

## Inherited Members

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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
protected GSuiteAddOnsGrpc.GSuiteAddOnsStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

channel

`io.grpc.Channel`  

callOptions

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

[GSuiteAddOnsGrpc.GSuiteAddOnsStub](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.GSuiteAddOnsGrpc.GSuiteAddOnsStub)

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createDeployment(CreateDeploymentRequest request, StreamObserver<Deployment> responseObserver)

```
public void createDeployment(CreateDeploymentRequest request, StreamObserver<Deployment> responseObserver)
```

Creates a deployment with the specified name and configuration.

**Parameters**

**Name**

**Description**

request

`[CreateDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.CreateDeploymentRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Deployment](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.Deployment)>`  

### deleteDeployment(DeleteDeploymentRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteDeployment(DeleteDeploymentRequest request, StreamObserver<Empty> responseObserver)
```

Deletes the deployment with the given name.

**Parameters**

**Name**

**Description**

request

`[DeleteDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.DeleteDeploymentRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getAuthorization(GetAuthorizationRequest request, StreamObserver<Authorization> responseObserver)

```
public void getAuthorization(GetAuthorizationRequest request, StreamObserver<Authorization> responseObserver)
```

Gets the authorization information for deployments in a given project.

**Parameters**

**Name**

**Description**

request

`[GetAuthorizationRequest](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.GetAuthorizationRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Authorization](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.Authorization)>`  

### getDeployment(GetDeploymentRequest request, StreamObserver<Deployment> responseObserver)

```
public void getDeployment(GetDeploymentRequest request, StreamObserver<Deployment> responseObserver)
```

Gets the deployment with the specified name.

**Parameters**

**Name**

**Description**

request

`[GetDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.GetDeploymentRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Deployment](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.Deployment)>`  

### getInstallStatus(GetInstallStatusRequest request, StreamObserver<InstallStatus> responseObserver)

```
public void getInstallStatus(GetInstallStatusRequest request, StreamObserver<InstallStatus> responseObserver)
```

Fetches the install status of a developer mode deployment.

**Parameters**

**Name**

**Description**

request

`[GetInstallStatusRequest](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.GetInstallStatusRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[InstallStatus](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.InstallStatus)>`  

### installDeployment(InstallDeploymentRequest request, StreamObserver<Empty> responseObserver)

```
public void installDeployment(InstallDeploymentRequest request, StreamObserver<Empty> responseObserver)
```

Installs a deployment in developer mode. See: [https://developers.google.com/gsuite/add-ons/how-tos/testing-gsuite-addons](https://developers.google.com/gsuite/add-ons/how-tos/testing-gsuite-addons).

**Parameters**

**Name**

**Description**

request

`[InstallDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.InstallDeploymentRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### listDeployments(ListDeploymentsRequest request, StreamObserver<ListDeploymentsResponse> responseObserver)

```
public void listDeployments(ListDeploymentsRequest request, StreamObserver<ListDeploymentsResponse> responseObserver)
```

Lists all deployments in a particular project.

**Parameters**

**Name**

**Description**

request

`[ListDeploymentsRequest](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.ListDeploymentsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListDeploymentsResponse](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.ListDeploymentsResponse)>`  

### replaceDeployment(ReplaceDeploymentRequest request, StreamObserver<Deployment> responseObserver)

```
public void replaceDeployment(ReplaceDeploymentRequest request, StreamObserver<Deployment> responseObserver)
```

Creates or replaces a deployment with the specified name.

**Parameters**

**Name**

**Description**

request

`[ReplaceDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.ReplaceDeploymentRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Deployment](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.Deployment)>`  

### uninstallDeployment(UninstallDeploymentRequest request, StreamObserver<Empty> responseObserver)

```
public void uninstallDeployment(UninstallDeploymentRequest request, StreamObserver<Empty> responseObserver)
```

Uninstalls a developer mode deployment. See: [https://developers.google.com/gsuite/add-ons/how-tos/testing-gsuite-addons](https://developers.google.com/gsuite/add-ons/how-tos/testing-gsuite-addons).

**Parameters**

**Name**

**Description**

request

`[UninstallDeploymentRequest](/java/docs/reference/google-cloud-gsuite-addons/2.1.12/com.google.cloud.gsuiteaddons.v1.UninstallDeploymentRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
