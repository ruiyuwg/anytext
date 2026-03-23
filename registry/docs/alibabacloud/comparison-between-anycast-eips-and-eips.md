This topic describes the differences between Anycast elastic IP addresses (Anycast EIPs) and elastic IP addresses (EIPs).

## Anycast EIP

Anycast EIPs serve as entry points to route global user traffic to regions where your applications are deployed based on the Alibaba Cloud global network, which ensures high reliability and low latency.

![AnycastEIP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5882244071/p325635.png)

After you use Anycast EIPs, inbound traffic and outbound traffic are routed in the following ways:

-   **Inbound traffic**: Inbound traffic is routed from a user to the global network of Alibaba Cloud through the access point nearest to the user.
    
-   **Outbound traffic**: Outbound traffic is routed from Alibaba Cloud to a user through the access point nearest to the user. Using Anycast EIPs maximizes the benefits of the Alibaba Cloud global network, which ensures high reliability and low latency. This solution greatly reduces the chances of network congestion caused by the high network latency of Internet connections.
    

Anycast EIPs use cold potato routing: network traffic is forwarded through the global network of Alibaba Cloud as far as possible.

## EIPs

When you use an EIP, network traffic is routed to the region where your application is deployed through the networks of Internet service providers (ISPs).

![EIPs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5882244071/p276925.png)

After you use EIPs, inbound traffic and outbound traffic are routed in the following ways:

-   **Inbound traffic**: Inbound traffic traverses through the networks of ISPs, reaches the access point in the region of your application, and finally enters the Alibaba Cloud network.
    
-   **Outbound traffic**: Outbound traffic leaves the Alibaba Cloud network through the access point in the region of your application, traverses through the networks of ISPs, and finally reaches the user.
    

EIPs use hot potato routing: inbound traffic is forwarded through the networks of multiple ISPs and then enters the region where your application is deployed on Alibaba Cloud.

## Comparison of routing methods

The following table describes the differences between the routing methods of Anycast EIPs and EIPs.

**Direction**

**Anycast EIP**

**EIP**

Inbound

Network traffic is routed to Alibaba Cloud through the access point nearest to the user.

Network traffic traverses through the networks of ISPs, reaches the access point in the region of your application, and finally enters the Alibaba Cloud network.

Outbound

Network traffic is routed from Alibaba Cloud to the user through the access point nearest to the user.

Network traffic leaves the Alibaba Cloud network through the access point in the region of your application, traverses through the networks of ISPs, and finally reaches the user.

## Configure an Anycast EIP

Anycast EIPs and EIPs are used in a similar way. To allow a cloud resource to provide Internet-facing services, you need only to associate an Anycast EIP with the cloud resource.

![Steps to create an Anycast EIP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3543781261/p276933.png)

1.  Create an Anycast EIP. For more information, see [Purchase and manage Anycast EIPs](/help/en/anycast-eip/user-guide/purchase-and-manage-anycast-eips#task-2494841).
    
2.  Associate the Anycast EIP with a cloud resource. For more information, see [Manage endpoints](/help/en/anycast-eip/user-guide/manage-endpoints#task-2494842).
    

**Note**

When you use an EIP or Anycast EIP, you do not need to configure routes to connect the region where the associated cloud resource is deployed and the location of the user.

## Benchmarking

The following figure shows the network latencies in global regions when Anycast EIPs and EIPs are used. The result shows that using Anycast EIPs can remarkably reduce the network latency.

![Network latency comparison](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3543781261/p276943.png)

The following figure shows the result of a traceroute test performed on Anycast EIPs. When Anycast EIPs are used, network traffic from China (Hong Kong) to US (Silicon Valley) is forwarded through the global network of Alibaba Cloud as far as possible. ![Test results](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3543781261/p276939.png)
