This topic provides example RAM policies that grant users permission to access Alibaba Cloud resources only from specific IP addresses or CIDR blocks.

In these examples, a RAM user can access Elastic Cloud Service (ECS) instances only if the request originates from the `192.0.2.0/24` CIDR block or the `203.0.113.2` IP address.

-   `**Allow**` **policy**: This policy grants access to ECS resources if the request originates from one of the specified IP addresses. It uses the `IpAddress` condition operator to compare the source IP of the request with the IP addresses listed in the policy. Access from all other IP addresses is implicitly denied.
    
    ```
    {
        "Statement": [
            {
                "Action": "ecs:*",
                "Effect": "Allow",
                "Resource": "*",
                "Condition": {
                    "IpAddress": {
                        "acs:SourceIp": [
                            "192.0.2.0/24",
                            "203.0.113.2"
                        ]
                    }
                }
            }
        ],
        "Version": "1"
    }
    ```
    
-   `**Deny**` **policy**: The following example uses two statements. The first statement allows all ECS actions. The second statement explicitly denies the same actions if the request originates from an IP address that is **not** in the specified list. It uses the `NotIpAddress` condition operator to achieve this.
    
    **Note**
    
    An explicit `Deny` statement in a policy always overrides an `Allow` statement. Because of this, the second statement denies access for any request that does not come from the allowed IP addresses, even though the first statement grants access.
    
    ```
    {
        "Statement": [
            {
                "Action": "ecs:*",
                "Resource": "*",
                "Effect": "Allow"
            },
            {
                "Action": "ecs:*",
                "Effect": "Deny",
                "Resource": "*",
                "Condition": {
                    "NotIpAddress": {
                        "acs:SourceIp": [
                            "192.0.2.0/24",
                            "203.0.113.2"
                        ]
                    }
                }
            }
        ],
        "Version": "1"
    }
    ```
    

**Note**

-   The `Condition` element is part of a single policy statement and applies only to the permissions specified within that same statement.
    
-   You must **replace the example IP addresses in these policies** with the public IP addresses or CIDR blocks from which you want to allow access.
