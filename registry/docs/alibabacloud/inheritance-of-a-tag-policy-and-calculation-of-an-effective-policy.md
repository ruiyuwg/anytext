This topic describes the definitions of policy inheritance and an effective policy, the inheritance logic of a tag policy, and the calculation method of an effective policy. This topic also provides examples on how to enable the inheritance of a tag policy and how to obtain an effective policy.

## Terms

**Term**

**Description**

policy inheritance

A tag policy is inherited by subfolders from parent folders based on the folder levels in a resource directory. If you attach a tag policy to a folder in a resource directory, members in the folder and its subfolders will inherit the tag policy.

parent policy

A parent policy is a policy attached to a higher-level object in a resource directory.

child policy

A child policy is a policy attached to a lower-level object in a resource directory.

effective policy

An effective policy is obtained by aggregating the tag policy that is attached to a member and the tag policy that is inherited by the member. The effective policy is the policy that is actually executed on the member.

inheritance operator

An inheritance operator is used to aggregate the tag policy that is attached to a member and the tag policy that is inherited by the member. For more information, see [Inheritance operators](/help/en/resource-management/tag/user-guide/syntax-of-a-tag-policy#section-07z-y05-x4t).

## How a tag policy is inherited and how an effective policy is obtained

-   Tag Policy in single-account mode
    
    If you attach multiple tag policies to the logon account, the tag policies are aggregated based on the tag keys defined in the tag policies. If the tag keys defined in the tag policies conflict with each other, the tag policy that is first attached is used as the effective policy for the account.
    
-   Tag Policy in resource directory mode
    
    You can use the management account of your resource directory to attach a tag policy to one of the following objects:
    
    -   Root folder: If the tag policy is attached to the Root folder, all members in the resource directory inherit the tag policy.
        
    -   Specific folder: If the tag policy is attached to a specific folder, all members in the folder and its subfolders inherit the tag policy.
        
    -   Specific member: If the tag policy is attached to a specific member, the tag policy takes effect only for the member.
        
    

## Example

In this example, the environment tag whose tag key is `env` and the project tag whose tag key is `Project` must be added to the resources of an enterprise. This example shows the inheritance logic of a tag policy and the calculation method of an effective policy.

1.  Attach a tag policy named PolicyA to the Root folder of the resource directory for the enterprise.
    
    The following code provides the document of PolicyA:
    
    ```
    {
        "tags": {
            "env": {
                "tag_key": {
                    "@@assign": "env"
    
                },
                  "tag_value": {
                    "@@assign": [
                        "Production",
                        "Test"
                    ]
                }
            },
            "Project": {
                "tag_key": {
                    "@@assign": "Project"
    
                }
            }
        }
    }
    ```
    
    PolicyA defines the regulations for the tag keys `env` and `Project` and is attached to the Root folder of the resource directory. After PolicyA is attached to the Root folder, the following situations occur:
    
    PolicyA takes effect for all members in the resource directory. This indicates that compliant tags whose tag keys are `env` and `Project` must be added to all resources within the members. The valid tag values of the tag key `env` are `Production` and `Test`.
    
2.  Attach a tag policy named PolicyB to a specific member in the Root folder.
    
    The following code provides the document of PolicyB:
    
    ```
    {
        "tags": {
            "env": {
                "tag_value": {
                    "@@append": [
                        "Development"
                    ]
                }
            },
            "Project": {
                "tag_value": {
                    "@@assign": [
                        "A",
                        "B"
                    ]
                }
            }
        }
    }
    ```
    
    PolicyB defines that `Development` is added as a tag value for the tag key `env` and the valid tag values of the tag key `Project` are `A` and `B`.
    
3.  Calculate an effective policy for a specific member.
    
    PolicyB is attached to a specific member, and the member inherits PolicyA. In this case, the effective policy for the member is obtained by aggregating PolicyA and PolicyB. This indicates that the tag values defined in both PolicyA and PolicyB are compliant. The following table lists the valid tag values of the tag keys `env` and `Project`:
    
    **Tag key**
    
    **Tag value**
    
    `env`
    
    -   `Production`
        
    -   `Test`
        
    -   `Development`
        
    
    `Project`
    
    -   `A`
        
    -   `B`
        
    
    The following code provides the document of the effective policy:
    
    ```
    {
        "tags": {
            "env": {
                "tag_value":  [
                       "Production",
                       "Test",
                       "Development"
                    ] ,
                 "tag_key": "env"
            },
            "Project": {
                "tag_value":  [
                       "A",
                       "B"
                    ],
                 "tag_key": "Project"
            }
        }
    }
    ```
