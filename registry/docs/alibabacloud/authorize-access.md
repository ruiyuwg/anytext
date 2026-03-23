The Android SDK supports three authorization modes to secure access to OSS from mobile devices: STS authentication, self-signed, and presigned URLs.

## Choose an authorization mode

**Mode**

**How it works**

**Best for**

**STS authentication**

Issues temporary credentials with a configurable TTL (minimum 900 seconds)

Production apps — no long-term keys on device

**Self-signed**

App server signs requests with a custom signature

Apps with an existing signing infrastructure

**Presigned URL**

Generates a time-limited URL for a specific operation

Sharing upload or download access without SDK initialization

For most production apps, use STS authentication. It avoids exposing long-term AccessKey pairs and automatically limits access scope.

## Prerequisites

Before you begin, ensure that you have:

-   Activated Alibaba Cloud Resource Access Management (RAM)
    
-   An OSS bucket and endpoint
    

## STS authentication mode

Security Token Service (STS) issues temporary credentials — an AccessKey ID, an AccessKey secret, and a security token — with a configurable validity period. The minimum validity period is 900 seconds; the maximum is the maximum session duration set for the RAM role.

**Benefits:**

-   No long-term AccessKey pair is stored on the device.
    
-   Access expires automatically — no manual permission revocation needed.
    

### How it works

