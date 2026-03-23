-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListModelsRequest (2.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.2.0keyboard\_arrow\_down

-   [3.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.AutoML.V1/latest/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/3.4.0/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/3.3.0/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/3.2.0/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/3.1.0/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/3.0.0/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.6.0/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.5.0/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.4.0/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.3.0/Google.Cloud.AutoML.V1.ListModelsRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.2.0/Google.Cloud.AutoML.V1.ListModelsRequest)

```
public sealed class ListModelsRequest : IPageRequest, IMessage<ListModelsRequest>, IEquatable<ListModelsRequest>, IDeepCloneable<ListModelsRequest>, IBufferMessage, IMessage
```

Request message for \[AutoMl.ListModels\]\[google.cloud.automl.v1.AutoMl.ListModels\].

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListModelsRequest

## Implements

[IPageRequest](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageRequest.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListModelsRequest](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.2.0/Google.Cloud.AutoML.V1.ListModelsRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListModelsRequest](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.2.0/Google.Cloud.AutoML.V1.ListModelsRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListModelsRequest](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.2.0/Google.Cloud.AutoML.V1.ListModelsRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AutoML.V1](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.2.0/Google.Cloud.AutoML.V1)

## Assembly

Google.Cloud.AutoML.V1.dll

## Constructors

### ListModelsRequest()

```
public ListModelsRequest()
```

### ListModelsRequest(ListModelsRequest)

```
public ListModelsRequest(ListModelsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListModelsRequest](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.2.0/Google.Cloud.AutoML.V1.ListModelsRequest)`  

## Properties

### Filter

```
public string Filter { get; set; }
```

An expression for filtering the results of the request.

-   `model_metadata` - for existence of the case (e.g. video\_classification\_model\_metadata:\*).
-   `dataset_id` - for = or !=. Some examples of using the filter are:
    
-   `image_classification_model_metadata:*` --> The model has image\_classification\_model\_metadata.
    
-   `dataset_id=5` --> The model was created from a dataset with ID 5.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### PageSize

```
public int PageSize { get; set; }
```

Requested page size.

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

A token identifying a page of results for the server to return Typically obtained via \[ListModelsResponse.next\_page\_token\]\[google.cloud.automl.v1.ListModelsResponse.next\_page\_token\] of the previous \[AutoMl.ListModels\]\[google.cloud.automl.v1.AutoMl.ListModels\] call.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. Resource name of the project, from which to list the models.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsLocationName

```
public LocationName ParentAsLocationName { get; set; }
```

[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.AutoML.V1/2.2.0/Google.Cloud.AutoML.V1.ListModelsRequest#Google_Cloud_AutoML_V1_ListModelsRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
