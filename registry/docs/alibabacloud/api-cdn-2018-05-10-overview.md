## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`Cdn/2018-05-10`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. [Create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API-only access and use RAM policies to apply the principle of least privilege (PoLP). Alibaba Cloud accounts are only used when explicitly required.

To call APIs securely, configure the following:

-   A RAM user account
    
-   An [AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair) for the account
    

## Domain name management

**API**

**Title**

**Description**

Adding or removing domain names

Adding or removing domain names

[AddCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-addcdndomain)

AddCdnDomain

You can call the AddCdnDomain operation to add an accelerated domain name.

[BatchAddCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-batchaddcdndomain)

BatchAddCdnDomain

Adds one or more domain names to Alibaba Cloud CDN. You can add a maximum of 50 domain names at a time.

[DeleteCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletecdndomain)

DeleteCdnDomain

Removes an accelerated domain name from Alibaba Cloud CDN.

[DescribeCdnDeletedDomains](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdndeleteddomains)

DescribeCdnDeletedDomains

Queries the domain names that are deleted from your account.

Domain name ownership verification

Domain name ownership verification

[VerifyDomainOwner](/help/en/cdn/developer-reference/api-cdn-2018-05-10-verifydomainowner)

VerifyDomainOwner

Verifies the ownership of a specified domain name.

[DescribeVerifyContent](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeverifycontent)

DescribeVerifyContent

Queries the ownership verification content of an accelerated domain name.

[DescribeDomainVerifyData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainverifydata)

DescribeDomainVerifyData

Queries the verification content of an accelerated domain name based on whether the global resource plan is enabled.

Enabling or disabling domain names

Enabling or disabling domain names

[StartCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-startcdndomain)

StartCdnDomain

Enables a disabled domain name. After the domain name is enabled, the value of the DomainStatus parameter is changed to Online.

[BatchStartCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-batchstartcdndomain)

BatchStartCdnDomain

Enables one or more domain names at a time. After a domain name is enabled, the value of the DomainStatus parameter is changed to Online.

[StopCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-stopcdndomain)

StopCdnDomain

Disables an accelerated domain name. After the domain name is disabled, the value of the DomainStatus parameter is changed to Offline.

[BatchStopCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-batchstopcdndomain)

BatchStopCdnDomain

Disables one or more accelerated domain names at a time. After an accelerated domain name is disabled, the value of the DomainStatus parameter is changed to Offline.

Domain name configuration

Domain name configuration

[DescribeUserDomains](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeuserdomains)

DescribeUserDomains

Queries all accelerated domain names in your Alibaba Cloud account and the status of the accelerated domain names. You can filter domain names by name or status. Fuzzy match is supported.

[DescribeDomainCname](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomaincname)

DescribeDomainCname

You can call this API to query the CNAME record of an accelerated domain name and verify its configuration.

[DescribeDomainsBySource](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainsbysource)

DescribeDomainsBySource

Queries accelerated domain names by origin server.

[DescribeCdnUserDomainsByFunc](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnuserdomainsbyfunc)

DescribeCdnUserDomainsByFunc

Queries accelerated domain names that have specified features configured and the status of the domain names.

[DescribeCdnDomainDetail](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdndomaindetail)

DescribeCdnDomainDetail

Queries the basic information about an accelerated domain name.

[DescribeCdnDomainConfigs](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdndomainconfigs)

DescribeCdnDomainConfigs

You can call the DescribeCdnDomainConfigs operation to retrieve the configurations of an accelerated domain name. You can query the configurations of multiple features in a single call.

[BatchSetCdnDomainConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-batchsetcdndomainconfig)

BatchSetCdnDomainConfig

You can call the BatchSetCdnDomainConfig operation to configure multiple domain names in a batch.

[BatchDeleteCdnDomainConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-batchdeletecdndomainconfig)

BatchDeleteCdnDomainConfig

Deletes configurations of multiple accelerated domain names at a time.

[BatchUpdateCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-batchupdatecdndomain)

BatchUpdateCdnDomain

Updates the configurations of multiple accelerated domain names at a time.

[DeleteSpecificConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificconfig)

DeleteSpecificConfig

Deletes specified configurations of an accelerated domain name.

