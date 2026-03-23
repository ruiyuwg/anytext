This topic describes how to migrate workloads from a self-managed Kubernetes cluster to a Container Service for Kubernetes (ACK) cluster without service interruptions.

## Migration scheme

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7992667171/CAEQJhiBgMChtaef_xgiIGMyOGVjNjAyYjVlMTQ5NThiYTczYTk5NDkwYzM4NjE03963382_20230830144006.372.svg)

## Procedure

1.  Create and configure an ACK cluster.
    
    O&M engineers create an ACK cluster and configure the cluster resources. This simplifies application migration for developers. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
    The following configuration items are required when you create the ACK cluster:
    
    -   Cluster type: We recommend that you create an ACK Pro cluster. The control plane of an ACK Pro cluster is managed by ACK. You need to create and manage only worker nodes. You are charged only for the resources used by the worker nodes.
        
    -   **Operating system**: Select an operating system based on your requirements.
        
        -   By default, CentOS 7.6 or Aliyun Linux 2.1903 is selected. We recommend that you use the default settings.
            
        -   If the default system kernel cannot meet your requirements, you can use a custom image. For more information, see [Use a custom image to create an ACK cluster](/help/en/ack/use-a-custom-image-to-create-an-ack-cluster#task-2362493).
            
    -   **VPC**: Select a virtual private cloud (VPC) and vSwitches for the ACK cluster.
        
    -   **SNAT**: Configure SNAT entries for the VPC.
        
    -   **Public access**: Expose the API server of the ACK cluster by using an elastic IP address (EIP).
        
    -   **CloudMonitor agent**: Install the CloudMonitor agent on the Elastic Compute Service (ECS) instances in the ACK cluster.
        
    -   **Simple Log Service**: Install and configure the Simple Log Service agent in the ACK cluster.
        
2.  Migrate data.
    
    -   Migrate databases.
        
        1.  Create an ApsaraDB RDS instance.
            
        2.  Configure a whitelist for the database to allow only specified IP addresses to access the ApsaraDB RDS instance.
            
        3.  Configure a PrivateZone.
            
            Use the PrivateZone to resolve the domain name of the database to the IP address of the ApsaraDB RDS instance. This eliminates the need to modify the database configuration on applications.
            
        4.  Migrate the data in the MySQL database of the self-managed Kubernetes cluster.
            
            Use Data Transmission Service (DTS) to migrate the data from the MySQL database to the ApsaraDB RDS instance in full, incremental, or two-way synchronization mode. For more information, see [Migrate data from a self-managed MySQL database to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance#concept-268502).
            
    -   Migrate data.
        
        1.  Activate Object Storage Service (OSS).
            
        2.  Create an OSS bucket.
            
        3.  Migrate the data that is stored in the self-managed Kubernetes cluster.
            
            Use the ossimport tool to migrate the data in batches from an on-premises server or a third-party cloud storage service to OSS. For example, you can choose a third-party cloud storage service such as Amazon Simple Storage Service (S3), Microsoft Azure, or Tencent Cloud Object Storage. For more information, see [Overview](/help/en/oss/overview-36#concept-rc2-t1h-wdb).
            
    -   Migrate images.
        
        1.  Create a Container Registry repository.
            
        2.  Set the credential that is used to access the created Container Registry repository.
            
        3.  Migrate the images of the self-managed Kubernetes cluster.
            
            You can use the image-syncer tool to migrate the images of the self-managed Kubernetes cluster to the Container Registry repository. For more information, see [Use image-syncer to migrate container images](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/use-cases/use-image-syncer-to-migrate-container-images#task-2356572).
            
3.  Migrate application configurations.
    
    O&M engineers or developers migrate the cluster or application configurations. For more information, see [Migrate applications from an external Kubernetes cluster to ACK clusters](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/use-cases/migrate-applications-from-self-managed-kubernetes-clusters-to-ack-clusters#task-2248982).
    
4.  Perform regression tests.
    
    Test engineers perform regression tests on the ACK cluster without interrupting the online business.
    
    1.  Configure the domain names for regression tests.
        
    2.  Test applications.
        
    3.  Check the logged application events.
        
    4.  Check the monitoring metrics of the applications.
        
    
5.  Switch all traffic to ACK.
    
    O&M engineers modify the Domain Name System (DNS) configuration to switch traffic to the ACK cluster.
    
    1.  Use the DNS service: Modify the DNS configuration to switch the traffic.
        
    2.  Update the configurations or code of the client to switch the traffic.
        
    
6.  Undeploy the self-managed Kubernetes cluster.
    
    O&M engineers check whether the ACK cluster can be accessed as expected. Then, O&M engineers undeploy the self-managed Kubernetes cluster.
    
    1.  Check whether the ACK cluster can receive and send traffic as expected.
        
    2.  Undeploy the self-managed Kubernetes cluster.
        
    3.  Clear the backup files stored in the OSS bucket that is created when you migrate applications.
