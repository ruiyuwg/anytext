Queries the configurations of a domain name that is added to Web Application Firewall (WAF).

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=waf-openapi&api=DescribeDomain&type=RPC&version=2019-09-10)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

DescribeDomain

The operation that you want to perform. Set this parameter to **DescribeDomain**.

Domain

String

Yes

www.example.com

The domain name that you want to query.

**Note**

You can call the [DescribeDomainNames](/help/en/waf/web-application-firewall-2-0/developer-reference/api-describedomainnames) operation to query the domain names that are added to WAF.

InstanceId

String

Yes

waf-cn-7pp26f1\*\*\*\*

The ID of the WAF instance.

**Note**

You can call the [DescribeInstanceInfo](/help/en/waf/web-application-firewall-2-0/developer-reference/api-describeinstanceinfo) operation to query the ID of the WAF instance.

All Alibaba Cloud API requests must include common request parameters. For information about common request parameters, see [Common request parameters](/help/en/waf/web-application-firewall-2-0/developer-reference/common-parameters).

For more information about sample requests, see the "**Examples**" section of this topic.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

D827FCFE-90A7-4330-9326-D33C8B4C7726

The ID of the request.

Domain

Struct

The configurations of the domain name.

AccessHeaderMode

Integer

1

The method that is used to obtain the actual IP address of a client. Valid values:

-   **0**: WAF reads the first value of the X-Forwarded-For (XFF) header field as the actual IP address of the client.
    
-   **1**: WAF reads the value of a custom header field as the actual IP address of the client.
    

**Note**

This parameter is returned only if the value of **IsAccessProduct** is **1**.

AccessHeaders

List

\["X-Client-IP"\]

The custom header field that is used to obtain the actual IP address of a client.

**Note**

This parameter is returned only if the value of **AccessHeaderMode** is **1**.

AccessType

String

waf-cloud-dns

The mode that is used to add the domain name to WAF. Valid values:

-   **waf-cloud-dns**: CNAME record mode.
    
-   **waf-cloud-native**: transparent proxy mode.
    

CloudNativeInstances

Array of CloudNativeInstances

The instances that are added to WAF in transparent proxy mode.

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-native**.

CloudNativeProductName

String

ALB

The type of the cloud service instance. Valid values:

-   **SLB**: a Classic Load Balancer (CLB) instance, formerly known as a Server Load Balancer (SLB) instance.
    
-   **ECS**: an Elastic Compute Service (ECS) instance.
    
-   **ALB**: an Application Load Balancer (ALB) instance.
    

IPAddressList

String

\["39.XX.XX.197"\]

The public IP addresses of the cloud service instances.

InstanceId

String

alb-s65nua68wdedsp\*\*\*\*

The ID of the cloud service instance.

ProtocolPortConfigs

Array of ProtocolPortConfigs

The protocol and port configurations.

Ports

String

\[80\]

The ports.

Protocol

String

http

The protocol type. Valid values:

-   **http**
    
-   **https**
    

RedirectionTypeName

String

ALB

The type of traffic redirection port. Valid values:

-   **SLB-L4**: Traffic on the Layer 4 listening ports of the CLB instance is redirected to WAF.
    
-   **SLB-L7**: Traffic on the Layer 7 listening ports of the CLB instance is redirected to WAF.
    
-   **ECS**: Traffic on the listening ports of ECS instances is redirected to WAF.
    
-   **ALB**: Traffic on the HTTP and HTTPS listening ports of ALB instances is redirected to WAF.
    

ClusterType

Integer

0

The type of the WAF protection cluster. Valid values:

-   **0**: shared cluster.
    
-   **1**: exclusive cluster.
    

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

Cname

String

kdmqyi3ck7xogegxpiyfpb0fj21mgkxn.\*\*\*\*.com

The CNAME that is assigned by WAF to the domain name.

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

ConnectionTime

Integer

5

The timeout period for the connections of WAF clusters. Unit: seconds.

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

Http2Port

List

\[443,8443\]

The HTTP/2 ports.

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns** and **HttpsPort** is specified.

HttpPort

List

\[80\]

The HTTP ports.

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

HttpToUserIp

Integer

0

Indicates whether HTTPS to HTTP redirection for back-to-origin requests is enabled. Valid values:

-   **0**: HTTPS to HTTP redirection for back-to-origin requests is disabled.
    
-   **1**: HTTPS to HTTP redirection for back-to-origin requests is enabled.
    

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns** and **HttpsPort** is specified.

HttpsPort

List

\[443,8443\]

The HTTPS ports.

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

HttpsRedirect

Integer

0

Indicates whether HTTP to HTTPS redirection is enabled. Valid values:

-   **0**: HTTP to HTTPS redirection is disabled.
    
-   **1**: HTTP to HTTPS redirection is enabled.
    

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns** and **HttpsPort** is specified.

IpFollowStatus

Integer

1

Indicates whether the feature of forwarding requests to the origin servers that use the IP address type specified in the requests is enabled. Valid values:

-   **0**: The feature of forwarding requests to the origin servers that use the IP address type specified in the requests is disabled.
    
-   **1**: The feature of forwarding requests to the origin servers that use the IP address type specified in the requests is enabled.
    

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

IsAccessProduct

Integer

1

Indicates whether a Layer 7 proxy is configured, which is used to filter inbound traffic before the traffic is sent to the WAF instance. Layer 7 proxies include Anti-DDoS Pro, Anti-DDoS Premium, and Alibaba Cloud CDN. Valid values:

-   **0**: No Layer 7 proxy is configured.
    
-   **1**: A Layer 7 proxy is configured.
    

LoadBalancing

Integer

2

The load balancing algorithm that is used to forward requests to the origin server. Valid values:

