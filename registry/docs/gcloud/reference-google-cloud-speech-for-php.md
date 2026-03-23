-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.0 2.3.0 2.2.1 2.1.1 2.0.1 1.20.1 1.19.2 1.18.3 1.16.0 1.15.0 1.14.3 1.13.1 1.12.0 1.11.2 1.10.0 1.9.1 1.8.0 1.7.0

# Google Cloud Speech for PHP

> Idiomatic PHP client for [Cloud Speech](https://cloud.google.com/speech/).

[![Latest Stable Version](https://poser.pugx.org/google/cloud-speech/v/stable)](https://packagist.org/packages/google/cloud-speech) [![Packagist](https://img.shields.io/packagist/dm/google/cloud-speech.svg)](https://packagist.org/packages/google/cloud-speech)

**NOTE:** This repository is part of [Google Cloud PHP](https://github.com/googleapis/google-cloud-php). Any support requests, bug reports, or development contributions should be directed to that project.

Enables easy integration of Google speech recognition technologies into developer applications. Send audio and receive a text transcription from the Speech-to-Text API service.

### Experimental Notice for V2 Surface

Please note the V2 API surface is currently considered experimental and as a result it is subject to change.

### Installation

To begin, install the preferred dependency manager for PHP, [Composer](https://getcomposer.org/).

Now to install just this component:

```
$ composer require google/cloud-speech
```

Or to install the entire suite of components at once:

```
$ composer require google/cloud
```

This component supports both REST over HTTP/1.1 and gRPC. In order to take advantage of the benefits offered by gRPC (such as streaming methods) please see our [gRPC installation guide](https://cloud.google.com/php/grpc).

### Authentication

Please see our [Authentication guide](https://github.com/googleapis/google-cloud-php/blob/main/AUTHENTICATION.md) for more information on authenticating your client. Once authenticated, you'll be ready to start making requests.

### Sample

```
use Google\Cloud\Speech\V1\RecognitionConfig\AudioEncoding;
use Google\Cloud\Speech\V1\RecognitionConfig;
use Google\Cloud\Speech\V1\StreamingRecognitionConfig;

$recognitionConfig = new RecognitionConfig();
$recognitionConfig->setEncoding(AudioEncoding::FLAC);
$recognitionConfig->setSampleRateHertz(44100);
$recognitionConfig->setLanguageCode('en-US');
$config = new StreamingRecognitionConfig();
$config->setConfig($recognitionConfig);

$audioResource = fopen('path/to/audio.flac', 'r');

$responses = $speechClient->recognizeAudioStream($config, $audioResource);

foreach ($responses as $element) {
    // doSomethingWith($element);
}
```

### Version

This component is considered GA (generally available). As such, it will not introduce backwards-incompatible changes in any minor or patch releases. We will address issues and requests with the highest priority.

### Next Steps

1.  Understand the [official documentation](https://cloud.google.com/speech/docs/).
2.  Take a look at [in-depth usage samples](https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/speech/).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
