This topic describes how to create a custom template in the CloudOps Orchestration Service (OOS) console. In this topic, the custom template is created based on the ACS-OOS-ExampleBulkyExecuteCommandsInEcs template.CloudOps Orchestration Service (OOS)

1.  Log on to the [CloudOps Orchestration Service console](https://oos.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Automated Task** > **Custom Template**. On the Custom Template page, click **Create Template**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1744395271/p767362.png)
    
3.  Use a sample template or local file to create a template.
    
    -   You can select **ACS-OOS-ExampleBulkyExecuteCommandsInEcs** for the O&M Template parameter and click **Next Step**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7383152371/p859179.png)
        
    -   If you created a .yaml or .json template file that is used to run commands on multiple Elastic Compute Service (ECS) instances at the same time, select Create by Local File and upload the template file. After you upload the template file, click **Next Step**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7383152371/p869306.png)
        
        **Template file content**
        
        YAML
        
        ```
        FormatVersion: OOS-2019-06-01
        Description: Run commands on multiple ECS instances at the same time.
        Parameters:
          targets:
            Label:
              en: TargetInstance
               
            Type: Json
            AssociationProperty: Targets
            AssociationPropertyMetadata:
              ResourceType: ALIYUN::ECS::Instance
              RegionId: regionId
          rateControl:
            Label:
              en: RateControl
               
            Type: Json
            AssociationProperty: RateControl
            Default:
              Mode: Concurrency
              MaxErrors: 0
              Concurrency: 10
        Tasks:
          - Name: getInstance
            Description: Obtain ECS instances.
            Action: ACS::SelectTargets
            Properties:
              ResourceType: ALIYUN::ECS::Instance
              Filters:
                - '{{ targets }}'
            Outputs:
              instanceIds:
                Type: List
                ValueSelector: Instances.Instance[].InstanceId
          - Name: runCommand
            Action: ACS::ECS::RunCommand
            Description: Run Cloud Assistant commands.
            Properties:
              instanceId: '{{ ACS::TaskLoopItem }}'
              commandType: RunShellScript
              commandContent: |-
                #!/bin/bash
        
                 
                function job_start()
                {
                    now=`date +'%Y-%m-%d %H:%M:%S'`
                    echo "[$now][$$] job_start"
                }
        
                 
                job_start
              regionId: '{{ ACS::RegionId }}'
              workingDir: /root
              enableParameter: false
              timeout: 600
              username: ''
              parameters: {}
              windowsPasswordName: ''
            Outputs:
              invocationOutput:
                Type: String
                ValueSelector: invocationOutput
            Loop:
              Items: '{{ getInstance.instanceIds }}'
              RateControl: '{{ rateControl }}'
              Outputs:
                invocationOutputs:
                  AggregateType: Fn::ListJoin
                  AggregateField: invocationOutput
        Outputs:
          invocationOutputs:
            Type: List
            Value: '{{ runCommand.invocationOutputs }}'
        ```
        
        JSON
        
        ```
        {
          "FormatVersion": "OOS-2019-06-01",
          "Description": "Run commands on multiple ECS instances at the same time",
          "Parameters": {
            "targets": {
              "Label": {
                "en": "TargetInstance",
                 
              },
              "Type": "Json",
              "AssociationProperty": "Targets",
              "AssociationPropertyMetadata": {
                "ResourceType": "ALIYUN::ECS::Instance",
                "RegionId": "regionId"
              }
            },
            "rateControl": {
              "Label": {
                "en": "RateControl",
                 
              },
              "Type": "Json",
              "AssociationProperty": "RateControl",
              "Default": {
                "Mode": "Concurrency",
                "MaxErrors": 0,
                "Concurrency": 10
              }
            }
          },
          "Tasks": [
            {
              "Name": "getInstance",
              "Description": “Obtain ECS instances",
              "Action": "ACS::SelectTargets",
              "Properties": {
                "ResourceType": "ALIYUN::ECS::Instance",
                "Filters": [
                  "{{ targets }}"
                ]
              },
              "Outputs": {
                "instanceIds": {
                  "Type": "List",
                  "ValueSelector": "Instances.Instance[].InstanceId"
                }
              }
            },
            {
              "Name": "runCommand",
              "Action": "ACS::ECS::RunCommand",
              "Description": "Run Cloud Assistant commands",
              "Properties": {
                "instanceId": "{{ ACS::TaskLoopItem }}",
                "commandType": "RunShellScript",
                "commandContent": "#!/bin/bash\n\n \nfunction job_start()\n{\n    now=`date +'%Y-%m-%d %H:%M:%S'`\n    echo \"[$now][$$] job_start\"\n}\n\n
                "regionId": "{{ ACS::RegionId }}",
                "workingDir": "/root",
                "enableParameter": false,
                "timeout": 600,
                "username": "",
                "parameters": {},
                "windowsPasswordName": ""
              },
              "Outputs": {
                "invocationOutput": {
                  "Type": "String",
                  "ValueSelector": "invocationOutput"
                }
              },
              "Loop": {
                "Items": "{{ getInstance.instanceIds }}",
                "RateControl": "{{ rateControl }}",
                "Outputs": {
                  "invocationOutputs": {
                    "AggregateType": "Fn::ListJoin",
                    "AggregateField": "invocationOutput"
                  }
                }
              }
            }
          ],
          "Outputs": {
            "invocationOutputs": {
              "Type": "List",
              "Value": "{{ runCommand.invocationOutputs }}"
            }
          }
        }
        ```
        
4.  Optional. The settings in the **getInstance** task step are preset. If you want to modify the settings, click **targets** in the **Template Parameters** section.
    
    **Note**
    
    Select the ECS instances on which you want to run commands and configure the instance information when you create an execution. For more information, see [Create an execution](/help/en/oos/getting-started/execute-a-template).
    
5.  On the Process Configuration tab, enter the **command content** in the code editor and click **Create Template**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1744395271/p767363.png)
    
6.  In the Template Basic Information dialog box, set the **Template Name** parameter and click **OK**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1744395271/p833895.png)
    

## **References**

-   After you create a template, you can create an execution based on the template and start the execution. For more information, see [Create an execution](/help/en/oos/getting-started/execute-a-template).
    
-   If you understand the risks of all tasks in a template, you can set the Execution Mode parameter to Automatic when you create an execution. For more information, see [Automatic execution](/help/en/oos/user-guide/automatic-execution).
    
-   If you want to manually start an execution, you can set the Execution Mode parameter to Manual when you create an execution. For more information, see [Manual execution](/help/en/oos/user-guide/manual-execution).
