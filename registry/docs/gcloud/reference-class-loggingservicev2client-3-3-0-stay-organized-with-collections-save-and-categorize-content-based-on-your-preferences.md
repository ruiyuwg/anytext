-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class LoggingServiceV2Client (3.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.3.0keyboard\_arrow\_down

-   [4.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.Logging.V2/latest/Google.Cloud.Logging.V2.LoggingServiceV2Client)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.4.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.2.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.1.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.0.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.5.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.4.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)

```
public abstract class LoggingServiceV2Client
```

LoggingServiceV2 client wrapper, for convenient use.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> LoggingServiceV2Client

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Derived Types

[LoggingServiceV2ClientImpl](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2ClientImpl)

## Namespace

[Google.Cloud.Logging.V2](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2)

## Assembly

Google.Cloud.Logging.V2.dll

## Remarks

Service for ingesting and querying logs.

## Properties

### DefaultEndpoint

```
public static string DefaultEndpoint { get; }
```

The default endpoint for the LoggingServiceV2 service, which is a host of "logging.googleapis.com" and a port of 443.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### DefaultScopes

```
public static IReadOnlyList<string> DefaultScopes { get; }
```

The default LoggingServiceV2 scopes.

**Property Value**

**Type**

**Description**

`[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

**Remarks**

The default LoggingServiceV2 scopes are:

-   [https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform)
-   [https://www.googleapis.com/auth/cloud-platform.read-only](https://www.googleapis.com/auth/cloud-platform.read-only)
-   [https://www.googleapis.com/auth/logging.admin](https://www.googleapis.com/auth/logging.admin)
-   [https://www.googleapis.com/auth/logging.read](https://www.googleapis.com/auth/logging.read)
-   [https://www.googleapis.com/auth/logging.write](https://www.googleapis.com/auth/logging.write)

### GrpcClient

```
public virtual LoggingServiceV2.LoggingServiceV2Client GrpcClient { get; }
```

The underlying gRPC LoggingServiceV2 client

**Property Value**

**Type**

**Description**

`[LoggingServiceV2.LoggingServiceV2Client](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2.LoggingServiceV2Client)`

## Methods

### Create()

```
public static LoggingServiceV2Client Create()
```

Synchronously creates a [LoggingServiceV2Client](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [LoggingServiceV2ClientBuilder](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2ClientBuilder).

**Returns**

**Type**

**Description**

`[LoggingServiceV2Client](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)`

The created [LoggingServiceV2Client](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client).

### CreateAsync(CancellationToken)

```
public static Task<LoggingServiceV2Client> CreateAsync(CancellationToken cancellationToken = default(CancellationToken))
```

Asynchronously creates a [LoggingServiceV2Client](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client) using the default credentials, endpoint and settings. To specify custom credentials or other settings, use [LoggingServiceV2ClientBuilder](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2ClientBuilder).

**Parameter**

**Name**

**Description**

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

The [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use while creating the client.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[LoggingServiceV2Client](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client)>`

The task representing the created [LoggingServiceV2Client](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client).

### DeleteLog(DeleteLogRequest, CallSettings)

```
public virtual void DeleteLog(DeleteLogRequest request, CallSettings callSettings = null)
```

Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteLogRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.DeleteLogRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
DeleteLogRequest request = new DeleteLogRequest
{
    LogNameAsLogName = LogName.FromProjectLog("[PROJECT]", "[LOG]"),
};
// Make the request
loggingServiceV2Client.DeleteLog(request);
```

### DeleteLog(LogName, CallSettings)

```
public virtual void DeleteLog(LogName logName, CallSettings callSettings = null)
```

Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

**Parameters**

**Name**

**Description**

`logName`

`[LogName](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogName)`  

Required. The resource name of the log to delete:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example, `&quot;projects/my-project-id/logs/syslog&quot;`, `&quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;`. For more information about log names, see \[LogEntry\]\[google.logging.v2.LogEntry\].

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
LogName logName = LogName.FromProjectLog("[PROJECT]", "[LOG]");
// Make the request
loggingServiceV2Client.DeleteLog(logName);
```

### DeleteLog(String, CallSettings)

```
public virtual void DeleteLog(string logName, CallSettings callSettings = null)
```

Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

**Parameters**

**Name**

**Description**

`logName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the log to delete:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example, `&quot;projects/my-project-id/logs/syslog&quot;`, `&quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;`. For more information about log names, see \[LogEntry\]\[google.logging.v2.LogEntry\].

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
string logName = "projects/[PROJECT]/logs/[LOG]";
// Make the request
loggingServiceV2Client.DeleteLog(logName);
```

### DeleteLogAsync(DeleteLogRequest, CallSettings)

