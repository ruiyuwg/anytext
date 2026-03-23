To ensure the validity and security of a PostObject request, you must include a signature in the PostObject request. The V4 signature in the PostObject request is calculated by encrypting a series of request parameters, including policy and expiration, based on the AccessKey secret, the current time, and the region. After the application server generates a signature, the application server returns information including the signature and upload policy to the client. The client uses the information to create an upload request. After OSS receives the upload request, OSS verifies the validity of the signature. Only requests that include a valid signature are allowed. Requests that fail the signature verification are denied.

## **Signature in a PostObject request**

To enhance data security, the PostObject request integrates the V4 signature algorithm. The form elements and policy form field play a key role in ensuring the validity and security of PostObject requests.

### **Form elements**

A form is a collection of fields that are actually carried in a PostObject request to pass information about the object that you want to upload and its metadata. The following table describes the unique form elements of a V4 signature in a PostObject request. For more information about the common form elements, see [Form elements](/help/en/oss/developer-reference/postobject#section-0lu-03w-2z6).

**Element**

**Type**

**Required**

**Description**

x-oss-signature-version

String

Yes

The signature version and the algorithm used to calculate the signature. Set the value to OSS4-HMAC-SHA256.

x-oss-credential

String

Yes

The credentials that you can use to calculate the signature. Format:

```
<AccessKeyId>/<date>/<region>/oss/aliyun_v4_request
```

-   AccessKeyId: the AccessKey ID of the AccessKey pair.
    
-   date: the date when the request was initiated. Format: `YYYYMMDD`. Example: 20231203.
    
-   region: the ID of the Alibaba Cloud region in which the bucket you want to access is located. Example: cn-hangzhou.
    
-   oss: the name of the requested service. Set the value to oss.
    
-   aliyun\_v4\_request: the description of the signature version in the request. Set the value to aliyun\_v4\_request.
    

x-oss-date

String

Yes

The time when the request was initiated. The time must follow the ISO 8601 standard. Example: `20231203T121212Z`.

-   An offset of up to 15 minutes after the request was initiated is allowed. Therefore, the time when the server receives the request can be up to 15 minutes later than the time specified by `x-oss-date`. This ensures that the requests can be processed as expected even if network transmission latency or time difference between the client and the server exists.
    
-   The request has a validity period of up to seven days. Seven days after the time specified by `x-oss-date`, OSS denies the request and an error is reported. This ensures the timeliness and security of requests and prevents malicious submission of expired or signed requests.
    
-   The time specified by `x-oss-date` is used as the timestamp for the string to sign. The value must be the same as that of the date field in the derived keys and that of the x-oss-date field in the policy form field.
    

x-oss-signature

String

Yes

The description used for signature verification. The value is calculated by encrypting the Base64-encoded policy string by using HMAC-SHA256, and then converting the binary hash obtained by using HMAC-SHA256 into hexadecimal format.

### **policy**

The policy form field in a PostObject request is used to specify the expiration time and conditions of the PostObject request that you initiate to upload an object by using an HTML form. The value of the policy form field is a JSON string that restricts a PostObject request by specifying multiple parameters, such as the bucket name to which you want to upload the object, the prefix in the object name, the validity period of the request, the allowed HTTP methods, and the object size and content.

**Important**

The policy form field must contain the expiration and conditions parameters. The following field for the Conditions parameter contains optional parameters, such as the x-oss-security-token parameter, which is only required when you use a security token to construct a signature in the PostObject request. The x-oss-security-token parameter is not required when you use AccessKey pairs to construct signatures in PostObject requests.

```
{
  "expiration": "2023-12-03T13:00:00.000Z",
  "conditions": [
    {"bucket": "examplebucket"},
    {"x-oss-signature-version": "OSS4-HMAC-SHA256"},
    {"x-oss-credential": "AKIDEXAMPLE/20231203/cn-hangzhou/oss/aliyun_v4_request"},
    {"x-oss-security-token": "CAIS******"},
    {"x-oss-date": "20231203T121212Z"},
    ["content-length-range", 1, 10],
    ["eq", "$success_action_status", "201"],
    ["starts-with", "$key", "user/eric/"],
    ["in", "$content-type", ["image/jpg", "image/png"]],
    ["not-in", "$cache-control", ["no-cache"]]
  ]
}
```

Required parameters in the policy form field

-   expiration
    
    The expiration parameter specifies the expiration time of the request. The time must follow the ISO 8601 standard and must be in GMT. For example, `2023-12-03T13:00:00.000Z` specifies that the PostObject request must be sent before 13:00 on December 3, 2023.
    
-   conditions
    
    The conditions parameter is a list that specifies the valid values of the form fields in the PostObject request.
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    **Matching mode**
    
    bucket
    
    String
    
    No
    
    The name of the bucket.
    
    bucket
    
    x-oss-signature-version
    
    String
    
    Yes
    
    The signature version and the algorithm used to calculate the signature. Set the value to OSS4-HMAC-SHA256.
    
    x-oss-signature-version
    
    x-oss-credential
    
    String
    
    Yes
    
    The credentials that you can use to calculate the signature. Format:
    
    ```
    <AccessKeyId>/<date>/<region>/oss/aliyun_v4_request
    ```
    
    -   AccessKeyId: the AccessKey ID of the AccessKey pair.
        
    -   date: the date when the request was initiated.
        
    -   region: the ID of the Alibaba Cloud region in which the bucket you want to access is located. Example: cn-hangzhou.
        
    -   oss: the name of the requested service. Set the value to oss.
        
    -   aliyun\_v4\_request: the description of the signature version in the request. Set the value to aliyun\_v4\_request.
        
    
    x-oss-credential
    
    x-oss-security-token
    
    String
    
    No
    
    This parameter is required only when you use a security token to construct a signature in the PostObject request. You can call the [AssumeRole](/help/en/ram/api-assumerole) operation of STS to obtain a security token.
    
    x-oss-security-token
    
    x-oss-date
    
    String
    
    Yes
    
    The time when the request was initiated. The time must follow the ISO 8601 standard. Example: `20231203T121212Z`.
    
    -   An offset of up to 15 minutes after the request was initiated is allowed. Therefore, the time when the server receives the request can be up to 15 minutes later than the time specified by `x-oss-date`. This ensures that the requests can be processed as expected even if network transmission latency or time difference between the client and the server exists.
        
    -   The request has a validity period of up to seven days. Seven days after the time specified by `x-oss-date`, OSS denies the request and an error is reported. This ensures the timeliness and security of requests and prevents malicious submission of expired or signed requests.
        
    -   The time specified by `x-oss-date` is used as the timestamp for the string to sign. The value must be the same as that of the date field in the derived keys and that of the x-oss-date field in the policy form field.
        
    
    x-oss-date
    
    content-length-range
    
    String
    
    No
    
    The allowed minimum and maximum sizes of the object that you want to upload. Unit: bytes.
    
    content-length-range
    
    success\_action\_status
    
    String
    
    No
    
    The HTTP status code that is returned after the object is uploaded.
    
    eq, starts-with, in, and not-in
    
    key
    
    String
    
    No
    
    The name of the object that you want to upload.
    
    eq, starts-with, in, and not-in
    
    content-type
    
    String
    
    No
    
    The type of the object that you want to upload.
    
    eq, starts-with, in, and not-in
    
    cache-control
    
    String
    
    No
    
    The caching behavior of the object.
    
    eq, starts-with, in, and not-in
    

Condition matching modes

Matching mode

Description

content-length-range

The size of the object that you want to upload must be within the range of the supported object size. For example, if the supported object size is 1 to 10 bytes, the condition must be \["content-length-range", 1, 10\].

eq

The value of a form field must be exactly the same as the value that is specified in the conditions. For example, if the value of the key form field must be a, you can specify \["eq", "$key", "a"\] as the condition.

starts-with

The value of a form field must start with a specific prefix. For example, if the value of the key form field starts with user/user1, you can specify \["starts-with", "$key", "user/user1"\] as the condition.

in

The elements that you want to include in the verification. The elements must be specified in the condition string. For example, if you want to verify whether the type of the object that you want to upload is image and want to allow images of multiple formats to be uploaded in a PostObject request, the condition must be \["in", "$content-type", \["image/jpg", "image/png"\]\].

not-in

The elements that you want to exclude from the verification. The elements must be specified in the condition string. For example, if you want to specify the object caching behavior and exclude the no-cache element, the condition must be \["not-in", "$cache-control", \["no-cache"\]\].

Escape characters for the policy form field

In the policy form field of a PostObject request, the dollar sign ($) specifies a variable. To describe the dollar sign ($), you must use the following escape character: \\$. The following table describes the escape characters used in the JSON string of the policy form field in a PostObject request.

**Escape character**

**Description**

\\/

Forward slash

\\\\

Backslash

\\"

Double quotation mark

\\$

Dollar sign

\\b

Space

\\f

Form feed

\\n

Line break

\\r

Carriage return

\\t

Horizontal tab

\\uxxxx

Unicode characters

## **Signature calculation process**

1.  Create a UTF-8 encoded policy.
    
2.  Create a string to sign.
    
    Base64-encode the policy to generate a string that can be transmitted securely as the string to sign.
    
3.  Calculate the signing key.
    
    Encrypt the string to sign by using HMAC-SHA256. Use the derived keys of the account as the keys for using HMAC-SHA256.
    
4.  Calculate the signature.
    
    Convert the binary hash calculated by using HMAC-SHA256 to a hexadecimal string. The obtained hexadecimal string is the signature used to verify the integrity and validity of the request.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5522984471/CAEQLBiBgICXzoGqihkiIDZlZjU5ODljNzI4YTQzNTRhMmNiNzIxMjBhODc1ZmVi4518416_20240705164151.923.svg)

