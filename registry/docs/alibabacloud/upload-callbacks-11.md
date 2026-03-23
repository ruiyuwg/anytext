Upload callbacks let you trigger server-side business logic after an object is uploaded — without polling. When you attach callback parameters to an upload request, OSS sends an HTTP POST request to your callback server after the upload completes, waits for the server's response, and then returns the upload result to the client.

## Usage notes

-   Examples in this topic use the public endpoint for the China (Hangzhou) region (`https://oss-cn-hangzhou.aliyuncs.com`). To access OSS from other Alibaba Cloud services in the same region, use the corresponding internal endpoint. For supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials in these examples are read from environment variables (`OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`). For configuration details, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    
-   These examples create an OSSClient instance using an OSS endpoint. To create an instance using a custom domain name or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    

## How it works

All examples in this topic share the same callback configuration pattern:

1.  Create a `Callback` object and set the callback URL and request body.
    
2.  Add optional custom parameters with the `x:` prefix.
    
3.  Attach the `Callback` object to the upload request.
    
4.  After OSS successfully stores the object, it sends an HTTP POST request to your callback URL with the resolved body.
    
5.  Read the callback server's response from the upload result.
    

The callback body uses placeholder variables (for example, `${bucket}`, `${object}`, `${size}`) that OSS resolves to actual values before sending the request. Custom variables use the `${x:varname}` syntax.

**Example callback body (template):**

```
{"bucket":${bucket},"object":${object},"mimeType":${mimeType},"size":${size},"my_var1":${x:var1},"my_var2":${x:var2}}
```

**Example resolved body sent to your server:**

```
{"bucket":"examplebucket","object":"exampledir/exampleobject.txt","mimeType":"text/plain","size":"9","my_var1":"value1","my_var2":"value2"}
```

## Sample code

### **Configure upload callbacks for simple upload**

