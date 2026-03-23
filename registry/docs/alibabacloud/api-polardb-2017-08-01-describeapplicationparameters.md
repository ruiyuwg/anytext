Retrieves the current parameters and template information for a specified application and its components.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeApplicationParameters)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeApplicationParameters)

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

polardb:DescribeApplicationParameters

get

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ApplicationId

string

Yes

The application ID.

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ComponentIdList

array

No

A list of subcomponent IDs. If you specify this parameter, the operation returns the parameters and parameter templates for only these components.

string

No

The subcomponent ID.

pac-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response object.

RequestId

string

The request ID.

3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF

Parameters

object

The parameter details.

ComponentParameters

array<object>

A list of subcomponents that contain lists of parameter details.

array<object>

A subcomponent that contains a list of parameter details.

ComponentType

string

The type of the subcomponent.

supabase

Parameters

array<object>

A list of parameter details.

object

The parameter details.

Status

string

The status.

Applied

ReadOnly

boolean

Indicates whether the parameter is read-only.

false

Pattern

string

The regular expression for the parameter.

^\[a-zA-Z0-9\]{1,20}$

Type

string

The parameter type.

string

Description

string

The parameter description.

The name of the parameter

Value

string

The current value of the parameter.

value

NeedRestart

boolean

Indicates whether the application needs to be restarted after you modify the parameter.

false

Default

string

The default value of the parameter.

default value

Name

string

The parameter name.

name

ComponentId

string

The subcomponent ID or application ID.

pac-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ParameterTemplates

object

The details of the parameter template.

ComponentParameterTemplates

array<object>

A list of subcomponents that contain lists of parameter template details.

array<object>

ComponentType

string

The type of the subcomponent.

supabase

Parameters

array<object>

A list of parameter template details.

object

The details of the parameter template.

Pattern

string

The regular expression for the parameter.

^\[a-zA-Z0-9\]{1,20}$

Type

string

The parameter type.

string

Description

string

The parameter description.

The name of the parameter

ReadOnly

boolean

Indicates whether the parameter is read-only.

false

Default

string

The default value of the parameter.

default

Name

string

The parameter name.

name

NeedRestart

boolean

Indicates whether the application needs to be restarted after you modify the parameter.

false

ComponentId

string

The subcomponent ID or application ID.

pac-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF",
  "Parameters": {
    "ComponentParameters": [
      {
        "ComponentType": "supabase",
        "Parameters": [
          {
            "Status": "Applied",
            "ReadOnly": false,
            "Pattern": "^[a-zA-Z0-9]{1,20}$",
            "Type": "string",
            "Description": "The name of the parameter",
            "Value": "value",
            "NeedRestart": false,
            "Default": "default value",
            "Name": "name"
          }
        ],
        "ComponentId": "pac-**************"
      }
    ]
  },
  "ParameterTemplates": {
    "ComponentParameterTemplates": [
      {
        "ComponentType": "supabase",
        "Parameters": [
          {
            "Pattern": "^[a-zA-Z0-9]{1,20}$",
            "Type": "string",
            "Description": "The name of the parameter",
            "ReadOnly": false,
            "Default": "default",
            "Name": "name",
            "NeedRestart": false
          }
        ],
        "ComponentId": "pac-**************"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeApplicationParameters#workbench-doc-change-demo) for a complete list.
