The FC component is an operation tool developed for Alibaba Cloud Function Compute based on Serverless Devs. You can use this tool to call API operations related to provisioned configurations by running interactive commands.

## Before you start

Before you start, make sure that the following operations are performed:

-   [Install Serverless Devs and Docker](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
    
-   [Create a service](/help/en/functioncompute/fc-2-0/developer-reference/service-related-commands#section-fz6-8jk-90k)
    
-   [Create a version](/help/en/functioncompute/fc-2-0/developer-reference/version-related-commands#section-3u1-sxu-jbc).
    
-   [Create an alias](/help/en/functioncompute/fc-2-0/developer-reference/alias-related-commands#section-6qk-ybz-ad3)
    

## Set a provisioned configuration

Syntax:

```
sudo s cli fc api PutProvisionConfig --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName","qualifier": "qualifier"}' --body'{"target": "target","scheduledActions": "The configuration of scheduled auto scaling","targetTrackingPolicies": "The configuration of metric tracking auto scaling","name": "scheduled name","startTime": "startTime","endTime": "endTime","metricType": "metricType","metricTarget": "metricTarget","minCapacity": "minCapacity","maxCapacity": "maxCapacity"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    -   (Required) \--functionName string: the function name.
        
    -   (Optional) \--qualifier string: the service alias or version.
        
    
-   body
    
    -   (Optional) \--target number: the target number of provisioned instances. To delete provisioned instances, set this parameter to 0.
        
    -   (Optional) \--scheduledActions string: the scheduled scaling policy. You can use scheduled scaling policies to flexibly configure provisioned instances. For example, you can set a number of provisioned instances for a specific point in time based on your business requirements.
        
    -   (Optional) \--targetTrackingPolicies string: the metric-based scaling policy. Provisioned instances are scaled in or scaled out every minute based on the concurrency utilization of provisioned instances.
        
    

Sample code:

```
sudo s cli fc api PutProvisionConfig --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest","qualifier": "LATEST"}'  --body '{"target": 2}'
```

For more information about the API operation for setting provisioned configurations, see [PutProvisionConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-putprovisionconfig#doc-api-FC-PutProvisionConfig).

## Query provisioned configurations

Syntax:

```
sudo s cli fc api GetProvisionConfig  --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName","qualifier": "qualifier"}' --body '{"target": "target"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    -   (Required) \--functionName string: the function name.
        
    -   (Optional) \--qualifier string: the service alias or version.
        
    

Sample code:

```
sudo s cli fc api GetProvisionConfig  --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest","qualifier": "LATEST"}'
```

For more information about the API operation for querying provisioned configurations, see [GetProvisionConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-getprovisionconfig#doc-api-FC-GetProvisionConfig).

## Query provisioned configurations

Syntax:

```
sudo s cli fc api ListProvisionConfigs --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --query '{"limit": "limit","nextToken": "nextToken","serviceName": "serviceName","qualifier": "qualifier"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--qualifier string: the service alias or version.
    
-   query
    
    -   (Optional) \--limit string: the number of resources to return.
        
    -   (Optional) \--nextToken string: the token that you can use to return more results. Include this parameter in subsequent invocations to obtain more results. You do not need to provide this parameter in the first invocation.
        
    -   (Optional) \--serviceName string: the service name.
        
    -   (Optional) \--qualifier string: the service alias or version.
        
    

Sample code:

```
sudo s cli fc api ListProvisionConfigs --region cn-hangzhou --access default --query '{"serviceName":"mytest"}'
```

For more information about the API operation for querying provisioned configurations, see [ListProvisionConfigs](/help/en/functioncompute/fc-2-0/developer-reference/api-listprovisionconfigs#doc-api-FC-ListProvisionConfigs).
