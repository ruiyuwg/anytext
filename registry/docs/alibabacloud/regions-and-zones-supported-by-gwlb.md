This topic describes the regions and zones in which Gateway Load Balancer (GWLB) is available.

## Regions and zones

Regions are geolocations of data centers. After you create a cloud resource, you cannot change the region in which the cloud resource is deployed. Each region has multiple isolated locations known as zones. Each zone has its own independent power supply and network.

Zones within the same region can communicate with each other over an internal network. Fault isolation can be enabled between zones. This way, if faults occur in a zone, other zones are not affected and continue to run as expected. Regions are independent of each other. Zones are isolated from each other. The network latency between zones within the same region is low.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4686838671/CAEQLhiBgIDnjcfRlxkiIDY4MWExOGMxZjljMDQ4ODhiN2VhOTc3ODg3NDRiOTcz4032923_20231011182953.888.svg)

To provide more stable and reliable load balancing services, GWLB distributes requests across multiple zones and supports real-time disaster recovery. If one zone is down, GWLB distributes requests to other zones.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4686838671/CAEQLhiBgMDc8NvRlxkiIDNjN2YzOGQzN2MzYTRiMDE5OWY2NjYyN2M1YjdjYmM14032923_20231011182953.888.svg)

## Regions and zones in which GWLB is available

The regions and zones in which GWLB is available in the following table are for reference only. The information on the buy page shall prevail.

**Area**

**Region**

**Zone**

Asia Pacific - China

China (Ulanqab)

Zone B and Zone C

China (Hangzhou)

Zone J and Zone K

China (Shanghai)

Zone L, Zone M, Zone N, and Zone E

China (Beijing)

Zone F, Zone I, Zone K, and Zone L

China (Shenzhen)

Zone C, Zone D, Zone E, and Zone F

China (Hong Kong)

Zone B, Zone C, and Zone D

Asia Pacific - others

Singapore

Zone B and Zone C

Malaysia (Kuala Lumpur)

Zone A and Zone B

Japan (Tokyo)

Zone A, Zone B, and Zone C

Middle East

SAU (Riyadh - Partner Region)

Zone A and Zone B

UAE (Dubai)

Zone A and Zone B
