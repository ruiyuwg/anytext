ALIYUN::ROS::WaitConditionHandle is used to receive signals. You can use ALIYUN::ROS::WaitConditionHandle together with ALIYUN::ROS::WaitCondition to manage the execution process of a stack. When you create an Elastic Compute Service (ECS) instance, a signal is sent during the execution of the user data.

## Syntax

```
{
  "Type": "ALIYUN::ROS::WaitConditionHandle",
  "Properties": {
    "Mode": String,
    "Count": Integer
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

Mode

String

No

Yes

The mode in which the system deletes existing signals before the resource is updated.

Valid values:

-   Increment: The system deletes all existing signals before the resource is updated.
    
    **Note**
    
    The number of signals for which ALIYUN::ROS::WaitCondition waits during the update is calculated based on the following formula: Number of signals = Value of the Count property in ALIYUN::ROS::WaitCondition.
    
-   Full: If the Count property takes effect, the system deletes existing signals before the resource is updated. Otherwise, the system does not delete existing signals before the resource is updated.
    
    **Note**
    
    The number of signals for which ALIYUN::ROS::WaitCondition waits during the update is calculated based on the following formula: Number of signals = Value of the Count property in ALIYUN::ROS::WaitCondition - Number of remaining signals after the existing signals are deleted.
    

Count

Integer

No

Yes

If you set the Mode property to Full, the system deletes the existing signals whose IDs are integers greater than the value of the Count property before the resource is updated.

Default value: -1.

The Count property takes effect when the following conditions are met:

-   The Mode property is set to Full.
    
-   The Count property is set to a value greater than or equal to 0.
    

If the Count property takes effect, the system deletes the existing signals whose IDs are integers greater than the value of the Count property before the resource is updated. If signals whose IDs are not integers exist, the resource fails to be updated.

**Note**

In scenarios in which you want to perform elastic scaling by updating a stack, we recommend that you set the Count property in ALIYUN::ROS::WaitConditionHandle to the value of the Count property in ALIYUN::ROS::WaitCondition.

## Return values

Fn::GetAtt

-   CurlCli: the cURL command generated from the resource that is specified in ALIYUN::ROS::WaitConditionHandle. You can run the cURL command to send the execution result or status of the user data to Resource Orchestration Service (ROS).
    
-   WindowsCurlCli: the cURL command prefix that is provided for Windows. You can run the cURL command to send a signal that indicates whether the execution is successful or failed. Windows does not support the cURL command. Therefore, you must install curl.exe and add it to PATH before you run the command. You can add `-d "{\"status\": \" SUCCESS \"}` to indicate that the execution is successful and `-d "{\"status\": \" FAILURE \"}` to indicate that the execution failed.
    
-   PowerShellCurlCli: the cURL command prefix that is provided for PowerShell. You can run the cURL command to send a signal that indicates whether the execution is successful or failed. cmdlet is introduced in PowerShell 3.0. Therefore, you must use PowerShell 3.0 or later. You can use `$PSVersionTable.PSVersion` to query the version number of PowerShell. You can add `-Body '{"status": " SUCCESS "}` to indicate that the execution is successful and add `-Body '{"status": " FAILURE "}` to indicate that the execution failed.
    
-   Headers: the HTTP POST request header. You can use a header to send a signal that indicates whether the execution is successful or failed to your program.
    
-   URL: the HTTP POST request URL. You can use the URL to send a signal that indicates whether the execution is successful or failed to your program.
    

**Note**

-   In the request body of CurlCli, WindowsCurlCli, and PowerShellCurlCli, you can use the id parameter in the STRING format to specify the signal ID.
    
    Example: `-d "{\"status\": \" SUCCESS \", \"id\": \"test\"`.
    
    If signals have the same ID, the most recent signal that is received overwrites the previous signal.
    
    If you do not specify a signal ID, ROS uses an integer as the signal ID. The signal ID is calculated based on the following formula: Signal ID = Number of existing signals + 1.
    
-   In the request body of CurlCli, WindowsCurlCli, and PowerShellCurlCli, you can use the `reason` parameter in the STRING format to specify the reason why the execution of the signal succeeded or failed. The reason appears in the stack event that records the signal notification.
    
    Example: `-d "{\"status\": \" SUCCESS \", \"reason\": \"nginx is installed successfully.\"}"`.
    
    After you specify the `reason` field, the requested content appears in the stack event that records the signal notification.
    
-   In the request body of CurlCli, WindowsCurlCli, and PowerShellCurlCli, you can use the `data` parameter in the STRING format to specify the data associated with the signal. You can use the Data, ErrorData, or JoinedErrorData property in the return values of ALIYUN::ROS::WaitCondition to query the data.
    
    Example: `-d "{\"id\" : \"ssh_pub_key\", \"data\" : \"$pub_key\"}"`.
    
-   You can use the `status` parameter to specify the signal type, such as `SUCCESS`, `FAILURE`, and `WARNING`. The following information describes signal types in descending order of priority, and the relationship between the signal types and the operation results on the resource:
    
    -   If the received signal is of the `FAILURE` type, the operation failed to be performed on the resource.
        
    -   If the number of received signals is less than the value of the Count property within the specified time range, the operation on the resource timed out.
        
    -   If the number of received signals is greater than or equal to the value of the Count property and all signals are of the `WARNING` type, the operation failed to be performed on the resource.
        
    -   In other cases, the operation on the resource is successful.
        

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      InstanceId:
        Type: String
        AssociationProperty: ALIYUN::ECS::Instance::InstanceId
    Resources:
      InstallNginx:
        Type: 'ALIYUN::ECS::RunCommand'
        Properties:
          Type: RunShellScript
          CommandContent:
            Fn::Sub: |
                #!/bin/sh
                yum install -y nginx
                systemctl restart nginx
                if [[ $? -eq 0 ]];
                then
                ${InstallNginxWaitConditionHandle.CurlCli} --data-binary "{\"status\": \"SUCCESS\", \"data\": \"Nginx is installed successfully.\"}"
                else
                ${InstallNginxWaitConditionHandle.CurlCli} --data-binary "{\"status\": \"FAILURE\", \"reason\": \"Failed to install and start nginx.\"}"
                fi
          Name: InstallNginxScript
          InstanceIds:
            - Ref:
                InstanceId
          Timeout: 60
      InstallNginxWaitConditionHandle:
        Type: 'ALIYUN::ROS::WaitConditionHandle'
      InstallNginxWaitCondition:
        Type: 'ALIYUN::ROS::WaitCondition'
        Properties:
          Handle:
            Ref: InstallNginxWaitConditionHandle
          Timeout: 60
    Outputs:
      InstallNginxData:
        Description: Received the data sent by the first ecs, JSON serialized dict containing
          data associated with wait condition signals sent to the handle.
        Value:
          Fn::GetAtt:
          - InstallNginxWaitCondition
          - Data
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "InstanceId": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::ECS::Instance::InstanceId"
        }
      },
      "Resources": {
        "InstallNginx": {
          "Type": "ALIYUN::ECS::RunCommand",
          "Properties": {
            "Type": "RunShellScript",
            "CommandContent": {
              "Fn::Sub": "#!/bin/sh\nyum install -y nginx\nsystemctl restart nginx\nif [[ $? -eq 0 ]];\nthen\n${InstallNginxWaitConditionHandle.CurlCli} --data-binary \"{\\\"status\\\": \\\"SUCCESS\\\", \\\"data\\\": \\\"Nginx is installed successfully.\\\"}\"\nelse\n${InstallNginxWaitConditionHandle.CurlCli} --data-binary \"{\\\"status\\\": \\\"FAILURE\\\", \\\"reason\\\": \\\"Failed to install and start nginx.\\\"}\"\nfi\n"
            },
            "Name": "InstallNginxScript",
            "InstanceIds": [
              {
                "Ref": "InstanceId"
              }
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
      "Outputs": {
        "InstallNginxData": {
          "Description": "Received the data sent by the first ecs, JSON serialized dict containing data associated with wait condition signals sent to the handle.",
          "Value": {
            "Fn::GetAtt": [
              "InstallNginxWaitCondition",
              "Data"
            ]
          }
        }
      }
    }
    ```
    

For more examples, visit [WaitConditionHandle.json](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/ROS/JSON/WaitConditionHandle.json) and [WaitConditionHandle.yml](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/ROS/YAML/WaitConditionHandle.yml).
