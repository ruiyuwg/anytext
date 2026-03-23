-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Workspace Add-ons v1 API - Class Authorization (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/latest/Google.Cloud.GSuiteAddOns.V1.Authorization)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.4.0/Google.Cloud.GSuiteAddOns.V1.Authorization)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1.Authorization)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.2.0/Google.Cloud.GSuiteAddOns.V1.Authorization)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.1.0/Google.Cloud.GSuiteAddOns.V1.Authorization)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.0.0/Google.Cloud.GSuiteAddOns.V1.Authorization)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/1.1.0/Google.Cloud.GSuiteAddOns.V1.Authorization)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/1.0.0/Google.Cloud.GSuiteAddOns.V1.Authorization)

```
public sealed class Authorization : IMessage<Authorization>, IEquatable<Authorization>, IDeepCloneable<Authorization>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Workspace Add-ons v1 API class Authorization.

The authorization information used when invoking deployment endpoints.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Authorization

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Authorization](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1.Authorization), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Authorization](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1.Authorization), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Authorization](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1.Authorization), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.GSuiteAddOns.V1](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1)

## Assembly

Google.Cloud.GSuiteAddOns.V1.dll

## Constructors

### Authorization()

```
public Authorization()
```

### Authorization(Authorization)

```
public Authorization(Authorization other)
```

**Parameter**

**Name**

**Description**

`other`

`[Authorization](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1.Authorization)`  

## Properties

### AuthorizationName

```
public AuthorizationName AuthorizationName { get; set; }
```

[AuthorizationName](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1.AuthorizationName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1.Authorization#Google_Cloud_GSuiteAddOns_V1_Authorization_Name) resource name property.

**Property Value**

**Type**

**Description**

`[AuthorizationName](/dotnet/docs/reference/Google.Cloud.GSuiteAddOns.V1/2.3.0/Google.Cloud.GSuiteAddOns.V1.AuthorizationName)`

### Name

```
public string Name { get; set; }
```

The canonical full name of this resource. Example: `projects/123/authorization`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### OauthClientId

```
public string OauthClientId { get; set; }
```

The OAuth client ID used to obtain OAuth access tokens for a user on the add-on's behalf.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ServiceAccountEmail

```
public string ServiceAccountEmail { get; set; }
```

The email address of the service account used to authenticate requests to add-on callback endpoints.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
