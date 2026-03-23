## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`Cms/2019-01-01`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, [create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## API standard and SDKs

The OpenAPI specification for Cloud Monitor (`Cms/2019-01-01`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages that handle low-level tasks such as request signing. These SDKs let you call APIs using language-specific syntax without dealing with HTTP details directly.

## Custom signature

If the SDK does not support your specific needs, such as a customized signature, you can manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Manual signing typically requires about 5 business days of development effort. For support, join the DingTalk group (ID: 147535001692).

## Before you begin

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk.

To call APIs securely:

1.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) with API access only.
    
2.  Configure AccessKey pairs for the RAM user.
    
3.  Implement the principle of least privilege (PoLP) through RAM policies.
    

Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Cloud service metrics

**API**

**Description**

[DescribeProjectMeta](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeprojectmeta)

Queries the information about monitored services in CloudMonitor.

[DescribeMetricMetaList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricmetalist)

Queries the details of metrics supported in CloudMonitor.

[DescribeMetricList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclist)

Queries monitoring data for a specific metric of a cloud service.

[DescribeMetricData](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricdata)

Queries the monitoring data of a metric for a cloud service.

[DescribeMetricLast](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclast)

Queries the latest monitoring data of a metric.

[DescribeMetricTop](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetrictop)

Queries the latest monitoring data of a metric for a cloud service, sorted by a specified order.

### Custom metrics

**API**

**Description**

[PutCustomMetric](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putcustommetric)

Reports monitoring data.

[DeleteCustomMetric](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletecustommetric)

Deletes the reported monitoring data of a metric.

[DescribeCustomMetricList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describecustommetriclist)

Queries the reported monitoring data.

### Data export

**API**

**Description**

[Cursor](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-cursor)

Defines the range of monitoring data to export. Returns the Cursor information required by the BatchExport operation.

[BatchExport](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-batchexport)

Exports the monitoring data defined in the Cursor operation.

[PutExporterRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putexporterrule)

Creates or modifies a data export rule.

[DeleteExporterRule](/help/en/cms/developer-reference/api-cms-2019-01-01-deleteexporterrule)

Deletes a data export rule.

[DescribeExporterRuleList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeexporterrulelist)

Queries a list of data export rules.

[PutExporterOutput](/help/en/cms/developer-reference/api-cms-2019-01-01-putexporteroutput)

Creates or modifies a configuration set for exporting monitoring data.

[DeleteExporterOutput](/help/en/cms/developer-reference/api-cms-2019-01-01-deleteexporteroutput)

Deletes a configuration set that is used to export monitoring data.

[DescribeExporterOutputList](/help/en/cms/developer-reference/api-cms-2019-01-01-describeexporteroutputlist)

Queries configuration sets that are used to export monitoring data.

## Alert service

### Alert contacts and contact groups

**API**

**Description**

[PutContact](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putcontact)

Creates or modifies an alert contact.

[DeleteContact](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletecontact)

Deletes an alert contact.

[DescribeContactList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describecontactlist)

Queries alert contacts.

[DescribeContactListByContactGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describecontactlistbycontactgroup)

Queries the alert contacts in an alert contact group.

[PutContactGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putcontactgroup)

Creates or modifies an alert contact group.

[DeleteContactGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletecontactgroup)

Deletes an alert contact group.

[DescribeContactGroupList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describecontactgrouplist)

Queries a list of alarm contact groups.

### Alert templates

**API**

**Description**

[CreateMetricRuleTemplate](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createmetricruletemplate)

Creates an alert template.

[ModifyMetricRuleTemplate](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifymetricruletemplate)

Modifies an alert template.

[DeleteMetricRuleTemplate](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemetricruletemplate)

Deletes an alert template.

[DescribeMetricRuleTemplateAttribute](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricruletemplateattribute)

Queries the details of an alert template.

[DescribeMetricRuleTemplateList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricruletemplatelist)

Queries alert templates.