```
public virtual Task DeleteLogAsync(DeleteLogRequest request, CallSettings callSettings = null)
```

Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteLogRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.DeleteLogRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
DeleteLogRequest request = new DeleteLogRequest
{
    LogNameAsLogName = LogName.FromProjectLog("[PROJECT]", "[LOG]"),
};
// Make the request
await loggingServiceV2Client.DeleteLogAsync(request);
```

### DeleteLogAsync(DeleteLogRequest, CancellationToken)

```
public virtual Task DeleteLogAsync(DeleteLogRequest request, CancellationToken cancellationToken)
```

Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

**Parameters**

**Name**

**Description**

`request`

`[DeleteLogRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.DeleteLogRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
DeleteLogRequest request = new DeleteLogRequest
{
    LogNameAsLogName = LogName.FromProjectLog("[PROJECT]", "[LOG]"),
};
// Make the request
await loggingServiceV2Client.DeleteLogAsync(request);
```

### DeleteLogAsync(LogName, CallSettings)

```
public virtual Task DeleteLogAsync(LogName logName, CallSettings callSettings = null)
```

Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

**Parameters**

**Name**

**Description**

`logName`

`[LogName](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogName)`  

Required. The resource name of the log to delete:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example, `&quot;projects/my-project-id/logs/syslog&quot;`, `&quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;`. For more information about log names, see \[LogEntry\]\[google.logging.v2.LogEntry\].

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
LogName logName = LogName.FromProjectLog("[PROJECT]", "[LOG]");
// Make the request
await loggingServiceV2Client.DeleteLogAsync(logName);
```

### DeleteLogAsync(LogName, CancellationToken)

```
public virtual Task DeleteLogAsync(LogName logName, CancellationToken cancellationToken)
```

Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

**Parameters**

**Name**

**Description**

`logName`

`[LogName](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogName)`  

Required. The resource name of the log to delete:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example, `&quot;projects/my-project-id/logs/syslog&quot;`, `&quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;`. For more information about log names, see \[LogEntry\]\[google.logging.v2.LogEntry\].

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
LogName logName = LogName.FromProjectLog("[PROJECT]", "[LOG]");
// Make the request
await loggingServiceV2Client.DeleteLogAsync(logName);
```

### DeleteLogAsync(String, CallSettings)

```
public virtual Task DeleteLogAsync(string logName, CallSettings callSettings = null)
```

Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

**Parameters**

**Name**

**Description**

`logName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the log to delete:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example, `&quot;projects/my-project-id/logs/syslog&quot;`, `&quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;`. For more information about log names, see \[LogEntry\]\[google.logging.v2.LogEntry\].

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
string logName = "projects/[PROJECT]/logs/[LOG]";
// Make the request
await loggingServiceV2Client.DeleteLogAsync(logName);
```

### DeleteLogAsync(String, CancellationToken)

```
public virtual Task DeleteLogAsync(string logName, CancellationToken cancellationToken)
```

Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

**Parameters**

**Name**

**Description**

`logName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name of the log to delete:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example, `&quot;projects/my-project-id/logs/syslog&quot;`, `&quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;`. For more information about log names, see \[LogEntry\]\[google.logging.v2.LogEntry\].

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
string logName = "projects/[PROJECT]/logs/[LOG]";
// Make the request
await loggingServiceV2Client.DeleteLogAsync(logName);
```

### ListLogEntries(ListLogEntriesRequest, CallSettings)

```
public virtual PagedEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntries(ListLogEntriesRequest request, CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`request`

`[ListLogEntriesRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
ListLogEntriesRequest request = new ListLogEntriesRequest
{
    Filter = "",
    OrderBy = "",
    ResourceNamesAsProjectNames =
    {
        ProjectName.FromProject("[PROJECT]"),
    },
};
// Make the request
PagedEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntries(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (LogEntry item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogEntriesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntries(IEnumerable<BillingAccountName>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntries(IEnumerable<BillingAccountName> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[BillingAccountName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.BillingAccountName.html)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
IEnumerable<BillingAccountName> resourceNames = new BillingAccountName[]
{
    BillingAccountName.FromBillingAccount("[BILLING_ACCOUNT]"),
};
string filter = "";
string orderBy = "";
// Make the request
PagedEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntries(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
foreach (LogEntry item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogEntriesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntries(IEnumerable<FolderName>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntries(IEnumerable<FolderName> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[FolderName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.FolderName.html)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
IEnumerable<FolderName> resourceNames = new FolderName[]
{
    FolderName.FromFolder("[FOLDER]"),
};
string filter = "";
string orderBy = "";
// Make the request
PagedEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntries(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
foreach (LogEntry item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogEntriesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntries(IEnumerable<OrganizationName>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntries(IEnumerable<OrganizationName> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[OrganizationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.OrganizationName.html)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
IEnumerable<OrganizationName> resourceNames = new OrganizationName[]
{
    OrganizationName.FromOrganization("[ORGANIZATION]"),
};
string filter = "";
string orderBy = "";
// Make the request
PagedEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntries(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
foreach (LogEntry item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogEntriesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntries(IEnumerable<ProjectName>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntries(IEnumerable<ProjectName> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
IEnumerable<ProjectName> resourceNames = new ProjectName[]
{
    ProjectName.FromProject("[PROJECT]"),
};
string filter = "";
string orderBy = "";
// Make the request
PagedEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntries(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
foreach (LogEntry item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogEntriesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntries(IEnumerable<String>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntries(IEnumerable<string> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
IEnumerable<string> resourceNames = new string[]
{
    "projects/[PROJECT]",
};
string filter = "";
string orderBy = "";
// Make the request
PagedEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntries(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
foreach (LogEntry item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogEntriesResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntriesAsync(ListLogEntriesRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntriesAsync(ListLogEntriesRequest request, CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`request`

`[ListLogEntriesRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable asynchronous sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
ListLogEntriesRequest request = new ListLogEntriesRequest
{
    Filter = "",
    OrderBy = "",
    ResourceNamesAsProjectNames =
    {
        ProjectName.FromProject("[PROJECT]"),
    },
};
// Make the request
PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntriesAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((LogEntry item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogEntriesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntriesAsync(IEnumerable<BillingAccountName>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntriesAsync(IEnumerable<BillingAccountName> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[BillingAccountName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.BillingAccountName.html)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable asynchronous sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
IEnumerable<BillingAccountName> resourceNames = new BillingAccountName[]
{
    BillingAccountName.FromBillingAccount("[BILLING_ACCOUNT]"),
};
string filter = "";
string orderBy = "";
// Make the request
PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntriesAsync(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((LogEntry item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogEntriesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntriesAsync(IEnumerable<FolderName>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntriesAsync(IEnumerable<FolderName> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[FolderName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.FolderName.html)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable asynchronous sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
IEnumerable<FolderName> resourceNames = new FolderName[]
{
    FolderName.FromFolder("[FOLDER]"),
};
string filter = "";
string orderBy = "";
// Make the request
PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntriesAsync(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((LogEntry item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogEntriesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntriesAsync(IEnumerable<OrganizationName>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntriesAsync(IEnumerable<OrganizationName> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[OrganizationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.OrganizationName.html)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable asynchronous sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
IEnumerable<OrganizationName> resourceNames = new OrganizationName[]
{
    OrganizationName.FromOrganization("[ORGANIZATION]"),
};
string filter = "";
string orderBy = "";
// Make the request
PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntriesAsync(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((LogEntry item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogEntriesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntriesAsync(IEnumerable<ProjectName>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntriesAsync(IEnumerable<ProjectName> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable asynchronous sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
IEnumerable<ProjectName> resourceNames = new ProjectName[]
{
    ProjectName.FromProject("[PROJECT]"),
};
string filter = "";
string orderBy = "";
// Make the request
PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntriesAsync(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((LogEntry item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogEntriesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogEntriesAsync(IEnumerable<String>, String, String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> ListLogEntriesAsync(IEnumerable<string> resourceNames, string filter, string orderBy, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see [Exporting Logs](https://cloud.google.com/logging/docs/export).

**Parameters**

**Name**

**Description**

`resourceNames`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`  

Required. Names of one or more parent resources from which to retrieve log entries:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

May alternatively be one or more views projects/\[PROJECT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] organization/\[ORGANIZATION\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] billingAccounts/\[BILLING\_ACCOUNT\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\] folders/\[FOLDER\_ID\]/locations/\[LOCATION\_ID\]/buckets/\[BUCKET\_ID\]/views/\[VIEW\_ID\]

Projects listed in the `project_ids` field are added to this list.

`filter`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in `resource_names`. Referencing a parent resource that is not listed in `resource_names` will cause the filter to return no results. The maximum length of the filter is 20000 characters.

`orderBy`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. How the results should be sorted. Presently, the only permitted values are `&quot;timestamp asc&quot;` (default) and `&quot;timestamp desc&quot;`. The first option returns entries in order of increasing values of `LogEntry.timestamp` (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their `insert_id` values.

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogEntriesResponse), [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`

A pageable asynchronous sequence of [LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
IEnumerable<string> resourceNames = new string[]
{
    "projects/[PROJECT]",
};
string filter = "";
string orderBy = "";
// Make the request
PagedAsyncEnumerable<ListLogEntriesResponse, LogEntry> response = loggingServiceV2Client.ListLogEntriesAsync(resourceNames, filter, orderBy);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((LogEntry item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogEntriesResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (LogEntry item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<LogEntry> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (LogEntry item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogs(BillingAccountName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogsResponse, string> ListLogs(BillingAccountName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[BillingAccountName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.BillingAccountName.html)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
BillingAccountName parent = BillingAccountName.FromBillingAccount("[BILLING_ACCOUNT]");
// Make the request
PagedEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (string item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogs(FolderName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogsResponse, string> ListLogs(FolderName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[FolderName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.FolderName.html)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
FolderName parent = FolderName.FromFolder("[FOLDER]");
// Make the request
PagedEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (string item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogs(OrganizationName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogsResponse, string> ListLogs(OrganizationName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.OrganizationName.html)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
OrganizationName parent = OrganizationName.FromOrganization("[ORGANIZATION]");
// Make the request
PagedEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (string item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogs(ProjectName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogsResponse, string> ListLogs(ProjectName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
ProjectName parent = ProjectName.FromProject("[PROJECT]");
// Make the request
PagedEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (string item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogs(ListLogsRequest, CallSettings)

```
public virtual PagedEnumerable<ListLogsResponse, string> ListLogs(ListLogsRequest request, CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`request`

`[ListLogsRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
ListLogsRequest request = new ListLogsRequest
{
    ParentAsProjectName = ProjectName.FromProject("[PROJECT]"),
    ResourceNames = { "", },
};
// Make the request
PagedEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogs(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (string item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogs(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedEnumerable<ListLogsResponse, string> ListLogs(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
string parent = "projects/[PROJECT]";
// Make the request
PagedEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogs(parent);

// Iterate over all response items, lazily performing RPCs as required
foreach (string item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListLogsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogsAsync(BillingAccountName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogsResponse, string> ListLogsAsync(BillingAccountName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[BillingAccountName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.BillingAccountName.html)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable asynchronous sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
BillingAccountName parent = BillingAccountName.FromBillingAccount("[BILLING_ACCOUNT]");
// Make the request
PagedAsyncEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((string item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogsAsync(FolderName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogsResponse, string> ListLogsAsync(FolderName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[FolderName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.FolderName.html)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable asynchronous sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
FolderName parent = FolderName.FromFolder("[FOLDER]");
// Make the request
PagedAsyncEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((string item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogsAsync(OrganizationName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogsResponse, string> ListLogsAsync(OrganizationName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[OrganizationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.OrganizationName.html)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable asynchronous sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
OrganizationName parent = OrganizationName.FromOrganization("[ORGANIZATION]");
// Make the request
PagedAsyncEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((string item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogsAsync(ProjectName, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogsResponse, string> ListLogsAsync(ProjectName parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable asynchronous sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
ProjectName parent = ProjectName.FromProject("[PROJECT]");
// Make the request
PagedAsyncEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((string item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogsAsync(ListLogsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogsResponse, string> ListLogsAsync(ListLogsRequest request, CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`request`

`[ListLogsRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable asynchronous sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
ListLogsRequest request = new ListLogsRequest
{
    ParentAsProjectName = ProjectName.FromProject("[PROJECT]"),
    ResourceNames = { "", },
};
// Make the request
PagedAsyncEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((string item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListLogsAsync(String, String, Nullable<Int32>, CallSettings)

```
public virtual PagedAsyncEnumerable<ListLogsResponse, string> ListLogsAsync(string parent, string pageToken = null, int? pageSize = default(int? ), CallSettings callSettings = null)
```

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

**Parameters**

**Name**

**Description**

`parent`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Required. The resource name that owns the logs:

"projects/\[PROJECT\_ID\]" "organizations/\[ORGANIZATION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]" "folders/\[FOLDER\_ID\]"

`pageToken`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

The token returned from the previous request. A value of `null` or an empty string retrieves the first page.

`pageSize`

`[Nullable](https://learn.microsoft.com/dotnet/api/system.nullable-1)<[Int32](https://learn.microsoft.com/dotnet/api/system.int32)>`  

The size of page to request. The response will not be larger than this, but may be smaller. A value of `null` or `0` uses a server-defined page size.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListLogsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListLogsResponse), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

A pageable asynchronous sequence of [String](https://learn.microsoft.com/dotnet/api/system.string) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
string parent = "projects/[PROJECT]";
// Make the request
PagedAsyncEnumerable<ListLogsResponse, string> response = loggingServiceV2Client.ListLogsAsync(parent);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((string item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListLogsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (string item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<string> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (string item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListMonitoredResourceDescriptors(ListMonitoredResourceDescriptorsRequest, CallSettings)

```
public virtual PagedEnumerable<ListMonitoredResourceDescriptorsResponse, MonitoredResourceDescriptor> ListMonitoredResourceDescriptors(ListMonitoredResourceDescriptorsRequest request, CallSettings callSettings = null)
```

Lists the descriptors for monitored resource types used by Logging.

**Parameters**

**Name**

**Description**

`request`

`[ListMonitoredResourceDescriptorsRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListMonitoredResourceDescriptorsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedEnumerable-2.html)<[ListMonitoredResourceDescriptorsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListMonitoredResourceDescriptorsResponse), [MonitoredResourceDescriptor](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResourceDescriptor.html)>`

A pageable sequence of [MonitoredResourceDescriptor](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResourceDescriptor.html) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
ListMonitoredResourceDescriptorsRequest request = new ListMonitoredResourceDescriptorsRequest { };
// Make the request
PagedEnumerable<ListMonitoredResourceDescriptorsResponse, MonitoredResourceDescriptor> response = loggingServiceV2Client.ListMonitoredResourceDescriptors(request);

// Iterate over all response items, lazily performing RPCs as required
foreach (MonitoredResourceDescriptor item in response)
{
    // Do something with each item
    Console.WriteLine(item);
}

// Or iterate over pages (of server-defined size), performing one RPC per page
foreach (ListMonitoredResourceDescriptorsResponse page in response.AsRawResponses())
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (MonitoredResourceDescriptor item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
}

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<MonitoredResourceDescriptor> singlePage = response.ReadPage(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (MonitoredResourceDescriptor item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ListMonitoredResourceDescriptorsAsync(ListMonitoredResourceDescriptorsRequest, CallSettings)

```
public virtual PagedAsyncEnumerable<ListMonitoredResourceDescriptorsResponse, MonitoredResourceDescriptor> ListMonitoredResourceDescriptorsAsync(ListMonitoredResourceDescriptorsRequest request, CallSettings callSettings = null)
```

Lists the descriptors for monitored resource types used by Logging.

**Parameters**

**Name**

**Description**

`request`

`[ListMonitoredResourceDescriptorsRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListMonitoredResourceDescriptorsRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[PagedAsyncEnumerable](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PagedAsyncEnumerable-2.html)<[ListMonitoredResourceDescriptorsResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.ListMonitoredResourceDescriptorsResponse), [MonitoredResourceDescriptor](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResourceDescriptor.html)>`

A pageable asynchronous sequence of [MonitoredResourceDescriptor](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResourceDescriptor.html) resources.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
ListMonitoredResourceDescriptorsRequest request = new ListMonitoredResourceDescriptorsRequest { };
// Make the request
PagedAsyncEnumerable<ListMonitoredResourceDescriptorsResponse, MonitoredResourceDescriptor> response = loggingServiceV2Client.ListMonitoredResourceDescriptorsAsync(request);

// Iterate over all response items, lazily performing RPCs as required
await response.ForEachAsync((MonitoredResourceDescriptor item) =>
{
    // Do something with each item
    Console.WriteLine(item);
});

// Or iterate over pages (of server-defined size), performing one RPC per page
await response.AsRawResponses().ForEachAsync((ListMonitoredResourceDescriptorsResponse page) =>
{
    // Do something with each page of items
    Console.WriteLine("A page of results:");
    foreach (MonitoredResourceDescriptor item in page)
    {
        // Do something with each item
        Console.WriteLine(item);
    }
});

// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10;
Page<MonitoredResourceDescriptor> singlePage = await response.ReadPageAsync(pageSize);
// Do something with the page of items
Console.WriteLine($"A page of {pageSize} results (unless it's the final page):");
foreach (MonitoredResourceDescriptor item in singlePage)
{
    // Do something with each item
    Console.WriteLine(item);
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage.NextPageToken;
```

### ShutdownDefaultChannelsAsync()

```
public static Task ShutdownDefaultChannelsAsync()
```

Shuts down any channels automatically created by [Create()](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client#Google_Cloud_Logging_V2_LoggingServiceV2Client_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client#Google_Cloud_Logging_V2_LoggingServiceV2Client_CreateAsync_System_Threading_CancellationToken_). Channels which weren't automatically created are not affected.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)`

A task representing the asynchronous shutdown operation.

**Remarks**

After calling this method, further calls to [Create()](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client#Google_Cloud_Logging_V2_LoggingServiceV2Client_Create) and [CreateAsync(CancellationToken)](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client#Google_Cloud_Logging_V2_LoggingServiceV2Client_CreateAsync_System_Threading_CancellationToken_) will create new channels, which could in turn be shut down by another call to this method.

### TailLogEntries(CallSettings, BidirectionalStreamingSettings)

```
public virtual LoggingServiceV2Client.TailLogEntriesStream TailLogEntries(CallSettings callSettings = null, BidirectionalStreamingSettings streamingSettings = null)
```

Streaming read of log entries as they are ingested. Until the stream is terminated, it will continue reading logs.

**Parameters**

**Name**

**Description**

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

`streamingSettings`

`[BidirectionalStreamingSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.BidirectionalStreamingSettings.html)`  

If not null, applies streaming overrides to this RPC call.

**Returns**

**Type**

**Description**

`[LoggingServiceV2Client.TailLogEntriesStream](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LoggingServiceV2Client.TailLogEntriesStream)`

The client-server stream.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize streaming call, retrieving the stream object
LoggingServiceV2Client.TailLogEntriesStream response = loggingServiceV2Client.TailLogEntries();

// Sending requests and retrieving responses can be arbitrarily interleaved
// Exact sequence will depend on client/server behavior

// Create task to do something with responses from server
Task responseHandlerTask = Task.Run(async () =>
{
    // Note that C# 8 code can use await foreach
    AsyncResponseStream<TailLogEntriesResponse> responseStream = response.GetResponseStream();
    while (await responseStream.MoveNextAsync())
    {
        TailLogEntriesResponse responseItem = responseStream.Current;
        // Do something with streamed response
    }
    // The response stream has completed
});

// Send requests to the server
bool done = false;
while (!done)
{
    // Initialize a request
    TailLogEntriesRequest request = new TailLogEntriesRequest
    {
        ResourceNames = { "", },
        Filter = "",
        BufferWindow = new Duration(),
    };
    // Stream a request to the server
    await response.WriteAsync(request);
    // Set "done" to true when sending requests is complete
}

// Complete writing requests to the stream
await response.WriteCompleteAsync();
// Await the response handler
// This will complete once all server responses have been processed
await responseHandlerTask;
```

### WriteLogEntries(LogName, MonitoredResource, IDictionary<String, String>, IEnumerable<LogEntry>, CallSettings)

```
public virtual WriteLogEntriesResponse WriteLogEntries(LogName logName, MonitoredResource resource, IDictionary<string, string> labels, IEnumerable<LogEntry> entries, CallSettings callSettings = null)
```

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

**Parameters**

**Name**

**Description**

`logName`

`[LogName](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogName)`  

Optional. A default log resource name that is assigned to all log entries in `entries` that do not specify a value for `log_name`:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example:

"projects/my-project-id/logs/syslog" "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"

The permission `logging.logEntries.create` is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in `logName` or in an individual log entry.

`resource`

`[MonitoredResource](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResource.html)`  

Optional. A default monitored resource object that is assigned to all log entries in `entries` that do not specify a value for `resource`. Example:

{ "type": "gce\_instance", "labels": { "zone": "us-central1-a", "instance\_id": "00000000000000000000" }}

See \[LogEntry\]\[google.logging.v2.LogEntry\].

`labels`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`  

Optional. Default labels that are added to the `labels` field of all log entries in `entries`. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See \[LogEntry\]\[google.logging.v2.LogEntry\].

`entries`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`  

Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's `log_name`, `resource`, and `labels` fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the \[LogEntry\]\[google.logging.v2.LogEntry\] type.

If the `timestamp` or `insert_id` fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the `entries.list` method.

Log entries with timestamps that are more than the [logs retention period](https://cloud.google.com/logging/quota-policy) in the past or more than 24 hours in the future will not be available when calling `entries.list`. However, those log entries can still be [exported with LogSinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).

To improve throughput and to avoid exceeding the [quota limit](https://cloud.google.com/logging/quota-policy) for calls to `entries.write`, you should try to include several log entries in this list, rather than calling this method for each individual log entry.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[WriteLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesResponse)`

The RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
LogName logName = LogName.FromProjectLog("[PROJECT]", "[LOG]");
MonitoredResource resource = new MonitoredResource();
IDictionary<string, string> labels = new Dictionary<string, string> { { "", "" }, };
IEnumerable<LogEntry> entries = new LogEntry[] { new LogEntry(), };
// Make the request
WriteLogEntriesResponse response = loggingServiceV2Client.WriteLogEntries(logName, resource, labels, entries);
```

### WriteLogEntries(WriteLogEntriesRequest, CallSettings)

```
public virtual WriteLogEntriesResponse WriteLogEntries(WriteLogEntriesRequest request, CallSettings callSettings = null)
```

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

**Parameters**

**Name**

**Description**

`request`

`[WriteLogEntriesRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[WriteLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesResponse)`

The RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
WriteLogEntriesRequest request = new WriteLogEntriesRequest
{
    LogNameAsLogName = LogName.FromProjectLog("[PROJECT]", "[LOG]"),
    Resource = new MonitoredResource(),
    Labels = { { "", "" }, },
    Entries = { new LogEntry(), },
    PartialSuccess = false,
    DryRun = false,
};
// Make the request
WriteLogEntriesResponse response = loggingServiceV2Client.WriteLogEntries(request);
```

### WriteLogEntries(String, MonitoredResource, IDictionary<String, String>, IEnumerable<LogEntry>, CallSettings)

```
public virtual WriteLogEntriesResponse WriteLogEntries(string logName, MonitoredResource resource, IDictionary<string, string> labels, IEnumerable<LogEntry> entries, CallSettings callSettings = null)
```

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

**Parameters**

**Name**

**Description**

`logName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A default log resource name that is assigned to all log entries in `entries` that do not specify a value for `log_name`:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example:

"projects/my-project-id/logs/syslog" "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"

The permission `logging.logEntries.create` is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in `logName` or in an individual log entry.

`resource`

`[MonitoredResource](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResource.html)`  

Optional. A default monitored resource object that is assigned to all log entries in `entries` that do not specify a value for `resource`. Example:

{ "type": "gce\_instance", "labels": { "zone": "us-central1-a", "instance\_id": "00000000000000000000" }}

See \[LogEntry\]\[google.logging.v2.LogEntry\].

`labels`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`  

Optional. Default labels that are added to the `labels` field of all log entries in `entries`. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See \[LogEntry\]\[google.logging.v2.LogEntry\].

`entries`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`  

Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's `log_name`, `resource`, and `labels` fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the \[LogEntry\]\[google.logging.v2.LogEntry\] type.

If the `timestamp` or `insert_id` fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the `entries.list` method.

Log entries with timestamps that are more than the [logs retention period](https://cloud.google.com/logging/quota-policy) in the past or more than 24 hours in the future will not be available when calling `entries.list`. However, those log entries can still be [exported with LogSinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).

To improve throughput and to avoid exceeding the [quota limit](https://cloud.google.com/logging/quota-policy) for calls to `entries.write`, you should try to include several log entries in this list, rather than calling this method for each individual log entry.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[WriteLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesResponse)`

The RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = LoggingServiceV2Client.Create();
// Initialize request argument(s)
string logName = "projects/[PROJECT]/logs/[LOG]";
MonitoredResource resource = new MonitoredResource();
IDictionary<string, string> labels = new Dictionary<string, string> { { "", "" }, };
IEnumerable<LogEntry> entries = new LogEntry[] { new LogEntry(), };
// Make the request
WriteLogEntriesResponse response = loggingServiceV2Client.WriteLogEntries(logName, resource, labels, entries);
```

### WriteLogEntriesAsync(LogName, MonitoredResource, IDictionary<String, String>, IEnumerable<LogEntry>, CallSettings)

```
public virtual Task<WriteLogEntriesResponse> WriteLogEntriesAsync(LogName logName, MonitoredResource resource, IDictionary<string, string> labels, IEnumerable<LogEntry> entries, CallSettings callSettings = null)
```

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

**Parameters**

**Name**

**Description**

`logName`

`[LogName](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogName)`  

Optional. A default log resource name that is assigned to all log entries in `entries` that do not specify a value for `log_name`:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example:

"projects/my-project-id/logs/syslog" "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"

The permission `logging.logEntries.create` is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in `logName` or in an individual log entry.

`resource`

`[MonitoredResource](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResource.html)`  

Optional. A default monitored resource object that is assigned to all log entries in `entries` that do not specify a value for `resource`. Example:

{ "type": "gce\_instance", "labels": { "zone": "us-central1-a", "instance\_id": "00000000000000000000" }}

See \[LogEntry\]\[google.logging.v2.LogEntry\].

`labels`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`  

Optional. Default labels that are added to the `labels` field of all log entries in `entries`. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See \[LogEntry\]\[google.logging.v2.LogEntry\].

`entries`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`  

Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's `log_name`, `resource`, and `labels` fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the \[LogEntry\]\[google.logging.v2.LogEntry\] type.

If the `timestamp` or `insert_id` fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the `entries.list` method.

Log entries with timestamps that are more than the [logs retention period](https://cloud.google.com/logging/quota-policy) in the past or more than 24 hours in the future will not be available when calling `entries.list`. However, those log entries can still be [exported with LogSinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).

To improve throughput and to avoid exceeding the [quota limit](https://cloud.google.com/logging/quota-policy) for calls to `entries.write`, you should try to include several log entries in this list, rather than calling this method for each individual log entry.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[WriteLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
LogName logName = LogName.FromProjectLog("[PROJECT]", "[LOG]");
MonitoredResource resource = new MonitoredResource();
IDictionary<string, string> labels = new Dictionary<string, string> { { "", "" }, };
IEnumerable<LogEntry> entries = new LogEntry[] { new LogEntry(), };
// Make the request
WriteLogEntriesResponse response = await loggingServiceV2Client.WriteLogEntriesAsync(logName, resource, labels, entries);
```

### WriteLogEntriesAsync(LogName, MonitoredResource, IDictionary<String, String>, IEnumerable<LogEntry>, CancellationToken)

```
public virtual Task<WriteLogEntriesResponse> WriteLogEntriesAsync(LogName logName, MonitoredResource resource, IDictionary<string, string> labels, IEnumerable<LogEntry> entries, CancellationToken cancellationToken)
```

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

**Parameters**

**Name**

**Description**

`logName`

`[LogName](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogName)`  

Optional. A default log resource name that is assigned to all log entries in `entries` that do not specify a value for `log_name`:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example:

"projects/my-project-id/logs/syslog" "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"

The permission `logging.logEntries.create` is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in `logName` or in an individual log entry.

`resource`

`[MonitoredResource](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResource.html)`  

Optional. A default monitored resource object that is assigned to all log entries in `entries` that do not specify a value for `resource`. Example:

{ "type": "gce\_instance", "labels": { "zone": "us-central1-a", "instance\_id": "00000000000000000000" }}

See \[LogEntry\]\[google.logging.v2.LogEntry\].

`labels`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`  

Optional. Default labels that are added to the `labels` field of all log entries in `entries`. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See \[LogEntry\]\[google.logging.v2.LogEntry\].

`entries`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`  

Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's `log_name`, `resource`, and `labels` fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the \[LogEntry\]\[google.logging.v2.LogEntry\] type.

If the `timestamp` or `insert_id` fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the `entries.list` method.

Log entries with timestamps that are more than the [logs retention period](https://cloud.google.com/logging/quota-policy) in the past or more than 24 hours in the future will not be available when calling `entries.list`. However, those log entries can still be [exported with LogSinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).

To improve throughput and to avoid exceeding the [quota limit](https://cloud.google.com/logging/quota-policy) for calls to `entries.write`, you should try to include several log entries in this list, rather than calling this method for each individual log entry.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[WriteLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
LogName logName = LogName.FromProjectLog("[PROJECT]", "[LOG]");
MonitoredResource resource = new MonitoredResource();
IDictionary<string, string> labels = new Dictionary<string, string> { { "", "" }, };
IEnumerable<LogEntry> entries = new LogEntry[] { new LogEntry(), };
// Make the request
WriteLogEntriesResponse response = await loggingServiceV2Client.WriteLogEntriesAsync(logName, resource, labels, entries);
```

### WriteLogEntriesAsync(WriteLogEntriesRequest, CallSettings)

```
public virtual Task<WriteLogEntriesResponse> WriteLogEntriesAsync(WriteLogEntriesRequest request, CallSettings callSettings = null)
```

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

**Parameters**

**Name**

**Description**

`request`

`[WriteLogEntriesRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesRequest)`  

The request object containing all of the parameters for the API call.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[WriteLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
WriteLogEntriesRequest request = new WriteLogEntriesRequest
{
    LogNameAsLogName = LogName.FromProjectLog("[PROJECT]", "[LOG]"),
    Resource = new MonitoredResource(),
    Labels = { { "", "" }, },
    Entries = { new LogEntry(), },
    PartialSuccess = false,
    DryRun = false,
};
// Make the request
WriteLogEntriesResponse response = await loggingServiceV2Client.WriteLogEntriesAsync(request);
```

### WriteLogEntriesAsync(WriteLogEntriesRequest, CancellationToken)

```
public virtual Task<WriteLogEntriesResponse> WriteLogEntriesAsync(WriteLogEntriesRequest request, CancellationToken cancellationToken)
```

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

**Parameters**

**Name**

**Description**

`request`

`[WriteLogEntriesRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesRequest)`  

The request object containing all of the parameters for the API call.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[WriteLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
WriteLogEntriesRequest request = new WriteLogEntriesRequest
{
    LogNameAsLogName = LogName.FromProjectLog("[PROJECT]", "[LOG]"),
    Resource = new MonitoredResource(),
    Labels = { { "", "" }, },
    Entries = { new LogEntry(), },
    PartialSuccess = false,
    DryRun = false,
};
// Make the request
WriteLogEntriesResponse response = await loggingServiceV2Client.WriteLogEntriesAsync(request);
```

### WriteLogEntriesAsync(String, MonitoredResource, IDictionary<String, String>, IEnumerable<LogEntry>, CallSettings)

```
public virtual Task<WriteLogEntriesResponse> WriteLogEntriesAsync(string logName, MonitoredResource resource, IDictionary<string, string> labels, IEnumerable<LogEntry> entries, CallSettings callSettings = null)
```

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

**Parameters**

**Name**

**Description**

`logName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A default log resource name that is assigned to all log entries in `entries` that do not specify a value for `log_name`:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example:

"projects/my-project-id/logs/syslog" "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"

The permission `logging.logEntries.create` is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in `logName` or in an individual log entry.

`resource`

`[MonitoredResource](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResource.html)`  

Optional. A default monitored resource object that is assigned to all log entries in `entries` that do not specify a value for `resource`. Example:

{ "type": "gce\_instance", "labels": { "zone": "us-central1-a", "instance\_id": "00000000000000000000" }}

See \[LogEntry\]\[google.logging.v2.LogEntry\].

`labels`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`  

Optional. Default labels that are added to the `labels` field of all log entries in `entries`. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See \[LogEntry\]\[google.logging.v2.LogEntry\].

`entries`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`  

Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's `log_name`, `resource`, and `labels` fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the \[LogEntry\]\[google.logging.v2.LogEntry\] type.

If the `timestamp` or `insert_id` fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the `entries.list` method.

Log entries with timestamps that are more than the [logs retention period](https://cloud.google.com/logging/quota-policy) in the past or more than 24 hours in the future will not be available when calling `entries.list`. However, those log entries can still be [exported with LogSinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).

To improve throughput and to avoid exceeding the [quota limit](https://cloud.google.com/logging/quota-policy) for calls to `entries.write`, you should try to include several log entries in this list, rather than calling this method for each individual log entry.

`callSettings`

`[CallSettings](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.CallSettings.html)`  

If not null, applies overrides to this RPC call.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[WriteLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
string logName = "projects/[PROJECT]/logs/[LOG]";
MonitoredResource resource = new MonitoredResource();
IDictionary<string, string> labels = new Dictionary<string, string> { { "", "" }, };
IEnumerable<LogEntry> entries = new LogEntry[] { new LogEntry(), };
// Make the request
WriteLogEntriesResponse response = await loggingServiceV2Client.WriteLogEntriesAsync(logName, resource, labels, entries);
```

### WriteLogEntriesAsync(String, MonitoredResource, IDictionary<String, String>, IEnumerable<LogEntry>, CancellationToken)

```
public virtual Task<WriteLogEntriesResponse> WriteLogEntriesAsync(string logName, MonitoredResource resource, IDictionary<string, string> labels, IEnumerable<LogEntry> entries, CancellationToken cancellationToken)
```

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

**Parameters**

**Name**

**Description**

`logName`

`[String](https://learn.microsoft.com/dotnet/api/system.string)`  

Optional. A default log resource name that is assigned to all log entries in `entries` that do not specify a value for `log_name`:

"projects/\[PROJECT\_ID\]/logs/\[LOG\_ID\]" "organizations/\[ORGANIZATION\_ID\]/logs/\[LOG\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/logs/\[LOG\_ID\]" "folders/\[FOLDER\_ID\]/logs/\[LOG\_ID\]"

`[LOG_ID]` must be URL-encoded. For example:

"projects/my-project-id/logs/syslog" "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"

The permission `logging.logEntries.create` is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in `logName` or in an individual log entry.

`resource`

`[MonitoredResource](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.MonitoredResource.html)`  

Optional. A default monitored resource object that is assigned to all log entries in `entries` that do not specify a value for `resource`. Example:

{ "type": "gce\_instance", "labels": { "zone": "us-central1-a", "instance\_id": "00000000000000000000" }}

See \[LogEntry\]\[google.logging.v2.LogEntry\].

`labels`

`[IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`  

Optional. Default labels that are added to the `labels` field of all log entries in `entries`. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See \[LogEntry\]\[google.logging.v2.LogEntry\].

`entries`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[LogEntry](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.LogEntry)>`  

Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's `log_name`, `resource`, and `labels` fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the \[LogEntry\]\[google.logging.v2.LogEntry\] type.

If the `timestamp` or `insert_id` fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the `entries.list` method.

Log entries with timestamps that are more than the [logs retention period](https://cloud.google.com/logging/quota-policy) in the past or more than 24 hours in the future will not be available when calling `entries.list`. However, those log entries can still be [exported with LogSinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).

To improve throughput and to avoid exceeding the [quota limit](https://cloud.google.com/logging/quota-policy) for calls to `entries.write`, you should try to include several log entries in this list, rather than calling this method for each individual log entry.

`cancellationToken`

`[CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)`  

A [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken) to use for this RPC.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[WriteLogEntriesResponse](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.WriteLogEntriesResponse)>`

A Task containing the RPC response.

**Example**

```
// Create client
LoggingServiceV2Client loggingServiceV2Client = await LoggingServiceV2Client.CreateAsync();
// Initialize request argument(s)
string logName = "projects/[PROJECT]/logs/[LOG]";
MonitoredResource resource = new MonitoredResource();
IDictionary<string, string> labels = new Dictionary<string, string> { { "", "" }, };
IEnumerable<LogEntry> entries = new LogEntry[] { new LogEntry(), };
// Make the request
WriteLogEntriesResponse response = await loggingServiceV2Client.WriteLogEntriesAsync(logName, resource, labels, entries);
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
