-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class DeidentifyContentRequest (4.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 4.1.0keyboard\_arrow\_down

-   [4.22.0 (latest)](/dotnet/docs/reference/Google.Cloud.Dlp.V2/latest/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.21.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.21.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.20.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.20.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.19.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.19.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.18.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.18.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.17.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.17.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.16.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.16.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.15.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.15.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.14.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.14.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.13.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.13.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.12.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.12.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.11.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.11.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.10.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.9.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.8.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.7.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.6.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.5.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.4.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.3.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.2.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.0.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/3.5.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/3.4.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/3.3.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/3.2.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/2.16.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Dlp.V2/2.15.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)

```
public sealed class DeidentifyContentRequest : IMessage<DeidentifyContentRequest>, IEquatable<DeidentifyContentRequest>, IDeepCloneable<DeidentifyContentRequest>, IBufferMessage, IMessage
```

Request to de-identify a list of items.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DeidentifyContentRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DeidentifyContentRequest](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DeidentifyContentRequest](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DeidentifyContentRequest](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Dlp.V2](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2)

## Assembly

Google.Cloud.Dlp.V2.dll

## Constructors

### DeidentifyContentRequest()

```
public DeidentifyContentRequest()
```

### DeidentifyContentRequest(DeidentifyContentRequest)

```
public DeidentifyContentRequest(DeidentifyContentRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeidentifyContentRequest](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest)`  

## Properties

### DeidentifyConfig

```
public DeidentifyConfig DeidentifyConfig { get; set; }
```

Configuration for the de-identification of the content item. Items specified here will override the template referenced by the deidentify\_template\_name argument.

**Property Value**

**Type**

**Description**

`[DeidentifyConfig](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.DeidentifyConfig)`

### DeidentifyTemplateName

```
public string DeidentifyTemplateName { get; set; }
```

Template to use. Any configuration directly specified in deidentify\_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### InspectConfig

```
public InspectConfig InspectConfig { get; set; }
```

Configuration for the inspector. Items specified here will override the template referenced by the inspect\_template\_name argument.

**Property Value**

**Type**

**Description**

`[InspectConfig](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.InspectConfig)`

### InspectTemplateName

```
public string InspectTemplateName { get; set; }
```

Template to use. Any configuration directly specified in inspect\_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Item

```
public ContentItem Item { get; set; }
```

The item to de-identify. Will be treated as text.

**Property Value**

**Type**

**Description**

`[ContentItem](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.ContentItem)`

### LocationId

```
public string LocationId { get; set; }
```

Deprecated. This field has no effect.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Parent resource name.

The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/dlp/docs/specifying-location):

-   Projects scope, location specified:<br/> `projects/`<var>PROJECT\_ID</var>`/locations/`<var>LOCATION\_ID</var>
-   Projects scope, no location specified (defaults to global):<br/> `projects/`<var>PROJECT\_ID</var>

The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data:

parent=projects/example-project/locations/europe-west3

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsLocationName

```
public LocationName ParentAsLocationName { get; set; }
```

[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest#Google_Cloud_Dlp_V2_DeidentifyContentRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[LocationName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.LocationName.html)`

### ParentAsProjectName

```
public ProjectName ParentAsProjectName { get; set; }
```

[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest#Google_Cloud_Dlp_V2_DeidentifyContentRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[ProjectName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.ResourceNames.ProjectName.html)`

### ParentAsResourceName

```
public IResourceName ParentAsResourceName { get; set; }
```

[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.Dlp.V2/4.1.0/Google.Cloud.Dlp.V2.DeidentifyContentRequest#Google_Cloud_Dlp_V2_DeidentifyContentRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[IResourceName](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.IResourceName.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
