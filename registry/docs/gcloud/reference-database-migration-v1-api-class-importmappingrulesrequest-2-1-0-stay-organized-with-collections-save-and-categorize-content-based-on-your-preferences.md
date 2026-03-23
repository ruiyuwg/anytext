-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Database Migration v1 API - Class ImportMappingRulesRequest (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/latest/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.5.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.4.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.3.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.2.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.2.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)

```
public sealed class ImportMappingRulesRequest : IMessage<ImportMappingRulesRequest>, IEquatable<ImportMappingRulesRequest>, IDeepCloneable<ImportMappingRulesRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Database Migration v1 API class ImportMappingRulesRequest.

Request message for 'ImportMappingRules' request.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ImportMappingRulesRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ImportMappingRulesRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ImportMappingRulesRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ImportMappingRulesRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.CloudDms.V1](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1)

## Assembly

Google.Cloud.CloudDms.V1.dll

## Constructors

### ImportMappingRulesRequest()

```
public ImportMappingRulesRequest()
```

### ImportMappingRulesRequest(ImportMappingRulesRequest)

```
public ImportMappingRulesRequest(ImportMappingRulesRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ImportMappingRulesRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)`  

## Properties

### AutoCommit

```
public bool AutoCommit { get; set; }
```

Should the conversion workspace be committed automatically after the import operation.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Parent

```
public string Parent { get; set; }
```

Required. Name of the conversion workspace resource to import the rules to in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion\_workspace}.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsConversionWorkspaceName

```
public ConversionWorkspaceName ParentAsConversionWorkspaceName { get; set; }
```

[ConversionWorkspaceName](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ConversionWorkspaceName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest#Google_Cloud_CloudDms_V1_ImportMappingRulesRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[ConversionWorkspaceName](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ConversionWorkspaceName)`

### RulesFiles

```
public RepeatedField<ImportMappingRulesRequest.Types.RulesFile> RulesFiles { get; }
```

One or more rules files.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[ImportMappingRulesRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest)[Types](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest.Types)[RulesFile](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportMappingRulesRequest.Types.RulesFile)`

### RulesFormat

```
public ImportRulesFileFormat RulesFormat { get; set; }
```

The format of the rules content file.

**Property Value**

**Type**

**Description**

`[ImportRulesFileFormat](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.ImportRulesFileFormat)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
