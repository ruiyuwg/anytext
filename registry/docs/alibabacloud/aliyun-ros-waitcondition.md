ALIYUN::ROS::WaitCondition is used to wait for signals. You can use ALIYUN::ROS::WaitCondition together with ALIYUN::ROS::WaitConditionHandle to manage the execution process of a stack. When you create an Elastic Compute Service (ECS) instance, a signal is sent during the execution of the user data.

## Syntax

```
{
  "Type": "ALIYUN::ROS::WaitCondition",
  "Properties": {
    "Count": Number,
    "Handle": String,
    "Timeout": Number,
    "ShowProgressEvent": String
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

Handle

String

Yes

No

The reference to an instance that is created by using ALIYUN::ROS::WaitConditionHandle.

None.

Timeout

Number

Yes

No

The timeout period that is allowed to receive UserData messages.

Valid values: 1 to 43200.

Unit: seconds.

Count

Number

No

Yes

The total number of UserData messages that Resource Orchestration Service (ROS) receives.

None.

ShowProgressEvent

String

No

No

Specifies whether to display progress events that represent the receiving progress of UserData messages.

Valid values:

-   Disabled (default): does not display progress events.
    
-   Enabled: displays progress events.
    
-   EnabledIfCreateStack (not recommended): displays progress events when you are creating the stack.
    

## Return values

Fn::GetAtt

-   Data: a JSON string that contains the signal data that is last created or updated.
    
-   JoinedErrorData: a string that contains the content of ErrorData.
    
-   ErrorData: a JSON string that contains the error signal data that is last created or updated.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Description: ''
    Parameters: {}
    Outputs: {}
    Resources:
      InstallNginx:
        Type: 'ALIYUN::ECS::RunCommand'
        Properties:
          Type: RunShellScript
          CommandContent:
            'Fn::Replace':
              - ros-notify:
                  'Fn::GetAtt':
                    - InstallNginxWaitConditionHandle
                    - CurlCli
              - |
                #!/bin/sh
                yum install -y nginx
                systemctl restart nginx
                if [[ $? -eq 0 ]];
                then
                ros-notify -d "{\"status\" : \"SUCCESS\"}"
                else
                ros-notify -d "{\"status\" : \"FAILURE\"}"
                fi
          Name: InstallNginxScript
          InstanceIds:
            - i-wz995r4yn8njthoq****
          Timeout: 60
      InstallNginxWaitConditionHandle:
        Type: 'ALIYUN::ROS::WaitConditionHandle'
      InstallNginxWaitCondition:
        Type: 'ALIYUN::ROS::WaitCondition'
        Properties:
          Handle:
            Ref: InstallNginxWaitConditionHandle
          Timeout: 60
    Metadata: {}
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Description": "",
      "Parameters": {},
      "Outputs": {},
      "Resources": {
        "InstallNginx": {
          "Type": "ALIYUN::ECS::RunCommand",
          "Properties": {
            "Type": "RunShellScript",
            "CommandContent": {
              "Fn::Replace": [
                {
                  "ros-notify": {
                    "Fn::GetAtt": [
                      "InstallNginxWaitConditionHandle",
                      "CurlCli"
                    ]
                  }
                },
                "#!/bin/sh\nyum install -y nginx\nsystemctl restart nginx\nif [[ $? -eq 0 ]];\nthen \nros-notify -d \"{\\\"status\\\" : \\\"SUCCESS\\\"}\" \nelse \nros-notify -d \"{\\\"status\\\" : \\\"FAILURE\\\"}\" \nfi \n"
              ]
            },
            "Name": "InstallNginxScript",
            "InstanceIds": [
              "i-wz995r4yn8njthoq****"
            ],
            "Timeout": 60
          }
        },
        "InstallNginxWaitConditionHandle": {
          "Type": "ALIYUN::ROS::WaitConditionHandle"
        },
        "InstallNginxWaitCondition": {
          "Type": "ALIYUN::ROS::WaitCondition",
          "Properties": {
            "Handle": {
              "Ref": "InstallNginxWaitConditionHandle"
            },
            "Timeout": 60
          }
        }
      },
      "Metadata": {}
    }
    ```