```
import com.aliyun.oss.ClientBuilderConfiguration;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.common.auth.CredentialsProviderFactory;
import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.Callback;
import com.aliyun.oss.model.PutObjectRequest;
import com.aliyun.oss.model.PutObjectResult;

import java.io.ByteArrayInputStream;

public class Demo {

    public static void main(String[] args) throws Exception{
        // Specify the endpoint of the region. In this example, the endpoint of the China (Hangzhou) region is used.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. Example: exampledir/exampleobject.txt. Do not include the bucket name in the full path.
        String objectName = "exampledir/exampleobject.txt";
        // Specify the address of the server to which the callback request is sent. Example: https://example.com:23450.
        String callbackUrl = "yourCallbackServerUrl";
        // Specify the region in which the bucket is located. Example: cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            String content = "Hello OSS";
            PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, objectName, new ByteArrayInputStream(content.getBytes()));

            // Configure upload callback parameters.
            Callback callback = new Callback();
            callback.setCallbackUrl(callbackUrl);
            // (Optional) Specify the Host header in the callback request.
            // callback.setCallbackHost("yourCallbackHost");

            // Set the callback request body in JSON format and define placeholder variables.
            callback.setCalbackBodyType(Callback.CalbackBodyType.JSON);
            callback.setCallbackBody("{\\\"bucket\\\":${bucket},\\\"object\\\":${object},\\\"mimeType\\\":${mimeType},\\\"size\\\":${size},\\\"my_var1\\\":${x:var1},\\\"my_var2\\\":${x:var2}}");

            // Add custom parameters. Each key must start with x:.
            callback.addCallbackVar("x:var1", "value1");
            callback.addCallbackVar("x:var2", "value2");
            putObjectRequest.setCallback(callback);

            // Upload the object.
            PutObjectResult putObjectResult = ossClient.putObject(putObjectRequest);

            // Read the callback server's response.
            byte[] buffer = new byte[1024];
            putObjectResult.getResponse().getContent().read(buffer);
            // Close the stream after reading to prevent connection leaks.
            putObjectResult.getResponse().getContent().close();
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (Throwable ce) {
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

### **Configure upload callbacks for multipart upload**

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.internal.Mimetypes;
import com.aliyun.oss.model.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampledir/exampleobject.txt";
        String filePath = "D:\\localpath\\examplefile.txt";
        String region = "cn-hangzhou";
        // Specify the address of the server to which the callback request is sent. Example: https://example.com:23450.
        String callbackUrl = "https://example.com:23450";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Initialize the multipart upload task.
            InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucketName, objectName);

            // Set the Content-Type from the file.
            ObjectMetadata metadata = new ObjectMetadata();
            if (metadata.getContentType() == null) {
                metadata.setContentType(Mimetypes.getInstance().getMimetype(new File(filePath), objectName));
            }
            System.out.println("Content-Type: " + metadata.getContentType());
            request.setObjectMetadata(metadata);

            InitiateMultipartUploadResult upresult = ossClient.initiateMultipartUpload(request);
            String uploadId = upresult.getUploadId();

            // partETags stores the PartETag for each uploaded part.
            List<PartETag> partETags = new ArrayList<PartETag>();
            // Each part can be 100 KB to 5 GB. The last part can be smaller than 100 KB.
            // In this example, the part size is set to 1 MB.
            final long partSize = 1 * 1024 * 1024L;

            final File sampleFile = new File(filePath);
            long fileLength = sampleFile.length();
            int partCount = (int) (fileLength / partSize);
            if (fileLength % partSize != 0) {
                partCount++;
            }

            // Upload each part.
            for (int i = 0; i < partCount; i++) {
                long startPos = i * partSize;
                long curPartSize = (i + 1 == partCount) ? (fileLength - startPos) : partSize;
                UploadPartRequest uploadPartRequest = new UploadPartRequest();
                uploadPartRequest.setBucketName(bucketName);
                uploadPartRequest.setKey(objectName);
                uploadPartRequest.setUploadId(uploadId);

                InputStream instream = new FileInputStream(sampleFile);
                instream.skip(startPos);
                uploadPartRequest.setInputStream(instream);
                uploadPartRequest.setPartSize(curPartSize);
                // Part numbers range from 1 to 10,000. An InvalidArgument error is returned for numbers outside this range.
                uploadPartRequest.setPartNumber(i + 1);
                // Parts can be uploaded in any order and from different OSS clients. OSS sorts them by part number before combining.
                UploadPartResult uploadPartResult = ossClient.uploadPart(uploadPartRequest);
                partETags.add(uploadPartResult.getPartETag());

                instream.close();
            }

            // Complete the multipart upload and attach the callback.
            // OSS verifies all PartETags before combining parts into the final object.
            CompleteMultipartUploadRequest completeMultipartUploadRequest =
                    new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);

            // Configure upload callback parameters.
            Callback callback = new Callback();
            callback.setCallbackUrl(callbackUrl);
            // (Optional) Specify the Host header in the callback request.
            // callback.setCallbackHost("yourCallbackHost");

            callback.setCalbackBodyType(Callback.CalbackBodyType.JSON);
            callback.setCallbackBody("{\\\"bucket\\\":${bucket},\\\"object\\\":${object},\\\"mimeType\\\":${mimeType},\\\"size\\\":${size},\\\"my_var1\\\":${x:var1},\\\"my_var2\\\":${x:var2}}");

            callback.addCallbackVar("x:var1", "value1");
            callback.addCallbackVar("x:var2", "value2");
            completeMultipartUploadRequest.setCallback(callback);

            CompleteMultipartUploadResult completeMultipartUploadResult = ossClient.completeMultipartUpload(completeMultipartUploadRequest);
            System.out.println("Upload successful, ETag: " + completeMultipartUploadResult.getETag());

        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught a ClientException, which means the client encountered "
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

### **Configure upload callbacks for form upload**

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.common.auth.ServiceSignature;
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.common.utils.StringUtils;
import com.aliyun.oss.internal.OSSUtils;
import com.aliyun.oss.model.Callback;
import org.apache.commons.codec.binary.Base64;
import javax.activation.MimetypesFileTypeMap;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class PostObjectCallbackV4Demo {
    // Specify the full path of the local file to upload.
    private static final String localFilePath = "D:\\localpath\\examplefile.txt";
    // In this example, the endpoint of the China (Hangzhou) region is used.
    private static final String endpoint = "http://oss-cn-hangzhou.aliyuncs.com";
    // Obtain access credentials from environment variables.
    private static final String accessKeyId = System.getenv("OSS_ACCESS_KEY_ID");
    private static final String accessKeySecret = System.getenv("OSS_ACCESS_KEY_SECRET");
    private static final String bucketName = "examplebucket";
    private static final String objectName = "exampledir/exampleobject.txt";
    // Specify the URL of the server to receive callback requests. Example: http://oss-demo.oss-cn-hangzhou.aliyuncs.com:23450.
    private static final String callbackServerUrl = "http://oss-demo.oss-cn-hangzhou.aliyuncs.com:23450";
    // Specify the Host header in the callback request. Example: oss-cn-hangzhou.aliyuncs.com.
    private static final String callbackServerHost = "";
    private static final String region = "cn-hangzhou";
    private static Date requestDateTime = new Date();

    /**
     * Perform form upload.
     */
    private void PostObject() throws Exception {

        // Construct the upload URL: http://yourBucketName.oss-cn-hangzhou.aliyuncs.com
        String urlStr = endpoint.replace("http://", "http://" + bucketName + ".");
        Map<String, String> formFields = new LinkedHashMap<String, String>();
        formFields.put("key", objectName);
        formFields.put("Content-Disposition", "attachment;filename=" + localFilePath);

        // Configure callback parameters.
        Callback callback = new Callback();
        callback.setCallbackUrl(callbackServerUrl);
        callback.setCallbackHost(callbackServerHost);

        callback.setCalbackBodyType(Callback.CalbackBodyType.JSON);
        callback.setCallbackBody("{\\\"bucket\\\":${bucket},\\\"object\\\":${object},\\\"mimeType\\\":${mimeType},\\\"size\\\":${size},\\\"my_var1\\\":${x:var1},\\\"my_var2\\\":${x:var2}}");

        // Custom parameter keys must start with x: and be lowercase.
        callback.addCallbackVar("x:var1", "value1");
        callback.addCallbackVar("x:var2", "value2");
        setCallBack(formFields, callback);

        formFields.put("OSSAccessKeyId", accessKeyId);
        String policy = "{\"expiration\": \"2120-01-01T12:00:00.000Z\",\"conditions\": [" +
                "  {\"x-oss-signature-version\": \"OSS4-HMAC-SHA256\"},\n" +
                "  {\"x-oss-credential\": \"" + accessKeyId + "/" + getDate() + "/" + region + "/oss/aliyun_v4_request\"},\n" +
                "  {\"x-oss-date\": \"" + getDateTime() + "\"},\n" +
                "  [\"content-length-range\", 0, 104857600]" +
                "]}";
        String encodePolicy = new String(Base64.encodeBase64(policy.getBytes()));
        formFields.put("policy", encodePolicy);
        System.out.println("policy:" + policy);

        formFields.put("x-oss-signature-version", "OSS4-HMAC-SHA256");
        formFields.put("x-oss-credential", accessKeyId + "/" + getDate() + "/" + region + "/oss/aliyun_v4_request");
        formFields.put("x-oss-date", getDateTime());

        String stringToSign = new String(Base64.encodeBase64(policy.getBytes()));
        System.out.println("stringToSign:" + stringToSign);
        byte[] signingKey = buildSigningKey();
        String signature = buildSignature(signingKey, stringToSign);
        formFields.put("x-oss-signature", signature);
        System.out.println("Signature:" + signature);

        String ret = formUpload(urlStr, formFields);
        System.out.println("Post Object [" + objectName + "] to bucket [" + bucketName + "]");
        System.out.println("post reponse:" + ret);
    }

    private static String formUpload(String urlStr, Map<String, String> formFields)
            throws Exception {
        String res = "";
        HttpURLConnection conn = null;
        String boundary = "9431149156168";
        try {
            URL url = new URL(urlStr);
            conn = (HttpURLConnection) url.openConnection();
            conn.setConnectTimeout(5000);
            conn.setReadTimeout(30000);
            conn.setDoOutput(true);
            conn.setDoInput(true);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("User-Agent",
                    "Mozilla/5.0 (Windows; U; Windows NT 6.1; zh-CN; rv:1.9.2.6)");
            conn.setRequestProperty("Content-Type",
                    "multipart/form-data; boundary=" + boundary);

            OutputStream out = new DataOutputStream(conn.getOutputStream());
            if (formFields != null) {
                StringBuilder strBuf = new StringBuilder();
                Iterator<Map.Entry<String, String>> iter = formFields.entrySet().iterator();
                int i = 0;
                while (iter.hasNext()) {
                    Map.Entry<String, String> entry = iter.next();
                    String inputName = entry.getKey();
                    String inputValue = entry.getValue();
                    if (inputValue == null) {
                        continue;
                    }
                    if (i == 0) {
                        strBuf.append("--").append(boundary).append("\r\n");
                        strBuf.append("Content-Disposition: form-data; name=\"").append(inputName).append("\"\r\n\r\n");
                        strBuf.append(inputValue);
                    } else {
                        strBuf.append("\r\n").append("--").append(boundary).append("\r\n");
                        strBuf.append("Content-Disposition: form-data; name=\""
                                + inputName + "\"\r\n\r\n");
                        strBuf.append(inputValue);
                    }
                    i++;
                }
                out.write(strBuf.toString().getBytes());
            }

            File file = new File(localFilePath);
            String filename = file.getName();
            String contentType = new MimetypesFileTypeMap().getContentType(file);
            if (contentType == null || contentType.equals("")) {
                contentType = "application/octet-stream";
            }
            StringBuffer strBuf = new StringBuffer();
            strBuf.append("\r\n").append("--").append(boundary).append("\r\n");
            strBuf.append("Content-Disposition: form-data; name=\"file\"; "
                    + "filename=\"" + filename + "\"\r\n");
            strBuf.append("Content-Type: " + contentType + "\r\n\r\n");
            out.write(strBuf.toString().getBytes());
            DataInputStream in = new DataInputStream(new FileInputStream(file));
            int bytes = 0;
            byte[] bufferOut = new byte[1024];
            while ((bytes = in.read(bufferOut)) != -1) {
                out.write(bufferOut, 0, bytes);
            }
            in.close();
            byte[] endData = ("\r\n--" + boundary + "--\r\n").getBytes();
            out.write(endData);
            out.flush();
            out.close();

            strBuf = new StringBuffer();
            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = null;
            while ((line = reader.readLine()) != null) {
                strBuf.append(line).append("\n");
            }
            res = strBuf.toString();
            reader.close();
            reader = null;
        } catch (ClientException e) {
            System.err.println("Send post request exception: " + e);
            System.err.println(e.getErrorCode() + " msg=" + e.getMessage());
            throw e;
        } finally {
            if (conn != null) {
                conn.disconnect();
                conn = null;
            }
        }
        return res;
    }

    private static void setCallBack(Map<String, String> formFields, Callback callback) {
        if (callback != null) {
            String jsonCb = OSSUtils.jsonizeCallback(callback);
            String base64Cb = BinaryUtil.toBase64String(jsonCb.getBytes());
            formFields.put("callback", base64Cb);
            if (callback.hasCallbackVar()) {
                Map<String, String> varMap = callback.getCallbackVar();
                for (Map.Entry<String, String> entry : varMap.entrySet()) {
                    formFields.put(entry.getKey(), entry.getValue());
                }
            }
        }
    }

    private static String getDateTime() {
        return getIso8601DateTimeFormat().format(requestDateTime);
    }

    private static DateFormat getIso8601DateTimeFormat() {
        SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd'T'HHmmss'Z'", Locale.US);
        df.setTimeZone(new SimpleTimeZone(0, "GMT"));
        return df;
    }

    private static DateFormat getIso8601DateFormat() {
        SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd", Locale.US);
        df.setTimeZone(new SimpleTimeZone(0, "GMT"));
        return df;
    }

    private static String getDate() {
        return getIso8601DateFormat().format(requestDateTime);
    }

    private String buildSignature(byte[] signingKey, String stringToSign) {
        byte[] result = ServiceSignature.create("HmacSHA256").computeHash(signingKey, stringToSign.getBytes(StringUtils.UTF8));
        return BinaryUtil.toHex(result);
    }

    private byte[] buildSigningKey() {
        ServiceSignature signature = ServiceSignature.create("HmacSHA256");
        byte[] signingSecret = ("aliyun_v4" + accessKeySecret).getBytes(StringUtils.UTF8);
        byte[] signingDate = signature.computeHash(signingSecret, getDate().getBytes(StringUtils.UTF8));
        byte[] signingRegion = signature.computeHash(signingDate, region.getBytes(StringUtils.UTF8));
        byte[] signingService = signature.computeHash(signingRegion, "oss".getBytes(StringUtils.UTF8));
        return signature.computeHash(signingService, "aliyun_v4_request".getBytes(StringUtils.UTF8));
    }

    public static void main(String[] args) throws Exception {
        PostObjectCallbackV4Demo ossPostObject = new PostObjectCallbackV4Demo();
        ossPostObject.PostObject();
    }
}
```