## Examples

1.  The following sample code provides an example on how to use the preceding policy to calculate a V4 signature for a PostObject request by using OSS SDK for Java:
    
    ## Use Access Key (AK) or Secret Key (SK)
    
    ```
    import com.aliyun.oss.common.utils.BinaryUtil;
    import org.apache.commons.codec.binary.Base64;
    import javax.crypto.Mac;
    import javax.crypto.spec.SecretKeySpec;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            String accesskeyid =  System.getenv().get("OSS_ACCESS_KEY_ID");
            String accesskeysecret =  System.getenv().get("OSS_ACCESS_KEY_SECRET");
    
            // Step 1: Create a policy.
            ObjectMapper mapper = new ObjectMapper();
    
            Map<String, Object> policy = new HashMap<>();
            policy.put("expiration", "2024-12-03T13:00:00.000Z");
    
            List<Object> conditions = new ArrayList<>();
    
            Map<String, String> bucketCondition = new HashMap<>();
            bucketCondition.put("bucket", "examplebucket");
            conditions.add(bucketCondition);
    
            Map<String, String> signatureVersionCondition = new HashMap<>();
            signatureVersionCondition.put("x-oss-signature-version", "OSS4-HMAC-SHA256");
            conditions.add(signatureVersionCondition);
    
            Map<String, String> credentialCondition = new HashMap<>();
            credentialCondition.put("x-oss-credential", "accesskeyid/20241203/cn-hangzhou/oss/aliyun_v4_request"); // Replace this variable with your AccessKey ID.
            conditions.add(credentialCondition);
    
            Map<String, String> dateCondition = new HashMap<>();
            dateCondition.put("x-oss-date", "20241203T121212Z");
            conditions.add(dateCondition);
    
            conditions.add(Arrays.asList("content-length-range", 1, 10));
            conditions.add(Arrays.asList("eq", "$success_action_status", "201"));
            conditions.add(Arrays.asList("starts-with", "$key", "user/eric/"));
            conditions.add(Arrays.asList("in", "$content-type", Arrays.asList("image/jpg", "image/png")));
            conditions.add(Arrays.asList("not-in", "$cache-control", Arrays.asList("no-cache")));
    
            policy.put("conditions", conditions);
    
            String jsonPolicy = mapper.writeValueAsString(policy);
            // Step 2: Create a string to sign.
            String stringToSign = new String(Base64.encodeBase64(jsonPolicy.getBytes()));
            System.out.println(stringToSign)
            
            // Step 3: Calculate the signing key.
            byte[] dateKey = hmacsha256(("aliyun_v4" + accesskeysecret).getBytes(), "20231203");
            byte[] dateRegionKey = hmacsha256(dateKey, "cn-hangzhou");
            byte[] dateRegionServiceKey = hmacsha256(dateRegionKey, "oss");
            byte[] signingKey = hmacsha256(dateRegionServiceKey, "aliyun_v4_request");
    
            // Step 4: Calculate the signature.
            byte[] result = hmacsha256(signingKey, stringToSign);
            String signature = BinaryUtil.toHex(result);
            System.out.println("signature:" + signature);
    
        }
    
        public static byte[] hmacsha256(byte[] key, String data) {
            try {
                // Initialize SecretKeySpec, set the algorithm to HMAC-SHA256, and use the provided key.
                SecretKeySpec secretKeySpec = new SecretKeySpec(key, "HmacSHA256");
    
                // Obtain a Mac instance and use the getInstance method to set the algorithm to HMAC-SHA256.
                Mac mac = Mac.getInstance("HmacSHA256");
                // Use the key to initialize the Mac instance.
                mac.init(secretKeySpec);
    
                // Calculate the HMAC value. Use the doFinal method to receive the data to be calculated and return the calculation result as an array.
                byte[] hmacBytes = mac.doFinal(data.getBytes());
    
                return hmacBytes;
            } catch (Exception e) {
                throw new RuntimeException("Failed to calculate HMAC-SHA256", e);
            }
        }
    }
    ```
    
    Sample response:
    
    ```
    signature:3908473f7dbfb79a102eaaa44ca1edec8d7058ce3bd1c624d59eb437463bd5d6
    ```
    
    ## Use temporary access credentials
    
    When calculating a signature for a PostObject request using temporary access credentials, you also need to obtain a security token by calling the [AssumeRole](/help/en/ram/api-assumerole) operation of STS.
    
    ```
    import com.aliyun.oss.common.utils.BinaryUtil;
    import org.apache.commons.codec.binary.Base64;
    import javax.crypto.Mac;
    import javax.crypto.spec.SecretKeySpec;
    import com.aliyun.sts20150401.models.AssumeRoleResponse;
    import com.aliyun.sts20150401.models.AssumeRoleResponseBody;
    import com.aliyun.tea.TeaException;
    import com.fasterxml.jackson.databind.ObjectMapper;
    import java.util.*;
    public class Demo {
    
        // Initialize an STSClient instance.
        public static com.aliyun.sts20150401.Client createStsClient() throws Exception {
            com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                    // Make sure that the OSS_ACCESS_KEY_ID environment variable is configured.
                    .setAccessKeyId(System.getenv("OSS_ACCESS_KEY_ID"))
                    // Make sure that the OSS_ACCESS_KEY_SECRET environment variable is configured.
                    .setAccessKeySecret(System.getenv("OSS_ACCESS_KEY_SECRET"));
            // Endpoint 
            config.endpoint = "sts.cn-hangzhou.aliyuncs.com";
            return new com.aliyun.sts20150401.Client(config);
        }
    
        // Obtain an STS token.
        public static AssumeRoleResponseBody.AssumeRoleResponseBodyCredentials getCredential() throws Exception {
            com.aliyun.sts20150401.Client client = Demo.createStsClient();
            com.aliyun.sts20150401.models.AssumeRoleRequest assumeRoleRequest = new com.aliyun.sts20150401.models.AssumeRoleRequest()
                    // Make sure that the OSS_STS_ROLE_ARN environment variable is configured.
                    .setRoleArn(System.getenv("OSS_STS_ROLE_ARN"))
                    .setRoleSessionName("role_session_name");// Specify a session name.
            com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
            try {
                // Write your own code to display the response of the API operation if necessary.
                AssumeRoleResponse response = client.assumeRoleWithOptions(assumeRoleRequest, runtime);
                // The AccessKey ID, AccessKey secret, and STS token that are required for subsequent operations are included in credentials.
                return response.body.credentials;
            } catch (TeaException error) {
                // Handle exceptions with caution in your actual business scenario and never ignore exceptions in your project. The error messages displayed in this example are for reference only.
                // The error message.
                System.out.println(error.getMessage());
                // The URL for troubleshooting.
                System.out.println(error.getData().get("Recommend"));
                com.aliyun.teautil.Common.assertAsString(error.message);
            } catch (Exception _error) {
                TeaException error = new TeaException(_error.getMessage(), _error);
                // Handle exceptions with caution in your actual business scenario and never ignore exceptions in your project. The error messages displayed in this example are for reference only.
                // The error message.
                System.out.println(error.getMessage());
                // The URL for troubleshooting.
                System.out.println(error.getData().get("Recommend"));
                com.aliyun.teautil.Common.assertAsString(error.message);
            }
            return null;
        }
    
        public static void main(String[] args) throws Exception {
    
            AssumeRoleResponseBody.AssumeRoleResponseBodyCredentials sts_data = getCredential();
            String accesskeyid = sts_data.accessKeyId;
            String accesskeysecret = sts_data.accessKeySecret;
            String securitytoken = sts_data.securityToken;
            // Step 1: Create a policy.
            ObjectMapper mapper = new ObjectMapper();
    
            Map<String, Object> policy = new HashMap<>();
            policy.put("expiration", "2024-12-03T13:00:00.000Z");
    
            List<Object> conditions = new ArrayList<>();
    
            Map<String, String> bucketCondition = new HashMap<>();
            bucketCondition.put("bucket", "examplebucket");
            conditions.add(bucketCondition);
    
            Map<String, String> signatureVersionCondition = new HashMap<>();
            signatureVersionCondition.put("x-oss-signature-version", "OSS4-HMAC-SHA256");
            conditions.add(signatureVersionCondition);
            
            Map<String, String> securityTokenCondition = new HashMap<>();
            securityTokenCondition.put("x-oss-security-token", securitytoken);
            conditions.add(securityTokenCondition);
            
            Map<String, String> credentialCondition = new HashMap<>();
            credentialCondition.put("x-oss-credential", "accesskeyid/20241203/cn-hangzhou/oss/aliyun_v4_request"); 
            conditions.add(credentialCondition);
    
            Map<String, String> dateCondition = new HashMap<>();
            dateCondition.put("x-oss-date", "20241203T121212Z");
            conditions.add(dateCondition);
    
            conditions.add(Arrays.asList("content-length-range", 1, 10));
            conditions.add(Arrays.asList("eq", "$success_action_status", "201"));
            conditions.add(Arrays.asList("starts-with", "$key", "user/eric/"));
            conditions.add(Arrays.asList("in", "$content-type", Arrays.asList("image/jpg", "image/png")));
            conditions.add(Arrays.asList("not-in", "$cache-control", Arrays.asList("no-cache")));
    
            policy.put("conditions", conditions);
    
            String jsonPolicy = mapper.writeValueAsString(policy);
            // Step 2: Create a string to sign.
            String stringToSign = new String(Base64.encodeBase64(jsonPolicy.getBytes()));
    
            // Step 3: Calculate the signing key.
            byte[] dateKey = hmacsha256(("aliyun_v4" + accesskeysecret).getBytes(), "20231203");
            byte[] dateRegionKey = hmacsha256(dateKey, "cn-hangzhou");
            byte[] dateRegionServiceKey = hmacsha256(dateRegionKey, "oss");
            byte[] signingKey = hmacsha256(dateRegionServiceKey, "aliyun_v4_request");
    
            // Step 4: Calculate the signature.
            byte[] result = hmacsha256(signingKey, stringToSign);
            String signature = BinaryUtil.toHex(result);
            System.out.println("signature:" + signature);
    
        }
    
        public static byte[] hmacsha256(byte[] key, String data) {
            try {
                // Initialize SecretKeySpec, set the algorithm to HMAC-SHA256, and use the provided key.
                SecretKeySpec secretKeySpec = new SecretKeySpec(key, "HmacSHA256");
    
                // Obtain a Mac instance and use the getInstance method to set the algorithm to HMAC-SHA256.
                Mac mac = Mac.getInstance("HmacSHA256");
                // Use the key to initialize the Mac instance.
                mac.init(secretKeySpec);
    
                // Calculate the HMAC value. Use the doFinal method to receive the data to be calculated and return the calculation result as an array.
                byte[] hmacBytes = mac.doFinal(data.getBytes());
    
                return hmacBytes;
            } catch (Exception e) {
                throw new RuntimeException("Failed to calculate HMAC-SHA256", e);
            }
        }
    }
    ```
    
    Sample response:
    
    ```
    signature:1e09438f7ad01af6b3e144b42c98929c68f8d090ce07f4c277b18d8b62d0aa02
    ```
    
