This topic describes the regions in which Classic Load Balancer (CLB) is available.

## Regions and zones

Regions are geolocations of data centers. After you create a cloud resource, you cannot change the region in which the cloud resource is deployed. Each region has multiple isolated locations known as zones. Each zone has its own independent power supply and network.

Zones within the same region can communicate with each other over an internal network. Fault isolation can be enabled between zones. This way, if faults occur in a zone, other zones are not affected and continue to run as expected. Regions are independent of each other. Zones are isolated from each other. The network latency between zones within the same region is low.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7046990571/CAEQLhiBgICA6O27kxkiIDBiYzkzZjM0YWI3OTRkMTVhNzQ1ZTMzNDAyMzVhN2Fh4654744_20240903102831.350.svg)

CLB supports cross-zone deployment in most regions. You can deploy a CLB instance across multiple zones within the same region to improve disaster recovery and ensure the reliability of your applications. If the primary zone is down, CLB can fail over to the secondary zone within about 30 seconds. When the primary zone recovers, CLB automatically switches back to the primary zone.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7046990571/CAEQLhiBgICLrqC8kxkiIDdlZmI4N2VlODMxNzQ4NzA5YjBmOTMzZmUyNmNmODZm4654744_20240903102831.350.svg)

Before you deploy a CLB instance across zones, take note of the following items:

-   You can add Elastic Compute Service (ECS) instances that are deployed across zones to a CLB instance. However, the ECS instances and the CLB instance must belong to the same region. CLB can distribute network traffic to ECS instances across zones.
    
-   By default, if the primary zone of a CLB instance is active, network traffic is not distributed to the secondary zone. You cannot manually configure the CLB instance to switch network traffic to the secondary zone. The CLB instance switches network traffic to the secondary zone only if the primary zone is down. For example, if the primary zone is down due to power outages or fiber cuts, the secondary zone of the CLB instance automatically takes over. An unhealthy ECS instance does not trigger a zone failover.
    
-   ECS instances are independent of CLB. If a CLB instance in the primary zone fails, the ECS instances in the primary zone may still provide services. For example, when the CLB instance in Zone A fails, as shown in the preceding figure, the CLB instance in Zone B takes over. CLB can distribute network traffic across ECS instances that are deployed in different zones. However, if a zone is down due to power outages or fiber cuts, all resources in the zone stop running, including the CLB instance and the ECS instances.
    

## Regions and zones in which CLB is available

The regions and zones in the following tables are for reference only. For more information, see the [purchase page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_intl&regionId=ap-southeast-6).

**Area**

**Region**

**Zone**

China

China (Hangzhou)

Zone B, Zone D, Zone E, Zone F, Zone G, Zone H, Zone I, Zone J, and Zone K

China (Shanghai)

Zone A, Zone B, Zone C, Zone D, Zone E, Zone F, Zone G, Zone L, Zone M, and Zone N

China (Shenzhen)

Zone B, Zone C, Zone D, Zone E, and Zone F

China (Heyuan)

Zone A and Zone B

China (Guangzhou)

Zone A and Zone B

China (Qingdao)

Zone B and Zone C

China (Beijing)

Zone A, Zone D, Zone E, Zone G, Zone H, Zone I, Zone J, Zone K, and Zone L

China (Zhangjiakou)

Zone A, Zone B, and Zone C

China (Hohhot)

Zone A and Zone B

China (Ulanqab)

Zone A, Zone B, and Zone C

China (Chengdu)

Zone A and Zone B

China (Hong Kong)

Zone B, Zone C, and Zone D

Asia Pacific

Philippines (Manila)

Zone A

Thailand (Bangkok)

Zone A and Zone B

Singapore

Zone A, Zone B, and Zone C

Japan (Tokyo)

Zone A, Zone B, and Zone C

South Korea (Seoul)

Zone A

Malaysia (Kuala Lumpur)

Zone A and Zone B

Indonesia (Jakarta)

Zone A, Zone B, and Zone C

Europe and Americas

Germany (Frankfurt)

Zone A, Zone B, and Zone C

UK (London)

Zone A and Zone B

US (Virginia)

Zone A and Zone B

US (Silicon Valley)

Zone A and Zone B

Mexico

Zone A

Middle East

UAE (Dubai)

Zone A

SAU (Riyadh - Partner Region)

Zone A and Zone B

**Note**

CLB instances in the Thailand (Bangkok), SAU (Riyadh - Partner Region), and Mexico regions support only Layer 4 load balancing.

## Regions that support IPv6 CLB instances

**Area**

**Region**

China

China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), and China (Hong Kong)

Asia Pacific

Singapore

Europe and Americas

US (Virginia) and Germany (Frankfurt)

Middle East

SAU (Riyadh - Partner Region)

**Note**

-   CLB instances in the SAU (Riyadh - Partner Region) region support only Layer 4 load balancing.
    
-   Only Internet-facing CLB instances support IPv6.
    

## References

-   [DescribeRegions](/help/en/slb/api-server-load-balancer-instances-describeregions#doc-api-Slb-DescribeRegions): queries the most recent region list.
    
-   [DescribeZones](/help/en/slb/api-server-load-balancer-instances-describezones#doc-api-Slb-DescribeZones): queries the zones in a region.
