Alibaba Cloud CLI is integrated with Alibaba Cloud services and their API information. You can add the `--help` option in Alibaba Cloud CLI to obtain the help information.

## **Query available services and global options**

You can add the `--help` option to the `aliyun` command to query common command options and supported services.

1.  Run the following command:
    
    ```
    aliyun --help
    ```
    
2.  Sample response (partial):
    
    ```
    shell@Alicloud:~$ aliyun --help
    Alibaba Cloud CLI 3.0.276
    
    Usage:
      aliyun <product> <operation> [--parameter1 value1 --parameter2 value2 ...]
    
    Flags:
      --mode                    Use `--mode {AK|StsToken|RamRoleArn|EcsRamRole|RsaKeyPair|RamRoleArnWithRoleName}` to specify an authentication method.
      --profile,-p              Use `--profile <profileName>` to specify a profile.
      ...
      --help                    Print the help information.
    
    Sample:
      aliyun ecs DescribeRegions
    
    Products:
      actiontrail                  ActionTrail
      adb                          AnalyticDB for MySQL
      adcp                         Distributed Cloud Container Platform for Kubernetes
      ...
    ```
    

## **Query available API operations for a service**

Add the `--help` option after the service code to query a list of available API operations in the service. Descriptions of API operations in the [remote procedure call (RPC) style](/help/en/sdk/product-overview/openapi-style#4e8af5a00fwyr) are displayed. Endpoints of API operations in the [resource-oriented architecture (ROA) style](/help/en/sdk/product-overview/openapi-style#871f36600f35h) are displayed.

**Note**

Alibaba Cloud CLI uses the following indicators before the operation description to indicate the status or characteristics of an operation:

-   `[Anonymous]`: indicates an anonymous operation that can be called without authentication. To call this type of operation. For more information, see [Generic calls](/help/en/sdk/developer-reference/generalized-call-java).
    
-   `[Deprecated]`: indicates that the operation is deprecated. We recommend that you switch to a later version of this operation.
    

## RPC

1.  Run the following command to query the available API operations in Elastic Compute Service (ECS):
    
    ```
    aliyun ecs --help
    ```
    
2.  Expected response:
    
    ```
    shell@Alicloud:~$ aliyun ecs --help
    Alibaba Cloud CLI 3.0.276
    
    Usage:
      aliyun ecs <ApiName> --parameter1 value1 --parameter2 value2 ...
    
    Product: Ecs (ECS)
    Version: 2014-05-26 
    
    Available Api List: 
      AcceptInquiredSystemEvent                          Accepts and authorizes operations on system events. For system events in the Inquiring state, this operation accepts the default operations for the system events and authorizes the system to perform the default operations. 
      ActivateRouterInterface                            [Deprecated] Activates inactive router interfaces. 
      AddBandwidthPackageIps                             [Deprecated]
      AddTags                                            Adds or overwrites one or more tags for ECS resources. You can add tags to ECS resources such as instances, disks, snapshots, images, and security groups for easy management. 
      ...
    ```
    

## ROA

1.  Run the following command to query the available API operations in Container Service for Kubernetes (ACK):
    
    ```
    aliyun cs --help
    ```
    
2.  Expected response:
    
    ```
    shell@Alicloud:~$ aliyun cs --help
    Alibaba Cloud CLI 3.0.276
    
    Usage 1:
      aliyun cs [GET|PUT|POST|DELETE] <PathPattern> --body "..." 
    
    Usage 2 (For API with NO PARAMS in PathPattern only.):
      aliyun cs <ApiName> --parameter1 value1 --parameter2 value2 ... --body "..."
    
    Product: CS (ACK)
    Version: 2015-12-15 
    
    Available Api List: 
      AttachInstances                         : POST /clusters/[ClusterId]/attach
      AttachInstancesToNodePool               : POST /clusters/[ClusterId]/nodepools/[NodepoolId]/attach
      CancelClusterUpgrade                    : POST /api/v2/clusters/[ClusterId]/upgrade/cancel
      CancelComponentUpgrade                  : POST /clusters/[clusterId]/components/[componentId]/cancel
      ...
    ```
    

## **Query API parameter details**

You can add the `--help` option after an API operation to query the parameter details, including the parameter name and parameter type. The request method and endpoint of an [ROA-style](/help/en/sdk/product-overview/openapi-style#871f36600f35h) API operation are also displayed.

## RPC

1.  Run the following command to query the parameter details about the `DescribeRegions` operation of Elastic Compute Service:
    
    ```
    aliyun ecs DescribeRegions --help
    ```
    
2.  Expected response:
    
    ```
    shell@Alicloud:~$ aliyun ecs DescribeRegions --help
    Alibaba Cloud CLI 3.0.276
    
    Product: Ecs (ECS)
    
    Parameters:
      --AcceptLanguage String  Optional
    
      The natural language that is used to filter responses. For more information, see RFC7231 at https://tools.ietf.org/html/rfc7231. Valid values:   
               
      - zh-CN: Chinese 
      - en-US: English. 
      - ja: Japanses 
      
      Default value: zh-CN. 
    
      --InstanceChargeType String  Optional
    
      The billing method of the instance. For more information, see Billing overview. Valid values: 
      
      - PrePaid: subscription. If you set this parameter to PrePaid, make sure that you have sufficient balance or credits in your account. Otherwise, the InvalidPayMethod error code is returned. 
      - PostPaid: pay-as-you-go. 
      
      Default value: PostPaid. 
    
      --ResourceType String  Optional
    
      The type of the resource. Valid values:
      -  instance: ECS instance
      -  disk: disk
      -  reservedinstance: reserved instance
      -  scu: storage capacity unit (SCU)
      
      Default value: instance
    ```
    

## ROA

1.  Run the following command to query the parameter details about the `AttachInstances` operation of Container Service for Kubernetes:
    
    ```
    aliyun cs AttachInstances --help
    ```
    
2.  Expected response:
    
    ```
    shell@Alicloud:~$ aliyun cs AttachInstances --help
    Alibaba Cloud CLI 3.0.276
    
    Product:     CS (ACK)
    Method:      POST
    PathPattern: /clusters/[ClusterId]/attach
    
    Parameters:
      --ClusterId String  Required
    
      The ID of the cluster. 
    
      --body Struct  Optional
    
      The request body parameters.
    ```
