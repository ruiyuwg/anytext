This topic describes how to configure security group rules for Elastic Compute Service (ECS) instances on which Cloud Assistant Agent is installed to facilitate the management of network permissions on Cloud Assistant Agent.

## Background information

To ensure that you can use Cloud Assistant on an ECS instance, the instance must have access to the endpoints or IP addresses that are required to perform specific operations, such as running Cloud Assistant commands. You must configure security group rules to allow outbound access to the required endpoints or IP addresses. The following table describes the endpoints and IP addresses.

**Endpoint or IP address**

**Purpose**

https://_{region-id}_.axt.aliyun.com:443/

This endpoint is used to access the Cloud Assistant server.

http://100.100.100.200:80/

This URL is used to access MetaServer.

https://aliyun-client-assist-_{region-id}_.oss-_{region-id}_\-internal.aliyuncs.com:443/

This endpoint is used to access the server in which the Cloud Assistant Agent installation package is stored to install or update Cloud Assistant Agent.

**Note**

_{region-id}_ specifies the region ID of the ECS instance. For example, if the instance resides in the China (Hangzhou) region, set this parameter to `cn-hangzhou`.

You can use one of the following methods to configure security group rules for an instance on which Cloud Assistant Agent is installed:

-   [General configurations](#section-dww-i9e-73j): In most cases, you can use this method to configure security group rules to allow access to the CIDR blocks and ports of the Cloud Assistant server and the server in which the Cloud Assistant Agent installation package is stored.
    
-   [Fine-grained configurations](#section-ta7-uw0-olp): If you want to manage network permissions in a fine-grained manner, you can use this method to allow access to the specified ports and IP addresses based on the region of the instance on which Cloud Assistant Agent is installed.
    

## General configurations

To simplify the configurations and the management of network permissions, you can configure security group rules to allow access to the CIDR blocks and ports of the Cloud Assistant server and the server in which the Cloud Assistant Agent installation package is stored.

**Note**

The CIDR block of the Cloud Assistant server is 100.100.0.0/16. The CIDR block of the server in which the Cloud Assistant Agent installation package is stored is 100.0.0.0/8.

By default, basic security groups allow all outbound access. A basic security group allows all outbound traffic from ECS instances in the security group. By default, advanced security groups deny all outbound access. An advanced security group denies all outbound traffic from ECS instances in the security group. For advanced security groups, configure security group rules to allow outbound access to the URLs, CIDR blocks, or ports that are described in the following table. For information about how to add an inbound security group rule, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).

**URL, IP address, or port**

**Purpose**

DNS/UDP port 53

This port is used to resolve domain names.

https://100.100.0.0/16:443/

This URL is used to access the Cloud Assistant server.

https://100.0.0.0/8:443/

This URL is used to access the server in which the Cloud Assistant Agent installation package is stored to install or update Cloud Assistant Agent.

![添加安全组规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0038657461/p403034.png)

## Fine-grained configurations

If you want to manage network permissions in a fine-grained manner, allow access to the IP addresses of the Cloud Assistant server and the server in which the Cloud Assistant Agent installation package is stored in specific regions.

For example, if your instance resides in the China (Hangzhou) region, configure rules in an advanced security group of the instance to allow outbound access to the URLs, IP addresses, or ports that are described in the following table. For information about how to add an inbound security group rule, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).

**URL, IP address, or port**

**Purpose**

DNS/UDP port 53

This port is used to resolve domain names.

https://100.100.45.106:443/

This URL is used to access the Cloud Assistant server in the China (Hangzhou) region.

https://100.118.28.50:443/

This URL is used to access the server in which the Cloud Assistant Agent installation package is stored in the China (Hangzhou) region to install or update Cloud Assistant Agent.

![添加安全组规则1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0038657461/p403071.png)

The following table lists the endpoints and IP addresses of the Cloud Assistant server that Cloud Assistant must be able to access in each region.

For information about the endpoints and IP addresses of the server in which the Cloud Assistant Agent installation package is stored, see the **Internal endpoint for access over VPCs** and **VIP range** columns in the tables of [Access OSS using bucket domain names](/help/en/oss/user-guide/access-oss-via-bucket-domain-name).

**Region**

**Region ID**