### **Configure upload callbacks for resumable upload**

```
package Callback;

import com.aliyun.oss.ClientBuilderConfiguration;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.internal.Mimetypes;
import com.aliyun.oss.model.*;

import java.io.File;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampledir/exampleobject.txt";
        String filePath = "D:\\localpath\\examplefile.txt";
        String region = "cn-hangzhou";
        // Specify the address of the server to which the callback request is sent. Example: https://example.com:23450.
        String callbackUrl = "http://example.com:23450/callback";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Set the Content-Type from the file.
            ObjectMetadata metadata = new ObjectMetadata();
            if (metadata.getContentType() == null) {
                metadata.setContentType(Mimetypes.getInstance().getMimetype(new File(filePath), objectName));
            }
            System.out.println("Content-Type: " + metadata.getContentType());

            UploadFileRequest uploadFileRequest = new UploadFileRequest(bucketName, objectName);
            uploadFileRequest.setUploadFile(filePath);
            // Number of concurrent upload threads. Default: 1.
            uploadFileRequest.setTaskNum(5);
            // Part size in bytes. Valid values: 100 KB to 5 GB. Default: 100 KB.
            uploadFileRequest.setPartSize(1 * 1024 * 1024);
            // Enable resumable upload. Disabled by default.
            uploadFileRequest.setEnableCheckpoint(true);
            // Path to the checkpoint file that tracks upload progress.
            // If a part fails, the upload resumes from where it left off.
            // The checkpoint file is deleted automatically after the upload completes.
            // Default path: ${uploadFile}.ucp (same directory as the file being uploaded).
            uploadFileRequest.setCheckpointFile("yourCheckpointFile");
            uploadFileRequest.setObjectMetadata(metadata);

            // Configure upload callback parameters.
            Callback callback = new Callback();
            callback.setCallbackUrl(callbackUrl);
            // (Optional) Specify the Host header in the callback request.
            // callback.setCallbackHost("yourCallbackHost");

            callback.setCalbackBodyType(Callback.CalbackBodyType.JSON);
            callback.setCallbackBody("{\\\"bucket\\\":${bucket},\\\"object\\\":${object},\\\"mimeType\\\":${mimeType},\\\"size\\\":${size},\\\"my_var1\\\":${x:var1},\\\"my_var2\\\":${x:var2}}");

            callback.addCallbackVar("x:var1", "value1");
            callback.addCallbackVar("x:var2", "value2");
            uploadFileRequest.setCallback(callback);

            ossClient.uploadFile(uploadFileRequest);

        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (Throwable ce) {
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

### **Use a presigned URL to upload an object with callbacks**

Include callback parameters in the presigned URL so that clients can upload objects with callbacks using HTTP PUT requests — without needing access credentials at upload time.

#### Step 1: Generate a presigned URL with callback parameters

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.CredentialsProviderFactory;
import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.internal.OSSHeaders;
import com.aliyun.oss.model.GeneratePresignedUrlRequest;

import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.*;

public class OssPresignExample {
    public static void main(String[] args) throws Throwable {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampleobject.txt";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        URL signedUrl = null;
        try {
            // Build the callback parameter as a Base64-encoded JSON string.
            String callbackUrl = "http://www.example.com/callback";
            String callbackBody = "{\"callbackUrl\":\"" + callbackUrl + "\",\"callbackBody\":\"bucket=${bucket}&object=${object}&my_var_1=${x:var1}&my_var_2=${x:var2}\"}";
            String callbackBase64 = Base64.getEncoder().encodeToString(callbackBody.getBytes());

            // Build the callback variable parameter as a Base64-encoded JSON string.
            String callbackVarJson = "{\"x:var1\":\"value1\",\"x:var2\":\"value2\"}";
            String callbackVarBase64 = Base64.getEncoder().encodeToString(callbackVarJson.getBytes());

            // Add callback parameters to the request headers.
            Map<String, String> headers = new HashMap<String, String>();
            headers.put(OSSHeaders.OSS_HEADER_CALLBACK, callbackBase64);
            headers.put(OSSHeaders.OSS_HEADER_CALLBACK_VAR, callbackVarBase64);

            // Set the URL validity period to 3600 seconds.
            Date expiration = new Date(new Date().getTime() + 3600 * 1000);

            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
            dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
            String expirationStr = dateFormat.format(expiration);

            GeneratePresignedUrlRequest request = new GeneratePresignedUrlRequest(bucketName, objectName);
            request.setMethod(HttpMethod.PUT);
            request.setExpiration(expiration);
            request.setHeaders(headers);

            System.out.println("callback:" + callbackBase64);
            System.out.println("callback-var:" + callbackVarBase64);

            URL url = ossClient.generatePresignedUrl(request);

            System.out.println("method: PUT,");
            System.out.println(" expiration: " + expirationStr + ",");
            System.out.println(" url: " + url);

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
        }
    }
}
```

