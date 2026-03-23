ALIYUN::ALB::AScript is used to create an AScript rule.

## Syntax

```
{
  "Type": "ALIYUN::ALB::AScript",
  "Properties": {
    "AScriptName": String,
    "ListenerId": String,
    "ScriptContent": String,
    "Enabled": Boolean,
    "ExtAttributeEnabled": Boolean,
    "ExtAttributes": List
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

AScriptName

String

Yes

Yes

The name of the AScript rule.

The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

ListenerId

String

Yes

No

The listener ID.

None.

ScriptContent

String

Yes

Yes

The content of the AScript rule.

None.

Enabled

Boolean

No

Yes

Specifies whether to enable the AScript rule.

Valid values:

-   **true**
    
-   **false** (default)
    

ExtAttributeEnabled

Boolean

No

Yes

Specifies whether to enable the extended attributes of the AScript rule.

Valid values:

-   true
    
-   false (default)
    

ExtAttributes

List

No

Yes

The extended attributes.

For more information, see [ExtAttributes properties](#11d3c8596d1vf).

## ExtAttributes syntax

```
"ExtAttributes": [
  {
    "AttributeKey": String,
    "AttributeValue": String
  }
]
```

## ExtAttributes properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AttributeKey

String

No

No

The attribute name of the AScript rule.

Set the value to **EsDebug**. A value of EsDebug specifies that when requests carry the \_es\_dbg parameter and the property value is the specified key, the debugging header is enabled to return the execution result.

AttributeValue

String

No

No

The attribute value of the AScript rule.

The value must be 1 to 128 characters in length, and can contain letters and digits.

## Return values

Fn::GetAtt

AScriptId: the ID of the AScript rule.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      ScriptContent:
        Type: String
        Description:
          en: The content of the AScript rule.
        Required: true
      AScriptName:
        Type: String
        Description:
          en: |-
            The name of the AScript rule.
            The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        AllowedPattern: ^[a-zA-Z][.-_a-zA-Z0-9]{1,127}$
        Required: true
      ListenerId:
        Type: String
        Description:
          en: The listener ID.
        Required: true
    Resources:
      AScript:
        Type: ALIYUN::ALB::AScript
        Properties:
          ScriptContent:
            Ref: ScriptContent
          AScriptName:
            Ref: AScriptName
          ListenerId:
            Ref: ListenerId
    Outputs:
      AScriptId:
        Description: The AScript rule ID.
        Value:
          Fn::GetAtt:
            - AScript
            - AScriptId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ScriptContent": {
          "Type": "String",
          "Description": {
            "en": "The content of the AScript rule."
          },
          "Required": true
        },
        "AScriptName": {
          "Type": "String",
          "Description": {
            "en": "The name of the AScript rule.\nThe name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter."
          },
          "AllowedPattern": "^[a-zA-Z][.-_a-zA-Z0-9]{1,127}$",
          "Required": true
        },
        "ListenerId": {
          "Type": "String",
          "Description": {
            "en": "The listener ID."
          },
          "Required": true
        }
      },
      "Resources": {
        "AScript": {
          "Type": "ALIYUN::ALB::AScript",
          "Properties": {
            "ScriptContent": {
              "Ref": "ScriptContent"
            },
            "AScriptName": {
              "Ref": "AScriptName"
            },
            "ListenerId": {
              "Ref": "ListenerId"
            }
          }
        }
      },
      "Outputs": {
        "AScriptId": {
          "Description": "The AScript rule ID.",
          "Value": {
            "Fn::GetAtt": [
              "AScript",
              "AScriptId"
            ]
          }
        }
      }
    }
                            
    ```