[ModifyCdnDomainSchdmByProperty](/help/en/cdn/developer-reference/api-cdn-2018-05-10-modifycdndomainschdmbyproperty)

ModifyCdnDomainSchdmByProperty

Changes the acceleration region for an accelerated domain name.

[ModifyCdnDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-modifycdndomain)

ModifyCdnDomain

Modifies the configuration of an accelerated domain name.

Domain name configuration management in the staging environment

Domain name configuration management in the staging environment

[DescribeCdnDomainStagingConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdndomainstagingconfig)

DescribeCdnDomainStagingConfig

Queries the configurations of features in the staging environment.

[SetCdnDomainStagingConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-setcdndomainstagingconfig)

SetCdnDomainStagingConfig

You can call SetCdnDomainStagingConfig to configure an accelerated domain name in the staging environment.

[RollbackStagingConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-rollbackstagingconfig)

RollbackStagingConfig

Rolls back configurations in the staging environment. After you call this operation, all configurations in the staging environment are cleared.

[PublishStagingConfigToProduction](/help/en/cdn/developer-reference/api-cdn-2018-05-10-publishstagingconfigtoproduction)

PublishStagingConfigToProduction

Publishes the configurations of the staging environment to the production environment.

[DeleteSpecificStagingConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletespecificstagingconfig)

DeleteSpecificStagingConfig

Deletes a specified configuration of the staging environment.

Security settings

Security settings

[SetWaitingRoomConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-setwaitingroomconfig)

SetWaitingRoomConfig

Configures the virtual waiting room feature for an accelerated domain name. This operation is available only for accelerated domain names of the Dynamic CDN workload type.

[DescribeCdnUserConfigs](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnuserconfigs)

DescribeCdnUserConfigs

Queries configurations of security features.

[DescribeBlockedRegions](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeblockedregions)

DescribeBlockedRegions

Queries countries and regions that can be added to the blacklist.

## Refresh and prefetch

**API**

**Title**

**Description**

[RefreshObjectCacheByCacheTag](/help/en/cdn/developer-reference/api-cdn-2018-05-10-refreshobjectcachebycachetag)

RefreshObjectCacheByCacheTag

Refreshes the cache based on cache tags that you configured.

[DescribeRefreshQuota](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describerefreshquota)

DescribeRefreshQuota

DescribeRefreshQuota

[PushObjectCache](/help/en/cdn/developer-reference/api-cdn-2018-05-10-pushobjectcache)

PushObjectCache

Prefetches content from origin servers to points of presence (POPs). This reduces loads on origin servers because users can directly hit cache upon their first visits.

[RefreshObjectCaches](/help/en/cdn/developer-reference/api-cdn-2018-05-10-refreshobjectcaches)

RefreshObjectCaches

Purges files on POPs. After files are purged, the original file content immediately becomes invalid. If clients request the original file content, Alibaba Cloud CDN redirects the requests to the origin server where the content is stored. Then, Alibaba Cloud CDN caches the latest content to the POPs and returns it to the clients. Alibaba Cloud CDN allows you to purge content from multiple URLs at a time.

[DescribeRefreshTasks](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describerefreshtasks)

DescribeRefreshTasks

Call the DescribeRefreshTasks operation to query the status of refresh and prefetch tasks.

[DescribeRefreshTaskById](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describerefreshtaskbyid)

DescribeRefreshTaskById

You can call DescribeRefreshTaskById to query the status of refresh and prefetch tasks across the network.

[DescribePreloadDetailById](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describepreloaddetailbyid)

DescribePreloadDetailById

Queries the prefetch details of a task, including the prefetch progress of all resources in the task. Only users who are included in the whitelist can use this operation. You can contact your business manager to apply for the whitelist.

[DescribeCdnUserQuota](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnuserquota)

DescribeCdnUserQuota

Queries the quotas and usage of Alibaba Cloud CDN resources.

## Monitoring and usage analytics

**API**

**Title**

**Description**

Resource monitoring

Resource monitoring

Visit data

Visit data

[DescribeDomainPathData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainpathdata)

DescribeDomainPathData

Queries monitoring data including the amount of network traffic and the number of visits by directory.

[DescribeDomainQpsData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainqpsdata)

DescribeDomainQpsData

