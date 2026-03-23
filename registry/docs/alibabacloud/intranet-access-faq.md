This topic provides answers to commonly asked questions about the private access feature of Secure Access Service Edge (SASE).

-   [How do I configure an internal DNS server to access a website that has a domain name?](#11e1ee47e2tnj)
    
-   [Why can I ping an application that cannot be accessed after it is configured?](#96bac20c4b7hu)
    
-   [Why am I unable to access internal domain names from my Windows device?](#521250ff9bne3)
    
-   [How do I handle the issue that private access is unavailable?](#5930a25aa5eij)
    
-   [Where can I download the connector component?](#d4aef0bdd74mr)
    

## How do I configure an internal DNS server to access a website that has a domain name?

-   If Alibaba Cloud DNS PrivateZone is deployed in your business network, SASE automatically synchronizes the DNS records of PrivateZone. You do not need to configure PrivateZone information in the SASE console.
    
-   If Alibaba Cloud DNS PrivateZone is not deployed in your business network, you can configure a custom DNS service. You can configure multiple server IP addresses for a DNS service. If the domain name fails to be resolved by using a server IP address, the domain name resolution request is sent to another server of the DNS service for resolution.
    

For information about SASE domain name resolution policies and how to configure a custom DNS service, see [Resolve the domain name of the office application](/help/en/sase/user-guide/application-management#45135ea20efo4).

## Why can I ping an application that cannot be accessed after it is configured?

The ping tool on the terminal cannot be used to determine whether an application is connected. macOS allows you to ping applications over all CIDR blocks. Windows allows you to ping applications only over the 198.18 and 198.19 CIDR blocks.

To determine whether an application is connected, we recommend that you run Telnet.nc or other commands.

## Why am I unable to access internal domain names from my Windows device?

In most cases, this issue occurs on Windows 11 devices. A secure DNS service is configured in the browsers of Windows 11 devices. To access internal domain names, you must disable the service. If the DNS service of Windows 11 devices is modified by security software or users to use DNS Over HTTPS (DoH), you must configure the DNS service to use a non-encryption mode.

## How do I handle the issue that private access is unavailable?

In the left-side navigation pane of the SASE console, choose Log Analysis > Log Audit. On the **Log Audit** page, check whether private access is blocked in the corresponding access log.

-   If private access is blocked, view the cause of the issue. If the application is not configured, the access permission is not assigned, or the terminal security baseline is non-compliant, private access is blocked. Modify the configurations based on the instructions.
    
-   If private access is allowed, choose **Private Access** > **Network Settings** in the left-side navigation pane of the SASE console. On the Network Settings page, check whether the application is connected.
    
    If the application is deployed in an Alibaba Cloud business network, check whether the corresponding virtual private cloud (VPC) or Cloud Enterprise Network (CEN) is enabled.
    
    If the application is deployed in a business network that is not provided by Alibaba Cloud, check whether the dedicated line connection is established and whether a SASE connector is associated with the application.
    

## Where can I download the connector component?

Copy the command on the **Connector Management** page and run the command. For more information, see [Enable network connections for services outside Alibaba Cloud](/help/en/sase/user-guide/non-alibaba-cloud-business/#section-psz-eo4-mht).
