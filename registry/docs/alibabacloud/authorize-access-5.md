By default, the access control list (ACL) of an object in an Object Storage Service (OSS) bucket is private. To let other users upload objects without sharing your credentials, generate a presigned URL using OSS SDK for Go and share it with them. The URL embeds your signature, so no additional authentication headers are required when uploading.

Set a validity period when generating the URL to control how long the upload window stays open. During that window, the URL can be reused for multiple uploads. After it expires, regenerate the URL to restore access.

## How it works

![Presigned URL upload flow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7394055671/CAEQUBiBgMCw8oOw2BkiIDM0OWVhYTgyOTQ5ZjRmNjBiNDFjOGFkZTYzYmU5NDlj4751395_20241112152822.507.svg)

1.  The object owner generates a presigned URL using OSS SDK for Go.
    
2.  The object owner shares the URL with the user.
    
3.  The user sends an HTTP PUT request to the URL to upload the file — no OSS credentials needed.
    

## Prerequisites

Before you begin, make sure you have:

-   OSS SDK for Go installed
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables configured. For details, see [Configure access credentials](/help/en/oss/go-configure-access-credentials).
    
-   The `oss:PutObject` permission on the target bucket. For details, see [Authorize a RAM user to access multiple directories in a bucket](/help/en/oss/user-guide/common-examples-of-ram-policies).
    

> No specific permissions are required to generate a presigned URL. The `oss:PutObject` permission is required only for the URL to be usable for uploads.

## Generate a presigned URL

All examples use the V4 signature algorithm, which supports a maximum validity period of 7 days. The examples use the public endpoint of the China (Hangzhou) region (`https://oss-cn-hangzhou.aliyuncs.com`). To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

The following code generates a presigned URL for a simple upload. The URL is valid for 600 seconds.

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Printf("Error: %v", err)
	}

	// Create an OSSClient instance.
	// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
	// Specify the region of the bucket. For example, if your bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("cn-hangzhou"))
	// Specify the signature algorithm version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("https://oss-cn-hangzhou.aliyuncs.com", "", "", clientOptions...)
	if err != nil {
		log.Printf("Error: %v", err)
	}

	// Specify the name of the bucket. Example: examplebucket.
	bucketName := "examplebucket"
	// Specify the full path of the object. Example: exampleobject.txt. Do not include the bucket name in the full path.
	objectName := "exampleobject.txt"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Printf("Error: %v", err)
	}

	// Generate a presigned URL and set the validity period to 600 seconds.
	signedURL, err := bucket.SignURL(objectName, oss.HTTPPut, 600)
	if err != nil {
		log.Printf("Error: %v", err)
	}
	log.Printf("Sign Url:%s\n", signedURL)
}
```

To create an OSSClient instance using a custom domain or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).

### Presigned URL structure

A generated presigned URL looks like the following:

```
https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt
  ?x-oss-date=20241112T083238Z
  &x-oss-expires=3599
  &x-oss-signature-version=OSS4-HMAC-SHA256
  &x-oss-credential=LTAI****************%2F20241112%2Fcn-hangzhou%2Foss%2Faliyun_v4_request
  &x-oss-signature=ed5a******************************************************
