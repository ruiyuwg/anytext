## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`ResourceCenter/2022-12-01`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, [create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Manage Resource Center

**API**

**Title**

**Description**

[EnableResourceCenter](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-enableresourcecenter)

EnableResourceCenter

Activates the Resource Center service.

[GetResourceCenterServiceStatus](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getresourcecenterservicestatus)

GetResourceCenterServiceStatus

Queries the status of the Resource Center service.

## Resource search

**API**

**Title**

**Description**

[SearchResources](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-searchresources)

SearchResources

Searches for resources in your current account that you have permission to access.

[ListResourceTypes](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listresourcetypes)

ListResourceTypes

Queries the metadata of resource types

[GetResourceCounts](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getresourcecounts)

GetResourceCounts

Queries the number of resources in your account that you have permission to access.

## Cross-account resource search

**API**

**Title**

**Description**

[SearchMultiAccountResources](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-searchmultiaccountresources)

SearchMultiAccountResources

Searches for resources in the management account and multiple member accounts of a resource directory.

[GetMultiAccountResourceConfiguration](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getmultiaccountresourceconfiguration)

GetMultiAccountResourceConfiguration

Queries the configurations of a resource within the management account or a member of a resource directory.

[ListMultiAccountResourceGroups](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listmultiaccountresourcegroups)

ListMultiAccountResourceGroups

Queries the resource groups within the management account or a member in a resource directory.

[ListMultiAccountTagKeys](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listmultiaccounttagkeys)

ListMultiAccountTagKeys

Queries the tag keys of resources within the management account or a member of your resource directory.

[GetMultiAccountResourceCounts](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getmultiaccountresourcecounts)

GetMultiAccountResourceCounts

Queries the number of resources within the management account and multiple members of a resource directory.

## Advanced search

**API**

**Title**

**Description**

[ListExampleQueries](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listexamplequeries)

ListExampleQueries

Queries all sample query templates.

[CreateSavedQuery](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-createsavedquery)

CreateSavedQuery

Creates a custom query template.

[GetSavedQuery](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getsavedquery)

GetSavedQuery

Queries the information about a custom query template.

[ListSavedQueries](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listsavedqueries)

ListSavedQueries

Queries all custom query templates.

[UpdateSavedQuery](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-updatesavedquery)

UpdateSavedQuery

Updates a custom query template.

[DeleteSavedQuery](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-deletesavedquery)

DeleteSavedQuery

Deletes a custom query template.

[ExecuteSQLQuery](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-executesqlquery)

ExecuteSQLQuery

Executes an SQL statement to query the resources that can be accessed within the current account.

[ExecuteMultiAccountSQLQuery](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-executemultiaccountsqlquery)

ExecuteMultiAccountSQLQuery

Executes an SQL statement to query resources across accounts.

## Resource delivery

**API**

**Title**

**Description**

[CreateDeliveryChannel](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-createdeliverychannel)

CreateDeliveryChannel

Creates a resource delivery channel for the current account.

[DeleteDeliveryChannel](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-deletedeliverychannel)

DeleteDeliveryChannel

Deletes a single-account delivery channel.

[GetDeliveryChannel](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getdeliverychannel)

GetDeliveryChannel

Queries the information about a delivery channel within the current account.

[GetDeliveryChannelStatistics](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getdeliverychannelstatistics)

GetDeliveryChannelStatistics

Queries the statistics of a resource delivery channel in the current account.

[ListDeliveryChannels](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listdeliverychannels)

ListDeliveryChannels

Queries a list of delivery channels within the current account.

[UpdateDeliveryChannel](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-updatedeliverychannel)

UpdateDeliveryChannel

Updates a single-account delivery channel.

## Cross-account resource delivery

**API**

**Title**

**Description**

[CreateMultiAccountDeliveryChannel](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-createmultiaccountdeliverychannel)

CreateMultiAccountDeliveryChannel

Creates a multi-account delivery channel.

[DeleteMultiAccountDeliveryChannel](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-deletemultiaccountdeliverychannel)

DeleteMultiAccountDeliveryChannel

Deletes a multi-account delivery channel.

[GetMultiAccountDeliveryChannel](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getmultiaccountdeliverychannel)

GetMultiAccountDeliveryChannel

Queries the information about a cross-account resource delivery channel.

[GetMultiAccountDeliveryChannelStatistics](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getmultiaccountdeliverychannelstatistics)

GetMultiAccountDeliveryChannelStatistics

Queries the statistics on a multi-account delivery channel.

[ListMultiAccountDeliveryChannels](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listmultiaccountdeliverychannels)

ListMultiAccountDeliveryChannels

Queries a list of delivery channels in resource directory mode.

[UpdateMultiAccountDeliveryChannel](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-updatemultiaccountdeliverychannel)

UpdateMultiAccountDeliveryChannel

Updates a multi-account delivery channel.

## Others

**API**

**Title**

**Description**

[AssociateDefaultFilter](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-associatedefaultfilter)

AssociateDefaultFilter

Sets a default filter.

[CreateFilter](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-createfilter)

CreateFilter

Creates a filter.

[DeleteFilter](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-deletefilter)

DeleteFilter

Deletes a filter.

[DisableMultiAccountResourceCenter](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-disablemultiaccountresourcecenter)

DisableMultiAccountResourceCenter

Disables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.

[DisableResourceCenter](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-disableresourcecenter)

DisableResourceCenter

Deactivates the Resource Center service.

[DisassociateDefaultFilter](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-disassociatedefaultfilter)

DisassociateDefaultFilter

Cancels the default filter.

[EnableMultiAccountResourceCenter](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-enablemultiaccountresourcecenter)

EnableMultiAccountResourceCenter

Enables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.

[GetExampleQuery](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getexamplequery)

GetExampleQuery

Queries the information about a sample query template.

[GetMultiAccountResourceCenterServiceStatus](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getmultiaccountresourcecenterservicestatus)

GetMultiAccountResourceCenterServiceStatus

Queries the status of the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.

[GetResourceConfiguration](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-getresourceconfiguration)

GetResourceConfiguration

Queries the configurations of a resource within the current account.

[ListFilters](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listfilters)

ListFilters

Queries a list of filters.

[ListMultiAccountResourceRelationships](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listmultiaccountresourcerelationships)

ListMultiAccountResourceRelationships

Queries the relationships between resources within the management account or members of your resource directory.

[ListMultiAccountTagValues](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listmultiaccounttagvalues)

ListMultiAccountTagValues

Queries the tag values of resources within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.

[ListResourceRelationships](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listresourcerelationships)

ListResourceRelationships

Queries a list of resource relationships on which the current account has access permissions.

[ListTagKeys](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listtagkeys)

ListTagKeys

Queries the tag keys of resources within the current account.

[ListTagValues](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listtagvalues)

ListTagValues

Queries the tag values of resources within the current account.

[UpdateFilter](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-updatefilter)

UpdateFilter

Updates a filter.
