ApsaraDB for MongoDB provides comprehensive security protection to eliminate your data security concerns. You can secure the data in your ApsaraDB for MongoDB instance by using zone-disaster recovery, Resource Access Management (RAM) authorization, audit logs, network isolation, IP address whitelists, and password authentication.

## Zone-disaster recovery

ApsaraDB for MongoDB provides a zone-disaster recovery solution to achieve high reliability and high data security. This solution allows you to deploy the nodes of a replica set instance or sharded cluster instance in three different zones of the same region. If one of the three zones is disconnected due to force majeure factors such as blackouts and network faults, ApsaraDB for MongoDB automatically triggers a failover to ensure service availability and data security.

You can select multiple zones when you create an ApsaraDB for MongoDB instance. For more information, see [Create a multi-zone replica set instance](/help/en/mongodb/user-guide/create-a-multi-zone-replica-set-instance#concept-m1g-yk5-xfb) or [Create a multi-zone sharded cluster instance](/help/en/mongodb/user-guide/create-a-multi-zone-sharded-cluster-instance#concept-262036). You can also migrate an existing replica set instance or sharded cluster instance to multiple zones. For more information, see [Migrate an ApsaraDB for MongoDB instance to a different zone](/help/en/mongodb/user-guide/migrate-an-apsaradb-for-mongodb-instance-to-different-zones-in-the-same-region#concept-uh2-skz-lhb).

**Note**

If transparent data encryption (TDE) is not enabled for your ApsaraDB for MongoDB instances that run MongoDB 4.2 or earlier and use local disks, you can migrate the instances from a single zone to different zones.

## Access control

-   Authorize RAM users to manage specific ApsaraDB for MongoDB instances.
    
    You can use RAM to create and manage RAM users. You can also use RAM to control the permissions of the created RAM users on the resources that are available within your Alibaba Cloud account. If multiple users in your enterprise need to simultaneously use the same resources, you can use RAM to assign the least permissions to the users. This prevents the users from sharing the same key and reduces the information security risks for your enterprise.
    
    For more information, see [How do I configure RAM user permissions on ApsaraDB for MongoDB](/help/en/mongodb/support/how-to-configure-ram-user-permissions-on-apsaradb-for-mongodb#concept-39932-zh).
    
-   Create accounts on an ApsaraDB for MongoDB instance and grant permissions to the accounts.
    
    In a production environment, do not connect to an ApsaraDB for MongoDB instance by using the credentials of the root account. You can create accounts on the instance and grant permissions to the created accounts.
    
    For more information, see [Manage the permissions of MongoDB database users](/help/en/mongodb/user-guide/manage-user-permissions-on-mongodb-databases#concept-cgg-qxh-1gb).
    

## Network isolation

-   Deploy ApsaraDB for MongoDB instances in virtual private clouds (VPCs).
    
    ApsaraDB for MongoDB supports various networks. We recommend that you deploy ApsaraDB for MongoDB instances in VPCs.
    
    A VPC is an isolated virtual network that provides higher security and higher performance than the classic network. Before you deploy ApsaraDB for MongoDB instances in VPCs, you must create VPCs. For more information, see [Default VPC and default vSwitch](/help/en/vpc/user-guide/default-vpcs-and-default-vswitches).
    
    If an ApsaraDB for MongoDB instance is deployed in the classic network, you can migrate the instance to a VPC. For more information, see [Switch the network type of an ApsaraDB for MongoDB instance from classic network to VPC](/help/en/mongodb/user-guide/switch-the-network-type-of-an-apsaradb-for-mongodb-instance-from-classic-network-to-vpc#concept-f3s-fys-2fb). If an ApsaraDB for MongoDB instance is deployed in a VPC, no further action is required.
    
    **Note**
    
    ApsaraDB for MongoDB supports password-free access over VPCs. VPCs provide a convenient, secure method to connect to ApsaraDB for MongoDB instances. For more information, see [Disable password-free access over VPC](/help/en/mongodb/enable-or-disable-password-free-access-for-an-apsaradb-for-mongodb-instance#concept-187510).
    
-   Configure IP address whitelists.
    
    After an ApsaraDB for MongoDB instance is created, a default IP address whitelist is created. The default IP address whitelist contains only the `127.0.0.1` IP address. Before you can connect to the ApsaraDB for MongoDB instance, you must manually configure the IP address whitelist.
    
    For more information, see [Modify the IP address whitelist of an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    
    **Note**
    
    -   Do not add the `0.0.0.0/0` entry to an IP address whitelist. The 0.0.0.0/0 entry indicates that the ApsaraDB for MongoDB instance can be accessed from all IP addresses.
        
    -   We recommend that you configure IP address whitelists based on your business requirements and update the configured IP address whitelists on a regular basis. After you confirm that an IP address no longer requires access to the ApsaraDB for MongoDB instance, we recommend that you immediately delete the IP address.
        
    

## Audit logs

The audit logs of an ApsaraDB for MongoDB instance record all operations that are performed on the instance. The audit logs help you obtain information about the operations that are performed on the data in the instance. You can analyze the audit logs to troubleshoot issues, identify abnormal behavior, and audit the security of the instance.

For more information, see [View audit logs](/help/en/mongodb/user-guide/view-audit-logs#task-2491602).

## Data encryption

-   SSL encryption
    
    If you connect to an ApsaraDB for MongoDB instance over the Internet, you can enable SSL encryption for the instance. SSL encryption helps protect the data in transit. ApsaraDB for MongoDB encrypts network connections at the transport layer in compliance with SSL to improve data security and ensure data integrity. For more information, see [Use the mongo shell to connect to an ApsaraDB for MongoDB database in SSL encryption mode](/help/en/mongodb/user-guide/use-the-mongo-shell-to-connect-to-an-apsaradb-for-mongodb-database-in-ssl-encryption-mode#concept-ls5-jks-ngb).
    
-   TDE
    
    TDE is used to encrypt data before the data is written from data files into a disk and decrypt data before the data is read from a disk and written into the memory. TDE does not increase the size of data files. You can use TDE without the need to modify the configuration data of your application. For more information, see [Configure TDE for an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-tde-for-an-apsaradb-for-mongodb-instance#task-1796793).
    
    **Note**
    
    TDE supports only collection-level encryption. For more information about field-level encryption, see [Explicit Encryption](https://docs.mongodb.com/manual/core/security-explicit-client-side-encryption/). Field-level encryption is supported only by ApsaraDB for MongoDB instances that run MongoDB 4.2 and use local disks.
