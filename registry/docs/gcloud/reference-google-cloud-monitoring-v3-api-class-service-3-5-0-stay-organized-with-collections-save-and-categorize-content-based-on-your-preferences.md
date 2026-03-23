-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Monitoring v3 API - Class Service (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.5.0keyboard\_arrow\_down

-   [3.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/latest/Google.Cloud.Monitoring.V3.Service)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.15.0/Google.Cloud.Monitoring.V3.Service)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.14.0/Google.Cloud.Monitoring.V3.Service)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.Service)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.12.0/Google.Cloud.Monitoring.V3.Service)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.11.0/Google.Cloud.Monitoring.V3.Service)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.10.0/Google.Cloud.Monitoring.V3.Service)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.9.0/Google.Cloud.Monitoring.V3.Service)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.8.0/Google.Cloud.Monitoring.V3.Service)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.7.0/Google.Cloud.Monitoring.V3.Service)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.6.0/Google.Cloud.Monitoring.V3.Service)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.4.0/Google.Cloud.Monitoring.V3.Service)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.3.0/Google.Cloud.Monitoring.V3.Service)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.Service)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.1.0/Google.Cloud.Monitoring.V3.Service)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.Service)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.Service)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.5.0/Google.Cloud.Monitoring.V3.Service)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.4.0/Google.Cloud.Monitoring.V3.Service)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.3.0/Google.Cloud.Monitoring.V3.Service)

```
public sealed class Service : IMessage<Service>, IEquatable<Service>, IDeepCloneable<Service>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Monitoring v3 API class Service.

A `Service` is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern ([Wikipedia](https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a `Service` acts as the root resource under which operational aspects of the service are accessible.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Service

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Monitoring.V3](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3)

## Assembly

Google.Cloud.Monitoring.V3.dll

## Constructors

### Service()

```
public Service()
```

### Service(Service)

```
public Service(Service other)
```

**Parameter**

**Name**

**Description**

`other`

`[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)`  

## Properties

### AppEngine

```
public Service.Types.AppEngine AppEngine { get; set; }
```

Type used for App Engine services.

**Property Value**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types)[AppEngine](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types.AppEngine)`

### CloudEndpoints

```
public Service.Types.CloudEndpoints CloudEndpoints { get; set; }
```

Type used for Cloud Endpoints services.

**Property Value**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types)[CloudEndpoints](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types.CloudEndpoints)`

### ClusterIstio

```
public Service.Types.ClusterIstio ClusterIstio { get; set; }
```

Type used for Istio services that live in a Kubernetes cluster.

**Property Value**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types)[ClusterIstio](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types.ClusterIstio)`

### Custom

```
public Service.Types.Custom Custom { get; set; }
```

Custom service type.

**Property Value**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types)[Custom](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types.Custom)`

### DisplayName

```
public string DisplayName { get; set; }
```

Name used for UI elements listing this Service.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### IdentifierCase

```
public Service.IdentifierOneofCase IdentifierCase { get; }
```

**Property Value**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)[IdentifierOneofCase](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.IdentifierOneofCase)`

### IstioCanonicalService

```
public Service.Types.IstioCanonicalService IstioCanonicalService { get; set; }
```

Type used for canonical services scoped to an Istio mesh. Metrics for Istio are [documented here](https://istio.io/latest/docs/reference/config/metrics/)

**Property Value**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types)[IstioCanonicalService](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types.IstioCanonicalService)`

### MeshIstio

```
public Service.Types.MeshIstio MeshIstio { get; set; }
```

Type used for Istio services scoped to an Istio mesh.

**Property Value**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types)[MeshIstio](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types.MeshIstio)`

### Name

```
public string Name { get; set; }
```

Resource name for this Service. The format is:

```
projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]
```

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ResourceName

```
public IResourceName ResourceName { get; set; }
```

[IResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/IResourceName.cs)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service#Google_Cloud_Monitoring_V3_Service_Name) resource name property.

**Property Value**

**Type**

**Description**

`[IResourceName](https://github.com/googleapis/gax-dotnet/blob/6f2d3e64dd92f0f7a4f02a7db56cf6ed409615f2/Google.Api.Gax/IResourceName.cs)`

### ServiceName

```
public ServiceName ServiceName { get; set; }
```

[ServiceName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.ServiceName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service#Google_Cloud_Monitoring_V3_Service_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ServiceName](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.ServiceName)`

### Telemetry

```
public Service.Types.Telemetry Telemetry { get; set; }
```

Configuration for how to query telemetry on a Service.

**Property Value**

**Type**

**Description**

`[Service](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types)[Telemetry](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Service.Types.Telemetry)`

### UserLabels

```
public MapField<string, string> UserLabels { get; }
```

Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
