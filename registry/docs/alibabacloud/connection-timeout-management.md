An Elastic Compute Service (ECS) instance uses security groups to control inbound and outbound traffic. Security groups record each established connection to ensure that packets can be delivered as expected. If a connection is idle for an extended period of time, the connection resources of the ECS instance may be exhausted. As a result, new connections cannot be established or managed as expected, and packets may be lost. You can specify timeout periods for idle connections on an elastic network interface (ENI) to release resources that are occupied by connections that are no longer active.

## **Connections of an ECS instance**

A connection, also called a session, is the process of connecting a client to a server and transferring data between the client and the server.

A connection is uniquely defined by the network communication quintuple that consists of a source IP address, a destination IP address, a source port, a destination port, and a protocol. The connections of an ECS instance include TCP, UDP, and Internet Control Message Protocol (ICMP) connections. If your business is sensitive to concurrent network connections, select an instance of an instance type of which **the maximum number of connections** meets your business requirements. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

## **Timeout periods for idle connections**

If no data is exchanged over an established TCP connection for a period of time, the connection may not be closed. The connection may only temporarily have no data transmission activities. However, idle connections that exist for an extended period of time consume the resources on ECS instances and may cause the maximum number of concurrent connections to be reached. As a result, new connection requests may be rejected.

UDP is stateless. However, UDP still occupies resources, such as the network bandwidth, memory, and port resources of the system, especially in large-scale applications or high-frequency data exchange scenarios.

You must specify appropriate timeout periods for idle TCP connections and UDP flows on an ECS instance. This helps optimize network performance, improve resource utilization, and enhance security.

-   **Improve resource utilization**. If a TCP connection on an ECS instance is idle for an extended period of time without being closed or reused, the connection consumes resources on the instance, such as memory resources. You can shorten timeout periods for idle connections to effectively release resources to active connections.
    
    You can also specify an appropriate timeout period for UDP flows to prevent unnecessary resource consumption.
    
-   **Enhance security**. A short timeout period helps reduce attacks that exploit long-lived connections, such as DDoS and brute-force attacks.
    

However, a too short timeout period may affect the normal operation of applications that require long-lived connections, such as specific file transfer services. Before you change a timeout period for idle connections, we recommend that you fully understand the characteristics of the services that run on your ECS instance and the requirements of the services on network conditions.

## **Specify timeout periods for idle connections**

**Note**

-   To minimize latency issues in connections, make sure that all devices through which data flows pass use matching timeout settings.
    
    If your ECS instance is used together with a Network Load Balancer (NLB) or Classic Load Balancer (CLB) instance, we recommend that you specify matching timeout periods for idle connections on the ENIs bound to the ECS instance and the listeners of the NLB or CLB instance. For information about how to configure a listener for an NLB or CLB instance and specify timeout periods for idle connections, see [NLB listeners](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-listeners/).
    
-   The new timeout periods take effect only on new connections and do not affect existing connections.
    

ECS supports the following types of timeout periods for idle connections:

-   **Timeout Period for Established TCP Connections**: the timeout period for idle TCP connections in the `ESTABLISHED` state. A TCP connection is considered idle if no data is transmitted over the connection for a period of time that exceeds the preceding timeout period. The connection may be automatically closed by a network device such as a router or a firewall or by the operating system. Unit: seconds.
    
    -   Minimum value: 30. Maximum value: 910. Default value: 910.
        
    -   Valid values: 30, 60, 80, 100, 200, 300, 500, 700, and 910.
        

-   **TCP Wait and Close Timeout Period**: the timeout period for TCP connections in the `TIME_WAIT` or `CLOSED` state. To close a TCP connection, four handshakes are required. After one end sends the FIN (end) flag bit, which indicates that the end has no data to send, the end waits for the ACK (acknowledgment) from the other end before closing the connection. If no ACK is received during the waiting process, the TCP wait and close timeout period starts. Unit: seconds.
    
    -   Valid values: 3 to 15.
        
    -   Default value: 3.
        
        **Note**
        
        If the associated ECS instance is used together with an NLB or CLB instance, the default timeout period for TCP connections in the `TIME_WAIT` state is 15 seconds.
        
    -   You can set the timeout period for TCP connections in the `TIME_WAIT` and `CLOSED` states to an integer in the range of 3 to 15.
        

-   **UDP Flow Timeout Period**: The UDP flow timeout period refers to the timeout period for a UDP flow during the process of receiving or sending UDP packets. A UDP flow can be a series of related UDP packets, such as a sequence of UDP packets in a real-time video stream. If no new UDP packets are received or sent for a UDP flow within the UDP flow timeout period, the UDP flow may end or an exception may occur. Unit: seconds.
    
    -   Minimum value: 10. Maximum value: 100.
        
    -   Default value: 30.
        
        **Note**
        
        If the associated ECS instance is used together with an NLB or CLB instance, the default timeout period for UDP flows is 100 seconds.
        
    -   Valid values: 10, 20, 30, 60, 80, and 100.
        

### **Procedure**

You can view and specify connection timeout periods when or after you create an ENI.

#### **Specify timeout periods for idle connections when you create an ENI**

**Note**

You can also call the [CreateNetworkInterface](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createnetworkinterface) operation to create an ENI and specify the **TcpEstablishedTimeout**, **TcpClosedAndTimeWaitTimeout**, and **UdpTimeout** parameters in the **ConnectionTrackingConfiguration** parameter set to specify timeout periods for the corresponding connections.

1.  Go to [ECS console - Elastic Network Interfaces](https://ecs.console.alibabacloud.com/networkInterfaces).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click **Create ENI**.
    
4.  In the **Session Timeout Periods** section, specify timeout periods for different types of connections.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5169017371/p907012.png)
    

#### **Specify timeout periods for idle connections on an existing ENI**

**Note**

-   You can also call the [ModifyNetworkInterfaceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifynetworkinterfaceattribute) operation to modify the attributes of an ENI and specify the **TcpEstablishedTimeout**, **TcpClosedAndTimeWaitTimeout**, and **UdpTimeout** parameters in the **ConnectionTrackingConfiguration** parameter set to specify timeout periods for the corresponding connections.
    
-   To query the connection timeout periods on an ENI, you can call the [DescribeNetworkInterfaceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describenetworkinterfaceattribute) operation and set the **Attribute** parameter to **connectionTrackingConfiguration**.
    

1.  Go to [ECS console - Elastic Network Interfaces](https://ecs.console.alibabacloud.com/networkInterfaces).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the ID of the ENI that you want to manage to go to the ENI details page.
    
4.  In the **Session Timeout Periods** section, view the values of the **Timeout Period for Established TCP Connections**, **TCP Wait and Close Timeout Period**, and **UDP Flow Timeout Period** parameters. You can click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1214961171/p460470.png) icon that corresponds to a parameter to change the value of the parameter.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8780819371/p910204.png)
