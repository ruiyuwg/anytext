Simple Log Service lets you create a data transformation job to read data from a source Logstore, transform the data, and write the results to one or more destination Logstores. You can also query and analyze the transformed data to gain more insights. This topic describes how to create a data transformation job in the Simple Log Service console.

## Prerequisites

-   Data is collected in Simple Log Service. For more information, see [Data collection](/help/en/sls/data-collection-overview#concept-ikm-ql5-vdb).
    
-   If you use a Resource Access Management (RAM) user, grant the user permissions to manage data transformation jobs. For more information, see [Grant a RAM user permissions to manage data transformation jobs](/help/en/sls/authorized-ram-user-operation-data-processing#task-2005445).
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  Go to the data transformation page.
    
    1.  In the Projects section, click the project you want.
        
    2.  On the **Log Storage** > **Logstores** tab, click the logstore you want.
        
    3.  On the query and analysis page, click **Data Transformation**.
        
3.  In the upper-right corner of the page, select a time range for the data.
    
    After you select a time range, verify that logs appear on the **Raw Logs** tab.
    
4.  In the code editor, enter a data transformation statement.
    
    For more information about the syntax, see [Data transformation syntax](/help/en/sls/language-introduction#concept-1130584).
    
5.  Preview the data.
    
    1.  Click **Quick**.
        
        Simple Log Service supports quick and advanced preview. For more information, see [Preview and debug](/help/en/sls/preview-mode-overview/#task-2565077).
        
    2.  Click **Preview Data**.
        
        Review the preview results.
        
        -   If the data transformation fails because of an invalid statement or incorrect permissions, follow the on-screen instructions to resolve the issue.
            
        -   If the transformed data is correct, go to [Step 6](#step-snp-zml-13r).
            
        
6.  Create a data transformation job.
    
    1.  Click **Save as Transformation Job (Legacy)**.
        
    2.  In the **Create Data Transformation Job** panel, configure the following parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        Job Name
        
        The name of the data transformation job.
        
        Display Name
        
        The display name of the data transformation job.
        
        Job Description
        
        A description of the data transformation job.
        
        Authorization Method
        
        Choose how to authorize the data transformation job to read data from the source Logstore.
        
        -   Default Role: The job assumes the AliyunLogETLRole system role to read data from the source Logstore.
            
        -   Custom Role: The job assumes a custom role to read data from the source Logstore.
            
            First, grant the custom role permissions to read from the source Logstore. Then, enter the Alibaba Cloud Resource Name (ARN) of the custom role in the **Role ARN** field. For more information, see [Access data using a custom role](/help/en/sls/access-data-by-using-a-custom-role#task-2565033).
            
        
        Storage Destination
        
        Target name
        
        The name of the storage destination. A storage destination includes configurations such as Project and Logstore.
        
        You can create multiple storage destinations to store transformed data in different Logstores.
        
        -   In your transformation statement, use the name parameter of the e\_output or e\_coutput function to define the destination name. For more information, see [e\_outputLogStoreut](/help/en/sls/event-processing-functions#section-zi7-wtp-30c).
            
        -   If your transformation statement does not include the e\_output function, the job writes the transformed data to the Logstore in the first storage destination by default.
            
            If you configure only one destination Logstore, you usually do not need to use the e\_output function in your statement.
            
        -   If you set the name, project, and Logstore parameters in the e\_output or e\_coutput function, those settings override the Destination Project and Target Store values configured here.
            
        
        Destination Region
        
        The region where the destination Project resides.
        
        Cross-region data transformation uses HTTPS to transmit data, ensuring log privacy.
        
        Cross-region data transformation transmits data over the Internet. Unstable Internet connections may cause latency. Select **DCDN Acceleration** to speed up cross-region transmission. Before enabling DCDN Acceleration, make sure global acceleration is enabled for the destination Project. For more information, see [Log collection acceleration](/help/en/sls/enable-the-global-acceleration-feature#concept-bfn-n54-p2b).
        
        **Note**
        
        For cross-region data transformation, you are charged for Internet traffic after compression. For more information, see [Billable items of the pay-by-feature billing model](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
        
        Destination Project
        
        The name of the Project that stores the transformed data.
        
        Target Store
        
        The name of the destination Logstore that stores the transformed data.
        
        Authorization Method
        
        Choose how to authorize the data transformation job to write data to the destination Logstore.
        
        -   Default Role: The job assumes the AliyunLogETLRole system role to write transformed data to the destination Logstore.
            
        -   Custom Role: The job assumes a custom role to write transformed data to the destination Logstore.
            
            First, grant the custom role permissions to write to the destination Logstore. Then, enter the ARN of the custom role in the **Role ARN** field. For more information, see [Access data using a custom role](/help/en/sls/access-data-by-using-a-custom-role#task-2565033).
            
        
        Transformation Scope
        
        Time Range
        
        Specify the time range for the data transformation job.
        
        **Note**
        
        This time range depends on when logs are received.
        
        -   **All**: Transform data from the first log received by the Logstore until you manually stop the job.
            
        -   **From Specific Time**: Transform data starting from the log received at the specified start time until you manually stop the job.
            
        -   **Specific Time Range**: Specifies the start and end time for the (task). The (task) automatically stops at the specified end time.
            
        
        Advanced Options
        
        Advanced Parameter Settings
        
        For sensitive information such as database passwords used in transformation statements, Simple Log Service lets you store key-value pairs in a key pair. In your statement, reference the value with `res_local("key")`.
        
        Click **+** to add multiple key-value pairs. For example, config.vpc.vpc\_id.test1:vpc-uf6mskb0b\*\*\*\*n9yj specifies the ID of the virtual private cloud (VPC) where an ApsaraDB RDS instance resides.![高级参数配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7888280061/p130800.png)
        

## What to do next

After you create a data transformation job, you can perform the following tasks:

-   On the **Data Transformation Overview** page, view job details, modify the job, or stop the job. For more information, see [Manage a data transformation job](/help/en/sls/manage-a-data-transformation-job#task-1580295).
    
-   In the destination Logstore, run queries and perform analyses. For more information, see [Get started with query and analysis](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb).
