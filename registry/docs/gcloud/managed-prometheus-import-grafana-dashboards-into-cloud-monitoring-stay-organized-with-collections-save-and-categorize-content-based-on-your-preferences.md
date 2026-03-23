-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Observability](https://docs.cloud.google.com/docs/observability)
-   [Google Cloud Observability](https://docs.cloud.google.com/stackdriver/docs)

Send feedback

# Import Grafana dashboards into Cloud Monitoring Stay organized with collections Save and categorize content based on your preferences.

This document describes how to import dashboard files in the [Grafana](https://grafana.com/) JSON format into Cloud Monitoring. You can import Grafana dashboards in the following ways:

-   By [using the Google Cloud console](#import-via-ui).
-   By [using the importer tool](#import-via-scripts).

The import process converts dashboard files in the JSON format used by Grafana into the JSON format used by Cloud Monitoring. A converted dashboard might differ from the original Grafana dashboard. If, for example, a Grafana dashboard uses features that aren't available in Cloud Monitoring dashboards, then those aspects of the Grafana dashboard are not converted. These differences are listed in the results of the import.

You can only import dashboards that use PromQL expressions and Prometheus data sources. Dashboards that use other forms of querying or data sources might not import successfully.

For information about importing Prometheus alerts into Cloud Monitoring, see [Migrate alerting rules and receivers from Prometheus](/monitoring/promql/promql-migrate).

For general information about managing your imported dashboards, see [Create and manage custom dashboards](/monitoring/charts/dashboards).

## Before you begin

Whether you use the Google Cloud console or the importer tool to import your dashboards, you must have sufficient [authorization](#authz), and you need [dashboards to import](#grafana-json-files). When using the importer tool, there are [additional prerequisites](#byb-importer-tool).

### Authorization

To get the permissions that you need to create and modify custom dashboards, ask your administrator to grant you the [Monitoring Editor](/iam/docs/roles-permissions/monitoring#monitoring.editor) (`roles/monitoring.editor`) IAM role on your project. For more information about granting roles, see [Manage access to projects, folders, and organizations](/iam/docs/granting-changing-revoking-access).

You might also be able to get the required permissions through [custom roles](/iam/docs/creating-custom-roles) or other [predefined roles](/iam/docs/roles-overview#predefined).

For more information about roles, see [Control access with Identity and Access Management](/monitoring/access-control).

### Collect the Grafana dashboards to import

To import Grafana dashboards, you must have them stored locally as files in JSON format. You might want to create a directory specifically for these dashboard files.

## Import dashboards by using the Google Cloud console

You can import Grafana dashboards into Cloud Monitoring from the Monitoring **Dashboards** page in the Google Cloud console.

### Import Grafana dashboards

To import one or more Grafana dashboards, do the following

1.  In the Google Cloud console, go to the dashboard **Dashboards** page:
    
    [Go to **Dashboards**](https://console.cloud.google.com/monitoring/dashboards)
    
    If you use the search bar to find this page, then select the result whose subheading is **Monitoring**.
    
2.  In the toolbar of the Google Cloud console, select your Google Cloud project. For [App Hub](/app-hub/docs/overview) configurations, select the App Hub host project or management project.
    
3.  Click **Import Dashboard**.
    
4.  Click **Browse** to navigate to the directory where you have stored your Grafana dashboards in JSON format, and select the dashboards you want to import.
    
    Each JSON file is staged after it is selected; the **Staged Files** pane indicates whether there are any issues in the conversion.
    
    -   Click _code_ **View converted JSON** to see the results of the conversion.
    -   Click _close_ **Remove file** to remove a dashboard from the import operation.
5.  Click _save\_alt_ **Import**. The **Import results** pane indicates whether or not each dashboard has been successfully imported.
    
6.  To view a successfully imported dashboard, click _open\_in\_new_ **View**.
    

### View your imported dashboards

To view your imported dashboards, do the following:

1.  In the Google Cloud console, go to the dashboard **Dashboards** page:
    
    [Go to **Dashboards**](https://console.cloud.google.com/monitoring/dashboards)
    
    If you use the search bar to find this page, then select the result whose subheading is **Monitoring**.
    
2.  In the toolbar of the Google Cloud console, select your Google Cloud project. For [App Hub](/app-hub/docs/overview) configurations, select the App Hub host project or management project.
3.  Locate the dashboard that you want to view in the list. To filter the list of dashboards, you can do the following:
    
    -   In the **Type** menu, select **Custom**.
    -   In the **Labels** pan, select the `cloud-monitoring-dashboard-importer` label to see only Grafana dashboards imported by using the Google Cloud console.
        
        **Note:** You can also create your own labels and add them to custom dashboards, like Grafana dashboards that you import. Labels can help you manage your dashboards. For example, you might add the label `prod` to dashboards that display information about production systems.
        
    -   Use the filter bar search by name.
        

### Add or remove user-defined labels

You can add labels only to custom dashboards, which include dashboards that you import. When a dashboard displays the sell **Add labels to dashboard** button, then you can configure which labels are applied to the dashboard.

To add or remove user-defined labels to a dashboard, do the following:

1.  In the Google Cloud console, go to the dashboard **Dashboards** page:
    
    [Go to **Dashboards**](https://console.cloud.google.com/monitoring/dashboards)
    
    If you use the search bar to find this page, then select the result whose subheading is **Monitoring**.
    
2.  In the list of dashboards, locate the dashboard and then click sell **Add labels to dashboard**.
3.  Do one of the following:
    -   To create a label and add it to your dashboard, in the **Create a new label** section, enter the name of the label in the textbox and then click **Create and apply**.
        
    -   To configure which labels are added to your dashboard, click _arrow\_drop\_down_ **Select labels to apply**, select the labels, and then click **Ok**.
4.  To save your changes, click **Confirm**.

## Import dashboards by using the importer tool

You can use the importer tool to convert Grafana dashboards and upload them to Cloud Monitoring as a single operation, or you can perform the conversion and upload steps separately. You might choose this approach if you want to edit the converted dashboards before uploading them.

### Additional prerequisites

Before you can install and run the dashboard importer, you must do the following:

1.  Use an environment that supports [Bash](https://www.gnu.org/software/bash/) shell scripts.
2.  Have or [install Git](https://git-scm.com/).
3.  Have or [install Node.js](https://nodejs.org/en/download), version 20.4.1 or newer.
4.  Have or [install the Google Cloud CLI](/sdk/docs/install-sdk). If you already have the gcloud CLI installed, ensure that you have the latest version by running the [`gcloud components update`](/sdk/gcloud/reference/components/update) command.

### Obtain the dashboard importer

The dashboard importer is stored in the [`monitoring-dashboard-samples` GitHub repository](https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/tree/master/scripts/dashboard-importer). To obtain and set up the importer, do the following:

1.  Clone the repository:
    
    git clone https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples
    
2.  Change to the directory for the dashboard importer:
    
    cd monitoring-dashboard-samples/scripts/dashboard-importer
    
3.  Install the node modules and build the files
    
    npm install && npm run build
    

The dashboard importer includes the following scripts:

-   `import.sh`, which converts dashboards and optionally uploads the converted dashboards to Cloud Monitoring.
    
-   `upload.sh`, which uploads the converted dashboards—or any Monitoring dashboards—to Cloud Monitoring. The `import.sh` script calls this script to do the upload.
    

When you use the `import.sh` script, you must specify the location of the Grafana dashboards to convert. The importer creates a directory that contains the converted dashboards and other information. The following sections describe these directories.

#### Grafana dashboards to convert

You can use the dashboard importer to convert one or more dashboards at a time by specifying a path to the dashboards files.

-   You can specify the path to a directory that contains dashboards. Only files in the directory that have the `.json` extension are processed.
    
-   You can specify the path to a single JSON file. The filename must have the `.json` extension.
    

#### Converted dashboards and other information

When the importer runs the first time, it creates a `reports` subdirectory. Every time you run the importer, you get a new output directory under the `reports` directory, named by the date and time. The name of the output directory has the following structure:  
`reports/YYYY-M-D/HH:MM:SS`

For each invocation of the importer, the output directory contains the following:

-   A file or files with the same names as the original Grafana dashboards, but now in Cloud Monitoring JSON format.
-   A `report.json` file, which records the following information for each converted dashboard:
    -   The name and location of the Grafana dashboard file that was converted.
    -   The name and location of the converted Monitoring dashboard file.
    -   Notices about any features in the Grafana dashboard that have no corresponding feature in Cloud Monitoring and therefore couldn't be included in the converted dashboard.
    -   Any errors that occurred in the conversion.

If you have uploaded the dashboards, the report directory also includes an `upload_HH:MM:SS.txt` file, which includes the URL to which the dashboard was uploaded.

### Import Grafana dashboards

To convert Grafana dashboards and upload them to Cloud Monitoring, use the `import.sh` script:

./import.sh PATH\_TO\_DIRECTORY\_OR\_FILE PROJECT\_ID

This script does the following:

1.  Converts dashboards in `PATH_TO_DIRECTORY_OR_FILE` from the JSON format used by Grafana into the JSON format used by Cloud Monitoring.
2.  Uploads the converted dashboards into your Google Cloud project PROJECT\_ID by using the Google Cloud CLI.
    
    If you have not authenticated to the gcloud CLI, then run the [`gcloud auth login`](/sdk/gcloud/reference/auth/login) command before running the `import.sh` script.
    

You can import all the Grafana dashboards in a directory, or you can specify a single dashboard in the directory to import.

-   To import all the dashboards in the `GRAFANA_DASHBOARDS_DIR` directory into the PROJECT\_ID Google Cloud project, specify the directory, relative to the importer directory, and the destination project ID when invoking the script:
    
    ./import.sh GRAFANA\_DASHBOARDS\_DIR PROJECT\_ID
    
-   To convert only the `MY_GRAFANA_DASHBOARD.json` dashboard in the `GRAFANA_DASHBOARDS_DIR` directory, include the dashboard filename, relative to the importer directory, when invoking the script:
    
    ./import.sh GRAFANA\_DASHBOARDS\_DIR/MY\_GRAFANA\_DASHBOARD.json PROJECT\_ID
    

The dashboard importer includes a sample Grafana dashboard as `examples/k8s_cluster_example.json`. The following command imports that dashboard into the specified project:

./import.sh examples/k8s\_cluster\_example.json PROJECT\_ID

When invoked with the PROJECT\_ID `my-project-test-1`, the output resembles the following:

Converting: Kubernetes Cluster Overview
✓ Kubernetes Cluster Overview converted successfully

Conversion of examples/k8s\_cluster\_example.json complete. Conversion Report located at: reports/2023-9-28/22:14:57/report.json

To upload these dashboard(s) manually, you can run:
./upload.sh reports/2023-9-28/22:14:57/ <PROJECT\_ID>

Conversion Complete. Proceeding to uploading...

Now running: ./upload.sh reports/2023-9-28/22:14:57/ my-project-test-1

Uploading 1 dashboard(s) from a directory with the following args:
Directory: reports/2023-9-28/22:14:57/
Project: my-project-test-1

The following are your dashboards:
- k8s\_cluster\_example.json

After the `import.sh` script has created the output directory and converted the dashboards, but before it uploads the converted dashboards to your project, it prompts you for confirmation. Enter `y`, and the script uploads the dashboard and prints the URL for the new dashboard:

Would you like to continue? (y/n) y

✓ k8s\_cluster\_example.json successfully uploaded:
https://console.cloud.google.com/monitoring/dashboards/builder/9c341ef8-cfef-4bdd-98d5-821571c520ef?project=my-project-test-1

Upload log created in reports/2023-9-28/22:14:57/upload\_22:14:57.txt

Need to troubleshoot? Please visit:
https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/tree/master/scripts/dashboard-importer/README.md#troubleshooting

### Convert Grafana dashboards without uploading

If you want to inspect or edit the converted dashboards before uploading them, then omit the PROJECT\_ID value when invoking the `import.sh` script:

./import.sh PATH\_TO\_DIRECTORY\_OR\_FILE

The importer converts the dashboards as described in [Import Grafana dashboards](#grafanadb-convert-import) but does not upload the converted dashboards to Cloud Monitoring.

You can run the upload step later, by using the `upload.sh` script manually.

### Upload dashboards manually

To manually upload dashboards in Cloud Monitoring JSON format, use the `upload.sh` script.

    ./upload.sh PATH\_TO\_DIRECTORY\_OR\_FILE PROJECT\_ID

The `upload.sh` script uses the Google Cloud CLI to upload the JSON files. If you have not authenticated to the gcloud CLI, then run the [`gcloud auth login`](/sdk/gcloud/reference/auth/login) command before running the `upload.sh` script.

-   To upload all the dashboards in a `reports/YYYY-M-D/HH:MM:SS` directory, specify the directory, relative to the importer directory, and the destination project ID when invoking the script:
    
    ./upload.sh `reports/YYYY-M-D/HH:MM:SS` PROJECT\_ID
    
    When uploading all dashboards from a directory, the script prompts you to continue or exit before uploading the dashboards.
    
-   To upload a specific dashboard in a `reports/YYYY-M-D/HH:MM:SS` directory, specify the directory and filename, relative to the importer directory, and the destination project ID when invoking the script:
    
    ./upload.sh `reports/YYYY-M-D/HH:MM:SS`/MY\_MONITORING\_DASHBOARD.json PROJECT\_ID
    
    When uploading a single dashboard from a directory, the script runs without prompting you before uploading the dashboards.
    

For example, the following command uploads a dashboard stored in a `reports` subdirectory to the Google Cloud project `my-project-test-1`:

./upload.sh reports/2023-9-26/22:48:31/k8s\_cluster\_example.json my-project-test-1
Uploading json file: k8s\_cluster\_example.json to project: my-project-test-1...

✓ k8s\_cluster\_example.json successfully uploaded:
https://console.cloud.google.com/monitoring/dashboards/builder/25956d9a-93e2-410c-ada1-ec6872cb6665?project=my-project-test-1

### View your uploaded dashboards

To view your uploaded dashboards, do the following:

1.  In the Google Cloud console, go to the dashboard **Dashboards** page:
    
    [Go to **Dashboards**](https://console.cloud.google.com/monitoring/dashboards)
    
    If you use the search bar to find this page, then select the result whose subheading is **Monitoring**.
    
2.  Locate the dashboard that you want to view in the list. To filter the list of dashboards, you can do the following:
    
    -   Select the **Custom** category to see only user-defined dashboards.
    -   Select the `cloud-ops-grafana-importer` label to see only Grafana dashboards imported by using the importer tool.
    -   Use the filter bar search by name.

### Troubleshooting

We occasionally publish small updates and bug fixes to the tool. Before attempting further troubleshooting, first try fixing the issue by using `git pull` to pull down the latest version of the repository and then importing again.

For information about problems with the converted dashboards, such as charts not showing data, see the importer's [`README`](https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples/tree/master/scripts/dashboard-importer/README.md#troubleshooting) file.

## What's next

-   [Create and manage custom dashboards](/monitoring/charts/dashboards)
-   [Migrate alerting rules and receivers from Prometheus](/monitoring/promql/promql-migrate)
-   [View and manage metric usage](/monitoring/docs/metrics-management)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
