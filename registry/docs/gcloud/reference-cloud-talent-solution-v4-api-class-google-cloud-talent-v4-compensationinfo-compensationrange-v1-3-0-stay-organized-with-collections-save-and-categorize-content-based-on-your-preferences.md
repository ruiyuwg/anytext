-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Talent Solution V4 API - Class Google::Cloud::Talent::V4::CompensationInfo::CompensationRange (v1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.6.1 (latest)](/ruby/docs/reference/google-cloud-talent-v4/latest/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [1.6.0](/ruby/docs/reference/google-cloud-talent-v4/1.6.0/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [1.5.0](/ruby/docs/reference/google-cloud-talent-v4/1.5.0/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [1.4.0](/ruby/docs/reference/google-cloud-talent-v4/1.4.0/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [1.3.1](/ruby/docs/reference/google-cloud-talent-v4/1.3.1/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [1.2.0](/ruby/docs/reference/google-cloud-talent-v4/1.2.0/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [1.1.0](/ruby/docs/reference/google-cloud-talent-v4/1.1.0/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [1.0.1](/ruby/docs/reference/google-cloud-talent-v4/1.0.1/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [0.13.0](/ruby/docs/reference/google-cloud-talent-v4/0.13.0/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [0.12.2](/ruby/docs/reference/google-cloud-talent-v4/0.12.2/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [0.11.0](/ruby/docs/reference/google-cloud-talent-v4/0.11.0/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [0.10.1](/ruby/docs/reference/google-cloud-talent-v4/0.10.1/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [0.9.1](/ruby/docs/reference/google-cloud-talent-v4/0.9.1/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [0.8.1](/ruby/docs/reference/google-cloud-talent-v4/0.8.1/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [0.7.0](/ruby/docs/reference/google-cloud-talent-v4/0.7.0/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)
-   [0.6.4](/ruby/docs/reference/google-cloud-talent-v4/0.6.4/Google-Cloud-Talent-V4-CompensationInfo-CompensationRange)

Reference documentation and code samples for the Cloud Talent Solution V4 API class Google::Cloud::Talent::V4::CompensationInfo::CompensationRange.

Compensation range.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #max\_compensation

```
def max_compensation() -> ::Google::Type::Money
```

**Returns**

-   ([::Google::Type::Money](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money)) — The maximum amount of compensation. If left empty, the value is set to a maximal compensation value and the currency code is set to match the [currency code](/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money#Google__Type__Money_currency_code_instance_ "Google::Type::Money#currency_code (method)") of min\_compensation.

### #max\_compensation=

```
def max_compensation=(value) -> ::Google::Type::Money
```

**Parameter**

-   **value** ([::Google::Type::Money](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money)) — The maximum amount of compensation. If left empty, the value is set to a maximal compensation value and the currency code is set to match the [currency code](/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money#Google__Type__Money_currency_code_instance_ "Google::Type::Money#currency_code (method)") of min\_compensation.

**Returns**

-   ([::Google::Type::Money](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money)) — The maximum amount of compensation. If left empty, the value is set to a maximal compensation value and the currency code is set to match the [currency code](/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money#Google__Type__Money_currency_code_instance_ "Google::Type::Money#currency_code (method)") of min\_compensation.

### #min\_compensation

```
def min_compensation() -> ::Google::Type::Money
```

**Returns**

-   ([::Google::Type::Money](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money)) — The minimum amount of compensation. If left empty, the value is set to zero and the currency code is set to match the [currency code](/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money#Google__Type__Money_currency_code_instance_ "Google::Type::Money#currency_code (method)") of max\_compensation.

### #min\_compensation=

```
def min_compensation=(value) -> ::Google::Type::Money
```

**Parameter**

-   **value** ([::Google::Type::Money](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money)) — The minimum amount of compensation. If left empty, the value is set to zero and the currency code is set to match the [currency code](/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money#Google__Type__Money_currency_code_instance_ "Google::Type::Money#currency_code (method)") of max\_compensation.

**Returns**

-   ([::Google::Type::Money](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money)) — The minimum amount of compensation. If left empty, the value is set to zero and the currency code is set to match the [currency code](/ruby/docs/reference/google-cloud-talent-v4/1.3.0/Google-Type-Money#Google__Type__Money_currency_code_instance_ "Google::Type::Money#currency_code (method)") of max\_compensation.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
