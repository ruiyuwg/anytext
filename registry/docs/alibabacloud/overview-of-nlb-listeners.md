After you create a Network Load Balancer (NLB) instance, you must configure listeners for the NLB instance. An NLB listener is used to listen for connection requests and forward requests to backend servers based on a scheduling algorithm.

## Listener protocols

**Protocol**

**Description**

**Scenario**

Reference

TCP

-   A connection-oriented protocol that requires a logical connection to be established before data can be transmitted.
    
-   Reliable data transfer.
    

-   Suitable for scenarios that prioritize reliability and data accuracy over transmission speed., such as file transmission, email sending and receiving, and remote logon.
    
-   Web applications that do not have custom requirements.
    

[Add a TCP listener](/help/en/slb/network-load-balancer/user-guide/add-a-tcp-listener#task-2224869)

UDP

-   A connectionless protocol. UDP directly transmits data packets instead of making a three-way handshake with the other party before sending data. UDP does not provide error recovery or data re-transmission.
    
-   Fast data transmission but relatively low reliability.
    

Suitable for scenarios in which real-time transmission outweighs reliability, such as video conferencing and real-time quote services.

[Add a UDP listener](/help/en/slb/network-load-balancer/user-guide/add-a-udp-listener#task-2224870)

TCPSSL

-   Encrypted data transmission that prevents unauthorized access.
    
-   Centralized certificate management service. You can upload certificates to NLB. Then, data decryption is offloaded from backend servers to NLB.
    
-   One-way and mutual authentication are supported.
    

NLB can forward encrypted TCP requests. You can use TCP/SSL in scenarios that require high security over TCP, such as large-scale TLS offloading.

[Create a TCP/SSL listener](/help/en/slb/network-load-balancer/user-guide/create-a-listener-that-uses-ssl-over-tcp#task-2224872)

## Port settings

**Port type**

**Description**

**Limit**

Listener ports (frontend ports)

Used by NLB to receive and forward requests to backend servers.

For each NLB instance:

-   TCP and UDP listeners can use the same listener port. For example, you can specify port 80 for a TCP listener and a UDP listener.
    
-   However, you cannot specify the same port for a TCP listener and a TCP/SSL listener because both listeners listen for TCP requests. For example, you cannot specify port 80 for a TCP listener and a TCP/SSL listener.
    

Service ports (backend ports)

Used by backend servers to receive requests.

An NLB instance can forward requests from a listener port to multiple backend ports that are used by different backend servers of the NLB instance.

For each NLB instance:

You can associate a backend port with listeners that use different protocols. For example, you can associate a backend port with a TCP listener that listens on port 80 and a TCP/SSL listener that listens on port 81.
