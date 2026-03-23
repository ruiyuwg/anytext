This topic describes the regions and zones that support PrivateLink.

## Regions and zones

-   **Region:** A geographic location where a data center is hosted. You choose a region when creating a resource, and it can't be changed later.
    
-   **Zone:** An isolated physical location within a region with separate power and networking. Zones in the same region are connected by low-latency links.
    
-   **Guidance:**
    
    -   Use multiple zones in the same region for higher availability and disaster recovery.
        
    -   Use the same zone for lowest latency between instances.
        

The following figure shows the relationship between regions and zones.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2914442771/CAEQUxiBgMCEmo2F4RkiIGNjY2E4YjAyYTdjZDQ4MjhhOWI0ZDJmNTI2YzcwMTgy4032923_20231011182953.888.svg)

## Regions and zones that support PrivateLink

PrivateLink has two roles: service consumers and service providers.

-   Service consumers create endpoints to access services.
    
-   Service providers create endpoint services using Alibaba Cloud resources, such as Server Load Balancer (SLB) and Elastic Compute Service (ECS), to build services for service consumers.
    

### Service consumers

Use PrivateLink to access Alibaba Cloud services or user-created services. The available regions and zones depend on where these services are enabled.

### Service providers

Check the regions and zones that PrivateLink supports based on the service resource type. You can create endpoint services and deploy service resources for service consumers only in the supported regions and zones.

**Note**

The regions and zones in the following tables are for reference only. For actual availability, verify on the purchase page.

#### **NLB as service resource**

**Area**

**Region**

**Region ID**

**Zone**

Asia-Pacific - China

China (Hangzhou)

cn-hangzhou

Zone B, Zone G, Zone H, Zone I, Zone J, Zone K

China (Shanghai)

cn-shanghai

Zone B, Zone D, Zone E, Zone F, Zone G, Zone L, Zone M, Zone N

China (Qingdao)

cn-qingdao

Zone B, Zone C

China (Beijing)

cn-beijing

Zone F, Zone G, Zone H, Zone I, Zone J, Zone K, Zone L

China (Zhangjiakou)

cn-zhangjiakou

Zone A, Zone B, Zone C

China (Ulanqab)

cn-wulanchabu

Zone A, Zone B, Zone C

China (Shenzhen)

cn-shenzhen

Zone C, Zone D, Zone E, Zone F

China (Heyuan)

cn-heyuan

Zone A, Zone B

China (Guangzhou)

cn-guangzhou

Zone A, Zone B

China (Chengdu)

cn-chengdu

Zone A, Zone B

China (Hong Kong)

cn-hongkong

Zone B, Zone C, Zone D

Asia-Pacific - Other

Japan (Tokyo)

ap-northeast-1

Zone A, Zone B, Zone C

South Korea (Seoul)

ap-northeast-2

Zone A

Singapore

ap-southeast-1

Zone A, Zone B, Zone C

Malaysia (Kuala Lumpur)

ap-southeast-3

Zone A, Zone B

Indonesia (Jakarta)

ap-southeast-5

Zone A, Zone B, Zone C

Philippines (Manila)

ap-southeast-6

Zone A, Zone B

Thailand (Bangkok)

ap-southeast-7

Zone A

Europe & Americas

Germany (Frankfurt)

eu-central-1

Zone A, Zone B, Zone C

UK (London)

eu-west-1

Zone A, Zone B

US (Silicon Valley)

us-west-1

Zone A, Zone B

US (Virginia)

us-east-1

Zone A, Zone B

Mexico

na-south-1

Zone A

Middle East

SAU (Riyadh - Partner Region)

me-central-1

Zone A, Zone B

UAE (Dubai)

me-east-1

Zone A

#### **ALB as service resource**

**Area**

**Region**

**Region ID**

**Zone**

Asia-Pacific - China

China (Hangzhou)

cn-hangzhou

Zone G, Zone H, Zone I, Zone J, Zone K

China (Shanghai)

cn-shanghai

Zone B, Zone E, Zone F, Zone G, Zone L, Zone M, Zone N

China (Qingdao)

cn-qingdao

Zone B, Zone C

China (Beijing)

cn-beijing

