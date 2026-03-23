In the managed cluster architecture of Container Service for Kubernetes (ACK), security compliance must follow the principle of shared responsibility. ACK is responsible for ensuring the security of the infrastructure resources on which ACK clusters are deployed and the security of control plane components and etcd. This topic describes the shared responsibility model of ACK.

## Responsibilities of Alibaba Cloud

Alibaba Cloud uses comprehensive platform security capabilities to ensure the security of infrastructure resources used control planes, including computing, storage, and network resources in the cloud. In addition, Alibaba Cloud enhances the security of control plane component configurations and images based on security baselines defined by security protection features such as Alibaba Cloud Linux Security Hardening. When OS vulnerabilities or Kubernetes component vulnerabilities are discovered, Alibaba Cloud releases vulnerability notices at the earliest opportunity. Alibaba Cloud also releases patches, new OS versions, or new component versions to fix the vulnerabilities. To meet the security protection requirements in scenarios where lifecycle management of enterprise-class cloud-native applications is required, Alibaba Cloud provides [security protection features](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/security-system-overview#concept-jyf-5sb-wdb) and [security best practices](/help/en/doc-detail/347684.html#task-2134590).

## Responsibilities of customers

The security O&M engineers of customers are responsible for enforcing security protection for applications that are deployed on the cloud, and configuring and updating the security settings of cloud resources. The following operations are included:

-   Fix the vulnerabilities related to operating systems, system components, and container runtimes based on the release notes, vulnerability patches, or version updates that are provided by Alibaba Cloud.
    
-   Configure the security settings of ACK clusters, node pools, and network resources based on security principles. Do not configure security parameters or permission settings that can be exploited by attackers.
    
-   Follow the principle of least privilege and grant only the required permissions to applications, accounts, or roles to manage credentials, deploy and implement security policies, and configure security parameters.
    
-   Ensure supply chain security for application artifacts.
    
-   Ensure the security of sensitive data and the application runtime environment.
    
-   For resigned employees or untrusted individuals, when you delete their RAM users or RAM roles, the Role-Based Access Control (RBAC) permissions they have in the kubeconfig file will not be automatically revoked. Therefore, before you delete the RAM user or RAM role of a user, you must revoke their kubeconfig file. For more information, see [Revoke a KubeConfig credential](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/revoke-a-kubeconfig-credential).
    

## Understand the shared responsibility model

You must understand the shared responsibility model and the responsibility boundary between Alibaba Cloud and the enterprise before you design and deploy your business systems.

The following figure shows the shared responsibility model that is used in ACK managed clusters.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9538406671/CAEQUBiBgMDBpOfB2RkiIDhjMTZmOGNhNTU1OTQwNGJiZGYyM2M1YmMxMTg0YzMx3963382_20230830144006.372.svg)

When you use ACK Serverless clusters or deploy ack-virtual-node in an ACK managed cluster, Alibaba Cloud ensures the security of the control plane components, infrastructure, and the [Elastic Container Instance (ECI)](/help/en/eci/product-overview/what-is-elastic-container-instance) that the pod runs on. Users are responsible for the recreation of the pod so that the patching can take effect. The following figure shows the shared responsibility model that is used to ensure the security of ACK Serverless clusters or ack-virtual-node deployed in an ACK managed cluster.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9538406671/CAEQUBiBgIDlr9fC2RkiIDMxNjg1OGYwMTUxZDRmYmI4YTJkZDMxNWQyMzVlNzRk3963382_20230830144006.372.svg)

If your cluster uses [managed node pools](/help/en/ack/overview-of-managed-node-pools#task-1998740), Alibaba Cloud can automate OS vulnerability patching and kubelet version updates based on the configurations of the managed node pools. The OS patches are provided by [Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb). If you use custom OS images to deploy nodes in your cluster, OS vulnerabilities can only be manually patched. The following figure shows the shared responsibility model that is used when managed node pools are created in ACK managed clusters.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9538406671/CAEQUBiBgMDYyN7C2RkiIDU0NTUwNDlmNzAwYzQ2MGI4NGUzZDQxNDYwNzk0ODMz3963382_20230830144006.372.svg)
