EncryptionContext is a JSON string that can be used in KMS API operations, such as Encrypt, GenerateDataKey, and Decrypt.

## Function of EncryptionContext

EncryptionContext is a JSON string, and it must be in the string-string format. EncryptionContext is used to ensure data integrity.

If this parameter is specified during encryption, you must specify an equivalent EncryptionContext value for decryption. You can call the Encrypt or GenerateDataKey operation for encryption and call the Decrypt operation for decryption. EncryptionContext is related to decryption, but it is not included in ciphertext, which corresponds to the CipherBlob parameter.

## Valid values of EncryptionContext

A valid value of EncryptionContext is a JSON string of up to 8,192 characters in the string-string format. When you specify EncryptionContext for an API operation, consider the escape characters.

Example of valid EncryptionContext

```
{"ValidKey":"ValidValue"}
{"Key1":"Value1","Key2":"Value2"}         
```

Example of invalid EncryptionContext

```
[{"Key":"Value"}] // JSON array
{"Key":12345} //String-int
{"Key":["value1","value2"]} // String-array         
```

## Equivalent EncryptionContext

EncryptionContext is a map or hash table in the string-string format. Two EncryptionContext values are considered to be equivalent if their key-value pairs are consistent. The sequences of the key-value pairs can be different. If EncryptionContext is specified during encryption, you can specify an equivalent EncryptionContext value to decrypt ciphertext. The EncryptionContext values do not have to be identical.

Example of equivalent EncryptionContext values

```
{"Key1":"Value1","Key2":"Value2"} is equivalent to {"Key2":"Value2","Key1":"Value1"}.         
```
