The FC component is a tool that is developed based on Serverless Devs in Function Compute. You can use this tool to run interactive commands to call the Function Compute API.

## Prerequisites

Before you start, make sure that the following operations are performed:

-   [Install Serverless Devs and Docker](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
    

## Create a service

Command syntax:

```
sudo s cli fc api CreateService --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --body '{"description": "description","internetAccess": true or false,"logConfig": "logconfig","nasConfig": "nasconfig","role": "ram role","serviceName": "serviceName","vpcConfig": "vpcconfig","tracingConfig": "tracingconfig"}' 
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   body
    
    -   (Optional) \--description string: the service description.
        
    -   (Optional) \--internetAccess string: Specifies whether to allow the function to access the Internet. Valid values: `true` and `false`.
        
    -   (Optional) \--logConfig string: the logging configuration. You can use this parameter to specify a Logstore to store function logs.
        
    -   (Optional) \--nasConfig string: the File Storage NAS (NAS) configuration. You can use this parameter to specify a NAS file system for the function to access.
        
    -   (Optional) \--role string: the Resource Access Management (RAM) role.
        
    -   (Required) \--serviceName string: the service name.
        
    -   (Optional) \--vpcConfig string: the virtual private cloud (VPC) configuration. You can use this parameter to specify a VPC that can be accessed by the function.
        
    -   (Optional) \--tracingConfig string: specifies whether to enable Managed Service for OpenTelemetry. Valid values: `Enable` and `Disable`.
        
    

Sample code:

```
sudo s cli fc api CreateService --region cn-hangzhou --access default --body '{"description": "mytest","serviceName": "mytest"}'
```

For more information about the API operation for creating a service, see [CreateService](/help/en/functioncompute/fc-2-0/developer-reference/api-createservice#doc-api-FC-CreateService).

## Delete a service

Command syntax:

```
sudo s cli fc api DeleteService --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName"}' --header '{"If-Match": "serviceName"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    
-   header
    
    -   (Optional) \--If-Match string: ensures that the changed resource is the resource that you want to change.
        
    

Sample code:

```
sudo s cli fc api DeleteService --region cn-hangzhou --access default --path '{"serviceName": "mytest"}' 
```

For more information about the API operation for deleting a service, see [DeleteService](/help/en/functioncompute/fc-2-0/developer-reference/api-deleteservice#doc-api-FC-DeleteService).

## Update a service

Command syntax:

```
sudo s cli fc api UpdateService --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName"}' --body '{"description": "description","internetAccess": true or false,"role": "ram role","logConfig": "logconfig","nasConfig": "nasconfig","vpcConfig": "vpcconfig","tracingConfig": "tracingconfig"}' --header'{"If-Match": "serviceName "}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    
-   body
    
    -   (Optional) \--description string: the service description.
        
    -   (Optional) \--internetAccess string: Specifies whether to allow the function to access the Internet. Valid values: `true` and `false`.
        
    -   (Optional) \--role string: the Resource Access Management (RAM) role.
        
    -   (Optional) \--logConfig string: the logging configuration. You can use this parameter to specify a Logstore to store function logs.
        
    -   (Optional) \--nasConfig string: the File Storage NAS (NAS) configuration. You can use this parameter to specify a NAS file system for the function to access.
        
    -   (Optional) \--vpcConfig string: the virtual private cloud (VPC) configuration. You can use this parameter to specify a VPC that can be accessed by the function.
        
    -   (Optional) \--tracingConfig string: specifies whether to enable Managed Service for OpenTelemetry. Valid values: `Enable` and `Disable`.
        
    
-   header
    
    -   (Optional) \--If-Match string: ensures that the changed resource is the resource that you want to change.
        
    

Sample code:

```
sudo s cli fc api UpdateService --region cn-hangzhou --access default --path '{"serviceName": "mytest"}' --body '{"internetAccess": false}' 
```

For more information about the API operation for updating a service, see [UpdateService](/help/en/functioncompute/fc-2-0/developer-reference/api-updateservice#doc-api-FC-UpdateService).

## Query the configurations of a service

Command syntax:

```
sudo s cli fc api GetService --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"serviceName": "serviceName","qualifier": "version or alias"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--serviceName string: the service name.
        
    -   (Optional) \--qualifier string: the service alias or version.
        
    

Sample code:

```
sudo s cli fc api GetService --region cn-hangzhou --access default --path '{"serviceName": "mytest","qualifier": "LATEST"}'
```

For more information about the API operation for querying configurations of a service, see [GetService](/help/en/functioncompute/fc-2-0/developer-reference/api-getservice#doc-api-FC-GetService).

## Query services

Command syntax:

```
sudo s cli fc api ListServices --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --query '{"limit": "limit","nextToken": "nextToken","prefix": "prefix","startKey": "startKey"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   query
    
    -   (Optional) \--limit string: the number of resources to return.
        
    -   (Optional) \--nextToken string: the token that you can use to return more results. Include this parameter in subsequent invocations to obtain more results. You do not need to provide this parameter in the first invocation.
        
    -   (Optional) \--prefix string: the name prefix of the returned resources.
        
    -   (Optional) \--startKey string: specifies that results are returned alphabetically starting from the first after startKey (including startKey).
        
    

Sample code:

```
sudo s cli fc api ListServices --region cn-hangzhou --access default --query '{"limit": "10","prefix": "my"}'
```

For more information about the API operation for querying services, see [ListServices](/help/en/functioncompute/fc-2-0/developer-reference/api-listservices#doc-api-FC-ListServices).
