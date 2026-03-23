This topic describes how to use OSS SDK for PHP to list all files in a specified bucket.

## **Precautions**

-   The sample code in this topic uses the region ID `cn-hangzhou` for the China (Hangzhou) region as an example. By default, a public endpoint is used. If you want to access OSS from other Alibaba Cloud products in the same region, use an internal endpoint. For more information about the mappings between OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   To list files, you must have the `oss:ListObjects` permission. For more information, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## **Sample code**

You can use the following sample code to call the ListObjectsV2 operation to list all files in a specified bucket.

```
<?php

// Import the autoloader file to ensure that dependency libraries can be loaded correctly.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define the descriptions for command-line arguments.
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True], // The region where the bucket is located. (Required)
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False], // The endpoint. (Optional)
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // The bucket name. (Required)
];

// Convert the parameter descriptions to the long options format required by getopt.
// A colon ":" after each parameter indicates that the parameter requires a value.
$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

// Parse the command-line arguments.
$options = getopt("", $longopts);

// Verify that the required arguments exist.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help']; // Obtain the help information for the parameter.
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1); // If a required argument is missing, exit the program.
    }
}

// Extract values from the parsed arguments.
$region = $options["region"]; // The region where the bucket is located.
$bucket = $options["bucket"]; // The bucket name.

// Load the credential information from environment variables.
// Use EnvironmentVariableCredentialsProvider to read the Access Key ID and Access Key Secret from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider); // Set the credential provider.
$cfg->setRegion($region); // Set the region where the bucket is located.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]); // If an endpoint is provided, set the endpoint.
}

// Create an OSS client instance.
$client = new Oss\Client($cfg);

// Create a Paginator object to list objects in the bucket by page.
// ListObjectsV2Paginator lets you efficiently traverse the object list by page.
$paginator = new Oss\Paginator\ListObjectsV2Paginator(client: $client);
$iter = $paginator->iterPage(new Oss\Models\ListObjectsV2Request(bucket: $bucket)); // Initialize the paging iterator.

// Traverse the paged results of objects.
foreach ($iter as $page) {
    foreach ($page->contents ?? [] as $object) {
        // Print the key information of each object.
        // Output the key, type, and size of the object.
        print("Object: $object->key, $object->type, $object->size\n");
    }
}
```

## **Common scenarios**

### **List all files in a specified folder**

The following sample code shows how to set the Prefix parameter to list information about all files in a specified folder, including the file size, file type, and file name.

```
<?php

// Import the autoloader file to ensure that dependency libraries can be loaded correctly.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define the descriptions for command-line arguments.
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True], // The region where the bucket is located. (Required)
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False], // The endpoint. (Optional)
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // The bucket name. (Required)
];

// Convert the parameter descriptions to the long options format required by getopt.
// A colon ":" after each parameter indicates that the parameter requires a value.
$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

// Parse the command-line arguments.
$options = getopt("", $longopts);

// Verify that the required arguments exist.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help']; // Obtain the help information for the parameter.
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1); // If a required argument is missing, exit the program.
    }
}

// Extract values from the parsed arguments.
$region = $options["region"]; // The region where the bucket is located.
$bucket = $options["bucket"]; // The bucket name.

// Load the credential information from environment variables.
// Use EnvironmentVariableCredentialsProvider to read the Access Key ID and Access Key Secret from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider); // Set the credential provider.
$cfg->setRegion($region); // Set the region where the bucket is located.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]); // If an endpoint is provided, set the endpoint.
}

// Create an OSS client instance.
$client = new Oss\Client($cfg);

// Create a Paginator object to list objects in the bucket by page.
// ListObjectsV2Paginator lets you efficiently traverse the object list by page.
$paginator = new Oss\Paginator\ListObjectsV2Paginator(client: $client);
$iter = $paginator->iterPage(new Oss\Models\ListObjectsV2Request(
                bucket: $bucket,
                prefix: "example/", // Set the prefix to filter objects in the specified folder.
            )); // Initialize the paging iterator.

// Traverse the paged results of objects.
foreach ($iter as $page) {
    foreach ($page->contents ?? [] as $object) {
        // Print the key information of each object.
        // Output the key, type, and size of the object.
        print("Object: $object->key, $object->type, $object->size\n");
    }
}
```

### **List files with a specified prefix**

The following sample code shows how to set the Prefix parameter to list information about files with a specified prefix, including the file size, file type, and file name.

