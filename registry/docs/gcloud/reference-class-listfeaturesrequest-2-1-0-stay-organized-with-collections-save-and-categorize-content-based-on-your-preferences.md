-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListFeaturesRequest (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class ListFeaturesRequest : IMessage<ListFeaturesRequest>, IEquatable<ListFeaturesRequest>, IDeepCloneable<ListFeaturesRequest>, IBufferMessage, IMessage, IPageRequest
```

Request message for \[FeaturestoreService.ListFeatures\]\[google.cloud.aiplatform.v1.FeaturestoreService.ListFeatures\].

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListFeaturesRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.1.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.1.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.1.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageRequest](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageRequest.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.1.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### ListFeaturesRequest()

```
public ListFeaturesRequest()
```

### ListFeaturesRequest(ListFeaturesRequest)

```
public ListFeaturesRequest(ListFeaturesRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListFeaturesRequest](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.1.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest)`  

## Properties

### Filter

```
public string Filter { get; set; }
```

Lists the Features that match the filter expression. The following filters are supported:

-   `value_type`: Supports = and != comparisons.
-   `create_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format.
-   `update_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must be in RFC 3339 format.
-   `labels`: Supports key-value equality as well as key presence.

Examples:

-   `value_type = DOUBLE` --> Features whose type is DOUBLE.
-   `create_time > \&quot;2020-01-31T15:30:00.000000Z\&quot; OR update_time > \&quot;2020-01-31T15:30:00.000000Z\&quot;` --> EntityTypes created or updated after 2020-01-31T15:30:00.000000Z.
-   `labels.active = yes AND labels.env = prod` --> Features having both (active: yes) and (env: prod) labels.
-   `labels.env: *` --> Any Feature which has a label with 'env' as the key.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### LatestStatsCount

```
public int LatestStatsCount { get; set; }
```

If set, return the most recent \[ListFeaturesRequest.latest\_stats\_count\]\[google.cloud.aiplatform.v1.ListFeaturesRequest.latest\_stats\_count\] of stats for each Feature in response. Valid value is \[0, 10\]. If number of stats exists < \[ListFeaturesRequest.latest\_stats\_count\]\[google.cloud.aiplatform.v1.ListFeaturesRequest.latest\_stats\_count\], return all existing stats.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### OrderBy

```
public string OrderBy { get; set; }
```

A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields:

-   `feature_id`
-   `value_type`
-   `create_time`
-   `update_time`

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### PageSize

```
public int PageSize { get; set; }
```

The maximum number of Features to return. The service may return fewer than this value. If unspecified, at most 1000 Features will be returned. The maximum value is 1000; any value greater than 1000 will be coerced to 1000.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

A page token, received from a previous \[FeaturestoreService.ListFeatures\]\[google.cloud.aiplatform.v1.FeaturestoreService.ListFeatures\] call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to \[FeaturestoreService.ListFeatures\]\[google.cloud.aiplatform.v1.FeaturestoreService.ListFeatures\] must match the call that provided the page token.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The resource name of the Location to list Features. Format: `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}`

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsEntityTypeName

```
public EntityTypeName ParentAsEntityTypeName { get; set; }
```

[EntityTypeName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.1.0/Google.Cloud.AIPlatform.V1.EntityTypeName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.1.0/Google.Cloud.AIPlatform.V1.ListFeaturesRequest#Google_Cloud_AIPlatform_V1_ListFeaturesRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[EntityTypeName](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/2.1.0/Google.Cloud.AIPlatform.V1.EntityTypeName)`

### ReadMask

```
public FieldMask ReadMask { get; set; }
```

Mask specifying which fields to read.

**Property Value**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.FieldMask.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
