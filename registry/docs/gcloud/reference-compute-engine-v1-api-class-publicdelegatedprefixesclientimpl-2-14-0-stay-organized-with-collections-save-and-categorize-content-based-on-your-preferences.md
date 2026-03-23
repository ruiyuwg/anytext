-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class PublicDelegatedPrefixesClientImpl (2.14.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class PublicDelegatedPrefixesClientImpl : PublicDelegatedPrefixesClient
```

Reference documentation and code samples for the Compute Engine v1 API class PublicDelegatedPrefixesClientImpl.

PublicDelegatedPrefixes client wrapper implementation, for convenient use.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> [PublicDelegatedPrefixesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient) \> PublicDelegatedPrefixesClientImpl

## Inherited Members

[PublicDelegatedPrefixesClient.DefaultEndpoint](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_DefaultEndpoint)

[PublicDelegatedPrefixesClient.DefaultScopes](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_DefaultScopes)

[PublicDelegatedPrefixesClient.ServiceMetadata](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_ServiceMetadata)

[PublicDelegatedPrefixesClient.CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_CreateAsync_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.Create()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Create)

[PublicDelegatedPrefixesClient.ShutdownDefaultChannelsAsync()](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_ShutdownDefaultChannelsAsync)

[PublicDelegatedPrefixesClient.AggregatedList(string, string, int?, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_AggregatedList_System_String_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.AggregatedListAsync(string, string, int?, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_AggregatedListAsync_System_String_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.AnnounceAsync(AnnouncePublicDelegatedPrefixeRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_AnnounceAsync_Google_Cloud_Compute_V1_AnnouncePublicDelegatedPrefixeRequest_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.PollOnceAnnounce(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOnceAnnounce_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.PollOnceAnnounceAsync(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOnceAnnounceAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.Announce(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Announce_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.AnnounceAsync(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_AnnounceAsync_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.AnnounceAsync(string, string, string, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_AnnounceAsync_System_String_System_String_System_String_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.DeleteAsync(DeletePublicDelegatedPrefixeRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_DeleteAsync_Google_Cloud_Compute_V1_DeletePublicDelegatedPrefixeRequest_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.PollOnceDelete(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOnceDelete_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.PollOnceDeleteAsync(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOnceDeleteAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.Delete(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Delete_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.DeleteAsync(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_DeleteAsync_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.DeleteAsync(string, string, string, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_DeleteAsync_System_String_System_String_System_String_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.GetAsync(GetPublicDelegatedPrefixeRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_GetAsync_Google_Cloud_Compute_V1_GetPublicDelegatedPrefixeRequest_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.Get(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Get_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.GetAsync(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_GetAsync_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.GetAsync(string, string, string, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_GetAsync_System_String_System_String_System_String_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.InsertAsync(InsertPublicDelegatedPrefixeRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_InsertAsync_Google_Cloud_Compute_V1_InsertPublicDelegatedPrefixeRequest_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.PollOnceInsert(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOnceInsert_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.PollOnceInsertAsync(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOnceInsertAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.Insert(string, string, PublicDelegatedPrefix, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Insert_System_String_System_String_Google_Cloud_Compute_V1_PublicDelegatedPrefix_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.InsertAsync(string, string, PublicDelegatedPrefix, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_InsertAsync_System_String_System_String_Google_Cloud_Compute_V1_PublicDelegatedPrefix_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.InsertAsync(string, string, PublicDelegatedPrefix, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_InsertAsync_System_String_System_String_Google_Cloud_Compute_V1_PublicDelegatedPrefix_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.List(string, string, string, int?, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_List_System_String_System_String_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.ListAsync(string, string, string, int?, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_ListAsync_System_String_System_String_System_String_System_Nullable_System_Int32__Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.PatchAsync(PatchPublicDelegatedPrefixeRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PatchAsync_Google_Cloud_Compute_V1_PatchPublicDelegatedPrefixeRequest_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.PollOncePatch(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOncePatch_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.PollOncePatchAsync(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOncePatchAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.Patch(string, string, string, PublicDelegatedPrefix, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Patch_System_String_System_String_System_String_Google_Cloud_Compute_V1_PublicDelegatedPrefix_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.PatchAsync(string, string, string, PublicDelegatedPrefix, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PatchAsync_System_String_System_String_System_String_Google_Cloud_Compute_V1_PublicDelegatedPrefix_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.PatchAsync(string, string, string, PublicDelegatedPrefix, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PatchAsync_System_String_System_String_System_String_Google_Cloud_Compute_V1_PublicDelegatedPrefix_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.WithdrawAsync(WithdrawPublicDelegatedPrefixeRequest, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_WithdrawAsync_Google_Cloud_Compute_V1_WithdrawPublicDelegatedPrefixeRequest_System_Threading_CancellationToken_)

[PublicDelegatedPrefixesClient.PollOnceWithdraw(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOnceWithdraw_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.PollOnceWithdrawAsync(string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PollOnceWithdrawAsync_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.Withdraw(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Withdraw_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.WithdrawAsync(string, string, string, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_WithdrawAsync_System_String_System_String_System_String_Google_Api_Gax_Grpc_CallSettings_)

[PublicDelegatedPrefixesClient.WithdrawAsync(string, string, string, CancellationToken)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_WithdrawAsync_System_String_System_String_System_String_System_Threading_CancellationToken_)

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Remarks

The PublicDelegatedPrefixes API.

## Constructors

### PublicDelegatedPrefixesClientImpl(PublicDelegatedPrefixesClient, PublicDelegatedPrefixesSettings, ILogger)

```
public PublicDelegatedPrefixesClientImpl(PublicDelegatedPrefixes.PublicDelegatedPrefixesClient grpcClient, PublicDelegatedPrefixesSettings settings, ILogger logger)
```

Constructs a client wrapper for the PublicDelegatedPrefixes service, with the specified gRPC client and settings.

**Parameters**

**Name**

**Description**

`grpcClient`

`[PublicDelegatedPrefixes](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixes)[PublicDelegatedPrefixesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixes.PublicDelegatedPrefixesClient)`  

The underlying gRPC client.

`settings`

`[PublicDelegatedPrefixesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesSettings)`  

The base [PublicDelegatedPrefixesSettings](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesSettings) used within this client.

`logger`

`[ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)`  

Optional [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger) to use within this client.

## Properties

### AnnounceOperationsClient

```
public override OperationsClient AnnounceOperationsClient { get; }
```

The long-running operations client for `Announce`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

**Overrides**

[PublicDelegatedPrefixesClient.AnnounceOperationsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_AnnounceOperationsClient)

### DeleteOperationsClient

```
public override OperationsClient DeleteOperationsClient { get; }
```

The long-running operations client for `Delete`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

**Overrides**

[PublicDelegatedPrefixesClient.DeleteOperationsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_DeleteOperationsClient)

### GrpcClient

```
public override PublicDelegatedPrefixes.PublicDelegatedPrefixesClient GrpcClient { get; }
```

The underlying gRPC PublicDelegatedPrefixes client

**Property Value**

**Type**

**Description**

`[PublicDelegatedPrefixes](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixes)[PublicDelegatedPrefixesClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixes.PublicDelegatedPrefixesClient)`

**Overrides**

[PublicDelegatedPrefixesClient.GrpcClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_GrpcClient)

### InsertOperationsClient

```
public override OperationsClient InsertOperationsClient { get; }
```

The long-running operations client for `Insert`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

**Overrides**

[PublicDelegatedPrefixesClient.InsertOperationsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_InsertOperationsClient)

### PatchOperationsClient

```
public override OperationsClient PatchOperationsClient { get; }
```

The long-running operations client for `Patch`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

**Overrides**

[PublicDelegatedPrefixesClient.PatchOperationsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PatchOperationsClient)

### WithdrawOperationsClient

```
public override OperationsClient WithdrawOperationsClient { get; }
```

The long-running operations client for `Withdraw`.

**Property Value**

**Type**

**Description**

`[OperationsClient](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/OperationsClient.g.cs)`

**Overrides**

[PublicDelegatedPrefixesClient.WithdrawOperationsClient](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_WithdrawOperationsClient)

## Methods

### AggregatedList(AggregatedListPublicDelegatedPrefixesRequest, CallSettings)

```
public override PagedEnumerable<PublicDelegatedPrefixAggregatedList, KeyValuePair<string, PublicDelegatedPrefixesScopedList>> AggregatedList(AggregatedListPublicDelegatedPrefixesRequest request, CallSettings callSettings = null)
```

Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListPublicDelegatedPrefixesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.AggregatedListPublicDelegatedPrefixesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedEnumerable.cs)[PublicDelegatedPrefixAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[PublicDelegatedPrefixesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesScopedList)`

A pageable sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Overrides**

[PublicDelegatedPrefixesClient.AggregatedList(AggregatedListPublicDelegatedPrefixesRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_AggregatedList_Google_Cloud_Compute_V1_AggregatedListPublicDelegatedPrefixesRequest_Google_Api_Gax_Grpc_CallSettings_)

### AggregatedListAsync(AggregatedListPublicDelegatedPrefixesRequest, CallSettings)

```
public override PagedAsyncEnumerable<PublicDelegatedPrefixAggregatedList, KeyValuePair<string, PublicDelegatedPrefixesScopedList>> AggregatedListAsync(AggregatedListPublicDelegatedPrefixesRequest request, CallSettings callSettings = null)
```

Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes. To prevent failure, Google recommends that you set the `returnPartialSuccess` parameter to `true`.

**Parameters**

**Name**

**Description**

`request`

`[AggregatedListPublicDelegatedPrefixesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.AggregatedListPublicDelegatedPrefixesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedAsyncEnumerable.cs)[PublicDelegatedPrefixAggregatedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixAggregatedList)[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)[string](https://learn.microsoft.com/dotnet/api/system.string)[PublicDelegatedPrefixesScopedList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesScopedList)`

A pageable asynchronous sequence of [KeyValuePair<TKey, TValue>](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2) resources.

**Overrides**

[PublicDelegatedPrefixesClient.AggregatedListAsync(AggregatedListPublicDelegatedPrefixesRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_AggregatedListAsync_Google_Cloud_Compute_V1_AggregatedListPublicDelegatedPrefixesRequest_Google_Api_Gax_Grpc_CallSettings_)

### Announce(AnnouncePublicDelegatedPrefixeRequest, CallSettings)

```
public override Operation<Operation, Operation> Announce(AnnouncePublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Announces the specified PublicDelegatedPrefix in the given region.

**Parameters**

**Name**

**Description**

`request`

`[AnnouncePublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.AnnouncePublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.Announce(AnnouncePublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Announce_Google_Cloud_Compute_V1_AnnouncePublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### AnnounceAsync(AnnouncePublicDelegatedPrefixeRequest, CallSettings)

```
public override Task<Operation<Operation, Operation>> AnnounceAsync(AnnouncePublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Announces the specified PublicDelegatedPrefix in the given region.

**Parameters**

**Name**

**Description**

`request`

`[AnnouncePublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.AnnouncePublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.AnnounceAsync(AnnouncePublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_AnnounceAsync_Google_Cloud_Compute_V1_AnnouncePublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### Delete(DeletePublicDelegatedPrefixeRequest, CallSettings)

```
public override Operation<Operation, Operation> Delete(DeletePublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Deletes the specified PublicDelegatedPrefix in the given region.

**Parameters**

**Name**

**Description**

`request`

`[DeletePublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.DeletePublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.Delete(DeletePublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Delete_Google_Cloud_Compute_V1_DeletePublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### DeleteAsync(DeletePublicDelegatedPrefixeRequest, CallSettings)

```
public override Task<Operation<Operation, Operation>> DeleteAsync(DeletePublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Deletes the specified PublicDelegatedPrefix in the given region.

**Parameters**

**Name**

**Description**

`request`

`[DeletePublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.DeletePublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.DeleteAsync(DeletePublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_DeleteAsync_Google_Cloud_Compute_V1_DeletePublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### Get(GetPublicDelegatedPrefixeRequest, CallSettings)

```
public override PublicDelegatedPrefix Get(GetPublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Returns the specified PublicDelegatedPrefix resource in the given region.

**Parameters**

**Name**

**Description**

`request`

`[GetPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.GetPublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PublicDelegatedPrefix](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefix)`

The RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.Get(GetPublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Get_Google_Cloud_Compute_V1_GetPublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### GetAsync(GetPublicDelegatedPrefixeRequest, CallSettings)

```
public override Task<PublicDelegatedPrefix> GetAsync(GetPublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Returns the specified PublicDelegatedPrefix resource in the given region.

**Parameters**

**Name**

**Description**

`request`

`[GetPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.GetPublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[PublicDelegatedPrefix](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefix)`

A Task containing the RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.GetAsync(GetPublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_GetAsync_Google_Cloud_Compute_V1_GetPublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### Insert(InsertPublicDelegatedPrefixeRequest, CallSettings)

```
public override Operation<Operation, Operation> Insert(InsertPublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.InsertPublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.Insert(InsertPublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Insert_Google_Cloud_Compute_V1_InsertPublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### InsertAsync(InsertPublicDelegatedPrefixeRequest, CallSettings)

```
public override Task<Operation<Operation, Operation>> InsertAsync(InsertPublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.

**Parameters**

**Name**

**Description**

`request`

`[InsertPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.InsertPublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.InsertAsync(InsertPublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_InsertAsync_Google_Cloud_Compute_V1_InsertPublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### List(ListPublicDelegatedPrefixesRequest, CallSettings)

```
public override PagedEnumerable<PublicDelegatedPrefixList, PublicDelegatedPrefix> List(ListPublicDelegatedPrefixesRequest request, CallSettings callSettings = null)
```

Lists the PublicDelegatedPrefixes for a project in the given region.

**Parameters**

**Name**

**Description**

`request`

`[ListPublicDelegatedPrefixesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.ListPublicDelegatedPrefixesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedEnumerable.cs)[PublicDelegatedPrefixList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixList)[PublicDelegatedPrefix](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefix)`

A pageable sequence of [PublicDelegatedPrefix](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefix) resources.

**Overrides**

[PublicDelegatedPrefixesClient.List(ListPublicDelegatedPrefixesRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_List_Google_Cloud_Compute_V1_ListPublicDelegatedPrefixesRequest_Google_Api_Gax_Grpc_CallSettings_)

### ListAsync(ListPublicDelegatedPrefixesRequest, CallSettings)

```
public override PagedAsyncEnumerable<PublicDelegatedPrefixList, PublicDelegatedPrefix> ListAsync(ListPublicDelegatedPrefixesRequest request, CallSettings callSettings = null)
```

Lists the PublicDelegatedPrefixes for a project in the given region.

**Parameters**

**Name**

**Description**

`request`

`[ListPublicDelegatedPrefixesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.ListPublicDelegatedPrefixesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/PagedAsyncEnumerable.cs)[PublicDelegatedPrefixList](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixList)[PublicDelegatedPrefix](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefix)`

A pageable asynchronous sequence of [PublicDelegatedPrefix](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefix) resources.

**Overrides**

[PublicDelegatedPrefixesClient.ListAsync(ListPublicDelegatedPrefixesRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_ListAsync_Google_Cloud_Compute_V1_ListPublicDelegatedPrefixesRequest_Google_Api_Gax_Grpc_CallSettings_)

### Patch(PatchPublicDelegatedPrefixeRequest, CallSettings)

```
public override Operation<Operation, Operation> Patch(PatchPublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PatchPublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.Patch(PatchPublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Patch_Google_Cloud_Compute_V1_PatchPublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### PatchAsync(PatchPublicDelegatedPrefixeRequest, CallSettings)

```
public override Task<Operation<Operation, Operation>> PatchAsync(PatchPublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

**Parameters**

**Name**

**Description**

`request`

`[PatchPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PatchPublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.PatchAsync(PatchPublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_PatchAsync_Google_Cloud_Compute_V1_PatchPublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### Withdraw(WithdrawPublicDelegatedPrefixeRequest, CallSettings)

```
public override Operation<Operation, Operation> Withdraw(WithdrawPublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Withdraws the specified PublicDelegatedPrefix in the given region.

**Parameters**

**Name**

**Description**

`request`

`[WithdrawPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.WithdrawPublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

The RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.Withdraw(WithdrawPublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_Withdraw_Google_Cloud_Compute_V1_WithdrawPublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

### WithdrawAsync(WithdrawPublicDelegatedPrefixeRequest, CallSettings)

```
public override Task<Operation<Operation, Operation>> WithdrawAsync(WithdrawPublicDelegatedPrefixeRequest request, CallSettings callSettings = null)
```

Withdraws the specified PublicDelegatedPrefix in the given region.

**Parameters**

**Name**

**Description**

`request`

`[WithdrawPublicDelegatedPrefixeRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.WithdrawPublicDelegatedPrefixeRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/CallSettings.cs)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[Operation](https://github.com/googleapis/google-cloud-dotnet/blob/0ffa967cca28eba0702107cea415716a4a1f0be8/apis/Google.LongRunning/Google.LongRunning/Operation.cs)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)[Operation](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.Operation)`

A Task containing the RPC response.

**Overrides**

[PublicDelegatedPrefixesClient.WithdrawAsync(WithdrawPublicDelegatedPrefixeRequest, CallSettings)](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.14.0/Google.Cloud.Compute.V1.PublicDelegatedPrefixesClient#Google_Cloud_Compute_V1_PublicDelegatedPrefixesClient_WithdrawAsync_Google_Cloud_Compute_V1_WithdrawPublicDelegatedPrefixeRequest_Google_Api_Gax_Grpc_CallSettings_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
