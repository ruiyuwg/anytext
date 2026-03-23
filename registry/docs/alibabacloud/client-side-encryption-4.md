OSS client-side encryption lets you encrypt data locally before you upload it to OSS. This ensures that only key holders can decrypt the data and enhances data security during transmission and storage.

## Disclaimer

-   When you use client-side encryption, you must ensure the integrity and validity of the CMK. If the CMK is incorrectly used or lost due to improper maintenance, you are responsible for all losses and consequences caused by decryption failures.
    
-   When you copy or migrate encrypted data, you are responsible for the integrity and validity of object metadata. If the encrypted metadata is incorrect or lost due to improper maintenance, you are responsible for all losses and consequences caused by data decryption failures.
    

## **Scenarios**

-   Highly sensitive data: For data that contains highly sensitive information, such as personally identifiable information (PII), financial transaction records, or medical health data, you can encrypt the data before it leaves your local environment. This ensures that the raw data remains protected even if it is intercepted during transmission.
    
-   Compliance requirements: Some industries and regulations, such as HIPAA and GDPR, require strict encryption controls for data stored on third-party platforms. Client-side encryption helps meet these compliance requirements because you manage the keys. The keys are not transmitted over the network or directly controlled by the cloud service provider.
    
-   Stronger autonomous control: Businesses or developers may want full control over the encryption process, including selecting encryption algorithms and managing and rotating keys. Client-side encryption provides this level of control and ensures that only authorized users can decrypt and access the data.
    
-   Cross-region data migration security: When you migrate data from one region to another, client-side encryption ensures that the data remains encrypted before, during, and after the migration. This enhances data security during transmission over the Internet.
    

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    

## Background information

In client-side encryption, a random data key is generated for each object to perform symmetric encryption on the object. The client uses a CMK to encrypt the random data key. The encrypted data key is uploaded as part of the object metadata and stored in the OSS server. When an encrypted object is downloaded, the client uses the CMK to decrypt the random data key, and then uses the decrypted data key to decrypt the object. To ensure data security, the CMK is used only on the client and is not transmitted over the network or stored on the server.

**Important**

-   Client-side encryption supports multipart upload for files larger than 5 GB. When you use multipart upload, you must specify the total size of the file and the part size. The size of each part, except for the last one, must be the same. The part size must be a multiple of 16.
    
-   After you upload a file using client-side encryption, the encryption metadata is protected. You cannot use [CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db) to modify the object metadata.
    

## Encryption methods

You can use two types of CMKs for client-side encryption:

-   KMS-managed CMKs
    
    When you use a CMK managed in Key Management Service (KMS) for client-side encryption, you must provide OSS SDK for Python with the CMK ID.
    
-   RSA-based CMKs managed by yourself
    
    When you use a CMK managed by yourself for client-side encryption, you must send the public key and the private key of your CMK to OSS SDK for Python as parameters.
    

You can use the preceding encryption methods to prevent data leaks and protect your data on the client. Even if your data is leaked, the data cannot be decrypted by others.

## Encryption metadata

**Parameter**

**Description**

**Required**

x-oss-meta-client-side-encryption-key

The encrypted key. A Base64-encoded string that is encrypted with the master key.

Yes

x-oss-meta-client-side-encryption-start

The randomly generated initial value used to encrypt data. A Base64-encoded string that is encrypted with the master key.

Yes

x-oss-meta-client-side-encryption-cek-alg

The encryption algorithm for the data.

Yes

x-oss-meta-client-side-encryption-wrap-alg

The encryption algorithm for the data key.

Yes

x-oss-meta-client-side-encryption-matdesc

The description of the master key. This is in JSON format.

**Warning**

Configure a description for each master key. Save the mapping between the master key and its description. If you do not, you cannot change the master key for encryption after the data is encrypted.

No

x-oss-meta-client-side-encryption-unencrypted-content-length

The length of the data before encryption. This parameter is not generated if \`content-length\` is not specified.

No

x-oss-meta-client-side-encryption-unencrypted-content-md5

The MD5 hash of the data before encryption. This parameter is not generated if the MD5 hash is not specified.

No

x-oss-meta-client-side-encryption-data-size

If you encrypt a file using multipart upload, you must pass the total size of the large file during \`init\_multipart\`.

Yes (for multipart upload)

x-oss-meta-client-side-encryption-part-size

If you encrypt a file using multipart upload, you must pass the part size during \`init\_multipart\`.

**Important**

The part size must be a multiple of 16.

Yes (for multipart upload)

## OpenSSL tool description

OpenSSL 3.x tools generate PRIVATE\_PKCS8\_PEM by default. To generate PRIVATE\_PKCS1\_PEM, use the \-traditional option. For more information, see [OpenSSL](https://www.openssl.org/docs/man3.0/man1/openssl-genrsa.html).

## Create an encryption client

**Note**

When you create an RSA or KMS encryption client, you must use OSS Java SDK 3.9.1 or later. You must also import the Bouncy Castle Java library (bcprov-jdk15on) into your Maven project.

```
<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcprov-jdk15on</artifactId>
    <version>1.62</version>
