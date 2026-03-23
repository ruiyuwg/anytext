If system policies do not meet your business requirements, you can create custom policies. You can follow the principle of least privilege (PoLP) to create custom policies. Custom policies help you manage permissions in a fine-grained manner and improve resource access security. This topic describes the scenarios in which you can use custom policies for Simple Log Service and provides sample policies.

## **What is a custom policy?**

Resource Access Management (RAM) policies are classified into system policies and custom policies. You can manage custom policies based on your business requirements.

-   After you create a custom policy, you must attach the policy to a RAM user, RAM user group, or RAM role. This way, the permissions that are specified in the policy can be granted to the principal.
    
-   You can delete a RAM policy that is not attached to a principal. If the RAM policy is attached to a principal, you must detach the RAM policy from the principal before you can delete the RAM policy.
    
-   Custom policies support version control. You can manage custom policy versions based on the version management mechanism provided by RAM.
    

## **References**

-   [Create a custom policy](/help/en/ram/create-a-custom-policy)
    
-   [Modify the document and description of a custom policy](/help/en/ram/modify-the-document-and-description-of-a-custom-policy)
    
-   [Delete a custom policy](/help/en/ram/delete-a-custom-policy)
    
-   [Manage policy references](/help/en/ram/manage-policy-references#task-221551)
    
-   [Manage custom policy versions](/help/en/ram/manage-custom-policy-versions)
    

## **Scenarios and sample policies**

**Important**

-   If you want to grant a Resource Access Management (RAM) user the permissions to access a Metricstore, you can use all policies in this topic.
    
-   For security purposes, we recommend that you follow the PoLP when you grant permissions to a RAM user. In most cases, you must grant a RAM user the read-only permissions on the project list before the RAM user can view the projects in the project list. For more information, see [Attach system policies to a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#undefined) and [Create custom policies](/help/en/ram/create-a-custom-policy#task-2149286).
    

**The permissions to view projects**

Use an Alibaba Cloud account to grant the following permissions to a RAM user:

-   The permissions to view the project list within the Alibaba Cloud account
    

The following code provides an example of a policy that grants the preceding permissions:

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "log:ListProject"
      ],
      "Resource": [
        "acs:log:*:*:project/*"
      ],
      "Effect": "Allow"
    }
  ]
}
```

**The read-only permissions on projects**

Use an Alibaba Cloud account to grant the following permissions to a RAM user:

-   The permissions to view the project list within the Alibaba Cloud account
    
-   The read-only permissions on specific projects within the Alibaba Cloud account
    

**Note**

If you grant a RAM user the read-only permissions on a project, the RAM user cannot view the logs in the project. You must also grant the read-only permissions on Logstores in the project.

The following code provides an example of a policy that grants the preceding permissions:

```
{
   "Version": "1",
   "Statement": [
     {
       "Action": ["log:ListProject"],
       "Resource": ["acs:log:*:*:project/*"],
       "Effect": "Allow"
      },
     {
       "Action": [
         "log:Get*",
         "log:List*"
       ],
       "Resource": "acs:log:*:*:project/<Project name>/*",
       "Effect": "Allow"
     }
   ]
 }
```

**The read-only permissions on a specific Logstore and the permissions to create and manage saved searches**

Use an Alibaba Cloud account to grant the following permissions to a RAM user:

-   The permissions to view the project list within the Alibaba Cloud account
    
-   The read-only permissions on a specific Logstore and the permissions to create and manage saved searches
    

The following code provides an example of a policy that grants the preceding permissions:

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "log:ListProject"
      ],
      "Resource": "acs:log:*:*:project/*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "log:List*"
      ],
      "Resource": "acs:log:*:*:project/<Project name>/logstore/*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "log:Get*",
        "log:List*"
      ],
      "Resource": [
        "acs:log:*:*:project/<Project name>/logstore/<Logstore name>"
      ],
      "Effect": "Allow"
    },
    {
      "Action": [
        "log:List*"
      ],
      "Resource": [
        "acs:log:*:*:project/<Project name>/dashboard",
        "acs:log:*:*:project/<Project name>/dashboard/*"
      ],
      "Effect": "Allow"
    },
    {
      "Action": [
        "log:Get*",
        "log:List*",
        "log:Create*"
      ],
      "Resource": [
        "acs:log:*:*:project/<Project name>/savedsearch",
        "acs:log:*:*:project/<Project name>/savedsearch/*"
      ],
      "Effect": "Allow"
    }
  ]
}
```

**The read-only permissions on a specific Logstore and the permissions to view all saved searches and dashboards in the project to which the Logstore belongs**

Use an Alibaba Cloud account to grant the following permissions to a RAM user:

-   The permissions to view the project list within the Alibaba Cloud account
    
-   The read-only permissions on a specific Logstore and the permissions to view all saved searches and dashboards in the project to which the Logstore belongs
    