#### Step 2: Upload using the presigned URL

Use the presigned URL to upload an object. Pass the `x-oss-callback` and `x-oss-callback-var` headers with the same Base64-encoded values used when generating the URL.

##### curl

```
curl -X PUT \
     -H "x-oss-callback: eyJjYWxsYmFja1VybCI6Imh0dHA6Ly93d3cuZXhhbXBsZS5jb20vY2FsbGJhY2siLCJjYWxsYmFja0JvZHkiOiJidWNrZXQ9JHtidWNrZXR9Jm9iamVjdD0ke29iamVjdH0mbXlfdmFyXzE9JHt4OnZhcjF9Jm15X3Zhcl8yPSR7eDp2YXIyfSJ9" \
     -H "x-oss-callback-var: eyJ4OnZhcjEiOiJ2YWx1ZTEiLCJ4OnZhcjIiOiJ2YWx1ZTIifQ==" \
     -T "C:\\Users\\demo.txt" \
     "https://exampleobject.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T083238Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************%2F20241112%2Fcn-hangzhou%2Foss%2Faliyun_v4_request&x-oss-signature=ed5a******************************************************"
```

##### Python

```
import requests

def upload_file(signed_url, file_path, headers=None):
    if not headers:
        headers = {}

    try:
        with open(file_path, 'rb') as file:
            response = requests.put(signed_url, data=file, headers=headers)
            print(f"Status code: {response.status_code}")
            if response.status_code == 200:
                print("Upload successful.")
            else:
                print("Upload failed.")
            print(response.text)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    signed_url = "<signedUrl>"
    file_path = "C:\\Users\\demo.txt"

    headers = {
        "x-oss-callback": "eyJjYWxsYmFja1VybCI6Imh0dHA6Ly93d3cuZXhhbXBsZS5jb20vY2FsbGJhY2siLCJjYWxsYmFja0JvZHkiOiJidWNrZXQ9JHtidWNrZXR9Jm9iamVjdD0ke29iamVjdH0mbXlfdmFyXzE9JHt4OnZhcjF9Jm15X3Zhcl8yPSR7eDp2YXIyfSJ9",
        "x-oss-callback-var": "eyJ4OnZhcjEiOiJ2YWx1ZTEiLCJ4OnZhcjIiOiJ2YWx1ZTIifQ==",
    }

    upload_file(signed_url, file_path, headers)
```

