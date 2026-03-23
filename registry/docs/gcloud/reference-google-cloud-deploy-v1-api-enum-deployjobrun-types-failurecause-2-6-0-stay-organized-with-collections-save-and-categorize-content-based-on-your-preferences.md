-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Deploy v1 API - Enum DeployJobRun.Types.FailureCause (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.6.0keyboard\_arrow\_down

-   [3.7.0 (latest)](/dotnet/docs/reference/Google.Cloud.Deploy.V1/latest/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/3.6.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/3.5.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/3.4.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/3.3.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/3.2.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/3.1.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/3.0.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.19.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.19.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.18.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.18.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.17.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.17.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.16.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.15.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.14.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.13.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.12.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.11.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.10.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.9.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.8.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.7.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.6.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.5.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.4.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.3.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.2.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.1.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.0.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/1.1.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Deploy.V1/1.0.0/Google.Cloud.Deploy.V1.DeployJobRun.Types.FailureCause)

```
public enum DeployJobRun.Types.FailureCause
```

Reference documentation and code samples for the Google Cloud Deploy v1 API enum DeployJobRun.Types.FailureCause.

Well-known deploy failures.

## Namespace

[Google.Cloud.Deploy.V1](/dotnet/docs/reference/Google.Cloud.Deploy.V1/2.6.0/Google.Cloud.Deploy.V1)

## Assembly

Google.Cloud.Deploy.V1.dll

## Fields

**Name**

**Description**

`CloudBuildRequestFailed`

Cloud Build failed to fulfill Google Cloud Deploy's request. See failure\_message for additional details.

`CloudBuildUnavailable`

Cloud Build is not available, either because it is not enabled or because Google Cloud Deploy has insufficient permissions. See [Required permission](/deploy/docs/cloud-deploy-service-account#required_permissions).

`DeadlineExceeded`

The deploy build did not complete within the alloted time.

`ExecutionFailed`

The deploy operation did not complete successfully; check Cloud Build logs.

`MissingResourcesForCanary`

There were missing resources in the runtime environment required for a canary deployment. Check the Cloud Build logs for more information.

`Unspecified`

No reason for failure is specified.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
