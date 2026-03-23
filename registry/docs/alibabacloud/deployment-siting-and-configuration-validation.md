You can use the network observation data in the Network Intelligence Service (NIS) console to evaluate your services, determine which region or zone to deploy your services, and verify the network configurations to ensure that the network runs as expected and meets your business requirements.

## **Scenarios**

You can view the network performance of each Alibaba Cloud region, select the best region to deploy your services, and verify the network configurations by using NIS.

## **Evaluate the server site before you deploy services**

### **Evaluate regions**

The Internet Connection Quality page displays the latencies between Alibaba Cloud regions and other regions. The latency data helps you select the most suitable region when you deploy services. For more information, see [Monitor the Internet access latency](/help/en/nis/user-guide/work-with-network-performance-observation).

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Performance** > **Internet Connection Quality**.
    
3.  Click **China** or **Global** and select the region where you want to view network latencies from the drop-down list.
    
    -   View the latencies between Chinese or global regions and the desired Alibaba Cloud region.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7825434071/p728656.png)
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7825434071/p729077.png)
        
    -   View the latencies between Chinese or global regions and the desired Alibaba Cloud region for different Internet service providers (ISPs).
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5573002071/p728658.png)
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5573002071/p729079.png)
        

### **Evaluate zones**

The Cloud Network Performance page displays the average network latencies between zones in the same Alibaba Cloud region or the average network latencies between Alibaba Cloud regions. The latency data helps you select the most suitable region and zone when you deploy services. For more information, see [Monitor cloud network performance](/help/en/nis/user-guide/cloud-network-mutual-access-performance-observation).

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Performance** > **Cloud Network Performance**. View the average network latencies between zones in the same Alibaba Cloud region or latencies between different Alibaba Cloud regions.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5573002071/p729120.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4573002071/p729118.png)
    

## **Verify configurations after deployment**

### **Verify instance configurations**

The instance diagnostics feature helps you check the configurations and status of instances, generates diagnostic reports, and provides suggestions on how to fix issues. For more information, see [Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics).

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Self-diagnostics** > **Instance Diagnostics**.
    
3.  On the **Instance Diagnostics** page, click **Diagnose Instance**.
    
4.  In the **Instance Health Diagnostics** dialog box, configure the required parameters and click **Start**.
    
5.  In the ****Diagnostic Details**** panel, view the progress, summary, and details about the analysis of the instance.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5573002071/p729330.png)
    

### Verify path configurations

You can use the reachability analyzer to check the network connectivity of a major path. For more information, see [Work with the reachability analyzer](/help/en/nis/user-guide/work-with-reachability-analyzer).

1.  Log on to the [NIS console](https://nis.console.alibabacloud.com/).
    
2.  On the **Reachability Analyzer** page, click **Start Analyzing**.
    
3.  On the **Start Analyzing** page, configure the required parameters.
    
4.  Specify whether to save the path parameters. Default value: **No**.
    
5.  Click **Start Analyzing**. View the Internet analysis results.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5573002071/p728712.png)
