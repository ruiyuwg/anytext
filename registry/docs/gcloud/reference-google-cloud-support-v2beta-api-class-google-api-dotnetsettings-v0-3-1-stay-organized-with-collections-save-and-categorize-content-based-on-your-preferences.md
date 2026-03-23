-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Google Cloud Support V2BETA API - Class Google::Api::DotnetSettings (v0.3.1) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.3.1 (latest)](/ruby/docs/reference/google-cloud-support-v2beta/latest/Google-Api-DotnetSettings)
-   [0.3.0](/ruby/docs/reference/google-cloud-support-v2beta/0.3.0/Google-Api-DotnetSettings)
-   [0.2.0](/ruby/docs/reference/google-cloud-support-v2beta/0.2.0/Google-Api-DotnetSettings)
-   [0.1.1](/ruby/docs/reference/google-cloud-support-v2beta/0.1.1/Google-Api-DotnetSettings)

Reference documentation and code samples for the Google Cloud Support V2BETA API class Google::Api::DotnetSettings.

Settings for Dotnet client libraries.

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

-   ([::Google::Api::CommonLanguageSettings](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-support-v2beta/latest/Google-Api-CommonLanguageSettings)) — Some settings.

### #common=

```
def common=(value) -> ::Google::Api::CommonLanguageSettings
```

**Parameter**

-   **value** ([::Google::Api::CommonLanguageSettings](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-support-v2beta/latest/Google-Api-CommonLanguageSettings)) — Some settings.

**Returns**

-   ([::Google::Api::CommonLanguageSettings](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-support-v2beta/latest/Google-Api-CommonLanguageSettings)) — Some settings.

### #forced\_namespace\_aliases

```
def forced_namespace_aliases() -> ::Array<::String>
```

**Returns**

-   (::Array<::String>) — Namespaces which must be aliased in snippets due to a known (but non-generator-predictable) naming collision

### #forced\_namespace\_aliases=

```
def forced_namespace_aliases=(value) -> ::Array<::String>
```

**Parameter**

-   **value** (::Array<::String>) — Namespaces which must be aliased in snippets due to a known (but non-generator-predictable) naming collision

**Returns**

-   (::Array<::String>) — Namespaces which must be aliased in snippets due to a known (but non-generator-predictable) naming collision

### #handwritten\_signatures

```
def handwritten_signatures() -> ::Array<::String>
```

**Returns**

-   (::Array<::String>) — Method signatures (in the form "service.method(signature)") which are provided separately, so shouldn't be generated. Snippets _calling_ these methods are still generated, however.

### #handwritten\_signatures=

```
def handwritten_signatures=(value) -> ::Array<::String>
```

**Parameter**

-   **value** (::Array<::String>) — Method signatures (in the form "service.method(signature)") which are provided separately, so shouldn't be generated. Snippets _calling_ these methods are still generated, however.

**Returns**

-   (::Array<::String>) — Method signatures (in the form "service.method(signature)") which are provided separately, so shouldn't be generated. Snippets _calling_ these methods are still generated, however.

### #ignored\_resources

```
def ignored_resources() -> ::Array<::String>
```

**Returns**

-   (::Array<::String>) — List of full resource types to ignore during generation. This is typically used for API-specific Location resources, which should be handled by the generator as if they were actually the common Location resources. Example entry: "documentai.googleapis.com/Location"

### #ignored\_resources=

```
def ignored_resources=(value) -> ::Array<::String>
```

**Parameter**

-   **value** (::Array<::String>) — List of full resource types to ignore during generation. This is typically used for API-specific Location resources, which should be handled by the generator as if they were actually the common Location resources. Example entry: "documentai.googleapis.com/Location"

**Returns**

-   (::Array<::String>) — List of full resource types to ignore during generation. This is typically used for API-specific Location resources, which should be handled by the generator as if they were actually the common Location resources. Example entry: "documentai.googleapis.com/Location"

### #renamed\_resources

```
def renamed_resources() -> ::Google::Protobuf::Map{::String => ::String}
```

**Returns**

-   (::Google::Protobuf::Map{::String => ::String}) — Map from full resource types to the effective short name for the resource. This is used when otherwise resource named from different services would cause naming collisions. Example entry: "datalabeling.googleapis.com/Dataset": "DataLabelingDataset"

### #renamed\_resources=

```
def renamed_resources=(value) -> ::Google::Protobuf::Map{::String => ::String}
```

**Parameter**

-   **value** (::Google::Protobuf::Map{::String => ::String}) — Map from full resource types to the effective short name for the resource. This is used when otherwise resource named from different services would cause naming collisions. Example entry: "datalabeling.googleapis.com/Dataset": "DataLabelingDataset"

**Returns**

-   (::Google::Protobuf::Map{::String => ::String}) — Map from full resource types to the effective short name for the resource. This is used when otherwise resource named from different services would cause naming collisions. Example entry: "datalabeling.googleapis.com/Dataset": "DataLabelingDataset"

### #renamed\_services

```
def renamed_services() -> ::Google::Protobuf::Map{::String => ::String}
```

**Returns**

-   (::Google::Protobuf::Map{::String => ::String}) — Map from original service names to renamed versions. This is used when the default generated types would cause a naming conflict. (Neither name is fully-qualified.) Example: Subscriber to SubscriberServiceApi.

### #renamed\_services=

```
def renamed_services=(value) -> ::Google::Protobuf::Map{::String => ::String}
```

**Parameter**

-   **value** (::Google::Protobuf::Map{::String => ::String}) — Map from original service names to renamed versions. This is used when the default generated types would cause a naming conflict. (Neither name is fully-qualified.) Example: Subscriber to SubscriberServiceApi.

**Returns**

-   (::Google::Protobuf::Map{::String => ::String}) — Map from original service names to renamed versions. This is used when the default generated types would cause a naming conflict. (Neither name is fully-qualified.) Example: Subscriber to SubscriberServiceApi.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
