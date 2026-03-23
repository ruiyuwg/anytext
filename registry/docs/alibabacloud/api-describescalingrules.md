Queries scaling rules. When you call this operation, you can specify the ID, name, or Alibaba Cloud Resource Name (ARN) of a scaling rule to query its details. For example, you can query the adjustment method, instance warm-up period, and associated event-triggered tasks of the desired scaling rule.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Ess&api=DescribeScalingRules&type=RPC&version=2014-08-28)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

DescribeScalingRules

The operation that you want to perform. Set the value to DescribeScalingRules.

RegionId

String

Yes

cn-qingdao

The region ID of the scaling group.

PageNumber

Integer

No

1

The page number. Pages start from page 1.

Default value: 1.

PageSize

Integer

No

50

The number of entries per page. Valid values: 1 to 50.

Default value: 10.

ScalingGroupId

String

No

asg-bp1ffogfdauy0jw0\*\*\*\*

The ID of the scaling group whose scaling rules you want to query.

ScalingRuleType

String

No

SimpleScalingRule

The type of the scaling rule. Valid values:

-   SimpleScalingRule: Once a simple scaling rule is executed, Auto Scaling adjusts the number of ECS instances or elastic container instances in the scaling group based on the values of AdjustmentType and AdjustmentValue.
    
-   TargetTrackingScalingRule: Once a target tracking scaling rule is executed, Auto Scaling dynamically calculates the number of ECS instances or elastic container instances to scale based on the predefined metric (MetricName) and attempts to maintain the metric value close to the specified target value (TargetValue).
    
-   StepScalingRule: a step scaling rule. Once a step scaling rule is executed, Auto Scaling scales instances step by step based on the predefined thresholds and metric values.
    
-   PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling creates scheduled tasks to adjust the minimum and maximum numbers of instances for the scaling group.
    

ShowAlarmRules

Boolean

No

false

Specifies whether to return the event-triggered tasks that are associated with the scaling rule. Valid values:

-   true
    
-   false
    

Default value: false.

ScalingRuleId.N

String

No

asr-bp1dvirgwkoowxk7\*\*\*\*

The ID of scaling rule N that you want to query. Valid values of N: 1 to 10.

ScalingRuleName.N

String

No

scalingrule\*\*\*\*

The name of scaling rule N that you want to query. Valid values of N: 1 to 10.

ScalingRuleAri.N

String

No

ari:acs:ess:cn-hangzhou:140692647406\*\*\*\*:scalingrule/asr-bp1dvirgwkoowxk7\*\*\*\*

The ARN of scaling rule N that you want to query. Valid values of N: 1 to 10.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

The request ID.

PageNumber

Integer

1

The page number.

PageSize

Integer

50

The number of entries per page.

TotalCount

Integer

1

The total number of scaling rules.

ScalingRules

Array of ScalingRule

The scaling rules.

ScalingRule

MetricName

String

CpuUtilization

The predefined metric of the scaling rule. This parameter is applicable if ScalingRuleType is set to TargetTrackingScalingRule or PredictiveScalingRule.

Valid values if ScalingRuleType is set to TargetTrackingScalingRule:

-   CpuUtilization: the average CPU utilization.
    
-   ClassicInternetRx: the average inbound public traffic over the classic network.
    
-   ClassicInternetTx: the average outbound public traffic over the classic network.
    
-   VpcInternetRx: the average inbound public traffic over a virtual private cloud (VPC).
    
-   VpcInternetTx: the average outbound public traffic over a VPC.
    
-   IntranetRx: the average inbound traffic over the internal network.
    
-   IntranetTx: the average outbound traffic over the internal network.
    
    Valid values if ScalingRuleType is set to PredictiveScalingRule:
    
-   CpuUtilization: the average CPU utilization.
    
-   IntranetRx: the average inbound traffic over the internal network.
    
-   IntranetTx: the average outbound traffic over the internal network.
    

AdjustmentType

String

QuantityChangeInCapacity

The adjustment method of the scaling rule. Valid values:

-   QuantityChangeInCapacity: adds the specified number of Elastic Compute Service (ECS) instances to or removes the specified number of ECS instances from the scaling group.
    
