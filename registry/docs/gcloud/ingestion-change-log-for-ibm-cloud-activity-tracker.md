-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Google Security Operations](https://docs.cloud.google.com/chronicle/docs)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

# Change log for IBM\_CLOUD\_ACTIVITY\_TRACKER

Date

Changes

2025-05-29

Enhancement:  
\- event.idm.read\_only\_udm.security\_result.detection\_fields: Newly mapped "data\_requestData\_repository" raw log field with "event.idm.read\_only\_udm.security\_result.detection\_fields" UDM field  
\- event.idm.read\_only\_udm.metadata.product\_event\_type: Newly mapped "data\_serviceName" raw log field with "event.idm.read\_only\_udm.metadata.product\_event\_type" UDM field  
\- event.idm.read\_only\_udm.security\_result.detection\_fields: Newly mapped "data\_correlationId" raw log field with "event.idm.read\_only\_udm.security\_result.detection\_fields" UDM field  
\- event.idm.read\_only\_udm.additional.fields: Newly mapped "data\_logSourceCRN" raw log field with "event.idm.read\_only\_udm.additional.fields" UDM field  
\- event.idm.read\_only\_udm.security\_result.action\_details: Newly mapped "data\_action" raw log field with "event.idm.read\_only\_udm.security\_result.action\_details" UDM field  
\- event.idm.read\_only\_udm.principal.user.userid: Newly mapped "data\_initiator\_authnId" raw log field with "event.idm.read\_only\_udm.principal.user.userid" UDM field  
\- event.idm.read\_only\_udm.security\_result.detection\_fields: Newly mapped "data\_initiator\_authnName" raw log field with "event.idm.read\_only\_udm.security\_result.detection\_fields" UDM field  
\- event.idm.read\_only\_udm.principal.resource.attribute.labels: Newly mapped "data\_credential\_type" raw log field with "event.idm.read\_only\_udm.principal.resource.attribute.labels" UDM field  
\- event.idm.read\_only\_udm.principal.ip and event.idm.read\_only\_udm.principal.asset.ip: Newly mapped "data\_initiator\_host\_address" raw log field with "event.idm.read\_only\_udm.principal.ip" and "event.idm.read\_only\_udm.principal.asset.ip" UDM fields  
\- event.idm.read\_only\_udm.security\_result.detection\_fields: Newly mapped "data\_initiator\_host\_addressType" raw log field with "event.idm.read\_only\_udm.security\_result.detection\_fields" UDM field  
\- event.idm.read\_only\_udm.network.http.user\_agent and event.idm.read\_only\_udm.network.http.parsed\_user\_agent: Newly mapped "data\_initiator\_host\_agent" raw log field with "event.idm.read\_only\_udm.network.http.user\_agent" and "event.idm.read\_only\_udm.network.http.parsed\_user\_agent" UDM fields  
\- event.idm.read\_only\_udm.principal.resource.attribute.labels: Newly mapped "data\_initiator\_id" raw log field with "event.idm.read\_only\_udm.principal.resource.attribute.labels" UDM field  
\- event.idm.read\_only\_udm.principal.user.user\_display\_name: Newly mapped "data\_initiator\_name" raw log field with "event.idm.read\_only\_udm.principal.user.user\_display\_name" UDM field  
\- event.idm.read\_only\_udm.principal.url: Newly mapped "data\_initiator\_typeURI" raw log field with "event.idm.read\_only\_udm.principal.url" UDM field  
\- event.idm.read\_only\_udm.metadata.url\_back\_to\_product: Newly mapped "data\_typeURI" raw log field with "event.idm.read\_only\_udm.metadata.url\_back\_to\_product" UDM field  
\- event.idm.read\_only\_udm.security\_result.detection\_fields: Newly mapped "data\_dataEvent" raw log field with "event.idm.read\_only\_udm.security\_result.detection\_fields" UDM field  
\- event.idm.read\_only\_udm.observer.resource.name: Newly mapped "data\_observer\_name" raw log field with "event.idm.read\_only\_udm.observer.resource.name" UDM field  
\- event.idm.read\_only\_udm.security\_result.summary: Newly mapped "data\_outcome" raw log field with "event.idm.read\_only\_udm.security\_result.summary" UDM field  
\- event.idm.read\_only\_udm.security\_result.detection\_fields: Newly mapped "data\_saveServiceCopy" raw log field with "event.idm.read\_only\_udm.security\_result.detection\_fields" UDM field  
\- event.idm.read\_only\_udm.network.http.response\_code: Newly mapped "data\_reason\_reasonCode" raw log field with "event.idm.read\_only\_udm.network.http.response\_code" UDM field  
\- event.idm.read\_only\_udm.security\_result.description: Newly mapped "data\_reason\_reasonType" raw log field with "event.idm.read\_only\_udm.security\_result.description" UDM field  
\- event.idm.read\_only\_udm.metadata.description: Newly mapped "data\_message" raw log field with "event.idm.read\_only\_udm.metadata.description" UDM field  
\- event.idm.read\_only\_udm.target.resource.product\_object\_id: Newly mapped "data\_target\_id" raw log field with "event.idm.read\_only\_udm.target.resource.product\_object\_id" UDM field  
\- event.idm.read\_only\_udm.target.resource.name: Newly mapped "data\_target\_name" raw log field with "event.idm.read\_only\_udm.target.resource.name" UDM field  
\- Added a "has\_target\_resource" flag before mapping "data\_target\_name" raw log field with "event.idm.read\_only\_udm.target.resource.name" UDM field.  
\- event.idm.read\_only\_udm.target.url: Newly mapped "data\_target\_typeURI" raw log field with "event.idm.read\_only\_udm.target.url" UDM field  
\- event.idm.read\_only\_udm.security\_result.severity: Newly mapped "data\_severity" raw log field to "event.idm.read\_only\_udm.security\_result.severity" if "severity" is equals to "normal" else mapped to "event.idm.read\_only\_udm.security\_result.severity" UDM field  
\- event.idm.read\_only\_udm.principal.application: Newly mapped "labels\_applicationname" raw log field with "event.idm.read\_only\_udm.principal.application" UDM field  
\- event.idm.read\_only\_udm.additional.fields: Newly mapped "labels\_subsystemname" raw log field with "event.idm.read\_only\_udm.additional.fields" UDM field  
\- event.idm.read\_only\_udm.additional.fields: Newly mapped "labels\_computername" raw log field with "event.idm.read\_only\_udm.additional.fields" UDM field  
\- event.idm.read\_only\_udm.additional.fields: Newly mapped "labels\_threadid" raw log field with "event.idm.read\_only\_udm.additional.fields" UDM field  
\- event.idm.read\_only\_udm.intermediary.ip: Newly mapped "labels\_ipaddress" raw log field with "event.idm.read\_only\_udm.intermediary.ip" UDM field  
\- event.idm.read\_only\_udm.metadata.event\_timestamp: Newly mapped "data\_eventTime" raw log field with "event.idm.read\_only\_udm.metadata.event\_timestamp" UDM field  
\- event.idm.read\_only\_udm.metadata.collected\_timestamp: Newly mapped "meta\_data\_timestamp" raw log field with "event.idm.read\_only\_udm.metadata.collected\_timestamp" UDM field  
\- event.idm.read\_only\_udm.security\_result.detection\_fields: Newly mapped "meta\_data\_severity" raw log field with "event.idm.read\_only\_udm.security\_result.detection\_fields" UDM field  
\- event.idm.read\_only\_udm.metadata.product\_log\_id: Newly mapped "meta\_data\_logid" raw log field with "event.idm.read\_only\_udm.metadata.product\_log\_id" UDM field  
\- event.idm.read\_only\_udm.security\_result.priority: Newly mapped "HIGH\_PRIORITY" to "event.idm.read\_only\_udm.security\_result.priority" UDM field if "meta\_data\_priorityclass" is equals to "high"  
\- event.idm.read\_only\_udm.additional.fields: Newly mapped "meta\_data\_branchid" raw log field with "event.idm.read\_only\_udm.additional.fields" UDM field  
\- event.idm.read\_only\_udm.additional.fields: Newly mapped "meta\_data\_ingressTimestamp" raw log field with "event.idm.read\_only\_udm.additional.fields" UDM field  
\- event.idm.read\_only\_udm.target.group.product\_object\_id: Newly mapped "data\_target\_resourceGroupId" raw log field with "event.idm.read\_only\_udm.target.group.product\_object\_id" UDM field  
\- Added a conditional check before mapping "USER\_RESOURCE\_ACCESS" and "USER\_RESOURCE\_CREATION" to "event.idm.read\_only\_udm.metadata.event\_type" UDM field.  
\- Added a gsub to replace "metadata" with "meta\_data" on message field.  

2024-09-12

\- Newly created parser.  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
