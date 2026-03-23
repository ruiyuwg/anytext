Accessing Alibaba Cloud services such as Object Storage Service (OSS) over the Internet from an instance in a virtual private cloud (VPC) may introduce security risks, degrade network stability, and increase Internet traffic fees.

Accessing Alibaba Cloud services from a VPC over a private network addresses these issues. Traffic stays private, which improves security, stabilizes network performance, and helps you control costs.

This topic describes two ways to access Alibaba Cloud services from a VPC over a private network, gateway endpoints and PrivateLink.

## **How it works**

**Gateway endpoint**

**PrivateLink**

A gateway endpoint acts like a virtual gateway that a VPC uses to access a specific Alibaba Cloud service.

The following process uses OSS to illustrate how it works:

1.  When creating a gateway endpoint, you must select a VPC, a route table, and the Alibaba Cloud service that you want to access.
    
2.  Once created, the system adds a custom route in that route table pointing to the system prefix list that contains [OSS regional VIP CIDR](/help/en/oss/user-guide/regions-and-endpoints#e7e1c8a6e071v). The next hop is the gateway endpoint.
    
3.  ECS instances in vSwitches associated with the route table access OSS private domain names. The VPC routes the traffic to the gateway endpoint and then to OSS over Alibaba Cloud’s private network, without using the Internet.
    

PrivateLink acts like a private tunnel between a VPC and a destination service.

The process is as follows:

1.  To use PrivateLink, you must first create an interface endpoint. Select a VPC, a security group, a zone, a vSwitch, and the Alibaba Cloud service that you want to access.
    
2.  After creation, the system automatically creates an endpoint elastic network interface (ENI) with a private IP address in each selected vSwitch. The ENI is the only entry to the service.
    
3.  When ECS instances access the endpoint domain name, traffic that matches the security group rules goes through the ENI and reaches OSS over Alibaba Cloud's private network.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9868072771/CAEQUxiBgMDY4obl3xkiIDAwYWIyMTM4N2VhYTRiZTRiYzc1N2QyMjc3YmVmZWEw5274221_20250627113930.173.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9868072771/CAEQUxiBgICE_Inl3xkiIDNlMTViNWE4OThiNjQzNmJhZDQyMmY3ZTIzZWEyNzUz5274221_20250627113930.173.svg)

Choose an appropriate service by referring to the table below

**Attribute**

**Gateway endpoint**

**PrivateLink**

Use case

Use endpoint policies together with OSS bucket policies to implement access control and reduce unauthorized access.

-   Source control: The VPC is allowed to access only specified buckets.
    
-   Destination control: The OSS bucket can be accessed by specified VPC.
    

A standard solution for securely accessing Alibaba Cloud services from a VPC over a private network. Supports diverse Alibaba Cloud services and advanced features.

Applicable services

Currently only supports OSS.

Supports a [wide range of Alibaba Cloud services](/help/en/privatelink/aliyun-services-that-integrate-with-privatelink#e6d966791d7gc) and user-created services, including services provided by independent software vendors (ISVs).

VPC security

Only endpoint policies.

Security groups, network ACLs, and endpoint policies.

Networking

Complex networking scenarios are not supported. IP address conflicts may occur with the CIDR blocks of Alibaba Cloud services (100.x.x.x/8).

Complex networking is supported. Use PrivateLink with VPC peering connections, Cloud Enterprise Network (CEN), Express Connect circuits, or VPN gateways for inter-region and hybrid cloud networking.

O&M

None

Flow logs are available for auditing and troubleshooting.

Fees

Free of charge

Instance fees and data transfer fees apply.

For user-created services, you can choose whether the service consumer or provider pays the fees.

## **Gateway endpoint**

Use endpoint policies together with OSS bucket policies to implement access control and reduce unauthorized access.

-   Source control: The VPC is allowed to access only specified buckets.
    
-   Destination control: The OSS bucket can be accessed by specified VPC.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9868072771/CAEQTxiBgMDbpOCX2BkiIDExZTk1YTdiMmJiMzRlZjg5OTY0Yjk3YzMxMGEzOWIy5359114_20250728165857.404.svg)

### **Console**

#### **Create a gateway endpoint and configure a policy**

The VPC where you create the gateway endpoint, the authorized bucket, and the user that accesses OSS from the VPC can belong to different Alibaba Cloud accounts.

Gateway endpoints are [supported only in some regions](#a82982b2aes99).

1.  Create a gateway endpoint and configure an endpoint policy.
    
    1.  On the [VPC console - Gateway Endpoint](https://vpc.console.alibabacloud.com/endpoint/cn-hangzhou/vpcEndpoints), click **Create Endpoint**.
        
    2.  Select a region, enter an endpoint name, and set the endpoint type to **Gateway Endpoint**.
        
    3.  For **Endpoint Service**, select **Alibaba Cloud Services** and select OSS.
        
    4.  Select a VPC and select a route table.
        
        Once created, the system adds a custom route in that route table pointing to the system prefix list that contains [OSS regional VIP CIDR](/help/en/oss/user-guide/regions-and-endpoints#e7e1c8a6e071v). The next hop is the gateway endpoint.
        
    5.  Configure an endpoint policy. The syntax is the same as the [permission policy language](/help/en/ram/policy-elements) of Resource Access Management (RAM).
        
        **Policy example**
        
        The following example policy allows only the user with the Account ID `1746xxxxxx` to perform OSS operations on the bucket named `examplebucket` from the VPC.
        
        ```
        {
          "Version": "1",
          "Statement":
            [
              {
                "Effect": "Allow",
                "Action": "oss:*",
                "Resource": ["acs:oss:*:*:examplebucket",
                             "acs:oss:*:*:examplebucket/*"],
                "Principal": ["1746xxxxxx"]
              }
            ]
        }
        ```
        
    6.  After the endpoint is created, you can find a system-added route entry in the custom route entries of the associated route table. The next hop is the gateway endpoint.
        
2.  Configure a bucket policy for OSS.
    
    1.  Go to [OSS console - Buckets](https://oss.console.alibabacloud.com/bucket) and click the name of the target bucket.
        
    2.  In the left navigation pane, select ****Permission Control**** > **Bucket Policy**, click **Add by Syntax**, and then click **Edit**
        
    3.  Configure a bucket policy. The syntax is the same as the RAM [access policy language](/help/en/ram/policy-elements).
        
        **Example**
        
        The example policy has the following effects:
        
        1.  Policy 1: Denies all accounts access to the bucket `examplebucket` and to OSS operations from any VPC other than the VPC whose ID is `vpc-bp******`.
            
            > For a list of OSS actions, see [RAM Policy](/help/en/oss/ram-policy-overview/#section-x3c-nsm-2gb). Do not set Action to `*` in a Deny policy. Otherwise, the bucket owner cannot access the bucket in the OSS console.
            
        2.  Policy 2: Allows only the account ID `1746xxxxxx` to access the bucket `examplebucket` and perform OSS operations from the VPC whose ID is `vpc-bp******`.
            
        
        ```
        {
          "Version": "1",
          "Statement":
            [
              {
                "Effect": "Deny",
                "Action": ["oss:ListObjects","oss:GetObject","oss:PutObject","oss:DeleteObject"],
                "Resource": ["acs:oss:*:*:examplebucket",
                             "acs:oss:*:*:examplebucket/*"],
                "Principal": ["*"],
        	"Condition": {
        	  "StringNotEquals": {
                    "acs:SourceVpc": [
        	      "vpc-bp******"
        	    ]
        	  }
        	}
              },{
                "Effect": "Allow",
                "Action": ["oss:*"],
                "Resource": ["acs:oss:*:*:examplebucket",
                             "acs:oss:*:*:examplebucket/*"],
                "Principal": ["1746xxxxxx"],
        	"Condition": {
        	  "StringEquals": {
                    "acs:SourceVpc": [
        	      "vpc-bp******"
        	    ]
        	  }
        	}
              }
            ]
        }
        ```
        
    4.  After configuring the policy, click **Save**.
        
3.  Verify the access policies.
    
    > Note: If a RAM user accesses OSS, you must grant the RAM user the permissions to perform operations on the specified OSS bucket. Otherwise, the access request fails.
    
    1.  When you use an authorized account to access the authorized bucket from the authorized VPC, the access request succeeds.
        
    2.  If the account, VPC, or bucket is not authorized, the access request fails.
        

#### **Modify the policy**

You can modify the policy to adjust the scope of authorized VPCs, buckets, or accounts.

-   To modify which VPCs are authorized to access a bucket, go to the [OSS console - Buckets](https://oss.console.alibabacloud.com/bucket) page and click the bucket name. In the left navigation pane, choose ****Permission Control**** > **Bucket Policy**. Modify the `Condition` field in the policy to add or remove VPCs.
    
-   To modify the scope of authorized buckets:
    
    1.  Go to the [VPC console - Gateway Endpoint](https://vpc.console.alibabacloud.com/endpoint/cn-hangzhou/vpcEndpoints) page and click the ID of the destination gateway endpoint. On the **Endpoint Policy** tab, modify the `Resource` field in the authorization policy to control which buckets the VPC can access.
        
    2.  Go to the [OSS console - Buckets](https://oss.console.alibabacloud.com/bucket) page and click the name of the target bucket. In the left navigation pane, choose ****Permission Control**** > **Bucket Policy**. Modify the `Resource` field in the existing authorization policy to add or remove bucket resources. If multiple buckets are involved, you must perform this operation for each bucket.
        
-   To modify the scope of authorized accounts:
    
    > Note: If a RAM user accesses OSS, you must grant the RAM user the required permissions to perform operations on the OSS bucket. Otherwise, the access request fails.
    
    1.  Go to the [VPC console - Gateway Endpoint](https://vpc.console.alibabacloud.com/endpoint/cn-hangzhou/vpcEndpoints) page and click the target gateway endpoint ID. On the **Endpoint Policy** tab, modify the `Principal` field in the policy to add or remove accounts that are allowed to access the Bucket from the VPC.
        
    2.  Go to the [OSS console - Buckets](https://oss.console.alibabacloud.com/bucket) and click the name of the destination bucket. In the navigation pane on the left, choose ****Permission Control**** > **Bucket Policy**. Modify the `Principal` field in the existing authorization policy to add or remove accounts that can access the bucket from the VPC. If you are configuring multiple buckets, you must repeat this operation for each bucket.
        

#### **Associate or dissociate a route table**

You can associate a gateway endpoint with or dissociate a gateway endpoint from a route table to control which vSwitches in the VPC can access Alibaba Cloud services through the gateway endpoint.

1.  Go to the [VPC console - Gateway Endpoint](https://vpc.console.alibabacloud.com/endpoint/cn-hangzhou/vpcEndpoints) page, and click the target gateway endpoint instance ID.
    
2.  On the **Associated Route Tables** tab:
    
    1.  To associate a new route table, click **Associate with Route Table**. The system automatically adds a route to its custom route entries with the next hop being the gateway endpoint.
        
    2.  To dissociate a route table, click **Disassociate** to the right of the route table. When the route table is dissociated, the system automatically removes the corresponding system route.
        

#### **Delete a gateway endpoint**

Before deleting a gateway endpoint, you must dissociate all route tables.

1.  Dissociate all route tables.
    
2.  Go to the [VPC console - Gateway Endpoint](https://vpc.console.alibabacloud.com/endpoint/cn-hangzhou/vpcEndpoints) in the VPC console, find the target gateway endpoint instance, and click **Delete**.
    
3.  (Optional) The bucket policy remains in effect and may prevent other VPCs from accessing the bucket. To modify the policy, go to the [OSS console - Buckets](https://oss.console.alibabacloud.com/bucket), click the name of the target bucket. In the left navigation pane, select ****Permission Control**** > **Bucket Policy** to modify or delete the policy that restricts access to a VPC.
    

### **API**

1.  Gateway endpoint:
    
    1.  To create a gateway endpoint and configure an endpoint policy, call the [CreateVpcGatewayEndpoint](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvpcgatewayendpoint) operation.
        
        1.  When calling this operation, you must specify the `ServiceName` parameter. Call the [ListVpcEndpointServicesByEndUser](/help/en/vpc/developer-reference/api-vpc-2016-04-28-listvpcendpointservicesbyenduser) operation to query available endpoint services.
            
        2.  The `PolicyDocument` field is used to configure an endpoint policy. The syntax is the same as the [access policy language](/help/en/ram/policy-elements).
            
    2.  To modify a gateway endpoint policy, call the [UpdateVpcGatewayEndpointAttribute](/help/en/vpc/developer-reference/api-vpc-2016-04-28-updatevpcgatewayendpointattribute) operation and specify the `PolicyDocument` parameter.
        
    3.  To associate a route table, call the [AssociateRouteTablesWithVpcGatewayEndpoint](/help/en/vpc/developer-reference/api-vpc-2016-04-28-associateroutetableswithvpcgatewayendpoint) operation.
        
    4.  To dissociate a route table, call the [DissociateRouteTablesFromVpcGatewayEndpoint](/help/en/vpc/developer-reference/api-vpc-2016-04-28-dissociateroutetablesfromvpcgatewayendpoint) operation.
        
    5.  To delete a gateway endpoint, call the [DeleteVpcGatewayEndpoint](/help/en/vpc/developer-reference/api-vpc-2016-04-28-deletevpcgatewayendpoint) operation.
        
2.  OSS bucket:
    
    1.  To configure a bucket policy for OSS, call the [PutBucketPolicy](/help/en/oss/developer-reference/putbucketpolicy) operation.
        
    2.  To modify a bucket policy, call the [PutBucketPolicy](/help/en/oss/developer-reference/putbucketpolicy) operation and specify the access policy in the JSON format.
        
    3.  To delete a bucket policy, call the [DeleteBucketPolicy](/help/en/oss/developer-reference/deletebucketpolicy) operation.
        

### **Terraform**

Configure a gateway endpoint:

> Resource: [alicloud\_vpc\_gateway\_endpoint](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/vpc_gateway_endpoint)

> Note: Before deleting a gateway endpoint, you must dissociate all associated route tables.

```
provider "alicloud" {
  region = "cn-hangzhou"
}

resource "alicloud_vpc_gateway_endpoint" "default" {
  gateway_endpoint_name = "gateway-endpoint-name"        # The name of the gateway endpoint.
  service_name          = "com.aliyun.cn-hangzhou.oss"   # The name of the OSS service.
  vpc_id                = "vpc-bp******"                 # The VPC to which the gateway endpoint belongs.
  route_tables = ["vtb-bp******","vtb-bp******"]         # The IDs of the associated route tables.
  # The endpoint policy.
  policy_document       = <<EOF
   {
    "Version": "1",
    "Statement":
     [
       {
        "Effect": "Allow",
        "Action": "oss:*",
        "Resource": ["acs:oss:*:*:examplebucket","acs:oss:*:*:examplebucket/*"],
        "Principal": ["1746******"]
      }
    ]
  }
  EOF                                              
}
```

Configure a bucket policy for OSS:

> Resource: [alicloud\_oss\_bucket\_policy](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/oss_bucket_policy)

```
provider "alicloud" {
  region = "cn-hangzhou"
}

resource "alicloud_oss_bucket_policy" "default" {
  bucket = "examplebucket"  # The name of the bucket.
  
  policy = jsonencode({
    Version = "1"
    Statement = [
      {
        Effect = "Deny"
        Action = [
          "oss:ListObjects",
          "oss:GetObject",
          "oss:PutObject",
          "oss:DeleteObject"
        ]
        Principal = [
          "*"
        ]
        Resource = [
          "acs:oss:*:*:examplebucket",
          "acs:oss:*:*:examplebucket/*"
        ]
        Condition = {
          StringNotEquals = {
            "acs:SourceVpc" = [
              "vpc-bp******"  # Replace the value with the actual VPC ID.
            ]
          }
        }
      },{
        Effect = "Allow"
        Action = [
          "oss:*"
        ]
        Principal = [
          "1746xxxxxx"  # Replace the value with the actual Alibaba Cloud account ID.
        ]
        Resource = [
          "acs:oss:*:*:examplebucket",
          "acs:oss:*:*:examplebucket/*"
        ]
        Condition = {
          StringEquals = {
            "acs:SourceVpc" = [
              "vpc-bp******"  # Replace the value with the actual VPC ID.
            ]
          }
        }
      }
    ]
  })
} 
```

## **PrivateLink**

For more information, see the following PrivateLink topics:

-   Access Alibaba Cloud services: [Access OSS resources over a private network using PrivateLink](/help/en/privatelink/getting-started/access-oss-resources-through-the-private-network).
    
-   Access user-created services (including services provided by ISVs): [Access an ALB instance in another VPC by using PrivateLink](/help/en/privatelink/getting-started/use-privatelink-to-access-alb-across-the-private-network-of-a-vpc) and [Access an NLB instance in another VPC using PrivateLink](/help/en/privatelink/getting-started/cross-vpc-private-network-access-through-privatelink).
    
-   Access a virtual network device: [Use GWLB to quickly set up security inspection for IPv4 traffic](/help/en/slb/gateway-based-load-balancing-gwlb/getting-started/gwlb-quickly-implements-load-balancing-for-ipv4-services).
    

## **More information**

### **Billing**

Gateway endpoints are free of charge.

For more information, see [PrivateLink billing](/help/en/privatelink/private-link-billing-description).

### **Supported regions**

**Area**

**Regions**

Asia Pacific - China

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Shenzhen), China (Ulanqab), China (Heyuan), China (Guangzhou), China (Chengdu), and China (Hong Kong)

Asia Pacific - Others

Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta)

Europe & Americas

Germany (Frankfurt), UK (London), US (Silicon Valley), and US (Virginia)

Middle East

UAE (Dubai)

For more information, see [Regions and zones that support PrivateLink](/help/en/privatelink/regions-and-zones-that-support-private-network-connections#section-pmn-jzo-kln).

### **Quotas**

Gateway endpoint quotas:

1.  A VPC can be associated with only one gateway endpoint for an Alibaba Cloud service. A VPC route table can be associated with only one gateway endpoint.
    
2.  A gateway endpoint can be associated with multiple VPC route tables.
    

For more information about PrivateLink quotas, see [Service quotas](/help/en/privatelink/quotas-and-limits#9b59cc3508wxb).
