Alibaba Cloud provides Resource Access Management (RAM) for you to manage permissions for Function Compute. When you use RAM, you do not need to share the AccessKey pair of your Alibaba Cloud account with other users. Instead, you can grant them only the minimal required permissions. An AccessKey pair includes an AccessKey ID and an AccessKey secret. This topic describes the policies for Function Compute, including system policies and custom policies. This topic also provides sample custom policies.

## Type

In RAM, a policy is a set of permissions that are described based on the [policy syntax and structure](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb). A policy accurately describes the authorized resource set, action set, and authorization conditions. The policies for Function Compute include the following types:

-   [System policies](#section-gwn-ep0-3jg): the policies that are created by Alibaba Cloud. You can use these policies, but cannot modify them. Alibaba Cloud maintains the version updates of the policies.
    
-   [Custom policies](#section-fch-g6j-9qp): the policies that you can create, update, and delete. You maintain the version updates of these policies.
    

## System policies

Before you log on to the [Function Compute console](https://fc.console.alibabacloud.com) as a RAM user for the first time, you must attach a system policy for accessing Function Compute and system policies for accessing other Alibaba Cloud services to the RAM user by using your Alibaba Cloud account. You can access Alibaba Cloud services including Function Compute as the RAM user only after the system policies are attached to the RAM user.

The system policies include the following types:

-   System policies for Function Compute
    
    **Policy**
    
    **Description**
    
    AliyunFCReadOnlyAccess
    
    The read-only permissions on all Function Compute resources.
    
    AliyunFCInvocationAccess
    
    The permissions to invoke all functions.
    
    AliyunFCFullAccess
    
    The permissions to manage all Function Compute resources.
    
    **Note**
    
    The permissions to manage all Function Compute resources defined in the AliyunFCFullAccess policy include the permissions to invoke all functions defined in the AliyunFCInvocationAccess policy and the read-only permissions on all Function Compute resources defined in the AliyunFCReadOnlyAccess policy. After you attach the AliyunFCFullAccess policy to a RAM user, you do not need to attach the AliyunFCInvocationAccess or AliyunFCReadOnlyAccess policy to the RAM user.
    
-   System policies for other Alibaba Cloud services
    
    **Alibaba Cloud service**
    
    **System policies**
    
    Log Service
    
    -   AliyunLogReadOnlyAccess: the read-only permissions on all Log Service resources.
        
    -   AliyunLogFullAccess: the permissions to manage all Log Service resources.
        
    
    **Note**
    
    To access Log Service as a RAM user, you need to attach only the AliyunLogReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    Object Storage Service (OSS)
    
    -   AliyunOSSReadOnlyAccess: the read-only permissions on all OSS resources.
        
    -   AliyunOSSFullAccess: the permissions to manage all OSS resources.
        
    
    CloudMonitor
    
    AliyunCloudMonitorReadOnlyAccess: the read-only permissions on all CloudMonitor resources.
    
    SSL Certificates Service
    
    AliyunYundunCertReadOnlyAccess: the read-only permissions on all SSL Certificates Service resources.
    
    Virtual Private Cloud
    
    AliyunVPCReadOnlyAccess: the read-only permissions on all VPC resources.
    
    Elastic Compute Service (ECS)
    
    AliyunECSReadOnlyAccess: the read-only permissions on all ECS resources.
    
    Resource Access Management (RAM)
    
    -   AliyunRAMReadOnlyAccess: the read-only permissions on all RAM resources, including the permissions to view users, groups, and authorization information.
        
    -   AliyunRAMFullAccess: the permissions to manage all RAM resources, including the permissions to manage users and grant permissions.
        
    
    **Note**
    
    If you attach only the AliyunRAMReadOnlyAccess policy to a RAM user, you can only obtain the list of roles in the console as the RAM user. If you need to perform other operations as the RAM user, you must attach the AliyunRAMFullAccess policy to the RAM user.
    
    Application Real-Time Monitoring Service
    
    -   AliyunARMSReadOnlyAccess: the read-only permissions on ARMS resources.
        
    -   AliyunARMSFullAccess: the permission to manage ARMS resources.
        
    
    **Note**
    
    To access ARMS as a RAM user, you need to attach only the AliyunARMSReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    Simple Message Queue (formerly MNS)
    
    -   AliyunMNSReadOnlyAccess: the read-only permissions on all Simple Message Queue (formerly MNS) resources.
        
    -   AliyunMNSFullAccess: the permissions to manage all Simple Message Queue (formerly MNS) resources.
        
    
    **Note**
    
    To access Simple Message Queue (formerly MNS) as a RAM user, you need to attach only the AliyunMNSReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    EventBridge
    
    -   AliyunEventBridgeReadOnlyAccess: the read-only permissions on all EventBridge resources.
        
    -   AliyunEventBridgeFullAccess: the permissions to manage all EventBridge resources.
        
    
    **Note**
    
    To access EventBridge as a RAM user, you need to attach only the AliyunEventBridgeReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    Message Queue for Apache RocketMQ
    
    -   AliyunMQReadOnlyAccess: the read-only permissions on all Message Queue for Apache RocketMQ resources.
        
    -   AliyunMQFullAccess: the permissions to manage all Message Queue for Apache RocketMQ resources.
        
    
    **Note**
    
    To access Message Queue for Apache RocketMQ as a RAM user, you need to attach only the AliyunMQReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    Container Registry
    
    -   AliyunContainerRegistryReadOnlyAccess: the read-only permissions on all Container Registry resources.
        
    -   AliyunContainerRegistryFullAccess: the permissions to manage all Container Registry resources.
        
    
    **Note**
    
    To access Container Registry as a RAM user, you need to attach only the AliyunContainerRegistryReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    File Storage NAS
    
    -   AliyunNASReadOnlyAccess: the read-only permissions on all NAS resources.
        
    -   AliyunNASFullAccess: the permissions to manage all NAS resources.
        
    
    **Note**
    
    To access NAS as a RAM user, you need to attach only the AliyunNASReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    ApsaraDB RDS
    
    -   AliyunRDSReadOnlyAccess: the read-only permissions on all ApsaraDB RDS resources.
        
    -   AliyunRDSFullAccess: the permissions to manage all ApsaraDB RDS resources.
        
    
    **Note**
    
    To access ApsaraDB RDS as a RAM user, you need to attach only the AliyunRDSReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    Alibaba Cloud DevOps
    
    -   AliyunRDCReadOnlyAccess: the read-only permissions on Apsara DevOps RDC resources.
        
    -   AliyunRDCFullAccess: the permissions to manage the Apsara DevOps RDC resources.
        
    
    **Note**
    
    To access ApsaraDB RDS as a RAM user, you need to attach only the AliyunRDCReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    

**Important**

If you cannot update OSS event triggers as a RAM user after you grant permissions related to triggers, for example, attach the AliyunOSSFullAccess policy to the RAM user by using an Alibaba Cloud account, attach the following custom policy to the RAM user by using the Alibaba Cloud account. After the custom policy is attached, you can update the OSS event triggers as the RAM user.

```
 {
        "Statement": [
            {
                "Action": [
                    "ram:PassRole"
                ],
                "Effect": "Allow",
                "Resource": "*"
            }
        ],
        "Version": "1"
    }
```

## Custom policies

In addition to the system policies, Function Compute supports custom policies that allow you to grant fine-grained permissions to RAM users. For more information about the elements of a policy, see [Policy elements](/help/en/ram/policy-elements#concept-xg5-51g-xdb).

**Resource**

**Action**

**Description**

acs:fc:<region>:<account-id>:services/<serviceName>

fc:GetService

The specified service.

fc:UpdateService

fc:DeleteService

acs:fc:<region>:<account-id>:services/\*

fc:CreateService

All services.

fc:ListServices

acs:fc:<region>:<account-id>:services/<serviceName>.<qualifier>

fc:GetService

The service of a specified version.

acs:fc:<region>:<account-id>:services/<serviceName>/functions/<functionName>

fc:GetFunction

The specified function in a specified service.

fc:UpdateFunction

fc:DeleteFunction

fc:InvokeFunction

acs:fc:<region>:<account-id>:services/<serviceName>/functions/\*

fc:CreateFunction

All functions in a specified service.

fc:ListFunctions

acs:fc:<region>:<account-id>:services/<serviceName>.\*/functions/<functionName>

fc:GetFunction

All functions in all versions of a specified service.

fc:UpdateFunction

fc:DeleteFunction

fc:InvokeFunction

fc:PutProvisionConfig

fc:GetProvisionConfig

fc:PutFunctionOnDemandConfig

fc:DeleteFunctionOnDemandConfig

fc:PutFunctionAsyncInvokeConfig

fc:DeleteFunctionAsyncInvokeConfig

fc:GetFunctionAsyncInvokeConfig

fc:GetFunctionOnDemandConfig

acs:fc:<region>:<account-id>:services/<serviceName>/functions/<functionName>/triggers/<triggerName>

fc:GetTrigger

The specified trigger of a specified function in a specified service.

fc:UpdateTrigger

fc:DeleteTrigger

acs:fc:<region>:<account-id>:services/<serviceName>/functions/<functionName>/triggers/\*

fc:CreateTrigger

All triggers of a specified function in a specified service.

fc:ListTriggers

acs:fc:<region>:<account-id>:services/<serviceName>/versions

fc:PublishServiceVersion

All service versions.

fc:ListServiceVersions

acs:fc:<region>:<account-id>:services/<serviceName>/versions/<versionId>

fc:DeleteServiceVersion

The specified service version.

acs:fc:<region>:<account-id>:services/<serviceName>/aliases/\*

fc:CreateAlias

All service aliases.

fc:ListAliases

acs:fc:<region>:<account-id>:services/<serviceName>/aliases/<aliasName>

fc:GetAlias

The specified service alias.

fc:UpdateAlias

fc:DeleteAlias

acs:fc:<region>:<account-id>:custom-domains/\*

fc:CreateCustomDomain

All custom domain names.

fc:ListCustomDomains

acs:fc:<region>:<account-id>:custom-domains/<domainName>

fc:GetCustomDomain

The specified custom domain name.

fc:UpdateCustomDomain

fc:DeleteCustomDomain

acs:fc:<region>:<account-id>:tag

fc:TagResource

A single tag.

fc:GetResourceTags

fc:UnTagResource

acs:fc:<region>:<account-id>:tags/\*

fc:ListTaggedResources

All tags.

acs:fc:<region>:<account-id>:account-settings/\*

fc:GetAccountSettings

The settings of your account.

acs:fc:<region>:<account-id>:layerarn/<arn>

fc:GetLayerVersionByArn

All layers.

acs:fc:<region>:<account-id>:layers/\*

fc:ListLayers

acs:fc:<region>:<account-id>:layers/<layerName>/versions/<versionId>

fc:PublishLayerAsPublic

acs:fc:<region>:<account-id>:layers/<layerName>/versions/\*

fc:ListLayerVersions

All layer versions.

fc:CreateLayerVersion

acs:fc:<region>:<account-id>:layers/<layerName>/versions/<versionId>

fc:GetLayerVersion

fc:DeleteLayerVersion

acs:fc:<region>:<account-id>:on-demand-configs/\*

fc:ListOnDemandConfigs

The on-demand configurations.

acs:fc:<region>:<account-id>:provision-configs/\*

fc:ListProvisionConfigs

The provisioned configurations.

acs:fc:<region>:<account-id>:services/<serviceName>/binding

fc:DeleteVpcBinding

The VPC configuration.

acs:fc:<region>:<account-id>:services/<serviceName>/binding/\*

fc:CreateVpcBinding

fc:ListVpcBindings

acs:fc:<region>:<account-id>:services/<serviceName>/functions/<functionName>/async-invoke-configs/\*

fc:ListFunctionAsyncInvokeConfigs

The asynchronous invocation configurations.

acs:fc:<region>:<account-id>:services/<serviceName>/functions/<functionName>/code

fc:GetFunctionCode

All function code.

acs:fc:<region>:<account-id>:services/<serviceName>/functions/<functionName>/stateful-async-invocations/\*

fc:ListStatefulAsyncInvocations

Asynchronous tasks

acs:fc:<region>:<account-id>:services/<serviceName>/functions/<functionName>/stateful-async-invocations/<invocationId>

fc:GetStatefulAsyncInvocation

fc:StopStatefulAsyncInvocation

You can use the preceding actions and resources to define the following custom policy that is used to grant the permissions to invoke the _demo_ function in the _test_ service in the China (Hangzhou) region.

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "fc:InvokeFunction"
            ],
            "Resource": "acs:fc:cn-hangzhou:*:services/test/functions/demo",
            "Effect": "Allow"
        }
    ]
}
```

## Sample policies

### Custom policy with permissions to create and query services and create and invoke functions in Function Compute

```
{
"Version":"1",
"Statement":[
{
"Action":[
"fc:CreateService",
"fc:GetService",
"fc:CreateFunction",
"fc:GetFunction",
"fc:InvokeFunction"
],
"Resource":"*",
"Effect":"Allow"
},
{
"Action":[
"ram:PassRole"
],
"Effect":"Allow",
"Resource":"*"
}
]
}
```

### Custom policy used to grant the permissions to access logs

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "log:ListProject",
                "log:ListLogStore"
            ],
            "Resource": "acs:log:*:*:project/*"
        }
    ]
}
```

