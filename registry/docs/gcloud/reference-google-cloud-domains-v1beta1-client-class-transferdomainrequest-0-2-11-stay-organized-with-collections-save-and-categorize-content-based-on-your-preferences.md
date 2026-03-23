-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Domains V1beta1 Client - Class TransferDomainRequest (0.2.11) Stay organized with collections Save and categorize content based on your preferences.

1.1.3 (latest) 1.1.2 1.0.4 0.5.5 0.4.2 0.3.1 0.2.11

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Domains V1beta1 Client class TransferDomainRequest.

Request for the `TransferDomain` method.

Generated from protobuf message `google.cloud.domains.v1beta1.TransferDomainRequest`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`.

`↳ registration`

`[Google\Cloud\Domains\V1beta1\Registration](/php/docs/reference/cloud-domains/0.2.11/V1beta1.Registration)`  

Required. The complete `Registration` resource to be created. You can leave `registration.dns_settings` unset to import the domain's current DNS configuration from its current registrar. Use this option only if you are sure that the domain's current DNS service does not cease upon transfer, as is often the case for DNS services provided for free by the registrar.

`↳ contact_notices`

`array`  

The list of contact notices that you acknowledge. The notices needed here depend on the values specified in `registration.contact_settings`.

`↳ yearly_price`

`[Google\Type\Money](https://googleapis.github.io/common-protos-php#Google/Type/Money)`  

Required. Acknowledgement of the price to transfer or renew the domain for one year. Call `RetrieveTransferParameters` to obtain the price, which you must acknowledge.

`↳ authorization_code`

`[Google\Cloud\Domains\V1beta1\AuthorizationCode](/php/docs/reference/cloud-domains/0.2.11/V1beta1.AuthorizationCode)`  

The domain's transfer authorization code. You can obtain this from the domain's current registrar.

`↳ validate_only`

`bool`  

Validate the request without actually transferring the domain.

### getParent

Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRegistration

Required. The complete `Registration` resource to be created.

You can leave `registration.dns_settings` unset to import the domain's current DNS configuration from its current registrar. Use this option only if you are sure that the domain's current DNS service does not cease upon transfer, as is often the case for DNS services provided for free by the registrar.

**Returns**

**Type**

**Description**

`[Google\Cloud\Domains\V1beta1\Registration](/php/docs/reference/cloud-domains/0.2.11/V1beta1.Registration)|null`

### hasRegistration

### clearRegistration

### setRegistration

Required. The complete `Registration` resource to be created.

You can leave `registration.dns_settings` unset to import the domain's current DNS configuration from its current registrar. Use this option only if you are sure that the domain's current DNS service does not cease upon transfer, as is often the case for DNS services provided for free by the registrar.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Domains\V1beta1\Registration](/php/docs/reference/cloud-domains/0.2.11/V1beta1.Registration)`  

**Returns**

**Type**

**Description**

`$this`

### getContactNotices

The list of contact notices that you acknowledge. The notices needed here depend on the values specified in `registration.contact_settings`.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setContactNotices

The list of contact notices that you acknowledge. The notices needed here depend on the values specified in `registration.contact_settings`.

**Parameter**

**Name**

**Description**

`var`

`int[]`  

**Returns**

**Type**

**Description**

`$this`

### getYearlyPrice

Required. Acknowledgement of the price to transfer or renew the domain for one year.

Call `RetrieveTransferParameters` to obtain the price, which you must acknowledge.

**Returns**

**Type**

**Description**

`[Google\Type\Money](https://googleapis.github.io/common-protos-php#Google/Type/Money)|null`

### hasYearlyPrice

### clearYearlyPrice

### setYearlyPrice

Required. Acknowledgement of the price to transfer or renew the domain for one year.

Call `RetrieveTransferParameters` to obtain the price, which you must acknowledge.

**Parameter**

**Name**

**Description**

`var`

`[Google\Type\Money](https://googleapis.github.io/common-protos-php#Google/Type/Money)`  

**Returns**

**Type**

**Description**

`$this`

### getAuthorizationCode

The domain's transfer authorization code. You can obtain this from the domain's current registrar.

**Returns**

**Type**

**Description**

`[Google\Cloud\Domains\V1beta1\AuthorizationCode](/php/docs/reference/cloud-domains/0.2.11/V1beta1.AuthorizationCode)|null`

### hasAuthorizationCode

### clearAuthorizationCode

### setAuthorizationCode

The domain's transfer authorization code. You can obtain this from the domain's current registrar.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Domains\V1beta1\AuthorizationCode](/php/docs/reference/cloud-domains/0.2.11/V1beta1.AuthorizationCode)`  

**Returns**

**Type**

**Description**

`$this`

### getValidateOnly

Validate the request without actually transferring the domain.

**Returns**

**Type**

**Description**

`bool`

### setValidateOnly

Validate the request without actually transferring the domain.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
