You can configure a bucket for static website hosting and set redirection rules (RoutingRule) for mirroring-based back-to-origin. After you enable static website hosting, requests to the website are equivalent to requests to the bucket. You can also configure automatic redirects to a specified index page and error page. Redirection rules for mirroring-based back-to-origin help you seamlessly migrate data to Object Storage Service (OSS).

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To configure static website hosting or mirroring-based back-to-origin, you must have the `oss:PutBucketWebsite` permission. To retrieve the configuration of static website hosting or mirroring-based back-to-origin, you must have the `oss:GetBucketWebsite` permission. To delete the configuration of static website hosting or mirroring-based back-to-origin, you must have the `oss:DeleteBucketWebsite` permission. For more information, see [Grant custom access policies to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Static website hosting

-   ### Configure static website hosting
    
    The following code shows how to configure static website hosting:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.SetBucketWebsiteRequest;
    
    public class Demo {
    
        public static void main(String[] args) throws Exception {
            // The China (Hangzhou) Endpoint is used as an example. Specify the actual Endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. For example, examplebucket.
            String bucketName = "examplebucket";
            // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer needed, call the shutdown method to release its resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Specify the bucket name.
                SetBucketWebsiteRequest request = new SetBucketWebsiteRequest(bucketName);
                // Set the default homepage for static website hosting.
                request.setIndexDocument("index.html");
                // Set the default 404 page for static website hosting.
                request.setErrorDocument("error.html");
                ossClient.setBucketWebsite(request);
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
    
-   ### View the static website hosting configuration
    
    The following code shows how to view the static website hosting configuration:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.BucketWebsiteResult;
    
    public class Demo {
    
        public static void main(String[] args) throws Exception {
            // The China (Hangzhou) Endpoint is used as an example. Specify the actual Endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. For example, examplebucket.
            String bucketName = "examplebucket";
            // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer needed, call the shutdown method to release its resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Specify the bucket name.
                BucketWebsiteResult result = ossClient.getBucketWebsite(bucketName);
                // View the default homepage and default 404 page of the static website hosting configuration.
                System.out.println(result.getIndexDocument());
                System.out.println(result.getErrorDocument());
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
    
-   ### Delete the static website hosting configuration
    
    The following code shows how to delete the static website hosting configuration:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    
    public class Demo {
    
        public static void main(String[] args) throws Exception {
            // The China (Hangzhou) Endpoint is used as an example. Specify the actual Endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. For example, examplebucket.
            String bucketName = "examplebucket";
            // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer needed, call the shutdown method to release its resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Specify the bucket name.
                ossClient.deleteBucketWebsite(bucketName);
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
    

## Mirroring-based back-to-origin

Mirroring-based back-to-origin is mainly used for seamless data migration to OSS. For example, your service might be running on your own origin server or on another cloud product. If you want to migrate the service to OSS for business development, you must ensure that the service continues to run during the migration. During the migration, you can use mirroring-based back-to-origin rules to retrieve data that has not been migrated to OSS. This ensures that your service runs as expected.

-   ### Configure mirroring-based back-to-origin
    
    For example, when a requester accesses a file that does not exist in the destination bucket, you can specify back-to-origin conditions and an origin URL to retrieve the object file from the origin server. For example, you have a bucket named examplebucket in the China (Hangzhou) region. If a requester attempts to access a file that does not exist in the examplefolder directory in the root directory of the bucket, you want the requester to be able to retrieve the object file from the examplefolder directory of the https://www.example.com/ site.
    
    The following code shows how to configure a mirroring-based back-to-origin rule for the preceding scenario:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.RoutingRule;
    import com.aliyun.oss.model.SetBucketWebsiteRequest;
    import java.util.ArrayList;
    import java.util.HashMap;
    import java.util.List;
    import java.util.Map;
    
    public class Demo {
    
        public static void main(String[] args) throws Exception {
            // The China (Hangzhou) Endpoint is used as an example. Specify the actual Endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. For example, examplebucket.
            String bucketName = "examplebucket";
            // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer needed, call the shutdown method to release its resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                SetBucketWebsiteRequest request = new SetBucketWebsiteRequest(bucketName);
                // The behavior when an object that does not exist and whose name does not end with a forward slash (/) is accessed. This takes effect after a default homepage is set.
                //request.setSubDirType(null);
                // Specifies whether to redirect to the default homepage of a subdirectory when the subdirectory is accessed.
                //request.setSupportSubDir(false);
    
                List<RoutingRule> routingRules = new ArrayList<RoutingRule>();
    
                RoutingRule rule = new RoutingRule();
                rule.setNumber(1);
                // Only objects with this prefix can match this rule.
                rule.getCondition().setKeyPrefixEquals("examplebucket");
                // The rule is matched only if an HTTP status code of 404 is returned for a request to the specified object.
                rule.getCondition().setHttpErrorCodeReturnedEquals(404);
                // Specify the redirect type.
                rule.getRedirect().setRedirectType(RoutingRule.RedirectType.Mirror);
                // Specify the origin URL for mirroring-based back-to-origin. For example, https://www.example.com/.
                rule.getRedirect().setMirrorURL("<yourMirrorURL>");
                //rule.getRedirect().setMirrorRole("AliyunOSSMirrorDefaultRole");
                // Specifies whether to include request parameters when a redirection or mirroring-based back-to-origin rule is executed.
                rule.getRedirect().setPassQueryString(true);
                // This parameter has the same function as PassQueryString but has a higher priority. This parameter takes effect only when RedirectType is set to Mirror.
                rule.getRedirect().setMirrorPassQueryString(true);
                // Specify the status code to return for the redirection. This parameter takes effect only when RedirectType is set to External or AliCDN.
                //rule.getRedirect().setHttpRedirectCode(302);
                // Specify the domain name for the redirection. The domain name must be compliant with domain name specifications.
                //rule.getRedirect().setHostName("oss.aliyuncs.com");
                // Specify the protocol for the redirection. This parameter takes effect only when RedirectType is set to External or AliCDN.
                //rule.getRedirect().setProtocol(RoutingRule.Protocol.Https);
                // During redirection, the object name is replaced with the value of ReplaceKeyWith. ReplaceKeyWith supports variables.
                //rule.getRedirect().setReplaceKeyWith("${key}.jpg");
                // If this parameter is set to true, the prefix of the object name is replaced with the value of ReplaceKeyPrefixWith.
                rule.getRedirect().setEnableReplacePrefix(true);
                // During redirection, the prefix of the object name is replaced with this value.
                rule.getRedirect().setReplaceKeyPrefixWith("examplebucket");
                // Specifies whether to check the MD5 hash of the back-to-origin body. This parameter takes effect only when RedirectType is set to Mirror.
                rule.getRedirect().setMirrorCheckMd5(true);
    
                RoutingRule.MirrorHeaders mirrorHeaders = new RoutingRule.MirrorHeaders();
                // Specifies whether to pass through headers other than the following to the origin server. This parameter takes effect only when RedirectType is set to Mirror.
                mirrorHeaders.setPassAll(false);
                List passes = new ArrayList<String>();
                passes.add("cache-control");
                // Pass through the specified headers to the origin server. This parameter takes effect only when RedirectType is set to Mirror.
                mirrorHeaders.setPass(passes);
                List removes = new ArrayList<String>();
                removes.add("content-type");
                // Prohibit the pass-through of specified headers to the origin server. This parameter takes effect only when RedirectType is set to Mirror.
                mirrorHeaders.setRemove(removes);
                List sets = new ArrayList<Map<String, String>>();
                Map header1 = new HashMap<String, String>();
                header1.put("Key", "key1");
                header1.put("Value", "value1");
                Map header2 = new HashMap<String, String>();
                header2.put("Key", "key2");
                header2.put("Value", "value2");
                sets.add(header1);
                sets.add(header2);
                // Set the headers to pass to the origin server. These headers are set for back-to-origin requests, regardless of whether they are included in the original request.
                mirrorHeaders.setSet(sets);
                // Specify the headers to include in back-to-origin requests. This parameter takes effect only when RedirectType is set to Mirror.
                rule.getRedirect().setMirrorHeaders(mirrorHeaders);
    
                routingRules.add(rule);
                request.setRoutingRules(routingRules);
                ossClient.setBucketWebsite(request);
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
    
-   ### Retrieve the mirroring-based back-to-origin configuration
    
    The following code shows how to retrieve the mirroring-based back-to-origin configuration:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.BucketWebsiteResult;
    
    public class Demo {
    
        public static void main(String[] args) throws Exception {
            // The China (Hangzhou) Endpoint is used as an example. Specify the actual Endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. For example, examplebucket.
            String bucketName = "examplebucket";
            // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer needed, call the shutdown method to release its resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                BucketWebsiteResult result = ossClient.getBucketWebsite(bucketName);
                result.getSubDirType();
                // Get the ordinal number of the redirection or mirroring-based back-to-origin rule that is matched and executed.
                System.out.println(result.getRoutingRules().get(0).getNumber());
                // Get the prefix that the rule matches.
                System.out.println(result.getRoutingRules().get(0).getCondition().getKeyPrefixEquals());
                // Get the HTTP status code.
                System.out.println(result.getRoutingRules().get(0).getCondition().getHttpErrorCodeReturnedEquals());
                // Get the suffix that the rule matches.
                System.out.println(result.getRoutingRules().get(0).getCondition().getKeySuffixEquals());
                // Get the redirect type.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getRedirectType());
                // Get the carried request parameters.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getMirrorPassQueryString());
                // Get the origin URL for mirroring-based back-to-origin.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getMirrorURL());
                // Get the status code returned for the redirection.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getHttpRedirectCode());
                // Get the specified headers to pass through.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getMirrorHeaders().getPass().get(0));
                // Get the specified headers that are prohibited from being passed through.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getMirrorHeaders().getRemove().get(0));
                // Get the protocol for the redirection.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getProtocol());
                // Get the domain name for the redirection.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getHostName());
                // Get the value to replace the prefix of the object name during redirection. If the prefix is empty, this string is inserted at the beginning of the object name.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getReplaceKeyPrefixWith());
                // Get the replacement value for the object name specified by ReplaceKeyWith during redirection. ReplaceKeyWith supports variables.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getReplaceKeyWith());
                // Get the status code returned for the redirection.
                System.out.println(result.getRoutingRules().get(0).getRedirect().getHttpRedirectCode());
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
    
-   ### Delete the mirroring-based back-to-origin configuration
    
    The following code shows how to delete the mirroring-based back-to-origin configuration:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    
    public class Demo {
    
        public static void main(String[] args) throws Exception {
            // The China (Hangzhou) Endpoint is used as an example. Specify the actual Endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. For example, examplebucket.
            String bucketName = "examplebucket";        
            // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer needed, call the shutdown method to release its resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Specify the bucket name.
                ossClient.deleteBucketWebsite(bucketName);
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

-   For the complete sample code for static website hosting and mirroring-based back-to-origin, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketOperationsSample.java).
    
-   For more information about the API operation used to configure static website hosting or mirroring-based back-to-origin, see [PutBucketWebsite](/help/en/oss/developer-reference/putbucketwebsite#reference-hwb-yr5-tdb).
    
-   For more information about the API operation used to retrieve the configuration of static website hosting or mirroring-based back-to-origin, see [GetBucketWebsite](/help/en/oss/developer-reference/getbucketwebsite#reference-wvy-s4w-tdb).
    
-   For more information about the API operation used to delete the configuration of static website hosting or mirroring-based back-to-origin, see [DeleteBucketWebsite](/help/en/oss/developer-reference/deletebucketwebsite#reference-zrl-msw-tdb).