```

**Parameter**

**Description**

`x-oss-date`

The date and time the signature was created, in ISO 8601 format (UTC).

`x-oss-expires`

The duration in seconds the URL is valid, starting from `x-oss-date`.

`x-oss-signature-version`

The signature algorithm. `OSS4-HMAC-SHA256` indicates V4.

`x-oss-credential`

The credential scope used to calculate the signature, including the access key ID, date, region, service, and request type.

`x-oss-signature`

The computed signature. Any modification to the URL or request headers invalidates this value.

## Upload using a presigned URL

Pass the presigned URL to any HTTP client that supports PUT requests. The signature is embedded in the URL — no additional authentication headers are required.

### curl

```
curl -X PUT -T /path/to/local/file "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T083238Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************%2F20241112%2Fcn-hangzhou%2Foss%2Faliyun_v4_request&x-oss-signature=ed5a******************************************************"
```

> **Tip:** Enclose the URL in double quotes when using curl to prevent the shell from interpreting special characters in the query string.

### Java

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

        // Replace <signedUrl> with the presigned URL.
        URL signedUrl = new URL("<signedUrl>");

        // Specify the full path of the local file to upload.
        String pathName = "C:\\Users\\demo.txt";

        try {
            HttpPut put = new HttpPut(signedUrl.toString());
            System.out.println(put);
            HttpEntity entity = new FileEntity(new File(pathName));
            put.setEntity(entity);
            httpClient = HttpClients.createDefault();
            response = httpClient.execute(put);

            System.out.println("Status code:" + response.getStatusLine().getStatusCode());
            if (response.getStatusLine().getStatusCode() == 200) {
                System.out.println("The object is uploaded by using the library.");
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

### Go

```
package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func uploadFile(signedUrl, filePath string) error {
	// Open the local file.
	file, err := os.Open(filePath)
	if err != nil {
		return fmt.Errorf("Unable to open the local file: %w", err)
	}
	defer file.Close()

	// Create an HTTP client.
	client := &http.Client{}

	// Create a PUT request.
	req, err := http.NewRequest("PUT", signedUrl, file)
	if err != nil {
		return fmt.Errorf("Failed to create the request: %w", err)
	}

	// Send the request.
	resp, err := client.Do(req)
	if err != nil {
		return fmt.Errorf("Failed to send the request: %w", err)
	}
	defer resp.Body.Close()

	// Read the response.
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("Failed to read the response: %w", err)
	}

	fmt.Printf("Status code: %d\n", resp.StatusCode)
	if resp.StatusCode == 200 {
		fmt.Println("The object is uploaded by using the library.")
	}
	fmt.Println(string(body))

	return nil
}

func main() {
	// Replace <signedUrl> with the presigned URL.
	signedUrl := "<signedUrl>"

	// Specify the full path of the local file to upload.
	filePath := "C:\\Users\\demo.txt"

	err := uploadFile(signedUrl, filePath)
	if err != nil {
		fmt.Println("An error occurred: ", err)
	}
}
```

### Python

```
import requests

def upload_file(signed_url, file_path):
    try:
        # Open the local file and send a PUT request to upload it.
        with open(file_path, 'rb') as file:
            response = requests.put(signed_url, data=file)

        print(f"Status code: {response.status_code}")
        if response.status_code == 200:
            print("The object is uploaded by using the library.")
        print(response.text)

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Replace <signedUrl> with the presigned URL.
    signed_url = "<signedUrl>"

    # Specify the full path of the local file to upload.
    file_path = "C:\\Users\\demo.txt"

    upload_file(signed_url, file_path)
```

### Node.js

```
const fs = require('fs');
const axios = require('axios');

