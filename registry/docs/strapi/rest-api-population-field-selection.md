# REST API: Population & Field Selection

The [REST API](/cms/api/rest) by default does not populate any relations, media fields, components, or dynamic zones. Use the [`populate` parameter](#population) to populate specific fields. Use the [`fields` parameter](#field-selection) to return only specific fields with the query results.

## Population

The REST API by default does not populate any type of fields, so it will not populate relations, media fields, components, or dynamic zones unless you pass a `populate` parameter to populate various field types. Populated relations always return full objects; the REST API currently cannot return just an array of IDs.

The `find` permission must be enabled for the content-types that are being populated. If a role does not have access to a content-type, the content-type will not be populated (see [Users & Permissions](/cms/features/users-permissions#editing-a-role) for additional information on how to enable `find` permissions for content-types).

You can use the `populate` parameter alone or [in combination with multiple operators](#combining-population-with-other-operators) for more control over the population.

`populate=deep` plugins are [not recommended in Strapi](https://support.strapi.io/articles/8544110758-why-populate-deep-plugins-are-not-recommended-in-strapi).

The following table lists populate use cases with example syntax. Each row links to the Understanding populate guide for details:

| Use case  | Example parameter syntax | Detailed explanations to read |
|-----------| ---------------|-----------------------|
| Populate everything, 1 level deep, including media fields, relations, components, and dynamic zones | `populate=*`| [Populate all relations and fields, 1 level deep](/cms/api/rest/guides/understanding-populate#populate-all-relations-and-fields-1-level-deep) |
| Populate one relation,1 level deep | `populate=a-relation-name`| [Populate 1 level deep for specific relations](/cms/api/rest/guides/understanding-populate#populate-1-level-deep-for-specific-relations) |
| Populate several relations,1 level deep | `populate[0]=relation-name&populate[1]=another-relation-name&populate[2]=yet-another-relation-name`| [Populate 1 level deep for specific relations](/cms/api/rest/guides/understanding-populate#populate-1-level-deep-for-specific-relations) |
| Populate some relations, several levels deep | `populate[root-relation-name][populate][0]=nested-relation-name`| [Populate several levels deep for specific relations](/cms/api/rest/guides/understanding-populate#populate-several-levels-deep-for-specific-relations) |
| Populate a component | `populate[0]=component-name`| [Populate components](/cms/api/rest/guides/understanding-populate#populate-components) |
| Populate a component and one of its nested components | `populate[0]=component-name&populate[1]=component-name.nested-component-name`| [Populate components](/cms/api/rest/guides/understanding-populate#populate-components) |
| Populate a dynamic zone (only its first-level elements) | `populate[0]=dynamic-zone-name`| [Populate dynamic zones](/cms/api/rest/guides/understanding-populate#populate-dynamic-zones) |
| Populate a dynamic zone and its nested elements and relations, using a precisely defined, detailed population strategy | `populate[dynamic-zone-name][on][component-category.component-name][populate][relation-name][populate][0]=field-name`| [Populate dynamic zones](/cms/api/rest/guides/understanding-populate#populate-dynamic-zones) |

To build complex queries with multiple-level population, use the [interactive query builder](/cms/api/rest/interactive-query-builder) tool. For more detailed explanations and examples, see the [REST API guides](/cms/api/rest/guides/intro).

### Combining population with other operators

You can combine the `populate` operator with other operators such as [field selection](/cms/api/rest/populate-select#field-selection), [filters](/cms/api/rest/filters), and [sort](/cms/api/rest/sort-pagination) in the population queries.

The population and pagination operators cannot be combined.

#### Populate with field selection

`fields` and `populate` can be combined.

#### Populate with filtering

`filters` and `populate` can be combined.

# Relations

Source: //cms/api/rest/relations
