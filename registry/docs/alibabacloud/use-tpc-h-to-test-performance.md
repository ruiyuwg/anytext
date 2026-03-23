This topic describes how to use TPC Benchmark H (TPC-H) to test the performance of online analytical processing (OLAP) queries.

## TPC-H overview

The following description is quoted from the [official documentation of TPC-H](http://www.tpc.org/tpch/):

TPC-H is a decision support benchmark. It consists of a suite of business-oriented ad hoc queries and concurrent data modifications. The queries and the data that populates the database have been chosen to have broad industry-wide relevance. This benchmark illustrates decision support systems that examine large volumes of data, execute queries with a high degree of complexity, and give answers to critical business questions.

For more information, see [TPC BENCHMARK™ H Standard Specification](https://yq.aliyun.com/go/articleRenderRedirect?url=http%3A%2F%2Fwww.tpc.org%2Ftpc_documents_current_versions%2Fpdf%2Ftpc-h_v2.17.3.pdf).

**Note**

The TPC-H performance test described in this topic is implemented based on the TPC-H benchmark test but cannot meet all requirements of the TPC-H benchmark test. Therefore, the test results cannot be compared with the published results of the TPC-H benchmark test.

## Datasets

TPC-H is a test dataset that is developed by the Transaction Processing Performance Council (TPC) to simulate decision support systems. TPC-H is used in academia and industries to evaluate the performance of decision support systems.

TPC-H models data in production environments to simulate the data warehouse of a sales system. The data warehouse consists of eight tables. The size of each table ranges from 1 GB to 3 TB. The TPC-H benchmark test involves 22 queries. The test focuses on the response time of each query, which is the amount of time required from submitting a query to receiving the returned results. The test results can comprehensively reflect the capability of a system to process queries. For more information, see [TPC BENCHMARK™ H Standard Specification](https://www.tpc.org/tpc_documents_current_versions/pdf/tpc-h_v2.17.3.pdf?spm=a2c4e.10696291.0.0.219d19a4vkzWQm&file=tpc-h_v2.17.3.pdf).

## Procedure

In this example, the 22 queries of the TPC-H benchmark test are used. The amount of test data affects the test results. The data generation tool of TPC-H allows you to change the scale factor (SF) to adjust the amount of data to be generated. One SF indicates 1 GB of data.

**Note**

The preceding data amount refers to the amount of raw data. When you prepare the test environment, you must also consider other factors such as the space to be occupied by indexes.

1.  Make preparations.
    
    Prepare the basic environment that is required to test OLAP queries.
    
    **Note**
    
    To reduce the variables that may impact the test results, we recommend that you use new instances each time you perform a test, instead of upgrading or downgrading the specifications of existing instances.
    
    1.  Create an Elastic Compute Service (ECS) instance. For more information, see [Create instances](/help/en/ecs/user-guide/create-instances/#concept-nx2-nzv-wgb).
        
        In this topic, the ECS instance used for testing has the following specifications:
        
        -   Instance type: ecs.g6e.4xlarge
            
        -   Operating system: CentOS 7.9
            
        -   Data disk: Enterprise SSD (ESSD). You can determine the capacity based on the amount of data used in the test.
            
        
    2.  Create an E-MapReduce (EMR) Serverless StarRocks instance. For more information, see [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance#task-2285387).
        
        In this test, a backend (BE) that has eight compute units (CUs) is used. This indicates that the EMR Serverless StarRocks instance is configured with eight CPU cores and 32 GB of memory. You can also configure the computing resources based on your business requirements.
        
        **Note**
        
        We recommend that you create an EMR Serverless StarRocks instance and an ECS instance in the same virtual private cloud (VPC) and region.
        
2.  Configure the test package.
    
    1.  Log on to the ECS instance. For more information, see [Connect to an instance](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
        
    2.  Run the following commands to download and decompress the benchmark test package for StarRocks:
        
        ```
        wget https://emr-olap.oss-cn-beijing.aliyuncs.com/packages/starrocks-benchmark-for-serverless.tar.gz
        tar xzvf starrocks-benchmark-for-serverless.tar.gz
        ```
        
    3.  Run the following command to go to the starrocks-benchmark-for-serverless directory:
        
        ```
        cd starrocks-benchmark-for-serverless
        ```
        
    4.  Run the `vim group_vars/all` command and specify the following parameters required by the test:
        
        ```
        # mysql client config
        login_host: fe-c-8764bab92bc6****-internal.starrocks.aliyuncs.com
        login_port: 9030
        login_user: admin
        login_password: xxxx
        
        # oss config
        bucket: ""
        endpoint: ""
        access_key_id: ""
        access_key_secret: ""
        
        # benchmark config
        scale_factor: 1
        work_dir_root: /mnt/disk1/starrocks-benchmark/workdirs
        dataset_generate_root_path: /mnt/disk1/starrocks-benchmark/datasets
        ```
        
        The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Remarks**
        
        login\_host
        
        The internal endpoint of the frontend (FE) on the EMR Serverless StarRocks instance.
        
        You can go to the **Instance Details** tab of the EMR Serverless StarRocks instance to view the **internal endpoint** of the instance in the **FE Details** section.
        
        **Important**
        
        We recommend that you do not use a public endpoint.
        
        The parameters that are used to connect the client to the StarRocks service.
        
        login\_port
        
        The query port of the FE on the EMR Serverless StarRocks instance. Default value: 9030.
        
        You can go to the **Instance Details** tab of the EMR Serverless StarRocks instance to view the **query port** of the instance in the **FE Details** section.
        
        login\_user
        
        The initial username used to log on to the EMR Serverless StarRocks instance.
        
        login\_password
        
        The password used to log on to the EMR Serverless StarRocks instance.
        
        bucket
        
        The name of the Object Storage Service (OSS) bucket.
        
        Optional. The OSS configurations. If you specify these parameters, the generated test dataset is stored in OSS.
        
        endpoint
        
        The endpoint that is used to access OSS.
        
        access\_key\_id
        
        The AccessKey ID of your Alibaba Cloud account.
        
        access\_key\_secret
        
        The AccessKey secret of your Alibaba Cloud account.
        
        scale\_factor
        
        The SF of the test dataset, which controls the amount of data to be generated. Default value: 1. Unit: GB.
        
        The benchmark configurations.
        
        work\_dir\_root
        
        The root directory of the working directory. The root directory is used to store data such as table creation statements and other SQL statements for TPC-H tests. Default value: /mnt/disk1/starrocks-benchmark/workdirs.
        
        dataset\_generate\_root\_path
        
        The path in which the generated test dataset is stored. Default value: /mnt/disk1/starrocks-benchmark/datasets.
        
        If an OSS bucket is specified, the bucket is mounted to this path.
        
3.  Run the following command to enable an end-to-end automatic TPC-H test:
    
    ```
    bin/run_tpch.sh
    ```
    
    During the end-to-end automatic TPC-H test, a database, tables, 22 SQL statements, and a dataset are created, data is loaded, and queries are run.
    
    You can also perform the following operations:
    
    -   Run the following command to reload the dataset:
        
        ```
        bin/run_tpch.sh reload
        ```
        
    -   Run the following command to perform the TPC-H query test:
        
        ```
        bin/run_tpch.sh query
        ```
        
    
4.  View test results.
    
    -   Check the overview of the test results.
        
        After the `bin/run_tpch.sh` command is run, the test results are displayed. Sample test results:
        
        ```
        TASK [tpc_h : debug] ****************************************************************************************************************************************
        ok: [10.1.**.**] => {
            "command_output.stdout_lines": [
                "[info] 2022-03-01 09:51:23.295 | Run sql queries started.",
                "[info] 2022-03-01 09:51:23.330 | Run q10.sql started.",
                "[info] 2022-03-01 09:51:23.913 | Run q10.sql finished. Time taken: 0:00:00, .557 seconds",
                "[info] 2022-03-01 09:51:23.923 | Run q11.sql started.",
                "[info] 2022-03-01 09:51:24.026 | Run q11.sql finished. Time taken: 0:00:00, .100 seconds",
                "[info] 2022-03-01 09:51:24.038 | Run q12.sql started.",
                "[info] 2022-03-01 09:51:24.192 | Run q12.sql finished. Time taken: 0:00:00, .151 seconds",
                "[info] 2022-03-01 09:51:24.204 | Run q13.sql started.",
                "[info] 2022-03-01 09:51:24.553 | Run q13.sql finished. Time taken: 0:00:00, .347 seconds",
                "[info] 2022-03-01 09:51:24.563 | Run q14.sql started.",
                "[info] 2022-03-01 09:51:24.665 | Run q14.sql finished. Time taken: 0:00:00, .098 seconds",
                "[info] 2022-03-01 09:51:24.675 | Run q15.sql started.",
                "[info] 2022-03-01 09:51:24.852 | Run q15.sql finished. Time taken: 0:00:00, .175 seconds",
                "[info] 2022-03-01 09:51:24.864 | Run q16.sql started.",
                "[info] 2022-03-01 09:51:25.008 | Run q16.sql finished. Time taken: 0:00:00, .142 seconds",
                "[info] 2022-03-01 09:51:25.018 | Run q17.sql started.",
                "[info] 2022-03-01 09:51:25.269 | Run q17.sql finished. Time taken: 0:00:00, .248 seconds",
                "[info] 2022-03-01 09:51:25.280 | Run q18.sql started.",
                "[info] 2022-03-01 09:51:25.800 | Run q18.sql finished. Time taken: 0:00:00, .518 seconds",
                "[info] 2022-03-01 09:51:25.810 | Run q19.sql started.",
                "[info] 2022-03-01 09:51:25.943 | Run q19.sql finished. Time taken: 0:00:00, .130 seconds",
                "[info] 2022-03-01 09:51:25.953 | Run q1.sql started.",
                "[info] 2022-03-01 09:51:26.295 | Run q1.sql finished. Time taken: 0:00:00, .339 seconds",
                "[info] 2022-03-01 09:51:26.305 | Run q20.sql started.",
                "[info] 2022-03-01 09:51:26.708 | Run q20.sql finished. Time taken: 0:00:00, .400 seconds",
                "[info] 2022-03-01 09:51:26.720 | Run q21.sql started.",
                "[info] 2022-03-01 09:51:27.323 | Run q21.sql finished. Time taken: 0:00:00, .600 seconds",
                "[info] 2022-03-01 09:51:27.334 | Run q22.sql started.",
                "[info] 2022-03-01 09:51:27.403 | Run q22.sql finished. Time taken: 0:00:00, .065 seconds",
                "[info] 2022-03-01 09:51:27.415 | Run q2.sql started.",
                "[info] 2022-03-01 09:51:27.632 | Run q2.sql finished. Time taken: 0:00:00, .213 seconds",
                "[info] 2022-03-01 09:51:27.648 | Run q3.sql started.",
                "[info] 2022-03-01 09:51:27.917 | Run q3.sql finished. Time taken: 0:00:00, .262 seconds",
                "[info] 2022-03-01 09:51:27.936 | Run q4.sql started.",
                "[info] 2022-03-01 09:51:28.150 | Run q4.sql finished. Time taken: 0:00:00, .210 seconds",
                "[info] 2022-03-01 09:51:28.172 | Run q5.sql started.",
                "[info] 2022-03-01 09:51:28.954 | Run q5.sql finished. Time taken: 0:00:00, .778 seconds",
                "[info] 2022-03-01 09:51:28.976 | Run q6.sql started.",
                "[info] 2022-03-01 09:51:29.080 | Run q6.sql finished. Time taken: 0:00:00, .103 seconds",
                "[info] 2022-03-01 09:51:29.096 | Run q7.sql started.",
                "[info] 2022-03-01 09:51:29.445 | Run q7.sql finished. Time taken: 0:00:00, .346 seconds",
                "[info] 2022-03-01 09:51:29.460 | Run q8.sql started.",
                "[info] 2022-03-01 09:51:32.692 | Run q8.sql finished. Time taken: 0:00:03, 3.229 seconds",
                "[info] 2022-03-01 09:51:32.703 | Run q9.sql started.",
                "[info] 2022-03-01 09:51:33.318 | Run q9.sql finished. Time taken: 0:00:00, .611 seconds",
                "[info] 2022-03-01 09:51:33.324 | Run sql queries finished. Time taken: 0:00:10, 10.026 seconds"
            ]
        }
        TASK [tpc_h : debug] ********************************************************************************************************************************************************************************
        ok: [10.1.0.91] => {
            "work_dir": "/mnt/disk1/starrocks-benchmark/workdirs/tpc_h/sf1"
        }
        ```
        
    -   Check the details of the test results.
        
        After the `bin/run_tpch.sh` command is successfully run, the system builds the working directory of the entire TPC-H performance test and returns the path of the _<work\_dir>_ directory. You can switch to this path to view the relevant information, such as query statements, table creation statements, and run logs.![filepath](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7188161271/p409939.png)
        
        **Note**
        
        In this example, the path of the _<work\_dir>_ directory is /mnt/disk1/starrocks-benchmark/workdirs/tpc\_h/sf1.
        
        You can also run the `cd <work_dir>/logs` command to go to the logs directory in the working directory and view the test results and the detailed execution results of SQL statements.
        
        The following code shows the structure of the _<work\_dir>_ directory:
        
        ```
        <work_dir>/
        ├── config # The configurations of the run.sh and run_mysql.sh scripts. 
        ├── logs # The most recent run logs of the TPC-H performance test. 
        │   ├── *.sql.err
        │   ├── *.sql.out
        │   └── run.log
        ├── queries # The 22 SQL queries involved in the TPC-H performance test. 
        │   ├── ddl
        │   │   └── create_tables.sql # The statements used to create tables for the TPC-H performance test. 
        │   └── *.sql
        ├── run_mysql.sh
        ├── run.sh # The queries that are fully run in the TPC-H performance test. 
        └── tpch_tools # The dbgen toolkit.
        ```