-   PercentChangeInCapacity: adds the specified percentage of ECS instances to or removes the specified percentage of ECS instances from the scaling group.
    
-   TotalCapacity: adjusts the number of ECS instances in the scaling group to a specified number.
    

InitialMaxSize

Integer

100

The maximum number of ECS instances that can be added to the scaling group. If you specify InitialMaxSize, you must also specify PredictiveValueBehavior.

EstimatedInstanceWarmup

Integer

300

The warm-up period during which a series of preparation measures are taken on new instances. Auto Scaling does not monitor the metric data of instances that are being warmed up.

ScaleOutEvaluationCount

Integer

3

After you create a target tracking scaling rule, an event-triggered task is automatically created and associated with the scaling rule. This parameter defines the number of consecutive times the alert condition must be satisfied before the event-triggered task initiates a scale-out operation.

PredictiveScalingMode

String

PredictAndScale

The mode of the predictive scaling rule. Valid values:

-   PredictAndScale: produces predictions and creates prediction tasks.
    
-   PredictOnly: provides predictions but does not create prediction tasks.
    

MinAdjustmentMagnitude

Integer

1

The minimum number of instances that must be scaled. This parameter takes effect if you set `ScalingRuleType` to `SimpleScalingRule` or `StepScalingRule`, and `AdjustmentType` to PercentChangeInCapacity.

ScalingRuleAri

String

ari:acs:ess:cn-hangzhou:140692647406\*\*\*\*:scalingrule/asr-bp1dvirgwkoowxk7\*\*\*\*

The ARN of scaling rule N.

PredictiveTaskBufferTime

Integer

30

The amount of buffer time before prediction tasks are run. By default, all prediction tasks that are automatically created based on a predictive scaling rule are run on the hour. You can specify a buffer time for resource preparation before prediction tasks are run. Valid values: 0 to 60. Unit: minutes.

MinSize

Integer

1

The minimum number of ECS instances that the scaling group must contain.

ScalingGroupId

String

asg-bp1ffogfdauy0jw0\*\*\*\*

The ID of the scaling group whose scaling rules are queried.

PredictiveValueBehavior

String

MaxOverridePredictiveValue

Indicates whether the initial maximum capacity or the predicted value can be utilized as the maximum value for prediction tasks. Valid values:

-   MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for prediction tasks if the predicted value is greater than the initial maximum capacity.
    
-   PredictiveValueOverrideMax: uses the predicted value as the maximum value for prediction tasks if the predicted value is greater than the initial maximum capacity.
    
-   PredictiveValueOverrideMaxWithBuffer: increases the predicted value by a ratio that is specified by PredictiveValueBuffer, and uses the increased value as the maximum value for prediction tasks if the predicted value increased by the ratio is greater than the initial maximum capacity.
    

TargetValue

Float

0.125

The target value of the metric. If you set ScalingRuleType to TargetTrackingScalingRule or PredictiveScalingRule, Auto Scaling keeps the metric value close to the target value by adding instances to or removing instances from the scaling group.

Cooldown

Integer

20

The cooldown period of the scaling rule. This parameter is available only if you set ScalingRuleType to SimpleScalingRule. Valid values: 0 to 86400. Unit: seconds.

MaxSize

Integer

2

The maximum number of ECS instances that the scaling group can contain.

PredictiveValueBuffer

Integer

50

The ratio based on which the predicted value is increased if you set PredictiveValueBehavior to PredictiveValueOverrideMaxWithBuffer. If the predicted value that is increased by this ratio is greater than the initial maximum capacity, the increased value is used as the maximum value for prediction tasks. Valid values: 0 to 100.

ScalingRuleType

String

SimpleScalingRule

The type of the scaling rule. Valid values:

-   SimpleScalingRule: Once a simple scaling rule is executed, Auto Scaling adjusts the number of ECS instances or elastic container instances in the scaling group based on the values of AdjustmentType and AdjustmentValue.
    
