This rule checks whether each ApsaraMQ for RocketMQ 5.0 instance uses the multi-zone architecture. If so, the evaluation result is compliant.

## **Scenarios**

Multi-zone deployment ensures that message processing continues to run efficiently and stably even if a zone fails, guaranteeing business continuity. This setting is appropriate for system architectures that require high availability and fault tolerance.

## **Risk level**

Default risk level: Medium.

When you apply this rule, change the risk level as needed.

## **Detection logic**

This rule checks whether each ApsaraMQ for RocketMQ 5.0 instance uses the multi-zone architecture. If so, the evaluation result is compliant.

## **Rule details**

**Item**

**Description**

Rule name

Use multi-zone ApsaraMQ for RocketMQ 5.0 instances

Rule identifier

[rocketmq-v5-instance-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rocketmq-v5-instance-multi-zone)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Supported resource type

ACS::RocketMQ::Instance

Input parameter

None

## **Remediation guidance**

For more information, see [Instance management](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-5-x-series/user-guide/manage-instances).
