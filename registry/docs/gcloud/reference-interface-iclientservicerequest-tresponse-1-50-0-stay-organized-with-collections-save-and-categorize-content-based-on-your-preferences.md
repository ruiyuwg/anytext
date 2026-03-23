-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Interface IClientServiceRequest<TResponse> (1.50.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.50.0keyboard\_arrow\_down

-   [1.73.0 (latest)](/dotnet/docs/reference/Google.Apis/latest/Google.Apis.Requests.IClientServiceRequest-1)
-   [1.69.0](/dotnet/docs/reference/Google.Apis/1.69.0/Google.Apis.Requests.IClientServiceRequest-1)
-   [1.68.0](/dotnet/docs/reference/Google.Apis/1.68.0/Google.Apis.Requests.IClientServiceRequest-1)
-   [1.60.0](/dotnet/docs/reference/Google.Apis/1.60.0/Google.Apis.Requests.IClientServiceRequest-1)
-   [1.59.0](/dotnet/docs/reference/Google.Apis/1.59.0/Google.Apis.Requests.IClientServiceRequest-1)
-   [1.55.0](/dotnet/docs/reference/Google.Apis/1.55.0/Google.Apis.Requests.IClientServiceRequest-1)
-   [1.50.0](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest-1)

```
public interface IClientServiceRequest<TResponse> : IClientServiceRequest
```

A client service request which inherits from [IClientServiceRequest](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest) and represents a specific service request with the given response type. It supports both sync and async execution to get the response.

## Inherited Members

[IClientServiceRequest.MethodName](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest#Google_Apis_Requests_IClientServiceRequest_MethodName)

[IClientServiceRequest.RestPath](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest#Google_Apis_Requests_IClientServiceRequest_RestPath)

[IClientServiceRequest.HttpMethod](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest#Google_Apis_Requests_IClientServiceRequest_HttpMethod)

[IClientServiceRequest.RequestParameters](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest#Google_Apis_Requests_IClientServiceRequest_RequestParameters)

[IClientServiceRequest.Service](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest#Google_Apis_Requests_IClientServiceRequest_Service)

[IClientServiceRequest.CreateRequest(Nullable<Boolean>)](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest#Google_Apis_Requests_IClientServiceRequest_CreateRequest_Nullable_System_Boolean__)

[IClientServiceRequest.ExecuteAsStreamAsync()](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest#Google_Apis_Requests_IClientServiceRequest_ExecuteAsStreamAsync)

[IClientServiceRequest.ExecuteAsStreamAsync(CancellationToken)](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest#Google_Apis_Requests_IClientServiceRequest_ExecuteAsStreamAsync_CancellationToken_)

[IClientServiceRequest.ExecuteAsStream()](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests.IClientServiceRequest#Google_Apis_Requests_IClientServiceRequest_ExecuteAsStream)

## Namespace

[Google.Apis.Requests](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Requests)

## Assembly

Google.Apis.dll

## Type Parameter

**Name**

**Description**

`TResponse`

## Methods

### Execute()

```
TResponse Execute()
```

Executes the request and returns the result object.

**Returns**

**Type**

**Description**

`TResponse`

### ExecuteAsync()

```
Task<TResponse> ExecuteAsync()
```

Executes the request asynchronously and returns the result object.

**Returns**

**Type**

**Description**

`Task<TResponse>`

### ExecuteAsync(CancellationToken)

```
Task<TResponse> ExecuteAsync(CancellationToken cancellationToken)
```

Executes the request asynchronously and returns the result object.

**Parameter**

**Name**

**Description**

`cancellationToken`

`CancellationToken`  

A cancellation token to cancel operation.

**Returns**

**Type**

**Description**

`Task<TResponse>`

## Extension Method

[Utilities.ThrowIfNull<T>(T, String)](/dotnet/docs/reference/Google.Apis/1.50.0/Google.Apis.Util.Utilities#Google_Apis_Util_Utilities_ThrowIfNull__1___0_System_String_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
