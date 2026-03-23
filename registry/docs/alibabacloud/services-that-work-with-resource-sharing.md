This topic provides the services that work with Resource Sharing and the types of resources that can be shared.

**Service**

**Resource type**

**Resource ARN**

**Support for sharing with services**

**Support for exit from a resource share**

**Support for sharing with accounts outside a resource directory**

**References**

Virtual Private Cloud (VPC)

`VSwitch`: vSwitch

acs:vpc:{#regionId}:{#accountId}:vswitch/{#VSwitchId}

No

Yes

Yes

[Use the Resource Directory service and the VPC sharing feature for resource sharing among multiple accounts](/help/en/resource-management/resource-sharing/use-cases/scheme-overview#concept-2020483)

`PrefixList`: VPC prefix list

acs:vpc:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}

No

Yes

Yes

[Use cases of prefix lists](/help/en/vpc/user-guide/prefix-list-use-cases#task-2230123)

`PublicIpAddressPool`: IP address pool

acs:vpc:{#regionId}:{#accountId}:publicipaddresspool/{#PublicIpAddressPoolId}

No

Yes

Yes

[Share an IP address pool](/help/en/eip/share-an-ip-address-pool#task-2275440)

`IpamPool`: IP Address Manager (IPAM) pool

acs:vpc:{#regionId}:{#accountId}:ipampool/{#IpamPoolId}

No

No

Yes

[Use resource management to share IPAM pools](/help/en/vpc/use-resource-management-to-share-ipam-address-pools)

`IpamResourceDiscovery`: IPAM resource discovery

acs:vpc:{#regionId}:{#accountId}:ipamresourcediscovery/{#IpamResourceDiscoveryId}

No

Yes

Yes

[Address resource management](/help/en/vpc/shared-resource-discovery-for-multi-account-address-resource-conflict-management)

Resource Orchestration Service (ROS)

`ROSTemplate`: template

Not supported

No

Yes

Yes

[Share a template with members in a resource directory](/help/en/ros/user-guide/share-a-template-with-members-in-a-resource-directory#task-2170892)

Service Catalog

`ServiceCatalogPortfolio`: product portfolio

acs:servicecatalog:{#regionId}:{#accountId}:portfolio/{#PortfolioId}

No

Yes

Yes

[Share or unshare the configurations of a product portfolio](/help/en/service-catalog/user-guide/share-or-unshare-the-configurations-of-a-product-portfolio#task-2208140)

Elastic Compute Service (ECS)

`Image`: image

acs:ecs:{#regionId}:{#accountId}:image/{#ImageId}

No

Yes

Yes

[Share a custom image](/help/en/ecs/user-guide/share-a-custom-image/#concept-e1j-jgm-xdb)

`Snapshot`: snapshot

acs:ecs:{#regionId}:{#accountId}:snapshot/{#SnapshotId}

No

Yes

Yes

[Share a snapshot](/help/en/ecs/user-guide/share-a-snapshot)

`CapacityReservation`: capacity reservation

acs:ecs:{#regionId}:{#accountId}:capacityreservation/{#CapacityreservationId}

Yes

Yes

Yes

-   Share a private pool with an Alibaba Cloud account
    
    [Share a private pool](/help/en/ecs/user-guide/shared-private-pools)
    

`ElasticityAssurance`: elasticity assurance

acs:ecs:{#regionId}:{#accountId}:elasticityassurance/{#ElasticityAssuranceId}

No

Yes

Yes

[Share a private pool](/help/en/ecs/user-guide/shared-private-pools)

`DeploymentSet`: deployment set

acs:ecs:{#regionId}:{#accountId}:deploymentset/{#DeploymentSetId}

Yes

Yes

Yes

[Share a deployment set](/help/en/ecs/user-guide/shared-deployment-sets)

Key Management Service (KMS)

`KMSInstance`: instance

acs:kms:{#regionId}:{#accountId}:instance/{#InstanceId}

No

No

No

[Share KMS instances across multiple accounts](/help/en/kms/key-management-service/user-guide/share-a-kms-instance-across-multiple-alibaba-cloud-accounts)
