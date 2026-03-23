-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Eventarc](https://docs.cloud.google.com/eventarc/docs)
-   [Standard](https://docs.cloud.google.com/eventarc/standard/docs)
-   [Guides](https://docs.cloud.google.com/eventarc/standard/docs/overview)

Send feedback

# Route Cloud Data Fusion events to Cloud Run Stay organized with collections Save and categorize content based on your preferences.

[Standard](/eventarc/standard/docs/overview)

An Eventarc trigger declares your interest in a certain event or set of events. You can configure event routing by specifying filters for the trigger, including the event source, and the target Cloud Run service.

Eventarc delivers events to the event receiver in a [CloudEvents format](/eventarc/docs/cloudevents) through an HTTP request.

These instructions show you how to configure event routing to your Cloud Run service that is triggered by a direct Cloud Data Fusion event. For more details, see the list of [supported direct events](/eventarc/docs/reference/supported-events#directly-from-a-google-cloud-source).

**Note:** If both direct and audit log events are supported for a Google provider, we recommend that you create a trigger that filters for the direct event. Direct events offer a number of advantages over audit log events. For more information, see [Event routes](/eventarc/standard/docs/run/event-routing-options).

## Prepare to create a trigger

Before you create a trigger, complete these prerequisites:

### Console

1.  In the Google Cloud console, on the project selector page, select or [create a Google Cloud project](/resource-manager/docs/creating-managing-projects).
    
    **Note:** If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.
    
    [Go to project selector](https://console.cloud.google.com/projectselector2/home/dashboard)
    
2.  Enable the Cloud Logging, Eventarc, and Eventarc Publishing APIs.
    
    [Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=eventarc.googleapis.com,eventarcpublishing.googleapis.com,logging.googleapis.com)
    
3.  If applicable, enable the API related to the direct events. For example, for Cloud Data Fusion events, enable the Cloud Data Fusion API.
    
4.  If you don't already have one, create a user-managed service account, then grant it the roles and permissions necessary so that Eventarc can manage events for your target service.
    
    1.  In the Google Cloud console, go to the **Create service account** page.
        
        [Go to Create service account](https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts/create?supportedpurview=project)
        
    2.  Select your project.
        
    3.  In the **Service account name** field, enter a name. The Google Cloud console fills in the **Service account ID** field based on this name.
        
        In the **Service account description** field, enter a description. For example, `Service account for event trigger`.
        
    4.  Click **Create and continue**.
        
    5.  To provide appropriate access, in the **Select a role** list, select the required Identity and Access Management (IAM) roles to grant to your service account for authenticated or unauthenticated invocations. For more information, see [Roles and permissions for Cloud Run targets](/eventarc/docs/roles-permissions).
        
        For additional roles, click add **Add another role** and add each additional role.
        
        **Important:** To accept authenticated invocations to your Cloud Run service, you must associate your trigger with a service account that has the `roles/run.invoker` role. When creating or updating your trigger, select that service account.
        
    6.  Click **Continue**.
        
    7.  To finish creating the account, click **Done**.
        

### gcloud

1.  In the Google Cloud console, activate Cloud Shell.
    
    [Activate Cloud Shell](https://console.cloud.google.com/?cloudshell=true)
    
    At the bottom of the Google Cloud console, a [Cloud Shell](/shell/docs/how-cloud-shell-works) session starts and displays a command-line prompt. Cloud Shell is a shell environment with the Google Cloud CLI already installed and with values already set for your current project. It can take a few seconds for the session to initialize.
    
2.  Enable the Cloud Logging, Eventarc, and Eventarc Publishing APIs.
    
    gcloud services enable logging.googleapis.com \\
      eventarc.googleapis.com \\
      eventarcpublishing.googleapis.com
    
3.  If applicable, enable the API related to the direct events. For example, for Cloud Data Fusion events, enable `datafusion.googleapis.com`.
    
4.  If you don't already have one, create a user-managed service account, then grant it the roles and permissions necessary so that Eventarc can manage events for your target service.
    
    1.  Create the service account:
        
        gcloud iam service-accounts create SERVICE\_ACCOUNT\_NAME
        
        Replace `SERVICE_ACCOUNT_NAME` with the name of the service account. It must be between 6 and 30 characters, and can contain lowercase alphanumeric characters and dashes. After you create a service account, you cannot change its name.
        
    2.  Grant the required Identity and Access Management (IAM) roles or permissions for authenticated or unauthenticated invocations. For more information, see [Roles and permissions for Cloud Run targets](/eventarc/docs/roles-permissions).
        
    
    **Important:** To accept authenticated invocations to your Cloud Run service, you must associate your trigger with a service account that has the `roles/run.invoker` role. When creating or editing your trigger, use the `--service-account` flag to associate that service account with the trigger.
    

## Create a trigger

You can create an Eventarc trigger using the Google Cloud CLI or through the Google Cloud console.

**Note:** Filtering is done through an exact match and does not support wildcards or regular expressions. However, you can use the `--event-filters-path-pattern` flag in the following gcloud CLI command, or define a path pattern through the console. For more information, see [Understand path patterns](/eventarc/docs/path-patterns).

### Console

1.  In the Google Cloud console, go to the Eventarc **Triggers** page.
    
    [Go to Triggers](https://console.cloud.google.com/eventarc/triggers)
    
2.  Click add\_box **Create trigger**.
3.  Type a **Trigger name**.
    
    This is the ID of the trigger and it must start with a letter. It can contain up to 63 lowercase letters, numbers, or hyphens.
    
4.  For the **Trigger type**, select **Google sources**.
5.  In the **Event provider** list, select **Cloud Data Fusion**.
    
    Note that the event provider name used in the associated [Google Cloud documentation](/docs) might not have a prefix of _Cloud_ or _Google Cloud_. For example, on the console, _Memorystore for Redis_ is referred to as **Google Cloud Memorystore for Redis**.
    
6.  In the **Event type** list, from the _Direct_ events, select an event type.
7.  To specify the encoding of the event payload, in the **Event data content type** list, select **application/json** or **application/protobuf**.
    
    Note that an event payload formatted in JSON is larger than one formatted in Protobuf. This might impact reliability depending on your event destination and its limits on event size. For more information, see [Known issues](/eventarc/docs/issues).
    
8.  In the **Region** list, select the same region as the Google Cloud service that is generating events.
    
    For more information, see [Eventarc locations](/eventarc/docs/locations).
    
9.  If applicable to the event provider, click **Add filter** and specify the following:
    1.  In the **Attribute 1** field, depending on the direct event you chose, select a [resource ID](/apis/design/resource_names) that can act as an event filter.
    2.  Select an operator:
        -   **Equal**
        -   **Path pattern**
            
            For more information, see [Understand path patterns](/eventarc/docs/path-patterns).
            
    3.  In the **Attribute value 1** field, depending on the operator that you chose, type the exact value or apply a path pattern.
    4.  If more attribute filters are applicable, click **Add filter** and specify the appropriate values.
10.  Select the **Service account** that will invoke your service or workflow.
     
     Or, you can create a new service account.
     
     This specifies the Identity and Access Management (IAM) service account email associated with the trigger and to which you previously granted [specific roles](/eventarc/standard/docs/access-control) required by Eventarc.
     
11.  In the **Event destination** list, select **Cloud Run**.
12.  Select a service.  
     
     This is the name of the service that receives the events for the trigger. The service must be in the same project as the trigger and will receive events as HTTP POST requests sent to its root URL path (`/`), whenever the event is generated.
     
13.  Optionally, you can specify the **Service URL path** to send the incoming request to.
     
     This is the relative path on the destination service to which the events for the trigger should be sent. For example: `/`, `/route`, `route`, `route/subroute`.
     
14.  Optionally, to add a label, you can click add **Add label**. Labels are key-value pairs that help you organize your Google Cloud resources. For more information, see [What are labels?](/resource-manager/docs/labels-overview#what-are-labels)
15.  Click **Create**.

After a trigger is created, the event source filters cannot be modified. Instead, create a new trigger and delete the old one. For more information, see [Manage triggers](/eventarc/docs/managing-triggers).

### gcloud

You can create a trigger by running a `gcloud eventarc triggers create` command along with required and optional flags.

  gcloud eventarc triggers create TRIGGER \\
      \--location\=LOCATION \\
      \--destination-run-service\=DESTINATION\_RUN\_SERVICE \\
      \--destination-run-region\=DESTINATION\_RUN\_REGION \\
      \--event-filters\="type=EVENT\_FILTER\_TYPE" \\
      \--event-filters\="COLLECTION\_ID\=RESOURCE\_ID" \\
      \--event-filters-path-pattern\="COLLECTION\_ID\=PATH\_PATTERN" \\
      \--event-data-content-type\="EVENT\_DATA\_CONTENT\_TYPE" \\
      \--service-account\=SERVICE\_ACCOUNT\_NAME@PROJECT\_ID.iam.gserviceaccount.com"

Replace the following:

-   `TRIGGER`: the ID of the trigger or a fully qualified identifier.
-   `LOCATION`: the location of the Eventarc trigger. Alternatively, you can set the `eventarc/location` property; for example, `gcloud config set eventarc/location us-central1`.
    
    To avoid any performance and data residency issues, the location must match the location of the Google Cloud service that is generating events. For more information, see [Eventarc locations](/eventarc/docs/locations).
    
-   `DESTINATION_RUN_SERVICE`: the name of the Cloud Run service that receives the events for the trigger. The service can be in any of the Cloud Run supported locations and does not need to be in the same location as the trigger. However, the service must be in the same project as the trigger and will receive events as HTTP POST requests sent to its root URL path (`/`), whenever the event is generated.
-   `DESTINATION_RUN_REGION`: (optional) the region in which the destination Cloud Run service can be found. If not specified, it is assumed that the service is in the same region as the trigger.
-   `EVENT_FILTER_TYPE`: the identifier of the event. An event is generated when an API call for the method succeeds. For long-running operations, the event is only generated at the end of the operation, and only if the action is performed successfully. For a list of supported event types, see [Google event types supported by Eventarc](/eventarc/docs/reference/supported-events#directly-from-a-google-cloud-source).

-   `COLLECTION_ID` (optional): the [resource](/apis/design/resource_names) component that can act as an event filter, and is one of the following:
    -   `dnspeering`
    -   `instance`
-   `RESOURCE_ID`: the identifier of the resource used as the filtering value for the associated collection. For more information, see [Resource ID](/apis/design/resource_names#resource_id).
-   `PATH_PATTERN`: the [path pattern](/eventarc/docs/path-patterns) to apply when filtering for the resource.
-   `EVENT_DATA_CONTENT_TYPE`: (optional) the [encoding of the event payload](/eventarc/standard/docs/overview#event-format). This can be `application/json` or `application/protobuf`. The default encoding is `application/json`.
    
    Note that an event payload formatted in JSON is larger than one formatted in Protobuf. This might impact reliability depending on your event destination and its limits on event size. For more information, see [Known issues](/eventarc/docs/issues).
    
-   `SERVICE_ACCOUNT_NAME`: the name of your user-managed service account.
-   `PROJECT_ID`: your Google Cloud project ID.

Notes:

-   The `--event-filters="type=EVENT_FILTER_TYPE"` flag is required. If no other event filter is set, events for all resources are matched.
-   `EVENT_FILTER_TYPE` cannot be changed after creation. To change `EVENT_FILTER_TYPE`, create a new trigger and delete the old one.
-   Each trigger can have multiple event filters, comma delimited in one `--event-filters`\=\[`ATTRIBUTE`\=`VALUE`,...\] flag, or you can repeat the flag to add more filters. Only events that match all the filters are sent to the destination. Wildcards and regular expressions are not supported; however, when using the `--event-filters-path-pattern` flag, you can define a resource [path pattern](/eventarc/docs/path-patterns).
-   The `--service-account` flag is used to specify the Identity and Access Management (IAM) service account email associated with the trigger.
-   Optionally, specify a relative path on the destination Cloud Run service to which the events for the trigger should be sent by using the `--destination-run-path` flag.

Example:

  gcloud eventarc triggers create helloworld-trigger \\
      --location=us-central1 \\
      --destination-run-service=helloworld-events \\
      --destination-run-region=us-central1 \\
      --event-filters="type=google.cloud.datafusion.instance.v1.updated" \\
      --event-filters-path-pattern="instance=my-instance-\*" \\
      --service-account=${SERVICE\_ACCOUNT\_NAME}@${PROJECT\_ID}.iam.gserviceaccount.com

This command creates a trigger called `helloworld-trigger` for the event identified as `google.cloud.datafusion.instance.v1.updated` and matches events for `instance` IDs starting with `my-instance-`.

### Terraform

You can create a trigger for a Cloud Run destination using Terraform. For details, see [Create a trigger using Terraform](/eventarc/docs/creating-triggers-terraform).

**Note:** Although your trigger is created immediately, it can take up to two minutes for a trigger to propagate and filter events.

## List a trigger

You can confirm the creation of a trigger by listing Eventarc triggers using the Google Cloud CLI or through the Google Cloud console.

### Console

1.  In the Google Cloud console, go to the Eventarc **Triggers** page.
    
    [Go to Triggers](https://console.cloud.google.com/eventarc/triggers)
    
    This page lists your triggers in all locations, and includes details such as names, regions, event providers, destinations, and more.
    
2.  To filter your triggers:
    
    1.  Click filter\_list **Filter** or the **Filter triggers** field.
    2.  In the **Properties** list, select an option to filter the triggers by.
    
    You can select a single property or use the logical operator `OR` to add more properties.
    
3.  To sort your triggers, beside any supported column heading, click arrow\_upward **Sort**.
    

### gcloud

Run the following command to list your triggers:

gcloud eventarc triggers list \--location\=\-

This command lists your triggers in all locations, and includes details such as names, types, destinations, and statuses.

## What's next

-   [Learn more about Eventarc](/eventarc/standard/docs/overview).
-   [Learn how to manage triggers](/eventarc/docs/managing-triggers).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
