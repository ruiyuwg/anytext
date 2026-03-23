You can call the BatchSetCdnDomainConfig and SetCdnDomainStagingConfig API operations to configure features for multiple domain names at a time. This topic describes the configurable features and their parameters.

**Note**

-   The features described in this topic can be referenced by the following API operations:
    
    -   Production environment: [BatchSetCdnDomainConfig](/help/en/cdn/api-batchsetcdndomainconfig#doc-api-Cdn-BatchSetCdnDomainConfig), [DescribeCdnDomainConfigs](/help/en/cdn/api-describecdndomainconfigs#doc-api-Cdn-DescribeCdnDomainConfigs), [BatchDeleteCdnDomainConfig](/help/en/cdn/api-batchdeletecdndomainconfig#doc-api-Cdn-BatchDeleteCdnDomainConfig), and [DescribeCdnUserDomainsByFunc](/help/en/cdn/api-describecdnuserdomainsbyfunc#doc-api-Cdn-DescribeCdnUserDomainsByFunc).
        
    -   Staging environment: [SetCdnDomainStagingConfig](/help/en/cdn/api-setcdndomainstagingconfig#doc-api-Cdn-SetCdnDomainStagingConfig), [DescribeCdnDomainStagingConfig](/help/en/cdn/api-describecdndomainstagingconfig#doc-api-Cdn-DescribeCdnDomainStagingConfig), [RollbackStagingConfig](/help/en/cdn/api-rollbackstagingconfig#doc-api-Cdn-RollbackStagingConfig), and [PublishStagingConfigToProduction](/help/en/cdn/api-publishstagingconfigtoproduction#doc-api-Cdn-PublishStagingConfigToProduction).
        
-   You can call BatchSetCdnDomainConfig and SetCdnDomainStagingConfig to apply batch configurations to domain names. This generates a unique ConfigId that you can use to update or delete a specific configuration. For more information, see [Using ConfigId](/help/en/cdn/developer-reference/usage-notes-on-configid#concept-2170421).
    

## Basic information

ipv6

-   This feature is used to configure IPv6 access. For more information, see [IPv6 configuration](/help/en/cdn/user-guide/configure-ipv6#task-2039050).
    
-   Function ID (FunctionID/FuncId): 194.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    switch
    
    String
    
    Yes
    
    Specifies whether to enable IPv6 access. Valid values:
    
    -   on: Enables the feature.
        
    -   off: Indicates the shutdown state.
        
    
    on
    
    region
    
    String
    
    Yes
    
    The region where IPv6 is enabled. The wildcard character (\*) is supported.
    
    **Note**
    
    -   The wildcard character (\*) indicates that IPv6 is enabled for all regions. Currently, you can enable IPv6 only for all regions. To enable IPv6 for a specific region, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
        
    -   If you do not specify this parameter, IPv6 is enabled for all regions by default.
        
    
    \*
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "switch",
                "argValue": "on"
            }, {
                "argName": "region",
                "argValue": "*"
            }],
            "functionName": "ipv6"
        }],
        "DomainNames": "example.com"
    }
    ```
    

## Origin fetch configuration

set\_req\_host\_header

-   Description: Configures the default origin fetch HOST. For more information, see [Configure a default origin-fetch HOST](/help/en/cdn/user-guide/configure-the-default-origin-host#task-261642).
    
-   Function ID (FunctionID/FuncId): 18.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    domain\_name
    
    String
    
    Yes
    
    The content of the origin host header.
    
    `example.com`
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "domain_name",
                "argValue": "example.com"
            }],
            "functionName": "set_req_host_header"
        }],
        "DomainNames": "example.com"
    }
    ```
    

forward\_scheme

-   Description: Configures the origin protocol policy. For more information, see [Configure origin protocol policy](/help/en/cdn/user-guide/configure-the-origin-protocol-policy#task-261642).
    
-   Function ID (FunctionID/FuncId): 47.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable the origin protocol policy. Valid values:
    
    -   on: enable.
        
    -   off: disable.
        
    
    on
    
    scheme\_origin
    
    String
    
    No
    
    The origin protocol. Valid values:
    
    -   http: CDN uses HTTP for origin fetch.
        
    -   https: CDN uses HTTPS for origin fetch.
        
    -   follow: CDN uses the same protocol as the client request to fetch content from the origin server.
        
    
    **Note**
    
    If you do not set scheme\_origin, the default value is follow.
    
    follow
    
    scheme\_origin\_port
    
    String
    
    No
    
    The custom origin port. This parameter must be used with the scheme\_origin parameter. Valid values:
    
    -   If scheme\_origin is set to http, you only need to configure an HTTP origin port. Example: 80.
        
    -   If scheme\_origin is set to https, you only need to configure an HTTPS origin port. Example: 443.
        
    -   If scheme\_origin is set to follow, you must configure both HTTP and HTTPS origin ports. Separate the ports with a colon (:). Example: 80:443.
        
    
    80:443
    
-   Configuration example 1: CDN uses the same protocol as the client request for origin fetch. The origin port is the default port for the protocol. Port 80 is used for HTTP, and port 443 is used for HTTPS.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "scheme_origin",
                "argValue": "follow"
            }],
            "functionName": "forward_scheme"
        }],
        "DomainNames": "example.com"
    }
    ```
    
-   Configuration example 2: CDN uses the same protocol as the client request for origin fetch. The origin port is a custom port. Port 8080 is used for HTTP, and port 4433 is used for HTTPS.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "scheme_origin",
                "argValue": "follow"
            }, {
                "argName": "scheme_origin_port",
                "argValue": "8080:4433"
            }],
            "functionName": "forward_scheme"
        }],
        "DomainNames": "example.com"
    }
    ```
    

l2\_oss\_key

-   Configures origin fetch for private OSS buckets. Note: When you use this feature for the first time, you must enable the default access policy in a one-click operation. This grants CDN read-only access permissions to all OSS buckets under your account. For more information, see [Origin fetch for private OSS buckets](/help/en/cdn/user-guide/grant-alibaba-cloud-cdn-access-permissions-on-private-oss-buckets#task-187634).
    
-   Function ID (FunctionID/FuncId): 85.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    private\_oss\_auth
    
    String
    
    Yes
    
    Specifies whether to enable origin fetch from a private bucket. Valid values:
    
    -   on: enable.
        
    -   Off: Indicates a shutdown.
        
    
    When this feature is enabled, the system automatically configures a Security Token Service (STS) token to simplify the configuration. However, this feature supports origin fetch only from an accelerated domain name to a private OSS bucket that is in the same Alibaba Cloud account. For more information about STS tokens, see [What is STS?](/help/en/ram/user-guide/what-is-sts#concept-ong-5nv-xdb).
    
    on
    
    perm\_private\_oss\_tbl
    
    String
    
    No
    
    The configuration for a permanent security token. The format is `access_id=123 access_secret=123abc`. Separate the fields with a space.
    
    After you configure a permanent security token, an accelerated domain name can fetch content not only from a private OSS bucket under the same Alibaba Cloud account but also from one under a different Alibaba Cloud account. For more information about permanent security tokens, see [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479).
    
    access\_id=123 access\_secret=123abc
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "private_oss_auth",
                "argValue": "on"
            },{
                "argName": "perm_private_oss_tbl",
                "argValue": "access_id=123 access_secret=123abc"
            }],
            "functionName": "l2_oss_key"
        }],
        "DomainNames": "example.com"
    }
    ```
    

oss\_key\_list

-   Description: A list of private keys for OSS origin fetch. You can configure one or more rules for different private OSS buckets and their corresponding security tokens.
    
-   Function ID (FunctionID/FuncId): 183.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    host
    
    String
    
    Yes
    
    The full address of the OSS bucket.
    
    example.oss-cn-hangzhou.aliyuncs.com
    
    key
    
    String
    
    Yes
    
    The configuration for a permanent security token. The format is `access_id=123 access_secret=123abc`. Separate the fields with a space.
    
    After you configure a permanent security token, an accelerated domain name can perform an origin fetch not only to a private OSS bucket in the same Alibaba Cloud account, but also to a private OSS bucket in another Alibaba Cloud account. For more information about permanent security tokens, see [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479).
    
    access\_id=123 access\_secret=123abc
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "host",
                "argValue": "example.oss-cn-hangzhou.aliyuncs.com"
            },{
                "argName": "key",
                "argValue": "access_id=123 access_secret=123abc"
            }],
            "functionName": "oss_key_list"
        }],
        "DomainNames": "example.com"
    }
    ```
    

https\_origin\_sni

-   Description: Configures the origin SNI. For more information, see [Configure default origin SNI](/help/en/cdn/user-guide/configure-sni#task-261642).
    
-   Function ID (FunctionID/FuncId): 114.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enabled
    
    String
    
    Yes
    
    Specifies whether to enable the origin SNI feature. Valid values:
    
    -   on: enable.
        
    -   off: disable.
        
    
    on
    
    https\_origin\_sni
    
    String
    
    Yes
    
    The SNI information carried in the origin request. This is the address of the origin server that the origin request needs to access.
    
    `origin.example.com`
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "https_origin_sni",
                "argValue": "origin.example.com"
            }, {
                "argName": "enabled",
                "argValue": "on"
            }],
            "functionName": "https_origin_sni"
        }],
        "DomainNames": "example.com"
    }
    ```
    

forward\_timeout

-   Description: Configures the timeout for origin fetch requests. For more information, see [Configure the timeout for origin fetch HTTP requests](/help/en/cdn/user-guide/configure-a-timeout-period-for-back-to-origin-http-requests#task-1130280).
    
-   Function ID (FunctionID/FuncId): 124.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    forward\_timeout
    
    Integer
    
    Yes
    
    The request timeout period. Unit: seconds.
    
    **Note**
    
    Set the timeout period to less than 100 seconds.
    
    30
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "forward_timeout",
                "argValue": "30"
            }],
            "functionName": "forward_timeout"
        }],
        "DomainNames": "example.com"
    }
    ```
    

advanced\_origin

-   Description: Configures the advanced origin feature. For more information, see [Advanced origin](/help/en/cdn/user-guide/configure-advanced-origin-settings#concept-2425974).
    
-   Feature conflict: The advanced origin feature and the conditional origin feature (function: origin\_dns\_host, function ID: 212) are mutually exclusive. If one of these features is configured, you must delete its configuration before you can configure the other. Note that a feature is considered configured even if its switch parameter is set to \`off\`. You can call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) API operation to delete the specified configuration for a domain name.
    
-   Function ID (FunctionID/FuncId): 235.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    variable\_type
    
    String
    
    Yes
    
    The type of variable. Valid values:
    
    -   header: a request header carried in the user request.
        
    -   arg: a query string parameter carried in the user request URL.
        
    -   uri: the path carried in the user request URL.
        
    -   cookie: a request cookie carried in the user request.
        
    
    uri
    
    variable
    
    String
    
    Yes
    
    The name of the variable.
    
    **Note**
    
    If variable\_type is set to uri, the value of variable must be uri.
    
    uri
    
    conditions
    
    String
    
    Yes
    
    The condition. Valid values:
    
    -   \==: equals.
        
    -   !=: does not equal.
        
    
    \==
    
    value
    
    String
    
    Yes
    
    The value of the variable.
    
    /image
    
    origin
    
    String
    
    Yes
    
    The domain name used for DNS queries during origin fetch. This is the variable value in the user request that, when matched, triggers an origin fetch to the specified origin server address.
    
    origin.example.com
    
-   Configuration example:
    
    ```
    {
     "Functions": [{
      "functionArgs": [{
       "argName": "conditions",
       "argValue": "=="
      }, {
       "argName": "variable_type",
       "argValue": "uri"
      }, {
       "argName": "value",
       "argValue": "/image"
      }, {
       "argName": "origin",
       "argValue": "origin.example.com"
      }, {
       "argName": "variable",
       "argValue": "uri"
      }],
      "functionName": "advanced_origin"
     }],
     "DomainNames": "example.com",
    }
    ```
    

follow\_302

-   Description: Configures 302 redirection. For more information, see [Configure 301/302 redirection](/help/en/cdn/user-guide/configure-301-or-302-redirection#task-2098340).
    
-   Function ID (FunctionID/FuncId): 219.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable 302 redirection for origin fetch. Valid values:
    
    -   on: enable.
        
    -   off: disable.
        
    
    on
    
    max\_tries
    
    Integer
    
    No
    
    The maximum number of 302 redirects.
    
    -   Default value: 2.
        
    -   Valid values: 1 to 5.
        
    
    **Note**
    
    The number of 302 redirects is one less than the number of origin fetches. The default maximum number of origin fetches is 3, and the valid range is 2 to 6.
    
    2
    
    retain\_args
    
    String
    
    No
    
    Specifies whether to retain the original request parameters and return them to the destination origin server during a 302 redirect. Valid values:
    
    -   on: retain.
        
    -   off (default): do not retain.
        
    
    off
    
    retain\_header
    
    String
    
    No
    
    Specifies whether to retain the original request header and return it to the destination origin server during a 302 redirect. Valid values:
    
    -   on: retain.
        
    -   off (default): do not retain.
        
    
    off
    
    response\_header
    
    String
    
    No
    
    The 302 redirect response header. This is the name of the 302 redirect response header that the origin server sends to CDN. The default header name is Location.
    
    X-Alicdn-Redirect
    
    retain\_host
    
    String
    
    No
    
    Specifies whether to retain the origin domain name during a 302 redirect. If enabled, CDN retains the origin domain name during a 302 redirect. This takes effect only when redirecting to the destination domain name. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    modify\_host
    
    String
    
    No
    
    Modifies the origin domain name during a 302 redirect. This takes effect only when redirecting to the destination domain name. By default, the origin domain name is not modified.
    
    example.com
    
    cache
    
    String
    
    No
    
    Specifies whether to cache the redirect result. If enabled, CDN caches the redirect result for the same URL to improve response performance. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    expired\_time
    
    Integer
    
    No
    
    The timeout period for caching the redirect result. This parameter must be used with the cache feature. Unit: seconds. Default value: 3600.
    
    7200
    
    follow\_origin\_host
    
    String
    
    No
    
    Specifies whether to use the origin domain name as the origin host during a 302 redirect. If enabled, CDN uses the origin domain name as the origin host. The latest origin domain name is used even after a primary/secondary switchover. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    follow\_5xx\_retry\_origin
    
    String
    
    No
    
    Specifies whether to switch to the next available origin server if CDN receives a 5xx status code from the current origin server. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "max_tries",
                "argValue": 2
            }, {
                "argName": "retain_args",
                "argValue": "off"
            }, {
                "argName": "retain_header",
                "argValue": "off"
    }, {
                "argName": "response_header",
                "argValue": "X-Alicdn-Redirect"
    }, {
                "argName": "retain_header",
                "argValue": "off"
    }, {
                "argName": "modify_host",
                "argValue": "example.com"
    }, {
                "argName": "cache",
                "argValue": "off"
    }, {
                "argName": "expired_time",
                "argValue": "7200"
    }, {
                "argName": "follow_origin_host",
                "argValue": "off"
    }, {
                "argName": "follow_5xx_retry_origin",
                "argValue": "off"
            }],
            "functionName": "follow_302"
        }],
        "DomainNames": "example.com"
    }
    ```
    

set\_req\_header

-   Description: Configures custom origin fetch HTTP headers. For more information, see [Modify inbound request headers](/help/en/cdn/configure-custom-request-headers-old#task-744831).
    
    **Note**
    
    set\_req\_header is a v1 feature. We recommend that you use the v2 feature, origin\_request\_header. The v2 feature provides more functionalities for custom origin HTTP request headers.
    
-   Function ID (FunctionID/FuncId): 39.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    key
    
    String
    
    Yes
    
    The name of the origin request header.
    
    Accept-Encoding
    
    value
    
    String
    
    Yes
    
    The value of the origin request header. To delete an origin request header, set its value to null.
    
    gzip
    
-   Configuration example 1: Add an origin HTTP request header.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "value",
                "argValue": "gzip"
            }, {
                "argName": "key",
                "argValue": "Accept-Encoding"
            }],
            "functionName": "set_req_header"
        }],
        "DomainNames": "example.com"
    }
    ```
    
-   Configuration example 2: Delete an origin HTTP request header by setting its value to null.
    
    ```
    {
        "Functions":[{
    "functionArgs":[{
      "argName":"value",
      "argValue":"null"
      }, {
    "argName":"key",
    "argValue":"User-Agent"
      }],
      "functionName":"set_req_header"
      }],
      "DomainNames":"example.com"
    }
    ```
    

origin\_request\_header

-   Description: Configures origin fetch HTTP request headers (New). For more information, see [Modify outbound request headers](/help/en/cdn/user-guide/configure-custom-request-headers#task-2429551).
    
-   Function ID (FunctionID/FuncId): 228.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    header\_operation\_type
    
    String
    
    Yes
    
    The request header operation. Valid values:
    
    -   add: Adds an item.
        
    -   delete: delete.
        
    -   modify: To change or alter.
        
    -   replace: replace.
        
    
    add
    
    header\_name
    
    String
    
    Yes
    
    The name of the request header.
    
    Accept-Encoding
    
    header\_value
    
    String
    
    No
    
    The value of the request header. You can configure multiple values for a request header parameter. Separate multiple values with commas (,).
    
    gzip
    
    duplicate
    
    String
    
    No
    
    Specifies whether to allow adding a request header with the same name. This parameter is required when header\_operation\_type is set to add. Valid values:
    
    -   on: allow.
        
    -   off: do not allow.
        
    
    off
    
    header\_source
    
    String
    
    No
    
    The parameter value to be replaced. This parameter is required when header\_operation\_type is set to rewrite. Regular expressions are supported.
    
    value1
    
    header\_destination
    
    String
    
    No
    
    The parameter value after replacement. This parameter is required when header\_operation\_type is set to rewrite.
    
    value123
    
    match\_all
    
    String
    
    No
    
    The match mode. This parameter is required when header\_operation\_type is set to rewrite. Valid values:
    
    -   on: matches all values. All matched values are replaced.
        
    -   off: matches only the first value. Only the first matched value is replaced.
        
    
    off
    
-   Configuration example: Add a custom origin request header to the accelerated domain name `example.com`. Set the header name to Accept-Encoding and the header value to gzip.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "header_operation_type",
                "argValue": "add"
            }, {
                "argName": "header_name",
                "argValue": "Accept-Encoding"
            }, {
                "argName": "header_value",
                "argValue": "gzip"
            }, {
                "argName": "duplicate",
                "argValue": "off"
            }],
            "functionName": "origin_request_header"
        }],
        "DomainNames": "example.com"
    }
    ```
    

