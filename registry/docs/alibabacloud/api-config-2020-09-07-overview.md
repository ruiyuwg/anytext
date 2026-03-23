## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`Config/2020-09-07`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, [create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Account Groups

**API**

**Title**

**Description**

[CreateAggregator](/help/en/cloud-config/latest/api-config-2020-09-07-createaggregator)

CreateAggregator

A management account or a delegated administrator account in a resource directory can create an account group to centrally manage resources, compliance packages, and rules across multiple member accounts.

[UpdateAggregator](/help/en/cloud-config/latest/api-config-2020-09-07-updateaggregator)

UpdateAggregator

The management account or a delegated administrator account of a resource directory can modify the name and description of an account group, and add or remove members.

[GetAggregator](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregator)

GetAggregator

Queries the name, creation time, members, and type of an account group.

## Resources

**API**

**Title**

**Description**

Single-account

Single-account

[ListDiscoveredResources](/help/en/cloud-config/latest/api-config-2020-09-07-listdiscoveredresources)

ListDiscoveredResources

Queries a list of resources that are aggregated across regions in the current Alibaba Cloud account.

[GetDiscoveredResource](/help/en/cloud-config/latest/api-config-2020-09-07-getdiscoveredresource)

GetDiscoveredResource

Queries the details of a specific resource.

[GetResourceConfigurationTimeline](/help/en/cloud-config/latest/api-config-2020-09-07-getresourceconfigurationtimeline)

GetResourceConfigurationTimeline

Queries the configuration history of a specified resource. Cloud Config records every configuration and relationship change for a resource in a configuration history. Recording starts after you enable the Cloud Config service. By default, the history is retained for 10 years.

[GetResourceComplianceTimeline](/help/en/cloud-config/latest/api-config-2020-09-07-getresourcecompliancetimeline)

GetResourceComplianceTimeline

Queries the compliance evaluation history of a specified resource. The history is a set of compliance evaluation records that contain the timestamp and details of each evaluation.

[GenerateResourceInventory](/help/en/cloud-config/latest/api-config-2020-09-07-generateresourceinventory)

GenerateResourceInventory

Generates a downloadable inventory of global resources.

[GetResourceInventory](/help/en/cloud-config/latest/api-config-2020-09-07-getresourceinventory)

GetResourceInventory

Queries information about the most recently generated global resource inventory for the current account.

Multi-account

Multi-account

[ListAggregateDiscoveredResources](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregatediscoveredresources)

ListAggregateDiscoveredResources

Queries the resources in a specified account group.

[GetAggregateDiscoveredResource](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregatediscoveredresource)

GetAggregateDiscoveredResource

Queries the details of a specific resource in an account group.

[GetAggregateResourceConfigurationTimeline](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateresourceconfigurationtimeline)

GetAggregateResourceConfigurationTimeline

Queries the configuration history of a specific resource in a specified account group. After you enable Cloud Config, the service records all configuration and relationship changes for your resources and organizes them into a configuration history. This history is saved for 10 years by default.

[GetAggregateResourceComplianceTimeline](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateresourcecompliancetimeline)

GetAggregateResourceComplianceTimeline

Queries the compliance timeline of a specific resource in an account group. A compliance timeline is a set of compliance evaluation records for a resource. Each record includes the time and content of an evaluation.

[ListAggregateResourcesByAdvancedSearch](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregateresourcesbyadvancedsearch)

ListAggregateResourcesByAdvancedSearch

You can use SQL Select statements to search for resources in a specific account group based on fields in the resource properties.

[CreateAggregateAdvancedSearchFile](/help/en/cloud-config/latest/api-config-2020-09-07-createaggregateadvancedsearchfile)

CreateAggregateAdvancedSearchFile

Creates a downloadable file of advanced search results for resources in an account group.

[GetSupportedResourceRelationConfig](/help/en/cloud-config/latest/api-config-2020-09-07-getsupportedresourcerelationconfig)

GetSupportedResourceRelationConfig

Queries the supported resource relations for a specified resource type.

[ListSupportedProducts](/help/en/cloud-config/latest/api-config-2020-09-07-listsupportedproducts)

ListSupportedProducts