</dependency>
```

If a `java.security.InvalidKeyException: Illegal key size or default parameters` error occurs at runtime, you must add the Oracle JCE files to your JRE environment.

Download the files that correspond to your JDK version. Unzip the files and place them in the jre/lib/security directory.

-   [JCE Unlimited Strength Jurisdiction Policy Files for JDK 6](https://www.oracle.com/java/technologies/jce-6-download.html)
    
-   [JCE Unlimited Strength Jurisdiction Policy Files for JDK 7](https://www.oracle.com/java/technologies/javase-jce7-downloads.html)
    
-   [JCE Unlimited Strength Jurisdiction Policy Files for JDK 8](https://www.oracle.com/java/technologies/javase-jce8-downloads.html)
    

### **Create an RSA encryption client**

Before you create an RSA encryption client, you must create an asymmetric KeyPair object. The OSS Java SDK provides methods to convert a private key string in PKCS#1 or PKCS#8 PEM format to an RSAPrivateKey object. It also provides a method to convert a public key string in X.509 PEM format to an RSAPublicKey object.

The conversion methods for these keys are as follows:

`RSAPrivateKey SimpleRSAEncryptionMaterials.getPrivateKeyFromPemPKCS1(String privateKeyStr);`

`RSAPrivateKey SimpleRSAEncryptionMaterials.getPrivateKeyFromPemPKCS8(String privateKeyStr);`

`RSAPublicKey SimpleRSAEncryptionMaterials.getPublicKeyFromPemX509(String publicKeyStr);`

The following code provides an example of how to create an RSA encryption client:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.crypto.SimpleRSAEncryptionMaterials;
import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.HashMap;
import java.util.Map;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The Endpoint is set to China (Hangzhou) as an example. Set it to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // You can use the following commands to generate private and public key PEM files. Then, copy the strings from the PEM files to the PRIVATE_PKCS1_PEM and PUBLIC_X509_PEM variables.
        // openssl genrsa -out private_key.pem 2048
        // openssl rsa -in private_key.pem -out rsa_public_key.pem -pubout

        // Specify your RSA private key string. You can use OpenSSL to generate it. The following value is an example of an RSA private key string.
        final String PRIVATE_PKCS1_PEM =
                "-----BEGIN RSA PRIVATE KEY-----\n" +
                "MIICWwIBAAKBgQCokfiAVXXf5ImFzKDw+XO/UByW6mse2QsIgz3ZwBtMNu59fR5z\n" +
                "ttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC5MFO1PByrE/MNd5AAfSVba93\n" +
                "I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MmR1EKib1Id8hpooY5xaQIDAQAB\n" +
                "AoGAOPUZgkNeEMinrw31U3b2JS5sepG6oDG2CKpPu8OtdZMaAkzEfVTJiVoJpP2Y\n" +
                "nPZiADhFW3e0ZAnak9BPsSsySRaSNmR465cG9tbqpXFKh9Rp/sCPo4Jq2n65yood\n" +
                "JBrnGr6/xhYvNa14sQ6xjjfSgRNBSXD1XXNF4kALwgZyCAECQQDV7t4bTx9FbEs5\n" +
                "36nAxPsPM6aACXaOkv6d9LXI7A0J8Zf42FeBV6RK0q7QG5iNNd1WJHSXIITUizVF\n" +
                "6aX5NnvFAkEAybeXNOwUvYtkgxF4s28s6gn11c5HZw4/a8vZm2tXXK/QfTQrJVXp\n" +
                "VwxmSr0FAajWAlcYN/fGkX1pWA041CKFVQJAG08ozzekeEpAuByTIOaEXgZr5MBQ\n" +
                "gBbHpgZNBl8Lsw9CJSQI15wGfv6yDiLXsH8FyC9TKs+d5Tv4Cvquk0efOQJAd9OC\n" +
                "lCKFs48hdyaiz9yEDsc57PdrvRFepVdj/gpGzD14mVerJbOiOF6aSV19ot27u4on\n" +
                "Td/3aifYs0CveHzFPQJAWb4LCDwqLctfzziG7/S7Z74gyq5qZF4FUElOAZkz123E\n" +
                "yZvADwuz/4aK0od0lX9c4Jp7Mo5vQ4TvdoBnPuGo****\n" +
                "-----END RSA PRIVATE KEY-----";
        // Specify your RSA public key string. You can use OpenSSL to generate it. The following value is an example of an RSA public key string.
        final String PUBLIC_X509_PEM =
                "-----BEGIN PUBLIC KEY-----\n" +
                "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCokfiAVXXf5ImFzKDw+XO/UByW\n" +
                "6mse2QsIgz3ZwBtMNu59fR5zttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC\n" +
                "5MFO1PByrE/MNd5AAfSVba93I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MnR\n" +
                "1EKib1Id8hpooY5xaQID****\n" +
                "-----END PUBLIC KEY-----";

        // Create an RSA key pair.
        RSAPrivateKey privateKey = SimpleRSAEncryptionMaterials.getPrivateKeyFromPemPKCS1(PRIVATE_PKCS1_PEM);
        RSAPublicKey publicKey = SimpleRSAEncryptionMaterials.getPublicKeyFromPemX509(PUBLIC_X509_PEM);
        KeyPair keyPair = new KeyPair(publicKey, privateKey);

        // Create a description for the RSA master key. The description cannot be modified after it is created. The master key description and the master key have a one-to-one mapping.
        // If all objects use the same master key, the description can be empty. However, you cannot change the master key later.
        // If the master key description is empty, the client cannot determine which master key was used to encrypt the file during decryption.
        // Configure a description for each master key. The client must save the mapping between the master key and its description. The server does not save this mapping.
        Map<String, String> matDesc = new HashMap<String, String>();
        matDesc.put("desc-key", "desc-value");

        // Create RSA encryption materials.
        SimpleRSAEncryptionMaterials encryptionMaterials = new SimpleRSAEncryptionMaterials(keyPair, matDesc);
        // To download and decrypt files encrypted with other RSA keys, add the other master keys and their descriptions to the encryption materials.
        // encryptionMaterials.addKeyPairDescMaterial(<otherKeyPair>, <otherKeyPairMatDesc>);

        // Create an RSA encryption client.
        // When the RSA encryption client is no longer needed, call the shutdown method to release its resources.
        OSSEncryptionClient ossEncryptionClient = new OSSEncryptionClientBuilder().
                build(endpoint, credentialsProvider, encryptionMaterials);

        try {
            // Add your business code here.
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossEncryptionClient != null) {
                ossEncryptionClient.shutdown();
            }
        }
    }
}
```

### **Create a KMS encryption client**

**Note**

When you create a KMS encryption client, you must import the Bouncy Castle Java library (bcprov-jdk15on) and the Alibaba Cloud KMS Java library (kms-transfer-client) into your Maven project.

```
<dependency>
    <groupId>com.aliyun.kms</groupId>
    <artifactId>kms-transfer-client</artifactId>
    <version>0.1.0</version>
    <scope>test</scope>
</dependency>
```

The following code provides an example of how to create a KMS encryption client:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.crypto.ContentCryptoMaterialRW;
import com.aliyun.oss.crypto.EncryptionMaterials;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.http.FormatType;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.http.ProtocolType;
import com.aliyuncs.kms.model.v20160120.DecryptRequest;
import com.aliyuncs.kms.model.v20160120.DecryptResponse;
import com.aliyuncs.kms.model.v20160120.EncryptRequest;
import com.aliyuncs.kms.model.v20160120.EncryptResponse;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The Endpoint is set to China (Hangzhou) as an example. Set it to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // The customer master key (CMK), for example, e1935511-cf88-1123-a0f8-1be8d251****.
        String cmk = "e1935511-cf88-1123-a0f8-1be8d251****";
        // The region where the CMK is located, for example, cn-hangzhou.
        String region = "cn-hangzhou";


        // Create a description for the KMS master key. The description cannot be modified after it is created. The master key description, region, and CMK have a one-to-one mapping.
        // If all objects use the same CMK, the description can be empty. However, you cannot change the master key later.
        // If the master key description is empty, the client cannot determine which master key was used to encrypt the file during decryption.
        // Configure a description for each master key. The client must save the mapping between the master key and its description. The server does not save this mapping.
        Map<String, String> matDesc = new HashMap<String, String>();
        matDesc.put("desc-key", "desc-value");

        // Create KMS encryption materials.
        KmsEncryptionMaterialsV3 encryptionMaterials = new KmsEncryptionMaterialsV3(region, cmk, matDesc);

        encryptionMaterials.setKmsCredentialsProvider(credentialsProvider);

        // To download and decrypt files encrypted with other CMKs, add the region names and descriptions of the CMKs to the KMS encryption materials.
        // encryptionMaterials.addKmsDescMaterial(<otherKmsRegion>, <otherKmsMatDesc>);
        // To download and decrypt files encrypted with other CMKs when the KMS account is different from the OSS client account, add the KMS region name, credentials, and description to the encryption materials.
        // encryptionMaterials.addKmsDescMaterial(<otherKmsRegion>, <otherKmsCredentialsProvider>, <otherKmsMatDesc>);

        // Create an encryption client.
        // When the encryption client is no longer needed, call the shutdown method to release its resources.
        OSSEncryptionClient ossEncryptionClient = new OSSEncryptionClientBuilder().
                build(endpoint, credentialsProvider, encryptionMaterials);

        try {
            // Add your business code here.
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossEncryptionClient != null) {
                ossEncryptionClient.shutdown();
            }
        }
    }
}


