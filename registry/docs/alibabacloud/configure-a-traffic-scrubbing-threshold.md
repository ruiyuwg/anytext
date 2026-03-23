When the service traffic for your cloud product meets the conditions for traffic scrubbing, Anti-DDoS Basic scrubs the inbound traffic to ensure service availability. This topic describes how to configure traffic scrubbing thresholds.

## What is traffic scrubbing?

Traffic scrubbing is the process of monitoring, analyzing, and filtering network traffic in real time during a DDoS attack. Anti-DDoS Basic distinguishes between malicious and normal traffic and discards malicious traffic to ensure the availability of your services.

In addition to the BPS and PPS scrubbing thresholds that you configure, Anti-DDoS Basic uses AI-based intelligent analysis. By leveraging the big data capabilities of Alibaba Cloud, Anti-DDoS Basic learns your traffic patterns and uses algorithms to detect attacks. Traffic scrubbing is triggered only when the AI-based intelligent analysis detects a DDoS attack and the inbound traffic reaches the BPS or PPS threshold that you set. This method prevents false positives that can be caused by fixed thresholds, for example, when normal service traffic fluctuations exceed the scrubbing threshold.

## Scrubbing thresholds

Anti-DDoS Basic lets you use either the default scrubbing threshold or a custom scrubbing threshold.

### Default scrubbing threshold

Alibaba Cloud dynamically adjusts the default scrubbing threshold for cloud products based on their traffic loads. The adjustment is typically based on the following two factors.

-   Instance type and public bandwidth of the cloud product: For cloud products such as Elastic Compute Service (ECS) and NAT Gateway, Alibaba Cloud calculates the default scrubbing threshold based on the instance type and the configured public bandwidth. For more information, see [Cloud product specifications and scrubbing thresholds](/help/en/anti-ddos/basic-ddos-protection/product-overview/cloud-service-specification-and-cleaning-trigger-value).
    
-   Overall platform stability and resource allocation: Alibaba Cloud must ensure the stable operation of the entire cloud platform and prevent an attack on one cloud product from affecting other users or cloud products. When calculating the default scrubbing threshold, factors such as the total resources of the platform, the current load of each instance, and historical attack data are considered. This ensures that resources for traffic scrubbing are reasonably allocated during an attack to maintain the overall stability of the platform.
    

**Note**

The default scrubbing threshold is typically the maximum value that you can set for a custom threshold. You can lower the threshold as required.

### **Custom scrubbing threshold**

A custom scrubbing threshold is a user-defined value that triggers traffic scrubbing. You can configure this threshold based on your specific business requirements, network environment, and security policies.

## **Recommendations and notes for threshold configuration**

### **Recommendations**

Set scrubbing thresholds slightly above your normal traffic levels. If the thresholds are too high, traffic scrubbing may not be triggered in time to defend against attacks. If the thresholds are too low, traffic scrubbing may be unnecessarily triggered, which can disrupt normal access.

For example, for financial services with high security requirements, critical government information systems, or small websites that have experienced low-frequency, high-intensity attacks, consider lowering the thresholds during periods of stable traffic to better defend against low-volume attacks. Conversely, during website promotions, major gaming events, or peak hours for popular streamers on ApsaraVideo Live platforms, you can increase the thresholds to avoid false positives caused by normal service traffic spikes.

### **Notes**

After you configure the scrubbing threshold:

-   Upgrade: The custom scrubbing threshold takes precedence and does not change after the upgrade.
    
-   If you downgrade a cloud product:
    
    -   If the default scrubbing threshold after the downgrade is lower than your custom scrubbing threshold, the threshold reverts to the default value and your custom setting is discarded. The default scrubbing threshold is then used for any subsequent upgrades or downgrades.
        
    -   If the default scrubbing threshold after the downgrade is higher than your custom scrubbing threshold, your custom threshold takes precedence and remains unchanged.
        

## Adjust the scrubbing threshold for a single asset

1.  Go to the [Assets](https://yundun.console.alibabacloud.com/?p=ddos#/asset/ecs/cn-hangzhou) page of the Traffic Security console. In the top navigation bar, select the region of your asset.
    
2.  Click the tab for the desired cloud product, such as **ECS**.
    
    **Note**
    
    You cannot configure scrubbing thresholds for assets on the **CIDR Block of Data Center** or **Private Addresses** tabs.
    
3.  In the IP asset list, click the target IP address. In the **IP Address Details** panel, click **Traffic Scrubbing Settings**.
    
4.  In the **Traffic Scrubbing Settings** panel, set the **Traffic Scrubbing Threshold** for the destination instance and click **OK**.
    
    -   **Default**: The scrubbing threshold is automatically adjusted based on the cloud product's traffic.
        
    -   **Manual**:
        
        -   Scrubbing Threshold (BPS): The value must be between 60 Mbps and 1.5 times the public bandwidth of the cloud product instance.
            
        -   Scrubbing Threshold (PPS): The value must be between 12,000 pps and 1.5 times the PPS specification of the cloud product instance.
            

## **Adjust scrubbing thresholds for assets in batch**

**Important**

This feature is available only in **Anti-DDoS Origin**.

1.  Go to the [Protected Objects](https://yundun.console.alibabacloud.com/?p=ddos#/protectedAsset/ip/cn-hangzhou) page of the Traffic Security console.
    
2.  In the top navigation bar, select the resource group to which the instances belong and the region in which the instances reside.
    
    -   Anti-DDoS Origin 1.0 (Subscription) instances: Select the region in which the instance resides.
        
    -   Anti-DDoS Origin 2.0 (Subscription) and Anti-DDoS Origin 2.0 (Pay-as-you-go) instances: Select All Regions.
        
3.  At the top of the page, you can select an Anti-DDoS Origin instance and click **Batch Adjust Traffic Scrubbing Thresholds**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1249855371/p840741.png)
    
4.  On the **Traffic Scrubbing Threshold** tab, you can select asset IP addresses and set the scrubbing thresholds for traffic and packets in a batch.
    
    1.  Scrubbing Threshold (BPS): The value must be between 60 Mbps and 1.5 times the public bandwidth of the cloud product instance.
        
    2.  Scrubbing Threshold (PPS): The value must be between 12,000 pps and 1.5 times the PPS specification of the cloud product instance.
        
    
    **Important**
    
    -   You cannot modify the scrubbing thresholds for elastic IP addresses (EIPs) with Anti-DDoS Proxy Enabled in a batch. You can only modify the threshold for a single EIP on the **Assets** page.
        
    -   You can adjust the thresholds for a maximum of 500 IP addresses at a time.
        
    -   When you perform a batch configuration, make sure that all selected assets belong to the same cloud product.
        
    -   After the configuration is complete, a message is displayed to indicate whether the configuration was successful. If the modification fails for some cloud assets or IP addresses, follow the on-screen instructions.
