Learn how to develop, debug, and deploy Flink Python API (PyFlink) jobs on Realtime Compute for Apache Flink. This guide covers environment setup, API selection, user-defined functions, connector configuration, and debugging techniques.

## Background information

Develop PyFlink jobs locally on your machine. After you complete development, deploy and start the job in the Realtime Compute for Apache Flink console to view business results. For a complete walkthrough, see [Quick start with PyFlink jobs](/help/en/flink/realtime-flink/getting-started/getting-started-for-a-flink-python-deployment).

## Development environment requirements

Before you begin development, set up your local environment with the following requirements:

-   **Python version**: VVR versions earlier than 8.0.11 include Python 3.7.9. VVR 8.0.11 or later include Python 3.9.21.
    
    **Note**
    
    Use the same Python version in your local development environment as the one pre-installed in your target VVR engine.
    
-   **PyFlink installation**: Install PyFlink with a version that matches the Apache Flink version in your target VVR engine. For example, if you select `vvr-8.0.9-flink-1.17` on the deployment page, install `apache-flink==1.17.*`.
    
    ```
    pip install apache-flink==1.17.2
    ```
    
-   **IDE installation**: Install an IDE such as PyCharm or VS Code.
    

## Limits

Be aware of the following limits when you develop PyFlink jobs:

-   **Flink version**: Only Apache Flink 1.13 and later versions are supported.
    
