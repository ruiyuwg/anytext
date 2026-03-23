A service quota is the maximum number of cloud resources or operations that an Alibaba Cloud account can use. This topic describes the quotas, default values, and whether you can request a quota increase for Alibaba Cloud Global Accelerator (GA).

Alibaba Cloud service quotas are typically applied per account or per region. They are classified into the following types:

-   General quotas: The maximum number of cloud resources that an Alibaba Cloud account can use.
    
-   API rate limits: The frequency at which an Alibaba Cloud account can call Alibaba Cloud service API operations. This is also known as a queries per second (QPS) limit.
    
-   Privilege quotas: The permissions granted to an Alibaba Cloud account to use specific features. You can request privilege quotas to use Global Accelerator features that are not enabled by default.
    

Global Accelerator is subject to general quotas, API rate limits, and privilege quotas. You can adjust some of these quotas. To view or request a quota increase, log on to the Alibaba Cloud [Quota Center console](https://quotas.console.alibabacloud.com/products) or the [Global Accelerator console](https://ga.console.alibabacloud.com/quota). For more information about how to manage Global Accelerator quotas, see [Manage Global Accelerator quotas](/help/en/ga/user-guide/manage-ga-quotas#task-2382446).

## General quotas

The following table describes the general quotas of Global Accelerator.

**Note**

The default quota values in this topic are for reference only. For the actual default values, refer to the console. A hyphen (-) indicates that the item is not applicable.

### Quotas for Global Accelerator instances

**Quota name**

**Description**

**Default value**

**Maximum value**

**Can I make requests?**

**gaplus\_quota\_accelerator**

The maximum number of standard Global Accelerator instances that an Alibaba Cloud account can create

10

40

[Yes](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_accelerator)

**gaplus\_quota\_application\_monitor**

The maximum number of origin probing tasks that can be created for a Global Accelerator instance

5

\-

No

### Quotas for acceleration areas

**Quota name**

**Description**

**Default value**

**Maximum value**

**Are requests supported?**

**gaplus\_quota\_basic\_gaip\_limit**

The maximum number of accelerated IP addresses for a basic Global Accelerator instance

20

200

[Yes](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_basic_gaip_limit)

**gaplus\_quota\_basic\_gaip\_idle\_limit**

The maximum number of idle accelerated IP addresses for a basic Global Accelerator instance

10

\-

No

### Quotas for listeners

**Quota name**

**Description**

**Default value**

**Maximum value**

**Are requests supported?**

**gaplus\_quota\_listener\_per\_accelerator**

The maximum number of listeners that can be created for a standard Global Accelerator instance

50

\-

No

**gaplus\_quota\_port\_per\_listener**

The maximum number of listening ports that can be configured for a smart routing listener that uses TCP or UDP

30

\-

No

**gaplus\_quota\_forwarding\_rule\_per\_listener**

The maximum number of forwarding rules that a TCP, HTTP, or HTTPS listener supports

20 rules

150 rules

[Yes](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_forwarding_rule_per_listener)

**gaplus\_quota\_rule\_condition\_config\_per\_listener**

The total number of forwarding condition entries that a TCP, HTTP, or HTTPS listener supports

40 entries

150 entries

[Yes](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_rule_condition_config_per_listener)

**gaplus\_quota\_additional\_certs\_per\_listener**

The maximum number of additional certificates for an HTTPS listener

25

\-

No

**gaplus\_quota\_http\_idle\_timeout**

The connection idle timeout for HTTP and HTTPS listeners of pay-as-you-go standard GA instances

60 seconds

600 seconds

[Yes](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_http_idle_timeout)

**gaplus\_quota\_http\_request\_timeout**

The connection request timeout for HTTP and HTTPS listeners of pay-as-you-go standard GA instances

180 seconds

600 seconds

[Yes](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_http_request_timeout)

### Quotas for endpoint groups and endpoints

**Quota name**

**Description**

**Default value**

**Maximum value**

**Adjustable**

**Standard Global Accelerator instances**

**gaplus\_quota\_epgs\_per\_listener**

The maximum number of endpoint groups that can be added to a listener

2

10

[Yes](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_epgs_per_listener)

**gaplus\_quota\_vepg\_per\_listener**

The maximum number of virtual endpoint groups that can be added to a listener

10

150

[Yes](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_vepg_per_listener)

**gaplus\_quota\_endpoint**

The maximum number of endpoints that can be added to an endpoint group

4

30

[Yes](https://quotas.console.alibabacloud.com/products/ga/quotas?query=gaplus_quota_endpoint)

**Basic Global Accelerator instances**

None

The maximum number of endpoint groups that can be added to a basic Global Accelerator instance

1

\-

No

**gaplus\_quota\_basic\_endpoint\_limit**

The maximum number of endpoints that can be added to a basic Global Accelerator instance

200

\-

No

## API rate limits

The following table describes the API rate limits of Global Accelerator.

Limitations

Limit

How to request a quota increase

API rate limit

View the API rate limits in one of the following ways:

-   On the **API Rate Limit List** page in the [Quota Center](https://quotas.console.alibabacloud.com/flow-control-products/ga/quotas), view the API rate limits of GA API operations.
    
-   On the [Quota Management page](https://ga.console.alibabacloud.com/quota), find the **Quota Type** section and click the **API Rate Limit** tab to view the API rate limits of GA API operations.
    

Not applicable

## Privilege quotas

The following table describes the privilege quotas of Global Accelerator. A value of 0 indicates that you do not have the permissions to use the specific feature. You can use the feature only after Alibaba Cloud grants you the required permissions.

**Quota name**

**Description**

**Default value**

**Support for requests**

**Downgrades In The Console**

The feature to downgrade the specifications of standard Global Accelerator instances and bandwidth plans.

0

[Yes](https://quotas.console.alibabacloud.com/white-list-products/ga/quotas)

**Acceleration Area Whitelist**

The feature that allows whitelisted users to view hidden regions.

0

[Yes](https://quotas.console.alibabacloud.com/white-list-products/ga/quotas)