class KmsEncryptionMaterialsV3 implements EncryptionMaterials {
    private static final String KEY_WRAP_ALGORITHM = "KMS/ALICLOUD";
    private String region;
    private String cmk;
    CredentialsProvider credentialsProvider;

    private final Map<String, String> desc;
    private final LinkedHashMap<KmsEncryptionMaterialsV3.KmsClientSuite, Map<String, String>> kmsDescMaterials =
            new LinkedHashMap<KmsEncryptionMaterialsV3.KmsClientSuite, Map<String, String>>();

    public KmsEncryptionMaterialsV3(String region, String cmk) {
        assertParameterNotNull(region, "kms region");
        assertParameterNotNull(cmk, "kms cmk");
        this.region = region;
        this.cmk = cmk;
        this.desc = new HashMap<String, String>();
    }

    public KmsEncryptionMaterialsV3(String region, String cmk, Map<String, String> desc) {
        assertParameterNotNull(region, "kms region");
        assertParameterNotNull(region, "kms cmk");
        this.region = region;
        this.cmk = cmk;
        this.desc = (desc == null) ? new HashMap<String, String>() : new HashMap<String, String>(desc);
    }

    private final class KmsClientSuite {
        private String region;
        private CredentialsProvider credentialsProvider;
        KmsClientSuite(String region, CredentialsProvider credentialsProvider) {
            this.region = region;
            this.credentialsProvider = credentialsProvider;
        }
    }

    public void setKmsCredentialsProvider(CredentialsProvider credentialsProvider) {
        this.credentialsProvider = credentialsProvider;
        kmsDescMaterials.put(new KmsEncryptionMaterialsV3.KmsClientSuite(region, credentialsProvider), desc);
    }

    private DefaultAcsClient createKmsClient(String region, CredentialsProvider credentialsPorvider) {
        Credentials credentials = credentialsPorvider.getCredentials();
        IClientProfile profile = DefaultProfile.getProfile(region, credentials.getAccessKeyId(),
                credentials.getSecretAccessKey(), credentials.getSecurityToken());
        return new KmsTransferAcsClient(profile);
    }

    private EncryptResponse encryptPlainText(String keyId, String plainText) throws ClientException {
        DefaultAcsClient kmsClient = createKmsClient(region, credentialsProvider);
        final EncryptRequest encReq = new EncryptRequest();
        encReq.setSysProtocol(ProtocolType.HTTPS);
        encReq.setAcceptFormat(FormatType.JSON);
        encReq.setSysMethod(MethodType.POST);
        encReq.setKeyId(keyId);
        encReq.setPlaintext(plainText);

        final EncryptResponse encResponse;
        try {
            encResponse = kmsClient.getAcsResponse(encReq);
        } catch (Exception e) {
            throw new ClientException("The KMS client failed to encrypt data. " + e.getMessage(), e);
        }
        return encResponse;
    }

    private DecryptResponse decryptCipherBlob(KmsEncryptionMaterialsV3.KmsClientSuite kmsClientSuite, String cipherBlob)
            throws ClientException {
        final DefaultAcsClient kmsClient = createKmsClient(kmsClientSuite.region, kmsClientSuite.credentialsProvider);
        final DecryptRequest decReq = new DecryptRequest();
        decReq.setSysProtocol(ProtocolType.HTTPS);
        decReq.setAcceptFormat(FormatType.JSON);
        decReq.setSysMethod(MethodType.POST);
        decReq.setCiphertextBlob(cipherBlob);

        final DecryptResponse decResponse;
        try {
            decResponse = kmsClient.getAcsResponse(decReq);
        } catch (Exception e) {
            throw new ClientException("The KMS client failed to decrypt data. " + e.getMessage(), e);
        }
        return decResponse;
    }

    public void addKmsDescMaterial(String region, Map<String, String> description) {
        addKmsDescMaterial(region, credentialsProvider, description);
    }

    public synchronized void addKmsDescMaterial(String region, CredentialsProvider credentialsProvider, Map<String, String> description) {
        assertParameterNotNull(region, "region");
        assertParameterNotNull(credentialsProvider, "credentialsProvider");
        KmsEncryptionMaterialsV3.KmsClientSuite kmsClientSuite = new KmsEncryptionMaterialsV3.KmsClientSuite(region, credentialsProvider);
        if (description != null) {
            kmsDescMaterials.put(kmsClientSuite, new HashMap<String, String>(description));
        } else {
            kmsDescMaterials.put(kmsClientSuite, new HashMap<String, String>());
        }
    }

    private KmsEncryptionMaterialsV3.KmsClientSuite findKmsClientSuiteByDescription(Map<String, String> desc) {
        if (desc == null) {
            return null;
        }
        for (Map.Entry<KmsEncryptionMaterialsV3.KmsClientSuite, Map<String, String>> entry : kmsDescMaterials.entrySet()) {
            if (desc.equals(entry.getValue())) {
                return entry.getKey();
            }
        }
        return null;
    }

    private <K, V> Map.Entry<K, V> getTailByReflection(LinkedHashMap<K, V> map)
            throws NoSuchFieldException, IllegalAccessException {
        Field tail = map.getClass().getDeclaredField("tail");
        tail.setAccessible(true);
        return (Map.Entry<K, V>) tail.get(map);
    }

