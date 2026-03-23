-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Recaptcha Enterprise V1 Client - Class WafFeature (1.15.0) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.3 2.0.1 1.17.2 1.16.1 1.15.0 1.14.0 1.13.0 1.12.2 1.8.0 1.7.0 1.6.0 1.5.2 1.4.2 1.3.2 1.2.6

Reference documentation and code samples for the Google Cloud Recaptcha Enterprise V1 Client class WafFeature.

Supported WAF features. For more information, see [https://cloud.google.com/recaptcha/docs/usecase#comparison\_of\_features](https://cloud.google.com/recaptcha/docs/usecase#comparison_of_features).

Protobuf type `google.cloud.recaptchaenterprise.v1.WafSettings.WafFeature`

## Namespace

Google \\ Cloud \\ RecaptchaEnterprise \\ V1 \\ WafSettings

## Methods

### static::name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### static::value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### WAF\_FEATURE\_UNSPECIFIED

```
Value: 0
```

Undefined feature.

Generated from protobuf enum `WAF_FEATURE_UNSPECIFIED = 0;`

### CHALLENGE\_PAGE

```
Value: 1
```

Redirects suspicious traffic to reCAPTCHA.

Generated from protobuf enum `CHALLENGE_PAGE = 1;`

### SESSION\_TOKEN

```
Value: 2
```

Use reCAPTCHA session-tokens to protect the whole user session on the site's domain.

Generated from protobuf enum `SESSION_TOKEN = 2;`

### ACTION\_TOKEN

```
Value: 3
```

Use reCAPTCHA action-tokens to protect user actions.

Generated from protobuf enum `ACTION_TOKEN = 3;`

### EXPRESS

```
Value: 5
```

Use reCAPTCHA WAF express protection to protect any content other than web pages, like APIs and IoT devices.

Generated from protobuf enum `EXPRESS = 5;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