Queries the cloud services and resource types that are supported by Cloud Config.

## Rules

**API**

**Title**

**Description**

Single-account

Single-account

[CreateConfigRule](/help/en/cloud-config/latest/api-config-2020-09-07-createconfigrule)

CreateConfigRule

Creates a rule from a template or a custom rule using Function Compute to check resource compliance. After you create a rule, Cloud Config runs an initial evaluation and then automatically triggers subsequent evaluations based on the rule's trigger. You can also run evaluations manually.

[UpdateConfigRule](/help/en/cloud-config/latest/api-config-2020-09-07-updateconfigrule)

UpdateConfigRule

Modifies the description, input parameters, and risk level of a rule.

[ListConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-listconfigrules)

ListConfigRules

Queries a list of rules.

[GetConfigRule](/help/en/cloud-config/latest/api-config-2020-09-07-getconfigrule)

GetConfigRule

Queries the details of a specified rule.

[ListConfigRuleEvaluationResults](/help/en/cloud-config/latest/api-config-2020-09-07-listconfigruleevaluationresults)

ListConfigRuleEvaluationResults

Queries the compliance evaluation results of a rule.

[ListResourceEvaluationResults](/help/en/cloud-config/latest/api-config-2020-09-07-listresourceevaluationresults)

ListResourceEvaluationResults

Queries the evaluation results for a resource based on a rule.

[StartConfigRuleEvaluation](/help/en/cloud-config/latest/api-config-2020-09-07-startconfigruleevaluation)

StartConfigRuleEvaluation

Re-evaluates a specific rule or all rules in a compliance package.

[IgnoreEvaluationResults](/help/en/cloud-config/latest/api-config-2020-09-07-ignoreevaluationresults)

IgnoreEvaluationResults

Ignores the evaluation results of a rule for specific resources. You can also set a time period to ignore the rule. When the ignore period expires, the system automatically resumes displaying the evaluation results of the rule for the resources.

[GetConfigRuleSummaryByRiskLevel](/help/en/cloud-config/latest/api-config-2020-09-07-getconfigrulesummarybyrisklevel)

GetConfigRuleSummaryByRiskLevel

Queries the compliance summary based on the risk level of a rule.

[GetComplianceSummary](/help/en/cloud-config/latest/api-config-2020-09-07-getcompliancesummary)

GetComplianceSummary

Queries the compliance summary for the current account.

Multi-account

Multi-account

[CreateAggregateConfigRule](/help/en/cloud-config/latest/api-config-2020-09-07-createaggregateconfigrule)

CreateAggregateConfigRule

Creates a rule for a specified account group. You can create a rule from a template or create a custom rule using Function Compute. The rule checks your resources for compliance. After a rule is created, it automatically runs once. Cloud Config then runs evaluations based on the rule's trigger. You can also run evaluations manually.

[UpdateAggregateConfigRule](/help/en/cloud-config/latest/api-config-2020-09-07-updateaggregateconfigrule)

UpdateAggregateConfigRule

Modifies the description, input parameters, and risk level of a rule in a specified account group.

[ListAggregateConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregateconfigrules)

ListAggregateConfigRules

Queries the rules in a specified account group.

[GetAggregateConfigRule](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateconfigrule)

GetAggregateConfigRule

Queries the details of a specific rule in a specified account group.

[ListAggregateConfigRuleEvaluationResults](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregateconfigruleevaluationresults)

ListAggregateConfigRuleEvaluationResults

Queries the evaluation results of a rule for resources in a specified account group.

[ListAggregateResourceEvaluationResults](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregateresourceevaluationresults)

ListAggregateResourceEvaluationResults

Queries the rule evaluation results for resources in a specified account group.

[GetAggregateComplianceSummary](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregatecompliancesummary)

GetAggregateComplianceSummary

Queries the compliance summary for a specified account group.

[ListManagedRules](/help/en/cloud-config/latest/api-config-2020-09-07-listmanagedrules)

ListManagedRules

Queries the rule templates that are supported by Cloud Config.

[GetManagedRule](/help/en/cloud-config/latest/api-config-2020-09-07-getmanagedrule)

GetManagedRule

Queries the details of a specified rule template.

