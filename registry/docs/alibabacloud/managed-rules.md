When you create a rule in the Cloud Config console, you can use a rule template.

## **Template description**

-   Rule templates are predefined functions in Function Compute that you can use to quickly create rules and audit your resources.
    
-   The following table lists the rule templates supported by Cloud Config. The templates are categorized by **Alibaba Cloud service** and **service category** to help you find and use them quickly.
    
-   If you need a rule template that is not listed, you can [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex). Alibaba Cloud evaluates all requests and adds new templates for rules that have broad applicability.
    

## **Compute**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for remediation**

**Supports dry run**

### **ECS**

[ECS instances use the subscription billing method](/help/en/cloud-config/latest/ecs-instance-chargetype-check#concept-2229414)

None

Yes

[Subscription ECS instances are checked for expiration](/help/en/cloud-config/latest/ecs-instance-expired-check#task-2047424)

None

No

[Auto-renewal is enabled for subscription ECS instances](/help/en/cloud-config/latest/ecs-instance-auto-renewal-enabled#concept-2229428)

None

No

[ECS instances are not in the Stopped state](/help/en/cloud-config/latest/ecs-instance-status-no-stopped#task-2047424)

None

No

[Stopped pay-as-you-go ECS instances use economical mode](/help/en/cloud-config/latest/ecs-instance-post-paid-stopped-mode-check#concept-2269804)

None

No

[Pay-as-you-go ECS instances are checked for long-running status](/help/en/cloud-config/latest/after-paid-ecs-instance-running-for-a-long-time)

None

No

[ECS instances with static public IP addresses use the pay-by-bandwidth billing method](/help/en/cloud-config/latest/ecs-internet-charge-type-check#concept-2229417)

None

No

[No idle ECS data disks exist](/help/en/cloud-config/latest/ecs-disk-in-use#task-2047424)

None

No

[Idle disks are detected](/help/en/cloud-config/latest/cloud-disk-idle-detection)

None

No

[ECS instances are not locked](/help/en/cloud-config/latest/ecs-instance-no-lock#concept-2229408)

None

No

[Deletion protection is enabled for ECS instances](/help/en/cloud-config/latest/ecs-instance-deletion-protection-enabled#task-2047424)

ACS-ECS-BulkyEnableDeletionProtection

Yes

[The number of CPU cores for ECS instances meets the minimum requirement](/help/en/cloud-config/latest/ecs-cpu-min-count-limit#task-2047424)

None

No

[The number of GPU cores for ECS instances meets the minimum requirement](/help/en/cloud-config/latest/ecs-gpu-min-count-limit#task-2047424)

None

No

[The system disk capacity for a specified operating system type is greater than or equal to a specified value](/help/en/cloud-config/latest/ecs-system-disk-size-check#concept-2229429)

None

No

[Deprecated ECS instance families are not used](/help/en/cloud-config/latest/not-using-a-deprecated-ecs-instance)

None

No

[ECS instances use a specified operating system version](/help/en/cloud-config/latest/ecs-instance-os-name-check#concept-2270240)

None

Yes

[ECS instance types meet standard requirements](/help/en/cloud-config/latest/ecs-desired-instance-type#task-2047424)

None

No

[ECS instances are deployed in a VPC](/help/en/cloud-config/latest/ecs-instances-in-vpc#task-2047424)

None

No

[Running ECS instances are in a VPC](/help/en/cloud-config/latest/ecs-running-instances-in-vpc#concept-2267478)

ACS-ECS-BulkyStopClassicInstances

No

[ECS instances are not associated with public IP addresses](/help/en/cloud-config/latest/ecs-instance-no-public-ip#task-2047424)

None

Yes

[Running ECS instances are not associated with public IP addresses](/help/en/cloud-config/latest/ecs-running-instance-no-public-ip#concept-2267432)

ACS-ECS-BulkyStopInstancesWithPublicIp

No

[The maximum outbound public bandwidth of an ECS instance with a public IP address is less than a specified value](/help/en/cloud-config/latest/ecs-internetmaxbandwidth-check#concept-2229418)

None

No

[Security Center protection is enabled for running ECS instances](/help/en/cloud-config/latest/ecs-instance-enabled-security-protection#concept-2229430)

None

No

[ECS instances are in a specified security group](/help/en/cloud-config/latest/ecs-instance-attached-security-group#task-2047424)

None

Yes

[Inbound rules of security groups are valid](/help/en/cloud-config/latest/sg-public-access-check#task-2047424)

None

Yes

[Security groups do not open high-risk ports to all CIDR blocks](/help/en/cloud-config/latest/sg-risky-ports-check#task-2047424)

None

Yes

[Security groups do not open high-risk ports to all CIDR blocks for a specified protocol](/help/en/cloud-config/latest/ecs-security-group-risky-ports-check-with-protocol#concept-2276345)

None

No

[Inbound rules of security groups do not allow access from all ports](/help/en/cloud-config/latest/ecs-security-group-not-open-all-port#concept-2232467)

None

Yes

[Inbound rules of security groups do not allow access for all protocols](/help/en/cloud-config/latest/ecs-security-group-not-open-all-protocol#concept-2232468)

None

Yes

[Outbound rules of security groups are not set to allow all traffic](/help/en/cloud-config/latest/ecs-security-group-egress-not-all-access#concept-2232472)

None

Yes

[Inbound rules for ports not on the whitelist are valid](/help/en/cloud-config/latest/ecs-security-group-white-list-port-check#concept-2232473)

None

Yes

[The source IP addresses allowed by inbound security group rules do not include public IP addresses](/help/en/cloud-config/latest/ecs-security-group-not-internet-cidr-access#concept-2232471)

None

Yes

[A security group description is required](/help/en/cloud-config/latest/ecs-security-group-description-check#concept-2229432)

None

Yes

[Idle security groups are checked](/help/en/cloud-config/latest/ecs-security-group-not-used#concept-2229415)

None

No

[Enterprise security groups are used](/help/en/cloud-config/latest/using-enterprise-type-security-groups)

None

No

[Public network access is not configured in ECS launch templates](/help/en/cloud-config/latest/the-ecs-startup-template-configuration-should-not-set-public-network)

None

No

[ECS instances use specified images](/help/en/cloud-config/latest/ecs-instance-imageid-check#task-2047424)

None

Yes

[The source of ECS instance images meets specified requirements](/help/en/cloud-config/latest/ecs-instance-image-type-check#concept-2229426)

None

No

[ECS instances use images shared by a specified account](/help/en/cloud-config/latest/ecs-instances-use-images-shared-by-a-specified-account)

None

No

[ECS instances use images that are within their validity period](/help/en/cloud-config/latest/ecs-instances-use-images-within-the-specified-validity-period)

None

No

[Images from a specified source are used in ECS launch template versions](/help/en/cloud-config/latest/use-a-specified-source-image-in-the-ecs-launch-template)

None

No

[Security groups are specified in ECS launch template versions](/help/en/cloud-config/latest/the-security-group-that-is-added-to-the-ecs-launch)

None

No

[Data disk encryption is configured in ECS launch template versions](/help/en/cloud-config/latest/set-data-disk-encryption-in-the-ecs-startup-template-version)

None

No

[System disk encryption is configured in ECS launch template versions](/help/en/cloud-config/latest/set-system-disk-encryption-in-the-ecs-startup-template-version)

None

No

[An instance RAM role is granted to ECS instances](/help/en/cloud-config/latest/an-ecs-instance-is-granted-the-instance-ram-role)

None

No

[ECS instances are not associated with an SSH key pair](/help/en/cloud-config/latest/the-ecs-instance-is-not-bound-to-an-ssh-key)

None

No

[Key pairs are used to log on to Linux hosts](/help/en/cloud-config/latest/ecs-instance-login-use-keypair#concept-2229416)

None

Yes

[System disk encryption is enabled for ECS instances](/help/en/cloud-config/latest/ecs-system-disk-encrypted#concept-2229427)

None

No

[Data disk encryption is enabled for ECS instances](/help/en/cloud-config/latest/ecs-disk-encrypted#task-2047424)

None

Yes

[The memory size of ECS instances meets the minimum requirement](/help/en/cloud-config/latest/ecs-memory-min-size-limit#task-2047424)

None

Yes

[Encryption is enabled for ECS data disks that are to be attached](/help/en/cloud-config/latest/ecs-available-disk-encrypted#concept-2229423)

None

No

[Encryption is enabled for in-use ECS data disks](/help/en/cloud-config/latest/ecs-in-use-disk-encrypted#concept-2229424)

None

No

[KMS encryption is enabled for ECS disks](/help/en/cloud-config/latest/enable-kms-encryption-for-ecs-disks)

None

No

[An automatic snapshot policy is configured for ECS disks](/help/en/cloud-config/latest/ecs-disk-auto-snapshot-policy#concept-2229410)

None

Yes

[A reasonable creation time is set for the automatic snapshot policy](/help/en/cloud-config/latest/ecs-snapshot-policy-timepoints-check#concept-2275423)

None

No

[The retention period of automatic snapshots for ECS instances meets specified requirements](/help/en/cloud-config/latest/ecs-snapshot-retention-days#concept-2229413)

None

No

[Automatic snapshots are retained when ECS data disks are released](/help/en/cloud-config/latest/ecs-disk-retain-auto-snapshot#concept-2229412)

None

Yes

[ECS disks are not locked](/help/en/cloud-config/latest/ecs-disk-no-lock#concept-2229411)

None

No

[The automatic snapshot policy for ECS disks or the entire-machine backup feature of Cloud Backup is used](/help/en/cloud-config/latest/automatic-snapshot-policies-for-cloud-disks-of-ecs-instances-or)

None

No

[Cross-region replication for automatic snapshots of ECS disks or remote replication for entire-machine backups in Cloud Backup is enabled](/help/en/cloud-config/latest/enable-the-cross-region-replication-of-the-automatic-snapshot-policy-for)

None

No

[Cross-region replication is enabled for the File Backup repository of an ECS instance](/help/en/cloud-config/latest/enable-file-backup-database-cross-region-replication-for-ecs-instances)

None

No

[The data protection score for ECS instance backups is checked](/help/en/cloud-config/latest/ecs-instance-backup-data-protection-score)

None

No

[A process with a specified name runs on an ECS instance](/help/en/cloud-config/latest/ecs-instance-running-process-check#concept-2229420)

None

No

[A process with a specified name is disabled on an ECS instance](/help/en/cloud-config/latest/ecs-instance-running-process-disabled#concept-2269924)

None

No

[Software with a specified name is installed on an ECS instance](/help/en/cloud-config/latest/ecs-instance-installed-software-check#concept-2229422)

None

No

[Running ECS instances have no unpatched vulnerabilities](/help/en/cloud-config/latest/ecs-instance-updated-security-vul#concept-2229433)

None

No

[The CloudMonitor agent is installed on running ECS instances](/help/en/cloud-config/latest/ecs-instance-monitor-enabled#concept-2229434)

None

No

[The reinforced mode is enforced for accessing ECS instance metadata](/help/en/cloud-config/latest/ecs-instance-meta-data-mode-check#concept-2229435)

None

No

[The content of Cloud Assistant commands is checked](/help/en/cloud-config/latest/ecs-command-exclude-sensitive-content#task-2047424)

None

No

[Brute-force attack protection rules are created for ECS instances](/help/en/cloud-config/latest/ecs-instance-enable-security-center-anti-rule#concept-2271095)

None

No

[Simple Log Service is used for centralized business log collection and monitoring](/help/en/cloud-config/latest/unified-collection-and-monitoring-of-business-logs-by-using-log)

None

No

[Application Load Balancer is used to build a high-availability application architecture](/help/en/cloud-config/latest/using-application-load-balancing-to-build-a-highly-available-application)

None

No

[An ECS instance is attached to only one elastic network interface (ENI)](/help/en/cloud-config/latest/only-one-eni-is-bound-to-an-ecs-instance)

None

No

[The number of ECS instances is unbalanced across zones](/help/en/cloud-config/latest/imbalanced-number-of-ecs-instance-zones)

None

No

[Zone-redundant ESSD data disks are used](/help/en/cloud-config/latest/use-the-same-city-redundant-essd-data-disk)

None

No

[The Anti-DDoS protection status for ECS instances is checked](/help/en/cloud-config/latest/ecs-ddos-protection-status-check)

None

No

[Idle ECS instances are detected based on CPU utilization](/help/en/cloud-config/latest/ecs-instance-cpu-usage-idle-detection)

None

No

[Idle ECS instances are detected based on memory usage](/help/en/cloud-config/latest/the-security-group-that-you-set-to-join-in-the)

None

No

[Idle ECS instances are detected based on disk usage](/help/en/cloud-config/latest/disk-usage-idle-of-an-ecs-instance)

None

No

[The application checklist for ECS instances is checked](/help/en/cloud-config/latest/check-the-application-manifest-of-an-ecs-instance)

None

No

[Health check is enabled for ECS instances in an Auto Scaling group](/help/en/cloud-config/latest/ess-group-health-check#concept-2229409)

None

No

[Idle ECS instances are detected based on GPU utilization](/help/en/cloud-config/latest/detection-of-idle-gpu-usage-of-ecs)

None

No

[Idle ECS instances are detected based on GPU memory usage](/help/en/cloud-config/latest/detection-of-idle-gpu-video-memory-usage-of-ecs)

None

No

[File Backup or self-managed database backup is enabled for ECS instances](/help/en/cloud-config/latest/backup-files-or-user-created-databases)

None

No

[ECS instances are not associated with public IP addresses and do not allow inbound traffic from all IP addresses](/help/en/cloud-config/latest/ecs-instances-are-prohibited-from-binding-public-addresses-and-opening)

None

No

### **Dedicated Host (DDH)**

[The number of CPU cores for a Dedicated Host meets the minimum requirement](/help/en/cloud-config/latest/ddh-cpu-min-count-limit#task-2047424)

None

No

[The memory size of a Dedicated Host meets the minimum requirement](/help/en/cloud-config/latest/ddh-memory-min-size-limit#task-2047424)

None

No

[The number of sockets for a Dedicated Host meets the minimum requirement](/help/en/cloud-config/latest/ddh-socket-min-count-limit#task-2047424)

None

No

### **Auto Scaling**

[A security group is associated with instances in an Auto Scaling configuration](/help/en/cloud-config/latest/configure-an-associated-security-group-for-an-instance-in-an)

None

No

[The security group configured for an ESS scaling group is not set to 0.0.0.0/0](/help/en/cloud-config/latest/the-security-group-configured-for-the-ess-scaling-group-should)

None

No

[Data disk encryption is configured in an Auto Scaling configuration](/help/en/cloud-config/latest/setting-data-disk-encryption-in-auto-scaling-configuration)

None

No

[System disk encryption is configured in an Auto Scaling configuration](/help/en/cloud-config/latest/setting-system-disk-encryption-in-auto-scaling-configuration)

None

No

[Images from a specified source are used in an Auto Scaling configuration](/help/en/cloud-config/latest/use-a-specified-source-image-in-the-auto-scaling-configuration)

None

No

[Images in an Auto Scaling configuration are checked](/help/en/cloud-config/latest/auto-scaling-configuration-image-detection)

None

No

[The existence of the Server Load Balancer instance associated with an Auto Scaling group is checked](/help/en/cloud-config/latest/existence-detection-of-load-balancing-associated-with-an-elastic-scaling)

None

No

### **Function Compute**

[A Function Compute service is configured to be invoked only from a specified VPC](/help/en/cloud-config/latest/fc-service-vpc-binding#concept-2225642)

None

No

[Public network access is disabled for a Function Compute service](/help/en/cloud-config/latest/fc-service-internet-access-disable#concept-2269567)

None

No

[A Function Compute service can be accessed from the Internet and is mapped to a custom domain name](/help/en/cloud-config/latest/fc-function-internet-and-custom-domain-enable#concept-2269569)

None

No

[An HTTP trigger for a function is configured to require identity verification](/help/en/cloud-config/latest/fc-trigger-http-not-anonymous#concept-2225641)

None

No

[A Function Compute function is mapped to a custom domain name and a specified TLS version is enabled](/help/en/cloud-config/latest/fc-function-custom-domain-and-tls-enable#concept-2269573)

None

No

[A Function Compute function is mapped to a custom domain name and a certificate is uploaded](/help/en/cloud-config/latest/fc-function-custom-domain-and-cert-enable#concept-2269571)

None

No

[A Function Compute function is mapped to a custom domain name and HTTPS is enabled](/help/en/cloud-config/latest/fc-function-custom-domain-and-https-enable#concept-2269570)

None

No

[Tracing Analysis is enabled for a Function Compute service](/help/en/cloud-config/latest/fc-service-tracing-enable#concept-2272254)

None

No

[The logging feature is enabled for a Function Compute service](/help/en/cloud-config/latest/function-compute-enables-logging)

None

No

[A server role is configured for a Function Compute service](/help/en/cloud-config/latest/function-compute-is-configured-with-a-service-role)

None

No

[Deprecated runtimes are not used in Function Compute](/help/en/cloud-config/latest/fc-not-using-obsolete-runtime)

None

No

[The settings of a function in Function Compute meet specified parameter requirements](/help/en/cloud-config/latest/in-function-compute-the-function-settings-meet-the-specified-parameter)

None

No

## **Containers**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for remediation**

**Can I perform a dry run?**

### **Container Service for Kubernetes**

[Enable release protection for ACK clusters](/help/en/cloud-config/latest/1234#concept-2116377)

None

No

[Use managed ACK clusters of the Professional Edition](/help/en/cloud-config/latest/use-the-professional-version-of-the-managed-type-ack-cluster)

None

No

[The ACK cluster is running the latest version](/help/en/cloud-config/latest/ack-cluster-has-been-upgraded-to-the-latest-version)

None

No

[Use a supported ACK version](/help/en/cloud-config/latest/use-the-ack-version-in-maintenance)

None

No

[Enable the managed node pool feature for ACK clusters](/help/en/cloud-config/latest/enable-node-pool-hosting-for-ack-clusters)

None

No

[Enable node autoscaling for ACK node pools](/help/en/cloud-config/latest/enable-automatic-node-scaling-for-the-ack-cluster-node-pool)

None

No

[Check the availability of scaling configurations for ACK node pools](/help/en/cloud-config/latest/cluster-node-pool-scaling-configuration-availability-check)

None

No

[Check the availability of security groups for ACK node pools](/help/en/cloud-config/latest/ack-cluster-node-pool-security-group-availability-check)

None

No

[Check the availability of vSwitches for ACK node pools](/help/en/cloud-config/latest/switch-availability-detection-in-the-node-pool-of-ack-cluster)

None

No

[Check the availability of scaling groups for ACK node pools](/help/en/cloud-config/latest/ack-cluster-node-pool-scaling-group-availability-check)

None

No

[An ACK cluster without an Internet endpoint](/help/en/cloud-config/latest/ack-cluster-public-endpoint-check#concept-2116367)

None

No

[Use the Terway network plugin for ACK clusters](/help/en/cloud-config/latest/ack-cluster-network-type-check#concept-2116567)

None

No

[Use multi-zone ACS clusters at the region level](/help/en/cloud-config/latest/using-a-regional-multi-az-cluster)

None

No

[Use multi-zone ACK clusters at the region level](/help/en/cloud-config/latest/use-regional-multi-zone-ack-clusters)

None

No

[Enable the RRSA feature for ACK clusters](/help/en/cloud-config/latest/enable-the-rrsa-function-in-the-ack-cluster)

None

No

[Install the ack-ram-authenticator component in ACK clusters for RAM-based request authentication](/help/en/cloud-config/latest/ack-cluster-installs-ack-ram-authenticator-components-to-perform-request-authentication-based)

None

No

[Enable and configure container security policies for ACK clusters](/help/en/cloud-config/latest/enable-the-ack-cluster-and-configure-the-container-security-policy)

None

No

[Configure at-rest encryption for Secrets in ACK clusters](/help/en/cloud-config/latest/configure-secret-disk-drop-encryption-in-the-ack-cluster)

None

No

[Install the CloudMonitor agent on ACK cluster nodes](/help/en/cloud-config/latest/234#concept-2116568)

None

No

[Install the CloudMonitor agent on running nodes in ACK clusters](/help/en/cloud-config/latest/install-cloud-monitoring-plug-in-on-the-running-node-of-the)

None

No

[Enable logging for control plane components in ACK clusters](/help/en/cloud-config/latest/log-enabling-detection-of-control-plane-components-in-the-ack)

None

No

[Install the audit log plugin in ACK clusters](/help/en/cloud-config/latest/the-audit-log-plug-in-is-installed-in-the-ack-cluster)

None

No

[Enable the API Server audit feature for ACK clusters](/help/en/cloud-config/latest/enable-the-apiserver-audit-function-in-the-ack-cluster)

None

No

[Install the intra-container audit component in ACK clusters to audit executed commands](/help/en/cloud-config/latest/the-ack-cluster-installs-the-internal-operation-audit-component-of)

None

No

[Check that the number of backend servers for the CoreDNS service is not zero in ACK clusters](/help/en/cloud-config/latest/ack-cluster-inspection-coredns-service-backend-server-count-is-not)

None

No

[Check the number of replicas for CoreDNS in ACK clusters](/help/en/cloud-config/latest/check-the-number-of-coredns-replicas-in-an-ack-cluster)

None

No

[Check the pod status of CoreDNS in ACK clusters](/help/en/cloud-config/latest/pod-status-detection-of-coredns-in-the-ack-cluster)

None

No

[Check the backend status of the CLB instance for the API Server in ACK clusters](/help/en/cloud-config/latest/check-the-clb-backend-status-of-the-ack-cluster-apiserver)

None

No

[Check that the CLB instance attached to the API Server exists in ACK clusters](/help/en/cloud-config/latest/ack-cluster-checks-whether-the-clb-instance-bound-to-apiserver)

None

No

[Check that the CLB instance attached to the API Server is in the Normal status in ACK clusters](/help/en/cloud-config/latest/ack-cluster-checks-that-the-clb-instance-bound-to-apiserver)

None

No

[Check that the port listener configuration of the CLB instance attached to the API Server is normal in ACK clusters](/help/en/cloud-config/latest/ack-cluster-inspection-apiserver-binding-clb-port-listening-configuration-is)

None

No

[Check the availability of APIService in ACK clusters](/help/en/cloud-config/latest/ack-cluster-apiservice-availability-check)

None

No

[Check the status of elasticity components in ACK clusters](/help/en/cloud-config/latest/elastic-component-status-of-ack-cluster)

None

No

[Install and configure the inspection component in ACK clusters to check for workload security threats](/help/en/cloud-config/latest/ack-cluster-installation-configuration-inspection-component-check-workload-security-risks)

None

No

[Check for medium-risk threats during ACK cluster inspections](/help/en/cloud-config/latest/ack-cluster-inspection-medium-risk-item-detection)

None

No

[Enable the AIOps-based inspection feature for ACK clusters](/help/en/cloud-config/latest/enable-intelligent-operation-configuration-inspection-in-ack-cluster)

None

No

[Install the cost analysis component in ACK clusters](/help/en/cloud-config/latest/ack-cluster-installation-cost-insight-components)

None

No

[Check for Kubelet version consistency across ACK cluster nodes](/help/en/cloud-config/latest/kubelet-version-consistency-check-on-ack-cluster-nodes)

None

No

[Check for certificate ID consistency for LoadBalancer services in ACK clusters](/help/en/cloud-config/latest/check-the-consistency-of-the-loadbalancerservice-certificate-id-in-the)

None

No

[Check for billing method consistency for LoadBalancer services in ACK clusters](/help/en/cloud-config/latest/check-the-consistency-of-the-loadbalancerservice-payment-mode-in-the)

None

No

### **Container Registry (ACR)**

[Set the image repository type to private in Container Registry](/help/en/cloud-config/latest/cr-repository-type-private#concept-2226369)

None

Yes

[Image versions in Container Registry are immutable](/help/en/cloud-config/latest/cr-repository-immutablity-enable#concept-2270900)

None

No

[Check the whitelist for Container Registry instances](/help/en/cloud-config/latest/cr-instance-any-ip-access-check#concept-2270994)

None

No

[Public network access is disabled for the Container Registry instance](/help/en/cloud-config/latest/cr-instance-public-access-check#concept-2270991)

None

No

[Check for idle Container Registry instances](/help/en/cloud-config/latest/container-image-instance-idle-detection)

None

No

[Update image versions in image repositories within the specified time](/help/en/cloud-config/latest/the-image-version-in-the-container-image-repository-is-updated)

None

No

[Enable security scanning for Container Registry instances](/help/en/cloud-config/latest/turn-on-security-scanning-for-container-image-instances)

None

No

[Associate Container Registry instances with zone-redundant OSS buckets](/help/en/cloud-config/latest/container-image-instances-associated-with-redundant-oss-buckets-in-the)

None

No

### **Elastic Container Instance**

[Mount volumes to container groups in ECI instances](/help/en/cloud-config/latest/eci-elastic-instance-container-group-mount-data-volume)

None

No

[Ensure environment variables for ECI container groups do not contain sensitive information](/help/en/cloud-config/latest/eci-elastic-container-group-environment-variables-do-not-contain-sensitive)

None

No

[Ensure that running ECI instances have no vulnerabilities to be fixed](/help/en/cloud-config/latest/the-running-elastic-container-instance-has-no-vulnerabilities-to-fix)

None

No

[Enable Security Center protection for running ECI container groups](/help/en/cloud-config/latest/enable-protection-in-security-center)

None

No

## **Storage**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for remediation**

**Does this service support dry run?**

### **Object Storage Service (OSS)**

[OSS bucket ACL prohibits public-read access](/help/en/cloud-config/latest/oss-bucket-public-read-prohibited#task-2047424)

ACS-OSS-PutBucketAcl

No

[OSS bucket ACL prohibits public-read-write access](/help/en/cloud-config/latest/oss-bucket-public-write-prohibited#task-2047424)

ACS-OSS-PutBucketAcl

Yes

[OSS bucket access policy is configured for secure access](/help/en/cloud-config/latest/oss-bucket-only-https-enabled#concept-2227419)

None

No

[OSS bucket does not grant permissions to anonymous accounts](/help/en/cloud-config/latest/oss-bucket-policy-no-any-anonymous#concept-2227631)

None

Yes

[Public OSS bucket has an access policy and does not grant permissions to anonymous accounts](/help/en/cloud-config/latest/oss-bucket-anonymous-prohibited#concept-2227417)

None

No

[OSS bucket authorization policy is configured with IP address restrictions](/help/en/cloud-config/latest/oss-bucket-authorize-specified-ip#concept-2227420)

None

No

[Bucket policy is checked for authorization outside the organization](/help/en/cloud-config/latest/bucket-policy-authorization-outside-the-organization)

None

No

[Bucket policy does not grant authorization outside the organization](/help/en/cloud-config/latest/the-bucket-policy-does-not-grant-authorization-outside-the-organization)

None

No

[OSS bucket policy does not contain the authorization specified by parameters](/help/en/cloud-config/latest/the-oss-bucket-policy-does-not-contain-the-authorization-content)

None

No

[Server-side encryption with KMS is enabled for the OSS bucket](/help/en/cloud-config/latest/oss-default-encryption-kms#task-2047424)

None

No

[Default server-side encryption is enabled for the OSS bucket](/help/en/cloud-config/latest/oss-bucket-server-side-encryption-enabled#task-2047424)

ACS-OSS-PutBucketEncryption

Yes

[OSS bucket is encrypted using a custom KMS key](/help/en/cloud-config/latest/oss-encryption-byok-check#concept-2227415)

None

No

[Versioning is enabled for the OSS bucket](/help/en/cloud-config/latest/oss-bucket-versioning-enabled#task-2047424)

ACS-OSS-PutBucketVersioning

No

[Zone-redundant storage is enabled for the OSS bucket](/help/en/cloud-config/latest/oss-zrs-enabled#task-2047424)

ACS-OSS-EnableBucketZRS

No

[Cloud Backup is enabled for the OSS bucket](/help/en/cloud-config/latest/enable-cloud-backup-for-oss-bucket)

None

No

[Cross-region replication is enabled for the OSS bucket](/help/en/cloud-config/latest/oss-bucket-enables-cross-region-replication)

None

No

[Cross-region replication is enabled for the OSS bucket backup vault](/help/en/cloud-config/latest/enable-cross-region-replication-for-oss-buckets)

None

No

[Data protection score is checked for OSS bucket backups](/help/en/cloud-config/latest/oss-bucket-backup-data-protection-score-detection)

None

No

[Log storage is enabled for the OSS bucket](/help/en/cloud-config/latest/oss-bucket-logging-enabled#task-2047424)

ACS-OSS-BulkyPutBucketLogging

Yes

[Prefix matching for log storage is enabled for the OSS bucket](/help/en/cloud-config/latest/oss-bucket-logging-prefix-match#concept-2267971)

None

Yes

[Real-time logging is enabled for Object Storage Service](/help/en/cloud-config/latest/object-storage-enable-real-time-logging)

None

No

[Delivery of OOS execution records is configured for the specified region](/help/en/cloud-config/latest/set-oos-for-the-specified-region-to-execute-record-shipping)

None

No

[Hotlink protection is enabled for the OSS bucket](/help/en/cloud-config/latest/u17mst#task-2047424)

None

No

[Referer for the OSS bucket is in the specified hotlink protection whitelist](/help/en/cloud-config/latest/oss-bucket-referer-limit#task-2047424)

ACS-OSS-PutBucketReferer

No

[Check for custom domain names is enabled for the OSS bucket](/help/en/cloud-config/latest/enable-oss-bucket-custom-domain-name-detection)

None

No

[TLS version is checked for the OSS bucket](/help/en/cloud-config/latest/oss-bucket-tls-version-check)

None

No

[OSS bucket name matches the regular expression](/help/en/cloud-config/latest/oss-bucket-name-regex-match#task-2047424)

None

No

### **File Storage NAS**

[Encryption is configured for the NAS file system](/help/en/cloud-config/latest/nas-filesystem-encrypt-type-check#concept-2225199)

None

Yes

[NAS file system is in the specified status](/help/en/cloud-config/latest/nas-filesystem-status-check#concept-2225198)

None

No

[NAS file system is checked for inactivity](/help/en/cloud-config/latest/nas-file-system-idle-detection)

None

No

[Authorization object for the NAS permission group rule is not set to all network segments](/help/en/cloud-config/latest/nas-access-group-public-access-check#concept-2225200)

None

No

[Permission group used by the NAS file system is not open to all sources](/help/en/cloud-config/latest/nas-filesystem-mount-target-access-group-check#concept-2270398)

None

No

[RAM policies are enabled for the NAS access point](/help/en/cloud-config/latest/enable-ram-policies-for-nas-file-storage-access-points)

None

No

[Root directory of the NAS access point is not set to the default directory](/help/en/cloud-config/latest/nas-file-storage-access-point-root-directory-is-not-set)

None

No

[Recycle bin is enabled for the NAS file system](/help/en/cloud-config/latest/nas-filesystem-recycle-bin-check#concept-2269792)

ACS-NAS-BulkyEnableRecycleBin

No

[A backup plan is created for the NAS file system](/help/en/cloud-config/latest/nas-filesystem-enable-backup-plan#concept-2270323)

None

No

[Cross-region replication is enabled for the NAS backup vault](/help/en/cloud-config/latest/enable-cross-region-replication-for-nas-backup-vault)

None

No

[Data protection score is checked for the NAS backup vault](/help/en/cloud-config/latest/nas-backup-vault-data-protection-score-check)

ACS-NAS-BulkyEnableRecycleBin

No

### **Tablestore**

[Network type for the Tablestore instance is set to VPC-only or console-only access](/help/en/cloud-config/latest/ots-instance-network-not-normal#concept-2226375)

ACS-Config-OTS-RemovePublicAccess

Yes

[All data tables in the Tablestore instance are encrypted](/help/en/cloud-config/latest/ots-instance-all-table-encrypted#concept-2267420)

None

No

[Tablestore instance uses zone-redundant storage](/help/en/cloud-config/latest/use-the-same-city-redundant-ots-instance)

None

No

[Cloud Backup is enabled for the Tablestore instance](/help/en/cloud-config/latest/enable-cloud-backup-for-a-tablestore-instance)

None

No

[Cross-region backup is enabled for the Tablestore backup vault](/help/en/cloud-config/latest/the-tablestore-backup-library-enables-cross-region-backup-for-cloud-backup)

None

No

[Data protection score is checked for the Tablestore instance](/help/en/cloud-config/latest/number-of-tablestore-instances-data-protection-score-check)

None

No

### **Simple Log Service**

[Data encryption is configured for the Simple Log Service Logstore](/help/en/cloud-config/latest/sls-logstore-enabled-encrypt#concept-2226296)

None

No

[Key material for Simple Log Service Logstore encryption is imported by the user](/help/en/cloud-config/latest/the-source-of-the-master-key-material-used-for-logstore)

None

No

[Automatic storage tiering is enabled for the SLS Logstore](/help/en/cloud-config/latest/sls-log-library-enables-intelligent-cold-and-hot-tiered-storage)

None

No

[Log project uses zone-redundant storage](/help/en/cloud-config/latest/use-log-items-with-local-redundancy)

None

No

### **Cloud Storage Gateway**

[A cross-zone high-availability Cloud Storage Gateway is used](/help/en/cloud-config/latest/use-cross-availability-zone-high-availability-cloud-storage-gateway)

None

No

[Cloud Storage Gateway uses an OSS bucket with an SSL connection](/help/en/cloud-config/latest/oss-buckets-connected-by-cloud-storage-gateway-using-ssl)

None

No

[Server-side encryption is used for shares of the Cloud Storage Gateway](/help/en/cloud-config/latest/the-shared-cloud-storage-gateway-uses-server-side-encryption)

None

No

## **Network and CDN**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for setting correction**

**Is dry run supported?**

### **Classic Load Balancer (CLB)**

[Enable release protection for an SLB instance](/help/en/cloud-config/latest/ifb108#task-2047424)

ACS-SLB-BulkySetLoadBalancerDeleteProtection

Yes

[Enable configuration read-only mode for an SLB instance](/help/en/cloud-config/latest/z699n8#task-2047424)

ACS-SLB-BulkySetLoadBalancerModificationProtection

Yes

[Check for SLB subscription instance expiration](/help/en/cloud-config/latest/lna834#task-2047424)

ACS-BssOpenApi-SetRenewal

ACS-BssOpenApi-EnableAutoRenewal

No

[Enable auto-renewal for a subscription SLB instance](/help/en/cloud-config/latest/k35h91#task-2047424)

None

Yes

[Idle detection for subscription Server Load Balancer instances](/help/en/cloud-config/latest/server-load-balancer-prepaid-instance-idle-detection)

None

No

[SLB idle detection](/help/en/cloud-config/latest/slb-load-balancing-idle-detection)

None

No

[The SLB instance status is Running](/help/en/cloud-config/latest/ss29nj#task-2047424)

None

No

[Use an SLB instance in a VPC](/help/en/cloud-config/latest/i55ma4#task-2047424)

None

Yes

[The SLB instance is not bound to a public IP address](/help/en/cloud-config/latest/nl3ymy#task-2047424)

None

Yes

[SLB access control lists do not allow entries for all address segments](/help/en/cloud-config/latest/qtd9y8#task-2047424)

None

Yes

[Set Resource Access Management for all running listeners on an SLB instance](/help/en/cloud-config/latest/slb-all-listener-enabled-acl#concept-2229236)

None

No

[The access control whitelist for the SLB instance contains specified IP addresses or CIDR blocks.](/help/en/cloud-config/latest/slb-acl-has-specified-ip#concept-2229232)

None

No

[The access control whitelist of the SLB instance does not include the specified IP address or network segment](/help/en/cloud-config/latest/slb-acl-no-has-specified-ip#concept-2229234)

None

No

[The SLB instance listener does not include the specified port](/help/en/cloud-config/latest/slb-listener-risk-ports-check#concept-2229233)

None

Yes

[Check the Anti-DDoS status of SLB](/help/en/cloud-config/latest/detection-of-slb-ddos-protection-status)

None

No

[SLB instance has an unconfigured HTTP listener](/help/en/cloud-config/latest/no-http-listener-is-configured-for-the-slb-instance)

None

No

[Enable an HTTPS listener for SLB](/help/en/cloud-config/latest/j96886#task-2047424)

None

Yes

[The HTTPS listener of an SLB instance uses a specified security policy suite](/help/en/cloud-config/latest/the-https-listener-of-the-slb-instance-uses-the-specified)

None

No

[Use an Alibaba Cloud-issued certificate for SLB](/help/en/cloud-config/latest/qb76ns#task-2047424)

None

No

[The SLB server certificate is valid](/help/en/cloud-config/latest/the-slb-server-certificate-is-within-the-validity-period)

None

No

[SLB certificate expiration check](/help/en/cloud-config/latest/gdd35w#task-2047424)

None

No

[Use a multi-zone SLB instance](/help/en/cloud-config/latest/slb-instance-multi-zone#concept-2270181)

None

Yes

[Use a multi-zone SLB instance and add resources from multiple zones to the server group](/help/en/cloud-config/latest/use-multi-az-slb-instances-and-configure-multiple-az-resources-for)

None

No

[All listeners of the Server Load Balancer have at least the specified number of backend servers](/help/en/cloud-config/latest/all-listeners-of-slb-have-at-least-the-specified-number)

None

No

[The default server group of an SLB instance contains at least two servers](/help/en/cloud-config/latest/slb-instance-default-server-group-contains-at-least-two-servers)

None

No

[Add resources from multiple zones to a default server group of Server Load Balancer](/help/en/cloud-config/latest/slb-slb-default-server-group-add-multiple-zone-resources)

None

No

[Add resources from multiple zones to an SLB primary/secondary server group](/help/en/cloud-config/latest/slb-load-balancing-master-slave-server-group-add-multiple-zone-resources)

None

No

[Add resources from multiple zones to an SLB vServer group](/help/en/cloud-config/latest/slb-slb-virtual-server-groups-add-multiple-zone-resources)

None

No

[The SLB instance is a guaranteed-performance instance](/help/en/cloud-config/latest/y56k3b#task-2047424)

None

Yes

[The SLB instance meets the specified bandwidth requirements](/help/en/cloud-config/latest/e4hvje#task-2047424)

None

Yes

[The SLB instance type meets the requirements](/help/en/cloud-config/latest/slb-instance-spec-check#concept-2229235)

None

Yes

[Check for average utilization rate of maximum connections on an SLB instance](/help/en/cloud-config/latest/slb-instance-maximum-number-of-connections-usage-average-rate-detection)

None

No

[Checking the average new connection usage rate for an SLB instance](/help/en/cloud-config/latest/average-usage-of-new-connections-of-slb-instances)

None

No

[SLB instance outbound bandwidth average utilization check](/help/en/cloud-config/latest/average-outbound-bandwidth-usage-of-slb-instances)

None

No

[All SLB listeners have health checks set up](/help/en/cloud-config/latest/slb-all-listener-health-check-enabled#concept-2271354)

None

No

[The server weight for an SLB instance is not 0](/help/en/cloud-config/latest/t590qz#task-2047424)

None

No

[Enable access logs for an SLB instance](/help/en/cloud-config/latest/enable-access-logs-for-slb-instances)

None

No

[Troubleshoot a non-existent threshold abnormality for a CLB instance](/help/en/cloud-config/latest/clb-instance-handling-does-not-exist-water-level-exception)

None

No

### **Application Load Balancer (ALB)**

[Enabling release protection for an ALB instance](/help/en/cloud-config/latest/alb-delete-protection-enabled#concept-2226732)

None

No

[ALB idle connection detection](/help/en/cloud-config/latest/alb-load-balancing-idle-detection)

None

No

[Monitoring the outbound bandwidth utilization of an Internet Shared Bandwidth associated with an ALB instance](/help/en/cloud-config/latest/alb-instance-associated-shared-bandwidth-outflow-bandwidth-usage)

None

No

[Monitoring outbound bandwidth usage for EIPs associated with an ALB](/help/en/cloud-config/latest/alb-associated-eip-outbound-bandwidth-usage-detection)

None

No

[The network type of the ALB instance is private](/help/en/cloud-config/latest/alb-address-type-check#concept-2226738)

None

No

[Set access control for all running listeners of the ALB instance](/help/en/cloud-config/latest/alb-all-listener-enabled-acl#concept-2267027)

None

No

[ALB access control lists do not allow configuring all address segments](/help/en/cloud-config/latest/alb-acl-public-access-check#concept-2267041)

None

No

[The access control whitelist for the ALB instance does not contain the specified IP address or network segment](/help/en/cloud-config/latest/alb-acl-no-has-specified-ip#concept-2267070)

None

No

[The access control whitelist for an ALB instance contains specified IP addresses or network segments.](/help/en/cloud-config/latest/alb-acl-has-specified-ip#concept-2267428)

None

No

[Remove Header forwarding feature for an ALB HTTP listener](/help/en/cloud-config/latest/http-listener-settings-for-alb-instances-remove-the-forwarding-function)

None

No

[Using multi-zone ALB instances](/help/en/cloud-config/latest/alb-instance-multi-zone#concept-2270200)

None

No

[The ALB server group contains at least two servers](/help/en/cloud-config/latest/alb-server-group-multi-server#concept-2270158)

None

No

[Add resources from multiple zones to an ALB server group](/help/en/cloud-config/latest/add-multiple-zone-resources-to-an-alb-server-group)

None

No

[All ALB listeners and forwarding rules have health checks configured](/help/en/cloud-config/latest/alb-all-listener-health-check-enabled#concept-2272018)

None

No

[The default forwarding rule for each listener on an Application Load Balancer (ALB) contains at least a specified number of servers](/help/en/cloud-config/latest/at-least-the-specified-number-of-servers-have-been-added)

None

No

[Expiration check for SSL certificates on listeners of running ALB instances](/help/en/cloud-config/latest/ssl-certificate-expiration-detection-associated-with-the-monitoring-of-an)

None

No

[Enable Web Application Firewall for an ALB instance](/help/en/cloud-config/latest/enable-web-application-firewall-protection-for-alb-instances)

None

No

[ALB instance connection failure rate check](/help/en/cloud-config/latest/alb-instance-connection-failure-rate-check)

None

No

[ALB instance 4xx error rate detection](/help/en/cloud-config/latest/alb-instance-4xx-error-rate-detection)

None

No

[ALB instance 5xx error rate detection](/help/en/cloud-config/latest/alb-instance-5xx-error-rate-detection)

None

No

[ALB instance TLS handshake failure rate check](/help/en/cloud-config/latest/alb-instance-tls-handshake-failure-rate-detection)

None

No

[The virtual IP of an ALB instance is unavailable for processing due to an abnormal high-water mark](/help/en/cloud-config/latest/alb-instance-virtual-ip-processing-does-not-have-water-level)

None

No

### **Network Load Balancer (NLB)**

[Using a multi-zone Network Load Balancer instance](/help/en/cloud-config/latest/use-multi-zone-network-load-balancing-instances)

None

No

[Add resources from multiple zones to a Network Load Balancer server group](/help/en/cloud-config/latest/add-resources-for-multiple-availability-zones-for-a-network-load)

None

No

[Missing threshold abnormality in virtual IP processing for an NLB instance](/help/en/cloud-config/latest/the-virtual-ip-address-of-the-nlb-instance-does-not)

None

No

[Specified security policy for an NLB instance listener](/help/en/cloud-config/latest/nlb-instance-listeners-use-the-specified-security-policy)

None

No

### **Gateway Load Balancer (GWLB)**

[Use a multi-zone Gateway Load Balancer instance](/help/en/cloud-config/latest/gateway-based-load-balancing-instances-using-multi-zone)

None

No

[GWLB server group servers are deployed across multiple zones](/help/en/cloud-config/latest/gwlb-server-group-server-multi-availability-zone)

None

No

### **Elastic IP Address**

[Subscription Elastic IP Address expiration check](/help/en/cloud-config/latest/eip-address-expired-check#concept-2229389)

None

No

[Detect idle Elastic IP Addresses](/help/en/cloud-config/latest/eip-attached#task-2047424)

None

No

[Idle EIP detection](/help/en/cloud-config/latest/eip-idle-detection)

None

No

[Enable deletion protection for an Elastic IP Address](/help/en/cloud-config/latest/eip-delete-protection-enabled)

None

No

[The service status of the Elastic IP Address instance is Normal](/help/en/cloud-config/latest/the-service-status-of-the-elastic-ip-instance-is-normal)

None

No

[The bandwidth of the Elastic IP address (EIP) instance meets the minimum requirements](/help/en/cloud-config/latest/eip-bandwidth-limit#task-2047424)

None

No

[No abnormal bandwidth level for the Elastic IP Address instance](/help/en/cloud-config/latest/the-bandwidth-of-the-eip-instance-does-not-have-a)

None

No

[Enable Cloud Firewall protection for an EIP](/help/en/cloud-config/latest/enable-cloud-firewall-protection)

None

No

[Check the Anti-DDoS status of an EIP](/help/en/cloud-config/latest/eip-ddos-protection-status-detection)

None

No

[A public IPv4 address is not assigned in the scaling configuration](/help/en/cloud-config/latest/ess-scaling-configuration-enabled-internet-check#concept-2267850)

None

No

[Associate an Auto Scaling group with a Server Load Balancer](/help/en/cloud-config/latest/ess-scaling-group-attach-slb#concept-2267852)

None

No

[Associate an Auto Scaling group with at least two vSwitches](/help/en/cloud-config/latest/ess-scaling-group-attach-multi-switch#concept-2267855)

None

No

[Detecting EIP tag inheritance from an associated resource](/help/en/cloud-config/latest/tag-detection-of-resources-associated-with-eip-inheritance)

ACS-TAG-TagResourcesIgnoreCaseSensitive

No

### **Internet Shared Bandwidth (CBWP)**

[Internet Shared Bandwidth instance expiration check](/help/en/cloud-config/latest/cbwp-bandwidth-package-expired-check#concept-2225504)

None

Yes

[Idle shared bandwidth detection](/help/en/cloud-config/latest/shared-bandwidth-idle-detection)

None

No

### **Virtual Private Cloud (VPC)**

[Routing is set for the custom VPC network segment](/help/en/cloud-config/latest/vpc-secondary-cidr-route-check#concept-2227755)

None

No

[The destination CIDR block of the VPC custom route is not set to all CIDR blocks](/help/en/cloud-config/latest/vpc-custom-route-destination-network-segment-is-not-set-to)

None

No

[The IP address ranges of vSwitches in the same region cannot overlap](/help/en/cloud-config/latest/region-vswitch-no-crossed-cidr#concept-2275444)

None

No

[The available IP address count for a VPC vSwitch is greater than a specified value](/help/en/cloud-config/latest/vswitch-available-ip-count#concept-2227757)

None

No

[VPC network ACL has no open risky ports](/help/en/cloud-config/latest/the-risk-port-is-not-opened-in-the-vpc-acl)

None

No

[The VPC network ACL is not empty](/help/en/cloud-config/latest/vpc-acl-is-not-empty)

None

No

[Attach a network ACL to at least one resource](/help/en/cloud-config/latest/vpc-acl-binds-at-least-one-resource)

None

No

[Enable flow logs for a VPC](/help/en/cloud-config/latest/eq704b#task-2047424)

None

No

[IPsec VPN connection is normal](/help/en/cloud-config/latest/wwpnub#task-2047424)

None

No

[Enable a health check for an IPsec VPN connection](/help/en/cloud-config/latest/x672q9#task-2047424)

None

No

[Configure multiple zones for an endpoint service](/help/en/cloud-config/latest/configure-multiple-availability-zones-for-endpoint-services)

None

No

[Peer account ID check for an Express Connect router interface](/help/en/cloud-config/latest/check-the-peer-account-id-of-the-high-speed-access)

None

No

### **NAT Gateway**

[NAT Gateway does not allow mapping for specified threat ports](/help/en/cloud-config/latest/nat-risk-ports-check#concept-2225044)

ACS-VPC-BulkyDeleteForwardEntry

No

[An Internet NAT gateway is created in a specific virtual private cloud (VPC).](/help/en/cloud-config/latest/internet-nat-gateway-in-specified-vpc#concept-2225049)

None

No

[A private NAT gateway is created in a specified virtual private cloud (VPC).](/help/en/cloud-config/latest/intranet-nat-gateway-in-specified-vpc#concept-2225051)

None

No

[NAT Gateway not using the specified network type](/help/en/cloud-config/latest/not-use-specified-type-nat-gateway#concept-2225052)

None

No

[SNAT and DNAT do not use the same EIP in a NAT Gateway](/help/en/cloud-config/latest/natgateway-eip-used-check#concept-2271014)

None

No

[Consistent peak bandwidth settings when attaching multiple EIPs to an SNAT entry](/help/en/cloud-config/latest/natgateway-snat-eip-bandwidth-check#concept-2276368)

None

No

[Enable release protection for a NAT Gateway](/help/en/cloud-config/latest/natgateway-delete-protection-enabled#concept-2225046)

None

No

[NAT Gateway idle detection](/help/en/cloud-config/latest/nat-gateway-idle-detection)

None

No

[VPC private gateway idle detection](/help/en/cloud-config/latest/vpc-private-network-gateway-idle-detection)

None

No

[Abnormal threshold handling when a NAT Gateway is missing](/help/en/cloud-config/latest/the-nat-gateway-does-not-exist-the-processing-level-is)

None

No

[NAT Gateway zone independence](/help/en/cloud-config/latest/zone-independence-of-nat-gateway)

None

No

[NAT Gateway status check](/help/en/cloud-config/latest/nat-gateway-status-check)

None

No

### **CEN**

[Expiration check for Cloud Enterprise Network bandwidth plans](/help/en/cloud-config/latest/cen-bandwidth-package-expired-check#concept-2225473)

ACS-BssOpenApi-SetRenewal

ACS-BssOpenApi-EnableAutoRenewal

No

[The bandwidth allocation for the inter-region connection in the CEN instance meets the specified requirements](/help/en/cloud-config/latest/cen-cross-region-bandwidth-check#concept-2254708)

None

No

[Health checks are configured for all VBR connections in the CEN instance](/help/en/cloud-config/latest/cen-all-vbr-health-check-enabled#concept-2254709)

None

No

[Configure multiple zones for a TransitRouter VPC connection](/help/en/cloud-config/latest/second-level-node-3)

None

No

[No abnormal cross-region bandwidth levels](/help/en/cloud-config/latest/there-is-no-water-level-exception-for-cross-region-bandwidth)

None

No

[No threat of exceeding the TR route entry limit](/help/en/cloud-config/latest/the-number-of-tr-configured-route-entries-does-not-exceed)

None

No

### **VPN Gateway**

[VPN Gateway not activated](/help/en/cloud-config/latest/vpn-gateway-disable#concept-2276622)

None

No

[VPN Gateway idle detection](/help/en/cloud-config/latest/vpn-gateway-idle-detection)

None

No

[VPN instance expiration check](/help/en/cloud-config/latest/vpn-instance-expiration-check-inspection)

ACS-BssOpenApi-EnableAutoRenewal

No

[The encryption algorithm for the VPN connection is not None](/help/en/cloud-config/latest/vpn-ipsec-connection-encrypt-enable#concept-2276633)

None

No

[Use a multi-zone VPN Gateway](/help/en/cloud-config/latest/docs-missed-vpn-gateway-multi-zone-md)

None

No

[The VPN Gateway status is Normal](/help/en/cloud-config/latest/vpn-gateway-status-is-normal)

None

No

[Both the active and standby tunnels of a dual-tunnel VPN Gateway are connected](/help/en/cloud-config/latest/docs-missed-vpn-connection-master-slave-established-md)

None

No

[VPN Gateway inbound bandwidth utilization check](/help/en/cloud-config/latest/vpn-gateway-inbound-bandwidth-usage-detection)

None

No

[VPN Gateway outbound bandwidth usage check](/help/en/cloud-config/latest/vpn-gateway-outbound-bandwidth-usage-detection)

None

No

[The VPN Gateway service has no abnormal thresholds](/help/en/cloud-config/latest/the-vpn-gateway-service-does-not-have-an-abnormal-water)

None

No

### **Express Connect**

[Using Express Connect in high-reliability mode](/help/en/cloud-config/latest/high-speed-channel-using-high-reliability-mode)

None

No

[Configure a health check for a VBR instance](/help/en/cloud-config/latest/health-check-for-vbr-instances)

None

No

[The VBR instance has no missing redundancy](/help/en/cloud-config/latest/the-vbr-instance-does-not-have-redundancy-missing)

None

No

[The BGP connection status of the VBR instance is normal.](/help/en/cloud-config/latest/the-bgp-connection-status-of-the-vbr-instance-does-not)

None

No

[No abnormal ports on the Express Connect circuit](/help/en/cloud-config/latest/the-physical-connection-does-not-exist-the-port-is-abnormal)

None

No

[Multiple valid routes on an Express Connect circuit gateway](/help/en/cloud-config/latest/multiple-valid-routes-exist-in-the-physical-connection-gateway)

None

No

### **CDN**

[Enable HTTPS encryption for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-https-enabled#task-2472858)

None

No

[The CDN SSL certificate has not expired](/help/en/cloud-config/latest/the-ssl-certificate-used-by-the-cdn-is-not-expired)

None

No

[Enable force redirect from HTTP to HTTPS for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-open-http-https-force-jump)

None

No

[Enable Referer hotlink protection for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-opens-referer-anti-theft-chain)

None

No

[Enable URL signing for an accelerated domain name](/help/en/cloud-config/latest/enable-url-authentication-for-cdn-domain-names)

None

No

[Enable OCSP stapling for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-open-ocsp-stapling)

None

No

[Enable TLS 1.3 detection for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-opens-tls13-version-detection)

None

No

[Set CDN cache for a domain name](/help/en/cloud-config/latest/cdn-domain-enabled-cache#concept-2254705)

None

No

[Enable Gzip compression for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-opens-gzip-compression)

None

No

[Enable Brotli compression for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-opens-brotli-compression)

None

No

[Enable range origin fetch for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-oss-type-origin-station-configuration-is-consistent)

None

No

[Enable parameter filtering for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-open-http-https-force-jump-1)

None

No

[Optimize OSS data transmission using CDN](/help/en/cloud-config/latest/use-cdn-to-optimize-oss-data-transmission)

None

No

[The source of a CDN configuration should not point to a non-existent OSS bucket](/help/en/cloud-config/latest/the-origin-information-configured-by-cdn-should-not-point-to)

None

No

[The OSS origin configuration for the accelerated domain name is consistent](/help/en/cloud-config/latest/cdn-domain-oss-source-check#concept-2254706)

None

No

[Configure multiple origins for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-configuration-multiple-origin)

None

No

[Enable IPv6 access for an accelerated domain name](/help/en/cloud-config/latest/cdn-domain-name-opens-ipv6-access)

None

No

### **Edge Security Acceleration**

[Configure multiple sources for a DCDN accelerated domain name](/help/en/cloud-config/latest/dcdn-domain-name-configuration-multiple-origin)

None

No

### **Alibaba Cloud DNS**

[The CNAME record in DNS points to an existing OSS bucket Endpoint](/help/en/cloud-config/latest/cname-record-in-dns-does-not-point-to-a-non-existent)

None

No

[The domain name format in Cloud DNS matches a specified regular expression](/help/en/cloud-config/latest/alidns-domain-regex-match)

None

No

[DNS MX record compliance check](/help/en/cloud-config/latest/dns-domain-mx-record-compliance-check)

None

No

## **Security**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for correcting settings**

**Is dry run supported?**

### **Anti-DDoS**

[DDoS instance expiration check](/help/en/cloud-config/latest/ddos-instance-expiration-check)

None

No

[Prevent DDoS attacks with Anti-DDoS](/help/en/cloud-config/latest/use-ddos-protection-to-prevent-ddos-attacks)

None

No

[Status check for the protected IP of an Anti-DDoS Pro or Anti-DDoS Premium instance](/help/en/cloud-config/latest/ddos-high-anti-ddos-instance-high-anti-ddos-ip-status-check)

None

No

### **Web Application Firewall**

[Use a web firewall to protect a website or app](/help/en/cloud-config/latest/use-a-web-firewall-to-secure-your-website-or-app)

None

No

[Add an API group domain from API Gateway to WAF](/help/en/cloud-config/latest/api-gateway-group-domain-access-waf#concept-2224790)

None

No

[Enable a specific protection feature for a WAF-protected domain name](/help/en/cloud-config/latest/waf-domain-enabled-specified-protection-module#concept-2224788)

None

No

[Enable a specific prevention mode for a specific protection feature of a WAF domain name](/help/en/cloud-config/latest/waf-domain-enabled-specified-protection-mode#concept-2224789)

None

No

[Enable a specific protection rule for a WAF instance](/help/en/cloud-config/latest/specified-protection-rules-for-enabling-a-waf3-instance)

None

No

[Enable log collection for a WAF instance](/help/en/cloud-config/latest/waf-instance-logging-enabled#concept-2224786)

ACS-WAF-BulkyModifyLogServiceStatus

No

[Enable log detection for a WAF 3.0 protected object](/help/en/cloud-config/latest/enable-log-detection-for-waf3-protection-objects)

None

No

### **Cloud Firewall**

[All assets in Cloud Firewall are protected](/help/en/cloud-config/latest/cloud-fire-wall-all-asset-open#concept-2226303)

None

No

[No control policy in Cloud Firewall matches the specified conditions](/help/en/cloud-config/latest/cloud-fire-wall-no-matched-control-policy#concept-2226304)

None

No

[A control policy in Cloud Firewall matches the specified conditions](/help/en/cloud-config/latest/cloud-fire-wall-has-matched-control-policy#concept-2226305)

None

No

[Enable protection for assets in Cloud Firewall](/help/en/cloud-config/latest/enable-asset-protection-in-cloud-firewall)

None

No

[Cloud Firewall IPS has basic protection enabled](/help/en/cloud-config/latest/cloud-firewall-ips-basic-defense-enabled)

ACS-Cloudfw-ModifyIPSConfig

No

[Cloud Firewall IPS has threat intelligence enabled](/help/en/cloud-config/latest/cloud-firewall-ips-threat-intelligence-enabled)

ACS-Cloudfw-ModifyIPSConfig

No

[Cloud Firewall IPS has enabled Virtual Patches](/help/en/cloud-config/latest/cloud-firewall-ips-virtual-patch-enabled)

ACS-Cloudfw-ModifyIPSConfig

No

[The Cloud Firewall intrusion prevention system (IPS) is in Block Mode](/help/en/cloud-config/latest/cloud-firewall-ips-has-enabled-interception-mode)

ACS-Cloudfw-ModifyIPSConfig

No

[Use Cloud Firewall to secure network borders](/help/en/cloud-config/latest/use-cloud-firewall-to-protect-the-network-boundary)

None

No

### **Security Center**

[Use Security Center Enterprise Edition](/help/en/cloud-config/latest/security-center-version-check#concept-2116570)

None

No

[All ECS instances in the account have the Security Center proxy installed](/help/en/cloud-config/latest/ecs-all-enabled-security-protection#concept-2229153)

None

No

[A notification method is set for the Security Center notification item](/help/en/cloud-config/latest/security-center-notice-config-check#concept-2116571)

None

No

[All ECS instance vulnerabilities are fixed](/help/en/cloud-config/latest/ecs-all-updated-security-vul#concept-2229154)

None

No

[No pending image vulnerabilities in Security Center](/help/en/cloud-config/latest/security-center-image-vul-check#concept-2271105)

None

No

[Configure a vulnerability scan for a specified priority in Security Center](/help/en/cloud-config/latest/security-center-concern-necessity-check#concept-2271263)

None

No

[Security Center detects no leaked AccessKeys](/help/en/cloud-config/latest/security-center-leak-ak-check#concept-2271238)

None

No

[Security Center found no assets with high-risk weak passwords](/help/en/cloud-config/latest/security-center-weak-password-check#concept-2271159)

None

No

[Enable specific types of proactive protection in Security Center](/help/en/cloud-config/latest/security-center-defense-config-check#concept-2271349)

None

No

[Enable asset fingerprint collection for specific types in Security Center](/help/en/cloud-config/latest/enable-fingerprint-collection-for-specified-asset-types-in-security-center)

None

No

### **Digital Certificate Management Service (SSL Certificate)**

[SSL certificate expiration check](/help/en/cloud-config/latest/ssl-certificate-expiration-check)

None

No

### **Key Management Service**

[Enable delete protection for a KMS master key](/help/en/cloud-config/latest/kms-key-delete-protection-enabled#concept-2224950)

ACS-KMS-BulkySetDeletionProtection

No

[The KMS master key is not scheduled for deletion](/help/en/cloud-config/latest/kms-key-state-not-pending-deletion#concept-2224952)

None

No

[Set automatic master key rotation in Key Management Service](/help/en/cloud-config/latest/kms-key-rotation-enabled#concept-2224949)

ACS-KMS-BulkyUpdateRotationPolicy

No

[Set automatic credential rotation in Key Management Service (KMS)](/help/en/cloud-config/latest/kms-secret-rotation-enabled#concept-2224951)

None

No

[KMS credential successfully rotated](/help/en/cloud-config/latest/kms-credentials-successfully-rotated)

None

No

[Not using a KMS master key from an external source](/help/en/cloud-config/latest/do-not-use-external-source-kms-master-key)

None

No

[Using multi-zone KMS instances](/help/en/cloud-config/latest/kms-instances-using-multi-zone)

None

No

[KMS instance expiration check](/help/en/cloud-config/latest/kms-instance-expiration-check)

ACS-BssOpenApi-EnableAutoRenewal

No

### **Data Security Center**

[Sensitive data detection is not enabled in Data Security Center](/help/en/cloud-config/latest/sensitive-data-identification-in-data-security-center-is-not-enabled)

None

No

### **Bastionhost**

[Bastionhost instance expiration check](/help/en/cloud-config/latest/bastionhost-instance-expired-check#concept-2225523)

None

No

[Bastionhost versions that support multi-zone deployment](/help/en/cloud-config/latest/bastion-machine-version-deployed-with-multi-az)

None

No

[Available storage for the Bastionhost meets minimum requirements](/help/en/cloud-config/latest/bastion-machine-available-storage-space-meets-minimum-requirements)

None

No

## **Middleware**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for remediation**

**Can I perform a dry run?**

### **Microservices Engine (MSE)**

[MSE cluster allows public network access and enables authentication](/help/en/cloud-config/latest/mse-cluster-config-auth-enabled#concept-2276358)

None

No

[MSE cluster public network access check](/help/en/cloud-config/latest/mse-cluster-public-network-detection)

None

No

[Use a High-availability Edition MSE registry](/help/en/cloud-config/latest/use-the-highly-available-version-of-mse-registry-configuration-center)

None

No

[MSE registry multi-node deployment check](/help/en/cloud-config/latest/mse-registry-configuration-center-multi-node-detection)

None

No

[MSE registry DPI engine version check](/help/en/cloud-config/latest/mse-registry-configuration-center-engine-version-detection)

None

No

[MSE registry capacity check](/help/en/cloud-config/latest/mse-registry-configuration-center-capacity-check)

None

No

[MSE cloud-native gateway multi-node deployment check](/help/en/cloud-config/latest/mse-cloud-native-gateway-multi-node-detection)

None

No

[Deploy an MSE cloud-native gateway in multiple zones](/help/en/cloud-config/latest/mse-cloud-native-gateway-deployed-in-multi-zone)

None

No

[MSE cloud-native gateway version check](/help/en/cloud-config/latest/mse-cloud-native-gateway-version-check)

None

No

### **Enterprise Distributed Application Service (EDAS)**

[Log collection is not configured for EDAS](/help/en/cloud-config/latest/edas-does-not-configure-log-collection)

None

No

### **ApsaraMQ for RocketMQ**

[Use a multi-zone ApsaraMQ for RocketMQ 5.0 instance](/help/en/cloud-config/latest/the-rocketmq-version-5-0-instance-that-uses-multiple-zones)

None

No

[Use a Platinum Edition ApsaraMQ for RocketMQ instance](/help/en/cloud-config/latest/use-the-platinum-rocketmq-instance)

None

No

### **Message Queue for Apache Kafka**

[The public IP address whitelist of a Kafka instance is not open to all IP addresses](/help/en/cloud-config/latest/kafka-instance-public-access-check#concept-2276407)

None

No

[Use a multi-zone Message Queue for Apache Kafka instance](/help/en/cloud-config/latest/message-queue-for-kafka-instances-in-multi-zone)

None

No

### **Lightweight message queue**

[Disable public network access for MNS queues](/help/en/cloud-config/latest/mns-message-queue-disable-public-network-access)

None

No

### **API Gateway**

[Set APIs in API Gateway to private](/help/en/cloud-config/latest/api-gateway-api-visibility-private#concept-2225548)

None

No

[Enable IPv4 access control for an API Gateway instance and configure a valid list](/help/en/cloud-config/latest/enable-ipv4-access-control-for-api-gateway-instances-and-set)

None

No

[Enable IPv6 access control for an API Gateway instance and configure a valid list](/help/en/cloud-config/latest/enable-ipv6-access-control-for-api-gateway-instances-and-set)

None

No

[Set the request method to HTTPS for APIs in API Gateway that allow public network access](/help/en/cloud-config/latest/api-gateway-api-internet-request-https#concept-2225549)

ACS-ApiGateway-BulkyModifyApiGroupNetworkPolicy

No

[The HTTPS security policy of an API group in API Gateway meets requirements](/help/en/cloud-config/latest/api-gateway-group-https-policy-check#concept-2225551)

None

No

[Attach a custom domain name to an API group in API Gateway](/help/en/cloud-config/latest/api-gateway-group-bind-domain#concept-2225553)

None

No

[Configure an SSL certificate for the custom domain name of an API group in API Gateway](/help/en/cloud-config/latest/api-gateway-group-enabled-ssl#concept-2225554)

None

No

[Attach an independent domain name to an API group and enable force redirect to HTTPS](/help/en/cloud-config/latest/api-group-binding-independent-domain-name-and-enabling-https-force)

None

No

[Set the API security authentication method to JWT in API Gateway](/help/en/cloud-config/latest/api-gateway-api-auth-jwt#concept-2225556)

None

No

[Configure API security authentication in API Gateway](/help/en/cloud-config/latest/api-gateway-api-auth-required#concept-2225557)

None

No

[Configure log storage for API calls in an API group](/help/en/cloud-config/latest/set-call-log-storage-for-api-grouping)

None

No

[Connect the domain name attached to an API group in API Gateway to WAF or WAF 3.0](/help/en/cloud-config/latest/bind-domain-names-to-api-groups-in-api-gateway-to)

None

No

[Configure the Tracing Analysis feature for an API group](/help/en/cloud-config/latest/configure-link-tracing-for-api-grouping)

None

No

[Use a multi-zone API Gateway instance](/help/en/cloud-config/latest/use-multi-zone-api-gateway-instances)

None

No

## **Database**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for remediation**

**Is Dry Run supported?**

### **Cloud-native database PolarDB**

[PolarDB subscription cluster expiration check](/help/en/cloud-config/latest/polardb-cluster-expired-check#concept-2228599)

None

No

[PolarDB-X1 instance expiration check](/help/en/cloud-config/latest/polardb-x1-instance-expiration-detection)

None

No

[PolarDB-X2 instance expiration check](/help/en/cloud-config/latest/polardb-x2-instance-expiration-detection)

None

No

[Enable delete protection for a PolarDB cluster](/help/en/cloud-config/latest/polardb-cluster-delete-protection-enabled#concept-2270652)

None

No

[Set a maintenance window for a PolarDB cluster](/help/en/cloud-config/latest/polardb-cluster-maintain-time-check#concept-2270169)

None

No

[The log backup retention period for PolarDB clusters meets specified requirements](/help/en/cloud-config/latest/polardb-cluster-log-backup-retention#concept-2268398)

None

No

[The level-2 backup retention period for the PolarDB cluster meets the specified requirements](/help/en/cloud-config/latest/polardb-cluster-level-two-backup-retention#concept-2268396)

None

No

[The level-1 backup retention period for the PolarDB cluster meets the specified requirements](/help/en/cloud-config/latest/polardb-cluster-level-one-backup-retention#concept-2268392)

None

No

[Use a PolarDB instance in a virtual private cloud (VPC)](/help/en/cloud-config/latest/polardb-dbcluster-in-vpc#task-2047424)

None

No

[Use a dedicated PolarDB instance](/help/en/cloud-config/latest/polardb-instance-sub-category-exclusive#concept-2272010)

None

No

[The PolarDB product series is the Cluster Edition.](/help/en/cloud-config/latest/polardb-cluster-category-normal#concept-2228598)

None

No

[Use a multi-zone PolarDB-X2 instance](/help/en/cloud-config/latest/polardb-x2-instances-using-multi-az)

None

No

[PolarDB cluster with a stable kernel version](/help/en/cloud-config/latest/polardb-cluster-with-stable-kernel-version)

None

No

[The PolarDB database minor version is stable](/help/en/cloud-config/latest/polardb-dbversion-status-check#concept-2228600)

None

No

[The IP whitelist for a PolarDB instance cannot be set to all network segments](/help/en/cloud-config/latest/polardb-public-access-check#task-2047424)

None

Yes

[No PolarDB cluster endpoints are enabled for public access](/help/en/cloud-config/latest/polardb-cluster-address-no-public#concept-2268379)

None

No

[The PolarDB instance has no Internet endpoint, or its IP whitelist is not set to all network segments](/help/en/cloud-config/latest/polardb-public-and-any-ip-access-check#concept-2271423)

None

No

[Set the connection type of PolarDB cluster endpoints to a specified value](/help/en/cloud-config/latest/polardb-cluster-address-connection-persist-check#concept-2268388)

None

No

[Set the read/write pattern of the PolarDB cluster endpoint to Read/Write](/help/en/cloud-config/latest/polardb-cluster-address-read-write-enabled#concept-2268386)

None

No

[Set the session consistency level for the PolarDB cluster endpoint to a specified value](/help/en/cloud-config/latest/polardb-cluster-address-consist-level-check#concept-2268387)

None

No

[The connection format of the PolarDB cluster endpoint is valid.](/help/en/cloud-config/latest/the-connection-format-of-the-polardb-cluster-address-meets-the)

None

No

[The connection format for the primary endpoint of the PolarDB cluster is valid.](/help/en/cloud-config/latest/the-connection-format-of-the-primary-address-of-the-polardb)

None

No

[The format of the read-only connection string for the PolarDB cluster is correct](/help/en/cloud-config/latest/polardb-cluster-read-only-address-connection-format-meets-the-requirements)

None

No

[Enable a hot standby cluster for a PolarDB cluster](/help/en/cloud-config/latest/enable-hot-standby-cluster-for-polardb-cluster)

None

No

[Disable automatic addition of new nodes to a read-only endpoint of a PolarDB cluster](/help/en/cloud-config/latest/polardb-readonly-address-auto-add-new-node-disabled#concept-2268399)

None

No

[Enable automatic addition of new nodes to PolarDB cluster endpoints](/help/en/cloud-config/latest/polardb-cluster-address-auto-add-new-node-enabled#concept-2268385)

None

No

[Set the PolarDB cluster endpoints to accept reads on the primary database](/help/en/cloud-config/latest/the-cluster-connection-address-of-polardb-is-set-to-the)

None

No

[The transaction splitting status for the PolarDB cluster endpoints is set to Shutdown](/help/en/cloud-config/latest/the-cluster-connection-address-of-polardb-sets-the-transaction-splitting)

None

No

[Enable TDE for a PolarDB cluster](/help/en/cloud-config/latest/polardb-cluster-enabled-tde#concept-2228601)

None

No

[Configure SSL encryption for a PolarDB cluster](/help/en/cloud-config/latest/polardb-cluster-enabled-ssl#concept-2228602)

None

No

[Enable SQL Audit for a PolarDB cluster](/help/en/cloud-config/latest/polardb-cluster-enabled-auditing#concept-2228603)

None

No

[The default time zone parameter of the PolarDB cluster is not System](/help/en/cloud-config/latest/polardb-cluster-default-time-zone-not-system#concept-2268400)

None

No

[The description for each account in a PolarDB cluster is not empty](/help/en/cloud-config/latest/polardb-cluster-accpunts-description-not-empty#concept-2268389)

None

No

### **ApsaraDB RDS**

[RDS subscription instance expiration check](/help/en/cloud-config/latest/rds-instance-expired-check#concept-2227658)

None

Yes

[Long-running pay-as-you-go RDS instance check](/help/en/cloud-config/latest/check-the-long-running-time-of-a-paid-after-rds-instance)

None

No

[Enable delete protection for an RDS instance](/help/en/cloud-config/latest/rds-instacne-delete-protection-enabled#concept-2227665)

None

No

[The RDS instance is not accessible over the Internet, or the IP whitelist is not set to all network segments](/help/en/cloud-config/latest/rds-public-and-any-ip-access-check#concept-2270404)

None

No

[The RDS instance is not connected to the Internet, and the IP whitelist is not set to all network segments](/help/en/cloud-config/latest/the-rds-instance-does-not-have-a-public-network-link)

None

No

[No outdated RDS instances are used](/help/en/cloud-config/latest/rds-instances-with-low-version-are-not-used)

None

No

[The RDS instance type meets the specified requirements](/help/en/cloud-config/latest/rds-desired-instance-type#task-2047424)

None

No

[The RDS instance meets the minimum CPU core requirements](/help/en/cloud-config/latest/rds-cpu-min-count-limit#task-2047424)

None

No

[The RDS instance meets the minimum memory requirements](/help/en/cloud-config/latest/rds-memory-min-size-limit#task-2047424)

None

Yes

[The RDS instance meets minimum storage requirements](/help/en/cloud-config/latest/rds-instance-storage-min-size-limit#task-2047424)

None

No

[The RDS instance meets the minimum read/write frequency](/help/en/cloud-config/latest/rds-min-maxiops-limit#task-2047424)

None

No

[Average connection utilization check for an RDS instance](/help/en/cloud-config/latest/rds-instance-average-connections-usage-check)

None

No

[Average CPU utilization check for an RDS instance](/help/en/cloud-config/latest/rds-instance-average-cpu-usage)

None

Yes

[RDS instance average IOPS utilization check](/help/en/cloud-config/latest/rds-instance-iops-average-usage)

None

No

[Average memory usage check for an RDS instance](/help/en/cloud-config/latest/rds-instance-average-memory-usage)

None

No

[Idle CPU utilization check for an RDS instance](/help/en/cloud-config/latest/rds-instance-cpu-usage-idle-detection)

None

No

[RDS instance idle disk usage check](/help/en/cloud-config/latest/rds-instance-disk-usage-idle-detection)

None

Yes

[Idle memory usage check for an RDS instance](/help/en/cloud-config/latest/rds-instance-memory-usage-idle-detection)

None

No

[Check the remaining storage space of an RDS instance](/help/en/cloud-config/latest/rds-instance-remaining-space-capacity-check)

None

No

[Use a dedicated RDS instance](/help/en/cloud-config/latest/rds-instance-class-type-check#concept-2271495)

None

No

[Use an RDS instance that runs in Cluster Edition](/help/en/cloud-config/latest/use-the-cluster-rds-instance)

None

No

[Use an RDS instance in a virtual private cloud (VPC)](/help/en/cloud-config/latest/rds-instances-in-vpc#task-2047424)

None

No

[The network type of the RDS instance is a virtual private cloud (VPC).](/help/en/cloud-config/latest/rds-dbinstance-nettype-intranet-limit#task-2047424)

None

No

[The RDS instance has no public IP address](/help/en/cloud-config/latest/rds-public-access-check#task-2047424)

ACS-RDS-ReleaseInstancePublicConnection

No

[Configure the whitelist for an RDS instance](/help/en/cloud-config/latest/rds-instance-enabled-security-ip-list#task-2047424)

ACS-RDS-BulkyModifySecurityIpsByInstanceIPArray

Yes

[The IP whitelist of an RDS instance does not include the Internet](/help/en/cloud-config/latest/the-ip-address-whitelist-of-the-rds-instance-does-not)

None

No

[Enable enhanced whitelist mode for an RDS instance](/help/en/cloud-config/latest/use-the-high-security-whitelist-mode-for-rds-instances)

ACS-RDS-BulkyMigrateSecurityIPMode

No

[Use an SSL certificate for an RDS instance](/help/en/cloud-config/latest/rds-instance-enabled-ssl#task-2047424)

None

No

[Enable SSL and specify a TLS version for an RDS instance](/help/en/cloud-config/latest/enable-ssl-and-use-the-specified-tls-version-for-the)

None

No

[Access SQL Server using the database proxy pattern](/help/en/cloud-config/latest/rds-connectionmode-safe-enabled#task-2047424)

None

No

[Use a high-availability RDS instance](/help/en/cloud-config/latest/rds-high-availability-category#task-2047424)

None

No

[Use a multi-zone RDS instance](/help/en/cloud-config/latest/rds-multi-az-support#task-2047424)

None

No

[Automatic switchover configuration check for a primary/standby RDS instance](/help/en/cloud-config/latest/rds-instance-master-backup-automatic-switching-configuration-detection)

ACS-RDS-BulkyModifyHASwitchConfig

No

[RDS instance data replication is not asynchronous](/help/en/cloud-config/latest/rds-instance-data-replication-is-not-asynchronous-and-synchronous)

None

No

[Create a disaster recovery instance for RDS](/help/en/cloud-config/latest/create-a-disaster-recovery-instance-for-rds)

None

No

[RDS read/write instance latency check](/help/en/cloud-config/latest/rds-read-write-instance-latency-check)

None

No

[The primary and secondary nodes of an RDS cluster have inconsistent CPU and memory configurations](/help/en/cloud-config/latest/the-cpu-and-memory-sizes-of-the-primary-and-secondary)

None

No

[The primary and secondary nodes of the RDS cluster are not configured with the same instance class](/help/en/cloud-config/latest/the-primary-and-secondary-nodes-of-the-rds-cluster-are)

None

No

[Enable TDE for an RDS instance](/help/en/cloud-config/latest/rds-instance-enabled-tde#task-2047424)

None

No

[Enable TDE for an RDS instance using a custom key](/help/en/cloud-config/latest/rds-instance-enabled-byok-tde#concept-2227662)

None

No

[Enable disk encryption for an RDS instance](/help/en/cloud-config/latest/rds-instance-enabled-disk-encryption#concept-2227660)

None

No

[RDS PostgreSQL data durability check](/help/en/cloud-config/latest/rds-postgresql-data-persistence-check)

ACS-RDS-BulkyModifyParameter

No

[Enable log backup for an RDS instance](/help/en/cloud-config/latest/rds-instance-enabled-log-backup#concept-2227659)

None

No

[Enable cross-region backup for an RDS instance](/help/en/cloud-config/latest/enable-cross-region-backup-for-rds-instances)

None

No

[RDS instance storage auto-scaling check](/help/en/cloud-config/latest/rds-instances-are-not-enabled-for-automatic-scaling-1)

ACS-RDS-BulkyModifyDasInstanceConfig

No

[Check if auto scaling is enabled for RDS instances](/help/en/cloud-config/latest/rds-instances-are-not-enabled-for-automatic-scaling)

None

No

[Enable SQL Audit for an RDS instance](/help/en/cloud-config/latest/rds-instance-enabled-auditing#concept-2227648)

ACS-RDS-BulkyModifySQLCollectorPolicy

No

[The SQL audit log for an RDS instance has the required retention period.](/help/en/cloud-config/latest/rds-instance-sql-collector-retention#concept-2227650)

ACS-RDS-BulkyModifySQLCollectorRetention

No

[Enable historical events for an RDS instance](/help/en/cloud-config/latest/rds-event-log-enabled#concept-2227656)

ACS-RDS-BulkyModifyActionEventPolicy

No

[Slow SQL statement detection for RDS instances](/help/en/cloud-config/latest/rds-instance-slow-sql-detection)

None

No

[Enable automatic minor version updates for an RDS instance](/help/en/cloud-config/latest/upgrade-a-redis-instance-to-the-latest-minor-version)

ACS-RDS-BulkyModifyDBInstanceAutoUpgradeMinorVersion

No

[Set a reasonable maintenance window for an RDS instance](/help/en/cloud-config/latest/rds-instance-maintain-time-check#concept-2267830)

None

No

[The RDS monitoring granularity settings meet the requirements.](/help/en/cloud-config/latest/rds-instance-monitored-second-level#concept-2271493)

None

No

[Create a dynamic ApsaraDB RDS secret for an RDS instance](/help/en/cloud-config/latest/rds-account-managed-by-kms#concept-2227663)

None

No

[Set the PostgreSQL database parameter log\_connections to on](/help/en/cloud-config/latest/rds-postgresql-parameter-log-connections#concept-2227653)

None

No

[Set the PostgreSQL database parameter log\_disconnections to on](/help/en/cloud-config/latest/rds-postgresql-parameter-log-disconnections#concept-2227654)

None

No

[Set the PostgreSQL database parameter log\_duration to on](/help/en/cloud-config/latest/rds-postgresql-parameter-log-duration#concept-2227655)

None

No

[Enable security audit for a database instance](/help/en/cloud-config/latest/enable-security-audit-for-a-database-instance)

None

No

[Enable SQL Audit for a database instance](/help/en/cloud-config/latest/enable-das-for-a-database-instance-enable-sql-audit-logs)

None

No

### **ApsaraDB Tair (Redis-compatible)**

[Expiration check for Redis subscription instances](/help/en/cloud-config/latest/redis-instance-expired-check#concept-2228639)

None

No

[Enable release protection for a Redis instance](/help/en/cloud-config/latest/redis-instance-release-protection#concept-2228637)

None

No

[Set a reasonable backup time window for a Redis instance](/help/en/cloud-config/latest/redis-instance-backup-time-check#concept-2270259)

None

No

[Enable incremental backup for a Redis instance](/help/en/cloud-config/latest/enable-incremental-backup-for-redis-instances)

None

No

[Upgrade a Redis instance to the latest minor version](/help/en/cloud-config/latest/upgrade-a-redis-instance-to-the-latest-minor-version-1)

None

No

[Meet the required queries per second (QPS) for a Redis instance](/help/en/cloud-config/latest/redis-min-qps-limit#task-2047424)

None

No

[The Redis instance meets the specified bandwidth requirements](/help/en/cloud-config/latest/redis-min-bandwidth-limit#task-2047424)

None

No

[The Redis instance meets the memory capacity requirement](/help/en/cloud-config/latest/redis-min-capacity-limit#task-2047424)

None

No

[Average connection usage check for a Redis instance](/help/en/cloud-config/latest/average-usage-of-redis-instance-connections)

None

No

[Average CPU usage of a Redis instance](/help/en/cloud-config/latest/average-cpu-usage-of-redis-instances)

None

No

[Average memory usage check for Redis instances](/help/en/cloud-config/latest/average-memory-usage-of-redis-instances)

None

No

[Use a Redis instance in a VPC](/help/en/cloud-config/latest/redis-instance-in-vpc#task-2047424)

None

No

[The Redis instance does not have a public IP address](/help/en/cloud-config/latest/redis-instance-no-public-ip#concept-2228645)

ACS-Redis-ReleaseInstancePublicConnection

No

[Do not set the IP whitelist for a Redis instance to all network segments](/help/en/cloud-config/latest/redis-public-access-check#task-2047424)

ACS-Redis-BulkyDeleteSecurityIpFromInstanceIPArray

Yes

[Internet access is not enabled for the Redis instance, or the whitelist is not set to allow access from any source](/help/en/cloud-config/latest/redis-public-and-any-ip-access-check#concept-2270430)

None

No

[Enable password authentication for a Redis instance](/help/en/cloud-config/latest/redis-instance-open-auth-mode#concept-2228643)

None

No

[Enable SSL encryption for a Redis instance](/help/en/cloud-config/latest/redis-instance-enabled-ssl#concept-2228646)

None

No

[Enable SSL and specify a TLS version for a Redis instance](/help/en/cloud-config/latest/enable-ssl-and-use-the-specified-tls-version-for-the-redis-instance)

None

No

[Use a cluster Redis instance](/help/en/cloud-config/latest/redis-architecturetype-cluster-check#task-2047424)

None

No

[The Redis instance is a multi-zone instance](/help/en/cloud-config/latest/redis-instance-multi-zone#concept-2228644)

None

No

[The Redis instance has a dual-replica node type](/help/en/cloud-config/latest/redis-instance-double-node-type#concept-2228648)

None

No

[Use an Enterprise Edition Redis instance](/help/en/cloud-config/latest/use-an-enterprise-redis-instance)

None

No

[Enable TDE encryption for a Redis instance](/help/en/cloud-config/latest/redis-instance-enabled-tde#concept-2228642)

None

No

[Enable transparent data encryption (TDE) for a Redis instance with a custom key](/help/en/cloud-config/latest/redis-instance-enabled-byok-tde#concept-2228647)

None

No

[Disable AOF persistence for a Tair instance](/help/en/cloud-config/latest/the-tair-type-redis-instance-disables-the-aof-drop-disk)

None

No

[Enable the audit log for a Redis instance](/help/en/cloud-config/latest/redis-instance-enabled-audit-log#concept-2228640)

ACS-REDIS-BulkyModifyAuditLogConfig

No

[The audit logs for a Redis instance are kept for the required number of days](/help/en/cloud-config/latest/redis-instance-audit-log-retention#concept-2228641)

ACS-REDIS-BulkyModifyAuditLogConfig

No

[Disable high-risk commands for a Redis instance](/help/en/cloud-config/latest/redis-instance-disable-risk-commands#concept-2228638)

ACS-Redis-BulkyModifyInstanceConfig

No

[Specified high-risk commands are disabled for the Redis instance](/help/en/cloud-config/latest/the-redis-instance-is-configured-to-disable-the-specified-high-risk)

None

No

[Using DTS data synchronization to build real-time cache consistency](/help/en/cloud-config/latest/build-cache-consistency-in-real-time-using-dts-data-synchronization)

None

No

[Idle CPU utilization check for a Redis instance](/help/en/cloud-config/latest/detection-of-idle-cpu-usage-of-redis-instances)

None

No

[Idle detection for Redis instance memory usage](/help/en/cloud-config/latest/redis-instance-memory-usage-idle-detection)

None

No

### **Lindorm**

[Use a multi-zone Lindorm instance](/help/en/cloud-config/latest/a-cloud-native-multi-modal-database-lindorm-instance-using-multi-availability-zones)

None

No

[Public network access is not enabled for the Lindorm instance](/help/en/cloud-config/latest/the-lindorm-instance-is-not-enabled-for-public-access)

None

No

### **ApsaraDB MongoDB**

[MongoDB subscription cluster expiration check](/help/en/cloud-config/latest/mongodb-cluster-expired-check#concept-2228906)

None

No

[Enable release protection for a MongoDB instance](/help/en/cloud-config/latest/mongodb-instance-release-protection#concept-2228902)

None

No

[The MongoDB instance is not locked](/help/en/cloud-config/latest/mongodb-instance-lock-mode#concept-2228903)

None

No

[Enable the audit log on a MongoDB cluster](/help/en/cloud-config/latest/mongodb-instance-log-audit#concept-2228905)

None

No

[Enable log backup for a MongoDB instance](/help/en/cloud-config/latest/mongodb-instance-backup-log-enabled#concept-2271496)

None

No

[The MongoDB instance meets the specified read/write count requirement](/help/en/cloud-config/latest/mongodb-min-maxiops-limit#task-2047424)

None

No

[MongoDB meets the specified connection requirements](/help/en/cloud-config/latest/mongodb-min-maxconnections-limit#task-2047424)

None

No

[MongoDB: Using dedicated or exclusive instances](/help/en/cloud-config/latest/mongodb-instance-class-not-shared#concept-2271996)

None

No

[Use a MongoDB instance in a VPC](/help/en/cloud-config/latest/mongodb-instance-in-vpc#task-2047424)

None

No

[Do not set the IP whitelist for a MongoDB instance to all network segments](/help/en/cloud-config/latest/mongodb-public-access-check#task-2047424)

None

No

[The MongoDB instance has no Internet access, or its security whitelist is not set to allow access from any source](/help/en/cloud-config/latest/mongodb-public-and-any-ip-access-check#concept-2270632)

None

No

[Enable Secure Sockets Layer (SSL) encryption for a MongoDB instance](/help/en/cloud-config/latest/enable-ssl-encryption-for-mongodb-instances)

None

No

[Use a multi-node MongoDB instance](/help/en/cloud-config/latest/use-multi-node-mongodb-instances)

None

No

[Using a multi-zone MongoDB instance](/help/en/cloud-config/latest/use-a-multi-zone-mongodb-instance)

None

No

[Use a custom key to set TDE for MongoDB](/help/en/cloud-config/latest/set-up-transparent-data-encryption-for-mongodb-with-a-custom)

None

No

[Idle CPU detection for a MongoDB instance](/help/en/cloud-config/latest/apsaradb-for-mongodb-instance-cpu-usage-idle-detection)

None

No

[MongoDB instance idle check by memory usage](/help/en/cloud-config/latest/memory-usage-idle-detection-for-mongodb-instances)

None

No

[Free disk space check for MongoDB instances](/help/en/cloud-config/latest/disk-usage-idle-detection-for-mongodb-instances)

None

No

### **AnalyticDB for MySQL**

[The AnalyticDB for MySQL cluster has no Internet endpoint](/help/en/cloud-config/latest/adb-public-access-check#concept-2276364)

None

No

[The ADB cluster is in multi-zone deployment mode](/help/en/cloud-config/latest/adb-cluster-deployment-mode-is-multi-availability-zone)

None

No

[Enable SQL audit logs for an ADB cluster](/help/en/cloud-config/latest/adb-cluster-audit-log-enabled#concept-2276597)

None

No

[Enable log backup for an ADB cluster](/help/en/cloud-config/latest/adb-cluster-log-backup-enabled#concept-2276602)

None

No

[Set a reasonable maintenance window for an ADB cluster](/help/en/cloud-config/latest/adb-cluster-maintain-time-check#concept-2276525)

None

No

[Check instance expiration for AnalyticDB for Data Warehouse](/help/en/cloud-config/latest/instance-expiration-detection-for-adb-data-warehouse-edition)

None

No

### **Cloud-native data warehouse AnalyticDB for PostgreSQL**

[Use a multi-zone cloud-native data warehouse AnalyticDB instance](/help/en/cloud-config/latest/a-cloud-native-data-warehouse-analyticdb-instance-that-uses-multiple-zones)

None

No

[Enable disk encryption for a PostgreSQL instance](/help/en/cloud-config/latest/enable-cloud-disk-encryption-for-postgresql-instances)

None

No

[Enable SSL encryption for a PostgreSQL instance](/help/en/cloud-config/latest/enable-ssl-encryption-for-postgresql-instances)

None

No

[AnalyticDB for PostgreSQL: Check active data backups](/help/en/cloud-config/latest/analyticdb-postgresql-available-data-backup-check)

None

No

### **ApsaraDB for ClickHouse**

[Using a multi-zone ApsaraDB for ClickHouse cluster instance](/help/en/cloud-config/latest/clickhouse-cluster-instances-using-multiple-zones)

None

No

### **Time Series Database (TSDB)**

[The TSDB instance has no Internet access](/help/en/cloud-config/latest/tsdb-instance-public-access-check)

None

No

[TSDB instance security whitelist check](/help/en/cloud-config/latest/tsdb-instance-security-ip-check)

None

No

### **ApsaraDB for HBase**

[The HBase cluster type is Cluster Edition](/help/en/cloud-config/latest/hbase-cluster-type-check#concept-2224501)

None

No

[HBase cluster in a VPC](/help/en/cloud-config/latest/hbase-cluster-in-vpc#concept-2224617)

None

No

[The HBase cluster does not have an Internet address](/help/en/cloud-config/latest/the-public-network-address-of-the-hbase-cluster-is-not)

None

No

[Configure an HBase cluster for high availability](/help/en/cloud-config/latest/hbase-cluster-ha-check#concept-2224630)

None

No

[Use a multi-zone HBase cluster](/help/en/cloud-config/latest/use-multi-zone-hbase-cluster)

None

No

[Enable deletion protection for an HBase cluster](/help/en/cloud-config/latest/hbase-cluster-deletion-protection#concept-2224641)

None

No

[HBase subscription cluster expiration check](/help/en/cloud-config/latest/hbase-cluster-expired-check#concept-2224730)

None

No

### **ApsaraDB OceanBase**

[Enable Secure Sockets Layer (SSL) encryption for an OceanBase cluster](/help/en/cloud-config/latest/oceanbase-instance-enabled-ssl#concept-2226379)

None

No

[The IP whitelist group settings for an OceanBase tenant are effective.](/help/en/cloud-config/latest/oceanbase-tenant-security-ip-check#concept-2226381)

None

No

[Internet access is not enabled for the OceanBase tenant, or the security whitelist is not set to allow access from any source](/help/en/cloud-config/latest/oceanbase-public-and-any-ip-access-check#concept-2270460)

None

No

[Enable transparent data encryption (TDE) for an OceanBase tenant](/help/en/cloud-config/latest/oceanbase-tenant-enabled-encryption#concept-2226382)

None

No

[Enable database backup for an OceanBase cluster](/help/en/cloud-config/latest/oceanbase-instance-enabled-backup#concept-2226383)

None

No

[Enable SQL diagnostics in an OceanBase cluster](/help/en/cloud-config/latest/oceanbase-instance-enabled-sql-diagnosis#concept-2226384)

None

No

### **Data Management (DMS)**

[Enable Stable Change checks in a DMS instance](/help/en/cloud-config/latest/dms-instance-stability-change-enable-check)

None

No

[Enable sensitive data protection for a database instance](/help/en/cloud-config/latest/activate-sensitive-data-protection-for-a-database-instance)

None

No

### **Data Transmission Service (DTS)**

[Use a secure SSL connection for the source and destination databases of a DTS migration task](/help/en/cloud-config/latest/dts-migration-task-source-database-and-target-database-use-ssl)

None

No

[Use SSL for the source database of a DTS tracking task](/help/en/cloud-config/latest/dts-subscription-task-source-library-uses-ssl-security-link)

None

No

[Use SSL connections for the source and destination databases of a DTS sync task](/help/en/cloud-config/latest/dts-synchronization-task-source-database-and-target-database-use-ssl)

None

No

[Enable geo-disaster recovery for a database instance using DTS](/help/en/cloud-config/latest/enable-dts-synchronization-for-database-instances)

None

No

## **Big Data Computing**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for remediation**

**Is dry run supported?**

### **Cloud-native big data computing service**

[Enable encryption for a MaxCompute project](/help/en/cloud-config/latest/enable-encryption-for-maxcompute-projects)

None

No

[Enable an IP whitelist for a MaxCompute project](/help/en/cloud-config/latest/enable-ip-whitelist-for-maxcompute-project)

None

No

[A MaxCompute project uses a zone-disaster recovery architecture](/help/en/cloud-config/latest/maxcompute-projects-use-the-same-city-disaster-recovery-architecture)

None

No

### **Hologres**

[The Hologram instance has remote backup data](/help/en/cloud-config/latest/the-hologram-instance-has-remote-backup-data)

None

No

### **Realtime Compute for Apache Flink**

[Use multi-zone Flink instances](/help/en/cloud-config/latest/use-a-flink-instance-in-a-multi-zone)

None

No

### **Retrieval and Analysis Service (Elasticsearch Edition)**

[Elasticsearch instance in a virtual private cloud (VPC)](/help/en/cloud-config/latest/elasticsearch-instance-in-vpc#concept-2226160)

None

No

[Kibana public network access is disabled for the Elasticsearch instance](/help/en/cloud-config/latest/elasticsearch-instance-enabled-kibana-public-check#concept-2267010)

None

Yes

[The Elasticsearch instance does not have public network access](/help/en/cloud-config/latest/elasticsearch-instance-enabled-public-check#concept-2266988)

None

Yes

[Internet access is not enabled for the Elasticsearch instance or access from any IP address is not allowed](/help/en/cloud-config/latest/elasticsearch-public-and-any-ip-access-check#concept-2273256)

None

No

[Enable disk encryption for data nodes of an Elasticsearch instance](/help/en/cloud-config/latest/elasticsearch-instance-enabled-data-node-encryption#concept-2267026)

None

No

[Enable disk encryption on elastic data nodes in an Elasticsearch instance](/help/en/cloud-config/latest/enable-disk-encryption-on-the-elastic-data-node-of-the)

None

No

[Enable disk encryption for cold data nodes of an Elasticsearch instance](/help/en/cloud-config/latest/enable-disk-encryption-for-cold-data-nodes-of-elasticsearch-instances)

None

No

[Use the HTTPS transport protocol for an Elasticsearch instance](/help/en/cloud-config/latest/the-elasticsearch-instance-uses-the-https-transport-protocol)

None

No

[Use a multi-zone Elasticsearch instance](/help/en/cloud-config/latest/use-a-multi-zone-elasticsearch-instance)

None

No

[Enable automatic backups for an Elasticsearch instance](/help/en/cloud-config/latest/enable-automatic-backup-for-elasticsearch-instances)

None

No

[Deprecated Elasticsearch instances are not used](/help/en/cloud-config/latest/not-using-a-deprecated-elasticsearch-instance)

None

No

[All Elasticsearch instances use supported versions](/help/en/cloud-config/latest/not-using-a-deprecated-elasticsearch-instance-version)

None

No

### **Open source big data platform E-MapReduce**

[Internet access check for the master node of an EMR cluster](/help/en/cloud-config/latest/public-network-enabling-detection-of-master-nodes-in-an-emr)

None

No

[Unrestricted whitelist in EMR cluster security group](/help/en/cloud-config/latest/any-whitelist-of-an-emr-cluster-security-group)

None

No

## **Migration and operations management**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for remediation**

**Supports dry run**

### **Resource Access Management (RAM)**

[No AccessKey for the Alibaba Cloud account](/help/en/cloud-config/latest/j68lnu#task-2047424)

None

No

[No RAM users are created for the Alibaba Cloud account](/help/en/cloud-config/latest/ram-user-not-created-under-alibaba-cloud-account)

None

No

[MFA is enabled for the Alibaba Cloud account](/help/en/cloud-config/latest/ms831a#task-2047424)

None

No

[Available credit alert is enabled](/help/en/cloud-config/latest/available-quota-alert-enable-test)

ACS-Config-BSS-ModifyAlarm

No

[Check your account password policy](/help/en/cloud-config/latest/check-the-account-password-policy-under-your-account)

None

No

[Resources with a specified name exist under the Alibaba Cloud account](/help/en/cloud-config/latest/resources-matching-the-specified-name-exist-under-the-alibaba-cloud)

None

No

[Simple Log Service data transformation tasks that meet specified requirements exist under the Alibaba Cloud account](/help/en/cloud-config/latest/log-service-processing-tasks-that-meet-the-specified-requirements-exist)

None

No

[RAM user logon is checked](/help/en/cloud-config/latest/ory77y#task-2047424)

None

No

[RAM users have logged on within a specified period](/help/en/cloud-config/latest/i8f3jv#task-2047424)

None

No

[AccessKeys for RAM users are rotated within a specified period](/help/en/cloud-config/latest/the-accesskey-of-the-ram-user-is-rotated-within-the)

None

No

[No active keys exist for RAM users](/help/en/cloud-config/latest/ram-user-active-ak-check#concept-2228321)

None

No

[No idle AccessKeys exist for RAM users](/help/en/cloud-config/latest/k054yy#task-2047424)

None

No

[No disabled AccessKeys exist for RAM users](/help/en/cloud-config/latest/q21yv2#task-2047424)

None

No

[No access policies that meet specified conditions are attached to RAM users or their user groups](/help/en/cloud-config/latest/ram-user-no-has-specified-policy#concept-2270659)

None

No

[No specified high-risk permissions are granted to RAM users](/help/en/cloud-config/latest/ram-user-specified-permission-bound)

None

No

[A RAM user has no more than one active AccessKey](/help/en/cloud-config/latest/ram-user-has-no-more-than-two-valid-accesskeys)

None

No

[Console access and API call access are not enabled for a RAM user at the same time](/help/en/cloud-config/latest/check-that-ram-users-cannot-open-the-identity-of-the)

None

No

[The password policy for RAM users meets requirements](/help/en/cloud-config/latest/ogpp3c#task-2047424)

ACS-RAM-SetPasswordPolicy

No

[Password complexity in the password policy for RAM users meets requirements](/help/en/cloud-config/latest/the-password-complexity-set-in-the-ram-user-password-policy)

None

No

[Maximum logon retries in the password policy for RAM users meets requirements](/help/en/cloud-config/latest/the-maximum-number-of-retries-set-in-the-ram-user)

None

No

[Password expiration period in the password policy for RAM users meets requirements](/help/en/cloud-config/latest/the-password-validity-period-specified-in-the-ram-user-password)

None

No

[MFA is enabled for high-privilege RAM users](/help/en/cloud-config/latest/ks3e19#task-2047424)

None

No

[MFA is enabled for RAM users](/help/en/cloud-config/latest/y05868#task-2047424)

ACS-ECS-BulkyUpdateLoginProfile

No

[Check if a RAM user has enabled MFA for logon](/help/en/cloud-config/latest/check-whether-the-ram-user-has-enabled-mfa-secondary-authentication)

None

No

[Permissions are not granted directly to RAM users](/help/en/cloud-config/latest/w0vx10#task-2047424)

None

No

[RAM users belong to a user group](/help/en/cloud-config/latest/r3772w#task-2047424)

None

No

[RAM user groups are not empty](/help/en/cloud-config/latest/qz62cl#task-2047424)

None

No

[No super administrator exists](/help/en/cloud-config/latest/myjmgn#task-2047424)

None

No

[RAM users and their user groups do not have super administrator permissions or administrator permissions for any Alibaba Cloud service](/help/en/cloud-config/latest/ram-user-no-product-admin-access#concept-2228322)

None

No

[An access policy that meets specified parameter conditions is attached to RAM users](/help/en/cloud-config/latest/ram-user-has-specified-policy)

None

No

[Custom RAM policies do not contain the permission configuration specified by parameters](/help/en/cloud-config/latest/the-custom-ram-policy-does-not-contain-the-permission-configuration)

None

No

[No idle RAM access policies exist](/help/en/cloud-config/latest/w10m2r#task-2047424)

None

No

[No idle RAM user groups exist](/help/en/cloud-config/latest/ram-group-in-use-check#concept-2228325)

None

No

[The Alibaba Cloud account has a role with the specified name](/help/en/cloud-config/latest/root-has-specified-role#concept-2229336)

None

No

[Roles defined by RAM users do not include product management permissions](/help/en/cloud-config/latest/ram-user-defined-roles-do-not-include-product-management-permissions)

None

No

[RAM roles do not have super administrator permissions or administrator permissions for any Alibaba Cloud service](/help/en/cloud-config/latest/ram-role-no-product-admin-access#concept-2228323)

None

No

[An access policy that meets specified parameter conditions is attached to RAM roles](/help/en/cloud-config/latest/ram-role-has-specified-policy)

None

No

[Role-based SSO is enabled](/help/en/cloud-config/latest/open-role-sso)

None

No

[SSO is enabled for RAM users](/help/en/cloud-config/latest/ram-user-sso-enabled#concept-2269736)

None

No

[CloudSSO SAML signing certificate expiration is checked](/help/en/cloud-config/latest/cloud-sso-saml-signature-certificate-expiration-check)

None

No

[CloudSSO SCIM key expiration is checked](/help/en/cloud-config/latest/cloud-sso-scim-key-expiration-check)

None

No

### **Resource Management**

[Resources are located in specified regions](/help/en/cloud-config/latest/ng77m3#task-2047424)

None

No

[Resource names match the specified regular expression](/help/en/cloud-config/latest/resource-name-regex-match#concept-2267276)

None

No

[Resource groups for linked instances are inherited from the parent ECS instance](/help/en/cloud-config/latest/detect-the-resource-group-that-inherits-the-resources-of-the)

ACS-Config-ResourceManager-BulkyMoveResources

No

[Linked resources inherit the resource group of the ECS disk](/help/en/cloud-config/latest/related-resources-inherit-the-resource-group-to-which-the-ecs)

ACS-Config-ResourceManager-BulkyMoveResources

No

[Linked resources inherit the resource group of the ECS network interface card](/help/en/cloud-config/latest/related-resources-inherit-the-resource-group-to-which-the-ecs-1)

ACS-Config-ResourceManager-BulkyMoveResources

No

[Linked resources inherit the resource group of the NAT Gateway](/help/en/cloud-config/latest/related-resources-inherit-the-resource-group-to-which-the-nat)

ACS-Config-ResourceManager-BulkyMoveResources

No

[Linked resources inherit the resource group of the SLB instance](/help/en/cloud-config/latest/related-resources-inherit-the-resource-group-to-which-the-slb)

ACS-Config-ResourceManager-BulkyMoveResources

No

[The resource group associated with a resource is not the default resource group](/help/en/cloud-config/latest/the-resource-group-associated-with-the-resource-is-not-the)

None

No

[Resources inherit specified tags from the resource group](/help/en/cloud-config/latest/resources-inherit-tags-from-resource-group#concept-2229310)

ACS-TAG-TagResourcesIgnoreCaseSensitive

No

[Resources inherit tags from disks](/help/en/cloud-config/latest/inherited-disk-label-resource-detection)

ACS-TAG-TagResourcesIgnoreCaseSensitive

No

[Resources inherit tags from the parent ECS instance](/help/en/cloud-config/latest/resources-inherit-tags-from-ecs-instance#concept-2267639)

None

No

[The account type for Resource Management is checked](/help/en/cloud-config/latest/resource-management-account-type-detection)

None

No

[Resources inherit tags from Kafka instances](/help/en/cloud-config/latest/resource-detection-that-inherits-kafka-instance-tags)

ACS-TAG-TagResourcesIgnoreCaseSensitive

No

### **Tags**

**Note**

For information about Alibaba Cloud services that support tags, see [Alibaba Cloud services that support tags](/help/en/resource-management/tag/product-overview/services-that-work-with-tag#concept-2537668).

[All specified tags exist](/help/en/cloud-config/latest/b5m012#task-2472858)

ACS-TAG-TagResources

No

[At least one specified tag exists](/help/en/cloud-config/latest/c3q776#task-2047424)

None

No

[Matching multiple tag values with an enumeration](/help/en/cloud-config/latest/kmh7bd#task-2047424)

None

No

[All specified tags are matched](/help/en/cloud-config/latest/contains-all-tag#concept-2267554)

None

No

[Resources have tags](/help/en/cloud-config/latest/resources-tags-not-empty#concept-2276243)

None

No

[Resource tags match the specified regular expression](/help/en/cloud-config/latest/resource-tags-match-a-specified-regular-expression)

ACS-TAG-TagResources

No

[Resource tags have consistent case and no leading or trailing whitespace](/help/en/cloud-config/latest/the-resource-label-information-has-the-same-case-and-no)

ACS-Config-Tag-TagResources

No

### **ActionTrail**

[A trail is enabled for ActionTrail](/help/en/cloud-config/latest/actiontrail-enabled#task-2047424)

None

No

[Full log tracking is enabled for ActionTrail](/help/en/cloud-config/latest/actiontrail-trail-intact-enabled#task-2047424)

None

No

### **CloudMonitor**

[A CloudMonitor alert rule is set for the specified Alibaba Cloud service](/help/en/cloud-config/latest/cms-created-rule-for-specified-product#concept-2276371)

None

No

[An event-triggered alert rule with the specified name is set in CloudMonitor](/help/en/cloud-config/latest/set-an-event-alarm-rule-with-a-specified-name-in)

None

No

## **Artificial intelligence**

**Alibaba Cloud service**

**Rule template**

**OOS template ID for remediation**

**Dry run supported**

### **Platform for AI (PAI)**

[Set alerts for the PAI-DLC distributed training service](/help/en/cloud-config/latest/setting-alarms-for-distributed-training-service-pai-dlc)

None

No

[Set alerts for the PAI-EAS online model service](/help/en/cloud-config/latest/setting-alarms-for-model-online-service-pai-eas)

None

No

[Enable AIMaster-based fault tolerance monitoring for PAI distributed training](/help/en/cloud-config/latest/pai-distributed-training-enables-aimaster-based-fault-tolerant-monitoring)

None

No

[Enable computing power health checks for PAI distributed training](/help/en/cloud-config/latest/pai-distributed-training-open-computing-power-health-detection)

None

No

[PAI online model service instances are distributed across multiple zones](/help/en/cloud-config/latest/pai-model-online-service-instances-are-distributed-in-multiple-zones)

None

No

### **Alibaba Cloud Model Studio**

[Enable the input content safety guardrail for Model Studio](/help/en/cloud-config/latest/enabling-input-content-safety-barrier-for-refining)

None

No

[Enable the output content safety guardrail for Model Studio](/help/en/cloud-config/latest/enable-output-content-safety-barrier-for-refining)

None

No

[Enable the input content prompt attack safety guardrail for Model Studio](/help/en/cloud-config/latest/enabling-input-content-prompts-to-attack-security-guardrails-for-refining)

None

No

[Enable the output content prompt attack safety guardrail for Model Studio](/help/en/cloud-config/latest/enable-the-output-content-prompt-to-attack-the-safety-fence)

None

No

[Enable the output content malicious URL safety guardrail for Model Studio](/help/en/cloud-config/latest/enable-output-content-malicious-url-security-fence-for-bailian)

None

No