2.  The following sample code provides an example on how to calculate a V4 signature for a PostObject request by using OSS SDK for Python:
    
    ```
    import base64
    import hmac
    import hashlib
    import os
    
    def hmac_sha256(key, data):
        return hmac.new(key, data.encode('utf-8'), hashlib.sha256).digest()
    
    # Retrieve the AccessKey ID and AccessKey secret from environment variables.    
    accesskeyid = os.getenv('OSS_ACCESS_KEY_ID')
    accesskeysecret = os.getenv('OSS_ACCESS_KEY_SECRET')
    
    # Display the AccessKey ID.
    print(accesskeyid)
    
    # Check whether the environment variables are retrieved.
    if not accesskeyid or not accesskeysecret:
        raise ValueError("Required environment variables are not found: OSS_ACCESS_KEY_ID or OSS_ACCESS_KEY_SECRET")
    
    # Create a policy.
    policy = '''{
      "expiration": "2025-01-01T00:00:00.000Z",
      "conditions": [
        {"x-oss-signature-version": "OSS4-HMAC-SHA256"},
        {"x-oss-credential": "accesskeyid/20241105/cn-hangzhou/oss/aliyun_v4_request"}, // Replace accesskeyid with your actual access key ID.
        {"x-oss-date": "20241105T065000Z"}
      ]
    }'''
    
    # Output the policy.
    print(policy)
    
    # Calculate the string to sign.
    string_to_sign = base64.b64encode(policy.encode('utf-8')).decode('utf-8')
    print(string_to_sign)
    
    # Calculate the signing key.
    date_key = hmac_sha256(f"aliyun_v4{accesskeysecret}".encode('utf-8'), "20241105")
    date_region_key = hmac_sha256(date_key, "cn-beijing")
    date_region_service_key = hmac_sha256(date_region_key, "oss")
    signing_key = hmac_sha256(date_region_service_key, "aliyun_v4_request")
    
    # Calculate the signature.
    result = hmac_sha256(signing_key, string_to_sign)
    signature = result.hex()
    print("signature:", signature)
    ```
    
    Sample response:
    
    ```
    signature:9e85d56429245283b1aca5bc2dc31e0020b95ac2de9e9b81b496994db602ba1e
    ```
