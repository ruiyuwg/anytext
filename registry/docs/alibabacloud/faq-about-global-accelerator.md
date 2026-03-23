This topic provides answers to frequently asked questions (FAQs) about Global Accelerator (GA).

-   [What are the use cases for GA?](#section-pq5-kyd-7y4)
    
-   [Can a GA instance created using one Alibaba Cloud account accelerate access to a backend service that is deployed using a different account?](#section-w6t-ibw-jex)
    
-   [Can clients use the CNAME of a GA instance to accelerate access to a backend service?](#section-qez-s2b-wo3)
    
-   [Does the CNAME of a GA instance support region-specific DNS resolution?](#section-0em-1s9-c1f)
    
-   [How long does it take for a DNS record to take effect in a GA instance?](#c414bd54083om)
    
-   [Can GA process TCP and UDP fragments?](#section-mfs-ybf-y9g)
    
-   [Can I use ICMP Ping and TCPing to test the acceleration performance of UDP or TCP listeners?](#section-b24-j59-z95)
    
-   [How many GA instances can I create using an Alibaba Cloud account?](#section-mdj-lw6-axy)
    
-   [Can a client that cannot access the Internet use GA?](#section-y4l-0ov-69t)
    
-   [What is the minimum bandwidth that I can specify for a single acceleration area?](#section-rq1-4rc-qsc)
    
-   [Does GA have a caching mechanism?](#section-h5u-nyf-rch)
    
-   [Why can't clients access backend services after I configure a basic GA instance?](#section-4el-vnx-jtr)
    
-   [How can I test if the IPv6 Translation Service of GA is working correctly?](#section-1rz-bcq-qlh)
    
-   [Why isn't the IPv6 Translation Service of GA working?](#section-q8e-f24-vr1)
    
-   [Why can't clients access backend services after I configure a standard GA instance?](#section-qc8-3sv-2b3)
    
-   [Can GA automatically adjust bandwidth when traffic bursts occur?](#e5520b2d96av4)
    

## What are the scenarios of GA?

GA can be used to accelerate access to Office Automation (OA) systems, web applications, and game servers. For more information, see [Scenarios](/help/en/ga/product-overview/scenarios#concept-2348362).

## Can a GA instance created using one Alibaba Cloud account accelerate access to a backend service that is deployed on Alibaba Cloud using a different account?

No, this is not directly supported. However, a workaround is available.

If your backend service is deployed on Alibaba Cloud using an Alibaba Cloud account that is different from the account used to activate GA, you can still use GA. Note the following when you configure GA:

-   The Alibaba Cloud account that you use to activate GA must have purchased enhanced or premium acceleration bandwidth.
    
-   When you configure the endpoint group, select \*\*Off Alibaba Cloud\*\* for the backend service.
    

## Can clients use the CNAME of a GA instance to accelerate access to a backend service?

No, they cannot.

The CNAME of a GA instance is an internal service domain name and does not have an ICP filing. Therefore, clients cannot directly use the CNAME of a GA instance to access the backend service.

To accelerate access to a backend service with a GA instance, add a CNAME record on your DNS platform that maps the domain name of the backend service to the CNAME of the GA instance. For more information, see [Accelerate access to a backend service with a specific domain name](/help/en/ga/getting-started/accelerate-transmission-of-network-traffic-destined-for-a-specified-domain-name#task-2384284).

## Does the CNAME of a GA instance support region-specific DNS resolution?

Yes, it does.

You can configure a CNAME record on your DNS platform to map your service domain name to the CNAME of the GA instance. When a client accesses the backend service using the domain name, the GA CNAME is resolved to the accelerated IP address of the optimal acceleration node based on the client's region.

## **How long does it take for a DNS record to take effect in a GA instance?**

If the backend service type of the endpoint is a custom domain name, the actual amount of time it takes for the DNS record to take effect depends on the following factors:

-   The TTL value for DNS server caching. You can specify the value when you configure DNS records.
    
-   The TTL value for GA caching: By default, GA obtains DNS records every 15 seconds.
    

## Can GA process TCP and UDP fragments?

No, it cannot.

## Can I use ICMP Ping and TCPing to test the acceleration performance of UDP or TCP listeners?

No, you cannot.

GA supports the proxy response mechanism. ICMP Ping and TCPing requests are responded to and closed in the acceleration region and are not passed to the backend servers. ICMP Ping and TCPing can be used to test the network connectivity between the client and the acceleration region, but cannot be used to test the latency.

For more information about how to test acceleration performance, see [Test the acceleration performance of a GA instance](/help/en/ga/use-cases/use-the-network-dial-test-tool-to-test-the-acceleration).

## How many GA instances can I create using an Alibaba Cloud account?

The default quota for standard GA instances is 10. You can [request a quota increase](/help/en/ga/user-guide/manage-ga-quotas#task-2382446) on the **Quota Management** page.

There is no quota limit on basic GA instances.

## Can a client that cannot access the Internet use GA?

No, it cannot.

A client must be able to access the Internet to use GA.

## What is the minimum bandwidth that I can specify for a single acceleration area?

-   If the accelerated IP address is an **Elastic IP Address**, the bandwidth is 2 Mbps.
    
-   If the accelerated IP address is an **Anycast EIP**, the bandwidth is 200 Mbps.
    

## Does GA have a caching mechanism?

No, it does not.

## After I configure a basic GA instance, clients cannot access the backend services. What are the possible causes?

-   Requests are blocked by network ACLs or security group rules in the virtual private cloud (VPC) where the endpoint is located. For more information about how to configure network ACLs and security group rules, see [Create and manage network ACLs](/help/en/vpc/work-with-network-acls#task-189639) or [Modify security group rules](/help/en/ecs/user-guide/modify-a-security-group-rule#concept-d2r-dsz-ggb).
    
-   The IPv4 gateway of the VPC where the endpoint is located is or was active. If so, you must add a route that points to the IPv4 gateway in the VPC route table. For more information about how to add a route that points to an IPv4 gateway in a VPC route table, see [Create and manage an IPv4 gateway](/help/en/vpc/user-guide/create-and-manage-an-ipv4-gateway#section-l0k-okc-3q2).
    
-   The endpoint is a secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI), but the secondary private IP address is not configured on the ENI.
    
    -   For more information about how to view the configuration of an ENI, see [Configure and identify the IP addresses of secondary ENIs](/help/en/ecs/user-guide/configure-a-secondary-eni#task-1563594).
        
    -   For more information about how to configure a secondary private IP address on an ENI, see [Secondary private IP addresses](/help/en/ecs/user-guide/assign-secondary-private-ip-addresses#concept-ff2-hbk-ggb).
        

## How do I test whether the IPv6 Translation Service of GA is effective?

If you use GA to enable the IPv6 Translation Service for a web service, you can use the curl command on an IPv6 client to access the backend IPv4 web service to test if the IPv6 Translation Service is working correctly. Perform the following steps:

**Note**

This topic uses Alibaba Cloud Linux 2 for testing. The test commands may vary based on the operating system. For more information about the specific test commands, see the user guide for your operating system.

1.  From an IPv6 client in the acceleration area of the GA instance, open a command-line window.
    
2.  Run the following command to test if the IPv6 client can access the backend IPv4 web service.
    
    ```
    curl -6 -g http://[<Accelerated IP address assigned by GA>]
    ```
    
    The test result shows that the IPv6 client can access the backend IPv4 web service through the accelerated IP address.![实现IPv6转换](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7177604961/p443931.png)
    

## Why does the IPv6 Translation Service of GA fail to work?

The IPv6 Translation Service of GA may not work for several reasons. Check the following items to troubleshoot the issue:

-   The GA configuration is incomplete.
    
    A complete configuration includes at least an acceleration area, a listener (for a standard GA instance), an endpoint group, and an endpoint.
    
-   You can check if your client supports IPv6 Internet access.
    
    You can run the ping command over IPv6 to test the accelerated IP address. If the test fails, enable the IPv6 feature for the client and ensure that it can access the Internet.
    
-   The DNS record for the domain name is missing or incorrect.
    
    You can use a command such as dig to check the domain's resolution information. Make sure that an AAAA record that points to the accelerated IPv6 address or a CNAME record that points to the GA CNAME is configured. For more information about how to add a DNS record, see [Configure DNS resolution](/help/en/ga/use-cases/accelerate-an-ipv4-service-for-ipv6-clients#section-44k-c4p-ydr).
    
-   The client's region is not an acceleration area.
    
    The GA CNAME is region-specific and is affected by the acceleration area configuration. Cross-region access may fail. For example, if the acceleration area includes only regions in the Chinese mainland, the CNAME cannot be resolved from outside the Chinese mainland. To fix this, add an acceleration area outside the Chinese mainland or switch to an AAAA record.
    
-   A security policy or firewall on the origin server is blocking traffic.
    
    If a security policy is configured, you must allow traffic from the GA public IP addresses.
    
-   Some third-party IPv6 detection websites may provide inaccurate results due to DNS synchronization delays or different detection mechanisms. If a third-party tool reports a failure, use an IPv6 client to directly access the website to verify whether IPv6 is working as expected.
    

## After I configure a standard GA instance, clients cannot access the backend services. What are the possible causes?

If clients cannot access a backend service after you configure a standard GA instance, check the following items to identify the cause:

-   The backend service is not working correctly.
    
    Try to access your backend service directly. If you cannot access it, check the origin server for issues.
    
-   The client's region is not an acceleration area.
    
    The GA CNAME is region-specific and is affected by the acceleration area configuration. Cross-region access may fail.
    
    For example, if the acceleration area includes only regions outside the Chinese mainland (excluding Hong Kong (China)), the CNAME record cannot take effect in the Chinese mainland. As a result, access from clients in the Chinese mainland fails. You can use one of the following solutions:
    
    -   Solution 1: Configure [intelligent DNS resolution based on the client's region](/help/en/dns/intelligent-dns-resolution#p-6bb-dpe-3pc). Resolve requests from outside the Chinese mainland to the GA CNAME and resolve requests from the Chinese mainland directly to the origin server.
        
        In this scenario, traffic from outside the Chinese mainland is accelerated by GA. Traffic from the Chinese mainland bypasses GA and connects directly to the origin server, which may result in high latency and packet loss due to carrier and international link limitations.
        
    -   Solution 2: Add an acceleration area in the Chinese mainland to the GA instance and use the default DNS line to resolve all traffic to the GA CNAME.
        
        GA automatically routes requests to the nearest accelerated IP address based on the client's region. Traffic from outside the Chinese mainland is routed to an accelerated IP address outside the Chinese mainland. Traffic from the Chinese mainland is routed to an accelerated IP address in the Chinese mainland.
        
        **Note**: If you add an acceleration area in the Chinese mainland for HTTP or HTTPS services, you must obtain an [ICP filing](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview#task-2038407) for your custom domain name. Otherwise, access acceleration will fail.
        
-   A security policy on the backend server is blocking traffic.
    
    Check whether traffic from the public IP address of the endpoint is allowed. You can view the public IP address on the **Listener Details** tab.
    
-   Check whether the service port for the service domain name is added to the listener of the GA instance.
    
    For example, if a web application uses both port 80 and port 443, you must add both ports to the GA listener. Otherwise, requests to a port that is not added to the listener will fail.
    
-   Check if the origin server is deployed on Alibaba Cloud. If not, check if the [Preserve Client IP](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386) feature is enabled.
    
    The **Preserve Client IP** feature requires the origin server to support the Proxy Protocol. If your origin server does not support it, access will fail. [Disable the Preserve Client IP feature](/help/en/ga/support/listener-faq#section-6d5-hhi-rc0) and try to access the service again.
    
-   Traffic exceeds the bandwidth limit of the acceleration area.
    
    -   On the **Monitoring Chart** tab, check the number of connections and the bandwidth. A DDoS attack may be in progress. For more information, see [View the monitoring information of an instance](/help/en/ga/user-guide/monitoring-and-alerting#section-rpx-6yw-d4n).
        
    -   You can adjust the bandwidth limit of the acceleration area to meet your business requirements. For more information about how to modify the bandwidth limit of an acceleration area, see [Modify an acceleration area](/help/en/ga/user-guide/add-and-manage-acceleration-areas#section-fso-jtt-u3n).
        
-   The client IP address is not in the access control whitelist. Check whether [access control](/help/en/ga/user-guide/access-control#task-2087382) is enabled for the GA instance and whether the client IP address is in the access control whitelist.
    
-   Verify that the DNS record for the domain name is configured correctly and resolves to the CNAME or accelerated IP address of the GA instance.
    
    You can run commands such as dig to check the configuration. For more information, see [Configure a CNAME](/help/en/ga/user-guide/add-a-cname-record-for-a-domain-name#task-2382948).
    

## **Can GA automatically adjust the client access bandwidth and the Alibaba Cloud internal network transmission bandwidth when traffic bursts occur?**

Whether GA can automatically adjust bandwidth depends on the billing method of the GA instance:

-   Pay-as-you-go: Yes. The bandwidth is automatically adjusted based on service traffic, up to the bandwidth limit of the acceleration area.
    
-   Subscription: No. The bandwidth cannot be automatically adjusted. The bandwidth is limited by the basic bandwidth plan and the maximum bandwidth of the GA instance specification.
