-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Vertex AI v1 API - Class DataItem (3.24.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class DataItem : IMessage<DataItem>, IEquatable<DataItem>, IDeepCloneable<DataItem>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Vertex AI v1 API class DataItem.

A piece of data in a Dataset. Could be an image, a video, a document or plain text.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DataItem

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[DataItem](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DataItem), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DataItem](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DataItem), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[DataItem](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DataItem), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### DataItem()

```
public DataItem()
```

### DataItem(DataItem)

```
public DataItem(DataItem other)
```

**Parameter**

**Name**

**Description**

`other`

`[DataItem](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DataItem)`  

## Properties

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. Timestamp when this DataItem was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### DataItemName

```
public DataItemName DataItemName { get; set; }
```

[DataItemName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DataItemName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DataItem#Google_Cloud_AIPlatform_V1_DataItem_Name) resource name property.

**Property Value**

**Type**

**Description**

`[DataItemName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.24.0/Google.Cloud.AIPlatform.V1.DataItemName)`

### Etag

```
public string Etag { get; set; }
```

Optional. Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Labels

```
public MapField<string, string> Labels { get; }
```

Optional. The labels with user-defined metadata to organize your DataItems.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one DataItem(System labels are excluded).

See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information and examples of labels. System reserved label keys are prefixed with "aiplatform.googleapis.com/" and are immutable.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Name

```
public string Name { get; set; }
```

Output only. The resource name of the DataItem.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Payload

```
public Value Payload { get; set; }
```

Required. The data that the DataItem represents (for example, an image or a text snippet). The schema of the payload is stored in the parent Dataset's \[metadata schema's\]\[google.cloud.aiplatform.v1.Dataset.metadata\_schema\_uri\] dataItemSchemaUri field.

**Property Value**

**Type**

**Description**

`[Value](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Value.html)`

### SatisfiesPzi

```
public bool SatisfiesPzi { get; set; }
```

Output only. Reserved for future use.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### SatisfiesPzs

```
public bool SatisfiesPzs { get; set; }
```

Output only. Reserved for future use.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

Output only. Timestamp when this DataItem was last updated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