Queries the number of queries per second (QPS) for an accelerated domain name. The data is collected every 5 minutes. You can query data collected within the last 90 days.

[DescribeDomainQpsDataByLayer](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainqpsdatabylayer)

DescribeDomainQpsDataByLayer

Queries the number of queries per second (QPS) at a specific layer for one or more accelerated domain names. You can query data collected within the last 90 days.

[DescribeDomainBpsData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainbpsdata)

DescribeDomainBpsData

Queries bandwidth monitoring data for one or more accelerated domain names.

[DescribeDomainBpsDataByLayer](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainbpsdatabylayer)

DescribeDomainBpsDataByLayer

Queries bandwidth data by protocol.

[DescribeDomainBpsDataByTimeStamp](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainbpsdatabytimestamp)

DescribeDomainBpsDataByTimeStamp

Queries the bandwidth data at a specified time for an accelerated domain.

[DescribeDomainTrafficData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomaintrafficdata)

DescribeDomainTrafficData

Queries network traffic for one or more accelerated domain names. You can query data that is collected in the last 90 days.

[DescribeDomainHttpCodeData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainhttpcodedata)

DescribeDomainHttpCodeData

Queries the total number and proportions of HTTP status codes returned from an accelerated domain name. The data is collected every 5 minutes.

[DescribeDomainHttpCodeDataByLayer](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainhttpcodedatabylayer)

DescribeDomainHttpCodeDataByLayer

Queries HTTP status codes by protocol.

[DescribeDomainHitRateData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainhitratedata)

DescribeDomainHitRateData

Queries byte hit ratios that are measured in percentage.

[DescribeDomainReqHitRateData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainreqhitratedata)

DescribeDomainReqHitRateData

Queries the request hit ratio in percentage.

[DescribeDomainsUsageByDay](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainsusagebyday)

DescribeDomainsUsageByDay

Queries the monitoring data of an accelerated domain name. Data is collected every day. You can query data collected within the last 90 days.

[DescribeDomainDetailDataByLayer](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomaindetaildatabylayer)

DescribeDomainDetailDataByLayer

Retrieves detailed data for an accelerated domain name by protocol type.

[DescribeRangeDataByLocateAndIspService](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describerangedatabylocateandispservice)

DescribeRangeDataByLocateAndIspService

You can call DescribeRangeDataByLocateAndIspService to obtain bandwidth data by carrier and region.

Source data

Source data

[DescribeDomainSrcBpsData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainsrcbpsdata)

DescribeDomainSrcBpsData

Queries bandwidth monitoring data of requests that are redirected to origin servers for one or more accelerated domain names.

[DescribeDomainSrcHttpCodeData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainsrchttpcodedata)

DescribeDomainSrcHttpCodeData

Queries the proportions of HTTP status codes that are returned during back-to-origin routing.

[DescribeDomainSrcTrafficData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainsrctrafficdata)

DescribeDomainSrcTrafficData

Queries origin traffic for one or more specified accelerated domain names.

[DescribeDomainSrcQpsData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainsrcqpsdata)

DescribeDomainSrcQpsData

Queries the number of queries per second (QPS) that are sent to the origin server. You can query data collected in the last 90 days.

Real-time Monitoring

Real-time Monitoring

Visit data

Visit data

[DescribeDomainRealTimeTrafficData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimetrafficdata)

DescribeDomainRealTimeTrafficData

Queries the monitoring data of network traffic for one or more accelerated domain names.

[DescribeDomainRealTimeBpsData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimebpsdata)

DescribeDomainRealTimeBpsData

Queries the bandwidth data about one or more accelerated domain names.

[DescribeDomainRealTimeHttpCodeData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimehttpcodedata)

DescribeDomainRealTimeHttpCodeData

Queries the total number and proportions of HTTP status codes returned from an accelerated domain name.

[DescribeDomainRealTimeQpsData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimeqpsdata)

DescribeDomainRealTimeQpsData

Queries the number of queries per second for one or more accelerated domain names.

[DescribeDomainRealTimeReqHitRateData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimereqhitratedata)

DescribeDomainRealTimeReqHitRateData

Queries the request hit ratios for one or more accelerated domain names.