[ListPreManagedRules](/help/en/cloud-config/latest/api-config-2020-09-07-listpremanagedrules)

ListPreManagedRules

Queries the proactive rules supported by Cloud Config.

[EvaluatePreConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-evaluatepreconfigrules)

EvaluatePreConfigRules

Executes evaluation rules to perform compliance pre-checks on resources.

## Compliance Package

**API**

**Title**

**Description**

Single-account

Single-account

[UpdateCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-updatecompliancepack)

UpdateCompliancePack

Updates the configuration of a specified compliance pack in the current account.

[ListCompliancePacks](/help/en/cloud-config/latest/api-config-2020-09-07-listcompliancepacks)

ListCompliancePacks

Lists the compliance packs for the current account.

[GetCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-getcompliancepack)

GetCompliancePack

Queries the details of a specific compliance package.

[GetConfigRuleComplianceByPack](/help/en/cloud-config/latest/api-config-2020-09-07-getconfigrulecompliancebypack)

GetConfigRuleComplianceByPack

Queries the compliance statistics for rules in a specified compliance package.

[GetResourceComplianceByPack](/help/en/cloud-config/latest/api-config-2020-09-07-getresourcecompliancebypack)

GetResourceComplianceByPack

Queries the compliance results for resources in a compliance package.

[DetachConfigRuleToCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-detachconfigruletocompliancepack)

DetachConfigRuleToCompliancePack

This operation detaches one or more rules from a compliance package.

Multi-account

Multi-account

[CreateAggregateCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-createaggregatecompliancepack)

CreateAggregateCompliancePack

Creates a compliance pack for a specified account group.

[UpdateAggregateCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-updateaggregatecompliancepack)

UpdateAggregateCompliancePack

Updates a compliance pack in a specified account group.

[ListAggregateCompliancePacks](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregatecompliancepacks)

ListAggregateCompliancePacks

Queries the compliance packs in a specified account group.

[GetAggregateCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregatecompliancepack)

GetAggregateCompliancePack

Queries the details of a compliance pack in a specified account group.

[GenerateAggregateCompliancePackReport](/help/en/cloud-config/latest/api-config-2020-09-07-generateaggregatecompliancepackreport)

GenerateAggregateCompliancePackReport

Generates an assessment report for a specified compliance package in a specified account group.

[GetAggregateResourceComplianceByPack](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateresourcecompliancebypack)

GetAggregateResourceComplianceByPack

Queries the compliance statistics for resources in a specified compliance package within a specified account group.

[GetAggregateConfigRuleComplianceByPack](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateconfigrulecompliancebypack)

GetAggregateConfigRuleComplianceByPack

Queries the compliance results of rules in a specified compliance pack within a specified account group.

[ListCompliancePackTemplates](/help/en/cloud-config/latest/api-config-2020-09-07-listcompliancepacktemplates)

ListCompliancePackTemplates

Queries the details of all compliance pack templates provided by CloudConfig.

## Remediation templates

**API**

**Title**

**Description**

Single-account

Single-account

[CreateRemediation](/help/en/cloud-config/latest/api-config-2020-09-07-createremediation)

CreateRemediation

Creates a remediation for an existing rule.

[UpdateRemediation](/help/en/cloud-config/latest/api-config-2020-09-07-updateremediation)

UpdateRemediation

Updates the specified remediation setting.

[DeleteRemediations](/help/en/cloud-config/latest/api-config-2020-09-07-deleteremediations)

DeleteRemediations

Deletes specified remediation settings.

Multi-account

Multi-account

[CreateAggregateRemediation](/help/en/cloud-config/latest/api-config-2020-09-07-createaggregateremediation)

CreateAggregateRemediation

Creates a remediation for a rule in a specified account group.

[UpdateAggregateRemediation](/help/en/cloud-config/latest/api-config-2020-09-07-updateaggregateremediation)

UpdateAggregateRemediation

Updates a specified rule remediation.

[ListAggregateRemediations](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregateremediations)

ListAggregateRemediations

Queries the remediations in a specified account group.

[DeleteAggregateRemediations](/help/en/cloud-config/latest/api-config-2020-09-07-deleteaggregateremediations)

DeleteAggregateRemediations

