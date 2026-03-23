Services deployed in regions like Singapore to serve users in the Chinese mainland may experience high latency from inefficient public network routing. Associating a BGP (Multi-ISP) Pro EIP with your service directs traffic through dedicated, high-performance network paths, which reduces latency for users in the Chinese mainland.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4726900671/CAEQThiBgMCj6Y2kzhkiIGE4MTNhMzJhNGRkNTQyNTliZTRkZTNiM2ZhMDM5M2Nh5734471_20250918154013.940.svg)

## Usage notes

The regions where the BGP (Multi-ISP) Pro EIP is supported vary based on the billing method:

-   Pay-as-you-go: China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok)
    
-   Subscription: China (Hong Kong)
    

## Create and associate a BGP (Multi-ISP) Pro EIP

1.  Create an EIP:
    
    1.  Go to the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) and click **Create EIP**.
        
    2.  Set the following EIP parameters and complete the payment. For information about other parameters, see [EIP configurations](/help/en/eip/elastic-ip-address#64fa36953fqz4).
        
        -   **Billing Method**: Select a billing method that is supported in the region where your cloud service is deployed.
            
        -   **Region**: Select the region where your service is deployed.
            
        -   **Line Type**: Select **BGP (Multi-ISP)\_Pro**.
            
        -   **IP Address Pool**: To allocate an EIP from an existing [IP address pool](/help/en/eip/ip-address-pools/), select the pool.
            
        
2.  Associate the EIP with a cloud resource:
    
    1.  Go to the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) page. In the top navigation bar, select the region where the EIP is located.
        
    2.  Find the target EIP and click **Associate with Resource** in the **Actions** column. Select an **Instance Type**, then select the target instance.
        

## Verify network performance

Actual network performance depends on the ISP public network. Run your own tests to validate the network performance for your services.

This example tests network latency by using an Elastic Compute Service (ECS) instance in the China (Hangzhou) region to access two ECS instances in the Philippines (Manila) region. One Manila-based instance uses a BGP (Multi-ISP) EIP, and the other uses a BGP (Multi-ISP) Pro EIP.

1.  Install and start the Nginx web server on both ECS instances in the Philippines (Manila) region.
    
    ```
    sudo yum install nginx -y
    sudo systemctl start nginx
    ```
    
2.  Test the network latency for access from the ECS instance in the China (Hangzhou) region.
    
    > Make sure that the security group rules for the ECS instances in the Philippines (Manila) region allow inbound traffic from the public IP address of the ECS instance in the China (Hangzhou) region.
    
    ```
    {
    echo "=== Starting EIP Comparison Test ==="
    echo "BGP (Multi-ISP) EIP:"
    curl -w "Connect Time: %{time_connect}s Total Time: %{time_total}s\n" -o /dev/null -s http://<BGP_Multi_ISP_EIP>
    echo "BGP (Multi-ISP) Pro EIP:"
    curl -w "Connect Time: %{time_connect}s Total Time: %{time_total}s\n" -o /dev/null -s http://<BGP_Multi_ISP_Pro_EIP>
    }
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4726900671/p1011646.png)
    

## Billing

BGP (Multi-ISP) Pro EIPs and BGP (Multi-ISP) EIPs have different unit prices. For more information, see [Pay-as-you-go](/help/en/eip/pay-as-you-go/) and [Subscription](/help/en/eip/subscription).

## FAQ

### **Can I convert a BGP (Multi-ISP) EIP to a BGP (Multi-ISP) Pro EIP?**

No, you cannot. You can only select the **Line Type** when you create an EIP. You cannot change the line type afterward.