[DescribeDomainRealTimeByteHitRateData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimebytehitratedata)

DescribeDomainRealTimeByteHitRateData

Queries the byte hit ratios of accelerated domain names.

Source data

Source data

[DescribeDomainRealTimeSrcBpsData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimesrcbpsdata)

DescribeDomainRealTimeSrcBpsData

Queries origin bandwidth data for accelerated domain names.

[DescribeDomainRealTimeSrcHttpCodeData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimesrchttpcodedata)

DescribeDomainRealTimeSrcHttpCodeData

Queries the total number and proportions of HTTP status codes returned during back-to-origin routing.

[DescribeDomainRealTimeSrcTrafficData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimesrctrafficdata)

DescribeDomainRealTimeSrcTrafficData

Queries the monitoring data of back-to-origin traffic for one or more specified accelerated domains. The data is collected every minute.

EdgeScript (ES) monitoring

EdgeScript (ES) monitoring

[DescribeEsExecuteData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeesexecutedata)

DescribeEsExecuteData

Queries the execution status of scripts in EdgeScript (ES).

[DescribeEsExceptionData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeesexceptiondata)

DescribeEsExceptionData

Queries the execution errors of a script in EdgeScript (ES).

## Resource usage management

**API**

**Title**

**Description**

[DescribeCdnUserBillHistory](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnuserbillhistory)

DescribeCdnUserBillHistory

Queries the billing history under your Alibaba Cloud account.

[DescribeCdnUserBillPrediction](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnuserbillprediction)

DescribeCdnUserBillPrediction

Estimates resource usage of the current month.

[CreateUserUsageDataExportTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-createuserusagedataexporttask)

CreateUserUsageDataExportTask

Creates a task to export your resource usage history to a PDF file.

[DescribeUserUsageDataExportTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeuserusagedataexporttask)

DescribeUserUsageDataExportTask

Queries usage export tasks that were created in the last three months.

[DeleteUserUsageDataExportTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deleteuserusagedataexporttask)

DeleteUserUsageDataExportTask

Deletes a task that was used to export usage history.

[CreateUsageDetailDataExportTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-createusagedetaildataexporttask)

CreateUsageDetailDataExportTask

Creates a task to export resource usage details to an Excel file.

[DescribeUserUsageDetailDataExportTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeuserusagedetaildataexporttask)

DescribeUserUsageDetailDataExportTask

Queries tasks that were used to export resource usage details of one or more accelerated domain names that belong to your Alibaba Cloud account. Resource usage information is collected every five minutes.

[DeleteUsageDetailDataExportTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deleteusagedetaildataexporttask)

DeleteUsageDetailDataExportTask

Deletes a task that was used to export usage details.

[DescribeDomainUsageData](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainusagedata)

DescribeDomainUsageData

Queries the resource usage data of specific domain names in a specified billable region.

[DescribeCdnUserResourcePackage](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnuserresourcepackage)

DescribeCdnUserResourcePackage

You can call the DescribeCdnUserResourcePackage operation to query information about your current resource plans for CDN.

## Log management

**API**

**Title**

**Description**

Log operations

Log operations

[DeleteRealTimeLogLogstore](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deleterealtimeloglogstore)

DeleteRealTimeLogLogstore

Deletes the Logstore that is used by a specified configuration record of real-time log delivery.

[CreateRealTimeLogDelivery](/help/en/cdn/developer-reference/api-cdn-2018-05-10-createrealtimelogdelivery)

CreateRealTimeLogDelivery

Enables real-time log delivery for specific accelerated domain names.

[ModifyRealtimeLogDelivery](/help/en/cdn/developer-reference/api-cdn-2018-05-10-modifyrealtimelogdelivery)

ModifyRealtimeLogDelivery

Modifies the configurations of real-time log delivery for a specific domain name. Each domain name supports only one Logstore.

[DeleteRealtimeLogDelivery](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deleterealtimelogdelivery)

DeleteRealtimeLogDelivery

Deletes the configurations of real-time log delivery for specific accelerated domain names.

[DisableRealtimeLogDelivery](/help/en/cdn/developer-reference/api-cdn-2018-05-10-disablerealtimelogdelivery)

DisableRealtimeLogDelivery

Disables real-time log delivery for specific accelerated domain names.

