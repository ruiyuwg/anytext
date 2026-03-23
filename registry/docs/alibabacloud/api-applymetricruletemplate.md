Applies an alert template to an application group to generate an alert rule.

## Operation description

In this example, the `700****` alert template is applied to the `123456` application group. For the generated alert rule, the ID is `applyTemplate8ab74c6b-9f27-47ab-8841-de01dc08****`, and the name is `test123`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/ApplyMetricRuleTemplate)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/ApplyMetricRuleTemplate)

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

cms:ApplyMetricRuleTemplate

create

\*MetricRuleTemplate

`acs:cms::{#accountId}:group/{#groupId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

SilenceTime

integer

No

The mute period during which notifications are not repeatedly sent for an alert. Unit: seconds. Default value: 86400.

**Note**

Only one alert notification is sent during each mute period even if the metric value exceeds the alert threshold several times.

86400

GroupId

integer

Yes

The ID of the application group to which the alert template is applied.

For more information about how to query the ID of an application group, see [DescribeMonitorGroups](/help/en/cms/cloudmonitor-1-0/api-describemonitorgroups).

123456

TemplateIds

string

Yes

The ID of the alert template.

For more information about how to query the IDs of alert templates, see [DescribeMetricRuleTemplateList](/help/en/cms/cloudmonitor-1-0/api-describemetricruletemplatelist).

700\*\*\*\*

EnableStartTime

integer

No

The beginning of the time period during which the alert rule is effective. Valid values: 00 to 23. A value of 00 indicates 00:00 and a value of 23 indicates 23:00.

00

EnableEndTime

integer

No

The end of the time period during which the alert rule is effective. Valid values: 00 to 23. A value of 00 indicates 00:59 and a value of 23 indicates 23:59.

23

NotifyLevel

integer

No

The alert notification method. Valid values:

Set the value to 4. A value of 4 indicates that alert notifications are sent by using TradeManager and DingTalk chatbots.

4

ApplyMode

string

No

The mode in which the alert template is applied. Valid values:

-   GROUP\_INSTANCE\_FIRST: The metrics in the application group take precedence. If a metric specified in the alert template does not exist in the application group, the system does not generate an alert rule for the metric based on the alert template.
    
-   ALARM\_TEMPLATE\_FIRST: The metrics specified in the alert template take precedence. If a metric specified in the alert template does not exist in the application group, the system still generates an alert rule for the metric based on the alert template.
    

GROUP\_INSTANCE\_FIRST

Webhook

string

No

The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.

https://www.aliyun.com

AppendMode

string

No

The template application policy. Valid values:

-   all (default): deletes all the rules that are created by using the alert template from the selected application group, and then creates alert rules based on the template.
    
-   append: deletes the rules that are created by using the alert template from the selected application group, and then creates alert rules based on the existing template.
    

all

For more information about common request parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

integer

The responses code.

**Note**

The status code 200 indicates that the request was successful.

200

Message

string

The returned message.

The specified resource is not found.

RequestId

string

The request ID.

3F897F3C-020A-4993-95B4-63ABB84F83E6

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

Resource

object

The resources that are affected by the alert rule.

GroupId

integer

The ID of the application group.

123456

AlertResults

array<object>

The details of the generated alert rule.

object

Code

string

The responses code.

**Note**

The status code 200 indicates that the request was successful.

200

Message

string

The returned message.

alert rule is creating, please wait a few minutes.

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

RuleName

string

The name of the alert rule.

test123

RuleId

string

The ID of the alert rule.

applyTemplate8ab74c6b-9f27-47ab-8841-de01dc08\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "Code": 200,
  "Message": "The specified resource is not found.",
  "RequestId": "3F897F3C-020A-4993-95B4-63ABB84F83E6",
  "Success": true,
  "Resource": {
    "GroupId": 123456,
    "AlertResults": [
      {
        "Code": "200",
        "Message": "alert rule is creating, please wait a few minutes.",
        "Success": true,
        "RuleName": "test123",
        "RuleId": "applyTemplate8ab74c6b-9f27-47ab-8841-de01dc08****"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ParameterInvalid

Illegal parameters.

500

InternalError

The request processing has failed due to some unknown error.

403

AccessForbidden

User not authorized to operate on the specified resource.

404

ResourceNotFound

%s

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/ApplyMetricRuleTemplate#workbench-doc-change-demo) for a complete list.
