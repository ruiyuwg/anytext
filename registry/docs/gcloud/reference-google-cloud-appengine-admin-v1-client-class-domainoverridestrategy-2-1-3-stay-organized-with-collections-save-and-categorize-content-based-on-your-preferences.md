-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Appengine Admin V1 Client - Class DomainOverrideStrategy (2.1.3) Stay organized with collections Save and categorize content based on your preferences.

2.1.3 (latest) 2.1.2 2.0.4 1.3.5 1.2.2 1.1.1 1.0.6

Reference documentation and code samples for the Google Cloud Appengine Admin V1 Client class DomainOverrideStrategy.

Override strategy for mutating an existing mapping.

Protobuf type `google.appengine.v1.DomainOverrideStrategy`

## Namespace

Google \\ Cloud \\ AppEngine \\ V1

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

### UNSPECIFIED\_DOMAIN\_OVERRIDE\_STRATEGY

```
Value: 0
```

Strategy unspecified. Defaults to `STRICT`.

Generated from protobuf enum `UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY = 0;`

### STRICT

```
Value: 1
```

Overrides not allowed. If a mapping already exists for the specified domain, the request will return an ALREADY\_EXISTS (409).

Generated from protobuf enum `STRICT = 1;`

### OVERRIDE

```
Value: 2
```

Overrides allowed. If a mapping already exists for the specified domain, the request will overwrite it. Note that this might stop another Google product from serving. For example, if the domain is mapped to another App Engine application, that app will no longer serve from that domain.

Generated from protobuf enum `OVERRIDE = 2;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
