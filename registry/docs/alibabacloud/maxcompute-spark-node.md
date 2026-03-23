You can run Spark on MaxCompute jobs in local or cluster mode. DataWorks runs Spark on MaxCompute batch jobs in cluster mode, enabling integration and scheduling with other node types. This topic explains how to configure and schedule Spark on MaxCompute jobs in DataWorks.

## Overview

[Spark on MaxCompute](/help/en/maxcompute/overview-10#concept-jzp-wlb-kgb) is a MaxCompute computing service compatible with open-source Spark. It provides a Spark computing framework built on a unified system for computing resources and data permissions, letting you use familiar development patterns to submit and run Spark jobs to meet diverse data processing and analysis needs. In DataWorks, you can use the MaxCompute Spark node to schedule and run Spark on MaxCompute tasks and integrate them with other jobs.

Spark on MaxCompute supports development in Java, Scala, and Python, and can run tasks in either local or cluster mode. When you run Spark on MaxCompute batch jobs in DataWorks, DataWorks executes them in cluster mode. For more information about Spark on MaxCompute run modes, see [Run modes](/help/en/maxcompute/running-modes#concept-e1h-35c-kgb).

## **Permissions**

(Optional, for RAM users) A RAM user developing tasks must be a member of the workspace with the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions, so assign it with caution. For more information about how to add members, see [Add members to a workspace and assign roles to them](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).

**Note**

If you are using a Main Account, you can skip this step.

## **Limitations**

If you select Spark 3.x for a MaxCompute Spark node and the job submission fails, you must purchase and use a Serverless resource group. For more information, see [Purchase and use a Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).

## Prerequisites

MaxCompute Spark nodes support running Spark on MaxCompute batch jobs written in `Java/Scala` and `Python`. The development steps and configuration interface differ for each language. Choose the language that best fits your business needs.

### Java/Scala

Before running Java or Scala code in a MaxCompute Spark node, you must develop your Spark on MaxCompute job code locally and upload it to DataWorks as a MaxCompute resource. Follow these steps:

1.  Prepare the development environment.
    
    Prepare a development environment to run Spark on MaxCompute tasks based on your operating system. For more information, see [Prepare a Java development environment](/help/en/maxcompute/set-up-a-linux-development-environment#concept-263311) and [Prepare a Scala development environment](/help/en/maxcompute/set-up-a-windows-development-environment#concept-2291322).
    
2.  Develop the Java/Scala code.
    
    Before you run Java or Scala code in a MaxCompute Spark node, develop the Spark on MaxCompute code locally or in your existing environment. We recommend using the [sample project template](/help/en/maxcompute/overview-20/#concept-263587) provided by Spark on MaxCompute for development.
    
3.  Package the code and upload it to DataWorks.
    
    After you develop the code, package it and upload it to DataWorks as a MaxCompute resource. For more information, see [Create and use a MaxCompute resource](/help/en/dataworks/user-guide/resource-management-of-data-studio/).
    

### Python (default)

In DataWorks, you can develop a PySpark job by writing code directly in a Python resource and then use a MaxCompute Spark node to submit the job. For more information about how to create a Python resource in DataWorks and PySpark development examples, see [PySpark development examples](/help/en/maxcompute/develop-a-spark-on-maxcompute-application-by-using-pyspark#concept-263640).

**Note**

This method uses the default Python environment provided by DataWorks, with a limited number of pre-installed third-party packages. If the default environment does not meet the dependency requirements of your PySpark job, you can prepare a custom Python environment as described in the **Python (Use a custom Python environment)** section. Alternatively, you can use PyODPS 2 or PyODPS 3 nodes, which offer better support for Python resources.

### Python (custom)

If the default Python environment provided by the platform does not meet your business needs, follow these steps to use a custom Python environment to run your Spark on MaxCompute task.

1.  Prepare a Python environment locally.
    
    You can configure a Python environment based on your business needs. For more information, see [Python versions and dependencies supported by PySpark](https://github.com/aliyun/MaxCompute-Spark/wiki/06.-PySpark-Python%E7%89%88%E6%9C%AC%E5%92%8C%E4%BE%9D%E8%B5%96%E6%94%AF%E6%8C%81?file=06.-PySpark-Python%E7%89%88%E6%9C%AC%E5%92%8C%E4%BE%9D%E8%B5%96%E6%94%AF%E6%8C%81).
    
2.  Package the environment and upload it to DataWorks.
    
    Compress the Python environment into a ZIP package and upload it to DataWorks as a MaxCompute resource. This resource will serve as the execution environment for your Spark on MaxCompute task.
    

## Configuration properties

DataWorks runs Spark on MaxCompute batch jobs in cluster mode. In this mode, you must specify the program's entry point, which is the `main` class. The Spark job ends when the `main` method finishes with a status of `Success` or `Fail`. In addition, you must add each configuration from your `spark-defaults.conf` file to the Configuration Properties of the MaxCompute Spark node. Examples include the number of `executor` instances, memory size, and the `spark.hadoop.odps.runtime.end.point` property.

**Note**

You do not need to upload the `spark-defaults.conf` file. Instead, add each configuration from the `spark-defaults.conf` file to the Configuration Properties of the MaxCompute Spark node.

## Java/Scala job

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2518167371/p851913.png)

**Parameter**

**Description**

**Spark-submit command**

**Spark version**

Supported versions include **Spark 1.x**, **Spark 2.x**, and **Spark 3.x**.

**Note**

If you select Spark 3.x for a MaxCompute Spark node and the job submission fails, you must purchase and use a Serverless resource group. For more information, see [Purchase and use a Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).

—

**Language**

Select **Java/Scala** or **Python**. Choose the language that you used for your Spark on MaxCompute development.

—

**Main JAR**

Specifies the main JAR resource file for the task.

You must upload and submit the resource file to DataWorks. For more information, see [Create and use a MaxCompute resource](/help/en/dataworks/user-guide/resource-management-of-data-studio/).

`app jar or Python file`

**Configuration Properties**

Specifies the Configuration Properties for submitting the job. Note the following:

-   You do not need to configure `spark.hadoop.odps.access.id`, `spark.hadoop.odps.access.key`, or `spark.hadoop.odps.end.point`. They default to the values of the MaxCompute project. You can explicitly configure them to override the default values if necessary.
    
-   You do not need to upload the `spark-defaults.conf` file. Instead, you must add each configuration from `spark-defaults.conf` to the Configuration Properties of the MaxCompute Spark node. Examples include the number of executors, memory size, and the `spark.hadoop.odps.runtime.end.point` property.
    

`--conf PROP=VALUE`

**Main class**

Specifies the name of the main class. This parameter is required for `Java/Scala`.

`--class CLASS_NAME`

**Arguments**

You can add arguments as needed, separated by spaces. DataWorks supports scheduling parameters. You can configure **arguments** in the format of `${variable_name}`. After configuration, you must assign values to the variables in the **Scheduling Parameters** field on the **Schedule** tab in the right-side navigation pane.

For information about the supported value formats for scheduling parameters, see [Configure scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters).

`[app arguments]`

**JAR resource**

This parameter applies only to `Java/Scala`.

You must upload and submit the resource files to DataWorks. For more information, see [Create and use a MaxCompute resource](/help/en/dataworks/user-guide/resource-management-of-data-studio/).

Resource command:

`--jars JARS`

**File resource**

Specifies file resources.

`--files FILES`

**Archives resource**

Specifies archive resources. You can only select resources in **ZIP** format.

`--archives ARCHIVES`

## Python job

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2518167371/p851938.png)

**Parameter**

**Description**

**Spark-submit command**

**Spark version**

Supported versions include **Spark 1.x**, **Spark 2.x**, and **Spark 3.x**.

**Note**

If you select Spark 3.x for a MaxCompute Spark node and the job submission fails, you must purchase and use a Serverless resource group. For more information, see [Purchase and use a Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).

—

**Language**

Select **Python**. Choose the language that you used for your Spark on MaxCompute development.

—

**Main Python resource**

Specifies the main Python resource file for the task.

You must upload and submit the resource file to DataWorks. For more information, see [Create and use a MaxCompute resource](/help/en/dataworks/user-guide/resource-management-of-data-studio/).

`app jar or Python file`

**Configuration Properties**

Specifies the Configuration Properties for submitting the job. Note the following:

-   You do not need to configure `spark.hadoop.odps.access.id`, `spark.hadoop.odps.access.key`, or `spark.hadoop.odps.end.point`. They default to the values of the MaxCompute project. You can explicitly configure them to override the default values if necessary.
    
-   You do not need to upload the `spark-defaults.conf` file. Instead, you must add each configuration from `spark-defaults.conf` to the Configuration Properties of the MaxCompute Spark node. Examples include the number of executors, memory size, and the `spark.hadoop.odps.runtime.end.point` property.
    

`--conf PROP=VALUE`

**Arguments**

You can add arguments as needed, separated by spaces. DataWorks supports scheduling parameters. You can configure **arguments** in the format of `${variable_name}`. After configuration, you must assign values to the variables in the **Scheduling Parameters** field on the **Schedule** tab in the right-side navigation pane.

For information about the supported value formats for scheduling parameters, see [Configure scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters).

`[app arguments]`

**Python resource**

This parameter applies only to `Python`.

You must upload and submit the resource files to DataWorks. For more information, see [Create and use a MaxCompute resource](/help/en/dataworks/user-guide/resource-management-of-data-studio/).

`--py-files PY_FILES`

**File resource**

Specifies file resources.

`--files FILES`

**Archives resource**

Specifies archive resources. You can only select resources in **ZIP** format.

`--archives ARCHIVES`

## **Steps**

1.  Create a resource.
    
    1.  On the **Data Development** page, find **Resource Management** in the left-side navigation pane. Click **Create** and select **MaxCompute Spark Python** to create a resource. Name the resource `spark_is_number.py`. For more information, see [Create and use a MaxCompute resource](/help/en/dataworks/user-guide/resource-management-of-data-studio/). Example:
        
        ```
        # -*- coding: utf-8 -*-
        import sys
        from pyspark.sql import SparkSession
        
        try:
            # For Python 2
            reload(sys)
            sys.setdefaultencoding('utf8')
        except:
            # Not needed for Python 3
            pass
        
        if __name__ == '__main__':
            spark = SparkSession.builder\
                .appName("spark sql")\
                .config("spark.sql.broadcastTimeout", 20 * 60)\
                .config("spark.sql.crossJoin.enabled", True)\
                .config("odps.exec.dynamic.partition.mode", "nonstrict")\
                .config("spark.sql.catalogImplementation", "odps")\
                .getOrCreate()
        
        def is_number(s):
            try:
                float(s)
                return True
            except ValueError:
                pass
        
            try:
                import unicodedata
                unicodedata.numeric(s)
                return True
            except (TypeError, ValueError):
                pass
        
            return False
        
        print(is_number('foo'))
        print(is_number('1'))
        print(is_number('1.3'))
        print(is_number('-1.37'))
        print(is_number('1e3'))
        ```
        
    2.  Save the resource.
        
2.  In the MaxCompute Spark node that you created, configure the node and scheduling parameters. For more information, see [Configure a MaxCompute Spark node](#5f2d463140emy).
    
3.  If you need to run the node periodically, configure its scheduling properties based on your business requirements. For more information, see [Configure scheduling properties](/help/en/dataworks/user-guide/node-scheduling/).
    
4.  After configuring the node, deploy it. For more information, see [Deploy tasks](/help/en/dataworks/user-guide/task-release/).
    
5.  After deploying the task, you can view the run status of the periodic task in Operation and Maintenance Center. For more information, see [View and manage auto-triggered tasks](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    
    **Note**
    
    -   You cannot run MaxCompute Spark nodes directly from the node editor on the Data Development page. You must run the task from Operation and Maintenance Center.
        
    -   After a Backfill Instance runs successfully, you can view the results by opening the tracking URL from the Run Log.
        
    

## Related topics

-   For more information about common development scenarios for Spark on MaxCompute tasks, see the following topics:
    
    -   [Java/Scala example: Spark 1.x](/help/en/maxcompute/spark-1-x-examples#concept-2381542)
        
    -   [Java/Scala example: Spark 2.x](/help/en/maxcompute/spark-2-x-examples#concept-2381543)
        
    -   [Python example: PySpark development](/help/en/maxcompute/develop-a-spark-on-maxcompute-application-by-using-pyspark#concept-263640)
        
    -   [Use case: Access a VPC instance from Spark](/help/en/maxcompute/access-instances-in-a-vpc-from-spark-on-maxcompute#concept-2447772)
        
    -   [Use case: Access OSS from Spark](/help/en/maxcompute/access-oss-from-spark-on-maxcompute#concept-2492802)
        
-   Spark FAQ: Learn about common issues when running Spark jobs to help you troubleshoot exceptions more quickly. For more information, see [FAQ about Spark](/help/en/maxcompute/faq-about-spark-on-maxcompute#concept-2420099).
    
-   Diagnose Spark jobs: MaxCompute provides the Logview tool and the Spark web UI for Spark jobs. You can check the job log to verify correct job submission and execution. For more information, see [Diagnose Spark jobs](/help/en/maxcompute/user-guide/check-jobs/#concept-263782).
