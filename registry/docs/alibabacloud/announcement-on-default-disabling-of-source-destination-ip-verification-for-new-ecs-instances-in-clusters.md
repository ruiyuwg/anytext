Starting at 00:00 on April 22, 2025, Alibaba Cloud Container Service for Kubernetes (ACK) disables the [default source/destination IP check in new ECS instances and network interfaces](https://www.alibabacloud.com/notice/the_new_instancesnetwork_interfaces_of_ecs_have_sourcedestination_ip_check_enabled_by_default_461?_p_lc=1) created in ACK clusters. This is due to the network connectivity failures of cluster containers using Terway and Flannel network plug-ins.

## **Impact**

[Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) or [Terway](/help/en/ack/product-overview/terway) network plug-in versions lower than the requirements specified in the [solutions](#ad54fed33f8cr) below may experience container network connectivity issues.

To determine if ECS instances created in your ACK cluster after 00:00 on April 22, 2025 are affected, verify that the [source/destination IP check](/help/en/ecs/user-guide/source-and-destination-check) is disabled.

## **Solutions**

ACK has disabled the source/destination IP check by default in newer versions of relevant components. [Update](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview#d41e32) the following components to the specified versions during off-peak hours.

**Note**

If your cluster's Kubernetes version is below 1.24, first [upgrade it](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/) to version 1.24 or later.

-   Update the [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) component to v2.10.4 or later.
    
-   For clusters using network plug-ins named terway-eniip or terway-eni, update [Terway](/help/en/ack/product-overview/terway) to the following versions based on your cluster Kubernetes versions:
    
    **Kubernetes version**
    
    **Minimum Terway version**
    
    ≥ 1.31
    
    1.13.6
    
    1.30
    
    1.9.14
    
    1.24, 1.26, 1.28
    
    1.8.17
    

If you have any questions about this change, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact us.

## **References**

-   [Source/destination IP check](/help/en/ecs/user-guide/source-and-destination-check)
    
-   [The new instances/network interfaces of ECS have source/destination IP check enabled by default](https://www.alibabacloud.com/notice/the_new_instancesnetwork_interfaces_of_ecs_have_sourcedestination_ip_check_enabled_by_default_461?_p_lc=1)
