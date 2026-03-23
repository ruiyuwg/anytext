If Internet access is not enabled for the OceanBase tenant, the evaluation result is Compliant. If Internet access is enabled for the OceanBase tenant but 0.0.0.0/0 is not contained in any whitelist of the tenant, the evaluation result is Complaint.

## Scenarios

If 0.0.0.0/0 is added to a whitelist of an OceanBase tenant, the tenant allows access from all IP addresses. This exposes the tenant to high security risks. We recommend that you do not use this configuration.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If Internet access is not enabled for the OceanBase tenant, the evaluation result is Compliant. If Internet access is enabled for the OceanBase tenant but 0.0.0.0/0 is not contained in any whitelist of the tenant, the evaluation result is Complaint.
-   If Internet access is enabled for the OceanBase tenant and 0.0.0.0/0 is contained in a whitelist of the tenant, the evaluation result is Incomplaint. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-bzx-tot-qrh)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

oceanbase-public-and-any-ip-access-check

Rule identifier

oceanbase-public-and-any-ip-access-check

Tag

Public and Oceanbase

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

OceanBase tenant

Input parameter

None

## Incompliance remediation

Disable Internet access for the OceanBase tenant or delete 0.0.0.0/0 from the whitelists of the tenant. For more information, see [Create and manage server groups](/help/en/slb/application-load-balancer/user-guide/create-and-manage-a-server-group#task-2022054).
