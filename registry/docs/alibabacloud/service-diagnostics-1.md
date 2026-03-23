Container Service for Kubernetes provides the Service diagnostics feature to help you troubleshoot Service issues. This topic describes the diagnostic items and suggestions on how to fix Service issues.

The diagnostic items of this feature are related to billing methods, certificates, reuse of Classic Load Balancer (CLB) instances, CLB quotas, and anomaly events.

**Important**

When you use the Service diagnostics feature, ACK runs a data collection program on each node in the cluster to collect diagnostic results. The collected information includes the system version, the status of workloads, Docker, and kubelet, and the key error information in system logs. ACK does not collect business information or sensitive data.

## Diagnostic items

**Category**

**Description**

[Service](#section-71o-4o4-60a)

Checks the consistency between Service configurations and CLB instance configurations.

[ResourceQuotas](#section-kp3-ole-skj)

Diagnoses issues related to CLB quotas.

## Service

**Diagnostic item**

**Description**

**How to fix**

LBInstanceChargeType

Checks whether the billing method of a CLB instance is the same as the billing method specified in the related Service.

If the CLB instance and Service use different billing methods, modify the annotations of the Service to use the billing method of the CLB instance. For more information about the annotations of Services, see [Add annotations to the YAML file of a Service to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).

LBCertId

Checks whether the certificate of a CLB instance are the same as the certificate specified in the related Service.

If the CLB instance and Service use different certificates, modify the certificate ID annotation of the Service and specify the certificate ID that is used by the HTTPS listeners of the CLB instance. For more information about the annotations of Services, see [Add annotations to the YAML file of a Service to configure CLB instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948).

LBReusable

Checks whether a CLB instance can be reused.

For more information about how to reuse a CLB instance, see [Considerations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-existing-slb-instance-to-expose-an-application#section-k8n-zs0-bxv).

ServiceWarningEvents

Checks whether Service error events are generated.

Service error events include the \[%s\] content. For more information about how to troubleshoot Service errors, see [Service errors and solutions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-troubleshooting-2#section-lzw-o22-ajy).

LBExisted

Checks whether the CLB instance that is associated with a Service exists.

If the CLB instance that is associated with a Service does not exist, diagnose the Service. For more information, see [Service errors and solutions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-troubleshooting-2#section-lzw-o22-ajy).

ReadyPodNum

Checks the number of backend pods of a Service that are in the Ready state.

This diagnostic item checks whether the backend pods of a Service are in the Ready state.

## ResourceQuotas

**Diagnostic item**

**Description**

**How to fix**

SlbQuotaBackendserverAttachedNum

Checks the number of CLB instances that are associated with an Elastic Compute Service (ECS) instance.

By default, an ECS instance can be added to at most 50 backend server groups. After the number of CLB instances that can be associated with an ECS instance reaches the upper limit, pod updates cannot be synchronized to the backend servers of the CLB instances. You can view CLB quotas on the [Quota Management](https://slb.console.alibabacloud.com/slb/quota?spm=a2c4g.11186623.0.0.11213b80SRqfP4) page in the Server Load Balancer (SLB) console.

SlbQuotaBackendserversNum

Checks the number of backend servers of a CLB instance.

By default, you can add at most 200 backend servers to a CLB instance. After the number of backend servers of a CLB instance reaches the upper limit, pod updates cannot be synchronized to the backend servers of the CLB instance. You can view CLB quotas on the [Quota Management](https://slb.console.alibabacloud.com/slb/quota?spm=a2c4g.11186623.0.0.11213b80SRqfP4) page in the SLB console.

SlbQuotaInstancesNum

Checks the number of CLB instances that belong to an Alibaba Cloud account.

By default, you can use an Alibaba Cloud account to create at most 60 CLB instances. You cannot create CLB instances after the upper limits is reached. You can view CLB quotas on the [Quota Management](https://slb.console.alibabacloud.com/slb/quota?spm=a2c4g.11186623.0.0.11213b80SRqfP4) page in the SLB console.

SlbQuotaListenersNum

Checks the number of listeners that are configured for a CLB instance.

By default, you can configure at most 50 listeners for a CLB instance. After the number of listeners that are configured for a CLB instance reaches the upper limit, Service updates cannot be synchronized to the CLB instance. You can view CLB quotas on the [Quota Management](https://slb.console.alibabacloud.com/slb/quota?spm=a2c4g.11186623.0.0.11213b80SRqfP4) page in the SLB console.
