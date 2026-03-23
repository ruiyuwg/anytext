Simple Log Service supports static settings and dynamic settings for alert severities. If you do not specify an evaluation condition when you set the Severity parameter, the setting of the alert severity is static. If you specify an evaluation condition when you set the Severity parameter, the settings of the alert severities are dynamic.

In this example, the access logs of a website are monitored. Simple Log Service calculates the ratio of 500 error responses on a specified website in the current 15 minutes to 500 error responses on the website in the same time range of the previous day. Then, Simple Log Service triggers an alert based on the ratio. The severity of the alert varies based on the range in which the ratio falls. The following figure shows how to set the Severity parameter.

**Important**

Query and analysis results are evaluated in sequence based on the specified trigger condition. If one of the query and analysis results meets the first evaluation condition, the other evaluation conditions that you specify are ignored. We recommend that you specify the highest severity level as the first evaluation condition when you set the Severity parameter in the Trigger Condition field.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8330332271/p827814.png)

Specify the following parameters:

-   **Query Statistics**: Enter `host:www.example.com and status = 500 | select coalesce(diff[2],0) as ratio from (select compare(cnt,86400) as diff from (select count(1) as cnt from log))`.
    
    This query statement is used to calculate the ratio of 500 error responses on a specified website in the current 15 minutes to 500 error responses on the same website in the same time range of the previous day.
    
-   **Trigger Condition**:
    
    -   Select **data matches the expression** and enter **ratio>1**. Set **Severity** to Critical.
        
        If the value of a **ratio** field in the query and analysis result is greater than 1, an alert of the Critical severity level is triggered.
        
    -   Select **data matches the expression** and enter **ratio>=0.5**. Set **Severity** to High.
        
        If the value of a **ratio** field in the query and analysis result is greater than or equal to 0.5, an alert of the High severity level is triggered.
        
    -   Select **data matches the expression** and enter **ratio>0.05**. Set **Severity** to Medium.
        
        If the value of a **ratio** field in the query and analysis result is greater than 0.05, an alert of the Medium severity level is triggered.
