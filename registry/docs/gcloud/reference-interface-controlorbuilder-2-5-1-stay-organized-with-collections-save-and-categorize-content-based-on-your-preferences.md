-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ControlOrBuilder (2.5.1) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface ControlOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAssociatedServingConfigIds(int index)

```
public abstract String getAssociatedServingConfigIds(int index)
```

Output only. List of serving configuration ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view.

`repeated string associated_serving_config_ids = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The associatedServingConfigIds at the given index.

### getAssociatedServingConfigIdsBytes(int index)

```
public abstract ByteString getAssociatedServingConfigIdsBytes(int index)
```

Output only. List of serving configuration ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view.

`repeated string associated_serving_config_ids = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the associatedServingConfigIds at the given index.

### getAssociatedServingConfigIdsCount()

```
public abstract int getAssociatedServingConfigIdsCount()
```

Output only. List of serving configuration ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view.

`repeated string associated_serving_config_ids = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of associatedServingConfigIds.

### getAssociatedServingConfigIdsList()

```
public abstract List<String> getAssociatedServingConfigIdsList()
```

Output only. List of serving configuration ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view.

`repeated string associated_serving_config_ids = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

A list containing the associatedServingConfigIds.

### getControlCase()

```
public abstract Control.ControlCase getControlCase()
```

**Returns**

**Type**

**Description**

[Control.ControlCase](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2.Control.ControlCase)

### getDisplayName()

```
public abstract String getDisplayName()
```

Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is thrown.

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is thrown.

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for displayName.

### getName()

```
public abstract String getName()
```

Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/controls/*`

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/controls/*`

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for name.

### getRule()

```
public abstract Rule getRule()
```

A rule control - a condition-action pair. Enacts a set action when the condition is triggered. For example: Boost "gShoe" when query full matches "Running Shoes".

`.google.cloud.retail.v2.Rule rule = 4;`

**Returns**

**Type**

**Description**

[Rule](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2.Rule)

The rule.

### getRuleOrBuilder()

```
public abstract RuleOrBuilder getRuleOrBuilder()
```

A rule control - a condition-action pair. Enacts a set action when the condition is triggered. For example: Boost "gShoe" when query full matches "Running Shoes".

`.google.cloud.retail.v2.Rule rule = 4;`

**Returns**

**Type**

**Description**

[RuleOrBuilder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2.RuleOrBuilder)

### getSearchSolutionUseCase(int index)

```
public abstract SearchSolutionUseCase getSearchSolutionUseCase(int index)
```

Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH\_SOLUTION\_USE\_CASE\_SEARCH if not specified. Currently only allow one search\_solution\_use\_case per control.

`repeated .google.cloud.retail.v2.SearchSolutionUseCase search_solution_use_case = 7;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[SearchSolutionUseCase](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2.SearchSolutionUseCase)

The searchSolutionUseCase at the given index.

### getSearchSolutionUseCaseCount()

```
public abstract int getSearchSolutionUseCaseCount()
```

Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH\_SOLUTION\_USE\_CASE\_SEARCH if not specified. Currently only allow one search\_solution\_use\_case per control.

`repeated .google.cloud.retail.v2.SearchSolutionUseCase search_solution_use_case = 7;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of searchSolutionUseCase.

### getSearchSolutionUseCaseList()

```
public abstract List<SearchSolutionUseCase> getSearchSolutionUseCaseList()
```

Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH\_SOLUTION\_USE\_CASE\_SEARCH if not specified. Currently only allow one search\_solution\_use\_case per control.

`repeated .google.cloud.retail.v2.SearchSolutionUseCase search_solution_use_case = 7;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SearchSolutionUseCase](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2.SearchSolutionUseCase)\>

A list containing the searchSolutionUseCase.

### getSearchSolutionUseCaseValue(int index)

```
public abstract int getSearchSolutionUseCaseValue(int index)
```

Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH\_SOLUTION\_USE\_CASE\_SEARCH if not specified. Currently only allow one search\_solution\_use\_case per control.

`repeated .google.cloud.retail.v2.SearchSolutionUseCase search_solution_use_case = 7;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The enum numeric value on the wire of searchSolutionUseCase at the given index.

### getSearchSolutionUseCaseValueList()

```
public abstract List<Integer> getSearchSolutionUseCaseValueList()
```

Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH\_SOLUTION\_USE\_CASE\_SEARCH if not specified. Currently only allow one search\_solution\_use\_case per control.

`repeated .google.cloud.retail.v2.SearchSolutionUseCase search_solution_use_case = 7;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)\>

A list containing the enum numeric values on the wire for searchSolutionUseCase.

### getSolutionTypes(int index)

```
public abstract SolutionType getSolutionTypes(int index)
```

Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION\_TYPE\_SEARCH.

`repeated .google.cloud.retail.v2.SolutionType solution_types = 6 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[SolutionType](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2.SolutionType)

The solutionTypes at the given index.

### getSolutionTypesCount()

```
public abstract int getSolutionTypesCount()
```

Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION\_TYPE\_SEARCH.

`repeated .google.cloud.retail.v2.SolutionType solution_types = 6 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of solutionTypes.

### getSolutionTypesList()

```
public abstract List<SolutionType> getSolutionTypesList()
```

Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION\_TYPE\_SEARCH.

`repeated .google.cloud.retail.v2.SolutionType solution_types = 6 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SolutionType](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2.SolutionType)\>

A list containing the solutionTypes.

### getSolutionTypesValue(int index)

```
public abstract int getSolutionTypesValue(int index)
```

Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION\_TYPE\_SEARCH.

`repeated .google.cloud.retail.v2.SolutionType solution_types = 6 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The enum numeric value on the wire of solutionTypes at the given index.

### getSolutionTypesValueList()

```
public abstract List<Integer> getSolutionTypesValueList()
```

Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION\_TYPE\_SEARCH.

`repeated .google.cloud.retail.v2.SolutionType solution_types = 6 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)\>

A list containing the enum numeric values on the wire for solutionTypes.

### hasRule()

```
public abstract boolean hasRule()
```

A rule control - a condition-action pair. Enacts a set action when the condition is triggered. For example: Boost "gShoe" when query full matches "Running Shoes".

`.google.cloud.retail.v2.Rule rule = 4;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the rule field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
