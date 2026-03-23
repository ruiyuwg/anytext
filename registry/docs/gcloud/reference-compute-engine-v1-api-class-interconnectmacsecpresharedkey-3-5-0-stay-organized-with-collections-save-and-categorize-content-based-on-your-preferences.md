-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class InterconnectMacsecPreSharedKey (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class InterconnectMacsecPreSharedKey : IMessage<InterconnectMacsecPreSharedKey>, IEquatable<InterconnectMacsecPreSharedKey>, IDeepCloneable<InterconnectMacsecPreSharedKey>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class InterconnectMacsecPreSharedKey.

Describes a pre-shared key used to setup MACsec in static connectivity association key (CAK) mode.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> InterconnectMacsecPreSharedKey

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[InterconnectMacsecPreSharedKey](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InterconnectMacsecPreSharedKey), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[InterconnectMacsecPreSharedKey](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InterconnectMacsecPreSharedKey), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[InterconnectMacsecPreSharedKey](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InterconnectMacsecPreSharedKey), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### InterconnectMacsecPreSharedKey()

```
public InterconnectMacsecPreSharedKey()
```

### InterconnectMacsecPreSharedKey(InterconnectMacsecPreSharedKey)

```
public InterconnectMacsecPreSharedKey(InterconnectMacsecPreSharedKey other)
```

**Parameter**

**Name**

**Description**

`other`

`[InterconnectMacsecPreSharedKey](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.5.0/Google.Cloud.Compute.V1.InterconnectMacsecPreSharedKey)`  

## Properties

### HasName

```
public bool HasName { get; }
```

Gets whether the "name" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasStartTime

```
public bool HasStartTime { get; }
```

Gets whether the "start\_time" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Name

```
public string Name { get; set; }
```

Required. A name for this pre-shared key. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### StartTime

```
public string StartTime { get; set; }
```

A RFC3339 timestamp on or after which the key is valid. startTime can be in the future. If the keychain has a single key, startTime can be omitted. If the keychain has multiple keys, startTime is mandatory for each key. The start times of keys must be in increasing order. The start times of two consecutive keys must be at least 6 hours apart.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