Deletes the remediation settings for a rule in a specified account group.

[GetRemediationTemplate](/help/en/cloud-config/latest/api-config-2020-09-07-getremediationtemplate)

GetRemediationTemplate

Queries the details of an automatic remediation template.

## Deliveries

**API**

**Title**

**Description**

Single-account

Single-account

[CreateConfigDeliveryChannel](/help/en/cloud-config/latest/api-config-2020-09-07-createconfigdeliverychannel)

CreateConfigDeliveryChannel

Creates a delivery channel to deliver resource data to Simple Log Service (SLS), Object Storage Service (OSS), or Simple Message Queue (formerly MNS).

[UpdateConfigDeliveryChannel](/help/en/cloud-config/latest/api-config-2020-09-07-updateconfigdeliverychannel)

UpdateConfigDeliveryChannel

This operation modifies a delivery channel for the current account.

[ListConfigDeliveryChannels](/help/en/cloud-config/latest/api-config-2020-09-07-listconfigdeliverychannels)

ListConfigDeliveryChannels

Returns a list of delivery channels.

[GetConfigDeliveryChannel](/help/en/cloud-config/latest/api-config-2020-09-07-getconfigdeliverychannel)

GetConfigDeliveryChannel

Queries the details of a specified delivery channel.

Multi-account

Multi-account

[CreateAggregateConfigDeliveryChannel](/help/en/cloud-config/latest/api-config-2020-09-07-createaggregateconfigdeliverychannel)

CreateAggregateConfigDeliveryChannel

Creates a delivery channel for a specified account group to deliver resource data to Simple Log Service (SLS), Object Storage Service (OSS), or Simple Message Queue (formerly MNS).

## Tags

**API**

**Title**

**Description**

[ListTagResources](/help/en/cloud-config/latest/api-config-2020-09-07-listtagresources)

ListTagResources

Queries the tags attached to resources in Cloud Config.

[TagResources](/help/en/cloud-config/latest/api-config-2020-09-07-tagresources)

TagResources

Attaches tags to CloudConfig rules, account groups, and compliance packages.

[UntagResources](/help/en/cloud-config/latest/api-config-2020-09-07-untagresources)

UntagResources

Detaches tags from resources in Cloud Config.

## Service integration

**API**

**Title**

**Description**

[ListIntegratedService](/help/en/cloud-config/latest/api-config-2020-09-07-listintegratedservice)

ListIntegratedService

Queries the services integrated with CloudConfig and their statuses.

## Service settings

**API**

**Title**

**Description**

[GetConfigurationRecorder](/help/en/cloud-config/latest/api-config-2020-09-07-getconfigurationrecorder)

GetConfigurationRecorder

Queries the status of the Cloud Config service and the resource monitoring scope for the current account.

## Report Template

**API**

**Title**

**Description**

[CreateReportTemplate](/help/en/cloud-config/latest/api-config-2020-09-07-createreporttemplate)

Create Report Template

Create a compliance report template for the current UID.

[GetReportTemplate](/help/en/cloud-config/latest/api-config-2020-09-07-getreporttemplate)

Retrieve Compliance Report Template Details

Retrieve details of a compliance report template.

[UpdateReportTemplate](/help/en/cloud-config/latest/api-config-2020-09-07-updatereporttemplate)

Update Compliance Report template

Update Compliance Report template

[ListReportTemplates](/help/en/cloud-config/latest/api-config-2020-09-07-listreporttemplates)

Batch retrieve compliance report template details

Queries the details of compliance report templates in batches.

[DeleteReportTemplate](/help/en/cloud-config/latest/api-config-2020-09-07-deletereporttemplate)

Delete a Compliance Report template

Deletes a compliance report template.

[GenerateReportFromTemplate](/help/en/cloud-config/latest/api-config-2020-09-07-generatereportfromtemplate)

Generate a report based on a report template

Generate a report ID from a report template.

[GetReportFromTemplate](/help/en/cloud-config/latest/api-config-2020-09-07-getreportfromtemplate)

Obtain the latest report generated based on a report template.

Retrieves a report generated from a report template.

[TriggerReportSend](/help/en/cloud-config/latest/api-config-2020-09-07-triggerreportsend)

