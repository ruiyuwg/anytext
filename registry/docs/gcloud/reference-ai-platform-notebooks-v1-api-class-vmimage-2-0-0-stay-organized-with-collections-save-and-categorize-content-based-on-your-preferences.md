-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# AI Platform Notebooks v1 API - Class VmImage (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/latest/Google.Cloud.Notebooks.V1.VmImage)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.5.0/Google.Cloud.Notebooks.V1.VmImage)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.4.0/Google.Cloud.Notebooks.V1.VmImage)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.3.0/Google.Cloud.Notebooks.V1.VmImage)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.2.0/Google.Cloud.Notebooks.V1.VmImage)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.1.0/Google.Cloud.Notebooks.V1.VmImage)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.0.0/Google.Cloud.Notebooks.V1.VmImage)
-   [1.0.0-beta04](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/1.0.0-beta04/Google.Cloud.Notebooks.V1.VmImage)

```
public sealed class VmImage : IMessage<VmImage>, IEquatable<VmImage>, IDeepCloneable<VmImage>, IBufferMessage, IMessage
```

Reference documentation and code samples for the AI Platform Notebooks v1 API class VmImage.

Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> VmImage

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[VmImage](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.0.0/Google.Cloud.Notebooks.V1.VmImage)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[VmImage](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.0.0/Google.Cloud.Notebooks.V1.VmImage)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[VmImage](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.0.0/Google.Cloud.Notebooks.V1.VmImage)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Notebooks.V1](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.0.0/Google.Cloud.Notebooks.V1)

## Assembly

Google.Cloud.Notebooks.V1.dll

## Constructors

### VmImage()

```
public VmImage()
```

### VmImage(VmImage)

```
public VmImage(VmImage other)
```

**Parameter**

**Name**

**Description**

`other`

`[VmImage](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.0.0/Google.Cloud.Notebooks.V1.VmImage)`  

## Properties

### ImageCase

```
public VmImage.ImageOneofCase ImageCase { get; }
```

**Property Value**

**Type**

**Description**

`[VmImage.ImageOneofCase](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.0.0/Google.Cloud.Notebooks.V1.VmImage.ImageOneofCase)`

### ImageFamily

```
public string ImageFamily { get; set; }
```

Use this VM image family to find the image; the newest image in this family will be used.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ImageName

```
public string ImageName { get; set; }
```

Use VM image name to find the image.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Project

```
public string Project { get; set; }
```

Required. The name of the Google Cloud project that this VM image belongs to. Format: `{project_id}`

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
