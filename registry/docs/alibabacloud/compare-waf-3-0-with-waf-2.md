Web Application Firewall (WAF) 3.0 is a new version of WAF that provides improved access modes, protection configuration logic, and billing rules. This topic describes the advantages of WAF 3.0 over WAF 2.0.

**Important**

-   WAF 3.0 is different from WAF 2.0 in terms of its underlying architecture, specifications, configuration logic, and user experience. This is one of the reasons why an Alibaba Cloud account cannot have a WAF 2.0 instance and a WAF 3.0 instance at the same time. If you purchased a WAF 2.0 instance, you are directed to the WAF 2.0 interface when you log on to the WAF console. If you purchased a WAF 3.0 instance, you are directed to the WAF 3.0 interface when you log on to the WAF console.
    
-   WAF 2.0 instances cannot be automatically migrated to WAF 3.0. If you want to migrate a WAF 2.0 instance to WAF 3.0, join the DingTalk group (group ID: 34657699) for technical support.
    

## Access modes

WAF supports the CNAME record and cloud native access modes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6438032271/CAEQLBiBgIDExKOGiBkiIGJhYmVkNTVjYTFlZjRiYjFiYjc3YTQwN2FhNzAzNTMy3963382_20230830144006.372.svg)

**Access mode**

WAF 3.0

WAF 2.0

CNAME record mode (Figure 1)

Supported.

-   To use this mode, you must update your CNAME record with your DNS provider to map your domain name to the CNAME that is provided by WAF. This routes requests that are destined for your domain name to WAF. WAF blocks malicious requests and forwards normal requests to the origin server.
    
-   WAF detects and forwards requests as a reverse proxy cluster.
    

