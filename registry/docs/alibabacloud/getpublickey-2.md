Queries the public key of an asymmetric key.

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

KeyId

string

Yes

1234abcd-12ab-34cd-56ef-12345678\*\*\*\*

The globally unique ID of the key. You can also set this parameter to an alias that is bound to the key.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

KeyId

string

1234abcd-12ab-34cd-56ef-12345678\*\*\*\*

The globally unique ID of the key. If KeyId is set to an alias of the key, the ID of the key to which the alias is bound is returned.

PublicKey

string

\-----BEGIN PUBLIC KEY----- MFkwEwYHKoZIzj0CAQYIKoEcz1UBgi0DQgAEy1ywbEU17uqak8PNqv54BDdtE7+n CGXuj8nKmhPNl3AmN8z2roAowQYORs4JTTfmmLq0jvIU0hBCsSS3aY\*\*\*\*== -----END PUBLIC KEY-----

The public key returned in the PEM format.

RequestId

string

475f1620-b9d3-4d35-b5c6-3fbdd941423d

The request ID.

## Error codes

For more information about error codes, see [Common error codes](/help/en/kms/key-management-service/developer-reference/common-error-codes-1#concept-2112768).