```
<?php

// Import the autoloader file to ensure that dependency libraries can be loaded correctly.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define the descriptions for command-line arguments.
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True], // The region where the bucket is located. (Required)
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False], // The endpoint. (Optional)
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // The bucket name. (Required)
];

// Convert the parameter descriptions to the long options format required by getopt.
// A colon ":" after each parameter indicates that the parameter requires a value.
$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

// Parse the command-line arguments.
$options = getopt("", $longopts);

// Verify that the required arguments exist.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help']; // Obtain the help information for the parameter.
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1); // If a required argument is missing, exit the program.
    }
}

// Extract values from the parsed arguments.
$region = $options["region"]; // The region where the bucket is located.
$bucket = $options["bucket"]; // The bucket name.

// Load the credential information from environment variables.
// Use EnvironmentVariableCredentialsProvider to read the Access Key ID and Access Key Secret from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider); // Set the credential provider.
$cfg->setRegion($region); // Set the region where the bucket is located.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]); // If an endpoint is provided, set the endpoint.
}

// Create an OSS client instance.
$client = new Oss\Client($cfg);

// Create a Paginator object to list objects in the bucket by page.
// ListObjectsV2Paginator lets you efficiently traverse the object list by page.
$paginator = new Oss\Paginator\ListObjectsV2Paginator(client: $client);
$iter = $paginator->iterPage(new Oss\Models\ListObjectsV2Request(
                bucket: $bucket,
                prefix: "my-object-", // List all objects with the specified prefix.
            )); // Initialize the paging iterator.

// Traverse the paged results of objects.
foreach ($iter as $page) {
    foreach ($page->contents ?? [] as $object) {
        // Print the key information of each object.
        // Output the key, type, and size of the object.
        print("Object: $object->key, $object->type, $object->size\n");
    }
}
```

### **List a specified number of files**

The following sample code shows how to set the MaxKeys parameter to list information about a specified number of files, including the file size, file type, and file name.

```
<?php

// Import the autoloader file to ensure that dependency libraries can be loaded correctly.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define the descriptions for command-line arguments.
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True], // The region where the bucket is located. (Required)
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False], // The endpoint. (Optional)
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // The bucket name. (Required)
];

// Convert the parameter descriptions to the long options format required by getopt.
// A colon ":" after each parameter indicates that the parameter requires a value.
$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

// Parse the command-line arguments.
$options = getopt("", $longopts);

// Verify that the required arguments exist.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help']; // Obtain the help information for the parameter.
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1); // If a required argument is missing, exit the program.
    }
}

// Extract values from the parsed arguments.
$region = $options["region"]; // The region where the bucket is located.
$bucket = $options["bucket"]; // The bucket name.

// Load the credential information from environment variables.
// Use EnvironmentVariableCredentialsProvider to read the Access Key ID and Access Key Secret from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider); // Set the credential provider.
$cfg->setRegion($region); // Set the region where the bucket is located.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]); // If an endpoint is provided, set the endpoint.
}

// Create an OSS client instance.
$client = new Oss\Client($cfg);

// Create a Paginator object to list objects in the bucket by page.
// ListObjectsV2Paginator lets you efficiently traverse the object list by page.
$paginator = new Oss\Paginator\ListObjectsV2Paginator(client: $client);
$iter = $paginator->iterPage(new Oss\Models\ListObjectsV2Request(
                bucket: $bucket,
                maxKeys: 10, // The maximum number of objects to return for each list operation.
            )); // Initialize the paging iterator.

// Traverse the paged results of objects.
foreach ($iter as $page) {
    foreach ($page->contents ?? [] as $object) {
        // Print the key information of each object.
        // Output the key, type, and size of the object.
        print("Object: $object->key, $object->type, $object->size\n");
    }
}
```

### **List files after a specified start position**

The following sample code shows how to set the StartAfter parameter to specify the start position for listing. All files that are in lexicographical order after the value of StartAfter are returned.

