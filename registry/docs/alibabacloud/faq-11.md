This topic describes common issues and solutions for the Object Storage Service (OSS) SDK for Android.

**Note**

Before you use the sample code, integrate the HTTPDNS SDK for Android. For more information, see [Android SDK integration process](/help/en/emas/latest/configure-android-sdk-1).

## Does the Android SDK support DNS pre-resolution and cache policies?

The following example demonstrates how to implement DNS pre-resolution and cache policies on Android using the HTTPDNS SDK and OkHttp.

1.  Customize the DNS interface.
    
    ```
    public class OkHttpDns implements Dns {
        private static final Dns SYSTEM = Dns.SYSTEM;
        HttpDnsService httpdns;
        private static OkHttpDns instance = null;
        private OkHttpDns(Context context) {
            this.httpdns = HttpDns.getService(context, "account id");
        }
        public static OkHttpDns getInstance(Context context) {
            if(instance == null) {
                instance = new OkHttpDns(context);
            }
            return instance;
        }
        @Override
        public List<InetAddress> lookup(String hostname) throws UnknownHostException {
            // Get the IP address from the asynchronous parsing interface.
            String ip = httpdns.getIpByHostAsync(hostname);
            if(ip != null) {
                // If a non-null IP address is returned, use it for the network request.
                List<InetAddress> inetAddresses = Arrays.asList(InetAddress.getAllByName(ip));
                Log.e("OkHttpDns", "inetAddresses:" + inetAddresses);
                return inetAddresses;
            }
            // If a null IP address is returned, resolve the domain name using the system DNS service.
            return Dns.SYSTEM.lookup(hostname);
        }
    }
    ```
    
2.  Generate an okHttpClient instance and configure it for OSS.
    
    ```
    String endpoint = "http://oss-cn-hangzhou.aliyuncs.com";
    
    ClientConfiguration conf = new ClientConfiguration();
    conf.setConnectionTimeout(15 * 1000); // Connection timeout. Default: 15 seconds.
    conf.setSocketTimeout(15 * 1000); // Socket timeout. Default: 15 seconds.
    conf.setMaxConcurrentRequest(5); // Maximum number of concurrent requests. Default: 5.
    conf.setMaxErrorRetry(2); // Maximum number of retries after a failure. Default: 2.
    
    OkHttpClient.Builder builder = new OkHttpClient.Builder()
            .dns(OkHttpDns.getInstance(getApplicationContext()));
    // If you set a custom okHttpClient, some ClientConfiguration settings are ignored. You must manually set them on the builder.
    if (conf != null) {
        Dispatcher dispatcher = new Dispatcher();
        dispatcher.setMaxRequests(conf.getMaxConcurrentRequest());
    
        builder.connectTimeout(conf.getConnectionTimeout(), TimeUnit.MILLISECONDS)
                .readTimeout(conf.getSocketTimeout(), TimeUnit.MILLISECONDS)
                .writeTimeout(conf.getSocketTimeout(), TimeUnit.MILLISECONDS)
                .followRedirects(conf.isFollowRedirectsEnable())
                .followSslRedirects(conf.isFollowRedirectsEnable())
                .dispatcher(dispatcher);
    
        if (conf.getProxyHost() != null && conf.getProxyPort() != 0) {
            builder.proxy(new Proxy(Proxy.Type.HTTP, new InetSocketAddress(conf.getProxyHost(), conf.getProxyPort())));
        }
    }
    // The conf.setOkHttpClient() method is supported only in Android SDK 2.9.12 and later.
    conf.setOkHttpClient(builder.build());
    
    OSS oss = new OSSClient(getApplicationContext(), endpoint, credentialProvider, conf);
    ```
    

## The progress callback shows totalSize=-1 when some files are downloaded

-   Cause
    
    OSS returns Gzip-compressed data for files that are 1 KB or larger and have a Content-Type of text/cache-manifest, text/xml, text/plain, text/css, application/javascript, application/x-javascript, application/rss+xml, application/json, or text/json. This compression occurs if the Accept-Encoding:gzip header is explicitly set in the request. Even if you do not set this header, OkHttp automatically adds it when you download a file. Because the size of a Gzip-compressed file cannot be determined, OSS does not return the Content-Length header. As a result, the progress callback returns totalSize=-1.
    
-   Solution
    
    Set a range to prevent OkHttp from automatically adding the Accept-Encoding:gzip header. This ensures that the Content-Length header is returned and the progress is displayed correctly.
    
    ```
    Map<String, String> header = new HashMap<>();
    header.put("x-oss-range-behavior", "standard");
    // Specify the bucket name, such as examplebucket, and the full path of the object, such as exampledir/exampleobject.txt.
    GetObjectRequest get = new GetObjectRequest("examplebucket", "exampledir/exampleobject.txt");
    get.setRange(new Range(0, -1));
    get.setRequestHeaders(header);
    OSSAsyncTask task = oss.asyncGetObject(get, new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
        @Override
        public void onSuccess(GetObjectRequest request, GetObjectResult result) {
            // The request is successful.
            InputStream inputStream = result.getObjectContent();
    
            byte[] buffer = new byte[2048];
            int len;
    
            try {
                while ((len = inputStream.read(buffer)) != -1) {
                    // Process the downloaded data.
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    
        @Override
        public void onFailure(GetObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {      
            // The request failed.
            if (clientExcepion != null) {
                // A client exception occurred, such as a network error.
                clientExcepion.printStackTrace();
            }
            if (serviceException != null) {
                // A service exception occurred.          
                Log.e("ErrorCode", serviceException.getErrorCode());
                Log.e("RequestId", serviceException.getRequestId());
                Log.e("HostId", serviceException.getHostId());
                Log.e("RawMessage", serviceException.getRawMessage());
            }
        }
    });
    ```
    

## The onFailure callback is not triggered when you use Kotlin with the OSS Android SDK

-   Cause
    

By default, the OSS Android SDK uses Java syntax, as shown in the following figure:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6330634671/p942921.png)

When you use Kotlin, the onFailure syntax shown in the preceding figure may cause nullability issues. To fix this issue, change the code as follows:

```
onFailure(request: ResumableUploadRequest, clientExcepion:ClientException?, serviceException: ServiceException?)
```
