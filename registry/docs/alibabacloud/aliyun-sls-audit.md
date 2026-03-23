ALIYUN::SLS::Audit is used to configure Log Audit Service.

**Note**

For more information about Log Audit Service, see [Overview of Log Audit Service](/help/en/sls/overview-of-log-audit-service#concept-2485064).

## Syntax

```
{
  "Type": "ALIYUN::SLS::Audit",
  "Properties": {
    "VariableMap": Map,
    "DisplayName": String,
    "MultiAccount": List
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

DisplayName

String

Yes

No

The display name of Log Audit Service.

The display name can be up to 128 characters in length.

VariableMap

Map

Yes

Yes

The configurations of Log Audit Service.

For more information, see [VariableMap properties](#section-m5f-x9l-q4r).

MultiAccount

List

No

Yes

The IDs of the Alibaba Cloud accounts for which you want to configure Log Audit Service.

Separate multiple Alibaba Cloud account IDs with commas (,).

You can configure up to 100 Alibaba Cloud accounts.

## VariableMap syntax

```
"VariableMap": {
  "ApigatewayTtl": Number,
  "SasCrackEnabled": Boolean,
  "CpsEnabled": Boolean,
  "ApigatewayEnabled": Boolean,
  "WafEnabled": Boolean,
  "OssSyncTtl": Number,
  "SasTtl": Number,
  "ActiontrailTtl": Number,
  "OssAccessEnabled": Boolean,
  "OssSyncEnabled": Boolean,
  "SasSnapshotAccountEnabled": Boolean,
  "SlbSyncEnabled": Boolean,
  "SlbAccessTtl": Number,
  "BastionEnabled": Boolean,
  "RdsEnabled": Boolean,
  "SasSessionEnabled": Boolean,
  "SasLocalDnsEnabled": Boolean,
  "OssAccessTtl": Number,
  "SasHttpEnabled": Boolean,
  "BastionTtl": Number,
  "OssMeteringEnabled": Boolean,
  "SasProcessEnabled": Boolean,
  "NasEnabled": Boolean,
  "SasDnsEnabled": Boolean,
  "SasSnapshotPortEnabled": Boolean,
  "SasSecurityAlertEnabled": Boolean,
  "SlbAccessEnabled": Boolean,
  "NasTtl": Number,
  "SasNetworkEnabled": Boolean,
  "SasLoginEnabled": Boolean,
  "WafTtl": Number,
  "OssMeteringTtl": Number,
  "SasSnapshotProcessEnabled": Boolean,
  "SasSecurityHcEnabled": Boolean,
  "RdsTtl": Number,
  "CpsTtl": Number,
  "SlbSyncTtl": Number,
  "CloudfirewallTtl": Number,
  "ActiontrailEnabled": Boolean,
  "SasSecurityVulEnabled": Boolean,
  "ApigatewayTiEnabled": Boolean,
  "RdsSlowCollectionPolicy": String,
  "PolardbSlowCollectionPolicy": String,
  "BastionAuditCollectionPolicy": String,
  "DdosCooAccessPolicySetting": List,
  "RdsAuditCollectionPolicy": String,
  "ActiontrailOpenapiPolicySetting": List,
  "BastionTiEnabled": Boolean,
  "K8sIngressTiEnabled": Boolean,
  "PolardbEnabled": Boolean,
  "WafTiEnabled": Boolean,
  "RedisSyncTtl": Number,
  "OssAccessPolicySetting": List,
  "AppconnectTiEnabled": Boolean,
  "ApigatewayAccessPolicySetting": List,
  "NasTiEnabled": Boolean,
  "RdsPerfTiEnabled": Boolean,
  "ActiontrailOpenapiCollectionPolicy": String,
  "DrdsSyncTtl": Number,
  "K8sEventEnabled": Boolean,
  "RedisSyncEnabled": Boolean,
  "PolardbPerfTiEnabled": Boolean,
  "CpsTiEnabled": Boolean,
  "CloudfirewallTiEnabled": Boolean,
  "OssAccessTiEnabled": Boolean,
  "PolardbSlowTiEnabled": Boolean,
  "RedisAuditTtl": Number,
  "RdsAuditPolicySetting": List,
  "OssMeteringCollectionPolicy": String,
  "ActiontrailTiEnabled": Boolean,
  "SasTiEnabled": Boolean,
  "DdosCooAccessTiEnabled": Boolean,
  "WafAccessCollectionPolicy": String,
  "CloudfirewallAccessPolicySetting": List,
  "RedisAuditEnabled": Boolean,
  "CpsCallbackPolicySetting": List,
  "BastionAuditPolicySetting": List,
  "PolardbSlowEnabled": Boolean,
  "DrdsAuditEnabled": Boolean,
  "PolardbTtl": Number,
  "RdsPerfPolicySetting": List,
  "K8sIngressTtl": Number,
  "OssMeteringPolicySetting": List,
  "K8sEventCollectionPolicy": String,
  "DrdsAuditPolicySetting": List,
  "WafAccessPolicySetting": List,
  "CloudfirewallEnabled": Boolean,
  "PolardbAuditPolicySetting": List,
  "RedisAuditTiEnabled": Boolean,
  "RedisAuditPolicySetting": List,
  "SlbAccessPolicySetting": List,
  "PolardbTiEnabled": Boolean,
  "ApigatewayAccessCollectionPolicy": String,
  "DrdsAuditTtl": Number,
  "AppconnectEnabled": Boolean,
  "DrdsSyncEnabled": Boolean,
  "OssMeteringTiEnabled": Boolean,
  "K8sAuditTiEnabled": Boolean,
  "PolardbSlowTtl": Number,
  "DrdsAuditCollectionPolicy": String,
  "K8sAuditPolicySetting": List,
  "K8sEventPolicySetting": List,
  "RdsSlowTiEnabled": Boolean,
  "K8sIngressPolicySetting": List,
  "RedisAuditCollectionPolicy": String,
  "PolardbPerfTtl": Number,
  "AppconnectTtl": Number,
  "DrdsAuditTiEnabled": Boolean,
  "K8sAuditEnabled": Boolean,
  "PolardbPerfPolicySetting": List,
  "NasAuditPolicySetting": List,
  "K8sEventTtl": Number,
  "CpsCallbackCollectionPolicy": String,
  "PolardbAuditCollectionPolicy": String,
  "RdsPerfEnabled": Boolean,
  "RdsSlowEnabled": Boolean,
  "PolardbSlowPolicySetting": List,
  "DdosCooAccessTtl": Number,
  "PolardbPerfCollectionPolicy": String,
  "SlbAccessTiEnabled": Boolean,
  "PolardbPerfEnabled": Boolean,
  "AppconnectOpPolicySetting": List,
  "K8sEventTiEnabled": Boolean,
  "AppconnectOpCollectionPolicy": String,
  "NasAuditCollectionPolicy": String,
  "K8sAuditTtl": Number,
  "SlbAccessCollectionPolicy": String,
  "K8sIngressEnabled": Boolean,
  "K8sAuditCollectionPolicy": String,
  "RdsPerfTtl": Number,
  "OssAccessCollectionPolicy": String,
  "RdsSlowPolicySetting": List,
  "RdsSlowTtl": Number,
  "RdsPerfCollectionPolicy": String,
  "DdosCooAccessEnabled": Boolean,
  "DdosCooAccessCollectionPolicy": String,
  "CloudfirewallAccessCollectionPolicy": String,
  "RdsTiEnabled": Boolean,
  "K8sIngressCollectionPolicy": String,
  "CloudfirewallVpcEnabled": Boolean,
  "CloudfirewallVpcTtl": Number,
  "DdosBgpAccessEnabled": Boolean,
  "DdosBgpAccessTtl": Number,
  "DdosDipAccessEnabled": Boolean,
  "DdosDipAccessTtl": Number,
  "DnsIntranetCollectionPolicy": String,
  "DnsIntranetEnabled": Boolean,
  "DnsIntranetTtl": Number,
  "DnsSyncEnabled": Boolean,
  "DnsSyncTtl": Number,
  "IdaasMngCollectionPolicy": String,
  "IdaasMngEnabled": Boolean,
  "IdaasMngTtl": Number,
  "IdaasUserCollectionPolicy": String,
  "IdaasUserEnabled": Boolean,
  "IdaasUserTtl": Number,
  "VpcFlowCollectionPolicy": String,
  "VpcFlowEnabled": Boolean,
  "VpcFlowTtl": Number,
  "VpcSyncEnabled": Boolean,
  "VpcSyncTtl": Number,
  "AlbAccessCollectionPolicy": String,
  "AlbAccessEnabled": Boolean,
  "AlbAccessTtl": Number,
  "AlbSyncEnabled": Boolean,
  "AlbSyncTtl": Number,
  "CloudconfigChangeEnabled": Boolean,
  "CloudconfigChangeTtl": Number,
  "CloudconfigNoncomEnabled": Boolean,
  "CloudconfigNoncomTtl": Number,
  "PolardbErrorCollectionPolicy": String,
  "PolardbErrorEnabled": Boolean,
  "PolardbErrorTtl": Number,
  "RdsErrorCollectionPolicy": String,
  "RdsErrorEnabled": Boolean,
  "RdsErrorTtl": Number,
  "SasDnsQueryEnabled": Boolean,
}
```

## VariableMap properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

PolardbErrorTtl

Number

Yes

Yes

The period of time during which PolarDB for MySQL error logs are retained in the central Logstore.

Unit: day.

ActiontrailEnabled

Boolean

No

Yes

Specifies whether to audit ActionTrail operation logs.

Valid values:

-   true (default)
    
-   false
    

ActiontrailOpenapiCollectionPolicy

String

No

Yes

The collection policy for ActionTrail API logs.

None.

ActiontrailOpenapiPolicySetting

List

No

Yes

The API policy settings of ActionTrail.

None.

ActiontrailTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for ActionTrail.

Valid values:

-   true
    
-   false (default)
    

ActiontrailTtl

Number

No

Yes

The period of time during which ActionTrail operation logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

AlbAccessCollectionPolicy

String

No

Yes

The collection policy for Application Load Balancer (ALB) access logs.

None.

AlbAccessEnabled

Boolean

No

Yes

Specifies whether to collect ALB access logs.

Valid values:

-   true
    
-   false (default)
    

AlbAccessTtl

Number

No

Yes

The period of time during which ALB access logs are retained in the regional Logstore.

Unit: day.

AlbSyncEnabled

Boolean

No

Yes

Specifies whether to synchronize ALB access logs to the central project.

Valid values:

-   true
    
-   false (default)
    

AlbSyncTtl

Number

No

Yes

The period of time during which ALB access logs are retained in the central Logstore.

Unit: day.

ApigatewayAccessCollectionPolicy

String

No

Yes

The audit policy for API Gateway.

None.

ApigatewayAccessPolicySetting

List

No

Yes

The audit policy settings of API Gateway.

None.

ApigatewayEnabled

Boolean

No

Yes

Specifies whether to audit API Gateway access logs.

Valid values:

-   true (default)
    
-   false
    

ApigatewayTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for API Gateway.

Valid values:

-   true
    
-   false (default)
    

ApigatewayTtl

Number

No

Yes

The period of time during which API Gateway access logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

AppconnectEnabled

Boolean

No

Yes

Specifies whether to audit Cloud Service Bus (CSB) App Connect operation logs.

Valid values:

-   true
    
-   false (default)
    

AppconnectOpCollectionPolicy

String

No

Yes

The collection policy for CSB App Connect logs.

None.

AppconnectOpPolicySetting

List

No

Yes

The audit policy settings of CSB App Connect.

None.

AppconnectTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for CSB App Connect.

Valid values:

-   true
    
-   false (default)
    

AppconnectTtl

Number

No

Yes

The period of time during which CSB App Connect operation logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

BastionAuditCollectionPolicy

String

No

Yes

The collection policy for Bastionhost (BH) audit logs.

None.

BastionAuditPolicySetting

List

No

Yes

The collection policy settings of BH.

None.

BastionEnabled

Boolean

No

Yes

Specifies whether to audit BH operation logs.

Valid values:

-   true (default)
    
-   false
    

BastionTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for BH.

Valid values:

-   true
    
-   false (default)
    

BastionTtl

Number

No

Yes

The period of time during which BH operation logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

CloudconfigChangeEnabled

Boolean

No

Yes

Specifies whether to collect Cloud Config change logs.

Valid values:

-   true
    
-   false (default)
    

CloudconfigChangeTtl

Number

No

Yes

The period of time during which Cloud Config change logs are retained in the central Logstore.

Unit: day.

CloudconfigNoncomEnabled

Boolean

No

Yes

Specifies whether to collect Cloud Config non-compliance events.

Valid values:

-   true
    
-   false (default)
    

CloudconfigNoncomTtl

Number

No

Yes

The period of time during which Cloud Config non-compliance events are retained in the central Logstore.

Unit: day.

CloudfirewallAccessCollectionPolicy

String

No

Yes

The collection policy for Web Application Firewall (WAF) audit logs.

None.

CloudfirewallAccessPolicySetting

List

No

Yes

The collection policy settings of Cloud Firewall.

None.

CloudfirewallEnabled

Boolean

No

Yes

Specifies whether to audit Cloud Firewall virtual private cloud (VPC) firewall traffic logs.

Valid values:

-   true (default)
    
-   false
    

CloudfirewallTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for Cloud Firewall.

Valid values:

-   true
    
-   false (default)
    

CloudfirewallTtl

Number

No

Yes

The period of time during which Cloud Firewall Internet firewall traffic logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

CloudfirewallVpcEnabled

Boolean

No

Yes

Specifies whether to collect Cloud Firewall VPC firewall traffic logs.

Valid values:

-   true
    
-   false (default)
    

CloudfirewallVpcTtl

Number

No

Yes

The period of time during which Cloud Firewall VPC firewall traffic logs are retained in the central Logstore.

Unit: day.

CpsCallbackCollectionPolicy

String

No

Yes

The collection policy for Alibaba Cloud Mobile Push logs.

None.

CpsCallbackPolicySetting

List

No

Yes

The collection policy settings of Alibaba Cloud Mobile Push.

None.

CpsEnabled

Boolean

No

Yes

Specifies whether to audit push receipt events of Alibaba Cloud Mobile Push.

Valid values:

-   true (default)
    
-   false
    

CpsTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for Alibaba Cloud Mobile Push.

Valid values:

-   true
    
-   false (default)
    

CpsTtl

Number

No

Yes

The period of time during which push receipt events of Alibaba Cloud Mobile Push are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

DdosBgpAccessEnabled

Boolean

No

Yes

Specifies whether to collect Anti-DDoS Origin logs.

Valid values:

-   true
    
-   false (default)
    

DdosBgpAccessTtl

Number

No

Yes

The period of time during which Anti-DDoS Origin logs are retained in the central Logstore.

Unit: day.

DdosCooAccessCollectionPolicy

String

No

Yes

The collection policy for Anti-DDoS audit logs.

None.

DdosCooAccessEnabled

Boolean

No

Yes

Specifies whether to audit Anti-DDoS access logs.

Valid values:

-   true
    
-   false (default)
    

DdosCooAccessPolicySetting

List

No

Yes

The audit policy settings of Anti-DDoS.

None.

DdosCooAccessTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for Anti-DDoS.

Valid values:

-   true
    
-   false (default)
    

DdosCooAccessTtl

Number

No

Yes

The period of time during which Anti-DDoS logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

DdosDipAccessEnabled

Boolean

No

Yes

Specifies whether to collect Anti-DDoS Proxy (Outside Chinese Mainland) logs.

Valid values:

-   true
    
-   false (default)
    

DdosDipAccessTtl

Number

No

Yes

The period of time during which Anti-DDoS Proxy (Outside Chinese Mainland) logs are retained in the central Logstore.

Unit: day.

DnsIntranetCollectionPolicy

String

No

Yes

The collection policy for intranet private Alibaba Cloud DNS (DNS) logs.

None.

DnsIntranetEnabled

Boolean

No

Yes

Specifies whether to collect intranet private DNS logs.

Valid values:

-   true
    
-   false (default)
    

DnsIntranetTtl

Number

No

Yes

The period of time during which intranet private DNS logs are retained in the regional Logstore.

Unit: day.

DnsSyncEnabled

Boolean

No

Yes

Specifies whether to synchronize intranet private DNS logs to the central project.

Valid values:

-   true
    
-   false (default)
    

DnsSyncTtl

Number

No

Yes

The period of time during which intranet private DNS logs are retained in the central Logstore.

Unit: day.

DrdsAuditCollectionPolicy

String

No

Yes

The collection policy for PolarDB-X 1.0 audit logs.

None.

DrdsAuditEnabled

Boolean

No

Yes

Specifies whether to audit PolarDB-X 1.0 SQL audit logs.

Valid values:

-   true (default)
    
-   false
    

DrdsAuditPolicySetting

List

No

Yes

The audit policy settings of PolarDB-X 1.0.

None.

DrdsAuditTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for PolarDB-X 1.0.

Valid values:

-   true
    
-   false (default)
    

DrdsAuditTtl

Number

No

Yes

The period of time during which PolarDB-X 1.0 SQL audit logs are retained in the regional Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

DrdsSyncEnabled

Boolean

No

Yes

Specifies whether to synchronize PolarDB-X 1.0 SQL audit logs to the central project.

Valid values:

-   true (default)
    
-   false
    

DrdsSyncTtl

Number

No

Yes

The period of time during which PolarDB-X 1.0 audit logs are retained in the central Logstore.

Unit: day.

IdaasMngCollectionPolicy

String

No

Yes

The collection policy for Identity as a Service (IDaaS) management logs.

None.

IdaasMngEnabled

Boolean

No

Yes

Specifies whether to collect IDaaS management logs.

Valid values:

-   true
    
-   false (default)
    

IdaasMngTtl

Number

No

Yes

The period of time during which IDaaS management logs are retained in the central Logstore.

Unit: day.

IdaasUserCollectionPolicy

String

No

Yes

The collection policy for IDaaS behavioral logs.

None.

IdaasUserEnabled

Boolean

No

Yes

Specifies whether to collect IDaaS behavioral logs.

Valid values:

-   true
    
-   false (default)
    

IdaasUserTtl

Number

No

Yes

The period of time during which IDaaS behavioral logs are retained in the central Logstore.

Unit: day.

K8sAuditCollectionPolicy

String

No

Yes

The collection policy for Container Service for Kubernetes (ACK) audit logs.

None.

K8sAuditEnabled

Boolean

No

Yes

Specifies whether to collect ACK Kubernetes audit logs.

Valid values:

-   true
    
-   false (default)
    

K8sAuditPolicySetting

List

No

Yes

The audit policy settings of ACK.

None.

K8sAuditTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for ACK.

Valid values:

-   true
    
-   false (default)
    

K8sAuditTtl

Number

No

Yes

The period of time during which ACK Kubernetes audit logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

K8sEventCollectionPolicy

String

No

Yes

The collection policy for ACK event logs.

None.

K8sEventEnabled

Boolean

No

Yes

Specifies whether to collect ACK Kubernetes event logs.

Valid values:

-   true
    
-   false (default)
    

K8sEventPolicySetting

List

No

Yes

The event policy settings of ACK.

None.

K8sEventTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for ACK events.

Valid values:

-   true
    
-   false (default)
    

K8sEventTtl

Number

No

Yes

The period of time during which ACK event logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

K8sIngressCollectionPolicy

String

No

Yes

The collection policy for ACK Ingress access logs.

None.

K8sIngressEnabled

Boolean

No

Yes

Specifies whether to audit ACK Ingress access logs.

Valid values:

-   true
    
-   false (default)
    

K8sIngressPolicySetting

List

No

Yes

The Ingress policy settings of ACK.

None.

K8sIngressTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for ACK Ingress access logs.

Valid values:

-   true
    
-   false (default)
    

K8sIngressTtl

Number

No

Yes

The period of time during which ACK Ingress access logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

NasAuditCollectionPolicy

String

No

Yes

The collection policy for File Storage NAS (NAS) audit logs.

None.

NasAuditPolicySetting

List

No

Yes

The audit policy settings of NAS.

None.

NasEnabled

Boolean

No

Yes

Specifies whether to audit NAS access logs.

Valid values:

-   true (default)
    
-   false
    

NasTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for NAS.

Valid values:

-   true
    
-   false (default)
    

NasTtl

Number

No

Yes

The period of time during which NAS access logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

OssAccessCollectionPolicy

String

No

Yes

The collection policy for Object Storage Service (OSS) access logs.

None.

OssAccessEnabled

Boolean

No

Yes

Specifies whether to audit OSS access logs.

Valid values:

-   true (default)
    
-   false
    

OssAccessPolicySetting

List

No

Yes

The access policy settings of OSS.

None.

OssAccessTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for OSS.

Valid values:

-   true
    
-   false (default)
    

OssAccessTtl

Number

No

Yes

The period of time during which OSS access logs are retained in the regional Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

OssMeteringCollectionPolicy

String

No

Yes

The collection policy for OSS metering logs.

None.

OssMeteringEnabled

Boolean

No

Yes

Specifies whether to audit OSS metering logs.

Valid values:

-   true (default)
    
-   false
    

OssMeteringPolicySetting

List

No

Yes

The metering policy settings of OSS.

None.

OssMeteringTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for OSS metering logs.

Valid values:

-   true
    
-   false (default)
    

OssMeteringTtl

Number

No

Yes

The period of time during which OSS metering logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

OssSyncEnabled

Boolean

No

Yes

Specifies whether to synchronize OSS access logs to the central project.

Valid values:

-   true (default)
    
-   false
    

**Note**

You can synchronize the collected logs to the central project. This way, you can query, analyze, and visualize the collected logs in a more efficient manner. You can also configure alerts for the logs and perform secondary development.

OssSyncTtl

Number

No

Yes

The period of time during which OSS logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

For more information about centralized storage, see the "Benefits" section of the [Overview of Log Audit Service](/help/en/sls/overview-of-log-audit-service#section-e2i-so0-yk6) topic.

PolardbAuditCollectionPolicy

String

No

Yes

The collection policy for PolarDB for MySQL audit logs.

None.

PolardbAuditPolicySetting

List

No

Yes

The audit policy settings of PolarDB for MySQL.

None.

PolardbEnabled

Boolean

No

Yes

Specifies whether to collect PolarDB for MySQL audit logs.

Valid values:

-   true (default)
    
-   false
    

PolardbErrorCollectionPolicy

String

No

Yes

The collection policy for PolarDB for MySQL error logs.

None.

PolardbErrorEnabled

Boolean

No

Yes

Specifies whether to collect PolarDB for MySQL error logs.

None.

PolardbPerfCollectionPolicy

String

No

Yes

The collection policy for PolarDB for MySQL performance logs.

None.

PolardbPerfEnabled

Boolean

No

Yes

Specifies whether to collect PolarDB for MySQL performance logs.

Valid values:

-   true
    
-   false (default)
    

PolardbPerfPolicySetting

List

No

Yes

The performance log policy settings of PolarDB for MySQL.

None.

PolardbPerfTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for PolarDB for MySQL performance logs.

Valid values:

-   true
    
-   false (default)
    

PolardbPerfTtl

Number

No

Yes

The period of time during which PolarDB for MySQL performance logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

PolardbSlowCollectionPolicy

String

No

Yes

The collection policy for PolarDB for MySQL slow query logs.

None.

PolardbSlowEnabled

Boolean

No

Yes

Specifies whether to audit PolarDB for MySQL slow query logs.

Valid values:

-   true
    
-   false (default)
    

PolardbSlowPolicySetting

List

No

Yes

The slow query log policy settings of PolarDB for MySQL.

None.

PolardbSlowTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for PolarDB for MySQL slow query logs.

Valid values:

-   true
    
-   false (default)
    

PolardbSlowTtl

Number

No

Yes

The period of time during which PolarDB for MySQL slow query logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

PolardbTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for PolarDB for MySQL.

Valid values:

-   true
    
-   false (default)
    

PolardbTtl

Number

No

Yes

The period of time during which PolarDB for MySQL audit logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

RdsAuditCollectionPolicy

String

No

Yes

The collection policy for PolarDB for MySQL audit logs.

None.

RdsAuditPolicySetting

List

No

Yes

The audit policy settings of ApsaraDB RDS for MySQL.

None.

RdsEnabled

Boolean

No

Yes

Specifies whether to audit SQL audit logs of ApsaraDB RDS for MySQL.

Valid values:

-   true (default)
    
-   false
    

RdsErrorCollectionPolicy

String

No

Yes

The collection policy for ApsaraDB RDS for MySQL error logs.

None.

RdsErrorEnabled

Boolean

No

Yes

Specifies whether to collect ApsaraDB RDS for MySQL error logs.

Valid values:

-   true
    
-   false (default)
    

RdsErrorTtl

Number

No

Yes

The period of time during which ApsaraDB RDS for MySQL error logs are retained in the central Logstore.

Unit: day.

RdsPerfCollectionPolicy

String

No

Yes

The collection policy for ApsaraDB RDS for MySQL performance logs.

None.

RdsPerfEnabled

Boolean

No

Yes

Specifies whether to audit ApsaraDB RDS for MySQL performance logs.

Valid values:

-   true
    
-   false (default)
    

RdsPerfPolicySetting

List

No

Yes

The performance policy settings of ApsaraDB RDS for MySQL.

None.

RdsPerfTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for ApsaraDB RDS for MySQL performance logs.

Valid values:

-   true
    
-   false (default)
    

RdsPerfTtl

Number

No

Yes

The period of time during which ApsaraDB RDS for MySQL performance logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

RdsSlowCollectionPolicy

String

No

Yes

Specifies whether to audit the slow query log policy for ApsaraDB RDS for MySQL.

Valid values:

-   true
    
-   false (default)
    

RdsSlowEnabled

Boolean

No

Yes

Specifies whether to audit ApsaraDB RDS for MySQL slow query logs.

Valid values:

-   true
    
-   false (default)
    

RdsSlowPolicySetting

List

No

Yes

The slow query log policy settings of ApsaraDB RDS for MySQL.

None.

RdsSlowTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for ApsaraDB RDS for MySQL slow query logs.

Valid values:

-   true
    
-   false (default)
    

RdsSlowTtl

Number

No

Yes

The period of time during which ApsaraDB RDS for MySQL slow query logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

RdsTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for ApsaraDB RDS for MySQL.

Valid values:

-   true
    
-   false (default)
    

RdsTtl

Number

No

Yes

The period of time during which SQL audit logs of ApsaraDB RDS for MySQL are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

RedisAuditCollectionPolicy

String

No

Yes

The collection policy for Tair (Redis OSS-compatible) audit logs.

None.

RedisAuditEnabled

Boolean

No

Yes

Specifies whether to audit Tair (Redis OSS-compatible) audit logs.

Valid values:

-   true (default)
    
-   false
    

RedisAuditPolicySetting

List

No

Yes

The audit policy settings of Tair (Redis OSS-compatible).

None.

RedisAuditTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for Tair (Redis OSS-compatible).

Valid values:

-   true
    
-   false (default)
    

RedisAuditTtl

Number

No

Yes

The period of time during which Tair (Redis OSS-compatible) access logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 7.

Unit: day.

RedisSyncEnabled

Boolean

No

Yes

Specifies whether to synchronize Tair (Redis OSS-compatible) audit logs to the central project.

Valid values:

-   true (default)
    
-   false
    

RedisSyncTtl

Number

No

Yes

The period of time during which Tair (Redis OSS-compatible) audit logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

SasCrackEnabled

Boolean

No

Yes

Specifies whether to audit Security Center brute-force attack logs.

Valid values:

-   true
    
-   false (default)
    

SasDnsEnabled

Boolean

No

Yes

Specifies whether to audit Security Center Domain Name System (DNS) logs.

Valid values:

-   true
    
-   false (default)
    

SasDnsQueryEnabled

Boolean

No

Yes

Specifies whether to collect Security Center DNS request logs.

Valid values:

-   true
    
-   false (default)
    

SasHttpEnabled

Boolean

No

Yes

Specifies whether to audit Security Center web access logs.

Valid values:

-   true
    
-   false (default)
    

SasLocalDnsEnabled

Boolean

No

Yes

Specifies whether to audit Security Center internal DNS logs.

Valid values:

-   true
    
-   false (default)
    

SasLoginEnabled

Boolean

No

Yes

Specifies whether to audit Security Center logon logs.

Valid values:

-   true
    
-   false (default)
    

SasNetworkEnabled

Boolean

No

Yes

Specifies whether to audit Security Center network connection logs.

Valid values:

-   true
    
-   false (default)
    

SasProcessEnabled

Boolean

No

Yes

Specifies whether to audit Security Center process startup logs.

Valid values:

-   true
    
-   false (default)
    

SasSecurityAlertEnabled

Boolean

No

Yes

Specifies whether to audit Security Center alert logs.

Valid values:

-   true
    
-   false (default)
    

SasSecurityHcEnabled

Boolean

No

Yes

Specifies whether to audit Security Center baseline logs.

Valid values:

-   true
    
-   false (default)
    

SasSecurityVulEnabled

Boolean

No

Yes

Specifies whether to audit Security Center vulnerability logs.

Valid values:

-   true
    
-   false (default)
    

SasSessionEnabled

Boolean

No

Yes

Specifies whether to audit Security Center network session logs.

Valid values:

-   true
    
-   false (default)
    

SasSnapshotAccountEnabled

Boolean

No

Yes

Specifies whether to audit Security Center account snapshots.

Valid values:

-   true
    
-   false (default)
    

SasSnapshotPortEnabled

Boolean

No

Yes

Specifies whether to audit Security Center port snapshots.

Valid values:

-   true
    
-   false (default)
    

SasSnapshotProcessEnabled

Boolean

No

Yes

Specifies whether to audit Security Center process snapshots.

Valid values:

-   true
    
-   false (default)
    

SasTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for Security Center.

Valid values:

-   true
    
-   false (default)
    

SasTtl

Number

No

Yes

The period of time during which Security Center logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

SlbAccessCollectionPolicy

String

No

Yes

The collection policy for Server Load Balancer (SLB) audit logs.

None.

SlbAccessEnabled

Boolean

No

Yes

Specifies whether to audit SLB access logs.

Valid values:

-   true (default)
    
-   false
    

SlbAccessPolicySetting

List

No

Yes

The audit policy settings of SLB.

None.

SlbAccessTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for SLB.

Valid values:

-   true
    
-   false (default)
    

SlbAccessTtl

Number

No

Yes

The period of time during which SLB access logs are retained in the regional Logstore.

Unit: day.

SlbSyncEnabled

Boolean

No

Yes

Specifies whether to synchronize SLB access logs to the central project.

Valid values:

-   true (default)
    
-   false
    

SlbSyncTtl

Number

No

Yes

The period of time during which SLB access logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

VpcFlowCollectionPolicy

String

No

Yes

The collection policy for Virtual Private Cloud (VPC) flow logs.

None.

VpcFlowEnabled

Boolean

No

Yes

Specifies whether to collect VPC flow logs.

Valid values:

-   true
    
-   false (default)
    

VpcFlowTtl

Number

No

Yes

The period of time during which VPC flow logs are retained in the regional Logstore.

Unit: day.

VpcSyncEnabled

Boolean

No

Yes

Specifies whether to synchronize VPC flow logs to the central project.

Valid values:

-   true
    
-   false (default)
    

VpcSyncTtl

Number

No

Yes

The period of time during which VPC flow logs are retained in the central Logstore.

Unit: day.

WafAccessCollectionPolicy

String

No

Yes

The collection policy for WAF logs.

None.

WafAccessPolicySetting

List

No

Yes

The audit policy settings of WAF.

None.

WafEnabled

Boolean

No

Yes

Specifies whether to audit WAF access logs.

Valid values:

-   true (default)
    
-   false
    

WafTiEnabled

Boolean

No

Yes

Specifies whether to enable threat intelligence for WAF.

Valid values:

-   true
    
-   false (default)
    

WafTtl

Number

No

Yes

The period of time during which WAF access logs are retained in the central Logstore.

Valid values: 3 to 3000.

Default value: 180.

Unit: day.

## Return values

Fn::GetAtt

DisplayName: the display name of Log Audit Service.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DisplayName:
    Description: Name of SLS log audit.
    MaxLength: 128
    Type: String
  MultiAccount:
    Description: Multi-account configuration, please fill in multiple aliuid.
    MaxLength: 100
    MinLength: 0
    Type: Json
  VariableMap:
    Description: Log audit detailed configuration.
    Type: Json
Resources:
  Audit:
    Properties:
      DisplayName:
        Ref: DisplayName
      MultiAccount:
        Ref: MultiAccount
      VariableMap:
        Ref: VariableMap
    Type: ALIYUN::SLS::Audit
Outputs:
  DisplayName:
    Description: Name of SLS log audit.
    Value:
      Fn::GetAtt:
      - Audit
      - DisplayName
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VariableMap": {
      "Type": "Json",
      "Description": "Log audit detailed configuration."
    },
    "DisplayName": {
      "Type": "String",
      "Description": "Name of SLS log audit.",
      "MaxLength": 128
    },
    "MultiAccount": {
      "Type": "Json",
      "Description": "Multi-account configuration, please fill in multiple aliuid.",
      "MinLength": 0,
      "MaxLength": 100
    }
  },
  "Resources": {
    "Audit": {
      "Type": "ALIYUN::SLS::Audit",
      "Properties": {
        "VariableMap": {
          "Ref": "VariableMap"
        },
        "DisplayName": {
          "Ref": "DisplayName"
        },
        "MultiAccount": {
          "Ref": "MultiAccount"
        }
      }
    }
  },
  "Outputs": {
    "DisplayName": {
      "Description": "Name of SLS log audit.",
      "Value": {
        "Fn::GetAtt": [
          "Audit",
          "DisplayName"
        ]
      }
    }
  }
}
```
