This topic describes the role authorization commands in Function Compute Command Line Interface (fcli).

## Prerequisites

In the folder where the executable file is located, run the `fcli shell` command to enter the interactive mode.

## Create RAM policies (mkrp)

The mkrp command is used to create RAM policies.

-   `-a string` or `--action string`: sets the name of the action for the policy.
-   `-r string` or `--resource string`: sets the object of the action for the policy.

**Note** For more information about permission policies, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).

## Create a role (mksr)

The mksr command is used to create a role that Function Compute uses to access other Alibaba Cloud resources.

```
mksr roleName                 
```

## Attach a RAM policy to a role (attach)

The attach command is used to attach a RAM policy to a specified role.

-   `-p string` or `--policy string`: specifies the RAM policy.
-   `-r string` or `--role string`: specifies the RAM role.

```
attach -p /ram/policies/myPolicy -r /ram/roles/myRole //Attaches myPolicy to myRole.
```

## Detach a permission policy from a role (detach)

The detach command is used to detach a specified policy from a specified role.

-   `-a string` or `--action string`: sets the name of the action for the policy.
-   `-r string` or `--resource string`: sets the object of the action for the policy.

```
detach -p /ram/policies/myPolicy -r /ram/roles/myRole //Detaches myPolicy from myRole.
```

## Grant a permission to a service in Function Compute (grant)

The grant command is used to grant a specified permission to a service in Function Compute.

```
grant myService
Please input the role name: myRole
Please input the policy name: myPolicy
Permission grant scenarios:
 1. Allow FC write function logs to your log store.
 2. Allow FC copy code from your OSS location.
Please input your choice [1-2]: 1
Please input the log project: my-log-project
Please input the log store: my-log-store                   
```
