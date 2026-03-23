By default, MaxCompute does not allow you to access resources in virtual private clouds (VPCs) by using user-defined functions (UDFs). If you want to use UDFs to access resources in a VPC, you must establish a network connection between MaxCompute and the VPC. This topic describes how to use a UDF to access resources in a VPC.

## Prerequisites

Make sure that the following requirements are met:

-   The UDF code is written.
    
    For more information about how to write the UDF code and register a UDF, see [Java UDFs](/help/en/maxcompute/user-guide/java-udfs#concept-mxb-xn2-vdb) or [Python 2 UDFs](/help/en/maxcompute/user-guide/python-2-udfs#concept-pjv-qs2-xdb).
    
-   The MaxCompute client is installed.
    
    For more information about how to install and configure the MaxCompute client, see [Install and configure the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu).
    

## Background information

Before you can use a UDF to access resources in a VPC, you must establish a network connection between MaxCompute and the VPC. For more information, see [Network connection process](/help/en/maxcompute/user-guide/network-connection-process/#section-qug-auu-qn2). After you establish the network connection, add `set odps.session.networklink=<networklink_name>;` before the SQL statement that you want to execute. Then, commit the SET command together with the SQL statement to call the UDF. `networklink_name` specifies the name of the network connection that you established.

## Limits

The VPC connection scheme is supported only in the China (Beijing), China (Shanghai), China (Zhangjiakou), China (Hangzhou), China (Shenzhen), China (Hong Kong), Singapore, Germany (Frankfurt), and US (Virginia) regions. Therefore, you can use UDFs to access only the resources that are deployed in VPCs in these regions.

## Step 1: Establish a network connection

Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/cn-shanghai/project-list). In the upper-left corner of the console, select a region. In the left-side navigation pane, choose **Tenants** > **Network Connection** to establish a network connection between MaxCompute and the desired VPC. For more information, see [Access over a VPC (dedicated connection)](/help/en/maxcompute/user-guide/network-connection-process/#section-tk5-9qp-hj7).

## Step 2: Call the UDF to access resources in the VPC

1.  [Install and start the MaxCompute client.](/help/en/maxcompute/getting-started/start-the-maxcompute-client#task-2079377)
    
2.  Register the UDF.
    
    1.  Download the [udf-3.jar](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20221219/lafe/udf-3.jar) file.
        
    2.  Store the downloaded JAR file in the bin directory of your local MaxCompute client, and then upload it as a resource. The command example is as follows:
        
        **Note**
        
        If the JAR file is located in another directory, you must add the specific path before the file name.
        
        ```
        add jar udf-3.jar;
        ```
        
    3.  Register the UDF. Sample command:
        
        ```
        create FUNCTION  t_telnet as 'com.ali.odps.udf.Telnet' USING 'udf-3.jar';
        ```
        
    
3.  Execute the SQL statement to call the UDF.
    
    ```
    set odps.sql.type.system.odps2=true;
    -- Specify the name of the network connection that you established based on the VPC connection scheme. This setting is valid only for the current session. 
    set odps.session.networklink=testLink;
    -- Execute the following SQL statement to call the UDF to access resources in the VPC: 
    select t_telnet("172.16.xxx.xxx",<Port number>,<Timeout period>); 
    ```
    
    If True is returned, the network connection is established and the UDF can be called. If an error is returned, check whether the network connection information is correctly configured.
