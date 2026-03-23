## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`Actiontrail/2020-07-06`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, [create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Trail

**API**

**Title**

**Description**

[CreateTrail](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-createtrail)

CreateTrail

Creates a trail to deliver events to a destination for long-term storage and analysis, such as an Object Storage Service (OSS) bucket, a Simple Log Service (SLS) Logstore, or a MaxCompute project.

[StartLogging](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-startlogging)

StartLogging

Enables a trail to start delivering ActionTrail events to Object Storage Service (OSS), Simple Log Service (SLS), or MaxCompute.

[StopLogging](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-stoplogging)

StopLogging

Disables a trail to stop delivering ActionTrail events to Object Storage Service (OSS), Simple Log Service (SLS), or MaxCompute.

## Event

**API**

**Title**

**Description**

[LookupEvents](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-lookupevents)

LookupEvents

Queries detailed historical events.

## Historical event delivery tasks

**API**

**Title**

**Description**

[CreateDeliveryHistoryJob](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-createdeliveryhistoryjob)

CreateDeliveryHistoryJob

Creates a data backfill task.

[ListDeliveryHistoryJobs](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-listdeliveryhistoryjobs)

ListDeliveryHistoryJobs

Queries a list of data backfill tasks.

## Data event selector

**API**

**Title**

**Description**

[ListDataEventSelectors](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-listdataeventselectors)

ListDataEventSelectors

Queries all data event selectors.

[GetDataEventSelector](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getdataeventselector)

GetDataEventSelector

Queries the details about the data event selector for a specified trail.

[PutDataEventSelector](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-putdataeventselector)

PutDataEventSelector

Creates or configures a data event selector. A trail must exist before you create a data event selector. If a trail does not exist, you can call the CreateTrail operation to create one.

[DeleteDataEventSelector](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-deletedataeventselector)

DeleteDataEventSelector

Deletes the data event selector for a specified trail.

## Other

**API**

**Title**

**Description**

[UpdateAdvancedQueryTemplate](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-updateadvancedquerytemplate)

UpdateAdvancedQueryTemplate

Updates an advanced query template.

[GetGlobalEventsStorageRegion](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getglobaleventsstorageregion)

GetGlobalEventsStorageRegion

Queries the region where global events are stored.

[CreateAdvancedQueryTemplate](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-createadvancedquerytemplate)

CreateAdvancedQueryTemplate

Creates an advanced query template.

[DeleteAdvancedQueryTemplate](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-deleteadvancedquerytemplate)

DeleteAdvancedQueryTemplate

Deletes an advanced query template.

[DescribeAdvancedQueryTemplate](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-describeadvancedquerytemplate)

DescribeAdvancedQueryTemplate

Queries advanced query templates.

[DescribeUserAlertCount](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-describeuseralertcount)

DescribeUserAlertCount

Queries the number of daily alerts within a specific time range.

[DescribeUserLogCount](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-describeuserlogcount)

DescribeUserLogCount

Queries the number of daily logs within a specific time range.

[GetAdvancedQueryTemplate](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getadvancedquerytemplate)

GetAdvancedQueryTemplate

Queries the details about an advanced query template.

[DeleteAdvancedQueryHistory](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-deleteadvancedqueryhistory)

DeleteAdvancedQueryHistory

Deletes an advanced query record.

[CreateAdvancedQueryHistory](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-createadvancedqueryhistory)

CreateAdvancedQueryHistory

Creates an advanced query record. It lets you save custom conditional statements for reuse.

[DescribeAdvancedQueryHistory](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-describeadvancedqueryhistory)

DescribeAdvancedQueryHistory

Queries all advanced query records.

[DescribeResourceLifeCycleEvents](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-describeresourcelifecycleevents)

DescribeResourceLifeCycleEvents

Queries the lifecycle events of a specified resource.

[DescribeScenes](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-describescenes)

DescribeScenes

Queries all advanced query scenarios.

[DescribeSearchTemplates](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-describesearchtemplates)

DescribeSearchTemplates

Queries advanced query templates for a specified scenario.

[ListDataEventServices](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-listdataeventservices)

ListDataEventServices

Queries the services that support data events and the names of these events.

[GetGovernanceMetrics](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getgovernancemetrics)

GetGovernanceMetrics

Queries the governance metrics of ActionTrail.

## Others

**API**

**Title**

**Description**

[DeleteDeliveryHistoryJob](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-deletedeliveryhistoryjob)

DeleteDeliveryHistoryJob

Deletes a data backfill task.

[DeleteTrail](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-deletetrail)

DeleteTrail

Deletes a trail.

[DescribeRegions](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-describeregions)

DescribeRegions

Queries the Alibaba Cloud regions that are supported by ActionTrail.

[DescribeTrails](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-describetrails)

DescribeTrails

Queries created trails.

[DisableInsight](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-disableinsight)

DisableInsight

Disables a specific type of insight event.

[EnableInsight](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-enableinsight)

EnableInsight

Enables the Insights feature.

[GetAccessKeyLastUsedEvents](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getaccesskeylastusedevents)

GetAccessKeyLastUsedEvents

Queries the information about the most recent events that are generated when a specified AccessKey pair is called to access Alibaba Cloud services.

[GetAccessKeyLastUsedInfo](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getaccesskeylastusedinfo)

GetAccessKeyLastUsedInfo

Queries the information about the most recent call of a specified AccessKey pair.

[GetAccessKeyLastUsedIps](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getaccesskeylastusedips)

GetAccessKeyLastUsedIps

Queries the information about the IP addresses that are most recently used when an AccessKey pair is called to access Alibaba Cloud services.

[GetAccessKeyLastUsedProducts](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getaccesskeylastusedproducts)

GetAccessKeyLastUsedProducts

Queries the information about the Alibaba Cloud services that are most recently accessed by using a specified AccessKey pair.

[GetAccessKeyLastUsedResources](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getaccesskeylastusedresources)

GetAccessKeyLastUsedResources

Queries the information about the resources that are most recently accessed by using a specified AccessKey pair.

[GetDeliveryHistoryJob](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getdeliveryhistoryjob)

GetDeliveryHistoryJob

Queries the details of a data backfill task.

[GetInsightSelectors](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getinsightselectors)

GetInsightSelectors

Retrieves the Insight event types to deliver for a trail.

[GetInsightTypes](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getinsighttypes)

GetInsightTypes

Lists all enabled insight types.

[GetInsightsEventsCount](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-getinsightseventscount)

GetInsightsEventsCount

Retrieves the number of Insights events for the current account.

[GetTrailStatus](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-gettrailstatus)

GetTrailStatus

Queries the status of a trail.

[PutInsightSelectors](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-putinsightselectors)

PutInsightSelectors

Specifies the types of Insight events to deliver for a trail.

[UpdateGlobalEventsStorageRegion](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-updateglobaleventsstorageregion)

UpdateGlobalEventsStorageRegion

Specifies the region where you want to store global events.

[UpdateTrail](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-updatetrail)

UpdateTrail

Updates the configurations of a trail.
