You can deploy applications by using Edge Node Service (ENS) to reduce latency and improve the experience of users who access your services. In addition to user experience, you need to consider service continuity. This topic describes the key capabilities that help you build high-availability edge computing applications.

## **Shared responsibilities**

Service continuity in the cloud is the shared responsibility of Alibaba Cloud and customers.

Alibaba Cloud is responsible for the stability of ENS and ensures that the availability of ENS is not lower than the agreed value in the service level agreement (SLA).

Customers are responsible for the architecture design of service systems to ensure that failover can be implemented when necessary to ensure service continuity.

We recommend that you implement service continuity capabilities for your edge computing applications based on the solutions that are described in this topic.

## Best practices

### **Multi-instance disaster recovery**

To ensure high availability, applications must be able to handle heavy loads to prevent service interruptions due to single points of failure (SPOFs). You can use Edge Load Balancer (ELB) to implement this feature. For more information, see [What is ELB?](/help/en/ens/what-is-elb) You can deploy applications on multiple ENS instances and then use ELB to balance traffic among the instances. If an ENS instance fails, ELB can redirect traffic to other ENS instances to ensure service continuity.

### **Cross-region primary/secondary disaster recovery**

#### **Application primary/secondary switchover**

When you deploy an application on an edge node, you need to deploy backups of the application on other edge nodes or in other Alibaba Cloud regions to prevent service interruptions due to region-level faults.

If a region-level fault occurs, you can use Global Traffic Manager (GTM) to automatically point the domain name to applications in other regions. This way, traffic can be redirected to ensure service continuity. For more information, see [What is GTM?](/help/en/dns/what-is-gtm-1)

When you design a secondary service, you can deploy the application to other ENS regions or nearby Alibaba Cloud regions. Note that when you enable the secondary service, the latency when users access the service may increase.

#### **Data backup and restoration**

Traffic redirection during failures can help prevent service interruptions due to region-level failures. However, data services in the failed regions may become unavailable.

To ensure that your services work as expected when you enable the application in the secondary region, you need to design an appropriate solution based on your business requirements to synchronize data from the primary region to the secondary region during non-failure periods.

For example, you can perform the following operations:

-   In the application, write data to the storage service in the current region and the secondary region. This way, the data in the secondary region is almost the same as the data in the primary region. However, the write latency may increase.
    
-   After the application writes data to the storage service in the primary region, asynchronously synchronize the data to the storage service in the secondary region. This way, the write latency does not increase. However, when you enable the service in the secondary region, the data may be different from that in the primary region.
    

In addition, you need to design a restoration mechanism for your application. After the fault in the primary region is rectified, you need to synchronize the new data that is recorded by the service in the secondary region during the fault period to the primary region. This way, users do not experience service data loss when the primary region is restored.

## **Deployment architecture**

You can combine the preceding practices to maximize service availability and ensure service continuity. The following figure shows a system deployment architecture that uses ELB, application primary/secondary switchover, data backup, and restoration capabilities.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5979426071/2305c0bb96kbk.svg)

You can use the capabilities based on your business requirements.

-   The primary service of the system is deployed on an edge node in Switzerland. The primary service uses an architecture that includes multiple instances and ELB to prevent service interruptions due to SPOFs.
    
-   The secondary service is deployed on a nearby edge node in Germany. The secondary service also uses an architecture that includes multiple instances and ELB. The secondary service can also be deployed in a nearby Alibaba Cloud region. If the primary region works as expected, data is synchronized from the primary region to the secondary region. This ensures that the data is consistent with the data of the primary region when the secondary region is enabled.
    
-   GTM is integrated into the domain name resolution system.
    
    -   GTM periodically performs a health check on the primary service based on the frequency that you specify.
        
    -   If the primary service works as expected, the domain name points to the primary service.
        
    -   If the primary service does not work as expected, the domain name points to the secondary service after the number of failed health checks that are performed by GTM reaches the limit that you specify. This implements automatic primary/secondary switchover.
        
-   During a failure of the primary service, traffic is redirected to the secondary service, and data is recorded in the storage service of the secondary service. After the fault is rectified, you need to synchronize the data from the secondary service to the primary service.