[EnableRealtimeLogDelivery](/help/en/cdn/developer-reference/api-cdn-2018-05-10-enablerealtimelogdelivery)

EnableRealtimeLogDelivery

Enables real-time log delivery for an accelerated domain name.

[ListRealtimeLogDelivery](/help/en/cdn/developer-reference/api-cdn-2018-05-10-listrealtimelogdelivery)

ListRealtimeLogDelivery

Queries all real-time log delivery tasks within your Alibaba Cloud account.

[DescribeDomainRealtimeLogDelivery](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainrealtimelogdelivery)

DescribeDomainRealtimeLogDelivery

Queries the real-time log delivery information about an accelerated domain name.

[DescribeRealtimeDeliveryAcc](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describerealtimedeliveryacc)

DescribeRealtimeDeliveryAcc

Queries the number of real-time log deliveries.

[ListRealtimeLogDeliveryInfos](/help/en/cdn/developer-reference/api-cdn-2018-05-10-listrealtimelogdeliveryinfos)

ListRealtimeLogDeliveryInfos

Queries the information about the real-time log delivery feature in a specified region.

[ListRealtimeLogDeliveryDomains](/help/en/cdn/developer-reference/api-cdn-2018-05-10-listrealtimelogdeliverydomains)

ListRealtimeLogDeliveryDomains

Queries all domain names that are associated with a specific real-time log delivery configuration record.

Offline logs

Offline logs

[DescribeDomainCustomLogConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomaincustomlogconfig)

DescribeDomainCustomLogConfig

Queries the custom log configuration of an accelerated domain name.

[DescribeCustomLogConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecustomlogconfig)

DescribeCustomLogConfig

Queries the details about a custom logging configuration.

[DescribeCdnDomainLogs](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdndomainlogs)

DescribeCdnDomainLogs

Queries the address where you can download the log data of a specific domain name.

[ListDomainsByLogConfigId](/help/en/cdn/developer-reference/api-cdn-2018-05-10-listdomainsbylogconfigid)

ListDomainsByLogConfigId

Queries domain names by log configuration ID.

[ListUserCustomLogConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-listusercustomlogconfig)

ListUserCustomLogConfig

Queries all custom log configurations in your account.

## Service management

**API**

**Title**

**Description**

[OpenCdnService](/help/en/cdn/developer-reference/api-cdn-2018-05-10-opencdnservice)

OpenCdnService

Activates Alibaba Cloud CDN. You must activate Alibaba Cloud CDN before you can manage domain names in Alibaba Cloud CDN.

[DescribeCdnRegionAndIsp](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnregionandisp)

DescribeCdnRegionAndIsp

You can call the DescribeCdnRegionAndIsp operation to query regions and carriers.

[DescribeCdnOrderCommodityCode](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnordercommoditycode)

DescribeCdnOrderCommodityCode

Call DescribeCdnOrderCommodityCode to query the commodity code for a specified UID.

[DescribeCdnService](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnservice)

DescribeCdnService

You can call the DescribeCdnService operation to query the status of the Alibaba Cloud CDN service. The returned information includes the current metering method, the service activation time, the next metering method that will take effect, and the current service status.

## Certificate management

**API**

**Title**

**Description**

[DescribeCdnDomainByCertificate](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdndomainbycertificate)

DescribeCdnDomainByCertificate

Queries accelerated domain names by SSL certificate.

[DescribeDomainCertificateInfo](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomaincertificateinfo)

DescribeDomainCertificateInfo

Call the DescribeDomainCertificateInfo operation to query certificate information for a specified accelerated domain name.

[DescribeCdnCertificateDetail](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdncertificatedetail)

DescribeCdnCertificateDetail

Queries the detailed information about an SSL certificate.

[DescribeCdnCertificateList](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdncertificatelist)

DescribeCdnCertificateList

Queries the certificates of accelerated domain names.

[DescribeCdnSSLCertificateList](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnsslcertificatelist)

DescribeCdnSSLCertificateList

Queries the certificate list by domain name.

[DescribeCdnHttpsDomainList](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnhttpsdomainlist)

DescribeCdnHttpsDomainList

Queries all certificate information for your account.

[DescribeCertificateInfoByID](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecertificateinfobyid)

