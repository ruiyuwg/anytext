ApsaraDB RDS is integrated with various data protection capabilities.

## DDoS attack prevention

Services that are exposed to the Internet are at risk of DDoS attacks. When a DDoS attack is detected, the ApsaraDB RDS security system first attempts to scrub the inbound traffic. If traffic scrubbing is ineffective or the threshold for blackhole filtering is reached, blackhole filtering is triggered to ensure the availability of your RDS instance. For more information, see [Protection against attacks](/help/en/rds/support/intrusion-prevention#t8045.html).

**Important** We recommend that you access RDS instances over an internal network to prevent DDoS attacks.

## Access control

-   You can configure an IP address whitelist for your RDS instance. Only requests that originate from the specified IP addresses are allowed to your RDS instance.
    
-   Resources between Alibaba Cloud accounts are logically isolated. Each account can only view and manage its own databases.
    

For more information, see [Access control](https://www.alibabacloud.com/help/doc-detail/53617.htm).

## System security

-   ApsaraDB RDS is protected by multiple layers of firewalls that can effectively block a variety of attacks.
    
-   You cannot directly log on to the physical hosts where ApsaraDB RDS instances are deployed. Only the RDS instances can be accessed through endpoints and ports.
    
-   ApsaraDB RDS instances cannot initiate external connections. They can only receive access requests.
    

For more information, see [Network isolation](https://www.alibabacloud.com/help/doc-detail/53618.htm).

## Professional security team

Technical support is provided by Alibaba Cloud experts to ensure security of your RDS instances.

## Get started with ApsaraDB RDS

-   [Overview](/help/en/rds/getting-started#t7872.html)
-   [Learning Path](https://www.alibabacloud.com/getting-started/learningpath/rds)
