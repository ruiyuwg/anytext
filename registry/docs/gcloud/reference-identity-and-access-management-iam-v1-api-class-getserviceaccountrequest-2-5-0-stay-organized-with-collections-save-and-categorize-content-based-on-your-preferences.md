-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Identity and Access Management (IAM) v1 API - Class GetServiceAccountRequest (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.4.0/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.3.0/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.2.0/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.1.0/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/2.0.0/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.2.0/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.1.0/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/1.0.0/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)

```
public sealed class GetServiceAccountRequest : IMessage<GetServiceAccountRequest>, IEquatable<GetServiceAccountRequest>, IDeepCloneable<GetServiceAccountRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Identity and Access Management (IAM) v1 API class GetServiceAccountRequest.

The service account get request.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetServiceAccountRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetServiceAccountRequest](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetServiceAccountRequest](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetServiceAccountRequest](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Iam.Admin.V1](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1)

## Assembly

Google.Cloud.Iam.Admin.V1.dll

## Constructors

### GetServiceAccountRequest()

```
public GetServiceAccountRequest()
```

### GetServiceAccountRequest(GetServiceAccountRequest)

```
public GetServiceAccountRequest(GetServiceAccountRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetServiceAccountRequest](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ServiceAccountName

```
public ServiceAccountName ServiceAccountName { get; set; }
```

[ServiceAccountName](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1.ServiceAccountName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1.GetServiceAccountRequest#Google_Cloud_Iam_Admin_V1_GetServiceAccountRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ServiceAccountName](/dotnet/docs/reference/Google.Cloud.Iam.Admin.V1/latest/Google.Cloud.Iam.Admin.V1.ServiceAccountName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
