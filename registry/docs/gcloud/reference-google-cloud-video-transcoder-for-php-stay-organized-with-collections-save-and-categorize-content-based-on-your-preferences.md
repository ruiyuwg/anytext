-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Video Transcoder for PHP Stay organized with collections Save and categorize content based on your preferences.

1.4.0 (latest) 1.3.2 1.2.0 1.1.0 1.0.3 0.10.5 0.9.1 0.8.2 0.7.1 0.6.0 0.5.3

> Idiomatic PHP client for [Google Cloud Video Transcoder](https://cloud.google.com/transcoder).

[![Latest Stable Version](https://poser.pugx.org/google/cloud-video-transcoder/v/stable)](https://packagist.org/packages/google/cloud-video-transcoder) [![Packagist](https://img.shields.io/packagist/dm/google/cloud-video-transcoder.svg)](https://packagist.org/packages/google/cloud-video-transcoder)

**NOTE:** This repository is part of [Google Cloud PHP](https://github.com/googleapis/google-cloud-php). Any support requests, bug reports, or development contributions should be directed to that project.

### Installation

To begin, install the preferred dependency manager for PHP, [Composer](https://getcomposer.org/).

Now install this component:

```
$ composer require google/cloud-video-transcoder
```

This component supports both REST over HTTP/1.1 and gRPC. In order to take advantage of the benefits offered by gRPC (such as streaming methods) please see our [gRPC installation guide](https://cloud.google.com/php/grpc).

### Authentication

Please see our [Authentication guide](https://github.com/googleapis/google-cloud-php/blob/main/AUTHENTICATION.md) for more information on authenticating your client. Once authenticated, you'll be ready to start making requests.

### Sample

```
use Google\ApiCore\ApiException;
use Google\Cloud\Video\Transcoder\V1\Client\TranscoderServiceClient;
use Google\Cloud\Video\Transcoder\V1\GetJobRequest;
use Google\Cloud\Video\Transcoder\V1\Job;

// Create a client.
$transcoderServiceClient = new TranscoderServiceClient();

// Prepare the request message.
$request = (new GetJobRequest())
    ->setName($formattedName);

// Call the API and handle any network failures.
try {
    /** @var Job $response */
    $response = $transcoderServiceClient->getJob($request);
    printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
} catch (ApiException $ex) {
    printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
}
```

### Debugging

Please see our [Debugging guide](https://github.com/googleapis/google-cloud-php/blob/main/DEBUG.md) for more information about the debugging tools.

### Version

This component is considered GA (generally available). As such, it will not introduce backwards-incompatible changes in any minor or patch releases. We will address issues and requests with the highest priority.

### Next Steps

1.  Understand the [official documentation](https://cloud.google.com/transcoder/docs).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