async function uploadFile(signedUrl, filePath) {
    try {
        // Create a read stream.
        const fileStream = fs.createReadStream(filePath);

        // Send a PUT request to upload the local file.
        const response = await axios.put(signedUrl, fileStream, {
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        });

        console.log(`Status code: ${response.status}`);
        if (response.status === 200) {
            console.log("The object is uploaded by using the library.");
        }
        console.log(response.data);
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

(async () => {
    // Replace <signedUrl> with the presigned URL.
    const signedUrl = '<signedUrl>';

    // Specify the full path of the local file to upload.
    const filePath = 'C:\\Users\\demo.txt';

    await uploadFile(signedUrl, filePath);
})();
```

### Browser.js

**Important**

When uploading from a browser using a presigned URL, a 403 `SignatureNotMatch` error may occur. This typically happens because the browser automatically adds the `Content-Type` request header, which was not included when the presigned URL was generated. To prevent this, always specify `Content-Type` when generating the presigned URL for browser-based uploads.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload Example</title>
</head>
<body>
    <h1>File Upload Example</h1>

    <!-- Select file -->
    <input type="file" id="fileInput" />
    <button id="uploadButton">Upload File</button>

    <script>
        // Replace <signedUrl> with the presigned URL generated in step 1.
        const signedUrl = "<signedUrl>";

        document.getElementById('uploadButton').addEventListener('click', async () => {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];

            if (!file) {
                alert('Please select a file to upload.');
                return;
            }

            try {
                await upload(file, signedUrl);
                alert('File uploaded successfully!');
            } catch (error) {
                console.error('Error during upload:', error);
                alert('Upload failed: ' + error.message);
            }
        });

        /**
         * Upload a file to OSS.
         * @param {File} file - The file to upload.
         * @param {string} presignedUrl - The presigned URL.
         */
        const upload = async (file, presignedUrl) => {
            const response = await fetch(presignedUrl, {
                method: 'PUT',
                body: file,
            });

            if (!response.ok) {
                throw new Error(`Upload failed, status: ${response.status}`);
            }

            console.log('File uploaded successfully');
        };
    </script>
</body>
</html>
```

### C#

```
using System.Net.Http.Headers;

// Specify the full path of the local file to upload.
var filePath = "C:\\Users\\demo.txt";
// Replace <signedUrl> with the presigned URL.
var presignedUrl = "<signedUrl>";

// Create an HTTP client and a local file stream.
using var httpClient = new HttpClient();
using var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
using var content = new StreamContent(fileStream);

// Create a PUT request.
var request = new HttpRequestMessage(HttpMethod.Put, presignedUrl);
request.Content = content;

// Send the request.
var response = await httpClient.SendAsync(request);

// Process the response.
if (response.IsSuccessStatusCode)
{
    Console.WriteLine($"Uploaded! Status Code: {response.StatusCode}");
    Console.WriteLine("Response Header:");
    foreach (var header in response.Headers)
    {
        Console.WriteLine($"{header.Key}: {string.Join(", ", header.Value)}");
    }
}
else
{
    string responseContent = await response.Content.ReadAsStringAsync();
    Console.WriteLine($"Upload Failed! Status Code: {response.StatusCode}");
    Console.WriteLine("Response content: " + responseContent);
}
```

### C++

```
#include <iostream>
#include <fstream>
#include <curl/curl.h>

void uploadFile(const std::string& signedUrl, const std::string& filePath) {
    CURL *curl;
    CURLcode res;

    curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();

    if (curl) {
        // Specify the presigned URL.
        curl_easy_setopt(curl, CURLOPT_URL, signedUrl.c_str());

        // Set the request method to PUT.
        curl_easy_setopt(curl, CURLOPT_UPLOAD, 1L);

        // Open the local file.
        FILE *file = fopen(filePath.c_str(), "rb");
        if (!file) {
            std::cerr << "Unable to open the file: " << filePath << std::endl;
            return;
        }

        // Get the file size.
        fseek(file, 0, SEEK_END);
        long fileSize = ftell(file);
        fseek(file, 0, SEEK_SET);

        curl_easy_setopt(curl, CURLOPT_INFILESIZE_LARGE, (curl_off_t)fileSize);
        curl_easy_setopt(curl, CURLOPT_READDATA, file);

        // Execute the request.
        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
        } else {
            long httpCode = 0;
            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &httpCode);
            std::cout << "Status code: " << httpCode << std::endl;

            if (httpCode == 200) {
                std::cout << "The object is uploaded by using the network library." << std::endl;
            }
        }

        fclose(file);
        curl_easy_cleanup(curl);
    }

    curl_global_cleanup();
}

int main() {
    // Replace <signedUrl> with the presigned URL.
    std::string signedUrl = "<signedUrl>";

    // Specify the full path of the local file to upload.
    std::string filePath = "C:\\Users\\demo.txt";

    uploadFile(signedUrl, filePath);

    return 0;
}
```

### Android

```
package com.example.signurlupload;

import android.os.AsyncTask;
import android.util.Log;

import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class SignUrlUploadActivity {

    private static final String TAG = "SignUrlUploadActivity";

    public void uploadFile(String signedUrl, String filePath) {
        new UploadTask().execute(signedUrl, filePath);
    }

    private class UploadTask extends AsyncTask<String, Void, String> {

        @Override
        protected String doInBackground(String... params) {
            String signedUrl = params[0];
            String filePath = params[1];

            HttpURLConnection connection = null;
            DataOutputStream dos = null;
            FileInputStream fis = null;

            try {
                URL url = new URL(signedUrl);
                connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("PUT");
                connection.setDoOutput(true);
                connection.setRequestProperty("Content-Type", "application/octet-stream");

                fis = new FileInputStream(filePath);
                dos = new DataOutputStream(connection.getOutputStream());

                byte[] buffer = new byte[1024];
                int length;

                while ((length = fis.read(buffer)) != -1) {
                    dos.write(buffer, 0, length);
                }

                dos.flush();
                dos.close();
                fis.close();

                int responseCode = connection.getResponseCode();
                Log.d(TAG, "Status code: " + responseCode);

                if (responseCode == 200) {
                    Log.d(TAG, "The object is uploaded by using the library.");
                }

                return "Object uploaded. Status code: " + responseCode;

            } catch (IOException e) {
                e.printStackTrace();
                return "Upload failed: " + e.getMessage();
            } finally {
                if (connection != null) {
                    connection.disconnect();
                }
            }
        }

        @Override
        protected void onPostExecute(String result) {
            Log.d(TAG, result);
        }
    }

    public static void main(String[] args) {
        SignUrlUploadActivity activity = new SignUrlUploadActivity();
        // Replace <signedUrl> with the presigned URL.
        String signedUrl = "<signedUrl>";
        // Specify the full path of the local file to upload.
        String filePath = "C:\\Users\\demo.txt";
        activity.uploadFile(signedUrl, filePath);
    }
}
```

## Common scenarios

### **Upload with request headers and user metadata**

To attach user metadata or control the storage class at upload time, include these parameters when generating the presigned URL. The client must send the same headers when using the URL — any mismatch causes a signature error.

### **Step 1: Generate the presigned URL**

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Printf("Error: %v", err)
	}

	// Create an OSSClient instance.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("cn-hangzhou"))
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("https://oss-cn-hangzhou.aliyuncs.com", "", "", clientOptions...)
	if err != nil {
		log.Printf("Error: %v", err)
	}

	bucketName := "examplebucket"
	objectName := "exampleobject.txt"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Printf("Error: %v", err)
	}

	// Specify request headers and user metadata to include in the signed URL.
	// Note: when using this presigned URL on the frontend, the client must send
	// the same Content-Type header as specified here.
	options := []oss.Option{
		oss.Meta("key1", "value1"),
		oss.Meta("key2", "value2"),
		oss.ContentType("text/plain; charset=utf8"),
	}

	// Generate a presigned URL with a validity period of 600 seconds.
	signedURL, err := bucket.SignURL(objectName, oss.HTTPPut, 600, options...)
	if err != nil {
		log.Printf("Error: %v", err)
	}
	log.Printf("Sign Url:%s\n", signedURL)
}
```

#### Step 2: Upload using the presigned URL

All upload clients must include the same `Content-Type`, storage class, and user metadata headers that were specified when generating the URL.

##### curl

```
curl -X PUT \
     -H "Content-Type: text/plain;charset=utf8" \
     -H "x-oss-storage-class: Standard" \
     -H "x-oss-meta-key1: value1" \
     -H "x-oss-meta-key2: value2" \
     -T "C:\\Users\\demo.txt" \
     "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T083238Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************%2F20241112%2Fcn-hangzhou%2Foss%2Faliyun_v4_request&x-oss-signature=ed5a******************************************************"
