This topic provides answers to frequently asked questions about secrets.

## Questions

-   [How does KMS ensure the security of secrets?](/help/en/kms/key-management-service/user-guide/secrets-faq#section-rxb-0d2-e3i)
    
-   [How is a secret encrypted?](/help/en/kms/key-management-service/user-guide/secrets-faq#section-7z3-2ih-pcb)
    
-   [What do I do when setting a rotation policy or initiating immediate rotation, the message "Your secret is being rotated, please try again later" appears?](/help/en/kms/key-management-service/user-guide/secrets-faq#c2675b303c870)
    
-   [What do I do if secret status is unavailable or the API call returns "Rejected.Unavailable"?](#b4988ba06dkht)
    
-   [What do I do if cannot find created secrets in the new console (KMS 3.0)?](#c7091ebe3b996)
    
-   [What do I do if the verification of RDS secret account fails?](#77f852d249013)
    
-   [What do I do when creating a RAM secret and authorizing KMS to access AK permissions, the message "You are not authorized to do this action" appears?](#6e23163d4cwve)
    
-   [What permission policies are required to retrieve a key-encrypted secret value via the API?](#9007fd2c10imd)
    

## How does KMS ensure the security of secrets?

When creating a secret, you must specify a symmetric key in the instance to which the secret belongs. KMS uses the symmetric key to generate a data key, uses the data key to encrypt the secret, and then stores the secret in your dedicated storage. This encryption mechanism is referred to as envelope encryption.

**Note**

KMS does not encrypt secret metadata, such as the secret name, version number, and stage label of the version.

When your application requests a secret, KMS performs identity authentication and a permission check on the application by using Resource Access Management (RAM) or an application access point (AAP). After your application passes the authentication and permission check, KMS decrypts the secret and returns the plaintext of the secret to your application over TLS 1.2.

## How is a secret encrypted?

KMS encrypts a secret via envelope encryption.

The key used in envelope encryption is the one that you specify when you create the secret. For details, see [Use KMS keys for envelope encryption](/help/en/kms/key-management-service/use-cases/use-envelope-encryption).

## What do I do when setting a rotation policy or initiating immediate rotation**, the message "Your secret is being rotated, please try again later" appears?**

**Secret type**

**Possible cause and solution**

RAM secret

The RAM secret is being rotated.

The rotation period for automatic rotation is approximately 48 hours. The rotation period for immediate rotation is the rotation window that you specified.

If it is not complete in the rotation window, check whether the RAM user still exists in RAM.

RDS secret

In most cases, the rotation of an RDS secret is immediately complete. If it is not complete for more than 2 minutes, check whether the required RDS instance and the required ApsaraDB RDS account work as expected.

ECS secret

In most cases, the rotation of an ECS secret is immediately complete. If it is not complete for more than 2 minutes, check whether the required ECS instance and the required ECS account work as expected.

## **What do I do if secret status is unavailable or the API call returns "Rejected.Unavailable"?**

Because the KMS instance to which the secret belongs has expired.

Renew the instance within 15 calendar days after expiration. Otherwise, the instance will be released. For more information, see [Renewal policy](/help/en/kms/key-management-service/product-overview/kms-billing#section-3tt-br5-7gg).

If you do not need the instance now but may require the keys or secrets in the instance later, back up the instance in advance. For more information, see [Backup management](/help/en/kms/key-management-service/user-guide/backups).

## **What do I do if cannot find created secrets in the new console (KMS 3.0)?**

**Note**

The new console (KMS 3.0) displays only the secrets that are managed in KMS instances.

Users, using the old version of KMS (1.0), can create secrets without purchasing a KMS instance. However, these secrets cannot be viewed in the 3.0 console. Return to the [old console](https://yundun.console.alibabacloud.com/?p=kms/) to view your created secrets.

## **What do I do if the verification of RDS secret account fails?**

In most cases, this occurs because the ApsaraDB RDS account or ApsaraDB RDS instance associated with the RDS secret has been deleted. We recommend that you check whether the ApsaraDB RDS account or ApsaraDB RDS instance exists in ApsaraDB RDS.

## **What do I do when creating a RAM secret and authorizing KMS to access AK permissions, the message "You are not authorized to do this action" appears?**

When the message "You are not authorized to do this action" appears during authorization of KMS to access AK permissions, it indicates that the current logged-on RAM account does not have permission to operate on cloud resources.

Send the authorization link to the RAM administrator (a RAM user with resource management permissions or Alibaba Cloud account) to complete the authorization. When the authorization is complete, return to the RAM secrets creation page and click the **Refresh** button. Then you can create RAM secrets. For more information, see [Step 1: Grant KMS the permissions to manage the AccessKey pair of a RAM user](/help/en/kms/key-management-service/user-guide/manage-and-use-ram-secrets#section-ghv-9u0-pwi).

## What permission **policies are required to retrieve a key-encrypted secret value via the API?**

At a minimum, both `GetSecretValue` and `Decrypt` permissions are required.

Example:

```
{
	"Version": "1",
	"Statement": [{
		"Effect": "Allow",
		"Action": [
			"kms:GetSecretValue",
			"kms:Decrypt"
		],
		"Resource": [
			"acs:kms:${region}:${account}:secret/example-secret",
			"acs:kms:${region}:${account}:key/keyId-example"
		]
	}]
}
```

For instructions, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user) and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