-   TargetTrackingScalingRule: Once a target tracking scaling rule is executed, Auto Scaling dynamically calculates the number of ECS instances or elastic container instances to scale based on the predefined metric (MetricName) and attempts to maintain the metric value close to the specified target value (TargetValue).
    
-   StepScalingRule: a step scaling rule. Once a step scaling rule is executed, Auto Scaling scales instances step by step based on the predefined thresholds and metric values.
    
-   PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling creates scheduled tasks to adjust the minimum and maximum numbers of instances for the scaling group.
    

AdjustmentValue

Integer

1

The adjustment value specified in the scaling rule.

ScaleInEvaluationCount

Integer

15

After you create a target tracking scaling rule, an event-triggered task is automatically created and associated with the scaling rule. This parameter defines the number of consecutive times the alert condition must be satisfied before the event-triggered task initiates a scale-in operation.

DisableScaleIn

Boolean

true

Indicates whether scale-in is disabled. This parameter is available only if you set ScalingRuleType to TargetTrackingScalingRule. Valid values:

-   true
    
-   false
    

ScalingRuleName

String

scalingrule\*\*\*\*

The name of the scaling rule.

ScalingRuleId

String

asr-bp1dvirgwkoowxk7\*\*\*\*

The ID of the scaling rule.

Alarms

Array of Alarm

The event-triggered tasks that are associated with the scaling rule. This parameter is returned only if you set ShowAlarmRules to true. Otherwise, an empty list is returned.

Alarm

AlarmTaskId

String

asg-bp18p2yfxow2dloq\*\*\*\*\_1f9458d1-70e1-4bee-8c7f-7a47695b\*\*\*\*

The ID of the event-triggered task that is associated with the scaling rule.

ComparisonOperator

String

\>=

The comparison operator between the statistical value and the threshold of the metric specified in the event-triggered task that is associated with the scaling rule. This operator defines the condition under which the metric value and threshold satisfy the alert criteria.

-   Valid value if the metric value is greater than or equal to the metric threshold: >=.
    
-   Valid value if the metric value is less than or equal to the metric threshold: <=.
    
-   Valid value if the metric value is greater than the metric threshold: >.
    
-   Valid value if the metric value is less than the metric threshold: <.
    

MetricName

String

CpuUtilization

The name of the metric specified in the event-triggered task that is associated with the scaling rule.

EvaluationCount

Integer

3

The number of consecutive times when the event-triggered task that is associated with the scaling rule must meet the threshold expression before an alert is triggered.

AlarmTaskName

String

alarmtask\*\*\*\*

The name of the event-triggered task that is associated with the scaling rule.

MetricType

String

system

The type of the event-triggered task that is associated with the scaling rule. Valid values:

-   system: event-triggered tasks of the system monitoring type
    
-   custom: event-triggered tasks of the custom monitoring type
    

Threshold

Float

50

The threshold of the metric specified in the event-triggered task that is associated with the scaling rule.

Statistics

String

Average

The statistical method specified in the event-triggered task that is associated with the scaling rule. Valid values:

-   Average
    
-   Maximum
    
-   Minimum
    

Dimensions

Array of Dimension

The dimensions specified in the event-triggered task that is associated with the scaling rule.

Dimension

DimensionKey

String

scaling\_group

The dimension key specified in the event-triggered task that is associated with the scaling rule. Valid values:

-   scaling\_group: the ID of the scaling group
    
-   userId: the ID of the Alibaba Cloud account
    

DimensionValue

String

asg-bp18p2yfxow2dloq\*\*\*\*

The dimension value specified in the event-triggered task that is associated with the scaling rule.

Period

Integer

60

The statistical period of the metric data in the target tracking scaling rule.

StepAdjustments

Array of StepAdjustment

The step adjustments of the step scaling rule.

StepAdjustment

MetricIntervalUpperBound

Float

5.0

The upper limit of each step adjustment. Valid values: -9.999999E18 to 9.999999E18.

ScalingAdjustment

Integer

1

The number of instances that are scaled in each step adjustment.

MetricIntervalLowerBound

Float

1.0

The lower limit of each step adjustment. Valid values: -9.999999E18 to 9.999999E18.