origin\_response\_header

-   Description: Allows you to configure origin fetch HTTP response headers. For more information, see [Modify inbound response headers](/help/en/cdn/user-guide/rewrite-http-response-headers#task-2430133).
    
-   Function ID (FunctionID/FuncId): 229.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    header\_operation\_type
    
    String
    
    Yes
    
    The response header operation. Valid values:
    
    -   add: Adds an item.
        
    -   delete: delete.
        
    -   modify: Changes the specified item.
        
    -   The rewrite operation is equivalent to the replace operation.
        
    
    add
    
    header\_name
    
    String
    
    Yes
    
    The name of the response header.
    
    Cache-Control
    
    header\_value
    
    String
    
    No
    
    The value of the response header. You can configure multiple values for a response header parameter. Separate multiple values with commas (,).
    
    no-cache
    
    duplicate
    
    String
    
    No
    
    Specifies whether to allow adding a response header with the same name. This parameter is required when header\_operation\_type is set to add. Valid values:
    
    -   on: allow.
        
    -   off: do not allow.
        
    
    off
    
    header\_source
    
    String
    
    No
    
    The parameter value to be replaced. This parameter is required when header\_operation\_type is set to rewrite. Regular expressions are supported.
    
    value1
    
    header\_destination
    
    String
    
    No
    
    The parameter value after replacement. This parameter is required when header\_operation\_type is set to rewrite.
    
    value123
    
    match\_all
    
    String
    
    No
    
    The match mode. This parameter is required when header\_operation\_type is set to rewrite. Valid values:
    
    -   on: matches all values. All matched values are replaced.
        
    -   off: matches only the first value. Only the first matched value is replaced.
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "header_operation_type",
                "argValue": "add"
            }, {
                "argName": "header_name",
                "argValue": "Cache-Control"
            }, {
                "argName": "header_value",
                "argValue": "no-cache"
            }, {
                "argName": "duplicate",
                "argValue": "off"
            }],
            "functionName": "origin_response_header"
        }],
        "DomainNames": "example.com"
    }
    ```
    

back\_to\_origin\_url\_rewrite

-   Description: Rewrites the origin fetch URI. For more information, see [Rewrite the origin-fetch URL](/help/en/cdn/user-guide/rewrite-urls-in-back-to-origin-requests#task-2406144).
    
-   Function ID (FunctionID/FuncId): 225.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    source\_url
    
    String
    
    Yes
    
    The URI to be rewritten.
    
    ^/hello$
    
    target\_url
    
    String
    
    Yes
    
    The destination URI.
    
    /hello/test
    
    flag
    
    String
    
    No
    
    The execution rule for the rewrite operation. Valid values:
    
    -   Empty: After this rule is executed, subsequent rewrite rules continue to be executed.
        
    -   break: After this rule is executed, subsequent rewrite rules are not executed.
        
    -   enhance\_break: Similar to break, but it processes the URL with its parameters and also takes effect for FLV live streams.
        
    
    break
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "flag",
                "argValue": "break"
            }, {
                "argName": "source_url",
                "argValue": "^/hello$"
            }, {
                "argName": "target_url",
                "argValue": "/hello/test"
            }],
            "functionName": "back_to_origin_url_rewrite"
        }],
        "DomainNames": "example.com",
    }
    ```
    

back\_to\_origin\_argument\_rewrite

-   Description: Rewrites origin fetch parameters. For more information, see [Rewrite Origin Fetch Parameters](/help/en/cdn/user-guide/rewrite-url-parameters-in-back-to-origin-requests#task-2406266).
    
    **Note**
    
    Origin parameter rewrite modifies the query parameters of origin fetch request URLs. You can configure multiple rewrite rules. The priority of the rewrite actions is as follows: **Add** > **Delete** > **Reserve Only** > **Modify**. When different rewrite rules apply to the same parameter, only the rule with the highest priority takes effect.
    
-   Function ID (FunctionID/FuncId): 224.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    delete\_argument
    
    String
    
    No
    
    The list of parameters to delete. Separate multiple parameters with spaces.
    
    code1
    
    save\_argument
    
    String
    
    No
    
    The list of parameters to retain. Separate multiple parameters with spaces. Only the listed parameters are retained. The add and delete parameter actions still take effect.
    
    empty
    
    ignore\_all\_argument
    
    String
    
    No
    
    Specifies whether to ignore all parameters. Valid values:
    
    -   on: ignores all parameters. Only the add parameter action remains effective. The delete, retain only, and modify parameter actions become ineffective.
        
    -   off (default): does not ignore all parameters. The retain, add, and delete parameter actions remain effective.
        
    
    on
    
    add\_argument
    
    String
    
    No
    
    The parameters to add. This action has the highest priority. Separate multiple parameters with spaces.
    
    value=123
    
    modify\_argument
    
    String
    
    No
    
    The parameters to modify. This action has the lowest priority. If a parameter is deleted, it will not be retained. Separate multiple parameters with spaces.
    
    value=321
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable rewriting of origin parameters. Valid values:
    
    -   on: enable.
        
    -   off: disable.
        
    
    on
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "delete_argument",
                "argValue": ""
            }, {
                "argName": "save_argument",
                "argValue": ""
            }, {
                "argName": "add_argument",
                "argValue": ""
            }, {
                "argName": "modify_argument",
                "argValue": ""
            }, {
                "argName": "ignore_all_argument",
                "argValue": "on"
            }, {
                "argName": "enable",
                "argValue": "on"
            }],
            "functionName": "back_to_origin_argument_rewrite"
        }],
        "DomainNames": "example.com"
    }
    ```
    

aws\_s3\_bucket

-   Description: Configures an Amazon S3 authentication bucket.
    
-   Function ID (FunctionID/FuncId): 186.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enabled
    
    String
    
    Yes
    
    Specifies whether to enable the Amazon S3 authentication bucket. Valid values:
    
    -   l2: enable.
        
    -   off: disable.
        
    
    l2
    
    bucketname
    
    String
    
    No
    
    The name of the Amazon S3 bucket.
    
    /
    
    accesskey
    
    String
    
    Yes
    
    The AWS AccessKey.
    
    123456789
    
    secretkey
    
    String
    
    Yes
    
    The AWS SecretKey.
    
    12345678
    
    region
    
    String
    
    Yes
    
    The Amazon S3 storage region.
    
    us-east-2
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enabled",
                "argValue": "l2"
            }, {
                "argName": "accesskey",
                "argValue": "123456789"
            }, {
                "argName": "secretkey",
                "argValue": "123456789"
            }, {
                "argName": "region",
                "argValue": "us-east-2"
            }],
            "functionName": "aws_s3_bucket"
        }],
        "DomainNames": "example.com"
    }
    ```
    

origin\_certificate\_verification

-   Description: Configures origin certificate verification (SNI whitelist). For detailed configuration instructions in the console, see [Common Name whitelist](/help/en/cdn/user-guide/common-name-whitelist#concept-2425978).
    
-   Function ID (FunctionID/FuncId): 223.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enabled
    
    String
    
    Yes
    
    Specifies whether to enable origin certificate verification. Valid values:
    
    -   on: enable.
        
    -   off: disable.
        
    
    on
    
    common\_name\_whitelist
    
    String
    
    No
    
    The list of whitelisted domain names for certificates. You can configure multiple domain names. Separate multiple domain names with commas (,). Certificates for these whitelisted domain names can pass verification.
    
    `example.com`
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "common_name_whitelist",
                "argValue": "example.com"
            }],
            "functionName": "origin_certificate_verification"
        }],
        "DomainNames": "example.com"
    }
    ```
    

origin\_dns\_host

-   You can use the conditional origin feature in combination with the rules engine feature (function: condition, function ID: 250) to route requests to a specified origin based on information in the requests, such as the path, URL parameters, and request headers. For more information, see [Configure a conditional origin](/help/en/cdn/user-guide/configure-a-conditional-origin#task-2301292).
    
-   Prerequisites: Before you add a conditional origin, you must create at least one rule condition in the rules engine. When you add the conditional origin, you must associate it with a rule condition. For more information, see [Rules Engine](#section-q7i-pto-lsw). If no rule condition is associated, all origin fetch traffic for CDN is directed to this single origin server address, which defeats the purpose of using rule conditions to control origin URLs.
    
-   Note on feature conflicts: The conditional origin feature and the advanced origin feature (Function: advanced\_origin, Feature ID: 235) are mutually exclusive. If one of these features is already configured, you must delete its configuration before you can configure the other. A feature is considered configured even if its switch parameter is set to \`off\`. You can call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) operation to delete the specified configuration for a domain name.
    
-   Function ID (FunctionID/FuncId): 212.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    ali\_origin\_dns\_host
    
    String
    
    Yes
    
    The domain name used for DNS queries during origin fetch.
    
    `example.com`
    
-   Configuration example: Set \`parentid\` to reference a rule condition that was created using the rules engine feature (function: condition, function ID: 250). The reference is made using the \`configid\` that is generated when the configuration is added. This ensures that when a user request hits this rule condition, the origin fetch is directed to the specified origin server address.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "ali_origin_dns_host",
                "argValue": "example.com"
            }],
            "functionName": "origin_dns_host",
            "parentId":30119730104****
        }],
        "DomainNames": "example.com"
    }
    ```
    

origin\_host

