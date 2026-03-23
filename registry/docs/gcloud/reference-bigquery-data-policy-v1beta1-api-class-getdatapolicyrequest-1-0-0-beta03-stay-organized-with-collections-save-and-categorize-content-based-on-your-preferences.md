-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# BigQuery Data Policy v1beta1 API - Class GetDataPolicyRequest (1.0.0-beta03) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta03keyboard\_arrow\_down

-   [1.0.0-beta05 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/latest/Google.Cloud.BigQuery.DataPolicies.V1Beta1.GetDataPolicyRequest)
-   [1.0.0-beta04](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/1.0.0-beta04/Google.Cloud.BigQuery.DataPolicies.V1Beta1.GetDataPolicyRequest)

```
public sealed class GetDataPolicyRequest : IMessage<GetDataPolicyRequest>, IEquatable<GetDataPolicyRequest>, IDeepCloneable<GetDataPolicyRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the BigQuery Data Policy v1beta1 API class GetDataPolicyRequest.

Request message for the GetDataPolicy method.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetDataPolicyRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetDataPolicyRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/1.0.0-beta03/Google.Cloud.BigQuery.DataPolicies.V1Beta1.GetDataPolicyRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetDataPolicyRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/1.0.0-beta03/Google.Cloud.BigQuery.DataPolicies.V1Beta1.GetDataPolicyRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetDataPolicyRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/1.0.0-beta03/Google.Cloud.BigQuery.DataPolicies.V1Beta1.GetDataPolicyRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BigQuery.DataPolicies.V1Beta1](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/1.0.0-beta03/Google.Cloud.BigQuery.DataPolicies.V1Beta1)

## Assembly

Google.Cloud.BigQuery.DataPolicies.V1Beta1.dll

## Constructors

### GetDataPolicyRequest()

```
public GetDataPolicyRequest()
```

### GetDataPolicyRequest(GetDataPolicyRequest)

```
public GetDataPolicyRequest(GetDataPolicyRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetDataPolicyRequest](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/1.0.0-beta03/Google.Cloud.BigQuery.DataPolicies.V1Beta1.GetDataPolicyRequest)`  

## Properties

### DataPolicyName

```
public DataPolicyName DataPolicyName { get; set; }
```

[DataPolicyName](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/1.0.0-beta03/Google.Cloud.BigQuery.DataPolicies.V1Beta1.DataPolicyName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/1.0.0-beta03/Google.Cloud.BigQuery.DataPolicies.V1Beta1.GetDataPolicyRequest#Google_Cloud_BigQuery_DataPolicies_V1Beta1_GetDataPolicyRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[DataPolicyName](/dotnet/docs/reference/Google.Cloud.BigQuery.DataPolicies.V1Beta1/1.0.0-beta03/Google.Cloud.BigQuery.DataPolicies.V1Beta1.DataPolicyName)`

### Name

```
public string Name { get; set; }
```

Required. Resource name of the requested data policy. Format is `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
