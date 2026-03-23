EMQ uses Network Load Balancer (NLB) to withstand concurrent connections from hundreds of millions of devices. NLB helps EMQ build a high-performance, high-reliability, and enterprise-class Internet of Things (IoT) platform at a low cost.

## **About EMQ**

EMQ is a world-leading software provider of IoT data infrastructure and messaging platforms. EMQ is headquartered in Shanghai, and dedicated to empowering enterprises and developers with high-performance, high-reliability, and high-security messaging platforms.

## **Challenges**

As an innovation-driven company, EMQ is committed to solving the challenges faced by IoT platforms, including connectivity among large numbers of devices, messaging efficiency, and data security. The core product of EMQ is EMQX, which is a highly scalable and reliable open-source messaging platform. EMQX provides various protocols and access modes for connecting to devices, including MQTT, CoAP, and WebSocket. EMQX can connect to and manage millions of IoT devices.

Previously, EMQ used private protocols and TCP, with the aim to improve security based on TLS encryption. However, private protocols are not compatible with HTTPS and traditional load balancers do not support SSL offloading over TCP. To address this issue, EMQ has to configure SSL offloading on backend servers. This increases the complexity of O&M. Concurrent connections and traffic spikes also remain a challenge.

## **Solution**

Replace existing load balancers and NGINX clusters with NLB, which supports SSL offloading and certificate management. EMQ uses NLB to build a large-scale distributed network of MQTT servers for its EMQX messaging platform. This solution enables EMQX to withstand up to 100,000,000 concurrent connections and improves service scalability at the cost of only one NLB instance.

## **Benefits**

-   High performance: NLB is a high-performance and high-scalability service that can withstand tens of millions of concurrent connections.
    
-   High reliability: NLB maintains a high bandwidth capacity while implementing throttling to ensure service availability.
    
-   Low cost: NLB supports pay-by-LCU. You are charged based on the number of Load balancer Capacity Units (LCUs) that are consumed. This prevents resource waste.
