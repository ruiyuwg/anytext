-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Monitoring v3 API - Enum AlertPolicy.Types.ConditionCombinerType (3.8.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.8.0keyboard\_arrow\_down

-   [3.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/latest/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.15.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.14.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.12.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.11.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.10.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.9.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.8.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.7.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.6.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.4.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.3.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.1.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.5.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.4.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.3.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.ConditionCombinerType)

```
public enum AlertPolicy.Types.ConditionCombinerType
```

Reference documentation and code samples for the Google Cloud Monitoring v3 API enum AlertPolicy.Types.ConditionCombinerType.

Operators for combining conditions.

## Namespace

[Google.Cloud.Monitoring.V3](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.8.0/Google.Cloud.Monitoring.V3)

## Assembly

Google.Cloud.Monitoring.V3.dll

## Fields

**Name**

**Description**

`And`

Combine conditions using the logical `AND` operator. An incident is created only if all the conditions are met simultaneously. This combiner is satisfied if all conditions are met, even if they are met on completely different resources.

`AndWithMatchingResource`

Combine conditions using logical `AND` operator, but unlike the regular `AND` option, an incident is created only if all conditions are met simultaneously on at least one resource.

`CombineUnspecified`

An unspecified combiner.

`Or`

Combine conditions using the logical `OR` operator. An incident is created if any of the listed conditions is met.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
