This topic describes the procedure for using Global Accelerator (GA) and the basic scenarios of Global Accelerator to help you get started.

## Procedure

**Note**

This topic describes how to use a pay-as-you-go GA instance. If you want to use a subscription GA instance, you must associate a basic bandwidth plan with the instance. This way, you can configure acceleration regions and endpoint groups.

### Use standard GA instances

You can use standard GA instances to accelerate content delivery at Layer 4 (TCP and UDP) and Layer 7 (HTTP and HTTPS). Perform the following steps:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8862701471/CAEQORiBgMDKlImAqxkiIGQzZjAzZmU5MmUyZjQ0Nzg5ZjliMWZmNmRmYmI5NTEx3963382_20230830144006.372.svg)

1.  Creates a pay-as-you-go standard GA instance.
    
    When you create a pay-as-you-go standard GA instance, you can configure the acceleration areas, listeners, and endpoint groups. For more information, see [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#f5b961f027dh8).
    
2.  **Conditionally required:** If you use GA to accelerate a domain name, you must configure DNS settings and map the domain name that you want to accelerate to the CNAME that is allocated by GA.
    
    For more information about how to configure a CNAME record, see [Add a CNAME record for a domain name](/help/en/ga/user-guide/add-a-cname-record-for-a-domain-name).
    
3.  **Conditionally required:** If your service requires cross-border acceleration between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan), click here to view how to configure cross-border acceleration.
    
    1.  Enable cross-border acceleration.
        
        If you selected Compliance Commitments Regarding Cross-border Data Transfers as prompted when you create the instance, cross-border acceleration is enabled for your instance. You can skip this step.
        
        After cross-boarder acceleration is enabled, the **Transmission Network Type** of a standard GA instance is BGP (Multi-ISP) Pro. You can accelerate content delivery between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan). No additional configuration is required.
        
        1.  On the **Instances** page, find the standard GA instance that you want to manage and click its ID.
            
        2.  On the instance details page, click the **Instance Information** tab. In the **Transmission Network Type** section, click **Enable Cross-Border Acceleration**.
            
        3.  In the **Enable Cross-border Acceleration** dialog box, read the **Compliance Commitments Regarding Cross-border Data Transfers**, select **Agree to the Preceding Compliance Agreement**, and then click **Enable**.
            
        4.  In the message that appears, click **OK**.
            
    2.  Change the transmission network type
        
        If you require low latency and high quality acceleration, you can switch from the default BGP (Multi-ISP) Pro to Cross-border Express Connect.
        
        Before you proceed, make sure that you have completed enterprise real-name registration.
        
        1.  On the instance details page, click the **Instance Information** tab.
            
        2.  In the **Transmission Network Type** section, find the Cross-border Express Connect card and click Enable Cross-border Express Connect.
            
        3.  The first time you enable cross-border Express Connect circuits, select the following information in the **Switch to Cross-border Express Connect** message and click **Switch**.
            
            **Warning**
            
            If the current configuration involves cross-border networks, the switchover causes network interruptions for 1 minute. Proceed with caution.
            
            -   Read the **CDT Terms of Service**, select **I have read and agree to Cloud Data Transfer Terms of Service**, and then activate CDT.
                
            -   Read the risks about switchover to cross border Express Connect and select **I am aware of the risks and want to proceed**.
                
        4.  If this is not the first time that you enable cross-border Express Connect circuits, the Are you sure that you want to switch to cross-border Express Connect circuits? message appears. In the message, select the following check boxes and click **Switch**:
            
            **Warning**
            
            If the current configuration involves cross-border networks, the switchover causes network interruptions for 1 minute. Proceed with caution.
            
            -   Read **Compliance Warranty** and select **I understand and agree to the above compliance warranty**.
                
            -   Select **I am aware of the risks and want to proceed**.
                
        
        If **Enabled** is displayed on the Cross-border Express Connect card, cross-border Express Connect circuits can be used for cross-border acceleration.
        
    

### Use basic GA instances

You can use basic GA instances to accelerate content delivery at Layer 3 (IP). Perform the following steps:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8862701471/CAEQORiBgMDFlImAqxkiIDlmMTRlMTI0YWVhZDQ2ZGQ5ZmQ0OGVkNWRjYzdiNmQ53963382_20230830144006.372.svg)

1.  Create a pay-as-you-go basic GA instance that uses the **pay-by-data-transfer** bandwidth metering method.
    
    For more information, see [Create a pay-as-you-go basic GA instance](/help/en/ga/user-guide/create-and-manage-basic-ga-instances#a577f550881kp).
    
2.  **Conditionally required:** If your service requires cross-border acceleration between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan), click here to view how to configure cross-border acceleration.
    
    Before you enable cross-border acceleration or cross-border Express Connect circuits for your basic GA instance, you must complete enterprise real-name registration.
    
    1.  On the instance details page, click the **Instance Information** tab and turn on **Billing Information** in the **Transmission Network Type** section.
        
    2.  In the **Enable Cross-border Acceleration** dialog box, read the **Compliance Commitments Regarding Cross-border Data Transfers**, select **Agree to the Preceding Compliance Agreement**, and then click **Enable**.
        
        The first time you enable cross-border Express Connect circuits, read the **CDT Terms of Service**, select **I have read and agree to Cloud Data Transfer Terms of Service**, and then activate CDT.
        
    3.  In the message that appears, click **OK**.
        
    
    If Cross-border Express Connect Enabled is displayed on the right side of **Transmission Network Type**, cross-border Express Connect circuits can be used for cross-border acceleration.
    
3.  Add an acceleration area and accelerated IP addresses.
    
    For more information, see [Add an acceleration area](/help/en/ga/user-guide/add-and-manage-acceleration-areas-1#section-fba-71z-oii).
    
4.  Add an endpoint group and endpoints, and associate the accelerated IP addresses with the endpoint group.
    
    For more information, see [Add and manage endpoint groups and endpoints](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#task-2253915).
    

## Basic scenarios

**GA instance type**

**Scenario**

Standard

[Accelerate transmission of network traffic destined for a specified IP address](/help/en/ga/getting-started/accelerate-transmission-of-network-traffic-destined-for-a-specified-ip-address#task-2384284)

[Accelerate access to a backend service with a specified domain name](/help/en/ga/getting-started/accelerate-transmission-of-network-traffic-destined-for-a-specified-domain-name#task-2384284)

Basic

[Use basic GA instances to accelerate content delivery](/help/en/ga/getting-started/use-basic-ga-instances-to-accelerate-content-delivery#task-2176548)
