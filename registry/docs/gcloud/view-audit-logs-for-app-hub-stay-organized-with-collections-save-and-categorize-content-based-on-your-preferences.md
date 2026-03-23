-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [App Hub](https://docs.cloud.google.com/app-hub/docs)
-   [Guides](https://docs.cloud.google.com/app-hub/docs/overview)

Send feedback

# View audit logs for App Hub Stay organized with collections Save and categorize content based on your preferences.

This document shows you how to use [Cloud Logging](/logging/docs/overview) to view audit logs that your App Hub operations write. App Hub generates audit logs for the following operations:

-   **Admin activity**: Operations that modify the configuration or metadata of a resource.
-   **Data access**: Operations that read configuration, metadata, or user-provided data.

For a complete list of all audited operations from App Hub and their corresponding permissions, see [App Hub audit logs](/app-hub/docs/audit-logging).

## View App Hub audit logs

To view audit logs from App Hub, do the following:

1.  In the Google Cloud console, go to the segment **Logs Explorer** page:
    
    [Go to **Logs Explorer**](https://console.cloud.google.com/logs/query)
    
    If you use the search bar to find this page, then select the result whose subheading is **Logging**.
    
2.  In the Google Cloud console, use the project picker to select your [management project](/app-hub/docs/key-concepts#mgmt-project) or [host project](/app-hub/docs/key-concepts#host-project).
    
3.  In the **Query** field, enter the following query to see all App Hub audit logs:
    
    ```
    protoPayload.serviceName="apphub.googleapis.com"
    ```
    
4.  Click **Run query**.
    
    The **Query results** pane shows the latest audit logs for App Hub. The next section of this page lists sample queries that you can use in the Logs Explorer.
    

For more information about how to build queries, see [Build and save queries by using the Logging query language](/logging/docs/view/building-queries).

## Sample queries for App Hub

Use the following queries to find specific audit log events for common App Hub scenarios.

Query description

Expression

Find out who created or deleted an App Hub application

  ```

  protoPayload.serviceName="apphub.googleapis.com"
  (
    protoPayload.methodName="google.cloud.apphub.v1.AppHub.CreateApplication" OR
    protoPayload.methodName="google.cloud.apphub.v1.AppHub.DeleteApplication"
  )
```

Review the registration of services to an application

protoPayload.serviceName\="apphub.googleapis.com"
protoPayload.methodName\="google.cloud.apphub.v1.AppHub.CreateService"
resource.labels.application\_id\="APPLICATION\_ID"

Replace APPLICATION\_ID with the ID of your application.

Monitor changes to service project attachments

  ```

  protoPayload.serviceName="apphub.googleapis.com"
  (
    protoPayload.methodName="google.cloud.apphub.v1.AppHub.CreateServiceProjectAttachment" OR
    protoPayload.methodName="google.cloud.apphub.v1.AppHub.DeleteServiceProjectAttachment" OR
    protoPayload.methodName="google.cloud.apphub.v1.AppHub.DetachServiceProjectAttachment"
  )
```

## What's next

-   [Learn more about enabling Data Access audit logs](/logging/docs/audit/configure-data-access)
-   [Review App Hub audit logs](/app-hub/docs/audit-logging)
-   [Build and save queries by using the Logging query language](/logging/docs/view/building-queries)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
