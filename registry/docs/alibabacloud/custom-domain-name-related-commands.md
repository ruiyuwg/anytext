The FC component is an operation tool developed for Alibaba Cloud Function Compute based on Serverless Devs. You can use this tool to call API operations related to custom domain names by running interactive commands.

## Before you start

Before you start, make sure that the following operations are performed:

-   [Install Serverless Devs and Docker](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
    
-   [Create a service](/help/en/functioncompute/fc-2-0/developer-reference/service-related-commands#section-fz6-8jk-90k)
    
-   [Create an HTTP function](/help/en/functioncompute/fc-2-0/developer-reference/function-related-commands#section-74a-892-o2g)
    

## Create a custom domain name

Syntax:

```
sudo s cli fc api CreateCustomDomain --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --body '{"domainName": "domainName","protocol": "protocoltype","certConfig": "certconfig","routeConfig": "routeconfig"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   body
    
    -   (Required) \--domainName string: the custom domain name.
        
    -   (Required) \--domainName string: the custom domain name.
        
    -   (Required) \--protocol string: the protocol type of the custom domain name. Valid values: `HTTP` and `HTTP,HTTPS`.
        
    -   (Required) \--certConfig string: the HTTPS certificate.
        
    

Sample code:

```
sudo s cli fc api CreateCustomDomain --region cn-hangzhou --apiVersion 20210406 --body '{"domainName": "41055826-1034354682****.example.com","routeConfig":{"routes":[{"path": "/login/*","serviceName": "mytest","functionName": "mytest","qualifier": "LATEST"}]}}'
```

For more information about the API operation for creating a custom domain name, see [CreateCustomDomain](/help/en/functioncompute/fc-2-0/developer-reference/api-createcustomdomain#doc-api-FC-CreateCustomDomain).

## Delete a custom domain name

Syntax:

```
sudo s cli fc api DeleteCustomDomain --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --path '{"domainName": "domainName"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--domainName string: the custom domain name.
        
    

Sample code:

```
sudo s cli fc api DeleteCustomDomain --region cn-hangzhou --path '{"domainName": "41055826-1034354682****.example.com"}'
```

For more information about the API operation for deleting a custom domain name, see [DeleteCustomDomain](/help/en/functioncompute/fc-2-0/developer-reference/api-deletecustomdomain#doc-api-FC-DeleteCustomDomain).

## Update a custom domain name

Syntax

```
sudo s cli fc api UpdateCustomDomain --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --body '{"domainName": "domainName","protocol": "protocoltype","certConfig": "certconfig","routeConfig": "routeconfig"}'
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--domainName string: the custom domain name.
        
    
-   body
    
    -   (Required) \--protocol string: the protocol type of the custom domain name. Valid values: `HTTP` and `HTTP,HTTPS`.
        
    -   (Required) \--certConfig string: the HTTPS certificate.
        
    -   (Required) \--routeConfig string: the route table. The route table maps paths to the function when the function is invoked by using the custom domain name.
        
    

Sample code:

```
sudo s cli fc api UpdateCustomDomain --region cn-hangzhou --access default --apiVersion 20210406 --path '{"domainName": "41055826-1034354682****.example.com"}' --body '{"routeConfig": {"routes":[{"path": "/login/*","serviceName": "mytest","functionName": "mytest","qualifier": "LATEST"}]}}'
```

For more information about the API operation for updating a custom domain name, see [UpdateCustomDomain](/help/en/functioncompute/fc-2-0/developer-reference/api-updatecustomdomain#doc-api-FC-UpdateCustomDomain).

## Query the information about a custom domain name

Syntax:

```
sudo s cli fc api GetCustomDomain --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --domainName <domainName>
```

Parameters:

-   (Required) \--region string: the region in which you want to deploy resources.
    
-   (Optional) \--access string or \-a string: the alias of the key to be used.
    
-   (Optional) \--apiVersion: the API version. Valid values: 20210416 and 20160815.
    
-   path
    
    -   (Required) \--domainName string: the custom domain name.
        
    

Sample code:

```
sudo s cli fc api GetCustomDomain --region cn-hangzhou --path '{"domainName": "41055826-1034354682****.example.com"}'
```

For more information about the API operation for querying the information about a custom domain name, see [GetCustomDomain](/help/en/functioncompute/fc-2-0/developer-reference/api-getcustomdomain#doc-api-FC-GetCustomDomain).

## Query custom domain names

Syntax:

```
sudo s cli fc api ListCustomDomains --region <regionid> --access <accessname> --apiVersion <20210406 or 20160815> --query '{"limit": "limit","nextToken": "nextToken","prefix": "prefix","startKey": "startKey"}'
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
sudo s cli fc api ListCustomDomains --region cn-hangzhou --query '{"limit": "10"}'
```

For more information about the API operation for querying custom domain names, see [ListCustomDomains](/help/en/functioncompute/fc-2-0/developer-reference/api-listcustomdomains#doc-api-FC-ListCustomDomains).
