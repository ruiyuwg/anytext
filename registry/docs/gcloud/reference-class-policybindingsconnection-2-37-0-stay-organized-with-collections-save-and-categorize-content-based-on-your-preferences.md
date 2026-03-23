-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class PolicyBindingsConnection (2.37.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

The [`PolicyBindingsConnection`](/cpp/docs/reference/iam/2.37.0/classgoogle_1_1cloud_1_1iam__v3_1_1PolicyBindingsConnection) object for [`PolicyBindingsClient`](/cpp/docs/reference/iam/2.37.0/classgoogle_1_1cloud_1_1iam__v3_1_1PolicyBindingsClient).

This interface defines virtual methods for each of the user-facing overload sets in [`PolicyBindingsClient`](/cpp/docs/reference/iam/2.37.0/classgoogle_1_1cloud_1_1iam__v3_1_1PolicyBindingsClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`PolicyBindingsClient`](/cpp/docs/reference/iam/2.37.0/classgoogle_1_1cloud_1_1iam__v3_1_1PolicyBindingsClient).

To create a concrete instance, see [`MakePolicyBindingsConnection()`](/cpp/docs/reference/iam/2.37.0/namespacegoogle_1_1cloud_1_1iam__v3).

For mocking, see [`iam_v3_mocks::MockPolicyBindingsConnection`](/cpp/docs/reference/iam/2.37.0/classgoogle_1_1cloud_1_1iam__v3__mocks_1_1MockPolicyBindingsConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual CreatePolicyBinding(google::iam::v3::CreatePolicyBindingRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v3::CreatePolicyBindingRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::iam::v3::PolicyBinding > >`

### virtual CreatePolicyBinding(NoAwaitTag, google::iam::v3::CreatePolicyBindingRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::iam::v3::CreatePolicyBindingRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual CreatePolicyBinding(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::iam::v3::PolicyBinding > >`

### virtual GetPolicyBinding(google::iam::v3::GetPolicyBindingRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v3::GetPolicyBindingRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v3::PolicyBinding >`

### virtual UpdatePolicyBinding(google::iam::v3::UpdatePolicyBindingRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v3::UpdatePolicyBindingRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::iam::v3::PolicyBinding > >`

### virtual UpdatePolicyBinding(NoAwaitTag, google::iam::v3::UpdatePolicyBindingRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::iam::v3::UpdatePolicyBindingRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual UpdatePolicyBinding(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::iam::v3::PolicyBinding > >`

### virtual DeletePolicyBinding(google::iam::v3::DeletePolicyBindingRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v3::DeletePolicyBindingRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::iam::v3::OperationMetadata > >`

### virtual DeletePolicyBinding(NoAwaitTag, google::iam::v3::DeletePolicyBindingRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::iam::v3::DeletePolicyBindingRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual DeletePolicyBinding(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::iam::v3::OperationMetadata > >`

### virtual ListPolicyBindings(google::iam::v3::ListPolicyBindingsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v3::ListPolicyBindingsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::iam::v3::PolicyBinding >`

### virtual SearchTargetPolicyBindings(google::iam::v3::SearchTargetPolicyBindingsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v3::SearchTargetPolicyBindingsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::iam::v3::PolicyBinding >`

### virtual GetOperation(google::longrunning::GetOperationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::GetOperationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
