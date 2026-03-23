AliyunDTSRolePolicy is the authorization policy dedicated to a service role. In most cases, when a service role is created, the policy is attached to the service role. Then, the service role is authorized to access other cloud services. This policy is updated by the relevant Alibaba Cloud service. Do not attach this policy to a RAM identity other than a service role.

## **Policy details**

-   Type: service system policy
    
-   Creation time: 13:34:45 on September 12, 2016
    
-   Update time: 03:07:20 on March 17, 2026
    
-   Current version: v60
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "rds:Describe*",
        "rds:CreateDBInstance",
        "rds:CreateAccount*",
        "rds:CreateDataBase*",
        "rds:ModifySecurityIps",
        "rds:GrantAccountPrivilege",
        "rds:ReceiveDBInstance",
        "rds:CreateMigrateTask",
        "rds:DescribeMigrateTaskById",
        "rds:CreateOnlineDatabaseTask",
        "rds:CreateReplicationLink",
        "rds:DeleteReplicationLink",
        "rds:SwitchReplicationLink"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "ecs:DescribeSecurityGroupAttribute",
        "ecs:DescribeInstances",
        "ecs:DescribeRegions",
        "ecs:AuthorizeSecurityGroup",
        "ecs:CreateSecurityGroup",
        "ecs:DeleteSecurityGroup",
        "ecs:DescribeSecurityGroups",
        "ecs:JoinSecurityGroup",
        "ecs:LeaveSecurityGroup",
        "ecs:RevokeSecurityGroup"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "dhs:ListProject",
        "dhs:GetProject",
        "dhs:CreateTopic",
        "dhs:ListTopic",
        "dhs:GetTopic",
        "dhs:UpdateTopic",
        "dhs:ListShard",
        "dhs:MergeShard",
        "dhs:SplitShard",
        "dhs:PutRecords",
        "dhs:GetRecords",
        "dhs:GetCursors"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "elasticsearch:DescribeInstance",
        "elasticsearch:ListInstance",
        "elasticsearch:UpdateAdminPwd",
        "elasticsearch:UpdatePublicNetwork",
        "elasticsearch:UpdateBlackIps",
        "elasticsearch:UpdateKibanaIps",
        "elasticsearch:UpdatePublicIps",
        "elasticsearch:UpdatePrivateNetworkWhiteIps",
        "elasticsearch:UpdatePublicWhiteIps",
        "elasticsearch:UpdateWhiteIps",
        "elasticsearch:ModifyWhiteIps"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "drds:DescribeDrds*",
        "drds:ModifyDrdsIpWhiteList",
        "drds:DescribeRegions",
        "drds:DescribeRdsList",
        "drds:CreateDrdsDB",
        "drds:CreateDrdsAccount",
        "drds:DescribeShardDBs"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "polardb:DescribeDBClusterIPArrayList",
        "polardb:DescribeDBClusterNetInfo",
        "polardb:DescribeDBClusters",
        "polardb:DescribeRegions",
        "polardb:DescribeDBClusterEndpoints",
        "polardb:DescribeDBClusterAccessWhiteList",
        "polardb:ModifyDBClusterAccessWhitelist",
        "polardb:ModifySecurityIps",
        "polardb:DescribeDBClusterAttribute",
        "polardb:CreateDBInstance",
        "polardb:CreateAccount",
        "polardb:DescribeDBClusterVersion",
        "polardb:DescribeGlobalDatabaseNetworks",
        "polardb:Describe*"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "dds:DescribeDBInstanceAttribute",
        "dds:DescribeReplicaSetRole",
        "dds:DescribeSecurityIps",
        "dds:DescribeDBInstances",
        "dds:ModifySecurityIps",
        "dds:CreateDBInstance",
        "dds:CreateShardingDBInstance",
        "dds:CreateReplicationLink",
        "dds:DeleteReplicationLink",
        "dds:DescribeShardingNetworkAddress",
        "dds:DescribeRegions",
        "dds:DescribeParameters"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "kvstore:DescribeSecurityIps",
        "kvstore:DescribeInstances",
        "kvstore:DescribeRegions",
        "kvstore:ModifySecurityIps",
        "kvstore:DescribeAccounts",
        "kvstore:CreateAccount",
        "kvstore:DescribeDBInstanceNetInfoForInner",
        "kvstore:DescribeDBInstanceNetInfo",
        "kvstore:AllocateInstancePrivateConnection",
        "kvstore:SyncDtsStatus",
        "kvstore:GetDbMasterInfo",
        "kvstore:DescribeInstanceConfig",
        "kvstore:DescribeInstanceAttribute"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "petadata:DescribeInstanceInfo",
        "petadata:DescribeSecurityIPs",
        "petadata:DescribeInstances",
        "petadata:ModifySecurityIPs"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "adb:DescribeDBClusters",
        "adb:DescribeDBClusterAttribute",
        "adb:DescribeRegions",
        "adb:DescribeDBClusterNetInfo",
        "adb:DescribeDBClusterAccessWhiteList",
        "adb:ModifyDBClusterAccessWhiteList",
        "adb:DescribeDBClusterPerformance",
        "adb:DescribeClusterNetInfo"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "gpdb:DescribeDBInstanceAttribute",
        "gpdb:DescribeDBInstances",
        "gpdb:DescribeRegions",
        "gpdb:DescribeDBInstanceIPArrayList",
        "gpdb:DescribeDBClusterIPArrayList",
        "gpdb:ModifySecurityIps",
        "gpdb:DescribeDBInstanceNetInfo",
        "gpdb:DescribeDBClusterPerformance"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "clickhouse:DescribeRegions",
        "clickhouse:DescribeDBClusters",
        "clickhouse:DescribeDBClusterAttribute",
        "clickhouse:DescribeDBClusterNetInfoItems",
        "clickhouse:DescribeDBClusterAccessWhiteList",
        "clickhouse:ModifyDBClusterAccessWhiteList",
        "clickhouse:DescribeAllDataSource",
        "clickhouse:DescribeDBInstances",
        "clickhouse:DescribeDBInstanceAttribute",
        "clickhouse:DescribeEndpoints",
        "clickhouse:DescribeSecurityIPList",
        "clickhouse:ModifySecurityIPList"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "ots:ListInstance",
        "ots:GetInstance",
        "ots:GetRow",
        "ots:PutRow",
        "ots:UpdateRow",
        "ots:DeleteRow",
        "ots:BatchWriteRow",
        "ots:BulkImport",
        "ots:CreateTable",
        "ots:DescribeTable",
        "ots:ListTable"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "dg:GetUserDatabases",
        "dg:GetUserGateways"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "cen:DeleteRouteServiceInCen",
        "cen:DescribeCenAttachedChildInstances",
        "cen:DescribeCens",
        "cen:DescribeRouteServicesInCen",
        "cen:ResolveAndRouteServiceInCen",
        "cen:ListTransitRouters"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "polardbx:DescribeDBInstances",
        "polardbx:DescribeDBInstanceAttribute",
        "polardbx:DescribeSecurityIps",
        "polardbx:ModifySecurityIps",
        "polardbx:Describe*"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "dms:GetUserActiveTenant",
        "dms:GetInstance",
        "dms:GetLogicDatabase",
        "dms:ListLogicDatabases",
        "dms:GetDBTopology",
        "dms:ListLogicTables",
        "dms:GetTableDBTopology"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "vpc:DescribeVpcs",
        "vpc:DescribeVpcAttribute",
        "vpc:DescribeVSwitchAttributes",
        "vpc:DescribeNatGateways"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "lindorm:GetLindormInstanceListForDMS",
        "lindorm:GetLindormInstanceForDMS",
        "lindorm:UpdateInstanceIpWhiteList",
        "lindorm:GetLindormInstanceEngineList",
        "lindorm:GetLindormInstanceList",
        "lindorm:GetLindormInstance"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "hbase:DescribeClusterConnection",
        "hbase:DescribeInstance",
        "hbase:DescribeInstances",
        "hbase:ModifyIpWhitelist"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Effect": "Allow",
      "Action": [
        "bss:ModifyInstance",
        "nis:ListNetworkPath",
        "nis:DeleteNetworkPath",
        "nis:CreateNetworkPath",
        "nis:CreateNetworkReachableAnalysis",
        "nis:GetNetworkReachableAnalysis",
        "nis:IsOpenService",
        "nis:CheckHasNisSLR",
        "nis:BindServiceLinkRoleToUser"
      ],
      "Resource": "*"
    },
    {
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "nis.aliyuncs.com"
        }
      }
    },
    {
      "Effect": "Allow",
      "Action": [
        "privatelink:CreateVpcEndpoint",
        "privatelink:GetVpcEndpointAttribute",
        "privatelink:ListVpcEndpoints",
        "privatelink:AddZoneToVpcEndpoint",
        "privatelink:ListVpcEndpointZones",
        "privatelink:CheckProductOpen",
        "privatelink:OpenPrivateLinkService",
        "privatelink:RemoveZoneFromVpcEndpoint",
        "privatelink:DeleteVpcEndpoint",
        "ram:CreateServiceLinkedRole",
        "ecs:DescribeSecurityGroups",
        "ecs:CreateSecurityGroup",
        "vpc:DescribeVSwitches"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "fc:InvokeFunction",
        "fc:ListServices",
        "fc:ListFunctions",
        "fc:ListServiceVersions",
        "fc:ListAliases"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "cms:DescribeEventRuleList",
        "cms:PutEventRule",
        "cms:DescribeContactGroupList",
        "cms:PutEventRuleTargets"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "cdt:GetCdtServiceStatus",
        "cdt:GetCdtCbServiceStatus",
        "cdt:OpenCdtService",
        "cdt:OpenCdtCbService"
      ],
      "Resource": "acs:cdt:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "alikafka:ListInstance",
        "alikafka:ListTopic",
        "alikafka:UpdateInstance"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "selectdb:DescribeDBInstances",
        "selectdb:DescribeDBInstanceAttribute",
        "selectdb:DescribeDBInstanceNetInfo",
        "selectdb:DescribeSecurityIPList",
        "selectdb:ModifySecurityIPList"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "oceanbase:DescribeInstances",
        "oceanbase:DescribeTenants",
        "oceanbase:DescribeTenant",
        "oceanbase:DescribeTenantSecurityIpGroups",
        "oceanbase:ModifyTenantSecurityIpGroup"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "es-serverless:GetApp",
        "es-serverless:UpdateApp",
        "es-serverless:ListApps"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "dts:DescribeDtsJobs",
        "dts:CreateDtsInstance",
        "dts:ConfigureDtsJob",
        "dts:DescribeJobPerformance",
        "dts:ReverseTwoWayDirection",
        "dts:DeleteDtsJob",
        "dts:CreateFastRecoverJob",
        "dts:CancelFastRecoverJob",
        "dts:CompleteFastRecoverJob",
        "dts:DescribeFastRecoverDetail",
        "dts:ModifyDbListFilterTable",
        "dts:AuthorizeFastRecover",
        "dts:ListJobStepProcess"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "log:ListLogStores",
        "log:ListProject",
        "log:GetIndex",
        "log:GetProject",
        "log:ListShards",
        "log:GetCursor",
        "log:GetCursorOrData"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "rocketmq:GetInstance",
        "rocketmq:ListInstances",
        "rocketmq:ListTopics",
        "rocketmq:CreateInstanceIpWhitelist",
        "rocketmq:GetInstanceIpWhitelist"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "mq:QueryInstanceBaseInfo",
        "mq:ListTopic",
        "mq:PUB"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "oss:GetBucketInfo",
        "oss:GetBucketTagging",
        "oss:PutBucketTagging"
      ],
      "Resource": "*"
    },
    {
      "Action": [
        "oss:ListObjects",
        "oss:GetBucketAcl",
        "oss:GetBucketLocation",
        "oss:GetBucketInfo",
        "oss:GetBucketLogging",
        "oss:GetBucketWebsite",
        "oss:GetBucketReferer",
        "oss:GetBucketLifecycle",
        "oss:GetBucketEncryption",
        "oss:GetBucketStat",
        "oss:GetBucketMetadata",
        "oss:GetBucketTagging",
        "oss:GetBucketVersioning",
        "oss:GetSimplifiedObjectMeta",
        "oss:GetObjectMetadata",
        "oss:GetBucketStorageCapacity",
        "oss:GetBucketEncryption",
        "oss:GetObject",
        "oss:GetObjectAcl",
        "oss:GetObjectTagging",
        "oss:GetService",
        "oss:ListObjects",
        "oss:ListMultipartUploads",
        "oss:ListParts",
        "oss:ListBuckets",
        "oss:ListVpcip",
        "oss:ListVersions",
        "oss:GetBucketCname",
        "oss:GetBucketRequestPayment",
        "oss:GetBucketVpcip",
        "oss:DoesBucketExist",
        "oss:DoesObjectExist",
        "oss:ListObjectsV2",
        "oss:PutBucket",
        "oss:PutObject",
        "oss:PutObjectTagging",
        "oss:CopyObject",
        "oss:AbortMultipartUpload",
        "oss:RestoreObject",
        "oss:UploadFile",
        "oss:DownloadFile",
        "oss:DeleteObject",
        "oss:DeleteObjects",
        "oss:DeleteObjectVersion",
        "oss:ListObjectVersions",
        "oss:HeadObject",
        "oss:HeadBucket",
        "oss:PostDataLakeStorageFileOperation",
        "oss:PostDataLakeStorageAdminOperation"
      ],
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "oss:BucketTag/dts": "account-management"
        }
      }
    },
    {
      "Effect": "Allow",
      "Action": [
        "ram:GetUser"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "hdm:GetAutonomousNotifyEventsInRange",
        "hdm:GetAutonomousNotifyEventContent"
      ],
      "Resource": "*"
    },
    {
      "Action": [
        "ecs:CreateNetworkInterface",
        "ecs:DescribeNetworkInterfaces",
        "ecs:AttachNetworkInterface",
        "ecs:DetachNetworkInterface",
        "ecs:DeleteNetworkInterface",
        "ecs:DescribeInstanceAttribute",
        "ecs:AssignPrivateIpAddresses",
        "ecs:UnassignPrivateIpAddresses",
        "ecs:DescribeInstances",
        "ecs:AssignIpv6Addresses",
        "ecs:UnassignIpv6Addresses",
        "ecs:ModifyNetworkInterfaceAttribute",
        "ecs:DescribeNetworkInterfaceAttribute",
        "ecs:CreateNetworkInterfacePermission"
      ],
      "Resource": [
        "*"
      ],
      "Effect": "Allow"
    },
    {
      "Effect": "Allow",
      "Action": [
        "slb:CreateLoadBalancer",
        "slb:DeleteLoadBalancer",
        "slb:DescribeLoadBalancers",
        "slb:DescribeLoadBalancerAttribute",
        "slb:DescribeLoadBalancerTCPListenerAttribute",
        "slb:SetLoadBalancerTCPListenerAttribute",
        "slb:CreateLoadBalancerTCPListener",
        "slb:StartLoadBalancerListener",
        "slb:DescribeLoadBalancerListeners",
        "slb:StopLoadBalancerListener",
        "slb:DeleteLoadBalancerListener",
        "slb:DescribeVServerGroups",
        "slb:DescribeVServerGroupAttribute",
        "slb:CreateVServerGroup",
        "slb:DeleteVServerGroup",
        "slb:DescribeAccessControlLists",
        "slb:DescribeAccessControlListAttribute",
        "slb:RemoveAccessControlListEntry",
        "slb:CreateAccessControlList",
        "slb:DeleteAccessControlList",
        "slb:ModifyVServerGroupBackendServers",
        "vpc:AssociateEipAddress",
        "vpc:AllocateEipAddress",
        "vpc:DescribeEipAddresses"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "gpdb:CreateDBInstance",
        "gpdb:CreateAccount",
        "gpdb:DescribeAccounts"
      ],
      "Resource": "*"
    },
    {
      "Action": [
        "vpc:DescribeVSwitches",
        "slb:AddAccessControlListEntry",
        "slb:SetLoadBalancerDeleteProtection",
        "vpc:UnassociateEipAddress",
        "vpc:ReleaseEipAddress"
      ],
      "Resource": [
        "*"
      ],
      "Effect": "Allow"
    }
  ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Normal service roles](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service)
