-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Backup and DR Service V1 API - Class Google::Cloud::BackupDR::V1::UpdateBackupPlanAssociationRequest (v1.8.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.8.0 (latest)](/ruby/docs/reference/google-cloud-backupdr-v1/latest/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [1.7.0](/ruby/docs/reference/google-cloud-backupdr-v1/1.7.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [1.6.0](/ruby/docs/reference/google-cloud-backupdr-v1/1.6.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [1.5.0](/ruby/docs/reference/google-cloud-backupdr-v1/1.5.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [1.4.1](/ruby/docs/reference/google-cloud-backupdr-v1/1.4.1/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [1.3.0](/ruby/docs/reference/google-cloud-backupdr-v1/1.3.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [1.2.0](/ruby/docs/reference/google-cloud-backupdr-v1/1.2.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [1.1.0](/ruby/docs/reference/google-cloud-backupdr-v1/1.1.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [1.0.1](/ruby/docs/reference/google-cloud-backupdr-v1/1.0.1/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [0.5.0](/ruby/docs/reference/google-cloud-backupdr-v1/0.5.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [0.4.0](/ruby/docs/reference/google-cloud-backupdr-v1/0.4.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [0.3.0](/ruby/docs/reference/google-cloud-backupdr-v1/0.3.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [0.2.1](/ruby/docs/reference/google-cloud-backupdr-v1/0.2.1/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)
-   [0.1.0](/ruby/docs/reference/google-cloud-backupdr-v1/0.1.0/Google-Cloud-BackupDR-V1-UpdateBackupPlanAssociationRequest)

Reference documentation and code samples for the Backup and DR Service V1 API class Google::Cloud::BackupDR::V1::UpdateBackupPlanAssociationRequest.

Request message for updating a backup plan association.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #backup\_plan\_association

```
def backup_plan_association() -> ::Google::Cloud::BackupDR::V1::BackupPlanAssociation
```

**Returns**

-   ([::Google::Cloud::BackupDR::V1::BackupPlanAssociation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-backupdr-v1/latest/Google-Cloud-BackupDR-V1-BackupPlanAssociation)) — Required. The resource being updated

### #backup\_plan\_association=

```
def backup_plan_association=(value) -> ::Google::Cloud::BackupDR::V1::BackupPlanAssociation
```

**Parameter**

-   **value** ([::Google::Cloud::BackupDR::V1::BackupPlanAssociation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-backupdr-v1/latest/Google-Cloud-BackupDR-V1-BackupPlanAssociation)) — Required. The resource being updated

**Returns**

-   ([::Google::Cloud::BackupDR::V1::BackupPlanAssociation](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-backupdr-v1/latest/Google-Cloud-BackupDR-V1-BackupPlanAssociation)) — Required. The resource being updated

### #request\_id

```
def request_id() -> ::String
```

**Returns**

-   (::String) — Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
    
    For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
    
    The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    

### #request\_id=

```
def request_id=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
    
    For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
    
    The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    

**Returns**

-   (::String) — Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
    
    For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
    
    The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    

### #update\_mask

```
def update_mask() -> ::Google::Protobuf::FieldMask
```

**Returns**

-   ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-backupdr-v1/latest/Google-Protobuf-FieldMask)) — Required. The list of fields to update. Field mask is used to specify the fields to be overwritten in the BackupPlanAssociation resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. Currently backup\_plan\_association.backup\_plan is the only supported field.

### #update\_mask=

```
def update_mask=(value) -> ::Google::Protobuf::FieldMask
```

**Parameter**

-   **value** ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-backupdr-v1/latest/Google-Protobuf-FieldMask)) — Required. The list of fields to update. Field mask is used to specify the fields to be overwritten in the BackupPlanAssociation resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. Currently backup\_plan\_association.backup\_plan is the only supported field.

**Returns**

-   ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-backupdr-v1/latest/Google-Protobuf-FieldMask)) — Required. The list of fields to update. Field mask is used to specify the fields to be overwritten in the BackupPlanAssociation resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. Currently backup\_plan\_association.backup\_plan is the only supported field.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