Zone F, Zone G, Zone H, Zone I, Zone K, Zone L

China (Zhangjiakou)

cn-zhangjiakou

Zone A, Zone B, Zone C

China (Ulanqab)

cn-wulanchabu

Zone A, Zone B

China (Shenzhen)

cn-shenzhen

Zone D, Zone E, Zone F

China (Heyuan)

cn-heyuan

Zone A, Zone B

China (Guangzhou)

cn-guangzhou

Zone A

China (Chengdu)

cn-chengdu

Zone A, Zone B

China (Hong Kong)

cn-hongkong

Zone B, Zone C, Zone D

Asia-Pacific - Other

Japan (Tokyo)

ap-northeast-1

Zone A, Zone B, Zone C

South Korea (Seoul)

ap-northeast-2

Zone A

Singapore

ap-southeast-1

Zone A, Zone B, Zone C

Malaysia (Kuala Lumpur)

ap-southeast-3

Zone A, Zone B

Indonesia (Jakarta)

ap-southeast-5

Zone A, Zone B, Zone C

Philippines (Manila)

ap-southeast-6

Zone A

Thailand (Bangkok)

ap-southeast-7

Zone A

Europe & Americas

Germany (Frankfurt)

eu-central-1

Zone A, Zone B, Zone C

UK (London)

eu-west-1

Zone A, Zone B

US (Silicon Valley)

us-west-1

Zone A, Zone B

US (Virginia)

us-east-1

Zone A, Zone B

Middle East

SAU (Riyadh - Partner Region)

me-central-1

Zone A, Zone B

#### **CLB as service resource**

**Area**

**Region**

**Region ID**

**Zone**

Asia-Pacific - China

China (Hangzhou)

cn-hangzhou

Zone B, Zone F, Zone G, Zone H, Zone I, Zone J, Zone K

China (Shanghai)

cn-shanghai

Zone B, Zone E, Zone F, Zone G, Zone L, Zone M, Zone N

China (Qingdao)

cn-qingdao

Zone B, Zone C

China (Beijing)

cn-beijing

Zone C, Zone D, Zone E, Zone F, Zone G, Zone H, Zone I, Zone K, Zone L

China (Zhangjiakou)

cn-zhangjiakou

Zone A, Zone B, Zone C

China (Hohhot)

cn-huhehaote

Zone A, Zone B

China (Ulanqab)

cn-wulanchabu

Zone A, Zone B, Zone C

China (Shenzhen)

cn-shenzhen

Zone D, Zone E, Zone F

China (Heyuan)

cn-heyuan

Zone A, Zone B

China (Guangzhou)

cn-guangzhou

Zone A

China (Chengdu)

cn-chengdu

Zone A, Zone B

China (Hong Kong)

cn-hongkong

Zone B, Zone C, Zone D

Asia-Pacific - Other

Japan (Tokyo)

ap-northeast-1

Zone A, Zone B

South Korea (Seoul)

ap-northeast-2

Zone A

Singapore

ap-southeast-1

Zone A, Zone B, Zone C

Malaysia (Kuala Lumpur)

ap-southeast-3

Zone A, Zone B

Indonesia (Jakarta)

ap-southeast-5

Zone A, Zone B, Zone C

Philippines (Manila)

ap-southeast-6

Zone A

Thailand (Bangkok)

ap-southeast-7

Zone A

Europe & Americas

Germany (Frankfurt)

eu-central-1

Zone A, Zone B

UK (London)

eu-west-1

Zone A, Zone B

US (Silicon Valley)

us-west-1

Zone A, Zone B

US (Virginia)

us-east-1

Zone A, Zone B

Mexico

na-south-1

Zone A

Middle East

SAU (Riyadh - Partner Region)

me-central-1

Zone A, Zone B

#### **GWLB as service resource**

**Area**

**Region**

**Zone**

Asia-Pacific - China

China (Ulanqab)

Zone B, Zone C

China (Hangzhou)

Zone J, Zone K

China (Shanghai)

Zone L, Zone N

China (Beijing)

Zone F, Zone L

China (Hong Kong)

Zone B, Zone C

Asia-Pacific - Other

Singapore

Zone B, Zone C

Japan

Zone B, Zone C