AlarmDimensions

Array of AlarmDimension

The dimensions of the metric. This parameter takes effect only if you set `ScalingRuleType` to `TargetTrackingScalingRule`. For example, if you use metric LoadBalancerRealServerAverageQps, you must specify dimension rulePool.

AlarmDimension

DimensionKey

String

rulePool

The dimension key of the metric.

DimensionValue

String

sgp-l1cbirz451yxu2\*\*\*\*

The dimension value of the metric.

MetricType

String

system

The metric type. Valid values:

-   system: system metrics of CloudMonitor.
    
-   custom: custom metrics that are reported to CloudMonitor.
    
-   hybrid: metrics of Hybrid Cloud Monitoring.
    

HybridMonitorNamespace

String

aliyun-test

The ID of the Hybrid Cloud Monitoring namespace.

For information about how to manage Hybrid Cloud Monitoring namespaces, see [Manage namespaces](/help/en/cms/cloudmonitor-1-0/user-guide/manage-namespaces).

HybridMetrics

Array of HybridMetric

The Hybrid Cloud Monitoring metrics. For more information, see [Create a custom target tracking scaling rule](/help/en/auto-scaling/user-guide/custom-target-tracking-scaling-rule).

HybridMetric

Id

String

a

The reference ID of the metric in the metric expression.

Expression

String

(a+b)/2

The metric expression that consists of multiple Hybrid Cloud Monitoring metrics. It calculates a result used to trigger scaling events.

The expression is written in Reverse Polish Notation (RPN) format and includes only the following operators: `+, -, *, /`.

MetricName

String

AliyunSmq\_NumberOfMessagesVisible

The name of the Hybrid Cloud Monitoring metric.

Statistic

String

Average

The statistical method of the metric data. Valid values:

-   Average: The average value of all metric data within a specified interval is calculated.
    
-   Minimum: The minimum value of all metric data within a specified interval is calculated.
    
-   Maximum: The maximum value of all metric data within a specified interval is calculated.
    

Dimensions

Array of Dimension

The metric dimensions. You can use this parameter to specify the monitored resources.

Dimension

DimensionKey

String

queue

The dimension key of the metric.

DimensionValue

String

testQueue

The dimension value of the metric.

## Examples

Sample requests

