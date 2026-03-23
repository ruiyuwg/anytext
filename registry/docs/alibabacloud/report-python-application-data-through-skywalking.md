When you run Python microservices across distributed environments, you need centralized trace collection to diagnose latency and map service dependencies. The Apache SkyWalking Python agent automatically instruments supported libraries and reports trace data to Managed Service for OpenTelemetry over gRPC. You get distributed traces and dependency maps without code changes.

## How it works

1.  Download the SkyWalking Python agent and configure it with your Managed Service for OpenTelemetry endpoint and authentication token.
    
2.  The agent automatically instruments supported libraries in your Python application.
    
3.  The agent reports trace data over gRPC to Managed Service for OpenTelemetry, where you can view distributed traces and dependency maps.
    

## Background information

SkyWalking is a popular application performance monitoring (APM) service developed in China. It is designed for microservices, cloud-native architectures, and containers such as Docker, Kubernetes, and Mesos. SkyWalking is also a distributed tracing system.

SkyWalking-Python is the official Python agent repository of SkyWalking. You can use SkyWalking-Python to monitor Python applications. SkyWalking-Python can automatically instrument third-party repositories such as Kafka, AIOHTTP, Redis, and WebSockets. For the full list, see Supported libraries.

## Prerequisites

-   **Python 3.7 or later** is installed
    
-   The Python agent of Apache SkyWalking is downloaded. We recommend that you download the latest version of the Python agent.
    
-   SkyWalking-Python is referenced in your Python project
    
-   The **SkyWalking endpoint** and **authentication token** from the Managed Service for OpenTelemetry console. See Get the SkyWalking endpoint
    

## Get the SkyWalking endpoint

1.  Log on to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Cluster Configurations**. On the page that appears, click the **Access point information** tab.
    
3.  In the top navigation bar, select a region. In the **Cluster Information** section, turn on **Show Token**.
    
4.  Set the **Client** parameter to **SkyWalking**.
    
5.  In the **Related Information** column, copy the endpoint for your deployment scenario:
    
    **Scenario**
    
    **Endpoint type**
    
    **When to use**
    
    Alibaba Cloud production environment
    
    VPC endpoint
    
    Your application runs on an Alibaba Cloud VPC
    
    External or local development
    
    Public endpoint
    
    Your application runs outside Alibaba Cloud
    
    ![SkyWalking access point information](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2663148661/p506425.png)
    

## Set up instrumentation

You can configure the parameters of the SkyWalking Python agent directly in a Python project or by defining environment variables.

### Option 1: Configure the parameters in a Python project

Modify the `config.init` parameters in the Python project file. The general pattern is:

```
from skywalking import config
config.init(ConfigurationName = ConfigurationValue)
```

In the sample code, the `proxy/TestProxy.py` and `controller/TestController.py` files are used.

1.  Configure the endpoint and the authentication token. Replace `<endpoint>` and `<auth-token>` with the endpoint and authentication token obtained in the prerequisites.
    
    ```
       from skywalking import agent, config
    
       config.init(
           agent_collector_backend_services='<endpoint>',
           agent_authentication='<auth-token>'
       )
    ```
    
2.  Configure a service name as the application identifier.
    
    ```
       config.init(agent_name='<service name>')
    ```
    
3.  Specify a protocol over which data is reported. SkyWalking supports gRPC.
    
    ```
       config.init(agent_protocol='<protocol>')
    ```
    
