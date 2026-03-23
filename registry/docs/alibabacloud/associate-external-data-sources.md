Simple Log Service (SLS) provides the external storage feature to associate SLS with MySQL databases, Alibaba Cloud Object Storage Service (OSS) buckets, or hosted CSV files. This topic describes the scenarios, benefits, and supported external stores of the external storage feature.

## Uase cases

When analyzing data, you may need to gather different types from various storage resources. For instance, you might obtain user operations and behavior data from SLS, and user properties, registration, funds, and props from a database. In this case, you need to classify and analyze the data, then write the results to the database's report system.

In the use cases above, the traditional method is to migrate data to a unified storage system for analysis. This process is time-consuming and resource-intensive due to network transmission, data scrubbing, and formatting. SLS's external storage offers the following features:

-   Define mappings between data in external stores and data in SLS. Data migration is not required.
    
-   Use a unified query engine. You can use JOIN statements to perform JOIN queries on data in SLS and data in external stores.
    
-   Store query results in external stores.
    

## Benefits

-   Cost-effective
    
    -   The external storage feature eliminates the need for data migration, which further reduces your overall costs. Data in different storage systems are stored in different formats. The API operations to manage data also vary based on the storage systems. This results in complicated data conversion during data migration. If you use the external storage feature of SLS, you do not need to migrate data.
        
    -   The external storage feature eliminates the need for data maintenance, which further reduces your overall costs. If you migrate data, you must update and maintain the data at the earliest opportunity.
        
-   Convenient
    
    -   You can use SQL statements to analyze data and obtain the analysis results within seconds.
        
    -   You can add charts to a dashboard and view the charts when you open the dashboard.
        

## Supported external stores

The external storage feature of SLS allows you to associate SLS with MySQL databases, OSS buckets, or hosted CSV files. The following table describes the supported external stores.

**Supported external store**

**Read from the external store**

**Write to the external store**

**Method to create an external store**

**Supported regions**

MySQL databases

Supported

Supported

SDK and CLI

All regions

PostgreSQL databases

Supported

Supported

SDK and CLI

All regions

OSS buckets

Supported

Supported

SQL create table

All regions

Hosted CSV files

Supported

Not supported

SDK

All regions

## **References**

-   [Associate a MySQL data source](/help/en/sls/associate-log-service-with-a-mysql-database)
    
-   [Associate a PostgreSQL data source](/help/en/sls/associated-postgresql-data-source)
    
-   [Associate an OSS data source](/help/en/sls/associate-log-service-with-an-oss-bucket)
    
-   [Associate a hosted CSV data source](/help/en/sls/associate-log-service-with-a-hosted-csv-file)
