After you use Log4j2 to record and manage the operational logs of Java applications, you can use a Log4j2 appender or Logtail to collect logs to Simple Log Service for subsequent query and analysis.

## Log4j overview

[Apache Log4j](https://logging.apache.org/log4j/2.x/index.html) is an open source project that allows you to configure the log output destination to console, file, GUI component, socket server, NT event recorder, or UNIX Syslog daemon. Apache Log4j also allows you to set the output format for each log and define the level of each log to manage log generation in a more detailed manner. To configure the preceding features, you need to only use a configuration file. You do not need to modify the application code. Log4j consists of the following main components:

-   Layouts
    
    Layouts are used to format logs into a specific format. The following table describes common layouts.
    
    **Layout**
    
    **Description**
    
    HTMLLayout
    
    Formats logs as HTML tables.
    
    SimpleLayout
    
    Formats logs into a simple format, such as INFO-level logs.
    
    PatternLayout
    
    Outputs logs in a custom format. You can specify the arrangements and formats of elements, such as timestamp, log level, thread name, class name, method name, and log data.
    

-   Appenders
    
    Appenders are used to define the destinations of logs. You can configure multiple appenders to send logs to different destinations. The following table describes common appenders.
    
    **Appender**
    
    **Description**
    
    ConsoleAppender
    
    Outputs logs to a console.
    
    FileAppender
    
    Outputs logs to a file.
    
    DailyRollingFileAppender
    
    Outputs logs to a new file every day.
    
    RollingFileAppender
    
    Outputs logs to a file with a specific size. When the file reaches the specified size, the system automatically changes the name of the file and generates a new file.
    
    JDBCAppender
    
    Stores logs to a database.
    
-   Loggers
    
    Loggers are used to define the entry points of logs and capture log information. Each Logger is assigned a log level based on its importance or severity. Log4j defines the following log levels: OFF, FATAL, ERROR, WARN, INFO, DEBUG, TRACE, and ALL (listed in descending order of priority). Log levels can be inherited. Child classes record all log levels of the parent class. The following table describes the log levels.
    
    **Log level**
    
    **Description**
    
    OFF
    
    Disables all logs.
    
    FATAL
    
    Indicates error events that can cause applications to exit.
    
    ERROR
    
    Indicates error events that do not affect the running of systems.
    
    WARN
    
    Indicates potential errors.
    
    INFO
    
    Focuses on the running of applications. In most cases, this log level is used in scenarios in which logs are managed in a coarse-grained manner.
    
    DEBUG
    
    Facilitates diagnostic. In most cases, this log level is used in application debugging scenarios.
    
    TRACE
    
    Outputs the variables during the running of programs and displays the execution process. This log level is used to trace programs.
    
    ALL
    
    Prints all logs.
    

**Note**

A logger can correspond to multiple appenders. An appender can correspond to only one layout.

## **Prerequisites**

-   A project and a logstore are created. For more information, see [Create a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) and [Create a](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb) logstore.
    
-   If you use a Resource Access Management (RAM) user instead of the Alibaba Cloud account, the RAM user must have [the permissions to write data to a specific logstore](/help/en/sls/log-service-custom-permission-policy-reference#a37aa72047oyq). To grant permissions, first [create custom policies](/help/en/ram/create-a-custom-policy#section-v5a-gji-s5k), and then [grant permissions to the RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    

## **Procedure**

**Note**

In this topic, Java and Log4j2 are used in the examples. You can also use Log4j for programs in other programming languages, such as C, C++, .NET, and PL/SQL. The syntax and method for using Log4j for programs in other programming languages are the same as the syntax and method for using Log4j in Java programs.

### **Step 1: Add the configuration file of Log4j2 to the project**

1.  Add dependencies to the Maven project.
    
    ```
    <dependencies>
      <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-api</artifactId>
        <version>2.23.1</version>
      </dependency>
      <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-core</artifactId>
        <version>2.23.1</version>
      </dependency>
    </dependencies>
    ```
    
2.  Modify the configuration file.
    
    By default, the system searches for the configuration file in the classpath path. If the configuration file does not exist, you must manually create the file. In the following example, two appenders are defined in the log4j2.xml file. The appenders are used to output logs to the Simple Log Service console and the app.log file, respectively. The log level of the root logger is defined as ERROR, and the logs are output to the Simple Log Service console. The log level of the logger named com.example.demo.log is defined as WARN, and the logs are output to the app.log file. For more information about how to configure Log4j2, see [Log4j - Configuring Log4j 2 (apache.org)](https://logging.apache.org/log4j/2.x/manual/configuration.html)
    
    ```
    !" -- status="WARN". The internal status of Log4j2. This parameter is not used to capture and report potential issues during configurations.  -->
    <Configuration status="WARN">
        <! -- Define the two appenders  start  -->
        <Appenders>
            <! -- Define an appender named Console to print logs to system standard output.  -->
            <Console name="Console" target="SYSTEM_OUT">
                <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss:SSS zzz} [%t] %-5level %logger{36} - %msg%n"/>
            </Console>
            <! -- Define an appender named MyFile to print logs to the app.log file. -->
            <File name="MyFile" fileName="app.log">
                <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss:SSS zzz} [%t] %-5level %logger{36} - %msg%n"/>
            </File>
        </Appenders>
        <! -- Define the two appenders   end  -->
    
        <!-- Configure loggers      start  -->
        <Loggers>
            <! -- Define a logger named com.example.demo.log and set the log level to TRACE. The com.example.demo.log logger references the MyFile appender. The logger outputs logs whose levels are TRACE and higher to the MyFile appender.  -->
            <Logger name="com.example.demo.log" level="warn">
                <AppenderRef ref="MyFile" />
            </Logger>
            <!-- Define the root logger and set the log level to ERROR. The root logger references to the Console appender. The logger outputs logs whose levels are ERROR and higher to the Simple Log Service console.  -->
            <Root level="error">
                <AppenderRef ref="Console" />
            </Root>
        </Loggers>
        <!-- Configure loggers      end  -->
    </Configuration>
    ```
    
3.  Start to output logs.
    
    Write test code to read the defined appenders and output logs. Sample code:
    
    ```
        public void logExampleDemo() {
            // Obtain the logger named com.example.demo.log.
            Logger logger = LogManager.getLogger("com.example.demo.log");
    
            // Record log data at different levels.
            logger.trace("trace level");
            logger.debug("debug level");
            logger.info("info level");
            logger.warn("warn level");
            logger.error("error level");
            logger.fatal("fatal level");
        }
    ```
    
4.  The following sample code provides an example of the log output:
    
    ```
    2024-05-28 13:37:16:295 CST [http-nio-8080-exec-8] TRACE com.example.demo.log - trace level
    2024-05-28 13:37:16:296 CST [http-nio-8080-exec-8] DEBUG com.example.demo.log - debug level
    2024-05-28 13:37:16:296 CST [http-nio-8080-exec-8] INFO  com.example.demo.log - info level
    2024-05-28 13:37:16:296 CST [http-nio-8080-exec-8] WARN  com.example.demo.log - warn level
    2024-05-28 13:37:16:296 CST [http-nio-8080-exec-8] ERROR com.example.demo.log - error level
    2024-05-28 13:37:16:296 CST [http-nio-8080-exec-8] FATAL com.example.demo.log - fatal level
    ```
    

### **Step 2:** **Collect Log4j logs to Simple Log Service**

**Note**

-   The Log4j2 appender is a built-in log collection method of Log4j2. For applications that are integrated with Log4j2, you need to only perform simple configurations to start appenders to send logs in real time. The Log4j2 appender is suitable for scenarios in which a large amount of log data needs to be processed in real time.
    
-   To use Logtail to collect logs, you must install Logtail components on the server. Logtail components support multiple processing plug-ins.
    

#### Use a Log4j2 appender to collect Log4j logs

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4052979371/CAEQJxiBgIC73vLKghkiIDQ2NmQ1YWE4Njg5MDRkYTY5ZDFhM2VmMmY2MzkwMjQ14425289_20240530173157.489.svg)

1.  Add dependencies to the Maven project.
    
    ```
    <dependency>
        <groupId>com.google.protobuf</groupId>
        <artifactId>protobuf-java</artifactId>
        <version>2.5.0</version>
    </dependency>
    <dependency>
        <groupId>com.aliyun.openservices</groupId>
        <artifactId>aliyun-log-log4j2-appender</artifactId>
        <version>0.1.12</version>
    </dependency>
    ```
    
2.  Modify the configuration file.
    
    In the following example, an XML configuration file named `log4j2.xml` is used to configure appenders and loggers related to LogHub. If the configuration file does not exist, create the file in the root directory of the project. Sample code:
    
    ```
    <Appenders>
        <Loghub name="Loghub"
                project="your project"
                logStore="your logStore"
                endpoint="your project endpoint"
                accessKeyId="your accessKey id"
                accessKeySecret="your accessKey secret"
                totalSizeInBytes="104857600"
                maxBlockMs="0"
                ioThreadCount="8"
                batchSizeThresholdInBytes="524288"
                batchCountThreshold="4096"
                lingerMs="2000"
                retries="10"
                baseRetryBackoffMs="100"
                maxRetryBackoffMs="100"
                topic="your topic"
                source="your source"
                timeFormat="yyyy-MM-dd'T'HH:mmZ"
                timeZone="UTC"
                ignoreExceptions="true">
            <PatternLayout pattern="%d %-5level [%thread] %logger{0}: %msg"/>
        </Loghub>
    </Appenders>
    <Loggers>
        <Root level="warn">
            <AppenderRef ref="Loghub"/>
        </Root>
    </Loggers>
    ```
    
    In the preceding sample code, the project, logStore, endpoint, accessKeyId, and accessKeySecret parameters are required. Other parameters are optional, and you can use the default values. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    project
    
    The name of the Simple Log Service project.
    
    logStore
    
    The name of the Simple Log Service logstore.
    
    endpoint
    
    The public endpoint of Simple Log Service. For information about how to obtain the endpoint, see [Endpoints](/help/en/sls/developer-reference/service-entrance).
    
    accessKeyId
    
    The AccessKey ID. For information about how to obtain an AccessKey ID, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479).
    
    accessKeySecret
    
    The AccessKey secret. For information about how to obtain an AccessKey secret, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479).
    
