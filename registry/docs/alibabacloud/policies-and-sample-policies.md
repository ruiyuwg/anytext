Function Compute uses Resource Access Management (RAM) to manage permissions. With RAM, you do not need to share your AccessKey pairs with other users. Instead, you can grant the users only the minimal required permissions. An AccessKey pair includes an AccessKey ID and an AccessKey secret. This topic describes policies for Function Compute, including system policies and custom policies. This topic also provides sample custom policies.

## Policy types

In RAM, a policy is a set of permissions that are defined based on [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb). A policy accurately defines the authorized resource set, action set, and authorization conditions. Policies for Function Compute include the following types:

-   [System policies](#section-gwn-ep0-3jg): System policies are created and updated by Alibaba Cloud. You can use system policies but cannot modify them.
    
-   [Custom policies](#section-fch-g6j-9qp): You can create, update, and delete custom policies. You need to maintain versions of custom policies.
    

## System policies

When you log on to the [Function Compute console](https://fc.console.alibabacloud.com) as a RAM user for the first time, you must use your Alibaba Cloud account to attach the system policies of Function Compute and other Alibaba Cloud services to the RAM user. You can access Alibaba Cloud services including Function Compute as the RAM user only after the system policies are attached.

The following items list system policies of different types:

-   System policies for Function Compute
    
    **Policy name**
    
    **Description**
    
    AliyunFCReadOnlyAccess
    
    The read-only permissions on all Function Compute resources.
    
    AliyunFCInvocationAccess
    
    The permissions to invoke functions.
    
    AliyunFCFullAccess
    
    The permissions to manage all Function Compute resources.
    
    **Note**
    
    The AliyunFCFullAccess policy contains permissions of the AliyunFCInvocationAccess and AliyunFCReadOnlyAccess policies. After you attach the AliyunFCFullAccess policy to a RAM user, you do not need to attach the AliyunFCInvocationAccess or AliyunFCReadOnlyAccess policy to the RAM user.
    
-   System policies for other Alibaba Cloud services
    
    **Alibaba Cloud service**
    
    **System policy**
    
    Simple Log Service
    
    -   AliyunLogReadOnlyAccess: the read-only permissions on Simple Log Service resources.
        
    -   AliyunLogFullAccess: the permissions to manage Simple Log Service resources.
        
    
    **Note**
    
    To access Simple Log Service as a RAM user, you need to attach only the AliyunLogReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    Object Storage Service (OSS)
    
    -   AliyunOSSReadOnlyAccess: the read-only permissions on OSS resources.
        
    -   AliyunOSSFullAccess: the permissions to manage OSS resources.
        
    
    CloudMonitor
    
    AliyunCloudMonitorReadOnlyAccess: the read-only permissions on CloudMonitor resources.
    
    Certificate Management Service
    
    AliyunYundunCertReadOnlyAccess: the read-only permissions on Certificate Management Service resources.
    
    Virtual Private Cloud (VPC)
    
    AliyunVPCReadOnlyAccess: the read-only permissions on VPC resources.
    
    Elastic Compute Service (ECS)
    
    AliyunECSReadOnlyAccess: the read-only permissions on ECS resources.
    
    RAM
    
    -   AliyunRAMReadOnlyAccess: the read-only permissions on RAM resources, including the permissions to view users, groups, and authorization information.
        
    -   AliyunRAMFullAccess: the permissions to manage RAM resources, including the permissions to manage users and grant permissions.
        
    
    **Note**
    
    If you attach only the AliyunRAMReadOnlyAccess policy to a RAM user, you can only obtain the list of roles in the console as the RAM user. If you need to perform other operations as the RAM user, you need to attach the AliyunRAMFullAccess policy to the RAM user.
    
    Application Real-Time Monitoring Service (ARMS)
    
    -   AliyunARMSReadOnlyAccess: the read-only permissions on ARMS resources.
        
    -   AliyunARMSFullAccess: the permissions to manage ARMS resources.
        
    
    **Note**
    
    To access ARMS as a RAM user, you need to attach only the AliyunARMSReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    Simple Message Queue (formerly MNS)
    
    -   AliyunMNSReadOnlyAccess: the read-only permissions on Simple Message Queue (formerly MNS) resources.
        
    -   AliyunMNSFullAccess: the permissions to manage Simple Message Queue (formerly MNS) resources.
        
    
    **Note**
    
    To access Simple Message Queue (formerly MNS) as a RAM user, you need to attach only the AliyunMNSReadOnlyAccess policy to the RAM user based on the principle of least privilege.Simple Message Queue (formerly MNS)
    
    EventBridge
    
    -   AliyunEventBridgeReadOnlyAccess: the read-only permissions on EventBridge resources.
        
    -   AliyunEventBridgeFullAccess: the permissions to manage EventBridge resources.
        
    
    **Note**
    
    To access EventBridge as a RAM user, you need to attach only the AliyunEventBridgeReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    ApsaraMQ for RocketMQ
    
    -   AliyunMQReadOnlyAccess: the read-only permissions on ApsaraMQ for RocketMQ resources.
        
    -   AliyunMQFullAccess: the permissions to manage ApsaraMQ for RocketMQ resources.
        
    
    **Note**
    
    To access ApsaraMQ for RocketMQ as a RAM user, you need to attach only the AliyunMQReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    Container Registry
    
    -   AliyunContainerRegistryReadOnlyAccess: the read-only permissions on Container Registry resources.
        
    -   AliyunContainerRegistryFullAccess: the permissions to manage Container Registry resources.
        
    
    **Note**
    
    To access Container Registry as a RAM user, you need to attach only the AliyunContainerRegistryReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    File Storage NAS (NAS)
    
    -   AliyunNASReadOnlyAccess: the read-only permissions on NAS resources.
        
    -   AliyunNASFullAccess: the permissions to manage NAS resources.
        
    
    **Note**
    
    To access NAS as a RAM user, you need to attach only the AliyunNASReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    ApsaraDB RDS
    
    -   AliyunRDSReadOnlyAccess: the read-only permissions on ApsaraDB RDS resources.
        
    -   AliyunRDSFullAccess: the permissions to manage ApsaraDB RDS resources.
        
    
    **Note**
    
    To access ApsaraDB RDS as a RAM user, you need to attach only the AliyunRDSReadOnlyAccess policy to the RAM user based on the principle of least privilege.
    
    Alibaba Cloud DevOps
    
    -   AliyunRDCReadOnlyAccess: the read-only permissions on Apsara DevOps RDC resources.
        
    -   AliyunRDCFullAccess: the permissions to manage Apsara DevOps RDC resources.
        
    
    **Note**
    
    To access ApsaraDB RDS as a RAM user, you need to attach only the AliyunRDCReadOnlyAccesss policy to the RAM user based on the principle of least privilege.
    

**Important**

If you cannot update triggers as a RAM user after you attach a trigger-related policy, for example, AliyunOSSFullAccess, to the RAM user by using an Alibaba Cloud account, you need to attach the following custom policy to the RAM user by using the Alibaba Cloud account. After the custom policy is attached, you can update the OSS event triggers as the RAM user.

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

In addition to system policies, Function Compute supports custom policies that allow you to grant fine-grained permissions to RAM users. For more information about policies, see [Policy elements](/help/en/ram/policy-elements#concept-xg5-51g-xdb).

**Action**

**Resource**

**Description**

fc:GetAsyncTask

acs:fc:{region}:{uid}:functions/{functionName}/async-tasks/{taskId}

Asynchronous tasks

fc:StopAsyncTask

acs:fc:{region}:{uid}:functions/{functionName}/async-tasks/{taskId}

fc:ListAsyncTasks

acs:fc:{region}:{uid}:functions/{functionName}/async-tasks/\*

fc:ListFunctionAsyncInvokeConfigs

acs:fc:{region}:{uid}:async-invoke-configs/\* acs:fc:{region}:{uid}:functions/{functionName}

Asynchronous invocation configurations

fc:ListConcurrencyConfigs

acs:fc:{region}:{uid}:concurrency-configs/\* acs:fc:{region}:{uid}:functions/{functionName}

Concurrency configurations

fc:ListCustomDomains

acs:fc:{region}:{uid}:custom-domains/\*

All custom domain names

fc:GetCustomDomain

acs:fc:{region}:{uid}:custom-domains/{domainName}

Specified custom domain names

fc:DeleteCustomDomain

fc:UpdateCustomDomain

fc:CreateCustomDomain

fc:ListFunctions

acs:fc:{region}:{uid}:functions/\*

All function resources

fc:DeleteConcurrencyConfig

acs:fc:{region}:{uid}:functions/{functionName}

fc:PutConcurrencyConfig

acs:fc:{region}:{uid}:functions/{functionName}

fc:DeleteFunction

acs:fc:{region}:{uid}:functions/{functionName}

fc:UpdateFunction

acs:fc:{region}:{uid}:functions/{functionName}

fc:CreateFunction

acs:fc:{region}:{uid}:functions/{functionName}

fc:GetConcurrencyConfig

acs:fc:{region}:{uid}:functions/{functionName}

fc:GetFunction

acs:fc:{region}:{uid}:functions/{functionName}

fc:ListAliases

acs:fc:{region}:{uid}:functions/{functionName}/aliases/\*

All aliases

fc:CreateAlias

acs:fc:{region}:{uid}:functions/{functionName}/aliases/{aliasName}

Specified aliases

fc:UpdateAlias

acs:fc:{region}:{uid}:functions/{functionName}/aliases/{aliasName}

fc:GetAlias

acs:fc:{region}:{uid}:functions/{functionName}/aliases/{aliasName}

fc:DeleteAlias

acs:fc:{region}:{uid}:functions/{functionName}/aliases/{aliasName}

fc:ListInstances

acs:fc:{region}:{uid}:functions/{functionName}/instances/\*

Instance information

fc:ListTriggers

acs:fc:{region}:{uid}:functions/{functionName}/triggers/\*

All trigger resources under the specified function

fc:CreateTrigger

acs:fc:{region}:{uid}:functions/{functionName}/triggers/{triggerName}

Specific trigger resources under the specified function

fc:UpdateTrigger

acs:fc:{region}:{uid}:functions/{functionName}/triggers/{triggerName}

fc:GetTrigger

acs:fc:{region}:{uid}:functions/{functionName}/triggers/{triggerName}

fc:DeleteTrigger

acs:fc:{region}:{uid}:functions/{functionName}/triggers/{triggerName}

fc:PublishFunctionVersion

acs:fc:{region}:{uid}:functions/{functionName}/versions

All versions

fc:ListFunctionVersions

acs:fc:{region}:{uid}:functions/{functionName}/versions/\*

fc:DeleteFunctionVersion

acs:fc:{region}:{uid}:functions/{functionName}/versions/{versionId}

Specified versions

fc:ListVpcBindings

acs:fc:{region}:{uid}:functions/{functionName}/vpc-bindings/\*

VPC configurations

fc:CreateVpcBinding

acs:fc:{region}:{uid}:functions/{functionName}/vpc-bindings/\*

fc:DeleteVpcBinding

acs:fc:{region}:{uid}:functions/{functionName}/vpc-bindings/{vpcId}

fc:GetFunctionCode

acs:fc:{region}:{uid}:functions/{functionName} acs:fc:{region}:{uid}:functions/{functionName}/{qualifier}

All function code

fc:GetFunctionAsyncInvokeConfig

acs:fc:{region}:{uid}:functions/{functionName} acs:fc:{region}:{uid}:functions/{functionName}/{qualifier}

All function resources

fc:DeleteProvisionConfig

acs:fc:{region}:{uid}:functions/{functionName} acs:fc:{region}:{uid}:functions/{functionName}/{qualifier}

fc:PutProvisionConfig

acs:fc:{region}:{uid}:functions/{functionName} acs:fc:{region}:{uid}:functions/{functionName}/{qualifier}

fc:InvokeFunction

acs:fc:{region}:{uid}:functions/{functionName} acs:fc:{region}:{uid}:functions/{functionName}/{qualifier}

fc:PutFunctionAsyncInvokeConfig

acs:fc:{region}:{uid}:functions/{functionName} acs:fc:{region}:{uid}:functions/{functionName}/{qualifier}

fc:GetProvisionConfig

acs:fc:{region}:{uid}:functions/{functionName} acs:fc:{region}:{uid}:functions/{functionName}/{qualifier}

fc:DeleteFunctionAsyncInvokeConfig

acs:fc:{region}:{uid}:functions/{functionName} acs:fc:{region}:{uid}:functions/{functionName}/{qualifier}

fc:GetLayerVersionByArn

acs:fc:{region}:{uid}:layerarn/{arn}

All layers

fc:ListLayers

acs:fc:{region}:{uid}:layers/\*

fc:PutLayerACL

acs:fc:{region}:{uid}:layers/{layerName}

fc:ListLayerVersions

acs:fc:{region}:{uid}:layers/{layerName}/versions/\*

fc:CreateLayerVersion

acs:fc:{region}:{uid}:layers/{layerName}/versions/\*

fc:DeleteLayerVersion

acs:fc:{region}:{uid}:layers/{layerName}/versions/{version}

fc:GetLayerVersion

acs:fc:{region}:{uid}:layers/{layerName}/versions/{version}

fc:ListProvisionConfigs

acs:fc:{region}:{uid}:provision-configs/\* acs:fc:{region}:{uid}:functions/{functionName}

Provisioned instance configurations

You can use the preceding custom policy to configure the permissions to invoke the _demo_ function in the China (Hangzhou) region. The following code snippet shows the details:

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "fc:InvokeFunction"
            ],
            "Resource": "acs:fc:cn-hangzhou:*:functions/demo",
            "Effect": "Allow"
        }
    ]
}
```

## Sample policies

### Custom policy to create and query services and create and invoke functions

```
{
	"Version": "1",
	"Statement": [{
			"Action": [
				"fc:CreateFunction",
				"fc:GetFunction",
				"fc:InvokeFunction"
			],
			"Resource": "*",
			"Effect": "Allow"
		},
		{
			"Action": [
				"ram:PassRole"
			],
			"Effect": "Allow",
			"Resource": "*"
		}
	]
}
```

### Custom policy to access logs

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

### Custom policy to access OSS event triggers

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

### Custom policy to forbid creation of services that can access the Internet

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "fc:UpdateFunction",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "fc:EnableServiceInternetAccess": "true"
        }
      }
    },
    {
      "Action": "fc:CreateFunction",
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

### Custom policy to forbid creation of services that are not allowed to access Simple Log Service

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "fc:UpdateFunction",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "fc:EnableServiceSLSLogging": "false"
        }
      }
    },
    {
      "Action": "fc:CreateFunction",
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

### Custom policy to forbid creation of triggers that can be accessed over the Internet

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
          "fc:EnableHTTPTriggerInternet": "true"
        }
      }
    },
    {
      "Action": "fc:CreateTrigger",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "fc:EnableHTTPTriggerInternet": "true"
        }
      }
    }
  ]
}
```

