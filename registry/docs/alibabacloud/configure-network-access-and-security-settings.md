This topic describes the types of network access and how to configure them to help you set up your network environment securely and efficiently.

## Network access types

StarRocks supports access from within an Alibaba Cloud Virtual Private Cloud (VPC) and from the internet.

-   Access from an Alibaba Cloud VPC: You can access and use a StarRocks instance from the VPC where the instance is located or from another VPC.
    
-   Internet access: You can access and use a StarRocks instance from the internet. The StarRocks instance is also accessible from within the Alibaba Cloud VPC.
    
    **Important**
    
    -   Internet access for StarRocks uses the Alibaba Cloud Server Load Balancer (SLB) feature. The network fees are charged based on the [CLB Billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/#concept-2240735).
        
    -   If you enable internet access for a StarRocks instance, a series of SLB instances are automatically created under your Alibaba Cloud account. Deletion protection is enabled for these SLB instances, which prevents you from deleting them.
        
    -   By default, if internet access is enabled for a StarRocks instance, the instance is accessible from any public IP address. You should use a whitelist in an access control policy to secure the StarRocks instance.
        
    

## Network type settings

New StarRocks instances use internal same-region endpoints by default. If you require public access, you can enable it for the corresponding nodes on the **Instance Details** page of the target instance.

-   Frontend (FE) node: On the **Instance Details** page, in the **Gateway Information** area, click **Enable Public Access**.
    
-   Backend (BE)/Compute (CN) nodes: On the **Compute Group** page, click **Manage** in the Actions column of the target compute group, and then click **Enable Public Access**.
    

## Network endpoint types

There are two types of network endpoints:

-   Internal endpoint (Supports access from within the current VPC and across vSwitches)
    
    -   The format of the internal endpoint for FE nodes is: `fe-{srClusterId}-internal.starrocks.aliyuncs.com:{port}`
        
        **Note**
        
        When an external client accesses an SLB instance, it connects to the SLB domain name. The SLB instance then distributes requests to the backend service instances to provide load balancing.
        
    -   The format of the internal endpoint for BE nodes is: `be-{srClusterId}-internal.starrocks.aliyuncs.com:{port}`
        
-   Public endpoint
    
    -   The format of the public endpoint for FE nodes is: `fe-{srClusterId}.starrocks.aliyuncs.com:{port}`
        
    -   The format of the public endpoint for BE nodes is: `be-{srClusterId}.starrocks.aliyuncs.com:{port}`
        

**Note**

-   `{srClusterId}`: The StarRocks instance ID.
    
-   `{port}`: The service port number. The query port and HTTP port for FE nodes are 9030 and 8030, respectively. The HTTP port for BE nodes is 8040.
    

## Network security settings

You can configure a network security whitelist to restrict access to your StarRocks instance and ensure the security of your service data. Network security settings include security group whitelists for VPC access and access control policy whitelists for internet access.

**Important**

To prevent security issues caused by external attacks, do not set the **Authorization Object** to **0.0.0.0/0**.

-   Whitelist for an internet access control policy
    
    1.  On the **Instance Details** page of the target instance, in the **Gateway Information** area, and on the **Manage Compute Group** page of the target compute group, locate **Public Endpoint** and click **Enable Public Endpoint**.
        
    2.  Click **Public Whitelist** next to **Public IP Address**.
        
    3.  On the **Access Control** page of SLB, click **Add Entry** and add the appropriate access control rules.
        
        For more information, see [Resource Access Management](/help/en/slb/classic-load-balancer/user-guide/overview-3).
        
-   Whitelist for a VPC security group
    
    In the **Gateway Information** section on the **Instance Details** page of the target instance, check the **Network Type** to confirm whether SLB is enabled.
    
    -   If the **Network Type** is **SLB**, SLB is enabled.
        
        On the **Instance Details** page of the target instance, in the **Gateway Information** section, click **View SLB**. You are redirected to the SLB console to configure the access control settings. For more information, see [Resource Access Management](/help/en/slb/classic-load-balancer/user-guide/overview-3).
        
    -   If the **Network Type** is **PrivateZone**, SLB is not enabled.
        
        1.  On the **Instance Details** page for the target instance, in the **Security Configuration** section, click **Internal Whitelist** next to **Security Group ID**.
            
        2.  In the **Intranet Whitelist Configuration** panel, modify the default whitelist group, or click **Add Whitelist Group** and enter a name and an IP address or IP segment.
            
        3.  Click **OK**.