DescribeCertificateInfoByID

Queries the information about a specific certificate by certificate ID.

[DescribeCdnCertificateDetailById](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdncertificatedetailbyid)

DescribeCdnCertificateDetailById

Queries certificate details by certificate ID.

[DescribeUserCertificateExpireCount](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeusercertificateexpirecount)

DescribeUserCertificateExpireCount

Queries the number of domain names whose SSL certificates are about to expire or have already expired.

[CreateCdnCertificateSigningRequest](/help/en/cdn/developer-reference/api-cdn-2018-05-10-createcdncertificatesigningrequest)

CreateCdnCertificateSigningRequest

Creates a certificate signing request (CSR).

[SetCdnDomainCSRCertificate](/help/en/cdn/developer-reference/api-cdn-2018-05-10-setcdndomaincsrcertificate)

SetCdnDomainCSRCertificate

You can call this operation to configure an SSL certificate for a specific domain name.

[SetCdnDomainSMCertificate](/help/en/cdn/developer-reference/api-cdn-2018-05-10-setcdndomainsmcertificate)

SetCdnDomainSMCertificate

Enables or disables a ShangMi (SM) certificate for a domain name.

[DescribeCdnSMCertificateList](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnsmcertificatelist)

DescribeCdnSMCertificateList

Queries the ShangMi (SM) certificates of an accelerated domain name.

[DescribeCdnSMCertificateDetail](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnsmcertificatedetail)

DescribeCdnSMCertificateDetail

Queries the details about a ShangMi (SM) certificate.

[SetCdnDomainSSLCertificate](/help/en/cdn/developer-reference/api-cdn-2018-05-10-setcdndomainsslcertificate)

SetCdnDomainSSLCertificate

Enables or disables the certificate for a domain name and updates the certificate information.

## Tag management

**API**

**Title**

**Description**

[TagResources](/help/en/cdn/developer-reference/api-cdn-2018-05-10-tagresources)

TagResources

Adds one or more tags to specific resources.

[DescribeTagResources](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describetagresources)

DescribeTagResources

Queries tags that are added to specified resources.

[DescribeUserTags](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeusertags)

DescribeUserTags

Queries user tags.

[UntagResources](/help/en/cdn/developer-reference/api-cdn-2018-05-10-untagresources)

UntagResources

Removes tags from specified resources.

[ListTagResources](/help/en/cdn/developer-reference/api-cdn-2018-05-10-listtagresources)

ListTagResources

Queries the tags that are attached to a resource.

## Operations reports

**API**

**Title**

**Description**

[CreateCdnSubTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-createcdnsubtask)

CreateCdnSubTask

Creates a custom operations report.

[DescribeCdnSubList](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnsublist)

DescribeCdnSubList

The DescribeCdnSubList operation queries customized report tasks.

[UpdateCdnSubTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-updatecdnsubtask)

UpdateCdnSubTask

Updates one or more operations reports.

[DeleteCdnSubTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletecdnsubtask)

DeleteCdnSubTask

The ID of the request.

[DescribeCdnReport](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnreport)

DescribeCdnReport

Calls the DescribeCdnReport operation to query data from customized reports.

[DescribeCdnReportList](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnreportlist)

DescribeCdnReportList

You can call the DescribeCdnReportList operation to query a list of all custom reports.

[CreateCdnDeliverTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-createcdndelivertask)

CreateCdnDeliverTask

Creates a tracking task. After you create a tracking task, the system sends operations reports to you by email on a regular basis.

[DescribeCdnDeliverList](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdndeliverlist)

DescribeCdnDeliverList

Call the DescribeCdnDeliverList operation to query a list of report tracking tasks. This operation returns all tracking tasks under your account.

[UpdateCdnDeliverTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-updatecdndelivertask)

UpdateCdnDeliverTask

Updates a tracking task.

[DeleteCdnDeliverTask](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletecdndelivertask)

DeleteCdnDeliverTask

Deletes tracking tasks by task ID.

## Auxiliary tool operations

**API**

**Title**

**Description**

[DescribeIpInfo](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeipinfo)

DescribeIpInfo

Checks whether a specified IP address is the IP address of a CDN point of presence (POP).

[DescribeStagingIp](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describestagingip)