3.  Test the demo.
    
    ```
    import org.apache.logging.log4j.LogManager;
    import org.apache.logging.log4j.Logger;
    
    public class Log4j2AppenderExample {
    
        private static final Logger LOGGER = LogManager.getLogger(Log4j2AppenderExample.class);
    
        public static void main(String[] args) throws InterruptedException {
            LOGGER.trace("log4j2 trace log");
            LOGGER.debug("log4j2 debug log");
            LOGGER.info("log4j2 info log");
            LOGGER.warn("log4j2 warn log");
            LOGGER.error("log4j2 error log", new RuntimeException("Runtime Exception"));
            Thread.sleep(1000 * 5);
        }
    }
    ```
    

#### Use Logtail to collect Log4j logs

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4052979371/CAEQJxiBgIDx1NzJghkiIDA4MDE4NzUwMzYwMzRkMDNhN2RmNzQ3NWQ4NGY5N2Uy4425289_20240530173311.864.svg)

**Important**

When you configure Logtail, you must provide the file path. Make sure that application logs can be written to log files as expected.

Simple Log Service provides configuration wizards to help you configure Logtail. If the Elastic Compute Service (ECS) instance and the Simple Log Service project are under the same account and region, see [Host text log collection (automatic installation)](/help/en/sls/host-text-log-collection-auto-install). Otherwise, see [Host text log collection (manual installation)](/help/en/sls/host-text-log-collection-manual-installation).

