-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# DataStream v1 API - Class MysqlProfile (2.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.9.0keyboard\_arrow\_down

-   [2.12.0 (latest)](/dotnet/docs/reference/Google.Cloud.Datastream.V1/latest/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.11.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.10.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.9.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.8.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.7.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.6.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.5.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.4.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.3.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.2.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.1.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.0.0/Google.Cloud.Datastream.V1.MysqlProfile)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Datastream.V1/1.0.0/Google.Cloud.Datastream.V1.MysqlProfile)

```
public sealed class MysqlProfile : IMessage<MysqlProfile>, IEquatable<MysqlProfile>, IDeepCloneable<MysqlProfile>, IBufferMessage, IMessage
```

Reference documentation and code samples for the DataStream v1 API class MysqlProfile.

MySQL database profile. Next ID: 7.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> MysqlProfile

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[MysqlProfile](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.9.0/Google.Cloud.Datastream.V1.MysqlProfile), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[MysqlProfile](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.9.0/Google.Cloud.Datastream.V1.MysqlProfile), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[MysqlProfile](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.9.0/Google.Cloud.Datastream.V1.MysqlProfile), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Datastream.V1](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.9.0/Google.Cloud.Datastream.V1)

## Assembly

Google.Cloud.Datastream.V1.dll

## Constructors

### MysqlProfile()

```
public MysqlProfile()
```

### MysqlProfile(MysqlProfile)

```
public MysqlProfile(MysqlProfile other)
```

**Parameter**

**Name**

**Description**

`other`

`[MysqlProfile](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.9.0/Google.Cloud.Datastream.V1.MysqlProfile)`  

## Properties

### Hostname

```
public string Hostname { get; set; }
```

Required. Hostname for the MySQL connection.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Password

```
public string Password { get; set; }
```

Optional. Input only. Password for the MySQL connection. Mutually exclusive with the `secret_manager_stored_password` field.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Port

```
public int Port { get; set; }
```

Port for the MySQL connection, default value is 3306.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### SslConfig

```
public MysqlSslConfig SslConfig { get; set; }
```

SSL configuration for the MySQL connection.

**Property Value**

**Type**

**Description**

`[MysqlSslConfig](/dotnet/docs/reference/Google.Cloud.Datastream.V1/2.9.0/Google.Cloud.Datastream.V1.MysqlSslConfig)`

### Username

```
public string Username { get; set; }
```

Required. Username for the MySQL connection.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
