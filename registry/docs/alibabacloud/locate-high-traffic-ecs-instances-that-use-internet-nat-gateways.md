Surges in Internet traffic may push the Internet NAT Gateway to the capacity and bandwidth limits and result in prolonged responses and disruption to business operations. You can analyze the traffic of Elastic Compute Service (ECS) instances with Source Network Address Translation (SNAT) rules in the Internet NAT Gateway to enhance bandwidth allocation and tackle network bottlenecks.

## **Overview**

The Internet NAT Gateway is a security gateway that provides SNAT and DNAT features for businesses and enables fine-grained service monitoring and management for instances that frequently access the Internet. The Internet NAT Gateway also displays top traffic, identifies ECS instances with burst traffic, and provides a variety of traffic monitoring metrics. For more information about the Internet NAT Gateway, see [Internet NAT gateway](/help/en/nat-gateway/user-guide/public-network-nat-gateway)

Flow logs of virtual private clouds (VPCs) can capture traffic from specific Elastic Network Interfaces (ENIs), VPCs, or all ENIs in a vSwitch.

To diagnose ECS instance traffic in an Internet NAT Gateway with the SNAT or DNAT feature, you can create flow logs for all ENIs in the vSwitch hosting the NAT Gateway. By enabling and analyzing flow logs, you can systematically examine the ECS instance traffic in the NAT Gateway, optimize instances with large traffic, and ensure stable network performance.

### **Features**

When flow logs are enabled, the inbound and outbound traffic of the ECS instances is logged for storage and analysis. This provides you with a comprehensive overview of the traffic patterns of the ECS instances.

Traffic between the internal network and the public network must be routed through an Internet NAT gateway, which is associated with an ENI that acts as the entry and exit point for the traffic. You can monitor the inbound and outbound traffic through the ENI to assess traffic usage and bandwidth consumption.

As illustrated in the following figure, with the ENI as the transit, the bilateral traffic pathways between the ECS instance and the Internet can be segmented into four routes, two ingress and two egress.

You can log on to the [Flow Log Center](/help/en/sls/usage-notes-6) to monitor and analyze traffic in the **IN and OUT directions**, and track the data recorded for ENIs.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3572513471/CAEQORiBgMD5ovzvrhkiIGMwNzUxYWE4MmE5YzQwY2ZhMTVlZjE4ZjYxOTQ4NDll4211033_20240221140610.735.svg)

**Click to view examples of the logs**

Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/lognext/profile) to view the traffic data and fields of four routes. For more information about the fields, see [Flow logs](/help/en/vpc/vpc-flow-logs#9977964ee5jsg).

**Number**

**Log example**

①

The traffic direction of ① is **in**.

-   Source IP address: private IP address of ECS
    
-   Destination IP address: private IP address of NAT Gateway
    

②

The traffic direction of ② is **out**.

-   Source IP address: private IP address of NAT Gateway
    
-   Destination IP address: public IP address
    

③

The traffic direction of ③ is **in**.

-   Source IP address: public IP address
    
-   Destination IP address: private IP address of NAT Gateway
    

④

The traffic direction of ④ is **out**.

-   Source IP address: private IP address of NAT Gateway
    
-   Destination IP address: private IP address of ECS
    

### **Scenarios**

Using flow logs to monitor ECS instances with high-volume traffic in the Internet NAT Gateway is applicable to the following scenarios:

-   For better network performance: In scenarios with high concurrency and traffic, you can use flow logs to analyze the inbound and outbound traffic of ECS instances in the Internet NAT Gateway. This helps you identify instances with large traffic throughput and pinpoint which combination of source IP addresses and instances causes bandwidth bottlenecks. You can then enhance bandwidth allocation to prevent network bottlenecks caused by overloaded instances.
    
-   For cost control and reduction: ECS instances with elevated traffic volumes may incur substantial bandwidth charges. Through careful examination of flow logs, you can pinpoint the instances and source IP addresses that are driving this high traffic volume. You can modify the network access pathways to reduce excessive traffic and cut costs.
    

## Example

A company has multiple internal servers that access resources in the Internet through the SNAT feature of the Internet NAT Gateway. Recently, the loading times of these servers have been prolonged when accessing external resources, which impacts the user experience. In an effort to enhance the user experience, the company wants to identify servers with high traffic volume and shorten the loading times through better bandwidth planning.

As shown in the following figure, the company has deployed a VPC in the China (Hangzhou) region with three ECS instances in vSwitch1. These instances access the Internet through the SNAT feature in vSwitch2. A surge in traffic from internal servers accessing the Internet slows server responses. The company can use flow logs to identify the instances with large traffic among the three ECS instances. By analyzing the logs, it can reallocate bandwidth and ease network bottlenecks.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3572513471/CAEQLxiBgMCDl5WKmhkiIDhkZTU0NWU3ZGQxMDRlOTk4MTk5NTIxYzlkZDFmNTRk4211033_20240218103329.037.svg)