[ApplyMetricRuleTemplate](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-applymetricruletemplate)

Applies an alert template to an application group to generate alert rules.

### Threshold-triggered alert rules

**API**

**Description**

[PutResourceMetricRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putresourcemetricrule)

Configures an alert rule.

[PutResourceMetricRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putresourcemetricrules)

Creates multiple alert rules for the specified metric of a resource.

[PutGroupMetricRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putgroupmetricrule)

Creates or modifies an alert rule in a specified application group.

[CreateGroupMetricRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-creategroupmetricrules)

Creates multiple alert rules for an application group.

[PutCustomMetricRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putcustommetricrule)

Creates a custom alert rule.

[DeleteMetricRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemetricrules)

Deletes one or more alert rules.

[EnableMetricRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-enablemetricrules)

Enables alert rules.

[DisableMetricRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-disablemetricrules)

Disables alert rules.

[DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricrulelist)

Queries a list of alert rules.

[DescribeMetricRuleCount](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricrulecount)

Queries the number of alert rules in each state.

[DescribeActiveMetricRuleList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeactivemetricrulelist)

Queries the details of initiative alert rules.

[DescribeProductsOfActiveMetricRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeproductsofactivemetricrule)

Queries the cloud services for which the initiative alert feature is enabled.

[EnableActiveMetricRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-enableactivemetricrule)

Enables the initiative alert feature for a cloud service.

[DisableActiveMetricRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-disableactivemetricrule)

Disables the initiative alert feature for a cloud service.

[DescribeAlertingMetricRuleResources](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describealertingmetricruleresources)

Queries the resources for which active alerts are triggered based on an alert rule.

### Alert rule resources and targets

**API**

**Description**

[CreateMetricRuleResources](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createmetricruleresources)

Associates resources with an alert rule.

[DeleteMetricRuleResources](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemetricruleresources)

Disassociates resources from an alert rule.

[PutMetricRuleTargets](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putmetricruletargets)

Adds or modifies the push channels of an alert rule.

[DeleteMetricRuleTargets](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemetricruletargets)

Deletes the push channels of an alert rule.

[DescribeMetricRuleTargets](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricruletargets)

Queries the resources associated with a specified alert rule.

### Event-triggered alert rules

**API**

**Description**

[PutEventRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-puteventrule)

Creates or modifies an event-triggered alert rule.

[PutCustomEventRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putcustomeventrule)

Creates a custom event-triggered alert rule.

[DeleteEventRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deleteeventrules)

Deletes one or more event-triggered alert rules.

[EnableEventRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-enableeventrules)

Enables one or more event rules.

[DisableEventRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-disableeventrules)

Disables one or more event-triggered alert rules.

[DescribeEventRuleAttribute](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeeventruleattribute)

Queries the details of a specified event-triggered alert rule.

[DescribeEventRuleList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeeventrulelist)

Queries event-triggered alert rules.

[PutEventRuleTargets](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-puteventruletargets)

Adds or modifies the push channels of an event-triggered alert rule.

[DeleteEventRuleTargets](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deleteeventruletargets)

Deletes the push channels of an event-triggered alert rule.

[DescribeEventRuleTargetList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeeventruletargetlist)

Queries event-triggered alert rules.

### Alert blacklists

**API**

**Description**

[CreateMetricRuleBlackList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createmetricruleblacklist)

Creates a blacklist policy.

[ModifyMetricRuleBlackList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifymetricruleblacklist)

Modifies a blacklist policy.

[DeleteMetricRuleBlackList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemetricruleblacklist)

Deletes multiple blacklist policies at a time.

[EnableMetricRuleBlackList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-enablemetricruleblacklist)

Enables or disables multiple blacklist policies at a time.

[DescribeMetricRuleBlackList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricruleblacklist)

Queries blacklist policies.

### Alert history

**API**

**Description**

[DescribeAlertLogList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describealertloglist)

Queries the alert history.

