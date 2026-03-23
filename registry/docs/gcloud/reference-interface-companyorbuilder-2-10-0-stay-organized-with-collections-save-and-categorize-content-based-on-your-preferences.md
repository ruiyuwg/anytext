-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CompanyOrBuilder (2.10.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public interface CompanyOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCareerSiteUri()

```
public abstract String getCareerSiteUri()
```

The URI to employer's career site or careers page on the employer's web site, for example, "[https://careers.google.com](https://careers.google.com)".

`string career_site_uri = 9;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The careerSiteUri.

### getCareerSiteUriBytes()

```
public abstract ByteString getCareerSiteUriBytes()
```

The URI to employer's career site or careers page on the employer's web site, for example, "[https://careers.google.com](https://careers.google.com)".

`string career_site_uri = 9;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for careerSiteUri.

### getDerivedInfo()

```
public abstract Company.DerivedInfo getDerivedInfo()
```

Output only. Derived details about the company.

`.google.cloud.talent.v4.Company.DerivedInfo derived_info = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Company.DerivedInfo](/java/docs/reference/google-cloud-talent/2.10.0/com.google.cloud.talent.v4.Company.DerivedInfo)`

The derivedInfo.

### getDerivedInfoOrBuilder()

```
public abstract Company.DerivedInfoOrBuilder getDerivedInfoOrBuilder()
```

Output only. Derived details about the company.

`.google.cloud.talent.v4.Company.DerivedInfo derived_info = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Company.DerivedInfoOrBuilder](/java/docs/reference/google-cloud-talent/2.10.0/com.google.cloud.talent.v4.Company.DerivedInfoOrBuilder)`

### getDisplayName()

```
public abstract String getDisplayName()
```

Required. The display name of the company, for example, "Google LLC".

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

Required. The display name of the company, for example, "Google LLC".

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getEeoText()

```
public abstract String getEeoText()
```

Equal Employment Opportunity legal disclaimer text to be associated with all jobs, and typically to be displayed in all roles. The maximum number of allowed characters is 500.

`string eeo_text = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The eeoText.

### getEeoTextBytes()

```
public abstract ByteString getEeoTextBytes()
```

Equal Employment Opportunity legal disclaimer text to be associated with all jobs, and typically to be displayed in all roles. The maximum number of allowed characters is 500.

`string eeo_text = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for eeoText.

### getExternalId()

```
public abstract String getExternalId()
```

Required. Client side company identifier, used to uniquely identify the company. The maximum number of allowed characters is 255.

`string external_id = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The externalId.

### getExternalIdBytes()

```
public abstract ByteString getExternalIdBytes()
```

Required. Client side company identifier, used to uniquely identify the company. The maximum number of allowed characters is 255.

`string external_id = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for externalId.

### getHeadquartersAddress()

```
public abstract String getHeadquartersAddress()
```

The street address of the company's main headquarters, which may be different from the job location. The service attempts to geolocate the provided address, and populates a more specific location wherever possible in DerivedInfo.headquarters\_location.

`string headquarters_address = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The headquartersAddress.

### getHeadquartersAddressBytes()

```
public abstract ByteString getHeadquartersAddressBytes()
```

The street address of the company's main headquarters, which may be different from the job location. The service attempts to geolocate the provided address, and populates a more specific location wherever possible in DerivedInfo.headquarters\_location.

`string headquarters_address = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for headquartersAddress.

### getHiringAgency()

```
public abstract boolean getHiringAgency()
```

Set to true if it is the hiring agency that post jobs for other employers. Defaults to false if not provided.

`bool hiring_agency = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The hiringAgency.

### getImageUri()

```
public abstract String getImageUri()
```

A URI that hosts the employer's company logo.

`string image_uri = 10;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The imageUri.

### getImageUriBytes()

```
public abstract ByteString getImageUriBytes()
```

A URI that hosts the employer's company logo.

`string image_uri = 10;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for imageUri.

### getKeywordSearchableJobCustomAttributes(int index) (deprecated)

```
public abstract String getKeywordSearchableJobCustomAttributes(int index)
```

**Deprecated.** _google.cloud.talent.v4.Company.keyword\_searchable\_job\_custom\_attributes is deprecated. See google/cloud/talent/v4/company.proto;l=112_

This field is deprecated. Please set the searchability of the custom attribute in the Job.custom\_attributes going forward. A list of keys of filterable Job.custom\_attributes, whose corresponding `string_values` are used in keyword searches. Jobs with `string_values` under these specified field keys are returned if any of the values match the search keyword. Custom field values with parenthesis, brackets and special symbols are not searchable as-is, and those keyword queries must be surrounded by quotes.

`repeated string keyword_searchable_job_custom_attributes = 11 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The keywordSearchableJobCustomAttributes at the given index.

### getKeywordSearchableJobCustomAttributesBytes(int index) (deprecated)

```
public abstract ByteString getKeywordSearchableJobCustomAttributesBytes(int index)
```

**Deprecated.** _google.cloud.talent.v4.Company.keyword\_searchable\_job\_custom\_attributes is deprecated. See google/cloud/talent/v4/company.proto;l=112_

This field is deprecated. Please set the searchability of the custom attribute in the Job.custom\_attributes going forward. A list of keys of filterable Job.custom\_attributes, whose corresponding `string_values` are used in keyword searches. Jobs with `string_values` under these specified field keys are returned if any of the values match the search keyword. Custom field values with parenthesis, brackets and special symbols are not searchable as-is, and those keyword queries must be surrounded by quotes.

`repeated string keyword_searchable_job_custom_attributes = 11 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the keywordSearchableJobCustomAttributes at the given index.

### getKeywordSearchableJobCustomAttributesCount() (deprecated)

```
public abstract int getKeywordSearchableJobCustomAttributesCount()
```

**Deprecated.** _google.cloud.talent.v4.Company.keyword\_searchable\_job\_custom\_attributes is deprecated. See google/cloud/talent/v4/company.proto;l=112_

This field is deprecated. Please set the searchability of the custom attribute in the Job.custom\_attributes going forward. A list of keys of filterable Job.custom\_attributes, whose corresponding `string_values` are used in keyword searches. Jobs with `string_values` under these specified field keys are returned if any of the values match the search keyword. Custom field values with parenthesis, brackets and special symbols are not searchable as-is, and those keyword queries must be surrounded by quotes.

`repeated string keyword_searchable_job_custom_attributes = 11 [deprecated = true];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of keywordSearchableJobCustomAttributes.

### getKeywordSearchableJobCustomAttributesList() (deprecated)

```
public abstract List<String> getKeywordSearchableJobCustomAttributesList()
```

**Deprecated.** _google.cloud.talent.v4.Company.keyword\_searchable\_job\_custom\_attributes is deprecated. See google/cloud/talent/v4/company.proto;l=112_

This field is deprecated. Please set the searchability of the custom attribute in the Job.custom\_attributes going forward. A list of keys of filterable Job.custom\_attributes, whose corresponding `string_values` are used in keyword searches. Jobs with `string_values` under these specified field keys are returned if any of the values match the search keyword. Custom field values with parenthesis, brackets and special symbols are not searchable as-is, and those keyword queries must be surrounded by quotes.

`repeated string keyword_searchable_job_custom_attributes = 11 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the keywordSearchableJobCustomAttributes.

### getName()

```
public abstract String getName()
```

Required during company update. The resource name for a company. This is generated by the service when a company is created. The format is "projects/{project\_id}/tenants/{tenant\_id}/companies/{company\_id}", for example, "projects/foo/tenants/bar/companies/baz".

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Required during company update. The resource name for a company. This is generated by the service when a company is created. The format is "projects/{project\_id}/tenants/{tenant\_id}/companies/{company\_id}", for example, "projects/foo/tenants/bar/companies/baz".

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getSize()

```
public abstract CompanySize getSize()
```

The employer's company size.

`.google.cloud.talent.v4.CompanySize size = 4;`

**Returns**

**Type**

**Description**

`[CompanySize](/java/docs/reference/google-cloud-talent/2.10.0/com.google.cloud.talent.v4.CompanySize)`

The size.

### getSizeValue()

```
public abstract int getSizeValue()
```

The employer's company size.

`.google.cloud.talent.v4.CompanySize size = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for size.

### getSuspended()

```
public abstract boolean getSuspended()
```

Output only. Indicates whether a company is flagged to be suspended from public availability by the service when job content appears suspicious, abusive, or spammy.

`bool suspended = 13 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The suspended.

### getWebsiteUri()

```
public abstract String getWebsiteUri()
```

The URI representing the company's primary web site or home page, for example, "[https://www.google.com](https://www.google.com)". The maximum number of allowed characters is 255.

`string website_uri = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The websiteUri.

### getWebsiteUriBytes()

```
public abstract ByteString getWebsiteUriBytes()
```

The URI representing the company's primary web site or home page, for example, "[https://www.google.com](https://www.google.com)". The maximum number of allowed characters is 255.

`string website_uri = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for websiteUri.

### hasDerivedInfo()

```
public abstract boolean hasDerivedInfo()
```

Output only. Derived details about the company.

`.google.cloud.talent.v4.Company.DerivedInfo derived_info = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the derivedInfo field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
