-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Run Admin v2 API - Class NFSVolumeSource (2.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.7.0keyboard\_arrow\_down

-   [2.19.0 (latest)](/dotnet/docs/reference/Google.Cloud.Run.V2/latest/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.18.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.18.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.17.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.17.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.16.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.15.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.14.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.13.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.12.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.11.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.10.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.9.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.5.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.4.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.3.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.2.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.1.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.0.0/Google.Cloud.Run.V2.NFSVolumeSource)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.Run.V2/1.0.0-beta02/Google.Cloud.Run.V2.NFSVolumeSource)

```
public sealed class NFSVolumeSource : IMessage<NFSVolumeSource>, IEquatable<NFSVolumeSource>, IDeepCloneable<NFSVolumeSource>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Run Admin v2 API class NFSVolumeSource.

Represents an NFS mount.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> NFSVolumeSource

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[NFSVolumeSource](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.NFSVolumeSource), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[NFSVolumeSource](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.NFSVolumeSource), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[NFSVolumeSource](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.NFSVolumeSource), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Run.V2](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2)

## Assembly

Google.Cloud.Run.V2.dll

## Constructors

### NFSVolumeSource()

```
public NFSVolumeSource()
```

### NFSVolumeSource(NFSVolumeSource)

```
public NFSVolumeSource(NFSVolumeSource other)
```

**Parameter**

**Name**

**Description**

`other`

`[NFSVolumeSource](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.NFSVolumeSource)`  

## Properties

### Path

```
public string Path { get; set; }
```

Path that is exported by the NFS server.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ReadOnly

```
public bool ReadOnly { get; set; }
```

If true, mount the NFS volume as read only

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Server

```
public string Server { get; set; }
```

Hostname or IP address of the NFS server

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
