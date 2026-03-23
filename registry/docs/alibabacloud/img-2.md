Image processing is a large-scale, secure, low-cost, and highly reliable image processing service from Object Storage Service (OSS). After you upload an image to OSS, you can use simple RESTful interfaces to process it at any time and from any location on an internet-connected device.

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    

## Use image processing parameters to process images

-   Use a single image processing parameter to process an image
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.GetObjectRequest;
    import java.io.File;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // This example uses the endpoint of the China (Hangzhou) region. Replace it with your actual endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Set the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Set the full path of the object. The full path cannot include the bucket name.
            String objectName = "exampleobject.jpg";
            // Set the full path of the local file. Example: D:\\localpath\\example-resize.jpg. If the specified local file exists, it is overwritten. If it does not exist, it is created.
            String localPath = "D:\\localpath\\example-resize.jpg";
            // Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer used, call the shutdown method to release the resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Resize the image to a fixed width and height of 100 px.
                String style = "image/resize,m_fixed,w_100,h_100";
                GetObjectRequest request = new GetObjectRequest(bucketName, objectName);
                request.setProcess(style);
                // Name the processed image example-resize.jpg and save it to a local path.
                // If you do not specify a local path and specify only a file name such as example-resize.jpg, the file is saved to the local path of the project by default.
                ossClient.getObject(request, new File(localPath));
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
    
-   Use different image processing parameters to process an image
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.GetObjectRequest;
    import java.io.File;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // This example uses the endpoint of the China (Hangzhou) region. Replace it with your actual endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Set the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Set the full path of the object. The full path cannot include the bucket name.
            String objectName = "exampleobject.jpg";
            // Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer used, call the shutdown method to release the resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Resize the image to a fixed width and height of 100 px.
                String style = "image/resize,m_fixed,w_100,h_100";
                GetObjectRequest request = new GetObjectRequest(bucketName, objectName);
                request.setProcess(style);
                // Name the processed image example-resize.jpg and save it to a local path.
                // Set the full path of the local file. Example: D:\\localpath\\example-resize.jpg. If the specified local file exists, it is overwritten. If it does not exist, it is created.
                // If you do not specify a local path and specify only a file name such as example-resize.jpg, the file is saved to the local path of the project by default.
                ossClient.getObject(request, new File("D:\\localpath\\example-resize.jpg"));
    
                // Crop the image to a width and height of 100 px, starting from the coordinate (100,100).
                style = "image/crop,w_100,h_100,x_100,y_100";
                request = new GetObjectRequest(bucketName, objectName);
                request.setProcess(style);
                // Name the processed image example-crop.jpg and save it to a local path.
                ossClient.getObject(request, new File("D:\\localpath\\example-crop.jpg"));
    
                // Rotate the image by 90 degrees.
                style = "image/rotate,90";
                request = new GetObjectRequest(bucketName, objectName);
                request.setProcess(style);
                // Name the processed image example-rotate.jpg and save it to a local path.
                ossClient.getObject(request, new File("D:\\localpath\\example-rotate.jpg"));
    
                // Add a text watermark to the image.
                // To obtain the watermark string, Base64-encode the text content of the watermark. Then, replace plus signs (+) with hyphens (-), forward slashes (/) with underscores (_), and remove the trailing equal signs (=).
                // The watermark string for the text "Hello World" is SGVsbG8gV29ybGQ after encoding.
                style = "image/watermark,text_SGVsbG8gV29ybGQ";
                request = new GetObjectRequest(bucketName, objectName);
                request.setProcess(style);
                // Name the processed image example-watermarktext.jpg and save it to a local path.
                ossClient.getObject(request, new File("D:\\localpath\\example-watermarktext.jpg"));
    
                // Add an image watermark to the image. Make sure that the watermark image is stored in the same bucket as the source image.
                // To obtain the watermark string, Base64-encode the full path of the watermark image. Then, replace plus signs (+) with hyphens (-), forward slashes (/) with underscores (_), and remove the trailing equal signs (=).
                // The watermark string for the full path "panda.jpg" is cGFuZGEuanBn after encoding.
                style = "image/watermark,image_cGFuZGEuanBn";
                request = new GetObjectRequest(bucketName, objectName);
                request.setProcess(style);
                // Name the processed image example-watermarkimage.jpg and save it to a local path.
                ossClient.getObject(request, new File("D:\\localpath\\example-watermarkimage.jpg"));
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
    
