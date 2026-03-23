On the Application Details page of an application in the Tracing Analysis console, you can view the key metrics, call topology, and traces of an application on each server where it is deployed.

## Procedure

1.  Log on to the [Tracing Analysis console](https://tracing-sgnew.console.alibabacloud.com/). In the left-side navigation pane, click Applications.
2.  On the Applications page, select a region in the top navigation bar and click the name of the application that you want to manage.
3.  In the left-side navigation pane, click Application Details.
    
    **Note** To sort the servers where the application is deployed, you can click the Response Time, Requests, or Exceptions tab, and then click the upward or downward arrow next to the name of the tab. To filter the servers, you can enter a keyword in the search box and click the search icon.
    

## Application Overview

On the Application Details page of an application, the Overview tab displays all servers where the application is deployed. You can sort the servers by response time, number of requests, or number of errors. After you select a server from the server list, you can view the detailed call topology of the application on the Overview tab. You can also view the time series curves of response time, number of requests, and number of errors. ![Tracing Analysis Application Overview](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6794932761/p525410.png)

## View traces

The Traces tab displays up to 100 traces that consume the most amount of time on the specified host within a specified period of time.

Figure 1. Traces page

![ ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1640622561/p345199.png)

**Note** In the Status column, the green icon indicates that the time consumed is less than 500 milliseconds. The yellow icon indicates that the time consumed ranges from 500 milliseconds to 1,000 milliseconds. The red icon indicates that the time consumed is greater than 1,000 milliseconds or that one of the tag keys of the trace is set to `error`.

On the Traces tab, you can perform one of the following operations based on your business requirements:

-   Enter a value that is accurate to milliseconds in the Greater Than field and click Search. Then, the traces whose time consumed is greater than the value are returned in the search result.
-   Select Abnormal and click Search. Then, abnormal traces are returned in the search result.
-   Click the up or down arrow next to Generation Time or Consumption Time to sort the results in descending or ascending order.
-   Click the ID of a trace to go to the Traces page. The page displays the waterfall chart of the trace.

## View the waterfall chart of a trace

The Traces tab displays the span name, timeline, application name, start time, server IP address, and status of each trace.

**Note** The IP Address column may display IP addresses or server names. The information that is displayed in the column varies based on the display settings that are configured on the Application Settings page. For more information, see Manage applications and tabs.

Figure 2. Traces page

![ ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1640622561/p344943.png)

Move the pointer over the name of a span to view the information about the span. The information includes the duration, start time, tags, and log events.

![ ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1640622561/p344953.png)

## Specify a time range

You can select a predefined time range or specify a custom time range.

-   In the upper-right corner of the page, click the date and time picker and select a predefined time range, such as Last 30 Minutes, Today, or This Week.
-   If no predefined time ranges meet your business requirements, select Custom. Select a start time and an end time in the calendar or enter a start time and an end time, and then click OK.
    
    **Note** The date format is `YYYY-MM-DD` and the time format is `HH:MM`.
    

Figure 3. Date and time picker

![Time Picker](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7719358161/p53830.png)
