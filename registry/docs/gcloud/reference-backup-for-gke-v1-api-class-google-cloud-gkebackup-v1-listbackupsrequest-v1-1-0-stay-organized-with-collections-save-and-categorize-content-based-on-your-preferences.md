-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Backup for GKE V1 API - Class Google::Cloud::GkeBackup::V1::ListBackupsRequest (v1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.5.1 (latest)](/ruby/docs/reference/google-cloud-gke_backup-v1/latest/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [1.5.0](/ruby/docs/reference/google-cloud-gke_backup-v1/1.5.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [1.4.0](/ruby/docs/reference/google-cloud-gke_backup-v1/1.4.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [1.3.0](/ruby/docs/reference/google-cloud-gke_backup-v1/1.3.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [1.2.0](/ruby/docs/reference/google-cloud-gke_backup-v1/1.2.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [1.1.1](/ruby/docs/reference/google-cloud-gke_backup-v1/1.1.1/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [1.0.0](/ruby/docs/reference/google-cloud-gke_backup-v1/1.0.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.12.0](/ruby/docs/reference/google-cloud-gke_backup-v1/0.12.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.11.0](/ruby/docs/reference/google-cloud-gke_backup-v1/0.11.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.10.1](/ruby/docs/reference/google-cloud-gke_backup-v1/0.10.1/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.9.0](/ruby/docs/reference/google-cloud-gke_backup-v1/0.9.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.8.0](/ruby/docs/reference/google-cloud-gke_backup-v1/0.8.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.7.2](/ruby/docs/reference/google-cloud-gke_backup-v1/0.7.2/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.6.0](/ruby/docs/reference/google-cloud-gke_backup-v1/0.6.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.5.1](/ruby/docs/reference/google-cloud-gke_backup-v1/0.5.1/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.4.0](/ruby/docs/reference/google-cloud-gke_backup-v1/0.4.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.3.0](/ruby/docs/reference/google-cloud-gke_backup-v1/0.3.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.2.0](/ruby/docs/reference/google-cloud-gke_backup-v1/0.2.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)
-   [0.1.0](/ruby/docs/reference/google-cloud-gke_backup-v1/0.1.0/Google-Cloud-GkeBackup-V1-ListBackupsRequest)

Reference documentation and code samples for the Backup for GKE V1 API class Google::Cloud::GkeBackup::V1::ListBackupsRequest.

Request message for ListBackups.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #filter

```
def filter() -> ::String
```

**Returns**

-   (::String) — Optional. Field match expression used to filter the results.

### #filter=

```
def filter=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Optional. Field match expression used to filter the results.

**Returns**

-   (::String) — Optional. Field match expression used to filter the results.

### #order\_by

```
def order_by() -> ::String
```

**Returns**

-   (::String) — Optional. Field by which to sort the results.

### #order\_by=

```
def order_by=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Optional. Field by which to sort the results.

**Returns**

-   (::String) — Optional. Field by which to sort the results.

### #page\_size

```
def page_size() -> ::Integer
```

**Returns**

-   (::Integer) — Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's [next\_page\_token](/ruby/docs/reference/google-cloud-gke_backup-v1/1.1.0/Google-Cloud-GkeBackup-V1-ListBackupsResponse#Google__Cloud__GkeBackup__V1__ListBackupsResponse_next_page_token_instance_ "Google::Cloud::GkeBackup::V1::ListBackupsResponse#next_page_token (method)") to determine if there are more instances left to be queried.

### #page\_size=

```
def page_size=(value) -> ::Integer
```

**Parameter**

-   **value** (::Integer) — Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's [next\_page\_token](/ruby/docs/reference/google-cloud-gke_backup-v1/1.1.0/Google-Cloud-GkeBackup-V1-ListBackupsResponse#Google__Cloud__GkeBackup__V1__ListBackupsResponse_next_page_token_instance_ "Google::Cloud::GkeBackup::V1::ListBackupsResponse#next_page_token (method)") to determine if there are more instances left to be queried.

**Returns**

-   (::Integer) — Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's [next\_page\_token](/ruby/docs/reference/google-cloud-gke_backup-v1/1.1.0/Google-Cloud-GkeBackup-V1-ListBackupsResponse#Google__Cloud__GkeBackup__V1__ListBackupsResponse_next_page_token_instance_ "Google::Cloud::GkeBackup::V1::ListBackupsResponse#next_page_token (method)") to determine if there are more instances left to be queried.

### #page\_token

```
def page_token() -> ::String
```

**Returns**

-   (::String) — Optional. The value of [next\_page\_token](/ruby/docs/reference/google-cloud-gke_backup-v1/1.1.0/Google-Cloud-GkeBackup-V1-ListBackupsResponse#Google__Cloud__GkeBackup__V1__ListBackupsResponse_next_page_token_instance_ "Google::Cloud::GkeBackup::V1::ListBackupsResponse#next_page_token (method)") received from a previous `ListBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token.

### #page\_token=

```
def page_token=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Optional. The value of [next\_page\_token](/ruby/docs/reference/google-cloud-gke_backup-v1/1.1.0/Google-Cloud-GkeBackup-V1-ListBackupsResponse#Google__Cloud__GkeBackup__V1__ListBackupsResponse_next_page_token_instance_ "Google::Cloud::GkeBackup::V1::ListBackupsResponse#next_page_token (method)") received from a previous `ListBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token.

**Returns**

-   (::String) — Optional. The value of [next\_page\_token](/ruby/docs/reference/google-cloud-gke_backup-v1/1.1.0/Google-Cloud-GkeBackup-V1-ListBackupsResponse#Google__Cloud__GkeBackup__V1__ListBackupsResponse_next_page_token_instance_ "Google::Cloud::GkeBackup::V1::ListBackupsResponse#next_page_token (method)") received from a previous `ListBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token.

### #parent

```
def parent() -> ::String
```

**Returns**

-   (::String) — Required. The BackupPlan that contains the Backups to list. Format: `projects/*/locations/*/backupPlans/*`

### #parent=

```
def parent=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The BackupPlan that contains the Backups to list. Format: `projects/*/locations/*/backupPlans/*`

**Returns**

-   (::String) — Required. The BackupPlan that contains the Backups to list. Format: `projects/*/locations/*/backupPlans/*`

### #return\_partial\_success

```
def return_partial_success() -> ::Boolean
```

**Returns**

-   (::Boolean) — Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field will be populated.

### #return\_partial\_success=

```
def return_partial_success=(value) -> ::Boolean
```

**Parameter**

-   **value** (::Boolean) — Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field will be populated.

**Returns**

-   (::Boolean) — Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field will be populated.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