[DescribeAlertLogCount](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describealertlogcount)

Queries the statistics of alert logs.

[DescribeAlertLogHistogram](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describealertloghistogram)

Queries the number of alert logs generated during each interval within a time period.

[DescribeAlertHistoryList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describealerthistorylist)

Queries historical alerts.

## Event monitoring

### System events

**API**

**Description**

[DescribeSystemEventAttribute](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesystemeventattribute)

Queries the details of a system event.

[DescribeSystemEventCount](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesystemeventcount)

Queries the number of times a system event of a cloud service has occurred.

[DescribeSystemEventHistogram](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesystemeventhistogram)

Queries the number of times a system event occurred during each interval within a time period.

[DescribeSystemEventMetaList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesystemeventmetalist)

Queries the meta information about system events.

[SendDryRunSystemEvent](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-senddryrunsystemevent)

Debugs a system event of an Alibaba Cloud service.

### Custom events

**API**

**Description**

[PutCustomEvent](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putcustomevent)

Reports custom events.

[DescribeCustomEventAttribute](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describecustomeventattribute)

Queries the details of a custom event.

[DescribeCustomEventCount](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describecustomeventcount)

Queries the number of times a custom event occurred within a time period.

[DescribeCustomEventHistogram](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describecustomeventhistogram)

Queries the number of times a custom event occurred during each interval within a time period.

## Site monitoring

### Manage site monitoring tasks

**API**

**Description**

[CreateSiteMonitor](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createsitemonitor)

Creates a site monitoring task.

[ModifySiteMonitor](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifysitemonitor)

Modifies a site monitoring task.

[DeleteSiteMonitors](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletesitemonitors)

Deletes one or more site monitoring tasks.

[EnableSiteMonitors](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-enablesitemonitors)

Enables site monitoring tasks.

[DisableSiteMonitors](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-disablesitemonitors)

Disables site monitoring tasks.

[DescribeSiteMonitorAttribute](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesitemonitorattribute)

Queries the details of a site monitoring task.

[DescribeSiteMonitorList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesitemonitorlist)

Queries site monitoring tasks.

### Site monitoring data and statistics

**API**

**Description**

[DescribeSiteMonitorData](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesitemonitordata)

Queries the fine-grained monitoring data of a site monitoring task.

[DescribeSiteMonitorStatistics](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesitemonitorstatistics)

Queries the statistics of a specified metric for a site monitoring task.

[DescribeSiteMonitorQuota](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesitemonitorquota)

Queries the quotas and version of site monitoring.

[DescribeSiteMonitorISPCityList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesitemonitorispcitylist)

Queries the detection points provided by carriers.

### Instant detection and synthetic monitoring

**API**

**Description**

[CreateInstantSiteMonitor](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createinstantsitemonitor)

Creates a one-time detection task.

[BatchCreateInstantSiteMonitor](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-batchcreateinstantsitemonitor)

Creates a batch of site monitoring tasks.

[DescribeSiteMonitorLog](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesitemonitorlog)

Queries the detection logs for a one-time detection task.

[DescribeSyntheticProbeList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesyntheticprobelist)

Queries a list of detection points.

## Host monitoring

### Agent management

**API**

**Description**

[InstallMonitoringAgent](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-installmonitoringagent)

Installs the CloudMonitor agent on specified Alibaba Cloud hosts.

[UninstallMonitoringAgent](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-uninstallmonitoringagent)

Uninstalls the CloudMonitor agent from a third-party host.

[DescribeMonitoringAgentHosts](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitoringagenthosts)

Queries a list of all hosts, regardless of whether the CloudMonitor agent is installed.

[DescribeMonitoringAgentStatuses](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitoringagentstatuses)

Queries the running status of the CloudMonitor agent.

[DescribeMonitoringAgentAccessKey](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitoringagentaccesskey)

Queries the AccessKey ID and AccessKey secret required to install the CloudMonitor agent on a third-party host.

