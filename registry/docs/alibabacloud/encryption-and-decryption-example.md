After initializing the KMS instance SDK client, you can use it to call the `Encrypt` and `Decrypt` APIs for data encryption and decryption. This topic provides code examples for this.

## **Complete example**

```
package com.aliyun.dkms.gcs.sdk.example;

import com.aliyun.dkms.gcs.openapi.models.Config;
import com.aliyun.dkms.gcs.openapi.util.models.RuntimeOptions;
import com.aliyun.dkms.gcs.sdk.Client;
import com.aliyun.dkms.gcs.sdk.models.DecryptRequest;
import com.aliyun.dkms.gcs.sdk.models.DecryptResponse;
import com.aliyun.dkms.gcs.sdk.models.EncryptRequest;
import com.aliyun.dkms.gcs.sdk.models.EncryptResponse;
import com.aliyun.tea.TeaException;

import java.io.Serializable;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

/**
 * ClientKey parameter passing supports the following three methods:
 * 1. By specifying the path to the ClientKey.json file.
 * Example:
 * String clientKeyFile = "<CLIENT_KEY_FILE_PATH>";
 * String password = "<CLIENT_KEY_PASSWORD>";
 * Config cfg = new Config();
 * cfg.setClientKeyFile(clientKeyFile);
 * cfg.setPassword(password);
 * <p>
 * 2. By specifying the content of the ClientKey.
 * Example:
 * String clientKeyContent = "<CLIENT_KEY_CONTENT>";
 * String password = "<CLIENT_KEY_PASSWORD>";
 * Config cfg = new Config();
 * cfg.setClientKeyContent(clientKeyContent);
 * cfg.setPassword(password);
 * <p>
 * 3. By specifying the private key and AccessKeyId.
 * Example:
 * String accessKeyId = "<CLIENT_KEY_KEYID>";
 * String privateKey = "<PARSE_FROM_CLIENT_KEY_PRIVATEKEY_DATA>";
 * Config cfg = new Config();
 * cfg.setAccessKeyId(accessKeyId);
 * cfg.setPrivateKey(privateKey);
 */
public class AesEncryptDecryptSample {

    // KMS instance Client object.
    private static Client client = null;

    public static void main(String[] args) {
        try {
            // Construct the encryption service instance Client object.
            initClient();

            // Use the encryption service instance for encryption and decryption example.
            encryptDecryptSample();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void initClient() throws Exception {
        // The connection protocol. Set the value to https. The KMS instance service only allows access through the HTTPS protocol.
        Config config = new Config();
        config.setProtocol("https");
    
        // Client Key.
        config.setClientKeyFile("<CLIENT_KEY_FILE>");
     
         // Client Key password.
        config.setPassword("<PASSWORD>");
       
         // The endpoint of your KMS instance. Set the value in the following format: <KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com.
        config.setEndpoint("<ENDPOINT>");
        
        // The certificate authority (CA) certificate of the KMS instance. You can specify the path to the CA certificate file or enter the content of the CA certificate.
        config.setCaFilePath("<CA_CERTIFICATE_PATH>");
        // Alternatively, set it to the CA certificate content of the KMS instance
        //config.setCa("<CA_CERTIFICATE_CONTENT");
        client = new Client(config);
    }

    // Encryption and decryption example.
    private static void encryptDecryptSample() {
        String keyId = "<KEY_ID>";
        String plaintext = "<PLAINTEXT>";
        final AesEncryptContext aesEncryptContext = encryptSample(keyId, plaintext);
        String decryptResult = decryptSample(aesEncryptContext);
        if (!plaintext.equals(decryptResult)) {
            System.out.println("Decrypt data does not match the plaintext");
        }
    }

    // Encryption example.
    private static AesEncryptContext encryptSample(String keyId, String plaintext) {
        // Construct the encryption request.
        EncryptRequest encryptRequest = new EncryptRequest();
        encryptRequest.setKeyId(keyId);
        encryptRequest.setPlaintext(plaintext.getBytes(StandardCharsets.UTF_8));
        try {
            // Call the encryption interface to encrypt.
            // To ignore the server certificate, you can use the commented code here to call.
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //EncryptResponse encryptResponse = client.encryptWithOptions(encryptRequest, runtimeOptions);
            EncryptResponse encryptResponse = client.encrypt(encryptRequest);
            System.out.printf("KeyId: %s%n", encryptResponse.getKeyId());
            System.out.printf("CiphertextBlob: %s%n", Arrays.toString(encryptResponse.getCiphertextBlob()));
            System.out.printf("Iv: %s%n", Arrays.toString(encryptResponse.getIv()));
            return new AesEncryptContext(encryptResponse.getKeyId(), encryptResponse.getCiphertextBlob(), encryptResponse.getIv(), encryptResponse.getAlgorithm());
        } catch (TeaException e) {
            System.out.printf("code: %s%n", ((TeaException) e).getCode());
            System.out.printf("message: %s%n", e.getMessage());
            System.out.printf("requestId: %s%n", ((TeaException) e).getData().get("requestId"));
            e.printStackTrace();
            throw new RuntimeException(e);
        } catch (Exception e) {
            System.out.printf("encrypt err: %s%n", e.getMessage());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    // Decryption example.
    private static String decryptSample(final AesEncryptContext aesEncryptContext) {
        // Construct the decryption request object.
        DecryptRequest decryptRequest = new DecryptRequest();
        decryptRequest.setKeyId(aesEncryptContext.getKeyId());
        decryptRequest.setCiphertextBlob(aesEncryptContext.getCiphertextBlob());
        decryptRequest.setAlgorithm(aesEncryptContext.getAlgorithm());
        decryptRequest.setIv(aesEncryptContext.getIv());
        try {
            // Call the decryption interface to decrypt.
            // To ignore the server certificate, you can use the commented code here to call.
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //DecryptResponse decryptResponse = client.decryptWithOptions(decryptRequest, runtimeOptions);
            DecryptResponse decryptResponse = client.decrypt(decryptRequest);
            System.out.printf("KeyId: %s%n", decryptResponse.getKeyId());
            System.out.printf("Plaintext: %s%n", new String(decryptResponse.getPlaintext()));
            System.out.printf("RequestId: %s%n", decryptResponse.getRequestId());
            return new String(decryptResponse.getPlaintext());
        } catch (TeaException e) {
            System.out.printf("code: %s%n", ((TeaException) e).getCode());
            System.out.printf("message: %s%n", e.getMessage());
            System.out.printf("requestId: %s%n", ((TeaException) e).getData().get("requestId"));
            e.printStackTrace();
            throw new RuntimeException(e);
        } catch (Exception e) {
            System.out.printf("decrypt err: %s%n", e.getMessage());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * The aes encrypt context may be stored.
     */
    static class AesEncryptContext implements Serializable {
        public String keyId;
        public byte[] ciphertextBlob;
        public byte[] iv;
        /**
         * Use default algorithm value,if the value is not set.
         */
        public String algorithm;

        public AesEncryptContext() {
        }

        public AesEncryptContext(String keyId, byte[] ciphertextBlob, byte[] iv, String algorithm) {
            this.keyId = keyId;
            this.ciphertextBlob = ciphertextBlob;
            this.iv = iv;
            this.algorithm = algorithm;
        }

        public String getKeyId() {
            return keyId;
        }

        public void setKeyId(String keyId) {
            this.keyId = keyId;
        }

        public byte[] getCiphertextBlob() {
            return ciphertextBlob;
        }

        public void setCiphertextBlob(byte[] ciphertextBlob) {
            this.ciphertextBlob = ciphertextBlob;
        }

        public byte[] getIv() {
            return iv;
        }

        public void setIv(byte[] iv) {
            this.iv = iv;
        }

        public String getAlgorithm() {
            return algorithm;
        }

        public void setAlgorithm(String algorithm) {
            this.algorithm = algorithm;
        }

    }
}
```

