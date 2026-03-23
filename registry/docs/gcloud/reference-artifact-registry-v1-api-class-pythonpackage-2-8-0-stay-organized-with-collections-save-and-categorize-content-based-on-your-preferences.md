-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Artifact Registry v1 API - Class PythonPackage (2.8.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.8.0keyboard\_arrow\_down

-   [2.15.0 (latest)](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/latest/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.14.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.13.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.12.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.11.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.10.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.9.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.7.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.6.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.5.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.4.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.3.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.2.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.1.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.0.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/1.1.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/1.0.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)

```
public sealed class PythonPackage : IMessage<PythonPackage>, IEquatable<PythonPackage>, IDeepCloneable<PythonPackage>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Artifact Registry v1 API class PythonPackage.

PythonPackage represents a python artifact.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> PythonPackage

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[PythonPackage](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[PythonPackage](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[PythonPackage](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.ArtifactRegistry.V1](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1)

## Assembly

Google.Cloud.ArtifactRegistry.V1.dll

## Constructors

### PythonPackage()

```
public PythonPackage()
```

### PythonPackage(PythonPackage)

```
public PythonPackage(PythonPackage other)
```

**Parameter**

**Name**

**Description**

`other`

`[PythonPackage](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage)`  

## Properties

### CreateTime

```
public Timestamp CreateTime { get; set; }
```

Output only. Time the package was created.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Name

```
public string Name { get; set; }
```

Required. registry\_location, project\_id, repository\_name and python\_package forms a unique package name:`projects/<project_id>/locations/<location>/repository/<repository_name>/pythonPackages/<python_package>`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/pythonPackages/ python\_package:1.0.0", where "us-west4" is the registry\_location, "test-project" is the project\_id, "test-repo" is the repository\_name and python\_package:1.0.0" is the python package.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PackageName

```
public string PackageName { get; set; }
```

Package for the artifact.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PythonPackageName

```
public PythonPackageName PythonPackageName { get; set; }
```

[PythonPackageName](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.PythonPackageName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.PythonPackage#Google_Cloud_ArtifactRegistry_V1_PythonPackage_Name) resource name property.

**Property Value**

**Type**

**Description**

`[PythonPackageName](/dotnet/docs/reference/Google.Cloud.ArtifactRegistry.V1/2.8.0/Google.Cloud.ArtifactRegistry.V1.PythonPackageName)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

Output only. Time the package was updated.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Uri

```
public string Uri { get; set; }
```

Required. URL to access the package. Example: us-west4-python.pkg.dev/test-project/test-repo/python\_package/file-name-1.0.0.tar.gz

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Version

```
public string Version { get; set; }
```

Version of this package.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
