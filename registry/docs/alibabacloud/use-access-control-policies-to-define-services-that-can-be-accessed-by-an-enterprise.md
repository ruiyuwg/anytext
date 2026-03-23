Resource Management allows you to use an access control policy that contains an Allow statement to define the Alibaba Cloud services that can be accessed by your enterprise. This helps standardize the behavior of users in your enterprise when the users purchase or use Alibaba Cloud services.

## Scenarios

When an enterprise migrates business to the cloud, the enterprise may determine a list of cloud services that need to be purchased based on business requirements and investigation results. Then, the enterprise may sign a contract for purchasing multiple cloud services at a time with the cloud service provider to reduce costs and maximize profits of the enterprise. The enterprise may require users in the enterprise to purchase only the cloud services in the list to prevent the interests of the enterprise from being damaged. In this case, the enterprise needs to use a whitelist to define the cloud services that can be used by the users in the enterprise.

In addition, for security purposes, the enterprise needs to use a cloud service whitelist to standardize user behavior on cloud services and prevent intentional or unintentional rule violation.

## Solution comparison

### Old solution: Use [RAM](/help/en/ram/product-overview/what-is-ram#concept-oyr-zzv-tdb) policies to grant the permissions on specific Alibaba Cloud services to users

If you use this solution, you must grant the permissions on these Alibaba Cloud services to each of the related users. This solution is suitable for scenarios in which business requirements are simple. If you need to grant a number of permissions on Alibaba Cloud services to users or you need to take various aspects into consideration when you grant permissions to users, the solution cannot meet your requirements and increases management costs. This issue is caused by the following reasons:

-   You can grant the required permissions to only one user at a time. The complexity of authorization increases with the number of users and resources that you manage.
    
    You must grant the permissions on different resources that reside in different network environments to each user. If a user no longer requires a permission or you need to change the permissions of a user, you must manually update the permissions for the user. After a user is created, you must grant the required permissions to the user. If you want to delete a user, you must revoke permissions from the user first. If the cloud service whitelist is modified, you must update the policies that are attached to all users. This increases the maintenance costs of policies.
    
-   If you need to authorize some users to perform specific operations and forbid some other users to perform the operations, complex RAM policies are required.
    
    In some cases, when you grant permissions to users, you need to take various aspects into consideration, such as the location where a resource resides or the business environment to which a resource belongs. For example, you may need to forbid a user to purchase resources that reside in a specific region, specify limits on services for a specific project, or authorize a user or role to perform all operations on all resources. In these cases, authorization management is complex.
    
-   Authorization operations are coupled with compliance control operations, which poses compliance risks.
    
    A permission administrator needs to adjust the permissions of users based on business changes to meet business requirements. When a permission administrator adjusts permissions, the permission administrator must understand all details of the permissions and cooperate with a compliance administrator if necessary. Otherwise, compliance-related permissions may be affected. A compliance administrator may also need to cooperate with a permission administrator to adjust compliance-related permissions for a user. The coupling of authorization operations and compliance control operations poses serious security risks on permission management and compliance control. Access to resources needs to be limited based on user identities. This requires complex permission configurations and increases the complexity of permission management.
    
    ![RAM鉴权](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1895838561/p444399.png)
    

### New solution (recommended): Use an [access control policy](/help/en/resource-management/resource-directory/user-guide/control-policy-overview#concept-1936111) that contains an Allow statement to manage permissions

Resource Management provides access control policies that you can use to manage permissions on resources. You can use access control policies in which the Effect element is set to `Allow` to resolve the preceding issues. The following code provides an example on the document of an access control policy:

```
{
  "Statement":[
    {
      "Effect": "Allow",
      "Action":[
                "ecs:*",
                "rds:*"
      ],
      "Resource": [
                "acs:*:*cn-beijing*:*:*",
                "acs:*:*cn-shanghai*:*:*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*",
      "Condition": {
          "StringLike": {
                    "acs:PrincipalARN": [
                    "acs:ram:*:*:role/a-project-admin-*"
                       ]
                  }
            }
      }
  ],
  "Version": "1"

}
```

The preceding access control policy defines the following permissions:

-   Only Elastic Compute Service (ECS) resources and ApsaraDB RDS resources that are deployed in the China (Beijing) and China (Shanghai) regions can be purchased and used.
    
-   The RAM role `a-project-admin-*` has all permissions on the resources of all Alibaba Cloud services.
    

Access control policies have the following benefits:

-   An access control policy that is attached to a folder in a resource directory is inherited by the subfolders of the folder.
    
    After you attach an access control policy to a folder, the access control policy is inherited by all members in the folder, all subfolders of the folder, and all members in the subfolders. Access to Alibaba Cloud services by using RAM users or RAM roles within the members is also controlled by the access control policy. If you want to change the Alibaba Cloud services that can be purchased and used, you need to only update the access control policy.
    
    ![资源目录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1895838561/p444493.png)
    
    **Important**
    
    The access control policies that are configured within a resource directory also take effect for all the RAM users and RAM roles within the related members in the resource directory. However, the policies do not take effect for the root users of the members. In addition, the management account of a resource directory is outside the resource directory. It does not belong to the resource directory. Therefore, the access control policies also do not take effect on all identities within the management account.
    
