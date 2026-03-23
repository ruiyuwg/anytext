If an IP whitelist is incorrectly configured for a database, connections to the database fail. This topic describes how to troubleshoot issues related to an IP whitelist.

## **Check whether an IP whitelist is correctly configured**

You can use Telnet to check whether an IP whitelist is correctly configured. The following figure shows the returned message in Telnet:

![图1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4324102071/p719010.png)

If the client receives the handshake messages that are returned by the MySQL database and the messages display the version number of the MySQL database such as 5.7.32 in the preceding figure, the IP whitelist is correctly configured. Otherwise, the IP address whitelist is not correctly configured. For more information, see [Configure an IP whitelist](/help/en/polardb/polardb-for-mysql/user-guide/configure-an-ip-whitelist).

## Troubleshoot issues related to an incorrectly configured IP whitelist

Before you connect to a database cluster, you can verify whether you can connect to the cluster by using the primary IP address. If you cannot connect to the cluster by using the primary IP address, an issue occurs in the IP whitelist. You can use Telnet or tcpdump to troubleshoot the issue.

### **Incorrectly configured public VIPs of an Enterprise Edition cluster in the whitelist**

-   If you access a public virtual IP address (VIP) of an Enterprise Edition cluster over Telnet but the connection to Telnet fails, an issue shown in the following figure occurred.
    
    ![图2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4324102071/p719101.png)
    
-   If packets are captured on the client, the SYN message in the first step of TCP three-way handshake continues to be sent.
    

### **Incorrectly configured VPC endpoint of an Enterprise Edition cluster or incorrectly configured public or VPC endpoint of a Standard Edition cluster in the whitelist**

-   If you access a VPC endpoint of an Enterprise Edition cluster or a public or VPC endpoint of a Standard Edition cluster and connect to Telnet, but the client cannot receive the handshake message returned by the MySQL database, an issue shown in the following figure occurred.
    
    ![6C37AC08-B74B-475e-83CB-5E99EFD78F0B.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4324102071/p719115.png)
    
-   If packets are captured on the client, the SYN and ACK messages in the second step and the ACK message in the third step of TCP three-way handshake continue to wait for a response.
    

## **Solution**

You can temporarily add a CIDR block 0.0.0.0/0 to an IP whitelist to check whether your database service can be accessed. If your database service can be accessed, the IP whitelist is incorrectly configured.

In this case, you need to correctly add IP addresses to the IP whitelist and delete the CIDR block 0.0.0.0/0 from the IP whitelist. For more information about how to configure an IP whitelist, see [Configure an IP whitelist](/help/en/polardb/polardb-for-mysql/user-guide/configure-an-ip-whitelist).
