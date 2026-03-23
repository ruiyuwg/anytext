Due to the end-of-sale (EoS) for pay-by-specification Classic Load Balancer (CLB) instances, Container Service for Kubernetes (ACK) now use Network Load Balancer (NLB) instances by default when you create SLB-type Services or install Nginx Ingress Controller through the console. Creating CLB-backed Services through the console will only be available to whitelisted users and when created, will default to the pay-by-LCU billing method.

## **Impact scope**

This change affects the following cluster types running Kubernetes V1.24.0 or later, provided their add-ons meet the version requirements specified below:

-   ACK managed clusters
    
-   ACK dedicated clusters
    
-   ACK Serverless clusters
    
-   ACK Edge clusters
    
-   ACK Lingjun clusters
    

**Exemptions:**

1.  Clusters or add-ons that do not meet the version criteria are unaffected.
    
2.  Existing CLB/NLB Services and Nginx Ingress will continue to function normally.
    

## **Change details**

### **Console** workflow

**Change date**

September 11, 2025

> The effective date for this change has been rescheduled from August 28, 2025, to September 11, 2025. This announcement was reissued on September 8, 2025, to reflect this new date; all other details remain unchanged.

**Impact details**

**Operation**

**Condition**

**Description**

Create SLB-type Services

[Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) V2.5.0 and later

Default option: NLB only.

> CLB instances are available via whitelist only and restricted to pay-by-LCU billing. To use CLB instances, submit a request through the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).

Install [Nginx Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller)

-   [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) V2.5.0 and later
    
-   [Nginx Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller) V1.11.5-release.2 and later
    

Default installation uses NLB.

> CLB instances are available via whitelist only and restricted to pay-by-LCU billing. To use CLB instances, submit a request through the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).

### **CLB instance billing method**

**Change timeline**

A gradual rollout of the billing change will begin on September 11, 2025, with full deployment expected by November 30, 2025.

> The effective date for this change has been rescheduled from August 28, 2025, to September 11, 2025. This announcement was reissued on September 8, 2025, to reflect this new date; all other details remain unchanged.

**Impact details**

**Operation**

**Condition**

**Impact**

Create SLB-type Services

[Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) V2.12.0 and later

When selecting a CLB instance, the default billing method changes from pay-by-specification to pay-by-LCU.

Install [Nginx Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller)

-   [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) V2.12.0 and later
    
-   [Nginx Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller) V1.11.5-release.2 and later
    

When installing the Nginx Ingress Controller add-on through the console or API ([InstallClusterAddons](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-installclusteraddons)), selecting a CLB instance will use pay-by-LCU by default.
