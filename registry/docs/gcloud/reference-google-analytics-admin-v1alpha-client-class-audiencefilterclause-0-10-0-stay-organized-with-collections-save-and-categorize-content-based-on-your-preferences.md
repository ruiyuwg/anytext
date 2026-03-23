-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Analytics Admin V1alpha Client - Class AudienceFilterClause (0.10.0) Stay organized with collections Save and categorize content based on your preferences.

0.31.3 (latest) 0.31.2 0.30.0 0.29.1 0.28.1 0.27.0 0.26.0 0.25.2 0.24.2 0.23.0 0.22.5 0.20.0 0.19.0 0.18.1 0.17.0 0.16.0 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.2

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Analytics Admin V1alpha Client class AudienceFilterClause.

A clause for defining either a simple or sequence filter. A filter can be inclusive (i.e., users satisfying the filter clause are included in the Audience) or exclusive (i.e., users satisfying the filter clause are excluded from the Audience).

Generated from protobuf message `google.analytics.admin.v1alpha.AudienceFilterClause`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ simple_filter`

`[Google\Analytics\Admin\V1alpha\AudienceSimpleFilter](/php/docs/reference/analytics-admin/0.10.0/V1alpha.AudienceSimpleFilter)`  

A simple filter that a user must satisfy to be a member of the Audience.

`↳ sequence_filter`

`[Google\Analytics\Admin\V1alpha\AudienceSequenceFilter](/php/docs/reference/analytics-admin/0.10.0/V1alpha.AudienceSequenceFilter)`  

Filters that must occur in a specific order for the user to be a member of the Audience.

`↳ clause_type`

`int`  

Required. Specifies whether this is an include or exclude filter clause.

### getSimpleFilter

A simple filter that a user must satisfy to be a member of the Audience.

**Returns**

**Type**

**Description**

`[Google\Analytics\Admin\V1alpha\AudienceSimpleFilter](/php/docs/reference/analytics-admin/0.10.0/V1alpha.AudienceSimpleFilter)|null`

### hasSimpleFilter

### setSimpleFilter

A simple filter that a user must satisfy to be a member of the Audience.

**Parameter**

**Name**

**Description**

`var`

`[Google\Analytics\Admin\V1alpha\AudienceSimpleFilter](/php/docs/reference/analytics-admin/0.10.0/V1alpha.AudienceSimpleFilter)`  

**Returns**

**Type**

**Description**

`$this`

### getSequenceFilter

Filters that must occur in a specific order for the user to be a member of the Audience.

**Returns**

**Type**

**Description**

`[Google\Analytics\Admin\V1alpha\AudienceSequenceFilter](/php/docs/reference/analytics-admin/0.10.0/V1alpha.AudienceSequenceFilter)|null`

### hasSequenceFilter

### setSequenceFilter

Filters that must occur in a specific order for the user to be a member of the Audience.

**Parameter**

**Name**

**Description**

`var`

`[Google\Analytics\Admin\V1alpha\AudienceSequenceFilter](/php/docs/reference/analytics-admin/0.10.0/V1alpha.AudienceSequenceFilter)`  

**Returns**

**Type**

**Description**

`$this`

### getClauseType

Required. Specifies whether this is an include or exclude filter clause.

**Returns**

**Type**

**Description**

`int`

### setClauseType

Required. Specifies whether this is an include or exclude filter clause.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getFilter

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
