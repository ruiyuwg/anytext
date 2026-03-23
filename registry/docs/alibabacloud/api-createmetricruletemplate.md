Creates an alert template.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/CreateMetricRuleTemplate)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/CreateMetricRuleTemplate)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cms:CreateMetricRuleTemplate

create

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Name

string

Yes

The name of the alert template.

Template1

Description

string

No

The description of the alert template.

ECS\_Template1

AlertTemplates

array<object>

No

The details of the alert template.

object

No

The alert template.

Escalations.Info.Threshold

string

No

The threshold for Info-level alerts.

Valid values of N: 1 to 200.

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

20

MetricName

string

Yes

The metric name.

Valid values of N: 1 to 200.

For information about how to obtain the name of a metric, see [DescribeMetricMetaList](/help/en/cms/cloudmonitor-1-0/api-describemetricmetalist) or [Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

cpu\_total

Webhook

string

No

The callback URL.

Valid values of N: 1 to 200.

The callback URL must be accessible over the Internet. CloudMonitor pushes an alert notification to the specified callback URL by sending an HTTP POST request. Only the HTTP protocol is supported.

http://ww.aliyun.com

Escalations.Warn.Threshold

string

No

The threshold for Warn-level alerts.

Valid values of N: 1 to 200.

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

30

Namespace

string

Yes

The namespace of the cloud service.

Valid values of N: 1 to 200.

For information about how to obtain the namespace of a cloud service, see [DescribeMetricMetaList](/help/en/cms/cloudmonitor-1-0/api-describemetricmetalist) or [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

acs\_ecs\_dashboard

Period

integer

No

The aggregation period of monitoring data. Unit: seconds.

The default value is the minimum aggregation period. Generally, you do not need to specify the minimum aggregation period.

Valid values of N: 1 to 200.

60

RuleName

string

Yes

The name of the alert rule.

Valid values of N: 1 to 200.

ECS\_Rule1

Escalations.Critical.Times

integer

No

The consecutive number of times for which the metric value meets the alert condition before a Critical-level alert is triggered.

Valid values of N: 1 to 200.

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

3

Selector

string

No

The dimension of the alert. It is an extended field.

Valid values of N: 1 to 200.

For example, an alert template is applied to an application group, this parameter is set to `{"disk":"/"}`, and the MetricName parameter is set to `DiskUtilization`. In this case, the generated alert rule is applied to the root disk partition (`"/"`) of all instances in the application group to which the alert template is applied.

**Note**

For more information about the values of extended fields, see [DescribeMetricRuleTemplateAttribute](/help/en/cms/cloudmonitor-1-0/api-describemetricruletemplateattribute).

{"disk":"/"}

Escalations.Info.Statistics

string

No

The statistical method for Info-level alerts.

Valid values of N: 1 to 200.

The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

Average

Escalations.Warn.Times

integer

No

The consecutive number of times for which the metric value meets the alert condition before a Warn-level alert is triggered.

Valid values of N: 1 to 200.

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

1

Escalations.Info.ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold for Info-level alerts. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
    
-   GreaterThanThreshold: greater than the threshold
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold
    
-   LessThanThreshold: less than the threshold
    
-   NotEqualToThreshold: not equal to the threshold
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
    
-   LessThanYesterday: less than the metric value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the metric value at the same time last week
    
-   LessThanLastWeek: less than the metric value at the same time last week
    
-   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle
    

Valid values of N: 1 to 200.

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

GreaterThanOrEqualToThreshold

Category

string

Yes

The abbreviation of the cloud service name.

Valid values of N: 1 to 200.

For more information about how to obtain the abbreviation of a cloud service name, see `metricCategory` in the response parameter `Labels` of the [DescribeProjectMeta](/help/en/cms/cloudmonitor-1-0/api-describeprojectmeta) operation.

ecs

Escalations.Critical.Threshold

string

No

The threshold for Critical-level alerts.

Valid values of N: 1 to 200.

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

30

Escalations.Critical.Statistics

string

No

The statistical method for Critical-level alerts.

Valid values of N: 1 to 200.

The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

Average

Escalations.Critical.ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold for Critical-level alerts. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
    
-   GreaterThanThreshold: greater than the threshold
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold
    
-   LessThanThreshold: less than the threshold
    
-   NotEqualToThreshold: not equal to the threshold
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
    
-   LessThanYesterday: less than the metric value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the metric value at the same time last week
    
-   LessThanLastWeek: less than the metric value at the same time last week
    
-   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle
    

Valid values of N: 1 to 200.

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

GreaterThanOrEqualToThreshold

Escalations.Warn.ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold for Warn-level alerts. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
    
-   GreaterThanThreshold: greater than the threshold
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold
    
-   LessThanThreshold: less than the threshold
    
-   NotEqualToThreshold: not equal to the threshold
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
    
-   LessThanYesterday: less than the metric value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the metric value at the same time last week
    
-   LessThanLastWeek: less than the metric value at the same time last week
    
-   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle
    

Valid values of N: 1 to 200.

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

GreaterThanOrEqualToThreshold

Escalations.Info.Times

integer

No

The consecutive number of times for which the metric value meets the alert condition before an Info-level alert is triggered.

Valid values of N: 1 to 200.

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

1

Escalations.Warn.Statistics

string

No

The statistical method for the Warn-level alert.

Valid values of N: 1 to 200.

The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note**

You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

Average

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The data returned.

Code

integer

The status code.

**Note**

The status code 200 indicates that the request was successful.

200

Message

string

The error message.

The Request is not authorization.

RequestId

string

The request ID.

9763ED1A-4D09-41BF-851E-310421750204

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

Id

integer

The ID of the alert template.

12345

## Examples

Success response

`JSON` format

```
{
  "Code": 200,
  "Message": "The Request is not authorization.",
  "RequestId": "9763ED1A-4D09-41BF-851E-310421750204",
  "Success": true,
  "Id": 12345
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidQueryParameter

%s

401

AccessDeniedException

You donot have sufficient access to perform this action.

412

ResourcesOverLimit

Resources over limit.

500

InternalFailure

%s

402

LimitExceeded

The quota for this customer had been reached.

403

InvalidClientTokenId

not allow this operation.

No permission

206

%s

%s

503

%s

%s

406

%s

%s

429

Throttli∂ngException

The request was denied due to request throttling.

409

%s

%s

409

ResourceConflict

Concurrent modification of resources.

409

ResourceExist

Resources already exist.

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/CreateMetricRuleTemplate#workbench-doc-change-demo) for a complete list.
