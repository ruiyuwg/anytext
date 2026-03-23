Alibaba Cloud sets default quotas on the cloud resources and API operations for each Alibaba Cloud account. This topic describes the quota items and their default values of Internet Shared Bandwidth, as well as whether the quotas are adjustable.

Quotas are set on a per-region or per-account basis. Quotas are categorized into the following types:

-   General quotas: the limits on cloud resources that are available to an Alibaba Cloud account.
    
-   API rate limits: the limits on API calls that an Alibaba Cloud account can make in a specific period of time. API rate limits are also known as QPS limits.
    
-   Privileges: the permissions to use advanced features. Privileges are granted by Alibaba Cloud to an account.
    

Internet Shared Bandwidth is subject to general quotas. You can apply for increases on some of the quotas. You can go to the [Quota Center page](https://quotas.console.alibabacloud.com/products) or [Quota Management page](https://vpc.console.alibabacloud.com/quota) to request a quota increase. For more information about quota management, see [Manage Internet Shared Bandwidth quotas](/help/en/internet-shared-bandwidth/user-guide/manage-internet-shared-bandwidth-quotas#task-nfp-g4k-wgb).

**Note**

This topic provides the default quota values for the service, and the actual default quota values may be different. The values in the Alibaba Cloud service console are the actual default quotas applied to your Alibaba Cloud account.

## General quotas

The following table describes the general quotas of Internet Shared Bandwidth.

**Name/ID**

**Description**

**Default value**

**Adjustable**

**cbwp\_quota\_eip\_num**

Maximum number of elastic IP addresses (EIPs) that can be associated with each Internet Shared Bandwidth instance

100

[Yes](https://quotas.console.alibabacloud.com/products/cbwp/quotas?query=cbwp_quota_eip_num)

## **API rate limits**

The following table describes the API rate limits of Internet Shared Bandwidth.

**API**

**Version**

**Default value**

**Description**

**Adjustable**

AddCommonBandwidthPackageIp

2016-04-28

300/60(s)

Maximum number of times that each Alibaba Cloud account can call the AddCommonBandwidthPackageIp operation per minute

[Yes](https://quotas.console.alibabacloud.com/flow-control-products/cbwp/quotas)

AddCommonBandwidthPackageIps

2016-04-28

300/60(s)

Maximum number of times that each Alibaba Cloud account can call the AddCommonBandwidthPackageIps operation per minute

[Yes](https://quotas.console.alibabacloud.com/flow-control-products/cbwp/quotas)

CreateCommonBandwidthPackage

2016-04-28

300/60(s)

Maximum number of times that each Alibaba Cloud account can call the CreateCommonBandwidthPackage operation per minute

[Yes](https://quotas.console.alibabacloud.com/flow-control-products/cbwp/quotas)

DeleteCommonBandwidthPackage

2016-04-28

300/60(s)

Maximum number of times that each Alibaba Cloud account can call the DeleteCommonBandwidthPackage operation per minute

[Yes](https://quotas.console.alibabacloud.com/flow-control-products/cbwp/quotas)

DescribeCommonBandwidthPackages

2016-04-28

300/60(s)

Maximum number of times that each Alibaba Cloud account can call the DescribeCommonBandwidthPackages operation per minute

[Yes](https://quotas.console.alibabacloud.com/flow-control-products/cbwp/quotas)

RemoveCommonBandwidthPackageIp

2016-04-28

300/60(s)

Maximum number of times that each Alibaba Cloud account can call the RemoveCommonBandwidthPackageIp operation per minute

[Yes](https://quotas.console.alibabacloud.com/flow-control-products/cbwp/quotas)
