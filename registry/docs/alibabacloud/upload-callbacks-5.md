After an object is uploaded, OSS can send a callback to your application server. To configure an upload callback, add callback parameters to the upload request before submitting it.

> Upload and callback run independently. OSS stores the object before sending the callback. If the callback fails, the object upload is still considered successful. Compared with a simple upload, an upload with a callback configured requires the client to wait longer for the full request-response cycle to complete.

## How it works

1.  **The client submits an upload request with callback parameters** — Include `callbackUrl`, `callbackHost`, `callbackBody`, and `callbackBodyType` in the `PutObjectRequest`.
    
2.  **OSS stores the object and sends a POST request** — After the object is stored, OSS sends a POST request to the URL specified in `callbackUrl`.
    
3.  **Your server processes the callback and returns a response** — The server must return a JSON response. HTTP 200 indicates success; any other status code indicates failure.
    
4.  **OSS returns the final result to the client** — After receiving a successful callback response, OSS returns the upload result to the client.
    

## Prerequisites

Before you begin, ensure that you have:

-   An initialized `OSSClient` instance. For setup instructions, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
    

## Callback parameters

Set the following parameters using `setCallbackParam()`:

**Parameter**

**Description**

`callbackUrl`

The URL of your application server. OSS sends a POST request to this URL after the object is uploaded.

`callbackHost`

The value of the `Host` header in the callback request. Use this parameter together with `callbackUrl`.

`callbackBodyType`

The `Content-Type` of the callback request body. Supported values: `application/json` and `application/x-www-form-urlencoded`.

`callbackBody`

The content of the POST body sent to your server. Supports system variables (e.g., `${size}`, `${mimeType}`) and custom variables (e.g., `${x:var1}`).

### System variables for callbackBody

**Variable**

**Description**

`${object}`

The full path of the object

`${size}`

The object size in bytes

`${mimeType}`

The MIME type of the object (e.g., `image/jpeg`)

## Configure an upload callback

The following example uploads an object and configures a callback to `http://oss-demo.aliyuncs.com:23450`. After a successful upload, OSS POSTs the object's MIME type and size to that URL, and the client reads the server's JSON response.

```
// Create an upload request.
// Specify the bucket name, the full path of the object, and the full path of the local file.
// Example values: examplebucket, exampledir/exampleobject.txt, /storage/emulated/0/oss/examplefile.txt
// The full path of the object cannot contain the bucket name.
PutObjectRequest put = new PutObjectRequest("examplebucket", "exampledir/exampleobject.txt", "/storage/emulated/0/oss/examplefile.txt");

put.setCallbackParam(new HashMap<String, String>() {
    {
        put("callbackUrl", "http://oss-demo.aliyuncs.com:23450");
        put("callbackHost", "yourCallbackHost");
        put("callbackBodyType", "application/json");
        put("callbackBody", "{\"mimeType\":${mimeType},\"size\":${size}}");
    }
});

OSSAsyncTask task = oss.asyncPutObject(put, new OSSCompletedCallback<PutObjectRequest, PutObjectResult>() {
    @Override
    public void onSuccess(PutObjectRequest request, PutObjectResult result) {
        Log.d("PutObject", "UploadSuccess");

        // serverCallbackReturnJson contains data only if a callback was configured.
        String serverCallbackReturnJson = result.getServerCallbackReturnBody();

        Log.d("servercallback", serverCallbackReturnJson);
    }

    @Override
    public void onFailure(PutObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Handle exceptions.
    }
});
```

## Configure custom variables

Use `setCallbackVars()` to define custom variables and reference them in `callbackBody` using the `${x:varname}` syntax.

```
put.setCallbackParam(new HashMap<String, String>() {
    {
        put("callbackUrl", "http://oss-demo.aliyuncs.com:23450");
        put("callbackHost", "yourCallbackHost");
        put("callbackBodyType", "application/json");
        put("callbackBody", "{\"object\":${object},\"size\":${size},\"my_var1\":${x:var1},\"my_var2\":${x:var2}}");
    }
});

put.setCallbackVars(new HashMap<String, String>() {
    {
        put("x:var1", "value1");
        put("x:var2", "value2");
    }
});
```

## Verify callback authenticity

If your callback endpoint is publicly accessible, verify that callback requests originate from OSS by checking the request signature. For the signature verification procedure, see [Callback](/help/en/oss/developer-reference/callback#reference-zkm-311-hgb).

## What's next

-   For the complete sample code, see [GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/OSSPutObjectTest.java).
    
-   For the callback API specification, including request format and signature verification, see [Callback](/help/en/oss/developer-reference/callback#reference-zkm-311-hgb).
    
-   For `OSSClient` setup, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
