This topic provides a high-level overview of the steps required to build and launch a website on Alibaba Cloud, from preparing a server to configuring your domain name.

## Procedure

1.  Prepare an Elastic Compute Service (ECS) instance.
    
    Website requirements vary, so choose an instance configuration that matches the size of your site and expected traffic. Basic configurations are sufficient for small websites. For more information, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    
    -   For information about instance families and selecting an instance type, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) and [Instance type selection](/help/en/ecs/user-guide/best-practices-for-instance-type-selection#concept-cnt-yn3-wdb).
        
    -   You can upgrade or downgrade your instance to align with business needs. For more information, see [Instance type changes](/help/en/ecs/user-guide/instance-families-that-support-instance-type-changes#concept-mdh-2rb-1fb).
        
2.  Configure security group rules.
    
    By default, ports 22 and 3389 that are required to connect to an instance are enabled when you create a security group. Enable ports 80 and 443 to allow website access. Ensure these ports are enabled for inbound traffic in the security group. If not, configure them manually. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
3.  Deploy the website.
    
    The topics under the current chapter describe deployment solutions for commonly used websites. You can design, develop, and deploy various types of websites based on your needs.
    
4.  Purchase a domain name.
    
    Search for and purchase your desired domain name if it is available. For more information, see [Register a generic domain name](/help/en/dws/user-guide/how-to-register-a-domain-name#task-1830383).
    
    For the differences between `.com` and `.net` domain name suffixes, see [Domain name differences](/help/en/dws/support/domain-name-differences#concept-wvr-zcd-b2b).
    
5.  Apply for an Internet Content Provider (ICP) filing for the domain name.
    
    **Important**
    
    If the instance that hosts your website is located in a region within the Chinese mainland, you must apply for an ICP filing for your domain name. Otherwise, this step can be skipped.
    
    1.  Prepare for the ICP filing.
        
        Document requirements for ICP filing vary by province. Prepare the necessary documents according to the [MIIT's ICP filing regulations for different regions](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-regulations-of-the-miit-for-different-regions#concept-wl4-tql-zdb). For more information, see [Overview](/help/en/icp-filing/basic-icp-service/user-guide/overview#concept-w3d-nql-zdb).
        
    2.  Submit the ICP filing application.
        
6.  [Resolve the domain name](/help/en/dns/novice-guide-dns). After you configure the DNS settings for your domain, users can access your website by using the domain name.
    
    To associate the domain name with an IP address, add an A record. For more information, see [Add DNS records](/help/en/dns/add-a-dns-record).
    
7.  (Optional) Enable secure HTTPS access.
    
    SSL Certificates Service allows you to redirect HTTP traffic that is destined for your websites or mobile applications to HTTPS traffic at minimal costs. You can use SSL certificates to authenticate users and encrypt data. For more information, see [What is Certificate Management Service?](/help/en/ssl-certificate/product-overview/what-is-certificate-management-service#concept-xn2-52p-ydb) If you purchase and download an SSL certificate, the methods to install the certificate on servers vary based on the server environment. For more information, see [Deploy SSL certificates](/help/en/ssl-certificate/installation-overview/#task-2078352).
    

You have now completed the basic steps to build your website. Visit your domain name in a browser to verify that it is working correctly.

## References

-   For information about how to select Alibaba Cloud services and configurations based on your business needs, see [Architecture Consulting Service](https://www.alibabacloud.com/services/consulting/architecture?spm=a2796.208404.1107812.2.8e1068ae2GDLmg).
    
-   If you want to migrate your business from your data center or a hosted data center to Alibaba Cloud, you can request technical support from Alibaba Cloud for cloud migration. For more information, see [Cloud Migration Service](https://www.alibabacloud.com/services/cloudmigration?spm=a2796.208404.1107812.6.8e1068ae2GDLmg).