```

##### Java

```
import com.aliyun.oss.internal.OSSHeaders;
import com.aliyun.oss.model.StorageClass;
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

        // Replace <signedUrl> with the presigned URL.
        URL signedUrl = new URL("<signedUrl>");

        // Specify the full path of the local file to upload.
        String pathName = "C:\\Users\\demo.txt";

        // Specify request headers. Values must match those used when generating the URL.
        Map<String, String> headers = new HashMap<String, String>();
        headers.put(OSSHeaders.STORAGE_CLASS, StorageClass.Standard.toString());
        headers.put(OSSHeaders.CONTENT_TYPE, "text/plain;charset=utf8");

        // Specify user metadata. Values must match those used when generating the URL.
        Map<String, String> userMetadata = new HashMap<String, String>();
        userMetadata.put("key1", "value1");
        userMetadata.put("key2", "value2");

        try {
            HttpPut put = new HttpPut(signedUrl.toString());
            System.out.println(put);
            HttpEntity entity = new FileEntity(new File(pathName));
            put.setEntity(entity);

            // Add request headers. If these headers were included when generating the URL,
            // they must be sent here. Mismatched headers cause a signature error.
            for (Map.Entry header : headers.entrySet()) {
                put.addHeader(header.getKey().toString(), header.getValue().toString());
            }
            // If user metadata is specified, the SDK adds the "x-oss-meta-" prefix to the key.
            // When using other HTTP clients, add this prefix manually.
            for (Map.Entry meta : userMetadata.entrySet()) {
                put.addHeader("x-oss-meta-" + meta.getKey().toString(), meta.getValue().toString());
            }

            httpClient = HttpClients.createDefault();
            response = httpClient.execute(put);

            System.out.println("Status code of the upload: " + response.getStatusLine().getStatusCode());
            if (response.getStatusLine().getStatusCode() == 200) {
                System.out.println("The object is uploaded by using the library.");
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

##### Go

```
package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func uploadFile(signedUrl string, filePath string, headers map[string]string, metadata map[string]string) error {
	file, err := os.Open(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		return err
	}

	req, err := http.NewRequest("PUT", signedUrl, bytes.NewBuffer(fileBytes))
	if err != nil {
		return err
	}

	// Add request headers. Values must match those used when generating the URL.
	for key, value := range headers {
		req.Header.Set(key, value)
	}

	// Add user metadata with the "x-oss-meta-" prefix.
	for key, value := range metadata {
		req.Header.Set(fmt.Sprintf("x-oss-meta-%s", key), value)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	fmt.Printf("Status code: %d\n", resp.StatusCode)
	if resp.StatusCode == 200 {
		fmt.Println("The object is uploaded by using the library.")
	} else {
		fmt.Println("Upload failed")
	}
	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(string(body))

	return nil
}

func main() {
	// Replace <signedUrl> with the presigned URL.
	signedUrl := "<signedUrl>"

	// Specify the full path of the local file to upload.
	filePath := "C:\\Users\\demo.txt"

	// Request headers. Values must match those used when generating the URL.
	headers := map[string]string{
		"Content-Type":        "text/plain;charset=utf8",
		"x-oss-storage-class": "Standard",
	}

	// User metadata. Values must match those used when generating the URL.
	metadata := map[string]string{
		"key1": "value1",
		"key2": "value2",
	}

	err := uploadFile(signedUrl, filePath, headers, metadata)
	if err != nil {
		fmt.Printf("An error occurred: %v\n", err)
	}
}
```

##### Python

```
import requests

def upload_file(signed_url, file_path, headers=None, metadata=None):
    """
    Upload an object to OSS using a presigned URL.

    :param signed_url: The presigned URL.
    :param file_path: The full path of the local file to upload.
    :param headers: Request headers. Optional.
    :param metadata: User metadata. Optional.
    """
    if not headers:
        headers = {}
    if not metadata:
        metadata = {}

    # Add the x-oss-meta- prefix to metadata keys.
    for key, value in metadata.items():
        headers[f'x-oss-meta-{key}'] = value

    try:
        with open(file_path, 'rb') as file:
            response = requests.put(signed_url, data=file, headers=headers)
            print(f"Status code: {response.status_code}")
            if response.status_code == 200:
                print("The object is uploaded by using the library.")
            else:
                print("Upload failed.")
            print(response.text)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Replace <signedUrl> with the presigned URL.
    signed_url = "<signedUrl>"

    # Specify the full path of the local file to upload.
    file_path = "C:\\Users\\demo.txt"

    # Request headers. Values must match those used when generating the URL.
    headers = {
        "Content-Type": "text/plain;charset=utf8",
        "x-oss-storage-class": "Standard"
    }

    # User metadata. Values must match those used when generating the URL.
    metadata = {
        "key1": "value1",
        "key2": "value2"
    }

    upload_file(signed_url, file_path, headers, metadata)
```

##### Node.js

```
const fs = require('fs');
const axios = require('axios');

async function uploadFile(signedUrl, filePath, headers = {}, metadata = {}) {
    try {
        // Add the x-oss-meta- prefix to metadata keys.
        for (const [key, value] of Object.entries(metadata)) {
            headers[`x-oss-meta-${key}`] = value;
        }

        const fileStream = fs.createReadStream(filePath);

        const response = await axios.put(signedUrl, fileStream, {
            headers: headers
        });

        console.log(`Status code: ${response.status}`);
        if (response.status === 200) {
            console.log("The object is uploaded by using the library.");
        } else {
            console.log("Upload failed.");
        }
        console.log(response.data);
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

(async () => {
    // Replace <signedUrl> with the presigned URL.
    const signedUrl = "<signedUrl>";

    // Specify the full path of the local file to upload.
    const filePath = "C:\\Users\\demo.txt";

    // Request headers. Values must match those used when generating the URL.
    const headers = {
        "Content-Type": "text/plain;charset=utf8",
        "x-oss-storage-class": "Standard"
    };

    // User metadata. Values must match those used when generating the URL.
    const metadata = {
        "key1": "value1",
        "key2": "value2"
    };

    await uploadFile(signedUrl, filePath, headers, metadata);
})();
```

##### Browser.js

**Important**

When uploading from a browser using a presigned URL that includes custom parameters, specify `Content-Type` when generating the URL. The browser automatically adds this header, and if it doesn't match the value embedded in the signature, the upload fails with a 403 error.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload Example</title>
</head>
<body>
    <h1>File Upload Example</h1>

    <input type="file" id="fileInput" />
    <button id="uploadButton">Upload File</button>

    <script>
        // Replace <signedUrl> with the actual presigned URL.
        const signedUrl = "<signedUrl>";

        document.getElementById('uploadButton').addEventListener('click', async () => {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];

            if (file) {
                try {
                    await upload(file, signedUrl);
                } catch (error) {
                    console.error('Error during upload:', error);
                    alert('Upload failed: ' + error.message);
                }
            } else {
                alert('Please select a file to upload.');
            }
        });

        const upload = async (file, presignedUrl) => {
            const headers = {
                "Content-Type": "text/plain;charset=utf8",
                'x-oss-storage-class': 'Standard',
                'x-oss-meta-key1': 'value1',
                'x-oss-meta-key2': 'value2'
            };

            const response = await fetch(presignedUrl, {
                method: 'PUT',
                headers: headers,
                body: file
            });

            if (!response.ok) {
                throw new Error(`Upload failed, status: ${response.status}`);
            }

            alert('File uploaded successfully');
            console.log('File uploaded successfully');
        };
    </script>
</body>
</html>
```

##### C#

```
using System.Net.Http.Headers;

// Specify the full path of the local file to upload.
var filePath = "C:\\Users\\demo.txt";
// Replace <signedUrl> with the presigned URL.
var presignedUrl = "<signedUrl>";

using var httpClient = new HttpClient();
using var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
using var content = new StreamContent(fileStream);

var request = new HttpRequestMessage(HttpMethod.Put, presignedUrl);
request.Content = content;

// Add request headers. Values must match those used when generating the URL.
request.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain") { CharSet = "utf8" };
request.Content.Headers.Add("x-oss-meta-key1", "value1");
request.Content.Headers.Add("x-oss-meta-key2", "value2");
request.Content.Headers.Add("x-oss-storage-class", "Standard");

// Output the request headers.
Console.WriteLine("Request header:");
foreach (var header in request.Content.Headers)
{
    Console.WriteLine($"{header.Key}: {string.Join(", ", header.Value)}");
}

var response = await httpClient.SendAsync(request);

if (response.IsSuccessStatusCode)
{
    Console.WriteLine($"Uploaded! Status Code: {response.StatusCode}");
    Console.WriteLine("Response Header:");
    foreach (var header in response.Headers)
    {
        Console.WriteLine($"{header.Key}: {string.Join(", ", header.Value)}");
    }
}
else
{
    string responseContent = await response.Content.ReadAsStringAsync();
    Console.WriteLine($"Upload failed! Status Code: {response.StatusCode}");
    Console.WriteLine("Response Content: " + responseContent);
}
```

##### C++

```
#include <iostream>
#include <fstream>
#include <curl/curl.h>
#include <map>
#include <string>

// Callback to process the HTTP response body.
size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* output) {
    size_t totalSize = size * nmemb;
    output->append((char*)contents, totalSize);
    return totalSize;
}

