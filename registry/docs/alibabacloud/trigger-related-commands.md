The FC component is a tool that is developed based on Serverless Devs in Function Compute. With this tool, you can run interactive commands to call the Function Compute API.

## Prerequisites

-   [Install Serverless Devs and Docker](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
    
-   [Create a service](/help/en/functioncompute/fc-2-0/developer-reference/service-related-commands#section-fz6-8jk-90k)
    
-   [Create a function](/help/en/functioncompute/fc-2-0/developer-reference/function-related-commands#section-74a-892-o2g)
    
-   **(Optional)** [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb)
    
    If you want to create Object Storage Service (OSS) triggers, you must create buckets.
    
    **Note**
    
    The buckets and your functions must reside in the same region.
    
-   **(Optional)** [Create a topic](/help/en/mns/create-a-topic#task141)
    
    If you want to create Message Service (MNS) triggers, you must create topics.
    
-   **(Optional)** When you create a Tablestore trigger, perform the following operations:
    
    1.  [Create a Tablestore instance](/help/en/tablestore/create-instances#task472)
        
    2.  [Create tables](/help/en/tablestore/create-tables#task-55212-zh).
        
-   **(Optional)** When you create an Alibaba Cloud CDN (CDN) trigger, perform the following operations:
    
    -   [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb)
        
    -   [Add a domain name](/help/en/cdn/add-a-domain-name#task-678836)
        

## Create a trigger

Command syntax:

```
sudo s cli fc api CreateTrigger --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName"}' --body '{"invocationRole": "role","qualifier": "version or alias","sourceArn": "ARN","triggerName": "triggerName","triggerConfig": "triggerconfig","triggerType": "triggertype"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    

-   (Required) \--serviceName string: the service name.
    
-   (Required) \--functionName string: the function name.
    

-   body
    
    -   (Optional) \--qualifier string: the service alias or version.
        
    -   (Required) \--invocationRole string: the role that is required by the trigger to trigger the function.
        
    -   (Required) \--sourceArn string: The Alibaba Cloud Resource Name (ARN) of the event source.
        
    -   (Required) \--triggerConfig string: the trigger configurations.
        
    -   (Required) \--triggerName string: the trigger name.
        
    -   (Required) \--triggerType string: the trigger type. The following types of triggers are supported: Alibaba Cloud Object Storage Service (OSS) event triggers, Simple Log Service triggers, time triggers, HTTP triggers, Tablestore triggers, Alibaba Cloud CDN (CDN) event triggers, and Message Service (MNS) topic triggers.
        
    

Sample code:

-   Run the following command in macOS or Linux:
    
    ```
    sudo s cli fc api CreateTrigger --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest"}' --body '{"triggerName": "mytrigger","triggerConfig": {"payload": "", "cronExpression": "@every 1m", "enable": true},"triggerType": "timer"}'
    ```
    
-   Windows
    
    ```
    s cli fc api CreateTrigger --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest"}' --body '{"triggerName": "mytrigger","triggerConfig": {\"payload\": \"\", \"cronExpression\": \"@every 1m\", \"enable\": true},"triggerType": "timer"}'
    ```
    

For more information about the API operation for creating a trigger, see [CreateTrigger](/help/en/functioncompute/fc-2-0/developer-reference/api-createtrigger#doc-api-FC-CreateTrigger).

## Delete a trigger

Command syntax:

```
sudo s cli fc api DeleteTrigger --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName","triggerName": "triggerName"}' --header '{"If-Match": "testName"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    

-   (Required) \--serviceName string: the service name.
    
-   (Required) \--functionName string: the function name.
    
-   (Required) \--triggerName string: the trigger name.
    

-   header
    
    -   (Optional) \--If-Match string: ensures that the changed resource is the resource that you want to change.
        
    

Sample code:

```
sudo s cli fc api DeleteTrigger --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest","triggerName": "mytrigger"}'
```

For more information about the API operation for deleting a trigger, see [DeleteTrigger](/help/en/functioncompute/fc-2-0/developer-reference/api-deletetrigger#doc-api-FC-DeleteTrigger).

## Update a trigger

Command syntax:

```
sudo s cli fc api UpdateTrigger --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName","triggerName": "triggerName"}' --body '{"invocationRole": "role","qualifier": "version or alias","triggerConfig": {"payload": "", "cronExpression": "cronExpression", "enable": "true or false"}}' --header '{"If-Match": "test"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    -   (Required) \--functionName string: the function name.
        
    -   (Required) \--triggerName string: the trigger name.
        
    
-   body
    
    -   (Required) \--invocationRole string: the role that is required by the trigger to trigger the function.
        
    -   (Required) \--qualifier string: the service alias or version.
        
    -   (Required) \--triggerConfig string: the trigger configurations.
        
    
-   header
    
    -   (Optional) \--If-Match string: ensures that the changed resource is the resource that you want to change.
        
    

Sample code:

-   Run the following command in macOS or Linux:
    
    ```
    sudo s cli fc api UpdateTrigger --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest","triggerName": "mytrigger"}' --body '{"triggerConfig": {"payload": "", "cronExpression": "@every 1m", "enable": false}}'
    ```
    
-   Windows
    
    ```
    s cli fc api UpdateTrigger --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest","triggerName": "mytrigger"}' --body '{"triggerConfig": {\"payload\": \"\", \"cronExpression\": \"@every 1m\", \"enable\": false}}'
    ```
    

For more information about the API operation for updating a trigger, see [UpdateTrigger](/help/en/functioncompute/fc-2-0/developer-reference/api-updatetrigger#doc-api-FC-UpdateTrigger).

## Query the configurations of a trigger

Command syntax:

```
sudo s cli fc api GetTrigger --region <regionid> --access <accessName> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName","triggerName": "triggerName"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    -   (Required) \--functionName string: the function name.
        
    -   (Required) \--triggerName string: the trigger name.
        
    

Sample code:

```
sudo s cli fc api GetTrigger --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest","triggerName": "mytrigger"}'
```

For more information about the API operation for querying the configurations of a trigger, see [GetTrigger](/help/en/functioncompute/fc-2-0/developer-reference/api-gettrigger#doc-api-FC-GetTrigger).

## Query triggers

Command syntax:

```
sudo s cli fc api ListTriggers --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","functionName": "functionName"}' --query '{"limit": "limit","nextToken": "nextToken","prefix": "prefix","startKey": "startKey"}'
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
        
    -   (Optional) \--prefix string: the name prefix of the returned resources.
        
    -   (Optional) \--startKey string: specifies that results are returned alphabetically starting from the first after startKey (including startKey).
        
    

Sample code:

```
sudo s cli fc api ListTriggers --region cn-hangzhou --access default --path '{"serviceName": "mytest","functionName": "mytest"}'
```

For more information about the API operation for query triggers, see [ListTriggers](/help/en/functioncompute/fc-2-0/developer-reference/api-listtriggers#doc-api-FC-ListTriggers).
