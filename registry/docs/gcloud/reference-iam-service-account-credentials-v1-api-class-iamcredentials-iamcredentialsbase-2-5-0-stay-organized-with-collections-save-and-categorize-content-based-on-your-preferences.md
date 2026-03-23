-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# IAM Service Account Credentials v1 API - Class IAMCredentials.IAMCredentialsBase (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1.IAMCredentials.IAMCredentialsBase)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/2.4.0/Google.Cloud.Iam.Credentials.V1.IAMCredentials.IAMCredentialsBase)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/2.3.0/Google.Cloud.Iam.Credentials.V1.IAMCredentials.IAMCredentialsBase)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/2.2.0/Google.Cloud.Iam.Credentials.V1.IAMCredentials.IAMCredentialsBase)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/2.1.0/Google.Cloud.Iam.Credentials.V1.IAMCredentials.IAMCredentialsBase)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/2.0.0/Google.Cloud.Iam.Credentials.V1.IAMCredentials.IAMCredentialsBase)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/1.2.0/Google.Cloud.Iam.Credentials.V1.IAMCredentials.IAMCredentialsBase)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/1.1.0/Google.Cloud.Iam.Credentials.V1.IAMCredentials.IAMCredentialsBase)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/1.0.0/Google.Cloud.Iam.Credentials.V1.IAMCredentials.IAMCredentialsBase)

```
[BindServiceMethod(typeof(IAMCredentials), "BindService")]
public abstract class IAMCredentials.IAMCredentialsBase
```

Reference documentation and code samples for the IAM Service Account Credentials v1 API class IAMCredentials.IAMCredentialsBase.

Base class for server-side implementations of IAMCredentials

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> IAMCredentials.IAMCredentialsBase

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Iam.Credentials.V1](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1)

## Assembly

Google.Cloud.Iam.Credentials.V1.dll

## Methods

### GenerateAccessToken(GenerateAccessTokenRequest, ServerCallContext)

```
public virtual Task<GenerateAccessTokenResponse> GenerateAccessToken(GenerateAccessTokenRequest request, ServerCallContext context)
```

Generates an OAuth 2.0 access token for a service account.

**Parameters**

**Name**

**Description**

`request`

`[GenerateAccessTokenRequest](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1.GenerateAccessTokenRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[GenerateAccessTokenResponse](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1.GenerateAccessTokenResponse)`

The response to send back to the client (wrapped by a task).

### GenerateIdToken(GenerateIdTokenRequest, ServerCallContext)

```
public virtual Task<GenerateIdTokenResponse> GenerateIdToken(GenerateIdTokenRequest request, ServerCallContext context)
```

Generates an OpenID Connect ID token for a service account.

**Parameters**

**Name**

**Description**

`request`

`[GenerateIdTokenRequest](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1.GenerateIdTokenRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[GenerateIdTokenResponse](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1.GenerateIdTokenResponse)`

The response to send back to the client (wrapped by a task).

### SignBlob(SignBlobRequest, ServerCallContext)

```
public virtual Task<SignBlobResponse> SignBlob(SignBlobRequest request, ServerCallContext context)
```

Signs a blob using a service account's system-managed private key.

**Parameters**

**Name**

**Description**

`request`

`[SignBlobRequest](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1.SignBlobRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SignBlobResponse](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1.SignBlobResponse)`

The response to send back to the client (wrapped by a task).

### SignJwt(SignJwtRequest, ServerCallContext)

```
public virtual Task<SignJwtResponse> SignJwt(SignJwtRequest request, ServerCallContext context)
```

Signs a JWT using a service account's system-managed private key.

**Parameters**

**Name**

**Description**

`request`

`[SignJwtRequest](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1.SignJwtRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://cloud.google.com/dotnet/docs/reference/Grpc.Core/latest/Grpc.Core.ServerCallContext.html)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[SignJwtResponse](/dotnet/docs/reference/Google.Cloud.Iam.Credentials.V1/latest/Google.Cloud.Iam.Credentials.V1.SignJwtResponse)`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
