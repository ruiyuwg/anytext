ACK managed clusters automatically create a default worker Resource Access Management (RAM) role shared by all nodes. If you use the default worker RAM role to grant permissions, the permissions are shared among all nodes in the cluster, which may unintentionally grant more permissions than necessary. You can assign a custom worker RAM role to a node pool upon creation. By assigning specific roles to different node pools, you can isolate the permissions of each node pool, thereby reducing the risk of all nodes in the cluster sharing the same permissions.

## Prerequisites

An [ACK managed cluster is created](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/), and the cluster runs Kubernetes 1.22 or later.

## Step 1: Create a RAM role

You can use the console, OpenAPI, or Terraform to create a worker RAM role.

**Important**

-   The name of the RAM role cannot start with KubernetesMasterRole- or KubernetesWorkerRole-.
    
-   The Trusted Service of the RAM role must be **Elastic Compute Service**.
    

### **Create a RAM role in the console**

For instructions about how to create a RAM role through the console, see [Create a regular service role](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service#section-0xg-2ri-2sr).

### **Create a RAM role through OpenAPI or Terraform**

-   [Create a RAM role using OpenAPI](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole)
    
-   [Create a RAM role using Terraform](/help/en/terraform/create-and-authorize-a-role-by-using-terraform)
    

Make sure that the trust policy is configured as follows when using OpenAPI or Terraform to create a RAM role. For more information, see [Edit the trust policy of a RAM role](/help/en/ram/user-guide/edit-the-trust-policy-of-a-ram-role).

```
{
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Effect": "Allow",
      "Principal": {
        "Service": [
          "ecs.aliyuncs.com"
        ]
      }
    }
  ],
  "Version": "1"
}
```

## Step 2: Assign a worker RAM role when creating a node pool

**Important**

You can assign a custom worker RAM role only when creating a cluster or a node pool. You cannot modify the worker RAM role of an existing node pool.

When you create a cluster or a node pool in the [ACK console](https://cs.console.alibabacloud.com), under the **Advanced Options** configuration of the node pool, select the **Worker RAM Role** as the custom role created in [Step 1: Create a RAM role](#85b16327b8uce).

For more information, see [Advanced options for node pool when creating a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#p-vec-i7g-wbn) and [Advanced configuration when creating a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#013d3556f5i6n).

### **Grant required permissions to RAM users or RAM roles**

When you use this feature as a RAM user or RAM role, you must also be granted the `ram:PassRole` permission policy to authorize the user or role to use the specified RAM role as a Worker RAM role. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb), [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800), and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).

**Note**

If the RAM user or RAM role has already been granted the AliyunCSFullAccess permission, you do not need to grant the additional `ram:PassRole` permission.

Examples of RAM permission policies:

Authorize the use of a specific RAM role

Authorize the use of all RAM roles

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ram:PassRole",
      "Resource": [
        "<role_arn>"  // Replace with the ARN of the RAM role.
      ],
      "Condition": {
        "StringEquals": {
          "acs:Service": [
            "cs.aliyuncs.com"
          ]
        }
      }
    }
  ]
}
```

> See [How do I view the ARN of a RAM role?](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens#section-qbw-mhy-173) to obtain the RAM role ARN.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ram:PassRole",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "acs:Service": [
            "cs.aliyuncs.com"
          ]
        }
      }
    }
  ]
}
```

## Related operations

By default, the RAM role does not have any permissions after it is created.

-   To create custom policies and grant permissions through the console, see [Create a custom policy](/help/en/ram/create-a-custom-policy) and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    
-   To create custom policies and grant permissions through OpenAPI, see [CreatePolicy - Create a permission policy](/help/en/ram/developer-reference/api-ram-2015-05-01-createpolicy) and [AttachPolicyToRole - Add permissions to a specified role](/help/en/ram/developer-reference/api-ram-2015-05-01-attachpolicytorole).
    
-   To create custom policies and grant permissions through Terraform, see [Create a RAM role and grant permissions using Terraform](/help/en/terraform/create-and-authorize-a-role-by-using-terraform).
    

Revoke permissions that are no longer needed from a worker RAM role at the earliest opportunity. For more information, see [Revoke permissions from a RAM role](/help/en/ram/user-guide/remove-permissions-from-a-ram-role).
