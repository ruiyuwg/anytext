-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataproc Metastore V1 Client - Class HiveMetastoreConfig (0.8.1) Stay organized with collections Save and categorize content based on your preferences.

1.2.3 (latest) 1.2.2 1.1.1 1.0.4 0.11.5 0.10.2 0.9.0 0.8.1 0.7.0 0.6.1 0.5.1 0.4.1

Reference documentation and code samples for the Google Cloud Dataproc Metastore V1 Client class HiveMetastoreConfig.

Specifies configuration information specific to running Hive metastore software as the metastore service.

Generated from protobuf message `google.cloud.metastore.v1.HiveMetastoreConfig`

## Namespace

Google \\ Cloud \\ Metastore \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ version`

`string`  

Immutable. The Hive metastore schema version.

`↳ config_overrides`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in `hive-site.xml`). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version's `AuxiliaryVersionConfig`.

`↳ kerberos_config`

`[Google\Cloud\Metastore\V1\KerberosConfig](/php/docs/reference/cloud-dataproc-metastore/0.8.1/V1.KerberosConfig)`  

Information used to configure the Hive metastore service as a service principal in a Kerberos realm. To disable Kerberos, use the `UpdateService` method and specify this field's path (`hive_metastore_config.kerberos_config`) in the request's `update_mask` while omitting this field from the request's `service`.

`↳ auxiliary_versions`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service's primary version. The key is the auxiliary service name and it must match the regular expression [a-z](/php/docs/reference/cloud-dataproc-metastore/0.8.1/[-a-z0-9]*[a-z0-9])?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.

### getVersion

Immutable. The Hive metastore schema version.

**Returns**

**Type**

**Description**

`string`

### setVersion

Immutable. The Hive metastore schema version.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getConfigOverrides

A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in `hive-site.xml`). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version's `AuxiliaryVersionConfig`.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setConfigOverrides

A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in `hive-site.xml`). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version's `AuxiliaryVersionConfig`.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getKerberosConfig

Information used to configure the Hive metastore service as a service principal in a Kerberos realm. To disable Kerberos, use the `UpdateService` method and specify this field's path (`hive_metastore_config.kerberos_config`) in the request's `update_mask` while omitting this field from the request's `service`.

**Returns**

**Type**

**Description**

`[Google\Cloud\Metastore\V1\KerberosConfig](/php/docs/reference/cloud-dataproc-metastore/0.8.1/V1.KerberosConfig)|null`

### hasKerberosConfig

### clearKerberosConfig

### setKerberosConfig

Information used to configure the Hive metastore service as a service principal in a Kerberos realm. To disable Kerberos, use the `UpdateService` method and specify this field's path (`hive_metastore_config.kerberos_config`) in the request's `update_mask` while omitting this field from the request's `service`.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Metastore\V1\KerberosConfig](/php/docs/reference/cloud-dataproc-metastore/0.8.1/V1.KerberosConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getAuxiliaryVersions

A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service's primary version. The key is the auxiliary service name and it must match the regular expression [a-z](/php/docs/reference/cloud-dataproc-metastore/0.8.1/[-a-z0-9]*[a-z0-9])?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setAuxiliaryVersions

A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service's primary version. The key is the auxiliary service name and it must match the regular expression [a-z](/php/docs/reference/cloud-dataproc-metastore/0.8.1/[-a-z0-9]*[a-z0-9])?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
