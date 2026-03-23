On **September 15, 2026**, all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will **reach their planned end of life**. You will not be able to use environments with these versions. We recommend planning [migration to Cloud Composer 3](/composer/docs/latest/migrate-composer-1-to-3). Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Data analytics](https://docs.cloud.google.com/docs/data)
-   [Cloud Composer](https://docs.cloud.google.com/composer/docs)
-   [Composer 2 Guides](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)

Send feedback

# Migrate environments to Cloud Composer 3 (migration script) Stay organized with collections Save and categorize content based on your preferences.

Cloud Composer 3 | **Cloud Composer 2** | Cloud Composer 1

This page explains how to migrate DAGs, data and configuration from your existing Cloud Composer 2 environment to a new Cloud Composer 3 environment using the [migration script](https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/composer/tools/composer_migrate.md).

## Other migration guides

From

To

Method

Guide

Cloud Composer 2

Cloud Composer 3

Side-by-side, using the migration script

This guide

Cloud Composer 2

Cloud Composer 3

Side-by-side, using snapshots

[Snapshots migration guide](/composer/docs/composer-2/migrate-composer-3)

Cloud Composer 1, Airflow 2

Cloud Composer 3

Side-by-side, using snapshots

[Snapshots migration guide](/composer/docs/composer-1/migrate-composer-1-to-3)

Cloud Composer 1, Airflow 2

Cloud Composer 2

Side-by-side, using snapshots

[Snapshots migration guide](/composer/docs/composer-1/migrate-composer-2-snapshots-af-2)

Cloud Composer 1, Airflow 2

Cloud Composer 2

Side-by-side, manual transfer

[Manual migration guide](/composer/docs/composer-1/migrate-composer-2-af-2)

Cloud Composer 1, Airflow 1

Cloud Composer 2, Airflow 2

Side-by-side, using snapshots

[Snapshots migration guide](/composer/docs/composer-1/migrate-composer-2-snapshots-af-1)

Cloud Composer 1, Airflow 1

Cloud Composer 2, Airflow 2

Side-by-side, manual transfer

[Manual migration guide](/composer/docs/composer-1/migrate-composer-2-af-1)

Cloud Composer 1, Airflow 1

Cloud Composer 1, Airflow 2

Side-by-side, manual transfer

[Manual migration guide](/composer/docs/composer-1/migrate-environments-airflow-2)

## About the migration script

The migration script is a Python script for side-by-side migrations that automates the migration process from Cloud Composer 2 to Cloud Composer 3. It uses [environment snapshots](/composer/docs/composer-2/save-load-snapshots) to transfer the environment's configuration to the new environment.

The script performs the following actions:

1.  Obtains the configuration of the Cloud Composer 2 environment.
    
2.  Creates a Cloud Composer 3 environment with configuration that matches the obtained configuration.
    
    Because Cloud Composer 3 environments have a [different architecture](/composer/docs/composer-3/environment-architecture), some parameters might be adjusted to match the differences. You can also adjust most of the environment's parameters later.
    
3.  Pauses all DAGs in the Cloud Composer 2 environment one by one. only dags that were unpaused in the Cloud Composer 2 environment will be unpaused later.
    
    **Note:** if your environment has a large number of DAGs, this process can take a long time. You can use the [composer\_dags](https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/composer/tools/composer_dags.py) script to pause all DAGs before performing the migration and to unpause the DAGs after the migration finishes. In this case, the migration script won't unpause the DAGs. For more information, see the [README file](https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/composer/tools/composer_dags.py) of the composer\_dags script on GitHub.
    
4.  Saves a snapshot of the source Cloud Composer 2 environment. The snapshot is saved in the default location for snapshots, the Cloud Composer 2 environment's bucket.
    
5.  Loads the snapshot to the Cloud Composer 3 environment.
    
    The script doesn't check the compatibility of custom PyPI packages, environment variables, and Airflow configuration option overrides with the Cloud Composer 3 environment.
    
    In case of conflicts, the migration fails after the Cloud Composer 3 environment is created, during the process of loading the snapshot. In this case, you can either adjust the configuration of your Cloud Composer 2 environment to resolve the conflict, or [migrate without the migration script](/composer/docs/composer-2/migrate-composer-3) and skip loading custom PyPI packages, environment variables, or Airflow configuration overrides when you load the snapshot.
    
6.  Unpauses the DAGs in the Cloud Composer 3 environment. If some DAGs were already paused before you ran the script, they will remain paused.
    

The script has the following limitations:

-   The script always creates a new Cloud Composer 3 environment. It's not possible to load the snapshot to an existing Cloud Composer 3 environment. To do so, you can [migrate using snapshots](/composer/docs/composer-2/migrate-composer-3), without using the migration script.
    
-   The script creates a Cloud Composer 3 environment only in the same region and project as the Cloud Composer 2 environment.
    
-   You can only load snapshots to the same or later version of Airflow. For example, you can't load a snapshot from Airflow 2.10.2 to Airflow 2.9.3.
    
-   Only Cloud Composer 2 environments can be migrated with the migration script.
    

## Before you begin

-   Because the migration script creates an environment, and then saves and loads a snapshot, the migration process can take over one hour of time.
    
-   The script uses [snapshots](/composer/docs/composer-2/save-load-snapshots). Snapshots are supported
    
-   in Cloud Composer 2 version 2.0.9 and later versions.
    
-   Your account requires [an IAM role](/composer/docs/composer-2/access-control) that can create environments, save snapshots, and load snapshots.
    
-   The maximum size of the Airflow database that supports snapshots is 20 GB. If your environment's database takes more than 20 GB, [reduce the size of the Airflow database](/composer/docs/composer-2/cleanup-airflow-database).
    
-   The total number of objects in the `/dags`, `/plugins` and `/data` folders in the environment's bucket must be less than 100,000 to create snapshots.
    
-   If you use the XCom mechanism to transfer files, make sure that you [use it according to Airflow's guidelines](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/xcoms.html#object-storage-xcom-backend). Transferring big files or a large number of files using XCom impacts Airflow database's performance and can lead to failures when loading snapshots or upgrading your environment. Consider using alternatives such as Cloud Storage to transfer large volumes of data.
    

## Migrate to Cloud Composer 3

This section describes the migration process using the migration script.

### Check the differences between Cloud Composer 2 and Cloud Composer 3

Check the list of differences [between Cloud Composer 2 and Cloud Composer 3](/composer/docs/composer-versioning-overview).

Make sure that your environment doesn't use features that aren't yet available in Cloud Composer 3 and that you are familiar with how to use and configure features specific to Cloud Composer 3.

### Make sure that your DAGs are compatible with Cloud Composer 3

Make sure that your DAGs are compatible with Cloud Composer 3 by following these suggestions:

-   The [list of packages](/composer/docs/composer-versions) in the Cloud Composer 3 environment can be different than in your Cloud Composer 2 environment. This might affect the compatibility of your DAGs with Cloud Composer 3.
    
-   In Cloud Composer 3, the environment's cluster [is located in the tenant project](/composer/docs/composer-3/environment-architecture). Make sure that your DAGs are compatible with this change. In particular, [`KubernetesPodOperator`](/composer/docs/composer-3/use-kubernetes-pod-operator) workloads now scale independently from your environment and it's not possible to use Pod affinity configs.
    

### Check for configuration compatibility

You can [do an upgrade check](/composer/docs/composer-2/upgrade-environments#major-version-upgrade) to see if your Cloud Composer 2 environment's configuration is compatible with Cloud Composer 3. We recommend to resolve all blocking conflicts that are reported by this check before starting the migration.

### Install script's dependencies

-   The script requires Python version 3.8 and later versions.
    
-   The migration script uses gcloud CLI and `curl` utilities. Make sure that both utilities are installed on your computer.
    

### Download the script

Download the migration script (`composer_migrate.py`) from its [repository on GitHub](https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/composer/tools/composer_migrate.py).

### Authorize in gcloud CLI

[Authorize](/sdk/gcloud/reference/auth/login) in gcloud CLI:

```
gcloud auth login
```

### Preview the new environment's parameters

You can preview the Cloud Composer 3 environment's parameters before migrating. You can use this to see how the Cloud Composer 2 environment's configuration corresponds to Cloud Composer 3.

Airflow configuration option overrides, custom PyPI packages, and environment variables are loaded from the environment's snapshot and are not displayed in the preview.

#### Expand

Run the following command:

```
python3 composer_migrate.py \
    --project PROJECT_ID \
    --location LOCATION \
    --source_environment COMPOSER_2_ENV \
    --target_environment COMPOSER_3_ENV \
    --target_airflow_version COMPOSER_3_AIRFLOW_VERSION \
    --dry_run
```

Replace the following:

-   `PROJECT_ID`: the [Project ID](/resource-manager/docs/creating-managing-projects).
-   `COMPOSER_2_ENV`: the name of your Cloud Composer 2 environment.
-   `LOCATION`: the region where the Cloud Composer 2 environment is located. The Cloud Composer 3 environment will be created in the same region.
-   `COMPOSER_3_AIRFLOW_VERSION`: the version of Airflow of the Cloud Composer 3 environment. This version must be the same or later version than in the Cloud Composer 2 environment and must be one of the [versions](/composer/docs/composer-versions) available in Cloud Composer 3.

Example:

```
python3 composer_migrate.py \
    --project example-project \
    --location us-central1 \
    --source_environment example-composer-2-environment \
    --target_environment example-composer-3-environment \
    --target_airflow_version 2.10.2
```

### Check environment's health

Make sure that your Cloud Composer 2 environment that you want to migrate is healthy.

If your environment isn't healthy, the migration process will fail after creating a new Cloud Composer 3 environment because it won't be possible to create a snapshot.

See [Use the monitoring dashboard](/composer/docs/composer-2/use-monitoring-dashboard) for more information about ways to check environment's health and database health.

### Run the migration script

**Caution:** If any changes or DAG runs happen in your Cloud Composer 2 environment after you run the script, then information about these changes isn't transferred to the Cloud Composer 3 environment.

Run the following command:

```
python3 composer_migrate.py \
    --project PROJECT_ID \
    --location LOCATION \
    --source_environment COMPOSER_2_ENV \
    --target_environment COMPOSER_3_ENV \
    --target_airflow_version COMPOSER_3_AIRFLOW_VERSION
```

Replace the following:

-   `PROJECT_ID`: the [Project ID](/resource-manager/docs/creating-managing-projects).
-   `COMPOSER_2_ENV`: the name of your Cloud Composer 2 environment.
-   `LOCATION`: the region where the Cloud Composer 2 environment is located. The Cloud Composer 3 environment will be created in the same region.
-   `COMPOSER_3_AIRFLOW_VERSION`: the version of Airflow of the Cloud Composer 3 environment. This version must be the same or later version than in the Cloud Composer 2 environment and must be one of the [versions](/composer/docs/composer-versions) available in Cloud Composer 3.

### Check for DAG errors

1.  In [the Airflow web interface](/composer/docs/composer-3/access-airflow-web-interface), go to **DAGs** and check for reported DAG syntax errors.
    
2.  Check that DAG runs are scheduled at the correct time.
    
3.  Wait for the DAG runs to happen in the Cloud Composer 3 environment and check if they were successful. If a DAG run was successful, don't unpause it in the Cloud Composer 2 environment; if you do so, a DAG run for the same time and date happens in your Cloud Composer 2 environment.
    
4.  If a specific DAG runs fails, attempt to [troubleshoot the DAG](/composer/docs/composer-3/troubleshooting-dags) until it successfully runs in Cloud Composer 3.
    

### Monitor your Cloud Composer 3 environment

Monitor your Cloud Composer 3 environment for potential issues, failed DAG runs, and overall environment health.

If the Cloud Composer 3 environment runs without problems for a sufficient period of time, consider deleting the Cloud Composer 2 environment.

## What's next

-   [Troubleshooting DAGs](/composer/docs/composer-3/troubleshooting-dags)
-   [Troubleshooting environment creation](/composer/docs/composer-3/troubleshooting-environment-creation)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
