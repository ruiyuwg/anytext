ALIYUN::CMS::MetricRuleTemplate is used to create an alert template.

## Syntax

```
{
  "Type": "ALIYUN::CMS::MetricRuleTemplate",
  "Properties": {
    "AlertTemplates": List,
    "Description": String,
    "RestVersion": Integer,
    "TemplateId": Integer,
    "Name": String
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

Name

String

Yes

No

The name of the alert template.

None.

AlertTemplates

List

No

Yes

The rules in the alert template.

You can add up to 200 alert rules to the alert template.

For more information, see [AlertTemplates properties](#section-pb0-nap-yra).

Description

String

No

Yes

The description of the alert template.

None.

RestVersion

Integer

No

No

The version of the alert template.

Default value: 0.

TemplateId

Integer

No

No

The ID of the template that you want to clone.

None.

## AlertTemplates syntax

```
"AlertTemplates": [
  {
    "MetricName": String,
    "Category": String,
    "Escalations": Map,
    "Period": Integer,
    "Webhook": String,
    "Namespace": String,
    "RuleName": String,
    "Selector": String
  }
]
```

## AlertTemplates properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Category

String

Yes

Yes

The abbreviation of the service name.

Valid values:

-   ecs: Elastic Compute Service (ECS).
    
-   rds: ApsaraDB RDS.
    
-   ads: AnalyticDB for MySQL.
    
-   slb: Server Load Balancer (SLB).
    
-   vpc: Virtual Private Cloud (VPC).
    
-   apigateway: API Gateway.
    
-   cdn: Alibaba Cloud CDN (CDN).
    
-   cs: Container Service for Kubernetes (ACK).
    
-   dcdn: Edge Security Acceleration (ESA).
    
-   ddos: Anti-DDoS Proxy.
    
-   eip: Elastic IP Address (EIP).
    
-   elasticsearch: Elasticsearch.
    
-   emr: E-MapReduce (EMR).
    
-   ess: Auto Scaling.
    
-   hbase: ApsaraDB for HBase.
    
-   iot\_edge: Link IoT Edge.
    
-   k8s\_pod: ACK pod.
    
-   kvstore\_sharding: Tair (Redis OSS-compatible) of the cluster architecture.
    
-   kvstore\_splitrw: Tair (Redis OSS-compatible) of the read/write splitting architecture.
    
-   kvstore\_standard: Tair (Redis OSS-compatible) of the standard architecture.
    
-   memcache: ApsaraDB for Memcache of the new version.
    
-   smq: Simple Message Queue (formerly MNS) (SMQ).Simple Message Queue (formerly MNS)
    
-   mongodb: ApsaraDB for MongoDB replica set instance.
    
-   mongodb\_cluster: ApsaraDB for MongoDB standalone instance.
    
-   mongodb\_sharding: ApsaraDB for MongoDB sharded cluster instance.
    
-   mq\_topic: SMQ topic.Simple Message Queue (formerly MNS)
    
-   ocs: ApsaraDB for Memcache of the earlier version.
    
-   opensearch: OpenSearch.
    
-   oss: Object Storage Service (OSS).
    
-   polardb: PolarDB.
    
-   petadata: HybridDB for MySQL.
    
-   sharebandwidthpackages: EIP Bandwidth Plan.
    
-   sls: Simple Log Service (SLS).
    
-   vpn: VPN Gateway.
    

MetricName

String

Yes

Yes

The name of the metric.

None.

Namespace

String

Yes

Yes

The namespace of the service.

For more information, see [DescribeMetricMetaList](/help/en/cms/cloudmonitor-1-0/api-describemetricmetalist#doc-api-Cms-DescribeMetricMetaList) or the "Usage notes" section of the [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#section-lks-9sn-5pm) topic.

RuleName

String

Yes

Yes

The name of the alert rule.

None.

Escalations

Map

No

No

The alert settings.

For more information, see [Escalations properties](#section-3x0-kr3-lat).

Period

Integer

No

Yes

The aggregation period of metric data.

The default value is the lowest frequency at which the metric is polled. In most cases, you do not need to specify the aggregation period.

Unit: seconds.

Selector

String

No

Yes

The extended field selector.

None.

Webhook

String

No

No

The callback URL to which a request is sent when an alert is triggered.

None.

## Escalations syntax

```
"Escalations": {
  "Critical": Map,
  "Info": Map,
  "Warn": Map
}
```

## Escalations properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Critical

Map

Yes

Yes

The settings of critical-level alerts.

For more information, see [Critical properties](#section-4db-qrf-mji).

Info

Map

No

Yes

The settings of info-level alerts.

For more information, see [Info properties](#section-2s0-5ia-yf0).

Warn

Map

No

Yes

The settings of warn-level alerts.

For more information, see [Warn properties](#section-rn9-rfq-axz).

## Critical syntax

```
"Critical": {
  "ComparisonOperator": String,
  "Times": Integer,
  "Statistics": String,
  "Threshold": String
}
```

## Critical properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ComparisonOperator

String

Yes

Yes

The operator that is used to compare the metric value with the threshold.

Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold.
    
-   GreaterThanThreshold: greater than the threshold.
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold.
    
-   LessThanThreshold: less than the threshold.
    
-   NotEqualToThreshold: not equal to the threshold.
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday.
    
-   LessThanYesterday: less than the metric value at the same time yesterday.
    
-   GreaterThanLastWeek: greater than the metric value at the same time in the previous week.
    
-   LessThanLastWeek: less than the metric value at the same time in the previous week.
    
-   GreaterThanLastPeriod: greater than the metric value in the previous monitoring cycle.
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle.
    

Statistics

String

Yes

Yes

The method used to calculate the metric value based on which alerts are triggered.

None.

Threshold

String

Yes

Yes

The alert threshold.

None.

Times

Integer

Yes

Yes

The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.

None.

## Info syntax

```
"Info": {
  "ComparisonOperator": String,
  "Times": Integer,
  "Statistics": String,
  "Threshold": String
}
```

## Info properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ComparisonOperator

String

Yes

Yes

The operator that is used to compare the metric value with the threshold.

Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold.
    
-   GreaterThanThreshold: greater than the threshold.
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold.
    
-   LessThanThreshold: less than the threshold.
    
-   NotEqualToThreshold: not equal to the threshold.
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday.
    
-   LessThanYesterday: less than the metric value at the same time yesterday.
    
-   GreaterThanLastWeek: greater than the metric value at the same time in the previous week.
    
-   LessThanLastWeek: less than the metric value at the same time in the previous week.
    
-   GreaterThanLastPeriod: greater than the metric value in the previous monitoring cycle.
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle.
    

Statistics

String

Yes

Yes

The method used to calculate the metric value based on which alerts are triggered.

None.

Threshold

String

Yes

Yes

The alert threshold.

None.

Times

Integer

Yes

Yes

The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.

None.

## Warn syntax

```
"Warn": {
  "ComparisonOperator": String,
  "Times": Integer,
  "Statistics": String,
  "Threshold": String
}
```

## Warn properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ComparisonOperator

String

Yes

Yes

The operator that is used to compare the metric value with the threshold.

Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold.
    
-   GreaterThanThreshold: greater than the threshold.
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold.
    
-   LessThanThreshold: less than the threshold.
    
-   NotEqualToThreshold: not equal to the threshold.
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday.
    
-   LessThanYesterday: less than the metric value at the same time yesterday.
    
-   GreaterThanLastWeek: greater than the metric value at the same time in the previous week.
    
-   LessThanLastWeek: less than the metric value at the same time in the previous week.
    
-   GreaterThanLastPeriod: greater than the metric value in the previous monitoring cycle.
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle.
    

Statistics

String

Yes

Yes

The method used to calculate the metric value based on which alerts are triggered.

None.

Threshold

String

Yes

Yes

The alert threshold.

None.

Times

Integer

Yes

Yes

The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.

None.

## Return values

Fn::GetAtt

Id: the ID of the alert template.

## Examples

## `YAML`

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  MetricRuleTemplate:
    Type: ALIYUN::CMS::MetricRuleTemplate
    Properties:
      AlertTemplates:
        - Category: ecs
          Namespace: acs_ecs_dashboard
          Period: 60
          Webhook: http://ww.aliyun.com
          RuleName: CPU monitoring
          Selector: ''
          MetricName: cpu_total
          Escalations:
            Critical:
              Statistics: Average
              Threshold: '90'
              ComparisonOperator: GreaterThanOrEqualToThreshold
              Times: 3
            Warn:
              Statistics: Average
              Threshold: '80'
              ComparisonOperator: GreaterThanOrEqualToThreshold
              Times: 3
            Info:
              Statistics: Average
              Threshold: '70'
              ComparisonOperator: GreaterThanOrEqualToThreshold
              Times: 3
        - Category: ecs
          Namespace: acs_ecs_dashboard
          Period: 60
          RuleName: Disk monitoring
          Selector: '{"disk":"/"}'
          MetricName: diskusage_total
          Escalations:
            Critical:
              Statistics: Average
              Threshold: '500'
              ComparisonOperator: GreaterThanOrEqualToThreshold
              Times: 5
      Name: TestMetricRuleTemplate
Outputs:
  Id:
    Description: Alarm template ID.
    Value:
      Fn::GetAtt:
        - MetricRuleTemplate
        - Id
```