Latest report on completed real-time Testing Notifications by template ID

Sends a real-time test notification.

## Others

**API**

**Title**

**Description**

[DryRunConfigRule](/help/en/cloud-config/latest/api-config-2020-09-07-dryrunconfigrule)

DryRunConfigRule

This API performs a dry run on rules for proactive compliance pre-checks.

[DescribeDiscoveredResourceBatch](/help/en/cloud-config/latest/api-config-2020-09-07-describediscoveredresourcebatch)

DescribeDiscoveredResourceBatch

This operation retrieves the details of multiple resources in a batch.

[DescribeIntegratedServiceStatus](/help/en/cloud-config/latest/api-config-2020-09-07-describeintegratedservicestatus)

DescribeIntegratedServiceStatus

Queries the authorization status of an integrated cloud service.

[GetResourceConfigurationSample](/help/en/cloud-config/latest/api-config-2020-09-07-getresourceconfigurationsample)

GetResourceConfigurationSample

This operation obtains configuration samples for a specified resource type.

[GetResourceTypeProperties](/help/en/cloud-config/latest/api-config-2020-09-07-getresourcetypeproperties)

GetResourceTypeProperties

This operation retrieves the property descriptions for a specified resource type.

[ListAggregateRecommendManagedRules](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregaterecommendmanagedrules)

ListAggregateRecommendManagedRules

This operation retrieves the list of recommended managed rules for an account group.

[ListConfigRuleOperators](/help/en/cloud-config/latest/api-config-2020-09-07-listconfigruleoperators)

ListConfigRuleOperators

Lists the operators available for Cloud Config rules.

[ListRecommendManagedRules](/help/en/cloud-config/latest/api-config-2020-09-07-listrecommendmanagedrules)

ListRecommendManagedRules

This operation obtains a list of recommended managed rules.

[StartConfigRuleEvaluationByResource](/help/en/cloud-config/latest/api-config-2020-09-07-startconfigruleevaluationbyresource)

StartConfigRuleEvaluationByResource

Starts a re-evaluation of a single resource.

[ActiveAggregateConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-activeaggregateconfigrules)

ActiveAggregateConfigRules

Enables one or more rules in an account group. After a rule is enabled, the rule continues to automatically evaluate resources based on the trigger mechanism.

[ActiveConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-activeconfigrules)

ActiveConfigRules

Enables a rule in Cloud Config. After a rule is enabled, Cloud Config automatically evaluates the compliance of a resource based on the trigger mechanism of the rule.

[AttachAggregateConfigRuleToCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-attachaggregateconfigruletocompliancepack)

AttachAggregateConfigRuleToCompliancePack

Adds one or more rules in an account group to a compliance package.

[AttachConfigRuleToCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-attachconfigruletocompliancepack)

AttachConfigRuleToCompliancePack

Adds one or more rules to a compliance package.

[CopyCompliancePacks](/help/en/cloud-config/latest/api-config-2020-09-07-copycompliancepacks)

CopyCompliancePacks

Replicates compliance packages.

[CopyConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-copyconfigrules)

CopyConfigRules

Replicates rules.

[CreateAdvancedSearchFile](/help/en/cloud-config/latest/api-config-2020-09-07-createadvancedsearchfile)

CreateAdvancedSearchFile

Creates a downloadable resource file for the current Alibaba Cloud account.

[CreateCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-createcompliancepack)

CreateCompliancePack

Creates a compliance package for the current account.

[DeactiveAggregateConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-deactiveaggregateconfigrules)

DeactiveAggregateConfigRules

Disables one or more rules in an account group. After a rule is disabled, the resource in the rule is no longer evaluated. The compliance evaluation results before the rule is disabled are still displayed.

[DeactiveConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-deactiveconfigrules)

DeactiveConfigRules

Disables a rule. After a rule is disabled, the resource in the rule is no longer evaluated. The compliance evaluation results before the rule is disabled are still displayed.

[DeleteAggregateCompliancePacks](/help/en/cloud-config/latest/api-config-2020-09-07-deleteaggregatecompliancepacks)

DeleteAggregateCompliancePacks

Deletes the compliance packages of an account group.

