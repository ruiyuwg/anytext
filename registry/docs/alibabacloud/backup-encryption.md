This topic describes how to enable the backup encryption feature for an ApsaraDB RDS for MySQL instance. The backup files are encrypted by using the Percona XtraBackup utility. This utility eliminates the need to modify your application. If you want to use an encrypted backup file, you must download the backup file. Then, you can decrypt the backup file at decompression.

## Prerequisites

-   Your RDS instance meets the following requirements:
    
    -   The RDS instance runs MySQL 8.0, MySQL 5.7, or MySQL5.6.
        
    -   The RDS instance runs RDS High-availability Edition.
        
    -   The RDS instance uses Premium Local SSDs.
        
-   Key Management Service (KMS) is activated. For more information, see [Purchase a dedicated KMS instance](/help/en/kms/key-management-service/support/purchase-a-dedicated-kms-instance#task-1962255).
    

## Background information

The key that is used for the backup encryption is created and managed by KMS. ApsaraDB RDS does not provide the key or certificates that are required for the backup encryption. You can use an automatically generated key or a custom key.

If you want to use a custom key, you must first create a service-linked role. ApsaraDB RDS uses the service-linked role to obtain keys and the attributes and aliases of the keys from KMS. Then, ApsaraDB RDS can display the keys in the ApsaraDB RDS console. After backup files are encrypted by using a custom key, ApsaraDB RDS can also display the related encryption information. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles).

When you enable the backup encryption feature, ApsaraDB RDS marks the key that you select. Then, ApsaraDB RDS uses the key to encrypt backup files based on the service-linked role.

## Usage notes

**Important**

After the backup encryption feature is enabled, it cannot be disabled.

-   After the backup encryption feature is enabled, the key cannot be changed.
    
-   After the backup encryption feature is enabled, only new backup files are encrypted. Existing backup files are not encrypted.
    