-   Description: You can configure a specific origin fetch HOST for a specific origin server. For more information about the configuration in the console, see [Configure a specific origin fetch HOST](/help/en/cdn/user-guide/specify-an-origin-host-for-each-origin#task-2277233).
    
-   Function ID (FunctionID/FuncId): 242.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    origin
    
    String
    
    Yes
    
    The address of the specific origin server. You can also not specify an origin server address. In this case, set the origin parameter to all, which represents all origin servers.
    
    `example.com`
    
    host
    
    String
    
    Yes
    
    The specific host. You can also not specify a host. Set the host parameter to `ali_follow_origin` to use the origin server address as the host value.
    
    `host.example.com`
    
-   Configuration example 1: When a user request is fetched from the origin server `example.com`, the \`host\` value used is `host.example.com`.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "origin",
                "argValue": "example.com"
            }, {
                "argName": "host",
                "argValue": "host.example.com"
            }],
            "functionName": "origin_host"
        }],
        "DomainNames": "example.com"
    }
    ```
    
-   Configuration example 2: User requests to all origin servers (represented by \`all\`) use the same \`host\` value `host.example.com`.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "origin",
                "argValue": "all"
            }, {
                "argName": "host",
                "argValue": "host.example.com"
            }],
            "functionName": "origin_host"
        }],
        "DomainNames": "example.com"
    }
    ```
    
-   Configuration example 3: User requests to all origin servers (represented by \`all\`) use the origin server address as the \`host\` value (represented by `ali_follow_origin`).
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "origin",
                "argValue": "all"
            }, {
                "argName": "host",
                "argValue": "ali_follow_origin"
            }],
            "functionName": "origin_host"
        }],
        "DomainNames": "example.com"
    }
    ```
    

ali\_origin\_port\_scheme

-   Description: Configures the origin port and protocol.
    
-   Function ID (FunctionID/FuncId): 276.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    port
    
    String
    
    Yes
    
    The origin port.
    
    **Note**
    
    When scheme is set to follow, you must use the format `http:80|https:443`.
    
    80
    
    scheme
    
    String
    
    Yes
    
    The origin protocol. You can customize the origin protocol. Valid values: http, https, follow, https\_sm, and follow\_sm.
    
    -   http: uses the HTTP protocol for origin fetch.
        
    -   https: uses the HTTPS protocol for origin fetch with an international algorithm.
        
    -   follow: uses the same protocol as the client request for origin fetch. When using HTTPS for origin fetch, only international algorithms are supported.
        
        -   If the client uses HTTP, origin fetch uses HTTP.
            
        -   If the client uses HTTPS:
            
            -   If the client uses an international algorithm, origin fetch uses HTTPS with an international algorithm.
                
            -   If the client uses a Chinese cryptographic algorithm, origin fetch uses HTTPS with an international algorithm.
                
    -   https\_sm: uses the HTTPS protocol for origin fetch with a Chinese cryptographic algorithm.
        
    -   follow\_sm: uses the same protocol as the client request for origin fetch. When using HTTPS for origin fetch, both international and Chinese cryptographic algorithms are supported.
        
        -   If the client uses HTTP, origin fetch uses HTTP.
            
        -   The client uses HTTPS.
            
            -   If the client uses an international algorithm, origin fetch uses HTTPS with an international algorithm.
                
            -   If the client uses a Chinese cryptographic algorithm, origin fetch uses HTTPS with a Chinese cryptographic algorithm.
                
    
    **Note**
    
    International algorithms are standard encryption algorithms. Chinese cryptographic algorithms are certified by the Chinese State Cryptography Administration.
    
    http
    
-   Configuration example 1: Set the origin protocol to http and the origin port to 80.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "port",
                "argValue": "80"
            }, {
                "argName": "scheme",
                "argValue": "http"
            }],
            "functionName": "ali_origin_port_scheme"
        }],
        "DomainNames": "example.com"
    }
    ```
    
-   Configuration example 2: The origin protocol follows the protocol used by the user request. When using HTTP for origin fetch, the request is sent to port 80 of the origin server. When using HTTPS for origin fetch, the request is sent to port 443 of the origin server.
    
    ```
    {
    "Functions":[{
    "functionArgs": [{
    "argName": "port",
    "argValue": "http:80|https:443"
      }, {
    "argName": "scheme",
    "argValue": "follow"
      }],
      "functionName":"ali_origin_port_scheme"
    }],
      "DomainNames":"example.com"
    }
    ```
    

origin\_sni

-   Description: Configures a specific origin SNI for a specific origin server.
    
-   Function ID (FunctionID/FuncId): 262.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    origin
    
    String
    
    Yes
    
    The address of the origin server. You can also not specify an origin server address. In this case, set the origin parameter to all.
    
    `example.com`
    
    sni\_host
    
    String
    
    Yes
    
    The SNI host value:
    
    -   You can set it to a static field, such as `example.org`.
        
    -   To use the origin server address as the SNI, set it to `ali_follow_origin`.
        
    -   To use the origin host as the SNI, set it to `ali_follow_host`.
        
    
    `example.org`
    
    keepalive\_sni
    
    String
    
    No
    
    Specifies whether to enable SNI matching for persistent connections. Valid values:
    
    -   on: enable.
        
    -   off: disable.
        
    
    **Note**
    
    If enabled, different persistent connections are used for different origin SNIs.
    
    /
    
-   Configuration example 1: When a user request is fetched from the origin server `origin.example.com`, the SNI value used is `host.example.com`.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "origin",
                "argValue": "origin.example.com"
            }, {
                "argName": "sni_host",
                "argValue": "host.example.com"
            }],
            "functionName": "origin_sni"
        }],
        "DomainNames": "example.com"
    }
    ```
    
-   Configuration example 2: User requests to all origin servers (represented by `all`) use the same SNI value `host.example.com`.
    
    ```
    {
    "Functions": [{
    "functionArgs": [{
    "argName": "origin",
    "argValue": "all"
      }, {
    "argName": "sni_host",
    "argValue": "host.example.com"
    }],
    "functionName":"origin_sni"
     }],
     "DomainNames":"example.com"
    }
    ```
    
-   Configuration example 3: User requests to all origin servers (represented by `all`) use the origin server address as the SNI value (represented by the parameter value `ali_follow_origin`).
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "origin",
                "argValue": "all"
            }, {
                "argName": "sni_host",
                "argValue": "ali_follow_origin"
            }],
            "functionName": "origin_sni"
        }],
        "DomainNames": "example.com"
    }
    ```
    
-   Configuration example 4: User requests to all origin servers (represented by `all`) use the origin host as the SNI value (represented by the parameter value `ali_follow_host`).
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "origin",
                "argValue": "all"
            }, {
                "argName": "sni_host",
                "argValue": "ali_follow_host"
            }],
            "functionName": "origin_sni"
        }],
        "DomainNames": "example.com"
    }
    ```
    

source\_group

-   Description: Origin group settings.
    
-   Function ID (FunctionID/FuncId): 294.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    source\_group\_name
    
    String
    
    Yes
    
    The name of the origin group. It can contain lowercase letters, digits, and underscores (\_). The maximum length is 128 bytes.
    
    example\_origin
    
    source\_info
    
    String
    
    Yes
    
    The origin server information. Format: OriginAddress\_Priority\_Weight\_Port. Separate different parameter values with underscores (\_). Separate multiple origin servers with commas (,).
    
    -   Origin address: Supports IPv4, IPv6, and domain names.
        
    -   Priority: Supports values from 1 to 65535. A smaller value indicates a higher priority.
        
    -   Weight: Supports values from 1 to 100. CDN distributes requests to different origin servers based on their weights.
        
    -   Port: Supports values from 1 to 65535.
        
    
    -   Single origin server: 192.168.0.1\_10\_33\_80
        
    -   Multiple origin servers: 192.168.0.1\_10\_33\_80,192.0.2.1\_10\_67\_80
        
    
    retry\_times
    
    Integer
    
    No
    
    The number of origin fetch retries.
    
    3
    
    retry\_status\_rule
    
    Integer
    
    No
    
    The status codes that trigger an origin fetch retry. Currently, only the following five values are supported: 4xx, 5xx, 404, 404-or-5xx, and 4xx-or-5xx. Configure one of them.
    
    404-or-5xx
    
    failback\_source
    
    String
    
    No
    
    Specifies the basic information of the backup source. Valid values:
    
    -   on: If all origin servers in the origin group are unavailable, the origin server address in the Basic Configurations - Origin Information section is used.
        
    -   off: If all origin servers in the origin group are unavailable, a 5xx status code indicating that the origin server is unavailable is returned to the client.
        
    
    on
    
    **Note**
    
    Origin fetch retry logic:
    
    -   Number of retries: The number of times to retry an origin fetch.
        
        -   Retries are attempted only between different IP addresses within the same origin group.
            
        -   The actual maximum number of retries is limited by the number of available IP addresses in the same origin group.
            
        -   If \`retry\_times\` is not configured, the default number of retries is the minimum of 3 and the number of available origin IP addresses.
            
        -   If \`retry\_times\` is configured, the number of retries is the minimum of the configured value and the number of available origin IP addresses.
            
    -   Status codes for retries: The node retries when it receives a specific status code.
        
        -   If \`retry\_status\_rule\` is not configured, a retry is triggered by default when the origin server responds with a 5xx status code.
            
        -   If \`retry\_status\_rule\` is configured, failover retries are triggered based on the configured status codes. Currently, only the following five values are supported: 4xx, 5xx, 404, 404-or-5xx, and 4xx-or-5xx. You can configure one of them.
            
        -   After you configure \`retry\_status\_rule\`, the default 5xx status code still takes effect. For example, if you configure \`404\`, the CDN node retries when it receives a 404 or 5xx status code.
            
    -   Origin fetch retry order: Retries are attempted in descending order of priority of the IP addresses in the same origin group.
        
    -   Origin fetch timeout scenario: When the origin server actively responds with a retry status code, the CDN node retries the request. If the origin server does not respond with a retry status code, the CDN node follows the timeout handling process and retries the request after the timeout period is reached.
        
        -   Origin TCP connection timeout: 10 seconds.
            
        -   Origin write timeout: 30 seconds. This is the timeout for writing content after a connection is established with the origin server.
            
        -   Origin read timeout: 30 seconds. This timeout occurs if the origin server fails to send the complete content requested by the CDN node within the specified period.
            
    -   Origin probing logic:
        
        -   Abnormal Layer 4 connection: If the CDN node fails to establish a Layer 4 connection with an origin IP address, it adds the origin IP address to a dead table. Subsequent origin fetch requests do not access this origin IP address. The CDN node then probes the origin IP address at Layer 4 every 5 seconds. If a connection is successfully established, the origin IP address is restored to the available list.
            
        -   Normal Layer 4 connection: If the CDN node has a normal Layer 4 connection with an origin IP address but receives a retry status code (such as 5xx) from the origin server, the retry logic is triggered. However, the origin IP address remains in the available list, and the next access request is still sent to this origin server based on its weight. This means that if the Layer 4 connection is normal, a Layer 7 exception does not automatically block the origin IP address. To actively block the origin IP address, you must configure the Layer 7 origin monitoring and health check feature.
            
    
-   Configuration example:
    
    ```
    {
    "Functions":[{
     "functionArgs":[{
     "argName":"source_group_name",
     "argValue":"test_yidong"
    },{
     "argName":"source_info",
      "argValue":"192.168.0.1_10_33_80,192.0.2.1_10_67_80"
    },{
    "argName":"retry_times",
    "argValue":"3"
     },{
    "argName":"retry_status_rule",
    "argValue":"404,502"
    },{
    "argName":"failback_source",
      "argValue":"on"
    }],
    "functionName":"source_group"
    }],
     "DomainNames":"example.com"
    }
    ```
    

ipv6\_origin

-   Description: Configures origin fetch over IPv6. For more information, see [Configure origin fetch over IPv6](/help/en/cdn/user-guide/configure-back-to-origin-routing-over-ipv6#task-2266200).
    
-   Function ID (FunctionID/FuncId): 265
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable origin fetch over IPv6. Valid values:
    
    -   on: enable.
        
    -   off: disable.
        
    
    **Note**
    
    After you enable origin fetch over IPv6, CDN provides IPv6 service for origin fetch.
    
    -   If both the CDN point of presence and the origin server have available IPv6 addresses, an IPv6 connection is established.
        
    -   An IPv4 connection is established in the following scenarios:
        
        -   The CDN point of presence does not have an available IPv6 address.
            
        -   The origin server does not have an available IPv6 address.
            
        -   Neither the CDN point of presence nor the origin server has an available IPv6 address.
            
    
    on
    
    follow
    
    String
    
    Yes
    
    Specifies whether to enable the feature that allows origin fetch to follow the client IP protocol version. Valid values:
    
    -   on: enable.
        
    -   off: disable.
        
    
    **Note**
    
    After you enable this feature, CDN origin fetch will follow the IP protocol version used by the client request.
    
    -   If the client request uses IPv6, CDN prioritizes fetching from an IPv6 origin server. If no IPv6 origin server is available, an IPv4 origin server is used.
        
    -   If the client request uses IPv4, CDN prioritizes fetching from an IPv4 origin server. If no IPv4 origin server is available, an IPv6 origin server is used.
        
    
    on
    
    ipv6\_v4\_mix\_used
    
    String
    
    No
    
    Specifies whether to enable "Origin IPv4/IPv6 Address Polling". Valid values:
    
    -   on: enable.
        
    -   off: disable.
        
    
    **Note**
    
    -   The "Origin IPv4/IPv6 Address Polling" feature is mutually exclusive with the "Origin Fetch over IPv6" and "Follow Client IP Protocol Version" features. Once "Origin IPv4/IPv6 Address Polling" is enabled, the other two features become ineffective.
        
    -   The "Origin IPv4/IPv6 Address Polling" feature ensures that origin fetch requests are distributed to all origin server addresses using a polling method, regardless of whether the client request uses IPv4 or IPv6, and regardless of the number of IPv4 or IPv6 addresses the origin server has.
        
    -   If weights are configured for IPv4 and IPv6 addresses, origin fetch requests are distributed according to the weight ratios.
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            },{
                "argName": "follow",
                "argValue": "on"
            }],
            "functionName": "ipv6_origin"
        }],
        "DomainNames": "example.com"
    }
    ```
    

**cos\_auth**

-   Description: Configures an authentication bucket for Tencent Cloud COS.
    