void uploadFile(const std::string& signedUrl, const std::string& filePath, const std::map<std::string, std::string>& headers, const std::map<std::string, std::string>& metadata) {
    CURL* curl;
    CURLcode res;
    std::string readBuffer;

    curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();

    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, signedUrl.c_str());
        curl_easy_setopt(curl, CURLOPT_UPLOAD, 1L);

        FILE* file = fopen(filePath.c_str(), "rb");
        if (!file) {
            std::cerr << "Unable to open the file: " << filePath << std::endl;
            return;
        }

        fseek(file, 0, SEEK_END);
        long fileSize = ftell(file);
        rewind(file);

        curl_easy_setopt(curl, CURLOPT_READDATA, file);
        curl_easy_setopt(curl, CURLOPT_INFILESIZE_LARGE, (curl_off_t)fileSize);

        // Add request headers. Values must match those used when generating the URL.
        struct curl_slist* chunk = nullptr;
        for (const auto& header : headers) {
            std::string headerStr = header.first + ": " + header.second;
            chunk = curl_slist_append(chunk, headerStr.c_str());
        }
        // Add user metadata with the "x-oss-meta-" prefix.
        for (const auto& meta : metadata) {
            std::string metaStr = "x-oss-meta-" + meta.first + ": " + meta.second;
            chunk = curl_slist_append(chunk, metaStr.c_str());
        }
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, chunk);

        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);

        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
        } else {
            long responseCode;
            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &responseCode);
            std::cout << "Status code: " << responseCode << std::endl;
            if (responseCode == 200) {
                std::cout << "The object is uploaded by using the network library." << std::endl;
            } else {
                std::cout << "Upload failed." << std::endl;
            }
            std::cout << readBuffer << std::endl;
        }

        fclose(file);
        curl_slist_free_all(chunk);
        curl_easy_cleanup(curl);
    }

    curl_global_cleanup();
}

