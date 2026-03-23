After initializing the KMS instance SDK client, you can use it to call the Sign and Verify APIs for signing and verification. This topic provides code examples for this.

## **Complete example**

```
package com.aliyun.dkms.gcs.sdk.example;

import com.aliyun.dkms.gcs.openapi.models.Config;
import com.aliyun.dkms.gcs.openapi.util.models.RuntimeOptions;
import com.aliyun.dkms.gcs.sdk.Client;
import com.aliyun.dkms.gcs.sdk.models.SignRequest;
import com.aliyun.dkms.gcs.sdk.models.SignResponse;
import com.aliyun.dkms.gcs.sdk.models.VerifyRequest;
import com.aliyun.dkms.gcs.sdk.models.VerifyResponse;
import com.aliyun.tea.TeaException;

import java.io.Serializable;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Arrays;

/**
 * In this example, an asymmetric key in KMS and a SHA-256 algorithm are used for signing and verification.
 */
public class Sha256AsymmetricSignVerifySample {
    // The client of your KMS instance.
    private static Client client = null;

    public static void main(String[] args) {

        try {
            // Create a client for your KMS instance.
            initClient();

            // Use your KMS instance for signing and verification.
            asymmetricSignVerify();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Create a client for your KMS instance.
     *
     * @throws Exception
     */
    public static void initClient() throws Exception {
        // The connection protocol. Set the value to https. KMS supports connections only over HTTPS. 
        Config config = new Config();
        config.setProtocol("https");
    
        // The client key. 
        config.setClientKeyFile("<CLIENT_KEY_FILE>");
     
         // The password of the client key file. 
        config.setPassword("<PASSWORD>");
       
         // The endpoint of your KMS instance. Specify the value in the following format: <ID of your KMS instance>.cryptoservice.kms.aliyuncs.com. 
        config.setEndpoint("<ENDPOINT>");
        
        // The certificate authority (CA) certificate of your KMS instance. You can specify the path to the CA certificate file or enter the content of the CA certificate. 
        config.setCaFilePath("<CERTIFICATE_PATH>");
        // The content of the CA certificate of your KMS instance.
        //config.setCa("<CERTIFICATE_CONTENT");
        client = new Client(config);
        
    }

    /**
     * Use your KMS instance for signing and verification.
     *
     * @throws Exception
     */
    public static void asymmetricSignVerify() throws Exception {
        String keyId = "<KEY_ID>";
        String algorithm = "<ALGORITHM>";
        String message = "<MESSAGE>";
        // The type of the data to sign. Valid values: RAW and DIGEST. The value RAW indicates a raw message. The value DIGEST indicates the digest of the raw message.
        String messageType = "DIGEST";

        // Use KMS to sign the message.
        final SignContext signContext = asymmetricSign(keyId, algorithm, message, messageType);
        // Use KMS to verify the signature of the message.
        asymmetricVerify(signContext, message);
    }

    /**
     * Use KMS to sign the message.
     *
     * @param keyId
     * @param algorithm
     * @param message
     * @param messageType
     * @return
     * @throws Exception
     */
    public static SignContext asymmetricSign(String keyId, String algorithm, String message, String messageType) throws Exception {

        SignRequest signRequest = new SignRequest();
        signRequest.setKeyId(keyId);
        signRequest.setAlgorithm(algorithm);
        signRequest.setMessage(getDigest(message));
        signRequest.setMessageType(messageType);
        try {
            // If you want to ignore the server certificate, you can use the following commented-out code to call the operation.
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //SignResponse signResponse = client.signWithOptions(signRequest, runtimeOptions);
            SignResponse signResponse = client.sign(signRequest);
            // The signature value.
            byte[] signature = signResponse.getSignature();
            System.out.println("================sign================");
            System.out.printf("KeyId: %s%n", signResponse.getKeyId());
            System.out.printf("Signature: %s%n", Arrays.toString(signature));
            System.out.println("================sign================");
            return new SignContext(signResponse.getKeyId(), signResponse.getSignature(), signResponse.getAlgorithm(), signResponse.getMessageType());
        } catch (TeaException e) {
            System.out.printf("Code: %s%n", ((TeaException) e).getCode());
            System.out.printf("Message: %s%n", ((TeaException) e).getMessage());
            System.out.printf("HttpCode: %s%n", ((TeaException) e).getData().get("httpCode"));
            System.out.printf("HostId: %s%n", ((TeaException) e).getData().get("hostId"));
            System.out.printf("RequestId: %s%n", ((TeaException) e).getData().get("requestId"));
            e.printStackTrace();
            throw new RuntimeException(e);
        } catch (Exception e) {
            System.out.printf("sign errMsg: %s%n", e.getMessage());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Use KMS to verify the signature of the message.
     *
     * @param signContext
     * @throws Exception
     */
    public static void asymmetricVerify(final SignContext signContext, String message) throws Exception {
        VerifyRequest verifyRequest = new VerifyRequest();
        verifyRequest.setKeyId(signContext.getKeyId());
        verifyRequest.setAlgorithm(signContext.getAlgorithm());
        verifyRequest.setMessage(getDigest(message));
        verifyRequest.setMessageType(signContext.getMessageType());
        verifyRequest.setSignature(signContext.getSignature());
        try {
            // If you want to ignore the server certificate, you can use the following commented-out code to call the operation.
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //VerifyResponse verifyResponse = client.verifyWithOptions(verifyRequest, runtimeOptions);
            VerifyResponse verifyResponse = client.verify(verifyRequest);
            System.out.println("================verify================");
            System.out.printf("KeyId: %s%n", verifyResponse.getKeyId());
            System.out.printf("Value: %s%n", verifyResponse.getValue());
            System.out.println("================verify================");
        } catch (TeaException e) {
            System.out.printf("Code: %s%n", ((TeaException) e).getCode());
            System.out.printf("Message: %s%n", ((TeaException) e).getMessage());
            System.out.printf("HttpCode: %s%n", ((TeaException) e).getData().get("httpCode"));
            System.out.printf("HostId: %s%n", ((TeaException) e).getData().get("hostId"));
            System.out.printf("RequestId: %s%n", ((TeaException) e).getData().get("requestId"));
            e.printStackTrace();
        } catch (Exception e) {
            System.out.printf("verify errMsg: %s%n", e.getMessage());
            e.printStackTrace();
        }
    }

    private static byte[] getDigest(String message) throws Exception {
        MessageDigest sha256 = MessageDigest.getInstance("SHA-256");
        return sha256.digest(message.getBytes(StandardCharsets.UTF_8));
    }

    /**
     * The sign context may be stored.
     */
    static class SignContext implements Serializable {
        public String keyId;
        public byte[] signature;
        /**
         * Use default algorithm value,if the value is not set.
         */
        public String algorithm;
        public String messageType;

        public SignContext() {
        }

        public SignContext(String keyId, byte[] signature, String algorithm, String messageType) {
            this.keyId = keyId;
            this.signature = signature;
            this.algorithm = algorithm;
            this.messageType = messageType;
        }

        public String getKeyId() {
            return keyId;
        }

        public void setKeyId(String keyId) {
            this.keyId = keyId;
        }

        public byte[] getSignature() {
            return signature;
        }

        public void setSignature(byte[] signature) {
            this.signature = signature;
        }

        public String getAlgorithm() {
            return algorithm;
        }

        public void setAlgorithm(String algorithm) {
            this.algorithm = algorithm;
        }

        public String getMessageType() {
            return messageType;
        }

        public void setMessageType(String messageType) {
            this.messageType = messageType;
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

### Call the [Sign](/help/en/kms/key-management-service/developer-reference/sign-1) API to sign data by using an asymmetric key

```
    /**
     * Use KMS to sign the message.
     *
     * @param keyId
     * @param algorithm
     * @param message
     * @param messageType
     * @return
     * @throws Exception
     */
    
    public static SignContext asymmetricSign(String keyId, String algorithm, String message, String messageType) throws Exception {

        SignRequest signRequest = new SignRequest();
        signRequest.setKeyId(keyId);
        signRequest.setAlgorithm(algorithm);
        signRequest.setMessage(getDigest(message));
        signRequest.setMessageType(messageType);
        try {
            // If you want to ignore the server certificate, you can use the following commented-out code to call the operation.
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //SignResponse signResponse = client.signWithOptions(signRequest, runtimeOptions);
            SignResponse signResponse = client.sign(signRequest);
            // The signature value.
            byte[] signature = signResponse.getSignature();
            System.out.println("================sign================");
            System.out.printf("KeyId: %s%n", signResponse.getKeyId());
            System.out.printf("Signature: %s%n", Arrays.toString(signature));
            System.out.println("================sign================");
            return new SignContext(signResponse.getKeyId(), signResponse.getSignature(), signResponse.getAlgorithm(), signResponse.getMessageType());
        } catch (TeaException e) {
            System.out.printf("Code: %s%n", ((TeaException) e).getCode());
            System.out.printf("Message: %s%n", ((TeaException) e).getMessage());
            System.out.printf("HttpCode: %s%n", ((TeaException) e).getData().get("httpCode"));
            System.out.printf("HostId: %s%n", ((TeaException) e).getData().get("hostId"));
            System.out.printf("RequestId: %s%n", ((TeaException) e).getData().get("requestId"));
            e.printStackTrace();
            throw new RuntimeException(e);
        } catch (Exception e) {
            System.out.printf("sign errMsg: %s%n", e.getMessage());
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
```

### Call the [Verify](/help/en/kms/key-management-service/developer-reference/verify-1) API to verify the signature by using an asymmetric key

The results of signing and verification by using KMS comply with the corresponding algorithm standards. Therefore, apart from calling the Verify API to verify the signature, you can download the public key from KMS and verify the signature by using other cryptographic libraries.

```
/**
     * Use KMS to verify the signature of the message.
     *
     * @param signContext
     * @throws Exception
     */

    public static void asymmetricVerify(final SignContext signContext, String message) throws Exception {
        VerifyRequest verifyRequest = new VerifyRequest();
        verifyRequest.setKeyId(signContext.getKeyId());
        verifyRequest.setAlgorithm(signContext.getAlgorithm());
        verifyRequest.setMessage(getDigest(message));
        verifyRequest.setMessageType(signContext.getMessageType());
        verifyRequest.setSignature(signContext.getSignature());
        try {
            // If you want to ignore the server certificate, you can use the following commented-out code to call the operation.
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //VerifyResponse verifyResponse = client.verifyWithOptions(verifyRequest, runtimeOptions);
            VerifyResponse verifyResponse = client.verify(verifyRequest);
            System.out.println("================verify================");
            System.out.printf("KeyId: %s%n", verifyResponse.getKeyId());
            System.out.printf("Value: %s%n", verifyResponse.getValue());
            System.out.println("================verify================");
        } catch (TeaException e) {
            System.out.printf("Code: %s%n", ((TeaException) e).getCode());
            System.out.printf("Message: %s%n", ((TeaException) e).getMessage());
            System.out.printf("HttpCode: %s%n", ((TeaException) e).getData().get("httpCode"));
            System.out.printf("HostId: %s%n", ((TeaException) e).getData().get("hostId"));
            System.out.printf("RequestId: %s%n", ((TeaException) e).getData().get("requestId"));
            e.printStackTrace();
        } catch (Exception e) {
            System.out.printf("verify errMsg: %s%n", e.getMessage());
            e.printStackTrace();
        }
    }
```