[DeleteAggregateConfigDeliveryChannel](/help/en/cloud-config/latest/api-config-2020-09-07-deleteaggregateconfigdeliverychannel)

DeleteAggregateConfigDeliveryChannel

Deletes a delivery channel from an account group.

[DeleteAggregateConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-deleteaggregateconfigrules)

DeleteAggregateConfigRules

Deletes one or more rules from an account group. You can delete a rule in the Cloud Config console. After you delete the rule, the configurations of the rule are deleted.

[DeleteAggregators](/help/en/cloud-config/latest/api-config-2020-09-07-deleteaggregators)

DeleteAggregators

The management account or delegated administrator account of a resource directory can delete an account group.

[DeleteCompliancePacks](/help/en/cloud-config/latest/api-config-2020-09-07-deletecompliancepacks)

DeleteCompliancePacks

Deletes one or more compliance packages.

[DeleteConfigDeliveryChannel](/help/en/cloud-config/latest/api-config-2020-09-07-deleteconfigdeliverychannel)

DeleteConfigDeliveryChannel

Deletes a delivery channel.

[DeleteConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-deleteconfigrules)

DeleteConfigRules

Deletes rules.

[DescribeRemediation](/help/en/cloud-config/latest/api-config-2020-09-07-describeremediation)

DescribeRemediation

This topic provides an example on how to query the details of a remediation configuration whose ID is crr-f381cf0c1c2f004e\\\\\*\\\\\*\\\\\*\\\\\*.

[DetachAggregateConfigRuleToCompliancePack](/help/en/cloud-config/latest/api-config-2020-09-07-detachaggregateconfigruletocompliancepack)

DetachAggregateConfigRuleToCompliancePack

Removes one or more rules in an account group from a compliance package.

[GenerateAggregateConfigRulesReport](/help/en/cloud-config/latest/api-config-2020-09-07-generateaggregateconfigrulesreport)

GenerateAggregateConfigRulesReport

Generates a compliance evaluation report for the rules in a specified account group.

[GenerateAggregateResourceInventory](/help/en/cloud-config/latest/api-config-2020-09-07-generateaggregateresourceinventory)

GenerateAggregateResourceInventory

Generates a downloadable inventory for global resources in an account group.

[GenerateCompliancePackReport](/help/en/cloud-config/latest/api-config-2020-09-07-generatecompliancepackreport)

GenerateCompliancePackReport

Generates a compliance evaluation report based on a compliance package.

[GenerateConfigRulesReport](/help/en/cloud-config/latest/api-config-2020-09-07-generateconfigrulesreport)

GenerateConfigRulesReport

Generates a compliance evaluation report for a rule.

[GetAdvancedSearchFile](/help/en/cloud-config/latest/api-config-2020-09-07-getadvancedsearchfile)

GetAdvancedSearchFile

Obtains the last resource advanced search file that is generated within the current account. You can call this operation to obtain the URL of the resource advanced search file.

[GetAggregateAccountComplianceByPack](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateaccountcompliancebypack)

GetAggregateAccountComplianceByPack

Queries the compliance evaluation results of member accounts for which a compliance package takes effect in an account group.

[GetAggregateAdvancedSearchFile](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateadvancedsearchfile)

GetAggregateAdvancedSearchFile

Obtains the most recently generated resource advanced search file within a specific account group.

[GetAggregateCompliancePackReport](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregatecompliancepackreport)

GetAggregateCompliancePackReport

Queries the compliance evaluation report that is generated based on a compliance package of an account group.

[GetAggregateConfigDeliveryChannel](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateconfigdeliverychannel)

GetAggregateConfigDeliveryChannel

Queries the information about a delivery channel in an account group.

[GetAggregateConfigRuleSummaryByRiskLevel](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateconfigrulesummarybyrisklevel)

GetAggregateConfigRuleSummaryByRiskLevel

Queries the summary of compliance evaluation results by rule risk level in an account group.

[GetAggregateConfigRulesReport](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateconfigrulesreport)

GetAggregateConfigRulesReport

Downloads the compliance evaluation report in the Excel format to your on-premises machine. This allows you to assign tasks and modify incompliant resource configurations.

