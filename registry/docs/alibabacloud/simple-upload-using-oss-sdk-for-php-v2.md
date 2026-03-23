Use the `putObject` method to upload an object to a bucket in a single HTTP request. Simple upload works for files, strings, byte arrays, and network streams.

## Prerequisites

Before you begin, make sure you have:

-   The `oss:PutObject` permission on the target bucket. For setup instructions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   Access credentials configured as environment variables (`ALIBABA_CLOUD_ACCESS_KEY_ID` and `ALIBABA_CLOUD_ACCESS_KEY_SECRET`). For setup instructions, see [Configure access credentials for PHP](/help/en/oss/developer-reference/configure-access-credentials-for-php-v2).
    

> The sample code uses `cn-hangzhou` as the region ID and connects to the public endpoint by default. To access OSS from another Alibaba Cloud service in the same region, use an internal endpoint instead. For details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

## Upload an object

All upload scenarios use `PutObjectRequest` and `putObject`. The only difference between uploading a local file, a string, a byte array, or a network stream is how you set `$request->body`.

The following example uploads a local file.

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Parse command-line arguments: --region and --bucket and --key and --file are required; --endpoint is optional
$optsdesc = [
    "region"   => ['help' => 'The region where the bucket is located.', 'required' => true],
    "endpoint" => ['help' => 'The endpoint for accessing OSS.',          'required' => false],
    "bucket"   => ['help' => 'The bucket name.',                         'required' => true],
    "key"      => ['help' => 'The object key.',                          'required' => true],
    "file"     => ['help' => 'Local path of the file to upload.',        'required' => true],
];

$longopts = array_map(function ($key) { return "$key:"; }, array_keys($optsdesc));
$options  = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] && empty($options[$key])) {
        echo "Error: --$key is required. {$value['help']}" . PHP_EOL;
        exit(1);
    }
}

$region = $options["region"];
$bucket = $options["bucket"];
$key    = $options["key"];
$file   = $options["file"];

// Load credentials from environment variables
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($region);

if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

// Open the local file and wrap it in a stream
if (!file_exists($file)) {
    echo "Error: File not found: $file" . PHP_EOL;
    exit(1);
}
$body = Oss\Utils::streamFor(fopen($file, 'r'));

// Build the upload request
$request       = new Oss\Models\PutObjectRequest(bucket: $bucket, key: $key);
$request->body = $body;

// Upload the object
$result = $client->putObject($request);

printf(
    "status code: %s\nrequest ID:  %s\nETag:        %s\n",
    $result->statusCode,  // 200 indicates success
    $result->requestId,   // use this ID to debug or trace the request
    $result->etag         // unique identifier for the uploaded object
);
```

### Upload other data types

To upload a string, byte array, or network stream, replace the `$request->body` assignment:

```
// Upload a string
$request->body = Oss\Utils::streamFor('Hello OSS');

// Upload a byte array (ASCII for 'Hello OSS')
$dataBytes     = [72, 101, 108, 108, 111, 32, 79, 83, 83];
$request->body = Oss\Utils::streamFor(implode(array_map('chr', $dataBytes)));

// Upload the response body from a URL
$request->body = Oss\Utils::streamFor(file_get_contents('https://www.aliyun.com/'));
```

`Oss\Utils::streamFor()` accepts any string or resource, so you can pass a file handle, a raw string, or the output of `file_get_contents()`.

## Track upload progress

Set `$request->progressFn` to a callback function that receives three parameters on every progress update:

**Parameter**

**Type**

**Description**

`$increment`

int

Bytes uploaded in this update

`$transferred`

int

Total bytes uploaded so far

`$total`

int

Total size of the data being uploaded

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region where the bucket is located.', 'required' => true],
    "endpoint" => ['help' => 'The endpoint for accessing OSS.',          'required' => false],
    "bucket"   => ['help' => 'The bucket name.',                         'required' => true],
    "key"      => ['help' => 'The object key.',                          'required' => true],
];

$longopts = array_map(function ($key) { return "$key:"; }, array_keys($optsdesc));
$options  = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] && empty($options[$key])) {
        echo "Error: --$key is required. {$value['help']}" . PHP_EOL;
        exit(1);
    }
}

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($options["region"]);

if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

$request       = new Oss\Models\PutObjectRequest($options["bucket"], $options["key"]);
$request->body = Oss\Utils::streamFor('Hello OSS');

// The progress callback fires on each data chunk sent
$request->progressFn = function (int $increment, int $transferred, int $total) {
    echo "Uploaded this chunk: {$increment} bytes" . PHP_EOL;
    echo "Total uploaded:      {$transferred} bytes" . PHP_EOL;
    echo "Object total size:   {$total} bytes" . PHP_EOL;
    echo str_repeat('-', 40) . PHP_EOL;
};

$result = $client->putObject($request);

printf(
    "status code: %s\nrequest ID:  %s\nETag:        %s\n",
    $result->statusCode,
    $result->requestId,
    $result->etag
);
```

