Valued Alibaba Cloud users, Cloud Enterprise Network (CEN) optimized Enterprise Edition transit routers that are connected to virtual private clouds (VPCs) on May 31, 2022. Optimized Enterprise Edition transit routers that are connected to VPCs support traffic forwarding over the shortest path.

## Optimization details

Before the optimization, you must specify the primary and secondary zones when you connect an Enterprise Edition transit router to a VPC. The VPC must have at least one vSwitch in each zone of the transit router. Each vSwitch occupies at least one IP address. When the VPC is connecting to the Enterprise Edition transit router, an elastic network interface (ENI) is automatically created on each vSwitch of the VPC. Each ENI occupies one IP address of the vSwitch. The ENIs forward network traffic between the VPC and the Enterprise Edition transit router.

This solution has the following limits:

-   The primary and secondary zones of an Enterprise Edition transit router cannot be modified. All VPCs that are connected to the Enterprise Edition transit router must use the same primary and secondary zones as the first VPC connected to the Enterprise Edition transit router.
    
-   Network traffic from VPCs is sent to the ENI of the primary zone and then forwarded to the Enterprise Edition transit router. The network traffic is sent to the ENI of a secondary zone only if the ENI of the primary zone is down. This increases network latency.
    
    The network traffic between two VPCs must be forwarded by the ENI of the primary zone even if the VPCs are deployed in the same secondary zone. ![How network traffic is forwarded before the optimization](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6312307561/p447509.png)
    

To address these issues, VPC-connected Enterprise Edition transit routers are optimized. Optimized features include:

-   When you connect an Enterprise Edition transit router to a VPC, you can specify one or more zones, which can be used by different VPCs. You can specify the vSwitch on which you want an Enterprise Edition transit router to create an ENI. The ENI forwards network traffic between the VPC and the Enterprise Edition transit router. For more information, see [How a VPC connection works](/help/en/cen/user-guide/connect-vpcs#section-hqv-wg2-oh2).
    
-   If you specify multiple zones when you connect an Enterprise Edition transit router to a VPC, the Enterprise Edition transit router will create an ENI on the vSwitch in each zone. Network traffic from a VPC is forwarded by the nearest ENI. For more information, see [How routes are selected for a VPC connection](/help/en/cen/user-guide/connect-vpcs#section-hqv-wg2-oh2).
    

![How network traffic is forwarded after the optimization - March 2023](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0797670861/p586721.png)

## Optimized transit routers

The following table lists the Enterprise Edition transit routers that are optimized.

**Area**

**Region**

Region in the Chinese mainland

China (Hangzhou), China (Shanghai), China (Nanjing - Local Region), China (Fuzhou - Local Region), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), and China (Chengdu)

Asia Pacific

Singapore, China (Hong Kong), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Japan (Tokyo), South Korea (Seoul), and Thailand (Bangkok)

Europe

Germany (Frankfurt) and UK (London)

North America

US (Virginia) and US (Silicon Valley)

## Impacts

-   If you create an Enterprise Edition transit router in a region from the preceding table, the Enterprise Edition transit router supports the optimized features when you connect the Enterprise Edition transit router to a VPC.
    
-   If you upgrade a Basic Edition transit router in a region from the preceding table to Enterprise Edition, the Enterprise Edition transit router supports the optimized features when you connect the Enterprise Edition transit router to a VPC.
    
-   Enterprise Edition transit routers that are created before the optimization do not support the optimized features.
    

## References

-   For more information about how to connect an optimized Enterprise Edition transit router to a VPC, see [Create a VPC connection](/help/en/cen/user-guide/connect-vpcs#task-1989141).
    
-   For more information about how to connect an Enterprise Edition transit router that is not optimized to a VPC, see [How do I use an unoptimized Enterprise Edition transit router to create a VPC connection?](/help/en/cen/support/faq-1#section-n6i-6gc-ghi).
