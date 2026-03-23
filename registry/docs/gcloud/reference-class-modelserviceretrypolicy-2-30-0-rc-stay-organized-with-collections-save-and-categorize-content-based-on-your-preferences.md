-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ModelServiceRetryPolicy (2.30.0-rc) Stay organized with collections Save and categorize content based on your preferences.

The retry policy for [`ModelServiceConnection`](/cpp/docs/reference/generativelanguage/latest/classgoogle_1_1cloud_1_1generativelanguage__v1_1_1ModelServiceConnection).

## Functions

### clone() const

Creates a new instance of the policy, reset to the initial state.

**Returns**

**Type**

**Description**

`std::unique_ptr< ModelServiceRetryPolicy >`

### OnFailure(Status const &)

**Parameter**

**Name**

**Description**

`status`

`Status const &`  

**Returns**

**Type**

**Description**

`bool`

### OnFailure(Status const &)

**Parameter**

**Name**

**Description**

`status`

`Status const &`  

**Returns**

**Type**

**Description**

`bool`

### IsExhausted() const

**Returns**

**Type**

**Description**

`bool`

### IsExhausted() const

**Returns**

**Type**

**Description**

`bool`

### IsPermanentFailure(Status const &) const

**Parameter**

**Name**

**Description**

`status`

`Status const &`  

**Returns**

**Type**

**Description**

`bool`

### IsPermanentFailure(Status const &) const

**Parameter**

**Name**

**Description**

`status`

`Status const &`  

**Returns**

**Type**

**Description**

`bool`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-30 UTC.