[DescribeMonitoringAgentConfig](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitoringagentconfig)

Queries the configurations of the CloudMonitor agent.

[ModifyHostInfo](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifyhostinfo)

Modifies the display information for a non-Alibaba Cloud host.

### Agent configuration

**API**

**Description**

[DescribeMonitoringConfig](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitoringconfig)

Queries the global configurations of the CloudMonitor agent.

[PutMonitoringConfig](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putmonitoringconfig)

Configures global settings for the CloudMonitor agent.

### Process monitoring

**API**

**Description**

[CreateMonitorAgentProcess](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createmonitoragentprocess)

Creates a task to monitor a process.

[CreateMonitoringAgentProcess](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createmonitoringagentprocess)

Creates a task to monitor a process.

[DeleteMonitoringAgentProcess](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemonitoringagentprocess)

Disables monitoring on a process.

[DescribeMonitoringAgentProcesses](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitoringagentprocesses)

Queries the list of processes for a specified resource.

## Application groups

### Manage application groups

**API**

**Description**

[CreateMonitorGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createmonitorgroup)

Creates an application group.

[CreateMonitorGroupByResourceGroupId](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createmonitorgroupbyresourcegroupid)

Creates an application group by using a resource group.

[ModifyMonitorGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifymonitorgroup)

Modifies an application group.

[DeleteMonitorGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemonitorgroup)

Deletes an application group.

[DescribeMonitorGroups](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitorgroups)

Queries a list of application groups.

[DescribeMonitorGroupCategories](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitorgroupcategories)

Queries the cloud services to which the resources in an application group belong and the number of resources that belong to each cloud service in the application group.

### Application group instances

**API**

**Description**

[CreateMonitorGroupInstances](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createmonitorgroupinstances)

Adds resources to an application group.

[ModifyMonitorGroupInstances](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifymonitorgroupinstances)

Modifies the resources in an application group.

[DeleteMonitorGroupInstances](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemonitorgroupinstances)

Removes instances from an application group.

[DescribeMonitorGroupInstances](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitorgroupinstances)

Queries the resources in an application group.

[DescribeMonitorGroupInstanceAttribute](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitorgroupinstanceattribute)

Queries the details of the resources in an application group.

### Dynamic rules for application groups

**API**

**Description**

[PutMonitorGroupDynamicRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putmonitorgroupdynamicrule)

Creates or modifies an alert rule to dynamically add instances that meet the rule to an application group.

[DeleteMonitorGroupDynamicRule](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemonitorgroupdynamicrule)

Deletes a rule that dynamically adds service instances to an application group.

[DescribeMonitorGroupDynamicRules](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitorgroupdynamicrules)

Queries the dynamic rules of an application group.

### Alert notification policies for application groups

**API**

**Description**

[CreateMonitorGroupNotifyPolicy](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createmonitorgroupnotifypolicy)

Creates a policy to pause alert notifications for an application group.

[DeleteMonitorGroupNotifyPolicy](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletemonitorgroupnotifypolicy)

Deletes a policy that pauses alert notifications for an application group.

[DescribeMonitorGroupNotifyPolicyList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitorgroupnotifypolicylist)

Queries the policies that pause alert notifications for an application group.

### Process monitoring for application groups

**API**

**Description**

[CreateGroupMonitoringAgentProcess](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-creategroupmonitoringagentprocess)

Creates a process monitoring task for an application group.

[ModifyGroupMonitoringAgentProcess](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifygroupmonitoringagentprocess)

Modifies the process monitoring settings for an application group.

[DeleteGroupMonitoringAgentProcess](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletegroupmonitoringagentprocess)

Deletes a process monitoring task for an application group.

[DescribeGroupMonitoringAgentProcess](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describegroupmonitoringagentprocess)

Queries the process monitoring tasks for an application group.

### Tags

**API**

**Description**

[AddTags](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-addtags)

Attaches tags to specified application groups.

[RemoveTags](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-removetags)

Removes one or more tags.

