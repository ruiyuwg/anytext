MongoDB 7.0 comes with the Queryable Encryption feature for scenarios that require higher database security. This topic describes how to use the Queryable Encryption feature.

## **Background information**

The transparent data encryption and disk encryption features provided by ApsaraDB for MongoDB are encryption at rest solutions They serve the following purposes:

-   Data protection: They protect data on disks from unauthorized access. Even if a malicious user has physical access to HDDs or SSDs on which data is stored, the user cannot access the unencrypted data.
    
-   Leak prevention: If a storage device is stolen or lost, such as when a security event occurs in a data center or when a laptop is lost, encryption ensures that sensitive data cannot be accessed by unauthorized users.
    
-   Compliance requirements: Multiple industry standards and regulations require enterprises to encrypt sensitive data. Sensitive data includes information such as the private data of users and financial information. The encryption at rest solutions help enterprises meet regulatory requirements.
    

**Note**

The backup files of an ApsaraDB for MongoDB instance that has TDE or disk encryption enabled are encrypted.

If you use the encryption at rest solutions, data read into memory is still in plaintext. To fully protect your data, we recommend that you implement additional security measures such as network encryption, including Secure Sockets Layer (SSL) or Transport Layer Security (TLS), database access control, auditing, and monitoring. To eliminate concerns about access from the internal O&M personnel of Alibaba Cloud to Elastic Compute Service (ECS) instances that host your database services, Alibaba Cloud provides customer authorization and forcible auditing to prevent security risks.

If you have higher requirements for database security and require additional encryption methods, you can use the Queryable Encryption feature officially released in MongoDB 7.0.

## **Introduction**

The preview version of the Queryable Encryption feature is released in MongoDB 6.0, and the official version of the feature is released in MongoDB 7.0.

The Queryable Encryption feature allows data to stay encrypted until the data reaches the client. Queries are made to the server along with the encryption key managed by Key Management Service (KMS). Then. the data is queried and returned in ciphertext on the server. After the data is returned to the client, the data is decrypted by using the key and displayed in plaintext.

The Queryable Encryption feature provides the following features:

-   Encrypts sensitive data from the client and allows only the client to obtain the encryption key.
    
-   Encrypts data throughout the entire data lifecycle, which includes data transmission, storage, usage, auditing, and backup.
    
-   Allows the client to run expressive queries on encrypted data, including equality, range, prefix, suffix, and substring queries.
    
-   Improves the performance of data privacy protection. Only authorized users who can access applications on the server and use encryption keys can view data in plaintext.
    
-   Makes it easier to develop applications that involve sensitive data. Developers can directly use the comprehensive encryption capabilities that come with databases to ensure security and compliance.
    
-   Reduces security concerns for Alibaba Cloud users who want to store sensitive data in ApsaraDB for MongoDB.
    

Features released by MongoDB Community Edition are slightly different from those released by Enterprise Edition (Atlas). MongoDB Community Edition does not support automatic encryption.

