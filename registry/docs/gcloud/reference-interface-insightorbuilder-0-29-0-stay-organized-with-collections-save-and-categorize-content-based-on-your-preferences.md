-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface InsightOrBuilder (0.29.0) Stay organized with collections Save and categorize content based on your preferences.

0.69.0 (latest) 0.67.0 0.65.0 0.64.0 0.62.0 0.60.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.50.0 0.49.0 0.46.0 0.45.0 0.44.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface InsightOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getGenericInsight()

```
public abstract GenericInsight getGenericInsight()
```

Output only. A generic insight about an asset

`.google.cloud.migrationcenter.v1.GenericInsight generic_insight = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[GenericInsight](/java/docs/reference/google-cloud-migrationcenter/0.29.0/com.google.cloud.migrationcenter.v1.GenericInsight)`

The genericInsight.

### getGenericInsightOrBuilder()

```
public abstract GenericInsightOrBuilder getGenericInsightOrBuilder()
```

Output only. A generic insight about an asset

`.google.cloud.migrationcenter.v1.GenericInsight generic_insight = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[GenericInsightOrBuilder](/java/docs/reference/google-cloud-migrationcenter/0.29.0/com.google.cloud.migrationcenter.v1.GenericInsightOrBuilder)`

### getInsightCase()

```
public abstract Insight.InsightCase getInsightCase()
```

**Returns**

**Type**

**Description**

`[Insight.InsightCase](/java/docs/reference/google-cloud-migrationcenter/0.29.0/com.google.cloud.migrationcenter.v1.Insight.InsightCase)`

### getMigrationInsight()

```
public abstract MigrationInsight getMigrationInsight()
```

Output only. An insight about potential migrations for an asset.

`.google.cloud.migrationcenter.v1.MigrationInsight migration_insight = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[MigrationInsight](/java/docs/reference/google-cloud-migrationcenter/0.29.0/com.google.cloud.migrationcenter.v1.MigrationInsight)`

The migrationInsight.

### getMigrationInsightOrBuilder()

```
public abstract MigrationInsightOrBuilder getMigrationInsightOrBuilder()
```

Output only. An insight about potential migrations for an asset.

`.google.cloud.migrationcenter.v1.MigrationInsight migration_insight = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[MigrationInsightOrBuilder](/java/docs/reference/google-cloud-migrationcenter/0.29.0/com.google.cloud.migrationcenter.v1.MigrationInsightOrBuilder)`

### hasGenericInsight()

```
public abstract boolean hasGenericInsight()
```

Output only. A generic insight about an asset

`.google.cloud.migrationcenter.v1.GenericInsight generic_insight = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the genericInsight field is set.

### hasMigrationInsight()

```
public abstract boolean hasMigrationInsight()
```

Output only. An insight about potential migrations for an asset.

`.google.cloud.migrationcenter.v1.MigrationInsight migration_insight = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the migrationInsight field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
