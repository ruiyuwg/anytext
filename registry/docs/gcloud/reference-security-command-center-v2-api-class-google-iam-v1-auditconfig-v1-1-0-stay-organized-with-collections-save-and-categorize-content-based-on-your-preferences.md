-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Security Command Center V2 API - Class Google::Iam::V1::AuditConfig (v1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.5.1 (latest)](/ruby/docs/reference/google-cloud-security_center-v2/latest/Google-Iam-V1-AuditConfig)
-   [1.5.0](/ruby/docs/reference/google-cloud-security_center-v2/1.5.0/Google-Iam-V1-AuditConfig)
-   [1.4.0](/ruby/docs/reference/google-cloud-security_center-v2/1.4.0/Google-Iam-V1-AuditConfig)
-   [1.3.0](/ruby/docs/reference/google-cloud-security_center-v2/1.3.0/Google-Iam-V1-AuditConfig)
-   [1.2.0](/ruby/docs/reference/google-cloud-security_center-v2/1.2.0/Google-Iam-V1-AuditConfig)
-   [1.1.1](/ruby/docs/reference/google-cloud-security_center-v2/1.1.1/Google-Iam-V1-AuditConfig)
-   [1.0.0](/ruby/docs/reference/google-cloud-security_center-v2/1.0.0/Google-Iam-V1-AuditConfig)
-   [0.6.0](/ruby/docs/reference/google-cloud-security_center-v2/0.6.0/Google-Iam-V1-AuditConfig)
-   [0.5.0](/ruby/docs/reference/google-cloud-security_center-v2/0.5.0/Google-Iam-V1-AuditConfig)
-   [0.4.1](/ruby/docs/reference/google-cloud-security_center-v2/0.4.1/Google-Iam-V1-AuditConfig)
-   [0.3.0](/ruby/docs/reference/google-cloud-security_center-v2/0.3.0/Google-Iam-V1-AuditConfig)
-   [0.2.0](/ruby/docs/reference/google-cloud-security_center-v2/0.2.0/Google-Iam-V1-AuditConfig)
-   [0.1.0](/ruby/docs/reference/google-cloud-security_center-v2/0.1.0/Google-Iam-V1-AuditConfig)

Reference documentation and code samples for the Security Command Center V2 API class Google::Iam::V1::AuditConfig.

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.

If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log\_types specified in each AuditConfig are enabled, and the exempted\_members in each AuditLogConfig are exempted.

Example Policy with multiple AuditConfigs:

```
{
  "audit_configs": [
    {
      "service": "allServices",
      "audit_log_configs": [
        {
          "log_type": "DATA_READ",
          "exempted_members": [
            "user:jose@example.com"
          ]
        },
        {
          "log_type": "DATA_WRITE"
        },
        {
          "log_type": "ADMIN_READ"
        }
      ]
    },
    {
      "service": "sampleservice.googleapis.com",
      "audit_log_configs": [
        {
          "log_type": "DATA_READ"
        },
        {
          "log_type": "DATA_WRITE",
          "exempted_members": [
            "user:aliya@example.com"
          ]
        }
      ]
    }
  ]
}
```

For sampleservice, this policy enables DATA\_READ, DATA\_WRITE and ADMIN\_READ logging. It also exempts `jose@example.com` from DATA\_READ logging, and `aliya@example.com` from DATA\_WRITE logging.

## Inherits

-   [Object](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-security_center-v2/1.1.0/Google-Cloud-SecurityCenter-V2-Kubernetes-Object)

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #audit\_log\_configs

```
def audit_log_configs() -> ::Array<::Google::Iam::V1::AuditLogConfig>
```

**Returns**

-   (::Array<[::Google::Iam::V1::AuditLogConfig](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-security_center-v2/1.1.0/Google-Iam-V1-AuditLogConfig)\>) — The configuration for logging of each type of permission.

### #audit\_log\_configs=

```
def audit_log_configs=(value) -> ::Array<::Google::Iam::V1::AuditLogConfig>
```

**Parameter**

-   **value** (::Array<[::Google::Iam::V1::AuditLogConfig](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-security_center-v2/1.1.0/Google-Iam-V1-AuditLogConfig)\>) — The configuration for logging of each type of permission.

**Returns**

-   (::Array<[::Google::Iam::V1::AuditLogConfig](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-security_center-v2/1.1.0/Google-Iam-V1-AuditLogConfig)\>) — The configuration for logging of each type of permission.

### #service

```
def service() -> ::String
```

**Returns**

-   (::String) — Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

### #service=

```
def service=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

**Returns**

-   (::String) — Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
