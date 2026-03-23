-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Asset Inventory v1 API - Class IamPolicyAnalysisResult.Types.AccessControlList (3.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.9.0keyboard\_arrow\_down

-   [3.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.Asset.V1/latest/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.13.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.12.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.11.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.10.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.8.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.7.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.6.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.5.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.4.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.3.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.2.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.1.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.0.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.11.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.10.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.8.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Asset.V1/2.7.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)

```
public sealed class IamPolicyAnalysisResult.Types.AccessControlList : IMessage<IamPolicyAnalysisResult.Types.AccessControlList>, IEquatable<IamPolicyAnalysisResult.Types.AccessControlList>, IDeepCloneable<IamPolicyAnalysisResult.Types.AccessControlList>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Asset Inventory v1 API class IamPolicyAnalysisResult.Types.AccessControlList.

An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry.

NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations.

For example, assume we have the following cases in one IAM policy binding:

-   Permission P1 and P2 apply to resource R1 and R2;
-   Permission P3 applies to resource R2 and R3;

This will result in the following access control lists:

-   AccessControlList 1: \[R1, R2\], \[P1, P2\]
-   AccessControlList 2: \[R2, R3\], \[P3\]

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> IamPolicyAnalysisResult.Types.AccessControlList

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[IamPolicyAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult)[Types](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types)[AccessControlList](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[IamPolicyAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult)[Types](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types)[AccessControlList](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[IamPolicyAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult)[Types](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types)[AccessControlList](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Asset.V1](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1)

## Assembly

Google.Cloud.Asset.V1.dll

## Constructors

### AccessControlList()

```
public AccessControlList()
```

### AccessControlList(AccessControlList)

```
public AccessControlList(IamPolicyAnalysisResult.Types.AccessControlList other)
```

**Parameter**

**Name**

**Description**

`other`

`[IamPolicyAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult)[Types](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types)[AccessControlList](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.AccessControlList)`  

## Properties

### Accesses

```
public RepeatedField<IamPolicyAnalysisResult.Types.Access> Accesses { get; }
```

The accesses that match one of the following conditions:

-   The access\_selector, if it is specified in request;
-   Otherwise, access specifiers reachable from the policy binding's role.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[IamPolicyAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult)[Types](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types)[Access](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.Access)`

### ConditionEvaluation

```
public ConditionEvaluation ConditionEvaluation { get; set; }
```

Condition evaluation for this AccessControlList, if there is a condition defined in the above IAM policy binding.

**Property Value**

**Type**

**Description**

`[ConditionEvaluation](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.ConditionEvaluation)`

### ResourceEdges

```
public RepeatedField<IamPolicyAnalysisResult.Types.Edge> ResourceEdges { get; }
```

Resource edges of the graph starting from the policy attached resource to any descendant resources. The \[Edge.source\_node\]\[google.cloud.asset.v1.IamPolicyAnalysisResult.Edge.source\_node\] contains the full resource name of a parent resource and \[Edge.target\_node\]\[google.cloud.asset.v1.IamPolicyAnalysisResult.Edge.target\_node\] contains the full resource name of a child resource. This field is present only if the output\_resource\_edges option is enabled in request.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[IamPolicyAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult)[Types](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types)[Edge](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.Edge)`

### Resources

```
public RepeatedField<IamPolicyAnalysisResult.Types.Resource> Resources { get; }
```

The resources that match one of the following conditions:

-   The resource\_selector, if it is specified in request;
-   Otherwise, resources reachable from the policy attached resource.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[IamPolicyAnalysisResult](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult)[Types](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types)[Resource](/dotnet/docs/reference/Google.Cloud.Asset.V1/3.9.0/Google.Cloud.Asset.V1.IamPolicyAnalysisResult.Types.Resource)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