    @Override
    public void encryptCEK(ContentCryptoMaterialRW contentMaterialRW) {
        try {
            assertParameterNotNull(contentMaterialRW, "contentMaterialRW");
            assertParameterNotNull(contentMaterialRW.getIV(), "contentMaterialRW#getIV");
            assertParameterNotNull(contentMaterialRW.getCEK(), "contentMaterialRW#getCEK");

            byte[] iv = contentMaterialRW.getIV();
            EncryptResponse encryptresponse = encryptPlainText(cmk, BinaryUtil.toBase64String(iv));
            byte[] encryptedIV = BinaryUtil.fromBase64String(encryptresponse.getCiphertextBlob());

            SecretKey cek = contentMaterialRW.getCEK();
            encryptresponse = encryptPlainText(cmk, BinaryUtil.toBase64String(cek.getEncoded()));
            byte[] encryptedCEK = BinaryUtil.fromBase64String(encryptresponse.getCiphertextBlob());

            contentMaterialRW.setEncryptedCEK(encryptedCEK);
            contentMaterialRW.setEncryptedIV(encryptedIV);
            contentMaterialRW.setKeyWrapAlgorithm(KEY_WRAP_ALGORITHM);
            contentMaterialRW.setMaterialsDescription(desc);
        } catch (Exception e) {
            throw new ClientException("Failed to encrypt the CEK and IV with KMS. "
                    + "Check your CMK, region, AccessKey ID, and AccessKey secret." + e.getMessage(), e);
        }
    }

    @Override
    public void decryptCEK(ContentCryptoMaterialRW contentMaterialRW) {
        assertParameterNotNull(contentMaterialRW, "ContentCryptoMaterialRW");
        assertParameterNotNull(contentMaterialRW.getEncryptedCEK(), "ContentCryptoMaterialRW#getEncryptedCEK");
        assertParameterNotNull(contentMaterialRW.getEncryptedIV(), "ContentCryptoMaterialRW#getEncryptedIV");
        assertParameterNotNull(contentMaterialRW.getKeyWrapAlgorithm(), "ContentCryptoMaterialRW#getKeyWrapAlgorithm");

        if (!contentMaterialRW.getKeyWrapAlgorithm().toLowerCase().equals(KEY_WRAP_ALGORITHM.toLowerCase())) {
            throw new ClientException(
                    "Unrecognized object key wrap algorithm: " + contentMaterialRW.getKeyWrapAlgorithm());
        }

        try {
            KmsEncryptionMaterialsV3.KmsClientSuite kmsClientSuite = findKmsClientSuiteByDescription(contentMaterialRW.getMaterialsDescription());
            if (kmsClientSuite == null) {
                Map.Entry<KmsEncryptionMaterialsV3.KmsClientSuite, Map<String, String>> entry = getTailByReflection(kmsDescMaterials);
                kmsClientSuite = entry.getKey();
            }

            DecryptResponse decryptIvResp = decryptCipherBlob(kmsClientSuite,
                    BinaryUtil.toBase64String(contentMaterialRW.getEncryptedIV()));
            byte[] iv = BinaryUtil.fromBase64String(decryptIvResp.getPlaintext());

            DecryptResponse decryptCEKResp = decryptCipherBlob(kmsClientSuite,
                    BinaryUtil.toBase64String(contentMaterialRW.getEncryptedCEK()));
            byte[] cekBytes = BinaryUtil.fromBase64String(decryptCEKResp.getPlaintext());
            SecretKey cek = new SecretKeySpec(cekBytes, "");

            contentMaterialRW.setCEK(cek);
            contentMaterialRW.setIV(iv);
        } catch (Exception e) {
            throw new ClientException("Unable to decrypt the content-secured key and IV. "
                    + "Check your KMS region and materials description." + e.getMessage(), e);
        }
    }

    private void assertParameterNotNull(Object parameterValue, String errorMessage) {
        if (parameterValue == null)
            throw new IllegalArgumentException(errorMessage);
    }
}
```

The following sections provide complete examples of how to use a user-managed master key (RSA) for scenarios such as uploading and downloading a file, multipart upload, and range download.

**Note**

The only difference between using a KMS master key and an RSA master key is how you create the OSSEncryptionClient.

## Upload and download a file

The following code provides an example of how to upload and download an object using an RSA master key:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.crypto.SimpleRSAEncryptionMaterials;
import com.aliyun.oss.model.OSSObject;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.InputStreamReader;
import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.HashMap;
import java.util.Map;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The Endpoint is set to China (Hangzhou) as an example. Set it to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampleobject.txt";
        String content = "Hello OSS!";

        // Specify your RSA private key string. You can use OpenSSL to generate it. The following value is an example of an RSA private key string.
        final String PRIVATE_PKCS1_PEM =
                "-----BEGIN RSA PRIVATE KEY-----\n" +
                "MIICWwIBAAKBgQCokfiAVXXf5ImFzKDw+XO/UByW6mse2QsIgz3ZwBtMNu59fR5z\n" +
                "ttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC5MFO1PByrE/MNd5AAfSVba93\n" +
                "I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MmR1EKib1Id8hpooY5xaQIDAQAB\n" +
                "AoGAOPUZgkNeEMinrw31U3b2JS5sepG6oDG2CKpPu8OtdZMaAkzEfVTJiVoJpP2Y\n" +
                "nPZiADhFW3e0ZAnak9BPsSsySRaSNmR465cG9tbqpXFKh9Rp/sCPo4Jq2n65yood\n" +
                "JBrnGr6/xhYvNa14sQ6xjjfSgRNBSXD1XXNF4kALwgZyCAECQQDV7t4bTx9FbEs5\n" +
                "36nAxPsPM6aACXaOkv6d9LXI7A0J8Zf42FeBV6RK0q7QG5iNNd1WJHSXIITUizVF\n" +
                "6aX5NnvFAkEAybeXNOwUvYtkgxF4s28s6gn11c5HZw4/a8vZm2tXXK/QfTQrJVXp\n" +
                "VwxmSr0FAajWAlcYN/fGkX1pWA041CKFVQJAG08ozzekeEpAuByTIOaEXgZr5MBQ\n" +
                "gBbHpgZNBl8Lsw9CJSQI15wGfv6yDiLXsH8FyC9TKs+d5Tv4Cvquk0efOQJAd9OC\n" +
                "lCKFs48hdyaiz9yEDsc57PdrvRFepVdj/gpGzD14mVerJbOiOF6aSV19ot27u4on\n" +
                "Td/3aifYs0CveHzFPQJAWb4LCDwqLctfzziG7/S7Z74gyq5qZF4FUElOAZkz123E\n" +
                "yZvADwuz/4aK0od0lX9c4Jp7Mo5vQ4TvdoBnPuGo****\n" +
                "-----END RSA PRIVATE KEY-----";
        // Specify your RSA public key string. You can use OpenSSL to generate it. The following value is an example of an RSA public key string.
        final String PUBLIC_X509_PEM =
                "-----BEGIN PUBLIC KEY-----\n" +
                "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCokfiAVXXf5ImFzKDw+XO/UByW\n" +
                "6mse2QsIgz3ZwBtMNu59fR5zttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC\n" +
                "5MFO1PByrE/MNd5AAfSVba93I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MnR\n" +
                "1EKib1Id8hpooY5xaQID****\n" +
                "-----END PUBLIC KEY-----";

        // Create an RSA key pair.
        RSAPrivateKey privateKey = SimpleRSAEncryptionMaterials.getPrivateKeyFromPemPKCS1(PRIVATE_PKCS1_PEM);
        RSAPublicKey publicKey = SimpleRSAEncryptionMaterials.getPublicKeyFromPemX509(PUBLIC_X509_PEM);
        KeyPair keyPair = new KeyPair(publicKey, privateKey);

        // Create a description for the RSA master key. The description cannot be modified after it is created. The master key description and the master key have a one-to-one mapping.
        // If all objects use the same master key, the description can be empty. However, you cannot change the master key later.
        // If the master key description is empty, the client cannot determine which master key was used to encrypt the file during decryption.
        // Configure a description for each master key. The client must save the mapping between the master key and its description. The server does not save this mapping.
        Map<String, String> matDesc = new HashMap<String, String>();
        matDesc.put("desc-key", "desc-value");

        // Create RSA encryption materials.
        SimpleRSAEncryptionMaterials encryptionMaterials = new SimpleRSAEncryptionMaterials(keyPair, matDesc);
        // To download and decrypt files encrypted with other RSA keys, add the other master keys and their descriptions to the encryption materials.
        // encryptionMaterials.addKeyPairDescMaterial(<otherKeyPair>, <otherKeyPairMatDesc>);

        // Create an encryption client.
        // When the encryption client is no longer needed, call the shutdown method to release its resources.
        OSSEncryptionClient ossEncryptionClient = new OSSEncryptionClientBuilder().
                build(endpoint, credentialsProvider, encryptionMaterials);

        try {
            // Encrypt and upload the file.
            ossEncryptionClient.putObject(bucketName, objectName, new ByteArrayInputStream(content.getBytes()));

            // The file is automatically decrypted during download.
            OSSObject ossObject = ossEncryptionClient.getObject(bucketName, objectName);
            BufferedReader reader = new BufferedReader(new InputStreamReader(ossObject.getObjectContent()));
            StringBuffer buffer = new StringBuffer();
            String line;
            while ((line = reader.readLine()) != null) {
                buffer.append(line);
            }
            reader.close();

            // Check if the decrypted content matches the uploaded plaintext.
            System.out.println("Put plain text: " + content);
            System.out.println("Get and decrypted text: " + buffer.toString());
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossEncryptionClient != null) {
                ossEncryptionClient.shutdown();
            }
        }
    }
}
```

