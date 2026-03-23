This topic describes the scenarios of the service-linked role AliyunServiceRoleForEfloCnp and how to delete the service-linked role.

## Background information

The service-linked role AliyunServiceRoleForEfloCnp is a Resource Access Management (RAM) role that Cloud Native Application Performance Optimizer (CNP) assumes to access other Alibaba Cloud services to implement CNP features in specific scenarios. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles).

## Scenarios

To perform a performance evaluation for a Lingjun cluster, CNP needs to access the Application Real-Time Monitoring Service (ARMS) resources of the cluster. In this case, a service-link role is required.

## Permissions of the service-linked role AliyunServiceRoleForEfloCnp

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "arms:OpenVCluster",
        "arms:CheckServiceStatus",
        "arms:GetCloudClusterAllUrl"
      ],
      "Resource": "*"
    },
    {
      "Action": "ram:DeleteServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "cnp.eflo.aliyuncs.com"
        }
      }
    }
  ]
}
```

## Delete the service-linked role AliyunServiceRoleForEfloCnp

After you use CNP to perform a performance evaluation, you may want to delete the service-linked role AliyunServiceRoleForEfloCnp to protect the security of your resources. After the service-linked role is deleted, you cannot perform performance evaluations for the clusters within the current account.

To delete the service-linked role AliyunServiceRoleForEfloCnp, perform the following steps:

1.  Log on to the [RAM console](http://ram.console.alibabacloud.com/). In the left-side navigation pane, choose **Identities > Roles**.
    
2.  On the **Roles** page, enter **AliyunServiceRoleForEfloCnp** in the search box to find the role.
    
3.  Click **Delete Role** in the **Actions** column.
    
4.  In the **Delete Role** message, click **Delete Role**.
