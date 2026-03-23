-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Observability](https://docs.cloud.google.com/docs/observability)
-   [Cloud Trace](https://docs.cloud.google.com/trace/docs)
-   [Guides](https://docs.cloud.google.com/trace/docs/overview)

Send feedback

# Java instrumentation sample Stay organized with collections Save and categorize content based on your preferences.

This document describes how to instrument a Java app to collect trace and metric data using the [OpenTelemetry](https://opentelemetry.io/docs/what-is-opentelemetry/) SDK and an OpenTelemetry collector. It also describes how to write structured JSON logs to standard output. To experiment with the instrumentation, download and run the sample app. This app uses the [Spring Boot Framework](https://spring.io/projects/spring-boot/) and generates log, metric, and trace data.

When you use an OpenTelemetry collector, you instrument your application with the SDK and the SDK's OTLP in-process exporter. This instrumentation is vendor neutral. You also deploy an OpenTelemetry collector that receives telemetry from the in-process exporter and then exports that telemetry to your Google Cloud project. To learn more about collectors, see [Google-Built OpenTelemetry Collector](/stackdriver/docs/instrumentation/google-built-otel).

We recommend that you use an OpenTelemetry collector to export your telemetry data when your environment supports use of collector. For some environments, you must use an in-process exporter that directly sends data to your Google Cloud project. To learn about in-process instrumentation, see [Migrate from the Trace exporter to the OTLP endpoint](/trace/docs/migrate-to-otlp-endpoints).

To learn more about instrumentation, see the following documents:

-   [Instrumentation and observability](/stackdriver/docs/instrumentation/overview).
-   [Choose an instrumentation approach](/stackdriver/docs/instrumentation/choose-approach).

**Note:** This document displays only selected portions of a working application. For example, the sample doesn't display the list of imported packages. However, the full application is available on GitHub. To view the full sample, click _more\_vert_ **More**, and then select **View on GitHub**.

## About manual and zero-code instrumentation

The instrumentation described in this document relies on OpenTelemetry zero-code instrumentation to send telemetry to your Google Cloud project. For Java, _zero-code instrumentation_ refers to the practice of dynamically injecting bytecode into libraries and frameworks to capture telemetry. Zero-code instrumentation can collect telemetry for things like inbound and outbound HTTP calls. For more information, see [Java Agent](https://opentelemetry.io/docs/zero-code/java/agent/).

OpenTelemetry also provides an API for adding custom instrumentation to your own code. OpenTelemetry refers to this as _manual instrumentation_. This document doesn't describe manual instrumentation. For examples and information about that topic, see [Manual instrumentation](https://opentelemetry.io/docs/languages/java/instrumentation).

## Before you begin

-   Sign in to your Google Cloud account. If you're new to Google Cloud, [create an account](https://console.cloud.google.com/freetrial) to evaluate how our products perform in real-world scenarios. New customers also get $300 in free credits to run, test, and deploy workloads.
-   [Install](/sdk/docs/install) the Google Cloud CLI.
    
-   If you're using an external identity provider (IdP), you must first [sign in to the gcloud CLI with your federated identity](/iam/docs/workforce-log-in-gcloud).
    
-   To [initialize](/sdk/docs/initializing) the gcloud CLI, run the following command:
    
    gcloud init
    
-   [Create or select a Google Cloud project](https://cloud.google.com/resource-manager/docs/creating-managing-projects).
    
    **Roles required to select or create a project**
    
    -   **Select a project**: Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.
    -   **Create a project**: To create a project, you need the Project Creator role (`roles/resourcemanager.projectCreator`), which contains the `resourcemanager.projects.create` permission. [Learn how to grant roles](/iam/docs/granting-changing-revoking-access).
    
    **Note**: If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.
    
    -   Create a Google Cloud project:
        
        gcloud projects create PROJECT\_ID
        
        Replace `PROJECT_ID` with a name for the Google Cloud project you are creating.
        
    -   Select the Google Cloud project that you created:
        
        gcloud config set project PROJECT\_ID
        
        Replace `PROJECT_ID` with your Google Cloud project name.
        
-   [Verify that billing is enabled for your Google Cloud project](/billing/docs/how-to/verify-billing-enabled#confirm_billing_is_enabled_on_a_project).
    
-   Enable the Cloud Logging, Cloud Monitoring, Cloud Trace, and Telemetry APIs:
    
    **Roles required to enable APIs**
    
    To enable APIs, you need the Service Usage Admin IAM role (`roles/serviceusage.serviceUsageAdmin`), which contains the `serviceusage.services.enable` permission. [Learn how to grant roles](/iam/docs/granting-changing-revoking-access).
    
    gcloud services enable logging.googleapis.com monitoring.googleapis.com cloudtrace.googleapis.com telemetry.googleapis.com
    

-   [Install](/sdk/docs/install) the Google Cloud CLI.
    
-   If you're using an external identity provider (IdP), you must first [sign in to the gcloud CLI with your federated identity](/iam/docs/workforce-log-in-gcloud).
    
-   To [initialize](/sdk/docs/initializing) the gcloud CLI, run the following command:
    
    gcloud init
    
-   [Create or select a Google Cloud project](https://cloud.google.com/resource-manager/docs/creating-managing-projects).
    
    **Roles required to select or create a project**
    
    -   **Select a project**: Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.
    -   **Create a project**: To create a project, you need the Project Creator role (`roles/resourcemanager.projectCreator`), which contains the `resourcemanager.projects.create` permission. [Learn how to grant roles](/iam/docs/granting-changing-revoking-access).
    
    **Note**: If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.
    
    -   Create a Google Cloud project:
        
        gcloud projects create PROJECT\_ID
        
        Replace `PROJECT_ID` with a name for the Google Cloud project you are creating.
        
    -   Select the Google Cloud project that you created:
        
        gcloud config set project PROJECT\_ID
        
        Replace `PROJECT_ID` with your Google Cloud project name.
        
-   [Verify that billing is enabled for your Google Cloud project](/billing/docs/how-to/verify-billing-enabled#confirm_billing_is_enabled_on_a_project).
    
-   Enable the Cloud Logging, Cloud Monitoring, Cloud Trace, and Telemetry APIs:
    
    **Roles required to enable APIs**
    
    To enable APIs, you need the Service Usage Admin IAM role (`roles/serviceusage.serviceUsageAdmin`), which contains the `serviceusage.services.enable` permission. [Learn how to grant roles](/iam/docs/granting-changing-revoking-access).
    
    gcloud services enable logging.googleapis.com monitoring.googleapis.com cloudtrace.googleapis.com telemetry.googleapis.com
    

2.  If you run the sample in the Cloud Shell, on Google Cloud resources, or on a local development environment, then the permissions listed in this section are sufficient. For production applications, typically a service account provides the credentials to write log, metric, and trace data.
    
    To get the permissions that you need to have the sample application to write log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project:
    
    -   [Logs Writer](/iam/docs/roles-permissions/logging#logging.logWriter) (`roles/logging.logWriter`)
    -   [Monitoring Metric Writer](/iam/docs/roles-permissions/monitoring#monitoring.metricWriter) (`roles/monitoring.metricWriter`)
    -   [Cloud Telemetry Traces Writer](/iam/docs/roles-permissions/telemetry#telemetry.tracesWriter) (`roles/telemetry.tracesWriter`)
    
    To get the permissions that you need to view your log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project:
    
    -   [Logs Viewer](/iam/docs/roles-permissions/logging#logging.viewer) (`roles/logging.viewer`)
    -   [Monitoring Viewer](/iam/docs/roles-permissions/monitoring#monitoring.viewer) (`roles/monitoring.viewer`)
    -   [Cloud Trace User](/iam/docs/roles-permissions/cloudtrace#cloudtrace.user) (`roles/cloudtrace.user`)
    
    For more information about granting roles, see [Manage access to projects, folders, and organizations](/iam/docs/granting-changing-revoking-access).
    
    You might also be able to get the required permissions through [custom roles](/iam/docs/creating-custom-roles) or other [predefined roles](/iam/docs/roles-overview#predefined).
    

## Instrument your app to collect traces, metrics, and logs

To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document:

1.  [Configure your app to use the OpenTelemetry Java Agent](#config-agent)
2.  [Configure OpenTelemetry](#config-otel)
3.  [Configure structured logging](#config-structured-logging)
4.  [Write structured logs](#write-structured-logging)

### Configure your app to use the OpenTelemetry Java Agent

To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the invocation of your app to use the [OpenTelemetry Java Agent](https://opentelemetry.io/docs/zero-code/java/agent/). This method of instrumenting your app is known as _automatic instrumentation_ because it doesn't require modifying your app code.

The following code sample illustrates a Dockerfile that downloads the OpenTelemetry Java Agent JAR file and updates the command line invocation to pass the `-javaagent` flag.

To view the full sample, click _more\_vert_ **More**, and then select **View on GitHub**.

```
RUN wget -O /opentelemetry-javaagent.jar https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v1.31.0/opentelemetry-javaagent.jar
CMD sh -c "java -javaagent:/opentelemetry-javaagent.jar -cp app:app/lib/* com.example.demo.DemoApplication \
	2>&1 | tee /var/log/app.log"
```

Alternatively, you can also set the `-javaagent` flag in the `JAVA_TOOL_OPTIONS` environment variable:

```
export JAVA_TOOL_OPTIONS="-javaagent:PATH/TO/opentelemetry-javaagent.jar"
```

### Configure OpenTelemetry

The default configuration for the OpenTelemetry Java Agent exports traces and metrics by using the [OTLP protocol](https://opentelemetry.io/docs/specs/otlp/). It also configures OpenTelemetry to use the [W3C Trace Context](https://www.w3.org/TR/trace-context/) format for [propagating trace context](https://opentelemetry.io/docs/concepts/context-propagation/#propagation). This configuration ensures that spans have the correct parent-child relationship within a trace.

For more information and configuration options, see [OpenTelemetry Java automatic instrumentation](https://opentelemetry.io/docs/instrumentation/java/automatic/agent-config/).

### Configure structured logging

To include the trace information as part of the JSON-formatted logs written to standard output, configure your app to output structured logs in JSON format. We recommend using [Log4j2](https://logging.apache.org/log4j/2.x/) as your logging implementation. The following code sample illustrates a `log4j2.xml` file configured to output JSON structured logs using the [JSON Template Layout](https://logging.apache.org/log4j/2.x/manual/json-template-layout.html):

```
<!-- Format JSON logs for the Cloud Logging agent
https://cloud.google.com/logging/docs/structured-logging#special-payload-fields -->

<!-- Log4j2's JsonTemplateLayout includes a template for Cloud Logging's special JSON fields
https://logging.apache.org/log4j/2.x/manual/json-template-layout.html#event-templates -->
<JsonTemplateLayout eventTemplateUri="classpath:GcpLayout.json">
  <!-- Extend the included GcpLayout to include the trace and span IDs from Mapped
  Diagnostic Context (MDC) so that Cloud Logging can correlate Logs and Spans

  Since log4j2 2.24.0, GcpLayout.json already includes trace context logging from MDC and
  the below additional fields are no longer needed -->
  <EventTemplateAdditionalField
    key="logging.googleapis.com/trace"
    format="JSON"
    value='{"$resolver": "mdc", "key": "trace_id"}'
  />
  <EventTemplateAdditionalField
    key="logging.googleapis.com/spanId"
    format="JSON"
    value='{"$resolver": "mdc", "key": "span_id"}'
  />
  <EventTemplateAdditionalField
    key="logging.googleapis.com/trace_sampled"
    format="JSON"
    value="true"
  />
</JsonTemplateLayout>
```

The previous configuration extracts information about the active span from SLF4J's [Mapped Diagnostic Context](https://www.slf4j.org/api/org/slf4j/MDC.html) and adds that information as attributes to the log. These attributes can then be used to correlate a log with a trace:

-   `logging.googleapis.com/trace`: Resource name of the trace associated with the log entry.
-   `logging.googleapis.com/spanId`: The span ID with the trace that is associated with the log entry.
-   `logging.googleapis.com/trace_sampled`: The value of this field must be `true` or `false`.

For more information about these fields, see the [`LogEntry`](/logging/docs/reference/v2/rest/v2/LogEntry) structure.

### Write structured logs

To write structured logs that link to a trace, use the [SLF4J](https://www.slf4j.org/) logging API. For example, the following statement shows how to call the `Logger.info()` method:

```
logger.info("handle /multi request with subRequests={}", subRequests);
```

The OpenTelemetry Java Agent automatically populates SLF4J's Mapped Diagnostic Context with the [span context](https://opentelemetry.io/docs/concepts/signals/traces/#span-context) of the current active span in the [OpenTelemetry Context](https://opentelemetry.io/docs/specs/otel/context/). The Mapped Diagnostic Context is then included in the JSON logs as described in [Configure structured logging](#config-structured-logging).

## Run a sample app configured to collect telemetry

The instrumentation in the sample app uses vendor-neutral formats, like JSON for log data and OTLP for metric and trace data. The app also uses the [Spring Boot Framework](https://spring.io/projects/spring-boot/). The OpenTelemetry `Collector` sends log and metric data to your project by using Google exporters. It sends your trace data to your project by using the Telemetry API, which uses OTLP.

The app has two endpoints:

-   The `/multi` endpoint is handled by the `handleMulti` function. The load generator in the app issues requests to the `/multi` endpoint. When this endpoint receives a request, it sends between three and seven requests to the `/single` endpoint on the local server.
    
    ```
    /**
     * handleMulti handles an http request by making 3-7 http requests to the /single endpoint.
     *
     * <p>OpenTelemetry instrumentation requires no changes here. It will automatically generate a
     * span for the controller body.
     */
    @GetMapping("/multi")
    public Mono<String> handleMulti() throws Exception {
      int subRequests = ThreadLocalRandom.current().nextInt(3, 8);
    
      // Write a structured log with the request context, which allows the log to
      // be linked with the trace for this request.
      logger.info("handle /multi request with subRequests={}", subRequests);
    
      // Make 3-7 http requests to the /single endpoint.
      return Flux.range(0, subRequests)
          .concatMap(
              i -> client.get().uri("http://localhost:8080/single").retrieve().bodyToMono(Void.class))
          .then(Mono.just("ok"));
    }
    ```
    
-   The `/single` endpoint is handled by the `handleSingle` function. When this endpoint receives a request, it sleeps for a short delay and then responds with a string.
    
    ```
    /**
     * handleSingle handles an http request by sleeping for 100-200 ms. It writes the number of
     * milliseconds slept as its response.
     *
     * <p>OpenTelemetry instrumentation requires no changes here. It will automatically generate a
     * span for the controller body.
     */
    @GetMapping("/single")
    public String handleSingle() throws InterruptedException {
      int sleepMillis = ThreadLocalRandom.current().nextInt(100, 200);
      logger.info("Going to sleep for {}", sleepMillis);
      Thread.sleep(sleepMillis);
      logger.info("Finishing the request");
      return String.format("slept %s\n", sleepMillis);
    }
    ```
    

### Download and deploy the app

**Note:** We recommend running the sample app by using Cloud Shell. However, if you want to run the sample app locally on Linux or Mac, then skip the first step in the following instructions.

To run the sample, do the following:

1.  In the Google Cloud console, activate Cloud Shell.
    
    [Activate Cloud Shell](https://console.cloud.google.com/?cloudshell=true)
    
    At the bottom of the Google Cloud console, a [Cloud Shell](/shell/docs/how-cloud-shell-works) session starts and displays a command-line prompt. Cloud Shell is a shell environment with the Google Cloud CLI already installed and with values already set for your current project. It can take a few seconds for the session to initialize.
    
2.  Clone the repository:
    
    ```
    git clone https://github.com/GoogleCloudPlatform/opentelemetry-operations-java
    ```
    
3.  Go to the sample directory:
    
    ```
    cd opentelemetry-operations-java/examples/instrumentation-quickstart
    ```
    
4.  Build and run the sample:
    
    ```
    docker compose up --abort-on-container-exit
    ```
    
    If you aren't running on Cloud Shell, then run the application with the `GOOGLE_APPLICATION_CREDENTIALS` environment variable pointing to a credentials file. [Application Default Credentials](/docs/authentication/application-default-credentials#personal) provides a credentials file at `$HOME/.config/gcloud/application_default_credentials.json`.
    
    ```
    # Set environment variables
    export GOOGLE_CLOUD_PROJECT="PROJECT_ID"
    export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.config/gcloud/application_default_credentials.json"
    export USERID="$(id -u)"
    
    # Run
    docker compose -f docker-compose.yaml -f docker-compose.creds.yaml up --abort-on-container-exit
    ```
    

### View your metrics

The OpenTelemetry instrumentation in the sample app generates Prometheus metrics that you can view by using the [Metrics Explorer](/monitoring/charts/metrics-explorer):

-   `Prometheus/http_server_duration_milliseconds/histogram` records the duration of server requests and stores the results in a histogram.
    
-   `Prometheus/http_client_duration_milliseconds/histogram` records the duration of client requests and stores the results in a histogram.
    

To view the metrics generated by the sample app, do the following:

1.  In the Google Cloud console, go to the _leaderboard_ **Metrics explorer** page:
    
    [Go to **Metrics explorer**](https://console.cloud.google.com/monitoring/metrics-explorer)
    
    If you use the search bar to find this page, then select the result whose subheading is **Monitoring**.
    
2.  In the toolbar of the Google Cloud console, select your Google Cloud project. For [App Hub](/app-hub/docs/overview) configurations, select the App Hub host project or the app-enabled folder's management project.
3.  In the **Metric** element, expand the **Select a metric** menu, enter `http_server` in the filter bar, and then use the submenus to select a specific resource type and metric:
    1.  In the **Active resources** menu, select **Prometheus Target**.
    2.  In the **Active metric categories** menu, select **Http**.
    3.  In the **Active metrics** menu, select a metric.
    4.  Click **Apply**.
4.  To add filters, which remove time series from the query results, use the [**Filter** element](/monitoring/charts/metrics-selector#filter-option).
    
5.  Configure how the data is viewed.  
    
    When the measurements for a metric are cumulative, Metrics Explorer automatically normalizes the measured data by the alignment period, which results in the chart displaying a rate. For more information, see [Kinds, types, and conversions](/monitoring/api/v3/aggregation#ts-conversion).
    
    When integer or double values are measured, such as with the two `counter` metrics, Metrics Explorer automatically sums all time series. To view the data for the `/multi` and `/single` HTTP routes, set the first menu of the **Aggregation** entry to **None**.
    
    For more information about configuring a chart, see [Select metrics when using Metrics Explorer.](/monitoring/charts/metrics-selector)
    

### View your traces

It might take several minutes before your trace data is available. For example, when trace data is received by your project, Google Cloud Observability might need to create a database to store that data. The creation of the database can take a few minutes and during that period, no trace data is available to view.

To view your trace data, do the following:

1.  In the Google Cloud console, go to the ![](/static/stackdriver/images/trace-explorer-icon.png) **Trace explorer** page:
    
    [Go to **Trace explorer**](https://console.cloud.google.com/traces/explorer)
    
    You can also find this page by using the search bar.
    
2.  In the table section of the page, select a row with the span name `/multi`.
3.  In the Gantt chart on the **Trace details** panel, select the span labeled `/multi`.
    
    A panel opens that displays information about the HTTP request. These details include the method, status code, number of bytes, and the user agent of the caller.
    
4.  To view the logs associated with this trace, select the **Logs & Events** tab.
    
    The tab shows individual logs. To view the details of the log entry, expand the log entry. You can also click **View Logs** and view the log by using the Logs Explorer.
    

For more information about using the Cloud Trace explorer, see [Find and explore traces](/trace/docs/finding-traces).

### View your logs

From the Logs Explorer, you can inspect your logs, and you can also view associated traces, when they exist.

1.  In the Google Cloud console, go to the segment **Logs Explorer** page:
    
    [Go to **Logs Explorer**](https://console.cloud.google.com/logs/query)
    
    If you use the search bar to find this page, then select the result whose subheading is **Logging**.
    
2.  Locate a log with the description of `handle /multi request`.
    
    To view the details of the log, expand the log entry.
    
3.  Click ![](/static/stackdriver/images/trace-explorer-icon.png) **Traces** on a log entry with the "handle /multi request" message, and then select **View trace details**.
    
    A **Trace details** panel opens and displays the selected trace.
    
    Your log data might be available several minutes before your trace data is available. If you encounter an error when viewing trace data either by searching for a trace by ID or by following the steps in this task, then wait a minute or two and retry the action.
    

For more information about using the Logs Explorer, see [View logs by using the Logs Explorer](/logging/docs/view/logs-explorer-interface).

## What's next

-   [OpenTelemetry](https://opentelemetry.io/docs/what-is-opentelemetry/)
-   [OTLP specification](https://opentelemetry.io/docs/specs/otlp/)
-   [Structured logging](/logging/docs/structured-logging)
-   [Troubleshooting Managed Service for Prometheus](/stackdriver/docs/managed-prometheus/troubleshooting)
-   [Troubleshoot Cloud Trace](/trace/docs/troubleshooting)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
