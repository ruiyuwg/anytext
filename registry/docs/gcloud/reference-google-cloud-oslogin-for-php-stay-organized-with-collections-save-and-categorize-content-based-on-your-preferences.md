-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud OsLogin for PHP Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.5 1.9.6 1.8.0 1.7.0 1.6.0 1.5.2 1.4.6

> Idiomatic PHP client for [Google Cloud OsLogin](https://cloud.google.com/compute/docs/oslogin/rest/).

[![Latest Stable Version](https://poser.pugx.org/google/cloud-oslogin/v/stable)](https://packagist.org/packages/google/cloud-oslogin) [![Packagist](https://img.shields.io/packagist/dm/google/cloud-oslogin.svg)](https://packagist.org/packages/google/cloud-oslogin)

**NOTE:** This repository is part of [Google Cloud PHP](https://github.com/googleapis/google-cloud-php). Any support requests, bug reports, or development contributions should be directed to that project.

Manages OS login configuration for Google account users.

### Installation

To begin, install the preferred dependency manager for PHP, [Composer](https://getcomposer.org/).

Now install this component:

```
$ composer require google/cloud-oslogin
```

This component supports both REST over HTTP/1.1 and gRPC. In order to take advantage of the benefits offered by gRPC (such as streaming methods) please see our [gRPC installation guide](https://cloud.google.com/php/grpc).

### Authentication

Please see our [Authentication guide](https://github.com/googleapis/google-cloud-php/blob/main/AUTHENTICATION.md) for more information on authenticating your client. Once authenticated, you'll be ready to start making requests.

### Sample

```
use Google\ApiCore\ApiException;
use Google\Cloud\OsLogin\V1\Client\OsLoginServiceClient;
use Google\Cloud\OsLogin\V1\GetLoginProfileRequest;
use Google\Cloud\OsLogin\V1\LoginProfile;

// Create a client.
$osLoginServiceClient = new OsLoginServiceClient();

// Prepare the request message.
$request = (new GetLoginProfileRequest())
    ->setName($formattedName);

// Call the API and handle any network failures.
try {
    /** @var LoginProfile $response */
    $response = $osLoginServiceClient->getLoginProfile($request);
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

Take a look at and understand the [official documentation](https://cloud.google.com/compute/docs/oslogin/rest/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
