The traffic amount found by using the monitoring and usage analytics feature or the usage statistics feature is the actual traffic amount that is generated. The logged traffic amount is the traffic amount that is consumed at the application layer. The actual traffic amount for which you are charged or the traffic amount found by using the monitoring and usage analytics feature is 1.1 times the logged traffic amount due to insertion of TCP/IP packet headers and retransmission of TCP packets.

## Problem description

Why is the traffic amount found by using the monitoring and usage analytics feature or the usage statistics feature in the DCDN console or by calling API operations different from the logged traffic amount? In most cases, the logged traffic amount is less than the traffic amount that is found by using the monitoring and usage analytics feature or the usage statistics feature.

## Possible causes

The logged traffic amount that is recorded by the response size field in logs includes only the traffic amount that is collected at the application layer. The actual amount of network traffic at the network layer is 7% to 15% higher than the traffic amount that is collected at the application layer. The difference between traffic at the network layer and application layer includes the following items:

-   Insertion of TCP and IP packet headers
    
    Before data transmission, traffic at the application layer needs to be encapsulated into TCP packets by using the TCP protocol at the transport layer and then encapsulated into IP packets by using the IP protocol at the network layer. The maximum size of an IP packet is 1,500 bytes, in which the TCP and the IP protocol headers occupy 40 bytes in total (20 bytes each). Traffic consumed by the headers is not collected at the application layer. Therefore, the 40 bytes are not logged. Traffic consumed by the headers accounts for at least 2.74% (40/(1,500-40)) of logged traffic. The smaller the amount of application layer data, the larger the proportion. In most cases, the proportion is approximately 3%.
    
-   Retransmission of TCP packets
    
    When network congestion or device failures occur due to complex network conditions on the Internet, approximately 3% to 10% of packets are lost. The retransmission of lost packets is processed by the protocol stack of the OS kernel and cannot be logged at the application layer. The retransmission of TCP packets also consumes traffic.
    

Based on the preceding additional traffic-consuming items, the actual traffic amount is the sum of the traffic amount that is recorded by the response size field in logs and 7% to 15% of additional traffic. Bills are generated based on the actual traffic amount. DCDN includes only 10% of additional traffic in the actual traffic amount. Therefore, you are charged for the traffic amount that is 1.1 times the traffic amount recorded by the response size field in logs.
