-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.0.2 (latest)](/ruby/docs/reference/google-cloud-datastream/latest/AUTHENTICATION)
-   [2.0.1](/ruby/docs/reference/google-cloud-datastream/2.0.1/AUTHENTICATION)
-   [1.5.0](/ruby/docs/reference/google-cloud-datastream/1.5.0/AUTHENTICATION)
-   [1.4.1](/ruby/docs/reference/google-cloud-datastream/1.4.1/AUTHENTICATION)
-   [1.3.0](/ruby/docs/reference/google-cloud-datastream/1.3.0/AUTHENTICATION)
-   [1.2.0](/ruby/docs/reference/google-cloud-datastream/1.2.0/AUTHENTICATION)
-   [1.1.0](/ruby/docs/reference/google-cloud-datastream/1.1.0/AUTHENTICATION)
-   [1.0.0](/ruby/docs/reference/google-cloud-datastream/1.0.0/AUTHENTICATION)
-   [0.1.1](/ruby/docs/reference/google-cloud-datastream/0.1.1/AUTHENTICATION)

# Authentication

The recommended way to authenticate to the google-cloud-datastream library is to use [Application Default Credentials (ADC)](https://cloud.google.com/docs/authentication/application-default-credentials). To review all of your authentication options, see [Credentials lookup](#credential-lookup).

## Quickstart

The following example shows how to set up authentication for a local development environment with your user credentials.

**NOTE:** This method is _not_ recommended for running in production. User credentials should be used only during development.

1.  [Download and install the Google Cloud CLI](https://cloud.google.com/sdk).
2.  Set up a local ADC file with your user credentials:

```
gcloud auth application-default login
```

1.  Write code as if already authenticated.

For more information about setting up authentication for a local development environment, see [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc#local-dev).

## Credential Lookup

The google-cloud-datastream library provides several mechanisms to configure your system. Generally, using Application Default Credentials to facilitate automatic credentials discovery is the easist method. But if you need to explicitly specify credentials, there are several methods available to you.

Credentials are accepted in the following ways, in the following order or precedence:

1.  Credentials specified in method arguments
2.  Credentials specified in configuration
3.  Credentials pointed to or included in environment variables
4.  Credentials found in local ADC file
5.  Credentials returned by the metadata server for the attached service account (GCP)

### Configuration

You can configure a path to a JSON credentials file, either for an individual client object or globally, for all client objects. The JSON file can contain credentials created for [workload identity federation](https://cloud.google.com/iam/docs/workload-identity-federation), [workforce identity federation](https://cloud.google.com/iam/docs/workforce-identity-federation), or a [service account key](https://cloud.google.com/docs/authentication/provide-credentials-adc#local-key).

Note: Service account keys are a security risk if not managed correctly. You should [choose a more secure alternative to service account keys](https://cloud.google.com/docs/authentication#auth-decision-tree) whenever possible.

To configure a credentials file for an individual client initialization:

require "google/cloud/datastream"

client \= Google::Cloud::Datastream.datastream do |config|
  config.credentials \= "path/to/credentialfile.json"
end

To configure a credentials file globally for all clients:

require "google/cloud/datastream"

Google::Cloud::Datastream.configure do |config|
  config.credentials \= "path/to/credentialfile.json"
end

client \= Google::Cloud::Datastream.datastream

### Environment Variables

You can also use an environment variable to provide a JSON credentials file. The environment variable can contain a path to the credentials file or, for environments such as Docker containers where writing files is not encouraged, you can include the credentials file itself.

The JSON file can contain credentials created for [workload identity federation](https://cloud.google.com/iam/docs/workload-identity-federation), [workforce identity federation](https://cloud.google.com/iam/docs/workforce-identity-federation), or a [service account key](https://cloud.google.com/docs/authentication/provide-credentials-adc#local-key).

Note: Service account keys are a security risk if not managed correctly. You should [choose a more secure alternative to service account keys](https://cloud.google.com/docs/authentication#auth-decision-tree) whenever possible.

The environment variables that google-cloud-datastream checks for credentials are:

-   `GOOGLE_CLOUD_CREDENTIALS` - Path to JSON file, or JSON contents
-   `GOOGLE_APPLICATION_CREDENTIALS` - Path to JSON file

require "google/cloud/datastream"

ENV\["GOOGLE\_APPLICATION\_CREDENTIALS"\] \= "path/to/credentialfile.json"

client \= Google::Cloud::Datastream.datastream

### Local ADC file

You can set up a local ADC file with your user credentials for authentication during development. If credentials are not provided in code or in environment variables, then the local ADC credentials are discovered.

Follow the steps in [Quickstart](#quickstart) to set up a local ADC file.

### Google Cloud Platform environments

When running on Google Cloud Platform (GCP), including Google Compute Engine (GCE), Google Kubernetes Engine (GKE), Google App Engine (GAE), Google Cloud Functions (GCF) and Cloud Run, credentials are retrieved from the attached service account automatically. Code should be written as if already authenticated.

For more information, see [Set up ADC for Google Cloud services](https://cloud.google.com/docs/authentication/provide-credentials-adc#attached-sa).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