The following code provides an example of a policy that grants the preceding permissions:

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "log:ListProject"
      ],
      "Resource": "acs:log:*:*:project/*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "log:List*"
      ],
      "Resource": "acs:log:*:*:project/<Project name>/logstore/*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "log:Get*",
        "log:List*"
      ],
      "Resource": [
        "acs:log:*:*:project/<Project name>/logstore/<Logstore name>"
      ],
      "Effect": "Allow"
    },
    {
      "Action": [
        "log:Get*",
        "log:List*"
      ],
      "Resource": [
        "acs:log:*:*:project/<Project name>/dashboard",
        "acs:log:*:*:project/<Project name>/dashboard/*"
      ],
      "Effect": "Allow"
    },
    {
      "Action": [
        "log:Get*",
        "log:List*"
      ],
      "Resource": [
        "acs:log:*:*:project/<Project name>/savedsearch",
        "acs:log:*:*:project/<Project name>/savedsearch/*"
      ],
      "Effect": "Allow"
    }
  ]
}
```

**The permissions to write data to a specific project**

The following code provides an example of a policy that grants a RAM user only the permissions to write data to a specific project:

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "log:Post*"
      ],
      "Resource": "acs:log:*:*:project/<Project name>/*",
      "Effect": "Allow"
    }
  ]
}
```

**The permissions to write data to a specific Logstore**

The following code provides an example of a policy that grants a RAM user only the permissions to write data to a specific Logstore:

```
{
  "Version":"1",
  "Statement":[
    {
      "Effect":"Allow",
      "Action":[
        "log:PostLogStoreLogs"
      ],
      "Resource":[
        "acs:log:*:*:project/<Project name>/logstore/<Logstore name>"
      ]
    }
  ]
}
```

**The permissions to consume data from a specific project**

The following code provides an example of a policy that grants a RAM user only the permissions to consume data from a specific project:

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "log:ListShards",
        "log:GetCursorOrData",
        "log:GetConsumerGroupCheckPoint",
        "log:UpdateConsumerGroup",
        "log:ConsumerGroupHeartBeat",
        "log:ConsumerGroupUpdateCheckPoint",
        "log:ListConsumerGroup",
        "log:CreateConsumerGroup"
      ],
      "Resource": "acs:log:*:*:project/<Project name>/*",
      "Effect": "Allow"
    }
  ]
}
```

**The permissions to consume data from a specific Logstore**

The following code provides an example of a policy that grants a RAM user only the permissions to consume data from a specific Logstore:

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "log:ListShards",
        "log:GetCursorOrData",
        "log:GetConsumerGroupCheckPoint",
        "log:UpdateConsumerGroup",
        "log:ConsumerGroupHeartBeat",
        "log:ConsumerGroupUpdateCheckPoint",
        "log:ListConsumerGroup",
        "log:CreateConsumerGroup"
      ],
      "Resource": [
        "acs:log:*:*:project/<Project name>/logstore/<Logstore name>",
        "acs:log:*:*:project/<Project name>/logstore/<Logstore name>/*"
      ],
      "Effect": "Allow"
    }
  ]
}
```

**The permissions to forcefully enable encryption configuration for a specific Logstore**

After you grant a RAM user the permissions to forcefully enable encryption configuration for a specific Logstore, the RAM user must enable encryption configuration when the RAM user creates or modifies a Logstore. RAM users who are not granted the permissions do not need to enable encryption configuration when the RAM users create or modify a Logstore.

**Note**

You can specify the exact project name and Logstore name. You can also use an asterisk (\*) to perform fuzzy match.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "log:CreateLogStore",
        "log:UpdateLogStore"
      ],
      "Resource": [
        "acs:log:*:*:project/<Project name>/logstore/<Logstore name>",
        "acs:log:*:*:project/<Project name>/logstore/*"
      ],
      "Condition": {
        "Bool": {
          "log:Encrypted": "true"
        }
      }
    }
  ]
}
```

**The permissions to use specific log applications**

To allow a RAM user to use the following log applications or features, you must grant the RAM user the required permissions:

-   Common Database Audit
    
-   Mobile O&M Monitoring
    
-   Flow Log Center
    
-   Log Analysis for AWS CloudTrail
    
-   SREWorks
    
-   General Host Audit
    
-   Intelligent Anomaly Analysis
    
-   Custom dashboards
    
-   Dashboard playlists
    

Use one of the following policies based on your business requirements:

-   Read-only permissions
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "log:GetResource",
                    "log:ListResources",
                    "log:GetResourceRecord",
                    "log:ListResourceRecords"
                ],
                "Resource": [
                    "acs:log:*:*:resource/*"
                ]
            }
        ]
    }
    ```
    
-   Management permissions
    
    ```
    {
        "Version": "1",
        "Statement": [
              {
          "Effect": "Allow",
          "Action": [
            "log:*"
          ],
          "Resource": [
            "acs:log:*:*:resource/*"
          ]
        }
        ]
    }
    ```
    

## **References**

Before you create a custom policy, you must know your business requirements and be familiar with the authorization information of Simple Log Service. For more information, see [RAM authorization](/help/en/sls/developer-reference/api-sls-2020-12-30-ram).