## **Example walkthrough**

### [Initialize client](/help/en/kms/key-management-service/developer-reference/initialize-the-client)

```
import com.aliyun.dkms.gcs.openapi.models.Config;
import com.aliyun.dkms.gcs.sdk.Client;

                           
 public static void initClient() throws Exception {

        // The connection protocol. Set the value to https. The KMS instance service only allows access through the HTTPS protocol.
        Config config = new Config();
        config.setProtocol("https");
    
        // Client key.
        config.setClientKeyFile("<CLIENT_KEY_FILE>");
     
         // Client key password.
        config.setPassword("<PASSWORD>");
       
         // The endpoint of your KMS instance. Set the value in the following format: <KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com.
        config.setEndpoint("<ENDPOINT>");
        
        // The certificate authority (CA) certificate of the KMS instance. You can specify the path to the CA certificate file or enter the content of the CA certificate.
        config.setCaFilePath("<CA_CERTIFICATE_PATH>");
        // Alternatively, set the content of the CA certificate of the KMS instance.
        //config.setCa("<CA_CERTIFICATE_CONTENT");
        client = new Client(config);
    }
```

### Call the [Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2) API **to encrypt data using a symmetric key**

When using Encrypt to secure data, store the resulting ciphertext (CiphertextBlob), the key ID (KeyId), Iv, and the encryption algorithm (Algorithm) parameters.

