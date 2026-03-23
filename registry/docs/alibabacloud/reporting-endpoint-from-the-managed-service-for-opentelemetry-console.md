When you run Java microservices across distributed environments, identifying performance bottlenecks and tracing requests across services requires instrumentation. The SkyWalking Java agent attaches to your application at startup and reports trace data to Managed Service for OpenTelemetry -- without code changes. After data starts flowing, you can view application topology, traces, abnormal and slow transactions, and SQL analysis in the console.

The following sections walk through attaching the SkyWalking Java agent to a Java application, configuring reporting, and managing plug-ins.

## Prerequisites

-   [SkyWalking 6.x or later](https://skywalking.apache.org/downloads/) downloaded and extracted. Use the latest stable version.
    
-   The extracted agent folder accessible by the Java process that runs your application
    

The agent folder contains the following key directories:

**Directory**

**Purpose**

`/plugins`

Active plug-ins. Adding or removing a JAR here enables or disables that plug-in.

`/logs`

Agent log files (default location).

**Warning**

Do not rename or relocate the agent folder. All logs, plug-ins, and configuration files must remain in this folder.

## Instrument a Java application automatically

### Step 1: Download the agent

Download [SkyWalking Java Agent 8.16.0](https://github.com/apache/skywalking-java/releases/tag/v8.16.0) and extract it.

### Step 2: Get a reporting endpoint

Retrieve the endpoint and authentication token from the Managed Service for OpenTelemetry console. The console provides two interfaces:

#### New console

1.  Log on to the [Managed Service for OpenTelemetry console](https://trace.console.aliyun.com/).
    
2.  In the left-side navigation pane, click **Integration Center**.
    
3.  In the **Open Source Frameworks** section, click the **SkyWalking** card.
    
4.  In the **SkyWalking** panel, click the **Start Integration** tab and select a region.
    
    **Note**
    
    When you access a region for the first time, resources are automatically initialized.
    
5.  Set the **Connection Type** and copy the endpoint.
    
    -   **Alibaba Cloud VPC Network** -- Use this option if your service runs on Alibaba Cloud in the same region.
        
    -   **Public Network** -- Use this option for all other scenarios.
        
    
    ![Endpoint configuration in the new console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9342607271/p751794.png)
    

#### Old console

1.  Log on to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Cluster Configurations**, then click the **Access point information** tab.
    
3.  In the top navigation bar, select a region. In the **Cluster Information** section, turn on **Show Token**.
    
4.  Set **Client** to **SkyWalking** and copy the endpoint from the **Related Information** column.
    
    **Note**
    
    Use a VPC endpoint if your application runs in an Alibaba Cloud production environment. Otherwise, use a public endpoint.
    
    ![Endpoint configuration in the old console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2663148661/p506425.png)
    

### Step 3: Configure the agent

Open `config/agent.config` in the agent folder and set the following properties:

```
# Reporting endpoint from the Managed Service for OpenTelemetry console
collector.backend_service=<endpoint>

# Authentication token from the console
agent.authentication=<token>

# A unique name for your service
agent.service_name=<your-service-name>
```

Replace the placeholders with your actual values:

**Placeholder**

**Description**

`<endpoint>`

Reporting endpoint copied from the console

`<token>`

Authentication token from the console

`<your-service-name>`

A display name for your service in the SkyWalking UI

### Step 4: Attach the agent to your application

Choose the attachment method for your runtime environment. In each example below, replace `<skywalking-agent-path>` with the absolute path to `skywalking-agent.jar` in the agent folder.

**Important**

Replace `<skywalking-agent-path>` in the following sample code with the absolute path to the skywalking-agent.jar file in the agent folder.

## Linux Tomcat 7 / Tomcat 8

Add the following line to the beginning of `tomcat/bin/catalina.sh`:

```
CATALINA_OPTS="$CATALINA_OPTS -javaagent:<skywalking-agent-path>"; export CATALINA_OPTS
```

## Windows Tomcat 7 / Tomcat 8

Add the following line to the beginning of `tomcat/bin/catalina.bat`:

```
set "CATALINA_OPTS=-javaagent:<skywalking-agent-path>"
```

## JAR File or Spring Boot

**Important**

The `-javaagent` parameter must appear before `-jar`.

```
java -javaagent:<skywalking-agent-path> -jar yourApp.jar
```

## Jetty

Add the following lines to `{JETTY_HOME}/start.ini`:

```
--exec
-javaagent:<skywalking-agent-path>
```

### Step 5: Restart the application

Restart your application.

## Sample code

For a complete working example, see the [SkyWalking Demo](https://github.com/alibabacloud-observability/skywalking-demo) repository.

## Agent configuration reference

The `config/agent.config` file supports the following attributes (version 8.16.0):

### Agent attributes

View agent attributes

**Attribute**

**Description**

**Default**

`agent.namespace`

Namespace for isolating headers in cross-process propagation. When set, headers use the format `HeaderName:Namespace`.

Not set

`agent.service_name`

Service name displayed in the SkyWalking UI. Set a unique name for each service. Multiple instances of a service share the same name.

`Your_ApplicationName`

`agent.sample_n_per_3_secs`

Number of trace samples collected every 3 seconds. A negative value or `0` disables sampling.

Not set

`agent.authentication`

Authentication token for the backend.

Not set

`agent.span_limit_per_segment`

Maximum number of spans per segment. Helps assess application memory usage.

Not set

`agent.ignore_suffix`

If the first span's operation name matches an entry in this list, the segment is discarded.

Not set

`agent.is_open_debugging_class`

When `true`, saves all instrumented class files to `/debugging`. Useful for compatibility troubleshooting.

Not set

`agent.cause_exception_depth`

Stack depth recorded for exceptions.

`5`

`agent.force_reconnection_period`

Force reconnection period, based on `grpc_channel_check_interval`.

`1`

`agent.operation_name_threshold`

Maximum operation name length (up to 190 characters).

`150`

`agent.keep_tracing`

When `true`, continues tracing even if the backend is unavailable.

`false`

`osinfo.ipv4_list_size`

Maximum number of IPv4 addresses to report.

`10`

`collector.backend_service`

Backend address that receives trace data.

`127.0.0.1:11800`

`collector.grpc_channel_check_interval`

Interval (seconds) for checking gRPC channel status.

`30`

`collector.heartbeat_period`

Heartbeat reporting interval (seconds).

`30`

`collector.grpc_upstream_timeout`

Timeout (seconds) for sending data to the upstream gRPC service.

`30`

`collector.get_profile_task_interval`

Interval (seconds) for querying profiling tasks.

`20`

`logging.level`

Log level.

`DEBUG`

`logging.file_name`

Log file name.

`skywalking-api.log`

`logging.output`

Log output mode: `FILE` (default) or `CONSOLE`.

`FILE`

`logging.dir`

Log directory. Empty string means the default system output directory.

`""`

`logging.pattern`

Log format. Supported specifiers: `%level`, `%timestamp` (`yyyy-MM-dd HH:mm:ss:SSS`), `%thread`, `%msg`, `%class`, `%throwable`, `%agent_name`.

`%level %timestamp %thread %class : %msg %throwable`

`logging.max_file_size`

Maximum log file size (bytes). When exceeded, the file is archived and a new file is created.

`314572800` (300 MB)

`logging.max_history_files`

Maximum number of archived log files. A negative value or `0` means no limit.

`-1`

### Configuration methods

Override `agent.config` values with any of the following methods, listed from highest to lowest precedence:

1.  **Agent options** -- Append key-value pairs after the agent JAR path in the JVM argument:
    
    ```
       # Syntax
       -javaagent:/path/to/skywalking-agent.jar=[key1]=[value1],[key2]=[value2]
    
       # Example
       java -javaagent:/path/to/skywalking-agent.jar=agent.service_name=<your-service-name>,agent.authentication=<your-token> -jar your-project.jar
    ```
    
2.  **System properties** -- Pass values with the `-Dskywalking.` prefix:
    
    ```
       java -javaagent:/path/to/skywalking-agent.jar -Dskywalking.agent.service_name=<your-service-name> -jar your-project.jar
    ```
    
3.  **Environment variables** -- Export the corresponding environment variable defined in `agent.config`. For example, `agent.service_name` maps to `SW_AGENT_NAME`:
    
    ```
       export SW_AGENT_NAME=<your-service-name>
    ```
    
4.  **Configuration file** -- Set values directly in `config/agent.config` (lowest precedence).
    

## Plug-in management

SkyWalking provides automatic instrumentation for common frameworks including Dubbo, gRPC, JDBC, OkHttp, Spring, Tomcat, Struts, and Jedis. It also supports manual instrumentation based on the OpenTracing standard.

### Official plug-ins

All JAR files in the `/plugins` directory are active by default. Remove a JAR to deactivate a plug-in; add a JAR to activate one.

### Optional plug-ins

Additional plug-ins are available in the `optional-plugins` folder. To activate an optional plug-in, move its JAR file into the `/plugins` directory.

![Optional plug-ins folder](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7582985961/p711902.png)

### Bootstrap plug-ins

Bootstrap plug-ins are stored in the `bootstrap-plugins` folder and are disabled by default due to potential stability risks. To use a bootstrap plug-in, copy its JAR file into the `/plugins` directory.

![Bootstrap plug-ins folder](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7582985961/p711905.png)

### Third-party plug-ins

Some plug-ins are maintained outside the core SkyWalking repository due to performance considerations. For details, see [java-plugin-extensions](https://github.com/SkyAPM/java-plugin-extensions) on GitHub.

View supported plug-ins

**Category**

**Framework**

**Version**

**HTTP server**

[Tomcat](https://github.com/apache/tomcat)

7, 8, 9

[Spring Boot Web](https://github.com/spring-projects/spring-boot)

4.x

Spring MVC with Servlet 3.x

3.x, 4.x, 5.x

[Nutz Web Framework](https://github.com/nutzam/nutz)

1.x

[Struts2 MVC](http://struts.apache.org/)

2.3.x -- 2.5.x

[Resin](http://www.caucho.com/resin-4.0/)

3, 4

[Jetty Server](http://www.eclipse.org/jetty/)

9

[Spring Webflux](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html)

5.x

[Undertow](http://undertow.io/)

2.0.0.Final -- 2.0.13.Final

[RESTEasy](https://resteasy.github.io/)

3.1.0.Final -- 3.7.0.Final

[Play Framework](https://www.playframework.com/)

2.6.x -- 2.8.x

[Light4J Microservices Framework](https://doc.networknt.com/)

1.6.x -- 2.x

[Netty SocketIO](https://github.com/mrniko/netty-socketio)

1.x

**HTTP client**

[Feign](https://github.com/OpenFeign/feign)

9.x

Netflix Spring Cloud Feign

1.1.x, 1.2.x, 1.3.x

[OkHttp](https://github.com/square/okhttp)

3.x

[Apache HttpClient](http://hc.apache.org/)

4.2, 4.3

[Spring RestTemplate](https://github.com/spring-projects/spring-framework)

4.x

[Jetty Client](http://www.eclipse.org/jetty/)

9

[Apache AsyncClient](https://hc.apache.org/httpcomponents-asyncclient-4.1.x/index.html)

4.x

**HTTP gateway**

[Spring Cloud Gateway](https://spring.io/projects/spring-cloud-gateway)

2.1.x.RELEASE

**JDBC**

MySQL Driver

5.x, 6.x, 8.x

Oracle Driver

\--

H2 Driver

1.3.x -- 1.4.x

[Sharding-JDBC](https://github.com/shardingjdbc/sharding-jdbc)

1.5.x

[ShardingSphere](https://github.com/apache/incubator-shardingsphere)

3.0.0, 4.0.0-RC1

PostgreSQL Driver

8.x, 9.x, 42.x

MariaDB Driver

1.8, 2.x

**RPC**

[Dubbo](https://github.com/alibaba/dubbo)

2.5.4 -- 2.6.0

[Dubbox](https://github.com/dangdangdotcom/dubbox)

2.8.4

[Apache Dubbo](https://github.com/apache/dubbo)

2.7.0

[Motan](https://github.com/weibocom/motan)

0.2.x -- 1.1.0

[gRPC](https://github.com/grpc/grpc-java)

1.x

[Apache ServiceComb Java Chassis](https://github.com/apache/servicecomb-java-chassis)

0.1 -- 0.5, 1.0.x

[SOFARPC](https://github.com/alipay/sofa-rpc)

5.4.0

[Armeria](https://github.com/line/armeria)

0.63.0 -- 0.98.0

[Apache Avro](http://avro.apache.org/)

1.7.0 -- 1.8.x

[Finagle](https://github.com/twitter/finagle)

6.25.0 -- 20.1.0

**Message queue**

[RocketMQ](https://github.com/apache/rocketmq)

4.x

[Kafka](http://kafka.apache.org/)

0.11.0.0 -- 1.0

[ActiveMQ](https://github.com/apache/activemq)

5.x

[RabbitMQ](https://www.rabbitmq.com/)

5.x

[Pulsar](http://pulsar.apache.org/)

2.2.x -- 2.4.x

**NoSQL**

[Jedis (Redis)](https://github.com/xetorthio/jedis)

2.x

[Redisson (Redis)](https://github.com/redisson/redisson)

3.5.2+

[Lettuce (Redis)](https://github.com/lettuce-io/lettuce-core)

5.x

[MongoDB Java Driver](https://github.com/mongodb/mongo-java-driver)

2.13, 2.14, 3.3+

[Spymemcached](https://github.com/couchbase/spymemcached)

2.x

[Xmemcached](https://github.com/killme2008/xmemcached)

2.x

[Elasticsearch transport-client](https://github.com/elastic/elasticsearch)

5.2.x -- 5.6.x, 6.7.1 -- 6.8.4

[Elasticsearch rest-high-level-client](https://www.elastic.co/guide/en/elasticsearch/client/java-rest/6.7/index.html)

6.7.1 -- 6.8.4

[SolrJ](https://lucene.apache.org/solr)

7.x

[Cassandra Java Driver](https://github.com/datastax/java-driver)

3.7.0 -- 3.7.2

**Service discovery**

[Netflix Eureka](https://github.com/Netflix/eureka)

\--

**Coordination**

[ZooKeeper](https://github.com/apache/zookeeper)

3.4.x (except 3.4.4)

**Spring ecosystem**

Spring Bean annotations (`@Bean`, `@Service`, `@Component`, `@Repository`)

3.x, 4.x

Spring Core Async (SuccessCallback, FailureCallback, ListenableFutureCallback)

4.x

[Hystrix](https://github.com/Netflix/Hystrix)

1.4.20 -- 1.5.12

**Scheduler**

[Elastic Job](https://github.com/elasticjob/elastic-job)

2.x

**OpenTracing**

OpenTracing community support

\--

**Data sync**

[Canal](https://github.com/alibaba/canal) (MySQL binlog-based incremental data sync)

1.0.25 -- 1.1.2

**JSON**

[GSON](https://github.com/google/gson)

2.8.x

**Vert.x**

Vert.x EventBus

3.2+

Vert.x Web

3.x

**Async**

[Spring @Async](https://github.com/spring-projects/spring-framework)

4.x, 5.x

**Cache**

[Ehcache](https://www.ehcache.org/)

2.x

**Kotlin**

[Coroutine](https://kotlinlang.org/docs/reference/coroutines-overview.html)

1.0.1 -- 1.3.x

### Develop a custom plug-in

To build a custom SkyWalking Java agent plug-in, see the [SkyWalking plug-in development guide](https://skywalking.apache.org/docs/skywalking-java/next/en/setup/service-agent/java-agent/java-plugin-development-guide/). Managed Service for OpenTelemetry supports trace reporting from custom plug-ins.

## FAQ

**Why does my application not appear in the console after connecting SkyWalking?**

The agent may not be reporting data. Check `{skywalking-agent-path}/logs/skywalking-api.log` for reporting activity. Successful data reporting produces output similar to the following:

![Successful reporting log output](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5066672161/p89094.png)

If no data appears, check for these common causes:

-   **Sampling is enabled** -- If `agent.sample_n_per_3_secs` is set to a low value, some traces may not be captured.
    
-   **Data is filtered** -- The `agent.ignore_suffix` setting may be discarding matching segments.
    
-   **No requests received** -- The application has not processed any incoming requests since the agent started.
    

## References

-   [Apache SkyWalking official website](http://skywalking.apache.org/)
    
-   [SkyWalking releases](http://skywalking.apache.org/downloads/)
    
-   [Deploy the SkyWalking Java agent](https://github.com/apache/incubator-skywalking/blob/v5.0.0-GA/docs/cn/Deploy-skywalking-agent-CN.md)
