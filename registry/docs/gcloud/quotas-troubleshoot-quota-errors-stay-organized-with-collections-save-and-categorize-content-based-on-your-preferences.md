-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Cloud Quotas](https://docs.cloud.google.com/docs/quotas)
-   [Guides](https://docs.cloud.google.com/docs/quotas/overview)

Send feedback

# Troubleshoot quota errors Stay organized with collections Save and categorize content based on your preferences.

You might receive quota errors for a number of reasons, such as exceeding quota values or not setting the quota on a project correctly. If you want to be alerted when errors happen, you can create custom alerts for specific quota errors, as described in [Set up quota alerts](/docs/quotas/set-up-quota-alerts).

## Exceeding rate quotas

Rate quotas reset after a predefined time interval that is specific to each service. For more information, see the quotas documentation for the specific service.

## Exceeding quota values

If your project exceeds its maximum quota value while using a service, Google Cloud returns an error based on how you accessed the service:

-   If you exceed a quota value with an API request, Google Cloud returns an HTTP `413 REQUEST ENTITY TOO LARGE` status code. Note that when using the BigQuery legacy streaming API in a production environment, you may receive a `413 REQUEST ENTITY TOO LARGE` status code if your HTTP requests are larger than 10 MB. You may also receive this error if you exceed 300 MB per second. For more information see [Streaming inserts.](/bigquery/quotas#streaming_inserts)
-   If you exceeded a quota value with an HTTP/REST request, Google Cloud returns an HTTP `429 TOO MANY REQUESTS` status code.
-   If you exceed a quota for Compute Engine, Google Cloud typically returns an HTTP `403 QUOTA_EXCEEDED` status code, whether it was from API, HTTP/REST, or gRPC. If the quota is a rate quota, then `403 RATE_LIMIT_EXCEEDED` is returned.
-   If you exceeded a quota value using [gRPC](https://grpc.io), Google Cloud returns a `ResourceExhausted` error. How this error appears to you depends on the service.
-   If you exceeded a quota value using a Google Cloud CLI command, the gcloud CLI outputs a quota-exceeded error message and returns with the exit code `1`.
-   If you received a `QUOTA_EXCEEDED` message during a service rollout, see the following section.

## Exceeding quota values during a service rollout

Google Cloud sometimes changes the default quota values for resources and APIs. These changes take place gradually, which means that during the rollout of a new default quota, the quota value that appears in the Google Cloud console might not reflect the new quota value that is available to you.

If a quota rollout is in progress, you may receive an error message that states `The future limit is the new default quota that will be available after a service rollout completes.` If you see this error message, the cited quota value and future value are correct, even if what appears in the Google Cloud console is different.

-   For additional information, [view the audit logs](/logging/docs/audit#view-logs) and look for a `QUOTA_EXCEEDED` message.
    
        ```
        "status": {
          ...
          "message": "QUOTA_EXCEEDED",
          "details": [
            {
              ...
              "value": {
                "quotaExceeded": {
                  ...
                  "futureLimit": FUTUREVALUE
                }
              }
            }
          ]
        },
    ```
    
-   To view charts that show current and peak usage, in the Google Cloud console, go to the [**IAM & Admin \> Quotas & System Limits**](https://console.cloud.google.com/quotas?project=_) page and then click monitoring**Monitoring**. You might need to go to the end of the table.
    
-   If you need more quota, you can [request a quota adjustment](/docs/quotas/help/request_increase).
    

## Exceeding project quota

For more information about requesting additional _project quotas_, refer to the [Project quota requests](https://support.google.com/cloud/answer/6330231) support article.

## API error messages

If your quota project (also called a billing project) isn't set correctly, API requests might return error messages that are similar to the following:

-   `User credentials not supported by this API`
-   `API not enabled in the project`
-   `No quota project set`

These and other errors can often be fixed by setting the quota project. For more information, see [Quota project overview](/docs/quotas/quota-project).

## Google Cloud CLI errors

This section describes common issues encountered when getting started with the Google Cloud CLI (gcloud CLI).

### Install and initialize

To use the gcloud CLI for Cloud Quotas, be sure to install and initialize components:

1.  [Install](/sdk/docs/install) the gcloud CLI.
    
    If you're using Cloud Shell, you can skip this step because gcloud CLI comes pre-installed.
    
2.  [Initialize](/sdk/docs/initializing) the gcloud CLI.
    
3.  [Install the beta component](/sdk/docs/components#alpha_and_beta_components) by running the following command:
    
    ```
    gcloud components install beta
    ```
    

### Set your quota project

If you haven't set your quota project, gcloud CLI commands might return an error like the following:

```
PERMISSION_DENIED: Your application is authenticating by using local Application Default Credentials.
The cloudquotas.googleapis.com API requires a quota project, which is not set by default.
```

To resolve this issue, add the `--billing-project` flag on your gcloud CLI command to explicitly set the quota project, or rerun `gcloud config set billing/quota_project CURRENT_PROJECT` to set the quota project as the current project.

For more information, see the following:

-   [Set the quota project programmatically](/docs/quotas/set-quota-project#set-project-programmatically).
-   [Set the billing project](/sdk/gcloud/reference#--billing-project) through the gcloud CLI.

### Update gcloud CLI components

If you receive an error that the quotas command contains an `Invalid choice`, you might have an older version of the gcloud CLI installed. Update the gcloud CLI components with the following command:

```
gcloud components update
```

For more details about `gcloud beta quotas` commands and flags, see the [gcloud beta quotas](/sdk/gcloud/reference/beta/quotas) section of the Google Cloud CLI reference.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
