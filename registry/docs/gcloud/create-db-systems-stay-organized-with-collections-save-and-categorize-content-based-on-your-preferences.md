-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [Oracle Database at Google Cloud](https://docs.cloud.google.com/oracle/database/docs)
-   [Guides](https://docs.cloud.google.com/oracle/database/docs/overview)

Send feedback

# Create DB systems Stay organized with collections Save and categorize content based on your preferences.

This page describes how to create Base Database Service resources, that is, DB systems in Google Cloud.

Oracle Database@Google Cloud lets you create an DB systems in the Google Cloud using Google Cloud console and Oracle Database@Google Cloud API.

You must create your DB system in the same region and zone as your ODB Network. This ensures optimal performance and seamless communication.

For a list of regions and zones in which you can create DB systems, see [Supported regions and zones](/oracle/database/docs/regions-and-zones).

## Before you begin

-   [Set up the gcloud CLI and enable the API](/oracle/database/docs/set-up).
    
-   Confirm you have an active marketplace order for Oracle Database@Google Cloud.
    
-   Enable the Oracle Database@Google Cloud API for the project.
    
    [Enable the Oracle Database@Google Cloud API](https://console.cloud.google.com/flows/enableapi?apiid=oracledatabase.googleapis.com)
    
-   [Create an ODB Network and ODB Subnets](/oracle/database/docs/create-odb-network). A DB system requires one client subnet.
    
-   Confirm that you have the required Identity and Access Management (IAM) roles and permissions to create a Base DB system:
    
    -   `roles/oracledatabase.dbSystemAdmin`
    
    For information on how to assign roles, see [Apply IAM roles](/oracle/database/docs/iam-roles).
    

## Create a Base DB system

The DB system provisioning workflow creates the following three resources:

-   A DB system
-   A container database (CDB)
-   A pluggable database (PDB)

To create a DB system, do the following:

### Console

1.  Go to the **Base Database Service** page.
    
    [Go to Base Database Service](https://console.cloud.google.com/oracle/basedb/)
    
2.  Click **Create**.
    
3.  Enter a **Display name** for your DB system. This name appears in the Google Cloud console. The display name must be unique within your Google Cloud project.
    
    **Note:** The **Display name** field corresponds to the **dbName** field in the OCI console. While choosing a display name, make sure to follow the [Oracle naming conventions](https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/CreateDatabaseDetails).
    
4.  For **System ID**, enter a unique identifier for your DB system. The DB system ID can't be changed later.
    
5.  Select a **Region** and a **GCP Oracle zone**. The region and zone choice is permanent and can't be changed later.
    
6.  In the **Configure Shape** section, enter the **Number of ECPUs** for `Standard.x86` shape.
    
    The ECPU count can range from 4 to 256, in increments of 4. The value of **Memory** is automatically updated based on the number of ECPUs.
    
7.  From the **Available data storage** menu, select a storage size.
    
    The value of **Recovery area storage** is updated automatically based on the storage size you select.
    
8.  Select an **Oracle Database software edition**. The following editions are available:
    
    -   Standard Edition
    -   Enterprise Edition
    -   Enterprise Edition high performance
    
    For information about these editions, refer to the Oracle documentation.
    
9.  Select your **License type**. The available options are `License included` and `Bring Your Own License`.
    
10.  In the **SSH keys** section, add the SSH keys you'd like to use for the DB system. To add a key, enter the SSH key name in the **SSH Key 1** field. For each additional key, click **ADD ITEM**.
     
     For more information on how to generate SSH keys, see [Generate SSH keys](/oracle/database/docs/generate-ssh-keys).
     
11.  In the **Networking** section, define the network configuration for the DB system:
     
     1.  From the **Network project** list, select the project that contains your ODB Network.
         
     2.  Select the **ODB Network**.
         
     3.  Select a **Client subnet**.
         
     4.  Enter a **Hostname prefix**. This prefix can only contain letters, numbers, or hyphens, and must start with a letter. The maximum allowed length is 12 characters.
         
     5.  (Optional) In the **Advanced network settings** section, you can provide a **Private IP address**. This must be an available IP address within the subnet's CIDR.
         
         If you don't specify an IP address, a private IP address is automatically assigned from the subnet.
         
12.  In the **Diagnostics collection** section, configure monitoring for your DB system:
     
     1.  Select the **Enable diagnostic events** checkbox to track all DB system diagnostic events.
         
     2.  Select the **Enable incident logs and trace collection** checkbox to enable incident logging for your DB system.
         
13.  In the **Advanced fields** section, select a **Timezone** which you'd like to use for diagnostic collection. This timezone is used for event timestamps.
     
14.  In the **Database information** section, do the following to configure your database:
     
     1.  Enter a unique display name.
     2.  Enter a database ID as a unique identifier for your database.
     3.  Enter a suffix for generating unique database names. Database names are generated by combining the database name with this suffix.
     4.  Select a database version.
     5.  Use the following naming convention to enter a display name for your pluggable database:
         
         -   Starts with a letter.
         -   Contains only letters, numbers, or underscores.
         -   Contains maximum 30 characters.
         
         If you don't enter a display name, then Oracle Database@Google Cloud generates the name automatically.
         
     6.  Use the following naming convention to enter a unique ID for your pluggable database:
         
         -   Starts with a lowercase letter.
         -   Contains lowercase letters, numbers, and hyphens.
         -   Ends with a lowercase letter or a number.
         -   Contains maximum 63 characters.
         
         If you don't enter a unique ID, then Oracle Database@Google Cloud generates the ID automatically. It can't be changed later.
         
15.  In the **Administrator credentials** section, do the following:
     
     1.  Confirm the **Administrator username**.
     2.  Enter your password in the **Password** field.
     3.  Re-enter your password in the **Confirm password** field to confirm.
     4.  If you want to **Use the administrator password for the TDE wallet**, then select the checkbox, and enter the **TDE wallet password**.
         
         Re-enter the TDE wallet password to confirm.
         
16.  Review the **Database backups** settings. You can change these settings through the OCI console after the DB system has been provisioned.
     
17.  In the **Advanced settings** section, you can optionally modify the following settings:
     
     1.  **Unified auditing**: if you've selected database version `19c`, you can choose to enable or disable this setting. However, for database version `23ai`, this setting is enabled by default and you can't disable it.
         
     2.  **Character set**: the default and the recommended setting is `AL32UTF8`.
         
     3.  **National character set**: the default is `AL16UTF16`.
         
18.  Click **Create**.
     

### API

To create a DB system, run the following `curl` command:

curl -X POST \\
-H "Authorization: Bearer $(gcloud auth print-access-token)" \\
-H "Content-Type: application/json" \\
"https://oracledatabase.googleapis.com/v1/projects/PROJECT\_ID/locations/REGION/dbSystems/DB\_SYSTEM\_ID"
-d \\
'{
  "display\_name": "DB\_SYSTEM\_DISPLAY\_NAME",
  "gcp\_oracle\_zone": "GCP\_ORACLE\_ZONE",
  "name": "projects/PROJECT\_ID/locations/REGION/dbSystems/DB\_SYSTEM\_NAME",
  "entitlement\_id": "ENTITLEMENT\_ID",
  "odb\_subnet": "projects/ODB\_NETWORK\_PROJECT\_ID/locations/REGION/odbNetworks/ODB\_NETWORK\_ID/odbSubnets/ODB\_SUBNET\_ID",
  "properties": {
    "shape": "VM.Standard.X86",
    "computeCount": COMPUTE\_COUNT,
    "node\_count": NODE\_COUNT,
    "initial\_data\_storage\_size\_gb": INITIAL\_STORAGE\_SIZE,
    "database\_edition": "DATABASE\_EDITION",
    "license\_model": "LICENSE\_TYPE",
    "hostname\_prefix": "HOSTNAME\_PREFIX",
    "db\_home": {
      "display\_name": "DB\_DISPLAY\_NAME",
      "db\_version": "DB\_VERSION",
      "database": {
        "db\_name": "DB\_NAME",
        "admin\_password": "PASSWORD",
        "character\_set": "CHARACTER\_SET",
        "database\_id": "DB\_ID",
       },
     },
    "ssh\_public\_keys": \["SSH\_PUBLIC\_KEY"\],
    "data\_collection\_options": {
      "is\_diagnostics\_events\_enabled": EVENTS\_ENABLED,
      "is\_incident\_logs\_enabled": INCIDENT\_LOGS\_ENABLE
     },
    "time\_zone": {
      "id": "TIMEZONE"
     },
   }
}'

Replace the following:

-   PROJECT\_ID: the ID of your Google Cloud project in which to create the DB system.
-   REGION: the region in which to create the DB system.
-   DB\_SYSTEM\_ID: a unique identifier for your DB system.
-   DB\_SYSTEM\_DISPLAY\_NAME: a name for your DB system that appears in the Google Cloud console.
    
    **Note:** **DB\_SYSTEM\_DISPLAY\_NAME** corresponds to the **dbName** field in the OCI console. While choosing a display name, make sure to follow the [Oracle naming conventions](https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/CreateDatabaseDetails).
    
-   GCP\_ORACLE\_ZONE: the GCP Oracle zone for your DB system. For the list of available regions and zones, see [Available configurations](/oracle/database/docs/available-configurations).
    
-   DB\_SYSTEM\_NAME: a name for your DB system.
    
-   ENTITLEMENT\_ID: your Oracle entitlement ID.
    
-   For `odbSubnet` property, replace the following:
    
    -   ODB\_NETWORK\_PROJECT\_ID: the ID of your Google Cloud project which contains your ODB Network. If you're using a Shared VPC, then this is the ID of your host project.
    -   REGION: the region of your ODB Network.
    -   ODB\_NETWORK\_ID: the ID of your ODB Network.
    -   ODB\_SUBNET\_ID: the ID of your ODB Subnet.
-   COMPUTE\_COUNT: the compute capacity for your database.
    
-   NODE\_COUNT: the number of nodes for your DB system. You can have either `1` or `2` nodes.
    
-   INITIAL\_STORAGE\_SIZE: the size (in GiB) of the initial storage for your DB system. You can scale up storage after provisioning, as required.
    
-   DATABASE\_EDITION: the Oracle Database software edition. Following are the acceptable values:
    
    -   `STANDARD_EDITION`
    -   `ENTERPRISE_EDITION`
    -   `ENTERPRISE_EDITION_HIGH_PERFORMANCE`
-   LICENSE\_TYPE: the license type associated with your Oracle Database@Google Cloud order. The only accepted values are `bring-your-own-license` or `license-included`.
    
-   HOSTNAME\_PREFIX: a hostname prefix. This prefix can only contain letters, numbers, or hyphens, and must start with a letter. The maximum allowed length is 12 characters.
    
-   DB\_DISPLAY\_NAME: a name for your database that appears in the Google Cloud console.
    
-   DB\_VERSION: the Oracle database version for your database.
    
-   DB\_NAME: a name for your database.
    
-   PASSWORD: the password for the default administrator user for your database.
    
-   CHARACTER\_SET: the setting for the character set management. The default and the recommended setting is `AL32UTF8`.
    
-   DB\_ID: a unique identifier for your database.
    
-   SSH\_PUBLIC\_KEY: the SSH public keys for your DB system. You can enter a single value for a single key, or an array of values for multiple keys.
    
-   EVENTS\_ENABLED: set to `true` to track all DB system diagnostic events.
    
-   INCIDENT\_LOGS\_ENABLE: set to `true` to enable incident logging for your DB system.
    
-   TIMEZONE: the timezone you'd like to use for diagnostic collection. This timezone is used for event timestamps.
    

The provisioning workflow creates only one pluggable database for the DB system. After the DB system is created, you can create additional pluggable databases through the OCI console. For instructions, refer to the Oracle documentation.

## What's next

-   Learn how to [manage your DB systems](/oracle/database/docs/manage-base-db-system).
-   Learn how to [delete a DB system](/oracle/database/docs/delete-base-db-system).
-   Learn how to [view details of a DB system and its databases](/oracle/database/docs/view-base-db-system-information).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
