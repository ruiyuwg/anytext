After initializing the KMS instance SDK client, you can use it to call the GetSecretValue API for retrieving the secret value. This topic provides code examples for this.

## **Complete example**

```
package com.aliyun.dkms.gcs.sdk.example;

import com.aliyun.dkms.gcs.openapi.models.Config;
import com.aliyun.dkms.gcs.openapi.util.models.RuntimeOptions;
import com.aliyun.dkms.gcs.sdk.Client;
import com.aliyun.dkms.gcs.sdk.models.GetSecretValueRequest;
import com.aliyun.dkms.gcs.sdk.models.GetSecretValueResponse;
import com.aliyun.tea.TeaException;

/**
 * Example of retrieving secret values.
 */
public class GetSecretValueSample {
		/**
		 * KMS instance client object.
	 */	
    private static Client client = null;

    public static void main(String[] args) {
        try {
            // Construct KMS instance client object.
            initClient();

            String secretName = "<SECRET_NAME>";

            // Example of retrieving secret values.
            getSecretValueSample(secretName);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Initialize client
     * @throws Exception
     */
    public static void initClient() throws Exception {
       // Set the connection protocol to "https". The KMS instance service only allows access through the HTTPS protocol.
        Config config = new Config();
        config.setProtocol("https");
    
        // Client key.
        config.setClientKeyFile("<CLIENT_KEY_FILE>");
     
         // Client key password.
        config.setPassword("<PASSWORD>");
       
         // Set the endpoint to <KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com.
        config.setEndpoint("<ENDPOINT>");
        
        // The CA certificate of the KMS instance. You can specify the path to the CA certificate file or enter the content of the CA certificate.
        config.setCaFilePath("<CA_CERTIFICATE_PATH>");
        // Alternatively, set it to the CA certificate content of the KMS instance.
        //config.setCa("<CA_CERTIFICATE_CONTENT");
        client = new Client(config);
    }

    /**
     * Example of retrieving secret values.
     * @param secretName
     */
    private static void getSecretValueSample(String secretName) {
        GetSecretValueRequest request = new GetSecretValueRequest()
                .setSecretName(secretName);
        try {
            // If you need to ignore the server certificate, you can use the commented code here to invoke.
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //GetSecretValueResponse getSecretValueResponse = client.getSecretValueWithOptions(request, runtimeOptions);
            GetSecretValueResponse getSecretValueResponse = client.getSecretValue(request);
            System.out.printf("SecretName: %s%n", getSecretValueResponse.getSecretName());
            // System.out.printf("SecretData: %s%n", getSecretValueResponse.getSecretData());
            System.out.printf("VersionStages: %s%n", getSecretValueResponse.getVersionStages());
            System.out.printf("RequestId: %s%n", getSecretValueResponse.getRequestId());
        } catch (Exception e) {
            if (e instanceof TeaException) {
                System.out.printf("Code: %s%n", ((TeaException) e).getCode());
                System.out.printf("Message: %s%n", ((TeaException) e).getMessage());
                System.out.printf("HttpCode: %s%n", ((TeaException) e).getData().get("httpCode"));
                System.out.printf("HostId: %s%n", ((TeaException) e).getData().get("hostId"));
                System.out.printf("RequestId: %s%n", ((TeaException) e).getData().get("requestId"));
            }
            e.printStackTrace();
        }
    }
}
```

## Example walkthrough

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

### Call the [GetSecretValue](/help/en/kms/key-management-service/developer-reference/getsecretvalue-2) API

```
    /**
     * Example of retrieving the secret value.
     * @param secretName
     */
    private static void getSecretValueSample(String secretName) {
        GetSecretValueRequest request = new GetSecretValueRequest()
                .setSecretName(secretName);
        try {
            // If you need to ignore the server certificate, you can use the commented code here to invoke
            //RuntimeOptions runtimeOptions = new RuntimeOptions();
            //runtimeOptions.setIgnoreSSL(true);
            //GetSecretValueResponse getSecretValueResponse = client.getSecretValueWithOptions(request, runtimeOptions);
            GetSecretValueResponse getSecretValueResponse = client.getSecretValue(request);
            System.out.printf("SecretName: %s%n", getSecretValueResponse.getSecretName());
         // System.out.printf("SecretData: %s%n", getSecretValueResponse.getSecretData());
            System.out.printf("VersionStages: %s%n", getSecretValueResponse.getVersionStages());
            System.out.printf("RequestId: %s%n", getSecretValueResponse.getRequestId());
        } catch (Exception e) {
            if (e instanceof TeaException) {
                System.out.printf("Code: %s%n", ((TeaException) e).getCode());
                System.out.printf("Message: %s%n", ((TeaException) e).getMessage());
                System.out.printf("HttpCode: %s%n", ((TeaException) e).getData().get("httpCode"));
                System.out.printf("HostId: %s%n", ((TeaException) e).getData().get("hostId"));
                System.out.printf("RequestId: %s%n", ((TeaException) e).getData().get("requestId"));
            }
            e.printStackTrace();
        }
    }
}
```
