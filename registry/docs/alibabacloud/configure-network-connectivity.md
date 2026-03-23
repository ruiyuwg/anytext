Configure VPC to enable EAS services to access internet resources and private cloud services.

## Network architecture

When configured with VPC, EAS creates an Elastic Network Interface (ENI) for each service instance. Each ENI consumes one private IP address from the specified vSwitch. This grants network identity within VPC for communication with VPC resources and internet access through NAT Gateway.

## Billing

VPC configuration is free. NAT Gateway and Elastic IP Address (EIP) incur charges for internet access. See [NAT Gateway billing](/help/en/nat-gateway/nat-gateway-billing#902cb3fe942hs) and [EIP billing overview](/help/en/eip/billing-overview).

## Prerequisites

Plan your network connection method and prepare VPC, vSwitch, and security group resources. To create these resources, see [Create a VPC and a vSwitch](/help/en/vpc/vpc-and-vswitch#590e33e71byyy) and [Use security groups](/help/en/ecs/user-guide/start-using-security-groups).

-   All outbound traffic from EAS services is subject to security group rules. Ensure outbound rules allow EAS to reach target services.
    
-   For private network communication, deploy EAS and target services in the same VPC. If the target service is in a different VPC, establish connectivity using [VPC Peering Connection](/help/en/vpc/vpc-peer-to-peer-connection) or [Cloud Enterprise Network](/help/en/cen/product-overview/what-is-cen/).
    

## Procedure

### Step 1: Configure VPC for EAS

Configure VPC to enable private network communication or internet access. EAS supports VPC configuration at two levels:

-   **Service level**: Specify VPC for an individual service. This configuration takes highest priority.
    
-   **Resource group level**: Set default VPC for all services in a dedicated resource group to simplify batch configuration.
    

### Service-level configuration

#### Console configuration

When creating or updating a service, configure VPC in the **Network Information** section. Select VPC from the drop-down list, then select vSwitch and security group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2730452671/p1024301.png)

**Note**

Newly created VPC, vSwitch, or security group resources may take 1-2 minutes to appear in PAI console drop-down lists. Wait and refresh if resources do not appear immediately.

#### eascmd configuration

1.  In the service JSON configuration file, add or modify the `cloud.networking` field with resource IDs for VPC, vSwitch, and security group:
    
    ```
    {
        "cloud": {
            "networking": {
                "vpc_id": "your-vpc-id",
                "vswitch_id": "your-switch-id",
                "security_group_id": "your-security-group-id"
            }
        }
    }
    ```
    
    Find resource IDs on the VPC and vSwitch pages in the [VPC console](https://vpc.console.alibabacloud.com/) and on the [Security Groups page in the ECS console](https://ecs.console.alibabacloud.com/securityGroup).
    
2.  Apply the configuration using the `create` or `modify` command. See [Command reference](/help/en/pai/developer-reference/run-commands-to-use-the-eascmd-client#section-gdx-kpf-ebs).
    

### Resource-group-level configuration

-   **Console**: On the **Resource Group** page, select the target resource group and click **Enable VPC Configuration** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2730452671/p1024306.png)
    
-   **eascmd client**: See [Configure a VPC for a resource group](/help/en/pai/developer-reference/run-commands-to-use-the-eascmd-client#title-2q6-lrf-hvp).
    

### Step 2: Configure NAT Gateway and SNAT entry for internet access

If EAS needs internet access, configure NAT Gateway and EIP. See [Use the SNAT feature of an Internet NAT gateway to access the Internet](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet#task-1944285).

1.  **Create Internet NAT Gateway and bind EIP**: Go to the [Internet NAT Gateway purchase page](https://vpc.console.alibabacloud.com/buy/nat?regionId=cn-hangzhou). Select the region and VPC where EAS is deployed, then bind an EIP. This EIP becomes the public IP address for internet access.
    
2.  **Configure SNAT entry**: In NAT Gateway, create an SNAT entry. Set **SNAT Entry** to **VPC** to route all VPC traffic to the internet through NAT Gateway.
    

### Step 3: Configure access whitelist (optional)

To connect to target services with IP address or security group whitelist restrictions, add the IP address range or security group ID of EAS to the target service whitelist.

#### Obtain private IP addresses

**Important**

EAS instances are dynamically scheduled. After restart or update, new instances may receive new **private IP addresses** from the vSwitch address pool. Use the **vSwitch CIDR block** instead of individual instance IP addresses for access control policies.

Log in to the [VPC console](https://vpc.console.alibabacloud.com/) and find the IPv4 CIDR block on the **vSwitch** page.

![内网白名单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9830858071/p533961.png)

#### Obtain public IP address

Log in to the [VPC console](https://vpc.console.alibabacloud.com/). On the **NAT Gateway** > **Internet NAT Gateway** page, locate the NAT Gateway configured for EAS. The bound EIP is displayed in the EIP column.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2730452671/p1023842.png)

## Production considerations

-   **IP address planning**: Plan a dedicated vSwitch with sufficient IP addresses for EAS. Minimum required IP addresses: `Stable instances + Extra instances for rolling updates + Reserved buffer`. Insufficient IP addresses cause service creation or scaling failures.
    
-   **Security group isolation**: Use separate security groups for different services or environments (development, testing, production). Follow the principle of least privilege by opening only necessary ports and access sources.
    
-   **Cost optimization**: To reduce costs, upload resources to OSS in the same region and mount OSS during deployment instead of downloading models or files from the internet. This eliminates public network traffic costs.
    

## FAQ

### Why can't EAS access the internet by default?

EAS services are isolated from the internet by default for security and stability. In a shared environment, uncontrolled internet access can lead to unpredictable bandwidth contention, affecting service performance and availability. To enable internet access, configure VPC and NAT Gateway.

### How do I test internet connectivity?

Add a test command to the service startup configuration. In the **Command** field, include a network utility like `curl -I -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0" --connect-timeout 5 https://www.aliyun.com`.

After deployment, check the instance **real-time log**. A response containing `200 OK` confirms internet connectivity. A timeout or connection error indicates a configuration issue.

### Why can't EAS connect to cloud services in the same VPC?

This usually indicates network misconfiguration. Check the following:

1.  **VPC configuration**: Ensure EAS and target services (e.g., RDS databases) are deployed in the same VPC.
    
2.  **Security group rules**: Confirm the outbound rules of the security group attached to EAS allow traffic to the target service private IP address and port.
    
3.  **Target service access restrictions**: If target services use IP whitelist or security group for access control, ensure they allow inbound connections from the **vSwitch CIDR block** or **security group ID** of EAS. Use vSwitch CIDR block because instance private IP addresses are dynamic and can change after restart.
    

### Why can't EAS access the internet after configuring NAT Gateway?

If EAS cannot access the internet after configuring NAT Gateway, the issue is likely with SNAT entry, VPC route table, or security group rules. Check the following:

1.  **Verify SNAT entry**: In NAT Gateway console, confirm SNAT entry is configured to handle traffic from the correct vSwitch—the one used for EAS deployment.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7668866671/p1026362.png)
    
2.  **Check VPC route table**: Go to VPC console and inspect the route table associated with vSwitch. Ensure a route exists with destination CIDR block set to `0.0.0.0/0` and next hop pointing to NAT Gateway.
    
3.  **Inspect security group outbound rules**: Confirm the outbound rules of the security group attached to EAS allow all egress traffic. The default rule allowing traffic to `0.0.0.0/0` is sufficient for internet access.
