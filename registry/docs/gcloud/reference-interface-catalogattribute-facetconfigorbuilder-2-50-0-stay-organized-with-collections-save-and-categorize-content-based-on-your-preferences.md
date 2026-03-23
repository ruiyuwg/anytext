-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CatalogAttribute.FacetConfigOrBuilder (2.50.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static interface CatalogAttribute.FacetConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFacetIntervals(int index)

```
public abstract Interval getFacetIntervals(int index)
```

If you don't set the facet SearchRequest.FacetSpec.FacetKey.intervals in the request to a numerical attribute, then we use the computed intervals with rounded bounds obtained from all its product numerical attribute values. The computed intervals might not be ideal for some attributes. Therefore, we give you the option to overwrite them with the facet\_intervals field. The maximum of facet intervals per CatalogAttribute is 40. Each interval must have a lower bound or an upper bound. If both bounds are provided, then the lower bound must be smaller or equal than the upper bound.

`repeated .google.cloud.retail.v2alpha.Interval facet_intervals = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Interval](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.Interval)`

### getFacetIntervalsCount()

```
public abstract int getFacetIntervalsCount()
```

If you don't set the facet SearchRequest.FacetSpec.FacetKey.intervals in the request to a numerical attribute, then we use the computed intervals with rounded bounds obtained from all its product numerical attribute values. The computed intervals might not be ideal for some attributes. Therefore, we give you the option to overwrite them with the facet\_intervals field. The maximum of facet intervals per CatalogAttribute is 40. Each interval must have a lower bound or an upper bound. If both bounds are provided, then the lower bound must be smaller or equal than the upper bound.

`repeated .google.cloud.retail.v2alpha.Interval facet_intervals = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFacetIntervalsList()

```
public abstract List<Interval> getFacetIntervalsList()
```

If you don't set the facet SearchRequest.FacetSpec.FacetKey.intervals in the request to a numerical attribute, then we use the computed intervals with rounded bounds obtained from all its product numerical attribute values. The computed intervals might not be ideal for some attributes. Therefore, we give you the option to overwrite them with the facet\_intervals field. The maximum of facet intervals per CatalogAttribute is 40. Each interval must have a lower bound or an upper bound. If both bounds are provided, then the lower bound must be smaller or equal than the upper bound.

`repeated .google.cloud.retail.v2alpha.Interval facet_intervals = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Interval](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.Interval)>`

### getFacetIntervalsOrBuilder(int index)

```
public abstract IntervalOrBuilder getFacetIntervalsOrBuilder(int index)
```

If you don't set the facet SearchRequest.FacetSpec.FacetKey.intervals in the request to a numerical attribute, then we use the computed intervals with rounded bounds obtained from all its product numerical attribute values. The computed intervals might not be ideal for some attributes. Therefore, we give you the option to overwrite them with the facet\_intervals field. The maximum of facet intervals per CatalogAttribute is 40. Each interval must have a lower bound or an upper bound. If both bounds are provided, then the lower bound must be smaller or equal than the upper bound.

`repeated .google.cloud.retail.v2alpha.Interval facet_intervals = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[IntervalOrBuilder](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.IntervalOrBuilder)`

### getFacetIntervalsOrBuilderList()

```
public abstract List<? extends IntervalOrBuilder> getFacetIntervalsOrBuilderList()
```

If you don't set the facet SearchRequest.FacetSpec.FacetKey.intervals in the request to a numerical attribute, then we use the computed intervals with rounded bounds obtained from all its product numerical attribute values. The computed intervals might not be ideal for some attributes. Therefore, we give you the option to overwrite them with the facet\_intervals field. The maximum of facet intervals per CatalogAttribute is 40. Each interval must have a lower bound or an upper bound. If both bounds are provided, then the lower bound must be smaller or equal than the upper bound.

`repeated .google.cloud.retail.v2alpha.Interval facet_intervals = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2alpha.IntervalOrBuilder>`

### getIgnoredFacetValues(int index)

```
public abstract CatalogAttribute.FacetConfig.IgnoredFacetValues getIgnoredFacetValues(int index)
```

Each instance represents a list of attribute values to ignore as facet values for a specific time range. The maximum number of instances per CatalogAttribute is 25.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.IgnoredFacetValues ignored_facet_values = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CatalogAttribute.FacetConfig.IgnoredFacetValues](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.IgnoredFacetValues)`

### getIgnoredFacetValuesCount()

```
public abstract int getIgnoredFacetValuesCount()
```

Each instance represents a list of attribute values to ignore as facet values for a specific time range. The maximum number of instances per CatalogAttribute is 25.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.IgnoredFacetValues ignored_facet_values = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getIgnoredFacetValuesList()

```
public abstract List<CatalogAttribute.FacetConfig.IgnoredFacetValues> getIgnoredFacetValuesList()
```

Each instance represents a list of attribute values to ignore as facet values for a specific time range. The maximum number of instances per CatalogAttribute is 25.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.IgnoredFacetValues ignored_facet_values = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[IgnoredFacetValues](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.IgnoredFacetValues)>`

### getIgnoredFacetValuesOrBuilder(int index)

```
public abstract CatalogAttribute.FacetConfig.IgnoredFacetValuesOrBuilder getIgnoredFacetValuesOrBuilder(int index)
```

Each instance represents a list of attribute values to ignore as facet values for a specific time range. The maximum number of instances per CatalogAttribute is 25.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.IgnoredFacetValues ignored_facet_values = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CatalogAttribute.FacetConfig.IgnoredFacetValuesOrBuilder](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.IgnoredFacetValuesOrBuilder)`

### getIgnoredFacetValuesOrBuilderList()

```
public abstract List<? extends CatalogAttribute.FacetConfig.IgnoredFacetValuesOrBuilder> getIgnoredFacetValuesOrBuilderList()
```