##### Go

```
package main

import (
    "bytes"
    "fmt"
    "io"
    "net/http"
    "os"
)

func uploadFile(signedUrl string, filePath string, headers map[string]string) error {
    file, err := os.Open(filePath)
    if err != nil {
        return err
    }
    defer file.Close()

    fileBytes, err := io.ReadAll(file)
    if err != nil {
        return err
    }

    req, err := http.NewRequest("PUT", signedUrl, bytes.NewBuffer(fileBytes))
    if err != nil {
        return err
    }

    for key, value := range headers {
        req.Header.Add(key, value)
    }

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return err
    }
    defer resp.Body.Close()

    fmt.Printf("Status code: %d\n", resp.StatusCode)
    if resp.StatusCode == 200 {
        fmt.Println("Upload successful.")
    } else {
        fmt.Println("Upload failed.")
    }
    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
    return nil
}

func main() {
    signedUrl := "<signedUrl>"
    filePath := "C:\\Users\\demo.txt"

    headers := map[string]string{
        "x-oss-callback":     "eyJjYWxsYmFja1VybCI6Imh0dHA6Ly93d3cuZXhhbXBsZS5jb20vY2FsbGJhY2siLCJjYWxsYmFja0JvZHkiOiJidWNrZXQ9JHtidWNrZXR9Jm9iamVjdD0ke29iamVjdH0mbXlfdmFyXzE9JHt4OnZhcjF9Jm15X3Zhcl8yPSR7eDp2YXIyfSJ9",
        "x-oss-callback-var": "eyJ4OnZhcjEiOiJ2YWx1ZTEiLCJ4OnZhcjIiOiJ2YWx1ZTIifQ==",
    }

    if err := uploadFile(signedUrl, filePath, headers); err != nil {
        fmt.Printf("An error occurred: %v\n", err)
    }
}
```

