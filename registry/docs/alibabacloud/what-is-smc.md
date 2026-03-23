Server Migration Center (SMC) is a migration platform provided by Alibaba Cloud for cloud migration and migration between cloud services. SMC offers migration services with universal capabilities, consistent experience, and high efficiency. This meets your migration requirements when you use Alibaba Cloud services.

## Benefits

SMC simplifies the migration process to provide easy-to-use services. This meets your various migration requirements.

-   Applies to migrations across diverse platforms and environments.
    
-   Highly automated to reduce manual labor
    
    SMC supports automated and unattended migration that is conducted with simple operations. You can check the migration progress in the SMC console or by calling an API operation.
    
-   Provides automatic server restoration and result verification.
    
    SMC automatically detects server conditions and restores unhealthy servers before migration. After migration, you can verify migration results in the SMC console.
    

## **Architecture**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0597625671/CAEQTxiBgMDZjbG51xkiIGQyNDc5YWNjMGU4NTQzNmViZDYzZTEyMjEzZGU2ZTFk4657013_20240902172755.075.svg)

## **Supported migration sources and methods**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0597625671/CAEQTxiBgIC46rG51xkiIGMyMzJhMTkwZWJkZDRmYmRiOTc3Y2U1M2QwZjdkNjI14657013_20240902180852.506.svg)

## **Scenarios**

**Scenario**

**Description**

**References**

Server migration

You can use the SMC client to migrate source servers deployed on physical machines, VMs, and third-party cloud service platforms to Alibaba Cloud.

-   [Migrate a server to an ECS instance](/help/en/smc/user-guide/migrate-the-source-server-to-the-ecs-instance)
    
-   [Migrate data between ECS instances that belong to the same Alibaba Cloud account or different Alibaba Cloud accounts](/help/en/smc/user-guide/migrate-servers-between-ecs-instances)
    
-   [Migrate data from an Alibaba Cloud simple application server to an ECS instance](/help/en/smc/user-guide/migrate-simple-application-server-to-ecs-instances)
    
-   [Migrate data from a lightweight server provided by a third party to an Alibaba Cloud simple application server](/help/en/smc/user-guide/migrate-source-servers-to-lightweight-application-servers)
    
-   [Migrate incremental data from a server](/help/en/smc/use-cases/migrate-incremental-data-from-a-source-server)
    

Operating system migration

You can use SMC to migrate the operating system such as CentOS 7, CentOS 8, Windows Server 2008, or Windows Server 2012 that runs on an Elastic Compute Service (ECS) instance to another operating system or upgrade the operating system to a later version. This ensures longer maintenance support for operating systems in cases such as end of life (EOL) of certain operating systems.

-   [Migrate a Linux operating system](/help/en/smc/user-guide/migrate-an-operating-system)
    
-   [Migrate a Windows operating system](/help/en/smc/user-guide/windows-operating-system-migration)
    

VMware migration without agents

SMC provides the non-intrusive migration technology to help you migrate VMware VMs to Alibaba Cloud without the need to install agents. This improves the efficiency of business migration to Alibaba Cloud and eliminates your concerns about business security and business performance during the migration process.

-   [Migrate VMware VMs without agents](/help/en/smc/user-guide/migrate-vmware-vms-without-agents)
    
-   [Migrate incremental data from a VMware VM without an agent](/help/en/smc/use-cases/migrate-incremental-data-from-a-vmware-vm-without-an-agent)
    

Cross-zone migration

You can use SMC to migrate ECS instances across zones within the same region with high efficiency.

[Migrate ECS instances across zones](/help/en/smc/user-guide/create-a-cross-zone-migration-job)

Desktop migration

You can migrate your PC or cloud desktop to Elastic Desktop Service (EDS). EDS is an easy-to-use, secure, and efficient cloud desktop service. It supports fast creation and efficient management of desktop environments. You can use EDS to build a secure and flexible office system.

[Migrate data from desktop servers to EDS](/help/en/smc/user-guide/migrate-servers-to-alibaba-cloud-eds-in-invitational-preview)

Containerized migration

You can containerize servers and business applications from physical machines, mainstream virtualization environments (VMware, Xen, KVM, and Hyper-V), and multicloud platforms (AWS, Azure, GCP, and Tencent Cloud). You can generate images and push them to Alibaba Cloud Container Registry. Then, you can deploy applications in Container Service for Kubernetes (ACK) to implement containerized migration of servers and applications.

[Containerized migration](/help/en/smc/user-guide/migrate-source-servers-to-container-registry)

Edge node migration

You can migrate your servers based on physical machines, local virtual machines (VMware, Xen, KVM, Hyper-V, etc.), other cloud providers (AWS, Azure, Google Cloud, Tencent Cloud, etc.), and Alibaba Cloud Elastic Compute Service (ECS) directly to Alibaba Cloud Edge Node Service ENS images. After migration, you can use the ENS images to create Edge Node Service ENS instances, improving migration efficiency.

[Edge node migration](/help/en/smc/user-guide/edge-node-migration)

