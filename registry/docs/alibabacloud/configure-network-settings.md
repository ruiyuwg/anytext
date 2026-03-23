By default, you can invoke the functions that you create in Function Compute only over the Internet. If you want your functions to access resources in a virtual private cloud (VPC) or allow requests from a specific VPC to the functions, you must manually configure the network and permissions for the service to which the functions belong. The network settings take effect at the service level and apply to all functions in the service. This topic describes how to configure networks for a service in the Function Compute console.

## Usage notes

-   Before you bind VPC resources to a service, make sure that the `vpc:DescribeVSwitchAttributes` and `vpc:DescribeVpcAttribute` permissions are granted to the role that is associated with the service.
    
-   For a Custom Container function that is created by using a container image of a Container Registry Enterprise Edition instance, you must configure a VPC and a vSwitch based on the following rules when you configure the VPC settings for the service in which the function belongs:
    
    -   If the **Default Resolution** identifier appears next to the VPC in the **Visit IP** column on the **Access Control** page of the Container Registry Enterprise Edition instance, you must configure a VPC and vSwitch that uses the default resolved IP address.![db-serviceconf-default](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4552941661/p472891.png)
        
    -   If the **Default Resolution** identifier does not appear, you can select a random VPC and vSwitch that are bound to the instance.![db-serviceconf-nodefault](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4552941661/p472901.png)
        

## Network access capabilities

