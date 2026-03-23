-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# BigQuery Migration v2 API - Class TypedValue (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/latest/Google.Cloud.BigQuery.Migration.V2.TypedValue)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.5.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.4.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.3.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.2.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.1.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.0.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)

```
public sealed class TypedValue : IMessage<TypedValue>, IEquatable<TypedValue>, IDeepCloneable<TypedValue>, IBufferMessage, IMessage
```

Reference documentation and code samples for the BigQuery Migration v2 API class TypedValue.

A single strongly-typed value.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> TypedValue

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[TypedValue](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.0.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[TypedValue](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.0.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[TypedValue](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.0.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.BigQuery.Migration.V2](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.0.0/Google.Cloud.BigQuery.Migration.V2)

## Assembly

Google.Cloud.BigQuery.Migration.V2.dll

## Constructors

### TypedValue()

```
public TypedValue()
```

### TypedValue(TypedValue)

```
public TypedValue(TypedValue other)
```

**Parameter**

**Name**

**Description**

`other`

`[TypedValue](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.0.0/Google.Cloud.BigQuery.Migration.V2.TypedValue)`  

## Properties

### BoolValue

```
public bool BoolValue { get; set; }
```

A Boolean value: `true` or `false`.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### DistributionValue

```
public Distribution DistributionValue { get; set; }
```

A distribution value.

**Property Value**

**Type**

**Description**

`[Distribution](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Api.Distribution.html)`

### DoubleValue

```
public double DoubleValue { get; set; }
```

A 64-bit double-precision floating-point number. Its magnitude is approximately `+/-10^(+/-300)` and it has 16 significant digits of precision.

**Property Value**

**Type**

**Description**

`[Double](https://learn.microsoft.com/dotnet/api/system.double)`

### Int64Value

```
public long Int64Value { get; set; }
```

A 64-bit integer. Its range is approximately `+/-9.2x10^18`.

**Property Value**

**Type**

**Description**

`[Int64](https://learn.microsoft.com/dotnet/api/system.int64)`

### StringValue

```
public string StringValue { get; set; }
```

A variable-length string value.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ValueCase

```
public TypedValue.ValueOneofCase ValueCase { get; }
```

**Property Value**

**Type**

**Description**

`[TypedValue.ValueOneofCase](/dotnet/docs/reference/Google.Cloud.BigQuery.Migration.V2/1.0.0/Google.Cloud.BigQuery.Migration.V2.TypedValue.ValueOneofCase)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