### Custom policy used to grant the permissions to access OSS event triggers

```
{
  "Statement": [
    {
      "Action": [
        "oss:ListBucket",
        "oss:GetBucketEventNotification",
        "oss:PutBucketEventNotification",
        "oss:DeleteBucketEventNotification"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ],
  "Version": "1"
}
```

### Custom policy in which services that can access the Internet are not allowed to create

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "fc:UpdateService",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "fc:EnableServiceInternetAccess": "true"
        }
      }
    },
    {
      "Action": "fc:CreateService",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {
          "fc:EnableServiceInternetAccess": "false"
        }
      }
    }
  ]
}
```

### Custom policy in which services that cannot access Log Service are not allowed to create

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "fc:UpdateService",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "fc:EnableServiceSLSLogging": "false"
        }
      }
    },
    {
      "Action": "fc:CreateService",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {
          "fc:EnableServiceSLSLogging": "true"
        }
      }
    }
  ]
}
```

### Custom policy in which triggers that can be accessed over the Internet are not allowed to create

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "fc:UpdateTrigger",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "fc:EnableHTTPTriggerAnonymous": "true"
        }
      }
    },
    {
      "Action": "fc:CreateTrigger",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "fc:EnableHTTPTriggerAnonymous": "true"
        }
      }
    }
  ]
}
```
