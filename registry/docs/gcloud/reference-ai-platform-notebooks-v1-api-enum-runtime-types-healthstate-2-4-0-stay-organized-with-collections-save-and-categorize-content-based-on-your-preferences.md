-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# AI Platform Notebooks v1 API - Enum Runtime.Types.HealthState (2.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.4.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/latest/Google.Cloud.Notebooks.V1.Runtime.Types.HealthState)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.5.0/Google.Cloud.Notebooks.V1.Runtime.Types.HealthState)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.4.0/Google.Cloud.Notebooks.V1.Runtime.Types.HealthState)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.3.0/Google.Cloud.Notebooks.V1.Runtime.Types.HealthState)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.2.0/Google.Cloud.Notebooks.V1.Runtime.Types.HealthState)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.1.0/Google.Cloud.Notebooks.V1.Runtime.Types.HealthState)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.0.0/Google.Cloud.Notebooks.V1.Runtime.Types.HealthState)
-   [1.0.0-beta04](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/1.0.0-beta04/Google.Cloud.Notebooks.V1.Runtime.Types.HealthState)

```
public enum Runtime.Types.HealthState
```

Reference documentation and code samples for the AI Platform Notebooks v1 API enum Runtime.Types.HealthState.

The runtime substate.

## Namespace

[Google.Cloud.Notebooks.V1](/dotnet/docs/reference/Google.Cloud.Notebooks.V1/2.4.0/Google.Cloud.Notebooks.V1)

## Assembly

Google.Cloud.Notebooks.V1.dll

## Fields

**Name**

**Description**

`AgentNotInstalled`

The runtime has not installed health monitoring agent. Applies to ACTIVE state.

`AgentNotRunning`

The runtime health monitoring agent is not running. Applies to ACTIVE state.

`Healthy`

The runtime is known to be in an healthy state (for example, critical daemons are running) Applies to ACTIVE state.

`Unhealthy`

The runtime is known to be in an unhealthy state (for example, critical daemons are not running) Applies to ACTIVE state.

`Unspecified`

The runtime substate is unknown.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
