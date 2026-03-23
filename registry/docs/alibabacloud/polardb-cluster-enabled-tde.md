Checks whether the transparent data encryption (TDE) feature is enabled for each PolarDB cluster. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to enable the TDE feature for a PolarDB cluster. This helps you meet security and regulatory requirements. You can use the TDE feature to perform real-time I/O encryption and real-time I/O decryption on data files. Data is encrypted before the data is written to a disk and the data is decrypted when the data is read from the disk to memory.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the TDE feature is enabled for each PolarDB cluster, the evaluation result is Compliant.
-   If the TDE feature is disabled for an PolarDB cluster, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-ipp-kth-zfn).

## Rule details

**Item**

**Description**

Rule name

polardb-cluster-enabled-tde

Rule identifier

polardb-cluster-enabled-tde

Tag

PolarDB and TDE

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

PolarDB cluster

Input parameter

None.

## Incompliance remediation

Enable the TDE feature for a PolarDB cluster. For more information, see [Configure TDE for a PolarDB cluster](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster#task-2462076).