DescribeStagingIp

Queries node IP addresses in the staging environment.

[DescribeL2VipsByDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describel2vipsbydomain)

DescribeL2VipsByDomain

Queries the virtual IP addresses (VIPs) of L2 CDN points of presence (POPs) for a specific domain name.

[DescribeUserVipsByDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeuservipsbydomain)

DescribeUserVipsByDomain

Queries virtual IP addresses (VIPs) of CDN points of presence (POPs) by domain name.

[DescribeIpStatus](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeipstatus)

DescribeIpStatus

Queries the status of IP addresses of points of presence (POPs). The status of an IP address of a POP indicates whether content delivery acceleration is supported by the POP.

[AddFCTrigger](/help/en/cdn/developer-reference/api-cdn-2018-05-10-addfctrigger)

AddFCTrigger

Adds a Function Compute trigger.

[UpdateFCTrigger](/help/en/cdn/developer-reference/api-cdn-2018-05-10-updatefctrigger)

UpdateFCTrigger

Updates a specified Function Compute trigger.

[DescribeFCTrigger](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describefctrigger)

DescribeFCTrigger

Queries a specified Function Compute trigger.

[DeleteFCTrigger](/help/en/cdn/developer-reference/api-cdn-2018-05-10-deletefctrigger)

DeleteFCTrigger

Deletes a specified Function Compute trigger.

[ListFCTrigger](/help/en/cdn/developer-reference/api-cdn-2018-05-10-listfctrigger)

ListFCTrigger

Queries the Function Compute trigger that is set for an Alibaba Cloud CDN event.

## Security information query

**API**

**Title**

**Description**

[DescribeDomainCcActivityLog](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describedomainccactivitylog)

DescribeDomainCcActivityLog

Queries log entries of rate limiting.

## Others

**API**

**Title**

**Description**

[ModifyCdnService](/help/en/cdn/developer-reference/api-cdn-2018-05-10-modifycdnservice)

ModifyCdnService

Changes the metering method of Alibaba Cloud CDN.

[DescribeUserCdnStatus](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describeusercdnstatus)

DescribeUserCdnStatus

Queries the status of a user.

[DescribeCdnTypes](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdntypes)

DescribeCdnTypes

Queries the types of domain names.

[ModifyCdnDomainOwner](/help/en/cdn/developer-reference/api-cdn-2018-05-10-modifycdndomainowner)

ModifyCdnDomainOwner

Transfer domain names from an Alibaba Cloud account to the current account.

[DescribeCdnConditionIPBInfo](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnconditionipbinfo)

DescribeCdnConditionIPBInfo

Queries the Internet service provider (ISP), region, and country that are required for advanced conditions.

[DescribeCdnSecFuncInfo](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnsecfuncinfo)

DescribeCdnSecFuncInfo

Queries information about security features of Alibaba Cloud CDN.

[CheckCdnDomainExist](/help/en/cdn/developer-reference/api-cdn-2018-05-10-checkcdndomainexist)

CheckCdnDomainExist

Checks whether a domain name exists.

[CheckCdnDomainICP](/help/en/cdn/developer-reference/api-cdn-2018-05-10-checkcdndomainicp)

CheckCdnDomainICP

Checks whether an ICP filing is obtained for the domain name.

[BatchDescribeCdnIpInfo](/help/en/cdn/developer-reference/api-cdn-2018-05-10-batchdescribecdnipinfo)

BatchDescribeCdnIpInfo

Queries whether one or more IP addresses are assigned to Alibaba Cloud CDN.

[DescribeCdnFullDomainsBlockIPHistory](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnfulldomainsblockiphistory)

DescribeCdnFullDomainsBlockIPHistory

Queries the blocking history.

[SetCdnFullDomainsBlockIP](/help/en/cdn/developer-reference/api-cdn-2018-05-10-setcdnfulldomainsblockip)

SetCdnFullDomainsBlockIP

Blocks or unblocks IP addresses. This setting applies to all domain names in your account.

[DescribeCdnFullDomainsBlockIPConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdnfulldomainsblockipconfig)

DescribeCdnFullDomainsBlockIPConfig

You can call the DescribeCdnFullDomainsBlockIPConfig operation to query the configurations of full blocking.
