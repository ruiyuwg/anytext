Form upload lets a browser or HTTP client send a file directly to an OSS bucket using an HTML form (HTTP POST). The backend generates a signed policy and signature; the client uses them to upload without routing the file through your server. The maximum file size is 5 GB.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The `oss:PutObject` permission on the target bucket. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   Java SDK V1 added to your project dependencies
    

> This topic uses the public endpoint for the China (Hangzhou) region. For requests from other Alibaba Cloud services in the same region, use the internal endpoint instead. For a list of regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

## How it works

1.  Your backend generates a Base64-encoded policy and computes an HMAC-SHA1 signature over it using your AccessKeySecret.
    
2.  Return the policy, signature, and AccessKeyId to the client (browser or HTTP client).
    
3.  The client sends a `multipart/form-data` POST request directly to OSS, including the policy and signature as form fields.
    
4.  OSS validates the signature and policy, then stores the object.
    

## Form fields

The POST request must include the following form fields:

**Field**

**Required**

**Description**

`key`

Yes

Object name (path) in the bucket.

`OSSAccessKeyId`

Yes

Your AccessKey ID.

`policy`

Yes

Base64-encoded JSON policy document that specifies upload constraints.

`Signature`

Yes

HMAC-SHA1 signature computed over the Base64-encoded policy using your AccessKeySecret.

`Content-Disposition`

No

Suggested file name for download. Example: `attachment;filename=photo.jpg`

`callback`

No

Base64-encoded JSON callback configuration. When set, OSS sends a POST request to your callback server after a successful upload.

## Sample code

The following example shows how to build and send a form upload request using Java:

```
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.internal.OSSUtils;
import com.aliyun.oss.model.Callback;
import org.apache.commons.codec.binary.Base64;

import javax.activation.MimetypesFileTypeMap;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import com.aliyun.oss.ClientException;

public class PostObjectSample {
    // Specify the full path of the local file to upload.
    private String localFilePath = "examplefile.txt";
    // The endpoint of the China (Hangzhou) region is used as an example. Specify the actual endpoint.
    private String endpoint = "http://oss-cn-hangzhou.aliyuncs.com";
    // An Alibaba Cloud account has permissions on all API operations. Using an AccessKey pair is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console.
    String accessKeyId = System.getenv("OSS_ACCESS_KEY_ID");
    String accessKeySecret = System.getenv("OSS_ACCESS_KEY_SECRET");
    // Specify the bucket name.
    private String bucketName = "examplebucket";
    // Specify the full path of the object. Do not include the bucket name.
    private String objectName = "exampledir/exampleobject.txt";
    // Set the URL of the callback server. Example: http://oss-demo.oss-cn-hangzhou.aliyuncs.com:23450 or http://127.0.0.1:9090.
    private String callbackServerUrl = "http://oss-demo.oss-cn-hangzhou.aliyuncs.com:23450";
    // Set the value of the Host header in the callback request. Example: oss-cn-hangzhou.aliyuncs.com.
    private String callbackServerHost = "oss-cn-hangzhou.aliyuncs.com";

    private void PostObject() throws Exception {
        // Build the bucket URL: http://<bucketName>.oss-cn-hangzhou.aliyuncs.com
        String urlStr = endpoint.replace("http://", "http://" + bucketName + ".");

        // Build the form fields map.
        Map<String, String> formFields = new LinkedHashMap<String, String>();

        // Set the object name.
        formFields.put("key", this.objectName);

        // Set Content-Disposition.
        formFields.put("Content-Disposition", "attachment;filename=" + localFilePath);

        // Optional: configure upload callback.
        // Callback callback = new Callback();
        // callback.setCallbackUrl(callbackServerUrl);
        // callback.setCallbackHost(callbackServerHost);
        // callback.setCallbackBody("{\\\"mimeType\\\":${mimeType},\\\"size\\\":${size}}");
        // callback.setCalbackBodyType(Callback.CalbackBodyType.JSON);
        // Custom callback variables must start with "x:" and be lowercase.
        // callback.addCallbackVar("x:var1", "value1");
        // callback.addCallbackVar("x:var2", "value2");
        // setCallBack(formFields, callback);

        // Set the AccessKey ID.
        formFields.put("OSSAccessKeyId", accessKeyId);

        // Build the policy document.
        // This policy expires on 2120-01-01 and restricts uploads to 100 MiB (104857600 bytes).
        String policy = "{\"expiration\": \"2120-01-01T12:00:00.000Z\",\"conditions\": [[\"content-length-range\", 0, 104857600]]}";
        String encodePolicy = new String(Base64.encodeBase64(policy.getBytes()));
        formFields.put("policy", encodePolicy);

        // Compute the HMAC-SHA1 signature over the Base64-encoded policy.
        String signaturecom = com.aliyun.oss.common.auth.ServiceSignature.create().computeSignature(accessKeySecret, encodePolicy);
        formFields.put("Signature", signaturecom);

        String ret = formUpload(urlStr, formFields, localFilePath);
        System.out.println("Post Object [" + this.objectName + "] to bucket [" + bucketName + "]");
        System.out.println("post reponse:" + ret);
    }

    private static String formUpload(String urlStr, Map<String, String> formFields, String localFile)
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

            // Write all form fields to the output stream.
            if (formFields != null) {
                StringBuffer strBuf = new StringBuffer();
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
                        strBuf.append("Content-Disposition: form-data; name=\""
                                + inputName + "\"\r\n\r\n");
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

            // Write the file part.
            File file = new File(localFile);
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

            // Read the response.
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

    public static void main(String[] args) throws Exception {
        PostObjectSample ossPostObject = new PostObjectSample();
        ossPostObject.PostObject();
    }
}
```

## Understanding the policy

The policy is a JSON document that defines what uploads OSS will accept. The example policy in the code above enforces the following constraints:

-   **Expiration**: The policy is valid until `2120-01-01T12:00:00.000Z`. Requests sent after this time are rejected.
    
-   **File size**: The uploaded file must be between 0 and 104,857,600 bytes (100 MiB). Requests outside this range are rejected.
    

Encode the policy as Base64, then compute an HMAC-SHA1 signature over the encoded string using your AccessKeySecret. Both the encoded policy and the signature go into the form fields.

## Use the credentials in an HTML form

After your backend generates the policy and signature, pass them to the browser and use them in an HTML form to upload directly to OSS:

```
<form action="http://examplebucket.oss-cn-hangzhou.aliyuncs.com/" method="post" enctype="multipart/form-data">
  <input type="hidden" name="key" value="exampledir/exampleobject.txt" />
  <input type="hidden" name="OSSAccessKeyId" value="<your-access-key-id>" />
  <input type="hidden" name="policy" value="<base64-encoded-policy>" />
  <input type="hidden" name="Signature" value="<hmac-sha1-signature>" />
  <input type="hidden" name="Content-Disposition" value="attachment;filename=examplefile.txt" />
  File: <input type="file" name="file" /><br />
  <input type="submit" value="Upload to OSS" />
</form>
```

Replace the placeholders with the values your backend generated:

**Placeholder**

**Description**

`<your-access-key-id>`

AccessKey ID from your Alibaba Cloud account or RAM user

`<base64-encoded-policy>`

Base64-encoded policy string generated by the backend

`<hmac-sha1-signature>`

HMAC-SHA1 signature generated by the backend

> To create an OSSClient instance using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).

## References

For the underlying API that form upload calls, see [PostObject](/help/en/oss/developer-reference/postobject#reference-smp-nsw-wdb).
