Policies are documents that define permissions in Resource Access Management (RAM). They are the fundamental way you control access to your Alibaba Cloud resources. This topic explains the core concepts of RAM policies, including their structure, types, and evaluation logic.

## How policies work

When a RAM principal (a RAM user or role) makes a request to access an Alibaba Cloud resource, RAM evaluates all applicable policies to determine whether the request should be allowed or denied. The evaluation logic follows these key principles:

-   **Deny by default**: By default, RAM principals have no permissions. Any request for an action that is not explicitly allowed by a policy is implicitly denied.
    
-   **Explicit deny overrides allow**: If a policy includes an explicit `Deny` statement for an action, it always overrides any `Allow` statements for that same action. This is a powerful security mechanism to restrict access, regardless of other permissions that might be granted.
    

## Policy structure and elements

A policy is a JSON document composed of one or more statements. Each statement includes the following core elements:

**Element**

**Description**

**Effect**

Specifies whether the statement results in an `Allow` or `Deny`.

**Action/NotAction**

The specific API operations that are allowed or denied (such as `ecs:DescribeInstances` and `oss:GetObject`).

**Resource**

The Alibaba Cloud resources that the action applies to, specified by their Alibaba Cloud Resource Name (ARN).

**Condition**

(Optional) The circumstances under which the policy is in effect. For example, you can specify that a policy only applies if the request comes from a certain IP address.

**Principal**

The entity (user, account, or service) that is allowed or denied access.

**Note**

This element is used in resource-based policies (such as an OSS bucket policy), but not in identity-based policies.

For more information, see [Policy elements](/help/en/ram/policy-elements#concept-xg5-51g-xdb) and [Policy syntax and structure](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).

## Policy types

RAM supports two types of policies:

-   **System policies**: These are predefined policies created and managed by Alibaba Cloud for common use cases, such as administrator access (`AdministratorAccess`) or read-only access (`AliyunAccountCenterReadOnlyAccess`). You can attach these policies to your RAM principals, but you cannot modify them.
    
-   **Custom policies**: These are policies that you create and manage in your account. Custom policies allow you to define granular permissions that are tailored to your specific security requirements.
    

To grant permissions, you attach one or more policies to a RAM principal. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800), [Grant permissions to a group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group#task-187800), and [Manage a RAM role's permissions](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).

## Ownership and permissions

-   **Resource ownership**: The Alibaba Cloud account is the ultimate owner of all resources within it and has full control over them. Even if a RAM user creates a resource, the resource is owned by the account, not the user.
    
-   **Principal permissions**: RAM principals (users and roles) have no permissions by default. They can only perform actions that are explicitly allowed by the policies attached to them.