-   An access control policy only manages the permission boundaries of a user and does not grant permissions. An access control policy can take effect together with the RAM policies that are attached to a user.![管控策略](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1895838561/p444464.png)
    
    For example, a user is granted the permissions to access the ECS and Elastic IP Address (EIP) services. If the preceding access control policy takes effect for the user, the following situations occur:
    
    -   The user can access the ECS service that is deployed in the China (Beijing) and China (Shanghai) regions.
        
        The user is granted the permissions to access the ECS service, and the access control policy defines that the ECS service that is deployed in the China (Beijing) and China (Shanghai) regions can be accessed. Therefore, the user can access the ECS service that is deployed in the China (Beijing) and China (Shanghai) regions.
        
    -   The user cannot access the EIP service.
        
        The user is granted the permissions to access the EIP service. However, access to the EIP service is not allowed in the preceding access control policy. Therefore, the user cannot access the EIP service.
        
    -   The user cannot access the ApsaraDB RDS service.
        
        The preceding access control policy defines that the ApsaraDB RDS service that is deployed in the China (Beijing) and China (Shanghai) regions can be accessed. However, the user is not granted the permissions to access the ApsaraDB RDS service. Therefore, the user cannot access the ApsaraDB RDS service.
        
-   An access control policy and RAM policies are separately managed but mutually take effect.
    
    You can use RAM policies to grant the required permissions to users and use an access control policy to manage the permission boundaries of the users. This way, authorization operations and compliance control operations are decoupled to ensure the compliance security of enterprises. An access control policy is a top-level compliance control solution. An access control policy is the basic principle that an enterprise must follow when the enterprise performs access control. All business specifications of the enterprise must be stipulated based on the basic principle.
    

## Implementation of an access control policy

After you have a command of access control policies, you can enable the Control Policy feature, create a custom access control policy, and attach the policy to the desired folder or member in your resource directory. For more information, see [Enable the Control Policy feature](/help/en/resource-management/resource-directory/user-guide/enable-the-control-policy-feature#task-1936112), [Create a custom access control policy](/help/en/resource-management/resource-directory/user-guide/create-a-custom-access-control-policy#task-2213403), and [Attach a custom access control policy](/help/en/resource-management/resource-directory/user-guide/attach-a-custom-access-control-policy#task-1936121).

Before you apply a custom access control policy, you must perform the following operations:

-   Add the Allow statement `sts:AssumeRole` to the custom access control policy.
    
    We recommend that you log on to the desired member as a RAM user by using an STS token to perform management operations. You need to add the Allow statement `sts:AssumeRole` to ensure that you have the permissions to log on to a member. The following code shows the custom access control policy to which the Allow statement sts:AssumeRole is added:
    
    ```
    {
      "Statement":[
        {
          "Effect": "Allow",
          "Action":[
                    "ecs:*",
                    "rds:*"
          ],
          "Resource": [
                    "acs:*:*cn-beijing*:*:*",
                    "acs:*:*cn-shanghai*:*:*"
          ]
        },
        {
          "Effect": "Allow",
          "Action": "*",
          "Resource": "*",
          "Condition": {
              "StringLike": {
                        "acs:PrincipalARN": [
                        "acs:ram:*:*:role/a-project-admin-*"
                           ]
                      }
                }
          },
        {
          "Effect": "Allow",
          "Action":[
                    "sts:AssumeRole"
          ],
          "Resource": "*"
        }
      ],
      "Version": "1"
    
    }
    ```
    
-   Detach the system access control policy `FullAliyunAccess` from the folder to which the custom access control policy is attached.
    
    After the Control Policy feature is enabled for a resource directory, the system attaches the system access control policy `FullAliyunAccess` to each folder and member in the resource directory to allow operations on all your cloud resources. This prevents all operations on the resources within members in a folder to which a custom access control policy is attached from being implicitly denied because the operations are not explicitly allowed in the custom access control policy. After you attach a custom access control policy that contains an Allow statement to a folder, you must detach the system access control policy `FullAliyunAccess` from the folder. This ensures that the custom access control policy can take effect for the folder. For more information about how the Control Policy feature works, see [How it works](/help/en/resource-management/resource-directory/user-guide/control-policy-overview#section-l60-3t3-78j).
    

## Additional information

In the preceding example, if an enterprise wants to use a custom access control policy that contains a Deny statement to deny operations on all Alibaba Cloud services other than ECS and ApsaraDB RDS, the enterprise must specify all Alibaba Cloud services other than ECS and ApsaraDB RDS in the policy. This operation is complex, and some Alibaba Cloud services may be missed. However, if an Allow statement is used, the operation is simplified, and the effect is reliable.

If you want to explicitly deny a small number of operation items, you can use a custom access control policy that contains a Deny statement. For example, if you want to explicitly deny the purchase operation on all Alibaba Cloud services that are deployed in the China (Hong Kong) and China (Guangzhou) regions, you can use a custom access control policy that contains a Deny statement.

```
{
      "Effect": "Deny",
      "Action":[
                "*"
      ],
      "Resource": [
                "acs:*:*cn-hongkong*:*:*",
                "acs:*:*cn-guangzhou*:*:*"
      ]
}
```

You need to use the Allow and Deny statements in a custom access control policy based on your business requirements. This helps simplify the document of the custom access control policy that you use.

You can specify multiple Allow and Deny statements in one custom access control policy. When you design such a policy, you must evaluate the effect of the policy and make sure that the Allow statements and Deny statements do not conflict with each other. If an Allow statement conflicts with a Deny statement, the Deny statement takes precedence over the Allow statement. If multiple access control policies are attached to a folder or member, the system matches an access request with all access control policies. If a Deny statement in one of the access control policies is matched, the system terminates access control policy matching and denies the access request.