### Step 3: View logs

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, click the logstore that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0151802371/p768903.png)
    
4.  Check whether logs are uploaded to the logstore. [Guide to log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis) in the logstore. Then, click **Consumption Preview** to view the logs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0974739171/p802977.png)
    
5.  Query and analyze logs
    
    **Important**
    
    After logs are uploaded to the logstore, you must create indexes to query and analyze the logs. For more information, see [Create indexes](/help/en/sls/create-indexes). For information about how to create an index, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).
    
    Enter a query statement in the search box, click **Last 15 Minutes**, and then specify a query time range.
    
    The following sample code provides an example of a log:
    
    ```
    level: ERROR
    location: com.aliyun.openservices.log.log4j.example.Log4jAppenderExample.main(Log4jAppenderExample.java:16)
    message: error log
    throwable: java.lang.RuntimeException: xxx
    thread: main
    time: 2018-01-02T03:15+0000
    log: 0 [main] ERROR com.aliyun.openservices.log.log4j.example.Log4jAppenderExample - error log
    __source__: xxx
    __topic__: yyy
    ```
    
    Query and analyze logs on the logstore page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0974739171/p805971.png)
    
    You can enter a query statement to view, search for, and filter log data. For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis#298fc3bd89y3o). The following statements are provided as examples.
    
    -   Query the three positions at which the most errors occur within the previous hour.
        
        ```
        level: ERROR | select location ,count(*) as count GROUP BY  location  ORDER BY count DESC LIMIT 3
        ```
        
    -   Query the numbers of logs at each log level that are generated within the previous 15 minutes.
        
        ```
        | select level ,count(*) as count GROUP BY level ORDER BY count DESC
        ```
        
    

## **References**

-   For information about how to use Logtail to collect logs from servers, see [Collect text logs from servers](/help/en/sls/collect-host-logs). Multiple plug-ins are available. For more information, see [Parsing in regex mode](/help/en/sls/regular-parsing).
    
-   If the preview page is blank or the query page displays no data when you use Logtail to collect logs, you can troubleshoot the issue by following the instructions provided in the [What do I do if errors occur when I use Logtail to collect logs?](/help/en/sls/what-do-i-do-if-errors-occur-when-i-use-logtail-to-collect-logs) topic. If you use Logtail to collect logs, errors may occur. For example, regular expressions may fail to be parsed, invalid file paths may exist, and traffic may exceed the processing capabilities of shards. You can view Logtail collection errors by following the instructions provided in the [How do I view Logtail collection errors?](/help/en/sls/user-guide/how-do-i-view-logtail-collection-errors) topic. For information about the common errors in data collection, see [How do I troubleshoot the common errors that may occur when Simple Log Service collects logs?](/help/en/sls/log-collection-error-type#t20173.html).
    
-   For information about use cases and frequently asked questions (FAQ) about using Log4j2 appenders to collect Log4j logs, see [Log4j2 Appender](https://github.com/aliyun/aliyun-log-log4j2-appender). For information about use cases and FAQ about using Log4j versions earlier than Log4j2 to collect Log4j logs, see [Log4j Appender](https://github.com/aliyun/aliyun-log-log4j-appender).
    
-   When you use a Log4j2 appender to collect Log4j logs, you must configure an AccessKey pair. For information about how to obtain an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479). For information about how to configure the endpoint provided by Simple Log Service, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
