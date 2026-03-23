This topic describes how to use a CloudOps Orchestration Service (OOS) custom template to modify a tag value of multiple resources in the same region at a time.

## Prerequisites

A tag is added to your Elastic Compute Service (ECS) instances. For more information, see [Create a tag](/help/en/resource-management/tag/user-guide/create-a-tag) and [Add a tag](/help/en/resource-management/tag/user-guide/add-a-tag).

## Background information

In this topic, a custom template is created in OOS to modify a tag value of multiple ECS instances at a time. In this example, a tag value of the ECS instances is changed from OldTagValue to NewTagValue. The related tag key-value pair is changed from `TagKey:OldTagValue` to `TagKey:NewTagValue`.

**Note**

-   You can use an OOS custom template to modify a tag value for a maximum of 1,000 resources at a time. If the number of resources is greater than 1,000, you need to execute the template multiple times.
    
-   You can use an OOS custom template to modify the tag values of resources that support tags in the same region. You can modify the related API operations in the template to apply them to various resources. For more information about resources that support tags, see [Services that work with Tag](/help/en/resource-management/tag/product-overview/services-that-work-with-tag#concept-2537668). For more information about the resources supported by OOS, see [List of supported cloud services](/help/en/oos/user-guide/list-of-supported-alibaba-cloud-services).
    

## Step 1: Create an OOS custom template

You can perform the following steps to create an OOS custom template that is used to modify a tag value of multiple resources at a time.

1.  Log on to the [OOS console](https://oos.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Automated Task** > **Custom Template**.
    
3.  In the top navigation bar, select the desired region.
    
4.  Click **Create Template**.
    
5.  Click the **JSON** tab and write code for the template.
    
    The following code provides an example:
    
    ```
    {
        "Description": "Modify a tag value of multiple resources at a time",
        "FormatVersion": "OOS-2019-06-01",
        "Parameters": {
            "operateId": {
                "Description": "The operation ID",
                "Type": "String",
                "MinLength": 1,
                "MaxLength": 64
            },
            "tagKey": {
                "Description": "Current tag key",
                "Type": "String",
                "MinLength": 1,
                "MaxLength": 64
            },
            "tagValue": {
                "Description": "Current tag value",
                "Type": "String",
                "MinLength": 1,
                "MaxLength": 64
            },
            "newTagValue": {
                "Description": "New tag value",
                "Type": "String",
                "MinLength": 1,
                "MaxLength": 64
            }
        },
        "Tasks": [
            {
                "Name": "DescribeInstances_ECS",
                "Action": "ACS::ExecuteAPI",
                "Description": {
                    "en": "filter ecs instances by tags"
                },
                "Properties": {
                    "Service": "ECS",
                    "API": "DescribeInstances",
                    "AutoPaging": true,
                    "Parameters": {
                        "Tags": [
                            {
                                "Key": "{{ tagKey }}",
                                "Value": "{{ tagValue }}"
                            }
                        ]
                    }
                },
                "Outputs": {
                    "Instances": {
                        "Type": "List",
                        "ValueSelector": "Instances.Instance[].InstanceId"
                    }
                }
            },
            {
                "Name": "TagResources_ECS_Instances",
                "Action": "ACS::ExecuteAPI",
                "Description": {
                    "en": "tag ecs instances"
                },
                "Properties": {
                    "Service": "ECS",
                    "API": "TagResources",
                    "Parameters": {
                        "Tags": [
                            {
                                "Key": "{{ tagKey }}",
                                "Value": "{{ newTagValue }}"
                            }
                        ],
                        "ResourceType": "Instance",
                        "ResourceId": [
                            "{{ACS::TaskLoopItem}}"
                        ]
                    }
                },
                "Loop": {
                    "MaxErrors": "100%",
                    "Concurrency": 20,
                    "Items": "{{DescribeInstances_ECS.Instances}}"
                }
            }
        ],
        "Outputs": {}
    }
    ```
    
6.  Click **Create Template**.
    
7.  In the **Template Basic Information** dialog box, configure basic information, including the template name, tag, resource group, and version description.
    
8.  Click **OK**.
    

## Step 2: Execute the custom template

You can perform the following steps to execute the template created in [Step 1: Create an OOS custom template](#section-7cr-6vk-7ur) to modify a tag value of multiple resources.

1.  On the **Custom Template** page, find the template that you created in [Step 1: Create an OOS custom template](#section-7cr-6vk-7ur) and click **Create Execution** in the **Actions** column.
    
2.  Configure **Execution Description** and **Execution Mode** in the Basic Information step. Then, click **Next Step: Parameter Settings**.
    
3.  In the Parameter Settings step, configure the parameters and click **Next Step: OK**.
    
    You must configure the following parameters in this step:
    
    -   operateId: the operation ID, which is used to identify an operation. You can configure this parameter based on your requirements.
        
    -   tagKey: the current tag key. In this example, the current tag key is `TagKey`.
        
    -   tagValue: the current tag value. In this example, the current tag value is `OldTagValue`.
        
    -   newTagValue: the new tag value. In this example, the new tag value is `NewTagValue`.
        
    
4.  Click **Create**.
    
    After the template is executed, the execution details page appears. You can view the execution result on this page.
    
    **Note**
    
    If the execution fails, you can check logs for the failure cause and make adjustments.
