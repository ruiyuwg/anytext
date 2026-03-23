Resource Access Management (RAM) is a service provided by Alibaba Cloud to manage user identities and resource access permissions. You can use RAM to prevent RAM users from sharing the AccessKey pairs of your Alibaba Cloud account. You can also use RAM to grant minimum permissions to RAM users. RAM uses policies to define permissions.

This topic describes the elements, such as Action, Resource, and Condition, which are defined by ECS. You can use the elements to create policies in RAM. The code (RamCode) in RAM that is used to indicate ECS is ecs,vpc. You can grant permissions on ECS at the RESOURCE.

## General structure of a policy

Policies can be stored as JSON files. The following code provides an example on the general structure of a policy:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "<Effect>",
      "Action": "<Action>",
      "Resource": "<Resource>",
      "Condition": {
        "<Condition_operator>": {
          "<Condition_key>": [
            "<Condition_value>"
          ]
        }
      }
    }
  ]
}
```

The following list describes the fields in the policy:

-   Effect: specifies the authorization effect. Valid values: Allow, Deny.
-   Action: specifies one or more API operations that are allowed or denied. For more information, see the [Action](#title-auth-detail-2) section of this topic.
-   Resource: specifies one or more resources to which the policy applies. You can use an Alibaba Cloud Resource Name (ARN) to specify a resource. For more information, see the [Resource](#title-auth-detail-3) section of this topic.
-   Condition: specifies one or more conditions that are required for the policy to take effect. This is an optional field. For more information, see the [Condition](#title-auth-detail-4) section of this topic.
    -   Condition\_operator: specifies the conditional operators. Different types of conditions support different conditional operators. For more information, see [Policy elements](/help/en/ram/policy-elements).
    -   Condition\_key: specifies the condition keys.
    -   Condition\_value: specifies the condition values.

## Action

ECS defines the values that you can use in the `Action` element of a policy statement. The following table describes the values.

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   API operation: the API operation that you can call to perform the operation.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition key: the condition keys that are defined by the Alibaba Cloud service. The Condition key column does not list the common condition keys that are defined by Alibaba Cloud. For more information about the common condition keys, see [Generic Condition Keyword](/help/en/ram/policy-elements).
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Actions

API operation

Access level

Resource type

Condition key

Associated operation

ecs:AcceptInquiredSystemEvent

[AcceptInquiredSystemEvent](/help/en/ecs/developer-reference/api-ecs-2014-05-26-acceptinquiredsystemevent)

update

\*All Resources

`*`

None

None

ecs:AllocateDedicatedHosts

[AllocateDedicatedHosts](/help/en/ecs/developer-reference/api-ecs-2014-05-26-allocatededicatedhosts)

create

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/*`

None

None

ecs:AllocatePublicIpAddress

[AllocatePublicIpAddress](/help/en/ecs/developer-reference/api-ecs-2014-05-26-allocatepublicipaddress)

create

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ApplyAutoSnapshotPolicy

[ApplyAutoSnapshotPolicy](/help/en/ecs/developer-reference/api-ecs-2014-05-26-applyautosnapshotpolicy)

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

\*AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#snapshotpolicyId}`

None

None

ecs:AssignIpv6Addresses

[AssignIpv6Addresses](/help/en/ecs/developer-reference/api-ecs-2014-05-26-assignipv6addresses)

create

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

None

None

ecs:AssignPrivateIpAddresses

[AssignPrivateIpAddresses](/help/en/ecs/developer-reference/api-ecs-2014-05-26-assignprivateipaddresses)

create

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

None

None

ecs:AttachClassicLinkVpc

[AttachClassicLinkVpc](/help/en/ecs/developer-reference/api-ecs-2014-05-26-attachclassiclinkvpc)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#vpcId}`

vpc:tag

None

ecs:AttachDisk

[AttachDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-attachdisk)

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

ecs:LoginAsNonRoot

ecs:PasswordCustomized

None

ecs:AttachInstanceRamRole

[AttachInstanceRamRole](/help/en/ecs/developer-reference/api-ecs-2014-05-26-attachinstanceramrole)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*Role

`acs:ram:{#regionId}:{#accountId}:role/{#roleName}`

None

None

ecs:AttachKeyPair

[AttachKeyPair](/help/en/ecs/developer-reference/api-ecs-2014-05-26-attachkeypair)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairName}`

None

None

ecs:AttachNetworkInterface

[AttachNetworkInterface](/help/en/ecs/developer-reference/api-ecs-2014-05-26-attachnetworkinterface)

update

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:AuthorizeSecurityGroup

[AuthorizeSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-authorizesecuritygroup)

create

\*All Resources

`*`

ecs:SecurityGroupIpProtocols

ecs:SecurityGroupSourceCidrIps

None

ecs:AuthorizeSecurityGroupEgress

[AuthorizeSecurityGroupEgress](/help/en/ecs/developer-reference/api-ecs-2014-05-26-authorizesecuritygroupegress)

create

\*All Resources

`*`

ecs:SecurityGroupIpProtocols

ecs:SecurityGroupSourceCidrIps

None

ecs:CancelAutoSnapshotPolicy

[CancelAutoSnapshotPolicy](/help/en/ecs/developer-reference/api-ecs-2014-05-26-cancelautosnapshotpolicy)

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#snapshotpolicyId}`

None

None

ecs:CancelCopyImage

[CancelCopyImage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-cancelcopyimage)

update

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

None

None

ecs:CancelImagePipelineExecution

[CancelImagePipelineExecution](/help/en/ecs/developer-reference/api-ecs-2014-05-26-cancelimagepipelineexecution)