[GetAggregateResourceComplianceByConfigRule](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateresourcecompliancebyconfigrule)

GetAggregateResourceComplianceByConfigRule

Queries compliance evaluation results based on the rules in a compliance package in an account group.

[GetAggregateResourceComplianceGroupByRegion](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateresourcecompliancegroupbyregion)

GetAggregateResourceComplianceGroupByRegion

Queries the evaluation results grouped by resource type for an account group rule.

[GetAggregateResourceComplianceGroupByResourceType](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateresourcecompliancegroupbyresourcetype)

GetAggregateResourceComplianceGroupByResourceType

Queries the evaluation results grouped by resource type for an account group rule.

[GetAggregateResourceCountsGroupByRegion](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateresourcecountsgroupbyregion)

GetAggregateResourceCountsGroupByRegion

Queries the statistics on the resources in an account group by region.

[GetAggregateResourceCountsGroupByResourceType](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateresourcecountsgroupbyresourcetype)

GetAggregateResourceCountsGroupByResourceType

Queries the statistics on the resources in an account group by resource type.

[GetAggregateResourceInventory](/help/en/cloud-config/latest/api-config-2020-09-07-getaggregateresourceinventory)

GetAggregateResourceInventory

Obtains the last resource inventory that is generated on the Global Resources page within the current account group.

[GetCompliancePackReport](/help/en/cloud-config/latest/api-config-2020-09-07-getcompliancepackreport)

GetCompliancePackReport

Queries the compliance evaluation report that is generated based on a compliance package.

[GetConfigRulesReport](/help/en/cloud-config/latest/api-config-2020-09-07-getconfigrulesreport)

GetConfigRulesReport

Downloads the compliance evaluation report in the Excel format to your on-premises machine. This allows you to assign tasks and modify incompliant resource configurations.

[GetDiscoveredResourceCountsGroupByRegion](/help/en/cloud-config/latest/api-config-2020-09-07-getdiscoveredresourcecountsgroupbyregion)

GetDiscoveredResourceCountsGroupByRegion

Queries the statistics on resources by region.

[GetDiscoveredResourceCountsGroupByResourceType](/help/en/cloud-config/latest/api-config-2020-09-07-getdiscoveredresourcecountsgroupbyresourcetype)

GetDiscoveredResourceCountsGroupByResourceType

Queries the statistics on resources by resource type.

[GetIntegratedServiceStatus](/help/en/cloud-config/latest/api-config-2020-09-07-getintegratedservicestatus)

GetIntegratedServiceStatus

Queries the integration status of a specific cloud service.

[GetResourceComplianceByConfigRule](/help/en/cloud-config/latest/api-config-2020-09-07-getresourcecompliancebyconfigrule)

GetResourceComplianceByConfigRule

Queries the compliance summary based on the compliance evaluation result of a rule.

[GetResourceComplianceGroupByRegion](/help/en/cloud-config/latest/api-config-2020-09-07-getresourcecompliancegroupbyregion)

GetResourceComplianceGroupByRegion

Queries compliance evaluation results of resources based on a rule and displays the evaluation results grouped by region.

[GetResourceComplianceGroupByResourceType](/help/en/cloud-config/latest/api-config-2020-09-07-getresourcecompliancegroupbyresourcetype)

GetResourceComplianceGroupByResourceType

Queries compliance evaluation results of resources based on a rule and displays the evaluation results grouped by resource type.

[IgnoreAggregateEvaluationResults](/help/en/cloud-config/latest/api-config-2020-09-07-ignoreaggregateevaluationresults)

IgnoreAggregateEvaluationResults

Ignores the evaluation results of some resources in an account group based on a specific rule. You can also specify a time period for ignoring the evaluation results. After the period elapses, the evaluation results of the resources based on the rule are automatically displayed.

[ListAggregateConfigDeliveryChannels](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregateconfigdeliverychannels)

ListAggregateConfigDeliveryChannels

Queries the information about all delivery channels in an account group.

[ListAggregateConfigRuleEvaluationStatistics](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregateconfigruleevaluationstatistics)

ListAggregateConfigRuleEvaluationStatistics

Queries the statistics of compliance evaluation results of an account group.

