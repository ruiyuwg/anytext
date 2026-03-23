This topic describes the scenarios, runtime environment requirements, and instructions for using tools that are used to connect to MaxCompute and process data in MaxCompute projects. You can select a connection tool based on your business requirements and the environment that you prepare.

## Prerequisites

A MaxCompute project is created. For more information about how to create a MaxCompute project, see [Create a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project#task-zl2-mtx-5db).

## Background information

The following table describes the tools supported by MaxCompute.

**Tool**

**Manual installation required**

**Scenario**

[MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)

Yes

The MaxCompute client is a command-line client that is suitable for all scenarios. You can use the MaxCompute client to write commands for data processing.

[DataWorks console](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)

No

DataWorks implements comprehensive features, such as data development, data integration, and data services in a visual manner based on MaxCompute projects. If you want to periodically schedule jobs, we recommend that you use DataWorks.

[MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db)

Yes

MaxCompute Studio is a development plug-in that is based on IntelliJ IDEA. MaxCompute Studio helps you develop data more easily and quickly. If you are familiar with IntelliJ IDEA, we recommend that you use MaxCompute Studio.

## Prepare an environment

The following table describes the environment requirements of the preceding development tools.

**Tool**

**Environment requirement**

[MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)

You must install Java 8 or later.

[DataWorks console](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)

We recommend that you use the latest version of Google Chrome.

[MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db)

-   The client that runs a Windows, macOS, or Linux operating system is prepared.
    
-   IntelliJ IDEA 2018.2.4 or later is installed on the client. Ultimate Edition and [Community](https://www.jetbrains.com/idea/download/) Edition of IntelliJ IDEA are supported. Community Edition is free of charge. PyCharm is installed on the client. PyCharm is an integrated development environment (IDE) used for programming in Python.
    
-   Java Runtime Environment (JRE) 1.8 is installed. The latest version of IntelliJ IDEA is bundled with JRE 1.8. If you are using IntelliJ IDEA of the latest version, you do not need to separately install JRE 1.8
    
-   Java Development Kit (JDK) 1.8 is installed. JDK 1.8 is required only if you want to develop and debug user-defined functions (UDFs) in Java.
    
    **Note**
    
    MaxCompute Studio 0.28.0 and later support JDK 1.9. The earlier versions of MaxCompute Studio support only JDK 1.8.
    

## Connect to MaxCompute by using tools

The following table provides instructions on using tools to connect to MaxCompute after you prepare the environment.

**Development tool**

**Instruction**

MaxCompute client

For more information about the MaxCompute client, see [MaxCompute client (odpscmd)](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db).

DataWorks

[DataWorks console](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)

MaxCompute Studio

[MaxCompute Studio](/help/en/maxcompute/user-guide/what-is-maxcompute-studio#concept-bmm-thx-5db)

Database management tools

-   [Connect DBeaver to MaxCompute](/help/en/maxcompute/user-guide/connect-dbeaver-to-maxcompute)
    
-   [Connect DataGrip to MaxCompute](/help/en/maxcompute/user-guide/connect-datagrip-to-maxcompute)
    
-   [Connect SQL Workbench/J to MaxCompute](/help/en/maxcompute/user-guide/connect-sql-workbench-or-j-to-maxcompute)
    

ETL tools

-   [Use Kettle to schedule MaxCompute jobs](/help/en/maxcompute/user-guide/use-kettle-to-schedule-maxcompute-jobs)
    
-   [Use Apache Airflow to schedule MaxCompute jobs](/help/en/maxcompute/use-apache-airflow-to-schedule-maxcompute-jobs)
    
-   [Use Azkaban to schedule MaxCompute jobs](/help/en/maxcompute/use-azkaban-to-schedule-maxcompute-jobs)
    

JDBC

[Overview](/help/en/maxcompute/user-guide/overview-23)
