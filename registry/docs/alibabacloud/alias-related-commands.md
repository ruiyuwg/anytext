The FC component is a tool that is developed based on Serverless Devs in Function Compute. With this tool, you can run interactive commands to call the Function Compute API.

## Prerequisites

Before you start, make sure that the following operations are performed:

-   [Install Serverless Devs and Docker](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
    
-   [Create a service](/help/en/functioncompute/fc-2-0/developer-reference/service-related-commands#section-fz6-8jk-90k)
    
-   [Create a version](/help/en/functioncompute/fc-2-0/developer-reference/version-related-commands#section-3u1-sxu-jbc)
    

## Create an alias

Command syntax:

```
sudo s cli fc api CreateAlias --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName"}' --body '{"additionalVersionWeight": "additionalVersionWeight","aliasName": "aliasname","description": "description","versionId": "versionid"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    
-   body
    
    -   (Optional) \--aliasName string: the service alias.
        
    -   (Optional) \--versionId string: the version to which the alias points.
        
    -   (Optional) \--additionalVersionWeight string: the canary release version to which the alias points and the weight of the canary release version.
        
    -   (Optional) \--description string: the alias description.
        
    

Sample code:

```
sudo s cli fc api CreateAlias --region cn-hangzhou --access default --path '{"serviceName": "mytest"}' --body '{"aliasName": "aliastest","versionId": "1"}'
```

For more information about the API operations for creating an alias, see [CreateAlias](/help/en/functioncompute/fc-2-0/developer-reference/api-createalias#doc-api-FC-CreateAlias).

## Deletes an alias

Command syntax:

```
sudo s cli fc api DeleteAlias --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","aliasName": "ailasName"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    -   (Required) \--aliasName string: the name of the alias.
        
    

Sample code:

```
sudo s cli fc api DeleteAlias --region cn-hangzhou --access default --path '{"serviceName": "mytest","aliasName": "aliastest"}'
```

For more information about the API operation for deleting an alias, see [DeleteAlias](/help/en/functioncompute/fc-2-0/developer-reference/api-deletealias#doc-api-FC-DeleteAlias).

## Update an alias

Command syntax:

```
sudo s cli fc api UpdateAlias --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","aliasName": "ailasName"}' --body '{"additionalVersionWeight": "additionalVersionWeight","description": "description","versionId": "versionid"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
-   -   (Required) \--serviceName string: the service name.
        
    -   (Required) \--aliasName string: the name of the alias.
        
    
-   body
    
    -   (Optional) \--versionId string: the version to which the alias points.
        
    -   (Optional) \--additionalVersionWeight string: the canary release version to which the alias points and the weight of the canary release version.
        
    -   (Optional) \--description string: the alias description.
        
    

Sample code:

```
sudo s cli fc api UpdateAlias --region cn-hangzhou --access default --path '{"serviceName": "mytest","aliasName": "aliastest"}' --body '{"additionalVersionWeight": {"2":0.05}}'
```

For more information about the API operation for updating an alias, see [UpdateAlias](/help/en/functioncompute/fc-2-0/developer-reference/api-updatealias#doc-api-FC-UpdateAlias).

## Query the information about an alias

Command syntax:

```
sudo s cli fc api GetAlias --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","aliasName": "ailasName"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    -   (Required) \--aliasName string: the name of the alias.
        
    

Sample code:

```
sudo s cli fc api GetAlias --region cn-hangzhou --access default --path '{"serviceName": "mytest","aliasName": "aliastest"}'
```

For more information about the API operation for querying the information about an alias, see [GetAlias](/help/en/functioncompute/fc-2-0/developer-reference/api-getalias#doc-api-FC-GetAlias).

## Query aliases

Command syntax:

```
sudo s cli fc api ListAliases --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName"}' --query '{"limit": "limit","nextToken": "nextToken","prefix": "prefix","startKey": "startKey"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    
-   query
    
    -   (Optional) \--limit string: the number of resources to return.
        
    -   (Optional) \--nextToken string: the token that you can use to return more results. Include this parameter in subsequent invocations to obtain more results. You do not need to provide this parameter in the first invocation.
        
    -   (Optional) \--prefix string: the name prefix of the returned resources.
        
    -   (Optional) \--startKey string: specifies that results are returned alphabetically starting from the first after startKey (including startKey).
        
    

Sample code:

```
sudo s cli fc api ListAliases --region cn-hangzhou --access default --path '{"serviceName": "mytest"}' --query '{"limit": "3"}'
```

For more information about the API operation for querying aliases, see [ListAliases](/help/en/functioncompute/fc-2-0/developer-reference/api-listaliases#doc-api-FC-ListAliases).
