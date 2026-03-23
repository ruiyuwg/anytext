-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class DeleteExclusionRequest (3.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.6.0keyboard\_arrow\_down

-   [4.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.Logging.V2/latest/Google.Cloud.Logging.V2.DeleteExclusionRequest)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.4.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.3.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.2.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.1.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/4.0.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.5.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.4.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.3.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)

```
public sealed class DeleteExclusionRequest : IMessage<DeleteExclusionRequest>, IEquatable<DeleteExclusionRequest>, IDeepCloneable<DeleteExclusionRequest>, IBufferMessage, IMessage
```

The parameters to `DeleteExclusion`.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteExclusionRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DeleteExclusionRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DeleteExclusionRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DeleteExclusionRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Logging.V2](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2)

## Assembly

Google.Cloud.Logging.V2.dll

## Constructors

### DeleteExclusionRequest()

```
public DeleteExclusionRequest()
```

### DeleteExclusionRequest(DeleteExclusionRequest)

```
public DeleteExclusionRequest(DeleteExclusionRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteExclusionRequest](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2.DeleteExclusionRequest)`  

## Properties

### LogExclusionName

```
public LogExclusionName LogExclusionName { get; set; }
```

[LogExclusionName](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2.LogExclusionName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2.DeleteExclusionRequest#Google_Cloud_Logging_V2_DeleteExclusionRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[LogExclusionName](/dotnet/docs/reference/Google.Cloud.Logging.V2/3.6.0/Google.Cloud.Logging.V2.LogExclusionName)`

### Name

```
public string Name { get; set; }
```

Required. The resource name of an existing exclusion to delete:

"projects/\[PROJECT\_ID\]/exclusions/\[EXCLUSION\_ID\]" "organizations/\[ORGANIZATION\_ID\]/exclusions/\[EXCLUSION\_ID\]" "billingAccounts/\[BILLING\_ACCOUNT\_ID\]/exclusions/\[EXCLUSION\_ID\]" "folders/\[FOLDER\_ID\]/exclusions/\[EXCLUSION\_ID\]"

For example:

`&quot;projects/my-project/exclusions/my-exclusion&quot;`

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
