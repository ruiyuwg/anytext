The ALIYUN::FC3::FunctionInvoker resource type invokes a function in Function Compute (FC) 3.0.

## Syntax

```
{
  "Type": "ALIYUN::FC3::FunctionInvoker",
  "Properties": {
    "FunctionName": String,
    "Async": Boolean,
    "CheckError": Boolean,
    "CheckAsyncInvocation": Map,
    "ExecuteVersion": Integer,
    "Event": String,
    "Qualifier": String,
    "ServiceRegionId": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

FunctionName

String

Yes

Yes

The function name.

None

Async

Boolean

No

Yes

Specifies whether to use asynchronous invocation.

Valid values:

-   true
    
-   false (default)
    

CheckError

Boolean

No

No

Specifies whether to check the invocation result.

Valid values:

-   true
    
    **Note**
    
    If this property is set to true and the function invocation fails, the resource creation is considered to have failed.
    
-   false (default)
    

CheckAsyncInvocation

Map

No

No

The settings for checking an asynchronous invocation.

For more information, see [CheckAsyncInvocation properties](#ce4e6d39c72mf).

ExecuteVersion

Integer

No

Yes

When you create the resource, the function is invoked only if this parameter is specified. 

When you update the resource, the function is invoked only if this parameter's value is changed and the new value is an integer. 

None

Event

String

No

Yes

The custom input parameter for the function.

This parameter is passed to the function as a UTF-8 encoded string during execution. To pass a binary string or a string in another encoding format, encode the string in Base64 before you pass it to this parameter.

Qualifier

String

No

Yes

The service version.

Valid values:

-   versionId: The version number.
    
-   aliasName: The alias.
    

ServiceRegionId

String

No

No

The region where the Function Compute service resides.

None

## CheckAsyncInvocation syntax

```
"CheckAsyncInvocation": {
  "CheckTimes": Integer,
  "CheckInterval": Integer,
  "Enabled": Boolean
}
```

## CheckAsyncInvocation properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

CheckTimes

Integer

Yes

No

The number of times to check the result of an asynchronous invocation.

The default value is 10.

CheckInterval

Integer

Yes

No

The interval at which to check the result of an asynchronous invocation.

The default value is 10. Unit: seconds.

Enabled

Boolean

Yes

No

Specifies whether to check the result of an asynchronous invocation.

If you set this property to true and the invocation type is asynchronous, the resource creation process waits for the invocation to complete and then checks the result. The default value is false.

## Return values

Fn::GetAtt

-   ResultType:
    
    -   NoResult: The invocation is asynchronous (Async is true) and has no return value.
        
    -   Success: The synchronous invocation (Async is false) succeeded.
        
    -   Failure: The synchronous invocation (Async is false) failed.
        
-   Result:
    
    -   If ResultType is NoResult, this attribute is empty.
        
    -   If ResultType is Success, this attribute is the return value from the function. The return value must be a UTF-8 encoded string. Otherwise, ROS considers the function execution to have failed. To return a binary string or a string in another encoding format, encode it in Base64 before returning it.
        
    -   If ResultType is Failure, this attribute contains the error message.
        
-   Events: The events from the asynchronous invocation.
    
-   TaskId: The task ID of the asynchronous invocation.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  FunctionName:
    Type: String
    Description:
      en: The name of the function.
    Required: true
Resources:
  FunctionInvoker:
    Type: ALIYUN::FC3::FunctionInvoker
    Properties:
      FunctionName:
        Ref: FunctionName
Outputs:
  ResultType:
    Description: |-
      Result type:
      NoResult: Async invoke has no result.
      Success: Sync invoke succeeds.
      Failure: Sync invoke fails.
    Value:
      Fn::GetAtt:
        - FunctionInvoker
        - ResultType
  Result:
    Description: |-
      Depends on result type:
      NoResult: Async invoke has no result.
      Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
      Failure: Error Message.
    Value:
      Fn::GetAtt:
        - FunctionInvoker
        - Result
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "FunctionName": {
      "Type": "String",
      "Description": {
        "en": "The name of the function."
      },
      "Required": true
    }
  },
  "Resources": {
    "FunctionInvoker": {
      "Type": "ALIYUN::FC3::FunctionInvoker",
      "Properties": {
        "FunctionName": {
          "Ref": "FunctionName"
        }
      }
    }
  },
  "Outputs": {
    "ResultType": {
      "Description": "Result type:\nNoResult: Async invoke has no result.\nSuccess: Sync invoke succeeds.\nFailure: Sync invoke fails.",
      "Value": {
        "Fn::GetAtt": [
          "FunctionInvoker",
          "ResultType"
        ]
      }
    },
    "Result": {
      "Description": "Depends on result type:\nNoResult: Async invoke has no result.\nSuccess: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.\nFailure: Error Message.",
      "Value": {
        "Fn::GetAtt": [
          "FunctionInvoker",
          "Result"
        ]
      }
    }
  }
}
                        
```