##### Java

```
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.FileEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.*;
import java.net.URL;
import java.util.*;

public class SignUrlUpload {
    public static void main(String[] args) throws Throwable {
        CloseableHttpClient httpClient = null;
        CloseableHttpResponse response = null;

        URL signedUrl = new URL("<signedUrl>");
        String pathName = "C:\\Users\\demo.txt";

        Map<String, String> headers = new HashMap<>();
        headers.put("x-oss-callback", "eyJjYWxsYmFja1VybCI6Imh0dHA6Ly93d3cuZXhhbXBsZS5jb20vY2FsbGJhY2siLCJjYWxsYmFja0JvZHkiOiJidWNrZXQ9JHtidWNrZXR9Jm9iamVjdD0ke29iamVjdH0mbXlfdmFyXzE9JHt4OnZhcjF9Jm15X3Zhcl8yPSR7eDp2YXIyfSJ9");
        headers.put("x-oss-callback-var", "eyJ4OnZhcjEiOiJ2YWx1ZTEiLCJ4OnZhcjIiOiJ2YWx1ZTIifQ==");

        try {
            HttpPut put = new HttpPut(signedUrl.toString());
            HttpEntity entity = new FileEntity(new File(pathName));
            put.setEntity(entity);

            for (Map.Entry header : headers.entrySet()) {
                put.addHeader(header.getKey().toString(), header.getValue().toString());
            }

            httpClient = HttpClients.createDefault();
            response = httpClient.execute(put);

            System.out.println("Status code: " + response.getStatusLine().getStatusCode());
            if (response.getStatusLine().getStatusCode() == 200) {
                System.out.println("Upload successful.");
            }
            System.out.println(response.toString());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            response.close();
            httpClient.close();
        }
    }
}
```