-   **0**: the IP hash algorithm.
    
-   **1**: the round-robin algorithm.
    
-   **2**: the least time algorithm.
    

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

LogHeaders

Array of LogHeader

The key-value pairs that you want to use to mark the requests that pass through the WAF instance.

**Note**

This parameter is returned only if the traffic marking feature is enabled for the domain name.

k

String

ALIWAF-TAG

The name of the custom header field.

v

String

Yes

The value of the custom header field.

ReadTime

Integer

120

The timeout period for read connections of WAF clusters. Unit: seconds.

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

ResourceGroupId

String

rg-acfm2mkrunv\*\*\*\*

The ID of the resource group to which the WAF instance belongs.

SniHost

String

waf.example.com

The value of the custom Server Name Indication (SNI) field. If this parameter is empty, the value of the **Host** field in the request header is used as the value of the SNI field.

**Note**

This parameter is returned only if the value of **SniStatus** is **1**.

SniStatus

Integer

1

Indicates whether origin SNI is enabled. Origin SNI indicates the domain name with which an HTTPS connection must be established at the start of the handshaking process when WAF forwards requests to the origin server. Valid values:

-   **0**: Origin SNI is disabled.
    
-   **1**: Origin SIN is enabled.
    

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns** and **HttpsPort** is specified.

SourceIps

List

\["39.XX.XX.197"\]

The origin server address.

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

Version

Long

40

The version of the domain name configuration.

WriteTime

Integer

120

The timeout period for write connections of WAF clusters. Unit: seconds.

**Note**

This parameter is returned only if the value of **AccessType** is **waf-cloud-dns**.

Retry

Boolean

true

Indicates whether WAF retries to forward requests when the requests fail to be forwarded to the origin server. Valid values:

-   **true** (default)
    
-   **false**
    

Keepalive

Boolean

true

Indicates whether the persistent connection feature is enabled. Valid values:

-   **true** (default)
    
-   **false**
    

KeepaliveRequests

Integer

1000

The number of reused persistent connections. Valid values: 60 to 1000.

**Note**

The number of reused persistent connections after the persistent connection feature is enabled.

KeepaliveTimeout

Integer

15

The timeout period of persistent connections that are in the Idle state. Unit: seconds. Valid values: 1 to 60. Default value: 15.

**Note**

The period of time during which a reused persistent connection can remain in the Idle state before the persistent connection is released.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=DescribeDomain
&Domain=www.example.com
&InstanceId=waf-cn-7pp26f1****
&<Common request parameters>
```

Sample success responses

`XML` format

```
<DescribeDomainResponse>
	  <RequestId>D827FCFE-90A7-4330-9326-D33C8B4C7726</RequestId>
	  <Domain>
		    <HttpToUserIp>0</HttpToUserIp>
		    <HttpPort>80</HttpPort>
		    <IsAccessProduct>1</IsAccessProduct>
		    <AccessHeaderMode>1</AccessHeaderMode>
		    <ResourceGroupId>rg-acfm2mkrunv****</ResourceGroupId>
		    <AccessHeaders>X-Client-IP</AccessHeaders>
		    <ReadTime>120</ReadTime>
		    <SourceIps>39.XX.XX.197</SourceIps>
		    <IpFollowStatus>1</IpFollowStatus>
		    <ClusterType>0</ClusterType>
		    <LoadBalancing>2</LoadBalancing>
		    <Cname>kdmqyi3ck7xogegxpiyfpb0fj21mgkxn.****.com</Cname>
		    <LogHeaders>
			      <v>Yes</v>
			      <k>ALIWAF-TAG</k>
		    </LogHeaders>
		    <WriteTime>120</WriteTime>
		    <Http2Port>443</Http2Port>
		    <Http2Port>8443</Http2Port>
		    <Version>40</Version>
		    <HttpsRedirect>0</HttpsRedirect>
		    <ConnectionTime>5</ConnectionTime>
		    <AccessType>waf-cloud-dns</AccessType>
		    <HttpsPort>443</HttpsPort>
		    <HttpsPort>8443</HttpsPort>
        <Keepalive>true</Keepalive>
        <KeepaliveTimeout>15</KeepaliveTimeout>
        <Retry>true</Retry>
        <KeepaliveRequests>1000</KeepaliveRequests>
	  </Domain>
</DescribeDomainResponse>
```

`JSON` format

```
{
  "RequestId": "D827FCFE-90A7-4330-9326-D33C8B4C7726",
  "Domain": {
    "HttpToUserIp": 0,
    "HttpPort": [
      80
    ],
    "IsAccessProduct": 1,
    "AccessHeaderMode": 1,
    "ResourceGroupId": "rg-acfm2mkrunv****",
    "AccessHeaders": [
      "X-Client-IP"
    ],
    "ReadTime": 120,
    "SourceIps": [
      "39.XX.XX.197"
    ],
    "IpFollowStatus": 1,
    "ClusterType": 0,
    "LoadBalancing": 2,
    "Cname": "kdmqyi3ck7xogegxpiyfpb0fj21mgkxn.****.com",
    "LogHeaders": [
      {
        "v": "Yes",
        "k": "ALIWAF-TAG"
      }
    ],
    "WriteTime": 120,
    "Http2Port": [
      443,
      8443
    ],
    "Version": 40,
    "HttpsRedirect": 0,
    "ConnectionTime": 5,
    "AccessType": "waf-cloud-dns",
    "HttpsPort": [
      443,
      8443
    ],
    "Keepalive": true,
    "KeepaliveTimeout": 15,
    "SniStatus": 0,
    "Retry": true,
    "KeepaliveRequests": 1000
  }
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/waf-openapi).
