-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Connectors V1 API - Class Google::Api::GoSettings (v1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.3.1 (latest)](/ruby/docs/reference/google-cloud-connectors-v1/latest/Google-Api-GoSettings)
-   [1.3.0](/ruby/docs/reference/google-cloud-connectors-v1/1.3.0/Google-Api-GoSettings)
-   [1.2.0](/ruby/docs/reference/google-cloud-connectors-v1/1.2.0/Google-Api-GoSettings)
-   [1.1.0](/ruby/docs/reference/google-cloud-connectors-v1/1.1.0/Google-Api-GoSettings)
-   [1.0.1](/ruby/docs/reference/google-cloud-connectors-v1/1.0.1/Google-Api-GoSettings)
-   [0.3.0](/ruby/docs/reference/google-cloud-connectors-v1/0.3.0/Google-Api-GoSettings)
-   [0.2.0](/ruby/docs/reference/google-cloud-connectors-v1/0.2.0/Google-Api-GoSettings)
-   [0.1.1](/ruby/docs/reference/google-cloud-connectors-v1/0.1.1/Google-Api-GoSettings)

Reference documentation and code samples for the Connectors V1 API class Google::Api::GoSettings.

Settings for Go client libraries.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #common

```
def common() -> ::Google::Api::CommonLanguageSettings
```

**Returns**

-   ([::Google::Api::CommonLanguageSettings](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-connectors-v1/1.0.0/Google-Api-CommonLanguageSettings)) — Some settings.

### #common=

```
def common=(value) -> ::Google::Api::CommonLanguageSettings
```

**Parameter**

-   **value** ([::Google::Api::CommonLanguageSettings](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-connectors-v1/1.0.0/Google-Api-CommonLanguageSettings)) — Some settings.

**Returns**

-   ([::Google::Api::CommonLanguageSettings](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-connectors-v1/1.0.0/Google-Api-CommonLanguageSettings)) — Some settings.

### #renamed\_services

```
def renamed_services() -> ::Google::Protobuf::Map{::String => ::String}
```

**Returns**

-   (::Google::Protobuf::Map{::String => ::String}) — Map of service names to renamed services. Keys are the package relative service names and values are the name to be used for the service client and call options.
    
    publishing: go\_settings: renamed\_services: Publisher: TopicAdmin
    

### #renamed\_services=

```
def renamed_services=(value) -> ::Google::Protobuf::Map{::String => ::String}
```

**Parameter**

-   **value** (::Google::Protobuf::Map{::String => ::String}) — Map of service names to renamed services. Keys are the package relative service names and values are the name to be used for the service client and call options.
    
    publishing: go\_settings: renamed\_services: Publisher: TopicAdmin
    

**Returns**

-   (::Google::Protobuf::Map{::String => ::String}) — Map of service names to renamed services. Keys are the package relative service names and values are the name to be used for the service client and call options.
    
    publishing: go\_settings: renamed\_services: Publisher: TopicAdmin
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
