-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface InspectConfig.FindingLimitsOrBuilder (3.91.0) Stay organized with collections Save and categorize content based on your preferences.

3.91.0 (latest) 3.89.0 3.87.0 3.86.0 3.85.0 3.84.0 3.82.0 3.80.0 3.79.0 3.78.0 3.77.0 3.76.0 3.74.0 3.72.0 3.71.0 3.68.0 3.67.0 3.66.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.6 3.6.7 3.5.0 3.4.0 3.3.2 3.2.1 3.1.4

```
public static interface InspectConfig.FindingLimitsOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getMaxFindingsPerInfoType(int index)

```
public abstract InspectConfig.FindingLimits.InfoTypeLimit getMaxFindingsPerInfoType(int index)
```

Configuration of findings limit given for specified infoTypes.

`repeated .google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimit max_findings_per_info_type = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InspectConfig.FindingLimits.InfoTypeLimit](/java/docs/reference/google-cloud-dlp/latest/com.google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimit)`

### getMaxFindingsPerInfoTypeCount()

```
public abstract int getMaxFindingsPerInfoTypeCount()
```

Configuration of findings limit given for specified infoTypes.

`repeated .google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimit max_findings_per_info_type = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMaxFindingsPerInfoTypeList()

```
public abstract List<InspectConfig.FindingLimits.InfoTypeLimit> getMaxFindingsPerInfoTypeList()
```

Configuration of findings limit given for specified infoTypes.

`repeated .google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimit max_findings_per_info_type = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[InfoTypeLimit](/java/docs/reference/google-cloud-dlp/latest/com.google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimit)>`

### getMaxFindingsPerInfoTypeOrBuilder(int index)

```
public abstract InspectConfig.FindingLimits.InfoTypeLimitOrBuilder getMaxFindingsPerInfoTypeOrBuilder(int index)
```

Configuration of findings limit given for specified infoTypes.

`repeated .google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimit max_findings_per_info_type = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InspectConfig.FindingLimits.InfoTypeLimitOrBuilder](/java/docs/reference/google-cloud-dlp/latest/com.google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimitOrBuilder)`

### getMaxFindingsPerInfoTypeOrBuilderList()

```
public abstract List<? extends InspectConfig.FindingLimits.InfoTypeLimitOrBuilder> getMaxFindingsPerInfoTypeOrBuilderList()
```

Configuration of findings limit given for specified infoTypes.

`repeated .google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimit max_findings_per_info_type = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimitOrBuilder>`

### getMaxFindingsPerItem()

```
public abstract int getMaxFindingsPerItem()
```

Max number of findings that are returned for each item scanned.

When set within an InspectContentRequest, this field is ignored.

This value isn't a hard limit. If the number of findings for an item reaches this limit, the inspection of that item ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns for the item can be multiple times higher than this value.

`int32 max_findings_per_item = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The maxFindingsPerItem.

### getMaxFindingsPerRequest()

```
public abstract int getMaxFindingsPerRequest()
```

Max number of findings that are returned per request or job.

If you set this field in an InspectContentRequest, the resulting maximum value is the value that you set or 3,000, whichever is lower.

This value isn't a hard limit. If an inspection reaches this limit, the inspection ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than this value.

`int32 max_findings_per_request = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The maxFindingsPerRequest.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
