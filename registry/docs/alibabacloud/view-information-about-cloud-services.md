The Asset Center page in Security Center displays security information about your Cloud Services. This includes details about at-risk Cloud Services and statistics for different service types, such as Server Load Balancer (SLB), NAT Gateway, ApsaraDB RDS, and ApsaraDB for MongoDB. This topic describes how to filter and view the security status of your Cloud Services.

## Procedure

1.  In the Security Center console, go to the [Assets](https://yundun.console.alibabacloud.com/?p=sas#/assetOverview/home/ap-southeast-1) page. At the top of the page, select the asset region: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  On the **Cloud Product** tab, view information about your Cloud Services.
    
    -   **View at-risk Cloud Services**
        
        -   The top of the page displays the total number of **Cloud Product** and the number of **At-risk Cloud Services**.
            
            Click the number under **At-risk Cloud Services** to view the at-risk Cloud Services.
            
        -   From the list of Cloud Services, click a service's name or click **View** or **Fix** in the **Actions** column to view its details.
            
    -   **Filter by asset type**
        
        In the **All Alibaba Cloud Services** list on the left, click an asset type, such as **ECS**, to view the number and details of assets of that type.
        
    -   **Use multiple filters**
        
        In the search box above the list, select a filter type, such as **Service Provider**, **Public IP Address**, **Instance Name**, **Instance ID**, **Whether Risk Exists**, or **Region**. Then, enter or select a value for the filter to find specific assets.
        
        **Note**
        
        You can use multiple filter conditions and combine them with a logical operator. The following operators are available:
        
        -   **The search conditions are evaluated by using a logical AND.**: Returns results that match all filter conditions.
            
        -   **OR**: Returns results that match at least one of the filter conditions.
            
        
        To save the applied filters, click **Save**. In the **Save Search Condition** dialog box, enter a name for the filter combination and click **OK**. You can then reuse this filter from the Frequent search conditions drop-down list.
