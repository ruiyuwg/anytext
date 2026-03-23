Smart Access Gateway (SAG) vCPE provides an image that can be deployed on your host. After you deploy the SAG vCPE image on your host, the host serves as a customer-premise equipment (CPE) device. SAG vCPE allows you to connect networks to Alibaba Cloud in a more flexible way.

## Scenarios

You can deploy the SAG vCPE image in various types of networks. This allows you to connect networks to Alibaba Cloud in a more flexible way.

You can deploy the SAG vCPE image in hosts of the following network types:

-   You can deploy the SAG vCPE image on an on-premises server. This allows you to connect on-premises networks to Alibaba Cloud.
    
-   You can also deploy the SAG vCPE image on an instance of a cloud service provider to establish network communication across clouds. For example, you can deploy the SAG vCPE image on an Alibaba Cloud Elastic Compute Service (ECS) instance, an Amazon Web Services (AWS) Elastic Compute Cloud (EC2) instance, a Microsoft Azure virtual machine (VM), or a Google Cloud VM.
    

![使用场景-国际站](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6347144661/p291625.png)

## Environment requirements

Before you deploy the SAG vCPE image on a host, make sure that the host meets the following requirements:

-   The host uses the 64-bit Ubuntu 18.04 operating system.
    
-   The host uses the 3.10.0-957.21.3.el7.x86\_64 kernel or a later kernel version.
    
-   The host has an independent network interface controller (NIC) that allows the instance to connect to the Internet.
    
-   The host supports remote logons.
    
-   No service system is deployed on the host.
    
-   The host allows requests from the following ports and protocols.
    
    **Protocol**
    
    **Port Number**
    
    UDP
    
    53, 500, 4500, 789, 801, 12345, 27890, 33336, 43337, 56543, 62345, and 10000 to 10100
    
    TCP
    
    53, 80, 443, 8443, and 10000 to 10100
    
    ICMP
    
    N/A
    
-   If traffic throttling, UDP flood attack check, or ICMP flood attack detection is enabled for your host, we recommend that you disable the preceding features to ensure network connectivity.
    
-   If you use an ECS or Edge Node Service (ENS) instance as a host, make sure that the instance has at least one vCPU and 2 GB of memory. The following table describes the performance of different specifications.
    
    **Specification**
    
    **Performance**
    
    1 Core - 2 GB
    
    The bandwidth for encrypted connections in the private network can reach 200 Mbit/s and higher (the packet length in the performance test is 1,024 bytes).
    
    2 Core - 4 GB (recommended)
    
    The encrypted private bandwidth can reach 350 Mbit/s and higher (the packet length in the performance test is 1,024 bytes).
    

## Procedure

![部署流程-202107](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3363990361/p294938.png)

1.  Create an SAG vCPE instance.
    
    After you create an SAG vCPE instance in the SAG console, the SAG vCPE instance can be associated with two SAG vCPE devices. A serial number and a key are assigned to each SAG vCPE device. You can use the serial number and key to associate an SAG vCPE instance with an SAG vCPE device.
    
2.  Deploy the SAG vCPE image.
    
    After you deploy the SAG vCPE image on the host, the host can serve as an SAG vCPE device. You must register the serial number and key of the SAG vCPE device to the host. You can use the serial number and key to associate the SAG vCPE device with an SAG vCPE instance. Alibaba Cloud checks the validity of the serial number and key of each SAG vCPE device. If the serial number and key are invalid, the SAG vCPE device cannot be connected to Alibaba Cloud. This ensures network security.
    
3.  Configure networks on the Alibaba Cloud side.
    
    After you deploy the SAG vCPE image, you must advertise routes to Alibaba Cloud and associate the SAG vCPE instance with a Cloud Connect Network (CCN) instance. Then, you can connect the SAG vCPE device to Alibaba Cloud.
    
4.  Configure networks on the customer side.
    
    You must configure routes for your on-premises networks to route traffic from on-premises networks to the SAG vCPE device, and then to Alibaba Cloud.
    
5.  Test network connectivity.
    

## References

-   [Use SAG vCPE to connect AWS resources to Alibaba Cloud resources](/help/en/sag/user-guide/use-sag-vcpe-to-connect-aws-resources-to-alibaba-cloud-resources#task-1920116)
    
-   [Use SAG vCPE to connect Microsoft Azure resources to Alibaba Cloud resources](/help/en/sag/user-guide/connect-microsoft-azure-resources-to-alibaba-cloud-resources-through-sag-vcpe#task-1920116)
    
-   [Use SAG vCPE to connect an ACK cluster with an on-premises Kubernetes cluster](/help/en/ack/use-sag-vcpe-to-connect-an-ack-cluster-with-an-on-premises-kubernetes-cluster#task-2143737)
