This topic describes how to use tags to manage the permissions of a RAM user. This topic also describes how to use tags to authenticate a RAM user.

## Background information

Tags are used to identify and categorize cloud resources. Resource Access Management (RAM) manages the access and operation permissions of RAM users on cloud resources based on permission policies. You can use tags as conditions in RAM policies to implement fine-grained access control on resources.

The following figure shows how to use tags to manage the permissions of a RAM user.

![标签鉴权逻辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9187545561/p437872.png)

**Note**

You can bind tags to the following Elastic Container Instance resources: elastic container instances, image caches, and virtual nodes. You can bind tags to the resources only when you create or update the resources. For more information, see [Use tags to manage elastic container instances](/help/en/eci/user-guide/use-tags-to-manage-elastic-container-instances#topic-1860115).

## Configuration example

### Scenario

The scenario in this topic is used to describe how to perform tag-based authentication.

For example, you want to grant a RAM user the permissions only on the Elastic Container Instance resources that have the `env:test` tag, as shown in the following figure: ![标签鉴权](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9187545561/p437989.png)

You have the following specific requirements:

-   Requirement 1: The RAM user can successfully create Elastic Container Instance resources only if the RAM user binds the `env:test` tag to the resources.
    
-   Requirement 2: The RAM user can operate only the Elastic Container Instance resources that are created by the RAM user. The resources must have the `env:test` tag.
    
-   Requirement 3: The RAM user can view only the Elastic Container Instance resources that are created by the RAM user. The resources must have the `env:test` tag.
    

### Step 1: Create a custom policy and attach the policy to the RAM user

1.  Use your Alibaba Cloud account to log on to the [RAM console](https://ram.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, choose **Permissions > Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
4.  Configure the parameters to create a custom policy.
    
    1.  Click the **Import Policy** tab.
        
    2.  In the dialog box that appears, select **System Policy** from the Policy Template drop-down list, enter **AliyunECIFullAccess** in the "Filter templates" search box, select the AliyunECIFullAccess policy, and then click **Import**.
        
        AliyunECIFullAccess is the default policy for managing Elastic Container Instance resources. AliyunECIFullAccess contains the permissions to operate Elastic Container Instance resources, query resources such as security groups and virtual private clouds (VPCs), and create the service-linked role for Elastic Container Instance.
        
    3.  Click the **JSON** tab.
        
    4.  Modify the policy document in the code editor and then click **Next to edit policy information**.
        
        **Note**
        
        A policy contains a set of permissions. Each policy includes a version number and authorization statements. Each statement includes the following elements: Effect, Action, Resource, and Condition. The Condition element is optional. For more information, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb) and [Policy elements](/help/en/ram/policy-elements#concept-xg5-51g-xdb).
        
        You can specify authentication tags in the `Condition` element of a policy to restrict the operation permissions of the RAM user. The following table describes the conditions that can be specified in a policy.
        
        Tag-based authentication condition
        
        Description
        
        `acs:RequestTag`
        
        Specifies that an API request must contain a tag.
        
        You can use the `acs:RequestTag` condition in an API request only if the API request contains tag-related parameters.
        
        `acs:ResourceTag`
        
        Specifies that the resource specified in an API request must have a tag.
        
        You can use the `acs:ResourceTag` condition in an API request only if the API request contains resource ID-related parameters.
        
        **Note**
        
        When you configure a policy, you can use the `acs:RequestTag` or `acs:ResourceTag` condition based on whether the API request supports tags or requires resource IDs. For more information, see [Authenticate a RAM user when the RAM user initiates an API request](#section-arb-5fa-soq).
        
        You can configure the following policies to meet your business requirements for the preceding scenario:
        
        Requirement
        
        Policy
        
        The RAM user can successfully create Elastic Container Instance resources only if the RAM user binds the `env:test` tag to the resources.
        
        ```
        {
           "Effect": "Allow",
           "Action": "eci:Create*",
           "Resource": "*",
           "Condition": {
            "StringEquals": {
             "acs:RequestTag/env": "test"
            }
           }
          }
        ```
        
        The RAM user can operate only the Elastic Container Instance resources that have the env:test tag.
        
        ```
        {
           "Effect": "Allow",
           "Action": "eci:*",
           "Resource": "*",
           "Condition": {
            "StringEquals": {
             "acs:ResourceTag/env": "test"
            }
           }
          }
        ```
        
        The RAM user can view only the Elastic Container Instance resources that have the env:test tag.
        
        ```
        {
           "Effect": "Allow",
           "Action": "eci:Describe*",
           "Resource": "*",
           "Condition": {
            "StringEquals": {
             "acs:RequestTag/env": "test"
            }
           }
          }
        ```
        
        The following example shows a complete policy that contains the permissions provided by AliyunECIFullAccess.
        
        ```
        {
         "Version": "1",
         "Statement": [{
           "Effect": "Allow",
           "Action": "eci:Create*",
           "Resource": "*",
           "Condition": {
            "StringEquals": {
             "acs:RequestTag/env": "test"
            }
           }
          },
          {
           "Effect": "Allow",
           "Action": "eci:*",
           "Resource": "*",
           "Condition": {
            "StringEquals": {
             "acs:ResourceTag/env": "test"
            }
           }
          },
          {
           "Effect": "Allow",
           "Action": "eci:Describe*",
           "Resource": "*",
           "Condition": {
            "StringEquals": {
             "acs:RequestTag/env": "test"
            }
           }
          },
          {
           "Action": [
            "ecs:DescribeSecurityGroups"
           ],
           "Resource": "*",
           "Effect": "Allow"
          },
          {
           "Action": [
            "vpc:DescribeVSwitches",
            "vpc:DescribeVpcs",
            "vpc:DescribeEipAddresses"
           ],
           "Resource": "*",
           "Effect": "Allow"
          },
          {
           "Action": "ram:CreateServiceLinkedRole",
           "Resource": "*",
           "Effect": "Allow",
           "Condition": {
            "StringEquals": {
             "ram:ServiceName": [
              "eci.aliyuncs.com",
              "vnode.eci.aliyuncs.com"
             ]
            }
           }
          }
         ]
        }
        ```
        
        **Note**
        
        If you want the RAM user to operate Elastic Container Instance resources by calling API operations, you can grant the RAM user the permissions provided by the AliyunECIFullAccess policy. If you want the RAM user to operate Elastic Container Instance resources by using the Elastic Container Instance console, you must grant the RAM user the permissions provided by the AliyunECIFullAccess policy and the permissions provided by other policies. For more information, see [Grant permissions to RAM users](/help/en/eci/user-guide/grant-permissions-to-ram-users#topic-1860119).
        
    5.  Enter a name for the policy and click **OK**.
        
5.  Attach the custom policy to the RAM user.
    
    1.  In the left-side navigation pane, choose **Identities > Users**.
        
    2.  Create a RAM user.
        
        Create a RAM user based on your management requirements. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540). If you already created a RAM user, skip this step.
        
    3.  Grant permissions to the RAM user.
        
        Attach the custom policy that you created to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
        

### Step 2: Check whether the policy is in effect

1.  Log on to the [OpenAPI Explorer console](https://next.api.alibabacloud.com/api/Eci/2018-08-08/CreateContainerGroup?params={%22RegionId%22:%22cn-qingdao%22}) as a RAM user.
    
2.  Check whether the policy is in effect.
    
    An elastic container instance is used in the following tests:
    
    -   Create an elastic container instance
        
        -   If you bind the `env:test` tag to an instance when you create the instance, the instance can be created.
            
        -   If you do not bind the env:test tag to an instance or you bind another tag to the instance when you create the instance, the instance cannot be created. The system prompts that you do not have the permissions to create the instance.
            
    -   Delete an elastic container instance
        
        -   If the instance that you want to delete has the `env:test` tag, the instance can be deleted.
            
        -   If the instance that you want to delete does not have the `env:test` tag, the instance cannot be deleted. The system prompts that you do not have the permissions to delete the instance.
            
    -   Query an elastic container instance
        
        -   If you specify an instance that has the `env:test` tag but you do not specify the tag in the request, the specified instance is queried.
            
        -   If you specify an instance that does not have the `env:test` tag in the request, the query result is empty.
            
        -   If you do not specify an instance but you specify the `env:test` tag in the request, all instances that have the `env:test` tag are queried.
            
        -   If no instances and tags are specified, the query result is empty.
            

## Authenticate a RAM user when the RAM user initiates an API request

The following table describes how the system authenticates a RAM user after a policy that contains an authentication tag is attached to the RAM user and then the RAM user initiates an API request.

API operation

Authentication description

API operations that are used to create resources, such as CreateContainerGroup and CreateImageCache

You do not need to specify resource IDs in the API requests. When no resource IDs are specified in the API requests, the requests are matched against the `acs:RequestTag` policy condition.

-   If a request contains no tags of the policy condition, the authentication fails.
    
-   If a request contains tags that match or include the tags of the policy condition, the authentication succeeds.
    

API operations that are used to query resources, such as DescribeContainerGroups and DescribeImageCaches

You must specify resource IDs or tags in the API requests based on the requirements of the API operations. The requests are matched against the `acs:ResourceTag` or `acs:RequestTag` policy condition.

-   If you specify a resource ID and a tag in a request and the tag of the specified resource matches the tag of the `acs:ResourceTag` policy condition, or the specified tag matches the tag of the `acs:RequestTag` policy condition, the authentication succeeds.
    
-   If you specify a resource ID but you do not specify a tag in a request and the tag of the specified resource matches the tag of the `acs:ResourceTag` policy condition, the authentication succeeds.
    
-   If you specify a tag but you do not specify a resource ID in a request and the specified tag matches the tag of the `acs:RequestTag` policy condition, the authentication succeeds.
    
-   If no resource IDs and tags are specified in a request, the authentication fails.
    

**Note**

For API operations that are used to query resources, the system returns an empty result and does not report an error if the authentication fails.

API operations that are used to update resources, such as UpdateContainerGroup and UpdateImageCache

You must specify resource IDs in the API requests. The requests are matched against the `acs:ResourceTag` policy condition.

-   If you do not specify a tag in a request and the tag of the specified resource matches the tag of the acs:ResourceTag policy condition, the authentication succeeds.
    
-   If you specify a tag in a request and the tag of the specified resource matches the tag of the acs:ResourceTag policy condition and contains the permissions of the specified tag, the authentication succeeds.
    

**Note**

If a tag is updated, the RAM user must have the permissions of the original tag and the new tag. You must attach the following custom policies to the RAM user: a policy that contains the original tag-based authentication condition and a policy that contains the new tag-based authentication condition.

Other API operations such as RestartContainerGroup and ExecContainerCommand

You must specify resource IDs in the API requests. The requests are matched against the `acs:ResourceTag` policy condition.

-   If the tag of the specified resource does not match the tag of the acs:ResourceTag policy condition, the authentication fails.
    
-   If the tag of the specified resource matches the tag of the acs:ResourceTag policy condition, the authentication succeeds.
