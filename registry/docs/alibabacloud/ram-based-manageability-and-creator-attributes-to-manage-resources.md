To improve user experience and security, Platform for AI (PAI) is fully connected to the Resource Access Management (RAM) system of Alibaba Cloud. All operations on PAI resources can be authenticated by using RAM and managed based on the workspace visibility/resource creator properties of a RAM policy, as well as IP address access properties. All operations on PAI sub-services that are connected to workspaces are routed to RAM by using workspace APIs for authentication.

## **Overview**

A RAM policy contains the [Condition](/help/en/ram/policy-elements#section-jix-u0j-2ms) element, which specifies the condition that allows the authentication to take effect. You can configure the Condition element to narrow the authentication scope, which helps you achieve fine-grained permission management. In PAI, the Condition element supports the key-value pairs described in the following table.

**key**

**value**

pai:Accessibility

The resource visibility. Valid values:

-   PUBLIC: The resources are visible to all members in a workspace.
    
-   PRIVATE: The resources are private.
    

pai:EntityAccessType

The resource creator.

-   CREATOR: The resources are created by the current authentication user.
    
-   OTHERS: The resources are created by another user instead of the current authentication user.
    

acs:SourceIp

The source IP addresses of requests.

## **Configure visibility and creator**

You can attach the policies of visibility (pai:Accessibility) and creator (pai:EntityAccessType) to a RAM role in RAM to grant access permissions to the RAM role on resources in a PAI workspace. For more information about policies, see [Policy elements](/help/en/ram/policy-elements).

### **Example of a policy that is attached to the algorithm development role**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "pai:*"
      ],
      "Resource": "acs:paidsw:*:*:*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "pai:Accessibility": "PRIVATE",
          "pai:EntityAccessType": "CREATOR"
        }
      }
    },
    {
      "Action": [
        "pai:*"
      ],
      "Resource": "acs:paidsw:*:*:*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "pai:Accessibility": "PUBLIC"
        }
      }
    }
  ]
}
```

Note:

-   The `Resource` element in a `Statement` specifies the RAM resources in the standard format: `acs:<Sub-service code>:<Region>:<Account ID>:Workspace/<Workspace ID>/<Resource name>/<Resource ID>`.
    
-   The statement contains two parts:
    
    -   The first part specifies that the role to which the policy is attached has permissions to perform operations on resources that are private and created by the current authentication user.
        
    -   The second part specifies that the role to which the policy is attached has permissions to perform operations on public resources that are created by any user.
        

### **Example of a policy that is attached to the administrator role**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "pai:*"
      ],
      "Resource": "acs:paidsw:*:*:*",
      "Effect": "Allow"
    }
  ]
}
```

Note:

In this example, the statement contains only specific information, which specifies that the role to which the policy is attached has permissions to perform operations on all resources regardless of the values of the pai:Accessibility and pai:EntityAccessType properties.

### **Example of a policy that is attached to other roles**

The Condition element in a policy that is attached to other roles of a workspace is similar to the Condition element in a policy that is attached to the algorithm developer role of a workspace. The `Action` elements for the two roles are different.

## **Configure IP access**

For resources in the following modules, you can You can attach the policy of IP access (acs:SourceIp) to a RAM role to implement access control based on IP address. For more information about policy, see [Policy elements](/help/en/ram/policy-elements). Sample policy:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": "*",
      "Resource": [
        "acs:eas:*:*:*",
        "acs:pai*:*:*:*"
      ],
      "Condition": {
        "IpAddress": {
          "acs:SourceIp": [
            "192.0.2.100",
            "203.0.113.200"
          ]
        }
      }
    }
  ]
}
```

Note:

-   The `Resource` element in a `Statement` specifies the RAM resources in the standard format: `acs:<Sub-service ram-code>:<region>:<account-id>:workspace/<workspace ID>/<Resource name in pural form>/<Resource ID>`.
    
-   In the example, `Effect` is set to `Deny` and `Condition` is set to `IpAddress`. When the source IP address is `192.0.2.100` or `203.0.113.200`, access requests to `eas` and `pai*` resources are rejected.
    

## **Authentication logic of RAM**

The following is a detailed explanation of the RAM authentication logic, taking visibility (pai:Accessibility) and creator (pai:EntityAccessType) as examples:

1.  A RAM policy that corresponds to the role of a workspace is attached to a RAM user. In the RAM policy, The Condition element contains two properties `pai:Accessibility` and `pai:EntityAccessType`. A user can access API objects only if the conditions of the properties are met.
    
2.  When a RAM user tries to access an API object, PAI calls the RAM API for authentication and configures the properties in the Condition element during the authentication.
    
3.  When RAM performs authentication, the RAM user must have the permissions to access the API object and the properties that are configured in the Condition element when PAI calls the RAM API must match the properties that you configured in the Condition element of the policy that is attached to the RAM user. If the policy that is attached to a RAM user does not contain the `pai:Accessibility` and `pai:EntityAccessType` properties in the Condition element, the properties are not checked during RAM authentication.
    

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Create custom policies](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2)
    
-   [Create a RAM role and attach the required policies to the role](/help/en/ram/create-a-ram-role-and-authorize-it)
    
-   [Roles and permissions](/help/en/pai/appendix-list-of-roles-and-permissions)
