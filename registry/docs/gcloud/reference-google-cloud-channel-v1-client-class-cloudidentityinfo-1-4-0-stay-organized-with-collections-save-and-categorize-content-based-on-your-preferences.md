-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Channel V1 Client - Class CloudIdentityInfo (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

2.4.1 (latest) 2.4.0 2.3.1 2.2.1 2.1.4 2.0.0 1.9.5 1.8.2 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Channel V1 Client class CloudIdentityInfo.

Cloud Identity information for the Cloud Channel Customer.

Generated from protobuf message `google.cloud.channel.v1.CloudIdentityInfo`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ customer_type`

`int`  

CustomerType indicates verification type needed for using services.

`↳ primary_domain`

`string`  

Output only. The primary domain name.

`↳ is_domain_verified`

`bool`  

Output only. Whether the domain is verified. This field is not returned for a Customer's cloud\_identity\_info resource. Partners can use the domains.get() method of the Workspace SDK's Directory API, or listen to the PRIMARY\_DOMAIN\_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers.

`↳ alternate_email`

`string`  

The alternate email.

`↳ phone_number`

`string`  

Phone number associated with the Cloud Identity.

`↳ language_code`

`string`  

Language code.

`↳ admin_console_uri`

`string`  

Output only. URI of Customer's Admin console dashboard.

`↳ edu_data`

`[Google\Cloud\Channel\V1\EduData](/php/docs/reference/cloud-channel/1.4.0/V1.EduData)`  

Edu information about the customer.

### getCustomerType

CustomerType indicates verification type needed for using services.

**Returns**

**Type**

**Description**

`int`

### setCustomerType

CustomerType indicates verification type needed for using services.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPrimaryDomain

Output only. The primary domain name.

**Returns**

**Type**

**Description**

`string`

### setPrimaryDomain

Output only. The primary domain name.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getIsDomainVerified

Output only. Whether the domain is verified.

This field is not returned for a Customer's cloud\_identity\_info resource. Partners can use the domains.get() method of the Workspace SDK's Directory API, or listen to the PRIMARY\_DOMAIN\_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers.

**Returns**

**Type**

**Description**

`bool`

### setIsDomainVerified

Output only. Whether the domain is verified.

This field is not returned for a Customer's cloud\_identity\_info resource. Partners can use the domains.get() method of the Workspace SDK's Directory API, or listen to the PRIMARY\_DOMAIN\_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getAlternateEmail

The alternate email.

**Returns**

**Type**

**Description**

`string`

### setAlternateEmail

The alternate email.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPhoneNumber

Phone number associated with the Cloud Identity.

**Returns**

**Type**

**Description**

`string`

### setPhoneNumber

Phone number associated with the Cloud Identity.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getLanguageCode

Language code.

**Returns**

**Type**

**Description**

`string`

### setLanguageCode

Language code.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAdminConsoleUri

Output only. URI of Customer's Admin console dashboard.

**Returns**

**Type**

**Description**

`string`

### setAdminConsoleUri

Output only. URI of Customer's Admin console dashboard.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEduData

Edu information about the customer.

**Returns**

**Type**

**Description**

`[Google\Cloud\Channel\V1\EduData](/php/docs/reference/cloud-channel/1.4.0/V1.EduData)|null`

### hasEduData

### clearEduData

### setEduData

Edu information about the customer.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Channel\V1\EduData](/php/docs/reference/cloud-channel/1.4.0/V1.EduData)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
