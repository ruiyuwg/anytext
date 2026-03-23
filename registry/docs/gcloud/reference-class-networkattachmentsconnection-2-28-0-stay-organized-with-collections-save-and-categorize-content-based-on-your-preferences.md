-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class NetworkAttachmentsConnection (2.28.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

The [`NetworkAttachmentsConnection`](/cpp/docs/reference/compute/2.28.0/classgoogle_1_1cloud_1_1compute__network__attachments__v1_1_1NetworkAttachmentsConnection) object for [`NetworkAttachmentsClient`](/cpp/docs/reference/compute/2.28.0/classgoogle_1_1cloud_1_1compute__network__attachments__v1_1_1NetworkAttachmentsClient).

This interface defines virtual methods for each of the user-facing overload sets in [`NetworkAttachmentsClient`](/cpp/docs/reference/compute/2.28.0/classgoogle_1_1cloud_1_1compute__network__attachments__v1_1_1NetworkAttachmentsClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`NetworkAttachmentsClient`](/cpp/docs/reference/compute/2.28.0/classgoogle_1_1cloud_1_1compute__network__attachments__v1_1_1NetworkAttachmentsClient).

To create a concrete instance, see `MakeNetworkAttachmentsConnection()`.

For mocking, see [`compute_network_attachments_v1_mocks::MockNetworkAttachmentsConnection`](/cpp/docs/reference/compute/2.28.0/classgoogle_1_1cloud_1_1compute__network__attachments__v1__mocks_1_1MockNetworkAttachmentsConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual AggregatedListNetworkAttachments(google::cloud::cpp::compute::network\_attachments::v1::AggregatedListNetworkAttachmentsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::network_attachments::v1::AggregatedListNetworkAttachmentsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< std::pair< std::string, google::cloud::cpp::compute::v1::NetworkAttachmentsScopedList > >`

### virtual DeleteNetworkAttachment(google::cloud::cpp::compute::network\_attachments::v1::DeleteNetworkAttachmentRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::network_attachments::v1::DeleteNetworkAttachmentRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual DeleteNetworkAttachment(NoAwaitTag, google::cloud::cpp::compute::network\_attachments::v1::DeleteNetworkAttachmentRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::network_attachments::v1::DeleteNetworkAttachmentRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual DeleteNetworkAttachment(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual GetNetworkAttachment(google::cloud::cpp::compute::network\_attachments::v1::GetNetworkAttachmentRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::network_attachments::v1::GetNetworkAttachmentRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::NetworkAttachment >`

### virtual GetIamPolicy(google::cloud::cpp::compute::network\_attachments::v1::GetIamPolicyRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::network_attachments::v1::GetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

### virtual InsertNetworkAttachment(google::cloud::cpp::compute::network\_attachments::v1::InsertNetworkAttachmentRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::network_attachments::v1::InsertNetworkAttachmentRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual InsertNetworkAttachment(NoAwaitTag, google::cloud::cpp::compute::network\_attachments::v1::InsertNetworkAttachmentRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::network_attachments::v1::InsertNetworkAttachmentRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual InsertNetworkAttachment(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual ListNetworkAttachments(google::cloud::cpp::compute::network\_attachments::v1::ListNetworkAttachmentsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::network_attachments::v1::ListNetworkAttachmentsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::NetworkAttachment >`

### virtual PatchNetworkAttachment(google::cloud::cpp::compute::network\_attachments::v1::PatchNetworkAttachmentRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::network_attachments::v1::PatchNetworkAttachmentRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual PatchNetworkAttachment(NoAwaitTag, google::cloud::cpp::compute::network\_attachments::v1::PatchNetworkAttachmentRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::network_attachments::v1::PatchNetworkAttachmentRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual PatchNetworkAttachment(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual SetIamPolicy(google::cloud::cpp::compute::network\_attachments::v1::SetIamPolicyRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::network_attachments::v1::SetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

### virtual TestIamPermissions(google::cloud::cpp::compute::network\_attachments::v1::TestIamPermissionsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::network_attachments::v1::TestIamPermissionsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::TestPermissionsResponse >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
