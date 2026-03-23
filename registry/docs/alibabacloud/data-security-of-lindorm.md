Lindorm supports Secure Sockets Layer (SSL) encryption and Transparent Data Encryption (TDE) to reduce potential security risks of cloud data. Lindorm also supports data backup and restoration to prevent data loss.

## **SSL encryption**

To enhance the security of access links, you can enable SSL encryption and install a certificate authority (CA) certificate in the application services based on your business requirements. SSL encrypts network connections at the transport layer. This enhances data security, but also increases connection response time.

For more information, see [Configure SSL encryption](/help/en/lindorm/sets-the-ssl-encryption).

## TDE

Lindorm supports the TDE feature. After the TDE feature is enabled, Lindorm encrypts data based on a key hierarchy. The data in the file system of Lindorm is stored as ciphertext.

For more information, see [Enable the TDE feature (in beta)](/help/en/lindorm/enable-the-tde-feature).

## **Data backup and restoration**

LindormTable supports the data backup and restoration feature. This feature allows you to store data in Alibaba Cloud Object Storage Service (OSS) by using the data migration feature provided by data ecosystem services. LindormTable performs full backups and real-time synchronization of incremental data on a regular basis. This meets data backup and restoration needs and minimizes the data loss caused by accidental changes.

For more information, see [Automatic backup of data in Lindorm wide tables](/help/en/lindorm/user-guide/automatic-backup-of-data-of-lindorm-wide-tables) and [Restore an instance by using its backup data](/help/en/lindorm/user-guide/restore-backup-data-to-the-instance-that-corresponds-to-the-original-data).

## **Multi-zone deployment**

Lindorm allows you to deploy a Lindorm instance across multiple zones. A multi-zone instance offers enhanced disaster recovery capabilities. The Lindorm instance can achieve strong data consistency across multiple zones. You can also handle requests and quickly return results when data is in eventual consistency mode. This ensures high availability and reduces the read and write latency.

For more information, see [Multiple-zone deployment](/help/en/lindorm/user-guide/cross-zone-deployment).