## Multipart upload

The following code provides an example of how to perform a multipart upload using an RSA master key:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.crypto.MultipartUploadCryptoContext;
import com.aliyun.oss.crypto.SimpleRSAEncryptionMaterials;
import com.aliyun.oss.model.*;

import java.io.*;
import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The Endpoint is set to China (Hangzhou) as an example. Set it to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampleobject.txt";
        // The file path. For example, D:\\localpath\\examplefile.txt
        String localFile = "D:\\localpath\\examplefile.txt";

        // Specify your RSA private key string. You can use OpenSSL to generate it. The following value is an example of an RSA private key string.
        final String PRIVATE_PKCS1_PEM =
                "-----BEGIN RSA PRIVATE KEY-----\n" +
                "MIICWwIBAAKBgQCokfiAVXXf5ImFzKDw+XO/UByW6mse2QsIgz3ZwBtMNu59fR5z\n" +
                "ttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC5MFO1PByrE/MNd5AAfSVba93\n" +
                "I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MmR1EKib1Id8hpooY5xaQIDAQAB\n" +
                "AoGAOPUZgkNeEMinrw31U3b2JS5sepG6oDG2CKpPu8OtdZMaAkzEfVTJiVoJpP2Y\n" +
                "nPZiADhFW3e0ZAnak9BPsSsySRaSNmR465cG9tbqpXFKh9Rp/sCPo4Jq2n65yood\n" +
                "JBrnGr6/xhYvNa14sQ6xjjfSgRNBSXD1XXNF4kALwgZyCAECQQDV7t4bTx9FbEs5\n" +
                "36nAxPsPM6aACXaOkv6d9LXI7A0J8Zf42FeBV6RK0q7QG5iNNd1WJHSXIITUizVF\n" +
                "6aX5NnvFAkEAybeXNOwUvYtkgxF4s28s6gn11c5HZw4/a8vZm2tXXK/QfTQrJVXp\n" +
                "VwxmSr0FAajWAlcYN/fGkX1pWA041CKFVQJAG08ozzekeEpAuByTIOaEXgZr5MBQ\n" +
                "gBbHpgZNBl8Lsw9CJSQI15wGfv6yDiLXsH8FyC9TKs+d5Tv4Cvquk0efOQJAd9OC\n" +
                "lCKFs48hdyaiz9yEDsc57PdrvRFepVdj/gpGzD14mVerJbOiOF6aSV19ot27u4on\n" +
                "Td/3aifYs0CveHzFPQJAWb4LCDwqLctfzziG7/S7Z74gyq5qZF4FUElOAZkz123E\n" +
                "yZvADwuz/4aK0od0lX9c4Jp7Mo5vQ4TvdoBnPuGo****\n" +
                "-----END RSA PRIVATE KEY-----";
        // Specify your RSA public key string. You can use OpenSSL to generate it. The following value is an example of an RSA public key string.
        final String PUBLIC_X509_PEM =
                "-----BEGIN PUBLIC KEY-----\n" +
                "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCokfiAVXXf5ImFzKDw+XO/UByW\n" +
                "6mse2QsIgz3ZwBtMNu59fR5zttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC\n" +
                "5MFO1PByrE/MNd5AAfSVba93I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MnR\n" +
                "1EKib1Id8hpooY5xaQID****\n" +
                "-----END PUBLIC KEY-----";

        // Create an RSA key pair.
        RSAPrivateKey privateKey = SimpleRSAEncryptionMaterials.getPrivateKeyFromPemPKCS1(PRIVATE_PKCS1_PEM);
        RSAPublicKey publicKey = SimpleRSAEncryptionMaterials.getPublicKeyFromPemX509(PUBLIC_X509_PEM);
        KeyPair keyPair = new KeyPair(publicKey, privateKey);

        // Create a description for the RSA master key. The description cannot be modified after it is created. The master key description and the master key have a one-to-one mapping.
        // If all objects use the same master key, the description can be empty. However, you cannot change the master key later.
        // If the master key description is empty, the client cannot determine which master key was used to encrypt the file during decryption.
        // Configure a description for each master key. The client must save the mapping between the master key and its description. The server does not save this mapping.
        Map<String, String> matDesc = new HashMap<String, String>();
        matDesc.put("desc-key", "desc-value");

        // Create RSA encryption materials.
        SimpleRSAEncryptionMaterials encryptionMaterials = new SimpleRSAEncryptionMaterials(keyPair, matDesc);
        // To download and decrypt files encrypted with other RSA keys, add the other master keys and their descriptions to the encryption materials.
        // encryptionMaterials.addKeyPairDescMaterial(<otherKeyPair>, <otherKeyPairMatDesc>);

        // Create an encryption client.
        // When the encryption client is no longer needed, call the shutdown method to release its resources.
        OSSEncryptionClient ossEncryptionClient = new OSSEncryptionClientBuilder().
                build(endpoint, credentialsProvider, encryptionMaterials);

        try {
            // Create a MultipartUploadCryptoContext object and specify the part size and file size. The part size must be a multiple of 16.
            File file = new File(localFile);
            long fileLength = file.length();
            final long partSize = 100 * 1024L;   // 100K
            MultipartUploadCryptoContext context = new MultipartUploadCryptoContext();
            context.setPartSize(partSize);
            context.setDataSize(fileLength);

            // Initialize a multipart upload event.
            InitiateMultipartUploadRequest initiateMultipartUploadRequest = new InitiateMultipartUploadRequest(bucketName, objectName);
            // Pass the MultipartUploadCryptoContext object.
            InitiateMultipartUploadResult upresult = ossEncryptionClient.initiateMultipartUpload(initiateMultipartUploadRequest, context);
            String uploadId = upresult.getUploadId();

            // Create a list of PartETags. A PartETag consists of the ETag and part number of a part.
            List<PartETag> partETags =  new ArrayList<PartETag>();
            int partCount = (int) (fileLength / partSize);
            if (fileLength % partSize != 0) {
                partCount++;
            }

            // Upload parts in a loop.
            for (int i = 0; i < partCount; i++) {
                long startPos = i * partSize;
                long curPartSize = (i + 1 == partCount) ? (fileLength - startPos) : partSize;
                InputStream instream = new FileInputStream(file);
                instream.skip(startPos);
                UploadPartRequest uploadPartRequest = new UploadPartRequest();
                uploadPartRequest.setBucketName(bucketName);
                uploadPartRequest.setKey(objectName);
                uploadPartRequest.setUploadId(uploadId);
                uploadPartRequest.setInputStream(instream);
                uploadPartRequest.setPartSize(curPartSize);
                uploadPartRequest.setPartNumber( i + 1);
                // Pass the MultipartUploadCryptoContext object.
                UploadPartResult uploadPartResult = ossEncryptionClient.uploadPart(uploadPartRequest, context);
                partETags.add(uploadPartResult.getPartETag());
            }

            // Complete the multipart upload.
            CompleteMultipartUploadRequest completeMultipartUploadRequest =
                    new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);
            ossEncryptionClient.completeMultipartUpload(completeMultipartUploadRequest);
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossEncryptionClient != null) {
                ossEncryptionClient.shutdown();
            }
        }
    }
}
```

## Resumable upload

The following code provides an example of how to perform a resumable upload using an RSA master key:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.crypto.SimpleRSAEncryptionMaterials;
import com.aliyun.oss.model.*;
import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.HashMap;
import java.util.Map;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The Endpoint is set to China (Hangzhou) as an example. Set it to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampleobject.txt";
        // The file path. For example, D:\\localpath\\examplefile.txt
        String localFile = "D:\\localpath\\examplefile.txt";

        // Specify your RSA private key string. You can use OpenSSL to generate it. The following value is an example of an RSA private key string.
        final String PRIVATE_PKCS1_PEM =
                "-----BEGIN RSA PRIVATE KEY-----\n" +
                "MIICWwIBAAKBgQCokfiAVXXf5ImFzKDw+XO/UByW6mse2QsIgz3ZwBtMNu59fR5z\n" +
                "ttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC5MFO1PByrE/MNd5AAfSVba93\n" +
                "I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MmR1EKib1Id8hpooY5xaQIDAQAB\n" +
                "AoGAOPUZgkNeEMinrw31U3b2JS5sepG6oDG2CKpPu8OtdZMaAkzEfVTJiVoJpP2Y\n" +
                "nPZiADhFW3e0ZAnak9BPsSsySRaSNmR465cG9tbqpXFKh9Rp/sCPo4Jq2n65yood\n" +
                "JBrnGr6/xhYvNa14sQ6xjjfSgRNBSXD1XXNF4kALwgZyCAECQQDV7t4bTx9FbEs5\n" +
                "36nAxPsPM6aACXaOkv6d9LXI7A0J8Zf42FeBV6RK0q7QG5iNNd1WJHSXIITUizVF\n" +
                "6aX5NnvFAkEAybeXNOwUvYtkgxF4s28s6gn11c5HZw4/a8vZm2tXXK/QfTQrJVXp\n" +
                "VwxmSr0FAajWAlcYN/fGkX1pWA041CKFVQJAG08ozzekeEpAuByTIOaEXgZr5MBQ\n" +
                "gBbHpgZNBl8Lsw9CJSQI15wGfv6yDiLXsH8FyC9TKs+d5Tv4Cvquk0efOQJAd9OC\n" +
                "lCKFs48hdyaiz9yEDsc57PdrvRFepVdj/gpGzD14mVerJbOiOF6aSV19ot27u4on\n" +
                "Td/3aifYs0CveHzFPQJAWb4LCDwqLctfzziG7/S7Z74gyq5qZF4FUElOAZkz123E\n" +
                "yZvADwuz/4aK0od0lX9c4Jp7Mo5vQ4TvdoBnPuGo****\n" +
                "-----END RSA PRIVATE KEY-----";
        // Specify your RSA public key string. You can use OpenSSL to generate it. The following value is an example of an RSA public key string.
        final String PUBLIC_X509_PEM =
                "-----BEGIN PUBLIC KEY-----\n" +
                "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCokfiAVXXf5ImFzKDw+XO/UByW\n" +
                "6mse2QsIgz3ZwBtMNu59fR5zttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC\n" +
                "5MFO1PByrE/MNd5AAfSVba93I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MnR\n" +
                "1EKib1Id8hpooY5xaQID****\n" +
                "-----END PUBLIC KEY-----";

        // Create an RSA key pair.
        RSAPrivateKey privateKey = SimpleRSAEncryptionMaterials.getPrivateKeyFromPemPKCS1(PRIVATE_PKCS1_PEM);
        RSAPublicKey publicKey = SimpleRSAEncryptionMaterials.getPublicKeyFromPemX509(PUBLIC_X509_PEM);
        KeyPair keyPair = new KeyPair(publicKey, privateKey);

        // Create a description for the RSA master key. The description cannot be modified after it is created. The master key description and the master key have a one-to-one mapping.
        // If all objects use the same master key, the description can be empty. However, you cannot change the master key later.
        // If the master key description is empty, the client cannot determine which master key was used to encrypt the file during decryption.
        // Configure a description for each master key. The client must save the mapping between the master key and its description. The server does not save this mapping.
        Map<String, String> matDesc = new HashMap<String, String>();
        matDesc.put("desc-key", "desc-value");

        // Create RSA encryption materials.
        SimpleRSAEncryptionMaterials encryptionMaterials = new SimpleRSAEncryptionMaterials(keyPair, matDesc);
        // To download and decrypt files encrypted with other RSA keys, add the other master keys and their descriptions to the encryption materials.
        // encryptionMaterials.addKeyPairDescMaterial(<otherKeyPair>, <otherKeyPairMatDesc>);

        // Create an encryption client.
        // When the encryption client is no longer needed, call the shutdown method to release its resources.
        OSSEncryptionClient ossEncryptionClient = new OSSEncryptionClientBuilder().
                build(endpoint, credentialsProvider, encryptionMaterials);

        try {
            // Create an UploadFileRequest object.
            UploadFileRequest uploadFileRequest = new UploadFileRequest(bucketName, objectName);

            // Set the path of the file to upload.
            uploadFileRequest.setUploadFile(localFile);
            // Specify the part size for the upload. The value must be in the range of 100 KB to 5 GB. The default value is 1/10,000 of the file size.
            uploadFileRequest.setPartSize(100 * 1024);
            // Enable resumable upload. This feature is disabled by default.
            uploadFileRequest.setEnableCheckpoint(true);
            // Set the checkpoint file. If not specified, the default name is localfile + ".ucp" in the same directory as the local file.
            // The upload progress is saved to this file. If a part fails to upload, the upload resumes from the recorded breakpoint when you try again. The file is deleted after the upload is complete.
            uploadFileRequest.setCheckpointFile("test-upload.ucp");

            // Start the resumable upload.
            ossEncryptionClient.uploadFile(uploadFileRequest);
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossEncryptionClient != null) {
                ossEncryptionClient.shutdown();
            }
        }
    }
}
```

