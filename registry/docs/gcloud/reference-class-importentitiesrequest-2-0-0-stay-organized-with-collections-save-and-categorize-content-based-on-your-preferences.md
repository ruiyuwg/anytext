-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ImportEntitiesRequest (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/latest/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.4.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.3.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.2.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.1.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.0.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/1.4.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/1.3.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/1.2.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/1.1.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)

```
public sealed class ImportEntitiesRequest : IMessage<ImportEntitiesRequest>, IEquatable<ImportEntitiesRequest>, IDeepCloneable<ImportEntitiesRequest>, IBufferMessage, IMessage
```

The request for \[google.datastore.admin.v1.DatastoreAdmin.ImportEntities\]\[google.datastore.admin.v1.DatastoreAdmin.ImportEntities\].

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ImportEntitiesRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ImportEntitiesRequest](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.0.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ImportEntitiesRequest](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.0.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ImportEntitiesRequest](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.0.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Datastore.Admin.V1](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.0.0/Google.Cloud.Datastore.Admin.V1)

## Assembly

Google.Cloud.Datastore.Admin.V1.dll

## Constructors

### ImportEntitiesRequest()

```
public ImportEntitiesRequest()
```

### ImportEntitiesRequest(ImportEntitiesRequest)

```
public ImportEntitiesRequest(ImportEntitiesRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ImportEntitiesRequest](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.0.0/Google.Cloud.Datastore.Admin.V1.ImportEntitiesRequest)`  

## Properties

### EntityFilter

```
public EntityFilter EntityFilter { get; set; }
```

Optionally specify which kinds/namespaces are to be imported. If provided, the list must be a subset of the EntityFilter used in creating the export, otherwise a FAILED\_PRECONDITION error will be returned. If no filter is specified then all entities from the export are imported.

**Property Value**

**Type**

**Description**

`[EntityFilter](/dotnet/docs/reference/Google.Cloud.Datastore.Admin.V1/2.0.0/Google.Cloud.Datastore.Admin.V1.EntityFilter)`

### InputUrl

```
public string InputUrl { get; set; }
```

Required. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input\_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations).

For more information, see \[google.datastore.admin.v1.ExportEntitiesResponse.output\_url\]\[google.datastore.admin.v1.ExportEntitiesResponse.output\_url\].

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Labels

```
public MapField<string, string> Labels { get; }
```

Client-assigned labels.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)<[String](https://learn.microsoft.com/dotnet/api/system.string), [String](https://learn.microsoft.com/dotnet/api/system.string)>`

### ProjectId

```
public string ProjectId { get; set; }
```

Required. Project ID against which to make the request.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