**Endpoint**

**IP address**

China (Qingdao)

cn-qingdao

cn-qingdao.axt.aliyun.com

-   100.100.15.4
    
-   100.100.183.1
    

China (Beijing)

cn-beijing

cn-beijing.axt.aliyun.com

100.100.18.120

China (Zhangjiakou)

cn-zhangjiakou

cn-zhangjiakou.axt.aliyun.com

-   100.100.99.23
    
-   100.100.202.194
    

China (Hohhot)

cn-huhehaote

cn-huhehaote.axt.aliyun.com

-   100.100.126.8
    
-   100.100.59.86
    

China (Ulanqab)

cn-wulanchabu

cn-wulanchabu.axt.aliyun.com

100.100.0.3

China (Hangzhou)

cn-hangzhou

cn-hangzhou.axt.aliyun.com

100.100.45.106

China (Shanghai)

cn-shanghai

cn-shanghai.axt.aliyun.com

-   100.100.36.108
    
-   100.100.159.7
    

China (Nanjing - Local Region)

cn-nanjing

cn-nanjing.axt.aliyun.com

100.100.0.1

China (Fuzhou - Local Region)

cn-fuzhou

cn-fuzhou.axt.aliyun.com

100.100.0.26

China (Wuhan - Local Region)

cn-wuhan-lr

cn-wuhan-lr.axt.aliyun.com

100.100.0.8

China (Shenzhen)

cn-shenzhen

cn-shenzhen.axt.aliyun.com

100.100.0.70

China (Heyuan)

cn-heyuan

cn-heyuan.axt.aliyun.com

100.100.0.5

China (Guangzhou)

cn-guangzhou

cn-guangzhou.axt.aliyun.com

100.100.0.4

China (Chengdu)

cn-chengdu

cn-chengdu.axt.aliyun.com

100.100.0.42

China (Hong Kong)

cn-hongkong

cn-hongkong.axt.aliyun.com

-   100.100.35.30
    
-   100.100.98.28
    

Singapore

ap-southeast-1

ap-southeast-1.axt.aliyun.com

-   100.100.30.60
    
-   100.100.169.197
    

Malaysia (Kuala Lumpur)

ap-southeast-3

ap-southeast-3.axt.aliyun.com

-   100.100.127.16
    
-   100.100.62.2
    

Indonesia (Jakarta)

ap-southeast-5

ap-southeast-5.axt.aliyun.com

100.100.80.165

100.100.132.30

Philippines (Manila)

ap-southeast-6

ap-southeast-6.axt.aliyun.com

100.100.0.15

Thailand (Bangkok)

ap-southeast-7

ap-southeast-7.axt.aliyun.com

100.100.0.30

Japan (Tokyo)

ap-northeast-1

ap-northeast-1.axt.aliyun.com

100.100.0.76

South Korea (Seoul)

ap-northeast-2

ap-northeast-2.axt.aliyun.com

100.100.0.23

US (Silicon Valley)

us-west-1

us-west-1.axt.aliyun.com

100.100.29.34

100.100.1.3

US (Virginia)

us-east-1

us-east-1.axt.aliyun.com

100.100.152.140

100.100.147.87

Germany (Frankfurt)

eu-central-1

eu-central-1.axt.aliyun.com

-   100.100.46.12
    
-   100.100.53.26
    

UK (London)

eu-west-1

eu-west-1.axt.aliyun.com

100.100.0.20

UAE (Dubai)

me-east-1

me-east-1.axt.aliyun.com

100.100.43.7

SAU (Riyadh - Partner Region) is operated by a partner.

me-central-1

me-central-1.axt.aliyun.com

100.100.0.15

China East 2 Finance

cn-shanghai-finance-1

cn-shanghai-finance-1.axt.aliyun.com

100.100.0.46

China North 2 Finance (Preview)

cn-beijing-finance-1

cn-beijing-finance-1.axt.aliyun.com

100.100.0.165

China South 1 Finance

cn-shenzhen-finance-1

cn-shenzhen-finance-1.axt.aliyun.com

100.103.0.140

China North 2 Ali Gov 1

cn-north-2-gov-1

cn-north-2-gov-1.axt.aliyun.com

100.100.0.67
