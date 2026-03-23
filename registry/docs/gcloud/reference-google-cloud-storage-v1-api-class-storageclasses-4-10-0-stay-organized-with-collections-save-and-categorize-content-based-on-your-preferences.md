-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Storage v1 API - Class StorageClasses (4.10.0) Stay organized with collections Save and categorize content based on your preferences.

Version 4.10.0keyboard\_arrow\_down

-   [4.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.Storage.V1/latest/Google.Cloud.Storage.V1.StorageClasses)
-   [4.13.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.13.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.11.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.11.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.10.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.9.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.8.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.7.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.6.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.5.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.4.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.3.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.2.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.1.0/Google.Cloud.Storage.V1.StorageClasses)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.0.0/Google.Cloud.Storage.V1.StorageClasses)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.7.0/Google.Cloud.Storage.V1.StorageClasses)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.6.0/Google.Cloud.Storage.V1.StorageClasses)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.5.0/Google.Cloud.Storage.V1.StorageClasses)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Storage.V1/3.4.0/Google.Cloud.Storage.V1.StorageClasses)

```
public static class StorageClasses
```

Reference documentation and code samples for the Google Cloud Storage v1 API class StorageClasses.

String constants for the names of the storage classes and location types, as used in [StorageClass](https://github.com/googleapis/google-api-dotnet-client/blob/b5b17db66dcf24c4efade8e630d0fae52012ad01/Src/TempGenerated/Google.Apis.Storage.v1/Google.Apis.Storage.v1.cs) and [StorageClass](https://github.com/googleapis/google-api-dotnet-client/blob/b5b17db66dcf24c4efade8e630d0fae52012ad01/Src/TempGenerated/Google.Apis.Storage.v1/Google.Apis.Storage.v1.cs). See [https://cloud.google.com/storage/docs/storage-classes](https://cloud.google.com/storage/docs/storage-classes) for details.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> StorageClasses

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Storage.V1](/dotnet/docs/reference/Google.Cloud.Storage.V1/4.10.0/Google.Cloud.Storage.V1)

## Assembly

Google.Cloud.Storage.V1.dll

## Fields

### Archive

```
public const string Archive = "ARCHIVE"
```

Name for the Archive storage class.

**Field Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Coldline

```
public const string Coldline = "COLDLINE"
```

Name for the Coldline storage class.

**Field Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DurableReducedAvailability

```
public const string DurableReducedAvailability = "DURABLE_REDUCED_AVAILABILITY"
```

Name of the Durable Reduced Availability (DRA) location type. Use of this storage class is not recommended; Regional storage has lower pricing for some operations but otherwise the same pricing structure, and better performance/availability.

**Field Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### MultiRegional

```
public const string MultiRegional = "MULTI_REGIONAL"
```

Name for the Multi-Regional location type.

**Field Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Nearline

```
public const string Nearline = "NEARLINE"
```

Name for the Nearline storage class.

**Field Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Regional

```
public const string Regional = "REGIONAL"
```

Name for the Regional location type.

**Field Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Standard

```
public const string Standard = "STANDARD"
```

Name of the Standard storage class, which is equivalent to Multi-Regional or Regional depending on the location.

**Field Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