## Migration workflow

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0597625671/CAEQLhiBgMDzxbb3lRkiIGY3MjA3N2NjOGE3ODQ5NTFhYjk4MjE5MjZiMWI2NGVm3670126_20230531150321.170.svg)

For more information, see [Migration guide](/help/en/smc/user-guide/server-migration-guidelines).

## Billing

SMC is free of charge. However, when you use SMC to perform migration, you are charged for the ECS resources that you use. For more information, see [Billing](/help/en/smc/product-overview/pricing#concept-593074).

## Services that work with SMC

During server migration, you may also need to use other Alibaba Cloud services such as ECS, Virtual Private Cloud (VPC), and Container Service for Kubernetes (ACK). The following figure shows the relationships between SMC and other Alibaba Cloud services.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1597625671/CAEQTxiBgIDd5dGI2BkiIGFjZjU0YTdlZmM4NDQ0OTZiNjI1NzNhMjQ4YzU4ZmNj4610620_20240828101712.847.svg)

The following table describes the relationships between SMC and other Alibaba Cloud services.

**Service**

**Relationship with other services**

**References**

[ECS](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome)

When you migrate a server, you can create an ECS image from a snapshot of the source server. Then, you can use the ECS image to create an ECS instance.

-   [Snapshot overview](/help/en/ecs/user-guide/snapshot-overview#concept-qft-2zw-ydb)
    
-   [Image overview](/help/en/ecs/user-guide/image-overview)
    
-   [Create an instance by using a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image)
    

[VPC](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)

When you migrate a server, SMC allows you to migrate data over the Internet or a VPC.

-   [IP addresses in a VPC](/help/en/ecs/user-guide/vpc)
    
-   [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc)
    
-   [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch)
    
-   [Migrate servers over a VPC](/help/en/smc/use-cases/migrate-servers-over-a-vpc)
    
-   [Connect a data center to a VPC](/help/en/vpc/connect-vpc-to-local-idc-office-terminal-other-cloud)
    

[Container Registry](/help/en/acr/product-overview/what-is-container-registry#concept-2058233)

You can migrate a server to a container image. Then, you can use the container image to deploy containerized applications.

[Containerized migration](/help/en/smc/user-guide/migrate-source-servers-to-container-registry)

[ACK](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/what-is-ack)

After a server is migrated to a container image, you can use the container image to deploy a containerized application in an ACK cluster.

-   [Deploy a sample Rubik's cube game application on ACK](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/getting-started-with-ack-using-the-ack-console)
    
-   [Deploy a stateless application from an image](/help/en/ack/deploy-a-stateless-application-from-an-image)
    

[Edge Node Service](/help/en/ens/product-overview/what-is-ens)

You can migrate a server to an ENS image. Then, you can use the ENS image to create an ENS instance.

[Create an ENS instance from a custom image](/help/en/ens/create-an-instance)

[Resource Access Management (RAM)](/help/en/ram/product-overview/what-is-ram#concept-oyr-zzv-tdb)

RAM is a service that is used to manage user identities and resource access permissions. You can use RAM to control the operation permissions of users. This allows you to implement fine-grained permission management for SMC resources.

-   [Introduction](/help/en/ram/introduction)
    
-   [Create a RAM user](/help/en/ram/create-a-ram-user-1)
    
-   [Create custom policies](/help/en/ram/create-a-custom-policy-1)
    
-   [Grant permissions to a RAM user](/help/en/ram/grant-permissions-to-a-ram-user)
    

## Terms

**Term**

**Description**

SMC client

The migration client developed by Alibaba Cloud. It runs on source servers to perform migration jobs.

Migration source

The information about a source server that is registered with the SMC console based on the information reported by the SMC client. A migration source corresponds to a source server.

Migration job

The job created for a migration source in the SMC console after the information about the migration source is imported. A job automatically runs after it is created to start the migration.

Destination instance

The ECS instance to which data is to be migrated. When you create a migration job, you can select an ECS instance as the destination instance. After migration, the data in the source server overwrites the data in the destination instance.

Intermediate instance

The temporary instance that is created to assist migration. If the migration destination is an ECS image or a container image, SMC creates a temporary intermediate instance named `No_Delete_SMC_Transition_Instance` within your Alibaba Cloud account.

ECS image

You can migrate a server to an ECS image and create an ECS instance based on the ECS image.

Container image

You can migrate a server to a container image and deploy containerized applications based on the container image.

## **Feedback and suggestions**

If you have any questions or suggestions while using SMC, you can use the following methods to provide feedback and receive technical support. Your feedback helps us improve our services and your product experience.

[Click the link](https://wx-in-i.dingtalk.com/invite-page/weixin.html?bizSource=____source____&corpId=dingc9d6f7ff346016e135c2f4657eb6378f&inviteCode=QfJRMdYzwxwTHM4) or scan the following QR code to join the technical support DingTalk group. ([Download the DingTalk client](https://tms.dingtalk.com/markets/dingtalk/download))

![SMC外部3群邀请二维码.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7514911271/p803959.png)