```
http(s)://ess.aliyuncs.com/?Action=DescribeScalingRules
&RegionId=cn-qingdao
&PageNumber=1
&PageSize=50
&ScalingGroupId=asg-bp1ffogfdauy0jw0****
&ScalingRuleType=SimpleScalingRule
&ShowAlarmRules=false
&ScalingRuleId=["asr-bp1dvirgwkoowxk7****"]
&ScalingRuleName=["scalingrule****"]
&ScalingRuleAri=["ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****"]
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeScalingRulesResponse>
    <RequestId>473469C7-AA6F-4DC5-B3DB-A3DC0DE3****</RequestId>
    <PageNumber>1</PageNumber>
    <PageSize>50</PageSize>
    <TotalCount>1</TotalCount>
    <ScalingRules>
        <MetricName>CpuUtilization</MetricName>
        <AdjustmentType>QuantityChangeInCapacity</AdjustmentType>
        <InitialMaxSize>100</InitialMaxSize>
        <EstimatedInstanceWarmup>300</EstimatedInstanceWarmup>
        <ScaleOutEvaluationCount>3</ScaleOutEvaluationCount>
        <PredictiveScalingMode>PredictAndScale</PredictiveScalingMode>
        <MinAdjustmentMagnitude>1</MinAdjustmentMagnitude>
        <ScalingRuleAri>ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****</ScalingRuleAri>
        <PredictiveTaskBufferTime>30</PredictiveTaskBufferTime>
        <MinSize>1</MinSize>
        <ScalingGroupId>asg-bp1ffogfdauy0jw0****</ScalingGroupId>
        <PredictiveValueBehavior>MaxOverridePredictiveValue</PredictiveValueBehavior>
        <TargetValue>0.125</TargetValue>
        <Cooldown>20</Cooldown>
        <MaxSize>2</MaxSize>
        <PredictiveValueBuffer>50</PredictiveValueBuffer>
        <ScalingRuleType>SimpleScalingRule</ScalingRuleType>
        <AdjustmentValue>1</AdjustmentValue>
        <ScaleInEvaluationCount>15</ScaleInEvaluationCount>
        <DisableScaleIn>true</DisableScaleIn>
        <ScalingRuleName>scalingrule****</ScalingRuleName>
        <ScalingRuleId>asr-bp1dvirgwkoowxk7****</ScalingRuleId>
        <Alarms>
            <AlarmTaskId>asg-bp18p2yfxow2dloq****_1f9458d1-70e1-4bee-8c7f-7a47695b****</AlarmTaskId>
            <ComparisonOperator>&gt;=</ComparisonOperator>
            <MetricName>CpuUtilization</MetricName>
            <EvaluationCount>3</EvaluationCount>
            <AlarmTaskName>alarmtask****</AlarmTaskName>
            <MetricType>system</MetricType>
            <Threshold>50</Threshold>
            <Statistics>Average</Statistics>
            <Dimensions>
                <DimensionKey>scaling_group</DimensionKey>
                <DimensionValue>asg-bp18p2yfxow2dloq****</DimensionValue>
            </Dimensions>
        </Alarms>
        <StepAdjustments>
            <MetricIntervalUpperBound>5</MetricIntervalUpperBound>
            <ScalingAdjustment>1</ScalingAdjustment>
            <MetricIntervalLowerBound>1</MetricIntervalLowerBound>
        </StepAdjustments>
        <AlarmDimensions>
            <DimensionKey>rulePool</DimensionKey>
            <DimensionValue>sgp-l1cbirz451yxu2****</DimensionValue>
        </AlarmDimensions>
    </ScalingRules>
</DescribeScalingRulesResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "PageNumber" : 1,
  "PageSize" : 50,
  "TotalCount" : 1,
  "ScalingRules" : [ {
    "MetricName" : "CpuUtilization",
    "AdjustmentType" : "QuantityChangeInCapacity",
    "InitialMaxSize" : 100,
    "EstimatedInstanceWarmup" : 300,
    "ScaleOutEvaluationCount" : 3,
    "PredictiveScalingMode" : "PredictAndScale",
    "MinAdjustmentMagnitude" : 1,
    "ScalingRuleAri" : "ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****",
    "PredictiveTaskBufferTime" : 30,
    "MinSize" : 1,
    "ScalingGroupId" : "asg-bp1ffogfdauy0jw0****",
    "PredictiveValueBehavior" : "MaxOverridePredictiveValue",
    "TargetValue" : 0.125,
    "Cooldown" : 20,
    "MaxSize" : 2,
    "PredictiveValueBuffer" : 50,
    "ScalingRuleType" : "SimpleScalingRule",
    "AdjustmentValue" : 1,
    "ScaleInEvaluationCount" : 15,
    "DisableScaleIn" : true,
    "ScalingRuleName" : "scalingrule****",
    "ScalingRuleId" : "asr-bp1dvirgwkoowxk7****",
    "Alarms" : [ {
      "AlarmTaskId" : "asg-bp18p2yfxow2dloq****_1f9458d1-70e1-4bee-8c7f-7a47695b****",
      "ComparisonOperator" : ">=",
      "MetricName" : "CpuUtilization",
      "EvaluationCount" : 3,
      "AlarmTaskName" : "alarmtask****",
      "MetricType" : "system",
      "Threshold" : 50,
      "Statistics" : "Average",
      "Dimensions" : [ {
        "DimensionKey" : "scaling_group",
        "DimensionValue" : "asg-bp18p2yfxow2dloq****"
      } ]
    } ],
    "StepAdjustments" : [ {
      "MetricIntervalUpperBound" : 5,
      "ScalingAdjustment" : 1,
      "MetricIntervalLowerBound" : 1
    } ],
    "AlarmDimensions" : [ {
      "DimensionKey" : "rulePool",
      "DimensionValue" : "sgp-l1cbirz451yxu2****"
    } ]
  } ]
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Ess).
