Funnel analysis is a common conversion analysis method and is widely used in data operations and analysis scenarios, such as the analysis of user behavior, the traffic analysis of app data, and the analysis of product goal conversion. Administrators or operations personnel can use funnel analysis to measure the performance at each stage based on the conversion rate. This way, they can optimize products to increase conversion rates.

## **Background information**

An event represents a specific meaningful behavior or series of meaningful behaviors of a user, such as downloading, registering with, and logging on to a game app. The actual usage process of the user can be restored by analyzing various behavioral data of the user. This improves product conversion rates and helps business growth. Common user behavior analysis includes event analysis, funnel analysis, and retention analysis. Funnel functions are mainly used to analyze the conversion rates and churn rates at each step in a multi-step operation process. You can obtain a clear view of the business conversion by analyzing metrics at each step in a funnel model. For example, a complete process to play a game may include the following steps: logon to the game, entering the game, playing the game, game level settlement, and logout from the game. You can use funnel functions to configure a funnel for user behavior at the preceding steps and analyze the conversion at each step to help implement fine-grained data analysis in business, optimize product experience, and improve the conversion rate.

## **Terms**

Basic terms for funnel analysis:

-   Event: an operation that needs to be analyzed.
    
-   Conversion step: an analysis process consisting of multiple events. Funnel calculation is performed strictly at each step.
    
-   Time range: the period of time in which an event occurred, which is the period of time in which the first step in a funnel is performed.
    
-   Window period: the time limit for funnel analysis. A conversion is considered successful when all steps in a funnel are complete within the window period.
    

The following figure shows the analysis UI that involves the terms.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6212819371/p914492.png)

## **Overview**

Hologres is a one-stop, real-time data warehousing service developed by Alibaba Cloud. Hologres supports multi-dimensional analysis of real-time data in multiple scenarios. In user behavior analysis scenarios, Hologres provides multiple types of funnel functions to quickly and efficiently analyze user behavior. Funnel functions are widely used in user analysis scenarios in industries such as the Internet, e-commerce, and gaming.

Hologres supports the following funnel functions: the basic funnel function windowFunnel, the range funnel function range\_funnel, the property association funnel function finder\_funnel, and the dimension grouping funnel function finder\_group\_funnel.

The following table describes the features supported by each function.

**Funnel function**

**Description**

**Feature support**

**Specifying a window period (window)**

**Specifying a funnel event (event)**

**Configuring event property association(attr\_related)**

**Grouping by dimension (group\_event\_index)**

**Specifying a time range (start\_timestamp)**

[windowFunnel](/help/en/hologres/developer-reference/windowfunnel)

This function can be used to calculate the funnel results of events within a specific time window.

Supported

**Note**

You can specify only a short time window, such as a few hours or a time range within one day. You cannot use multiple calendar days as a window.

Supported

Not supported

Not supported

Supported

range\_funnel

This function can be used to calculate the funnel results of events within a specific time window and to group and display the funnel results by time field.

Supported

**Note**

You can use multiple calendar days as a window.

Supported

Not supported

Supported

**Note**

Only grouping by time is supported.

Supported

finder\_funnel

This function can be used to calculate the funnel results of events within a specific time window. You can specify the associated properties of events. However, you cannot group the funnel results by time.

Supported

**Note**

You can use multiple calendar days as a window.

Supported

Supported

Not supported

Supported

[finder\_group\_funnel](/help/en/hologres/developer-reference/finder-group-funnel)

This function can be used to calculate the funnel results of events within a specific time window. You can group and display the funnel results by any field and specify the associated properties of events.

Supported

**Note**

You can use multiple calendar days as a window.

Supported

Supported

Supported

**Note**

Grouping by any field is supported.

Supported

**Note**

-   Property association: You can associate events by property. For example, you configure a funnel in gaming scenarios, and the funnel includes the following steps: logon to a game, entering the game, playing the game, game level settlement, and logout from the game. In addition, you specify the "country" property for each event. In this case, you can use this property as the association ID to ensure that the conversion in each step is performed based on the same property value. The properties used for association in different steps in a funnel can be the same or different. However, the properties used for association must be of the same type.
    
-   Grouping by dimension: Results are grouped and displayed by dimension. For example, results can be grouped by day, country, or IP address to achieve finer-grained funnel analysis. A user can only be in one group. If a user does not belong to any group, the user is assigned to the unreach group.
