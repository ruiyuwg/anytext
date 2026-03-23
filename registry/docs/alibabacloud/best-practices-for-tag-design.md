This topic describes the background information, principles, best practices, and examples of tag design.

## Background information

If your enterprise has only a few or a dozen cloud resources, you can easily classify the resources. However, as your business develops, your enterprise may have tens of thousands of resources. In this case, it becomes difficult and unreliable to manually classify resources. As a result, a platform is required to resolve this issue.

We recommend that you use tags to classify your resources. When a user creates a resource, the user must add a tag to the resource to indicate the attribute of the resource, such as the business or finance attribute. For example, when a user creates a resource, the user adds a tag to the resource to indicate the creator, region, or project of the resource. This facilitates resource management.

## Principles

-   **Mutual exclusivity**
    
    This principle ensures that one resource attribute uses only one tag key. For example, you have used the tag key **owner** to represent the owner attribute. In this case, you cannot use other tag keys such as **own** or **belonger** to represent this attribute again.
    
-   **Collective exhaustion**
    
    This principle requires that you plan tag keys and tag values for resources that belong to different branches, departments, or projects. For example, Company A has three gaming project departments and plans to use the tag key **project** for the resources that belong to these departments. In this case, the company must plan at least three tag values to distinguish between the departments. In addition, all the resources of the company must be marked with the planned tag keys and tag values.
    
    Collective exhaustion is a prerequisite for tag-based resource searches, cost allocation, automated operations and maintenance (O&M), and access control.
    
-   **Limited values**
    
    This principle is used to retain only core tag values and remove excess tag values. For example, Company A has five departments. In this case, the company can have only one tag for each department to facilitate management.
    
    This principle simplifies procedures such as resource searches, cost allocation, automated O&M, and access control.
    
-   **Consideration of future consequences**
    
    When you plan tags, you must consider the impact of adding or removing tag values in the future. In addition, make sure that you can easily identify service types by using the planned tags. This enables extra flexibility to modify tags. For example, Company A uses the tag key **department** to manage resource ownership, finance ownership, and automated O&M for departments in the early days of data migration to the cloud. However, as business develops, this tag key cannot be used to easily distinguish resources. Therefore, we recommend that enterprises evaluate the business requirements for tags in the early days of data migration to the cloud. In the preceding example, the company can plan to use the following tag keys: **department**, **costcenter**, and **ops**.
    
    If you modify tags, tag-based access control, automated O&M, or related billing reports may change. For corporate or individual business, we recommend that you create business-related tags. This way, you can manage resources based on the tags from technical, business, and security dimensions. If you use automated O&M tools to manage resources and services, you can add automation-specific tags to facilitate automation.
    
-   **Simplified design**
    
    This principle is used to simplify the use of tags. When you design tags, simplify the values of tag keys and tag values. We recommend that you specify fixed values for tag keys and tag values to meet business requirements. For example, when you design tags to indicate test environments, use the tag key **test** for all types of test environments. Do not use different tag keys to indicate various types of test environments, such as **pretest** and **formal test**.
    
    This principle reduces the operation errors caused by excessive tag keys.
    
-   **Standardized naming**
    
    This principle requires that tag keys and tag values be named in a standardized format that is compatible with various open source tools. This facilitates API integration in the future. For example, use lowercase letters to specify tag keys and tag values.
    

## Best practices

An Internet company has three departments: business department, marketing department, and O&M department. Each department manages one or more projects. A production environment, a development environment, and a test environment are provided for different stages in the lifecycle of each project. The O&M department monitors resource usage in real time, periodically allocates costs for projects, controls access to resources in real time, and implements automated O&M.

The company designs tags based on the following requirements.

  

Requirement

Tag design description

Description

Search for and manage resources

Create and add the following tag keys for resources:

-   department: indicates the department to which a resource belongs.
-   project: indicates the project to which a resource belongs.
-   environment: indicates the type of the environment in which a resource runs.

If the organizational structure of your enterprise is more complex, you can use higher-level tag keys, such as company.

Manage and allocate costs

Create and add cost center tags for resources:

-   Tag key: **costcenter**
-   Tag values: **proj-1**, **proj-2**, **proj-3**, and **proj-4**

None.

Control access to resources

Prohibit personnel that are not the members of a project from accessing the resources that belong to the project, such as Elastic Compute Service (ECS) instances.

For more information, see [Use tags to control access to ECS resources](/help/en/resource-management/use-tags-to-control-access-to-ecs-resources#task-2376470 "After you add tags to your Elastic Compute Service (ECS) resources, you can use the tags to categorize and control access to the resources. This topic uses ECS instances to demonstrate how to attach a policy to a RAM user and how the user uses tags to control access to the ECS instances.").

Implement automated O&M

Create the tag key **purpose** for routine resource inspections. You can create a tag value **autocheck-8am** for the tag key. This tag value indicates that an automated inspection is performed at 08:00 every day on the resources to which the tag is added. If an exception is detected during the inspection, the owner of the resource on which the exception occurs is notified based on the tag key **owner**.

None.

## Examples

The following table lists some example tags from common dimensions.

  

Dimension

Tag key

Tag value

Organization

-   company
-   department
-   organization
-   team
-   group

Organization-specific names

Business

-   product
-   business
-   module
-   service

Business-specific names

Role

-   role
-   user

-   network administrator
-   application administrator
-   system administrator
-   O&M administrator
-   R&D personnel
-   test personnel

Purpose

-   purpose
-   use

Specific purposes

Project

-   Project dimensions:
    -   project
    -   risk
    -   schedule
    -   subtask
    -   environment
-   Personnel dimensions:
    -   sponsor
    -   member
    -   owner
    -   creator

Project-related values

Business department (to implement cost allocation and business tracking)

-   costcenter
-   businessunit
-   biz
-   financecontact

Department-related values

Owner from the finance dimension (to identify the resource owner)

owner

Names or emails

Customer from the finance dimension (to identify the customers that use specific resources)

Custom or actual values

Customer names

Project from the finance dimension (to identify the projects that are supported by specific resources)

project

Project names

Order from the finance dimension

order

Order category IDs