## Trigger a callback after upload

OSS can send an HTTP callback to your application server after a successful upload. Include the callback parameters in the `PutObjectRequest` to enable this.

```
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

$optsdesc = [
    "region"   => ['help' => 'The region where the bucket is located.', 'required' => true],
    "endpoint" => ['help' => 'The endpoint for accessing OSS.',          'required' => false],
    "bucket"   => ['help' => 'The bucket name.',                         'required' => true],
    "key"      => ['help' => 'The object key.',                          'required' => true],
];

$longopts = array_map(function ($key) { return "$key:"; }, array_keys($optsdesc));
$options  = getopt("", $longopts);

foreach ($optsdesc as $key => $value) {
    if ($value['required'] && empty($options[$key])) {
        echo "Error: --$key is required. {$value['help']}" . PHP_EOL;
        exit(1);
    }
}

$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider);
$cfg->setRegion($options["region"]);

if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]);
}

$client = new Oss\Client($cfg);

// Callback configuration: base64-encoded JSON
// Replace <your-callback-url> and <your-callback-host> with your server's values
$callback = base64_encode(json_encode([
    'callbackUrl'      => '<your-callback-url>',   // URL that OSS POSTs the callback to
    'callbackHost'     => '<your-callback-host>',  // Host header value in the callback request
    'callbackBody'     => 'bucket=${bucket}&object=${object}&etag=${etag}&size=${size}'
                        . '&mimeType=${mimeType}'
                        . '&imageInfo.height=${imageInfo.height}'
                        . '&imageInfo.width=${imageInfo.width}'
                        . '&imageInfo.format=${imageInfo.format}'
                        . '&my_var1=${x:var1}&my_var2=${x:var2}',
    'callbackBodyType' => 'application/x-www-form-urlencoded',
]));

// Custom variables are passed through the callback body as ${x:var_name}
$callbackVar = base64_encode(json_encode([
    'x:var1' => 'value1',
    'x:var2' => 'value2',
]));

$request              = new Oss\Models\PutObjectRequest(bucket: $options["bucket"], key: $options["key"]);
$request->callback    = $callback;
$request->callbackVar = $callbackVar;

$result = $client->putObject($request);

printf(
    "status code:     %s\nrequest ID:      %s\ncallback result: %s\n",
    $result->statusCode,
    $result->requestId,
    var_export($result->callbackResult, true)  // contains the response body from your callback server
);
```

### Callback parameters

**Parameter**

**Type**

**Required**

**Description**

`callbackUrl`

string

Yes

URL that OSS sends the POST request to after the upload completes

`callbackHost`

string

No

Value of the `Host` header in the callback request

`callbackBody`

string

Yes

Template for the callback request body; supports `${variable}` placeholders

`callbackBodyType`

string

No

Content type of the callback body; defaults to `application/x-www-form-urlencoded`

Custom variables must use the `x:` prefix (for example, `x:var1`) and are referenced in `callbackBody` as `${x:var1}`.

## What's next

For the complete sample code, see [GitHub example](https://github.com/aliyun/alibabacloud-oss-php-sdk-v2/blob/master/sample/PutObject.php).
