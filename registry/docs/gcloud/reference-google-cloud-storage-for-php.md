-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

1.49.2 (latest) 1.49.1 1.48.7 1.47.0 1.46.0 1.45.0 1.44.0 1.43.1 1.42.1 1.41.4 1.37.0 1.36.1 1.35.0 1.34.0 1.33.4 1.32.0 1.31.2 1.30.3

# Google Cloud Storage for PHP

> Idiomatic PHP client for [Cloud Storage](https://cloud.google.com/storage/).

[![Latest Stable Version](https://poser.pugx.org/google/cloud-storage/v/stable)](https://packagist.org/packages/google/cloud-storage) [![Packagist](https://img.shields.io/packagist/dm/google/cloud-storage.svg)](https://packagist.org/packages/google/cloud-storage)

**NOTE:** This repository is part of [Google Cloud PHP](https://github.com/googleapis/google-cloud-php). Any support requests, bug reports, or development contributions should be directed to that project.

Allows world-wide storage and retrieval of any amount of data at any time. You can use Cloud Storage for a range of scenarios including serving website content, storing data for archival and disaster recovery, or distributing large data objects to users via direct download.

### Installation

To begin, install the preferred dependency manager for PHP, [Composer](https://getcomposer.org/).

Now to install just this component:

```
$ composer require google/cloud-storage
```

Or to install the entire suite of components at once:

```
$ composer require google/cloud
```

### Authentication

Please see our [Authentication guide](https://github.com/googleapis/google-cloud-php/blob/main/AUTHENTICATION.md) for more information on authenticating your client. Once authenticated, you'll be ready to start making requests.

### Sample

```
require 'vendor/autoload.php';

use Google\Cloud\Storage\StorageClient;

$storage = new StorageClient();

$bucket = $storage->bucket('my_bucket');

// Upload a file to the bucket.
$bucket->upload(
    fopen('/data/file.txt', 'r')
);

// Using Predefined ACLs to manage object permissions, you may
// upload a file and give read access to anyone with the URL.
$bucket->upload(
    fopen('/data/file.txt', 'r'),
    [
        'predefinedAcl' => 'publicRead'
    ]
);

// Download and store an object from the bucket locally.
$object = $bucket->object('file_backup.txt');
$object->downloadToFile('/data/file_backup.txt');
```

### Stream Wrapper

```
require 'vendor/autoload.php';

use Google\Cloud\Storage\StorageClient;

$storage = new StorageClient();
$storage->registerStreamWrapper();

$contents = file_get_contents('gs://my_bucket/file_backup.txt');
```

### Version

This component is considered GA (generally available). As such, it will not introduce backwards-incompatible changes in any minor or patch releases. We will address issues and requests with the highest priority.

### Next Steps

1.  Understand the [official documentation](https://cloud.google.com/storage/docs).
2.  Take a look at [in-depth usage samples](https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/storage/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-11 UTC.
