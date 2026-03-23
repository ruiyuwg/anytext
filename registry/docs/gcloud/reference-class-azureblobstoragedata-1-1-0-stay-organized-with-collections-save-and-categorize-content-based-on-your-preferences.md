-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class AzureBlobStorageData (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [2.10.0 (latest)](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/latest/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.9.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.8.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.7.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.6.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.5.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.4.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.3.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.2.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.1.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/2.0.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/1.2.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/1.1.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/1.0.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)

```
public sealed class AzureBlobStorageData : IMessage<AzureBlobStorageData>, IEquatable<AzureBlobStorageData>, IDeepCloneable<AzureBlobStorageData>, IBufferMessage, IMessage
```

An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> AzureBlobStorageData

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[AzureBlobStorageData](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/1.1.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[AzureBlobStorageData](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/1.1.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[AzureBlobStorageData](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/1.1.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.StorageTransfer.V1](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/1.1.0/Google.Cloud.StorageTransfer.V1)

## Assembly

Google.Cloud.StorageTransfer.V1.dll

## Constructors

### AzureBlobStorageData()

```
public AzureBlobStorageData()
```

### AzureBlobStorageData(AzureBlobStorageData)

```
public AzureBlobStorageData(AzureBlobStorageData other)
```

**Parameter**

**Name**

**Description**

`other`

`[AzureBlobStorageData](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/1.1.0/Google.Cloud.StorageTransfer.V1.AzureBlobStorageData)`  

## Properties

### AzureCredentials

```
public AzureCredentials AzureCredentials { get; set; }
```

Required. Input only. Credentials used to authenticate API requests to Azure.

For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).

**Property Value**

**Type**

**Description**

`[AzureCredentials](/dotnet/docs/reference/Google.Cloud.StorageTransfer.V1/1.1.0/Google.Cloud.StorageTransfer.V1.AzureCredentials)`

### Container

```
public string Container { get; set; }
```

Required. The container to transfer from the Azure Storage account.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Path

```
public string Path { get; set; }
```

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### StorageAccount

```
public string StorageAccount { get; set; }
```

Required. The name of the Azure Storage account.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