[ListAggregateRemediationExecutions](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregateremediationexecutions)

ListAggregateRemediationExecutions

Queries the remediation records of a rule in an account group.

[ListAggregateResourceRelations](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregateresourcerelations)

ListAggregateResourceRelations

Queries a list of the resources of a specific resource in an account group.

[ListAggregators](/help/en/cloud-config/latest/api-config-2020-09-07-listaggregators)

ListAggregators

Queries all account groups within the current management account or delegated administrator account.

[ListConfigRuleEvaluationStatistics](/help/en/cloud-config/latest/api-config-2020-09-07-listconfigruleevaluationstatistics)

ListConfigRuleEvaluationStatistics

Queries the statistics of compliance evaluation results of the current Alibaba Cloud account.

[ListRemediationExecutions](/help/en/cloud-config/latest/api-config-2020-09-07-listremediationexecutions)

ListRemediationExecutions

Queries the remediation records of a rule.

[ListRemediationTemplates](/help/en/cloud-config/latest/api-config-2020-09-07-listremediationtemplates)

ListRemediationTemplates

Queries a list of remediation templates for a managed rule.

[ListRemediations](/help/en/cloud-config/latest/api-config-2020-09-07-listremediations)

ListRemediations

Queries the information about the execution of remediation templates.

[ListResourceRelations](/help/en/cloud-config/latest/api-config-2020-09-07-listresourcerelations)

ListResourceRelations

Queries a list of resources that associate with a specific resource.

[ListResourcesByAdvancedSearch](/help/en/cloud-config/latest/api-config-2020-09-07-listresourcesbyadvancedsearch)

ListResourcesByAdvancedSearch

Obtains resources based on the fields in the resource properties by using a SELECT statement.

[PutEvaluations](/help/en/cloud-config/latest/api-config-2020-09-07-putevaluations)

PutEvaluations

Submits the evaluation results of a rule from Function Compute.

[RevertAggregateEvaluationResults](/help/en/cloud-config/latest/api-config-2020-09-07-revertaggregateevaluationresults)

RevertAggregateEvaluationResults

Re-evaluates resources that are evaluated based on a rule after the evaluation results on some resources of an ignored rule in an account group are resumed.

[RevertEvaluationResults](/help/en/cloud-config/latest/api-config-2020-09-07-revertevaluationresults)

RevertEvaluationResults

Re-evaluates resources that are evaluated based on a rule after the evaluation results on some resources of an ignored rule are resumed.

[StartAggregateConfigRuleEvaluation](/help/en/cloud-config/latest/api-config-2020-09-07-startaggregateconfigruleevaluation)

StartAggregateConfigRuleEvaluation

Re-evaluates the compliance of resources based on a rule or based on all rules in a compliance package in a specific account group.

[StartAggregateRemediation](/help/en/cloud-config/latest/api-config-2020-09-07-startaggregateremediation)

StartAggregateRemediation

Performs a remediation operation by using a rule in an account group.

[StartConfigurationRecorder](/help/en/cloud-config/latest/api-config-2020-09-07-startconfigurationrecorder)

StartConfigurationRecorder

Enables Cloud Config to monitor the resources of your Alibaba Cloud account.

[StartRemediation](/help/en/cloud-config/latest/api-config-2020-09-07-startremediation)

StartRemediation

Performs a remediation operation based on a rule.

[StopConfigurationRecorder](/help/en/cloud-config/latest/api-config-2020-09-07-stopconfigurationrecorder)

StopConfigurationRecorder

Deactivates Cloud Config.

[UpdateAggregateConfigDeliveryChannel](/help/en/cloud-config/latest/api-config-2020-09-07-updateaggregateconfigdeliverychannel)

UpdateAggregateConfigDeliveryChannel

Modifies a delivery channel in an account group.

[UpdateConfigurationRecorder](/help/en/cloud-config/latest/api-config-2020-09-07-updateconfigurationrecorder)

UpdateConfigurationRecorder

Modifies the resource monitoring scope of the current account.

[UpdateIntegratedServiceStatus](/help/en/cloud-config/latest/api-config-2020-09-07-updateintegratedservicestatus)

UpdateIntegratedServiceStatus

Enables or disables the integration of a cloud service.