-   Function ID (FunctionID/FuncId): 288.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable the Tencent Cloud COS authentication bucket. Valid values:
    
    -   on: enable.
        
    -   Off: Indicates a system shutdown.
        
    
    on
    
    cos\_valid\_period
    
    String
    
    No
    
    The validity period of the authentication signature. Unit: seconds. If not specified, the default value is 3600 seconds.
    
    /
    
    cos\_secret\_id
    
    String
    
    Yes
    
    The authentication ID for Tencent Cloud.
    
    123456789
    
    cos\_secret\_key
    
    String
    
    Yes
    
    The authentication key for Tencent Cloud.
    
    12345678
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "cos_secret_id",
                "argValue": "123456789"
            }, {
                "argName": "cos_secret_key",
                "argValue": "123456789"
            }],
            "functionName": "cos_auth"
        }],
        "DomainNames": "example.com"
    }
    ```
    

**oss\_auth**

-   Description: Configures the authentication bucket information for CDN to fetch content from OSS.
    
-   Function ID (FunctionID/FuncId): 10.
    
-   Note: After you configure an OSS origin server for an accelerated domain name, the platform automatically adds the \`oss\_auth\` configuration. Do not add or delete this configuration. If you delete this configuration, billing exemptions for CDN-to-OSS origin traffic may not apply. If authentication for a private OSS bucket is enabled, deleting this configuration causes authentication failures for origin fetch requests.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    oss\_bucket\_id
    
    String
    
    Yes
    
    The public domain name of the OSS bucket.
    
    cdn-test.oss-cn-hongkong.aliyuncs.com
    
    oss\_pri\_buckets
    
    String
    
    Yes
    
    The public domain name of the OSS bucket and its corresponding bucket name.
    
    cdn-test.oss-cn-hongkong.aliyuncs.com|cdn-test
    
-   Configuration example:
    
    ```
    {
        "Functions": [
                {
                  "ArgValue": "cdn-test.oss-cn-hongkong.aliyuncs.com",
                  "ArgName": "oss_bucket_id"
                },
                {
                  "ArgValue": "cdn-test.oss-cn-hongkong.aliyuncs.com|cdn-test",
                  "ArgName": "oss_pri_buckets"
                }
              ],
            "functionName": "oss_auth"
        }],
        "DomainNames": "example.com"
    }
    ```
    

## Cache configuration

filetype\_based\_ttl\_set

-   Description: Configures the cache expiration time for files. For more information, see [Configure CDN cache expiration time](/help/en/cdn/user-guide/configure-the-cdn-cache-expiration-time#task-261642).
    
-   Function ID (FunctionID/FuncId): 6.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    ttl
    
    Integer
    
    Yes
    
    The cache duration. Unit: seconds. Valid values: 1 to 99999999 (just over 3 years).
    
    500000
    
    file\_type
    
    String
    
    Yes
    
    The file format. This is case-sensitive. Separate multiple file formats with commas (,). Example: jpg,txt.
    
    jpg
    
    weight
    
    Integer
    
    No
    
    The weight. Valid values: 1 to 99.
    
    **Note**
    
    The default value is 1. A larger number indicates a higher priority.
    
    1
    
    swift\_origin\_cache\_high
    
    String
    
    No
    
    Prioritizes the origin server's cache policy. If enabled, when the origin server responds with cache-related headers (such as Cache-Control, Pragma), the origin server's cache policy takes precedence. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    swift\_no\_cache\_low
    
    String
    
    No
    
    Ignores the origin server's no-cache response headers. If enabled, the following response headers from the origin server are ignored (all indicate no caching):
    
    -   Cache-Control: no-store
        
    -   Cache-Control: no-cache
        
    -   Cache-Control: max-age=0
        
    -   Pragma: no-cache
        
    
    Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    swift\_follow\_cachetime
    
    String
    
    No
    
    The client follows the CDN cache policy. If enabled, the final effective CDN cache policy is sent to the client. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    force\_revalidate
    
    String
    
    No
    
    Forces content validation when the TTL is 0. Valid values:
    
    -   on: enable. When the TTL is 0, content can be cached on CDN points of presence, and each request requires an origin fetch to validate the cached content.
        
    -   off (default): disable. When the TTL is 0, CDN points of presence do not cache content, and each request requires an origin fetch to retrieve the content again.
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "file_type",
                "argValue": "jpg"
            }, {
                "argName": "weight",
                "argValue": "1"
            }, {
                "argName": "ttl",
                "argValue": "500000"
            }, {
                "argName": "swift_origin_cache_high",
                "argValue": "off"
            }, {
                "argName": "swift_no_cache_low",
                "argValue": "off"
            }, {
                "argName": "swift_follow_cachetime",
                "argValue": "off"
            },{
                "argName": "force_revalidate",
                "argValue": "off"
            }],
            "functionName": "filetype_based_ttl_set"
        }],
        "DomainNames": "example.com"
    }
    ```
    

path\_based\_ttl\_set

-   Configures the cache expiration time for folders. For more information, see [Configure CDN cache expiration time](/help/en/cdn/user-guide/configure-the-cdn-cache-expiration-time#task-261642).
    
-   Function ID (FunctionID/FuncId): 7.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    ttl
    
    Integer
    
    Yes
    
    The cache duration. Unit: seconds. Valid values: 1 to 99999999 (just over 3 years).
    
    500000
    
    path
    
    String
    
    Yes
    
    The directory. It must start with a forward slash (/).
    
    /example/demo
    
    weight
    
    Integer
    
    No
    
    The weight. Valid values: 1 to 99.
    
    **Note**
    
    The default value is 1. A larger number indicates a higher priority.
    
    1
    
    swift\_origin\_cache\_high
    
    String
    
    No
    
    Prioritizes the origin server's cache policy. If enabled, when the origin server responds with cache-related headers (such as Cache-Control, Pragma), the origin server's cache policy takes precedence. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    swift\_no\_cache\_low
    
    String
    
    No
    
    Ignores the origin server's no-cache response headers. If enabled, the following response headers from the origin server are ignored (all indicate no caching):
    
    -   Cache-Control: no-store
        
    -   Cache-Control: no-cache
        
    -   Cache-Control: max-age=0
        
    -   Pragma: no-cache
        
    
    Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    swift\_follow\_cachetime
    
    String
    
    No
    
    The client follows the CDN cache policy. If enabled, the final effective CDN cache policy is sent to the client. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    force\_revalidate
    
    String
    
    No
    
    Forces content validation when the TTL is 0. Valid values:
    
    -   on: enable. When the TTL is 0, content can be cached on CDN points of presence, and each request requires an origin fetch to validate the cached content.
        
    -   off (default): disable. When the TTL is 0, CDN points of presence do not cache content, and each request requires an origin fetch to retrieve the content again.
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "path",
                "argValue": "/example/demo"
            }, {
                "argName": "weight",
                "argValue": "1"
            }, {
                "argName": "ttl",
                "argValue": "500000"
            }, {
                "argName": "swift_origin_cache_high",
                "argValue": "off"
            }, {
                "argName": "swift_no_cache_low",
                "argValue": "off"
            }, {
                "argName": "swift_follow_cachetime",
                "argValue": "off"
            }, {
                "argName": "force_revalidate",
                "argValue": "off"
            }],
            "functionName": "path_based_ttl_set"
        }],
        "DomainNames": "example.com"
    }
    ```
    

filetype\_force\_ttl\_code

-   Configures the expiration time of status codes. For more information, see [Configure status code expiration time](/help/en/cdn/user-guide/create-a-cache-rule-for-http-status-codes#task-261642).
    
-   Function ID (FunctionID/FuncId): 63.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    file\_type
    
    String
    
    Yes
    
    The file format. This is case-sensitive. Separate multiple file formats with commas (,). Example: jpg,txt.
    
    jpg
    
    code\_string
    
    String
    
    Yes
    
    The status code and its cache duration. Unit: seconds. Valid values: 1 to 99999999 (just over 3 years). Separate multiple entries with commas (,). Example: 302=0,301=0,4xx=2.
    
    403=10
    
    swift\_code\_origin\_cache\_high
    
    String
    
    No
    
    Prioritizes the origin server's cache policy. If enabled, when the origin server responds with cache-related headers (such as Cache-Control, Pragma), the origin server's cache policy takes precedence. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    swift\_code\_no\_cache\_low
    
    String
    
    No
    
    Ignores the origin server's no-cache response headers. If enabled, the following response headers from the origin server are ignored (all indicate no caching):
    
    -   Cache-Control: no-store
        
    -   Cache-Control: no-cache
        
    -   Cache-Control: max-age=0
        
    -   Pragma: no-cache
        
    
    Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    swift\_code\_follow\_cachetime
    
    String
    
    No
    
    The client follows the CDN cache policy. If enabled, the final effective CDN cache policy is sent to the client. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    force\_revalidate
    
    String
    
    No
    
    Forces content validation when the TTL is 0. Valid values:
    
    -   on: enable. When the TTL is 0, content can be cached on CDN points of presence, and each request requires an origin fetch to validate the cached content.
        
    -   off (default): disable. When the TTL is 0, CDN points of presence do not cache content, and each request requires an origin fetch to retrieve the content again.
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "file_type",
                "argValue": "jpg"
            }, {
                "argName": "code_string",
                "argValue": "403=10"
           }, {
                "argName": "swift_code_origin_cache_high",
                "argValue": "off"
            }, {
                "argName": "swift_code_no_cache_low",
                "argValue": "off"
            }, {
                "argName": "swift_code_follow_cachetime",
                "argValue": "off"
            }, {
                "argName": "force_revalidate",
                "argValue": "off"
            }],
            "functionName": "filetype_force_ttl_code"
        }],
        "DomainNames": "example.com"
    }
    ```
    

path\_force\_ttl\_code

-   Description: This feature lets you configure the expiration time of status codes for a path. For more information, see [Configure the expiration time of status codes](/help/en/cdn/user-guide/create-a-cache-rule-for-http-status-codes#task-261642).
    
-   Function ID (FunctionID/FuncId): 65.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    path
    
    String
    
    Yes
    
    The directory. It must start with a forward slash (/). Example: /image.
    
    /example/demo
    
    code\_string
    
    String
    
    Yes
    
    The status code and its cache duration. Unit: seconds. Valid values: 1 to 99999999 (just over 3 years). Separate multiple entries with commas (,). Example: 302=0,301=0,4xx=2.
    
    403=10,404=15
    
    swift\_code\_origin\_cache\_high
    
    String
    
    No
    
    Prioritizes the origin server's cache policy. If enabled, when the origin server responds with cache-related headers (such as Cache-Control, Pragma), the origin server's cache policy takes precedence. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    swift\_code\_no\_cache\_low
    
    String
    
    No
    
    Ignores the origin server's no-cache response headers. If enabled, the following response headers from the origin server are ignored (all indicate no caching):
    
    -   Cache-Control: no-store
        
    -   Cache-Control: no-cache
        
    -   Cache-Control: max-age=0
        
    -   Pragma: no-cache
        
    
    Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    swift\_code\_follow\_cachetime
    
    String
    
    No
    
    The client follows the CDN cache policy. If enabled, the final effective CDN cache policy is sent to the client. Valid values:
    
    -   on: enable
        
    -   off (default): disable
        
    
    off
    
    force\_revalidate
    
    String
    
    No
    
    Forces content validation when the TTL is 0. Valid values:
    
    -   on: enable. When the TTL is 0, content can be cached on CDN points of presence, and each request requires an origin fetch to validate the cached content.
        
    -   off (default): disable. When the TTL is 0, CDN points of presence do not cache content, and each request requires an origin fetch to retrieve the content again.
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "path",
                "argValue": "/example/demo"
            }, {
                "argName": "code_string",
                "argValue": "403=10,404=15"
            }, {
                "argName": "swift_code_origin_cache_high",
                "argValue": "off"
            }, {
                "argName": "swift_code_no_cache_low",
                "argValue": "off"
            }, {
                "argName": "swift_code_follow_cachetime",
                "argValue": "off"
            }, {
                "argName": "force_revalidate",
                "argValue": "off"
            }],
            "functionName": "path_force_ttl_code"
        }],
        "DomainNames": "example.com"
    }
    ```
    

default\_ttl\_code

-   Description: Configures the expiration time of status codes (Origin Priority). For console configuration instructions, see [Configure Expiration Time of Status Code (Origin Priority)](/help/en/cdn/create-a-status-code-expiration-rule-that-honors-origin#task-2458823).
    
-   Function ID (FunctionID/FuncId): 207.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    default\_ttl\_code
    
    String
    
    Yes
    
    The status code and its cache duration. Unit: seconds. Valid values: 1 to 99999999 (just over 3 years). Separate multiple status codes with commas (,).
    
    4xx=3,200=3600,5xx=1
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "default_ttl_code",
                "argValue": "4xx=3,200=3600,5xx=1"
            }],
            "functionName": "default_ttl_code"
        }],
        "DomainNames": "example.com"
    }
    ```
    

set\_resp\_header

-   Description: Configures custom HTTP response headers. For more information, see [Modify outbound response headers](/help/en/cdn/user-guide/create-a-custom-http-response-header#task-261642).
    
-   Function ID (FunctionID/FuncId): 27.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    key
    
    String
    
    Yes
    
    The response header.
    
    Cache-Control
    
    value
    
    String
    
    Yes
    
    The value of the response header. Separate multiple values with commas (,).
    
    **Note**
    
    If you want to delete a response header, set its value to null.
    
    no-cache
    
    header\_operation\_type
    
    String
    
    No
    
    The request header operation. Valid values:
    
    -   add: Adds an item.
        
    -   Delete: delete.
        
    -   modify: Make changes to an item.
        
    -   Rewrite: replace.
        
    
    add
    
    duplicate
    
    String
    
    No
    
    Specifies whether to allow adding a request header with a name that already exists. This parameter is required when header\_operation\_type is set to add.
    
    -   on: Allows duplicates.
        
    -   off: Does not allow duplicates.
        
    
    off
    
    header\_source
    
    String
    
    No
    
    The parameter value to replace. This parameter is required when header\_operation\_type is set to rewrite. The value can be a regular expression.
    
    value1
    
    header\_destination
    
    String
    
    No
    
    The new value for the parameter. Set this parameter when header\_operation\_type is set to rewrite.
    
    value123
    
    match\_all
    
    String
    
    No
    
    Specifies the match pattern to use when header\_operation\_type is set to rewrite for a replace operation:
    
    -   on: Replaces all matched values.
        
    -   off: Replaces only the first matched value.
        
    
    /
    
    access\_origin\_control
    
    String
    
    No
    
    Cross-domain verification:
    
    -   on: Enables cross-domain verification on CDN points of presence (PoPs).
        
    -   off: Disables the feature.
        
    
    /
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "header_operation_type",
                "argValue": "add"
            }, {
                "argName": "key",
                "argValue": "Cache-Control"
            }, {
                "argName": "value",
                "argValue": "no-cache"
            }, {
                "argName": "duplicate",
                "argValue": "off"
            }],
            "functionName": "set_resp_header"
        }],
        "DomainNames": "example.com"
    }
    ```
    

error\_page

-   Description: Configures a custom page. For more information, see [Configure a custom page](/help/en/cdn/user-guide/create-a-custom-error-page#task-261642).
    
-   Feature ID (FunctionID/FuncId): 15.
    
-   Parameter description:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    error\_code
    
    Integer
    
    Yes
    
    Error code.
    
    404
    
    rewrite\_page
    
    String
    
    Yes
    
    Redirection page.
    
    `http://example.aliyundoc.com/error404.html`
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "error_code",
                "argValue": "404"
            }, {
                "argName": "rewrite_page",
                "argValue": "http://example.aliyundoc.com/error404.html"
            }],
            "functionName": "error_page"
        }],
        "DomainNames": "example.com"
    }
    ```
    

host\_redirect

-   Description: Configures URI rewrite rules. For more information, see [Rewrite access URLs](/help/en/cdn/user-guide/create-an-access-url-rewrite-rule#task-371777).
    
-   Function ID (FuncId): 43.
    
-   Parameter description:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    regex
    
    String
    
    Yes
    
    The URI to rewrite. The URI must start with a forward slash (/) and cannot include the http:// prefix or a domain name. Perl Compatible Regular Expressions (PCRE) are supported. For example, ^/hello$.
    
    ^/hello$
    
    replacement
    
    String
    
    Yes
    
    If the execution rule is set to "Break", only a path that starts with a forward slash (/) is supported. The path cannot include a protocol prefix or a domain name. If the execution rule is set to "Redirect", the path can include a protocol prefix and a domain name. PCRE is supported. For example, use $1 and $2 to capture the strings in parentheses in the path that you want to rewrite.
    
    /hello/test
    
    flag
    
    String
    
    No
    
    Specifies the action that a CDN point of presence (PoP) performs after the URI is rewritten. Valid values:
    
    -   **Empty**: The default value. This means the **flag** parameter is not passed. If you configure multiple rules and a request URL matches a rule, the PoP continues to match subsequent rules after the current rule is executed.
        
    -   **break**: If a request URL matches a rule, the request is rewritten to the destination URL. The parameters in the original URI are not modified. After the current rule is executed, the PoP stops matching other rules.
        
    -   **redirect**: If a request URL matches a rule, the request is redirected to the destination URL with a 302 status code. The PoP returns the destination URL as the Location information to the client. The parameters in the original URI are not modified. After the current rule is executed, the PoP continues to match subsequent rules.
        
    -   **enhance\_break**: Similar to **break**, but this action modifies the entire URL, including its parameters.
        
    -   **enhance\_redirect**: Similar to **redirect**, but this action modifies the entire URL, including its parameters.
        
    
    **Note**
    
    Different execution rules use different rewrite methods. They also differ in whether the rewritten URL supports other domain names and protocols:
    
    -   **Empty**, **break**, and **enhance\_break** directly rewrite the request URL. They do not support rewriting to other domain names or protocols. For example, you cannot rewrite a URL from HTTP to HTTPS.
        
    -   **redirect** and **enhance\_redirect** use the 302 redirect method to implement URL rewrites. This method supports rewriting to other domain names and also to other protocols:
        
        -   The 302 Location address can be set to a domain name other than the current accelerated domain name. For example, an original URL that uses the example.com domain name can be rewritten to use a new domain name, such as aliyundoc.com.
            
        -   The 302 Location address supports other protocols. For example, an original URL that uses the HTTP protocol can be rewritten to use the HTTPS protocol.
            
    
    redirect
    
    rewrite\_method
    
    String
    
    No
    
    The redirection method. Supported status codes are 302, 303, and 307:
    
    -   302: The default redirection method. The GET request method does not change. Other request methods might change to GET.
        
    -   303: The GET request method does not change. Other request methods change to GET. The message body is lost.
        
    -   307: The request method and message body do not change.
        
    
    302
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "flag",
                "argValue": "redirect"
            }, {
                "argName": "regex",
                "argValue": "^/hello$"
            }, {
                "argName": "replacement",
                "argValue": "/hello/test"
            }, {
                "argName": "rewrite_method",
                "argValue": "302"
            }],
            "functionName": "host_redirect"
        }],
        "DomainNames": "example.com"
    }
    ```
    