-   After the backup encryption feature is enabled, if you want to restore the data of your RDS instance to an on-premises database, you must decrypt the backup file of the RDS instance after you download the backup file. For more information, see [Decrypt backup files](#section-0mo-riw-kl4).
    
    **Note**
    
    If you directly restore the data of your RDS instance from a backup file by using the ApsaraDB RDS console, you do not need to decrypt the backup file. Before the backend performs the restoration, it automatically decrypts the backup file. For more information, see [Restore full data](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#concept-vrh-qp4-ydb).
    
-   If you use an existing custom key for the backup encryption, take note of the following items:
    
    -   If you disable the key, configure a plan to delete the key, or delete the key material, the key becomes unavailable. In this case, if an O&M operation requires a backup file that is encrypted by using the unavailable key, the O&M operation fails. This may decrease the availability of your instance. If you restore data from a backup file that is encrypted by using the unavailable key, the data restoration also fails.
        
    -   You must use your Alibaba Cloud account or a RAM user that has the following permissions:
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": [
                        "ram:CreateServiceLinkedRole"
                    ],
                    "Resource": "*",
                    "Effect": "Allow",
                    "Condition": {
                        "StringEquals": {
                            "ram:ServiceName": "backupencryption.rds.aliyuncs.com"
                        }
                    }
                },
                {
                    "Action": [
                        "kms:ListResourceTags",
                        "kms:TagResource"
                    ],
                    "Effect": "Allow",
                    "Resource": [
                        "acs:kms:*:*:*"
                    ]
                }
            ]
        }
        ```
        
        **Note**
        
        You can configure the permissions and grant the permissions to a RAM user by using the RAM console. For more information, see [Authorize a RAM user to manage ApsaraDB RDS instances](/help/en/rds/apsaradb-rds-for-mysql/authorize-a-ram-user-to-manage-apsaradb-rds-instances#task-1946455).
        

## Enable the backup encryption feature

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, click the **Backup Strategy** tab.
    
4.  Click **Edit** in the **Backup Encryption Settings** section to turn on **Backup Encryption Status**.
    
5.  In the **Backup Set Encryption Information** dialog box, select a value for the **Backup Master Key** parameter and click **OK**.
    
    -   **Use Automatically Generated Key**
        
        If you select this option, Alibaba Cloud generates a key that can be used to encrypt backup files.
        
    -   **Use Existing Custom Key**
        
        If you select this option, the key that is created by using KMS is used. If the key does not exist, you can create a key by using KMS. For more information, see [Create a CMK](/help/en/kms/key-management-service/support/create-a-cmk#task-1939967).
        
        **Note**
        
        If this is the first time that you use KMS to create a custom key, you must follow the prompted instructions to obtain authorization.
        
    

After the backup encryption feature is enabled, the backup files of your RDS instance are encrypted. If you use these backup files on Alibaba Cloud, you do not need to manually decrypt these backup files. Before the backend performs operations such as data restoration, it automatically decrypts these backup files. If you download these backup files to your computer, you must manually decrypt these backup files. For more information about how to decrypt these backup files, see [Decrypt backup files](#section-0mo-riw-kl4).

## Decrypt backup files

This section uses Ubuntu 16.04 as an example to show how to decrypt backup files.

### **Prerequisites**

-   Percona XtraBackup is installed. If you do not install Percona XtraBackup, install Percona XtraBackup by following the instructions described in [Installing Percona XtraBackup 2.4](https://www.percona.com/doc/percona-xtrabackup/2.4/installation.html) or [Install Percona XtraBackup 8.0 overview](https://www.percona.com/doc/percona-xtrabackup/8.0/installation.html).
    
-   The qpress decompression tool is installed. If you do not install the tool, run the following commands:
    
    ```
    wget "http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/183466/cn_zh/1608011575185/qpress-11-linux-x64.tar"
    tar xvf qpress-11-linux-x64.tar
    chmod 775 qpress
    cp qpress /usr/bin
    ```
    
-   **Python 3** is installed.
    

### **Procedure**

1.  Obtain the ciphertext and the algorithm that is used to encrypt the backup files.
    
    1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
        
    2.  In the left-side navigation pane of the page that appears, click **Backup and Restoration**.
        
    3.  On the page that appears, click the **Base Backups** tab and then the **Data Backup** tab.
        
    4.  Click the **![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8515842171/p459423.png)** icon in the **Actions** column of the backup set and click **View Encryption Information** to obtain the **ciphertext** and **encryption algorithm**.
        
2.  Call the [Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt#doc-api-Kms-Decrypt) operation and set the CiphertextBlob parameter to the **ciphertext** obtained in [Step 1](#step-76e-5m8-cko) to obtain the value of the Plaintext parameter. The value is a Base64-encoded binary string.
    
    ![plaintext](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5215101361/p166878.png)
    
3.  Decode the value of the Plaintext parameter by using Base64 and convert each binary value in the binary string into a hexadecimal value. Then, you can obtain the password. This section uses Python 3 code to implement this operation.
    
    1.  Open the vi editor by running the `vi decrypt.py` command in the CLI.
        
    2.  Press the `i` key on the keyboard to enable the editing mode, enter the following content, press the `ESC` key, and then enter `:wq` to save the changes and disable the editing mode.
        
        ```
        import base64
        import binascii
        plaintext = 'S14dTbl6i4Qo**********'  # Enter the value of the Plaintext parameter that is obtained in the previous step in single quotation marks (''). 
        password = binascii.b2a_hex(base64.b64decode(plaintext))   # Obtain the password for the decryption and set the password parameter to the obtained value. 
        print(str(password, 'utf-8'))   # Print the password as a string on the screen.
        ```
        
    3.  Run the `python decrypt.py` command in the CLI, and the password for the decryption is printed on the screen. Example:
        
        ```
        4b5e1d4db97a********************
        ```
        
4.  Download the encrypted backup data and decrypt the data.
    
    1.  Download the backup data to your computer. For more information, see [Restore the data of an ApsaraDB RDS for MySQL instance from a physical backup file to a self-managed MySQL database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database#section-eyn-3bk-rhx).
        
    2.  Run the following command in the CLI to create a directory, such as `/home/mysql/data`, to store backup data:
        
        ```
        mkdir /home/mysql/data
        ```
        
    3.  Decompress the physical backup package. The command that is used to decompress the physical backup package varies based on the extension of the package name.
        
        **Backup file type**
        
        **Command used for decompression**
        
        .tar.gz
        
        ```
        tar -izxvf test1.tar.gz -C /home/mysql/data
        ```
        
        .xb.gz
        
        ```
        gzip -d -c test1.xb.gz | xbstream -x -v -C /home/mysql/data
        ```
        
        \_qp.xb
        
        ```
        ## Decompress the physical backup file.
        cat test1_qp.xb | xbstream -x -v -C /home/mysql/data
        
        ## Decompress the physical backup file.
        ### If the RDS instance runs MySQL 5.6 or MySQL 5.7, run the following command:
        innobackupex --decompress --remove-original /home/mysql/data
        ### If the RDS instance runs MySQL 8.0, run the following command:
        xtrabackup --decompress --remove-original --target-dir=/home/mysql/data
        ```
        
        \_xb.qp
        
        ```
        qpress -do  test1_xb.qp  | xbstream -x -v -C /home/mysql/data
        ```
        
        After the decompression, all data is suffixed with `.xbcrypt`. The suffix indicates that the data is encrypted. ![数据被加密](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8515842171/p303662.png)
        
    4.  Run the following command to decrypt data:
        
        ```
        xtrabackup --decompress --remove-original --decrypt=AES256 --encrypt-key=4b5e1d4db97a******************** --target-dir=/home/mysql/data
        ```
        
        **Note**
        
        The following lists describe the crucial parameters in the preceding command:
        
        -   decrypt: the **encryption algorithm** obtained in [Step 1](#step-76e-5m8-cko). In this example, set the value to `AES256`.
            
        -   encrypt-key: the password obtained in [Step 3](#step-mrn-3zp-grm) for the decryption.
            
        -   target-dir: the directory in which the backup file is located.
            
        
        After you run the preceding command, the `.xbcrypt` suffix of the backup file disappears and the backup file is decrypted. ![数据解密成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8515842171/p303667.png)