This policy prohibits users from setting the `disableURLInternet` parameter to `false` in the [CreateTrigger](/help/en/functioncompute/fc/developer-reference/api-fc-2023-03-30-createtrigger) and [UpdateTrigger](/help/en/functioncompute/fc/developer-reference/api-fc-2023-03-30-updatetrigger) operations. The value of this parameter can be set only to `true`, which indicates that default public domain names are not supported. This limit applies only to HTTP triggers. For more information, see [HTTPTriggerConfig](/help/en/functioncompute/fc/developer-reference/api-fc-2023-03-30-struct-httptriggerconfig).

In this case, the `403 AccessDenied` error is reported if you set `disableURLInternet=false`. The following code provides an example:

```
{
  "statusCode":403,
  "Code":"AccessDenied",
  "Message":"the caller is not authorized to perform 'fc:CreateTrigger' on resource 'acs:fc:xx:xx:functions/xx/triggers/xx' with condition '[fc:EnableHTTPTriggerInternet=true]'"
}
```

### **Custom policy to forbid creation of triggers that can be accessed in anonymous mode**

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

This policy prohibits users from setting the `authType` parameter to `anonymous` in the [CreateTrigger](/help/en/functioncompute/fc/developer-reference/api-fc-2023-03-30-createtrigger) and [UpdateTrigger](/help/en/functioncompute/fc/developer-reference/api-fc-2023-03-30-updatetrigger) operations. The value of this parameter can be set only to `function`, which specifies that authentication is required. This limit applies only to HTTP triggers. For more information, see [HTTPTriggerConfig](/help/en/functioncompute/fc/developer-reference/api-fc-2023-03-30-struct-httptriggerconfig).

