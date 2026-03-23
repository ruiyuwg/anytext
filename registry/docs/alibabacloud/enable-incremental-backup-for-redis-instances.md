Checks whether incremental backup is enabled for each ApsaraDB for Redis instance. If so, the evaluation result is Compliant.

## Scenarios

Enabling incremental backup for each ApsaraDB for Redis instance can reduce the backup time and required storage space, prevent data loss, and provide faster restoration and better disaster recovery.

## **Risk level**

Default risk level: low.

You can change the risk level as needed.

## **Compliance evaluation logic**

-   If incremental backup is enabled for each ApsaraDB for Redis instance, the evaluation result is considered compliant.
    
-   If incremental backup is not enabled for an ApsaraDB for Redis instance, the evaluation result is considered compliant.
    
-   If an ApsaraDB for Redis instance is not a Tair instance, the evaluation result is Not Applicable.
    

## **Rule details**

**Item**

**Description**

Rule name

redis-instance-backup-log-enabled

Rule ID

[redis-instance-backup-log-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=redis-instance-backup-log-enabled)

Tag

Redis and Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

ApsaraDB for Redis instance

Input parameter

None

## **Non-compliance remediation**

Enable incremental backup for each ApsaraDB for Redis instance. For more information, see [Backup and restoration solutions](/help/en/tair/user-guide/backup-and-restoration-solutions).