For more information, see [CNAME record mode](/help/en/waf/web-application-firewall-3-0/user-guide/add-a-domain-name-to-waf-in-cname-record-mode#task-1796689).

Supported.

Cloud native mode (Figure 2)

Supported.

-   To use this mode, you must add traffic redirection ports to WAF. This way, the gateways of the instances automatically change the routes to redirect web service traffic to WAF. WAF blocks malicious requests and forwards normal requests to the origin server.
    
-   WAF detects and forwards requests as a reverse proxy cluster.
    

For more information, see [Add a Layer 7 CLB instance to WAF](/help/en/waf/web-application-firewall-3-0/user-guide/add-a-layer-7-clb-instance-to-waf#task-2261261), [Add a Layer 4 CLB instance to WAF](/help/en/waf/web-application-firewall-3-0/user-guide/add-a-layer-4-clb-instance-to-waf#task-2265030), and [Add an ECS instance to WAF](/help/en/waf/web-application-firewall-3-0/user-guide/add-an-ecs-instance-to-waf#task-2265135).

Supported.

Cloud native (Figure 3)

Supported.

If your web services use Application Load Balancer (ALB), Microservices Engine (MSE), or Function Compute, we recommend that you use this mode.

-   WAF 3.0 is integrated as an SDK module into the gateways of cloud services to detect and protect traffic. To prevent compatibility and stability issues, WAF does not forward traffic.
    
-   You can protect cloud services by using WAF without the need to modify the DNS record or configure certificates, ports, or back-to-origin algorithms. This simplifies the setup procedures and reduces the impacts on your services.
    
-   WAF 3.0 can provide services to all regions where cloud-native Alibaba Cloud services are available.
    
-   In this mode, the capabilities of WAF 3.0 is encapsulated in SDKs and integrated into self-managed gateways, such as NGINX, in multi-cloud or hybrid-cloud environments.
    
-   Web services in multiple environments can be added to WAF 3.0 based on network environments and compliance requirements and managed in the WAF 3.0 console.
    

For more information, see [Enable WAF protection for an ALB instance](/help/en/waf/web-application-firewall-3-0/user-guide/add-an-alb-instance-to-waf#task-2538763), [Enable WAF protection for an MSE instance](/help/en/waf/web-application-firewall-3-0/user-guide/add-an-mse-instance-to-waf#task-2241140), and [Enable WAF protection for a custom domain name bound to a web application in Function Compute](/help/en/waf/web-application-firewall-3-0/user-guide/add-a-custom-domain-name-in-function-compute-to-waf#main-2293214).

Not supported.

## Protection configuration

**Protection configuration**

WAF 3.0

WAF 2.0

Configure a protection rule for multiple protected objects

Supported.

You can add domain names or instances as protected objects to WAF 3.0. You can also add protected objects to a protected object group.

-   You can configure a protection rule for a protected object group. The protection rule applies to all protected objects in the protected object group.
    
-   You can also add a domain name on a cloud service instance that is added to WAF as a protected object and then separately configure custom protection rules for the domain name.
    

Not supported.

Domain names can be protected objects of WAF 2.0. You can configure protection rules only for one protected object at a time. For example, if you want to configure the same protection rule for 100 domain names, you must perform the configuration 100 times.

Configure protection rules for instances that are added to WAF in transparent proxy mode

Supported.

Instances that are added to WAF in cloud native mode automatically become protected objects. You can configure and modify protection rules for the instances.

Not supported.

If an instance that is added to WAF in transparent proxy mode has 100 domain names, you must add all 100 domain names to WAF before you modify the protection rules for the instance. If you do not add all domain names to WAF, only the default protection rules apply to the domain names. You cannot modify the default protection rules.

Globally view protection rules

Supported.

You can view and manage protection rules in the corresponding section of each protection module in the WAF 3.0 console. You can view the protection templates of each protection module and protected objects or protected object groups associated with the protection templates. You can search for a protection rule by rule ID.

Not supported.

You cannot query the protection rules that are configured for a domain name in a centralized manner.

Modify default protection rules

Supported.

You can modify default protection templates in WAF 3.0. If you want all default protection rules to use the Monitor mode for new domain names, you can set the protection action in the default protection template to Monitor.

Not supported.

You can configure protection rules for domain names only after the domain names are added to WAF 2.0.

## Advantages of WAF 3.0 over WAF 2.0

The following features are supported only by WAF 3.0:

-   Custom response rules
    
    Custom response rules allow you to configure the custom block page that is returned by WAF to a client when WAF blocks a request from the client. You can configure the status code, response headers, and response body of the block page. For more information, see [Configure custom response rules to configure custom block pages](/help/en/waf/web-application-firewall-3-0/user-guide/configure-custom-response-rules-to-configure-custom-block-pages#task-2152674).
    
-   Major event protection rules
    
    The major event protection feature provides intelligent protection policies. You can obtain powerful security protection capabilities without the need to configure complex rules. For more information, see [Major event protection](/help/en/waf/web-application-firewall-3-0/user-guide/major-event-protection-1#task-2206248).
    
-   Asset center
    
    You can use the asset center feature to sort domain names within and outside Alibaba Cloud and assess risks based on the attack status of the domain names in the cloud. For more information, see [Asset center](/help/en/waf/web-application-firewall-3-0/user-guide/asset-center#task-2213767).
    
-   Security reports
    
    You can view the protection details of each protection module for security analysis by using security reports. For more information, see [Security reports](/help/en/waf/web-application-firewall-3-0/user-guide/security-reports#task-2382775).
    
-   Whitelist module
    
    You can manage whitelist rules in a centralized manner. For more information, see [Configure whitelist rules to allow specific requests](/help/en/waf/web-application-firewall-3-0/user-guide/configure-whitelist-rules-to-allow-specific-requests#task-2372989).
    

## Overview

The following sections describe the improvements to the subscription and pay-as-you-go billing methods of WAF 3.0.

## Subscription

-   WAF 3.0 provides Basic Edition, which is suitable for users whose applications do not have large service traffic.
    
-   Billing rules for billable items are simplified.
    
    -   Traffic is measured only in queries per second (QPS). Bits per second (bps) is no longer used. The burstable QPS (pay-as-you-go) feature is supported. The feature prevents WAF 3.0 instances from being added to a sandbox.
        
    -   In WAF 3.0, the number of domain names is the total number of second-level domain names, subdomain names, and wildcard domain names. Additional domain names follow a tiered pricing schedule in which discounts are applied to the portion of domain names in different tiers.
        

-   **Hybrid cloud protection** is supported for more editions.
    

## Pay-as-you-go

-   Pay-as-you-go WAF 3.0 uses security capacity units (SeCUs) as billing units. This simplifies the calculation process and billing rules. Resource plans are provided for SeCUs. You can obtain more savings based on the size of the plan.
    
-   The bills of a pay-as-you-go WAF 3.0 instance are generated every hour. When the configurations for a feature are deleted or the feature is disabled, the billing for the feature is automatically stopped.
    
-   WAF 3.0 supports the pay-as-you-go billing method.
    

## References

-   [Website configuration overview](/help/en/waf/web-application-firewall-3-0/user-guide/overview-8#concept-tzp-g2m-42b): describes the access modes that are supported by WAF 3.0 and the access procedures.
    
-   [Protection configuration overview](/help/en/waf/web-application-firewall-3-0/user-guide/protection-configuration-overview#concept-tzp-g2m-42b): describes the configurations that are supported by WAF 3.0 and the protection configuration procedures.
    
-   [Subscription billing overview](/help/en/waf/web-application-firewall-3-0/billing-description#task-2230251): describes the subscription billing method of WAF 3.0.
    
-   [Pay-as-you-go billing overview](/help/en/waf/web-application-firewall-3-0/billing-description-v3#concept-2152696): describes the pay-as-you-go billing method of WAF 3.0.