1.  Your app server calls the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) API or uses an [STS SDK](/help/en/ram/developer-reference/sts-sdk-overview#reference-w5t-25v-xdb) to get temporary credentials.
    
2.  Your app receives the credentials and initializes the OSS client.
    
3.  When the credentials near expiration, the SDK fetches new ones automatically (if you implement the auto-update callback).
    

> The callback function runs in a subthread when the SDK makes a request, so it does not block the main thread.

### Initialize the SDK with temporary credentials

```
String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";

OSSCredentialProvider credentialProvider = new OSSStsTokenCredentialProvider(
    "StsToken.AccessKeyId",
    "StsToken.SecretKeyId",
    "StsToken.SecurityToken"
);

OSS oss = new OSSClient(getApplicationContext(), endpoint, credentialProvider);
```

### Update the STS token

When the STS token expires, the OSS client can no longer make authenticated requests. Handle token refresh in one of two ways.

#### Manually update the token

Call `updateCredentialProvider()` before the token expires:

```
oss.updateCredentialProvider(new OSSStsTokenCredentialProvider(
    "StsToken.AccessKeyId",
    "StsToken.SecretKeyId",
    "StsToken.SecurityToken"
));
```

The following example checks whether the token is within 5 minutes of expiration and refreshes it:

```
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
Date date = sdf.parse("<StsToken.Expiration>");
long expiration = date.getTime() / 1000;

// Refresh if expiring within 5 minutes
if (DateUtil.getFixedSkewedTimeMillis() / 1000 > expiration - 5 * 60) {
    oss.updateCredentialProvider(new OSSStsTokenCredentialProvider(
        "StsToken.AccessKeyId",
        "StsToken.SecretKeyId",
        "StsToken.SecurityToken"
    ));
}
```

#### Automatically update the token

Implement `OSSFederationCredentialProvider` so the SDK fetches a new federation token whenever the current one is about to expire:

```
String endpoint = "http://oss-cn-hangzhou.aliyuncs.com";

OSSCredentialProvider credentialProvider = new OSSFederationCredentialProvider() {

    @Override
    public OSSFederationToken getFederationToken() {
        // Fetch a new token from your server.
        // Return null if the fetch fails.
        OSSFederationToken token;
        // ... fetch token from your server ...
        return token;
    }
};

OSS oss = new OSSClient(getApplicationContext(), endpoint, credentialProvider);
```

> If you already have the STS token fields from another source, return them directly in the callback. In this case, you must handle token refresh yourself and call `updateCredentialProvider()` on the `OSSClient` instance after each refresh.

**Example: fetch a federation token from your server**

If your server at `http://localhost:8080/distribute-token.json` returns the following response:

```
{
    "StatusCode": 200,
    "AccessKeyId": "STS.iA645eTOXEqP3cg3****",
    "AccessKeySecret": "rV3VQrpFQ4BsyHSAvi5NVLpPIVffDJv4LojU****",
    "Expiration": "2015-11-03T09:52:59Z",
    "SecurityToken": "CAES7QIIARKAAZPlqaN9ILiQZPS+JDkS/GSZN45RLx4YS/p3OgaUC+oJl3XSlbJ7StKpQ****"
}
```

Implement `OSSFederationCredentialProvider` as follows:

```
OSSCredentialProvider credentialProvider = new OSSFederationCredentialProvider() {

    @Override
    public OSSFederationToken getFederationToken() {
        try {
            URL stsUrl = new URL("http://localhost:8080/distribute-token.json");
            HttpURLConnection conn = (HttpURLConnection) stsUrl.openConnection();
            InputStream input = conn.getInputStream();
            String jsonText = IOUtils.readStreamAsString(input, OSSConstants.DEFAULT_CHARSET_NAME);
            JSONObject jsonObjs = new JSONObject(jsonText);
            String ak = jsonObjs.getString("AccessKeyId");
            String sk = jsonObjs.getString("AccessKeySecret");
            String token = jsonObjs.getString("SecurityToken");
            String expiration = jsonObjs.getString("Expiration");
            return new OSSFederationToken(ak, sk, token, expiration);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
};
```

## Presigned URLs

A presigned URL encodes a signature and expiration time into the URL itself, granting temporary access to a specific OSS object without requiring the caller to hold OSS credentials.

### Usage notes

-   **Signature calculation is client-side.** The SDK uses locally stored key information to compute the signature — no server request is needed to generate the URL.
    
-   **The caller needs the right permissions.** Even though no credentials are required to use a presigned URL, the principal that generates it must have the corresponding permission: `oss:PutObject` for uploads, `oss:GetObject` for downloads.
    
-   **The \`+\` sign in a URL must be percent-encoded.** If the generated URL contains a `+`, replace it with `%2B` before use.
    

### **Generate a presigned URL and upload a file**

**Step 1: Generate a presigned upload URL.**

```
// Bucket name, e.g., examplebucket
String bucketName = "examplebucket";
// Object key (full path, without the bucket name), e.g., exampleobject.txt
String objectKey = "exampleobject.txt";
String contentType = "application/octet-stream";
String url = null;

try {
    GeneratePresignedUrlRequest request = new GeneratePresignedUrlRequest(bucketName, objectKey);
    // Set expiration to 30 minutes
    request.setExpiration(30 * 60);
    request.setContentType(contentType);
    request.setMethod(HttpMethod.PUT);
    url = oss.presignConstrainedObjectURL(request);
    Log.d("url", url);
} catch (ClientException e) {
    e.printStackTrace();
}
```

**Step 2: Upload a file using the presigned URL.**

```
// Presigned URL from Step 1
String url = "";
// Full path of the local file
String localFile = "/storage/emulated/0/oss/examplefile";
String contentType = "application/octet-stream";

OkHttpClient client = new OkHttpClient();
Request putRequest = new Request.Builder()
    .url(url)
    .put(RequestBody.create(MediaType.parse(contentType), new File(localFile)))
    .build();

client.newCall(putRequest).enqueue(new Callback() {
    @Override
    public void onFailure(Call call, IOException e) {
        e.printStackTrace();
    }

    @Override
    public void onResponse(Call call, Response response) throws IOException {
        Log.d("response", response.body().string());
    }
});
```

### **Generate a presigned URL and download a file**

**Step 1: Generate a presigned download URL.**

```
// Bucket name, e.g., examplebucket
String bucketName = "examplebucket";
// Object key (full path, without the bucket name), e.g., exampleobject.txt
String objectKey = "exampleobject.txt";
String url = null;

try {
    GeneratePresignedUrlRequest request = new GeneratePresignedUrlRequest(bucketName, objectKey);
    // Set expiration to 30 minutes
    request.setExpiration(30 * 60);
    request.setMethod(HttpMethod.GET);
    url = oss.presignConstrainedObjectURL(request);
    Log.d("url", url);
} catch (ClientException e) {
    e.printStackTrace();
}
```

**Step 2: Download a file using the presigned URL.**

```
// Presigned URL from Step 1
String url = "";

OkHttpClient client = new OkHttpClient();
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
        // Read the downloaded data (e.g., display an image or write to a file)
        InputStream inputStream = response.body().byteStream();
        byte[] buffer = new byte[2048];
        int len;
        while ((len = inputStream.read(buffer)) != -1) {
            // Process the data
        }
    }
});
```

## What's next

-   [What is STS?](/help/en/ram/user-guide/what-is-sts#reference-ong-5nv-xdb)
    
-   [Set the maximum session duration for a RAM role](/help/en/ram/user-guide/specify-the-maximum-session-duration-for-a-ram-role#task-2498608)
    
-   [STS SDKs overview](/help/en/ram/developer-reference/sts-sdk-overview#reference-w5t-25v-xdb)
