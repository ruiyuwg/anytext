ALIYUN::ROS::Assert is used to create an assertion. Assertions are used to evaluate conditions and support a variety of operation types. An assertion determines whether to terminate creation and return an error message when the assertion result is false.

## Syntax

```
{
  "Type": "ALIYUN::ROS::Assert",
  "Properties": {
    "Values": List,
    "AbortCreation": Boolean,
    "ErrorMessage": String,
    "Operation": String
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

Values

List

Yes

No

The assertions to be evaluated.

The assertions are evaluated in order. You can specify up to three assertions.

**Note**

You can specify three assertions only when Operation is set to Equal or NotEqual.

You can specify one assertion only when Operation is set to Not.

AbortCreation

Boolean

No

No

Specifies whether to terminate creation when the assertion result is false.

Default value: True.

ErrorMessage

String

No

No

The error message to be returned when the assertion result is false.

None.

Operation

String

No

No

The operation type of the assertion.

Valid values:

-   Equal (default)
    
-   NotEqual
    
-   Greater
    
-   GreaterOrEqual
    
-   Less
    
-   LessOrEqual
    
-   Contain
    
-   NotContain
    
-   And
    
-   Or
    
-   Not
    

## Return values

Fn::GetAtt

-   Result: the result of the assertion.
    
-   FailureCause: the reason why the assertion result is false.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Values:
    Type: Json
    Description:
      en: |-
        A list of values to assert. The items in the list are compared in order. The range of length is one to three. 
        - Three values are supported only if the operation is Equal or NotEqual.
        - One value is supported only if the operation is Not.
    Required: true
    MinLength: 1
    MaxLength: 3
Resources:
  Assert:
    Type: ALIYUN::ROS::Assert
    Properties:
      Values:
        Ref: Values
Outputs:
  Result:
    Description: The result of the assert.
    Value:
      Fn::GetAtt:
        - Assert
        - Result
  FailureCause:
    Description: The reason the assertion failed
    Value:
      Fn::GetAtt:
        - Assert
        - FailureCause
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Values": {
      "Type": "Json",
      "Description": {
        "en": "A list of values to assert. The items in the list are compared in order. The range of length is one to three. \n- Three values are supported only if the operation is Equal or NotEqual.\n- One value is supported only if the operation is Not."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 3
    }
  },
  "Resources": {
    "Assert": {
      "Type": "ALIYUN::ROS::Assert",
      "Properties": {
        "Values": {
          "Ref": "Values"
        }
      }
    }
  },
  "Outputs": {
    "Result": {
      "Description": "The result of the assert.",
      "Value": {
        "Fn::GetAtt": [
          "Assert",
          "Result"
        ]
      }
    },
    "FailureCause": {
      "Description": "The reason the assertion failed",
      "Value": {
        "Fn::GetAtt": [
          "Assert",
          "FailureCause"
        ]
      }
    }
  }
}
                        
```
