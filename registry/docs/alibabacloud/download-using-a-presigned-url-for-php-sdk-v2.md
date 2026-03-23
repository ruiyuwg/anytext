Objects in an Object Storage Service (OSS) bucket are private by default. To let others download a private object without exposing your credentials, generate a signed URL for a GET request. The URL is valid for a period you specify, can be used multiple times before it expires, and becomes invalid once the expiration time passes.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with at least one object
    
-   The `oss:GetObject` permission (required to download objects via a signed URL — no special permissions are needed to generate the URL itself)
    
-   Credentials stored as environment variables (`OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`)
    

## Usage notes

-   **Signature version:** The sample code uses a V4 signed URL, which is valid for a maximum of 7 days.
    
-   **Permissions:** No special permissions are required to generate a signed URL. However, the underlying credentials must have the `oss:GetObject` permission for third parties to successfully download the object. To grant this permission, see [Grant custom access policies to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-flo-x8e-e94).
    
-   **Bearer token semantics:** Treat a signed URL as a bearer token. Anyone with the URL can download the object until it expires. Use short expiration times for sensitive objects.
    
-   **Region and endpoint:** The sample code uses the China (Hangzhou) region (`cn-hangzhou`) with a public endpoint by default. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For the full list of regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   **Credentials configuration:** The sample code uses environment variables to load credentials. For other credential options, see [Configure access credentials for PHP](/help/en/oss/developer-reference/configure-access-credentials-for-php-v2).
    

## How it works

The following diagram shows the two-party flow for downloading an object with a signed URL.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1859231671/CAEQPxiBgMDc97LDtxkiIGYxMzdiNjNmMjRmZDRhZjdhZGIzM2ZkNGMxNGJmNmMx4751395_20241112152822.507.svg)

1.  The object owner generates a signed URL using the PHP SDK and shares it.
    
2.  A third party uses the signed URL to download the object — no OSS credentials needed.
    

## Parameters

**Parameter**

**Required**

**Description**

**Example**

`--region`

Yes

Region where the bucket is located

`cn-hangzhou`

`--bucket`

Yes

Bucket name

`examplebucket`

`--key`

Yes

Object name, including the path

`my-object.txt`

`--expire`

No

URL validity period in seconds. Default: 900 (15 minutes). Maximum: 604,800 (7 days).

`600`

`--endpoint`

No

Endpoint. If not specified, the public endpoint for the region is used automatically.

`oss-cn-hangzhou.aliyuncs.com`

## Generate a signed URL and download an object

### Step 1: Generate a signed URL (object owner)

The core of URL generation is two lines: create a `GetObjectRequest`, then call `presign()` with an expiration interval.

```
$request = new Oss\Models\GetObjectRequest(bucket: $bucket, key: $key);
$result  = $client->presign($request, ['expires' => new \DateInterval("PT{$expire}S")]);
echo "Signed URL: " . $result->url . PHP_EOL;
```

The following is the full runnable example, including argument parsing and credential loading:

```
<?php

// Load Composer dependencies.
require_once __DIR__ . '/../../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define accepted command-line arguments.
$optsdesc = [
    "region"   => ['help' => 'The region in which the bucket is located.', 'required' => True],
    "endpoint" => ['help' => 'The endpoint used to access OSS.',            'required' => False],
    "bucket"   => ['help' => 'The name of the bucket.',                     'required' => True],
    "key"      => ['help' => 'The name of the object.',                     'required' => True],
    "expire"   => ['help' => 'URL validity period in seconds (default: 900).', 'required' => False],
];

// Build the long-options list for getopt (each option requires a value).
$longopts = array_map(fn($key) => "$key:", array_keys($optsdesc));
$options  = getopt("", $longopts);

// Validate required arguments.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        echo "Error: --$key is required. " . $value['help'] . PHP_EOL;
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];
$key    = $options["key"];
$expire = isset($options["expire"]) ? (int)$options["expire"] : 900; // Default: 900 seconds (15 minutes)

// Load credentials from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Configure and create the OSS client.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

try {
    $client = new Oss\Client($cfg);

    // Create a GET request and generate a signed URL.
    // DateInterval format: PT{n}S means n seconds (P = Period, T = Time, S = Seconds).
    $request = new Oss\Models\GetObjectRequest(bucket: $bucket, key: $key);
    $result  = $client->presign($request, [
        'expires' => new \DateInterval("PT{$expire}S"),
    ]);

    echo "Signed URL: " . $result->url . PHP_EOL;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . PHP_EOL;
    exit(1);
}
```