self\_defined\_cachekey

-   Configures a custom CacheKey. For more information, see [Custom CacheKey](/help/en/cdn/user-guide/create-custom-cache-keys#concept-2425981).
    
-   Function ID: 227.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    uri
    
    Array of String
    
    No
    
    Rewrites a source URI to a destination URI and uses the destination URI as the cache key.
    
    -   uri\_to\_rewrite: The source URI.
        
    -   ai\_uri\_regex: The destination URI.
        
    
    `[{"uri_to_rewrite":"/hello","ai_uri_regex":"/hello/test"}]`
    
    args
    
    Array of String
    
    No
    
    Adds, deletes, modifies, or keeps parameters in the request and saves the result as a cache key. The value consists of the following parameters:
    
    -   args\_operation\_type: The type of operation to perform on the parameter. Valid values are add, delete, modify, and keep.
        
    -   args: The parameter value for the operation.
        
    
    `[{"args":"test=123","args_operation_type":"add"}]`
    
    headers
    
    String
    
    No
    
    Adds multiple HTTP headers, separated by spaces, to the cache key.
    
    example
    
    variable
    
    Array of String
    
    No
    
    A custom variable uses a regular expression to extract any field from request parameters, HTTP headers, cookies, or the URI and appends it to the cache key.
    
    \[\]
    
-   Example configuration:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "uri",
                "argValue": [{
                    "uri_to_rewrite": "/hello",
                    "ai_uri_regex": "/hello/test"
                }]
            }, {
                "argName": "args",
                "argValue": [{
                    "args": "test=123",
                    "args_operation_type": "add"
                }]
            }, {
                "argName": "headers",
                "argValue": ""
            }, {
                "argName": "variable",
                "argValue": []
            }],
            "functionName": "self_defined_cachekey"
        }],
        "DomainNames": "example.com"
    }
    ```
    

rewrite\_host

-   Description: Shared cache.
    
-   Function ID (FunctionID/FuncId): 54.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    share\_host
    
    String
    
    Yes
    
    The target domain name that can share a cache with the current domain name. This configuration does not modify the Host header for origin fetch requests. When a cached resource is queried, the system uses the share\_host value to generate the cache key.
    
    example.com
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "share_host",
                "argValue": "example.com"
            }],
            "functionName": "rewrite_host"
        }],
        "DomainNames": "example.com"
    }
    ```
    

**serving\_stale\_content**

-   Description: Serves stale content from the cache when the origin server is unavailable or returns an error.
    
-   Function ID: 260
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    origin\_error\_status\_code
    
    String
    
    No
    
    Specifies the origin server error status codes that trigger this feature.
    
    -   Feature description: Specifies the status codes from the origin server that trigger this feature.
        
    -   Default value: Not specified. By default, origin server errors include timeouts and all 5xx status codes.
        
    -   Configuration: Enter 4xx or 5xx for a wildcard match. You can also enter specific status codes, such as 502 or 504, for an exact match. To enter multiple status codes, separate them with a comma.
        
    
    502
    
    extend\_expiration\_time
    
    Integer
    
    No
    
    The maximum time to keep stale cache content after it expires.
    
    -   Feature description: The maximum duration to retain a cache after it expires.
        
    -   The default value for the expiration extension time is 1 hour.
        
    -   Enter an integer of 1 or greater. The unit is seconds.
        
    
    60
    
    origin\_first
    
    String
    
    No
    
    Specifies whether to prioritize the cache policy from the origin server.
    
    -   Description: If this parameter is set to on, the origin policy is prioritized. If the origin server returns a file with the `Cache-Control: stale-if-error=xx` header, the time specified by the `stale-if-error` parameter is used as the extended expiration time.
        
    -   Default: This parameter is empty by default, which is equivalent to off. In this case, the extended expiration time is set by the extend\_expiration\_time parameter.
        
    -   Configuration: Valid values are `on` (enabled) and `off` (disabled).
        
    
    on
    
-   Example configuration:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "origin_error_status_code",
                "argValue": "502"
            }, {
                "argName": "extend_expiration_time",
                "argValue": "60"
            }, {
                "argName": "origin_first",
                "argValue": "off"
            }],
            "functionName": "serving_stale_content"
        }],
        "DomainNames": "example.com"
    }
    ```
    

## HTTPS configuration

https\_option

-   Description: Configures basic HTTPS parameters. For more information, see [Configure an HTTPS certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate#task-261642), [Configure HTTP/2](/help/en/cdn/user-guide/enable-http-or-2#task-261642), and [Configure OCSP Stapling](/help/en/cdn/user-guide/configure-ocsp-stapling#task-2461452).
    
-   Function ID (FunctionID/FuncId): 78.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    http2
    
    String
    
    No
    
    Specifies whether to enable HTTP/2.
    
    -   on: Enables the setting.
        
    -   off: The shutdown state.
        
    
    on
    
    ocsp\_stapling
    
    String
    
    No
    
    Specifies whether to enable the Online Certificate Status Protocol (OCSP) feature.
    
    -   on: Enables the feature.
        
    -   off: Indicates a shutdown.
        
    
    on
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "http2",
                "argValue": "on"
            }, {
                "argName": "ocsp_stapling",
                "argValue": "on"
            }],
            "functionName": "https_option"
        }],
        "DomainNames": "example.com"
    }
    ```
    

http\_force

-   Description: Configures forced redirection to HTTP. For more information, see [Configure force redirect](/help/en/cdn/user-guide/configure-url-redirection#task-261642).
    
-   The force redirect to HTTP feature and the force redirect to HTTPS feature (function: https\_force, function ID: 44) are mutually exclusive. If you have configured one of these features, you must delete its configuration before you can configure the other. Note that a feature is considered configured even if its switch parameter is set to \`off\`. You can call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) API operation to delete the specified configuration for the domain name.
    
-   Function ID (FunctionID/FuncId): 45.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enable
    
    String
    
    Yes
    
    Enforce HTTP redirection:
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
    http\_rewrite
    
    String
    
    No
    
    The redirect method. Valid status codes are 301 and 308.
    
    -   301: The GET request method does not change. Other request methods might change to GET.
        
    -   308: The request method and message body do not change.
        
    
    301
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "http_rewrite",
                "argValue": "301"
            }],
            "functionName": "http_force"
        }],
        "DomainNames": "example.com"
    }
    ```
    

https\_force

-   You can configure a forced redirect to HTTPS. For more information, see [Configure a forced redirect](/help/en/cdn/user-guide/configure-url-redirection#task-261642).
    
-   Note on feature conflicts: The forced redirect to HTTPS feature and the forced redirect to HTTP feature (function: http\_force, function ID: 45) are mutually exclusive. If one of these features is already configured, you must delete its configuration before you can configure the other. Note that a feature is considered configured even if its switch parameter is set to \`off\`. You can call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) API operation to delete the specified configuration for the domain name.
    
-   Function ID (FunctionID/FuncId): 44.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable force redirect to HTTPS.
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
    https\_rewrite
    
    String
    
    No
    
    The redirect method. Valid status codes are 301 and 308.
    
    -   301: The GET request method does not change. Other request methods might change to GET.
        
    -   308: The request method and message body do not change.
        
    
    301
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "https_rewrite",
                "argValue": "301"
            }],
            "functionName": "https_force"
        }],
        "DomainNames": "example.com"
    }
    ```
    

https\_tls\_version

-   Description: Configures the TLS version. For more information, see [Configure TLS Version and Cipher Suites](/help/en/cdn/user-guide/configure-tls-version-control#task-261642).
    
-   Function ID (FunctionID/FuncId): 110.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    tls10
    
    String
    
    No
    
    Specifies whether to enable TLSv1.0.
    
    -   on (default): Enables the version.
        
    -   Off: Shutdown.
        
    
    on
    
    tls11
    
    String
    
    No
    
    Specifies whether to enable TLSv1.1.
    
    -   on (default): Enables the version.
        
    -   off: Indicates the shutdown state.
        
    
    on
    
    tls12
    
    String
    
    No
    
    Specifies whether to enable TLSv1.2.
    
    -   on (default): Enables the version.
        
    -   Off: Shut down.
        
    
    on
    
    tls13
    
    String
    
    No
    
    Specifies whether to enable TLSv1.3.
    
    -   On (Default)
        
    -   off: Indicates a shutdown.
        
    
    on
    
    ciphersuitegroup
    
    String
    
    No
    
    The cipher suite group.
    
    -   all (default): All cipher suites.
        
    -   strict: Strong cipher suites.
        
    -   custom: Custom cipher suites.
        
    
    all
    
    String
    
    No
    
    The cipher suites. This parameter is used when ciphersuitegroup is set to custom. You can specify multiple cipher suites. Separate them with commas (,).
    
    TLS\_ECDHE\_ECDSA\_WITH\_CHACHA20\_POLY1305\_SHA256,TLS\_ECDHE\_ECDSA\_WITH\_AES\_128\_GCM\_SHA256,TLS\_ECDHE\_RSA\_WITH\_CHACHA20\_POLY1305\_SHA256,TLS\_ECDHE\_RSA\_WITH\_AES\_128\_GCM\_SHA256
    
-   Configuration examples:
    
    -   Default configuration: Enable TLSv1.0, TLSv1.1, and TLSv1.2, and use all cipher suites.
        
        ```
        {
            "Functions": [{
                "functionArgs": [
                    {
                      "ArgValue": "on",
                      "ArgName": "tls10"
                    },
                    {
                      "ArgValue": "on",
                      "ArgName": "tls11"
                    },
                    {
                      "ArgValue": "on",
                      "ArgName": "tls12"
                    },
                    {
                      "ArgValue": "off",
                      "ArgName": "tls13"
                    },
                    {
                      "ArgValue": "all",
                      "ArgName": "ciphersuitegroup"
                    }
                  ],
                "functionName": "https_tls_version"
            }],
            "DomainNames": "example.com"
        }
        ```
        
    -   Enable TLSv1.2 and TLSv1.3, and use strong cipher suites.
        
        ```
        {
            "Functions": [{
                "functionArgs": [
                    {
                      "ArgValue": "off",
                      "ArgName": "tls10"
                    },
                    {
                      "ArgValue": "off",
                      "ArgName": "tls11"
                    },
                    {
                      "ArgValue": "on",
                      "ArgName": "tls12"
                    },
                    {
                      "ArgValue": "on",
                      "ArgName": "tls13"
                    },
                    {
                      "ArgValue": "strict",
                      "ArgName": "ciphersuitegroup"
                    }
                  ],
                "functionName": "https_tls_version"
            }],
            "DomainNames": "example.com"
        }
        ```
        
    -   Enable TLSv1.2 and TLSv1.3, and use custom cipher suites.
        
        ```
        {
            "Functions": [{
                "functionArgs": [
                    {
                      "ArgValue": "off",
                      "ArgName": "tls10"
                    },
                    {
                      "ArgValue": "off",
                      "ArgName": "tls11"
                    },
                    {
                      "ArgValue": "on",
                      "ArgName": "tls12"
                    },
                    {
                      "ArgValue": "on",
                      "ArgName": "tls13"
                    },
                    {
                      "ArgValue": "custom",
                      "ArgName": "ciphersuitegroup"
                    },
                    {
                      "ArgValue": "TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
                      "ArgName": "ciphersuite"
                    }
                  ],
                "functionName": "https_tls_version"
            }],
            "DomainNames": "example.com"
        }
        ```
        

https\_client\_cert

-   Description: Configures client authentication certificates. For more information, see [Client authentication certificate](/help/en/cdn/user-guide/client-authentication-certificate).
    
-   Function ID (FunctionID/FuncId): 111.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    client\_certificate\_verify
    
    String
    
    Yes
    
    Specifies whether to enable client certificate authentication.
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    `on`
    
    client\_certificate
    
    String
    
    Yes
    
    The self-signed client certificate (public key). The CA certificate must meet the following format requirements:
    
    -   Starts with `-----BEGIN CERTIFICATE-----` and ends with `-----END CERTIFICATE-----`.
        
    
    `-----BEGIN PUBLIC KEY-----`
    
    `***********`
    
    `-----END PUBLIC KEY-----`
    
    client\_verify\_depth
    
    String
    
    No
    
    The authentication depth, also known as the **certificate chain depth**. This parameter specifies the number of certificate levels in the **trust chain** used to authenticate a **client certificate**. The depth is the number of levels from the **client certificate** itself back to the **root CA certificate**. The default value is 1.
    
    `1`
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "client_certificate_verify",
                "argValue": "on"
            }, {
                "argName": "client_certificate",
                "argValue": "-----BEGIN PUBLIC KEY-----***********-----END PUBLIC KEY-----"
            }],
            "functionName": "https_client_cert"
        }],
        "DomainNames": "example.com"
    }
    ```
    

HSTS

-   Description: This feature is used to configure HTTP Strict Transport Security (HSTS). For detailed configuration instructions, see [Configure HSTS](/help/en/cdn/user-guide/configure-hsts#task-261642).
    
-   Function ID (FunctionID/FuncId): 112.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enabled
    
    String
    
    Yes
    
    Specifies whether to enable HSTS.
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
    https\_hsts\_max\_age
    
    Integer
    
    Yes
    
    The expiration time in seconds.
    
    **Note**
    
    A value of 5184000 s (60 days) is recommended.
    
    5184000
    
    https\_hsts\_include\_subdomains
    
    String
    
    No
    
    Specifies whether to include subdomains in the HSTS header. Valid values are on and off.
    
    **Note**
    
    Before you enable this parameter, make sure that HTTPS is enabled for all subdomains of the accelerated domain name. Otherwise, the subdomains will become inaccessible after they are automatically redirected to HTTPS.
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enabled",
                "argValue": "on"
            }, {
                "argName": "https_hsts_max_age",
                "argValue": "5184000"
            }, {
                "argName": "https_hsts_include_subdomains",
                "argValue": "off"
            }],
            "functionName": "HSTS"
        }],
        "DomainNames": "example.com"
    }
    ```
    

