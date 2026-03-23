-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Audit API - Class BigQueryAuditMetadata.Types.BigQueryAcl (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.Audit/latest/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Audit/2.5.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Audit/2.4.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Audit/2.3.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Audit/2.2.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Audit/2.1.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Audit/2.0.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Audit/1.1.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Audit/1.0.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)

```
public sealed class BigQueryAcl : IMessage<BigQueryAuditMetadata.Types.BigQueryAcl>, IEquatable<BigQueryAuditMetadata.Types.BigQueryAcl>, IDeepCloneable<BigQueryAuditMetadata.Types.BigQueryAcl>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Audit API class BigQueryAuditMetadata.Types.BigQueryAcl.

An access control list.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> BigQueryAuditMetadata.Types.BigQueryAcl

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[BigQueryAuditMetadata.Types.BigQueryAcl](/dotnet/docs/reference/Google.Cloud.Audit/2.1.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[BigQueryAuditMetadata.Types.BigQueryAcl](/dotnet/docs/reference/Google.Cloud.Audit/2.1.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[BigQueryAuditMetadata.Types.BigQueryAcl](/dotnet/docs/reference/Google.Cloud.Audit/2.1.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Audit](/dotnet/docs/reference/Google.Cloud.Audit/2.1.0/Google.Cloud.Audit)

## Assembly

Google.Cloud.Audit.dll

## Constructors

### BigQueryAcl()

```
public BigQueryAcl()
```

### BigQueryAcl(BigQueryAuditMetadata.Types.BigQueryAcl)

```
public BigQueryAcl(BigQueryAuditMetadata.Types.BigQueryAcl other)
```

**Parameter**

**Name**

**Description**

`other`

`[BigQueryAuditMetadata.Types.BigQueryAcl](/dotnet/docs/reference/Google.Cloud.Audit/2.1.0/Google.Cloud.Audit.BigQueryAuditMetadata.Types.BigQueryAcl)`  

## Properties

### AuthorizedViews

```
public RepeatedField<string> AuthorizedViews { get; }
```

List of authorized views for a dataset.

Format: `projects/<project_id>/datasets/<dataset_id>/tables/<view_id>`.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

### Policy

```
public Policy Policy { get; set; }
```

IAM policy for the resource.

**Property Value**

**Type**

**Description**

`[Policy](https://cloud.google.com/dotnet/docs/reference/Google.Cloud.Iam.V1/latest/Google.Cloud.Iam.V1.Policy.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
