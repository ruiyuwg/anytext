-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class Results (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [2.18.0 (latest)](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/latest/Google.Cloud.CloudBuild.V1.Results)
-   [2.17.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.17.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.16.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.15.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.14.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.13.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.12.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.11.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.10.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.9.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.8.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.7.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.6.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.5.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.4.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.3.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.2.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.1.0/Google.Cloud.CloudBuild.V1.Results)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/2.0.0/Google.Cloud.CloudBuild.V1.Results)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.4.0/Google.Cloud.CloudBuild.V1.Results)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.3.0/Google.Cloud.CloudBuild.V1.Results)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.2.0/Google.Cloud.CloudBuild.V1.Results)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.1.0/Google.Cloud.CloudBuild.V1.Results)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.0.0/Google.Cloud.CloudBuild.V1.Results)

```
public sealed class Results : IMessage<Results>, IEquatable<Results>, IDeepCloneable<Results>, IBufferMessage, IMessage
```

Artifacts created by the build pipeline.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> Results

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[Results](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.1.0/Google.Cloud.CloudBuild.V1.Results)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[Results](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.1.0/Google.Cloud.CloudBuild.V1.Results)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[Results](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.1.0/Google.Cloud.CloudBuild.V1.Results)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.CloudBuild.V1](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.1.0/Google.Cloud.CloudBuild.V1)

## Assembly

Google.Cloud.CloudBuild.V1.dll

## Constructors

### Results()

```
public Results()
```

### Results(Results)

```
public Results(Results other)
```

**Parameter**

**Name**

**Description**

`other`

`[Results](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.1.0/Google.Cloud.CloudBuild.V1.Results)`  

## Properties

### ArtifactManifest

```
public string ArtifactManifest { get; set; }
```

Path to the artifact manifest. Only populated when artifacts are uploaded.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ArtifactTiming

```
public TimeSpan ArtifactTiming { get; set; }
```

Time to push all non-container artifacts.

**Property Value**

**Type**

**Description**

`[TimeSpan](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.1.0/Google.Cloud.CloudBuild.V1.TimeSpan)`

### BuildStepImages

```
public RepeatedField<string> BuildStepImages { get; }
```

List of build step digests, in the order corresponding to build step indices.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

### BuildStepOutputs

```
public RepeatedField<ByteString> BuildStepOutputs { get; }
```

List of build step outputs, produced by builder images, in the order corresponding to build step indices.

[Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[ByteString](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.ByteString.html)>`

### Images

```
public RepeatedField<BuiltImage> Images { get; }
```

Container images that were built as a part of the build.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[BuiltImage](/dotnet/docs/reference/Google.Cloud.CloudBuild.V1/1.1.0/Google.Cloud.CloudBuild.V1.BuiltImage)>`

### NumArtifacts

```
public long NumArtifacts { get; set; }
```

Number of artifacts uploaded. Only populated when artifacts are uploaded.

**Property Value**

**Type**

**Description**

`[Int64](https://learn.microsoft.com/dotnet/api/system.int64)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
