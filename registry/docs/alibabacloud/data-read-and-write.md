This topic describes the limits on resources such as projects, Logstores, machine groups, log groups, and alerts.

**Note**

-   Scale-out operations are free. However, you are charged for the scaled-out resources based on [standard pricing](/help/en/sls/billing-overview).
    
-   For more information about scale-out operations, see [Manage resource quotas](/help/en/sls/manage-a-project/#9ad2ba8f24glj).
    

## **Basic resource limits**

**Quota metrics**

**Description**

**Default value**

**Adjustable upper limit**

Project limit

You can create up to 150 projects per Alibaba Cloud account.

150

Logstore limit

The maximum number of Logstores in a project.

200

400

Shard limit

The maximum number of shards in a project.

400

800

Logtail configuration limit

The maximum number of Logtail configurations in a project.

200

400

Machine group limit

The maximum number of machine groups in a project.

200

400

Dashboard limit

The maximum number of dashboards in a project.

100

400

Chart limit per dashboard

The maximum number of charts in a dashboard.

200

400

Saved search limit

The maximum number of saved searches in a project.

100

400

Export task limit

The maximum number of export tasks in a project.

100

400

Import task limit

The maximum number of import tasks in a project.

100

400

Scheduled SQL limit

The maximum number of scheduled SQL jobs in a project.

100

400

Data transformation job limit

The maximum number of data transformation jobs in a project.

100

400

Alert limit

The maximum number of alerts in a project.

100

400

Subscription task limit

The maximum number of subscription tasks in a project.

100

400

Project write traffic limit (GB/min)

The total write traffic from all Logstores in a project per minute.

100

200

Project write requests limit (10,000/min)

The total number of write requests for all Logstores in a project per minute.

60

200

Project read requests limit (10,000/min)

The total number of read requests for all Logstores in a project per minute.

60

200

## **Logstore limits**

The pay-by-ingested-data billing mode supports all features of Simple Log Service. Value-added features such as query and analysis, data transformation, intelligent alerting, and data shipping do not incur additional fees. However, these features are subject to quota limits. The following table describes the limits.

Quota limit

Description

Data transformation volume

The maximum data transformation volume for a single Logstore is 100 TB per month.

Scheduled SQL data volume

The maximum data volume for scheduled SQL jobs for a single Logstore is 20 TB per month.

Data shipping volume

The maximum data shipping volume from a single Logstore is 100 TB per month.

Data consumption volume

The maximum data consumption volume from a single Logstore is 100 TB per month.

Alerting job data volume

The maximum data volume for alerting jobs for a single Logstore is 100 TB per month.

## **Data read and write limits**

**Category**

**Limitations**

**Description**

**Remarks**

[Project](/help/en/sls/manage-a-project/)

Write traffic

The maximum write traffic for raw data is 100 GB/min.

If the limit is exceeded, the system returns a 403 status code and the Inflow Quota Exceed error message.

Write requests

The maximum number of write requests is 600,000 per minute.

If the limit is exceeded, the system returns a 403 status code and the Write QPS Exceed error message.

Read requests

The maximum number of read requests is 600,000 per minute.

If the limit is exceeded, the system returns a 403 status code and the Read QPS Exceed error message.

[Shard](/help/en/sls/manage-shards)

Write traffic

Each shard supports a write throughput of 5 MB/s.

This is not a hard limit. If this limit is exceeded, the service is provided on a best-effort basis, and service quality is not guaranteed.

Write requests

The maximum number of write requests is 500 per second.

This is not a hard limit. If this limit is exceeded, the service is provided on a best-effort basis, and service quality is not guaranteed.

Read traffic

The maximum read throughput is 20 MB/s.

This is not a hard limit. If this limit is exceeded, the service is provided on a best-effort basis, and service quality is not guaranteed.

Read requests

The maximum number of read requests is 100 per second.

This is not a hard limit. If this limit is exceeded, the service is provided on a best-effort basis, and service quality is not guaranteed.
