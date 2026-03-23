Edge Node Service (ENS) offers an all-in-one edge service based on the edge nodes and networks of an Internet service provider (ISP). ENS provides distributed and elastic computing resources that are deployed close to end users. ENS helps reduce computing costs, response latency, and the loads on the nodes in the cloud. This topic describes how to manage ENS nodes in an ACK Edge cluster.

## Background information

Container Service for Kubernetes (ACK) Edge clusters provide management for ENS instances. With ACK Edge clusters, you can unify the management of ENS instances deployed across multiple regions and ISPs through containerization. These clusters are integrated with ENS disks and the Edge Load Balancer (ELB) feature of ENS, offering cloud-native storage and network solutions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7271795671/CAEQUBiBgMCt_tCo2BkiIDNiYjQxZGFmM2I4ZjQxODFhYmZmY2Q4Y2JkYjk5ZTk14665041_20240905164514.056.svg)

## Usage notes for ENS nodes

-   Centralized management of multi-region ENS instances can be achieved by establishing a management connection to the API server through a public network or [leased line](/help/en/ena/product-overview/what-is-ena).
    
-   Exposing a Service in multiple regions by using an ELB instance is supported. For more information, see [Use ELB instances to expose Services in multiple regions](/help/en/ack/ack-edge/user-guide/use-elb-to-expose-services-in-multiple-regions).
    
-   You can use the Container Storage Interface (CSI) plug-in to manage statically and dynamically provisioned ENS disk volumes. For more information, see [Use ENS disks](/help/en/ack/ack-edge/user-guide/use-ens-disks).
    

## Add ENS nodes

1.  Create an edge node pool in the ACK Edge cluster. Make sure that all ENS instances in the node pool are within the same virtual private cloud (VPC). For more information, see [Create an edge node pool](/help/en/ack/create-an-edge-node-pool-1).
    
2.  Add the ENS instances to the edge node pool in the ACK Edge cluster. For more information, see [Add an edge node](/help/en/ack/ack-edge/user-guide/add-an-edge-node).
