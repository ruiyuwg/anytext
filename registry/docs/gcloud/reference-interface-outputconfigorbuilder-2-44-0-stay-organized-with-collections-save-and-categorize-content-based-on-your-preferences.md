-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OutputConfigOrBuilder (2.44.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface OutputConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBigqueryDestination()

```
public abstract OutputConfig.BigQueryDestination getBigqueryDestination()
```

The BigQuery location where the output is to be written to.

`.google.cloud.retail.v2.OutputConfig.BigQueryDestination bigquery_destination = 2;`

**Returns**

**Type**

**Description**

`[OutputConfig.BigQueryDestination](/java/docs/reference/google-cloud-retail/2.44.0/com.google.cloud.retail.v2.OutputConfig.BigQueryDestination)`

The bigqueryDestination.

### getBigqueryDestinationOrBuilder()

```
public abstract OutputConfig.BigQueryDestinationOrBuilder getBigqueryDestinationOrBuilder()
```

The BigQuery location where the output is to be written to.

`.google.cloud.retail.v2.OutputConfig.BigQueryDestination bigquery_destination = 2;`

**Returns**

**Type**

**Description**

`[OutputConfig.BigQueryDestinationOrBuilder](/java/docs/reference/google-cloud-retail/2.44.0/com.google.cloud.retail.v2.OutputConfig.BigQueryDestinationOrBuilder)`

### getDestinationCase()

```
public abstract OutputConfig.DestinationCase getDestinationCase()
```

**Returns**

**Type**

**Description**

`[OutputConfig.DestinationCase](/java/docs/reference/google-cloud-retail/2.44.0/com.google.cloud.retail.v2.OutputConfig.DestinationCase)`

### getGcsDestination()

```
public abstract OutputConfig.GcsDestination getGcsDestination()
```

The Google Cloud Storage location where the output is to be written to.

`.google.cloud.retail.v2.OutputConfig.GcsDestination gcs_destination = 1;`

**Returns**

**Type**

**Description**

`[OutputConfig.GcsDestination](/java/docs/reference/google-cloud-retail/2.44.0/com.google.cloud.retail.v2.OutputConfig.GcsDestination)`

The gcsDestination.

### getGcsDestinationOrBuilder()

```
public abstract OutputConfig.GcsDestinationOrBuilder getGcsDestinationOrBuilder()
```

The Google Cloud Storage location where the output is to be written to.

`.google.cloud.retail.v2.OutputConfig.GcsDestination gcs_destination = 1;`

**Returns**

**Type**

**Description**

`[OutputConfig.GcsDestinationOrBuilder](/java/docs/reference/google-cloud-retail/2.44.0/com.google.cloud.retail.v2.OutputConfig.GcsDestinationOrBuilder)`

### hasBigqueryDestination()

```
public abstract boolean hasBigqueryDestination()
```

The BigQuery location where the output is to be written to.

`.google.cloud.retail.v2.OutputConfig.BigQueryDestination bigquery_destination = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the bigqueryDestination field is set.

### hasGcsDestination()

```
public abstract boolean hasGcsDestination()
```

The Google Cloud Storage location where the output is to be written to.

`.google.cloud.retail.v2.OutputConfig.GcsDestination gcs_destination = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gcsDestination field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
