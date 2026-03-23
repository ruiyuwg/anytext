-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class FeatureStatsAnomaly (0.12.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class FeatureStatsAnomaly.

Stats and Anomaly generated at specific timestamp for specific Feature.

The start\_time and end\_time are used to define the time range of the dataset that current stats belongs to, e.g. prediction traffic is bucketed into prediction datasets by time window. If the Dataset is not defined by time window, start\_time = end\_time. Timestamp of the stats and anomalies always refers to end\_time. Raw stats and anomalies are stored in stats\_uri or anomaly\_uri in the tensorflow defined protos. Field data\_stats contains almost identical information with the raw stats in Vertex AI defined proto, for UI to display.

Generated from protobuf message `google.cloud.aiplatform.v1.FeatureStatsAnomaly`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ score`

`float`  

Feature importance score, only populated when cross-feature monitoring is enabled. For now only used to represent feature attribution score within range \[0, 1\] for [ModelDeploymentMonitoringObjectiveType.FEATURE\_ATTRIBUTION\_SKEW](/php/docs/reference/cloud-ai-platform/0.12.0/V1.ModelDeploymentMonitoringObjectiveType#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringObjectiveType__FEATURE_ATTRIBUTION_SKEW) and [ModelDeploymentMonitoringObjectiveType.FEATURE\_ATTRIBUTION\_DRIFT](/php/docs/reference/cloud-ai-platform/0.12.0/V1.ModelDeploymentMonitoringObjectiveType#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringObjectiveType__FEATURE_ATTRIBUTION_DRIFT).

`↳ stats_uri`

`string`  

Path of the stats file for current feature values in Cloud Storage bucket. Format: gs://<bucket\_name>/<object\_name>/stats. Example: gs://monitoring\_bucket/feature\_name/stats. Stats are stored as binary format with Protobuf message [tensorflow.metadata.v0.FeatureNameStatistics](https://github.com/tensorflow/metadata/blob/master/tensorflow_metadata/proto/v0/statistics.proto).

`↳ anomaly_uri`

`string`  

Path of the anomaly file for current feature values in Cloud Storage bucket. Format: gs://<bucket\_name>/<object\_name>/anomalies. Example: gs://monitoring\_bucket/feature\_name/anomalies. Stats are stored as binary format with Protobuf message Anoamlies are stored as binary format with Protobuf message [tensorflow.metadata.v0.AnomalyInfo](https://github.com/tensorflow/metadata/blob/master/tensorflow_metadata/proto/v0/anomalies.proto).

`↳ distribution_deviation`

`float`  

Deviation from the current stats to baseline stats. 1. For categorical feature, the distribution distance is calculated by L-inifinity norm. 2. For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence.

`↳ anomaly_detection_threshold`

`float`  

This is the threshold used when detecting anomalies. The threshold can be changed by user, so this one might be different from [ThresholdConfig.value](/php/docs/reference/cloud-ai-platform/0.12.0/V1.ThresholdConfig#_Google_Cloud_AIPlatform_V1_ThresholdConfig__getValue__).

`↳ start_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

The start timestamp of window where stats were generated. For objectives where time window doesn't make sense (e.g. Featurestore Snapshot Monitoring), start\_time is only used to indicate the monitoring intervals, so it always equals to (end\_time - monitoring\_interval).

`↳ end_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

The end timestamp of window where stats were generated. For objectives where time window doesn't make sense (e.g. Featurestore Snapshot Monitoring), end\_time indicates the timestamp of the data used to generate stats (e.g. timestamp we take snapshots for feature values).

### getScore

Feature importance score, only populated when cross-feature monitoring is enabled. For now only used to represent feature attribution score within range \[0, 1\] for [ModelDeploymentMonitoringObjectiveType.FEATURE\_ATTRIBUTION\_SKEW](/php/docs/reference/cloud-ai-platform/0.12.0/V1.ModelDeploymentMonitoringObjectiveType#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringObjectiveType__FEATURE_ATTRIBUTION_SKEW) and [ModelDeploymentMonitoringObjectiveType.FEATURE\_ATTRIBUTION\_DRIFT](/php/docs/reference/cloud-ai-platform/0.12.0/V1.ModelDeploymentMonitoringObjectiveType#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringObjectiveType__FEATURE_ATTRIBUTION_DRIFT).

**Returns**

**Type**

**Description**

`float`

### setScore

Feature importance score, only populated when cross-feature monitoring is enabled. For now only used to represent feature attribution score within range \[0, 1\] for [ModelDeploymentMonitoringObjectiveType.FEATURE\_ATTRIBUTION\_SKEW](/php/docs/reference/cloud-ai-platform/0.12.0/V1.ModelDeploymentMonitoringObjectiveType#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringObjectiveType__FEATURE_ATTRIBUTION_SKEW) and [ModelDeploymentMonitoringObjectiveType.FEATURE\_ATTRIBUTION\_DRIFT](/php/docs/reference/cloud-ai-platform/0.12.0/V1.ModelDeploymentMonitoringObjectiveType#_Google_Cloud_AIPlatform_V1_ModelDeploymentMonitoringObjectiveType__FEATURE_ATTRIBUTION_DRIFT).

**Parameter**

**Name**

**Description**

`var`

`float`  

**Returns**

**Type**

**Description**

`$this`

### getStatsUri

Path of the stats file for current feature values in Cloud Storage bucket.

Format: gs://<bucket\_name>/<object\_name>/stats. Example: gs://monitoring\_bucket/feature\_name/stats. Stats are stored as binary format with Protobuf message [tensorflow.metadata.v0.FeatureNameStatistics](https://github.com/tensorflow/metadata/blob/master/tensorflow_metadata/proto/v0/statistics.proto).

**Returns**

**Type**

**Description**

`string`

### setStatsUri

Path of the stats file for current feature values in Cloud Storage bucket.

Format: gs://<bucket\_name>/<object\_name>/stats. Example: gs://monitoring\_bucket/feature\_name/stats. Stats are stored as binary format with Protobuf message [tensorflow.metadata.v0.FeatureNameStatistics](https://github.com/tensorflow/metadata/blob/master/tensorflow_metadata/proto/v0/statistics.proto).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAnomalyUri

Path of the anomaly file for current feature values in Cloud Storage bucket.

Format: gs://<bucket\_name>/<object\_name>/anomalies. Example: gs://monitoring\_bucket/feature\_name/anomalies. Stats are stored as binary format with Protobuf message Anoamlies are stored as binary format with Protobuf message [tensorflow.metadata.v0.AnomalyInfo](https://github.com/tensorflow/metadata/blob/master/tensorflow_metadata/proto/v0/anomalies.proto).

**Returns**

**Type**

**Description**

`string`

### setAnomalyUri

Path of the anomaly file for current feature values in Cloud Storage bucket.

Format: gs://<bucket\_name>/<object\_name>/anomalies. Example: gs://monitoring\_bucket/feature\_name/anomalies. Stats are stored as binary format with Protobuf message Anoamlies are stored as binary format with Protobuf message [tensorflow.metadata.v0.AnomalyInfo](https://github.com/tensorflow/metadata/blob/master/tensorflow_metadata/proto/v0/anomalies.proto).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getDistributionDeviation

Deviation from the current stats to baseline stats.

1.  For categorical feature, the distribution distance is calculated by L-inifinity norm.
    1.  For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence.

**Returns**

**Type**

**Description**

`float`

### setDistributionDeviation

Deviation from the current stats to baseline stats.

1.  For categorical feature, the distribution distance is calculated by L-inifinity norm.
    1.  For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence.

**Parameter**

**Name**

**Description**

`var`

`float`  

**Returns**

**Type**

**Description**

`$this`

### getAnomalyDetectionThreshold

This is the threshold used when detecting anomalies.

The threshold can be changed by user, so this one might be different from [ThresholdConfig.value](/php/docs/reference/cloud-ai-platform/0.12.0/V1.ThresholdConfig#_Google_Cloud_AIPlatform_V1_ThresholdConfig__getValue__).

**Returns**

**Type**

**Description**

`float`

### setAnomalyDetectionThreshold

This is the threshold used when detecting anomalies.

The threshold can be changed by user, so this one might be different from [ThresholdConfig.value](/php/docs/reference/cloud-ai-platform/0.12.0/V1.ThresholdConfig#_Google_Cloud_AIPlatform_V1_ThresholdConfig__getValue__).

**Parameter**

**Name**

**Description**

`var`

`float`  

**Returns**

**Type**

**Description**

`$this`

### getStartTime

The start timestamp of window where stats were generated.

For objectives where time window doesn't make sense (e.g. Featurestore Snapshot Monitoring), start\_time is only used to indicate the monitoring intervals, so it always equals to (end\_time - monitoring\_interval).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasStartTime

### clearStartTime

### setStartTime

The start timestamp of window where stats were generated.

For objectives where time window doesn't make sense (e.g. Featurestore Snapshot Monitoring), start\_time is only used to indicate the monitoring intervals, so it always equals to (end\_time - monitoring\_interval).

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getEndTime

The end timestamp of window where stats were generated.

For objectives where time window doesn't make sense (e.g. Featurestore Snapshot Monitoring), end\_time indicates the timestamp of the data used to generate stats (e.g. timestamp we take snapshots for feature values).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasEndTime

### clearEndTime

### setEndTime

The end timestamp of window where stats were generated.

For objectives where time window doesn't make sense (e.g. Featurestore Snapshot Monitoring), end\_time indicates the timestamp of the data used to generate stats (e.g. timestamp we take snapshots for feature values).

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
