MaxCompute requires cross-service access to other big data computing services such as Hologres. To authorize this access, MaxCompute uses the service-linked role `AliyunServiceRoleForMaxComputeIdentityMgmt`. This role is a Resource Access Management (RAM) role whose trusted entity is an Alibaba Cloud service. Unlike regular RAM roles, a service-linked role has a fixed permission policy that the service controls.

## Role details

**Property**

**Value**

**Role name**

`AliyunServiceRoleForMaxComputeIdentityMgmt`

**Permission policy**

`AliyunServiceRolePolicyForMaxComputeIdentityMgmt`

**Trusted service**

`identity.odps.aliyuncs.com`

### Permission policy document

The permission policy grants MaxCompute the following actions:

-   **`odps:ActOnBehalfOfAUser`**: Perform operations as a user when accessing integrated big data services such as Hologres.
    
-   **`odps:ActOnBehalfOfAnotherUser`**: Perform operations on behalf of another user when accessing integrated big data services.
    
-   **`ram:DeleteServiceLinkedRole`**: Delete this service-linked role when the `identity.odps.aliyuncs.com` service principal is specified.
    

```
{
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "odps:ActOnBehalfOfAUser",
        "odps:ActOnBehalfOfAnotherUser"
      ],
      "Resource": "acs:odps:*:*:users/*"
    },
    {
      "Action": "ram:DeleteServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "identity.odps.aliyuncs.com"
        }
      }
    }
  ],
  "Version": "1"
}
```

## Required permissions for RAM users

To create or delete this service-linked role as a RAM user, attach the `AliyunMaxComputeFullAccess` policy, or add the following actions to a custom policy:

**Action**

**Permission**

Create

`ram:CreateServiceLinkedRole`

Delete

`ram:DeleteServiceLinkedRole`

For more information, see [Permissions required to create and delete a service-linked role](/help/en/ram/user-guide/service-linked-roles#concept-2448621/section-x3u-5xc-09l).

## Create the service-linked role

Create the service-linked role using one of the following methods.

### During MaxCompute activation

Click **Create Service-linked Role** on the MaxCompute activation page.

![Create the service-linked role during MaxCompute activation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4627919171/p802384.png)

### After MaxCompute activation

Go to the [RAM Quick Authorization](https://ram.console.alibabacloud.com/authorize?request=%7B%22template%22%3A%22MaxCompute%22%2C%22payloads%22%3A%5B%7B%22missionId%22%3A%22SLRForMaxComputeIdentityMgmt%22%7D%5D%7D) page and assign the role to MaxCompute.

![Create the service-linked role after MaxCompute activation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4627919171/p802387.png)

## View the service-linked role

After you create the role, go to the [Roles](https://ram.console.alibabacloud.com/roles) page in the RAM console and search for `AliyunServiceRoleForMaxComputeIdentityMgmt`. The role details page shows the following information:

-   **Basic Information**: Role name, creation time, Alibaba Cloud Resource Name (ARN), and description.
    
-   **Permissions**: Click the policy name to view the policy document and the cloud resources that the role can access.
    
-   **Trust Policy**: The trust policy document that specifies which service can assume this role. The `Service` field identifies the trusted entity (`identity.odps.aliyuncs.com`).
    

For more information, see [View the information about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role#task-188120).

## Delete the service-linked role

If you no longer use MaxCompute, delete the service-linked role in the [RAM console](https://ram.console.alibabacloud.com/). For more information, see [Delete a RAM role](/help/en/ram/user-guide/delete-a-ram-role#task-188137).

**Note**

After you delete `AliyunServiceRoleForMaxComputeIdentityMgmt`, MaxCompute can no longer access other big data computing services such as Hologres. Verify that you no longer need cross-service access before deleting this role.
