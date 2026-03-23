-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface JobQueryOrBuilder (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public interface JobQueryOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCommuteFilter()

```
public abstract CommuteFilter getCommuteFilter()
```

Allows filtering jobs by commute time with different travel methods (for example, driving or public transit).

Note: This only works when you specify a CommuteMethod. In this case, location\_filters is ignored.

Currently we don't support sorting by commute time.

`.google.cloud.talent.v4.CommuteFilter commute_filter = 5;`

**Returns**

**Type**

**Description**

`[CommuteFilter](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.CommuteFilter)`

The commuteFilter.

### getCommuteFilterOrBuilder()

```
public abstract CommuteFilterOrBuilder getCommuteFilterOrBuilder()
```

Allows filtering jobs by commute time with different travel methods (for example, driving or public transit).

Note: This only works when you specify a CommuteMethod. In this case, location\_filters is ignored.

Currently we don't support sorting by commute time.

`.google.cloud.talent.v4.CommuteFilter commute_filter = 5;`

**Returns**

**Type**

**Description**

`[CommuteFilterOrBuilder](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.CommuteFilterOrBuilder)`

### getCompanies(int index)

```
public abstract String getCompanies(int index)
```

This filter specifies the company entities to search against.

If a value isn't specified, jobs are searched for against all companies.

If multiple values are specified, jobs are searched against the companies specified.

The format is "projects/{project\_id}/tenants/{tenant\_id}/companies/{company\_id}". For example, "projects/foo/tenants/bar/companies/baz".

At most 20 company filters are allowed.

`repeated string companies = 2;`

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

The companies at the given index.

### getCompaniesBytes(int index)

```
public abstract ByteString getCompaniesBytes(int index)
```

This filter specifies the company entities to search against.

If a value isn't specified, jobs are searched for against all companies.

If multiple values are specified, jobs are searched against the companies specified.

The format is "projects/{project\_id}/tenants/{tenant\_id}/companies/{company\_id}". For example, "projects/foo/tenants/bar/companies/baz".

At most 20 company filters are allowed.

`repeated string companies = 2;`

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

The bytes of the companies at the given index.

### getCompaniesCount()

```
public abstract int getCompaniesCount()
```

This filter specifies the company entities to search against.

If a value isn't specified, jobs are searched for against all companies.

If multiple values are specified, jobs are searched against the companies specified.

The format is "projects/{project\_id}/tenants/{tenant\_id}/companies/{company\_id}". For example, "projects/foo/tenants/bar/companies/baz".

At most 20 company filters are allowed.

`repeated string companies = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of companies.

### getCompaniesList()

```
public abstract List<String> getCompaniesList()
```

This filter specifies the company entities to search against.

If a value isn't specified, jobs are searched for against all companies.

If multiple values are specified, jobs are searched against the companies specified.

The format is "projects/{project\_id}/tenants/{tenant\_id}/companies/{company\_id}". For example, "projects/foo/tenants/bar/companies/baz".

At most 20 company filters are allowed.

`repeated string companies = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the companies.

### getCompanyDisplayNames(int index)

```
public abstract String getCompanyDisplayNames(int index)
```

This filter specifies the company Company.display\_name of the jobs to search against. The company name must match the value exactly.

Alternatively, the value being searched for can be wrapped in different match operators. `SUBSTRING_MATCH([value])` The company name must contain a case insensitive substring match of the value. Using this function may increase latency.

Sample Value: `SUBSTRING_MATCH(google)`

`MULTI_WORD_TOKEN_MATCH([value])` The value will be treated as a multi word token and the company name must contain a case insensitive match of the value. Using this function may increase latency.

Sample Value: `MULTI_WORD_TOKEN_MATCH(google)`

If a value isn't specified, jobs within the search results are associated with any company.

If multiple values are specified, jobs within the search results may be associated with any of the specified companies.

At most 20 company display name filters are allowed.

`repeated string company_display_names = 6;`

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

The companyDisplayNames at the given index.

### getCompanyDisplayNamesBytes(int index)

```
public abstract ByteString getCompanyDisplayNamesBytes(int index)
```

This filter specifies the company Company.display\_name of the jobs to search against. The company name must match the value exactly.

Alternatively, the value being searched for can be wrapped in different match operators. `SUBSTRING_MATCH([value])` The company name must contain a case insensitive substring match of the value. Using this function may increase latency.

Sample Value: `SUBSTRING_MATCH(google)`

`MULTI_WORD_TOKEN_MATCH([value])` The value will be treated as a multi word token and the company name must contain a case insensitive match of the value. Using this function may increase latency.

Sample Value: `MULTI_WORD_TOKEN_MATCH(google)`

If a value isn't specified, jobs within the search results are associated with any company.

If multiple values are specified, jobs within the search results may be associated with any of the specified companies.

At most 20 company display name filters are allowed.

`repeated string company_display_names = 6;`

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

The bytes of the companyDisplayNames at the given index.

### getCompanyDisplayNamesCount()

```
public abstract int getCompanyDisplayNamesCount()
```

This filter specifies the company Company.display\_name of the jobs to search against. The company name must match the value exactly.

Alternatively, the value being searched for can be wrapped in different match operators. `SUBSTRING_MATCH([value])` The company name must contain a case insensitive substring match of the value. Using this function may increase latency.

Sample Value: `SUBSTRING_MATCH(google)`

`MULTI_WORD_TOKEN_MATCH([value])` The value will be treated as a multi word token and the company name must contain a case insensitive match of the value. Using this function may increase latency.

Sample Value: `MULTI_WORD_TOKEN_MATCH(google)`

If a value isn't specified, jobs within the search results are associated with any company.

If multiple values are specified, jobs within the search results may be associated with any of the specified companies.

At most 20 company display name filters are allowed.

`repeated string company_display_names = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of companyDisplayNames.

### getCompanyDisplayNamesList()

```
public abstract List<String> getCompanyDisplayNamesList()
```

This filter specifies the company Company.display\_name of the jobs to search against. The company name must match the value exactly.

Alternatively, the value being searched for can be wrapped in different match operators. `SUBSTRING_MATCH([value])` The company name must contain a case insensitive substring match of the value. Using this function may increase latency.

Sample Value: `SUBSTRING_MATCH(google)`

`MULTI_WORD_TOKEN_MATCH([value])` The value will be treated as a multi word token and the company name must contain a case insensitive match of the value. Using this function may increase latency.

Sample Value: `MULTI_WORD_TOKEN_MATCH(google)`

If a value isn't specified, jobs within the search results are associated with any company.

If multiple values are specified, jobs within the search results may be associated with any of the specified companies.

At most 20 company display name filters are allowed.

`repeated string company_display_names = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the companyDisplayNames.

### getCompensationFilter()

```
public abstract CompensationFilter getCompensationFilter()
```

This search filter is applied only to Job.compensation\_info. For example, if the filter is specified as "Hourly job with per-hour compensation > $15", only jobs meeting these criteria are searched. If a filter isn't defined, all open jobs are searched.

`.google.cloud.talent.v4.CompensationFilter compensation_filter = 7;`

**Returns**

**Type**

**Description**

`[CompensationFilter](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.CompensationFilter)`

The compensationFilter.

### getCompensationFilterOrBuilder()

```
public abstract CompensationFilterOrBuilder getCompensationFilterOrBuilder()
```

This search filter is applied only to Job.compensation\_info. For example, if the filter is specified as "Hourly job with per-hour compensation > $15", only jobs meeting these criteria are searched. If a filter isn't defined, all open jobs are searched.

`.google.cloud.talent.v4.CompensationFilter compensation_filter = 7;`

**Returns**

**Type**

**Description**

`[CompensationFilterOrBuilder](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.CompensationFilterOrBuilder)`

### getCustomAttributeFilter()

```
public abstract String getCustomAttributeFilter()
```

This filter specifies a structured syntax to match against the Job.custom\_attributes marked as `filterable`.

The syntax for this expression is a subset of SQL syntax.

Supported operators are: `=`, `!=`, `<`, `<=`, `>`, and `>=` where the left of the operator is a custom field key and the right of the operator is a number or a quoted string. You must escape backslash (\\\\) and quote (\\") characters.

Supported functions are `LOWER([field_name])` to perform a case insensitive match and `EMPTY([field_name])` to filter on the existence of a key.

Boolean expressions (AND/OR/NOT) are supported up to 3 levels of nesting (for example, "((A AND B AND C) OR NOT D) AND E"), a maximum of 100 comparisons or functions are allowed in the expression. The expression must be < 10000 bytes in length.

Sample Query: `(LOWER(driving_license)="class \"a\"" OR EMPTY(driving_license)) AND driving_years > 10`

`string custom_attribute_filter = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The customAttributeFilter.

### getCustomAttributeFilterBytes()

```
public abstract ByteString getCustomAttributeFilterBytes()
```

This filter specifies a structured syntax to match against the Job.custom\_attributes marked as `filterable`.

The syntax for this expression is a subset of SQL syntax.

Supported operators are: `=`, `!=`, `<`, `<=`, `>`, and `>=` where the left of the operator is a custom field key and the right of the operator is a number or a quoted string. You must escape backslash (\\\\) and quote (\\") characters.

Supported functions are `LOWER([field_name])` to perform a case insensitive match and `EMPTY([field_name])` to filter on the existence of a key.

Boolean expressions (AND/OR/NOT) are supported up to 3 levels of nesting (for example, "((A AND B AND C) OR NOT D) AND E"), a maximum of 100 comparisons or functions are allowed in the expression. The expression must be < 10000 bytes in length.

Sample Query: `(LOWER(driving_license)="class \"a\"" OR EMPTY(driving_license)) AND driving_years > 10`

`string custom_attribute_filter = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for customAttributeFilter.

### getDisableSpellCheck()

```
public abstract boolean getDisableSpellCheck()
```

This flag controls the spell-check feature. If false, the service attempts to correct a misspelled query, for example, "enginee" is corrected to "engineer".

Defaults to false: a spell check is performed.

`bool disable_spell_check = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The disableSpellCheck.

### getEmploymentTypes(int index)

```
public abstract EmploymentType getEmploymentTypes(int index)
```

The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL\_TIME.

If a value isn't specified, jobs in the search results includes any employment type.

If multiple values are specified, jobs in the search results include any of the specified employment types.

`repeated .google.cloud.talent.v4.EmploymentType employment_types = 10;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[EmploymentType](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.EmploymentType)`

The employmentTypes at the given index.

### getEmploymentTypesCount()

```
public abstract int getEmploymentTypesCount()
```

The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL\_TIME.

If a value isn't specified, jobs in the search results includes any employment type.

If multiple values are specified, jobs in the search results include any of the specified employment types.

`repeated .google.cloud.talent.v4.EmploymentType employment_types = 10;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of employmentTypes.

### getEmploymentTypesList()

```
public abstract List<EmploymentType> getEmploymentTypesList()
```

The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL\_TIME.

If a value isn't specified, jobs in the search results includes any employment type.

If multiple values are specified, jobs in the search results include any of the specified employment types.

`repeated .google.cloud.talent.v4.EmploymentType employment_types = 10;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EmploymentType](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.EmploymentType)>`

A list containing the employmentTypes.

### getEmploymentTypesValue(int index)

```
public abstract int getEmploymentTypesValue(int index)
```

The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL\_TIME.

If a value isn't specified, jobs in the search results includes any employment type.

If multiple values are specified, jobs in the search results include any of the specified employment types.

`repeated .google.cloud.talent.v4.EmploymentType employment_types = 10;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire of employmentTypes at the given index.

### getEmploymentTypesValueList()

```
public abstract List<Integer> getEmploymentTypesValueList()
```

The employment type filter specifies the employment type of jobs to search against, such as EmploymentType.FULL\_TIME.

If a value isn't specified, jobs in the search results includes any employment type.

If multiple values are specified, jobs in the search results include any of the specified employment types.

`repeated .google.cloud.talent.v4.EmploymentType employment_types = 10;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for employmentTypes.

### getExcludedJobs(int index)

```
public abstract String getExcludedJobs(int index)
```

This filter specifies a list of job names to be excluded during search.

At most 400 excluded job names are allowed.

`repeated string excluded_jobs = 13;`

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

The excludedJobs at the given index.

### getExcludedJobsBytes(int index)

```
public abstract ByteString getExcludedJobsBytes(int index)
```

This filter specifies a list of job names to be excluded during search.

At most 400 excluded job names are allowed.

`repeated string excluded_jobs = 13;`

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

The bytes of the excludedJobs at the given index.

### getExcludedJobsCount()

```
public abstract int getExcludedJobsCount()
```

This filter specifies a list of job names to be excluded during search.

At most 400 excluded job names are allowed.

`repeated string excluded_jobs = 13;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of excludedJobs.

### getExcludedJobsList()

```
public abstract List<String> getExcludedJobsList()
```

This filter specifies a list of job names to be excluded during search.

At most 400 excluded job names are allowed.

`repeated string excluded_jobs = 13;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the excludedJobs.

### getJobCategories(int index)

```
public abstract JobCategory getJobCategories(int index)
```

The category filter specifies the categories of jobs to search against. See JobCategory for more information.

If a value isn't specified, jobs from any category are searched against.

If multiple values are specified, jobs from any of the specified categories are searched against.

`repeated .google.cloud.talent.v4.JobCategory job_categories = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[JobCategory](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.JobCategory)`

The jobCategories at the given index.

### getJobCategoriesCount()

```
public abstract int getJobCategoriesCount()
```

The category filter specifies the categories of jobs to search against. See JobCategory for more information.

If a value isn't specified, jobs from any category are searched against.

If multiple values are specified, jobs from any of the specified categories are searched against.

`repeated .google.cloud.talent.v4.JobCategory job_categories = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of jobCategories.

### getJobCategoriesList()

```
public abstract List<JobCategory> getJobCategoriesList()
```

The category filter specifies the categories of jobs to search against. See JobCategory for more information.

If a value isn't specified, jobs from any category are searched against.

If multiple values are specified, jobs from any of the specified categories are searched against.

`repeated .google.cloud.talent.v4.JobCategory job_categories = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[JobCategory](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.JobCategory)>`

A list containing the jobCategories.

### getJobCategoriesValue(int index)

```
public abstract int getJobCategoriesValue(int index)
```

The category filter specifies the categories of jobs to search against. See JobCategory for more information.

If a value isn't specified, jobs from any category are searched against.

If multiple values are specified, jobs from any of the specified categories are searched against.

`repeated .google.cloud.talent.v4.JobCategory job_categories = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire of jobCategories at the given index.

### getJobCategoriesValueList()

```
public abstract List<Integer> getJobCategoriesValueList()
```

The category filter specifies the categories of jobs to search against. See JobCategory for more information.

If a value isn't specified, jobs from any category are searched against.

If multiple values are specified, jobs from any of the specified categories are searched against.

`repeated .google.cloud.talent.v4.JobCategory job_categories = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for jobCategories.

### getLanguageCodes(int index)

```
public abstract String getLanguageCodes(int index)
```

This filter specifies the locale of jobs to search against, for example, "en-US".

If a value isn't specified, the search results can contain jobs in any locale.

Language codes should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

At most 10 language code filters are allowed.

`repeated string language_codes = 11;`

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

The languageCodes at the given index.

### getLanguageCodesBytes(int index)

```
public abstract ByteString getLanguageCodesBytes(int index)
```

This filter specifies the locale of jobs to search against, for example, "en-US".

If a value isn't specified, the search results can contain jobs in any locale.

Language codes should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

At most 10 language code filters are allowed.

`repeated string language_codes = 11;`

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

The bytes of the languageCodes at the given index.

### getLanguageCodesCount()

```
public abstract int getLanguageCodesCount()
```

This filter specifies the locale of jobs to search against, for example, "en-US".

If a value isn't specified, the search results can contain jobs in any locale.

Language codes should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

At most 10 language code filters are allowed.

`repeated string language_codes = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of languageCodes.

### getLanguageCodesList()

```
public abstract List<String> getLanguageCodesList()
```

This filter specifies the locale of jobs to search against, for example, "en-US".

If a value isn't specified, the search results can contain jobs in any locale.

Language codes should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

At most 10 language code filters are allowed.

`repeated string language_codes = 11;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the languageCodes.

### getLocationFilters(int index)

```
public abstract LocationFilter getLocationFilters(int index)
```

The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information.

If a location value isn't specified, jobs fitting the other search criteria are retrieved regardless of where they're located.

If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance\_in\_miles parameter, the maximum provided distance is used for all locations.

At most 5 location filters are allowed.

`repeated .google.cloud.talent.v4.LocationFilter location_filters = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LocationFilter](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.LocationFilter)`

### getLocationFiltersCount()

```
public abstract int getLocationFiltersCount()
```

The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information.

If a location value isn't specified, jobs fitting the other search criteria are retrieved regardless of where they're located.

If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance\_in\_miles parameter, the maximum provided distance is used for all locations.

At most 5 location filters are allowed.

`repeated .google.cloud.talent.v4.LocationFilter location_filters = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLocationFiltersList()

```
public abstract List<LocationFilter> getLocationFiltersList()
```

The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information.

If a location value isn't specified, jobs fitting the other search criteria are retrieved regardless of where they're located.

If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance\_in\_miles parameter, the maximum provided distance is used for all locations.

At most 5 location filters are allowed.

`repeated .google.cloud.talent.v4.LocationFilter location_filters = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[LocationFilter](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.LocationFilter)>`

### getLocationFiltersOrBuilder(int index)

```
public abstract LocationFilterOrBuilder getLocationFiltersOrBuilder(int index)
```

The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information.

If a location value isn't specified, jobs fitting the other search criteria are retrieved regardless of where they're located.

If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance\_in\_miles parameter, the maximum provided distance is used for all locations.

At most 5 location filters are allowed.

`repeated .google.cloud.talent.v4.LocationFilter location_filters = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LocationFilterOrBuilder](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.LocationFilterOrBuilder)`

### getLocationFiltersOrBuilderList()

```
public abstract List<? extends LocationFilterOrBuilder> getLocationFiltersOrBuilderList()
```

The location filter specifies geo-regions containing the jobs to search against. See LocationFilter for more information.

If a location value isn't specified, jobs fitting the other search criteria are retrieved regardless of where they're located.

If multiple values are specified, jobs are retrieved from any of the specified locations. If different values are specified for the LocationFilter.distance\_in\_miles parameter, the maximum provided distance is used for all locations.

At most 5 location filters are allowed.

`repeated .google.cloud.talent.v4.LocationFilter location_filters = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.talent.v4.LocationFilterOrBuilder>`

### getPublishTimeRange()

```
public abstract TimestampRange getPublishTimeRange()
```

Jobs published within a range specified by this filter are searched against.

`.google.cloud.talent.v4.TimestampRange publish_time_range = 12;`

**Returns**

**Type**

**Description**

`[TimestampRange](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.TimestampRange)`

The publishTimeRange.

### getPublishTimeRangeOrBuilder()

```
public abstract TimestampRangeOrBuilder getPublishTimeRangeOrBuilder()
```

Jobs published within a range specified by this filter are searched against.

`.google.cloud.talent.v4.TimestampRange publish_time_range = 12;`

**Returns**

**Type**

**Description**

`[TimestampRangeOrBuilder](/java/docs/reference/google-cloud-talent/2.32.0/com.google.cloud.talent.v4.TimestampRangeOrBuilder)`

### getQuery()

```
public abstract String getQuery()
```

The query string that matches against the job title, description, and location fields.

The maximum number of allowed characters is 255.

`string query = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The query.

### getQueryBytes()

```
public abstract ByteString getQueryBytes()
```

The query string that matches against the job title, description, and location fields.

The maximum number of allowed characters is 255.

`string query = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for query.

### getQueryLanguageCode()

```
public abstract String getQueryLanguageCode()
```

The language code of query. For example, "en-US". This field helps to better interpret the query.

If a value isn't specified, the query language code is automatically detected, which may not be accurate.

Language code should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

`string query_language_code = 14;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The queryLanguageCode.

### getQueryLanguageCodeBytes()

```
public abstract ByteString getQueryLanguageCodeBytes()
```

The language code of query. For example, "en-US". This field helps to better interpret the query.

If a value isn't specified, the query language code is automatically detected, which may not be accurate.

Language code should be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).

`string query_language_code = 14;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for queryLanguageCode.

### hasCommuteFilter()

```
public abstract boolean hasCommuteFilter()
```

Allows filtering jobs by commute time with different travel methods (for example, driving or public transit).

Note: This only works when you specify a CommuteMethod. In this case, location\_filters is ignored.

Currently we don't support sorting by commute time.

`.google.cloud.talent.v4.CommuteFilter commute_filter = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the commuteFilter field is set.

### hasCompensationFilter()

```
public abstract boolean hasCompensationFilter()
```

This search filter is applied only to Job.compensation\_info. For example, if the filter is specified as "Hourly job with per-hour compensation > $15", only jobs meeting these criteria are searched. If a filter isn't defined, all open jobs are searched.

`.google.cloud.talent.v4.CompensationFilter compensation_filter = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the compensationFilter field is set.

### hasPublishTimeRange()

```
public abstract boolean hasPublishTimeRange()
```

Jobs published within a range specified by this filter are searched against.

`.google.cloud.talent.v4.TimestampRange publish_time_range = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the publishTimeRange field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