-   Use multiple image processing parameters to process an image at the same time
    
    To use multiple image processing parameters on the same image, separate the parameters in the style string with forward slashes (/).
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.GetObjectRequest;
    import java.io.File;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // This example uses the endpoint of the China (Hangzhou) region. Replace it with your actual endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Set the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Set the full path of the object. The full path cannot include the bucket name.
            String objectName = "exampleobject.jpg";
            // Set the full path of the local file. Example: D:\\localpath\\example-new.jpg. If the specified local file exists, it is overwritten. If it does not exist, it is created.
            String pathName = "D:\\localpath\\example-new.jpg";
            // Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // When the OSSClient instance is no longer used, call the shutdown method to release the resources.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Resize the image to a fixed width and height of 100 px, and then rotate it by 90 degrees.
                String style = "image/resize,m_fixed,w_100,h_100/rotate,90";
                GetObjectRequest request = new GetObjectRequest(bucketName, objectName);
                request.setProcess(style);
                // Name the processed image example-new.jpg and save it to a local path.
                // If you do not specify a local path and specify only a file name such as example-new.jpg, the file is saved to the local path of the project by default.
                ossClient.getObject(request, new File("D:\\localpath\\example-new.jpg"));
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
    

## Use an image style to process an image

You can create an image style in the OSS console to encapsulate multiple image processing parameters. Then, you can use the style to process images in batches. For more information, see [Image styles](/help/en/oss/user-guide/image-styles#concept-mr2-x3c-wdb).

The following code provides an example of how to use an image style to process an image.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GetObjectRequest;
import java.io.File;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // This example uses the endpoint of the China (Hangzhou) region. Replace it with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Set the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Set the full path of the object. The full path cannot include the bucket name.
        String objectName = "exampleobject.jpg";
        // Set the full path of the local file. Example: D:\\localpath\\example-new.jpg. If the specified local file exists, it is overwritten. If it does not exist, it is created.
        String pathName = "D:\\localpath\\example-new.jpg";
        // Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release the resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Use a custom style to process the image.
            // Replace yourCustomStyleName with the name of the image style that you created in the OSS console.
            String style = "style/yourCustomStyleName";
            GetObjectRequest request = new GetObjectRequest(bucketName, objectName);
            request.setProcess(style);
            // Name the processed image example-new.jpg and save it to a local path.
            // If you do not specify a local path and specify only a file name such as example-new.jpg, the file is saved to the local path of the project by default.
            ossClient.getObject(request, new File(pathName));
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

## Image processing persistence

By default, the image processing service does not save the processed images. You can use the ImgSaveAs operation to save a processed image to its source bucket.

The following code provides an example of how to persist a processed image.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.common.utils.IOUtils;
import com.aliyun.oss.model.GenericResult;
import com.aliyun.oss.model.ProcessObjectRequest;
import java.util.Formatter;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // This example uses the endpoint of the China (Hangzhou) region. Replace it with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Set the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Set the full path of the object. The full path cannot include the bucket name.
        String sourceImage = "exampleimage.png";
        // Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release the resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Resize the image to a fixed width and height of 100 px.
            StringBuilder sbStyle = new StringBuilder();
            Formatter styleFormatter = new Formatter(sbStyle);
            String styleType = "image/resize,m_fixed,w_100,h_100";
            // Name the processed image example-resize.png and save it to the current bucket.
            // Set the full path of the object. The full path cannot include the bucket name.
            String targetImage = "example-resize.png";
            styleFormatter.format("%s|sys/saveas,o_%s,b_%s", styleType,
                    BinaryUtil.toBase64String(targetImage.getBytes()),
                    BinaryUtil.toBase64String(bucketName.getBytes()));
            System.out.println(sbStyle.toString());
            ProcessObjectRequest request = new ProcessObjectRequest(bucketName, sourceImage, sbStyle.toString());
            GenericResult processResult = ossClient.processObject(request);
            String json = IOUtils.readStreamAsString(processResult.getResponse().getContent(), "UTF-8");
            processResult.getResponse().getContent().close();
            System.out.println(json);
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

## Generate a signed URL for a file with image processing parameters

Access URLs for private files must be signed. You cannot add image processing parameters directly to a signed URL. To process a private file, you must add the image processing parameters to the signature string before you generate the signed URL. The following code provides an example:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GeneratePresignedUrlRequest;
import java.net.URL;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // This example uses the endpoint of the China (Hangzhou) region. Replace it with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Set the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Set the full path of the object. The full path cannot include the bucket name.
        String objectName = "exampleobject.jpg";
        // Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release the resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Resize the image to a fixed width and height of 100 px, and then rotate it by 90 degrees.
            String style = "image/resize,m_fixed,w_100,h_100/rotate,90";
            // Set the expiration time of the signed URL to 10 minutes. The maximum expiration time is 32,400 seconds.
            Date expiration = new Date(new Date().getTime() + 1000 * 60 * 10 );
            GeneratePresignedUrlRequest req = new GeneratePresignedUrlRequest(bucketName, objectName, HttpMethod.GET);
            req.setExpiration(expiration);
            req.setProcess(style);
            URL signedUrl = ossClient.generatePresignedUrl(req);
            System.out.println(signedUrl);
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

## Related documents

-   For more information about the supported image processing parameters, see [Image processing](/help/en/oss/user-guide/overview-17/#section-tx1-qtj-ar8).
    
-   For complete sample code for image processing, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/ImageSample.java).