### Step 2: Download the object (third party)

Use the signed URL in a GET request with any HTTP client. All examples below use the same signed URL format.

**Note**

If the signed URL is generated with custom request headers, the same headers must be included in the download request. A mismatch causes a signature error. See [Download with a custom request header](#6a6657be4dd4p) for details.

### curl

```
curl -SO "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"
```

### Java

```
import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class Demo {
    public static void main(String[] args) {
        String fileURL  = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
        String savePath = "C:/downloads/myfile.txt";

        try {
            downloadFile(fileURL, savePath);
            System.out.println("Download completed!");
        } catch (IOException e) {
            System.err.println("Error during download: " + e.getMessage());
        }
    }

    private static void downloadFile(String fileURL, String savePath) throws IOException {
        URL url = new URL(fileURL);
        HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
        httpConn.setRequestMethod("GET");

        int responseCode = httpConn.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            InputStream inputStream   = new BufferedInputStream(httpConn.getInputStream());
            FileOutputStream outputStream = new FileOutputStream(savePath);

            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            outputStream.close();
            inputStream.close();
        } else {
            System.out.println("No file to download. Server replied HTTP code: " + responseCode);
        }
        httpConn.disconnect();
    }
}
```

### Node.js

```
const https = require('https');
const fs    = require('fs');

const fileURL  = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
const savePath = "C:/downloads/myfile.txt";

https.get(fileURL, (response) => {
    if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(savePath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
            fileStream.close();
            console.log("Download completed!");
        });
    } else {
        console.error(`Download failed. Server responded with code: ${response.statusCode}`);
    }
}).on('error', (err) => {
    console.error("Error during download:", err.message);
});
```

### Python

```
import requests

file_url  = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"
save_path = "C:/downloads/myfile.txt"

try:
    response = requests.get(file_url, stream=True)
    if response.status_code == 200:
        with open(save_path, 'wb') as f:
            for chunk in response.iter_content(4096):
                f.write(chunk)
        print("Download completed!")
    else:
        print(f"No file to download. Server replied HTTP code: {response.status_code}")
except Exception as e:
    print("Error during download:", e)
```

### Go

```
package main

import (
    "io"
    "net/http"
    "os"
)

func main() {
    fileURL  := "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"
    savePath := "C:/downloads/myfile.txt"

    response, err := http.Get(fileURL)
    if err != nil {
        panic(err)
    }
    defer response.Body.Close()

    if response.StatusCode == http.StatusOK {
        outFile, err := os.Create(savePath)
        if err != nil {
            panic(err)
        }
        defer outFile.Close()

        _, err = io.Copy(outFile, response.Body)
        if err != nil {
            panic(err)
        }
        println("Download completed!")
    } else {
        println("No file to download. Server replied HTTP code:", response.StatusCode)
    }
}
```

### JavaScript (browser)

```
const fileURL  = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
const savePath = "myfile.txt"; // The name used when saving the downloaded file locally.

fetch(fileURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server replied HTTP code: ${response.status}`);
        }
        return response.blob();
    })
    .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = savePath;
        document.body.appendChild(link); // Required for Firefox compatibility.
        link.click();
        link.remove();
        console.log("Download completed!");
    })
    .catch(error => {
        console.error("Error during download:", error);
    });
