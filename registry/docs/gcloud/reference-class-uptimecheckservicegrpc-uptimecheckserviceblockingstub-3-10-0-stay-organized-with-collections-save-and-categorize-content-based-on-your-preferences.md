-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class UptimeCheckServiceGrpc.UptimeCheckServiceBlockingStub (3.10.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public static final class UptimeCheckServiceGrpc.UptimeCheckServiceBlockingStub extends AbstractBlockingStub<UptimeCheckServiceGrpc.UptimeCheckServiceBlockingStub>
```

The UptimeCheckService API is used to manage (list, create, delete, edit) Uptime check configurations in the Stackdriver Monitoring product. An Uptime check is a piece of configuration that determines which resources and services to monitor for availability. These configurations can also be configured interactively by navigating to the [Cloud Console](http://console.cloud.google.com), selecting the appropriate project, clicking on "Monitoring" on the left-hand side to navigate to Stackdriver, and then clicking on "Uptime".

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> UptimeCheckServiceGrpc.UptimeCheckServiceBlockingStub

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
protected UptimeCheckServiceGrpc.UptimeCheckServiceBlockingStub build(Channel channel, CallOptions callOptions)
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

`[UptimeCheckServiceGrpc.UptimeCheckServiceBlockingStub](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.UptimeCheckServiceGrpc.UptimeCheckServiceBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createUptimeCheckConfig(CreateUptimeCheckConfigRequest request)

```
public UptimeCheckConfig createUptimeCheckConfig(CreateUptimeCheckConfigRequest request)
```

Creates a new Uptime check configuration.

**Parameter**

**Name**

**Description**

`request`

`[CreateUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.CreateUptimeCheckConfigRequest)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.UptimeCheckConfig)`

### deleteUptimeCheckConfig(DeleteUptimeCheckConfigRequest request)

```
public Empty deleteUptimeCheckConfig(DeleteUptimeCheckConfigRequest request)
```

Deletes an Uptime check configuration. Note that this method will fail if the Uptime check configuration is referenced by an alert policy or other dependent configs that would be rendered invalid by the deletion.

**Parameter**

**Name**

**Description**

`request`

`[DeleteUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.DeleteUptimeCheckConfigRequest)`  

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

### getUptimeCheckConfig(GetUptimeCheckConfigRequest request)

```
public UptimeCheckConfig getUptimeCheckConfig(GetUptimeCheckConfigRequest request)
```

Gets a single Uptime check configuration.

**Parameter**

**Name**

**Description**

`request`

`[GetUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.GetUptimeCheckConfigRequest)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.UptimeCheckConfig)`

### listUptimeCheckConfigs(ListUptimeCheckConfigsRequest request)

```
public ListUptimeCheckConfigsResponse listUptimeCheckConfigs(ListUptimeCheckConfigsRequest request)
```

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

**Parameter**

**Name**

**Description**

`request`

`[ListUptimeCheckConfigsRequest](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.ListUptimeCheckConfigsRequest)`  

**Returns**

**Type**

**Description**

`[ListUptimeCheckConfigsResponse](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.ListUptimeCheckConfigsResponse)`

### listUptimeCheckIps(ListUptimeCheckIpsRequest request)

```
public ListUptimeCheckIpsResponse listUptimeCheckIps(ListUptimeCheckIpsRequest request)
```

Returns the list of IP addresses that checkers run from

**Parameter**

**Name**

**Description**

`request`

`[ListUptimeCheckIpsRequest](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.ListUptimeCheckIpsRequest)`  

**Returns**

**Type**

**Description**

`[ListUptimeCheckIpsResponse](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.ListUptimeCheckIpsResponse)`

### updateUptimeCheckConfig(UpdateUptimeCheckConfigRequest request)

```
public UptimeCheckConfig updateUptimeCheckConfig(UpdateUptimeCheckConfigRequest request)
```

Updates an Uptime check configuration. You can either replace the entire configuration with a new one or replace only certain fields in the current configuration by specifying the fields to be updated via `updateMask`. Returns the updated configuration.

**Parameter**

**Name**

**Description**

`request`

`[UpdateUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.UpdateUptimeCheckConfigRequest)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.10.0/com.google.monitoring.v3.UptimeCheckConfig)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
