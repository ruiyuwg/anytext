-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListOSPolicyAssignmentsRequest (1.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.7.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/latest/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.5.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.4.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.3.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.2.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.1.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/2.0.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.8.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.7.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.6.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.5.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.4.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.3.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)

```
public sealed class ListOSPolicyAssignmentsRequest : IPageRequest, IMessage<ListOSPolicyAssignmentsRequest>, IEquatable<ListOSPolicyAssignmentsRequest>, IDeepCloneable<ListOSPolicyAssignmentsRequest>, IBufferMessage, IMessage
```

A request message to list OS policy assignments for a parent resource

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListOSPolicyAssignmentsRequest

## Implements

[IPageRequest](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageRequest.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListOSPolicyAssignmentsRequest](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.7.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListOSPolicyAssignmentsRequest](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.7.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListOSPolicyAssignmentsRequest](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.7.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.OsConfig.V1](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.7.0/Google.Cloud.OsConfig.V1)

## Assembly

Google.Cloud.OsConfig.V1.dll

## Constructors

### ListOSPolicyAssignmentsRequest()

```
public ListOSPolicyAssignmentsRequest()
```

### ListOSPolicyAssignmentsRequest(ListOSPolicyAssignmentsRequest)

```
public ListOSPolicyAssignmentsRequest(ListOSPolicyAssignmentsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListOSPolicyAssignmentsRequest](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.7.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest)`  

## Properties

### PageSize

```
public int PageSize { get; set; }
```

The maximum number of assignments to return.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

A pagination token returned from a previous call to `ListOSPolicyAssignments` that indicates where this listing should continue from.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The parent resource name.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsLocationName

```
public LocationName ParentAsLocationName { get; set; }
```

[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.OsConfig.V1/1.7.0/Google.Cloud.OsConfig.V1.ListOSPolicyAssignmentsRequest#Google_Cloud_OsConfig_V1_ListOSPolicyAssignmentsRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
