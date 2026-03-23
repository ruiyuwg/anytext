This topic provides examples of using custom policies to grant permissions to a Resource Access Management (RAM) user.

**Important**

-   When you create a policy, you can specify either a Logstore or a Metricstore after the logstore keyword. If you want to manage Metricstores, the following policies also apply.
    
-   For security purposes, we recommend that you follow the principle of least privilege (PoLP) when you grant permissions to a RAM user. In most cases, you must grant a RAM user the read-only permissions on the project list before the RAM user can view the projects in the project list. For more information, see [Attach system policies to a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#task-xsk-ttc-ry) and [Create custom policies](/help/en/ram/create-a-custom-policy#task-2149286).
    

## Examples of authorization policies

-   **The permissions to view projects**
    
    For example, you want to use your Alibaba Cloud account to grant the following permissions to a RAM user:
    
    -   The permissions to view the project list of the Alibaba Cloud account
        
    
    Use the following policy:
    
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
    

-   **The read-only permissions on projects**
    
    For example, you want to use your Alibaba Cloud account to grant the following permissions to a RAM user:
    
    -   The permissions to view the project list of the Alibaba Cloud account
        
    -   The read-only permissions on specific projects within the Alibaba Cloud account
        
    
    **Note**
    
    If you grant a RAM user the read-only permissions on a project, the RAM user cannot view the logs in the project. You must also grant the read-only permissions on specific Logstores in the project.
    
    Use the following policy:
    
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
           "Resource": [
             "acs:log:*:*:project/<Project name>/*",
             "acs:log:*:*:project/<Project name>"
           ],
           "Effect": "Allow"
         }
       ]
    }
    ```
    
-   **The read-only permissions on a specified Logstore and the permissions to create and manage saved searches**
    
    For example, you want to use your Alibaba Cloud account to grant the following permissions to a RAM user:
    
    -   The permissions to view the project list of the Alibaba Cloud account
        
    -   The read-only permissions on a specified Logstore and the permissions to create and manage saved searches
        
    
    Use the following policy:
    
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
    
-   **The read-only permissions on a specified Logstore and the permissions to view all saved searches and dashboards in a project**
    
    For example, you want to use your Alibaba Cloud account to grant the following permissions to a RAM user:
    
    -   The permissions to view the project list of the Alibaba Cloud account
        
    -   The read-only permissions on a specified Logstore and the permissions to view all saved searches and dashboards in the project to which the Logstore belongs
        
    
    Use the following policy:
    
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
    
-   **The permissions to write data to a specified project**
    
    To grant a RAM user only the permissions to write data to a specified project, use the following policy:
    
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
    
-   **The permissions to write data to a specified Logstore**
    
    To grant a RAM user only the permissions to write data to a specified Logstore, use the following policy.
    
    When you create a policy, you can specify either a Logstore or a Metricstore after the logstore keyword. If you want to manage Metricstores, the following policy also applies.
    
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
    
-   **The permissions to consume data from a specified project**
    
    To grant a RAM user only the permissions to consume data from a specified project, use the following policy:
    
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
    
-   **The permissions to consume data from a specified Logstore**
    
    To grant a RAM user only the permissions to consume data from a specified Logstore, use the following policy:
    
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
    
-   **The permissions to forcefully enable encryption configuration for a specified Logstore**
    
    After you grant the permissions to a RAM user, the RAM user must enable encryption configuration when the RAM user creates or modifies a Logstore. RAM users who are not granted the permissions do not need to enable encryption configuration when the RAM users create or modify a Logstore.
    
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
    
-   **The permissions to use specific log applications**
    
    For a RAM user to use the following log applications or features, you must grant the RAM user the required permissions:
    
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
        
    

## References

For more information about the supported Action and Resource elements, see [Authorization rules](/help/en/sls/developer-reference/ram-authentication-rules-1).