The VPC feature reduces the cold start efficiency of Function Compute. We recommend that you do not configure this feature unless necessary. You can use RAM users to access resources, such as [Tablestore](/help/en/tablestore/product-overview/what-is-tablestore#concept-27280-zh).

Traffic is generated when you access a function from a network address or when a function access a network address. The following types of traffic are generated:

-   Internet traffic: traffic that is generated when you access Internet addresses, such as Alibaba Cloud official websites, Taobao websites, and the public endpoints of Alibaba Cloud services.
    
-   VPC traffic: traffic that is generated when you access VPC addresses, such as ApsaraDB RDS addresses, File Storage NAS (NAS) addresses, and private IP addresses of Elastic Compute Service (ECS) instances in VPCs.
    

You can configure network settings based on your business requirements to obtain corresponding network access capabilities of functions:

-   Function outbound traffic settings: specify whether to allow functions to access resources over the Internet or in a VPC by configuring the **Access to VPC** and **Access to Internet** parameters.
    
    Table 1 - Function outbound traffic
    
    **Network setting**
    
    **Description**
    
    Allow functions to access resources only over the Internet.
    
    The functions can access the Internet and the internal network but cannot access resources in VPCs. Configure the following parameters:
    
    -   Set **Access to VPC** to **No**.
        
    -   Set **Access to Internet** to **Yes**.
        
    
    Allow functions to access only resources in a VPC.
    
    The functions can access public and internal network resources by using a VPC. This setting is applicable to scenarios such as PrivateZone, NAT Gateway, and VPC binding. Configure the following parameters:
    
    -   Set **Access to VPC** to **Yes** and specify the VPC that can be accessed by the function.
        
    -   Set **Access to Internet** to **No**.
        
    
    Allow functions to access resources over the Internet and in a VPC.
    
    The functions can access public network resources by using function logic and internal network resources by using a VPC. Configure the following parameters:
    
    -   Set **Access to VPC** to **Yes** and specify the VPC that can be accessed by the function.
        
    -   Set **Access to Internet** to **Yes**.
        
    
    Prohibit functions from accessing resources over the Internet or in a VPC.
    
    The functions can access only internal network resources by using function logic. Configure the following parameters:
    
    -   Set **Access to VPC** to **No**.
        
    -   Set **Access to Internet** to **No**.
        
    
-   Function inbound traffic settings: specify whether to allow invocation requests from the Internet or VPCs. You can use **Function Invocation only by Specified VPCs** to configure the inbound traffic settings.
    
    Table 2. Function inbound traffic
    
    **Network setting**
    
    **Description**
    
    Allow access to functions over the Internet and a specified VPC.
    
    By default, you can invoke functions over the Internet and VPCs. The following item describes the default network configurations:
    
    -   **Function Invocation only by Specified VPCs** is set to **No**.
        
    
    Allow access to functions only over specified VPCs.
    
    The functions can be invoked over specified VPCs but cannot be invoked over the Internet. Configure the following parameters:
    
    -   Set **Function Invocation only by Specified VPCs** to **Yes** and specify the VPCs over which your functions can be invoked.
        
    

## Zones where Function Compute is supported

Expand to view zones where Function Compute is supported

**Region name**

**Region ID**

**Supported zones**

China (Hangzhou)

cn-hangzhou

-   cn-hangzhou-h
    
-   cn-hangzhou-i
    
-   cn-hangzhou-j
    
-   cn-hangzhou-k
    
-   cn-hangzhou-f
    
-   cn-hangzhou-g
    

China (Shanghai)

cn-shanghai

-   cn-shanghai-m
    
-   cn-shanghai-l
    
-   cn-shanghai-n
    
-   cn-shanghai-b
    
-   cn-shanghai-e
    
-   cn-shanghai-g
    
-   cn-shanghai-f
    

China (Qingdao)

cn-qingdao

cn-qingdao-c

China (Beijing)

cn-beijing

-   cn-beijing-i
    
-   cn-beijing-h
    
-   cn-beijing-k
    
-   cn-beijing-j
    
-   cn-beijing-l
    
-   cn-beijing-c
    
-   cn-beijing-e
    
-   cn-beijing-g
    
-   cn-beijing-f
    

China (Zhangjiakou)

cn-zhangjiakou

-   cn-zhangjiakou-b
    
-   cn-zhangjiakou-c
    
-   cn-zhangjiakou-a
    

China (Hohhot)

cn-huhehaote

-   cn-huhehaote-a
    
-   cn-huhehaote-b
    

China (Shenzhen)

cn-shenzhen

-   cn-shenzhen-e
    
-   cn-shenzhen-d
    
-   cn-shenzhen-f
    

China (Chengdu)

cn-chengdu

-   cn-chengdu-a
    
-   cn-chengdu-b
    

China (Hong Kong)

cn-hongkong

-   cn-hongkong-d
    
-   cn-hongkong-c
    
-   cn-hongkong-b
    

Singapore

ap-southeast-1

-   ap-southeast-1a
    
-   ap-southeast-1c
    
-   ap-southeast-1b
    

Malaysia (Kuala Lumpur)

ap-southeast-3

ap-southeast-3a

Indonesia (Jakarta)

ap-southeast-5

-   ap-southeast-5a
    
-   ap-southeast-5b
    

Japan (Tokyo)

ap-northeast-1

-   ap-northeast-1c
    
-   ap-northeast-1b
    
-   ap-northeast-1a
    

UK (London)

eu-west-1

eu-west-1a

Germany (Frankfurt)

eu-central-1

-   eu-central-a
    
-   eu-central-1a
    
-   eu-central-1b
    

US (Silicon Valley)

us-west-1

-   us-west-1a
    
-   us-west-1b
    

US (Virginia)

us-east-1

-   us-east-1b
    
-   us-east-1a
    

For more information about the latest supported zones in each region, you can call the [GetAccountSettings](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-getaccountsettings#main-107864) operation in [OpenAPI Explorer](https://next.api.alibabacloud.com/api).

If your resources are deployed in a zone where Function Compute is not supported, create a vSwitch in a supported zone in your VPC and specify the vSwitch ID in the VPC configurations of a Function Compute service. vSwitches in the same VPC can communicate with each other over private networks. Therefore, Function Compute can use the vSwitch to access VPC resources that are deployed in other zones. For more information, see [How can I resolve the "vSwitch is in unsupported zone" error?](/help/en/functioncompute/fc-2-0/how-to-handle-the-vswitch-is-in-unsupported-zone-error#concept-1918315)

## Before you start

-   [Create a service](/help/en/functioncompute/fc-2-0/user-guide/manage-services#section-765-0zj-cc4).
    
-   (Optional) Create network resources.
    
    If you have not created resources, select **Automatic Configuration** when you configure network settings. Otherwise, you must create resources as described in the following topics:
    
    -   [Create a VPC and vSwitches](/help/en/vpc/getting-started/create-vpc-with-ipv4#section-ts2-ab8-rfj)
        
    -   [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1#concept-ocl-bvz-xdb)
        

## Configure network settings and role

VPCs and permissions are configured at the service level. If you allow a service in Function Compute to access a VPC, all functions in the service are allowed to access the VPC.

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, find the desired service and click **Configure** in the **Actions** column.
    
3.  In the **Role Settings** section of the Modify Service page, configure the **Service Role** parameter. Make sure that the role you select has permissions to access VPC resources
    
    We recommend that you grant permissions to the role based on the principle of least privilege. For more information about fine-grained permission control, see [Policies and sample policies](/help/en/functioncompute/fc-2-0/security-and-compliance/policies#task-2078045).
    
4.  In the **Network Settings** section, configure the following parameters.
    
    -   **Access to VPC**: Specify whether to allow functions to access resources in a VPC. Options:
        
        -   **Yes**: Functions can access resources in a VPC. If you set the value to **Yes**, you must also configure the **Configuration Mode** parameter. Options:
            
            -   (Recommended) **Automatic Configuration**: Function Compute automatically creates resources such as a VPC, vSwitches, and a security group for you. After network resources are created, you can modify the network resources based on your business requirements.
                
                **Note**
                
                The names of network resources that are automatically created by Function Compute are prefixed with **fc.auto.create**.
                
            -   **Custom Configuration**: You must manually select existing resources, including a VPC, vSwitches, and a security group. Make sure that the resources are created in advance.![vpc_config_new_console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6332296561/p325012.png)
                
                -   **VPC**: Select a VPC ID from the drop-down list.
                    
                -   **vSwitch**: Select at least one vSwitch ID from the drop-down list.
                    
                    This parameter defines the subnets that can be accessed by Function Compute. We recommend that you specify two or more vSwitch IDs. If a zone becomes unavailable or IP addresses are insufficient, your function can run on another subnet.
                    
                -   **Security Group**: Select a security group ID from the drop-down list.
                    
                    This parameter specifies the security group with which Function Compute is associated. This security group defines the inbound and outbound rules of Function Compute in the specified VPC. In the security group that is associated with the VPC, configure a rule to allow access from the security group with which Function Compute is associated. Otherwise, Function Compute cannot access resources that are deployed in the VPC.
                    
        -   **No**: Functions cannot access resources in VPCs.
            
    -   **Static Public IP Address**: Specify whether to obtain a static public IP address by using a NAT gateway and elastic IP address (EIP). For more information, see [Assign a static public IP address](/help/en/functioncompute/fc-2-0/user-guide/configure-static-public-ip-addresses#task-2174820).
        
    -   **Access to Internet**: Specify whether to allow functions to access the Internet. Options:
        
        -   **Yes**: Functions can access the Internet.
            
        -   **No**: Functions cannot access the Internet.
            
    -   **Function Invocation only by Specified VPCs**: Specify whether to allow only invocation requests from specified VPCs. Options:
        
        -   **Yes**: Functions can be invoked only over specified VPCs. Take note of the following items:
            
            -   You can associate a maximum of 20 VPCs with a service.
                
            -   Function invocations by triggers are not affected even if you allow only invocations from specified VPCs.
                
            -   After you bind one or more VPCs with a service, the VPC settings take effect for all versions and aliases of the service.
                
            -   If you allow only requests from specified VPCs, requests from the Internet and other VPCs are rejected. In this case, `StatusCode` 403, `ErrorCode` `AccessDenied`, and error message `Resource access is bound by VPC: VPC ID` are reported.
                
            -   VPCs can be bound only with private HTTP endpoints, not public endpoints or private HTTPS endpoints.
                
        -   **No**: The functions can be invoked only over the Internet. You cannot invoke the functions over VPCs.
            
    
5.  Click **Save**.
    

## FAQ

-   Why am I unable to connect Function Compute to a VPC for debugging?
    
    If Function Compute fails to connect to a VPC after your service is configured to allow functions to access the VPC, check the following possible causes:
    
    -   An error occurred on the subnet with which the vSwitch is associated, or IP addresses are insufficient. We recommend that you specify at least two vSwitch IDs. This allows your function to run in another zone if an error occurs in the current zone.
        
    -   The security group is invalid. Configure the security group based on the following rules:
        
        -   In the security group with which the specified VPC is associated, a rule is configured to allow access from the security group with which Function Compute is associated.
            
        -   The outbound traffic of the security group must support Internet Control Message Protocol (ICMP). Function Compute checks the VPC network connectivity based on ICMP.
            
        
        For more information about how to configure a security group, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
        
-   What do I do if the resources are insufficient when I create network resources?
    
    When you create VPC resources, the prefix length of the CIDR block is 24 and the number of available IP addresses is 252. If the number of instances is too large, the limit may be exceeded. In this case, you must manually modify the CIDR block of the vSwitch and the security group.
    

## Troubleshooting

Function Compute does not verify permissions to access a VPC if you configure vpcConfig. Instead, permissions are verified when a function is executed. Therefore, new errors may occur when you invoke the function by using the [InvokeFunction](/help/en/functioncompute/fc-2-0/developer-reference/api-invokefunction#doc-api-FC-InvokeFunction) operation if vpcConfig is configured. The following table describes common errors that may occur when a function in Function Compute accesses a VPC. You can refer to this table to troubleshoot issues.

**Error code**

**Status code**

**Cause**

**Solution**

InvalidArgument

400

Function Compute does not support the zone of the specified vSwitch.

Specify a valid vSwitch ID. For more information, see [Zones where Function Compute is supported](#section-40g-39j-s9a).

The resources specified by the vpcId, vSwitchIds, or securityGroupId parameter in vpcConfig cannot be found.

Check whether the settings in vpcConfig are valid.

The specified vSwitch or security group is not in the VPC.

Check whether settings of vpcConfig are valid. Make sure that the resources specified by vSwitchId and securityGroupId are deployed in the VPC that is specified by vpcId.

AccessDenied

403

You have not granted operation permissions on elastic network interfaces(ENI) to the function.

Check the operation permissions of the service. For more information, see [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services#task-2077619).

ResourceExhausted

429

The available IP addresses in the CIDR block of the vSwitch are insufficient. Function Compute cannot create more ENIs.

Create a vSwitch with a larger CIDR block and update the vSwitchId parameter in vpcConfig.

**Note**

We recommend that you use the `/24` or `/16` CIDR block.

## Additional information

-   If you want a function to access a database that resides in a VPC, we recommend that you add the CIDR block of the vSwitch that you configured to the whitelist. For more information, see [Access a database](/help/en/functioncompute/fc-2-0/user-guide/access-a-database#concept-2259929).
    
-   If you want to restrict function access to the Internet, use static IP addresses. For more information, see [Assign a static public IP address](/help/en/functioncompute/fc-2-0/user-guide/configure-static-public-ip-addresses).
