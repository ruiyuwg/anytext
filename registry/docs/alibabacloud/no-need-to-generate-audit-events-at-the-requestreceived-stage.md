The API server generates audit logs to record Kubernetes API requests and responses. Container Service for Kubernetes (ACK) allows cluster administrators to analyze the audit logs of the API server to audit operations performed on resources by different users. This enables cluster administrators to trace the history of cluster operations and troubleshoot cluster exceptions, which greatly simplifies cluster security O&M.

## Usage notes

This topic applies to ACK managed clusters, ACK dedicated clusters, and ACK Serverless clusters.

For more information about how to use the cluster auditing feature in registered clusters, see [Use cluster auditing](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/use-cluster-auditing-in-registered-clusters#task-2112966).

## Billing

On the bills overview page, you can view the billing information about audit log data. For more information, see [View your bills](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/view-your-bills#task-2260050). For more information about the billing method of audit logs, see [Pay-by-feature](/help/en/sls/pay-as-you-go#concept-y3m-g5n-vdb).

## Step 1: Enable cluster auditing

By default, **Enable Log Service** is automatically selected when you create a cluster to enable the cluster auditing feature. If the cluster auditing feature is disabled, perform the following steps to enable it.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Security** > **Cluster Auditing**.
    

If you have not enabled the cluster log or cluster auditing feature, follow the on-screen instructions to manually select a Simple Log Service project and enable the feature.

**Important**

Make sure that the following Simple Log Service quotas within your Alibaba Cloud account are sufficient. Otherwise, you fail to enable the cluster auditing feature.

-   The quota on Simple Log Service projects.
    
-   The quota on Logstores in each Simple Log Service project.
    
-   The quota on dashboards in each Simple Log Service project.
    

For more information about Simple Log Service quotas and how to adjust quotas, see [Adjust resource quotas](/help/en/sls/adjust-resource-quotas).

## Step 2: View audit log reports

**Important**

Do not modify audit log reports. If you want to customize audit log reports, log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and create new reports.

ACK provides four built-in audit log reports, which provide an overview of the audit center, an overview of resource operations, a detailed list of resource operations, and a list of Common Vulnerabilities and Exposures (CVE) vulnerabilities. On the **Cluster Auditing** page, you can filter audit events by namespace or RAM user and view the following content in reports.

You can also click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2149816171/p753131.png) icon in the upper-right part of a chart to perform other operations, such as viewing the chart in full-screen mode or previewing query statements.

### **Overview**

This report displays all events in the current ACK cluster and detailed information about important events, such as RAM user operations, Internet access, command executions, resource deletion, Secret access, and Kubernetes CVE vulnerabilities.

### **Operations Overview**

This report provides statistics about common operations related to computing resources, network resources, and storage resources in the cluster. The operations include creating, updating, deleting, and accessing resources.

-   Computing resources: Deployment, StatefulSet, CronJob, DaemonSet, Job, and Pod.
    
-   Network resources: Service and Ingress.
    
-   Storage resources: ConfigMap, Secret, and PersistentVolumeClaim.
    
-   Access control resources: Role, ClusterRole, RoleBinding, and ClusterRoleBinding.
    

![资源操作概览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6924904271/p133069.png)

### **Operation Details**

This report provides operation details on a resource type. You can select or enter a resource type to query operation details in real time. The report displays the total number of operations, distribution of namespaces, operation success rate, trend of operations over time, and other operation details.

![资源操作详细列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6924904271/p133070.png)

**Note**

To query operations related to CustomResourceDefinition (CRD) resources registered in Kubernetes or resources that are not listed in the report, enter the plural form of the resource name. For example, to query operations related to the AliyunLogConfig CRD, enter `AliyunLogConfigs`.

### **CVE Vulnerabilities**

This report displays Kubernetes CVE vulnerabilities in the current cluster. You can select or enter a RAM user ID to query information in real time. Then, the report displays Kubernetes CVE vulnerabilities related to the RAM user that you specify. For more information about CVE vulnerabilities and solutions, see [\[CVE Securities\] CVE vulnerability fixes](/help/en/ack/product-overview/security-bulletins/).

## (Optional) Step 3: View detailed log data

To customize queries or analyze audit log data, log on to the Simple Log Service console and view detailed log data.

**Note**

By default, the retention period of the audit logs of the API server in an ACK managed cluster is 30 days and the retention period of the audit logs of the API server in an ACK dedicated cluster is 365 days. For more information about how to modify the default retention period, see [Manage a logstore](/help/en/sls/manage-a-logstore#concept-xkb-zh5-vdb).

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, click **Cluster Information**.
    
3.  On the **Basic Information** tab, click the project ID next to **Log Service Project**. In the Logstores list, click the Logstore named **audit-${clustered}**.
    
    During the cluster creation process, a Logstore named `audit-${clustereid}` is automatically created in the project.
    
    **Important**
    
    By default, indexes are configured for the Logstore. Do not modify the indexes in case reports cannot be generated.
    
4.  Enter a query statement and specify the time range to be queried, such as 15 minutes. Then, click **Search & Analysis** to view the query results.
    
    You can query audit logs in the following ways:
    
    -   To query the operations performed by a RAM user, enter the RAM user ID and click **Search & Analysis**.
        
    -   To query the operations performed on a resource, enter the name of the computing, network, storage, or access control resource and click **Search & Analysis**.
        
    -   To filter out operations related to system components, enter `NOT user.username: node NOT user.username: serviceaccount NOT user.username: apiserver NOT user.username: kube-scheduler NOT user.username: kube-controller-manager` and click **Search & Analysis**.
        
    
    For more information about how to query log data, see [Query methods](/help/en/sls/log-search-overview#concept-wjl-x3q-zdb).
    

## (Optional) Step 4: Configure alerting

You can configure Simple Log Service to generate alerts in real time when operations are performed on specific resources. Supported alert notification methods include

DingTalk chatbots, custom webhooks, and Alibaba Cloud Message Center. For more information, see [Configure an alert rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service).

### Example 1: Generate alerts when commands are executed in containers

An enterprise wants to forbid users to log on to containers or run commands in containers. When a user runs a command in a container, an alert is immediately generated. The alert message contains information about the container, command, user, event ID, time, and source IP address.

-   Sample query statement:
    
    ```
    verb : create and objectRef.subresource:exec and stage:  ResponseStarted | SELECT auditID as "Event ID", date_format(from_unixtime(__time__), '%Y-%m-%d %T' ) as "Time",  regexp_extract("requestURI", '([^\?]*)/exec\?.*', 1)as "Resource",  regexp_extract("requestURI", '\?(.*)', 1)as "Command" ,"responseStatus.code" as "Status code",
     CASE 
     WHEN "user.username" != 'kubernetes-admin' then "user.username"
     WHEN "user.username" = 'kubernetes-admin' and regexp_like("annotations.authorization.k8s.io/reason", 'RoleBinding') then regexp_extract("annotations.authorization.k8s.io/reason", ' to User "(\w+)"', 1)
     ELSE 'kubernetes-admin' END  
     as "User account", 
    CASE WHEN json_array_length(sourceIPs) = 1 then json_format(json_array_get(sourceIPs, 0)) ELSE  sourceIPs END
    as "Source IP address" order by "Time" desc  limit 10000
    ```
    
-   The condition expression is `Event =~ ".*"`.
    

### Example 2: Generate alerts when the API server fails to access the Internet

A cluster has Internet access enabled. To prevent attacks, the enterprise needs to monitor the number of times and failure rate of Internet access. When the number of times of Internet access reaches the threshold (10) and the failure rate exceeds the threshold (50%), an alert is immediately generated. The alert message contains information about the region of the source IP address, source IP address, and whether the IP address is risky.

-   Sample query statement:
    
    ```
    * | select ip as "Source IP address", total as "Number of times of Internet access", round(rate * 100, 2) as "Failure rate in percentage", failCount as "Number of times of illegal access", CASE when security_check_ip(ip) = 1 then 'yes' else 'no' end  as "Whether the IP address is risky",  ip_to_country(ip) as "Country", ip_to_province(ip) as "Province", ip_to_city(ip) as "City", ip_to_provider(ip) as "ISP" from (select CASE WHEN json_array_length(sourceIPs) = 1 then json_format(json_array_get(sourceIPs, 0)) ELSE  sourceIPs END
    as ip, count(1) as total,
    sum(CASE WHEN "responseStatus.code" < 400 then 0 
    ELSE 1 END) * 1.0 / count(1) as rate,
    count_if("responseStatus.code" = 403) as failCount
    from log  group by ip limit 10000) where ip_to_domain(ip) != 'intranet' and ip not LIKE '%,%' ORDER by "Number of times of Internet access" desc limit 10000
    ```
    
-   The condition expression is `Source IP address =~ ".*"`.
    

## **What to do next**

### **Change the Simple Log Service project**

If you want to migrate audit logs to another Simple Log Service project, you can use the **Change Log Service Project** feature in cluster auditing.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Security** > **Cluster Auditing**.
    
3.  In the upper-right corner of the cluster auditing page, click **Change Log Service Project** to migrate audit logs to another Simple Log Service project.
    

### **Disable cluster auditing**

You can perform the following steps to disable cluster auditing.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Security** > **Cluster Auditing**.
    
3.  In the upper-right corner of the **Cluster Auditing** page, click **Disable Cluster Auditing**.
    

### **Use a third-party log service in an** ACK dedicated cluster

We recommend that you use Simple Log Service to store audit logs. To use a third-party log service, you can choose not to use Simple Log Service when you create the cluster and then integrate the third-party log service to collect and retrieve audit logs. You can obtain the audit log source files of master nodes in the `/var/log/kubernetes/kubernetes.audit` path. The files are in the JSON format.

## Introduction to the cluster auditing configuration for ACK dedicated clusters

When you configure cluster components for an ACK dedicated cluster, the console selects **Enable Log Service** by default to enable cluster auditing. Event data is collected based on the audit policy and written to the backend.

**Note**

This feature involves modifications to the kube-apiserver startup parameters and is only applicable to ACK dedicated clusters. The cluster control planes of ACK managed clusters and ACK Serverless clusters are managed by ACK and do not support manual modifications.

### **Audit policy**

The audit policy defines the audit configuration and log collection rules. Event logs of different audit levels are collected based on different log collection rules. The following table describes the audit levels.

**Audit level**

**Log collection rule**

None

Events that match the rule are not collected.

Metadata

Collect the request metadata, such as the user information and timestamps. The request body and response body are not collected.

Request

Collect the request metadata and request body. The response body is not collected. This rule does not apply to non-resource requests.

RequestResponse

Collect the request metadata, request body, and response body. This rule does not apply to non-resource requests.

You can set the `--audit-policy-file` flag to save the following YAML file as the boot configuration of the API server. After you log on to a master node, you can view the audit policy file in the `/etc/kubernetes/audit-policy.yml` directory. The following YAML file is a sample audit policy.

View the content of the YAML file

```
apiVersion: audit.k8s.io/v1 # Required. Set to audit.k8s.io/v1 if the Kubernetes version of the cluster is 1.24 or later and set to audit.k8s.io/v1beta1 if the Kubernetes version of the cluster is earlier than 1.24.
kind: Policy
# No need to generate audit events at the RequestReceived stage. 
omitStages:
  - "RequestReceived"
rules:
  # The following types of requests are frequent and the risk of these requests is low. We recommend that you set the rule to None to skip these requests. 
  - level: None
    users: ["system:kube-proxy"]
    verbs: ["watch"]
    resources:
      - group: "" # core
        resources: ["endpoints", "services"]
  - level: None
    users: ["system:unsecured"]
    namespaces: ["kube-system"]
    verbs: ["get"]
    resources:
      - group: "" # core
        resources: ["configmaps"]
  - level: None
    users: ["kubelet"] # legacy kubelet identity
    verbs: ["get"]
    resources:
      - group: "" # core
        resources: ["nodes"]
  - level: None
    userGroups: ["system:nodes"]
    verbs: ["get"]
    resources:
      - group: "" # core
        resources: ["nodes"]
  - level: None
    users:
      - system:kube-controller-manager
      - system:kube-scheduler
      - system:serviceaccount:kube-system:endpoint-controller
    verbs: ["get", "update"]
    namespaces: ["kube-system"]
    resources:
      - group: "" # core
        resources: ["endpoints"]
  - level: None
    users: ["system:apiserver"]
    verbs: ["get"]
    resources:
      - group: "" # core
        resources: ["namespaces"]
  # Set the rule to None for read-only URLs, such as /healthz*, /version*, and /swagger*. 
  - level: None
    nonResourceURLs:
      - /healthz*
      - /version
      - /swagger*
  # Set the rule to None for events. 
  - level: None
    resources: 
      - group: "" # core
        resources: ["events"]
  # Set the rule to Metadata for Secrets, ConfigMaps, and TokenReview API requests that may contain sensitive information or binary files. 
  - level: Metadata
    resources:
      - group: "" # core
        resources: ["secrets", "configmaps"]
      - group: authentication.k8s.io
        resources: ["tokenreviews"]
  # Responses may contain large amounts of data. Set the rule to Request so that the response body is not collected. 
  - level: Request
    verbs: ["get", "list", "watch"]
    resources:
      - group: "" # core
      - group: "admissionregistration.k8s.io"
      - group: "apps"
      - group: "authentication.k8s.io"
      - group: "authorization.k8s.io"
      - group: "autoscaling"
      - group: "batch"
      - group: "certificates.k8s.io"
      - group: "extensions"
      - group: "networking.k8s.io"
      - group: "policy"
      - group: "rbac.authorization.k8s.io"
      - group: "settings.k8s.io"
      - group: "storage.k8s.io"
  # The rule is set to RequestResponse by default for known Kubernetes API requests to collect the request and response bodies. 
  - level: RequestResponse
    resources:
      - group: "" # core
      - group: "admissionregistration.k8s.io"
      - group: "apps"
      - group: "authentication.k8s.io"
      - group: "authorization.k8s.io"
      - group: "autoscaling"
      - group: "batch"
      - group: "certificates.k8s.io"
      - group: "extensions"
      - group: "networking.k8s.io"
      - group: "policy"
      - group: "rbac.authorization.k8s.io"
      - group: "settings.k8s.io"
      - group: "storage.k8s.io"
  # The rule is set to Metadata by default for other requests. 
  - level: Metadata
```

**Note**

Logs are not immediately generated after requests are received. Logs are generated only after response headers are sent.

The system does not audit kube-proxy watch requests, GET requests sent from the kubelet and `system:nodes` to nodes, endpoint operations performed by Kubernetes components in the kube-system namespace, and GET requests sent from the API server to namespaces.

The system records the request and response bodies based on reads and writes for the `authentication`, `rbac`, `certificates`, `autoscaling`, and `storage` APIs.

### **The audit backend**

The collected audit events are stored in the backend log file system as log files in JSON format. You can configure the following flags as the boot configuration of the API server.

**Note**

After you log on to a master node, you can view the configuration file of the API server in the `/etc/kubernetes/manifests/kube-apiserver.yaml` directory.

**Flag**

**Description**

`--audit-log-maxbackup`

The maximum number of shards of audit logs that can be stored. Default value: 10.

`--audit-log-maxsize`

The maximum memory storage for an individual audit log. Default value: 100 MB.

`--audit-log-path`

The output path of audit logs. Default value: `/var/log/kubernetes/kubernetes.audit`.

`--audit-log-maxage`

The retention period of audit logs in days. Default value: 7.

`--audit-policy-file`

The path of the audit policy file. Default value: `/etc/kubernetes/audit-policy.yml`.

## **References**

-   To use `kubectl exec` to audit command executions inside containers, see [Enable container auditing](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-container-auditing).
    
-   For more information about security best practices for enterprise security O&M engineers, see [Best security practices](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/best-practices-for-security-1/).
    
-   [FAQ about container security](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/faq-about-container-security)