##### PHP

```
<?php

function uploadFile($signedUrl, $filePath, $headers = []) {
    if (!file_exists($filePath)) {
        echo "The file does not exist: $filePath\n";
        return;
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $signedUrl);
    curl_setopt($ch, CURLOPT_PUT, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_INFILE, fopen($filePath, 'rb'));
    curl_setopt($ch, CURLOPT_INFILESIZE, filesize($filePath));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array_map(function($key, $value) {
        return "$key: $value";
    }, array_keys($headers), $headers));

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    echo "Status code: $httpCode\n";
    if ($httpCode == 200) {
        echo "Upload successful.\n";
    } else {
        echo "Upload failed.\n";
    }
    echo $response . "\n";
}

// Replace <signedUrl> with the presigned URL.
$signedUrl = "<signedUrl>";
$filePath = "C:\\Users\\demo.txt";

$headers = [
    "x-oss-callback" => "eyJjYWxsYmFja1VybCI6Imh0dHA6Ly93d3cuZXhhbXBsZS5jb20vY2FsbGJhY2siLCJjYWxsYmFja0JvZHkiOiJidWNrZXQ9JHtidWNrZXR9Jm9iamVjdD0ke29iamVjdH0mbXlfdmFyXzE9JHt4OnZhcjF9Jm15X3Zhcl8yPSR7eDp2YXIyfSJ9",
    "x-oss-callback-var" => "eyJ4OnZhcjEiOiJ2YWx1ZTEiLCJ4OnZhcjIiOiJ2YWx1ZTIifQ==",
];

uploadFile($signedUrl, $filePath, $headers);
?>
```

## Troubleshooting

### Connection leaks after reading callback response

After reading the callback server's response from `putObjectResult.getResponse().getContent()`, always close the stream. Leaving the stream open prevents the underlying HTTP connection from being returned to the pool, which eventually exhausts available connections.

```
putObjectResult.getResponse().getContent().read(buffer);
putObjectResult.getResponse().getContent().close(); // Required
```

### Callback server not reachable

The callback URL must be accessible from the OSS service — not just from your local machine. If OSS cannot reach the callback URL, the upload fails with a callback-related error.

Check that:

-   The callback server is publicly accessible or reachable from the OSS network.
    
-   The callback URL uses the correct protocol (`http://` or `https://`) and port.
    
-   No firewall rules block incoming requests from OSS IP ranges.
    

### Presigned URL signature mismatch

When using presigned URLs, the `x-oss-callback` and `x-oss-callback-var` header values sent during upload must exactly match those included in the signature when the URL was generated. Any difference causes a signature verification error.

## What's next

-   For the complete sample code, see [GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/CallbackSample.java).
    
-   For the full API reference for upload callbacks, see [Callback](/help/en/oss/developer-reference/callback#reference-zkm-311-hgb).