## Prerequisites

-   A VPC has been deployed in the China (Hangzhou) region with two vSwtiches, vSwitch1 and vSwitch2. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    
-   Three ECS instances have been created in vSwitch1, namely ECS01, ECS02, and ECS03. For more information, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    
-   An Internet NAT Gateway has been created in vSwitch2 with SNAT entry that points to vSwitch1. For more information, see [Use the SNAT feature of an Internet NAT gateway to access the Internet](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet).
    
    **Click to view the parameters**
    
    **Item**
    
    **Configuration**
    
    VPC
    
    VPC CIDR block: 172.16.0.0/12
    
    vSwitch1 CIDR block
    
    vSwitch CIDR block: 172.16.1.0/24
    
    vSwitch2 CIDR block
    
    vSwitch CIDR block: 172.16.3.0/24
    
    Internet NAT Gateway
    
    Private IP: 172.16.3.128
    
    Elastic IP Address
    
    118.XX.XX.86
    
    ECS instances
    
    -   ECS01 instance: 172.16.1.44
        
    -   ECS02 instance: 172.16.1.45
        
    -   ECS03 instance: 172.16.1.46
        
    

## Procedure

### **Step 1: Create flow logs**

Before creating flow logs, ensure that the prerequisites have been met. For more information, see [Prerequisites](/help/en/vpc/user-guide/create-and-manage-flow-log#section-4df-v35-th3).

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, choose **O&M and Monitoring** > **Flow Log**.
    
3.  In the top navigation bar, select the region in which your VPC resides. **China (Hangzhou)** is chosen in this example.
    
4.  On the **Flow Log** page, click **Create a flow log**.
    
5.  In the **Create a flow log** dialog box, configure the flow log according to the following information, and then click **OK**.
    
    **Configuration**
    
    **Description**
    
    **Resource Type**
    
    Select the resource type for which you want to capture traffic. **vSwitch** is chosen in this example.
    
    **Resource Instance**
    
    Select the resource instance for which you want to capture traffic. The instance ID of vSwitch1 is chosen here.
    
    **Data Transfer Type**
    
    Select the type of traffic to be captured. **All Traffic** is chosen here.
    
    **Project**
    
    Select the project where the captured traffic will be stored. Choose **Create Project** and enter the name of the new project.
    
    **Logstore**
    
    Select the Logstore to store the captured traffic. Select **Create Logstore** and enter the name of the new Logstore.
    
    **Enable Log Analysis Report**
    
    The feature is enabled in this example.
    

### **Step 2: Simulate user traffic with wrk**

1.  Log on to the ECS01, ECS02, and ECS03 instances.
    
2.  Install the wrk tool on the ECS01, ECS02, and ECS03 instances by running the following commands.
    
    ```
    yum -y install git make gcc
    git clone https://github.com/wg/wrk.git
    yum install unzip
    cd wrk
    make
    ```
    
3.  Run the following commands on the ECS01, ECS02, and ECS03 instances respectively to perform user traffic testing:
    
    Execute the following command on ECS01:
    
    ```
    ./wrk -c 1000 -d 60s -t 3  http://101.XX.XX.200:80/  # 101.XX.XX.200 is a public IP
    ```
    
    Execute the following command on ECS02:
    
    ```
    ./wrk -c 2000 -d 60s -t 3  http://101.XX.XX.200:80/  # 101.XX.XX.200 is a public IP
    ```
    
    Execute the following command on ECS03:
    
    ```
    ./wrk -c 3000 -d 60s -t 3  http://101.XX.XX.200:80/  # 101.XX.XX.200 is a public IP
    ```
    
    The command line parameters are described as follows:
    
    -   \-c: Short for connections. The number of concurrent connections maintained by each thread.
        
    -   \-d: Short for duration. The test duration is measured in seconds. For example, -d 60s indicates a test duration of 60 seconds.
        
    -   \-t: Short for threads. The number of threads indicates how many concurrent users you want to simulate in the environment.
        

### **Step 3: View flow logs**

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  In the left-side navigation pane, choose **O&M and Monitoring** > **Flow Log**.
    
3.  In the top navigation bar, select the region to which the VPC belongs. In this example, **China (Hangzhou)** is chosen.
    
4.  On the **Flow Log** page, find the flow log that you want to view and click the link of the Logstore in the **Simple Log Service** column. On the Simple Log Service console, you can view the traffic information.
    
5.  Follow the steps in the sequence shown in the following figure. The traffic of ECS instances accessing the Internet through the SNAT entry is visualized in charts.
    
    As shown in the following chart, the ECS03 instance with the private IP `172.16.1.46` has the highest traffic among the three instances.
    
    ![高流量ECS截图.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5019002371/p839507.png)
    
    **Number**
    
    **Description**
    
    ①
    
    The following SQL statement is used as an example to aggregate and sort the flow logs. ECS instances with high traffic to a public IP address are displayed in charts.
    
    ```
    dstaddr: "101.XX.XX.200" and action: ACCEPT and srcaddr: 172.16.1.* | select date_format(from_unixtime(__time__ - __time__% 60), '%H:%i:%S') as time, srcaddr,sum(bytes*8/(case WHEN "end"-start=0 THEN 1 else "end"-start end)) as bandwidth group by time,srcaddr order by time asc limit 1000
    ```
    
    The SQL statement specifies three fields: time, bandwidth (bits per second, or bps), and srcaddr (source address). Time and srcaddr are aggregated and sorted in ascending order of time. In this case, 1,000 log entries are queried. For more information about the fields, see [Field details of VPC flow logs](/help/en/sls/vpc).
    
    Other fields in the command are described as follows:
    
    -   `dstaddr`: The destination address, which is the public IP address. `101.XX.X.XX.200` is entered in this statement.
        
    -   `srcaddr`: The source address, which is the IP address of the ECS instance. `172.16.1.*` is entered in this statement.
        
    -   Set the remaining fields to the values shown in the example.
        
    
    **Note**
    
    -   Enter the following SQL statement to filter the traffic from a specific public IP address to ECS instances:
        
        ```
        srcaddr: "101.XX.XX.200" and action: ACCEPT and dstaddr: 172.16.1.* | select date_format(from_unixtime(__time__ - __time__% 60), '%H:%i:%S') as time, 
        dstaddr,sum(bytes*8/(case WHEN "end"-start=0 THEN 1 else "end"-start end)) as bandwidth group by time,dstaddr order by time asc limit 1000
        ```
        
        Fields in the command are described as follows:
        
        -   `srcaddr`: The source address, which is the public IP address. `101.XX.XX.200` is entered in this statement.
            
        -   `dstaddr`: The destination address, which is the IP address of the ECS instance. `172.16.1.*` is entered in this statement.
            
        -   Set **Aggregated Column** to `dstaddr` when you generate the chart.
            
    -   Enter the following SQL statement to filter the traffic from ECS instances to all public IP addresses:
        
        ```
        srcaddr: 172.16.1.* and action: ACCEPT | select date_format(from_unixtime(__time__ - __time__% 60), '%H:%i:%S') as time, 
        srcaddr,sum(bytes*8/(case WHEN "end"-start=0 THEN 1 else "end"-start end)) as bandwidth from log where ip_to_domain(dstaddr)!='intranet' group by time,srcaddr order by time asc limit 1000
        ```
        
        The table below describes the parameters in the command:
        
        -   `srcaddr`: The source address, which is the private IP address. `172.16.1.*` is entered in this statement.
            
        -   `dstaddr`: The destination address, which is the public IP address.
            
        -   Set **Aggregated Column** to `srcaddr` when you generate the chart.
            
    
    ②
    
    Select the time period that you want to query. **Last 5 Minutes** is chosen in this example.
    
    ③
    
    Click the **General Configurations** tab. Click ![流图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2190881361/p266494.png) in **Chart Types**, which indicates flow charts.
    
    ④
    
    In the **Query and Analysis Configuration** section, configure the following parameters:
    
    -   **X-axis Field**: Set the value to **time**.
        
    -   **Y-axis Field**: Set the value to **bandwidth**.
        
    -   **Aggregated Column**: Set the value to **srcaddr**.
        
    
    In **Standard Configurations**, set **Format** to **bps, Kbps, Mbps (SI)**.
    
    Keep other parameters at their default value.
    
    ⑤
    
    Click **Add to New Dashboard** and set the following parameters in the dialog box that appears:
    
    -   **Operation**: **Create New Dashboard** is used in this example.
        
    -   **Layout Mode**: **Grid Layout** is used in this example.
        
    -   **Dashboard Name**: Enter a name for the dashboard. **ECS\_outbound\_traffic\_through\_NAT\_gateway** is used.
        
    
    Access the **Dashboard** to view flow log details.
    
    ⑥
    
    Click **Search & Analysis** to view the outbound traffic of each ECS instance to the Internet and identify instances with large traffic volumes.
    

## **References**

-   For more information on the fields captured by VPC flow logs, see [Flow Log Overview](/help/en/vpc/vpc-flow-logs).
    
-   For more information on error messages in flow log queries, see [Common Errors in Querying and Analyzing Logs](/help/en/sls/resolve-common-errors-that-may-occur-when-i-query-and-analyze-logs) for troubleshooting.
    
-   For more information on querying and analyzing logs, see [Querying and Analyzing Logs](/help/en/sls/quick-guide-to-query-and-analysis).
