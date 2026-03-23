Understanding default application ports helps you configure security group rules accurately. This ensures your server provides services on the correct ports for tasks such as connecting to an instance using Secure Shell (SSH) or sending email through an SMTP service. This topic describes the common ports for Elastic Compute Service (ECS) instances and provides example use cases.

## Background information

When you add a security group rule, you must specify a port or port range. The security group then decides whether to forward data to the ECS instance based on the Allow or Deny action.

For example, when you use an SSH client such as Xshell to remotely connect to an ECS instance, the security group detects an SSH request from the public or internal network. The security group then checks for an inbound rule that allows the request's source IP address on port 22. The connection is allowed only if a matching rule exists.

**Important**

Some carriers mark ports such as 25, 135, 139, 444, 445, 5800, and 5900 as high-risk ports and block them by default. Even if you open these ports in your security group rules, they may be inaccessible to users whose internet carriers block them. Therefore, we recommend running your services on other, non-high-risk ports.

For more information about ports used by Windows Server applications, see [Service overview and network port requirements for Windows](https://support.microsoft.com/zh-cn/kb/832017) in the Microsoft documentation.

## Common ports

The following table lists the default ports for typical applications.

**Port**

**Service**

**Description**

21

FTP

The File Transfer Protocol (FTP) port, used for uploading and downloading files.

22

SSH

The SSH port, used to connect to Linux instances using a command-line interface or remote connection software such as PuTTY, Xshell, or SecureCRT. For specific instructions, see [Connect to a Linux instance using a password](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-1#concept-rsl-2vx-wdb).

23

Telnet

The Telnet port, used for unencrypted remote logins.

25

SMTP

The Simple Mail Transfer Protocol (SMTP) port, used for sending email.

**Note**

port 25 on ECS instances is restricted by default. We recommend that you use an SSL-encrypted port (typically port 465) to send email.

53

DNS

The Domain Name System (DNS) port.

**Note**

If you use an outbound whitelist, you must allow traffic on UDP port 53 for domain name resolution to function.

80

HTTP

The HTTP port, used for services such as IIS, Apache, and Nginx.

To learn how to troubleshoot failures on port 80, see [Check whether TCP port 80 works as expected](/help/en/ecs/user-guide/check-whether-tcp-port-80-is-available).

110

POP3

The Post Office Protocol 3 (POP3) port, used for receiving email.

143

IMAP

The Internet Message Access Protocol (IMAP) port, used for receiving email.

443

HTTPS

The HTTPS port, providing encrypted communication for web traffic.

1433

SQL Server

The TCP port for SQL Server, used to provide external services.

1434

SQL Server

The UDP port for the SQL Server Browser service, which provides connection information like the server's TCP port number and IP address.

**Important**

You only need to open UDP port 1434 if you use the SQL Server Browser service. If you do not use this service, we recommend closing or restricting access to this port to enhance security.

1521

Oracle

The default port for Oracle databases.

3306

MySQL

The default port for MySQL databases.

3389

Windows Server Remote Desktop Services

The Remote Desktop Protocol (RDP) port, used to connect to Windows instances with remote desktop clients. For specific instructions, see [Connect to a Windows instance by using Remote Desktop or Windows App](/help/en/ecs/user-guide/connect-to-a-windows-instance-by-using-a-username-and-password#concept-n31-wyx-wdb).

8080

Proxy port

Commonly used for web proxy services and as an alternative to port 80. When you access a website or use a proxy server that uses this port, you must append `:8080` to the IP address or domain name (for example, `192.0.2.1:8080`). Apache Tomcat, for example, defaults to this port.

137, 138, 139

NetBIOS protocol

The NetBIOS protocol is often used for file and printer sharing in Windows and for Samba services.

-   UDP ports 137 and 138 are used for name resolution and datagram services.
    
-   TCP port 139 is used for session services, such as file and print sharing.
    

5432

PostgreSQL

The default port for PostgreSQL databases.

6379

Redis

The default port for Redis databases.

## Use case examples

The following table shows some common use cases for these ports and their corresponding security group rule settings. For more examples, see [Guidelines for using security groups and use cases](/help/en/ecs/user-guide/security-groups-for-different-use-cases#concept-ngr-vht-xdb).

**Use case**

**Network type**

**Direction**

**Policy**

**Protocol**

**Port range**

**Object type**

**Authorization object**

**Priority**

Connect to a Linux instance over SSH

Virtual Private Cloud (VPC)

Inbound

Allow

Custom TCP

SSH (22)

CIDR block

0.0.0.0/0

1

Classic network

Internet inbound

Connect to a Windows instance over RDP

VPC

Inbound

Allow

Custom TCP

RDP (3389)

CIDR block

0.0.0.0/0

1

Classic network

Internet inbound

Ping an ECS instance from the Internet

VPC

Inbound

Allow

All ICMP

\-1/-1

CIDR block or security group

Specify based on the selected Object type

1

Classic network

Internet inbound

Use an ECS instance as a web server

VPC

Inbound

Allow

Custom TCP

HTTP (80)

CIDR block

0.0.0.0/0

1

Classic network

Internet inbound

Upload or download files over FTP

VPC

Inbound

Allow

Custom TCP

20/21

CIDR block

Specified IP address range

1

Classic network

Internet inbound
