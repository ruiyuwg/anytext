Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management.

## Scenarios

-   Search for resources.
    
    You can add tags to resources and search for resources based on the tags in the Resource Management console or by calling a tag-related API operation. For more information, see [Use tags to query resources](/help/en/resource-management/tag/user-guide/use-tags-to-query-cloud-resources#task-2537601).
    
-   Allocate costs.
    
    You can plan tags for your resources from different dimensions such as region, department, environment, and project. Then, you can use the Cost Analysis and Split Bill features provided by Alibaba Cloud to manage costs. For more information, see [Use tags to allocate costs](/help/en/resource-management/tag/user-guide/overview-of-tag-based-cost-allocation#concept-1948858).
    
-   Implement automated O&M.
    
    You can add different tags to resources in different environments, resources that run different operating systems, or resources on different mobile platforms. The environments include the production environment and test environment. The operating systems include Windows and Linux. The mobile platforms include iOS and Android. Then, you can create a template in CloudOps Orchestration Service (OOS) and execute the template to implement automated O&M for your resources. For more information, see [Use tags to implement automated O&M](/help/en/resource-management/tag/user-guide/use-tag-for-automated-operations#concept-1948862).
    
-   Control access to resources.
    
    You can use tags in Resource Access Management (RAM) to manage the access and operation permissions of RAM users on different resources. For more information, see [Use tags to control access to resources](/help/en/resource-management/tag/user-guide/use-tags-to-control-access-to-resources-1).
    

## Benefits

-   Convenience: A unified, visualized console is provided to manage the resources to which tags are added.
    
-   Flexibility: You can add, remove, modify, or query one or more tags in the console or by calling an API operation.
    
-   Visibility: You can use tags to manage separate bills for departments, products, and projects.
    

## Terms

**Term**

**Description**

key-value pair

A tag consists of a key-value pair.

predefined tag

A predefined tag is a tag that you create in advance and is available for resources in all regions. If a predefined tag is not added to resources after it is created, the system does not automatically delete it. You can create predefined tags in the stage of tag planning and add them to resources in the stage of tag implementation. For more information, see [Create a tag](/help/en/resource-management/tag/user-guide/create-a-tag#task-2115168).

system tag

A system tag is defined by the system. You can only query system tags. System tags present data relationships in a standard manner. In some cases, you can use system tags to assist in processing your business. For example, a cluster is associated with an Elastic Compute Service (ECS) instance, and the system adds the system tag of the cluster ID to the ECS instance. This way, you can determine the attribution of the ECS instance based on the system tag. For more information, see [View system tags and the resources to which a system tag is added](/help/en/resource-management/tag/user-guide/view-system-tags-and-the-resources-to-which-a-system-tag-is-added#task-2042690).

createdby tag

createdby tag is a type of system tag that is provided by Alibaba Cloud and automatically added to resources. This type of tag is used to identify the creators of resources, analyze costs and bills, and manage the costs of resources in an efficient manner. For more information, see [Overview](/help/en/resource-management/tag/user-guide/overview-4#task-2117830).

tag policy

Tag policies are used to standardize the tags that are added to resources. You can use a tag policy to define the tags that must be added to your resources. Compliant tags can help you improve the efficiency in aspects such as tag-based cost allocation, tag-based access control, and automated O&M. Tag policies support the single-account mode and resource directory mode. The two modes can meet your business requirements for standardized tag management in different stages. For more information, see [Overview](/help/en/resource-management/tag/user-guide/overview#concept-2182200).

## Services that work with Tag

A series of core Alibaba Cloud services support tags, such as ECS, ApsaraDB RDS, Object Storage Service (OSS), Virtual Private Cloud (VPC), Server Load Balancer (SLB), and Container Service for Kubernetes (ACK). Alibaba Cloud intends to add tag support for other services. For more information, see [Services that work with Tag](/help/en/resource-management/tag/product-overview/services-that-work-with-tag#concept-2537668).

## Limits

**Item**

**Limit**

**Adjustable**

**Remarks**

Maximum number of tags that can be added to a single resource

20

[Apply for a quota](https://quotas.console.alibabacloud.com/products/tag/quotas)

-   The quota varies based on the resource type. This indicates that the maximum number of tags that can be added to a single resource depends on the type of the resource. You need to go to the Quota Center console to check whether you can adjust the quota for a type of resource.
    
-   After you apply for a quota increase for a type of resource and the application is approved, the new quota takes effect within one hour.
    
-   If you want to increase the quota for **ECS instances**, we recommend that you apply for a quota increase for **ECS disks** and **ECS elastic network interfaces (ENIs)** when you apply for a quota increase for ECS instances. The disks and ENIs are created together with ECS instances.
    

Maximum number of predefined tags that can be created within a single Alibaba Cloud account

1,000

N/A

N/A

Maximum number of tag values that can be specified for a single predefined tag key

1,000

N/A

N/A

Tag key

A tag key can be up to 128 characters in length and can contain letters, numbers, space characters, and the following special characters: `_ . # / = + - @`. Tag keys cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

**Note**

Character constraints for tag keys can differ between cloud services. Please consult the documentation for the specific service you are using.

N/A

N/A

Tag value

A tag value can be up to 128 characters in length and can contain letters, numbers, space characters, and the following special characters: `_ . # / = + - @`. Tag values cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

**Note**

Character constraints for tag values can differ between cloud services. Please consult the documentation for the specific service you are using.

N/A

N/A

Adding tags to resources

Each tag key on a resource can have only one tag value. If you attempt to add a tag that has the same key as an existing tag, the value of the existing tag is overwritten.

For example, the `city:shanghai` tag is added to a resource. If you add the `city:newyork` tag to the resource, the `city:shanghai` tag is automatically removed from the resource.

N/A

N/A

## **Billing**

You can use this service without activating it.

This service is free of charge. However, if the Alibaba Cloud services that work with it are not free of charge, you are charged for the services based on their billing methods.
