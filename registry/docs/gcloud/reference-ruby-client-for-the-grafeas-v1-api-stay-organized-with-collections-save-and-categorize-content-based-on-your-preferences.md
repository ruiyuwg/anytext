-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Ruby Client for the Grafeas V1 API Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.7.0 (latest)](/ruby/docs/reference/grafeas-v1/latest)
-   [1.6.0](/ruby/docs/reference/grafeas-v1/1.6.0)
-   [1.5.1](/ruby/docs/reference/grafeas-v1/1.5.1)
-   [1.4.0](/ruby/docs/reference/grafeas-v1/1.4.0)
-   [1.3.1](/ruby/docs/reference/grafeas-v1/1.3.1)
-   [1.2.0](/ruby/docs/reference/grafeas-v1/1.2.0)
-   [1.1.1](/ruby/docs/reference/grafeas-v1/1.1.1)
-   [1.0.0](/ruby/docs/reference/grafeas-v1/1.0.0)
-   [0.16.1](/ruby/docs/reference/grafeas-v1/0.16.1)
-   [0.15.0](/ruby/docs/reference/grafeas-v1/0.15.0)
-   [0.14.2](/ruby/docs/reference/grafeas-v1/0.14.2)
-   [0.13.0](/ruby/docs/reference/grafeas-v1/0.13.0)
-   [0.12.1](/ruby/docs/reference/grafeas-v1/0.12.1)
-   [0.11.0](/ruby/docs/reference/grafeas-v1/0.11.0)
-   [0.10.0](/ruby/docs/reference/grafeas-v1/0.10.0)
-   [0.9.0](/ruby/docs/reference/grafeas-v1/0.9.0)
-   [0.8.0](/ruby/docs/reference/grafeas-v1/0.8.0)
-   [0.7.0](/ruby/docs/reference/grafeas-v1/0.7.0)
-   [0.6.1](/ruby/docs/reference/grafeas-v1/0.6.1)
-   [0.5.0](/ruby/docs/reference/grafeas-v1/0.5.0)
-   [0.4.0](/ruby/docs/reference/grafeas-v1/0.4.0)
-   [0.3.1](/ruby/docs/reference/grafeas-v1/0.3.1)

An implementation of the Grafeas API, which stores, and enables querying and retrieval of critical metadata about all of your software artifacts.

The Grafeas API stores, and enables querying and retrieval of, critical metadata about all of your software artifacts.

[https://github.com/googleapis/google-cloud-ruby](https://github.com/googleapis/google-cloud-ruby)

This gem is a _versioned_ client. It provides basic client classes for a specific version of the Grafeas V1 API. Most users should consider using the main client gem, [grafeas](https://rubygems.org/gems/grafeas). See the section below titled _Which client should I use?_ for more information.

## Installation

```
$ gem install grafeas-v1
```

## Quick Start

require "grafeas/v1"

client \= ::Grafeas::V1::Grafeas::Client.new
request \= ::Grafeas::V1::GetOccurrenceRequest.new \# (request fields as keyword arguments...)
response \= client.get\_occurrence request

View the [Client Library Documentation](https://cloud.google.com/ruby/docs/reference/grafeas-v1/latest) for class and method documentation.

## Debug Logging

This library comes with opt-in Debug Logging that can help you troubleshoot your application's integration with the API. When logging is activated, key events such as requests and responses, along with data payloads and metadata such as headers and client configuration, are logged to the standard error stream.

**WARNING:** Client Library Debug Logging includes your data payloads in plaintext, which could include sensitive data such as PII for yourself or your customers, private keys, or other security data that could be compromising if leaked. Always practice good data hygiene with your application logs, and follow the principle of least access. Google also recommends that Client Library Debug Logging be enabled only temporarily during active debugging, and not used permanently in production.

To enable logging, set the environment variable `GOOGLE_SDK_RUBY_LOGGING_GEMS` to the value `all`. Alternatively, you can set the value to a comma-delimited list of client library gem names. This will select the default logging behavior, which writes logs to the standard error stream. On a local workstation, this may result in logs appearing on the console. When running on a Google Cloud hosting service such as [Google Cloud Run](https://cloud.google.com/run), this generally results in logs appearing alongside your application logs in the [Google Cloud Logging](https://cloud.google.com/logging/) service.

You can customize logging by modifying the `logger` configuration when constructing a client object. For example:

require "grafeas/v1"
require "logger"

client \= ::Grafeas::V1::Grafeas::Client.new do |config|
  config.logger \= Logger.new "my-app.log"
end

## Google Cloud Samples

To browse ready to use code samples check [Google Cloud Samples](https://cloud.google.com/docs/samples).

## Supported Ruby Versions

This library is supported on Ruby 3.0+.

Google provides official support for Ruby versions that are actively supported by Ruby Core—that is, Ruby versions that are either in normal maintenance or in security maintenance, and not end of life. Older versions of Ruby _may_ still work, but are unsupported and not recommended. See [https://www.ruby-lang.org/en/downloads/branches/](https://www.ruby-lang.org/en/downloads/branches/) for details about the Ruby support schedule.

## Which client should I use?

Most modern Ruby client libraries for Google APIs come in two flavors: the main client library with a name such as `grafeas`, and lower-level _versioned_ client libraries with names such as `grafeas-v1`. _In most cases, you should install the main client._

### What's the difference between the main client and a versioned client?

A _versioned client_ provides a basic set of data types and client classes for a _single version_ of a specific service. (That is, for a service with multiple versions, there might be a separate versioned client for each service version.) Most versioned clients are written and maintained by a code generator.

The _main client_ is designed to provide you with the _recommended_ client interfaces for the service. There will be only one main client for any given service, even a service with multiple versions. The main client includes factory methods for constructing the client objects we recommend for most users. In some cases, those will be classes provided by an underlying versioned client; in other cases, they will be handwritten higher-level client objects with additional capabilities, convenience methods, or best practices built in. Generally, the main client will default to a recommended service version, although in some cases you can override this if you need to talk to a specific service version.

### Why would I want to use the main client?

We recommend that most users install the main client gem for a service. You can identify this gem as the one _without_ a version in its name, e.g. `grafeas`. The main client is recommended because it will embody the best practices for accessing the service, and may also provide more convenient interfaces or tighter integration into frameworks and third-party libraries. In addition, the documentation and samples published by Google will generally demonstrate use of the main client.

### Why would I want to use a versioned client?

You can use a versioned client if you are content with a possibly lower-level class interface, you explicitly want to avoid features provided by the main client, or you want to access a specific service version not be covered by the main client. You can identify versioned client gems because the service version is part of the name, e.g. `grafeas-v1`.

### What about the google-apis-

Client library gems with names that begin with `google-apis-` are based on an older code generation technology. They talk to a REST/JSON backend (whereas most modern clients talk to a [gRPC](https://grpc.io/) backend) and they may not offer the same performance, features, and ease of use provided by more modern clients.

The `google-apis-` clients have wide coverage across Google services, so you might need to use one if there is no modern client available for the service. However, if a modern client is available, we generally recommend it over the older `google-apis-` clients.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