## Resumable download

The following code provides an example of how to perform a resumable download using an RSA master key:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.crypto.SimpleRSAEncryptionMaterials;
import com.aliyun.oss.model.*;
import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.HashMap;
import java.util.Map;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The Endpoint is set to China (Hangzhou) as an example. Set it to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampleobject.txt";

        // Specify your RSA private key string. You can use OpenSSL to generate it. The following value is an example of an RSA private key string.
        final String PRIVATE_PKCS1_PEM =
                "-----BEGIN RSA PRIVATE KEY-----\n" +
                "MIICWwIBAAKBgQCokfiAVXXf5ImFzKDw+XO/UByW6mse2QsIgz3ZwBtMNu59fR5z\n" +
                "ttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC5MFO1PByrE/MNd5AAfSVba93\n" +
                "I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MmR1EKib1Id8hpooY5xaQIDAQAB\n" +
                "AoGAOPUZgkNeEMinrw31U3b2JS5sepG6oDG2CKpPu8OtdZMaAkzEfVTJiVoJpP2Y\n" +
                "nPZiADhFW3e0ZAnak9BPsSsySRaSNmR465cG9tbqpXFKh9Rp/sCPo4Jq2n65yood\n" +
                "JBrnGr6/xhYvNa14sQ6xjjfSgRNBSXD1XXNF4kALwgZyCAECQQDV7t4bTx9FbEs5\n" +
                "36nAxPsPM6aACXaOkv6d9LXI7A0J8Zf42FeBV6RK0q7QG5iNNd1WJHSXIITUizVF\n" +
                "6aX5NnvFAkEAybeXNOwUvYtkgxF4s28s6gn11c5HZw4/a8vZm2tXXK/QfTQrJVXp\n" +
                "VwxmSr0FAajWAlcYN/fGkX1pWA041CKFVQJAG08ozzekeEpAuByTIOaEXgZr5MBQ\n" +
                "gBbHpgZNBl8Lsw9CJSQI15wGfv6yDiLXsH8FyC9TKs+d5Tv4Cvquk0efOQJAd9OC\n" +
                "lCKFs48hdyaiz9yEDsc57PdrvRFepVdj/gpGzD14mVerJbOiOF6aSV19ot27u4on\n" +
                "Td/3aifYs0CveHzFPQJAWb4LCDwqLctfzziG7/S7Z74gyq5qZF4FUElOAZkz123E\n" +
                "yZvADwuz/4aK0od0lX9c4Jp7Mo5vQ4TvdoBnPuGo****\n" +
                "-----END RSA PRIVATE KEY-----";
        // Specify your RSA public key string. You can use OpenSSL to generate it. The following value is an example of an RSA public key string.
        final String PUBLIC_X509_PEM =
                "-----BEGIN PUBLIC KEY-----\n" +
                "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCokfiAVXXf5ImFzKDw+XO/UByW\n" +
                "6mse2QsIgz3ZwBtMNu59fR5zttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC\n" +
                "5MFO1PByrE/MNd5AAfSVba93I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MnR\n" +
                "1EKib1Id8hpooY5xaQID****\n" +
                "-----END PUBLIC KEY-----";

        // Create an RSA key pair.
        RSAPrivateKey privateKey = SimpleRSAEncryptionMaterials.getPrivateKeyFromPemPKCS1(PRIVATE_PKCS1_PEM);
        RSAPublicKey publicKey = SimpleRSAEncryptionMaterials.getPublicKeyFromPemX509(PUBLIC_X509_PEM);
        KeyPair keyPair = new KeyPair(publicKey, privateKey);

        // Create a description for the RSA master key. The description cannot be modified after it is created. The master key description and the master key have a one-to-one mapping.
        // If all objects use the same master key, the description can be empty. However, you cannot change the master key later.
        // If the master key description is empty, the client cannot determine which master key was used to encrypt the file during decryption.
        // Configure a description for each master key. The client must save the mapping between the master key and its description. The server does not save this mapping.
        Map<String, String> matDesc = new HashMap<String, String>();
        matDesc.put("desc-key", "desc-value");

        // Create RSA encryption materials.
        SimpleRSAEncryptionMaterials encryptionMaterials = new SimpleRSAEncryptionMaterials(keyPair, matDesc);
        // To download and decrypt files encrypted with other RSA keys, add the other master keys and their descriptions to the encryption materials.
        // encryptionMaterials.addKeyPairDescMaterial(<otherKeyPair>, <otherKeyPairMatDesc>);

        // Create an encryption client.
        // When the encryption client is no longer needed, call the shutdown method to release its resources.
        OSSEncryptionClient ossEncryptionClient = new OSSEncryptionClientBuilder().
                build(endpoint, credentialsProvider, encryptionMaterials);

        try {
            // Initiate a download request. Specify 10 concurrent download tasks and enable resumable download.
            DownloadFileRequest downloadFileRequest = new DownloadFileRequest(bucketName, objectName);
            downloadFileRequest.setDownloadFile("<yourDownloadFile>");
            downloadFileRequest.setPartSize(1 * 1024 * 1024);
            downloadFileRequest.setTaskNum(10);
            downloadFileRequest.setEnableCheckpoint(true);
            downloadFileRequest.setCheckpointFile("<yourCheckpointFile>");

            // Start the resumable download.
            DownloadFileResult downloadRes = ossEncryptionClient.downloadFile(downloadFileRequest);
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossEncryptionClient != null) {
                ossEncryptionClient.shutdown();
            }
        }
    }
}
```

## Range download

The following code provides an example of how to perform a range download and decrypt the downloaded data using an RSA master key:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.crypto.SimpleRSAEncryptionMaterials;
import com.aliyun.oss.model.*;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.InputStreamReader;
import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.HashMap;
import java.util.Map;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The Endpoint is set to China (Hangzhou) as an example. Set it to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampleobject.txt";
        String content = "test-range-get-content-82042795hlnf12s8yhfs976y2nfoshhnsdfsf235bvsmnhtskbcfd!";

        // Specify your RSA private key string. You can use OpenSSL to generate it. The following value is an example of an RSA private key string.
        final String PRIVATE_PKCS1_PEM =
                "-----BEGIN RSA PRIVATE KEY-----\n" +
                "MIICWwIBAAKBgQCokfiAVXXf5ImFzKDw+XO/UByW6mse2QsIgz3ZwBtMNu59fR5z\n" +
                "ttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC5MFO1PByrE/MNd5AAfSVba93\n" +
                "I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MmR1EKib1Id8hpooY5xaQIDAQAB\n" +
                "AoGAOPUZgkNeEMinrw31U3b2JS5sepG6oDG2CKpPu8OtdZMaAkzEfVTJiVoJpP2Y\n" +
                "nPZiADhFW3e0ZAnak9BPsSsySRaSNmR465cG9tbqpXFKh9Rp/sCPo4Jq2n65yood\n" +
                "JBrnGr6/xhYvNa14sQ6xjjfSgRNBSXD1XXNF4kALwgZyCAECQQDV7t4bTx9FbEs5\n" +
                "36nAxPsPM6aACXaOkv6d9LXI7A0J8Zf42FeBV6RK0q7QG5iNNd1WJHSXIITUizVF\n" +
                "6aX5NnvFAkEAybeXNOwUvYtkgxF4s28s6gn11c5HZw4/a8vZm2tXXK/QfTQrJVXp\n" +
                "VwxmSr0FAajWAlcYN/fGkX1pWA041CKFVQJAG08ozzekeEpAuByTIOaEXgZr5MBQ\n" +
                "gBbHpgZNBl8Lsw9CJSQI15wGfv6yDiLXsH8FyC9TKs+d5Tv4Cvquk0efOQJAd9OC\n" +
                "lCKFs48hdyaiz9yEDsc57PdrvRFepVdj/gpGzD14mVerJbOiOF6aSV19ot27u4on\n" +
                "Td/3aifYs0CveHzFPQJAWb4LCDwqLctfzziG7/S7Z74gyq5qZF4FUElOAZkz123E\n" +
                "yZvADwuz/4aK0od0lX9c4Jp7Mo5vQ4TvdoBnPuGo****\n" +
                "-----END RSA PRIVATE KEY-----";
        // Specify your RSA public key string. You can use OpenSSL to generate it. The following value is an example of an RSA public key string.
        final String PUBLIC_X509_PEM =
                "-----BEGIN PUBLIC KEY-----\n" +
                "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCokfiAVXXf5ImFzKDw+XO/UByW\n" +
                "6mse2QsIgz3ZwBtMNu59fR5zttSx+8fB7vR4CN3bTztrP9A6bjoN0FFnhlQ3vNJC\n" +
                "5MFO1PByrE/MNd5AAfSVba93I6sx8NSk5MzUCA4NJzAUqYOEWGtGBcom6kEF6MnR\n" +
                "1EKib1Id8hpooY5xaQID****\n" +
                "-----END PUBLIC KEY-----";

        // Create an RSA key pair.
        RSAPrivateKey privateKey = SimpleRSAEncryptionMaterials.getPrivateKeyFromPemPKCS1(PRIVATE_PKCS1_PEM);
        RSAPublicKey publicKey = SimpleRSAEncryptionMaterials.getPublicKeyFromPemX509(PUBLIC_X509_PEM);
        KeyPair keyPair = new KeyPair(publicKey, privateKey);

        // Create a description for the RSA master key. The description cannot be modified after it is created. The master key description and the master key have a one-to-one mapping.
        // If all objects use the same master key, the description can be empty. However, you cannot change the master key later.
        // If the master key description is empty, the client cannot determine which master key was used to encrypt the file during decryption.
        // Configure a description for each master key. The client must save the mapping between the master key and its description. The server does not save this mapping.
        Map<String, String> matDesc = new HashMap<String, String>();
        matDesc.put("desc-key", "desc-value");

        // Create RSA encryption materials.
        SimpleRSAEncryptionMaterials encryptionMaterials = new SimpleRSAEncryptionMaterials(keyPair, matDesc);
        // To download and decrypt files encrypted with other RSA keys, add the other master keys and their descriptions to the encryption materials.
        // encryptionMaterials.addKeyPairDescMaterial(<otherKeyPair>, <otherKeyPairMatDesc>);

        // Create an encryption client.
        // When the encryption client is no longer needed, call the shutdown method to release its resources.
        OSSEncryptionClient ossEncryptionClient = new OSSEncryptionClientBuilder().
                build(endpoint, credentialsProvider, encryptionMaterials);

        try {
            // Encrypt and upload the file.
            ossEncryptionClient.putObject(bucketName, objectName, new ByteArrayInputStream(content.getBytes()));

            // Perform a range download.
            int start = 17;
            int end = 35;
            GetObjectRequest getObjectRequest = new GetObjectRequest(bucketName, objectName);
            getObjectRequest.setRange(start, end);
            OSSObject ossObject = ossEncryptionClient.getObject(getObjectRequest);
            BufferedReader reader = new BufferedReader(new InputStreamReader(ossObject.getObjectContent()));
            StringBuffer buffer = new StringBuffer();
            String line;
            while ((line = reader.readLine()) != null) {
                buffer.append(line);
            }
            reader.close();

            // View the result of the range download.
            System.out.println("Range-Get plain text:" + content.substring(start, end + 1));
            System.out.println("Range-Get decrypted text: " + buffer.toString());
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossEncryptionClient != null) {
                ossEncryptionClient.shutdown();
            }
        }
    }
}
```

## References

For the complete sample code for client-side encryption, see [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/EncryptionClientRsaSample.java).