[DescribeTagKeyList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describetagkeylist)

Queries a list of tag keys.

[DescribeTagValueList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describetagvaluelist)

Queries the tag values for a specified tag key.

[DescribeProductResourceTagKeyList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeproductresourcetagkeylist)

Queries all tag keys of cloud resources in a specified region.

[CreateDynamicTagGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createdynamictaggroup)

Creates application groups automatically based on tags.

[DeleteDynamicTagGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletedynamictaggroup)

Deletes a tag rule.

[DescribeDynamicTagRuleList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describedynamictagrulelist)

Queries the rules for dynamic tags.

### Availability monitoring

**API**

**Description**

[CreateHostAvailability](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createhostavailability)

Creates an availability monitoring task.

[ModifyHostAvailability](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifyhostavailability)

Modifies an availability monitoring task.

[DeleteHostAvailability](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletehostavailability)

Deletes one or more availability monitoring tasks.

[EnableHostAvailability](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-enablehostavailability)

Enables one or more availability monitoring tasks.

[DisableHostAvailability](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-disablehostavailability)

Disables one or more availability monitoring tasks.

[DescribeHostAvailabilityList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describehostavailabilitylist)

Queries availability monitoring tasks.

[DescribeUnhealthyHostAvailability](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeunhealthyhostavailability)

Queries a list of unhealthy servers.

## Log monitoring

**API**

**Description**

[PutLogMonitor](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-putlogmonitor)

Creates or modifies a log monitoring metric.

[DeleteLogMonitor](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletelogmonitor)

Deletes a log monitoring metric.

[DescribeLogMonitorAttribute](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describelogmonitorattribute)

Queries the details of a log monitoring task.

[DescribeLogMonitorList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describelogmonitorlist)

Queries log monitoring metrics.

## Hybrid Cloud Monitoring

### Namespaces

**API**

**Description**

[CreateHybridMonitorNamespace](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createhybridmonitornamespace)

Creates a namespace.

[ModifyHybridMonitorNamespace](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifyhybridmonitornamespace)

Modifies a namespace.

[DeleteHybridMonitorNamespace](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletehybridmonitornamespace)

Deletes a namespace.

[DescribeHybridMonitorNamespaceList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describehybridmonitornamespacelist)

Queries a list of namespaces and the details of their data sources.

### Metric import tasks

**API**

**Description**

[CreateHybridMonitorTask](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createhybridmonitortask)

Creates a data import task for a cloud service or a metric from Simple Log Service (SLS) logs.

[ModifyHybridMonitorTask](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifyhybridmonitortask)

Modifies a metric for the logs imported from Log Service.

[DeleteHybridMonitorTask](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletehybridmonitortask)

Deletes a metric import task for cloud services or a metric for logs imported from Log Service.

[DescribeHybridMonitorTaskList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describehybridmonitortasklist)

Queries metric import tasks.

[DescribeHybridMonitorDataList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describehybridmonitordatalist)

Queries the monitoring data in a namespace.

[PutHybridMonitorMetricData](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-puthybridmonitormetricdata)

Imports the monitoring data of a metric to a Hybrid Cloud Monitoring namespace.

### Logstore groups

**API**

**Description**

[CreateHybridMonitorSLSGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-createhybridmonitorslsgroup)

Creates a Logstore group for Hybrid Cloud Monitoring.

[ModifyHybridMonitorSLSGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-modifyhybridmonitorslsgroup)

Modifies a Logstore group.

[DeleteHybridMonitorSLSGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-deletehybridmonitorslsgroup)

Deletes a Logstore group.

[DescribeHybridMonitorSLSGroup](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describehybridmonitorslsgroup)

Queries Logstore groups.

## Other operations

**API**

**Description**

[DescribeMonitorResourceQuotaAttribute](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitorresourcequotaattribute)

Queries the resource quotas of CloudMonitor.

OpenCmsService

Activates the CMS pay-as-you-go service.
