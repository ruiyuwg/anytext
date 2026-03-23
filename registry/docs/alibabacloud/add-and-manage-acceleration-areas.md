An acceleration area is a region where access to your services is accelerated. Select the region where your clients are located, or a nearby region, as the acceleration area.

## Background

Configure acceleration areas for a Global Accelerator (GA) instance if its [accelerated IP address type](/help/en/ga/user-guide/overview-1/#section-vxi-r6e-pcc) is **Elastic IP Address**. If the accelerated IP address type is **Anycast Elastic IP Address**, you cannot add or delete acceleration areas. You can only [edit the bandwidth](#section-fso-jtt-u3n) for all acceleration areas at the same time.

## Prerequisites

-   You have [created a standard Global Accelerator instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612).
    
-   For subscription GA instance, you must [purchase and attach a basic bandwidth plan](/help/en/ga/153205#task-2403658).
    

## Add an acceleration area

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the target GA instance and click its instance ID.
    
3.  On the instance details page, click the **Acceleration Areas** tab, and then click **Add Acceleration Area**.
    
4.  In the **Add Acceleration Area** dialog box, configure the acceleration area and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Select Acceleration Region**
    
    From the drop-down list, select one or more regions where you want to accelerate access.
    
    For more information about the mapping between areas and regions, see [Acceleration areas](/help/en/ga/user-guide/overview-1/#section-99j-n10-9c3).
    
    **Note**
    
    -   If the region where the client resides is not supported by GA, you can select the acceleration region that is closest to the client. The client can use the accelerated IP address or CNAME to access the Alibaba Cloud acceleration network from the acceleration region.
        
    -   For subscription GA instances, the number of acceleration regions that you can add is limited by the total bandwidth and the GA instance type. For details, see [Standard Global Accelerator instances](/help/en/ga/user-guide/overview-of-standard-ga-instances/#concept-2382438).
        
    
    **Assign Bandwidth**
    
    Select a bandwidth allocation method. This parameter is only available for GA instances that support multiple acceleration regions.
    
    -   **Allocate Bandwidth by Region**: Select this option when you need to specify a different bandwidth for each acceleration region.
        
    -   **Allocate Bandwidth**: Select this option when multiple acceleration regions require the same bandwidth. You only need to set the bandwidth for the first region, and the same bandwidth is automatically allocated to the remaining regions.
        
    
    **Bandwidth**
    
    Set the bandwidth for the acceleration region. Unit: Mbps.
    
    -   For pay-as-you-go GA instances, the bandwidth range for each acceleration region is from 2 Mbps to 10,000 Mbps.
        
    -   For subscription GA instances, the total bandwidth of all acceleration regions must be less than or equal to the peak bandwidth of the attached subscription basic bandwidth plan. The minimum bandwidth for each acceleration region is 2 Mbps.
        
    
    **Note**
    
    For a subscription GA instance, make sure that the total bandwidth of all acceleration regions does not exceed the maximum bandwidth supported by the GA instance type.
    
    For more information, see [Acceleration region bandwidth](/help/en/ga/user-guide/overview-1/#section-dwe-f37-0um).
    
    **IP Protocol**
    
    Select the IP protocol used to access the GA service.
    
    -   **IPv4**: assigns IPv4 addresses. The IPv4 addresses are used to accelerate IPv4 services for IPv4 clients.
        
    -   **IPv6**: assigns IPv6 addresses. The IPv6 addresses are used to accelerate IPv4 services for IPv6 clients.
        
    -   **Dual Stack**: assigns IPv4 and IPv6 addresses. This allows IPv4 and IPv6 clients to connect to GA at the same time.
        
    
    **ISP Line Type**
    
    Select the ISP line type for the GA service. Available only for pay-as-you-go GA instances.
    
    -   **BGP (Multi-ISP)**: provides premium BGP lines across the globe. This is the default line type. BGP lines from different ISPs can be used. The optimal BGP line is automatically selected to ensure network stability.
        
        All acceleration regions support BGP (Multi-ISP).
        
    -   **BGP Pro**: BGP (Multi-ISP) Pro lines optimize data transmission to the Chinese mainland and improve connection quality for international services. Cross-border connections are established by using Chinese mainland ISP services when BGP (Multi-ISP) Pro lines provide services to users in the Chinese mainland (except data centers). This reduces network latency.
        
        BGP (Multi-ISP) Pro is available only in the China (Hong Kong) and Japan (Tokyo) regions.
        
    
    **Cross-border Acceleration Settings**
    
    Read the **Compliance Commitments Regarding Cross-border Data Transfers** and select **Agree to the Preceding Compliance Agreement**.
    
    This step is required only if cross-border acceleration is not enabled for your Global Accelerator instance and your service configuration involves cross-border data transfer between the Chinese mainland and regions outside the Chinese mainland, or between other countries or regions.
    
    The acceleration area is successfully added after its name is displayed in the list.
    
    **Note**
    
    An acceleration area takes effect approximately 2 minutes after it is added.
    

## Modify an acceleration area

You can modify the access bandwidth of an acceleration area for a standard GA instance.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the target GA instance and click its instance ID.
    
3.  On the **Acceleration Areas** tab, modify the bandwidth of the acceleration area as follows:
    
    -   If the accelerated IP address type is **Elastic IP Address**, Click **Edit Bandwidth**. In the **Modify Bandwidth** dialog box, modify the access bandwidth of the destination region (Bandwidth limit: 2 to 10,000 Mbps), and click **OK**.
        
    -   If the accelerated IP address type is **Anycast EIP**, click **Edit** to the right of **Bandwidth**, modify the inbound bandwidth for all acceleration areas (Bandwidth limit: 200 to 5000 Mbps), and click **OK**.
        

## Delete an acceleration area

You can delete an acceleration area. GA no longer provides acceleration services for that area after deletion.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the target GA instance and click its instance ID.
    
3.  On the **Acceleration Areas** tab, find the target acceleration area and click **Delete** in the **Actions** column.
    
4.  In the **Delete Accelerated IP Address** dialog box, click **OK**.
    

## **FAQ**

### **Can I use GA if the client resides in a region that is not supported by GA?**

Yes.

When you configure an acceleration region, select the region closest to your client. The client can use the accelerated IP address or CNAME to access the Alibaba Cloud acceleration network from the acceleration region.

## References

-   [CreateIpSets](/help/en/ga/developer-reference/api-ga-2019-11-20-createipsets): Creates an acceleration region for a standard GA instance.
    
-   [UpdateIpSet](/help/en/ga/developer-reference/api-ga-2019-11-20-updateipset): Modifies a specified acceleration region in an acceleration area of a standard GA instance.
    
-   [UpdateIpSets](/help/en/ga/developer-reference/api-ga-2019-11-20-updateipsets): Modifies multiple acceleration regions in an acceleration area of a standard GA instance.
    
-   [DeleteIpSet](/help/en/ga/developer-reference/api-ga-2019-11-20-deleteipset): Deletes an acceleration region from a standard GA instance.
    
-   [DeleteIpSets](/help/en/ga/developer-reference/api-ga-2019-11-20-deleteipsets): Deletes multiple acceleration regions from a standard GA instance.
