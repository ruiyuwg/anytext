-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class InstanceGroupsConnection (2.29.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

The [`InstanceGroupsConnection`](/cpp/docs/reference/compute/2.29.0/classgoogle_1_1cloud_1_1compute__instance__groups__v1_1_1InstanceGroupsConnection) object for [`InstanceGroupsClient`](/cpp/docs/reference/compute/2.29.0/classgoogle_1_1cloud_1_1compute__instance__groups__v1_1_1InstanceGroupsClient).

This interface defines virtual methods for each of the user-facing overload sets in [`InstanceGroupsClient`](/cpp/docs/reference/compute/2.29.0/classgoogle_1_1cloud_1_1compute__instance__groups__v1_1_1InstanceGroupsClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`InstanceGroupsClient`](/cpp/docs/reference/compute/2.29.0/classgoogle_1_1cloud_1_1compute__instance__groups__v1_1_1InstanceGroupsClient).

To create a concrete instance, see `MakeInstanceGroupsConnection()`.

For mocking, see [`compute_instance_groups_v1_mocks::MockInstanceGroupsConnection`](/cpp/docs/reference/compute/2.29.0/classgoogle_1_1cloud_1_1compute__instance__groups__v1__mocks_1_1MockInstanceGroupsConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual AddInstances(google::cloud::cpp::compute::instance\_groups::v1::AddInstancesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_groups::v1::AddInstancesRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual AddInstances(NoAwaitTag, google::cloud::cpp::compute::instance\_groups::v1::AddInstancesRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::instance_groups::v1::AddInstancesRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual AddInstances(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual AggregatedListInstanceGroups(google::cloud::cpp::compute::instance\_groups::v1::AggregatedListInstanceGroupsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_groups::v1::AggregatedListInstanceGroupsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< std::pair< std::string, google::cloud::cpp::compute::v1::InstanceGroupsScopedList > >`

### virtual DeleteInstanceGroup(google::cloud::cpp::compute::instance\_groups::v1::DeleteInstanceGroupRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_groups::v1::DeleteInstanceGroupRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual DeleteInstanceGroup(NoAwaitTag, google::cloud::cpp::compute::instance\_groups::v1::DeleteInstanceGroupRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::instance_groups::v1::DeleteInstanceGroupRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual DeleteInstanceGroup(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual GetInstanceGroup(google::cloud::cpp::compute::instance\_groups::v1::GetInstanceGroupRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_groups::v1::GetInstanceGroupRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::InstanceGroup >`

### virtual InsertInstanceGroup(google::cloud::cpp::compute::instance\_groups::v1::InsertInstanceGroupRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_groups::v1::InsertInstanceGroupRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual InsertInstanceGroup(NoAwaitTag, google::cloud::cpp::compute::instance\_groups::v1::InsertInstanceGroupRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::instance_groups::v1::InsertInstanceGroupRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual InsertInstanceGroup(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual ListInstanceGroups(google::cloud::cpp::compute::instance\_groups::v1::ListInstanceGroupsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_groups::v1::ListInstanceGroupsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::InstanceGroup >`

### virtual ListInstances(google::cloud::cpp::compute::instance\_groups::v1::ListInstancesRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_groups::v1::ListInstancesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::InstanceWithNamedPorts >`

### virtual RemoveInstances(google::cloud::cpp::compute::instance\_groups::v1::RemoveInstancesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_groups::v1::RemoveInstancesRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual RemoveInstances(NoAwaitTag, google::cloud::cpp::compute::instance\_groups::v1::RemoveInstancesRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::instance_groups::v1::RemoveInstancesRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual RemoveInstances(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual SetNamedPorts(google::cloud::cpp::compute::instance\_groups::v1::SetNamedPortsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::instance_groups::v1::SetNamedPortsRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual SetNamedPorts(NoAwaitTag, google::cloud::cpp::compute::instance\_groups::v1::SetNamedPortsRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::instance_groups::v1::SetNamedPortsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual SetNamedPorts(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
