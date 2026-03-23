You can retrieve a secret value using the Alibaba Cloud SDK through either a shared or dedicated gateway. This document describes how to do so.

## **Related OpenAPI**

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue): Retrieves a secret value.

## Configuration differences between shared and dedicated gateways

The only differences between using a shared and dedicated gateway involve the configuration in client initialization:

**Parameter**

**Shared gateway**

**Dedicated gateway**

endpoint

The [shared gateway endpoint](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#631e9b89f508d) must be configured with one of the following formats:

-   Public network domain names: `kms.<REGION_ID>.aliyuncs.com`.
    
-   VPC domain names: `kms-vpc.<REGION_ID>.aliyuncs.com`.
    

The [dedicated gateway endpoint](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#e1bc30acf0b6m) must be configured following the format: `<KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`.

ca

Not required.

-   Alibaba Cloud SDK V2.0: Requires setting a CA certificate.
    
-   Alibaba Cloud SDK V1.0: Does not support certificates. Instead, the `HTTPSInsecure` runtime parameter must be set to true: `client.SetHTTPSInsecure(true)`.
    

## Obtaining a secret value **through a shared gateway**

### **Complete example**

```
package com.aliyun.sample;

import com.aliyun.tea.*;

public class Sample {

    /**
     * <b>description</b> :
     * <p>Use your AccessKey ID and AccessKey secret to initialize the client.</p>
     * @return Client
     * 
     * @throws Exception
     */
    public static com.aliyun.kms20160120.Client createClient() throws Exception {
        // If the project code is leaked, the AccessKey pair may be leaked and resources in your account become insecure. The following code is for reference only.
        // We recommend that you use Security Token Service (STS) tokens, which provide higher security. For more information about authentication methods, see https://www.alibabacloud.com/help/en/sdk/developer-reference/v2-manage-access-credentials.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured in the code runtime environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured in the code runtime environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // For more information about endpoints, see https://api.alibabacloud.com/product/Kms.
        config.endpoint = "kms.ap-southeast-1.aliyuncs.com";
        return new com.aliyun.kms20160120.Client(config);
    }

    public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        com.aliyun.kms20160120.Client client = Sample.createClient();
        com.aliyun.kms20160120.models.GetSecretValueRequest getSecretValueRequest = new com.aliyun.kms20160120.models.GetSecretValueRequest()
                .setSecretName("test****");
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            // If you copy and run the sample code, write your own code to display the response of the API operation if necessary.
            client.getSecretValueWithOptions(getSecretValueRequest, runtime);
        } catch (TeaException error) {
            // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error messages displayed in this example are for reference only.
            // Print error messages
            System.out.println(error.getMessage());
            // Provide the URL that is used for troubleshooting.
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error messages displayed in this example are for reference only.
            // Print error messages
            System.out.println(error.getMessage());
            // Provide the URL that is used for troubleshooting.
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        }        
    }
}
```

### **Example analysis**

#### **Initialize the client**

```
    public static com.aliyun.kms20160120.Client createClient() throws Exception {
        // If the project code is leaked, the AccessKey pair may be leaked and resources in your account become insecure. The following code is for reference only.
        // We recommend that you use Security Token Service (STS) tokens, which provide higher security. For more information about authentication methods, see https://www.alibabacloud.com/help/en/sdk/developer-reference/v2-manage-access-credentials.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured in the code runtime environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured in the code runtime environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // For more information about endpoints, see https://api.alibabacloud.com/product/Kms.
        config.endpoint = "kms.ap-southeast-1.aliyuncs.com";
        return new com.aliyun.kms20160120.Client(config);
    }
```

#### **Call the GetSecretValue operation to obtain a secret value**

The SecretName value provided in the example is for your reference. Replace it with an actual one based on your business needs.

```
      public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        com.aliyun.kms20160120.Client client = Sample.createClient();
        com.aliyun.kms20160120.models.GetSecretValueRequest getSecretValueRequest = new com.aliyun.kms20160120.models.GetSecretValueRequest()
                .setSecretName("test****");
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            // If you copy and run the sample code, write your own code to display the response of the API operation if necessary.
            client.getSecretValueWithOptions(getSecretValueRequest, runtime);
        } catch (TeaException error) {
            // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error messages displayed in this example are for reference only.
            // Print error messages
            System.out.println(error.getMessage());
            // Provide the URL that is used for troubleshooting.
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error messages displayed in this example are for reference only.
            // Print error messages
            System.out.println(error.getMessage());
            // Provide the URL that is used for troubleshooting.
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        }        
    }
```

## Obtaining a secret value **through a dedicated gateway**

### **Complete example**

```
package com.aliyun.sample;

import com.aliyun.tea.*;

public class Sample {

    /**
     * <b>description</b> :
     * <p>Use your AccessKey ID and AccessKey secret to initialize the client.</p>
     * @return Client
     * 
     * @throws Exception
     */
    public static com.aliyun.kms20160120.Client createClient() throws Exception {
        // If the project code is leaked, the AccessKey pair may be leaked and resources in your account become insecure. The following code is for reference only.
        // We recommend that you use Security Token Service (STS) tokens, which provide higher security. For more information about authentication methods, see https://www.alibabacloud.com/help/en/sdk/developer-reference/v2-manage-access-credentials.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured in the code runtime environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured in the code runtime environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // Dedicated gateway endpoint 
        config.endpoint = "kst-hzz65f176a0ogplgq****.cryptoservice.kms.aliyuncs.com";
        // KMS instance CA certificate
        config.ca = "-----BEGIN CERTIFICATE-----MIIDuzCCAqOgAwIBAgIJALTKwWAjvbMiMA0GCS****";
        return new com.aliyun.kms20160120.Client(config);
    }

    public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        com.aliyun.kms20160120.Client client = Sample.createClient();
        com.aliyun.kms20160120.models.GetSecretValueRequest getSecretValueRequest = new com.aliyun.kms20160120.models.GetSecretValueRequest()
                .setSecretName("test****");
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            // If you copy and run the sample code, write your own code to display the response of the API operation if necessary.
            client.getSecretValueWithOptions(getSecretValueRequest, runtime);
        } catch (TeaException error) {
            // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error messages displayed in this example are for reference only.
            // Print error messages
            System.out.println(error.getMessage());
            // Provide the URL that is used for troubleshooting.
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error messages displayed in this example are for reference only.
            // Print error messages
            System.out.println(error.getMessage());
            // Provide the URL that is used for troubleshooting.
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        }        
    }
}
```

### **Example analysis**

#### **Initialize the client**

```
    public static com.aliyun.kms20160120.Client createClient() throws Exception {
        // If the project code is leaked, the AccessKey pair may be leaked and resources in your account become insecure. The following code is for reference only.
        // We recommend that you use Security Token Service (STS) tokens, which provide higher security. For more information about authentication methods, see https://www.alibabacloud.com/help/en/sdk/developer-reference/v2-manage-access-credentials.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured in the code runtime environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured in the code runtime environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // Dedicated gateway endpoint 
        config.endpoint = "kst-hzz65f176a0ogplgq****.cryptoservice.kms.aliyuncs.com";
        // KMS instance CA certificate
        config.ca = "-----BEGIN CERTIFICATE-----MIIDuzCCAqOgAwIBAgIJALTKwWAjvbMiMA0GCS****";
        return new com.aliyun.kms20160120.Client(config);
    }
```

#### **Call the GetSecretValue operation to obtain a secret value**

The SecretName value provided in the example is for your reference. Replace it with an actual one based on your business needs.

```
      public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        com.aliyun.kms20160120.Client client = Sample.createClient();
        com.aliyun.kms20160120.models.GetSecretValueRequest getSecretValueRequest = new com.aliyun.kms20160120.models.GetSecretValueRequest()
                .setSecretName("test****");
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            // If you copy and run the sample code, write your own code to display the response of the API operation if necessary.
            client.getSecretValueWithOptions(getSecretValueRequest, runtime);
        } catch (TeaException error) {
            // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error messages displayed in this example are for reference only.
            // Print error messages
            System.out.println(error.getMessage());
            // Provide the URL that is used for troubleshooting.
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // Handle exceptions with caution based on your actual business scenario and do not ignore exceptions in your project. The error messages displayed in this example are for reference only.
            // Print error messages
            System.out.println(error.getMessage());
            // Provide the URL that is used for troubleshooting.
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        }        
    }
```
