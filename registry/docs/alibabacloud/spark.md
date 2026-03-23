MaxCompute Spark is an open-source compatible Spark compute service provided by MaxCompute. It delivers the Spark compute framework on top of a unified compute resource and dataset permission system. This enables you to submit and run Spark jobs using familiar development methods to meet diverse data processing and analysis requirements.

## Key Features

-   **Supports native multi-version Spark jobs**
    
    Native Apache Spark runs in MaxCompute. It is fully compatible with Spark APIs and supports multiple Spark versions.
    
-   **Unified compute resources**
    
    MaxCompute Spark runs on the unified compute resources enabled for MaxCompute projects, similar to MaxCompute SQL, MapReduce, and other task types.
    
-   **Unified data and permission management**
    
    It follows the MaxCompute project’s permission system, enabling you to securely query data within your assigned permissions.
    
-   **Same user experience as open-source systems**
    
    It provides the native open-source real-time Spark UI and the ability to retrieve historical logs.
    

## **Supported Features**

MaxCompute Spark supports the following features:

-   Offline computing: GraphX, MLlib, RDD, Spark SQL, PySpark, and so on.
    
-   Read from and write to MaxCompute tables.
    
-   Reference file resources in MaxCompute.
    
-   Access services deployed in an Alibaba Cloud VPC environment.
    
-   Access unstructured storage in Alibaba Cloud OSS.
    
-   Read MaxCompute OSS foreign tables.
    
-   DataWorks Notebook.
    

## **Limits**

MaxCompute Spark currently does not support the following scenarios:

-   Does not support interactive shells, such as Spark-Shell, Spark-SQL-Shell, or PySpark-Shell.
    
-   You cannot access MaxCompute's built-in functions or user-defined functions (UDFs).
    
-   Access to external tables in MaxCompute is limited to OSS foreign tables.
