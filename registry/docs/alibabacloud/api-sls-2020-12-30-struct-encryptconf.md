Parameter

Type

Description

Example

object

The data structure of the encryption configuration.

enable

boolean

Specifies whether to enable data encryption. Valid values:

-   true
-   false

true

encrypt\_type

string

The encryption algorithm. Valid values: default and sm4. If enable is set to true, you must configure this parameter.

default

user\_cmk\_info

[EncryptUserCmkConf](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-encryptusercmkconf)

Optional. If you configure this parameter, the bring-your-own-key (BYOK) key is used. If you do not configure this parameter, the service key of Simple Log Service is used.

{ "cmk\_key\_id" : "f5136b95-2420-ab31-xxxxxxxxx" "arn" : "acs:ram::13234:role/logsource" "region\_id" : "cn-hangzhou" }