int main() {
    // Replace <signedUrl> with the presigned URL.
    std::string signedUrl = "<signedUrl>";

    // Specify the full path of the local file to upload.
    std::string filePath = "C:\\Users\\demo.txt";

    // Request headers. Values must match those used when generating the URL.
    std::map<std::string, std::string> headers = {
        {"Content-Type", "text/plain;charset=utf8"},
        {"x-oss-storage-class", "Standard"}
    };

    // User metadata. Values must match those used when generating the URL.
    std::map<std::string, std::string> metadata = {
        {"key1", "value1"},
        {"key2", "value2"}
    };

    uploadFile(signedUrl, filePath, headers, metadata);

    return 0;
}
```

##### Android

```
import android.os.AsyncTask;
import android.util.Log;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class SignUrlUploadActivity extends AppCompatActivity {

    private static final String TAG = "SignUrlUploadActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Replace <signedUrl> with the presigned URL.
        String signedUrl = "<signedUrl>";

        // Specify the full path of the local file to upload.
        String pathName = "/storage/emulated/0/demo.txt";

        // Request headers. Values must match those used when generating the URL.
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "text/plain;charset=utf8");
        headers.put("x-oss-storage-class", "Standard");

        // User metadata. Values must match those used when generating the URL.
        Map<String, String> userMetadata = new HashMap<>();
        userMetadata.put("key1", "value1");
        userMetadata.put("key2", "value2");

        new UploadTask().execute(signedUrl, pathName, headers, userMetadata);
    }

    private class UploadTask extends AsyncTask<Object, Void, Integer> {
        @Override
        protected Integer doInBackground(Object... params) {
            String signedUrl = (String) params[0];
            String pathName = (String) params[1];
            Map<String, String> headers = (Map<String, String>) params[2];
            Map<String, String> userMetadata = (Map<String, String>) params[3];

            try {
                URL url = new URL(signedUrl);
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("PUT");
                connection.setDoOutput(true);
                connection.setUseCaches(false);

                // Add request headers.
                for (Entry<String, String> header : headers.entrySet()) {
                    connection.setRequestProperty(header.getKey(), header.getValue());
                }

                // Add user metadata with the "x-oss-meta-" prefix.
                for (Entry<String, String> meta : userMetadata.entrySet()) {
                    connection.setRequestProperty("x-oss-meta-" + meta.getKey(), meta.getValue());
                }

                File file = new File(pathName);
                FileInputStream fileInputStream = new FileInputStream(file);
                DataOutputStream dos = new DataOutputStream(connection.getOutputStream());

                byte[] buffer = new byte[1024];
                int count;
                while ((count = fileInputStream.read(buffer)) != -1) {
                    dos.write(buffer, 0, count);
                }

                fileInputStream.close();
                dos.flush();
                dos.close();

                int responseCode = connection.getResponseCode();
                Log.d(TAG, "Status code: " + responseCode);
                if (responseCode == 200) {
                    Log.d(TAG, "The object is uploaded by using the library.");
                } else {
                    Log.d(TAG, "Upload failed");
                }

                InputStream is = connection.getInputStream();
                byte[] responseBuffer = new byte[1024];
                StringBuilder responseStringBuilder = new StringBuilder();
                while ((count = is.read(responseBuffer)) != -1) {
                    responseStringBuilder.append(new String(responseBuffer, 0, count));
                }
                Log.d(TAG, responseStringBuilder.toString());

                return responseCode;
            } catch (IOException e) {
                e.printStackTrace();
                return -1;
            }
        }

        @Override
        protected void onPostExecute(Integer result) {
            super.onPostExecute(result);
            if (result == 200) {
                Toast.makeText(SignUrlUploadActivity.this, "Object uploaded", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(SignUrlUploadActivity.this, "Upload failed", Toast.LENGTH_SHORT).show();
            }
        }
    }
}
```

### **Multipart upload**

For large files, split the file into parts and generate a separate presigned URL for each part. The following example splits a local file into three parts and uses presigned URLs to upload them.

```
package main