## Access control

referer\_white\_list\_set

-   Description: Configures a Referer whitelist. For more information, see [Configure a Referer blacklist/whitelist](/help/en/cdn/user-guide/configure-a-referer-whitelist-or-blacklist-to-enable-hotlink-protection#task-187634).
    
-   Note on feature conflicts: The Referer whitelist feature and the Referer blacklist feature (function: referer\_black\_list\_set, function ID: 5) are mutually exclusive. If one of these features is already configured, you must delete its configuration before you can configure the other. Note that a feature is considered configured even if its switch parameter is set to \`off\`. You can call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) API operation to delete the specified configuration for the domain name.
    
-   Feature ID (FunctionID/FuncId): 1.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    refer\_domain\_allow\_list
    
    String
    
    Yes
    
    The whitelist. Separate multiple domain names with commas (,).
    
    `example.aliyundoc.com,demo.aliyundoc.com`
    
    allow\_empty
    
    String
    
    No
    
    Specifies whether to allow requests with an empty Referer header to access CDN resources. Valid values:
    
    -   on: Allows access.
        
    -   off (default): Denies access.
        
    
    off
    
    redirect\_url
    
    String
    
    No
    
    The redirection URL. If the Referer header of a user request does not match the whitelist, the request is blocked. Instead of returning a 403 status code, CDN returns a 302 status code and the Location header. This parameter specifies the value of the Location header. The URL must start with \`http://\` or \`https://\`.
    
    `http://www.example.com`
    
    disable\_ast
    
    String
    
    No
    
    Use the exact match pattern to specify if domain names in the whitelist require an exact match. If this option is selected (on), only exact domain name matches are allowed.
    
    -   If the value is on:
        
        -   Exact match is supported.
            
            -   If you enter `example.com` in the whitelist, it matches `example.com`.
                
            -   If you enter `a*b.example.com` in the whitelist, it matches `a<any characters>b.example.com`.
                
        -   Suffix match is not supported.
            
    -   If the value is off (default):
        
        -   Exact match is not supported.
            
        -   Suffix match is supported.
            
            -   If you enter `example.com` in the whitelist, it matches `example.com` and `<any characters>.example.com`.
                
            -   If you enter `a*b.example.com` in the whitelist, it matches `a<any characters>b.example.com` and `<any characters>.a<any characters>b.example.com`.
                
    
    off
    
    ignore\_scheme
    
    String
    
    No
    
    Specifies whether to ignore the scheme in the Referer header. If this feature is enabled, a Referer header without an HTTP or HTTPS protocol is still considered valid. Example:
    
    -   If the value is \`on\`, the Referer format is as follows:
        
        `referer: www.example.com`
        
    -   If the value is \`off\` (default), the Referer format is as follows:
        
        `referer: https://www.example.com`
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "allow_empty",
                "argValue": "off"
            }, {
                "argName": "refer_domain_allow_list",
                "argValue": "example.aliyundoc.com,demo.aliyundoc.com"
            }],
            "functionName": "referer_white_list_set"
        }],
        "DomainNames": "example.com"
    }
    ```
    

referer\_black\_list\_set

-   You can use this feature to configure a Referer blacklist. For more information, see [Configure Referer Blacklist/Whitelist](/help/en/cdn/user-guide/configure-a-referer-whitelist-or-blacklist-to-enable-hotlink-protection#task-187634).
    
-   Note on feature conflicts: The Referer blacklist feature and the Referer whitelist feature (function: referer\_white\_list\_set, function ID: 1) are mutually exclusive. If one of these features is already configured, you must delete its configuration before you can configure the other. Note that a feature is considered configured even if its switch parameter is set to \`off\`. You can call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) API operation to delete the specified configuration for the domain name.
    
-   Feature ID (FunctionID/FuncId): 5.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    refer\_domain\_deny\_list
    
    String
    
    Yes
    
    The blacklist. Separate multiple domain names with commas (,).
    
    `example.aliyundoc.com,demo.aliyundoc.com`
    
    allow\_empty
    
    String
    
    No
    
    Specifies whether to allow requests with an empty Referer header to access CDN resources:
    
    -   on: Allows access.
        
    -   off: Denies access.
        
    
    off
    
    redirect\_url
    
    String
    
    No
    
    The redirection URL. If the Referer header of a user request matches the blacklist, the request is blocked. Instead of returning a 403 status code, CDN returns a 302 status code and the Location header. This parameter specifies the value of the Location header. The URL must start with \`http://\` or \`https://\`.
    
    `http://www.example.com`
    
    disable\_ast
    
    String
    
    No
    
    Specifies whether to enable exact match for the domain names in the blacklist. If you set this parameter to \`on\`, exact match is enabled.
    
    -   If the value is \`on\`:
        
        -   Exact match is supported.
            
            -   If you add `example.com` to the blacklist, it matches `example.com`.
                
            -   If you add `a*b.example.com` to the blacklist, it matches `a<any string>b.example.com`.
                
        -   Suffix match is not supported.
            
    -   If the value is \`off\` (default):
        
        -   Exact match is not supported.
            
        -   Suffix match is supported.
            
            -   If you add `example.com` to the blacklist, it matches `example.com` and `<any string>.example.com`.
                
            -   If you add `a*b.example.com` to the blacklist, it matches `a<any string>b.example.com` and `<any string>.a<any string>b.example.com`.
                
    
    off
    
    ignore\_scheme
    
    String
    
    No
    
    Specifies whether to ignore the scheme in the Referer header. If this feature is enabled, a Referer header without an HTTP or HTTPS protocol is still considered valid. Example:
    
    -   If the value is \`on\`, the Referer format is as follows:
        
        `referer: www.example.com`
        
    -   If the value is \`off\` (default), the Referer format is as follows:
        
        `referer: https://www.example.com`
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "allow_empty",
                "argValue": "off"
            }, {
                "argName": "refer_domain_deny_list",
                "argValue": "example.aliyundoc.com,demo.aliyundoc.com"
            }],
            "functionName": "referer_black_list_set"
        }],
        "DomainNames": "example.com"
    }
    ```
    

aliauth

-   Description: Configures URL signing. For more information, see [Configure URL signing](/help/en/cdn/user-guide/configure-url-signing#task-2106935).
    
-   Feature ID (FunctionID/FuncId): 25.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    auth\_m3u8
    
    String
    
    No
    
    Specifies whether to rewrite the content of M3U8 files. This feature adds signing information to the TS files within the M3U8 file to prevent access failures. Valid values are \`on\` (default) and \`off\`.
    
    on
    
    auth\_type
    
    String
    
    Yes
    
    The signing type. Valid values:
    
    -   no\_auth: No signing.
        
    -   type\_a: Type A signing.
        
    -   type\_b: Type B signing.
        
    -   type\_c: Type C signing.
        
    -   type\_d: Type D signing.
        
    -   type\_e: Type E signing.
        
    -   type\_f: Type F signing.
        
    
    type\_a
    
    auth\_key1
    
    String
    
    Yes
    
    Encryption key 1. The key must be 16 to 128 characters in length and can contain uppercase letters, lowercase letters, and digits.
    
    1234567890123456789
    
    auth\_key2
    
    String
    
    No
    
    Encryption key 2. The key must be 16 to 128 characters in length and can contain uppercase letters, lowercase letters, and digits.
    
    1234567890123456789
    
    ali\_auth\_delta
    
    Integer
    
    No
    
    The validity period of the signed URL. Default: 1800. Unit: seconds.
    
    1800
    
    req\_auth\_ip\_white
    
    String
    
    No
    
    The IP address whitelist. IP addresses in this list are not subject to signing.
    
    You can enter multiple IP addresses. Separate them with commas.
    
    192.168.0.1
    
    req\_auth\_ip\_acl\_xfwd
    
    String
    
    No
    
    The method to fetch the client IP address for the whitelist. Valid values:
    
    -   on: This is the default mode. In this mode, the first IP address on the left in the X-Forwarded-For header is checked. This IP address is the originating IP address of the client.
        
    -   off: In this mode, the IP address used by the client to establish the connection with the CDN point of presence (PoP) is checked.
        
    -   all: Both of the following IP addresses are checked:
        
        -   The first IP address on the left in the X-Forwarded-For header, which is the originating IP address of the client.
            
        -   The IP address used by the client to establish the connection with the CDN PoP.
            
    
    all
    
    sign\_param
    
    String
    
    No
    
    The name of the signing parameter. This parameter is valid only when \`auth\_type\` is set to \`type\_f\`.
    
    sign
    
    time\_param
    
    String
    
    No
    
    The name of the timestamp parameter. This parameter is valid only when \`auth\_type\` is set to \`type\_f\`.
    
    time
    
    time\_format
    
    String
    
    No
    
    The timestamp format. This parameter is valid only when \`auth\_type\` is set to \`type\_f\`.
    
    -   dec: Decimal
        
    -   hex: Hexadecimal
        
    
    hec
    
    path\_encoding
    
    String
    
    No
    
    The URL encoding switch. Valid values are \`on\` and \`off\`. This parameter is valid only when \`auth\_type\` is set to \`type\_f\`.
    
    on
    
-   Configuration examples:
    
    -   Type A signing
        
        ```
        {
            "Functions": [{
                "functionArgs": [{
                    "argName": "auth_type",
                    "argValue": "type_a"
                }, {
                    "argName": "auth_key1",
                    "argValue": "1234567890123456789"
                }, {
                    "argName": "auth_key2",
                    "argValue": "1234567890123456789"
                }, {
                    "argName": "ali_auth_delta",
                    "argValue": 1800
                }, {
                    "argName": "req_auth_ip_white",
                    "argValue": "192.168.0.1"
                }, {
                    "argName": "req_auth_ip_acl_xfwd",
                    "argValue": "all"
                }],
                "functionName": "aliauth"
            }],
            "domainNames": "example.com"
        }
        ```
        
    -   Type F signing
        
        ```
        {
            "Functions": [{
                "functionArgs": [{
                    "argName": "auth_type",
                    "argValue": "type_f"
                },{
                    "argName": "auth_key1",
                    "argValue": "1234567890123456789"
                },{
                    "argName": "auth_key2",
                    "argValue": "1234567890123456789"
                },{
                    "argName": "ali_auth_delta",
                    "argValue": 1800
                },{
                    "argName": "sign_param",
                    "argValue": "sign"
                },{
                    "argName": "time_param",
                    "argValue": "time",
                },{
                    "argName": "time_format",
                    "argValue": "hec"
                },{
                    "argName": "path_encoding",
                    "argValue": "on"
                }],
                "functionName": "aliauth"
            }],
            "domainNames": "example.com"
        }
        ```
        

cdn\_remote\_auth

-   Description: Configures remote authentication. For more information, see [Configure remote authentication](/help/en/cdn/user-guide/configure-remote-authentication#task-2046900).
    
-   Feature ID (FunctionID/FuncId): 258.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable remote authentication:
    
    -   on: Enable.
        
    -   off: Disable.
        
    
    on
    
    remote\_auth\_addr
    
    String
    
    Yes
    
    The address of the authentication server. Format: `https://cdn.aliyun.com/auth` or `http://10.10.10.10/auth`.
    
    https://example.aliyundoc.com/auth
    
    remote\_auth\_method
    
    String
    
    Yes
    
    The request method. GET, POST, and HEAD are supported.
    
    get
    
    remote\_auth\_type
    
    String
    
    Yes
    
    The file types that require authentication. \`all\` indicates all file types. To specify multiple file types, separate them with vertical bars (|). The file types are case-sensitive. For example, \`jpg\` is not the same as \`JPG\`.
    
    all
    
    remote\_auth\_reserve\_args
    
    String
    
    Yes
    
    The parameters to retain in the request. To specify multiple parameters, separate them with vertical bars (|). The parameters are case-insensitive. For example, \`key\` is the same as \`KEY\`.
    
    \`all\`: Retains all parameters.
    
    \`ali\_delete\_all\_args\`: Deletes all URL parameters.
    
    all
    
    remote\_auth\_custom\_args
    
    String
    
    No
    
    The custom parameters to add. To specify multiple parameters, separate them with vertical bars (|). The parameters are case-sensitive. For example, \`key\` is not the same as \`KEY\`.
    
    empty
    
    remote\_auth\_reserve\_header
    
    String
    
    Yes
    
    The request headers to retain. To specify multiple headers, separate them with vertical bars (|). The headers are case-insensitive. For example, \`http\_remote\_addr\` is the same as \`HTTP\_Remote\_Addr\`.
    
    -   \`all\`: Retains all request headers.
        
    -   \`ali\_delete\_all\_headers\`: Deletes all request headers.
        
    
    all
    
    remote\_auth\_custom\_header
    
    String
    
    No
    
    The custom request headers to add. To specify multiple headers, separate them with vertical bars (|). The headers are case-insensitive. For example, \`http\_remote\_addr\` is the same as \`HTTP\_Remote\_Addr\`.
    
    empty
    
    remote\_auth\_success\_code
    
    Integer
    
    Yes
    
    The success status code. This is the status code that the authentication server returns to CDN after a successful authentication. Example: 200. You can specify multiple status codes. Separate them with commas.
    
    200
    
    remote\_auth\_fail\_code
    
    Integer
    
    Yes
    
    The failure status code. This is the status code that the authentication server returns to CDN after a failed authentication. Example: 403. You can specify multiple status codes. Separate them with commas.
    
    403,404
    
    remote\_auth\_other\_code\_act
    
    String
    
    No
    
    The action that CDN takes on a user request if the authentication server returns a status code that is not a success or failure code. Valid values:
    
    -   pass (default): Allows the request.
        
    -   Reject: reject.
        
    
    pass
    
    remote\_auth\_fail\_resp\_code
    
    Integer
    
    Yes
    
    The response status code that CDN returns to the client after a failed authentication. Example: 403.
    
    403
    
    remote\_auth\_timeout
    
    Integer
    
    Yes
    
    The authentication timeout period. Unit: ms. The maximum value is 3000.
    
    500
    
    remote\_auth\_timeout\_action
    
    String
    
    Yes
    
    The action to take when authentication times out. Valid values:
    
    -   pass: CDN allows the user request.
        
    -   reject: CDN returns the \`remote\_auth\_fail\_resp\_code\` to the user.
        
    
    pass
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "remote_auth_addr",
                "argValue": "https://example.aliyundoc.com/auth"
            }, {
                "argName": "remote_auth_method",
                "argValue": "get"
            }, {
                "argName": "remote_auth_type",
                "argValue": "all"
            }, {
                "argName": "remote_auth_reserve_args",
                "argValue": "all"
            }, {
                "argName": "remote_auth_custom_args",
                "argValue": ""
            }, {
                "argName": "remote_auth_reserve_header",
                "argValue": "all"
            }, {
                "argName": "remote_auth_custom_header",
                "argValue": ""
            }, {
                "argName": "remote_auth_success_code",
                "argValue": "200"
            }, {
                "argName": "remote_auth_fail_code",
                "argValue": "403"
            }, {
                "argName": "remote_auth_other_code_act",
                "argValue": "pass"
            }, {
                "argName": "remote_auth_fail_resp_code",
                "argValue": "403"
            }, {
                "argName": "remote_auth_timeout",
                "argValue": 500
            }, {
                "argName": "remote_auth_timeout_action",
                "argValue": "pass"
            }],
            "functionName": "cdn_remote_auth"
        }],
        "DomainNames": "example.com"
    }
    ```
    

