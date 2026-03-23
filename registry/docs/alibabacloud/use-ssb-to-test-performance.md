This topic describes how to use Star Schema Benchmark (SSB) to run a performance test for online analytical processing (OLAP) query scenarios.

## Overview of SSB

SSB is a benchmark used to evaluate the performance of data warehouses and OLAP systems. It simulates a typical star schema data model that consists of five tables: Date, Customer, Supplier, Part, and Lineorder. In addition, SSB lets you customize the data model as needed. For example, you can transform the star schema into a wide table schema.

The SSB benchmark evaluates the performance metrics of a data warehouse or OLAP system by running a series of predefined query patterns. These metrics include query response time, concurrent processing capabilities, data loading, and query optimization.

**Note**

The SSB implementation in this topic is based on the SSB benchmark. Therefore, the results are not comparable to published SSB benchmark results.

## Use cases

In this test scenario, the SSB generation tool uses the scale factor (SF) to control the volume of data to generate. One SF corresponds to 1 GB of data.

**Note**

This data volume refers only to the raw data. It does not include space for indexes. When you prepare the environment, reserve extra space.

## Preparations

Prepare the basic environment required for the OLAP query scenario.

**Note**

To reduce variables that might affect test results, use a newly created instance for each test. Do not use instances that have been upgraded or downgraded.

**Step**

**Instructions**

1.  Create an ECS instance
    

Log on to the Alibaba Cloud console and create an Elastic Compute Service (ECS) instance. This instance is used to generate data, import data to StarRocks, and run client tests. The recommended specifications are as follows:

-   Operating system: CentOS or Alibaba Cloud Linux.
    
-   Data disk: Use an Enhanced SSD (ESSD). The disk capacity depends on the volume of data for the test.
    
-   Region and VPC: Make sure the ECS instance and the StarRocks instance are in the same region and connected using the same Virtual Private Cloud (VPC).
    
-   Public IP: Assign a public IP address.
    

For more information about how to create an ECS instance, see [Create an instance](/help/en/ecs/user-guide/create-instances/#concept-nx2-nzv-wgb).

2.  Create a StarRocks instance
    

For this test, the backend (BE) compute resources are set to 8 compute units (CUs), which is 8 cores and 32 GB of memory. Configure the compute resources as needed.

Log on to Alibaba Cloud, go to the EMR Serverless StarRocks page in the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-beijing/resource/all/serverless/starrocks/list), and click **Create Instance**.

For more information about how to create a StarRocks instance, see [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance).

3.  Download and decompress the starrocks-benchmark test toolkit
    

Log on to the ECS instance created in Step 1. Run the following command on the node to download the test toolkit.

```
sudo wget https://starrocks-oss.oss-cn-beijing.aliyuncs.com/public-access/starrocks-ssb-benchmark-for-serverless.tar.gz
tar xzvf starrocks-ssb-benchmark-for-serverless.tar.gz
```

## Procedure

### **Step 1: Configure the test toolkit**

1.  Log on to the created ECS instance. For more information, see [Connect to an ECS instance](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  Run the following command to navigate to the starrocks-ssb-benchmark-for-serverless directory.
    
    ```
    cd starrocks-ssb-benchmark-for-serverless
    ```
    
3.  Run the `vim conf/starrocks.conf` command and modify the following parameters as needed.
    
    ```
    # for mysql cmd
    mysql_host: fe-c-7b6f92276******-internal.starrocks.aliyuncs.com
    mysql_port: 9030
    mysql_user: admin
    mysql_password: 1****
    database: ssb_sf
    
    # cluster ports
    http_port: 8030
    
    # Specifies whether to enable the bitmap index.
    bitmap_index: false
    
    # benchmark config
    scale_factor: 1
    dataset_generate_root_path: /mnt/disk1/starrocks-benchmark/datasets
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **mysql\_host**
    
    The private endpoint of the frontend (FE) of the StarRocks instance.
    
    On the **Instance Details** tab of the StarRocks instance, find the **Internal endpoint** in the **Gateway Information** section.
    
    **Important**
    
    Do not use a public endpoint.
    
    **mysql\_port**
    
    The query port of the FE of the StarRocks instance. The default value is 9030.
    
    On the **Instance Details** tab of the StarRocks instance, find the **Query Port** in the **FE Details** section.
    
    **mysql\_user**
    
    The user of the StarRocks instance. The default value is admin.
    
    **mysql\_password**
    
    The password for the StarRocks instance user.
    
    **database**
    
    The name of the database created in the StarRocks instance. You can use the default value.
    
    **scale\_factor**
    
    The scale factor of the dataset. This controls the volume of data to generate. The default value is 1. The unit is GB.
    
    **Important**
    
    When you create the instance, make sure the disk has enough capacity for the generated dataset.
    
    **dataset\_generate\_root\_path**
    
    The path to store the generated test dataset. The default value is /mnt/disk1/starrocks-benchmark/datasets.
    
    **bitmap\_index**
    
    Specifies whether to enable the Bitmap Index feature. Valid values are true and false.
    
    Enabling the Bitmap Index feature can provide more efficient query performance, especially for specific query patterns such as Q2.2, Q2.3, and Q3.3.
    
    **http\_port**
    
    The HTTP port of the FE of the StarRocks instance. The default value is 8030.
    
    On the **Instance Details** tab of the StarRocks instance, find the **HTTP Port** in the **FE Details** section.
    

### **Step 2:** Generate test data

Run the following command to automatically load the SSB data.

```
sh ssb_dataload.sh
```

This command automates the SSB data loading process. The process includes creating the database, tables, and dataset, and then loading the data.

### **Step 3: Run queries and** view test **results**

Run the following commands to view an overview of the SSB test results. A result.csv file is also generated in the current directory. You can view this file for more details about the test results.

-   SSB wide table query.
    
    ```
    sh ssb_query.sh ssb-flat
    ```
    
    The following information is returned.
    
    ```
    SQL     Time(ms)
    Q1.1    26
    Q1.2    13
    Q1.3    20
    Q2.1    46
    Q2.2    40
    Q2.3    26
    Q3.1    40
    Q3.2    33
    Q3.3    30
    Q3.4    23
    Q4.1    26
    Q4.2    30
    Q4.3    20
    Total   373
    ```
    
-   SSB standard table query.
    
    ```
    sh ssb_query.sh ssb
    ```
    
    The following information is returned.
    
    ```
    SQL     Time(ms)
    Q1.1    26
    Q1.2    20
    Q1.3    23
    Q2.1    103
    Q2.2    53
    Q2.3    50
    Q3.1    86
    Q3.2    46
    Q3.3    46
    Q3.4    36
    Q4.1    83
    Q4.2    63
    Q4.3    53
    Total   688
    ```
