-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Speech-to-Text V1p1beta1 API - Class Google::Cloud::Speech::V1p1beta1::PhraseSet::Phrase (v0.24.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.24.0keyboard\_arrow\_down

-   [0.27.1 (latest)](/ruby/docs/reference/google-cloud-speech-v1p1beta1/latest/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.27.0](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.27.0/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.26.0](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.26.0/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.25.0](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.25.0/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.24.1](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.24.1/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.23.0](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.23.0/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.22.0](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.22.0/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.21.1](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.21.1/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.20.2](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.20.2/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.19.0](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.19.0/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.18.1](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.18.1/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.17.1](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.17.1/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.16.0](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.16.0/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.15.3](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.15.3/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.14.0](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.14.0/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.13.0](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.13.0/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)
-   [0.12.4](/ruby/docs/reference/google-cloud-speech-v1p1beta1/0.12.4/Google-Cloud-Speech-V1p1beta1-PhraseSet-Phrase)

Reference documentation and code samples for the Cloud Speech-to-Text V1p1beta1 API class Google::Cloud::Speech::V1p1beta1::PhraseSet::Phrase.

A phrases containing words and phrase "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech-to-text/quotas#content).

List items can also include pre-built or custom classes containing groups of words that represent common concepts that occur in natural language. For example, rather than providing a phrase hint for every month of the year (e.g. "i was born in january", "i was born in febuary", ...), use the pre-built `$MONTH` class improves the likelihood of correctly transcribing audio that includes months (e.g. "i was born in $month"). To refer to pre-built classes, use the class' symbol prepended with `$` e.g. `$MONTH`. To refer to custom classes that were defined inline in the request, set the class's `custom_class_id` to a string unique to all class resources and inline classes. Then use the class' id wrapped in $`{...}` e.g. "${my-months}". To refer to custom classes resources, use the class' id wrapped in `${}` (e.g. `${my-months}`).

Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #boost

```
def boost() -> ::Float
```

**Returns**

-   (::Float) — Hint Boost. Overrides the boost set at the phrase set level. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests.

### #boost=

```
def boost=(value) -> ::Float
```

**Parameter**

-   **value** (::Float) — Hint Boost. Overrides the boost set at the phrase set level. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests.

**Returns**

-   (::Float) — Hint Boost. Overrides the boost set at the phrase set level. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests.

### #value

```
def value() -> ::String
```

**Returns**

-   (::String) — The phrase itself.

### #value=

```
def value=(value) -> ::String
```

**Parameter**

-   **value** (::String) — The phrase itself.

**Returns**

-   (::String) — The phrase itself.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
