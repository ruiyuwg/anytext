This topic describes the Nginx Ingress Controller component, including its usage and change history.

## Component overview

The Nginx Ingress Controller is based on the open source Kubernetes project [Ingress NGINX](https://github.com/kubernetes/ingress-nginx) and provides a unified entry point for services in a cluster. The code implementation is identical to the community's Ingress NGINX. New versions are released in sync with the upstream community, and version numbers are kept consistent. The Nginx Ingress Controller is a non-managed component deployed on your cluster nodes. You are responsible for its operations and maintenance (O&M). It does not come with a Service-Level Agreement (SLA) and supports extensive customization.

### Basic concepts of Ingress

In a Kubernetes cluster, an Ingress functions as an access point that exposes Services in the cluster. It distributes most of the network traffic that is destined for the Services in the cluster. An Ingress is a Kubernetes resource object that is used to enable external access to Services in a Kubernetes cluster. You can configure routing rules for an Ingress to route network traffic to backend pods of different Services. For Ingress comparisons in ACK, see [Comparison among Nginx Ingresses, ALB Ingresses, and MSE Ingresses](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-among-nginx-ingresses-alb-ingresses-and-mse-ingresses-1)

### How it works

Ingresses can work as normal only if you deploy an NGINX Ingress controller in the cluster to parse the routing rules of the Ingresses. After the NGINX Ingress controller receives a request that matches a routing rule, the NGINX Ingress controller routes the request to a corresponding backend Service. The backend Service then forwards the request to pods. In a Kubernetes cluster, Services, Ingresses, and the NGINX Ingress controller work in the following process:

-   A Service is an abstraction of a backend application that runs on a set of replicated pods.
    
-   An Ingress contains reverse proxy rules. It controls to which Service pods HTTP or HTTPS requests are routed. For example, requests are routed to different Service pods based on the hosts and URL paths in the requests.
    
-   The NGINX Ingress controller is a reverse proxy program that parses Ingress rules. If changes are made to the Ingress rules, the NGINX Ingress controller updates the Ingress rules accordingly. After the NGINX Ingress controller receives a request, it redirects the request to Service pods based on the Ingress rules.
    

### Nginx Ingress Controller and cluster version compatibility

If a component's target version is incompatible with the current cluster version, you must upgrade the cluster first. For more information, see [Upgrade cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).

**Nginx Ingress Controller version**

**Compatible cluster versions**

\[v1.5.1-aliyun.1, v1.11.5-aliyun.1\]

1.22 and later

\[v1.1.0-aliyun.1, v1.2.1-aliyun.1\]

1.20 and later

### **Risks of outdated versions**

Maintenance for Nginx Ingress Controller v1.2 and earlier has been discontinued. For more information, see [Product Announcements](/help/en/ack/product-overview/product-announcement-announcement-on-stopping-maintenance-of-nginx-ingress-controller-v1-2-and-below). Expired versions of this component do not support new features or bug fixes and are not eligible for technical support. This exposes you to security risks from unpatched vulnerabilities. Please [upgrade the component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/component-overview) promptly.

## Usage notes

-   To install or upgrade the Nginx Ingress Controller component, see [Manage the Nginx Ingress Controller component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-the-nginx-ingress-controller) and [Upgrade the Nginx Ingress Controller component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-nginx-ingress-controller).
    
-   For more information about how to create, view, update, and delete an Nginx Ingress with the console or kubectl, see [Create and use an Nginx Ingress to expose services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-nginx-ingress-1).
    
-   For more information, see [Use Nginx Ingress for phased releases and blue-green deployments](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-gray-scale-and-blue-green-publishing-through-nginx-ingress#task-2035658), [Configure public and private network access for an Ingress Controller SLB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-an-ingress-controller-to-use-an-internal-facing-slb-instance), and [Use Nginx Ingress to replicate application traffic](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-ingress-controller-to-mirror-network-traffic#task-2023857).
    

## Change history

### **December 2025**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.12.6-release.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.12.6-release.1

December 11, 2025

Updated to community version [v1.12.6](https://github.com/kubernetes/ingress-nginx/releases/tag/controller-v1.12.6).

**Key feature changes**

-   New features:
    
    -   Annotation/AuthTLS: Allows named redirects. ( [#13820](https://github.com/kubernetes/ingress-nginx/pull/13820) )
        
    -   Allows the use of `.` in `Exact` and `Prefix` path types. ([#13800](https://github.com/kubernetes/ingress-nginx/pull/13800))
        
    -   NGINX: Upgraded to OpenResty v1.25.3.2. ( [#13530](https://github.com/kubernetes/ingress-nginx/pull/13530) )
        
    -   Allows any CORS origin protocol. ( [#11153](https://github.com/kubernetes/ingress-nginx/pull/11153) )
        
    -   Metrics: Added the `--metrics-per-undefined-host` parameter. ( [#11818](https://github.com/kubernetes/ingress-nginx/pull/11818) )
        
-   Optimizations:
    
    -   Security: Hardened socket creation and validated error code input. ( [#13786](https://github.com/kubernetes/ingress-nginx/pull/13786) )
        
    -   NGINX: Disabled architecture-specific optimizations for mimalloc. ( [#13670](https://github.com/kubernetes/ingress-nginx/pull/13670) )
        
    -   Removed the global rate limiting feature. ( [#11851](https://github.com/kubernetes/ingress-nginx/pull/11851) )
        
        -   The following configuration options were removed:
            
            -   `global-rate-limit-memcached-host`
                
            -   `global-rate-limit-memcached-port`
                
            -   `global-rate-limit-memcached-connect-timeout`
                
            -   `global-rate-limit-memcached-max-idle-timeout`
                
            -   `global-rate-limit-memcached-pool-size`
                
            -   `global-rate-limit-status-code`
                
        -   The following annotations were removed:
            
            -   `global-rate-limit`
                
            -   `global-rate-limit-window`
                
            -   `global-rate-limit-key`
                
            -   `global-rate-limit-ignored-cidrs`
                
    -   Removed support for third-party Lua plugins ([#11821](https://github.com/kubernetes/ingress-nginx/pull/11821)). Custom plugins in the `/etc/nginx/lua/plugins` directory are no longer supported.
        
    -   Metrics: Removed `ingress_upstream_latency_seconds`. ( [#11795](https://github.com/kubernetes/ingress-nginx/pull/11795) )
        
-   Bug fixes:
    
    -   Metrics: Fixed `nginx_ingress_controller_config_last_reload_successful`. ( [#13859](https://github.com/kubernetes/ingress-nginx/pull/13859) )
        
    -   Controller: Fixed the SSL session ticket path. ([#13668](https://github.com/kubernetes/ingress-nginx/pull/13668))
        
    -   Lua: Fixed `ExternalName` services that have no endpoints. ( [#13429](https://github.com/kubernetes/ingress-nginx/pull/13429) )
        
    -   Fixed a DNS resolution issue for \`ExternalName\` backends. ([#12951](https://github.com/kubernetes/ingress-nginx/pull/12951))
        

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **September 2025**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.11.5-release.2

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.11.5-release.2

September 11, 2025

Feature optimizations:

-   Added support for [Network Load Balancer (NLB)](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/).
    
-   Added Pod Disruption Budgets configuration.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **March 2025**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.11.5-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.11.5-aliyun.1

March 26, 2025

Updated to [community version v1.11.5](https://github.com/kubernetes/ingress-nginx/releases/tag/controller-v1.11.5) to fix CVE-2025-1097, CVE-2025-1098, CVE-2025-1974, CVE-2025-24513, and CVE-2025-24514. For more information, see [Vulnerability Notice for CVE-2025-1097, CVE-2025-1098, CVE-2025-1974, CVE-2025-24513, and CVE-2025-24514](/help/en/ack/product-overview/security-advisory-for-cve-2025-1097-cve-2025-1098-cve-2025-1974-cve-2025-24513-and-cve-2025-24514).

**Important**

To fix the [CVE-2025-1974](https://github.com/advisories/GHSA-mgvx-rpfc-9mpv) vulnerability, the Validation Webhook is enabled by default in this and later versions of the Nginx Ingress Controller component. However, the native NGINX configuration validation logic is now disabled by default. If you enabled snippet annotations (used for custom NGINX native directives), these configurations are no longer pre-validated by the Validation Webhook. Related errors will trigger alerts only when NGINX reloads the configuration. We recommend that you check the Nginx Ingress Controller pod logs after each modification to an Ingress rule and correct the Ingress configuration based on any error logs.

**Note: An incorrect configuration does not affect running Nginx Ingress pods. However, new pods created during operations such as scale-out or restart will fail to start due to the configuration error. We recommend that you fully validate snippet directives in a staging environment before changing configurations in a production environment.**

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

v1.11.4-aliyun.2

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.11.4-aliyun.2

March 19, 2025

Optimized the node scheduling affinity configuration. Pods are not scheduled to Lingjun nodes.

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### February 2025

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.11.4-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.11.4-aliyun.1

February 12, 2025

Updated to community version v1.11.4. Added support for configuring custom topology spread constraints for the component in the console.

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### August 2024

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.10.4-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.10.4-aliyun.1

August 20, 2024

Updated to community version v1.10.4 to fix the [CVE-2024-7646](https://nvd.nist.gov/vuln/detail/CVE-2024-7646) vulnerability. For more information about the vulnerability, see [Security issue](https://github.com/advisories/GHSA-qx8j-xj5q-v7r3).

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **July 2024**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.10.2-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.10.2-aliyun.1

July 24, 2024

-   Added support for connecting to Application Real-Time Monitoring Service (ARMS) using OpenTelemetry. OpenTracing is no longer supported.
    
-   On the **Component Management** page, you can configure the `--shutdown-grace-period`, `--exclude-socket-metrics`, and `--default-ssl-certificate` parameters.
    
-   Added support for using NLB for Layer 4 forwarding.
    
-   Enhanced image security to fix CVE-2023-5363, CVE-2023-5678, CVE-2024-25062, and CVE-2024-2511.
    
-   Upgraded NGINX to version 1.25.5. The new version enhances the validation of headers in backend responses. For more information, see the [changeset](https://hg.nginx.org/nginx/rev/2bf7792c262e).
    
    -   Backend responses that contain duplicate `Content-Length` and `Transfer-Encoding` header fields are rejected.
        
    -   Backend responses that contain invalid `Content-Length` or `Transfer-Encoding` header fields are rejected.
        
    -   Backend responses that contain both `Content-Length` and `Transfer-Encoding` header fields are rejected.
        

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **October 2023**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.9.3-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.9.3-aliyun.1

October 24, 2023

**Important**

For security reasons, all snippet annotations (such as `nginx.ingress.kubernetes.io/configuration-snippet`) are disabled by default in this and later versions.

For security and stability reasons, we do not recommend that you enable snippet annotations. If you must use them, carefully assess the risks and manually enable them by adding `allow-snippet-annotations: "true"` to the `kube-system/nginx-configuration` ConfigMap.

-   Disabled the feature that allows adding snippets in annotations by default.
    
-   Added the `--enable-annotation-validation` parameter. Annotation content validation is enabled by default to mitigate CVE-2023-5044.
    
-   Fixed CVE-2023-44487.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### September 2023

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.8.2-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.8.2-aliyun.1

September 20, 2023

-   Upgraded Golang to version 1.21.1.
    
-   Changed the hostname-based anti-affinity scheduling from preferred to required. This enforces node-level anti-affinity scheduling.
    
-   Added support for enabling OpenTelemetry. For more information, see the [community configuration guide](https://kubernetes.github.io/ingress-nginx/user-guide/third-party-addons/opentelemetry/).
    
-   Fixed vulnerabilities such as CVE-2022-48174, CVE-2023-2975, CVE-2023-3446, and CVE-2023-3817.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### June 2023

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.8.0-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.8.0-aliyun.1

June 20, 2023

-   Upgraded the Alpine image to version 1.18.
    
-   Added the \`strict-validate-path-type\` configuration item for strict path validation (disabled by default). For more information, see the [community ConfigMap configuration instructions](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#strict-validate-path-type).
    
-   Fixed vulnerabilities such as CVE-2023-28322 and CVE-2023-2650.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### May 2023

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.7.0-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.7.0-aliyun.1

May 5, 2023

**Important**

This version no longer supports the TLS v1.1 and TLS v1.0 encryption methods by default. If you upgrade the Nginx Ingress Controller to this version, be aware of the impact on your services. For more information about this issue, see [set ssl-protocols config not working after v1.6.4](https://github.com/kubernetes/ingress-nginx/issues/9805). To force the use of older TLS versions, see the configurations in [Known issues in earlier versions of Nginx Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#taskbody-flw-z0l-eqr).

-   Upgraded Golang to version 1.20 and the Alpine image to version 1.17.
    
-   Fixed an issue where `nginx.ingress.kubernetes.io/canary-weight-total` did not take effect.
    
-   Fixed a panic that occurred when the ready status was missing in an EndpointSlice.
    
-   Fixed vulnerabilities such as CVE-2023-27536 and CVE-2023-0464.
    
-   Removed the logic that checks for a service name prefix in EndpointSlices.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### March 2023

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.6.4-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.6.4-aliyun.1

March 17, 2023

-   Added support for setting an IP blacklist using `nginx.ingress.kubernetes.io/denylist-source-range`.
    
-   Added support for the `cluster-autoscaler.kubernetes.io/safe-to-evict: "false"` annotation to prevent nodes that host pods from being automatically scaled in.
    
-   Added support for enabling or disabling logs on the component management page.
    
-   Fixed several stability issues.
    
-   Fixed vulnerabilities such as CVE-2023-0286, CVE-2022-4450, and CVE-2023-0215.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **February 2023**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact of Changes**

v1.5.1-aliyun.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/aliyun-ingress-controller:v1.5.1-aliyun.1

February 10, 2023

-   Nginx Ingress Controller v1.5.1 and later support only ACK clusters of v1.22.0 and later.
    
-   Upgraded NGINX to version 1.21.6 and Golang to version 1.19.2.
    
-   Updated the AHAS Sentinel plugin to support the use-mse switch.
    
-   Used \`coordination.k8s.io/leases\` resources for leader election.
    
-   Used EndpointSlices instead of Endpoints for endpoint discovery.
    
-   Added multiple Prometheus metrics and deprecated \`\_ingress\_upstream\_latency\_seconds\`. For more information, see [ingress-nginx](https://github.com/kubernetes/ingress-nginx/pull/8728).
    
-   Added support for using \`debug-connections\` to enable NGINX debug logs for an IP range.
    
-   Fixed vulnerabilities such as CVE-2022-32149, CVE-2022-27664, and CVE-2022-1996.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **June 2022**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.2.1-aliyun.1

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v1.2.1-aliyun.1

June 28, 2022

-   Removed the `alias` and `root` directives from NGINX to reduce security risks.
    
-   Fixed several stability issues.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **May 2022**

**Version**

**Registry address**

**Change date**

**Changes**

**Change impact**

v1.2.0-aliyun.1

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v1.2.0-aliyun.1

May 10, 2022

-   Added and enabled by default the Ingress object deep inspection feature. This feature prevents Ingress configurations that contain sensitive fields from being written and fixes the [CVE-2021-25745](https://nvd.nist.gov/vuln/detail/CVE-2021-25745) issue.
    
-   Fixed several stability issues.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **April 2022**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v0.44.0.12-27ae67262-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.44.0.12-27ae67262-aliyun

April 29, 2022

-   Optimized the scheduling affinity configuration to allow all cluster nodes to be used as auto scaling nodes.
    
-   Fixed known security vulnerabilities that occurred when the AHAS Sentinel feature was enabled.
    
-   Fixed several base image vulnerabilities.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **March 2022**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact of changes**

v1.1.2-aliyun.2

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v1.1.2-aliyun.2

March 21, 2022

-   Downgraded the NGINX version to 1.19.9 to align with the community version and enhance stability.
    
-   Fixed an issue where an incorrect `cors-allow-origin` configuration caused the controller to crash.
    
-   Fixed an issue where a webhook check on Ingress resources that did not belong to the same IngressClass caused resource contention for Ingress resources with the same path.
    
-   Fixed an issue where the initContainer changed node kernel parameters when \`hostNetwork\` was used.
    
-   Fixed [CVE-2022-0778](https://nvd.nist.gov/vuln/detail/CVE-2022-0778) and [CVE-2022-23308](https://nvd.nist.gov/vuln/detail/CVE-2022-23308).
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **January 2022**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.1.0-aliyun.2

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v1.1.0-aliyun.2

January 12, 2022

-   Upgraded the AHAS Sentinel plugin. The module was switched from Java to C++ for significant performance optimization and improvement.
    
-   Used the Protobuf protocol to communicate with the API Server to improve performance.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **December 2021**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v1.1.0-aliyun.1

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v1.1.0-aliyun.1

December 17, 2021

-   **Nginx Ingress Controller 1.X.X versions support only ACK clusters of v1.20.0 and later. For earlier cluster versions, use Nginx Ingress Controller 0.X.X versions.**
    
-   Used `networking v1` Ingress resources to support clusters of v1.22 and later.
    
-   `cors-allow-origin` supports multiple values and automatically returns the request based on the Origin when a website is accessed.
    
-   Added support for configuring `session affinity` for canary releases. This is now the default behavior.
    
-   Added support for configuring canary releases without specifying a Host.
    
-   Accelerated the execution speed of the Admission Webhook.
    
-   Improved stability.
    

For more information, see the [community changelog](https://github.com/kubernetes/ingress-nginx/blob/main/Changelog.md).

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **October 2021**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact of the change**

v0.44.0.9-7b9e93e7e-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.44.0.9-7b9e93e7e-aliyun

October 28, 2021

-   Added the allow-snippet-annotations annotation to mitigate the CVE-2021-25742 vulnerability. For more information, see [Vulnerability Notice for CVE-2021-25742](/help/en/ack/product-overview/vulnerability-fixed-cve-2021-25742#task-2127789).
    
-   Disabled the SSL builtin cache to resolve a potential memory leak issue.
    
-   Fixed the CVE-2021-22945, CVE-2021-22946, CVE-2021-3711, and CVE-2021-3712 vulnerabilities. For more information, see [CVE-2021-22945](https://nvd.nist.gov/vuln/detail/CVE-2021-22945), [CVE-2021-22946](https://nvd.nist.gov/vuln/detail/CVE-2021-22946), [CVE-2021-3711](https://nvd.nist.gov/vuln/detail/CVE-2021-3711), and [CVE-2021-3712](https://nvd.nist.gov/vuln/detail/CVE-2021-3712).
    
-   Upgraded the AHAS Sentinel software development kit (SDK) to version 1.9.7.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **September 2021**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact of the Change**

v0.44.0.5-e66e17ee3-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.44.0.5-e66e17ee3-aliyun

September 6, 2021

-   Upgraded the AHAS Sentinel plugin.
    
    -   Optimized plugin performance and stability.
        
    -   Added support for cluster-level traffic throttling.
        
-   Fixed the CVE-2021-36159 vulnerability. For more information, see [CVE-2021-36159](https://nvd.nist.gov/vuln/detail/CVE-2021-36159).
    
-   Disabled the kernel.core\_uses\_pid kernel parameter by default to prevent coredumps from consuming large amounts of disk space.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **June 2021**

**Version**

**Registry Address**

**Change date**

**Changes**

**Impact of changes**

v0.44.0.3-8e83e7dc6-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.44.0.3-8e83e7dc6-aliyun

June 1, 2021

Fixed the CVE-2021-23017 vulnerability.

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **April 2021**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v0.44.0.2-abf1c6fe4-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.44.0.2-abf1c6fe4-aliyun

April 1, 2021

Added compatibility for the `the_real_ip` field configured in log\_format in earlier versions (v0.30 and earlier).

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **March 2021**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v0.44.0.1-5e842447b-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.44.0.1-5e842447b-aliyun

March 8, 2021

-   Enabled the Validating Admission Webhook by default. For more information, see [How the NGINX Ingress controller works](https://kubernetes.github.io/ingress-nginx/how-it-works/#avoiding-outage-from-wrong-configuration).
    
-   The value configured for the `service-weight` annotation is validated.
    
-   Improved performance for persistent connections and short-lived connections by 20% to 50%.
    
-   Added support for OCSP stapling.
    
-   Upgraded LuaJIT to version 2.1.0.
    
-   Upgraded NGINX to version 1.19.6.
    
-   Upgraded the Alpine image to version 3.13.
    
-   Fixed OpenSSL CVEs.
    
-   Enabled TLS 1.3 by default.
    
    **Note**
    
    By default, HTTPS requests support only TLS 1.2 and TLS 1.3. To support TLS 1.0 and TLS 1.1, see [Which SSL/TLS versions does Ingress support?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-faq#section-gsi-4n0-lsd).
    
-   Requires Kubernetes v1.16 or later.
    
-   Synchronized with community version 0.44.0. For more information, see the [community changelog](https://github.com/kubernetes/ingress-nginx/blob/master/Changelog.md).
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **April 2020**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v0.30.0.1-5f89cb606-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.30.0.1-5f89cb606-aliyun

April 2, 2020

-   Added support for FastCGI backends.
    
-   Enabled Dynamic SSL Cert Update mode by default.
    
-   Added support for traffic mirroring configuration.
    
-   Upgraded NGINX to version 1.17.8 and OpenResty to version 1.15.8. The base image was updated to Alpine.
    
-   Added support for Ingress Validating Webhook.
    
-   Fixed the CVE-2018-16843, CVE-2018-16844, CVE-2019-9511, CVE-2019-9513, and CVE-2019-9516 vulnerabilities.
    
-   Major updates:
    
    -   The \`lua-resty-waf\`, \`session-cookie-hash\`, and \`force-namespace-isolation\` configurations are deprecated.
        
    -   The type of \`x-forwarded-prefix\` was changed from boolean to string.
        
    -   The \`the\_real\_ip\` variable in \`log-format\` will be deprecated in the next version and replaced by \`remote\_addr\`.
        
-   Synchronized with community version 0.30.0. For more detailed changes, see the [community changelog](https://github.com/kubernetes/ingress-nginx/blob/master/Changelog.md).
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **October 2019**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v0.22.0.5-552e0db-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.22.0.5-552e0db-aliyun

October 24, 2019

Added support for wildcard domain names, whitelists, and redirection configurations when dynamic server updates are enabled.

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **July 2019**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v0.22.0.4-5a14d4b-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.22.0.4-5a14d4b-aliyun

July 18, 2019

Optimized phased release rules to support Perl regular expression matching.

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **April 2019**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v0.22.0.3-da10b7f-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.22.0.3-da10b7f-aliyun

April 25, 2019

-   Synchronized with community version 0.22.0. For the change history, see [Ingress-Nginx](https://github.com/kubernetes/ingress-nginx/releases).
    
-   Added support for blue-green deployment and phased release mechanisms when dynamic updates are enabled.
    
-   Enabled the dynamic update feature for NGINX Upstream by default.
    
-   Major update: The \`rewrite-target\` annotation now uses a capture group configuration. For configuration details, see [rewrite-target](https://kubernetes.github.io/ingress-nginx/examples/rewrite/#rewrite-target). For a smooth upgrade path, see [Github](https://github.com/kubernetes/ingress-nginx/pull/3174#issuecomment-455665710).
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **January 2019**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v0.20.0.2-cc39f1b-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.20.0.2-cc39f1b-aliyun

January 17, 2019

-   Optimized the default NGINX worker process count to prevent excessive NGINX processes from consuming host resources.
    
-   Optimized blue-green deployments and phased releases to allow different service port numbers for old and new service versions.
    
-   Resolved an issue where NGINX configuration tests failed during a phased release if the new service version had no active backend pods.
    
-   Fixed an issue where Ingress address endpoints were not updated due to abnormal connections to the Kubernetes API Server.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.

### **November 2018**

**Version**

**Registry address**

**Change date**

**Changes**

**Impact**

v0.20.0.1-4597ce2-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-ingress-controller:v0.20.0.1-4597ce2-aliyun

November 29, 2018

-   Synchronized with community version 0.20.0. For the change history, see the [community](https://github.com/kubernetes/ingress-nginx/releases).
    
-   Upgraded NGINX to version 1.15.6 to fix HTTP/2-related security vulnerabilities.
    
-   Added support for regular expression configuration for paths.
    
-   Removed the default \`default-http-backend\` service. Added support for configuring a custom default backend service.
    
-   Added support for blacklist configurations based on IP, User-Agent, and Referer.
    
-   Optimized default runtime permissions by removing privileged permissions.
    
-   Added support for the AJP protocol.
    

Upgrade during off-peak hours. Established connections may be briefly interrupted during the upgrade.
