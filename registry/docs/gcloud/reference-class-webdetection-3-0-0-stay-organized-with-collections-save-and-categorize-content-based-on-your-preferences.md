-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class WebDetection (3.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.0.0keyboard\_arrow\_down

-   [3.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Vision.V1/latest/Google.Cloud.Vision.V1.WebDetection)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.7.0/Google.Cloud.Vision.V1.WebDetection)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.6.0/Google.Cloud.Vision.V1.WebDetection)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.5.0/Google.Cloud.Vision.V1.WebDetection)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.4.0/Google.Cloud.Vision.V1.WebDetection)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.3.0/Google.Cloud.Vision.V1.WebDetection)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.2.0/Google.Cloud.Vision.V1.WebDetection)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.1.0/Google.Cloud.Vision.V1.WebDetection)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.5.0/Google.Cloud.Vision.V1.WebDetection)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.4.0/Google.Cloud.Vision.V1.WebDetection)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Vision.V1/2.3.0/Google.Cloud.Vision.V1.WebDetection)

```
public sealed class WebDetection : IMessage<WebDetection>, IEquatable<WebDetection>, IDeepCloneable<WebDetection>, IBufferMessage, IMessage
```

Relevant information for the image from the Internet.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> WebDetection

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[WebDetection](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[WebDetection](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[WebDetection](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Vision.V1](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1)

## Assembly

Google.Cloud.Vision.V1.dll

## Constructors

### WebDetection()

```
public WebDetection()
```

### WebDetection(WebDetection)

```
public WebDetection(WebDetection other)
```

**Parameter**

**Name**

**Description**

`other`

`[WebDetection](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection)`  

## Properties

### BestGuessLabels

```
public RepeatedField<WebDetection.Types.WebLabel> BestGuessLabels { get; }
```

The service's best guess as to the topic of the request image. Inferred from similar images on the open web.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[WebDetection.Types.WebLabel](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection.Types.WebLabel)>`

### FullMatchingImages

```
public RepeatedField<WebDetection.Types.WebImage> FullMatchingImages { get; }
```

Fully matching images from the Internet. Can include resized copies of the query image.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[WebDetection.Types.WebImage](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection.Types.WebImage)>`

### PagesWithMatchingImages

```
public RepeatedField<WebDetection.Types.WebPage> PagesWithMatchingImages { get; }
```

Web pages containing the matching images from the Internet.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[WebDetection.Types.WebPage](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection.Types.WebPage)>`

### PartialMatchingImages

```
public RepeatedField<WebDetection.Types.WebImage> PartialMatchingImages { get; }
```

Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[WebDetection.Types.WebImage](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection.Types.WebImage)>`

### VisuallySimilarImages

```
public RepeatedField<WebDetection.Types.WebImage> VisuallySimilarImages { get; }
```

The visually similar image results.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[WebDetection.Types.WebImage](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection.Types.WebImage)>`

### WebEntities

```
public RepeatedField<WebDetection.Types.WebEntity> WebEntities { get; }
```

Deduced entities from similar images on the Internet.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[WebDetection.Types.WebEntity](/dotnet/docs/reference/Google.Cloud.Vision.V1/3.0.0/Google.Cloud.Vision.V1.WebDetection.Types.WebEntity)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
