ALB Ingress uses Alibaba Cloud Application Load Balancer (ALB) to provide a unified entry point for services in a cluster. This topic describes how to use the ALB Ingress Controller and lists its change history.

## Usage notes

-   For more information about the ALB Ingress Controller, see [Manage ALB Ingresses](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alb-ingress-management-1/).
    
-   For more information about how to install the ALB Ingress Controller component, see [Manage the ALB Ingress Controller component](/help/en/ack/serverless-kubernetes/user-guide/manage-the-alb-ingress-controller#task-2099154) and [Create and use an ALB Ingress to expose services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-use-alb-ingress-to-expose-services-to-the-public#task-2098039).
    
-   Because of security restrictions on ACK managed clusters, ACK managed clusters created after May 2024 do not support installing the `v2.12.0-aliyun.1` version or earlier of the ALB Ingress Controller component. Install the latest version of the component at the earliest opportunity for improved experience and stability.
    

## Change history

### January 2026

**Version**

**Update Time**

**Change Description**

**Impact of changes**

v2.19.1

February 12, 2026

Optimizations:

-   Optimized the handling of scenarios where OpenAPI calls are throttled. Added an automatic retry mechanism for specific error codes.
    
-   Added support for empty tag values. Added validation for duplicate tag keys.
    

Bug fixes:

-   Fixed an issue where the system did not retry adding a `ReadinessGate` to a pod when a backend server group was created due to an Ingress event.
    
-   Fixed an issue where querying the listener status failed after the listener log configuration was updated.
    

This upgrade does not affect your services.

### January 2026

**Version**

**Update Time**

**Change Description**

**Impact**

v2.19.0

January 7, 2026

New features:

-   Added support for hot reloading of secrets when you use a secret to specify the `defaultCertificate`.
    
-   Added support for configuring an Ingress with `rate limiting + fixed response/redirection + forwarding` actions at the same time.
    

Optimizations:

-   Optimized the error message that appears when a listener fails to be created due to an expired certificate.
    
-   You can optimize controller tuning performance.
    
-   Enhanced the validation capabilities of the webhook. Added validation for the following scenarios:
    
    -   The format of the `SourceIP` field in custom forwarding conditions.
        
    -   Whether the value of the `AclType` field is `black` or `white`.
        
    -   The `backend` in an Ingress specifies only `service.name` but not `service.port`.
        
-   Added a check to the webhook to determine whether the Ingress is of the ALB type.
    

Bug fixes:

-   Fixed an issue where the corresponding tags on an ALB instance could not be deleted when the `tags` field in `AlbConfig` was completely deleted.
    
-   Fixed an issue where deleting a service might cause the controller process to panic in extreme cases.
    

This upgrade does not affect your services.

### July 2025

**Version**

**Update Time**

**Change Description**

**Impact**

v2.18.0-aliyun.1

July 4, 2025

-   Enabled the instance-managed mode by default. For ALB instances automatically created through AlbConfig, you can no longer manually modify their listener and forwarding rule configurations in the ALB console. This restriction applies only to ALB instances created after upgrading to this version. Existing instances and reused instances are not affected.
    
-   Added support for manually specifying the default certificate using `defaultCertificate` in AlbConfig.
    
-   Optimized the priority sorting logic for forwarding rules and removed the global uniqueness constraint for `order`.
    
-   Added support for the ECS Metadata reinforcement-only mode.
    
-   Fixed an issue where throttling might cause the controller to panic when querying the asynchronous task API operation.
    
-   Fixed an issue where ACLs took effect on only one listener when HTTPS and QUIC listeners shared the same port.
    
-   Used a fixed waiting interval when `readinessGate` waits for unready pods.
    
-   Optimized the validation logic in the Admission Webhook for rules that do not contain a final forwarding action.
    

This upgrade does not affect your services.

### **March 2025**

**version number**

**Update Time**

**Change Description**

**Impact**

v2.17.2-aliyun.1

March 31, 2025

-   Fixed an issue where server group reconciliation failed with a "port does not exist" error when Ingress rules in multiple namespaces pointed to services with the same name but different ports.
    
-   Fixed a parameter error that occurred when querying IPv4 addresses in an IPv6 dual-stack cluster.
    
-   Increased the maximum number of security groups that can be added to or removed from in a single batch API call from 4 to 9.
    
-   Skipped API calls when no additional tags need to be added.
    

This upgrade does not affect your services.

v2.17.1-aliyun.1

March 18, 2025

-   Added support for Gateway API 1.1.0 and later.
    

This upgrade does not affect your services.

v2.16.0-aliyun.1

March 4, 2025

**Important**

Starting from this version, persistent connections are enabled by default for new backend server groups. Existing backend server groups are not affected. Before you upgrade, confirm whether this change in behavior affects your services.

-   Enabled persistent connections by default for new server groups.
    
-   Added support for setting custom tags for listeners.
    
-   Added support for disabling the cross-zone capability for server groups.
    
-   You can optimize the service’s overall tuning performance.
    
-   Optimized the timing for updating pod statuses for the ReadinessGate feature. Pod statuses are now updated only after all server groups are successfully updated.
    
-   Canary phased releases must be implemented by splitting them into two Ingresses or using custom forwarding actions. If a Canary annotation is incorrectly added directly to an Ingress, the system reports an error and retains the original forwarding rule.
    

This upgrade does not affect your services.

### January 2025

**Version**

**Update Time**

**What's Changed**

**Impact**

v2.15.2-aliyun.1

January 24, 2025

-   Added support for configuring `XForwardedForProcessingMode` in the listener's `XForwardedForConfig` to set the processing mode for `X-Forwarded-For`. Added support for configuring `XForwardedForHostEnabled` to enable the `X-Forwarded-Host` request header.
    
-   Fixed an issue where the component failed to start when ValidatingWebhookConfiguration did not exist.
    
-   Fixed an issue where webhook validation failed when multiple values were configured for `alb.ingress.kubernetes.io/healthcheck-httpcode`.
    
-   Added a check for forwarding actions that do not include a `FinalType` type.
    
-   Optimized the calculation method for `clientToken` when creating an ALB instance.
    

This upgrade does not affect your services.

v2.15.0-aliyun.1

January 6, 2025

-   Enabled ValidatingWebhook by default to perform dry runs on AlbConfig and Ingress configurations.
    
-   Added support for configuring AScript programmable scripts.
    
-   Added support for configuring fixed responses for rate limiting.
    
-   Made ssl-redirect compatible with the rate limiting feature.
    
-   Added support for custom cookies for session persistence in backend server groups.
    
-   Added support for configuring security groups for ALB instances created after 00:00:00 on February 25, 2025 (UTC+8).
    
-   Optimized the error messages for listener conflicts.
    
-   Added event notifications for inconsistencies between TLS certificate configurations and forwarding rule certificates.
    
-   Added validation for the validity of associated resources, such as Internet Shared Bandwidth.
    
-   You can use AlbConfig to configure certificates for the gRPC protocol.
    
-   Fixed an issue where the tag feature in AlbConfig could not be used after the creator tag feature was enabled.
    
-   Fixed an issue where Service reconciliation continuously reported errors in some scenarios.
    
-   Fixed an issue where an incorrect AlbConfig configuration caused the component to crash.
    

This upgrade does not affect your services.

### **October 2024**

**Version**

**Update Time**

**Changes**

**Impacts**

v2.14.1-aliyun.1

October 12, 2024

-   Fixed an issue where configuring HTTPS health checks failed.
    

This upgrade does not affect your services.

### **September 2024**

**Version**

**Update Time**

**Change Description**

**Impact**

v2.14.0-aliyun.1

September 10, 2024

-   Added support for the gRPC protocol for server group health checks.
    
-   Added support for configuring slow start.
    
-   Added support for configuring connection draining.
    
-   Added support for session persistence between server groups.
    
-   Fixed an issue where the ReadinessGate status could not be correctly updated in some cases.
    
-   Optimized the error messages for secrets.
    
-   Optimized the reconciliation logic for server groups in the configuring state.
    
-   Made AlbConfig fields case-insensitive.
    

This upgrade does not affect your services.

### July 2024

**Version**

**Update Time**

**Change Description**

**Impact**

v2.13.2-aliyun.1

July 23, 2024

-   Fixed an issue where an incorrect AlbConfig format caused the controller to crash.
    
-   Fixed an issue where weights were set incorrectly when ECS and ECI endpoints were mounted together in Flannel network mode.
    

This upgrade does not affect your services.

### May 2024

**Version**

**Update Time**

**Change Description**

**Impact**

v2.13.1-aliyun.1

May 10, 2024

-   Added events for AlbConfigs that are not associated with any Ingress.
    
-   Fixed an issue where weights might be set incorrectly after an endpoint update when using the Flannel network plugin.
    
-   Fixed an issue where server group creation failed when a namespace started with a number or when the namespace or service name was too long.
    

This upgrade does not affect your services.

### February 2024

**Version**

**Update Time**

**Change Description**

**Impact**

v2.12.0-aliyun.1

February 5, 2024

-   Added support for using IP-based server groups with the `alb.ingress.kubernetes.io/server-group-type: Ip` annotation.
    
-   Added support for specifying the resource group for a server group with the `alb.ingress.kubernetes.io/server-group-resource-group-id` annotation.
    
-   Added support for automatically configuring weights for nodes based on the number of pods on each node when using the Flannel plugin.
    
-   Added support for QPS-based rate limiting for custom forwarding rules.
    
-   When creating an ALB instance, do not specify the IP address allocation type (addressAllocateMode).
    
-   Added support for configuring trusted IP addresses for the `X-Forwarded-For` header.
    
-   Fixed an issue where setting some fields in AlbConfig from an empty value to `false` did not take effect.
    

This upgrade does not affect your services.

### **November 2023**

**Version**

**Update Time**

**Change Description**

**Impact**

v2.11.1-aliyun.1

November 20, 2023

Fixed an issue where the controller might crash if IngressClass was not specified.

This upgrade does not affect your services.

### **October 2023**

**Version**

**Update Time**

**Change Description**

**Impact**

v2.11.0-aliyun.1

October 31, 2023

**Important**

Starting from `v2.11.0-aliyun.1`, the ALB Ingress Controller no longer automatically updates port information in AlbConfig. Manually specify the ports to use when you create an AlbConfig. For an example of how to create an AlbConfig, see [Create and use an ALB Ingress to expose services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-use-alb-ingress-to-expose-services-to-the-public).

-   Added support for IP-based rate limiting.
    
-   Added support for Tracing Analysis.
    
-   Added support for recording custom headers in access logs.
    
-   Added support for configuring mutual authentication.
    
-   Stopped automatically updating AlbConfig when updating Ingress rules.
    
-   Prohibited deleting a listener from AlbConfig if Ingress rules still exist on the listener.
    
-   Optimized the resource deletion behavior when reusing an ALB instance.
    
-   Optimized the certificate association logic to support multi-page certificates.
    
-   Fixed an issue with incorrect HTTP/2 configurations.
    
-   Fixed an issue where an incorrect forwarding action configuration might cause the controller to crash.
    
-   Fixed an issue where the backend server group might not be updated promptly when the controller restarted.
    

This upgrade does not affect your services.

### August 2023

**Version**

**Update Time**

**Change Description**

**Impact**

v2.10.0-aliyun.1

August 15, 2023

-   Added support for adding hash values to Ingress and AlbConfig to prevent unexpected changes when the ALB Ingress Controller restarts.
    
-   Optimized the exposure of anomalous activities.
    
-   Optimized the reconciliation behavior when reserved words are used.
    
-   Fixed an issue where the cache was not synchronized after an Ingress resource was deleted.
    
-   Fixed an issue where node event processing was interrupted.
    
-   Optimized the server group synchronization logic.
    

This upgrade does not affect your services.

### **July 2023**

**version number**

**Update Time**

**Change Description**

**Impact**

v2.9.0-aliyun.1

July 11, 2023

-   Avoided API throttling when a service concurrently reconciles multiple server groups.
    
-   Exposed Service reconciliation events.
    
-   Optimized the usage of the `ssl-redirect` annotation.
    
-   Filtered out SM-series certificates during automatic certificate discovery.
    
-   Fixed a reconciliation issue with cookieConfig in custom forwarding rules.
    
-   Fixed an issue where an Ingress without a configured `http` field caused the controller to crash.
    
-   Fixed an issue where configuring multiple actions for an Ingress caused an upgrade/downgrade to fail.
    

This upgrade does not affect your services.

### **June 2023**

**Version**

**Update Time**

**Change Description**

**Impact**

v2.8.3-aliyun.1

June 5, 2023

-   Fixed an issue where server reconciliation did not retry.
    
-   Fixed an issue where setting a key for a custom forwarding rule was ineffective.
    

This upgrade does not affect your services.

### May 2023

**Version**

**Update Time**

**Change Description**

**Impact**

v2.8.2-aliyun.1

May 25, 2023

-   Fixed an issue where a forwarding rule might be deleted when a pod restarted.
    
-   Remove the deletion logic when detaching an Internet Shared Bandwidth package.
    
-   Temporarily disabled updates to the network type.
    

This upgrade does not affect your services.

v2.8.1-aliyun.1

May 9, 2023

-   Managed components are highly available by default because they use multiple replicas.
    
-   Added support for specifying a resource group when creating an ALB instance.
    
-   Added support for multiple status codes for health checks.
    
-   Added support for consistent hashing for backend server groups.
    
-   Added support for the `use-regex` annotation.
    
-   Added support for specifying a single zone.
    
-   Added support for updating the instance network type.
    
-   Added support for attaching Internet Shared Bandwidth.
    
-   Optimized asynchronous API operation calls.
    
-   Optimized error messages.
    
-   Fixed inconsistencies and duplicate settings for the default certificate compared to the console.
    

This upgrade does not affect your services.

### March 2023

**Version**

**Update Time**

**Change Description**

**Impact**

v2.7.0-aliyun.1

March 14, 2023

-   Optimized the Reconcile flow and rule priority to improve rule synchronization speed.
    
-   Optimized event notifications.
    
-   You can directly bind a service to a backend server group.
    
-   Added support for directly associating an ACL resource ID.
    
-   Added support for deploying HTTPS and QUIC on the same port.
    
-   Added support for multiple server groups and rewrites for custom actions. Made custom actions case-insensitive.
    
-   Gave certificates configured by secrets higher priority than those in AlbConfig.
    
-   Removed hard coding for timeout periods.
    
-   Fixed an issue with incorrect Gzip compression configurations.
    

This upgrade does not affect your services.

### December 2022

**Version**

**Update Time**

**Change Description**

**Impact**

v2.6.0-aliyun.1

December 23, 2022

-   Added support for custom tags for ALB resources.
    
-   Optimized event notifications.
    
-   Fixed an issue where Ingress deletion was blocked. Removed the Finalizer to support non-blocking deletion.
    
-   Fixed an issue with IPv6 network type changes.
    
-   Fixed an issue with duplicate Ingress certificate discovery.
    
-   Fixed an issue with incorrect tags for Canary grayscale backend server groups.
    

This upgrade does not affect your services.

### November 2022

**Version**

**Update Time**

**Change Description**

**Impact**

v2.5.0-aliyun.1

November 23, 2022

-   Added support for uploading secret certificates.
    
-   Added support for custom headers and cookies.
    
-   You can set the ACL whitelist.
    
-   Optimized listener processing logic. Isolated listener errors from reconciliation. An error on listener 443 does not affect the reconciliation of listener 80.
    

This upgrade does not affect your services.

### August 2022

**Version**

**Update Time**

**Change Description**

**Impact**

v2.4.0-aliyun.1

August 10, 2022

-   Added support for cross-domain requests.
    
-   Added support for persistent connections to backend servers.
    
-   Optimized the listener deletion processing logic.
    

This upgrade does not affect your services.

### June 2022

**Version**

**Update Time**

**Change Description**

**Impact**

v2.3.0-aliyun.1

June 23, 2022

-   Added support for replacing the server group load balancing algorithm using an annotation. For more information, see [Specify a server group load balancing algorithm](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-alb-ingress-configurations#section-ccl-dhj-mm4).
    
-   Fixed an issue with the listener protocol.
    

This upgrade does not affect your services.

### April 2022

**Version**

**Update Time**

**Change Description**

**Impact**

v2.2.0-aliyun.1

April 13, 2022

-   Added support for rewrite. You can configure the rewrite feature in the annotations. For more information, see [Configure rewrite](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-alb-ingress-configurations#section-a8h-6m8-1vx).
    
-   Added support for the TCP health check protocol. This protocol sends SYN handshake messages to detect whether the server port is alive. For more information, see [Configure health checks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-alb-ingress-configurations#section-9wg-nm6-9st).
    
-   Added support for specifying a TLS security policy. You can specify a TLS security policy when you configure an HTTPS listener in AlbConfig. For more information, see [Specify a TLS security policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#section-bnn-7mt-lxt).
    

This upgrade does not affect your services.
