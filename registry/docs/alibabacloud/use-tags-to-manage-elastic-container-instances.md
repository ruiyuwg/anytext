A tag is a key-value pair that you can use to identify elastic container instances. You can use tags to manage elastic container instances by group and perform searches and batch operations.

## Background information

If you use or manage elastic container instances by calling API operations or by using the Elastic Container Instance console, you can use tags to group instances that share the same management or business requirements for easy search and operations.

When you use tags, take note of the following limits:

-   Each tag consists of a tag key and a tag value. The tag key must be unique.
    
-   Tag information cannot be shared across regions.
    
-   Up to 20 tags can be added to a single elastic container instance.
    
-   Tags cannot be separately deleted.
    
    **Note**
    
    When an elastic container instance is deleted, the tags added to the instance are also deleted.
    

## Create an elastic container instance that has tags

### OpenAPI

When you call the CreateContainerGroup operation to create an elastic container instance, you can use the tag-related parameters to specify tags. The following table describes the parameters. For more information, see [CreateContainerGroup](/help/en/eci/developer-reference/api-eci-2018-08-08-createcontainergroup).

Parameter

Type

Example

Description

Tag.N.Key

String

version

The key of tag N. Valid values of N: 1 to 20.

The tag key cannot be an empty string and must be unique. The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

Tag.N.Value

String

2.0

The value of tag N. Valid values of N: 1 to 20.

The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:`.

### Console mode

When you create elastic container instances on the instance buy page in the Elastic Container Instance console, you can add tags to the instances in the **Other Settings** step,

![添加标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4869075261/p280960.png)

## Query the tags of an elastic container instance

### OpenAPI

When you call the DescribeContainerGroups operation to query elastic container instances, the Tags response parameters indicate the tags of the instances. The Key response parameter indicates the tag key, and the Value response parameter indicates the tag value. For more information, see [DescribeContainerGroups](/help/en/eci/developer-reference/api-eci-2018-08-08-describecontainergroups).

### **Console mode**

Go to the **Elastic Container Instance** page in the Elastic Container Instance console. Find the instance whose tags you want to query and move the pointer over the icon in the Tag column to view the tags of the instance, as shown in the following figure.

![查看标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6957463071/p280975.png)

## Use tags to filter elastic container instances

After you add tags to elastic container instances, you can use the tags to search for or authenticate to the instances.

### OpenAPI

When you call the DescribeContainerGroups operation to query elastic container instances, you can use the tag-related parameters to filter instances. For more information, see [DescribeContainerGroups](/help/en/eci/developer-reference/api-eci-2018-08-08-describecontainergroups).

### Console mode

On the **Elastic Container Instance** page in the Elastic Container Instance console, you can use tags to filter elastic container instances.

![标签筛选](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6957463071/p281006.png)

**Note**

If you use a Resource Access Management (RAM) user to manage Elastic Container Instance resources, you can use tags to limit users to perform operations only on resources that have specific tags. For more information, see [Authenticate RAM users based on tags](/help/en/eci/user-guide/use-tags-to-authenticate-a-ram-user#topic3927).

## Update the tags of an elastic container instance

Before you update tags for an elastic container instance, you can first query the tags that are added to the instance. When you update tags for an elastic container instance, you can only update the existing tags or add new tags. Tags cannot be deleted from elastic container instances. The number of tags on an elastic container instance cannot be reduced.

### OpenAPI

When you call the UpdateContainerGroup operation to update an elastic container instance, you can use the tag-related parameters to update tags. The following table describes the parameters. For more information, see [UpdateContainerGroup](/help/en/eci/developer-reference/api-eci-2018-08-08-updatecontainergroup).

Parameter

Type

Example

Description

Tag.N.Key

String

version

The key of tag N. Valid values of N: 1 to 20.

The tag key cannot be an empty string and must be unique. The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

Tag.N.Value

String

2.0

The value of tag N. Valid values of N: 1 to 20.

The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:`.

### **Console mode**

On the **Elastic Container Instance** page in the Elastic Container Instance console, you can select a created instance and update its tags, as shown in the following figure.

![更新标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5869075261/p280999.png)
