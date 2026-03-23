-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Data Catalog v1 API - Class ModelSpec (2.14.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.14.0keyboard\_arrow\_down

-   [2.17.0 (latest)](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/latest/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.16.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.15.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.13.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.12.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.11.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.10.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.9.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.8.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.7.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.6.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.5.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.4.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.3.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.2.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.1.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.0.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.8.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.7.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.6.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.5.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.4.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.3.0/Google.Cloud.DataCatalog.V1.ModelSpec)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/1.2.0/Google.Cloud.DataCatalog.V1.ModelSpec)

```
public sealed class ModelSpec : IMessage<ModelSpec>, IEquatable<ModelSpec>, IDeepCloneable<ModelSpec>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Data Catalog v1 API class ModelSpec.

Specification that applies to a model. Valid only for entries with the `MODEL` type.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ModelSpec

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ModelSpec](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1.ModelSpec), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ModelSpec](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1.ModelSpec), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ModelSpec](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1.ModelSpec), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.DataCatalog.V1](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1)

## Assembly

Google.Cloud.DataCatalog.V1.dll

## Constructors

### ModelSpec()

```
public ModelSpec()
```

### ModelSpec(ModelSpec)

```
public ModelSpec(ModelSpec other)
```

**Parameter**

**Name**

**Description**

`other`

`[ModelSpec](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1.ModelSpec)`  

## Properties

### SystemSpecCase

```
public ModelSpec.SystemSpecOneofCase SystemSpecCase { get; }
```

**Property Value**

**Type**

**Description**

`[ModelSpec](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1.ModelSpec)[SystemSpecOneofCase](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1.ModelSpec.SystemSpecOneofCase)`

### VertexModelSpec

```
public VertexModelSpec VertexModelSpec { get; set; }
```

Specification for vertex model resources.

**Property Value**

**Type**

**Description**

`[VertexModelSpec](/dotnet/docs/reference/Google.Cloud.DataCatalog.V1/2.14.0/Google.Cloud.DataCatalog.V1.VertexModelSpec)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
