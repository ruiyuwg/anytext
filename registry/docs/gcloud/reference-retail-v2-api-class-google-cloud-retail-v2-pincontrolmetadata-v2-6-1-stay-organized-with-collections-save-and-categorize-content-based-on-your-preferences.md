-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Retail V2 API - Class Google::Cloud::Retail::V2::PinControlMetadata (v2.6.1) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.6.1 (latest)](/ruby/docs/reference/google-cloud-retail-v2/latest/Google-Cloud-Retail-V2-PinControlMetadata)
-   [2.6.0](/ruby/docs/reference/google-cloud-retail-v2/2.6.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [2.5.0](/ruby/docs/reference/google-cloud-retail-v2/2.5.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [2.4.0](/ruby/docs/reference/google-cloud-retail-v2/2.4.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [2.3.0](/ruby/docs/reference/google-cloud-retail-v2/2.3.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [2.2.0](/ruby/docs/reference/google-cloud-retail-v2/2.2.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [2.1.0](/ruby/docs/reference/google-cloud-retail-v2/2.1.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [2.0.0](/ruby/docs/reference/google-cloud-retail-v2/2.0.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [1.3.0](/ruby/docs/reference/google-cloud-retail-v2/1.3.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [1.2.0](/ruby/docs/reference/google-cloud-retail-v2/1.2.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [1.1.0](/ruby/docs/reference/google-cloud-retail-v2/1.1.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [1.0.1](/ruby/docs/reference/google-cloud-retail-v2/1.0.1/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.21.0](/ruby/docs/reference/google-cloud-retail-v2/0.21.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.20.0](/ruby/docs/reference/google-cloud-retail-v2/0.20.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.19.0](/ruby/docs/reference/google-cloud-retail-v2/0.19.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.18.2](/ruby/docs/reference/google-cloud-retail-v2/0.18.2/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.17.0](/ruby/docs/reference/google-cloud-retail-v2/0.17.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.16.1](/ruby/docs/reference/google-cloud-retail-v2/0.16.1/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.15.0](/ruby/docs/reference/google-cloud-retail-v2/0.15.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.14.0](/ruby/docs/reference/google-cloud-retail-v2/0.14.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.13.0](/ruby/docs/reference/google-cloud-retail-v2/0.13.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.12.0](/ruby/docs/reference/google-cloud-retail-v2/0.12.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.11.0](/ruby/docs/reference/google-cloud-retail-v2/0.11.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.10.0](/ruby/docs/reference/google-cloud-retail-v2/0.10.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.9.0](/ruby/docs/reference/google-cloud-retail-v2/0.9.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.8.0](/ruby/docs/reference/google-cloud-retail-v2/0.8.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.7.0](/ruby/docs/reference/google-cloud-retail-v2/0.7.0/Google-Cloud-Retail-V2-PinControlMetadata)
-   [0.6.4](/ruby/docs/reference/google-cloud-retail-v2/0.6.4/Google-Cloud-Retail-V2-PinControlMetadata)

Reference documentation and code samples for the Retail V2 API class Google::Cloud::Retail::V2::PinControlMetadata.

Metadata for pinning to be returned in the response. This is used for distinguishing between applied vs dropped pins.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #all\_matched\_pins

```
def all_matched_pins() -> ::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}
```

**Returns**

-   (::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}) — Map of all matched pins, keyed by pin position.

### #all\_matched\_pins=

```
def all_matched_pins=(value) -> ::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}
```

**Parameter**

-   **value** (::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}) — Map of all matched pins, keyed by pin position.

**Returns**

-   (::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}) — Map of all matched pins, keyed by pin position.

### #dropped\_pins

```
def dropped_pins() -> ::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}
```

**Returns**

-   (::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}) — Map of pins that were dropped due to overlap with other matching pins, keyed by pin position.

### #dropped\_pins=

```
def dropped_pins=(value) -> ::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}
```

**Parameter**

-   **value** (::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}) — Map of pins that were dropped due to overlap with other matching pins, keyed by pin position.

**Returns**

-   (::Google::Protobuf::Map{::Integer => ::Google::Cloud::Retail::V2::PinControlMetadata::ProductPins}) — Map of pins that were dropped due to overlap with other matching pins, keyed by pin position.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
