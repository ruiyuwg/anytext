The same-origin policy of browsers rejects cross-origin requests when you exchange data or share resources between different domains. To resolve this issue, you can configure cross-origin resource sharing (CORS) rules that allow access from specific domain names, methods, and request headers.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To set CORS rules, you must have the `oss:PutBucketCors` permission. To retrieve CORS rules, you must have the `oss:GetBucketCors` permission. To delete CORS rules, you must have the `oss:DeleteBucketCors` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Set CORS rules

The following code shows how to set the CORS rules for a specified bucket:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.SetBucketCORSRequest;
import java.util.ArrayList;

public class Demo {

    public static void main(String[] args) throws Exception {
        // This example uses the endpoint of the China (Hangzhou) region. Replace it with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            SetBucketCORSRequest request = new SetBucketCORSRequest(bucketName);

            // You can set a maximum of 10 CORS rules for each bucket.
            ArrayList<SetBucketCORSRequest.CORSRule> putCorsRules = new ArrayList<SetBucketCORSRequest.CORSRule>();

            SetBucketCORSRequest.CORSRule corRule = new SetBucketCORSRequest.CORSRule();

            ArrayList<String> allowedOrigin = new ArrayList<String>();
            // Specify the allowed origins for cross-origin requests.
            allowedOrigin.add( "http://example.com");

            ArrayList<String> allowedMethod = new ArrayList<String>();
            // Specify the allowed methods for cross-origin requests, such as GET, PUT, DELETE, POST, and HEAD.
            allowedMethod.add("GET");

            ArrayList<String> allowedHeader = new ArrayList<String>();
            // Specify whether to allow the headers specified by Access-Control-Request-Headers in the preflight OPTIONS request.
            allowedHeader.add("x-oss-test");

            ArrayList<String> exposedHeader = new ArrayList<String>();
            // Specify the response headers that users can access from applications.
            exposedHeader.add("x-oss-test1");
            // AllowedOrigins and AllowedMethods support a maximum of one asterisk (*) wildcard character. The asterisk (*) indicates that all origins or operations are allowed.
            corRule.setAllowedMethods(allowedMethod);
            corRule.setAllowedOrigins(allowedOrigin);
            // AllowedHeaders and ExposeHeaders do not support wildcard characters.
            corRule.setAllowedHeaders(allowedHeader);
            corRule.setExposeHeaders(exposedHeader);
            // Specify the cache duration for the response to a preflight OPTIONS request for a specific resource. Unit: seconds.
            corRule.setMaxAgeSeconds(10);

            // A maximum of 10 rules are allowed.
            putCorsRules.add(corRule);
            // Existing rules are overwritten.
            request.setCorsRules(putCorsRules);
            // Specify whether to return the Vary: Origin header. If you set this to TRUE, the Vary: Origin header is returned regardless of whether the request is a cross-origin request or whether the cross-origin request is successful. If you set this to False, the Vary: Origin header is not returned in any case.
            // request.setResponseVary(Boolean.TRUE);
            ossClient.setBucketCORS(request);
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
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Get CORS rules

The following code shows how to retrieve the CORS rules of a specified bucket:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.SetBucketCORSRequest;
import java.util.ArrayList;

public class Demo {

    public static void main(String[] args) throws Exception {
        // This example uses the endpoint of the China (Hangzhou) region. Replace it with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            ArrayList<SetBucketCORSRequest.CORSRule> corsRules;
            // Get the CORS rules.
            corsRules =  (ArrayList<SetBucketCORSRequest.CORSRule>) ossClient.getBucketCORSRules(bucketName);
            for (SetBucketCORSRequest.CORSRule rule : corsRules) {
                for (String allowedOrigin1 : rule.getAllowedOrigins()) {
                    // Get the allowed origins for cross-origin requests.
                    System.out.println(allowedOrigin1);
                }

                for (String allowedMethod1 : rule.getAllowedMethods()) {
                    // Get the allowed methods for cross-origin requests.
                    System.out.println(allowedMethod1);
                }

                if (rule.getAllowedHeaders().size() > 0){
                    for (String allowedHeader1 : rule.getAllowedHeaders()) {
                        // Get the allowed request headers for cross-origin requests.
                        System.out.println(allowedHeader1);
                    }
                }

                if (rule.getExposeHeaders().size() > 0) {
                    for (String exposeHeader : rule.getExposeHeaders()) {
                        // Get the response headers that users can access from applications.
                        System.out.println(exposeHeader);
                    }
                }

                if ( null != rule.getMaxAgeSeconds()) {
                    System.out.println(rule.getMaxAgeSeconds());
                }
            }
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
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Delete CORS rules

The following code shows how to delete all CORS rules of a specified bucket:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {

    public static void main(String[] args) throws Exception {
        // This example uses the endpoint of the China (Hangzhou) region. Replace it with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Delete all CORS rules of the bucket.
            ossClient.deleteBucketCORSRules(bucketName);
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
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## References

-   For the complete sample code for setting CORS rules, see [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketOperationsSample.java).
    
-   For more information about the API operation for setting CORS rules, see [PutBucketCors](/help/en/oss/developer-reference/putbucketcors#reference-wtg-ttc-xdb).
    
-   For more information about the API operation for retrieving CORS rules, see [GetBucketCors](/help/en/oss/developer-reference/getbucketcors#reference-m2w-ywc-xdb).
    
-   For more information about the API operation for deleting CORS rules, see [DeleteBucketCors](/help/en/oss/developer-reference/deletebucketcors#reference-fjn-szc-xdb).