ip\_allow\_list\_set

-   Description: Configures an IP address whitelist. For more information, see [Configure an IP address blacklist/whitelist](/help/en/cdn/user-guide/configure-an-ip-blacklist-or-whitelist#task-2116380).
    
-   Note on feature conflicts: The IP address whitelist feature and the IP blacklist feature (function: ip\_black\_list\_set, function ID: 13) are mutually exclusive. If one of these features is already configured, you must delete its configuration before you can configure the other. Note that a feature is considered configured even if its switch parameter is set to \`off\`. You can call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) API operation to delete the specified configuration for the domain name.
    
-   Feature ID (FunctionID/FuncId): 69.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    ip\_list
    
    String
    
    Yes
    
    The IP address list. Separate multiple IP addresses or CIDR blocks with commas (,).
    
    192.168.0.1/24
    
    customize\_response\_status\_code
    
    String
    
    No
    
    The custom response status code. The default value is empty, which indicates that the response status code is 403. You can enter a three-digit number to set a custom response status code.
    
    429
    
    ip\_acl\_xfwd
    
    String
    
    No
    
    Specifies whether to use the IP address in the X-Forwarded-For header. Valid values:
    
    -   on (default): Uses the first IP address on the left in the `x-forwarded-for` header of the user request.
        
    -   off: Uses the `originating IP address of the connection`.
        
    -   all: Uses both the IP address in the `x-forwarded-for` header and the `originating IP address of the connection`.
        
    
    all
    
    ip\_list\_notes
    
    String
    
    No
    
    Notes for the IP address list.
    
    192.x.x.1 (Malicious)
    
    192.x.x.2 (Illegal)
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "ip_list",
                "argValue": "192.168.0.1/24"
            }],
            "functionName": "ip_allow_list_set"
        }],
        "DomainNames": "example.com"
    }
    ```
    

ip\_black\_list\_set

-   Description: Configures an IP blacklist. For detailed console configuration, see [Configure IP Blacklist/Whitelist](/help/en/cdn/user-guide/configure-an-ip-blacklist-or-whitelist#task-2116380).
    
-   The IP blacklist feature and the IP whitelist feature (function: ip\_allow\_list\_set, Function ID: 69) are mutually exclusive. If one of these features is already configured, you must delete its configuration before you can configure the other. A feature is considered configured even if its switch parameter is set to \`off\`. You can call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) API operation to delete the specified configuration for the domain name.
    
-   Feature ID (FunctionID/FuncId): 13.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    ip\_list
    
    String
    
    Yes
    
    The IP address list. Separate multiple IP addresses or CIDR blocks with commas (,).
    
    192.168.0.1
    
    customize\_response\_status\_code
    
    String
    
    No
    
    The custom response status code. The default value is empty, which indicates that the response status code is 403. You can enter a three-digit number to set a custom response status code.
    
    429
    
    ip\_acl\_xfwd
    
    String
    
    No
    
    Specifies whether to use the IP address in the X-Forwarded-For header. Valid values:
    
    -   on (default): Uses the first IP address on the left in the `x-forwarded-for` header of the user request.
        
    -   off: Uses the `originating IP address of the connection`.
        
    -   all: Uses both the IP address in the `x-forwarded-for` header and the `originating IP address of the connection`.
        
    
    all
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "ip_list",
                "argValue": "192.168.0.1"
            }],
            "functionName": "ip_black_list_set"
        }],
        "DomainNames": "example.com"
    }
    ```
    

ali\_ua

-   Description: Allows you to restrict access based on the User-Agent. For more information, see [Configure UA blacklists and whitelists](/help/en/cdn/user-guide/configure-a-user-agent-blacklist-or-whitelist#task-2143096).
    
-   Feature ID (FunctionID/FuncId): 58.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    ua
    
    String
    
    Yes
    
    The User-Agent strings. Wildcard characters (\*) are supported to match any string. To specify multiple values, separate them with vertical bars (|). Example: `*curl*|*IE*|*chrome*|*firefox*`.
    
    \*curl\*|\*IE\*|\*chrome\*|\*firefox\*
    
    type
    
    String
    
    Yes
    
    The type of list. Valid values:
    
    -   black: Blacklist.
        
    -   white: Whitelist.
        
    
    **Note**
    
    The blacklist and whitelist are mutually exclusive. Only one can be active at a time.
    
    black
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "ua",
                "argValue": "*curl*|*IE*|*chrome*|*firefox*"
            }, {
                "argName": "type",
                "argValue": "black"
            }],
            "functionName": "ali_ua"
        }],
        "DomainNames": "example.com"
    }
    ```
    

## Performance optimization

tesla

-   Description: Configures HTML optimization. For more information, see [HTML optimization](/help/en/cdn/user-guide/enable-html-optimization#task-187634).
    
-   Function ID (FunctionID/FuncId): 16.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable HTML optimization:
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
    trim\_js
    
    String
    
    No
    
    Specifies whether to optimize the inline JavaScript (JS) code in HTML:
    
    -   Enabled.
        
    -   off (default): Disables optimization.
        
    
    off
    
    trim\_css
    
    String
    
    No
    
    Specifies whether to optimize the inline Cascading Style Sheets (CSS) code in HTML:
    
    -   on: The feature is enabled.
        
    -   off (default): Shutdown.
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "trim_css",
                "argValue": "off"
            }, {
                "argName": "trim_js",
                "argValue": "off"
            }],
            "functionName": "tesla"
        }],
        "DomainNames": "example.com"
    }
    ```
    

gzip

-   Description: Optimizes pages using Gzip compression. For more information, see [Gzip compression](/help/en/cdn/user-guide/use-the-gzip-compression-feature#task-187634).
    
-   Function ID (FunctionID/FuncId): 35.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable Gzip optimization for pages:
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }],
            "functionName": "gzip"
        }],
        "DomainNames": "example.com"
    }
    ```
    

brotli

-   Description: Configures Brotli compression for pages. For more information, see [Brotli compression](/help/en/cdn/user-guide/configure-brotli-compression#task-371714).
    
-   Function ID (FunctionID/FuncId): 97.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable Brotli compression for pages:
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }],
            "functionName": "brotli"
        }],
        "DomainNames": "example.com"
    }
    ```
    

set\_hashkey\_args

-   Description: Configures the feature that ignores URL parameters by retaining only specified parameters. For more information, see [Ignore Parameters](/help/en/cdn/user-guide/ignore-parameters#task-187634).
    
-   Feature conflict description: The feature that ignores URL parameters by retaining specified parameters conflicts with the feature that ignores URL parameters by deleting specified parameters (function: ali\_remove\_args, function ID: 75). You can enable only one of them. If one of the features is already configured, you must delete its configuration before you can configure the other. A feature is considered configured even if its switch parameter is set to \`off\`. To delete a specific configuration for a domain name, call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) operation.
    
-   Function ID (FunctionID/FuncId): 19.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    hashkey\_args
    
    String
    
    No
    
    The list of parameters to retain. Separate multiple parameters with commas (,). You can specify up to 10 parameters.
    
    key1,key2
    
    disable
    
    String
    
    Yes
    
    Specifies whether to ignore all parameters:
    
    -   on: Ignores all parameters. The features that delete, retain, or modify parameters become invalid. Only the feature that adds parameters remains valid.
        
    -   off (default): Disables the feature that ignores parameters. The features that retain, add, or delete parameters remain valid.
        
    
    **Note**
    
    Ignoring all parameters for the cache key has a lower priority than retaining a specified list of cache parameters.
    
    on
    
    keep\_oss\_args
    
    String
    
    Yes
    
    Specifies whether to retain parameters for origin fetch requests:
    
    -   on: Retains all parameters for origin fetch requests.
        
    -   off: The parameters for origin fetch requests are the same as the parameters for the cache key.
        
    
    on
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "hashkey_args",
                "argValue": ""
            }, {
                "argName": "keep_oss_args",
                "argValue": "on"
            }, {
                "argName": "disable",
                "argValue": "on"
            }],
            "functionName": "set_hashkey_args"
        }],
        "DomainNames": "example.com"
    }
    ```
    

ali\_remove\_args

-   Description: Configures the feature that ignores URL parameters by deleting specified parameters. For more information, see [Ignore Parameters](/help/en/cdn/user-guide/ignore-parameters#task-187634).
    
-   Feature conflict description: The feature that ignores URL parameters by deleting specified parameters conflicts with the feature that ignores URL parameters by retaining specified parameters (function: set\_hashkey\_args, function ID: 19). You can enable only one of them. If one of the features is already configured, you must delete its configuration before you can configure the other. A feature is considered configured even if its switch parameter is set to \`off\`. To delete a specific configuration for a domain name, call the [DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig#main-107864) operation.
    
-   Function ID (FunctionID/FuncId): 75.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    ali\_remove\_args
    
    String
    
    Yes
    
    The parameters to delete. Separate multiple parameters with spaces.
    
    **Note**
    
    The remaining parameters are used as the URL arguments in the cache key.
    
    test
    
    keep\_oss\_args
    
    String
    
    Yes
    
    Specifies whether to retain parameters for origin fetch requests:
    
    -   on: Retains all parameters for origin fetch requests.
        
    -   off: The parameters for origin fetch requests are the same as the parameters for the cache key.
        
    
    off
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "ali_remove_args",
                "argValue": "test"
            }, {
                "argName": "keep_oss_args",
                "argValue": "off"
            }],
            "functionName": "ali_remove_args"
        }],
        "DomainNames": "example.com"
    }
    ```
    

image\_transform

-   Description: Configures image processing for Alibaba Cloud CDN. For more information, see [Overview of image processing](/help/en/cdn/user-guide/image-editing-overview#concept-2534200).
    
-   Function ID (FunctionID/FuncId): 239.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable image processing:
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
    filetype
    
    String
    
    Yes
    
    The image formats that support transcoding. Separate multiple formats with a vertical bar (|). The following values are supported:
    
    -   JPEG: JPEG image format.
        
    -   JPG: JPG image format.
        
    -   PNG: PNG image format.
        
    -   WEBP: WEBP image format.
        
    -   BMP: BMP image format.
        
    -   GIF: GIF image format.
        
    -   TIFF: TIFF image format.
        
    -   JP2: JPEG 2000 image format.
        
    
    jpg|jpeg|png
    
    webp
    
    String
    
    No
    
    Specifies whether to enable automatic conversion to WebP:
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
    orient
    
    String
    
    No
    
    Specifies whether to enable automatic image rotation:
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    **Note**
    
    This feature takes effect only on images that have rotation properties.
    
    on
    
    slim
    
    Integer
    
    No
    
    Image slimming. Set the slimming percentage. The value can be an integer from 0 to 100. This feature reduces the image quality to save traffic without changing the resolution, dimensions, or format.
    
    10
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "filetype",
                "argValue": "jpg|jpeg|png"
            }, {
                "argName": "webp",
                "argValue": "on"
            }, {
                "argName": "orient",
                "argValue": "on"
            }, {
                "argName": "slim",
                "argValue": ""
            }, {
                "argName": "enable",
                "argValue": "on"
            }],
            "functionName": "image_transform"
        }],
        "DomainNames": "example.com"
    }
    ```
    

## Video features

range

-   Description: Configures range origin fetch. For detailed instructions, see [Configure range origin fetch](/help/en/cdn/user-guide/object-chunking#task-187634).
    
-   Feature ID (FunctionID or FuncId): 31.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable range origin fetch.
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    -   force: Forces the feature to be enabled.
        
    
    on
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }],
            "functionName": "range"
        }],
        "DomainNames": "example.com"
    }
    ```
    

video\_seek

