-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class SecuritySettingsServiceClient (2.11.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

Service for managing security settings for Dialogflow.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### SecuritySettingsServiceClient(SecuritySettingsServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`SecuritySettingsServiceClient const &`  

### SecuritySettingsServiceClient(SecuritySettingsServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`SecuritySettingsServiceClient &&`  

### SecuritySettingsServiceClient(std::shared\_ptr< SecuritySettingsServiceConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< SecuritySettingsServiceConnection >`  

`opts`

`Options`  

## Operators

### operator=(SecuritySettingsServiceClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`SecuritySettingsServiceClient const &`  

**Returns**

**Type**

**Description**

`SecuritySettingsServiceClient &`

### operator=(SecuritySettingsServiceClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`SecuritySettingsServiceClient &&`  

**Returns**

**Type**

**Description**

`SecuritySettingsServiceClient &`

## Functions

### CreateSecuritySettings(std::string const &, google::cloud::dialogflow::cx::v3::SecuritySettings const &, Options)

Create security settings in the specified location.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The location to create an [SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195) for. Format: `projects/<`[`Project`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html)`ID>/locations/<Location ID>`.

`security_settings`

`google::cloud::dialogflow::cx::v3::SecuritySettings const &`  

Required. The security settings to create.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::SecuritySettings >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateSecuritySettings(google::cloud::dialogflow::cx::v3::CreateSecuritySettingsRequest const &, Options)

Create security settings in the specified location.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::CreateSecuritySettingsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.CreateSecuritySettingsRequest](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L162). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::SecuritySettings >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetSecuritySettings(std::string const &, Options)

Retrieves the specified [SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195).

The returned settings may be stale by up to 1 minute.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. Resource name of the settings. Format: `projects/<`[`Project`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html)`ID>/locations/<Location ID>/securitySettings/<security settings ID>`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::SecuritySettings >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetSecuritySettings(google::cloud::dialogflow::cx::v3::GetSecuritySettingsRequest const &, Options)

Retrieves the specified [SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195).

The returned settings may be stale by up to 1 minute.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::GetSecuritySettingsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.GetSecuritySettingsRequest](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L106). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::SecuritySettings >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateSecuritySettings(google::cloud::dialogflow::cx::v3::SecuritySettings const &, google::protobuf::FieldMask const &, Options)

Updates the specified [SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195).

**Parameters**

**Name**

**Description**

`security_settings`

`google::cloud::dialogflow::cx::v3::SecuritySettings const &`  

Required. \[SecuritySettings\] object that contains values for each of the fields to update.

`update_mask`

`google::protobuf::FieldMask const &`  

Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::SecuritySettings >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateSecuritySettings(google::cloud::dialogflow::cx::v3::UpdateSecuritySettingsRequest const &, Options)

Updates the specified [SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::UpdateSecuritySettingsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.UpdateSecuritySettingsRequest](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L120). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::dialogflow::cx::v3::SecuritySettings >`

the result of the RPC. The response message type ([google.cloud.dialogflow.cx.v3.SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListSecuritySettings(std::string const &, Options)

Returns the list of all security settings in the specified location.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

Required. The location to list all security settings for. Format: `projects/<`[`Project`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html)`ID>/locations/<Location ID>`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::dialogflow::cx::v3::SecuritySettings >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.dialogflow.cx.v3.SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### ListSecuritySettings(google::cloud::dialogflow::cx::v3::ListSecuritySettingsRequest, Options)

Returns the list of all security settings in the specified location.

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::ListSecuritySettingsRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.ListSecuritySettingsRequest](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L133). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::dialogflow::cx::v3::SecuritySettings >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.cloud.dialogflow.cx.v3.SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### DeleteSecuritySettings(std::string const &, Options)

Deletes the specified [SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195).

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

Required. The name of the [SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195) to delete. Format: `projects/<`[`Project`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html)`ID>/locations/<Location ID>/securitySettings/<Security Settings ID>`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### DeleteSecuritySettings(google::cloud::dialogflow::cx::v3::DeleteSecuritySettingsRequest const &, Options)

Deletes the specified [SecuritySettings](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L195).

**Parameters**

**Name**

**Description**

`request`

`google::cloud::dialogflow::cx::v3::DeleteSecuritySettingsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.cloud.dialogflow.cx.v3.DeleteSecuritySettingsRequest](https://github.com/googleapis/googleapis/blob/719f24c81c7626dc127eecf71f78490acac9658d/google/cloud/dialogflow/cx/v3/security_settings.proto#L179). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