```
 // Encryption example.
    private static AesEncryptContext encryptSample(String keyId, String plaintext) {
        // Construct the encryption request.
        EncryptRequest encryptRequest = new EncryptRequest();
        encryptRequest.setKeyId(keyId);
        encryptRequest.setPlaintext(plaintext.getBytes(StandardCharsets.UTF_8));
        try {
            // Call the encryption interface to encrypt.
            // To ignore the server certificate, you can use the commented code here to call.
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //EncryptResponse encryptResponse = client.encryptWithOptions(encryptRequest, runtimeOptions);
            EncryptResponse encryptResponse = client.encrypt(encryptRequest);
            System.out.printf("KeyId: %s%n", encryptResponse.getKeyId());
            System.out.printf("CiphertextBlob: %s%n", Arrays.toString(encryptResponse.getCiphertextBlob()));
            System.out.printf("Iv: %s%n", Arrays.toString(encryptResponse.getIv()));
            return new AesEncryptContext(encryptResponse.getKeyId(), encryptResponse.getCiphertextBlob(), encryptResponse.getIv(), encryptResponse.getAlgorithm());
        } catch (TeaException e) {
            System.out.printf("code: %s%n", ((TeaException) e).getCode());
            System.out.printf("message: %s%n", e.getMessage());
            System.out.printf("requestId: %s%n", ((TeaException) e).getData().get("requestId"));
            e.printStackTrace();
            throw new RuntimeException(e);
        } catch (Exception e) {
            System.out.printf("encrypt err: %s%n", e.getMessage());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
```

### **Call the** [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2) **API to decrypt ciphertext using a symmetric key**

```
     // Decryption example.
    private static String decryptSample(final AesEncryptContext aesEncryptContext) {
        // Construct the decryption request object.
        DecryptRequest decryptRequest = new DecryptRequest();
        decryptRequest.setKeyId(aesEncryptContext.getKeyId());
        decryptRequest.setCiphertextBlob(aesEncryptContext.getCiphertextBlob());
        decryptRequest.setAlgorithm(aesEncryptContext.getAlgorithm());
        decryptRequest.setIv(aesEncryptContext.getIv());
        try {
            // Call the decryption interface to decrypt.
            // To ignore the server certificate, you can use the commented code here to call.
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //DecryptResponse decryptResponse = client.decryptWithOptions(decryptRequest, runtimeOptions);
            DecryptResponse decryptResponse = client.decrypt(decryptRequest);
            System.out.printf("KeyId: %s%n", decryptResponse.getKeyId());
            System.out.printf("Plaintext: %s%n", new String(decryptResponse.getPlaintext()));
            System.out.printf("RequestId: %s%n", decryptResponse.getRequestId());
            return new String(decryptResponse.getPlaintext());
        } catch (TeaException e) {
            System.out.printf("code: %s%n", ((TeaException) e).getCode());
            System.out.printf("message: %s%n", e.getMessage());
            System.out.printf("requestId: %s%n", ((TeaException) e).getData().get("requestId"));
            e.printStackTrace();
            throw new RuntimeException(e);
        } catch (Exception e) {
            System.out.printf("decrypt err: %s%n", e.getMessage());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
```
