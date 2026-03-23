This topic describes the regions and zones in which Network Load Balancer (NLB) is available.

## Regions and zones

Regions are geolocations of data centers. After you create a cloud resource, you cannot change the region in which the cloud resource is deployed. Each region has multiple isolated locations known as zones. Each zone has its own independent power supply and network.

Zones within the same region can communicate with each other over an internal network. Fault isolation can be enabled between zones. If one zone is down, other zones in the same region are not affected. Regions are independent of each other. Zones of different regions are isolated from each other. However, low-latency connections can be established between zones within the same region.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7957052771/CAEQUBiBgIDu9c612BkiIDhhNDYyNDQwNTllYzQ3MDA4MzcyNGU0YjZkZjcxMWFl4654744_20240903102831.350.svg)

To provide more stable load balancing services, NLB distributes network traffic across specified zones to implement disaster recovery. If one zone is down, other zones take over to maintain service availability.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7957052771/CAEQTxiBgIC9vMyW2BkiIGRkMGM5ZjczMGM4MzQzN2Q4ZDViZjMyODQ3NjBjZjU54653614_20240830112614.433.svg)

## Regions and zones in which NLB is available

The following table is for reference only. The information on the [buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_nlb_public_intl) of NLB shall prevail.

**Area**

**Region**

**Zone**

China

China (Hangzhou)

Zone B, Zone G, Zone J, Zone K, Zone I, and Zone H

China (Shanghai)

Zone B, Zone D, Zone E, Zone F, Zone G, Zone L, Zone M, and Zone N

China (Shenzhen)

Zone C, Zone D, Zone E, and Zone F

China (Heyuan)

Zone A and Zone B

China (Guangzhou)

Zone A and Zone B

China (Qingdao)

Zone B and Zone C

China (Beijing) region

Zone F, Zone G, Zone H, Zone I, Zone J, Zone K, and Zone L

China (Zhangjiakou)

Zone A, Zone B, and Zone C

China (Ulanqab)

Zone A, Zone B, Zone C, and Zone D

China (Chengdu)

Zone A and Zone B

China (Hong Kong)

Zone B, Zone C, and Zone D

Asia Pacific

Philippines (Manila)

Zone A and Zone B

Thailand (Bangkok)

Zone A and Zone B

Singapore

Zone A, Zone B, Zone C, and Zone D

Japan (Tokyo)

Zone A, Zone B, Zone C, and Zone E

South Korea (Seoul)

Zone A and Zone B

Malaysia (Kuala Lumpur)

Zone A, Zone B, and Zone C

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

SAU (Riyadh - Partner Region)

Zone A and Zone B

UAE (Dubai)

Zone A

## **Regions that support dual-stack**

**Area**

**Region**

China

China (Hangzhou), China (Beijing), China (Shenzhen), China (Shanghai), China (Qingdao), China (Zhangjiakou), China (Chengdu), China (Guangzhou), China (Hong Kong), China (Heyuan), and China (Ulanqab)

Asia Pacific

Thailand (Bangkok), Philippines (Manila), Singapore, Japan (Tokyo), South Korea (Seoul), Malaysia (Kuala Lumpur), and Indonesia (Jakarta)

Europe and Americas

Germany (Frankfurt), UK (London), US (Virginia), US (Silicon Valley), and Mexico.

Middle East

SAU (Riyadh - Partner Region)

**Note**

For more information, see [Protocol versions](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-instances/#section-9l1-0rw-luv).

## **References**

-   [DescribeRegions](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-describeregions): queries the most recent region list.
    
-   [DescribeZones](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-describezones): queries the zones in a region.
