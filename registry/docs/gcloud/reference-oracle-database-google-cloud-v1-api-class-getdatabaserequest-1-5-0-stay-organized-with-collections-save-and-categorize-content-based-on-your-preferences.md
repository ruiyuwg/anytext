-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Oracle Database@Google Cloud v1 API - Class GetDatabaseRequest (1.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/latest/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/1.4.0/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/1.3.0/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/1.2.0/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/1.1.0/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/1.0.0/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest)

```
public sealed class GetDatabaseRequest : IMessage<GetDatabaseRequest>, IEquatable<GetDatabaseRequest>, IDeepCloneable<GetDatabaseRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Oracle Database@Google Cloud v1 API class GetDatabaseRequest.

The request for `Database.Get`.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetDatabaseRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetDatabaseRequest](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/latest/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetDatabaseRequest](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/latest/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetDatabaseRequest](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/latest/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.OracleDatabase.V1](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/latest/Google.Cloud.OracleDatabase.V1)

## Assembly

Google.Cloud.OracleDatabase.V1.dll

## Constructors

### GetDatabaseRequest()

```
public GetDatabaseRequest()
```

### GetDatabaseRequest(GetDatabaseRequest)

```
public GetDatabaseRequest(GetDatabaseRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetDatabaseRequest](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/latest/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest)`  

## Properties

### DatabaseName

```
public DatabaseName DatabaseName { get; set; }
```

[DatabaseName](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/latest/Google.Cloud.OracleDatabase.V1.DatabaseName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/latest/Google.Cloud.OracleDatabase.V1.GetDatabaseRequest#Google_Cloud_OracleDatabase_V1_GetDatabaseRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[DatabaseName](/dotnet/docs/reference/Google.Cloud.OracleDatabase.V1/latest/Google.Cloud.OracleDatabase.V1.DatabaseName)`

### Name

```
public string Name { get; set; }
```

Required. The name of the Database resource in the following format: projects/{project}/locations/{region}/databases/{database}

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