-   Description: This feature lets you configure video seeking. For more information, see [Configure video seeking](/help/en/cdn/user-guide/video-seeking#task-187634).
    
-   Feature ID (FunctionID or FuncId): 30.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable video seeking.
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
    flv\_seek\_by\_time
    
    String
    
    No
    
    Specifies whether to enable seeking in FLV files by time.
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
    mp4\_seek\_start
    
    String
    
    No
    
    The custom start parameter for MP4 files.
    
    mp4starttime
    
    mp4\_seek\_end
    
    String
    
    No
    
    The custom end parameter for MP4 files.
    
    mp4endtime
    
    flv\_seek\_start
    
    String
    
    No
    
    The custom start parameter for FLV files.
    
    flvstarttime
    
    flv\_seek\_end
    
    String
    
    No
    
    The custom end parameter for FLV files.
    
    flvendtime
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }],
            "functionName": "video_seek"
        }],
        "DomainNames": "example.com"
    }
    ```
    

ali\_video\_split

-   Description: Configures the audio and video listening feature. For more information, see [Configure Audio and Video Listening](/help/en/cdn/user-guide/audio-extraction#task-1664445).
    
-   Feature ID (FunctionID or FuncId): 204.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable audio-only streaming.
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }],
            "functionName": "ali_video_split"
        }],
        "DomainNames": "example.com"
    }
    ```
    

ali\_video\_preview

-   Allows you to configure audio or video preview. For more information, see [Configure audio or video preview](/help/en/cdn/user-guide/audio-and-video-preview#task-2310777).
    
-   Feature ID (FunctionID or FuncId): 205.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable audio or video previews.
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    **Note**
    
    This feature supports TS and MP3 file formats. For FLV and MP4 files, use the video seeking feature.
    
    on
    
    ali\_video\_preview\_argument
    
    String
    
    Yes
    
    The custom parameter name for the preview duration. The value of this parameter must be in seconds.
    
    fds
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "ali_video_preview_argument",
                "argValue": "fds"
            }],
            "functionName": "ali_video_preview"
        }],
        "DomainNames": "example.com"
    }
    ```
    

hls\_token\_rewrite

-   Description: Configures M3U8 encryption and rewrite. For more information, see [Configure M3U8 encryption and rewrite](/help/en/cdn/user-guide/m3u8-encryption-and-rewrite#task-1938061).
    
-   Feature ID (FunctionID or FuncId): 253.
    
-   Parameter descriptions:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    enable
    
    String
    
    Yes
    
    Specifies whether to enable M3U8 encryption and rewrite.
    
    -   on: Enables the feature.
        
    -   off: Disables the feature.
        
    
    on
    
    hls\_token\_arg\_name
    
    String
    
    No
    
    The custom parameter name for the HLS token. If you do not set this parameter, \`MtsHlsUriToken\` is used as the parameter name.
    
    example
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "enable",
                "argValue": "on"
            }],
            "functionName": "hls_token_rewrite"
        }],
        "DomainNames": "example.com",
    }
    ```
    

## Rate limiting

limit\_rate

-   Description: Configures the rate limit for a single request.
    
-   FuncId: 72.
    
-   Description
    
    You can configure ali\_limit\_rate to limit the request rate based on parameters in the request URL and set the start and end times for rate limiting.
    
    You can implement rate limiting for request URL parameters by combining the traffic\_limit\_arg and traffic\_limit\_unit parameters.
    
    You can set the start and end times for the speed limit with the ali\_limit\_start\_hour and ali\_limit\_end\_hour parameters.
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    ali\_limit\_rate
    
    String
    
    Yes
    
    The rate limit for a single request, in Byte/s. For example, 200 KByte/s or 1 MByte/s. The value is a number followed by a unit (k or m).
    
    The minimum value is 100k. Values lower than 100k are treated as 100k.
    
    -   1m: The rate limit for a single request is 1 MByte/s.
        
    -   100k: The rate limit for a single request is 100 KByte/s.
        
    
    ali\_limit\_rate\_after
    
    String
    
    No
    
    The amount of data in bytes to send before the rate limit is applied. This parameter supports a number followed by a unit (k or m).
    
    1000
    
    traffic\_limit\_arg
    
    String
    
    No
    
    The name of the rate limit parameter to fetch from the request URL, such as rate.
    
    If the request does not contain this parameter, the default rate limit specified by ali\_limit\_rate is applied. To disable the rate limit when this parameter is absent from the request, set ali\_limit\_rate to 0k.
    
    rate
    
    traffic\_limit\_unit
    
    String
    
    No
    
    The unit for the traffic\_limit\_arg parameter. Valid values are m (MByte/s) and k (KByte/s). For example, if you set this parameter to m and the request URL contains rate=1, the rate limit is 1 MByte/s.
    
    The minimum rate limit is 100k. If a calculated rate is lower than 100k, the system uses 100k.
    
    m
    
    ali\_limit\_start\_hour
    
    Integer
    
    No
    
    The hour when the rate limit starts. The value must be an integer from 0 to 24 and must be less than the end time. The default value is 0.
    
    **Note**
    
    The value represents the hour of the day in 24-hour format. For example, 0 represents 00:00:00 and 24 represents 24:00:00.
    
    20
    
    ali\_limit\_end\_hour
    
    Integer
    
    No
    
    The hour when the rate limit ends. The value must be an integer from 0 to 24 and must be greater than the start time. The default value is 24.
    
    23
    
-   Example 1: Set the rate limit for a single request to 1 MB/s.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "ali_limit_rate",
                "argValue": "1m"
            }],
            "functionName": "limit_rate"
        }],
        "DomainNames": "example.com"
    }
    ```
    
-   Example 2: Set a default rate limit of 1 MB/s for a single request. If the request URL contains the \`rate\` parameter, its value is used for the rate limit. For example, if a request includes \`rate=200\`, the rate limit becomes 200 KB/s.
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "ali_limit_rate",
                "argValue": "1m"
            },{
                "argName": "traffic_limit_arg",
                "argValue": "rate"
            },{
                "argName": "traffic_limit_unit",
                "argValue": "k"
            }],
            "functionName": "limit_rate"
        }],
        "DomainNames": "example.com"
    }
    ```
    

## EdgeScript/Edge Routine

edge\_function

-   Description: EdgeScript. For more information, see [EdgeScript overview](/help/en/cdn/user-guide/edgescript-overview#task-2057648).
    
-   Function ID (FunctionID/FuncId): 180.
    
-   Parameter description:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    rule
    
    String
    
    Yes
    
    A DSL rule.
    
    if eq($uri, '/') {\\n rewrite('https://example.com/index.html', 'redirect')\\n}
    
    pri
    
    Integer
    
    Yes
    
    The priority. Valid values: \[0, 999\]. A smaller value indicates a higher priority.
    
    **Note**
    
    The priorities for rules at the head and foot positions are independent.
    
    0
    
    enable
    
    String
    
    Yes
    
    Specifies whether the rule is enabled.
    
    -   on: The rule is enabled.
        
    -   off: Disables the functionality.
        
    
    on
    
    name
    
    String
    
    Yes
    
    The rule name. The name can contain only letters and underscores (\_).
    
    test
    
    pos
    
    String
    
    No
    
    The position where the rule is executed. Valid values:
    
    -   head (default): The rule is executed at the beginning of the request processing flow.
        
    -   foot: The rule is executed at the end of the request processing flow.
        
    
    head
    
    brk
    
    String
    
    No
    
    Specifies whether to stop executing subsequent rules. Valid values:
    
    -   on: If this rule is hit, all subsequent rules at the current execution position are skipped.
        
    -   off (default): If this rule is hit, subsequent rules are still executed.
        
    
    off
    
    option
    
    String
    
    No
    
    An extension field.
    
    Empty
    
    grammar
    
    String
    
    No
    
    The rule syntax. Valid values: es2 (default) and js.
    
    /
    
    jsmode
    
    String
    
    No
    
    The JavaScript (JS) execution mode. Valid values:
    
    -   redirect: Block Mode.
        
    -   bypass (default): Bypass mode.
        
    
    /
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "name",
                "argValue": "test"
            }, {
                "argName": "rule",
                "argValue": "if eq($uri, '/') {\n  rewrite('https://example.com/index.html', 'redirect')\n}"
            }, {
                "argName": "pri",
                "argValue": "0"
            }, {
                "argName": "pos",
                "argValue": "head"
            }, {
                "argName": "enable",
                "argValue": "on"
            }, {
                "argName": "brk",
                "argValue": "off"
            }, {
                "argName": "option",
                "argValue": ""
            }],
            "functionName": "edge_function"
        }],
        "DomainName": "example.com"
    }
    ```
    

## Edge routine

edgeroutine

-   Description: Edge Routine. For more information, see [What is an Edge Routine?](/help/en/cdn/developer-reference/what-is-er#concept-2210991).
    
-   Feature ID (FunctionID/FuncId): 275.
    
-   This feature is available upon request. To request the feature, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    

## Rules engine

condition

-   Description: The rules engine is a feature that lets you configure various conditional rules through a graphical interface. Conditional rules detect parameters in user requests to determine whether a configuration applies to a specific request. This provides more flexible and precise control over how Alibaba Cloud Content Delivery Network (CDN) configuration policies are executed. For more information about this feature, see [Rules engine](/help/en/cdn/user-guide/rules-engine#concept-2206155).
    
-   Feature ID (FunctionID/FuncId): 250.
    
-   This feature is available upon request. To activate it, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    
-   Parameter description:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example**
    
    rule
    
    Array
    
    Yes
    
    The details of the rule condition. This includes the name, status, logical operator, and conditional expression.
    
    Rule condition:
    
    ```
    {\"match\":{\"logic\":\"and\",\"criteria\":[{\"matchType\":\"clientipVer\",\"matchObject\":\"CONNECTING_IP\",\"matchOperator\":\"equals\",\"matchValue\":\"v6\",\"negate\":false}]},\"name\":\"example\",\"status\":\"enable\"}
    ```
    
    Result:
    
    -   Rule name: example
        
    -   Status: enable
        
    -   Logical operator: and
        
    -   Conditional expression: The protocol version of the client's connecting IP address is v6.
        
    
    The format of the conditional expression (the \`argValue\` format) is described as follows:
    
    **Parameter**
    
    **Description**
    
    \\"match\\":
    
    \`match\` indicates a conditional matching expression.
    
    \\"logic\\":\\"and\\"
    
    \`logic\` is the logical operator for the conditional matching expression. Valid values are \`and\` and \`or\`.
    
    \\"criteria\\"
    
    \`criteria\` specifies the content of the conditional expression.
    
    \\"matchType\\":\\"clientipVer\\"
    
    \`matchType\` specifies the type of information in the user request to match.
    
    \\"matchObject\\":\\"CONNECTING\_IP\\"
    
    \`matchObject\` further refines the match type. For example, a client IP address can be a "connecting IP" or an "X-Forwarded-For (XFF) IP".
    
    \\"matchOperator\\":\\"equals\\"
    
    \`matchOperator\` specifies the action to perform for the match operation.
    
    \\"matchValue\\":\\"v6\\"
    
    \`matchValue\` is the preset value to match against the information in the user request.
    
    \\"negate\\":false
    
    \`negate\` specifies whether to negate the result of the conditional expression. Valid values are \`true\` and \`false\`.
    
    \\"name\\":\\"example\\"
    
    \`name\` is the name of the rule condition.
    
    \\"status\\":\\"enable\\"
    
    \`status\` is the active status of the rule condition.
    
-   Configuration example:
    
    The following example shows how to use OpenAPI to add a rules engine configuration for the accelerated domain name `example.com`. This configuration matches and filters requests based on whether the client IP protocol version is IPv6. For a detailed description of the rules engine feature, see [Rules engine](/help/en/cdn/user-guide/rules-engine).
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "rule",
                "argValue": "{\"match\":{\"logic\":\"and\",\"criteria\":[{\"matchType\":\"clientipVer\",\"matchObject\":\"CONNECTING_IP\",\"matchOperator\":\"equals\",\"matchValue\":\"v6\",\"negate\":false}]},\"name\":\"example\",\"status\":\"enable\"}"
            }],
            "functionName": "condition"
        }],
        "DomainNames": "example.com"
    }
    ```
    
    After you create a rules engine configuration, you can associate it with other feature configurations. For a list of features that currently support referencing rules engine configurations, see [Rules engine](/help/en/cdn/user-guide/rules-engine#b5f2024040857). This provides more flexible and precise control over how CDN configuration policies are executed. For example, the configuration for the [conditional origin feature](/help/en/cdn/user-guide/configure-a-conditional-origin) (function: \`origin\_dns\_host\`) can reference a rules engine configuration. For a configuration example, see [origin\_dns\_host](#parmname-ki0-52f-cu6).
    
    Notes:
    
    -   To reference a rule condition from another feature, set the \`parentId\` parameter to the \`configid\` of that rule condition. The \`configid\` is generated when you create the rule condition.
        
    -   The \`parentId\` parameter is not supported when the function is \`condition\` (rules engine).
        

## **Security configuration**

ali\_location

-   Feature: Location Blacklist. For more information, see [Region-based blacklist](/help/en/cdn/user-guide/configure-a-region-blacklist-or-whitelist).
    
-   FuncId: 57.
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Sample value**
    
    location
    
    String
    
    Yes
    
    The area where the block policy applies. The value can be in one of the following formats:
    
    -   A two-letter uppercase country code that complies with the ISO 3166 standard. To specify multiple countries, separate the codes with spaces.
        
    -   You can set the region to global.
        
    
    global
    
    type
    
    String
    
    Yes
    
    The type of the block policy. Valid values:
    
    -   black: Blocks client IP addresses from the specified area.
        
    -   white: Blocks client IP addresses from outside the specified area.
        
    
    white
    
-   Configuration example:
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "location",
                "argValue": "global"
            }, {
                "argName": "type",
                "argValue": "white"
            }],
            "functionName": "ali_location"
        }],
        "DomainNames": "example.com"
    }
    ```
    

## QUIC

iquic

-   Description: Configures basic QUIC parameters. For more information, see [Configure QUIC](/help/en/cdn/user-guide/what-is-the-quic-protocol).
    
-   Function ID (FunctionID/FuncId): 281.
    
-   Parameter description:
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Example value**
    
    iquic\_enable
    
    String
    
    Yes
    
    Specifies whether to enable the QUIC protocol:
    
    -   on: Enables the protocol.
        
    -   off: Shut down.
        
    
    `on`
    
-   Configuration example
    
    ```
    {
        "Functions": [{
            "functionArgs": [{
                "argName": "iquic_enable",
                "argValue": "on"
            }],
            "functionName": "iquic"
        }],
        "DomainNames": "example.com"
    }
    ```
