Cloud Data Transfer (CDT) supports multiple cloud services. This topic describes the maximum bandwidth and service level agreement (SLA) of each service supported by CDT.

## Maximum bandwidths and SLAs

The following table describes the maximum bandwidths and SLAs of pay-by-data-transfer instances for the services supported by CDT. You can specify the maximum bandwidth based on your business requirements.

**Note**

If you need a higher bandwidth, contact your account manager.

Supported service

Maximum bandwidth

SLA

Elastic Compute Service (ECS)

100 Mbit/s

-   Service availability of at least 99.995% for a multi-zone instance.
    
-   Service availability of at least 99.975% for a single-zone instance.
    

Elastic IP address (EIP)

200 Mbit/s

-   Service availability of at least 99.95% for a multi-zone instance.
    
-   Service availability of at least 99.00% for a single-zone instance.
    

Anycast EIP

1,000 Mbit/s

N/A

Internet Shared Bandwidth

2,000 Mbit/s

-   Service availability of at least 99.95% for a multi-zone instance.
    
-   Service availability of at least 99.00% for a single-zone instance.
    

IPv6 Gateway

1,000 Mbit/s

-   Service availability of at least 99.95% for a multi-zone instance.
    

Classic Load Balancer (CLB)

For each Alibaba Cloud account, the sum of the maximum bandwidths of all pay-by-data-transfer Internet-facing CLB instances in a region cannot exceed 5 Gbit/s.

-   Service availability of at least 99.95% for a multi-zone instance.
    
-   Service availability of at least 99.00% for a single-zone instance.
    

Global Accelerator (GA)

10 Gbit/s

Service availability of at least 99.95%.

Cloud Enterprise Network (CEN)

-   Region in the Chinese mainland: 1 Gbit/s.
    
-   Region outside the Chinese mainland/Cross-border: 100 Mbit/s.
    

Service availability of at least 99.95%.

Virtual Private Cloud (VPC) peering connection

-   Same region: unlimited.
    
-   Cross-region/Cross-border: 1,024 Mbit/s.
    

Intra-region: none.

Inter-region: service availability of at least 99.95%.

Express Connect Router (ECR)

-   Connections created between regions in the Chinese mainland: 1,000 Mbit/s.
    
-   Connections created between regions in the Chinese mainland and outside the Chinese mainland: 100 Mbit/s.
    
-   Connections created between regions outside China: 100 Mbit/s.
    

**Note**

If you want to create multiple connections, the data transfer fees are multiplied by N based on the single-connection data transfer fees. N indicates the number of connections, which is generally four.

Service availability of at least 99.95%.
