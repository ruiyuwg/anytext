You can use session tracing to troubleshoot issues in the following scenario:

-   The IP address returned by HTTPDNS does not meet your expectations and your business quality is affected.
    

**Important**

-   Make sure that the IP address is returned by HTTPDNS. You must provide the log about obtaining the IP address from HTTPDNS and the code used to access HTTPDNS.
    
-   Due to technical limitations, Alibaba Cloud supports troubleshooting for IP addresses generated within three days.
    
-   To use session tracing, you must call the `getSessionId` method in the HTTPDNS SDK to obtain the session ID. To call the method, make sure that the SDK version meets the requirement. The SDK for Android must be of a 1.2.3 or later version, and the SDK for iOS must be of a 1.6.20 or later version.
    

## Background information

When intelligent DNS resolution is performed, the DNS server returns an IP address based on the source of the website visitor. To improve service quality, Global Server Load Balancing (GSLB) may frequently change the scheduling configurations for visitors from different sources. For example, the scheduling configurations of the Content Delivery Network (CDN) service may change every few hours. If a client obtains an incorrect scheduling result (the IP address), the user may experience slow responses or timeout requests, and the service may even become unavailable.

To troubleshoot the resolution issue, you must provide the source IP address, the resolution time, the domain name, and the list of IP addresses translated from the domain name. All the information is required for finding the scheduling record. However, the following issues may occur:

-   The client cannot provide the accurate source IP address.
    
-   Even when the source IP address is provided, the IP address is often shared and cannot be used to troubleshoot the resolution issue.
    
-   In a network environment, the carrier may provide different source IP addresses based on the destination IP addresses of visitors.
    
-   The source IP address may change during the lifecycle of an application.
    
-   The change reason of the source IP address cannot be identified.
    

## Use the unique session ID

The sessionId parameter is generated when an application is started, and the value does not change throughout the application lifecycle. HTTPDNS requests in an application lifecycle contain the same value of the sessionId parameter. The server records this parameter and generates an index. This troubleshooting solution uses the application cycle to distinguish the resolution records, which is similar to using the device ID to distinguish reported logs about application exceptions. Compared with the solution of mapping the source IP address and the resolution result, using sessionId to identify the application lifecycle is a more accurate and suitable troubleshooting method for applications.

In this solution, the value of the sessionId parameter is used to obtain the accurate source IP address of a client. The value of the sessionId parameter also can be used to trace all HTTPDNS requests in an application lifecycle. You can discover all changes to the source IP address, and obtain the change reasons by observing the value changes of the net parameter.

For example, when a client uses an SIM card issued by a Guangdong carrier to access a 4G network, the source IP address assigned to the client may also belong to the Guangdong Province. HTTPDNS returns an IP address to the client based on the source IP address that belongs to the Guangdong Province. However, when the client connects to a wired network or Wi-Fi of its current location other than the Guangdong Province, a new source IP address that belongs to the current location is assigned. As a result, the latest source IP address is inconsistent with the existing resolution result, which affects service quality. This source IP address change may occur when a traditional on-premises DNS server or HTTPDNS server is used.

## Use session tracing

The update of an application to the latest version may contain many steps and take an extended period of time. We recommend that you record the resolution results and corresponding session IDs when you access the HTTPDNS service. If a resolution exception occurs, you can refer to these records to troubleshoot the issue.

-   Use the SDK to access HTTPDNS: When the application is started, a session ID is generated. You can call the getSessionId method in the SDK to obtain the generated ID. To use the getSessionId method, make sure that the SDK version meets the requirement. The SDK for Android must be of a 1.2.3 or later version, and the SDK for iOS must be of a 1.6.20 or later version. We recommend that you update the SDK to the latest version to prevent other known issues.
    
-   Use the HTTP API to access HTTPDNS: You can configure the required parameters by referring to the source code in the HTTPDNS SDK.
    
-   When an application reports logs about the unsatisfactory quality of the scheduling service, you must record the value of the sessionId parameter.
    

You can also add the value of the sessionId parameter to your requests for services. For example, when you use the resolution result returned by HTTPDNS to request the service from the corresponding domain name, you can add the value of the sessionId parameter to the URL. This way, you can identify all scenarios where the resolution result is used.

In the session tracing solution, the following parameters are added to each request initiated by using the SDK to the HTTPDNS server. The server records the information.

-   sid=<sessionId:\[a-zA-Z0-9\]{12}>: indicates an application lifecycle. This parameter value is generated when the SDK is started.
    
-   net=<4g|3g|2g|wifi|unknown>: indicates the network type provided by the operating system when the request is initiated. You can obtain the value of the net parameter by providing the session ID.
    
-   bssid=<wifi\_bssid>: indicates the access point of a Wi-Fi network. You can obtain the value of the bssid parameter by providing the session ID.
    
-   Sample URL: http://47.74.222.190/902379/dhost=www.aliyun.com&sid=wInhNA3iM0PK&net=wifi&bssid=54e061553e79
    

## Troubleshooting scenario: unexpected resolution result

When the resolution result does not meet your expectations and you suspect an exception in the HTTPDNS service, you can perform the following steps to troubleshoot the issue:

Submit a HTTPDNS-related ticket and provide the following information:

-   The value of the sessionId parameter, resolution time, domain name, actual resolution result, and expected resolution result.
    
-   Impacts on service quality. For example, the client is routed to a service node of an incorrect region.
    
-   The service availability.
    

If service quality is affected, we recommend that you obtain a new resolution result by using the HTTPDNS or on-premises DNS server at the earliest opportunity. Then, check the service quality again.

Alibaba Cloud will provide the following results based on the session ID:

-   The source of the resolution result.
    

The resolution result may be returned by a HTTPDNS server, an on-premises DNS server, or from the persistent cache.

-   The network environment and source IP address of this resolution.
    
-   Whether the source IP address has changed in the application lifecycle due to the cross-location movement of the client.
