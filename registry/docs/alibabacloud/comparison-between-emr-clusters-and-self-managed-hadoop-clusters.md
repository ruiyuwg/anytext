E-MapReduce(EMR) clusters support the auto scaling and automated O&M features that self-managed Hadoop clusters do not support. The features reduce O&M complexity. EMR also provides the user management, data encryption, and permission management features for you to protect cluster data, and integrates various open source components to help you process and analyze big data.

**Comparison item**

**EMR cluster**

**Self-managed Hadoop cluster**

Cost and efficiency

EMR clusters can be created in minutes to quickly respond to business requirements. The pay-as-you-go and subscription billing methods are supported.

You must estimate resources in advance, purchase servers, and deploy Hadoop components. It may take several weeks to create a self-managed cluster.

You can adjust the resources in an EMR cluster in a flexible manner and store data at different layers. The resource utilization is high.

The resources are relatively fixed. The resource utilization is low.

No additional software license fees are generated.

A Hadoop distribution is used. Therefore, additional license fees are generated.

Ease of use

The default parameters are optimized based on the cluster specifications and the features of core components are enhanced. This greatly improves the performance of the open source components.

Open source community versions are used. You need to optimize performance based on your business requirements. This increases the development complexity.

EMR clusters are verified in the environments of large-scale enterprises and are continuously upgraded based on open source software versions. Bugs are fixed on a regular basis.

You must upgrade open source components.

Components in EMR clusters have passed professional compatibility tests and provide better user experience than self-managed clusters.

You must test the version compatibility of different components and fix bugs.

O&M and monitoring

Computing resources in a cluster can be dynamically adjusted by time or cluster load to expand the computing capability in minutes. For more information, see [Auto scaling](/help/en/emr/emr-on-ecs/user-guide/use-the-auto-scaling-feature/).

Cluster resources cannot be dynamically adjusted based on the peaks and troughs of your business load.

EMR provides the monitoring and diagnostics feature to help you implement cluster O&M. For more information, see [Initiate health diagnostics](/help/en/emr/emr-on-ecs/user-guide/start-health-diagnostics) and [View daily cluster reports and analysis results in the reports](/help/en/emr/emr-on-ecs/user-guide/view-daily-cluster-reports-and-analysis-results-in-the-reports).

Monitoring and diagnostics of clusters rely on professional O&M personnel, which results in low handling efficiency of issues.

Security and ecosystem

Enterprises can manage resources based on the multi-tenancy capability that is provided by EMR clusters, manage permissions on tables, columns, and rows, and audit logs. Data encryption is supported.

You need to configure the multi-tenancy capability. The multi-tenancy capability requires further optimization and cannot meet the requirements of enterprises.

The Alibaba Cloud ecosystem integrates the open source ecosystem and can connect to other services, such as DataWorks, Data Lake Formation (DLF), and CloudMonitor.

Cluster capabilities are built based on the open source ecosystem, which requires high costs and takes a long period of time.

Service support

Professional and senior big data teams can provide after-sales support. For more information, see [Technical support scope and contact methods](/help/en/emr/emr-on-ecs/support/technical-support).

No official service support is available. Issue troubleshooting depends on self-managed teams, which increases the complexity of O&M.