## `JSON`

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "MetricRuleTemplate": {
      "Type": "ALIYUN::CMS::MetricRuleTemplate",
      "Properties": {
        "AlertTemplates": [
          {
            "Category": "ecs",
            "Namespace": "acs_ecs_dashboard",
            "Period": 60,
            "Webhook": "http://ww.aliyun.com",
            "RuleName": "CPU monitoring",
            "Selector": "",
            "MetricName": "cpu_total",
            "Escalations": {
              "Critical": {
                "Statistics": "Average",
                "Threshold": "90",
                "ComparisonOperator": "GreaterThanOrEqualToThreshold",
                "Times": 3
              },
              "Warn": {
                "Statistics": "Average",
                "Threshold": "80",
                "ComparisonOperator": "GreaterThanOrEqualToThreshold",
                "Times": 3
              },
              "Info": {
                "Statistics": "Average",
                "Threshold": "70",
                "ComparisonOperator": "GreaterThanOrEqualToThreshold",
                "Times": 3
              }
            }
          },
          {
            "Category": "ecs",
            "Namespace": "acs_ecs_dashboard",
            "Period": 60,
            "RuleName": "Disk monitoring",
            "Selector": "{\"disk\":\"/\"}",
            "MetricName": "diskusage_total",
            "Escalations": {
              "Critical": {
                "Statistics": "Average",
                "Threshold": "500",
                "ComparisonOperator": "GreaterThanOrEqualToThreshold",
                "Times": 5
              }
            }
          }
        ],
        "Name": "TestMetricRuleTemplate"
      }
    }
  },
  "Outputs": {
    "Id": {
      "Description": "Alarm template ID.",
      "Value": {
        "Fn::GetAtt": [
          "MetricRuleTemplate",
          "Id"
        ]
      }
    }
  }
}
```