update

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/{#imagepipelineId}`

None

None

ecs:CancelSimulatedSystemEvents

[CancelSimulatedSystemEvents](/help/en/ecs/developer-reference/api-ecs-2014-05-26-cancelsimulatedsystemevents)

update

\*All Resources

`*`

None

None

ecs:CancelTask

[CancelTask](/help/en/ecs/developer-reference/api-ecs-2014-05-26-canceltask)

update

\*All Resources

`*`

None

None

ecs:ConvertNatPublicIpToEip

[ConvertNatPublicIpToEip](/help/en/ecs/developer-reference/api-ecs-2014-05-26-convertnatpubliciptoeip)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:CopyImage

[CopyImage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-copyimage)

update

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/*`

None

None

ecs:CopySnapshot

[CopySnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-copysnapshot)

create

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

None

None

ecs:CreateActivation

[CreateActivation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createactivation)

create

\*Activation

`acs:ecs:{#regionId}:{#accountId}:activation/*`

None

None

ecs:CreateAutoProvisioningGroup

[CreateAutoProvisioningGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createautoprovisioninggroup)

create

\*All Resources

`*`

None

None

ecs:CreateAutoSnapshotPolicy

[CreateAutoSnapshotPolicy](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createautosnapshotpolicy)

create

\*AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/*`

None

None

ecs:CreateCapacityReservation

[CreateCapacityReservation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createcapacityreservation)

create

\*CapacityReservation

`acs:ecs:{#regionId}:{#accountId}:capacityreservation/*`

None

None

ecs:CreateCommand

[CreateCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createcommand)

create

\*Command

`acs:ecs:{#regionId}:{#accountId}:command/*`

None

None

ecs:CreateDedicatedHostCluster

[CreateDedicatedHostCluster](/help/en/ecs/developer-reference/api-ecs-2014-05-26-creatededicatedhostcluster)

create

\*All Resources

`*`

None

None

ecs:CreateDeploymentSet

[CreateDeploymentSet](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createdeploymentset)

create

\*All Resources

`*`

None

None

ecs:CreateDiagnosticMetricSet

[CreateDiagnosticMetricSet](/help/en/ecs/developer-reference/api-ecs-2014-05-26-creatediagnosticmetricset)

create

\*All Resources

`*`

None

None

ecs:CreateDiagnosticReport

[CreateDiagnosticReport](/help/en/ecs/developer-reference/api-ecs-2014-05-26-creatediagnosticreport)

create

\*All Resources

`*`

None

None

ecs:CreateDisk

[CreateDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createdisk)

create

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/*`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

ecs:IsDiskEncrypted

ecs:IsDiskByokEncrypted

None

ecs:CreateElasticityAssurance

[CreateElasticityAssurance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createelasticityassurance)

create

\*ElasticityAssurance

`acs:ecs:{#regionId}:{#accountId}:elasticityassurance/*`

None

None

ecs:CreateHpcCluster

[CreateHpcCluster](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createhpccluster)

create

\*HpcCluster

`acs:ecs:{#regionId}:{#accountId}:hpc/*`

None

None

ecs:CreateImage

[CreateImage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createimage)

create

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/*`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

None

None

ecs:CreateImageComponent

[CreateImageComponent](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createimagecomponent)

create

\*ImageComponent

`acs:ecs:{#regionId}:{#accountId}:imagecomponent/*`

None

None

ecs:CreateImagePipeline

[CreateImagePipeline](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createimagepipeline)

create

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/*`

None

None

ecs:CreateInstance

[CreateInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createinstance)

create

\*All Resources

`*`

vpc:VPC

vpc:IsDefaultVSwitch

vpc:IsDefaultVpc

ecs:IsDiskEncrypted

ecs:InstanceType

ecs:InstanceTypeFamily

ecs:ImageOwnerId

ecs:ImageSource

ecs:NotSpecifySecurityGroupId

ecs:LoginAsNonRoot

ecs:IsSystemDiskByokEncrypted

ecs:IsDiskByokEncrypted

ecs:PasswordInherit

ecs:PasswordCustomized

ecs:IsSystemDiskEncrypted

ecs:ImagePlatform

ecs:LoginAsNonRoot

ecs:IsSystemDiskByokEncrypted

ecs:IsDiskByokEncrypted

ecs:PasswordInherit

ecs:PasswordCustomized

ecs:IsSystemDiskEncrypted

ecs:ImagePlatform

ecs:SecurityHardeningMode

vpc:CreateDefaultVpc

ecs:SecurityEnhancementStrategy

ecs:AssociatePublicIpAddress

None

ecs:CreateKeyPair

[CreateKeyPair](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createkeypair)

create

\*KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/*`

None

None

ecs:CreateLaunchTemplate

[CreateLaunchTemplate](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createlaunchtemplate)

create

\*LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/*`

None

None

ecs:CreateLaunchTemplateVersion

[CreateLaunchTemplateVersion](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createlaunchtemplateversion)

create

\*LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

None

None

ecs:CreateNetworkInterface

[CreateNetworkInterface](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createnetworkinterface)

create

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/*`

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

\*VSwitch

`acs:vpc:{#regionId}:{#accountId}:vswitch/{#vswitchId}`

vpc:IsDefaultVSwitch

vpc:IsDefaultVpc

vpc:VPC

vpc:tag

vpc:tag

vpc:tag

None

ecs:CreatePortRangeList

[CreatePortRangeList](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createportrangelist)

create

\*PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/*`

None

None

ecs:CreatePrefixList

[CreatePrefixList](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createprefixlist)

create

\*All Resources

`*`

None

None

ecs:CreateSecurityGroup

[CreateSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsecuritygroup)

create

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/*`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#vpcId}`

None

None

ecs:CreateSimulatedSystemEvents

[CreateSimulatedSystemEvents](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsimulatedsystemevents)

create

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:CreateSnapshot

[CreateSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsnapshot)

create

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/*`

None

None

ecs:CreateSnapshotGroup

[CreateSnapshotGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsnapshotgroup)

create

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#DiskId}`

None

None

ecs:DeleteActivation

[DeleteActivation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteactivation)

delete

\*activation

`acs:ecs:{#regionId}:{#accountId}:activation/{#activationId}`

None

None

ecs:DeleteAutoProvisioningGroup

[DeleteAutoProvisioningGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteautoprovisioninggroup)

delete

\*AutoProvisioningGroup

`acs:ecs:{#regionId}:{#accountId}:autoprovisioninggroup/{#autoprovisioninggroupId}`

None

None

ecs:DeleteAutoSnapshotPolicy

[DeleteAutoSnapshotPolicy](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteautosnapshotpolicy)

delete

\*AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#SnapshotPolicyId}`

None

None

ecs:DeleteCommand

[DeleteCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletecommand)

delete

\*Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

None

None

ecs:DeleteDedicatedHostCluster

[DeleteDedicatedHostCluster](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletededicatedhostcluster)

delete

\*DedicatedHostCluster

`acs:ecs:{#regionId}:{#accountId}:ddhcluster/{#ddhclusterId}`

None

None

ecs:DeleteDeploymentSet

[DeleteDeploymentSet](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletedeploymentset)

delete

\*DeploymentSet

`acs:ecs:{#regionid}:{#accountId}:deploymentset/{#deploymentSetId}`

None

None

ecs:DeleteDiagnosticMetricSets

[DeleteDiagnosticMetricSets](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletediagnosticmetricsets)

delete

\*All Resources

`*`

None

None

ecs:DeleteDiagnosticReports

[DeleteDiagnosticReports](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletediagnosticreports)

delete

\*All Resources

`*`

None

None

ecs:DeleteDisk

[DeleteDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletedisk)

delete

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

None

None

ecs:DeleteHpcCluster

[DeleteHpcCluster](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletehpccluster)

delete

\*All Resources

`*`

None

None

ecs:DeleteImage

[DeleteImage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteimage)

delete

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

None

None

ecs:DeleteImageComponent

[DeleteImageComponent](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteimagecomponent)

delete

\*ImageComponent

`acs:ecs:{#regionId}:{#accountId}:imagecomponent/{#imagecomponentId}`

None

None

ecs:DeleteImagePipeline

[DeleteImagePipeline](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteimagepipeline)

delete

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/{#imagepipelineId}`

None

None

ecs:DeleteInstance

[DeleteInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteinstance)

delete

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DeleteInstances

[DeleteInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteinstances)

delete

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DeleteKeyPairs

[DeleteKeyPairs](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletekeypairs)

delete

\*KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairName}`

None

None

ecs:DeleteLaunchTemplate

[DeleteLaunchTemplate](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletelaunchtemplate)

delete

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

None

None

ecs:DeleteLaunchTemplateVersion

[DeleteLaunchTemplateVersion](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletelaunchtemplateversion)

delete

\*LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

None

None

ecs:DeleteNetworkInterface

[DeleteNetworkInterface](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletenetworkinterface)

delete

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

None

None

ecs:DeletePortRangeList

[DeletePortRangeList](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteportrangelist)

delete

\*PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/{#portRangeListId}`

None

None

ecs:DeletePrefixList

[DeletePrefixList](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deleteprefixlist)

delete

\*PrefixList

`acs:ecs:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}`

None

None

ecs:DeleteSecurityGroup

[DeleteSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletesecuritygroup)

delete

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

None

None

ecs:DeleteSnapshot

[DeleteSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletesnapshot)

delete

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

None

None

ecs:DeleteSnapshotGroup

[DeleteSnapshotGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletesnapshotgroup)

delete

\*SnapshotGroup

`acs:ecs:{#regionId}:{#accountId}:snapshotgroup/{#snapshotgroupId}`

None

None

ecs:DeregisterManagedInstance

[DeregisterManagedInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deregistermanagedinstance)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeAccountAttributes

[DescribeAccountAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeaccountattributes)

get

\*All Resources

`*`

None

None

ecs:DescribeActivations

[DescribeActivations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeactivations)

get

Activation

`acs:ecs:{#regionId}:{#accountId}:activation/*`

Activation

`acs:ecs:{#regionId}:{#accountId}:activation/{#activationId}`

None

None

ecs:DescribeAutoProvisioningGroupHistory

[DescribeAutoProvisioningGroupHistory](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeautoprovisioninggrouphistory)

get

\*All Resources

`*`

None

None

ecs:DescribeAutoProvisioningGroupInstances

[DescribeAutoProvisioningGroupInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeautoprovisioninggroupinstances)

get

\*AutoProvisioningGroup

`acs:ecs:{#regionId}:{#accountId}:autoprovisioninggroup/{#autoprovisioninggroupId}`

None

None

ecs:DescribeAutoProvisioningGroups

[DescribeAutoProvisioningGroups](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeautoprovisioninggroups)

get

\*All Resources

`*`

None

None

ecs:DescribeAutoSnapshotPolicyAssociations

[DescribeAutoSnapshotPolicyAssociations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeautosnapshotpolicyassociations)

get

\*All Resources

`*`

None

None

ecs:DescribeAutoSnapshotPolicyEx

[DescribeAutoSnapshotPolicyEx](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeautosnapshotpolicyex)

get

AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/*`

AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#snapshotpolicyId}`

None

None

ecs:DescribeBandwidthLimitation

[DescribeBandwidthLimitation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describebandwidthlimitation)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeCapacityReservationInstances

[DescribeCapacityReservationInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describecapacityreservationinstances)

get

\*CapacityReservation

`acs:ecs:{#regionId}:{#accountId}:capacityreservation/{#CapacityReservationId}`

None

None

ecs:DescribeCapacityReservations

[DescribeCapacityReservations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describecapacityreservations)

get

\*CapacityReservation

`acs:ecs:{#regionId}:{#accountId}:capacityreservation/*`

None

None

ecs:DescribeClassicLinkInstances

[DescribeClassicLinkInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeclassiclinkinstances)

get

\*All Resources

`*`

None

None

ecs:DescribeCloudAssistantSettings

[DescribeCloudAssistantSettings](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describecloudassistantsettings)

list

\*ServiceSettings

`acs:ecs:{#regionId}:{#accountId}:servicesettings/{#servicesettingId}`

None

None

ecs:DescribeCloudAssistantStatus

[DescribeCloudAssistantStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describecloudassistantstatus)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeCommands

[DescribeCommands](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describecommands)

get

Command

`acs:ecs:{#regionId}:{#accountId}:command/*`

Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

None

None

ecs:DescribeDedicatedHostAutoRenew

[DescribeDedicatedHostAutoRenew](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describededicatedhostautorenew)

get

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

None

None

ecs:DescribeDedicatedHostClusters

[DescribeDedicatedHostClusters](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describededicatedhostclusters)

get

DedicatedHostCluster

`acs:ecs:{#regionId}:{#accountId}:ddhcluster/{#ddhclusterId}`

DedicatedHostCluster

`acs:ecs:{#regionId}:{#accountId}:ddhcluster/*`

None

None

ecs:DescribeDedicatedHosts

[DescribeDedicatedHosts](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describededicatedhosts)

get

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/*`

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

None

None

ecs:DescribeDeploymentSets

[DescribeDeploymentSets](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedeploymentsets)

get

\*DeploymentSet

`acs:ecs:{#regionId}:{#accountId}:deploymentset/*`

None

None

ecs:DescribeDiagnosticMetricSets

[DescribeDiagnosticMetricSets](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describediagnosticmetricsets)

get

\*All Resources

`*`

None

None

ecs:DescribeDiagnosticMetrics

[DescribeDiagnosticMetrics](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describediagnosticmetrics)

get

\*All Resources

`*`

None

None

ecs:DescribeDiagnosticReportAttributes

[DescribeDiagnosticReportAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describediagnosticreportattributes)

get

\*All Resources

`*`

None

None

ecs:DescribeDiagnosticReports

[DescribeDiagnosticReports](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describediagnosticreports)

get

\*All Resources

`*`

None

None

ecs:DescribeDiskDefaultKMSKeyId

[DescribeDiskDefaultKMSKeyId](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describediskdefaultkmskeyid)

get

\*DiskEncryptionDefaultConfig

`acs:ecs:{#regionId}:{#accountId}:diskencryptiondefaultconfig/*`

None

None

ecs:DescribeDiskEncryptionByDefaultStatus

[DescribeDiskEncryptionByDefaultStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describediskencryptionbydefaultstatus)

none

\*DiskEncryptionDefaultConfig

`acs:ecs:{#regionId}:{#accountId}:diskencryptiondefaultconfig/*`

None

None

ecs:DescribeDiskMonitorData

[DescribeDiskMonitorData](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describediskmonitordata)

get

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

None

None

ecs:DescribeDisks

[DescribeDisks](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedisks)

list

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/*`

None

None

ecs:DescribeDisksFullStatus

[DescribeDisksFullStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedisksfullstatus)

list

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/*`

None

None

ecs:DescribeElasticityAssuranceAutoRenewAttribute

[DescribeElasticityAssuranceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeelasticityassuranceautorenewattribute)

get

\*ElasticityAssurance

`acs:ecs:{#regionId}:{#accountId}:elasticityassurance/{#ElasticityAssuranceId}`

None

None

ecs:DescribeElasticityAssuranceInstances

[DescribeElasticityAssuranceInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeelasticityassuranceinstances)

get

\*All Resources

`*`

None

None

ecs:DescribeElasticityAssurances

[DescribeElasticityAssurances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeelasticityassurances)

get

\*ElasticityAssurance

`acs:ecs:{#regionId}:{#accountId}:elasticityassurance/*`

None

None

ecs:DescribeEniMonitorData

[DescribeEniMonitorData](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeenimonitordata)

get

NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeHpcClusters

[DescribeHpcClusters](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describehpcclusters)

get

\*HpcCluster

`acs:ecs:{#regionId}:{#accountId}:hpc/*`

None

None

ecs:DescribeImageComponents

[DescribeImageComponents](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeimagecomponents)

get

\*ImageComponent

`acs:ecs:{#regionId}:{#accountId}:imagecomponent/*`

\*ImageComponent

`acs:ecs:{#regionId}:{#accountId}:imagecomponent/{#imagecomponentId}`

None

None

ecs:DescribeImageFromFamily

[DescribeImageFromFamily](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeimagefromfamily)

get

\*All Resources

`*`

None

None

ecs:DescribeImagePipelineExecutions

[DescribeImagePipelineExecutions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeimagepipelineexecutions)

get

\*ImagePipelineExecution

`acs:ecs:{#regionId}:{#accountId}:imagepipelineexecution/*`

\*ImagePipelineExecution

`acs:ecs:{#regionId}:{#accountId}:imagepipelineexecution/{#ImagePipelineExecutionId}`

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/*`

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/{#ImagePipelineId}`

None

None

ecs:DescribeImagePipelines

[DescribeImagePipelines](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeimagepipelines)

get

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/*`

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/{#imagepipelineId}`

None

None

ecs:DescribeImageSharePermission

[DescribeImageSharePermission](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeimagesharepermission)

get

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

None

None

ecs:DescribeImageSupportInstanceTypes

[DescribeImageSupportInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeimagesupportinstancetypes)

get

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

None

None

ecs:DescribeImages

[DescribeImages](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeimages)

get

Image

`acs:ecs:{#regionId}:{#accountId}:image/*`

Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

None

None

ecs:DescribeInstanceAttachmentAttributes

[DescribeInstanceAttachmentAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstanceattachmentattributes)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeInstanceAttribute

[DescribeInstanceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstanceattribute)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeInstanceAutoRenewAttribute

[DescribeInstanceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstanceautorenewattribute)

list

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/*`

None

None

ecs:DescribeInstanceHistoryEvents

[DescribeInstanceHistoryEvents](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancehistoryevents)

get

\*All Resources

`*`

None

None

ecs:DescribeInstanceMaintenanceAttributes

[DescribeInstanceMaintenanceAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancemaintenanceattributes)

get

\*All Resources

`*`

None

None

ecs:DescribeInstanceModificationPrice

[DescribeInstanceModificationPrice](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancemodificationprice)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

None

None

ecs:DescribeInstanceMonitorData

[DescribeInstanceMonitorData](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancemonitordata)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeInstanceRamRole

[DescribeInstanceRamRole](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstanceramrole)

get

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Role

`acs:ram:{#regionId}:{#accountId}:role/{#roleName}`

None

None

ecs:DescribeInstanceStatus

[DescribeInstanceStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancestatus)

list

\*All Resources

`*`

None

None

ecs:DescribeInstanceVncUrl

[DescribeInstanceVncUrl](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancevncurl)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeInstances

[DescribeInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstances)

list

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/*`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

ResourceOwner

None

ecs:DescribeInstancesFullStatus

[DescribeInstancesFullStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancesfullstatus)

list

\*All Resources

`*`

None

None

ecs:DescribeInvocationResults

[DescribeInvocationResults](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocationresults)

get

Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeInvocations

[DescribeInvocations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocations)

get

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

None

None

ecs:DescribeKeyPairs

[DescribeKeyPairs](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describekeypairs)

get

KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairName}`

KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/*`

None

None

ecs:DescribeLaunchTemplateVersions

[DescribeLaunchTemplateVersions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describelaunchtemplateversions)

list

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/*`

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

None

None

ecs:DescribeLaunchTemplates

[DescribeLaunchTemplates](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describelaunchtemplates)

get

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/*`

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

None

None

ecs:DescribeLockedSnapshots

[DescribeLockedSnapshots](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describelockedsnapshots)

list

\*All Resources

`*`

None

None

ecs:DescribeManagedInstances

[DescribeManagedInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describemanagedinstances)

get

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeNetworkInterfaceAttribute

[DescribeNetworkInterfaceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describenetworkinterfaceattribute)

get

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

None

None

ecs:DescribeNetworkInterfaces

[DescribeNetworkInterfaces](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describenetworkinterfaces)

get

NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

None

None

ecs:DescribePortRangeListAssociations

[DescribePortRangeListAssociations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeportrangelistassociations)

list

\*PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/{#portRangeListId}`

None

None

ecs:DescribePortRangeListEntries

[DescribePortRangeListEntries](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeportrangelistentries)

list

\*PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/{#portRangeListId}`

None

None

ecs:DescribePortRangeLists

[DescribePortRangeLists](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeportrangelists)

list

\*PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/*`

PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/{#portRangeListId}`

None

None

ecs:DescribePrefixListAssociations

[DescribePrefixListAssociations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeprefixlistassociations)

get

\*PrefixList

`acs:ecs:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}`

None

None

ecs:DescribePrefixListAttributes

[DescribePrefixListAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeprefixlistattributes)

get

\*PrefixList

`acs:ecs:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}`

None

None

ecs:DescribePrefixLists

[DescribePrefixLists](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeprefixlists)

get

\*PrefixList

`acs:ecs:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}`

None

None

ecs:DescribePrice

[DescribePrice](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeprice)

get

\*All Resources

`*`

None

None

ecs:DescribeRenewalPrice

[DescribeRenewalPrice](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describerenewalprice)

get

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeReservedInstanceAutoRenewAttribute

[DescribeReservedInstanceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describereservedinstanceautorenewattribute)

get

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#ReservedInstanceId}`

None

None

ecs:DescribeReservedInstances

[DescribeReservedInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describereservedinstances)

get

ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/*`

ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}`

None

None

ecs:DescribeResourcesModification

[DescribeResourcesModification](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeresourcesmodification)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeSecurityGroupAttribute

[DescribeSecurityGroupAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesecuritygroupattribute)

get

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

ecs:tag

None

ecs:DescribeSecurityGroupReferences

[DescribeSecurityGroupReferences](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesecuritygroupreferences)

get

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

None

None

ecs:DescribeSecurityGroups

[DescribeSecurityGroups](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesecuritygroups)

get

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/*`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

ecs:tag

ecs:tag

ecs:tag

ecs:tag

None

ecs:DescribeSendFileResults

[DescribeSendFileResults](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesendfileresults)

get

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DescribeSnapshotGroups

[DescribeSnapshotGroups](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesnapshotgroups)

get

SnapshotGroup

`acs:ecs:{#regionId}:{#accountId}:snapshotgroup/*`

SnapshotGroup

`acs:ecs:{#regionId}:{#accountId}:snapshotgroup/{#snapshotgroupId}`

None

None

ecs:DescribeSnapshotLinks

[DescribeSnapshotLinks](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesnapshotlinks)

get

\*All Resources

`*`

None

None

ecs:DescribeSnapshotMonitorData

[DescribeSnapshotMonitorData](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesnapshotmonitordata)

get

\*All Resources

`*`

None

None

ecs:DescribeSnapshotPackage

[DescribeSnapshotPackage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesnapshotpackage)

get

\*All Resources

`*`

None

None

ecs:DescribeSnapshots

[DescribeSnapshots](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesnapshots)

get

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/*`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

None

None

ecs:DescribeSnapshotsUsage

[DescribeSnapshotsUsage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesnapshotsusage)

get

\*All Resources

`*`

None

None

ecs:DescribeStorageCapacityUnits

[DescribeStorageCapacityUnits](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describestoragecapacityunits)

get

StorageCapacityUnit

`acs:ecs:{#regionId}:{#accountId}:scu/*`

StorageCapacityUnit

`acs:ecs:{#regionId}:{#accountId}:scu/{#scuId}`

None

None

ecs:DescribeTaskAttribute

[DescribeTaskAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describetaskattribute)

get

\*All Resources

`*`

None

None

ecs:DescribeTasks

[DescribeTasks](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describetasks)

get

\*All Resources

`*`

None

None

ecs:DescribeTerminalSessions

[DescribeTerminalSessions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeterminalsessions)

list

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

None

None

ecs:DescribeUserData

[DescribeUserData](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeuserdata)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DetachClassicLinkVpc

[DetachClassicLinkVpc](/help/en/ecs/developer-reference/api-ecs-2014-05-26-detachclassiclinkvpc)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#vpcId}`

None

None

ecs:DetachDisk

[DetachDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-detachdisk)

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DetachInstanceRamRole

[DetachInstanceRamRole](/help/en/ecs/developer-reference/api-ecs-2014-05-26-detachinstanceramrole)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*Role

`acs:ram:{#regionId}:{#accountId}:role/{#roleName}`

None

None

ecs:DetachKeyPair

[DetachKeyPair](/help/en/ecs/developer-reference/api-ecs-2014-05-26-detachkeypair)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairName}`

None

None

ecs:DetachNetworkInterface

[DetachNetworkInterface](/help/en/ecs/developer-reference/api-ecs-2014-05-26-detachnetworkinterface)

update

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:DisableActivation

[DisableActivation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-disableactivation)

update

\*Activation

`acs:ecs:{#regionId}:{#accountId}:activation/{#ActivationId}`

None

None

ecs:DisableDiskEncryptionByDefault

[DisableDiskEncryptionByDefault](/help/en/ecs/developer-reference/api-ecs-2014-05-26-disablediskencryptionbydefault)

none

\*All Resources

`*`

None

None

ecs:DisableNetworkInterfaceQoS

[DisableNetworkInterfaceQoS](/help/en/ecs/developer-reference/api-ecs-2014-05-26-disablenetworkinterfaceqos)

update

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

None

None

ecs:EnableDiskEncryptionByDefault

[EnableDiskEncryptionByDefault](/help/en/ecs/developer-reference/api-ecs-2014-05-26-enablediskencryptionbydefault)

none

\*All Resources

`*`

None

None

ecs:EnableNetworkInterfaceQoS

[EnableNetworkInterfaceQoS](/help/en/ecs/developer-reference/api-ecs-2014-05-26-enablenetworkinterfaceqos)

update

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

None

None

ecs:EndTerminalSession

[EndTerminalSession](/help/en/ecs/developer-reference/api-ecs-2014-05-26-endterminalsession)

update

\*All Resources

`*`

None

None

ecs:ExportImage

[ExportImage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-exportimage)

update

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

None

None

ecs:GetInstanceConsoleOutput

[GetInstanceConsoleOutput](/help/en/ecs/developer-reference/api-ecs-2014-05-26-getinstanceconsoleoutput)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:GetInstanceScreenshot

[GetInstanceScreenshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-getinstancescreenshot)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ImportImage

[ImportImage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-importimage)

update

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/*`

None

None

ecs:ImportKeyPair

[ImportKeyPair](/help/en/ecs/developer-reference/api-ecs-2014-05-26-importkeypair)

create

\*KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/*`

None

None

ecs:InstallCloudAssistant

[InstallCloudAssistant](/help/en/ecs/developer-reference/api-ecs-2014-05-26-installcloudassistant)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:InvokeCommand

[InvokeCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-invokecommand)

update

\*Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

ecs:CommandRunAs

None

ecs:JoinResourceGroup

[JoinResourceGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-joinresourcegroup)

update

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairId}`

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#SnapshotId}`

None

None

ecs:JoinSecurityGroup

[JoinSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-joinsecuritygroup)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

None

None

ecs:LeaveSecurityGroup

[LeaveSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-leavesecuritygroup)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

None

None

ecs:ListPluginStatus

[ListPluginStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-listpluginstatus)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

None

None

ecs:ListTagResources

[ListTagResources](/help/en/ecs/developer-reference/api-ecs-2014-05-26-listtagresources)

get

\*All Resources

`*`

None

None

ecs:LockSnapshot

[LockSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-locksnapshot)

update

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#SnapshotId}`

None

None

ecs:ModifyAutoProvisioningGroup

[ModifyAutoProvisioningGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyautoprovisioninggroup)

update

\*autoprovisioninggroup

`acs:ecs:{#regionId}:{#accountId}:autoprovisioninggroup/{#autoprovisioninggroupId}`

None

None

ecs:ModifyAutoSnapshotPolicyEx

[ModifyAutoSnapshotPolicyEx](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyautosnapshotpolicyex)

update

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#autoSnapshotPolicyId}`

None

None

ecs:ModifyCapacityReservation

[ModifyCapacityReservation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifycapacityreservation)

update

\*CapacityReservation

`acs:ecs:{#regionId}:{#accountId}:capacityreservation/{#CapacityReservationId}`

None

None

ecs:ModifyCloudAssistantSettings

[ModifyCloudAssistantSettings](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifycloudassistantsettings)

update

\*ServiceSettings

`acs:ecs:{#regionId}:{#accountId}:servicesettings/{#servicesettingId}`

None

None

ecs:ModifyCommand

[ModifyCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifycommand)

update

\*Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

None

None

ecs:ModifyDedicatedHostAttribute

[ModifyDedicatedHostAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydedicatedhostattribute)

update

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

DedicatedHostCluster

`acs:ecs:{#regionId}:{#accountId}:ddhcluster/{#ddhclusterId}`

None

None

ecs:ModifyDedicatedHostAutoReleaseTime

[ModifyDedicatedHostAutoReleaseTime](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydedicatedhostautoreleasetime)

update

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

None

None

ecs:ModifyDedicatedHostAutoRenewAttribute

[ModifyDedicatedHostAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydedicatedhostautorenewattribute)

update

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

None

None

ecs:ModifyDedicatedHostClusterAttribute

[ModifyDedicatedHostClusterAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydedicatedhostclusterattribute)

update

\*ddhcluster

`acs:ecs:{#regionId}:{#accountId}:ddhcluster/{#ddhclusterId}`

None

None

ecs:ModifyDedicatedHostsChargeType

[ModifyDedicatedHostsChargeType](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydedicatedhostschargetype)

update

\*All Resources

`*`

None

None

ecs:ModifyDeploymentSetAttribute

[ModifyDeploymentSetAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydeploymentsetattribute)

update

\*DeploymentSet

`acs:ecs:{#regionId}:{#accountId}:deploymentset/{#DeploymentSetId}`

None

None

ecs:ModifyDiagnosticMetricSet

[ModifyDiagnosticMetricSet](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiagnosticmetricset)

update

\*All Resources

`*`

None

None

ecs:ModifyDiskAttribute

[ModifyDiskAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiskattribute)

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

None

None

ecs:ModifyDiskChargeType

[ModifyDiskChargeType](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiskchargetype)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyDiskDefaultKMSKeyId

[ModifyDiskDefaultKMSKeyId](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiskdefaultkmskeyid)

update

\*All Resources

`*`

None

None

ecs:ModifyDiskSpec

[ModifyDiskSpec](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiskspec)

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

None

None

ecs:ModifyElasticityAssurance

[ModifyElasticityAssurance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyelasticityassurance)

update

\*ElasticityAssurance

`acs:ecs:{#regionId}:{#accountId}:elasticityassurance/{#ElasticityAssuranceId}`

None

None

ecs:ModifyElasticityAssuranceAutoRenewAttribute

[ModifyElasticityAssuranceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyelasticityassuranceautorenewattribute)

update

\*ElasticityAssurance

`acs:ecs:{#regionId}:{#accountId}:elasticityassurance/{#ElasticityAssuranceId}`

None

None

ecs:ModifyHpcClusterAttribute

[ModifyHpcClusterAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyhpcclusterattribute)

update

\*All Resources

`*`

None

None

ecs:ModifyImageAttribute

[ModifyImageAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyimageattribute)

update

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

None

None

ecs:ModifyImageSharePermission

[ModifyImageSharePermission](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyimagesharepermission)

update

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

None

None

ecs:ModifyInstanceAttachmentAttributes

[ModifyInstanceAttachmentAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstanceattachmentattributes)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyInstanceAttribute

[ModifyInstanceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstanceattribute)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#SecurityGroupId}`

ecs:tag

ecs:PasswordCustomized

None

ecs:ModifyInstanceAutoReleaseTime

[ModifyInstanceAutoReleaseTime](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstanceautoreleasetime)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyInstanceAutoRenewAttribute

[ModifyInstanceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstanceautorenewattribute)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyInstanceChargeType

[ModifyInstanceChargeType](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancechargetype)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyInstanceClockOptions

[ModifyInstanceClockOptions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstanceclockoptions)

update

\*All Resources

`*`

None

None

ecs:ModifyInstanceDeployment

[ModifyInstanceDeployment](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancedeployment)

update

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyInstanceMaintenanceAttributes

[ModifyInstanceMaintenanceAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancemaintenanceattributes)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyInstanceMetadataOptions

[ModifyInstanceMetadataOptions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancemetadataoptions)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyInstanceNetworkOptions

[ModifyInstanceNetworkOptions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancenetworkoptions)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

None

None

ecs:ModifyInstanceNetworkSpec

[ModifyInstanceNetworkSpec](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancenetworkspec)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

ecs:AssociatePublicIpAddress

None

ecs:ModifyInstanceSpec

[ModifyInstanceSpec](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancespec)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

ecs:AssociatePublicIpAddress

None

ecs:ModifyInstanceVncPasswd

[ModifyInstanceVncPasswd](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancevncpasswd)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyInstanceVpcAttribute

[ModifyInstanceVpcAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancevpcattribute)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*VSwitch

`acs:vpc:{#regionId}:{#accountId}:vswitch/{#vswitchId}`

vpc:tag

vpc:VPC

None

ecs:ModifyInvocationAttribute

[ModifyInvocationAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinvocationattribute)

update

\*Invocation

`acs:ecs:{#regionId}:{#accountId}:invocation/{#invocationId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyLaunchTemplateDefaultVersion

[ModifyLaunchTemplateDefaultVersion](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifylaunchtemplatedefaultversion)

update

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

None

None

ecs:ModifyManagedInstance

[ModifyManagedInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifymanagedinstance)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyNetworkInterfaceAttribute

[ModifyNetworkInterfaceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifynetworkinterfaceattribute)

update

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

None

None

ecs:ModifyPortRangeList

[ModifyPortRangeList](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyportrangelist)

update

\*PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/{#portRangeListId}`

None

None

ecs:ModifyPrefixList

[ModifyPrefixList](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyprefixlist)

update

\*PrefixList

`acs:ecs:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}`

None

None

ecs:ModifyPrepayInstanceSpec

[ModifyPrepayInstanceSpec](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyprepayinstancespec)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ModifyReservedInstanceAttribute

[ModifyReservedInstanceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyreservedinstanceattribute)

update

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}`

None

None

ecs:ModifyReservedInstanceAutoRenewAttribute

[ModifyReservedInstanceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyreservedinstanceautorenewattribute)

update

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#ReservedInstanceId}`

None

None

ecs:ModifyReservedInstances

[ModifyReservedInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyreservedinstances)

update

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}`

None

None

ecs:ModifySecurityGroupAttribute

[ModifySecurityGroupAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysecuritygroupattribute)

update

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

None

None

ecs:ModifySecurityGroupEgressRule

[ModifySecurityGroupEgressRule](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysecuritygroupegressrule)

update

\*All Resources

`*`

ecs:tag

ecs:tag

ecs:SecurityGroupIpProtocols

ecs:SecurityGroupSourceCidrIps

None

ecs:ModifySecurityGroupPolicy

[ModifySecurityGroupPolicy](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysecuritygrouppolicy)

update

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

None

None

ecs:ModifySecurityGroupRule

[ModifySecurityGroupRule](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysecuritygrouprule)

update

\*All Resources

`*`

ecs:SecurityGroupIpProtocols

ecs:SecurityGroupSourceCidrIps

None

ecs:ModifySnapshotAttribute

[ModifySnapshotAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysnapshotattribute)

update

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

None

None

ecs:ModifySnapshotCategory

[ModifySnapshotCategory](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysnapshotcategory)

update

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

ecs:tag

None

ecs:ModifySnapshotGroup

[ModifySnapshotGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysnapshotgroup)

update

\*SnapshotGroup

`acs:ecs:{#regionId}:{#accountId}:snapshotgroup/{#SnapshotGroupId}`

None

None

ecs:ModifyStorageCapacityUnitAttribute

[ModifyStorageCapacityUnitAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifystoragecapacityunitattribute)

update

\*StorageCapacityUnit

`acs:ecs:{#regionId}:{#accountId}:scu/{#scuId}`

None

None

ecs:OpenSnapshotService

[OpenSnapshotService](/help/en/ecs/developer-reference/api-ecs-2014-05-26-opensnapshotservice)

create

\*All Resources

`*`

None

None

ecs:PurchaseElasticityAssurance

[PurchaseElasticityAssurance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-purchaseelasticityassurance)

update

\*ElasticityAssurance

`acs:ecs:{#regionId}:{#accountId}:elasticityassurance/{#ElasticityAssuranceId}`

None

None

ecs:PurchaseReservedInstancesOffering

[PurchaseReservedInstancesOffering](/help/en/ecs/developer-reference/api-ecs-2014-05-26-purchasereservedinstancesoffering)

create

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/*`

None

None

ecs:PurchaseStorageCapacityUnit

[PurchaseStorageCapacityUnit](/help/en/ecs/developer-reference/api-ecs-2014-05-26-purchasestoragecapacityunit)

create

\*StorageCapacityUnit

`acs:ecs:{#regionId}:{#accountId}:scu/*`

None

None

ecs:ReActivateInstances

[ReActivateInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-reactivateinstances)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ReInitDisk

[ReInitDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-reinitdisk)

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

ecs:PasswordCustomized

None

ecs:RebootInstance

[RebootInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-rebootinstance)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:RebootInstances

[RebootInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-rebootinstances)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:RedeployDedicatedHost

[RedeployDedicatedHost](/help/en/ecs/developer-reference/api-ecs-2014-05-26-redeploydedicatedhost)

update

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

None

None

ecs:RedeployInstance

[RedeployInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-redeployinstance)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ReleaseCapacityReservation

[ReleaseCapacityReservation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-releasecapacityreservation)

delete

\*CapacityReservation

`acs:ecs:{#regionId}:{#accountId}:capacityreservation/{#CapacityReservationId}`

None

None

ecs:ReleaseDedicatedHost

[ReleaseDedicatedHost](/help/en/ecs/developer-reference/api-ecs-2014-05-26-releasededicatedhost)

delete

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

None

None

ecs:RenewDedicatedHosts

[RenewDedicatedHosts](/help/en/ecs/developer-reference/api-ecs-2014-05-26-renewdedicatedhosts)

update

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

None

None

ecs:RenewElasticityAssurances

[RenewElasticityAssurances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-renewelasticityassurances)

create

\*ElasticityAssurance

`acs:ecs:{#regionId}:{#accountId}:elasticityassurance/{#ElasticityAssuranceId}`

None

None

ecs:RenewInstance

[RenewInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-renewinstance)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:RenewReservedInstances

[RenewReservedInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-renewreservedinstances)

create

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#ReservedInstanceId}`

None

None

ecs:ReplaceSystemDisk

[ReplaceSystemDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-replacesystemdisk)

update

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

ecs:IsDiskEncrypted

ecs:IsSystemDiskEncrypted

ecs:PasswordInherit

ecs:PasswordCustomized

ecs:IsDiskByokEncrypted

ecs:IsSystemDiskByokEncrypted

ecs:LoginAsNonRoot

ecs:ImagePlatform

None

ecs:ReportInstancesStatus

[ReportInstancesStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-reportinstancesstatus)

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:ResetDisk

[ResetDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-resetdisk)

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

None

None

ecs:ResetDiskDefaultKMSKeyId

[ResetDiskDefaultKMSKeyId](/help/en/ecs/developer-reference/api-ecs-2014-05-26-resetdiskdefaultkmskeyid)

none

\*All Resources

`*`

None

None

ecs:ResizeDisk

[ResizeDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-resizedisk)

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

None

None

ecs:RevokeSecurityGroup

[RevokeSecurityGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-revokesecuritygroup)

delete

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

ecs:tag

ecs:tag

ecs:tag

None

ecs:RevokeSecurityGroupEgress

[RevokeSecurityGroupEgress](/help/en/ecs/developer-reference/api-ecs-2014-05-26-revokesecuritygroupegress)

delete

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

ecs:tag

ecs:tag

ecs:tag

None

ecs:RunCommand

[RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

ecs:CommandRunAs

None

ecs:RunInstances

[RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances)

create

\*All Resources

`*`

vpc:IsDefaultVSwitch

vpc:IsDefaultVpc

vpc:VPC

ecs:IsDiskEncrypted

ecs:InstanceTypeFamily

ecs:InstanceType

ecs:ImageOwnerId

ecs:ImageSource

ecs:NotSpecifySecurityGroupId

ecs:LoginAsNonRoot

ecs:IsSystemDiskByokEncrypted

ecs:IsDiskByokEncrypted

ecs:PasswordInherit

ecs:PasswordCustomized

ecs:IsSystemDiskEncrypted

ecs:ImagePlatform

ecs:IsDiskEncrypted

ecs:SecurityHardeningMode

ecs:AssociatePublicIpAddress

vpc:CreateDefaultVpc

ecs:SecurityEnhancementStrategy

None

ecs:SendFile

[SendFile](/help/en/ecs/developer-reference/api-ecs-2014-05-26-sendfile)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:StartImagePipelineExecution

[StartImagePipelineExecution](/help/en/ecs/developer-reference/api-ecs-2014-05-26-startimagepipelineexecution)

update

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/{#imagepipelineId}`

None

None

ecs:StartInstance

[StartInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-startinstance)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:StartInstances

[StartInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-startinstances)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:StartTerminalSession

[StartTerminalSession](/help/en/ecs/developer-reference/api-ecs-2014-05-26-startterminalsession)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:StopInstance

[StopInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-stopinstance)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:StopInstances

[StopInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-stopinstances)

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:StopInvocation

[StopInvocation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-stopinvocation)

update

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

None

None

ecs:TagResources

[TagResources](/help/en/ecs/developer-reference/api-ecs-2014-05-26-tagresources)

create

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairId}`

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#SnapshotPolicyId}`

None

None

ecs:UnassignIpv6Addresses

[UnassignIpv6Addresses](/help/en/ecs/developer-reference/api-ecs-2014-05-26-unassignipv6addresses)

delete

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

None

None

ecs:UnassignPrivateIpAddresses

[UnassignPrivateIpAddresses](/help/en/ecs/developer-reference/api-ecs-2014-05-26-unassignprivateipaddresses)

delete

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

None

None

ecs:UnlockSnapshot

[UnlockSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-unlocksnapshot)

update

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#SnapshotId}`

None

None

ecs:UntagResources

[UntagResources](/help/en/ecs/developer-reference/api-ecs-2014-05-26-untagresources)

delete

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairId}`

ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#SnapshotPolicyId}`

None

None

## Resource

ECS defines the values that you can use in the `Resource`. You can attach the policy to a RAM user or a RAM role so that the RAM user or the RAM role can perform a specific operation on a specific resource. The ARN is the unique identifier of the resource on Alibaba Cloud. Take note of the following items:

-   `{#}`indicates a variable. {#} must be replaced with an actual value. For example, `{#ramcode}` must be replaced with the actual code of an Alibaba Cloud service in RAM.
-   An asterisk (`*`) is used as a wildcard. Examples:
    -   `{#resourceType}` is set to `*`, all resources are specified.
    -   `{#regionId}` is set to `*`, all regions are specified.
    -   `{#accountId}` is set to `*`, all Alibaba Cloud accounts are specified.

Resource type

ARN

Activation

-   acs:ecs:{#regionId}:{#accountId}:activation/\*
-   acs:ecs:{#regionId}:{#accountId}:activation/{#activationId}

Address

-   acs:vpc:{#regionId}:{#accountId}:eip/\*
-   acs:vpc:{#regionId}:{#accountId}:eip/{#AllocationId}

Association

-   acs:vpc:{#regionId}:{#accountId}:havip/{#HaVipId}

AutoProvisioningGroup

-   acs:ecs:{#regionId}:{#accountId}:autoprovisioninggroup/{#autoprovisioninggroupId}
-   acs:ecs:{#regionId}:{#accountId}:autoprovisioninggroup/\*

AutoSnapshotPolicy

-   acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#SnapshotPolicyId}
-   acs:ecs:{#regionId}:{#accountId}:autosnapshotpolicy/\*
-   acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/\*

BandwidthPackage

-   acs:vpc:{#regionId}:{#accountId}:bandwidthpackage/{#BandwidthPackageId}
-   acs:vpc:{#regionId}:{#accountId}:bandwidthpackage/\*

CapacityReservation

-   acs:ecs:{#regionId}:{#accountId}:capacityreservation/\*
-   acs:ecs:{#regionId}:{#accountId}:capacityreservation/{#CapacityReservationId}

Command

-   acs:ecs:{#regionId}:{#accountId}:command/{#commandId}
-   acs:ecs:{#regionId}:{#accountId}:command/\*

DedicatedHost

-   acs:ecs:{#regionId}:{#accountId}:ddh/\*
-   acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}

DedicatedHostCluster

-   acs:ecs:{#regionId}:{#accountId}:ddhcluster/{#ddhclusterId}
-   acs:ecs:{#regionId}:{#accountId}:ddhcluster/\*

Demand

-   acs:ecs:{#regionId}:{#accountId}:ecsdemand/\*
-   acs:ecs:\*:{#accountId}:\*

DeploymentSet

-   acs:ecs:{#regionId}:{#accountId}:deploymentset/\*
-   acs:ecs:{#regionId}:{#accountId}:deploymentset/{#DeploymentSetId}

Disk

-   acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}
-   acs:ecs:{#regionId}:{#accountId}:disk/\*
-   acs:ecs:{#regionId}:{#accountId}:disk/{#SourceDiskId}

DiskEncryptionDefaultConfig

-   acs:ecs:{#regionId}:{#accountId}:diskencryptiondefaultconfig/\*

ElasticityAssurance

-   acs:ecs:{#regionId}:{#accountId}:elasticityassurance/{#ElasticityAssuranceId}
-   acs:ecs:{#regionId}:{#accountId}:elasticityassurance/\*

Fleet

-   acs:ecs:{#regionId}:{#accountId}:fleet/\*

ForwardTable

-   acs:vpc:{#regionId}:{#accountId}:forwardtable/{#ForwardTableId}

HaVip

-   acs:vpc:{#regionId}:{#accountId}:havip/\*
-   acs:vpc:{#regionId}:{#accountId}:havip/{#HaVipId}

HpcCluster

-   acs:ecs:{#regionId}:{#accountId}:hpc/{#hpcClusterId}
-   acs:ecs:{#regionId}:{#accountId}:hpc/\*

Image

-   acs:ecs:{#regionId}:{#accountId}:image/{#imageId}
-   acs:ecs:{#regionId}:{#accountId}:image/\*

ImageComponent

-   acs:ecs:{#regionId}:{#accountId}:imagecomponent/\*
-   acs:ecs:{#regionId}:{#accountId}:imagecomponent/{#imagecomponentId}

ImagePipeline

-   acs:ecs:{#regionId}:{#accountId}:imagepipeline/\*
-   acs:ecs:{#regionId}:{#accountId}:imagepipeline/{#ImagePipelineId}

ImagePipelineExecution

-   acs:ecs:{#regionId}:{#accountId}:imagepipelineexecution/\*
-   acs:ecs:{#regionId}:{#accountId}:imagepipelineexecution/{#ImagePipelineExecutionId}

Instance

-   acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}
-   acs:ecs:{#regionId}:{#accountId}:instance/\*
-   acs:vpc:{#regionId}:{#accountId}:instance/{#InstanceId}

Invocation

-   acs:ecs:{#regionId}:{#accountId}:invocation/{#invocationId}

KeyPair

-   acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairName}
-   acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairId}
-   acs:ecs:{#regionId}:{#accountId}:keypair/\*

LaunchTemplate

-   acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}
-   acs:ecs:{#regionId}:{#accountId}:launchtemplate/\*

NatGateway

-   acs:vpc:{#regionId}:{#accountId}:natgateway/{#NatGatewayId}
-   acs:vpc:{#regionId}:{#accountId}:natgateway/\*

NetworkInterface

-   acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}
-   acs:ecs:{#regionId}:{#accountId}:eni/\*

PhysicalConnection

-   acs:vpc:{#regionId}:{#accountId}:physicalconnection/{#PhysicalConnectionId}
-   acs:vpc:{#regionId}:{#accountId}:physicalconnection/\*

PortRangeList

-   acs:ecs:{#regionId}:{#accountId}:portrangelist/{#portRangeListId}
-   acs:ecs:{#regionId}:{#accountId}:portrangelist/\*

PrefixList

-   acs:ecs:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}

ReservedInstance

-   acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}
-   acs:ecs:{#regionId}:{#accountId}:reservedinstance/\*

Role

-   acs:ram:{#regionId}:{#accountId}:role/{#roleName}

RouteTable

-   acs:vpc:{#regionId}:{#accountId}:routetable/{#RouteTableId}

RouterInterface

-   acs:vpc:{#regionId}:{#accountId}:routerinterface/{#RouterInterfaceId}
-   acs:vpc:{#regionId}:{#accountId}:routerinterface/\*

SecurityGroup

-   acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}
-   acs:ecs:{#regionId}:{#accountId}:securitygroup/\*

ServiceSettings

-   acs:ecs:{#regionId}:{#accountId}:servicesettings/{#servicesettingId}

Snapshot

-   acs:ecs:{#regionId}:{#accountId}:snapshot/\*
-   acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}
-   acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#autoSnapshotPolicyId}
-   acs:ecs::{#accountId}:snapshot/\*

SnapshotGroup

-   acs:ecs:{#regionId}:{#accountId}:snapshotgroup/{#SnapshotGroupId}
-   acs:ecs:{#regionId}:{#accountId}:snapshotgroup/\*

StorageCapacityUnit

-   acs:ecs:{#regionId}:{#accountId}:scu/{#scuId}
-   acs:ecs:{#regionId}:{#accountId}:scu/\*

StorageSet

-   acs:ecs:{#regionId}:{#accountId}:storageset/\*

VPC

-   acs:vpc:{#regionId}:{#accountId}:vpc/{#vpcId}
-   acs:vpc:{#regionId}:{#accountId}:vpc/\*

VRouter

-   acs:vpc:{#regionId}:{#accountId}:vrouter/{#VRouterId}
-   acs:vpc:{#regionId}:{#accountId}:vrouter/\*

VSwitch

-   acs:vpc:{#regionId}:{#accountId}:vswitch/{#vswitchId}
-   acs:vpc:{#regionId}:{#accountId}:vswitch/\*

VirtualBorderRouter

-   acs:vpc:{#regionId}:{#accountId}:virtualborderrouter/{#VirtualBorderRouterId}
-   acs:vpc:{#regionId}:{#accountId}:virtualborderrouter/{#VbrId}
-   acs:vpc:{#regionId}:{#AccountId}:virtualborderrouter/\*

Volume

-   acs:ecs:{#regionId}:{#accountId}:volume/\*
-   acs:ecs:{#regionId}:{#accountId}:volume/{#volumeId}

activation

-   acs:ecs:{#regionId}:{#accountId}:activation/{#activationId}

autoprovisioninggroup

-   acs:ecs:{#regionId}:{#accountId}:autoprovisioninggroup/{#autoprovisioninggroupId}

ddhcluster

-   acs:ecs:{#regionId}:{#accountId}:ddhcluster/\*
-   acs:ecs:{#regionId}:{#accountId}:ddhcluster/{#ddhclusterId}

snapshotpolicy

-   acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#snapshotpolicyId}

## Condition

ECS defines the values that you can use in the `Condition` element of a policy statement. The following table describes the values. The following table describes the service-specific condition keys. The common condition keys that are defined by Alibaba Cloud also apply to ECS. For more information about the common condition keys, see [Generic Condition Keyword](/help/en/ram/policy-elements).

The data type determines the conditional operators that you can use to compare the value in a request with the value in a policy statement. You must use conditional operators that are supported by the data type. Otherwise, you cannot compare the value in the request with the value in the policy statement. In this case, the authorization is invalid. For more information about the conditional operators that are supported by each data type, see [Policy elements](/help/en/ram/policy-elements).

Condition key

Description

Data type

ecs:AssociatePublicIpAddress

Whether to support the public network IP allocation of resources in the process of creation and change, that is, whether to allow the operation of resources to make the public network bandwidth greater than 0Mbit/s.

Boolean

ecs:CommandRunAs

User in the operating system that executes cloud assistant commands

String

ecs:ImageOwnerId

Owner UID of the image.

String

ecs:ImagePlatform

Operating system type of the image

String

ecs:ImageSource

Image Source

String

ecs:InstanceType

Instance specifications

String

ecs:InstanceTypeFamily

instance specification family

String

ecs:IsDiskByokEncrypted

Whether to encrypt the data disk with the primary key.

String

ecs:IsDiskEncrypted

Whether it is an encrypted data disk

String

ecs:IsSystemDiskByokEncrypted

Whether the master key encrypts the system disk.

String

ecs:IsSystemDiskEncrypted

Whether it is an encryption system disk

String

ecs:LoginAsNonRoot

Whether to log on to the instance as non-root

Boolean

ecs:NotSpecifySecurityGroupId

Whether the security group ID is not specified

Boolean

ecs:PasswordCustomized

Whether a custom password is used

Boolean

ecs:PasswordInherit

Whether the instance inherits the image password.

Boolean

ecs:SecurityEnhancementStrategy

Whether to open security reinforcement.

String

ecs:SecurityGroupIpProtocols

Transport layer protocol with security group open

String

ecs:SecurityGroupSourceCidrIps

The source IPv4 CIDR segment of the security group that sets access permissions

String

ecs:SecurityHardeningMode

Whether to enforce hardened mode (IMDSv2) when accessing instance metadata

Boolean

vpc:CreateDefaultVpc

Whether a default VPC can be created

Boolean

vpc:IsDefaultVSwitch

Whether it is the default VSwitch and whether the default VSwitch can be used

Boolean

vpc:IsDefaultVpc

Whether it is the default VPC

Boolean

vpc:VPC

Description: The resource ARN of the VPC. Example values: acs:vpc:cn-shanghai:1234567890:vpc/vpc-abc0123efg4567 \*\*\*

String

## What to do next

You can create a custom policy and attach the policy to a RAM user, RAM user group, or RAM role. For more information, see the following topics:

-   [Create a custom policy](/help/en/ram/create-a-custom-policy)
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