For more information about driver versions and encrypted database versions, see [Queryable Encryption Compatibility](https://www.mongodb.com/docs/manual/core/queryable-encryption/reference/compatibility/#std-label-qe-compatibility-reference).

## **Limits**

-   The results of diagnostic commands and query logs on an encrypted collection are further edited or hidden, which compromises problem analysis:
    
    -   Commands applicable to an encrypted collection, such as `aggregate, count, find, insert, update, and delete`, are not recorded in slow query logs and profilers.
        
    -   The results of a diagnostic command, such as `collStats, currentOp, top, or $planCacheStats`, are further edited and some fields in the results are hidden.
        
-   The competitions and conflicts among encrypted fields may increase the write delay. The fields complete when the default contention is 8.
    
-   Metadata collections that exceed 1 GB in size must be manually compacted. For more information, see [Metadata Collection Compaction](https://www.mongodb.com/docs/manual/core/queryable-encryption/fundamentals/manage-collections/#metadata-collection-compaction).
    
-   The `encryptedFieldsMap` object cannot be changed, including the query fields in the object.
    
-   The Queryable Encryption feature is supported only by replica set or sharded cluster instances.
    
-   Data with Queryable Encryption enabled on secondary nodes cannot be read.
    
-   Documents cannot be updated in a batch by running the `updateMany or bulkWrite` command, and parameters in the `findAndModify` command are limited.
    
-   The upsert semantics is not supported. When upsert is triggered, encrypted fields are not inserted.
    
-   The Client-Side Field Level Encryption (CSFLE) feature cannot be enabled for a collection together with the Queryable Encryption feature, and a collection with CSFLE enabled or an unencrypted collection cannot be converted into a collection with Queryable Encryption enabled.
    
-   The Queryable Encryption feature can be enabled only for new empty collections.
    
-   A collection that contains encrypted fields cannot be renamed. The fields cannot be renamed by running the `$rename` command.
    
-   If `jsonSchema` is specified when an encrypted collection is created, the `encrypt` keyword cannot be included.
    
-   Views, time series collections, and capped collections are not supported.
    
-   TTL indexes or unique indexes are not supported.
    
-   `jsonSchema` cannot be closed.
    
-   A collection must be deleted by using a MongoClient with Queryable Encryption enabled. Otherwise, metadata remains.
    
-   The Queryable Encryption feature does not support collation. Collation blocks normal sorting for encrypted fields.
    
-   The `_id` field cannot be specified as an encrypted field.
    
-   A limited number of commands and operators are supported by the Queryable Encryption feature. For more information, see [Supported Operations for Queryable Encryption](https://www.mongodb.com/docs/manual/core/queryable-encryption/reference/supported-operations/#std-label-qe-reference-automatic-encryption-supported-operations).
    

## **Preparations**

The following example uses an ECS instance as a verification client. If your test environment contains relevant dependencies, you can skip the corresponding steps. **mongosh supports only automatic encryption, and MongoDB Community Edition supports only explicit encryption. This section uses the Node.js driver for verification.**

1.  Install Node.js and npm.
    
    ```
    curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
    sudo yum install nodejs
    
    node -v
    npm -v
    ```
    
2.  Install the official Node.js driver for MongoDB.
    
    ```
    mkdir node_quickstart
    cd node_quickstart
    npm init -y
    npm install mongodb@6.6
    ```
    
3.  Install the libmongocrypt library.
    
    ```
    vi /etc/yum.repos.d/libmongocrypt.repo
    // Enter the following content in the file.
    [libmongocrypt]
    name=libmongocrypt repository
    baseurl=https://libmongocrypt.s3.amazonaws.com/yum/redhat/8/libmongocrypt/1.8/x86_64
    gpgcheck=1
    enabled=1
    gpgkey=https://pgp.mongodb.com/libmongocrypt.asc
    
    // install
    sudo yum install -y libmongocrypt
    ```
    
4.  Install the mongodb-client-encryption package on which the Node.js driver depends.
    
    ```
    sudo yum groupinstall 'Development Tools'
    npm install mongodb-client-encryption
    ```
    
5.  Install mongosh and configure the MONGODB\_URI environment variable.
    
    ```
    wget https://repo.mongodb.org/yum/redhat/8/mongodb-org/7.0/x86_64/RPMS/mongodb-mongosh-2.2.5.x86_64.rpm
    yum install -y ./mongodb-mongosh-2.2.5.x86_64.rpm
    
    export MONGODB_URI="mongodb://root:xxxxxx@dds-2zef23cef14b4f142.mongodb.pre.rds.aliyuncs.com:3717,dds-2zef23cef14b4f141.mongodb.pre.rds.aliyuncs.com:3717/admin?replicaSet=mgset-855706"
    // Test the connectivity.
    mongosh ${MONGODB_URI}
    ```
    
6.  Obtain the automatically encrypted shared library.
    
    Select the client that corresponds to your machine and distribution version in Download Center, and select the crypt\_shared package. For more information, see [MongoDB Enterprise Server Download](https://www.mongodb.com/try/download/enterprise).
    
    ```
    // Decompress the local directory to obtain the lib/mongo_crypt_v1.so file.
    tar -xzvf mongo_crypt_shared_v1-linux-x86_64-enterprise-rhel80-7.0.9.tgz
    ```
    

## **Procedure**

**Note**

MongoDB Community Edition does not support automatic encryption. Therefore, this section describes the explicit encryption process.

Enter the Read-Eval-Print Loop (REPL) environment of Node.js and then perform the following steps:

```
node -i -e "const MongoClient = require('mongodb').MongoClient; const ClientEncryption = require('mongodb').ClientEncryption;"
```

1.  Create a customer master key (CMK).
    
    **Note**
    
    The following example shows the sample configurations of a local KMS provider. We recommend that you do not use the configurations in the production environment.
    
    Create a 96-byte CMK and store the CMK in the `customer-master-key.txt` file of the local file system.
    
    ```
    const fs = require("fs");
    const crypto = require("crypto");
    try {
      fs.writeFileSync("customer-master-key.txt", crypto.randomBytes(96));
    } catch (err) {
      console.error(err);
    }
    ```
    
    In this example, Node.js is used to call a random string to generate the 96-byte CMK. You can also use `/dev/urandom` in the mongo shell to generate the 96-byte CMK.
    
    ```
    echo $(head -c 96 /dev/urandom | base64 | tr -d '\n')
    ```
    
2.  Initialize variables.
    
    ```
    // KMS provider name should be one of the following: "aws", "gcp", "azure", "kmip" or "local"
    const kmsProviderName = "local";
    const uri = process.env.MONGODB_URI;
    const keyVaultDatabaseName = "encryption";
    const keyVaultCollectionName = "__keyVault";
    const keyVaultNamespace = "encryption.__keyVault";
    const encryptedDatabaseName = "medicalRecords";
    const encryptedCollectionName = "patients";
    ```
    
    In the preceding sample code, the following variables are initialized:
    
    -   `kmsProviderName`: the name of the KMS provider. In this example, `local` is used.
        
    -   `uri`: the MongoDB URI. The MongoDB URI can be specified by the `MONGODB_URI` environment variable. You can also specify the MongoDB URI.
        
    -   `keyVaultDatabaseName`: the name of the database that stores data encryption keys (DEKs).
        
    -   `keyVaultCollectionName`: the name of the collection that stores DEKs. The collection must be different from a regular collection.
        
    -   `keyVaultNamespace`: equal to the `keyVaultDatabaseName` or `keyVaultCollectionName` variable.
        
    -   `encryptedDatabaseName`: the name of the database that stores encrypted data.
        
    -   `encryptedCollectionName`: the name of the collection that stores encrypted data.
        
    
3.  Create a unique index on the collection that stores DEKs.
    
    ```
    const keyVaultClient = new MongoClient(uri);
    await keyVaultClient.connect();
    const keyVaultDB = keyVaultClient.db(keyVaultDatabaseName);
    // Delete the database with the same name as the database that stores DEKs to prevent excess data.
    await keyVaultDB.dropDatabase();
    const keyVaultColl = keyVaultDB.collection(keyVaultCollectionName);
    await keyVaultColl.createIndex(
      { keyAltNames: 1 },
      {
        unique: true,
        partialFilterExpression: { keyAltNames: { $exists: true } },
      }
    );
    // double check
    await keyVaultColl.indexes();
    ```
    
4.  Create an encrypted collection.
    
    1.  Obtain the created CMK and specify the KMS provider.
        
        ```
        const localMasterKey = fs.readFileSync("./customer-master-key.txt");
        kmsProviders = {local: {key: localMasterKey}};
        ```
        
    2.  Create a DEK.
        
        **Note**
        
        Before you perform this step, make sure that the user specified in the `uri` variable has the dbAdmin permission on the `encryption._keyVault` and `medicalRecords` databases.
        
        ```
        const clientEnc = new ClientEncryption(keyVaultClient, {
          keyVaultNamespace: keyVaultNamespace,
          kmsProviders: kmsProviders,
        });
        const dek1 = await clientEnc.createDataKey(kmsProviderName, {
          keyAltNames: ["dataKey1"],
        });
        const dek2 = await clientEnc.createDataKey(kmsProviderName, {
          keyAltNames: ["dataKey2"],
        });
        ```
        
    3.  Specify the fields to be encrypted and configure the created DEK.
        
        ```
        const encryptedFieldsMap = {
          [`${encryptedDatabaseName}.${encryptedCollectionName}`]: {
            fields: [
              {
                keyId: dek1,
                path: "patientId",
                bsonType: "int",
                queries: { queryType: "equality" },
              },
              {
                keyId: dek2,
                path: "medications",
                bsonType: "array",
              },
            ],
          },
        };
        ```
        
    4.  Specify the automatically encrypted shared library and create a MongoClient.
        
        ```
        const extraOptions = {cryptSharedLibPath: "/root/lib/mongo_crypt_v1.so"};
        const encClient = new MongoClient(uri, {
          autoEncryption: {
            keyVaultNamespace,
            kmsProviders,
            extraOptions,
            encryptedFieldsMap,
          },
        });
        await encClient.connect();
        ```
        
    5.  Create an encrypted collection.
        
        ```
        const newEncDB = encClient.db(encryptedDatabaseName);
        await newEncDB.dropDatabase();
        await newEncDB.createCollection(encryptedCollectionName);
        ```
        
5.  Create a MongoClient that is used to encrypt read and write operations.
    
    1.  Specify the collection that stores the created DEK.
        
        ```
        const eDB = "encryption";
        const eKV = "__keyVault";
        const keyVaultNamespace = `${eDB}.${eKV}`;
        const secretDB = "medicalRecords";
        const secretCollection = "patients";
        ```
        
    2.  Specify the created CMK.
        
        **Important**
        
        Do not use the local key file in the production environment.
        
        ```
        const fs = require("fs");
        const path = "./customer-master-key.txt";
        const localMasterKey = fs.readFileSync(path);
        const kmsProviders = {
          local: {
            key: localMasterKey,
          },
        };
        ```
        
    3.  Obtain the created DEK.
        
        **Note**
        
        The DEK name must be the same as the name of the DEK created in the secondary substep of Step 4.
        
        ```
        const uri = process.env.MONGODB_URI;;
        const unencryptedClient = new MongoClient(uri);
        await unencryptedClient.connect();
        const keyVaultClient = unencryptedClient.db(eDB).collection(eKV);
        const dek1 = await keyVaultClient.findOne({ keyAltNames: "dataKey1" });
        const dek2 = await keyVaultClient.findOne({ keyAltNames: "dataKey2" });
        ```
        
    4.  Specify the automatically encrypted shared library and create a MongoClient.
        
        ```
        const extraOptions = {
          cryptSharedLibPath: "/root/lib/mongo_crypt_v1.so",
        };
        const encryptedClient = new MongoClient(uri, {
          autoEncryption: {
            kmsProviders: kmsProviders,
            keyVaultNamespace: keyVaultNamespace,
            bypassQueryAnalysis: true,
            keyVaultClient: unencryptedClient,
            extraOptions: extraOptions,
          },
        });
        await encryptedClient.connect();
        ```
        
    5.  Create a ClientEncryption object.
        
        ```
        const encryption = new ClientEncryption(unencryptedClient, {
          keyVaultNamespace,
          kmsProviders,
        });
        ```
        
6.  Insert a document that contains encrypted fields into the created encrypted collection.
    
    ```
    const patientId = 12345678;
    const medications = ["Atorvastatin", "Levothyroxine"];
    const indexedInsertPayload = await encryption.encrypt(patientId, {
      algorithm: "Indexed",
      keyId: dek1._id,
      contentionFactor: 1,
    });
    const unindexedInsertPayload = await encryption.encrypt(medications, {
      algorithm: "Unindexed",
      keyId: dek2._id,
    });
    const encryptedColl = encryptedClient.db(secretDB).collection(secretCollection);
    await encryptedColl.insertOne({
      firstName: "Jon",
      patientId: indexedInsertPayload,
      medications: unindexedInsertPayload,
    });
    ```
    
7.  Perform a field-level query on the created encrypted collection.
    
    ```
    const findPayload = await encryption.encrypt(patientId, {
      algorithm: "Indexed",
      keyId: dek1._id,
      queryType: "equality",
      contentionFactor: 1,
    });
    
    console.log(await encryptedColl.findOne({ patientId: findPayload }));
    ```
    
    The following figure shows a sample query result.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2642600271/p807454.png)
    
8.  Use the client that contains encrypted options to access encrypted fields. Otherwise, the encrypted fields cannot be accessed.
    
    Use the `unencryptedClient` client that is unencrypted for the field-level query.
    
    ```
    console.log(await unencryptedClient.db(secretDB).collection(secretCollection).findOne());
    ```
    
    The following figure shows a sample query result.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2642600271/p807482.png)
    
    You can also use mongosh to externally access the encrypted fields. This simulates access to the created encrypted collection without the client key.
    
    ```
    // Open another terminal session and use mongosh to connect to the MongoDB URI.
    mongosh ${MONGODB_URI}
    
    db.getSiblingDB("medicalRecords").patients.findOne()
    ```
    
    The following figure shows a sample result.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2642600271/p807485.png)
    

## **References**

-   [use CSFLE with node.js](https://www.mongodb.com/developer/languages/javascript/client-side-field-level-encryption-csfle-mongodb-node/)
    
-   [Node.js Driver: Download & install](https://www.mongodb.com/docs/drivers/node/current/quick-start/download-and-install/#std-label-node-quick-start-download-and-install)
    
-   [QE: basic](https://www.mongodb.com/docs/manual/core/queryable-encryption/)
    
-   [QE:explicit encryption](https://www.mongodb.com/docs/manual/core/queryable-encryption/tutorials/explicit-encryption/)
    
-   [QE: shared library](https://www.mongodb.com/docs/manual/core/queryable-encryption/reference/shared-library/#std-label-qe-reference-shared-library)
    
-   [QE: libmongocrypt](https://www.mongodb.com/docs/manual/core/queryable-encryption/reference/libmongocrypt/#std-label-qe-reference-libmongocrypt)
    
-   [QE: limitations](https://www.mongodb.com/docs/manual/core/queryable-encryption/reference/limitations/#std-label-qe-reference-encryption-limits)
    
-   [QE: supported operations](https://www.mongodb.com/docs/manual/core/queryable-encryption/reference/supported-operations/#std-label-qe-reference-automatic-encryption-supported-operations)
