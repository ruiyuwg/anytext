Container Intelligent Service (CIS) provides the Ingress diagnostics feature to help you diagnose common Ingress issues. This topic describes the Ingress diagnostic items and provides suggestions on how to fix issues.

The diagnostic items of Ingress diagnostics include the Ingress, startup parameters, Ingress pod error log, and Ingress controller Server Load Balancer (SLB) instance.

**Important**

When you use the diagnostics feature, CIS runs a data collection program on each node in the cluster and collects diagnostic results. The collected information includes the system version, load status, Docker status, kubelet status, and key error information in system logs. CIS does not collect business information or sensitive data.

## Ingress diagnostic items

**Note**

The diagnostic items may vary based on the cluster configuration. The actual diagnostic items on the diagnostic page shall prevail.

**Category**

**Description**

[Ingress](#section-zkq-44z-kdg)

Check the availability of Ingress resources.

[Addon](#section-fya-txb-8ux)

Check the startup parameters of the Ingress component, the Service that is associated with the Ingress, and the Ingress pods.

[SLB](#section-aqj-pdy-vi4)

Check the status of the SLB instance used by the Ingress controller, the maximum number of connections, the QPS, and the health status.

## Ingress

**Diagnostic item**

**Description**

**How to fix the issue**

Ingress check

Check whether the specified Ingress exists.

Check whether an Ingress rule is created for the specified URL. If the URL is valid, check the Ingress rules. For example, check whether a regular expression is specified as the path or whether the use-regex annotation is used.

base-url-scheme check

Check whether the `nginx.ingress.kubernetes.io/base-url-scheme` annotation is used. This annotation is deprecated in Ingress controller 0.22.0.

Check the version of the Ingress controller, and then delete the annotation or use other annotations.

grpc-backend check

Check whether the `nginx.ingress.kubernetes.io/grpc-backend` annotation is used. This annotation is deprecated in Ingress controller 0.21.0.

Check the version of the Ingress controller, and then delete the annotation or use other annotations.

mirror-uri check

Check whether the `nginx.ingress.kubernetes.io/mirror-uri` annotation is used. This annotation is deprecated in Ingress controller 0.24.0.

Check the version of the Ingress controller, and then delete the annotation or use other annotations.

secure-backends check

Check whether the `nginx.ingress.kubernetes.io/secure-backends` annotation is used. This annotation is deprecated in Ingress controller 0.21.0.

Check the version of the Ingress controller, and then delete the annotation or use other annotations.

session-cookie-hash check

Check whether the `nginx.ingress.kubernetes.io/session-cookie-hash` annotation is used. This annotation is deprecated in Ingress controller 0.24.0.

Check the version of the Ingress controller, and then delete the annotation or use other annotations.

nginx.com/nginx.org check

Check whether the Ingress uses annotations that start with `nginx.com/nginx.org`. These annotations are used only for the commercial version of the NGINX Ingress controller and cannot be used by the open source version of the NGINX Ingress controller.

Use the annotations for the open source version of the NGINX Ingress controller. For more information about Ingresses, see [NGINX Ingress management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-management/) or the [official documentation](https://kubernetes.github.io/ingress-nginx/).

Status of Canary

To use the Canary feature, you must specify `nginx.ingress.kubernetes.io/canary: "true"`. If you do not specify the setting, the Canary feature does not take effect.

To enable the Canary feature for an Ingress, add the `nginx.ingress.kubernetes.io/canary: "true"` annotation to the Ingress rules.

## Addon

**Diagnostic item**

**Description**

**How to fix the issue**

Percentage of Ingress pods in the Ready state

Check the percentage of Ingress pods that are in the Ready state. Less than 100 may indicate an issue.

Check the error log to identify and fix the faulty pods. For more information, see [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#task-2175175).

Ingress IP address check

Check whether the Ingress controller allocates an IP address to the Ingress.

If no IP address is allocated, check whether the Ingress controller exists in the IngressClass of the Ingress and whether the Ingress controller works as expected. Fix the issue based on the diagnostic result.

Leader pod check

Check whether a leader pod is elected. If no leader pod is elected, the pod startup time may be too short or the permissions of the Ingress controller are not properly configured.

Check whether the Ingress pods generate error logs and fix the issue shown in the error logs. For more information about Ingress troubleshooting, see [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#task-2175175).

Incorrect NGINX Ingress annotations

The open source version of the NGINX Ingress controller uses annotations that start with `nginx.ingress.kubernetes.io`. The open source version cannot recognize annotations that start with `nginx.com/nginx.org`. If you use annotations that start with `nginx.com/nginx.org`, your configurations may become invalid or do not meet your requirements.

Use the annotations supported by the open source version of the NGINX Ingress controller. For more information about annotations, see [Annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/).

Use of capture groups together with rewrite-target in NGINX Ingresses

Check whether the rewrite-target annotation in NGINX Ingresses is used together with capture groups. In Ingress controller 0.22.0 and later versions, you need to explicitly specify capture groups when you use the rewrite-target annotation. Otherwise, traffic forwarding errors occur.

Properly configure Ingresses. For more information about Ingress configurations, see [Advanced NGINX Ingress configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-nginx-ingress-configurations#task-1796525).

NGINX Ingress canary rules

Check whether no more than two Services are specified in service-match or service-weight. You can specify service-match or service-weight to distribute traffic between only two Services. If you specify more than two Services, the excessive Services are ignored. As a result, traffic forwarding may fail to meet your requirements.

Adjust the number of Services.

Ingress name

Display the names of the matching Ingress rules.

None.

Pod error logs

Check whether the Ingress controller pods generate error logs. When error logs are generated, the Ingress controller may not run as expected.

Identify the cause and fix the issue based on the error logs. For more information about Ingress troubleshooting, see [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#task-2175175).

Use of capture groups in the paths of rewrite-target

If you want to use the `nginx.ingress.kubernetes.io/rewrite-target` annotation in Ingress controller 0.22.0 and later versions, you need to specify capture groups. Otherwise, a path error may occur.

Properly configure the Ingresses. For more information about Ingresses, see [Configure routing rules to redirect traffic from specific URLs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-nginx-ingress-configurations#section-xsg-g5g-1uy).

Multiple targets in service-\*

You can specify service-match or service-weight to distribute traffic between only two Services.

Ensure to configure service-weight or service-match correctly. For more information about the configuration, see [Use the NGINX Ingress controller to implement canary releases and blue-green deployments](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-gray-scale-and-blue-green-publishing-through-nginx-ingress#task-2035658).

Ingress Service check

Check whether the Service specified in the startup parameters of the Ingress exists. If the Service is deleted, the Ingress may fail to start.

Check the name of the deleted Service in the startup parameters of the Deployment and fix the issue. For more information, see [High-risk operations related to networks and SLB instances](/help/en/ack/product-overview/before-you-start#section-qyx-kxv-p4v).

Ingress Service endpoint check

Check whether the Service associated with the Ingress has an endpoint. If the Service does not have an endpoint, the SLB instance cannot route traffic to the Ingress controller.

Check whether the label selector of the Service works as expected.

Ingress Service events

Check whether the Service associated with the Ingress generates Warning or Error events. This issue may be caused by SLB configuration errors.

Check the Service events, locate the cause, and then fix the issue. For more information about Service troubleshooting, see [Service errors and solutions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-troubleshooting-2#section-lzw-o22-ajy).

Ingress Service external traffic policy

The external traffic policy specifies how external traffic is distributed in the cluster. The default external traffic policy is Local. You can also set it to Cluster. We recommend that you use the Local mode. In Cluster mode, client IP addresses may not be preserved. Consequently, health check results may be incorrect.

The preceding precaution does not apply if your business requires the Cluster mode or you want to access the Ingress controller through the SLB instance IP address from within the cluster. If you do not have the preceding requirements, we recommend that you use the Local mode.

Ingress Service external IP address

Check whether the cloud controller manager assigns an IP address to the Service associated with the Ingress. If no IP address is assigned, the Ingress may not be able to access the Internet.

Make sure that the status of the Service, the status of the cloud controller manager, and the SLB quotas are normal. Most issues are exposed through events.

Ingress Service type (LoadBalancer)

Check whether the type of Service specified in the startup parameters of the Ingress is LoadBalancer. If the Service type is not LoadBalancer, the Ingress controller may be inaccessible over the Internet.

The preceding precaution does not apply if your business does not require Services of the LoadBalancer type. If you do not have the preceding requirement, change the type of Service to LoadBalancer.

\--force-namespace-isolation check

Check whether the `--force-namespace-isolation` startup parameter is used. This parameter is deprecated in Ingress controller 0.24.0.

Check the version of the Ingress controller and delete the startup parameter.

\--sort-backends check

Check whether the `--sort-backends` startup parameter is used. This parameter is deprecated in Ingress controller 0.22.0.

Check the version of the Ingress controller and delete the startup parameter.

## SLB

**Diagnostic item**

**Description**

**How to fix the issue**

SLB instance

Check whether the SLB instance of the Ingress controller exists.

Check whether the Service specified in the Ingress Controller exists, whether the Service generates anomaly events, and whether the SLB instance exists in the SLB console. If the SLB instance is accidentally deleted, recreate the Service to fix the issue. For more information, see [What do I do if I accidentally delete an SLB instance?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-s2u-6bx-q0b)

Ingress controller SLB instance backend server health

Check the health status of the backend servers of the SLB instance.

If the backend servers of the SLB instance are unhealthy, check whether the Service specified in the Ingress controller generates anomaly events and whether the components are overwhelmed. For more information about component troubleshooting, see [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#task-2175175).

SLB ID

Display the ID of the SLB instance.

None.

Ingress controller SLB instance connections

Check whether the number of connections on the SLB instance within the previous three days exceeds 80% of the upper limit. If the number of connections reaches the upper limit, clients cannot establish connections to the SLB instance.

If the number of connections on the SLB instance has reached the upper limit, upgrade the SLB instance to avoid business interruptions. For more information, see [Use an existing SLB instance](/help/en/doc-detail/206618.html#task-2045334).

Ingress controller SLB instance new connection rate

Check whether the rate of new connections on the SLB instance within the previous three days exceeds 80% of the upper limit. If the rate reaches the upper limit, clients cannot establish new connections to the SLB instance within a short period of time.

If the rate of new connections on the SLB instance has reached the upper limit, upgrade the SLB instance to avoid business interruptions. For more information, see [Use an existing SLB instance](/help/en/doc-detail/206618.html#task-2045334).

Ingress controller SLB instance QPS

Check whether the QPS value of the SLB instance within the previous three days exceeds 80% of the upper limit. If the QPS value reaches the upper limit, clients cannot connect to the SLB instance.

If the QPS of the SLB instance has reached the upper limit, upgrade the SLB instance to avoid business interruptions. For more information, see [Use an existing SLB instance](/help/en/doc-detail/206618.html#task-2045334).

Host and SecretName for TLS

You need to specify both the Host and SecretName parameters when you configure Ingress TLS.

Specify both the Host and SecretName parameters and make sure that the host is the same as that in the certificate.

Ingress controller SLB health check

Check whether the SLB instance fails to pass health checks within the previous three days. This issue occurs when the components are overwhelmed or the SLB configurations contain errors.

If the SLB instance fails to pass health checks within the previous three days, to prevent business interruptions, check whether the Service specified in the Ingress controller generates anomaly events and whether the components are overwhelmed. For more information about component troubleshooting, see [NGINX Ingress controller troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#task-2175175).