```

### Android (Java)

```
import android.os.AsyncTask;
import android.os.Environment;
import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class DownloadTask extends AsyncTask<String, String, String> {
    @Override
    protected String doInBackground(String... params) {
        String fileURL  = params[0];
        String savePath = Environment.getExternalStoragePublicDirectory(
                              Environment.DIRECTORY_DOWNLOADS) + "/myfile.txt";
        try {
            URL url = new URL(fileURL);
            HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
            httpConn.setRequestMethod("GET");
            int responseCode = httpConn.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                InputStream inputStream   = new BufferedInputStream(httpConn.getInputStream());
                FileOutputStream outputStream = new FileOutputStream(savePath);
                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }
                outputStream.close();
                inputStream.close();
                return "Download completed!";
            } else {
                return "No file to download. Server replied HTTP code: " + responseCode;
            }
        } catch (Exception e) {
            return "Error during download: " + e.getMessage();
        }
    }
}
```

### Objective-C

```
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSString *fileURL  = @"https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
        NSString *savePath = @"/Users/<your-username>/Desktop/myfile.txt";

        NSURL *url = [NSURL URLWithString:fileURL];

        NSURLSessionDataTask *task = [[NSURLSession sharedSession]
            dataTaskWithURL:url
          completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
            if (error) {
                NSLog(@"Error during download: %@", error.localizedDescription);
                return;
            }
            if (!data) {
                NSLog(@"No data received.");
                return;
            }
            NSError *writeError = nil;
            BOOL success = [data writeToURL:[NSURL fileURLWithPath:savePath]
                                    options:NSDataWritingAtomic
                                      error:&writeError];
            if (success) {
                NSLog(@"Download completed!");
            } else {
                NSLog(@"Error saving file: %@", writeError.localizedDescription);
            }
        }];

        [task resume];
        [[NSRunLoop currentRunLoop] run];
    }
    return 0;
}
```

## Common scenarios

### **Download a specific version of an object**

To download a versioned object, pass the `versionId` to `GetObjectRequest`.

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region in which the bucket is located.', 'required' => True],
    "endpoint" => ['help' => 'The endpoint used to access OSS.',            'required' => False],
    "bucket"   => ['help' => 'The name of the bucket.',                     'required' => True],
    "key"      => ['help' => 'The name of the object.',                     'required' => True],
];

$longopts = array_map(fn($key) => "$key:", array_keys($optsdesc));
$options  = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        echo "Error: --$key is required. " . $value['help'] . PHP_EOL;
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];
$key    = $options["key"];

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$versionId = "yourVersionId"; // Replace with the actual version ID.

// Include versionId in the request to target a specific object version.
$request = new Oss\Models\GetObjectRequest(bucket: $bucket, key: $key, versionId: $versionId);
$result  = $client->presign($request);

print(
    'Presign result: ' . var_export($result, true) . PHP_EOL .
    'Signed URL: '     . $result->url . PHP_EOL
);
```

### Download with a custom request header

Signing specific request headers into the URL restricts how the URL can be used — a request that omits or changes those headers fails with a signature error. This is useful for enforcing range semantics or other download constraints.

**Step 1:** Generate a signed URL that includes the `rangeBehavior` header.

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region in which the bucket is located.', 'required' => True],
    "endpoint" => ['help' => 'The endpoint used to access OSS.',            'required' => False],
    "bucket"   => ['help' => 'The name of the bucket.',                     'required' => True],
    "key"      => ['help' => 'The name of the object.',                     'required' => True],
];

$longopts = array_map(fn($key) => "$key:", array_keys($optsdesc));
$options  = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        echo "Error: --$key is required. " . $value['help'] . PHP_EOL;
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];
$key    = $options["key"];

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

// Sign the rangeBehavior header into the URL.
// Any GET request using this URL must include the same header.
$request = new Oss\Models\GetObjectRequest(bucket: $bucket, key: $key, rangeBehavior: 'standard');
$result  = $client->presign($request);

print(
    'Presign result: ' . var_export($result, true) . PHP_EOL .
    'Signed URL: '     . $result->url . PHP_EOL
);
```

**Step 2:** Include the same header in the download request.

```
curl -X GET "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241113T093321Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI5tKHJzUF3wMmACXgf1aH****************&x-oss-signature=f1746f121783eed5dab2d665da95fbca08505263e27476a46f88dbe3702af8a9***************************************" \
  -H "x-oss-range-behavior: standard" \
  -o "myfile.txt"
```

### Generate a signed URL with a custom domain name

**Warning**

Map the custom domain name to the bucket's default domain name before using it. Otherwise, the request fails. See [Access OSS using a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names#concept-zt4-cvy-5db).

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region in which the bucket is located.', 'required' => True],
    "endpoint" => ['help' => 'The endpoint used to access OSS.',            'required' => False],
    "bucket"   => ['help' => 'The name of the bucket.',                     'required' => True],
    "key"      => ['help' => 'The name of the object.',                     'required' => True],
];

$longopts = array_map(fn($key) => "$key:", array_keys($optsdesc));
$options  = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        echo "Error: --$key is required. " . $value['help'] . PHP_EOL;
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];
$key    = $options["key"];

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);
$cfg->setEndpoint("http://static.example.com"); // Replace with your custom domain name.
$cfg->setUseCname(true);

$client = new Oss\Client($cfg);

$request = new Oss\Models\GetObjectRequest(bucket: $bucket, key: $key);
$result  = $client->presign($request);

print(
    'Presign result: ' . var_export($result, true) . PHP_EOL .
    'Signed URL: '     . $result->url . PHP_EOL
);
```

## What's next

-   For the complete sample code, see the [GitHub example](https://github.com/aliyun/alibabacloud-oss-php-sdk-v2/blob/master/sample/Presign.php).
    
-   For the `presign` API reference, see [Presign](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.Presign).
