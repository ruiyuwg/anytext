-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class InstanceResource (2.11.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

This class identifies a Cloud Bigtable Instance.

To use Cloud Bigtable, you create instances, which contain clusters that your applications can connect to. Each cluster contains nodes, the compute units that manage your data and perform maintenance tasks. A Cloud Bigtable instance is identified by its `project_id` and `instance_id`.

**Note:** This class makes no effort to validate the components of the instance name. It is the application's responsibility to provide valid project, and instance ids. Passing invalid values will not be checked until the instance name is used in an RPC to Bigtable.

###### See Also

[https://cloud.google.com/bigtable/docs/instances-clusters-nodes](https://cloud.google.com/bigtable/docs/instances-clusters-nodes) for an overview of Cloud Bigtable instances, clusters, and nodes.

## Constructors

### InstanceResource(Project, std::string)

Constructs an [InstanceResource](/cpp/docs/reference/bigtable/2.11.0/classgoogle_1_1cloud_1_1bigtable_1_1InstanceResource) object identified by the given `project` and `instance_id`.

**Parameters**

**Name**

**Description**

`project`

`Project`  

`instance_id`

`std::string`  

## Functions

### project() const

Returns the [`Project`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Project.html) containing this instance.

**Returns**

**Type**

**Description**

`Project const &`

### project\_id() const

**Returns**

**Type**

**Description**

`std::string const &`

### instance\_id() const

Returns the Instance ID.

**Returns**

**Type**

**Description**

`std::string const &`

### FullName() const

Returns the fully qualified instance name as a string of the form: "projects/

**Returns**

**Type**

**Description**

`std::string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
