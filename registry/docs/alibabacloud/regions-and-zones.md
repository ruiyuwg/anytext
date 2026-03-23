This topic describes the concepts of Alibaba Cloud regions and zones. This topic also describes how to select regions and zones and provides a list of regions and zones that are supported by Alibaba Cloud Realtime Compute for Apache Flink.

## **Background**

-   Regions are geographical locations where Alibaba Cloud data centers are deployed. Regions are divided based on cities where data centers reside. For example, the China (Beijing) region indicates that the data center is located in Beijing, China.
    
-   Zones in a region are physical areas that have independent power supplies and network facilities. Fault isolation is applied among zones to prevent the spread of faults and ensure service continuity.
    
    **Note**
    
    Fault isolation is not suitable for major disasters or major power failures.
    

## **Precautions**

-   The region and zone that you select when you create a Realtime Compute for Apache Flink workspace cannot be changed after the workspace is created.
    
-   You can adjust the availability of resources in different regions based on the resources that are consumed by your business. You may not be able to purchase resources because they are sold out. For more information, see the resources available on the buy page of Realtime Compute for Apache Flink.
    

## **Region and zone selection**

**Item**

**Description**

Network communication between services

We recommend that you deploy Realtime Compute for Apache Flink in the same zone and region as its upstream and downstream storage services. This way, these cloud services can communicate with each other over the internal network. This reduces access latency and accelerates service access.

**Note**

A region consists of multiple zones. Zones in the same region are interconnected over a low-latency internal network. Zones in different regions are isolated from each other.

Resource price

The resource price may vary based on the region. Check the price details on the buy page of Realtime Compute for Apache Flink.

We recommend that you select a region based on your budget.

Network latency

Zones in the same region are interconnected over a low-latency internal network. Zones in different regions are isolated from each other. If your region is close to the region in which resources are deployed, the network latency is low and the access speed is fast.

We recommend that you evaluate your business requirements to find the balance between high availability and low latency.

High availability and disaster recovery

-   If you have high requirements for disaster recovery capabilities, we recommend that you deploy your business in different zones to ensure fault isolation among zones and support cross-zone disaster recovery.
    
-   If you want to minimize the network latency between instances, we recommend that you create instances in the same zone.
    

## **Regions**

**Note**

The supported regions and zones may change. The available regions and zones are displayed on the buy page of Realtime Compute for Apache Flink. If you have any questions about or requirements on regions and zones, contact technical support. For more information, see [Technical support](/help/en/flink/realtime-flink/support/technical-support).

##### **Asia Pacific - China**

##### **Asia Pacific - Others**

##### **Europe & Americas**

China (Hangzhou)

**Note**

Zone H in the China (Hangzhou) region is no longer available for purchase. You can only scale out the existing resources of this zone.

Japan (Tokyo)

Germany (Frankfurt)

China (Shanghai)

Singapore

UK (London)

China (Beijing)

Malaysia (Kuala Lumpur)

US (Virginia)

China (Zhangjiakou)

**Note**

The China (Zhangjiakou) region is no longer available for purchase. You can only scale out the existing resources of this region.

Indonesia (Jakarta)

US (Silicon Valley)

China (Shenzhen)

China (Chengdu)

China (Hong Kong)

## **FAQ**

Q: What do I do if a message indicating that resources are sold out appears?

A: Alibaba Cloud Realtime Compute for Apache Flink provides services in multiple regions across the globe. Each region has one or more zones. If resources in the zone that you selected are sold out, use one of the following methods to purchase resources:

-   Select another region.
    
-   Select another zone.
    

**Note**

If no resources are available after you change the region or zone, we recommend that you wait for a specific period of time before you purchase resources. Resources are dynamically changed. If resources are insufficient, Alibaba Cloud replenishes resources at the earliest opportunity.
