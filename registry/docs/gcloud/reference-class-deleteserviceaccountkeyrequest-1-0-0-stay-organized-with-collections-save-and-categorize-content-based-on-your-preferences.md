-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class DeleteServiceAccountKeyRequest (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.4.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.3.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.2.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.1.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.0.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.2.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.1.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)

```
public sealed class DeleteServiceAccountKeyRequest : IMessage<DeleteServiceAccountKeyRequest>, IEquatable<DeleteServiceAccountKeyRequest>, IDeepCloneable<DeleteServiceAccountKeyRequest>, IBufferMessage, IMessage
```

The service account key delete request.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteServiceAccountKeyRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DeleteServiceAccountKeyRequest](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DeleteServiceAccountKeyRequest](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DeleteServiceAccountKeyRequest](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Iam.Admin.V1](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1)

## Assembly

Google.Cloud.Iam.Admin.V1.dll

## Constructors

### DeleteServiceAccountKeyRequest()

```
public DeleteServiceAccountKeyRequest()
```

### DeleteServiceAccountKeyRequest(DeleteServiceAccountKeyRequest)

```
public DeleteServiceAccountKeyRequest(DeleteServiceAccountKeyRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteServiceAccountKeyRequest](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest)`  

## Properties

### KeyName

```
public KeyName KeyName { get; set; }
```

[KeyName](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1.KeyName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1.DeleteServiceAccountKeyRequest#Google_Cloud_Iam_Admin_V1_DeleteServiceAccountKeyRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[KeyName](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1.KeyName)`

### Name

```
public string Name { get; set; }
```

Required. The resource name of the service account key in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`. Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
