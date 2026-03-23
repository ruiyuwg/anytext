The advanced search feature allows you to query resources within the current account and resources within the members in a resource directory by executing SQL statements. The advanced search feature provides global resource search capabilities that are flexible, effective, and free of charge. You can use a query template to quickly query resources. The advanced search feature can meet your business requirements for querying specific types of resources and performing more complex queries.

## **Functionalities**

-   **Flexible query conditions**
    
    A traditional query method allows you to query resources based only on fixed rules. However, the advanced search feature allows you to tailor query conditions to your business requirements, which improves the accuracy of query results. For example, you can specify multiple query conditions, which helps narrow the search scope and find the resources that meet the conditions. The advanced search feature is also suitable for complex query scenarios, such as querying associated resources, performing a query based on a combination of multiple conditions, or performing other special queries. The advanced search feature can quickly return accurate query results in these scenarios and help you analyze data in depth.
    
-   **Custom query scope**
    
    You can use the advanced search feature to query resources within different scopes. You can query resources within the current account or query resources within multiple members in a resource directory.
    
-   **Query templates**
    
    To simplify the query process, Resource Management provides sample query templates. The query templates contain common query statements. You can use a query template to quickly identify the resources that you require. You can also save the query statement that you write as a custom query template, and use the custom query template in your business without the need to repeatedly write query statements. This helps save time and ensures the accuracy and consistency of query results. The advanced search feature can meet your query requirements no matter whether you are a beginner or a user with some experience, and help you quickly and accurately identify the resources that you require. For more information, see [Use a sample query template to query resources](/help/en/resource-management/resource-center/user-guide/search-for-resources-by-sample-query-template), [Use a custom query template to query resources](/help/en/resource-management/resource-center/user-guide/search-for-resources-through-custom-query-templates), and [Query templates](/help/en/resource-management/resource-center/user-guide/query-template/).
    
-   **Visualized charts**
    
    The advanced search feature can be used to present query results in charts. If you want to analyze resources to understand resource distribution and resource proportions, you can present query results for resources in charts. This can help you intuitively view data related to resources. For example, you can view the proportions of different types of resources in pie charts or column charts. Then, you can optimize and adjust resources based on your business requirements. For more information, see [Step 3: View the query result](/help/en/resource-management/resource-center/user-guide/search-for-resources-by-sample-query-template#05310a804aikt).
    

## **Query statement**

The advanced search feature allows you to execute SQL statements to perform operations such as querying, filtering, and sorting resources. The working principles and operation methods of all operators and functions that are supported by the advanced search feature are based on [PostgreSQL](https://www.postgresql.org/docs/11/queries.html). For information about the basic SQL syntax that is supported by the advanced search feature, see [Basic SQL syntax](/help/en/resource-management/resource-center/user-guide/basic-sql-syntax).

## **Table used for queries**

The resources table is the core data table used in advanced search. The resources table stores information about resource properties. All queries performed by using the advanced search feature are implemented based on operations such as querying, filtering, and sorting fields in the resources table. For example, you can specify the resource\_name field in a query condition to query the resource with this name. You can also specify the resource\_type field in a query condition to query a specific type of resource. In addition to the core fields, the properties field in the resources table also stores other properties of a resource, such as the status and billing method. The values of the properties field vary based on the resource type.

The following table describes the fields in the resources table.

**Field**

**Data type**

**Description**

resource\_id

varchar

The resource ID.

resource\_name

varchar

The resource name.

region\_id

varchar

The region ID.

zone\_id

varchar

The zone ID.

resource\_type

varchar

The resource type.

account\_id

varchar

The account ID.

create\_time

varchar

The creation time.

resource\_group\_id

varchar

The resource group ID.

tags

jsonb

The tags.

ip\_addresses

jsonb

The IP addresses.

vpc\_id

varchar

The virtual private cloud (VPC) ID.

v\_switch\_id

varchar

The vSwitch ID.

properties

jsonb

The resource properties.

## **Limits**

-   Limit on the query frequency
    
    You can perform a maximum of three queries within 5 seconds. If you perform more than three queries within 5 seconds, throttling is triggered. The quota for the query frequency is determined by various factors and may be changed.
    
-   Limit on the execution duration of a query
    
    The maximum execution duration that is allowed for a query is no more than 10 seconds. If no query result is returned within 10 seconds, the system terminates the query and reports an error.
    
    To ensure that a query result can be returned within 10 seconds, you can use one of the following methods to reduce the complexity of a query:
    
    -   Add a limit condition. For example, if the amount of data on which you want to perform a query is large, you can add an ORDER BY clause to the query statement to sort data based on the `resource_type` and `resource_id` fields.
        
    -   Limit the number of data records that can be returned. For example, you can use the LIMIT clause in the query statement to limit the maximum number of data records that can be returned.
        
    -   Enable the query to return the `properties` field only if necessary.
        
-   Limit on functions that can be used for queries
    
    For more information, see [Supported functions](/help/en/resource-management/resource-center/user-guide/supported-functions).
