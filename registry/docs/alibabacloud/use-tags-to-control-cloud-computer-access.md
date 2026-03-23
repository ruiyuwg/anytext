Elastic Desktop Service (EDS) Enterprise provides access permission management for cloud computers. This means Resource Access Management (RAM) users can be authorized to either view or operate cloud computers. Additionally, they can be granted access permissions for cloud computers with specific tags. This topic describes how to use tags to manage the permissions of RAM users. By using tags, you can control which cloud computers different RAM users can access and the operations they are allowed to perform on those cloud computers.

## Background information

Tags are used to identify and categorize cloud resources, enabling you to search for and group resources with similar characteristics across various dimensions. RAM allows you to manage user identities and regulate access to cloud resources through policy-based control. When you integrate tags with RAM, you can use tags as conditions within RAM policies to enable fine-grained access control over resources. For more information about tags and RAM, see [Tags](/help/en/ecs/user-guide/label-overview#concept-jzp-qtd-zdb) and [What is RAM?](/help/en/ram/product-overview/what-is-ram#concept-oyr-zzv-tdb)

The following figure shows how to manage RAM user permissions by using tags.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307210471/CAEQNBiBgICOlsOeqRkiIDMyZjMyNDM0M2ZjMTQwYzQ4NDA2MTU4ZTU1MDNhNmYy3963382_20230830144006.372.svg)

## Usage limits

EDS Enterprise supports fine-grained access control through the use of tags, but this feature is limited to cloud computers. Tag-based access control is not available for user management or resource management.

Tag-based access control is only supported in the following regions:

-   China (Hangzhou)
    
-   China (Shanghai)
    
-   China (Shenzhen)
    
-   China (Beijing)
    
-   Singapore
    
-   Japan (Tokyo)
    
-   Philippines (Manila)
    

## Scenarios

The sample configurations provided in this topic demonstrate how to implement tag-based access control by combining the following scenarios. For example, you have a cloud computer to which the `owner:tony` tag is added. `owner` is the tag key and `tony` is the tag value.

-   Scenario 1: RAM users cannot create cloud computers that do not have the `owner:tony` tag.
    
-   Scenario 2: RAM users can only operate cloud computers that have the `owner:tony` tag.
    

## Sample configurations

In the following section, an Alibaba Cloud account is used to create a custom policy named `UseTagCreateECD`. This policy specifies that RAM users can only create, view, and operate cloud computers with the `owner:tony` tag. The `UseTagCreateECD` custom policy is then attached to the `Testuser` RAM user.

## Step 1: Create a custom policy

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/overview) by using an Alibaba Cloud account.
    
2.  Create a custom policy on the **JSON** tab. For more information, see [Create a custom policy on the JSON tab](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m).
    
    **Note**
    
    A policy establishes authorization boundaries through permission sets. Each policy contains a schema version identifier and declarative rule statements. Each statement comprises mandatory attributes, including Effect, Action, Resource, and Condition (optional). For more information, see [Policy elements](/help/en/ram/policy-elements#concept-xg5-51g-xdb) and [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).
    
    Tag-based authorization enables granular access control through the `Condition` block.
    
    The following examples describe multi-tag `conditional` constraints for cloud computers.
    
    **Tag-based conditional authorization**
    
    **Description**
    
    `acs:RequestTag`
    
    Mandates tag inclusion in API calls.
    
    Authentication fails when the policy contains `acs:RequestTag` but the request lacks tag parameters.
    
    `acs:ResourceTag`
    
    Mandates tag inclusion on resources.
    
    Authorization fails if the policy contains `acs:ResourceTag` but the request omits the resource ID.
    
    The following table describes the scenario-specific custom policies.
    
    -   Scenario 1: A cloud computer can only be created if you add the `owner:tony` tag to it.
        
        ```
        {
            "Action":"ecd:CreateDesktops",
            "Effect":"Allow",
            "Condition":{
                "StringEquals":{
                    "acs:RequestTag/owner":[
                        "tony"
                    ]
                }
            },
            "Resource":"acs:ecd:*:*:ecddesktop/*"
        }
        ```
        
    -   Scenario 2: Only cloud computers with the `owner:tony` tag can be operated.
        
        ```
        {
            "Action":"ecd:*",
            "Effect":"Allow",
            "Condition":{
                "StringEquals":{
                    "acs:ResourceTag/owner":[
                        "tony"
                    ]
                }
            },
            "Resource":"acs:ecd:*:*:ecddesktop/*"
        }
        ```
        
    
    The following sample code shows a complete custom policy:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Action": "ecd:CreateDesktops",
                "Effect": "Allow",
                "Condition": {
                    "StringEquals": {
                        "acs:RequestTag/owner": [
                            "tony"
                        ]
                    }
                },
                "Resource": "acs:ecd:*:*:ecddesktop/*"
            },
            {
                "Action": "ecd:*",
                "Effect": "Allow",
                "Condition": {
                    "StringEquals": {
                        "acs:ResourceTag/owner": [
                            "tony"
                        ]
                    }
                },
                "Resource": "acs:ecd:*:*:ecddesktop/*"
            },
            {
                "Action": [
                    "*:List*",
                    "*:Describe*",
                    "bss:PayOrder"
                ],
                "Effect": "Allow",
                "Resource": "*"
            },
            {
                "Action": "*",
                "Effect": "Allow",
                "Resource": [
                    "acs:ecd:*:*:officesite/*",
                    "acs:ecd:*:*:ecdpolicy/*",
                    "acs:ecd:*:*:ecdimage/*",
                    "acs:ecd:*:*:ecdbundle/*"
                ]
            }
        ]
    }
    ```
    
    After you compile the policy, click **OK** on the **Create Policy** page.
    
3.  In the **Create Policy** dialog box, enter a policy name and click **OK**.
    
    Example: `UseTagCreateECD`.
    
    ![db_ram_console_create_access_policy](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307210471/p916641.png)
    

## Step 2: Attach the custom policy to a RAM user

1.  In the left-side navigation pane of the RAM console, choose **Identities** > **Users**.
    
2.  Create a RAM user. For more information about specific operations, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
    **Note**
    
    If you want to attach the policy to an existing RAM user, skip this step.
    
3.  Attach the policy to the RAM user. For more information about specific operations, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    

## Step 3: Check whether the policy takes effect

1.  Log on to the [EDS Enterprise console](https://eds.console.alibabacloud.com/) or the [OpenAPI Explorer](https://next.api.aliyun.com/api/ecd/2020-09-30/DescribeRegions?lang=JAVA&params=%7B%7D) platform as the RAM user.
    
2.  Perform relevant operations in the EDS Enterprise console or by calling API operations to test whether the policy takes effect.
    
    -   Create a cloud computer to verify Scenario 1
        
        -   You can create a cloud computer if you add the `owner:tony` tag to the cloud computer.
            
        -   If you do not add the `owner:tony` tag, or you add other tags when you create the cloud computer, the following message appears, which notifies you of insufficient permissions: ![创建云桌面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7662265961/p449874.png)
            
    -   Release a cloud computer to verify Scenario 2
        
        -   You can release a cloud computer that has the `owner:tony` tag.
            
        -   If you release a cloud computer that does not have the `owner:tony` tag or has other tags, the following message appears, which notifies you of insufficient permissions: ![创建云桌面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7662265961/p449874.png)
            
    

## API operations that support tag-based authentication

After attaching a tag-based policy to a RAM user, the RAM user can use tag-based authentication to manage cloud computers through the EDS API. For more information, see [List of operations by function](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-overview).
