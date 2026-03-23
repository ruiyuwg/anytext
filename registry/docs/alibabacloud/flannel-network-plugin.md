This topic describes the network communication configured with Flannel as the default container network plug-in when using ACK Edge clusters. It covers network access solutions for public network mode and private network mode, and the implementation of cloud-edge O&M tunnels.

## Use Flannel as a container network plug-in

By default, ACK Edge clusters use Flannel as the Container Network Interface (CNI) network plug-in and have VXLAN enabled. The Flannel network plug-in ensures that the CIDR block of pods does not overlap with the CIDR block of the virtual private cloud (VPC). The CIDR block of pods is evenly divided and allocated to the nodes in the cluster. Each pod on a node is assigned an IP address that belongs to the CIDR block of the node. The number of IP addresses that can be assigned to pods depends on the mask of the CIDR block of pods.

### **Express Connect circuit type**

-   You can forward requests from hosts in VPCs to workloads in data centers through Express Connect circuits. Virtual Extensible Local Area Network (VXLAN) can be used to establish network connections between data centers and the cloud. For more information, see [Express Connect](/help/en/express-connect/product-overview/what-is-express-connect/).
    

-   Flannel uses UDP protocol and port 8472 to create the VXLAN tunnel. Keep the container network connected and do not use any security rule to block this port.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0821077371/CAEQJxiBgMD2_qWKhBkiIGY1Mzk5MmI5MGI2OTQwODViYTYwY2FjNDRhMjdjZTFk4409586_20240509143740.692.svg)

### Public network type

Computing devices in VPCs and data centers are not in the same network domain, making the host network unreachable. Therefore, container network communication has the following features:.

-   Containers in the VPC cannot communicate with containers in the data center.
    
-   Containers distributed across multiple data centers or edge devices cannot communicate with each other.
    
-   Containers in the same VPC or data center allow mutual access within the same network domain.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0821077371/CAEQJxiBgMD9o9CDhRkiIDViNzk5MDZkNDE3YzRkMTk5MTI4YWM2ZjdmMTkxNTk54409586_20240509145521.013.svg)

For more information about the cloud-edge O&M tunnel and how to establish a cloud-edge network tunnel for container monitoring, O&M, and data transmission, see [cross-domain operations, administration, and management communication widget Raven](/help/en/ack/ack-edge/user-guide/cloud-edge-communication-component-raven-overview).

**Important**

Do not handle business traffic on this tunnel. Business traffic over the public network VPN tunnel cannot guarantee its stability.

## **Precautions**

If you need an API server to access pods or Services in data centers when Express Connect circuits are used, you can choose an on-cloud node to serve as a proxy. To perform this operation, make sure that the version of the edge-controller-manager component is 2.1 or later.

Run the following command to select an on-cloud node:

```
kubectl label node node-xxx node-role.alibabacloud.com/cloud-gateway=
```