```
<?php

// Import the autoloader file to ensure that dependency libraries can be loaded correctly.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define the descriptions for command-line arguments.
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True], // The region where the bucket is located. (Required)
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False], // The endpoint. (Optional)
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // The bucket name. (Required)
];

// Convert the parameter descriptions to the long options format required by getopt.
// A colon ":" after each parameter indicates that the parameter requires a value.
$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

// Parse the command-line arguments.
$options = getopt("", $longopts);

// Verify that the required arguments exist.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help']; // Obtain the help information for the parameter.
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1); // If a required argument is missing, exit the program.
    }
}

// Extract values from the parsed arguments.
$region = $options["region"]; // The region where the bucket is located.
$bucket = $options["bucket"]; // The bucket name.

// Load the credential information from environment variables.
// Use EnvironmentVariableCredentialsProvider to read the Access Key ID and Access Key Secret from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider); // Set the credential provider.
$cfg->setRegion($region); // Set the region where the bucket is located.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]); // If an endpoint is provided, set the endpoint.
}

// Create an OSS client instance.
$client = new Oss\Client($cfg);

// Create a Paginator object to list objects in the bucket by page.
// ListObjectsV2Paginator lets you efficiently traverse the object list by page.
$paginator = new Oss\Paginator\ListObjectsV2Paginator(client: $client);
$iter = $paginator->iterPage(new Oss\Models\ListObjectsV2Request(
                bucket: $bucket,
                startAfter:"my-object-", // Specify the start position for listing objects.
            )); // Initialize the paging iterator.

// Traverse the paged results of objects.
foreach ($iter as $page) {
    foreach ($page->contents ?? [] as $object) {
        // Print the key information of each object.
        // Output the key, type, and size of the object.
        print("Object: $object->key, $object->type, $object->size\n");
    }
}
```

### **List all subdirectories in the root directory**

```
<?php

// Import the autoloader file to ensure that dependency libraries can be loaded correctly.
require_once __DIR__ . '/../vendor/autoload.php';

use AlibabaCloud\Oss\V2 as Oss;

// Define the descriptions for command-line arguments.
$optsdesc = [
    "region" => ['help' => 'The region in which the bucket is located.', 'required' => True], // The region where the bucket is located. (Required)
    "endpoint" => ['help' => 'The domain names that other services can use to access OSS.', 'required' => False], // The endpoint. (Optional)
    "bucket" => ['help' => 'The name of the bucket', 'required' => True], // The bucket name. (Required)
];

// Convert the parameter descriptions to the long options format required by getopt.
// A colon ":" after each parameter indicates that the parameter requires a value.
$longopts = \array_map(function ($key) {
    return "$key:";
}, array_keys($optsdesc));

// Parse the command-line arguments.
$options = getopt("", $longopts);

// Verify that the required arguments exist.
foreach ($optsdesc as $key => $value) {
    if ($value['required'] === True && empty($options[$key])) {
        $help = $value['help']; // Obtain the help information for the parameter.
        echo "Error: the following arguments are required: --$key, $help" . PHP_EOL;
        exit(1); // If a required argument is missing, exit the program.
    }
}

// Extract values from the parsed arguments.
$region = $options["region"]; // The region where the bucket is located.
$bucket = $options["bucket"]; // The bucket name.

// Load the credential information from environment variables.
// Use EnvironmentVariableCredentialsProvider to read the Access Key ID and Access Key Secret from environment variables.
$credentialsProvider = new Oss\Credentials\EnvironmentVariableCredentialsProvider();

// Use the default configurations of the SDK.
$cfg = Oss\Config::loadDefault();
$cfg->setCredentialsProvider($credentialsProvider); // Set the credential provider.
$cfg->setRegion($region); // Set the region where the bucket is located.
if (isset($options["endpoint"])) {
    $cfg->setEndpoint($options["endpoint"]); // If an endpoint is provided, set the endpoint.
}

// Create an OSS client instance.
$client = new Oss\Client($cfg);

// Create a Paginator object to list objects in the bucket by page.
// ListObjectsV2Paginator lets you efficiently traverse the object list by page.
$paginator = new Oss\Paginator\ListObjectsV2Paginator(client: $client);
$iter = $paginator->iterPage(request: new Oss\Models\ListObjectsV2Request(
                bucket: $bucket,
                prefix:"",
                delimiter: "/",
            )); // Initialize the paging iterator.

// Traverse the paged results of objects.
foreach ($iter as $page) {
    # Print the subdirectories on each page.
    foreach ($page->commonPrefixes ?? [] as $prefixObject) {
        echo "SubPrefix: " . $prefixObject->prefix . PHP_EOL;
    }
}
```

## References

-   For the complete sample code for listing files, see [GitHub example](https://github.com/aliyun/alibabacloud-oss-php-sdk-v2/blob/master/sample/ListObjectsV2.php).
