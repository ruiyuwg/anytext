You can view the key performance metrics and topology of an application on the Application Overview page.

## Background information

After the data of an application is reported to Tracing Analysis, Tracing Analysis starts to monitor the application in an all-around manner. On the Application Overview page, you can view the key performance metrics of the application. You can also view the topology to check the upstream and downstream services of your application and their dependencies.

## Procedure

1.  Log on to the [Tracing Analysis console](https://tracing-sgnew.console.alibabacloud.com/). In the left-side navigation pane, click Applications.
2.  On the Applications page, select a region in the top navigation bar and click the name of the application that you want to manage.
3.  On the Application Overview page, you can view the key performance metrics and topology of the application.

## View the key performance metrics of the application

On the Application Overview page, click the Overall Analysis tab to view the following key performance metrics:

-   The total number of requests, average response time, number of errors, and number of spans in the specified time range, and the percentage changes between the statistics of the same day last week or last day and the current statistics.
-   The line chart of how many times your application is called by upstream services and the response time, and how many times your application calls downstream services and the response time.
-   The 10 spans that require the most time and their line charts of average response time.

Figure 1. Overall Analysis tab

![Overall Analysis tab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0197757761/p270002.png)

## View the topology of the application

On the Application Overview page, click the Topology Graph tab to obtain a better view of the upstream and downstream services of your application and the call relationships between the services and the application. Then, you can identify the performance bottlenecks of your application.

The Topology Graph tab displays the following information:

-   The topology of service calls for the application in the specified time range.
-   The numbers of calls on the client, calls on the server, and internal calls for the application, average response time, and error rate in the specified time range.
-   The line charts of the number of requests, response time, and error rate in each minute of the specified time range.

Figure 2. Topology Graph tab

![Topology Graph tab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0197757761/p270021.png)

## Specify a time range

You can select a predefined time range or specify a custom time range.

-   In the upper-right corner of the page, click the date and time picker and select a predefined time range, such as Last 30 Minutes, Today, or This Week.
-   If no predefined time ranges meet your business requirements, select Custom. Select a start time and an end time in the calendar or enter a start time and an end time, and then click OK.
    
    **Note** The date format is `YYYY-MM-DD` and the time format is `HH:MM`.
    

Figure 3. Date and time picker

![Time Picker](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7719358161/p53830.png)
