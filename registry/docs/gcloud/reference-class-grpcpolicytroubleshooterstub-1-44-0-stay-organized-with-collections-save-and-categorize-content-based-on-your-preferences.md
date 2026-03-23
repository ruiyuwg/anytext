-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcPolicyTroubleshooterStub (1.44.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.6 1.1.0 1.0.4 0.4.4

```
public class GrpcPolicyTroubleshooterStub extends PolicyTroubleshooterStub
```

gRPC stub implementation for the PolicyTroubleshooter service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [PolicyTroubleshooterStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStub) \> GrpcPolicyTroubleshooterStub

## Inherited Members

[PolicyTroubleshooterStub.close()](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStub#com_google_cloud_policytroubleshooter_iam_v3_stub_PolicyTroubleshooterStub_close__)

[PolicyTroubleshooterStub.troubleshootIamPolicyCallable()](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStub#com_google_cloud_policytroubleshooter_iam_v3_stub_PolicyTroubleshooterStub_troubleshootIamPolicyCallable__)

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
public static final GrpcPolicyTroubleshooterStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcPolicyTroubleshooterStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.GrpcPolicyTroubleshooterStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcPolicyTroubleshooterStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[GrpcPolicyTroubleshooterStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.GrpcPolicyTroubleshooterStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(PolicyTroubleshooterStubSettings settings)

```
public static final GrpcPolicyTroubleshooterStub create(PolicyTroubleshooterStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[PolicyTroubleshooterStubSettings](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcPolicyTroubleshooterStub](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.GrpcPolicyTroubleshooterStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcPolicyTroubleshooterStub(PolicyTroubleshooterStubSettings settings, ClientContext clientContext)

```
protected GrpcPolicyTroubleshooterStub(PolicyTroubleshooterStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcPolicyTroubleshooterStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[PolicyTroubleshooterStubSettings](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcPolicyTroubleshooterStub(PolicyTroubleshooterStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcPolicyTroubleshooterStub(PolicyTroubleshooterStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcPolicyTroubleshooterStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[PolicyTroubleshooterStubSettings](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

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

### close()

```
public final void close()
```

**Overrides**

[PolicyTroubleshooterStub.close()](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStub#com_google_cloud_policytroubleshooter_iam_v3_stub_PolicyTroubleshooterStub_close__)

### getOperationsStub()

```
public GrpcOperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[GrpcOperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.GrpcOperationsStub.html)`

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

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### troubleshootIamPolicyCallable()

```
public UnaryCallable<TroubleshootIamPolicyRequest,TroubleshootIamPolicyResponse> troubleshootIamPolicyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[TroubleshootIamPolicyRequest](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest),[TroubleshootIamPolicyResponse](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse)>`

**Overrides**

[PolicyTroubleshooterStub.troubleshootIamPolicyCallable()](/java/docs/reference/google-cloud-policy-troubleshooter/1.44.0/com.google.cloud.policytroubleshooter.iam.v3.stub.PolicyTroubleshooterStub#com_google_cloud_policytroubleshooter_iam_v3_stub_PolicyTroubleshooterStub_troubleshootIamPolicyCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
