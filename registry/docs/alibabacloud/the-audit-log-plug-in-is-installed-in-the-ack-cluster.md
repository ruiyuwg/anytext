An ACK cluster is considered compliant if the LoongCollector or logtail-ds log collection component is installed.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An ACK cluster is considered compliant if the LoongCollector or logtail-ds log collection component is installed.
    

## **Rule details**

**Parameter**

**Description**

Rule name

An audit log plugin is installed on the ACK cluster

Rule identifier

[ack-cluster-log-plugin-installed](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-log-plugin-installed)

Tag

ACK

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::ACK::Cluster

Input parameters

None

## **Remediation**

For instructions about how to remediate non-compliant resources, see [Install a log collection component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#523f2ffa0avnz).