-   **Pre-installed Python libraries**: The Flink workspace includes a pre-installed Python environment with common libraries such as pandas, NumPy, and PyArrow. For the full list, see [Pre-installed software packages](#d4434fa9c73h2).
    
-   **JDK compatibility**: The Flink runtime environment supports only JDK 8 and JDK 11. Ensure that third-party JARs are compatible with these JDK versions.
    
-   **Scala compatibility**: VVR 4.x supports only Scala 2.11. VVR 6.x and later support only Scala 2.12. Ensure that JAR dependencies match the appropriate Scala version.
    

## Develop a job

After you set up your development environment, follow these guidelines to develop your PyFlink job.

### **Choose between Table API/SQL and DataStream API**

PyFlink supports both Table API/SQL and DataStream API. **We recommend using Table API/SQL** for the following reasons:

-   **Better performance**: Table API/SQL execution plans run entirely in the JVM after optimization. DataStream API requires per-record serialization and deserialization between the JVM and Python processes, which adds significant overhead.
    
-   **More complete features**: Table API/SQL provides full support for connectors, data formats, and window functions. It shares the same connector ecosystem as SQL jobs.
    
-   **Community recommendation**: The Apache Flink community prioritizes Table API/SQL for PyFlink development.
    

Use DataStream API only when SQL cannot express your complex custom logic.

### **Development reference**

Use the following resources to develop your PyFlink job:

-   **Development guide**: For Apache Flink 1.20 business logic, see [Flink Python API Development Guide](https://nightlies.apache.org/flink/flink-docs-release-1.20/docs/dev/python/overview/).
    
-   **Troubleshooting**: For common issues and solutions, see [Apache Flink FAQ](https://flink.apache.org/how-to-contribute/getting-help/).
    

### **Project structure**

The recommended Python job project structure is as follows:

```
my-flink-python-project/
├── my_job.py                # Main job file
├── udfs.py                  # User-defined functions (optional)
├── requirements.txt         # Third-party Python dependencies (optional)
└── config.properties        # Configuration file (optional)
```

### **Dependency management**

To use custom Python virtual environments, third-party Python packages, JARs, or data files in PyFlink jobs, see [Use Python dependencies](/help/en/flink/realtime-flink/developer-reference/use-python-dependencies).

### **User-defined functions (UDFs)**

The following example demonstrates how to develop a Python user-defined scalar function (UDSF) that masks sensitive data in phone numbers:

```
from pyflink.table import DataTypes
from pyflink.table.udf import udf

@udf(result_type=DataTypes.STRING())
def mask_phone(phone: str):
    """Mask phone number: keep the first three and last four digits; replace middle digits with ****."""
    if phone is None or len(phone) != 11:
        return phone
    return phone[:3] + '****' + phone[7:]
```

Use this UDF in a SQL job as follows:

```
CREATE TEMPORARY FUNCTION mask_phone AS 'udfs.mask_phone' LANGUAGE PYTHON;
INSERT INTO sink_table
SELECT name, mask_phone(phone) AS masked_phone
FROM source_table;
```

To register, update, or delete UDFs, see [Manage user-defined functions (UDFs)](/help/en/flink/realtime-flink/user-guide/manage-udfs).

### **Use connectors**

Connectors enable your PyFlink job to read from and write to external systems. For a list of supported connectors, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors). To configure a connector in your job, complete the following steps:

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
2.  Click **Console** in the **Actions** column of the target workspace.
    
3.  In the left navigation pane, click **Artifacts**.
    
4.  Click **Upload Artifact**, and select the Python package for the target connector.
    
    You can upload a custom connector or a built-in connector from Realtime Compute for Apache Flink. For download links to official Python packages for Flink connectors, see [Connector list](https://repo1.maven.org/maven2/com/alibaba/ververica/).
    
5.  On the **O&M** > **Deployments** page, click **Create Deployment** > **Python Job**, select the Python package for the target connector in the **Additional Dependencies** field, configure the other parameters, and deploy the job.
    
6.  Click the job name. On the **Configuration** tab, go to the **Parameters** section, click **Edit**, and add the connector package path in **Other Configuration**.
    
    If your job depends on multiple connector packages (for example, connector-1.jar and connector-2.jar), configure them as follows:
    
    ```
    pipeline.classpaths: 'file:///flink/usrlib/connector-1.jar;file:///flink/usrlib/connector-2.jar'
    ```
    
7.  Optional: To use built-in connectors, data formats, or catalogs (available in VVR 11.2 and later), add configuration in the **Other Configuration** field under **Parameters**.
    
    ```
    ## Use multiple built-in connectors
    pipeline.used-builtin-connectors: kafka;sls
    ## Use multiple data formats
    pipeline.used-builtin-formats: avro;parquet
    ## Use multiple existing catalogs
    pipeline.used-builtin-catalogs: catalogname1;catalogname2
    ```
    

For detailed connector usage examples, see [Complete sample code](#7eb0f69a65in7).

### **Debug a job**

When you implement a Python UDF, use the logging module to output log information for troubleshooting:

```
import logging

@udf(result_type=DataTypes.BIGINT())
def add(i, j):
  logging.info("hello world")
  return i + j
```

View the output in the TaskManager log files.

### **Local debugging**

By default, Realtime Compute for Apache Flink cannot access the Internet. Your code may not connect directly to online data sources for testing. Use one of the following approaches for local debugging:

-   **Unit tests**: Run independent unit tests on your UDFs to verify logic correctness.
    
-   **Local execution**: Simulate input by using local data sources such as files or in-memory data. Run the job locally to validate processing logic.
    
    ```
    from pyflink.datastream import StreamExecutionEnvironment
    
    env = StreamExecutionEnvironment.get_execution_environment()
    # Test using local data sources
    ds = env.from_collection([('Alice', 1), ('Bob', 2), ('Alice', 3)])
    ds.key_by(lambda x: x[0]).sum(1).print()
    env.execute("local_test")
    ```
    
-   **Remote debugging**: To debug with online data sources, see [Run and debug jobs with connectors locally](/help/en/flink/realtime-flink/developer-reference/run-or-debug-a-flink-deployment-that-includes-a-connector-in-an-on-premises-environment).
    

## **Deploy a job**

After you finish developing your PyFlink job, upload it to the Realtime Compute for Apache Flink console for deployment. Complete the following steps:

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai) and go to the target workspace.
    
2.  In the left navigation pane, click **Artifacts**. Upload your Python job files (.py or .zip), third-party dependencies, and configuration files.
    
3.  On the **O&M** > **Deployments** page, click **Create Deployment** > **Python Job**, and fill in the deployment information.
    
    **Parameter**
    
    **Description**
    
    **Python URI**
    
    Select the uploaded Python job file.
    
    **Entry Module**
    
    Leave blank for .py files. For .zip files, enter the entry module name—for example, `my_job`.
    
    **Additional Dependencies**
    
    Select connector JARs or configuration files, if any.
    
    **Python Libraries**
    
    Select third-party Python packages (.whl or .zip), if any.
    
    **Python Archives**
    
    Select custom Python virtual environments (.zip), if any.
    
4.  Click **Deploy**.
    

For more details about deployment parameters, see [Deploy a job](/help/en/flink/realtime-flink/user-guide/create-a-deployment).

## Complete sample code

The following example demonstrates a complete Python streaming job that reads data from Kafka, processes it, and writes the results to MySQL:

**Note**

This example does not include configurations for checkpoints or restart strategies. You can add these after deployment in the **Configuration** tab. For details, see [Configure job deployment settings](/help/en/flink/realtime-flink/user-guide/configure-a-deployment#section-o8m-6ee-10k).

```
import logging
import sys

from pyflink.common import Types
from pyflink.datastream import StreamExecutionEnvironment
from pyflink.table import StreamTableEnvironment

logging.basicConfig(stream=sys.stdout, level=logging.INFO)


def kafka_to_mysql():
    # Create execution environments
    env = StreamExecutionEnvironment.get_execution_environment()
    t_env = StreamTableEnvironment.create(env)

    # Create Kafka source table
    t_env.execute_sql("""
        CREATE TABLE kafka_source (
            `id` INT,
            `name` STRING,
            `score` INT,
            `event_time` TIMESTAMP(3),
            WATERMARK FOR event_time AS event_time - INTERVAL '5' SECOND
        ) WITH (
            'connector' = 'kafka',
            'topic' = 'student_topic',
            'properties.bootstrap.servers' = 'your-kafka-broker:9092',
            'properties.group.id' = 'my-group',
            'scan.startup.mode' = 'latest-offset',
            'format' = 'json'
        )
    """)

    # Create MySQL sink table
    t_env.execute_sql("""
        CREATE TABLE mysql_sink (
            `id` INT,
            `name` STRING,
            `score` INT,
            PRIMARY KEY (id) NOT ENFORCED
        ) WITH (
            'connector' = 'jdbc',
            'url' = 'jdbc:mysql://your-mysql-host:3306/my_database',
            'table-name' = 'student',
            'username' = 'your_username',
            'password' = 'your_password'
        )
    """)

    # Filter records with score >= 60 and write to MySQL
    t_env.execute_sql("""
        INSERT INTO mysql_sink
        SELECT id, name, score
        FROM kafka_source
        WHERE score >= 60
    """)


if __name__ == '__main__':
    kafka_to_mysql()
```

## Pre-installed software packages

## VVR-11

The following software packages are installed in the Flink workspace.

**Software package**

**Version**

apache-beam

2.48.0

avro-python3

1.10.2

brotlipy

0.7.0

certifi

2022.12.7

cffi

1.15.1

charset-normalizer

2.0.4

cloudpickle

2.2.1

conda

22.11.1

conda-content-trust

0.1.3

conda-package-handling

1.9.0

crcmod

1.7

cryptography

38.0.1

Cython

3.0.12

dill

0.3.1.1

dnspython

2.7.0

docopt

0.6.2

exceptiongroup

1.3.0

fastavro

1.12.1

fasteners

0.20

find\_libpython

0.5.0

grpcio

1.56.2

grpcio-tools

1.56.2

hdfs

2.7.3

httplib2

0.22.0

idna

3.4

importlib\_metadata

8.7.0

iniconfig

2.1.0

isort

6.1.0

numpy

1.24.4

objsize

0.6.1

orjson

3.9.15

packaging

25.0

pandas

2.3.3

pemja

0.5.5

pip

22.3.1

pluggy

1.0.0

proto-plus

1.26.1

protobuf

4.25.8

py-spy

0.4.0

py4j

0.10.9.7

pyarrow

11.0.0

pyarrow-hotfix

0.6

pycodestyle

2.14.0

pycosat

0.6.4

pycparser

2.21

pydot

1.4.2

pymongo

4.15.4

pyOpenSSL

22.0.0

pyparsing

3.2.5

PySocks

1.7.1

pytest

7.4.4

python-dateutil

2.9.0

pytz

2025.2

regex

2025.11.3

requests

2.32.5

ruamel.yaml

0.18.16

ruamel.yaml.clib

0.2.14

setuptools

70.0.0

six

1.16.0

tomli

2.3.0

toolz

0.12.0

tqdm

4.64.1

typing\_extensions

4.15.0

tzdata

2025.2

urllib3

1.26.13

wheel

0.38.4

zipp

3.23.0

zstandard

0.25.0

## VVR-8

The following software packages are pre-installed in the Flink workspace environment.

**Software package**

**Version**

apache-beam

2.43.0

avro-python3

1.9.2.1

certifi

2025.7.9

charset-normalizer

3.4.2

cloudpickle

2.2.0

crcmod

1.7

Cython

0.29.24

dill

0.3.1.1

docopt

0.6.2

fastavro

1.4.7

fasteners

0.19

find\_libpython

0.4.1

grpcio

1.46.3

grpcio-tools

1.46.3

hdfs

2.7.3

httplib2

0.20.4

idna

3.10

isort

6.0.1

numpy

1.21.6

objsize

0.5.2

orjson

3.10.18

pandas

1.3.5

pemja

0.3.2

pip

22.3.1

proto-plus

1.26.1

protobuf

3.20.3

py4j

0.10.9.7

pyarrow

8.0.0

pycodestyle

2.14.0

pydot

1.4.2

pymongo

3.13.0

pyparsing

3.2.3

python-dateutil

2.9.0

pytz

2025.2

regex

2024.11.6

requests

2.32.4

setuptools

58.1.0

six

1.17.0

typing\_extensions

4.14.1

urllib3

2.5.0

wheel

0.33.4

zstandard

0.23.0

## VVR-6

The following software packages are pre-installed in the Flink workspace environment.

**Software package**

**Version**

apache-beam

2.27.0

avro-python3

1.9.2.1

certifi

2024.8.30

charset-normalizer

3.3.2

cloudpickle

1.2.2

crcmod

1.7

Cython

0.29.16

dill

0.3.1.1

docopt

0.6.2

fastavro

0.23.6

future

0.18.3

grpcio

1.29.0

hdfs

2.7.3

httplib2

0.17.4

idna

3.8

importlib-metadata

6.7.0

isort

5.11.5

jsonpickle

2.0.0

mock

2.0.0

numpy

1.19.5

oauth2client

4.1.3

pandas

1.1.5

pbr

6.1.0

pemja

0.1.4

pip

20.1.1

protobuf

3.17.3

py4j

0.10.9.3

pyarrow

2.0.0

pyasn1

0.5.1

pyasn1-modules

0.3.0

pycodestyle

2.10.0

pydot

1.4.2

pymongo

3.13.0

pyparsing

3.1.4

python-dateutil

2.8.0

pytz

2024.1

requests

2.31.0

rsa

4.9

setuptools

47.1.0

six

1.16.0

typing-extensions

3.7.4.3

urllib3

2.0.7

wheel

0.42.0

zipp

3.15.0

## **References**

-   For a complete walkthrough of the PyFlink job development process, see [Quick start with PyFlink jobs](/help/en/flink/realtime-flink/getting-started/getting-started-for-a-flink-python-deployment).
    
-   For details on using custom Python virtual environments, third-party Python libraries, JARs, and data files in Flink Python jobs, see [Use Python dependencies](/help/en/flink/realtime-flink/developer-reference/use-python-dependencies).
    
-   Realtime Compute for Apache Flink also supports SQL and DataStream jobs. For development guides on these job types, see [Job development overview](/help/en/flink/realtime-flink/user-guide/develop-an-sql-draft) and [Develop JAR jobs](/help/en/flink/realtime-flink/user-guide/develop-a-jar-draft).
