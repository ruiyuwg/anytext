This topic describes the security system of Container Service for Kubernetes (ACK) from three perspectives: runtime security, trusted software supply chains, and infrastructure security. The system includes features such as security inspection, policy management, runtime monitoring and alerting, image scanning, image signing, cloud-native application delivery chains, default security settings, identity management, and fine-grained access control.

![61](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4777317361/p203109.png)

## Runtime security

-   Security inspection
    
    Application developers must follow the principle of least privilege when they configure application deployment templates. Attackers often exploit unnecessary privileged capabilities in application pods to launch container escape attacks. Therefore, ACK provides a security configuration inspection feature for application runtimes. This helps you check in real time for security risks in the configurations of running applications.
    
    Inspection results are displayed in reports. The reports also include descriptions of scanned items and provide suggestions for fixes. You can also configure periodic inspections. The scan results are written to a specified Logstore in Simple Log Service (SLS) for storage. For more information, see [Use configuration inspection to check for security risks in cluster workloads](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-the-inspection-feature-to-detect-security-risks-in-the-workloads-of-an-ack-cluster#task-2552179).
    
-   Policy management
    
    ACK uses the Gatekeeper admission controller, which is based on Open Policy Agent (OPA) policies, to provide extended features such as policy governance status statistics and log reporting and retrieval. ACK also has a rich built-in library of policy governance rules that provide more policy rules for Kubernetes scenarios. You can visually configure policy governance rules in the ACK console. This lowers the barrier to using policy governance features. For more information, see [Configure container security policies (new)](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/configure-and-enforce-ack-pod-security-policies).
    
    The ACK policy management feature helps enterprise security O&M engineers automatically block risky applications that do not comply with policies during the deployment phase. This improves the runtime security of applications in the cluster and reduces communication and learning costs for enterprise application development and O&M teams.
    
-   Runtime monitoring and alerting
    
    Even after a containerized application is successfully deployed, passing API server authentication and admission control, security monitoring and alerting capabilities are still required during application runtime. This adheres to the zero trust security principle for cloud-native applications. Therefore, ACK is deeply integrated with the alert processing and vulnerability detection capabilities of Security Center. Cluster administrators can provide monitoring and alerting capabilities during application runtime. Key container-side attack prevention behaviors include the following:
    
    -   Alerts for malicious image startups.
        
    -   Detection and removal of viruses and malicious programs.
        
    -   Alerts for internal container intrusions.
        
    -   Early warnings for container escapes and high-risk operations.
        
    
    You can receive real-time alerts on the **Security** > **Security Monitoring** page of the cluster management page. View and handle the alert details as prompted. For more information, see [Use security monitoring](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-security-monitoring-capabilities#task-1930740).
    
-   Sandboxed container management
    
    Compared to the original Docker runtime, a sandboxed container provides a new container runtime option. It lets you run your applications in a lightweight virtual machine sandbox environment with an independent kernel to provide better security isolation.
    
    Sandboxed containers are especially suitable for scenarios such as untrusted application isolation, fault isolation, performance isolation, and workload isolation between multiple users. While improving security, they have a minimal performance impact and provide the same user experience as Docker containers for features such as logging, monitoring, and elasticity. For more information about sandboxed container management, see [Sandboxed Container](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-10/#concept-2329190).
    
-   ACK-TEE confidential computing
    
    For application scenarios with strong security requirements, such as finance and government, ACK-TEE confidential computing provides a cloud-native, all-in-one confidential computing container platform based on hardware encryption technology. It helps you protect the security, integrity, and confidentiality of data during use (computation), while simplifying the development, delivery, and management costs for trusted or confidential applications.
    
    Confidential computing lets you place important data and code in a special Trusted Execution Environment (TEE) without exposing it to other parts of the system. Other applications, the BIOS, OS, kernel, administrators, O&M engineers, cloud vendors, or even hardware other than the CPU cannot access the data on the confidential computing platform. This greatly reduces the risk of sensitive data leakage and provides you with better control, transparency, and privacy. For more information, see [ACK-TEE confidential computing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/tee-based-confidential-computing/#task-2490003).
    

## Trusted software supply chain

-   Image scanning
    
    Container Registry supports security scanning for all Linux-based container images to identify known vulnerabilities in the images. You can obtain vulnerability assessments and related fix suggestions, which significantly reduces the security risks of using containers. Container Registry is also integrated with the Security Center's scan engine, which can detect system vulnerabilities, application vulnerabilities, and malicious samples in images.
    
-   Image signing
    
    In container image management, you can use a content trust mechanism to ensure the security of the image source and prevent tampering. The image creator can digitally sign the image. The digital signature is stored in Container Registry. Verifying the container image signature before deployment ensures that only container images signed by trusted authorities are deployed in the cluster. This reduces the risk of running unexpected or malicious code in your environment. It also ensures the security and traceability of application images from the software supply chain to the container deployment process. For information about how to configure and use image signing and signature verification, see [Use the kritis-validation-hook component to automatically verify container image signatures](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kritis-validation-hook-to-automatically-verify-the-signatures-of-container-images#task-2479083).
    
-   Cloud-native application delivery chain
    
    In scenarios that require secure and efficient container delivery, you can use the cloud-native application delivery chain feature of Container Registry. You can configure tasks such as image building, image scanning, global image synchronization, and image deployment. You can customize fine-grained security policies to achieve end-to-end observable and traceable secure delivery. This ensures that a single code commit triggers secure distribution and efficient deployment across multiple regions worldwide, upgrading the delivery process from DevOps to DevSecOps. For more information about cloud-native application delivery chains, see [Create a delivery chain](/help/en/acr/user-guide/create-a-delivery-chain#task-2345265).
    

## Infrastructure security

-   Default security
    
    The configurations of nodes and control plane components in an Alibaba Cloud ACK cluster are hardened based on the Alibaba Cloud Kubernetes security hardening feature. All system components in the cluster are also hardened according to container security best practices. This ensures that system component images have no critical-level CVE vulnerabilities.
    
    -   Each new cluster is assigned a corresponding security group by default. This security group only allows inbound ICMP requests from the Internet. By default, you cannot connect to cluster nodes using SSH over the Internet. If you want to configure an SSH connection to a cluster node over the Internet, see [Connect to the master nodes of an ACK dedicated cluster using SSH](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ssh-to-connect-to-the-master-nodes-of-a-dedicated-kubernetes-cluster#task-1664343).
        
    -   Cluster nodes access the public network through a NAT Gateway, which further reduces security risks.
        
    -   On worker nodes of a managed cluster, the RAM roles attached to the nodes follow the principle of least privilege. The Alibaba Cloud resource access permissions for these roles have been minimized. For more information, see [\[Product Change\] Announcement on the convergence of RAM role permissions for managed cluster nodes](/help/en/ack/product-overview/ack-reduces-the-permissions-of-worker-ram-roles-in-managed-kubernetes-clusters#concept-2485733).
        
    
-   Identity management
    
    All communication links between components within an ACK cluster require TLS certificate validation to ensure end-to-end secure data transmission. The ACK control plane is responsible for the automatic renewal of system component certificates. RAM users or users who assume a RAM role can obtain the Kubeconfig access credential to connect to a specified cluster's API Server through the console or OpenAPI. For more information, see [Obtain the KubeConfig of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-query-the-kubeconfig-file-of-a-cluster#doc-api-CS-DescribeClusterUserKubeconfig). ACK maintains the identity information issued in the access credentials. If a distributed Kubeconfig is compromised, you can revoke it promptly. For more information, see [Revoke the KubeConfig credential of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/revoke-a-kubeconfig-credential#task-2333177).
    
    When creating a cluster, ACK supports the **Service Account Token Volume Projection** feature to enhance the security of ServiceAccounts in applications. For more information, see [Deploy service account token volume projection](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/enable-service-account-token-volume-projection#task-2460323).
    
-   Fine-grained access control
    
    Access control for Kubernetes resources within an ACK cluster is implemented based on Kubernetes RBAC, which is a fundamental and necessary security hardening measure for applications. On the **Authorization management** page in the ACK console, ACK provides namespace-level, fine-grained RBAC authorization capabilities. Key features include the following:
    
    -   The system provides predefined RBAC permission templates for roles such as administrator, O&M engineer, and developer to meet various enterprise permission requirements. This lowers the difficulty of using RBAC authorization.
        
    -   It supports batch authorization for multiple clusters and multiple RAM users.
        
    -   It supports authorization for users who assume a RAM role.
        
    -   It supports binding custom ClusterRoles in the cluster to a user.
        
    
    For more information, see [Configure RBAC roles for a RAM user or RAM role](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).
    
    ACK also supports installing the Gatekeeper component through component management to provide fine-grained access control based on the OPA policy engine. For more information, see [gatekeeper](/help/en/ack/product-overview/gatekeeper#task-1938542).
    
-   Auditing
    
    ACK is deeply integrated with Simple Log Service and supports collection, retrieval, and visualization features for multiple types of audit logs. These include the following three types:
    
    -   Cluster API Server audit logs: These help you record or trace the daily operations of cluster visitors, which is an important part of cluster security O&M. On the **Cluster Auditing** page, you can view rich audit reports and configure real-time alerts for operations on specified resource types based on the log content. For more information, see [Use the cluster API Server audit feature](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/work-with-cluster-auditing#task-1797722).
        
    -   Ingress traffic audit: This helps you understand the overall status of cluster Ingresses through various visual traffic reports. This includes comprehensive traffic monitoring of service access PV and UV, success and failure ratios, and latency information. It also supports the use of machine learning algorithms provided by Simple Log Service to automatically detect anomalies from Ingress metrics using various time series analysis algorithms, which improves the efficiency of problem detection. For more information, see [Collect and analyze NGINX Ingress access logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525).
        
    -   Event monitoring audit: Event-based monitoring helps you diagnose cluster anomalies and security risks in real time by capturing events. For more information, see [Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#task-1461430).
        
    
-   Secret encryption at rest
    
    Native Kubernetes Secrets are only Base64-encoded when stored at rest in etcd. To protect the security of sensitive data in Secrets at rest, you can use keys created in Alibaba Cloud Key Management Service (KMS) to encrypt Kubernetes cluster Secrets in ACK Pro clusters. This achieves encryption at rest for sensitive application data. For more information, see [Use Alibaba Cloud KMS to encrypt Secrets at rest](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-kms-to-encrypt-kubernetes-secrets-2#task-2568562).