import (
	"crypto/md5"
	"encoding/base64"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Printf("Error:%v", err)
	}
	// Create an OSSClient instance.
	// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
	client, err := oss.New("https://oss-cn-hangzhou.aliyuncs.com", "", "", oss.SetCredentialsProvider(&provider))
	if err != nil {
		log.Printf("Error:%v", err)
	}
	bucketName := "examplebucket"

	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Printf("Error:%v", err)
	}
	// Specify the full path of the object. Do not include the bucket name in the full path.
	objectName := "example.txt"
	// Specify the full path of the local file to upload.
	localFile := "D:\\download\\demo.txt"

	// Split the local file into three parts.
	chunks, err := oss.SplitFileByPartNum(localFile, 3)
	fd, err := os.Open(localFile)
	defer fd.Close()

	// Step 1: Initiate a multipart upload task.
	imur, err := bucket.InitiateMultipartUpload(objectName)

	// Step 2: Upload each part using a presigned URL.
	var options []oss.Option

	for _, chunk := range chunks {
		// Configure MD5 verification.
		buf := make([]byte, chunk.Size)
		fd.ReadAt(buf, chunk.Size)
		sum := md5.Sum(buf)
		b64 := base64.StdEncoding.EncodeToString(sum[:])
		options = []oss.Option{
			oss.ContentMD5(b64),
		}

		options = append(options, oss.AddParam("partNumber", strconv.Itoa(chunk.Number)))
		options = append(options, oss.AddParam("uploadId", imur.UploadID))

		// Generate a presigned URL for this part.
		signedURL, err := bucket.SignURL(objectName, oss.HTTPPut, 60, options...)
		if err != nil {
			log.Printf("Error:%v", err)
		}
		fmt.Printf("Presigned URL: %s\n", signedURL)
		err = bucket.PutObjectWithURL(signedURL, strings.NewReader(string(buf)), options...)
		if err != nil {
			log.Printf("Error:%v", err)
		}
	}

	lsRes, err := bucket.ListUploadedParts(imur)
	if err != nil {
		log.Printf("Error:%v", err)
	}

	// Collect the uploaded parts.
	var parts []oss.UploadPart
	for _, p := range lsRes.UploadedParts {
		parts = append(parts, oss.UploadPart{XMLName: p.XMLName, PartNumber: p.PartNumber, ETag: p.ETag})
	}

	// Step 3: Complete the multipart upload.
	_, err = bucket.CompleteMultipartUpload(imur, parts)
	if err != nil {
		log.Printf("Error:%v", err)
	}
	fmt.Println("Uploaded")
}
```

## Troubleshooting

### SignatureNotMatch (403)

A `403 SignatureNotMatch` error means the request headers sent during the upload don't match the headers signed into the URL. Check the following:

**Cause**

**Resolution**

**Content-Type mismatch**

If `Content-Type` was specified when generating the URL, the client must send the exact same value. This is the most common cause for browser-based uploads — browsers automatically add `Content-Type`, which conflicts with a URL generated without it.

**User metadata mismatch**

If user metadata (`x-oss-meta-*`) was embedded in the URL, the client must send the same metadata headers with identical values.

**Storage class mismatch**

If `x-oss-storage-class` was specified when generating the URL, include it in the upload request.

**Modified query string**

Use the URL exactly as generated. Any modification to the query string invalidates the signature.

**System clock drift**

Signatures include a timestamp. Sync your system clock with an NTP server if the time difference is large.

**curl special characters**

Enclose the URL in double quotes when using curl to prevent the shell from interpreting `&` and other special characters.

## FAQ

### **If the presigned URL expires during an upload, does the upload fail?**

No. You can use a presigned URL to upload objects at any time within its validity period. The effective validity period is determined by the shorter of the signature validity and the STS token validity (if STS credentials are used).

### If I don't specify request headers or user metadata when generating the URL, do I need to include them in the upload request?

No. Request headers and user metadata are optional. If you didn't include them when generating the URL, omit them from the upload request as well.

## What's next

-   For the complete sample code, see the [GitHub repository](https://github.com/aliyun/aliyun-oss-go-sdk/blob/master/sample/sign_url.go).
    
-   For the API reference for the `SignURL` method, see [SignURL](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.SignURL).
