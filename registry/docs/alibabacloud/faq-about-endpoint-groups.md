This topic provides answers to some frequently asked questions about endpoint groups of Global Accelerator (GA).

-   [Can I use GA if the region where origin servers are deployed is not supported by GA?](#section-jpm-8y1-7wi)
    
-   [How do I view the endpoint group IP addresses of a GA instance?](#section-dk6-kxp-j5m)
    
-   [What endpoint types are supported by GA?](#section-v0x-vcy-iy6)
    

## Can I use GA if the region where origin servers are deployed is not supported by GA?

Yes.

You can select the region that is nearest to the origin servers when you configure the endpoint group. GA forwards requests to the optimal endpoint in the endpoint group.

## How do I view the endpoint group IP addresses of a GA instance?

You can view the endpoint group IP addresses in a region in the GA console.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the GA instance that you want to manage and click **Configure Listeners** in the **Actions** column.
    
3.  On the **Listeners** tab, find the listener that you want to manage and choose **![更多操作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1382169951/p143776.png)** > **View Endpoint Group** in the **Actions** column.
    
4.  On the **Endpoint Group** tab, find the endpoint group that you want to view. The public IP addresses of endpoints in the region where the endpoint group resides are displayed in the **Endpoint Group IPs** column.
    

**Note**

The system assigns at least four public IP addresses to each endpoint. The number of public IP addresses assigned to an endpoint varies based on the following factors when different billing methods are used:

-   The volume of traffic if the pay-as-you-go billing method is used. The CIDR blocks or the IP addresses of the endpoint are added or removed based on traffic fluctuation.
    
    You can call API operations to query the public CIDR blocks or IP addresses of an endpoint. For more information, see [ListEndpointGroups](/help/en/ga/developer-reference/api-ga-2019-11-20-listendpointgroups) and [ListEndpointGroupIpAddressCidrBlocks](/help/en/ga/developer-reference/api-ga-2019-11-20-listendpointgroupipaddresscidrblocks).
    
-   The instance specifications if the subscription billing method is used. When you modify the specifications of a GA instance, the public IP addresses of the endpoint may be added or removed.
    
    The added public IP addresses enters the Available state only after you manually confirm the modified specifications of the GA instance. You can confirm the modified specifications of the GA instance in the GA console or by calling the [UpdateAcceleratorConfirm](/help/en/ga/api-updateacceleratorconfirm#doc-api-Ga-UpdateAcceleratorConfirm) operation.
    

## What endpoint types are supported by GA?

The endpoint types that are supported by GA vary based on where your endpoint is deployed.

**Instance type**

**Deployment**

**Endpoint type**

Standard GA instance

Alibaba Cloud

-   **ECS**
    
-   **ALB**
    
-   **NLB**
    
-   **CLB**
    
-   **OSS**
    
-   **ENI**
    
-   **Custom private IP address**
    
-   **Public IP address provided by Alibaba Cloud**
    
-   **vSwitch**
    
    This endpoint type is supported only by custom routing listeners.
    

Outside Aliababa Cloud

-   **Custom public IP address**
    
-   **Custom domain name**
    

Basic GA instance

Alibaba Cloud

-   **ENI**
    
-   **ECS**
    
-   **CLB**
    
-   **NLB**
    

**Note**

-   If your standard GA instance does not support **ALB** instances, **ECS** instances in VPCs, **CLB** instances in VPCs, **NLB** instances, or **ENIs** as endpoints, your instance may be of an earlier version. Contact your account manager to upgrade your GA instance.
    
-   If you want to accelerate Alibaba Cloud backend services that are not supported by GA or services in data centers, and you want GA to connect to the backend services over private networks, you can add endpoints of the **Custom Private IP Address** type.
    
-   Basic GA instances support the following endpoint types: secondary elastic network interfaces (ENIs), Classic Load Balancer (CLB) instances in virtual private clouds (VPCs), internal-facing Network Load Balancer (NLB) instances, and Elastic Compute Service (ECS) instances. The preceding resources cannot be associated with static public IP addresses or elastic IP addresses (EIPs).
    

For more information, see [Endpoints of standard GA instances](/help/en/ga/user-guide/overview-4/#section-kcj-zv4-t4j) and [Endpoints of basic GA instances](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#task-2253915).