Each instance represents a list of attribute values to ignore as facet values for a specific time range. The maximum number of instances per CatalogAttribute is 25.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.IgnoredFacetValues ignored_facet_values = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.IgnoredFacetValuesOrBuilder>`

### getMergedFacet()

```
public abstract CatalogAttribute.FacetConfig.MergedFacet getMergedFacet()
```

Use this field only if you want to merge a facet key into another facet key.

`.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacet merged_facet = 4;`

**Returns**

**Type**

**Description**

`[CatalogAttribute.FacetConfig.MergedFacet](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacet)`

The mergedFacet.

### getMergedFacetOrBuilder()

```
public abstract CatalogAttribute.FacetConfig.MergedFacetOrBuilder getMergedFacetOrBuilder()
```

Use this field only if you want to merge a facet key into another facet key.

`.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacet merged_facet = 4;`

**Returns**

**Type**

**Description**

`[CatalogAttribute.FacetConfig.MergedFacetOrBuilder](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetOrBuilder)`

### getMergedFacetValues(int index)

```
public abstract CatalogAttribute.FacetConfig.MergedFacetValue getMergedFacetValues(int index)
```

Each instance replaces a list of facet values by a merged facet value. If a facet value is not in any list, then it will stay the same. To avoid conflicts, only paths of length 1 are accepted. In other words, if "dark\_blue" merged into "BLUE", then the latter can't merge into "blues" because this would create a path of length 2. The maximum number of instances of MergedFacetValue per CatalogAttribute is 100. This feature is available only for textual custom attributes.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetValue merged_facet_values = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CatalogAttribute.FacetConfig.MergedFacetValue](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetValue)`

### getMergedFacetValuesCount()

```
public abstract int getMergedFacetValuesCount()
```

Each instance replaces a list of facet values by a merged facet value. If a facet value is not in any list, then it will stay the same. To avoid conflicts, only paths of length 1 are accepted. In other words, if "dark\_blue" merged into "BLUE", then the latter can't merge into "blues" because this would create a path of length 2. The maximum number of instances of MergedFacetValue per CatalogAttribute is 100. This feature is available only for textual custom attributes.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetValue merged_facet_values = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMergedFacetValuesList()

```
public abstract List<CatalogAttribute.FacetConfig.MergedFacetValue> getMergedFacetValuesList()
```

Each instance replaces a list of facet values by a merged facet value. If a facet value is not in any list, then it will stay the same. To avoid conflicts, only paths of length 1 are accepted. In other words, if "dark\_blue" merged into "BLUE", then the latter can't merge into "blues" because this would create a path of length 2. The maximum number of instances of MergedFacetValue per CatalogAttribute is 100. This feature is available only for textual custom attributes.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetValue merged_facet_values = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[MergedFacetValue](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetValue)>`

### getMergedFacetValuesOrBuilder(int index)

```
public abstract CatalogAttribute.FacetConfig.MergedFacetValueOrBuilder getMergedFacetValuesOrBuilder(int index)
```

Each instance replaces a list of facet values by a merged facet value. If a facet value is not in any list, then it will stay the same. To avoid conflicts, only paths of length 1 are accepted. In other words, if "dark\_blue" merged into "BLUE", then the latter can't merge into "blues" because this would create a path of length 2. The maximum number of instances of MergedFacetValue per CatalogAttribute is 100. This feature is available only for textual custom attributes.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetValue merged_facet_values = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CatalogAttribute.FacetConfig.MergedFacetValueOrBuilder](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetValueOrBuilder)`

### getMergedFacetValuesOrBuilderList()

```
public abstract List<? extends CatalogAttribute.FacetConfig.MergedFacetValueOrBuilder> getMergedFacetValuesOrBuilderList()
```

Each instance replaces a list of facet values by a merged facet value. If a facet value is not in any list, then it will stay the same. To avoid conflicts, only paths of length 1 are accepted. In other words, if "dark\_blue" merged into "BLUE", then the latter can't merge into "blues" because this would create a path of length 2. The maximum number of instances of MergedFacetValue per CatalogAttribute is 100. This feature is available only for textual custom attributes.

`repeated .google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetValue merged_facet_values = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacetValueOrBuilder>`

### getRerankConfig()

```
public abstract CatalogAttribute.FacetConfig.RerankConfig getRerankConfig()
```

Set this field only if you want to rerank based on facet values engaged by the user for the current key. This option is only possible for custom facetable textual keys.

`.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.RerankConfig rerank_config = 5;`

**Returns**

**Type**

**Description**

`[CatalogAttribute.FacetConfig.RerankConfig](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.RerankConfig)`

The rerankConfig.

### getRerankConfigOrBuilder()

```
public abstract CatalogAttribute.FacetConfig.RerankConfigOrBuilder getRerankConfigOrBuilder()
```

Set this field only if you want to rerank based on facet values engaged by the user for the current key. This option is only possible for custom facetable textual keys.

`.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.RerankConfig rerank_config = 5;`

**Returns**

**Type**

**Description**

`[CatalogAttribute.FacetConfig.RerankConfigOrBuilder](/java/docs/reference/google-cloud-retail/2.50.0/com.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.RerankConfigOrBuilder)`

### hasMergedFacet()

```
public abstract boolean hasMergedFacet()
```

Use this field only if you want to merge a facet key into another facet key.

`.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.MergedFacet merged_facet = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the mergedFacet field is set.

### hasRerankConfig()

```
public abstract boolean hasRerankConfig()
```

Set this field only if you want to rerank based on facet values engaged by the user for the current key. This option is only possible for custom facetable textual keys.

`.google.cloud.retail.v2alpha.CatalogAttribute.FacetConfig.RerankConfig rerank_config = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the rerankConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
