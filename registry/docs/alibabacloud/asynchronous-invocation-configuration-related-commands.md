The FC component is an operation tool developed for Alibaba Cloud Function Compute based on Serverless Devs. You can use this tool to call API operations related to asynchronous function invocation by running interactive commands.

## **Before you start**

Before you start, make sure that the following operations are performed:

-   [Install Serverless Devs and Docker](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
    
-   [Create a service](/help/en/functioncompute/fc-2-0/developer-reference/service-related-commands#section-fz6-8jk-90k)
    
-   [Create a function.](/help/en/functioncompute/fc-2-0/developer-reference/function-related-commands#section-74a-892-o2g)
    

## **Create or update an asynchronous invocation configuration**

Syntax:

```
sudo s cli fc api PutFunctionAsyncInvokeConfig --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName","qualifier": "qualifier"}' --body '{"destinationConfig": "destinationConfig","maxAsyncEventAgeInSeconds": "maxAsyncEventAgeInSeconds","maxAsyncRetryAttempts": "maxAsyncRetryAttempts","statefulInvocation": "true or false"}'
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
    
    -   (Optional) \--destinationConfig: the destination of asynchronous invocations.
        
    -   (Optional) \--maxAsyncEventAgeInSeconds: the maximum time-to-live (TTL) of messages.
        
    -   (Optional) \--maxAsyncRetryAttempts: the maximum number of retries.
        
    -   (Optional) \--statefulInvocation: specifies whether to enable stateful asynchronous invocation. Valid values: `true` and `false`.
        
    

Sample code:

```
sudo s cli fc api PutFunctionAsyncInvokeConfig --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest"}' --body '{"statefulInvocation": true}'
```

For more information about the API operation for creating or updating an asynchronous invocation configuration, see [PutFunctionAsyncInvokeConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-putfunctionasyncinvokeconfig).

## Delete an asynchronous invocation configuration

Syntax:

```
sudo s cli fc api DeleteFunctionAsyncInvokeConfig --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName","qualifier": "qualifier"}'
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
sudo s cli fc api DeleteFunctionAsyncInvokeConfig --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest"}'
```

For more information about the API operation for deleting an asynchronous invocation configuration, see [DeleteFunctionAsyncInvokeConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-deletefunctionasyncinvokeconfig#doc-api-FC-GetFunctionAsyncInvokeConfig).

## Query an asynchronous invocation configuration

Syntax:

```
sudo s cli fc api GetFunctionAsyncInvokeConfig --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName","qualifier": "qualifier"}'
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
sudo s cli fc api GetFunctionAsyncInvokeConfig --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest"}'
```

For more information about the API operation for querying an asynchronous invocation configuration, see [GetFunctionAsyncInvokeConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-getfunctionasyncinvokeconfig#doc-api-FC-GetFunctionAsyncInvokeConfig).

## Query asynchronous invocation configurations

Syntax:

```
sudo s cli fc api ListFunctionAsyncInvokeConfigs --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName"}' --query '{"limit": "limit","nextToken": "nextToken"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    -   (Required) \--functionName string: the function name.
        
    
-   query
    
    -   (Optional) \--limit string: the number of resources to return.
        
    -   (Optional) \--nextToken string: the token that you can use to return more results. Include this parameter in subsequent invocations to obtain more results. You do not need to provide this parameter in the first invocation.
        
    

Sample code:

```
sudo s cli fc api ListFunctionAsyncInvokeConfigs --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest"}' --query'{"limit":"10"}'
```

For more information about the API operation for querying asynchronous invocation configurations, see [ListFunctionAsyncInvokeConfigs](/help/en/functioncompute/fc-2-0/developer-reference/api-listfunctionasyncinvokeconfigs).
