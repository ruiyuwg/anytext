The KMS Instance SDK (Go) enables programmatic access to the KMS instance API, facilitating tasks such as encryption, decryption, signature verification, and retrieval of credential values.

## Source code

For the source code, see [alibabacloud-dkms-gcs-go-sdk](https://github.com/aliyun/alibabacloud-dkms-gcs-go-sdk).

## **API documentation**

Once you integrate the KMS Instance SDK, you can utilize the KMS instance endpoint to perform operations such as generating data keys, encrypting, decrypting, signing, verifying digital signatures, and accessing credential values. For the API documentation, see [Instance API Overview](/help/en/kms/key-management-service/developer-reference/api-overview#concept-2197194).

## Example code

The KMS Instance SDK (Go) offers a comprehensive collection of example code. Below are some commonly used examples. For additional examples, please refer to the SDK source code.

**Example file name**

**Description**

[advance\_generate\_data\_key.go](https://github.com/aliyun/alibabacloud-dkms-gcs-go-sdk/blob/master/example/advance_generate_data_key.go)

Generate and decrypt data keys.

[advance\_encrypt\_advance\_decrypt.go](https://github.com/aliyun/alibabacloud-dkms-gcs-go-sdk/blob/master/example/advance_encrypt_advance_decrypt.go)

Encrypt and decrypt data (ciphertext data uses envelope format).

encrypt\_decrypt.go

Encrypt and decrypt data (ciphertext data uses original format).

sign\_verify.go

Perform digital signature and signature verification on data.

get\_secret\_value.go

Obtain credential values.
