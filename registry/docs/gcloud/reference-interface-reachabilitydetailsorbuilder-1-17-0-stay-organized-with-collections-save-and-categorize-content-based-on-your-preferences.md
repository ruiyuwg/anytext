-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ReachabilityDetailsOrBuilder (1.17.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public interface ReachabilityDetailsOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getError()

```
public abstract Status getError()
```

The details of a failure or a cancellation of reachability analysis.

`.google.rpc.Status error = 3;`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The error.

### getErrorOrBuilder()

```
public abstract StatusOrBuilder getErrorOrBuilder()
```

The details of a failure or a cancellation of reachability analysis.

`.google.rpc.Status error = 3;`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getResult()

```
public abstract ReachabilityDetails.Result getResult()
```

The overall result of the test's configuration analysis.

`.google.cloud.networkmanagement.v1beta1.ReachabilityDetails.Result result = 1;`

**Returns**

**Type**

**Description**

`[ReachabilityDetails.Result](/java/docs/reference/google-cloud-network-management/1.17.0/com.google.cloud.networkmanagement.v1beta1.ReachabilityDetails.Result)`

The result.

### getResultValue()

```
public abstract int getResultValue()
```

The overall result of the test's configuration analysis.

`.google.cloud.networkmanagement.v1beta1.ReachabilityDetails.Result result = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for result.

### getTraces(int index)

```
public abstract Trace getTraces(int index)
```

Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.

`repeated .google.cloud.networkmanagement.v1beta1.Trace traces = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Trace](/java/docs/reference/google-cloud-network-management/1.17.0/com.google.cloud.networkmanagement.v1beta1.Trace)`

### getTracesCount()

```
public abstract int getTracesCount()
```

Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.

`repeated .google.cloud.networkmanagement.v1beta1.Trace traces = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTracesList()

```
public abstract List<Trace> getTracesList()
```

Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.

`repeated .google.cloud.networkmanagement.v1beta1.Trace traces = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Trace](/java/docs/reference/google-cloud-network-management/1.17.0/com.google.cloud.networkmanagement.v1beta1.Trace)>`

### getTracesOrBuilder(int index)

```
public abstract TraceOrBuilder getTracesOrBuilder(int index)
```

Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.

`repeated .google.cloud.networkmanagement.v1beta1.Trace traces = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TraceOrBuilder](/java/docs/reference/google-cloud-network-management/1.17.0/com.google.cloud.networkmanagement.v1beta1.TraceOrBuilder)`

### getTracesOrBuilderList()

```
public abstract List<? extends TraceOrBuilder> getTracesOrBuilderList()
```

Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.

`repeated .google.cloud.networkmanagement.v1beta1.Trace traces = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.networkmanagement.v1beta1.TraceOrBuilder>`

### getVerifyTime()

```
public abstract Timestamp getVerifyTime()
```

The time of the configuration analysis.

`.google.protobuf.Timestamp verify_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The verifyTime.

### getVerifyTimeOrBuilder()

```
public abstract TimestampOrBuilder getVerifyTimeOrBuilder()
```

The time of the configuration analysis.

`.google.protobuf.Timestamp verify_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasError()

```
public abstract boolean hasError()
```

The details of a failure or a cancellation of reachability analysis.

`.google.rpc.Status error = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the error field is set.

### hasVerifyTime()

```
public abstract boolean hasVerifyTime()
```

The time of the configuration analysis.

`.google.protobuf.Timestamp verify_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the verifyTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