In this case, the `403 AccessDenied` error is reported if you set `authType=anonymous`. The following code provides an example:

```
{
  "statusCode":403,
  "Code":"AccessDenied",
  "Message":"the caller is not authorized to perform 'fc:CreateTrigger' on resource 'acs:fc:xx:xx:functions/xx/triggers/xx' with condition '[fc:EnableHTTPTriggerAnonymous=true]'"
}
```

### Custom policy to forbid creation of custom domain names that allow HTTP requests

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "fc:CreateCustomDomain",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "fc:EnableCustomDomainHTTP": "true"
        }
      }
    },
    {
      "Action": "fc:UpdateCustomDomain",
      "Effect": "Deny",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "fc:EnableCustomDomainHTTP": "true"
        }
      }
    }
  ]
}
```

This policy prohibits users from setting the `protocol` parameter to `HTTP` or `HTTP,HTTPS` in the [CreateCustomDomain](/help/en/functioncompute/fc/developer-reference/api-fc-2023-03-30-createcustomdomain) and [UpdateCustomDomain](/help/en/functioncompute/fc/developer-reference/api-fc-2023-03-30-updatecustomdomain) operations. You can set this parameter to only `HTTPS`.

The `403 AccessDenied` error is reported if you attempt to enable `HTTP` for a custom domain name. The following code provides an example:

```
{
  "statusCode":403,
  "Code":"AccessDenied",
  "Message":"the caller is not authorized to perform 'fc:CreateCustomDomain' on resource 'acs:fc:xxx:xxx:custom-domains/xxx' with condition '[fc:EnableCustomDomainHTTP=true]'"
}
```
