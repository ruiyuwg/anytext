When you call the ConfigureMigrationJob or ConfigureSynchronizationJob operation, you can specify this parameter to meet special requirements, for example, whether to automatically start a precheck.

## Precautions

To ensure that you can use this parameter, you must use the latest version of SDK. For more information, see [Download SDKs](/help/en/dts/developer-reference/download-sdks#concept-2022113 "Data Transmission Service (DTS) supports Java, Python, Go, and PHP. This topic provides the links to download and get started with the SDKs for these languages.").

## Related API operations

-   [ConfigureMigrationJob](/help/en/dts/developer-reference/api-configuremigrationjob#doc-api-Dts-ConfigureMigrationJob "Configures a data migration task.")
-   [ConfigureSynchronizationJob](/help/en/dts/developer-reference/api-configuresynchronizationjob#doc-api-Dts-ConfigureSynchronizationJob "Configures a data synchronization task.")

## Definition of the MigrationReserved parameter

The value of the MigrationReserved parameter is a JSON string. The following table describes the parameter definition.

  

Parameter

Applicable API operation

Description

autoStartModulesAfterConfig

-   [ConfigureMigrationJob](/help/en/dts/developer-reference/api-configuremigrationjob#doc-api-Dts-ConfigureMigrationJob "Configures a data migration task.")
-   [ConfigureSynchronizationJob](/help/en/dts/developer-reference/api-configuresynchronizationjob#doc-api-Dts-ConfigureSynchronizationJob "Configures a data synchronization task.")

Specifies whether to automatically start a precheck after the task is configured. Valid values:

-   all: After you configure the DTS task, the precheck module and all subsequent modules are automatically started.
-   none: After you configure the DTS task, the precheck module and subsequent modules are not automatically started. In this case, you must manually start the task.

Default value: all.

targetTableMode

-   [ConfigureMigrationJob](/help/en/dts/developer-reference/api-configuremigrationjob#doc-api-Dts-ConfigureMigrationJob "Configures a data migration task.")
-   [ConfigureSynchronizationJob](/help/en/dts/developer-reference/api-configuresynchronizationjob#doc-api-Dts-ConfigureSynchronizationJob "Configures a data synchronization task.")

Specifies whether to ignore schema name conflicts during precheck. Valid values:

-   0: reports an error and stops the precheck if schema name conflicts are detected.
-   2: ignores schema name conflicts and continues the precheck.

srcRedisType

[ConfigureSynchronizationJob](/help/en/dts/developer-reference/api-configuresynchronizationjob#doc-api-Dts-ConfigureSynchronizationJob "Configures a data synchronization task.")

The value is set to enterprise, which indicates ApsaraDB for Redis Enhanced Edition (Tair) instance.

**Note** This parameter is applicable only to data synchronization between ApsaraDB for Redis Enhanced Edition (Tair) instances.

destRedisType

## Sample request

```
{
    "autoStartModulesAfterConfig": "none",
    "targetTableMode": 2
}
```
