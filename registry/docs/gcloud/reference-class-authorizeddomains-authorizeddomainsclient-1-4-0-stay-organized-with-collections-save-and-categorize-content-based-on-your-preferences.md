-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class AuthorizedDomains.AuthorizedDomainsClient (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.4.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/latest/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.4.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.2.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.0.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.3.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.2.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.1.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.0.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)

```
public class AuthorizedDomainsClient : ClientBase<AuthorizedDomains.AuthorizedDomainsClient>
```

Client for AuthorizedDomains

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html) \> [ClientBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html)<[AuthorizedDomains.AuthorizedDomainsClient](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)\> \> AuthorizedDomains.AuthorizedDomainsClient

## Inherited Members

[ClientBase<AuthorizedDomains.AuthorizedDomainsClient>.WithHost(String)](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase-1.html#Grpc_Core_ClientBase_1_WithHost_System_String_)

[ClientBase.CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.html#Grpc_Core_ClientBase_CallInvoker)

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AppEngine.V1](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1)

## Assembly

Google.Cloud.AppEngine.V1.dll

## Constructors

### AuthorizedDomainsClient()

```
protected AuthorizedDomainsClient()
```

Protected parameterless constructor to allow creation of test doubles.

### AuthorizedDomainsClient(CallInvoker)

```
public AuthorizedDomainsClient(CallInvoker callInvoker)
```

Creates a new client for AuthorizedDomains that uses a custom `CallInvoker`.

**Parameter**

**Name**

**Description**

`callInvoker`

`[CallInvoker](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallInvoker.html)`  

The callInvoker to use to make remote calls.

### AuthorizedDomainsClient(ChannelBase)

```
public AuthorizedDomainsClient(ChannelBase channel)
```

Creates a new client for AuthorizedDomains

**Parameter**

**Name**

**Description**

`channel`

`[ChannelBase](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ChannelBase.html)`  

The channel to use to make remote calls.

### AuthorizedDomainsClient(ClientBase.ClientBaseConfiguration)

```
protected AuthorizedDomainsClient(ClientBase.ClientBaseConfiguration configuration)
```

Protected constructor to allow creation of configured clients.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase.ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

The client configuration.

## Methods

### ListAuthorizedDomains(ListAuthorizedDomainsRequest, CallOptions)

```
public virtual ListAuthorizedDomainsResponse ListAuthorizedDomains(ListAuthorizedDomainsRequest request, CallOptions options)
```

Lists all domains the user is authorized to administer.

**Parameters**

**Name**

**Description**

`request`

`[ListAuthorizedDomainsRequest](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.ListAuthorizedDomainsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[ListAuthorizedDomainsResponse](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.ListAuthorizedDomainsResponse)`

The response received from the server.

### ListAuthorizedDomains(ListAuthorizedDomainsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual ListAuthorizedDomainsResponse ListAuthorizedDomains(ListAuthorizedDomainsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Lists all domains the user is authorized to administer.

**Parameters**

**Name**

**Description**

`request`

`[ListAuthorizedDomainsRequest](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.ListAuthorizedDomainsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[ListAuthorizedDomainsResponse](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.ListAuthorizedDomainsResponse)`

The response received from the server.

### ListAuthorizedDomainsAsync(ListAuthorizedDomainsRequest, CallOptions)

```
public virtual AsyncUnaryCall<ListAuthorizedDomainsResponse> ListAuthorizedDomainsAsync(ListAuthorizedDomainsRequest request, CallOptions options)
```

Lists all domains the user is authorized to administer.

**Parameters**

**Name**

**Description**

`request`

`[ListAuthorizedDomainsRequest](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.ListAuthorizedDomainsRequest)`  

The request to send to the server.

`options`

`[CallOptions](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.CallOptions.html)`  

The options for the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ListAuthorizedDomainsResponse](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.ListAuthorizedDomainsResponse)>`

The call object.

### ListAuthorizedDomainsAsync(ListAuthorizedDomainsRequest, Metadata, Nullable<DateTime>, CancellationToken)

```
public virtual AsyncUnaryCall<ListAuthorizedDomainsResponse> ListAuthorizedDomainsAsync(ListAuthorizedDomainsRequest request, Metadata headers = null, DateTime? deadline = null, CancellationToken cancellationToken = default(CancellationToken))
```

Lists all domains the user is authorized to administer.

**Parameters**

**Name**

**Description**

`request`

`[ListAuthorizedDomainsRequest](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.ListAuthorizedDomainsRequest)`  

The request to send to the server.

`headers`

`[Metadata](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.Metadata.html)`  

The initial metadata to send with the call. This parameter is optional.

`deadline`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)>`  

An optional deadline for the call. The call will be cancelled if deadline is hit.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

An optional token for canceling the call.

**Returns**

**Type**

**Description**

`[AsyncUnaryCall](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.AsyncUnaryCall-1.html)<[ListAuthorizedDomainsResponse](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.ListAuthorizedDomainsResponse)>`

The call object.

### NewInstance(ClientBase.ClientBaseConfiguration)

```
protected override AuthorizedDomains.AuthorizedDomainsClient NewInstance(ClientBase.ClientBaseConfiguration configuration)
```

Creates a new instance of client from given `ClientBaseConfiguration`.

**Parameter**

**Name**

**Description**

`configuration`

`[ClientBase.ClientBaseConfiguration](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ClientBase.ClientBaseConfiguration.html)`  

**Returns**

**Type**

**Description**

`[AuthorizedDomains.AuthorizedDomainsClient](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient)`

**Overrides**

Grpc.Core.ClientBase<Google.Cloud.AppEngine.V1.AuthorizedDomains.AuthorizedDomainsClient>.NewInstance(Grpc.Core.ClientBase.ClientBaseConfiguration)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
