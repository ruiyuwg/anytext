This topic provides answers to some frequently asked questions about scheduling parameters.

-   **Typical use scenarios of scheduling parameters**
    
    -   [I run an instance of a node at 00:00 on the current day to analyze the data in the partition that corresponds to 23:00 on the previous day. However, the data in the partition that corresponds to 23:00 on the current day is analyzed. What do I do?](#section-gjm-ni7-p4c)
        
    -   [How do I specify a table partition in a format that contains a space, such as pt=yyyy-mm-dd hh24:mi:ss?](#section-amt-9t8-8lc)
        
    -   [A node is scheduled to run at the time specified by the $cyctime or $\[yyyymmddhh24miss\] variable. The node is scheduled to run at 20:00 every day, but the ancestor node of the node fails to run as scheduled. As a result, the node is delayed and runs at 00:00 on the next day. In this case, is the value of the $cyctime or $\[yyyymmddhh24miss\] variable 20:00 or 00:00?](#section-n1r-8gh-0wk)
        
    -   [How do I configure the time properties of an ODPS Spark node?](#section-5pl-sep-t19)
        
    -   [How do I reprocess the return values of the scheduling parameters for a node if the node cannot process the return values?](#section-mzj-cak-6o2)
        
    -   [What are the differences between the return values of a MaxCompute date function and a scheduling parameter?](#section-x52-kt2-yjn)
        
-   **Testing of scheduling parameters**
    
    -   [How do I test the configurations of the scheduling parameters on the DataStudio page?](#section-p8w-fyh-bj0)
        
    -   [What do I do if the FAILED: ODPS-0130161:\[1,84\] Parse exception - invalid token '$' error message is reported for a real-time synchronization node?](#section-lrd-xkw-una)
        
    -   [What do I do if the params format error, please check your params(key=values) error is reported?](#section-8p4-euf-f52)
        
-   **Differences in the value assignment logic of scheduling parameters**
    
    [What are the differences in the value assignment logic of scheduling parameters among the Run, Run with Parameters, and Perform Smoke Testing in Development Environment modes?](#section-6i8-r8g-igg)
    
-   **O&M of scheduling parameters and check of the configurations of the scheduling parameters**
    
    -   [How do I check the validity of the values of scheduling parameters in the production environment?](#section-skk-23r-dzm)
        
    -   [How do I check whether the values of the scheduling parameters of an instance are valid by viewing logs?](#section-ere-ipy-qh2)
        
    -   [How are instances generated on the day when daylight saving time begins and ends?](#section-yt5-xfq-iqc)
        
    -   [I configure a scheduling parameter for a node and commit and deploy the node, but the return value of the scheduling parameter remains unchanged. What do I do?](#section-pdi-3pr-aqe)
        

## I run an instance of a node at 00:00 on the current day to analyze the data in the partition that corresponds to 23:00 on the previous day. However, the data in the partition that corresponds to 23:00 on the current day is analyzed. What do I do?

-   **Problem description**
    
    The table partition format is day=yyyymmdd,hour=hh24. The $\[yyyymmdd\] $\[hh24-1/24\] variable is used to specify the date and time of a partition. If I run an instance at 00:00, the custom variable datetime=$\[yyyymmdd\] specifies the current day instead of the previous day. As a result, the data in the partition that corresponds to 23:00 on the current day is analyzed.
    
-   **Solution**
    
    Change the value of datetime to $\[yyyymmdd-1/24\] and retain the value $\[hh24-1/24\] for **hour**.
    
    **Configurations**
    
    -   In the code: `day=datetime, hour={hour},`
        
    -   Scheduling parameters that are configured for nodes: `datetime=[yyyymmdd-1/24],hour=[hh24-1/24]`
        
    
    **Scenarios**
    
    -   For an instance that is scheduled to run at 2021-07-21 00:00:00, the value of $\[yyyymmdd-1/24\] is 20210720, and the value of $\[hh24-1/24\] is 23. This is because 1 hour before 2021-07-21 00:00:00 is a point in time on the previous day.
        
    -   For an instance that is scheduled to run at 2021-07-21 01:00:00, the value of $\[yyyymmdd-1/24\] is 20210721, and the value of $\[hh24-1/24\] is 00. This is because 1 hour before 2021-07-21 01:00:00 is still a point in time on the current day.
        
    

## How do I specify a table partition in a format that contains a space, such as pt=yyyy-mm-dd hh24:mi:ss?

**Important**

Spaces are not allowed in scheduling parameters.

Use the following custom variables to obtain the date and time:

-   **Obtain the date**: Use the datetime=$\[yyyy-mm-dd\] custom variable.
    
-   **Obtain the time**: Use the hour=$\[hh24:mi:ss\] custom variable.
    

Then, concatenate the variables with a space to form pt=${datetime} ${hour}. ![Properties tab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0482114361/p70641.png)

## A node is scheduled to run at the time specified by the $cyctime or $\[yyyymmddhh24miss\] variable. The node is scheduled to run at 20:00 every day, but the ancestor node of the node fails to run as scheduled. As a result, the node is delayed and runs at 00:00 on the next day. In this case, is the value of the $cyctime or $\[yyyymmddhh24miss\] variable 20:00 or 00:00?

The scheduling time of an instance is the time at which the instance is scheduled to run. If resources are insufficient, the time at which an instance actually runs may be different from the time at which the instance is scheduled to run. The scheduling time of an instance is fixed at the time when the instance is generated and does not change even if the time at which the instance runs changes.

The value of a scheduling parameter is determined based on the scheduling time of the instance and is replaced when the instance is generated.

## How do I configure the time properties of an ODPS Spark node?

When you create an ODPS Spark node, you must configure variables for the node on the node configuration tab.

After you configure the variables, click the **Properties** tab in the right-side navigation pane of the node configuration tab. On the Properties tab, assign scheduling parameters to the variables as values. The system runs the scheduling parameters and node parameters in sequence. For information about the value assignment formats of scheduling parameters, see [Supported formats of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-2185254). ![Configure an ODPS Spark node](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1004908761/p272961.png)

## How do I reprocess the return values of the scheduling parameters for a node if the node cannot process the return values?

After you configure scheduling parameters for some nodes, such as batch synchronization nodes, the nodes cannot process the return values of the scheduling parameters unless you reprocess the return values. You can configure assignment nodes as the ancestor nodes of these nodes. This way, you can use the assignment nodes to reference the scheduling parameters and reprocess the return values of scheduling parameters. Then, you can use context-based parameters to pass the reprocessed values to the required descendant nodes.

-   For more information about assignment nodes, see [Configure an assignment node](/help/en/dataworks/user-guide/configure-an-assignment-node#task-2485378).
    
-   For more information about how to configure input and output parameters, see [Configure input and output parameters](/help/en/dataworks/user-guide/configure-input-and-output-parameters#task-ycz-ts4-kfb).
    

## What are the differences between the return values of a MaxCompute date function and a scheduling parameter?

-   If you use a MaxCompute date function, the return value is the system time when the instance runs. If the instance runs at different points in time, the return values are different.
    
-   If you use a scheduling parameter, the return result is a calculated result of the scheduling time. If the instance runs at different points in time, the return values remain the same.
    

## How do I test the configurations of the scheduling parameters on the DataStudio page?

The values of the scheduling parameters are automatically replaced in the scheduling system only after you deploy the scheduling parameters in the production environment. If you want to check whether the values of the scheduling parameters are valid on the DataStudio page, click the Perform Smoke Testing in Development Environment icon in the top toolbar of the node configuration tab.

**Note**

For a data synchronization node of Data Integration, you cannot check whether the values of the scheduling parameters are valid in the development environment. If you want to perform such a test, you must create an SQL node and then test the configurations of the scheduling parameters by clicking the Perform Smoke Testing in Development Environment icon. If the scheduling parameters pass the test, you can use the configurations of these parameters in the data synchronization node.

## What do I do if the `FAILED: ODPS-0130161:[1,84] Parse exception - invalid token '$'` error message is reported for a real-time synchronization node?

**Cause: No values are assigned to the scheduling parameters, or the values that are assigned to the scheduling parameters are invalid.**

**Solutions**:

1.  Check whether values are assigned to the scheduling parameters.
    
2.  Check whether the values that are assigned to the scheduling parameters are valid. For more information, see [Supported formats of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-t2q-jmq-p2b).
    

**Important**

After you modify the scheduling parameters of a node, you must commit and deploy the node. After the node is deployed, go to the Cycle Task page in Operation Center and check whether the values of the scheduling parameters are updated on the General tab of the node.

![Invalid parameter configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8481505761/p297503.png)

## What do I do if the `params format error, please check your params(key=values)` error is reported?

**Solutions**:

1.  Check whether values are assigned to variables.
    
2.  Check whether spaces are used in the scheduling parameters.
    
3.  Check whether a node name contains periods (.) and Chinese characters at the same time.
    

**Example:** time①=②$\[yyyymmdd③hh24:mi:ss\]time1=$\[yyyymmdd\]④time2=$\[hh24:mi:ss\]. Symbols 1, 2, 3, and 4 represent the positions where spaces may be added.

-   Do not add a space before or after the equal sign (=) in a scheduling parameter. In this example, do not add spaces in the positions specified by Symbols 1 and 2.
    
-   Do not include a space in the value of a scheduling parameter. In this example, do not add a space in the position specified by Symbol 3.
    
-   Separate two scheduling parameters with a space. In this case, add a space in the position specified by Symbol 4.
    

## What are the differences in the value assignment logic of scheduling parameters among the Run, Run with Parameters, and Perform Smoke Testing in Development Environment modes?

**Mode**

**Description**

**Run**

The first time you click the Run icon, you must manually assign constants to variables in the code. The constants are recorded by DataWorks. If you modify the code, the variables still use the constants that you assigned.

**Run with Parameters**

If you use the Run with Parameters mode, you must manually assign constants to variables in the code. If you modify the variables in the code, you must use the Run with Parameters mode to reassign constants to the variables.

**Note**

If you want to change the resource group that is used by a node, click the **Run with Parameters** icon.

**Perform Smoke Testing in Development Environment**

You can enter a data timestamp to simulate automatic node scheduling and obtain the replaced values of scheduling parameters at the specified data timestamp.

## How do I check the validity of the values of scheduling parameters in the production environment?

After you modify the scheduling parameters of a node on the DataStudio page and commit and deploy the node, you can check whether the values of the scheduling parameters meet your business requirements on the General tab of the Cycle Task page in Operation Center in the production environment. If the values do not meet your business requirements, check whether the deployment package of the node is generated as expected on the deployment page. You can check whether the values of scheduling parameters of an auto triggered instance meet your business requirements on the General tab of the Cycle Instance page in Operation Center.

**Important**

When you modify the scheduling parameters of an auto triggered node, the configurations of the scheduling parameters of the instance generated for the node are updated in real time. The real-time update is performed no matter whether the instance is run.

![Cycle Task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2105672371/p297506.png)

**Scenarios:**

-   For example, you assign $bizdate to the time1 scheduling parameter of Instance A1 of Node A. If Instance A1 is successfully run on the current day, the time1 scheduling parameter is set to the data timestamp specified by bizdate in the code.
    
-   If you change the value of the time1 scheduling parameter from $bizdate to $cyctime at a point in time on the current day, Instance A1 is run at the scheduling time that is specified by cyctime on the current day.
    
-   If you rerun Instance A1, the latest configuration of time1 is used. In this example, time1=$cyctime is used.
    
-   You can view the values of the scheduling parameters of the instance before the value changes in logs generated for the instance. For more information about how to check whether the values of the scheduling parameters of an instance are valid by viewing logs, see [How do I check whether the values of the scheduling parameters of an instance are valid by viewing logs?](#section-ere-ipy-qh2).
    

## How do I check whether the values of the scheduling parameters of an instance are valid by viewing logs?

Find `SKYNET_PARAVALUE` in the code. ![Check whether the values of scheduling parameters of an instance are valid by viewing logs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0233114361/p297509.png)

## How are instances generated on the day when daylight saving time begins and ends?

DataWorks supports immediate instance generation and daylight saving time-based parameter computing features. This way, nodes can be run as expected when daylight saving time begins or ends. For example, the time zone is UTC-8.

-   When daylight saving time begins, 10 minutes before 03:00 is 01:50, and 23 instances are generated on that day. The system does not run the instance that is scheduled to run at 02:00 on that day.
    
-   When daylight saving time ends, 10 minutes before 03:00 is 02:50, and 24 instances are generated on that day.
    

If a node scheduled by day, week, or month is scheduled to run within the period that is skipped when daylight saving time begins, an instance is generated and run at 00:00 on that day.

## I configure a scheduling parameter for a node and commit and deploy the node, but the return value of the scheduling parameter remains unchanged. What do I do?

Check whether the scheduling parameter is overwritten by a workflow parameter with the same name. For more information, see [Use workflow parameters](/help/en/dataworks/user-guide/use-workflow-parameters#task-2551957).

If a workflow parameter with the same name exists, you can delete the workflow parameter based on your business requirements. If you want to retain the workflow parameter, you must change the name of the scheduling parameter for the node.
