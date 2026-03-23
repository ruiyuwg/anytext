-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class RemoveInstancesInstanceGroupRequest (2.16.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class RemoveInstancesInstanceGroupRequest : IMessage<RemoveInstancesInstanceGroupRequest>, IEquatable<RemoveInstancesInstanceGroupRequest>, IDeepCloneable<RemoveInstancesInstanceGroupRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class RemoveInstancesInstanceGroupRequest.

A request message for InstanceGroups.RemoveInstances. See the method description for details.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> RemoveInstancesInstanceGroupRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[RemoveInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.RemoveInstancesInstanceGroupRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[RemoveInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.RemoveInstancesInstanceGroupRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[RemoveInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.RemoveInstancesInstanceGroupRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### RemoveInstancesInstanceGroupRequest()

```
public RemoveInstancesInstanceGroupRequest()
```

### RemoveInstancesInstanceGroupRequest(RemoveInstancesInstanceGroupRequest)

```
public RemoveInstancesInstanceGroupRequest(RemoveInstancesInstanceGroupRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[RemoveInstancesInstanceGroupRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.RemoveInstancesInstanceGroupRequest)`  

## Properties

### HasRequestId

```
public bool HasRequestId { get; }
```

Gets whether the "request\_id" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### InstanceGroup

```
public string InstanceGroup { get; set; }
```

The name of the instance group where the specified instances will be removed.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### InstanceGroupsRemoveInstancesRequestResource

```
public InstanceGroupsRemoveInstancesRequest InstanceGroupsRemoveInstancesRequestResource { get; set; }
```

The body resource for this request

**Property Value**

**Type**

**Description**

`[InstanceGroupsRemoveInstancesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.16.0/Google.Cloud.Compute.V1.InstanceGroupsRemoveInstancesRequest)`

### Project

```
public string Project { get; set; }
```

Project ID for this request.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### RequestId

```
public string RequestId { get; set; }
```

An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Zone

```
public string Zone { get; set; }
```

The name of the zone where the instance group is located.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
