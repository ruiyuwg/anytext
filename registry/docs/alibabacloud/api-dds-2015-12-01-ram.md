Resource Access Management (RAM) is a service provided by Alibaba Cloud to manage user identities and resource access permissions. Using RAM helps you avoid sharing your Alibaba Cloud account keys with other users and allows you to grant users the least privilege access. RAM uses permission policies to define authorizations. This topic describes the general structure of a RAM policy, and the policy statement elements (Action, Resource, and Condition) defined by _ApsaraDB for MongoDB_ for RAM permission policies. The RAM code (RamCode) for _ApsaraDB for MongoDB_ is _dds_ , and the supported authorization granularity is _RESOURCE_ .

## General structure of a policy

Permission policies support JSON format with the following general structure:

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

-   Version: Specifies the policy version number. It is fixed at 1.
    
-   Statement:
    
    -   Effect: Specifies the authorization result. Valid values: Allow and Deny.
        
    -   [Action](#title-auth-detail-2): Specifies one or more operations that are allowed or denied.
        
    -   [Resource](#title-auth-detail-3): Specifies the specific objects affected by the operations. You can use Alibaba Cloud Resource Names (ARNs) to describe specific resources.
        
    -   [Condition](#title-auth-detail-4): Specifies the conditions for the authorization to take effect. This field is optional.
        
        -   [Condition operator](/help/en/ram/policy-elements#section-jix-u0j-2ms): Specifies the conditional operators. Different types of conditions support different conditional operators.
            
        -   Condition\_key: Specifies the condition keys.
            
        -   Condition\_value: Specifies the condition values.
            

## Action

The following table lists the actions defined by _ApsaraDB for MongoDB_. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding ARN in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of common condition keys that are applicable across all RAM-integrated services. For more information, see [Common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms).
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**API**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

dds:DescribeAuditPolicy

[DescribeAuditPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeauditpolicy)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeDBInstanceSSL

[DescribeDBInstanceSSL](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancessl)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyAuditPolicy

[ModifyAuditPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyauditpolicy)

update

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:TransferClusterBackup

[TransferClusterBackup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-transferclusterbackup)

none

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyNodeSpec

[ModifyNodeSpec](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifynodespec)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeAvailabilityZones

[DescribeAvailabilityZones](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeavailabilityzones)

list

\*All Resource

`*****`

None

None

dds:TagResources

[TagResources](/help/en/mongodb/developer-reference/api-dds-2015-12-01-tagresources)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyDBInstanceAttribute

[ModifyDBInstanceAttribute](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstanceattribute)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyDBInstanceDescription

[ModifyDBInstanceDescription](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancedescription)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:UpgradeDBInstanceEngineVersion

[UpgradeDBInstanceEngineVersion](/help/en/mongodb/developer-reference/api-dds-2015-12-01-upgradedbinstanceengineversion)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeParameterModificationHistory

[DescribeParameterModificationHistory](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeparametermodificationhistory)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeActiveOperationTasks

[DescribeActiveOperationTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtasks)

list

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeShardingNetworkAddress

[DescribeShardingNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeshardingnetworkaddress)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:MigrateAvailableZone

[MigrateAvailableZone](/help/en/mongodb/developer-reference/api-dds-2015-12-01-migrateavailablezone)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyGlobalSecurityIPGroupName

[ModifyGlobalSecurityIPGroupName](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyglobalsecurityipgroupname)

update

\*All Resource

`*****`

None

None

dds:ModifyParameters

[ModifyParameters](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyparameters)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyDBInstanceNetExpireTime

[ModifyDBInstanceNetExpireTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancenetexpiretime)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeBackupTasks

[DescribeBackupTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackuptasks)

none

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ReleaseNodePrivateNetworkAddress

[ReleaseNodePrivateNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-releasenodeprivatenetworkaddress)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:CreateGlobalSecurityIPGroup

[CreateGlobalSecurityIPGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createglobalsecurityipgroup)

create

\*All Resource

`*****`

None

None

dds:CreateAccount

[CreateAccount](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createaccount)

create

\*DBInstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:DestroyInstance

[DestroyInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-destroyinstance)

delete

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeActiveOperationTaskType

[DescribeActiveOperationTaskType](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtasktype)

get

\*All Resource

`*****`

None

None

dds:DescribeHistoryTasks

[DescribeHistoryTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describehistorytasks)

list

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#InstanceId}**`

None

None

dds:ModifyBackupPolicy

[ModifyBackupPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifybackuppolicy)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyDBInstanceConnectionString

[ModifyDBInstanceConnectionString](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstanceconnectionstring)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeActiveOperationTask

[DescribeActiveOperationTask](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtask)

get

\*All Resource

`*****`

None

None

dds:DeleteGlobalSecurityIPGroup

[DeleteGlobalSecurityIPGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-deleteglobalsecurityipgroup)

delete

\*All Resource

`*****`

None

None

dds:ModifyDBInstanceTDE

[ModifyDBInstanceTDE](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancetde)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeDBInstanceEncryptionKey

[DescribeDBInstanceEncryptionKey](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstanceencryptionkey)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeRestoreDBInstanceList

[DescribeRestoreDBInstanceList](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerestoredbinstancelist)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyDBInstanceSpec

[ModifyDBInstanceSpec](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancespec)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeActiveOperationTaskCount

[DescribeActiveOperationTaskCount](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtaskcount)

get

\*All Resource

`*****`

None

None

dds:DescribeAvailableEngineVersion

[DescribeAvailableEngineVersion](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeavailableengineversion)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeBackupDBs

[DescribeBackupDBs](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackupdbs)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeMongoDBLogConfig

[DescribeMongoDBLogConfig](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describemongodblogconfig)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeActiveOperationTaskRegion

[DescribeActiveOperationTaskRegion](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtaskregion)

list

\*All Resource

`*****`

None

None

dds:UntagResources

[UntagResources](/help/en/mongodb/developer-reference/api-dds-2015-12-01-untagresources)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeInstanceAutoRenewalAttribute

[DescribeInstanceAutoRenewalAttribute](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeinstanceautorenewalattribute)

get

Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeDBInstanceTDEInfo

[DescribeDBInstanceTDEInfo](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancetdeinfo)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeActiveOperationMaintenanceConfig

[DescribeActiveOperationMaintenanceConfig](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationmaintenanceconfig)

get

\*All Resource

`*****`

None

None

dds:DescribeTags

[DescribeTags](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describetags)

get

\*All Resource

`*****`

None

None

dds:UpgradeDBInstanceKernelVersion

[UpgradeDBInstanceKernelVersion](/help/en/mongodb/developer-reference/api-dds-2015-12-01-upgradedbinstancekernelversion)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ReleasePublicNetworkAddress

[ReleasePublicNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-releasepublicnetworkaddress)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:DescribeRoleZoneInfo

[DescribeRoleZoneInfo](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerolezoneinfo)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DeleteDBInstance

[DeleteDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-deletedbinstance)

delete

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:CreateBackup

[CreateBackup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createbackup)

create

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:RenewDBInstance

[RenewDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-renewdbinstance)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:AllocateNodePrivateNetworkAddress

[AllocateNodePrivateNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-allocatenodeprivatenetworkaddress)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyNodeSpecBatch

[ModifyNodeSpecBatch](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifynodespecbatch)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:RestartNode

[RestartNode](/help/en/mongodb/developer-reference/api-dds-2015-12-01-restartnode)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:MigrateToOtherZone

[MigrateToOtherZone](/help/en/mongodb/developer-reference/api-dds-2015-12-01-migratetootherzone)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:DescribeClusterBackups

[DescribeClusterBackups](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeclusterbackups)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:ModifySecurityGroupConfiguration

[ModifySecurityGroupConfiguration](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifysecuritygroupconfiguration)

update

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyAccountDescription

[ModifyAccountDescription](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyaccountdescription)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeSlowLogRecords

[DescribeSlowLogRecords](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeslowlogrecords)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyGlobalSecurityIPGroupRelation

[ModifyGlobalSecurityIPGroupRelation](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyglobalsecurityipgrouprelation)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:CheckCloudResourceAuthorized

[CheckCloudResourceAuthorized](/help/en/mongodb/developer-reference/api-dds-2015-12-01-checkcloudresourceauthorized)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:CreateNodeBatch

[CreateNodeBatch](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createnodebatch)

create

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:DescribeAccounts

[DescribeAccounts](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeaccounts)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeDBInstanceSwitchLog

[DescribeDBInstanceSwitchLog](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstanceswitchlog)

list

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:DescribeSecurityIps

[DescribeSecurityIps](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describesecurityips)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:RestartDBInstance

[RestartDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-restartdbinstance)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyDBInstanceDiskType

[ModifyDBInstanceDiskType](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancedisktype)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ResetAccountPassword

[ResetAccountPassword](/help/en/mongodb/developer-reference/api-dds-2015-12-01-resetaccountpassword)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:CreateShardingDBInstance

[CreateShardingDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createshardingdbinstance)

create

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/***`

None

None

dds:ModifyResourceGroup

[ModifyResourceGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyresourcegroup)

update

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyDBInstanceSSL

[ModifyDBInstanceSSL](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancessl)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeAuditRecords

[DescribeAuditRecords](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeauditrecords)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeKmsKeys

[DescribeKmsKeys](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describekmskeys)

get

\*All Resource

`*****`

None

None

dds:TransformInstanceChargeType

[TransformInstanceChargeType](/help/en/mongodb/developer-reference/api-dds-2015-12-01-transforminstancechargetype)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:DescribeReplicaSetRole

[DescribeReplicaSetRole](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describereplicasetrole)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeDBInstancesOverview

[DescribeDBInstancesOverview](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancesoverview)

list

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/***`

None

None

dds:ModifyDBInstanceMaintainTime

[ModifyDBInstanceMaintainTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancemaintaintime)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:SwitchDBInstanceHA

[SwitchDBInstanceHA](/help/en/mongodb/developer-reference/api-dds-2015-12-01-switchdbinstanceha)

none

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeRenewalPrice

[DescribeRenewalPrice](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerenewalprice)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeBackups

[DescribeBackups](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackups)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:AllocatePublicNetworkAddress

[AllocatePublicNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-allocatepublicnetworkaddress)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:CreateNode

[CreateNode](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createnode)

create

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ListTagResources

[ListTagResources](/help/en/mongodb/developer-reference/api-dds-2015-12-01-listtagresources)

get

\*All Resource

`*****`

None

None

dds:DescribePrice

[DescribePrice](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeprice)

get

\*All Resource

`*****`

None

None

dds:ModifySecurityIps

[ModifySecurityIps](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifysecurityips)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeDBInstanceAttribute

[DescribeDBInstanceAttribute](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstanceattribute)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifySrvNetworkAddress

[ModifySrvNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifysrvnetworkaddress)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:EvaluateResource

[EvaluateResource](/help/en/mongodb/developer-reference/api-dds-2015-12-01-evaluateresource)

none

\*All Resource

`*****`

None

None

dds:DescribeUserEncryptionKeyList

[DescribeUserEncryptionKeyList](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeuserencryptionkeylist)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyAuditLogFilter

[ModifyAuditLogFilter](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyauditlogfilter)

update

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeSecurityGroupConfiguration

[DescribeSecurityGroupConfiguration](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describesecuritygroupconfiguration)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyDBInstanceMonitor

[ModifyDBInstanceMonitor](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancemonitor)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeAvailableResource

[DescribeAvailableResource](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeavailableresource)

get

\*All Resource

`*****`

None

None

dds:DescribeDBInstancePerformance

[DescribeDBInstancePerformance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstanceperformance)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

dds:ResourceTag

None

dds:DescribeAuditLogFilter

[DescribeAuditLogFilter](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeauditlogfilter)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyTaskInfo

[ModifyTaskInfo](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifytaskinfo)

update

\*All Resource

`*****`

None

None

dds:AllocateDBInstanceSrvNetworkAddress

[AllocateDBInstanceSrvNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-allocatedbinstancesrvnetworkaddress)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeBackupPolicy

[DescribeBackupPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackuppolicy)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeErrorLogRecords

[DescribeErrorLogRecords](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeerrorlogrecords)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeRunningLogRecords

[DescribeRunningLogRecords](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerunninglogrecords)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:TransformToPrePaid

[TransformToPrePaid](/help/en/mongodb/developer-reference/api-dds-2015-12-01-transformtoprepaid)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyGlobalSecurityIPGroup

[ModifyGlobalSecurityIPGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyglobalsecurityipgroup)

update

\*All Resource

`*****`

None

None

dds:DescribeGlobalSecurityIPGroup

[DescribeGlobalSecurityIPGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeglobalsecurityipgroup)

list

\*All Resource

`*****`

None

None

dds:DescribeBackupStorage

[DescribeBackupStorage](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackupstorage)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:ModifyActiveOperationTasks

[ModifyActiveOperationTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyactiveoperationtasks)

update

\*All Resource

`*****`

None

None

dds:DescribeDBInstanceSpecInfo

[DescribeDBInstanceSpecInfo](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancespecinfo)

get

\*All Resource

`*****`

None

None

dds:DeleteNode

[DeleteNode](/help/en/mongodb/developer-reference/api-dds-2015-12-01-deletenode)

delete

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyInstanceAutoRenewalAttribute

[ModifyInstanceAutoRenewalAttribute](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyinstanceautorenewalattribute)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:CheckServiceLinkedRole

[CheckServiceLinkedRole](/help/en/mongodb/developer-reference/api-dds-2015-12-01-checkservicelinkedrole)

get

\*All Resource

`*****`

None

None

dds:ModifyDBInstanceNetworkType

[ModifyDBInstanceNetworkType](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancenetworktype)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:CheckRecoveryCondition

[CheckRecoveryCondition](/help/en/mongodb/developer-reference/api-dds-2015-12-01-checkrecoverycondition)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeClusterRecoverTime

[DescribeClusterRecoverTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeclusterrecovertime)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeHistoryTasksStat

[DescribeHistoryTasksStat](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describehistorytasksstat)

list

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#InstanceId}**`

None

None

dds:DescribeDBInstances

[DescribeDBInstances](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstances)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/***`

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:CreateDBInstance

[CreateDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createdbinstance)

create

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/***`

None

None

dds:DescribeInstanceRecoverTime

[DescribeInstanceRecoverTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeinstancerecovertime)

none

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}**`

None

None

dds:DescribeGlobalSecurityIPGroupRelation

[DescribeGlobalSecurityIPGroupRelation](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeglobalsecurityipgrouprelation)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeParameters

[DescribeParameters](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeparameters)

get

\*dbinstance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyInstanceVpcAuthMode

[ModifyInstanceVpcAuthMode](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyinstancevpcauthmode)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:ModifyDBInstanceConfig

[ModifyDBInstanceConfig](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstanceconfig)

update

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

dds:DescribeDBInstanceMonitor

[DescribeDBInstanceMonitor](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancemonitor)

get

\*Instance

`**acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}**`

None

None

## Resource

The following table lists the resources defined by _ApsaraDB for MongoDB_. Specify them in the `Resource` element of RAM policy statements to grant permissions for specific operations. They are uniquely identified by ARNs. Format: `acs:{#ramcode}:{#regionId}:{#accountId}:{#resourceType}`:

-   `acs`: The initialism of Alibaba Cloud service, which indicates the public cloud of Alibaba Cloud.
    
-   `{#ramcode}`: The code used in RAM to indicate an Alibaba Cloud service.
    
-   `{#regionId}`: The [region ID](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516). If the resource covers all regions, set it to an asterisk (\*).
    
-   `{#accountId}`: The ID of the Alibaba Cloud account. If the resource covers all Alibaba Cloud accounts, set it to an asterisk (\*).
    
-   `{#resourceType}`: The service-defined resource identifier. It supports a hierarchical structure, which is similar to a file path. If the statement covers global resources, set it to an asterisk (\*).
    

**Resource type**

**ARN**

dbinstance

-   acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}
-   acs:dds:{#regionId}:{#accountId}:dbinstance/\*

Instance

-   acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}
-   acs:dds:{#regionId}:{#accountId}:dbinstance/\*
-   acs:dds:{#regionId}:{#accountId}:dbinstance/{#InstanceId}
-   acs:dds:{#regionId}:{#accountId}:instance/\*
-   acs:dds:{#regionId}:{#accountId}:instance/{#InstanceId}

DBInstance

-   acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}
-   acs:dds:{#regionId}:{#accountId}:dbinstance/\*

## Condition

The following table lists the product-level condition keys defined by _ApsaraDB for MongoDB_. You can also use Alibaba Cloud's [Common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms). Specify these keys in the `Condition` element of RAM policy statements to define granular authorization rules. In the condition key, specify the condition values in the `Condition_value` element of the policy.

Each condition key has a specific data type, such as string, number, Boolean, or IP address. The data type determines which conditional operators can be used to compare the request values against policy values. You must specify the conditional operators compatible with the data type of the condition key. Mismatched operators will invalidate the policy. See [Condition operator](/help/en/ram/policy-elements#section-jix-u0j-2ms) for valid combinations.

**Condition key**

**Description**

**Data** **type**

acs:ResourceTag

Tag authentication

STRING

## How to create custom RAM policies?

You can create custom policies and grant them to RAM users, RAM user groups, or RAM roles. For instructions, see:

-   [Create custom policies](/help/en/ram/create-a-custom-policy)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
