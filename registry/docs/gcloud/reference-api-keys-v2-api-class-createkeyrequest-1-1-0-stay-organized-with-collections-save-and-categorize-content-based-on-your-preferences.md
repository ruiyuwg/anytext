-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# API Keys v2 API - Class CreateKeyRequest (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/latest/Google.Cloud.ApiKeys.V2.CreateKeyRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.4.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.3.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.2.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.1.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.0.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest)

```
public sealed class CreateKeyRequest : IMessage<CreateKeyRequest>, IEquatable<CreateKeyRequest>, IDeepCloneable<CreateKeyRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the API Keys v2 API class CreateKeyRequest.

Request message for `CreateKey` method.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> CreateKeyRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[CreateKeyRequest](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.1.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[CreateKeyRequest](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.1.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[CreateKeyRequest](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.1.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.ApiKeys.V2](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.1.0/Google.Cloud.ApiKeys.V2)

## Assembly

Google.Cloud.ApiKeys.V2.dll

## Constructors

### CreateKeyRequest()

```
public CreateKeyRequest()
```

### CreateKeyRequest(CreateKeyRequest)

```
public CreateKeyRequest(CreateKeyRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CreateKeyRequest](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.1.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest)`  

## Properties

### Key

```
public Key Key { get; set; }
```

Required. The API key fields to set at creation time. You can configure only the `display_name`, `restrictions`, and `annotations` fields.

**Property Value**

**Type**

**Description**

`[Key](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.1.0/Google.Cloud.ApiKeys.V2.Key)`

### KeyId

```
public string KeyId { get; set; }
```

User specified key id (optional). If specified, it will become the final component of the key resource name.

The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the id must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

The id must NOT be a UUID-like string.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The project in which the API key is created.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsLocationName

```
public LocationName ParentAsLocationName { get; set; }
```

[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.ApiKeys.V2/1.1.0/Google.Cloud.ApiKeys.V2.CreateKeyRequest#Google_Cloud_ApiKeys_V2_CreateKeyRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