4.  Configure optional parameters based on your business requirements. For a complete list of configuration parameters, see the [Apache SkyWalking Python agent configuration reference](https://github.com/apache/skywalking-python/blob/master/docs/en/setup/Configuration.md).
    
5.  Restart the application.
    

### Option 2: Configure the parameters by defining environment variables

Add the following content to the environment variable file and refresh the file to make the modified file take effect. The general pattern is:

```
export SW_AGENT_ConfigurationName=ConfigurationValue
```

**Note**

For Docker containers, you can configure environment variables in the **environment** directory of the `docker-compose.yaml` file.

## Sample code

A sample Flask application that demonstrates SkyWalking integration is available on GitHub: [skywalking-demo](https://github.com/alibabacloud-observability/skywalking-demo).

The sample application routes HTTP requests through two services (`proxy/TestProxy.py` and `controller/TestController.py`) and performs MySQL database operations. After trace data is reported, you can view cross-service traces and MySQL call metrics in the Managed Service for OpenTelemetry console.

## FAQ

**Q: `Method not found: skywalking.v3.LogReportService/collect` appears in the logs. How do I fix it?**

![LogReportService error](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7388733961/p699003.png)

Managed Service for OpenTelemetry does not support the SkyWalking log reporting protocol. Disable the log reporter by setting the `agent_log_reporter_active` parameter nested under `config.init` to `False`:

```
config.init(agent_log_reporter_active=False)
```

**Q: `Method not found: skywalking.v3.MeterReportService/collect` appears when reporting data over gRPC. How do I fix it?**

![MeterReportService error](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6388733961/p699007.png)

You cannot report `metrics` to the console. Disable the meter reporter by setting the `agent_meter_reporter_active` parameter nested under `config.init` to `False`:

```
config.init(agent_meter_reporter_active=False)
```

## Supported libraries

The SkyWalking Python agent automatically instruments the following libraries. No additional configuration is required.

**Library**

**Python version**

**Supported library version**

**Plug-in name**

[aiohttp](https://docs.aiohttp.org/)

3.7+

3.7.\*

sw\_aiohttp

[aioredis](https://aioredis.readthedocs.io/)

3.7+

2.0.\*

sw\_aioredis

[aiormq](https://pypi.org/project/aiormq/)

3.7+

6.3, 6.4

sw\_aiormq

[amqp](https://pypi.org/project/amqp/)

3.7+

2.6.1

sw\_amqp

[asyncpg](https://github.com/MagicStack/asyncpg)

3.7+

0.25.0

sw\_asyncpg

[bottle](http://bottlepy.org/docs/dev/)

3.7+

0.12.23

sw\_bottle

[celery](https://docs.celeryq.dev/)

3.7+

5.1

sw\_celery

[confluent\_kafka](https://www.confluent.io/)

3.7+

1.5.0, 1.7.0, 1.8.2

sw\_confluent\_kafka

[django](https://www.djangoproject.com/)

3.7+

3.2

sw\_django

[elasticsearch](https://github.com/elastic/elasticsearch-py)

3.7+

7.13, 7.14, 7.15

sw\_elasticsearch

[falcon](https://falcon.readthedocs.io/en/stable/)

3.7+

2.4.1, 2.5, 2.6 (not supported on 3.11+)

sw\_falcon

[fastapi](https://fastapi.tiangolo.com/)

3.7+

0.88.\*, 0.89.\*

sw\_fastapi

[flask](https://flask.palletsprojects.com/)

3.7+

2.0

sw\_flask

[happybase](https://happybase.readthedocs.io/)

3.7+

1.2.0

sw\_happybase

[http.server](https://docs.python.org/3/library/http.server.html)

3.7+

\*

sw\_http\_server

[werkzeug](https://werkzeug.palletsprojects.com/)

3.7+

1.0.1, 2.0

sw\_http\_server

[httpx](https://www.python-httpx.org/)

3.7+

0.22.\*, 0.23.\*

sw\_httpx

[kafka-python](https://kafka-python.readthedocs.io/)

3.7+

2.0

sw\_kafka

[loguru](https://pypi.org/project/loguru/)

3.7+

0.6.0, 0.7.0

sw\_loguru

[mysqlclient](https://mysqlclient.readthedocs.io/)

3.7+

2.1.\*

sw\_mysqlclient

neo4j

3.7+

5.\*

sw\_neo4j

[psycopg\\\[binary\\\]](https://www.psycopg.org/)

3.7+

3.0.18, 3.1.\*

sw\_psycopg

[psycopg2-binary](https://www.psycopg.org/)

3.7+ (not supported on 3.10+)

2.9

sw\_psycopg2

[pymongo](https://pymongo.readthedocs.io/)

3.7+

3.11.\*

sw\_pymongo

[pymysql](https://pymysql.readthedocs.io/en/latest/)

3.7+

1.0

sw\_pymysql

[pyramid](https://trypyramid.com/)

3.7+

1.10, 2.0

sw\_pyramid

[pika](https://pika.readthedocs.io/)

3.7+

1.2

sw\_rabbitmq

[redis](https://github.com/andymccurdy/redis-py/)

3.7+

3.5.\*, 4.5.1

sw\_redis

[requests](https://requests.readthedocs.io/en/master/)

3.7+

2.25, 2.26

sw\_requests

[sanic](https://sanic.readthedocs.io/en/latest)

3.7+ (not supported on 3.10+)

20.12

sw\_sanic

[tornado](https://www.tornadoweb.org/)

3.7+

6.0, 6.1

sw\_tornado

[urllib3](https://urllib3.readthedocs.io/en/latest/)

3.7+

1.25, 1.26

sw\_urllib3

[urllib.request](https://docs.python.org/3/library/urllib.request.html)

3.7+

\*

sw\_urllib\_request

[websockets](https://websockets.readthedocs.io/)

3.7+

10.3, 10.4

sw\_websockets

## What's next

-   Explore the [SkyWalking Python agent configuration reference](https://github.com/apache/skywalking-python/blob/master/docs/en/setup/Configuration.md) to fine-tune agent behavior.
    
-   Review the [skywalking-demo](https://github.com/alibabacloud-observability/skywalking-demo) sample project for a working Flask + MySQL example.
    

## References

-   [Apache SkyWalking official website](http://skywalking.apache.org/)
    
-   [SkyWalking Python agent configuration reference](https://github.com/apache/skywalking-python/blob/master/docs/en/setup/Configuration.md)
    
-   [Sample code on GitHub](https://github.com/alibabacloud-observability/skywalking-demo)
