This topic describes how to use Alibaba Cloud Security Token Service (STS) and presigned URLs to grant temporary access to Object Storage Service (OSS) resources.

## Notes

-   You must set a validity period for both STS temporary credentials and presigned URLs. If you use STS temporary credentials to generate a presigned URL, the shorter of the two validity periods takes effect. For example, if you set the validity period of your STS temporary credentials to 1,200 seconds and the validity period of the presigned URL to 3,600 seconds, the presigned URL expires after 1,200 seconds.
    
-   This topic uses the public endpoint of the China (Hangzhou) region as an example. If you want to access OSS from other Alibaba Cloud products in the same region, use an internal endpoint. For more information about the regions and endpoints that OSS supports, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   This topic provides an example of creating a client using an OSS domain name. For information about how to create an OSSClient using a custom domain name or STS, see [Initialize a client](/help/en/oss/developer-reference/initialization-11#section-6ua-blr-7xk).
    

## Use STS for temporary authorization

You can use Alibaba Cloud Security Token Service (STS) to grant temporary access to OSS. STS is a web service that provides temporary access tokens for cloud computing users. With STS, you can issue a temporary access credential with a custom validity period and permissions to third-party applications or sub-users. A sub-user is a user whose identity you manage. For more information about STS, see [What is STS?](/help/en/ram/user-guide/what-is-sts#reference-ong-5nv-xdb).

The advantages of STS are as follows:

-   You do not need to expose your long-term AccessKey pair to third-party applications. Instead, you can generate a temporary access token with custom access permissions and a specific validity period to provide to the application.
    
-   You do not need to manually revoke permissions. Access is automatically revoked when the token expires.
    

The following steps describe how to use STS to grant temporary access to OSS:

1.  Obtain temporary access credentials
    
    Temporary access credentials include a temporary AccessKey pair (an AccessKey ID and an AccessKey secret) and a security token. The validity period is measured in seconds. The minimum value is 900 seconds. The maximum value is the maximum session duration that is set for the RAM role. For more information, see [Set the maximum session duration for a RAM role](/help/en/ram/user-guide/specify-the-maximum-session-duration-for-a-ram-role#task-2498608).
    
    You can obtain temporary access credentials in one of the following two ways:
    
    -   Method 1
        
        Call the [AssumeRole](/help/en/ram/api-assumerole#reference-clc-3sv-xdb) operation of STS.
        
    -   Method 2
        
        Use an [STS software development kit (SDK)](/help/en/ram/developer-reference/sts-sdk-overview#reference-w5t-25v-xdb).
        
2.  Use the temporary access credentials to upload a file.
    

```
require 'aliyun/sts'
require 'aliyun/oss'

sts = Aliyun::STS::Client.new(
  # Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  access_key_id: ENV['OSS_ACCESS_KEY_ID'],
  access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
)
# Specify the ARN of the role and a custom session name.
token = sts.assume_role('role-arn', 'session-name')

client = Aliyun::OSS::Client.new(
  # The China (Hangzhou) endpoint is used as an example. Specify the endpoint based on your actual region.
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
  # The temporary AccessKey pair (AccessKey ID and AccessKey secret) obtained from STS.
  access_key_id: 'token.access_key_id',
  access_key_secret: 'token.access_key_secret',
  # The security token obtained from STS.
  sts_token: 'token.security_token')

# Specify the bucket name. For example, examplebucket.
bucket = client.get_bucket('examplebucket')
# Upload a file.
bucket.put_object('exampleobject.txt', :file => 'D:\\localpath\\examplefile.txt')
```

## Use a presigned URL for temporary authorization

### **Notes**

-   When an SDK generates a presigned URL, it uses locally stored key information to calculate a signature based on a specific algorithm. The SDK then appends this signature to the URL to ensure its validity and security. This process of calculating the signature and constructing the URL is completed on the client and does not involve network requests. Therefore, the caller does not need specific permissions to generate the presigned URL. However, to ensure that third-party users can perform the intended operations on the resources using the presigned URL, you must make sure that the identity used to generate the URL has the required permissions.
    
    For example, to download or preview a file using a presigned URL, the oss:GetObject permission is required.
    
-   You can generate a presigned URL and provide the URL to a visitor for temporary access. When you generate a presigned URL, you can specify the validity period of the URL to limit the period of time during which the visitor can access specific data.
    
-   To generate a presigned URL that is used to access resources over HTTPS, set the protocol in the endpoint to HTTPS.
    
-   The presigned URL generated by using the following sample code may contain a plus sign (`+`). In this case, replace the plus sign (`+`) in the URL with `%2B`. Otherwise, the presigned URL may not be used to access the object as expected.
    

### **Generate a presigned URL and use it to download a file**

1.  Generate a presigned URL for downloading a file.
    
    ```
    require 'aliyun/oss'
    
    client = Aliyun::OSS::Client.new(
      # The China (Hangzhou) endpoint is used as an example. Specify the endpoint based on your actual region.
      endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
      # Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
      access_key_id: ENV['OSS_ACCESS_KEY_ID'],
      access_key_secret: ENV['OSS_ACCESS_KEY_SECRET']
    )
    # Specify the bucket name. For example, examplebucket.
    bucket = client.get_bucket('examplebucket')
    
    # Generate a presigned URL and set its validity period to 1 hour (3600 seconds).
    puts bucket.object_url('my-object', true, 3600)
    ```
    
2.  Download an object by using a signed URL on mobile devices or browsers.
    
    Android-Java
    
    ```
    // Enter the generated signed URL. 
    String url = "";
    OkHttpClient client = new OkHttpClient();
    // Use the signed URL to download the object. 
    Request getRequest = new Request.Builder()
            .url(url)
            .get()
            .build();
    client.newCall(getRequest).enqueue(new Callback() {
        @Override
        public void onFailure(Call call, IOException e) {
            e.printStackTrace();
        }
    
        @Override
        public void onResponse(Call call, Response response) throws IOException {
            if (response.code() == 203 || response.code() >= 300) {
                Log.d("download", "fail");
                Log.d("download", response.body().string());
                return;
            }
            // The object is downloaded. 
            InputStream inputStream = response.body().byteStream();
    
            byte[] buffer = new byte[2048];
            int len;
    
            while ((len = inputStream.read(buffer)) != -1) {
                // Process the downloaded data. For example, display the image or perform a write operation on the object. 
            }
        }
    });
    ```
    
    Object C
    
    ```
    // Use the signed URL to download the object. 
    NSURL * url = [NSURL URLWithString:urlString];
    NSURLRequest * request = [NSURLRequest requestWithURL:url];
    NSURLSession * session = [NSURLSession sharedSession];
    NSURLSessionTask * sessionTask = [session dataTaskWithRequest:request
                                                completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (error) {
            NSLog(@"download error: %@", error);
            return;
        } else if (((NSHTTPURLResponse*)response).statusCode == 203 ||
                   ((NSHTTPURLResponse*)response).statusCode >= 300) {
            NSString *body = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
            NSLog(@"download error: %@", body);
            return;
        }
        NSLog(@"download success");
    }];
    [sessionTask resume];
    ```
    
    JavaScript
    
    ```
    // You can also use the download attribute in the <a> tag of an HTML page or window.open of a web API to obtain an object URL. 
    ```
    

## References

-   For detailed usage and parameter descriptions for granting temporary access using STS, see the [API documentation](https://www.rubydoc.info/gems/aliyun-sdk/).
    
-   For more information about how to add signature information to a URL and provide the presigned URL to a third party to grant authorized access, see [Signature Version 1](/help/en/oss/developer-reference/ddd-signatures-to-urls#concept-xqh-2df-xdb).
