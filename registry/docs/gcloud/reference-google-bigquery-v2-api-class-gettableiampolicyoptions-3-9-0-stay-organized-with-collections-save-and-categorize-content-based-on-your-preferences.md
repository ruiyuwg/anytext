-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google BigQuery v2 API - Class GetTableIamPolicyOptions (3.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.9.0keyboard\_arrow\_down

-   [3.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/latest/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.10.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.9.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.8.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.7.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.6.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.5.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.4.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.3.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.2.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.1.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.0.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.4.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.3.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/2.2.0/Google.Cloud.BigQuery.V2.GetTableIamPolicyOptions)

```
public sealed class GetTableIamPolicyOptions
```

Reference documentation and code samples for the Google BigQuery v2 API class GetTableIamPolicyOptions.

Options for `GetTableIamPolicy` operations.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetTableIamPolicyOptions

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BigQuery.V2](/dotnet/docs/reference/Google.Cloud.BigQuery.V2/3.9.0/Google.Cloud.BigQuery.V2)

## Assembly

Google.Cloud.BigQuery.V2.dll

## Properties

### PolicyVersion

```
public int? PolicyVersion { get; set; }
```

Optional. The maximum policy version that will be used to format the policy.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

**Remarks**

Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
