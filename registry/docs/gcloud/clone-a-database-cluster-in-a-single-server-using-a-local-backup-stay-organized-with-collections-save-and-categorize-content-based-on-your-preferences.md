This page documents AlloyDB Omni version **15.7.1** using the **containers** deployment option. [Choose a different deployment option](/alloydb/omni/docs/choose-deployment).

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [AlloyDB Omni](https://docs.cloud.google.com/alloydb/omni/docs)
-   [For containers: 15.7.1](https://docs.cloud.google.com/alloydb/omni/containers/15.7.1/docs/overview)

Send feedback

# Clone a database cluster in a single server using a local backup Stay organized with collections Save and categorize content based on your preferences.

Select a documentation version: 15.7.1keyboard\_arrow\_down

-   [Current (17.5.0)](/alloydb/omni/containers/current/docs/kubernetes-dr-backup-singleserver-local)
-   [17.5.0](/alloydb/omni/containers/17.5.0/docs/kubernetes-dr-backup-singleserver-local)
-   [16.9.0](/alloydb/omni/containers/16.9.0/docs/kubernetes-dr-backup-singleserver-local)
-   [16.8.0](/alloydb/omni/containers/16.8.0/docs/kubernetes-dr-backup-singleserver-local)
-   [16.3.0](/alloydb/omni/containers/16.3.0/docs/kubernetes-dr-backup-singleserver-local)
-   [15.13.0](/alloydb/omni/containers/15.13.0/docs/kubernetes-dr-backup-singleserver-local)
-   [15.12.0](/alloydb/omni/containers/15.12.0/docs/kubernetes-dr-backup-singleserver-local)
-   [15.7.1](/alloydb/omni/containers/15.7.1/docs/kubernetes-dr-backup-singleserver-local)
-   [15.7.0](/alloydb/omni/containers/15.7.0/docs/kubernetes-dr-backup-singleserver-local)
-   [15.5.5](/alloydb/omni/containers/15.5.5/docs/kubernetes-dr-backup-singleserver-local)
-   [15.5.4](/alloydb/omni/containers/15.5.4/docs/kubernetes-dr-backup-singleserver-local)
-   [15.5.2](/alloydb/omni/containers/15.5.2/docs/kubernetes-dr-backup-singleserver-local)

This page shows you how to clone a database cluster in a single server using local backup.

The steps on this page assume that the source Kubernetes database cluster is created on Google Kubernetes Engine, and the backup disks are Compute Engine persistent disks. It also assumes that the target AlloyDB Omni single server is installed on a Compute Engine virtual machine (VM).

If you use other environments, refer to the respective documentation to replicate these steps in your environment.

The following workflow explains the cloning steps:

1.  Identify the backup disk information, such as the persistent volume name and Compute Engine persistent disk handler, for source database cluster backup disk.
2.  Mount the backup disk of the source database cluster to the target server.
3.  Use `pgBackRest` commands to verify source backups can be accessed.
4.  Use `pgBackRest` commands to restore the backup to the target database cluster.

## Before you begin

-   Make sure you have access to the backup disk where your source database cluster backup is stored.
-   A single server target AlloyDB Omni database cluster is created. For more information about installing AlloyDB Omni on Kubernetes, see [Install AlloyDB Omni](/alloydb/omni/containers/15.7.1/docs/quickstart).
-   Ensure you are logged in to the database as the `postgres` user.

## Get source backup disk information

As part of the restore process, determine the backup disk Persistent Volume Claim (PVC) name for your source database cluster. PVCs are used within Kubernetes to manage persistent storage for applications.

The following sample commands help determine the underlying PV name and the Compute Engine persistent disk handler using the backup disk PVC name.

1.  Connect to your GKE cluster where you have created the AlloyDB Omni source database cluster:
    
     ```
     kubectl get pvc -n DB_CLUSTER_NAMESPACE | grep DB_CLUSTER_NAME | grep backupdisk
    ```
    
    Replace the following:
    
    -   `DB_CLUSTER_NAMESPACE`: the Kubernetes namespace for this backup. It must match the namespace of the database cluster.
        
    -   `DB_CLUSTER_NAME`: the name of this database cluster—for example, `my-db-cluster`.
        
    
    The following is the sample response.
    
      ```
      backupdisk-al-fe8c-dbcluster-sample-0   Bound
      pvc-36d8f05d-ef1a-4750-ac01-9bb330c15b3a   10Gi       RWO            standard-rwo   5d21h
      ```
    ```
2.  Use the backup disk name from the previous step-—for example, `backupdisk-al-fe8c-dbcluster-sample-0`, to find the underlying PV name:
    
      ```
      kubectl get pvc/PVC_NAME -n DB_CLUSTER_NAMESPACE -o jsonpath={.spec.volumeName}
    ```
    
    Replace the following:
    
    -   `PVC_NAME`: the PVC name of the backup disk from response in the previous step—for example `backupdisk-al-fe8c-dbcluster-sample-0`.
3.  Find the underlying Compute Engine persistent disk handler:
    
      ```
      kubectl get pv/$PV_NAME -o json | jq -r .spec.csi.volumeHandle
    ```
    
    Replace the following:
    
    -   `PV_NAME`: the PV name of the backup disk from response in the previous step.
    
    The following is the sample response:
    
      ```
      projects/my-project/zones/us-central1-a/disks/pvc-89f91fba-6cd2-4bfa-84ed-cb5969b446c3
    ```
4.  Export the backup disk name as a variable used in the next sections:
    
      ```
      export BACKUP_DISK=pvc-89f91fba-6cd2-4bfa-84ed-cb5969b446c3
    ```

## Mount the backup disk to the target server

Assuming that the target server is an AlloyDB Omni server installed on a Compute Engine virtual machine, mount the backup disk to the server.

1.  Run the `gcloud compute instances attach-disk` command to mount the disk:
    
      ```
      gcloud compute instances attach-disk GCE_INSTANCE_NAME \
      --disk ${BACKUP_DISK} \
      --zone=$GCE_ZONE
    ```
    
    Replace the following:
    
    -   `GCE_INSTANCE_NAME`: the name of the instance where your target server is installed in Compute Engine virtual machine.
        
    -   `GCE_ZONE`: the zone where your Compute Engine virtual machine instance exists.
        
2.  Mount the backup disk to the target server:
    
       ```
       lsblk
       mkdir -p /mnt/disks/backupdisk
       mount -o discard,defaults /dev/sdb /mnt/disks/backupdisk
    ```
3.  Add a custom bind mount to the AlloyDB Omni `dataplane.conf` file in the `/var/alloydb/config` directory:
    
      ```
      PG_BIND_MOUNTS=/mnt/disks/backupdisk:/mnt/disks/backups:rshared
    ```

For more information about bind mounts in docker, see [Bind mounts](https://docs.docker.com/storage/bind-mounts/).

1.  Restart the target server:

### Docker

  ```
  docker restart CONTAINER_NAME
```

Replace `CONTAINER_NAME` with the name of a new AlloyDB Omni container—for example, `my-omni-1`.

### Podman

  ```
  podman restart CONTAINER_NAME
```

Replace `CONTAINER_NAME` with the name of a new AlloyDB Omni container—for example, `my-omni-1`.

## Update the `pgBackRest` configuration file

Update the existing `pgBackRest` file in the backup disk directory with the new repository path.

1.  In the target server, go to the `/mnt/disks/backupdisk` directory:
    
      ```
      cd /mnt/disks/backupdisk
    ```
2.  Update the `pg1-path` path to a temporary directory in the `pgbackrest.conf` file to avoid overwriting the existing data. The `data-restored` directory is created automatically as part of the restore process:
    
      ```
      sudo sed -i 's|.*pg1-path.*|pg1-path=/mnt/disks/pgsql/data-restored|' pgbackrest.conf
    ```
3.  Update the `repo1-path` path to a temporary directory in the `pgbackrest.conf` file:
    
      ```
      sudo sed -i 's|.*repo1-path.*|repo1-path=/mnt/disks/backups/repo|' conf.d/repo1-local-backupplan.conf
    ```

## Verify source backups in target database cluster

Sign in to the target server, and run `pgBackRest` commands to verify that the source database cluster backups are accessible on the target server:

### Docker

  ```
  sudo docker exec CONTAINER_NAME pgbackrest --config-path=/mnt/disks/backups --stanza=db --repo=1 info
```

### Podman

  ```
  sudo podman exec CONTAINER_NAME pgbackrest --config-path=/mnt/disks/backups --stanza=db --repo=1 info
```

The following is a sample response:

    ```
    stanza: db
    status: ok
    cipher: none
    db (current)
        wal archive min/max (15): 000000010000000000000002/00000001000000000000000D
        full backup: 20240213-231400F
            timestamp start/stop: 2024-02-13 23:14:00+00 / 2024-02-13 23:17:14+00
            wal start/stop: 000000010000000000000003 / 000000010000000000000003
            database size: 38.7MB, database backup size: 38.7MB
            repo1: backup set size: 4.6MB, backup size: 4.6MB
        incr backup: 20240213-231400F_20240214-000001I
            timestamp start/stop: 2024-02-14 00:00:01+00 / 2024-02-14 00:00:05+00
            wal start/stop: 00000001000000000000000D / 00000001000000000000000D
            database size: 38.7MB, database backup size: 488.3KB
            repo1: backup set size: 4.6MB, backup size: 84.2KB
            backup reference list: 20240213-231400F
```

The timestamps in the response are used either to restore the full backup or to restore from a point in time from the recovery window.

## Restore the backup in the target server

After you identify the backup or a point in time you want to restore to, run `pgBackRest` commands in your target server. For more information about these commands, see [Restore Command](https://pgbackrest.org/command.html#command-restore).

The following are some sample `pgBackRest` restore commands:

-   Restore from a backup
    
    ```
    pgbackrest --config-path=/mnt/disks/backups --stanza=db --repo=1 restore --set=20240213-231400F --type=immediate --target-action=promote --delta --link-all --log-level-console=info
    ```
    
-   Restore from a point in time
    
    ```
    pgbackrest --config-path=/mnt/disks/backups --stanza=db --repo=1 restore --target="2024-01-22 11:27:22" --type=time --target-action=promote --delta --link-all --log-level-console=info
    ```
    

## Copy data to target server

After the restore command completes successfully, you can copy the data from the `data-restored` temporary directory to the current AlloyDB data directory.

1.  In the target server, stop the database service:
    
    ### Docker
    
    ```
    docker stop CONTAINER_NAME
    ```
    
    ### Podman
    
    ```
    podman stop CONTAINER_NAME
    ```
    
2.  Rename the current data directory to another name as a best practice:
    
      ```
      mv ~/alloydb-data/data  ~/alloydb-data/data-old
    ```
3.  Rename the `data-restored` temporary directory to current data directory:
    
      ```
      mv ~/alloydb-data/data-restored ~/alloydb-data/data
    ```
4.  Update `pg1-path` value in the `postgresql.auto.conf` file to load the restored data:
    
        ```
        vim ~/alloydb-data/data/postgresql.auto.conf
        # Verify postgresql.auto.conf.
        # Do not edit this file manually!
        # It will be overwritten by the ALTER SYSTEM command.
        # Recovery settings generated by pgBackRest restore on 2024-03-13 20:47:11
        restore_command = 'pgbackrest --config-path=/mnt/disks/pgsql --pg1-path=/mnt/disks/pgsql/data --repo=1 --stanza=db archive-get %f "%p"'
        recovery_target = 'immediate'
        recovery_target_action = 'promote'
        recovery_target_timeline = 'current'
    ```
5.  In the target server, start the database service:
    
    ### Docker
    
    ```
    docker start CONTAINER_NAME
    ```
    
    ### Podman
    
    ```
    podman start CONTAINER_NAME
    ```
    

After the database service starts, you can connect to the primary instance and run queries to verify that the data is restored from the backup. For more information, see [Connect to AlloyDB Omni on a single server](/alloydb/omni/containers/15.7.1/docs/run-connect#connect).

## What's next

-   [Clone a database cluster in a single server using a Cloud Storage backup](/alloydb/omni/containers/15.7.1/docs/kubernetes-dr-backup-singleserver-gcs)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-23 UTC.
