Cloud Connect Network (CCN) is a device access matrix that consists of distributed Alibaba Cloud access gateways. It is an important component of Smart Access Gateway (SAG). After you attach an SAG device to a CCN, the device can connect your on-premises network to Alibaba Cloud through the CCN.

When you create a CCN, you must select an area. For information about the areas that CCN supports, see [CCN areas](#table-8z4-0g8-dlt).

**Note**

An SAG device can be attached only to a CCN in the same area. Cross-area attachment is not supported.

You can also connect a CCN to a Cloud Enterprise Network (CEN) to establish full-mesh connectivity between your on-premises network and your cloud network.

-   If the CCN and the cloud network are in the same area, the on-premises network associated with the CCN can directly communicate with cloud resources.
    
    For example, to connect a branch in Hangzhou to a Virtual Private Cloud (VPC) in the China (Shanghai) region using an SAG device, you must connect the CCN in the Chinese mainland that is associated with the Hangzhou branch to the CEN that contains the VPC.
    
-   If the CCN and the cloud network are in different areas, after you connect them to a CEN, you must also purchase a bandwidth plan for the CEN and set the cross-region bandwidth to enable cross-region communication between the on-premises network and cloud resources.
    

For more information, see [What is Cloud Enterprise Network?](/help/en/cen/product-overview/what-is-cen/#concept-2090845).

## Mapping between CCN areas and CEN regions

CCNs are defined by areas, not regions. Each CCN area corresponds to multiple CEN regions. A CCN in an area can connect to networks in any of its corresponding regions.

**CCN area**

**Corresponding CEN regions**

The Chinese mainland

China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Hangzhou), China (Shanghai), China (Chengdu)

China (Hong Kong)

China (Hong Kong)

Singapore

Singapore

Malaysia (Kuala Lumpur)

Malaysia (Kuala Lumpur)

Indonesia (Jakarta)

Indonesia (Jakarta)

Japan (Tokyo)

Japan (Tokyo)

Germany (Frankfurt)

Germany (Frankfurt)

For example, a CCN in the Chinese mainland, VPC1 in the China (Qingdao) region, VPC2 in the China (Beijing) region, and VPC3 in the China (Hong Kong) region are connected to the same CEN. In this case:

-   The on-premises network associated with the CCN in the Chinese mainland can directly communicate with VPC1 in the China (Qingdao) region and VPC2 in the China (Beijing) region. You do not need to set cross-region bandwidth.
    
-   To enable communication between the on-premises network associated with the CCN in the Chinese mainland and VPC3 in the **China (Hong Kong) region**, or between VPC1 in the China (Qingdao) region and VPC2 in the China (Beijing) region, you must set cross-region bandwidth.
    

**Note**

You do not need to set cross-region bandwidth for communication between different regions within the same area. You must set cross-region bandwidth for communication between different areas (cross-border).
