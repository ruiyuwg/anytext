This topic describes how to enable your Personal Development Environment to access the Internet. You will create a NAT Gateway, associate an Elastic IP Address (EIP), and configure Source Network Address Translation (SNAT) in the Virtual Private Cloud (VPC) associated with your environment.

## **Overview**

By default, a Personal Development Environment has Internet access but lacks a fixed egress IP address when not configured within a VPC. If you need a fixed egress IP address, or if your environment is already configured within a VPC, you can use a NAT Gateway. By associating an EIP with the NAT Gateway, you enable your environment to access the Internet through the VPC.

## **Procedure**

1.  Create a NAT Gateway. The following table lists the key parameters. For details on other parameters, see [NAT Gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet#section-yjq-n85-cez).
    
    > If you need to deploy multiple NAT gateways in the same VPC, see [Deployment solutions for multiple NAT gateways in the same VPC](/help/en/nat-gateway/use-cases/deploy-multiple-internet-nat-gateways-in-one-vpc) for network design and deployment guidance.
    
    Parameter
    
    Value
    
    **Region**
    
    Select the region where your Personal Development Environment is located.
    
    **VPC**
    
    Select the **VPC** and **VSwitch** associated with your Personal Development Environment.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6546113371/p861165.png)
    
    **Associate vSwitch**
    
    **Access Mode**
    
    Select **SNAT for All VPC Resources**. This option automatically creates an SNAT entry for your VPC.
    
    **EIP**
    
    Create a new EIP.
    
    **Service-Linked Role**
    
    If this is the first time you are creating a NAT gateway, you must create a Service-Linked Role. Click **Create Service-Linked Role**.
    
2.  On the **NAT Gateway** page, click the name of the created gateway to go to the **Basic Information** tab. Then, click the **SNAT Management** tab to check that the SNAT Entry was successfully created.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0684860271/p762132.png)
    
    If an SNAT entry was not created, create one. When creating the entry, select **Specify VPC** and select **Single IP**. If you have purchased multiple IP addresses, you can select **Multiple IP**. For more information about creating an SNAT entry, see [Use the SNAT feature of a NAT gateway to access the Internet](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet#section-dfx-lgh-lti).
    
3.  **Verify connectivity**.
    
    1.  In the top navigation bar, switch to your Personal Development Environment. In the lower-left corner, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6546113371/p861175.png) icon, select **Command Palette**, and then search for **terminal**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6546113371/p861348.png)
        
    2.  In the terminal, run the `ping www.aliyun.com` command to test network connectivity.
        
        If you receive response packets, the connection is successful.
        
        The Personal Development Environment can now access the Internet through the NAT gateway.
        
        ```
        /mnt/workspace> ping www.aliyun.com
        PING www.aliyun.com.w.cdngslb.com (183.146.XX.XX): 56 data bytes
        64 bytes from 183.146.XX.XX: icmp_seq=0 ttl=53 time=12.245 ms
        64 bytes from 183.146.XX.XX: icmp_seq=1 ttl=53 time=12.164 ms
        64 bytes from 183.146.XX.XX: icmp_seq=2 ttl=53 time=12.097 ms
        64 bytes from 183.146.XX.XX: icmp_seq=3 ttl=53 time=12.127 ms
        64 bytes from 183.146.XX.XX: icmp_seq=4 ttl=53 time=12.266 ms
        64 bytes from 183.146.XX.XX: icmp_seq=5 ttl=53 time=12.164 ms
        ```
