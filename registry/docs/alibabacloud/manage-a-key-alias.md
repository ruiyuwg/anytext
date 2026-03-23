An alias is an optional identifier of a key. You can use a key alias instead of a key ID when you call an operation to facilitate key management. This topic describes how to create and manage a key alias.

## Usage notes

-   An alias must contain the `alias/` prefix. An alias name excluding the prefix must be 1 to 255 characters in length and can contain letters, digits, underscores (\_), hyphens (-), and forward slashes (/).
    
    **Note**
    
    Key Management Service (KMS) uses the `alias/acs/<Cloud service>` format for service keys. Example: alias/acs/oss. Do not use the format when you create a custom alias.
    
-   An alias must be unique in one region within an Alibaba Cloud account. The aliases can be the same in different regions.
    
-   A key can be associated with multiple aliases, but an alias can be associated with only one key.
    
-   Aliases cannot be modified. To modify the alias of a key, you can create another alias for the key and delete the original alias. If you delete an alias, the key with which the alias is associated is not deleted.
    
    **Warning**
    
    Before you delete an alias, make sure that the alias is no longer in use. Otherwise, data encryption may fail.
    
-   If a Resource Access Management (RAM) user uses an alias of a key instead of the ID of the key to perform operations, the RAM user must have permissions on the key instead of the alias.
    

## Create an alias

You can create an alias for a key to facilitate key management. Existing aliases of a key are not affected when you create an alias for the key.

#### **Prerequisites**

If you create an alias for a key by using a RAM user, make sure that a custom policy is created to grant the RAM user the required permissions. For more information, see [Use RAM to manage access to KMS resources](/help/en/kms/key-management-service/security-and-compliance/use-ram-to-manage-access-to-kms-resources/#concept-28953-zh).

The following sample policy allows User 123456 to create an alias named `alias/example` for Key 08ec3bb9-034f-485b-b1cd-3459baa8\*\*\*\*:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:CreateAlias"
      ],
      "Resource": [
        "acs:kms:cn-hangzhou:123456:key/08ec3bb9-034f-485b-b1cd-3459baa8****",
        "acs:kms:cn-hangzhou:123456:alias/example"
      ]
    }
  ]
}
```

#### **Procedure**

The following table describes the methods that you can use to create an alias for a key. You can select a method based on your business requirements.

**Method**

**Operation**

Use the KMS console

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Resource** > **Keys**.
    
2.  On the **Customer Master Keys** tab or the **Default Keys** tab, find the required key and click **Details** in the **Actions** column.
    
3.  On the **Alias** tab of the details page, click **Create Alias**.
    
    **Note**
    
    An alias must contain the `alias/` prefix. An alias name excluding the prefix must be 1 to 255 characters in length and can contain letters, digits, underscores (\_), hyphens (-), and forward slashes (/).
    

Call an operation

Call the [CreateAlias](/help/en/kms/key-management-service/developer-reference/api-createalias#doc-api-Kms-CreateAlias) operation to create an alias.

Use Alibaba Cloud CLI

Run the aliyun kms CreateAlias command in Alibaba Cloud CLI to create an alias.

```
aliyun kms CreateAlias --KeyId 08ec3bb9-034f-485b-b1cd-3459baa8**** --AliasName alias/example
```

## Update an alias

You can update an alias to associate the alias with a different key.

#### **Prerequisites**

If you use a RAM user to update an alias, make sure that a custom policy is created to grant the RAM user the permissions on the original key, new key, and alias. For more information, see [Use RAM to manage access to KMS resources](/help/en/kms/key-management-service/security-and-compliance/use-ram-to-manage-access-to-kms-resources/#concept-28953-zh).

The following sample policy allows User 123456 to associate an alias named `alias/example` with Key 127d2f84-ee5f-4f4d-9d41-dbc1aca2\*\*\*\*. The key with which this alias is originally associated is 08ec3bb9-034f-485b-b1cd-3459baa8\*\*\*\*.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:UpdateAlias"
      ],
      "Resource": [
        "acs:kms:cn-hangzhou:123456:key/08ec3bb9-034f-485b-b1cd-3459baa8****",
        "acs:kms:cn-hangzhou:123456:key/127d2f84-ee5f-4f4d-9d41-dbc1aca2****",
        "acs:kms:cn-hangzhou:123456:alias/example"
      ]
    }
  ]
}
```

#### **Procedure**

The following table describes the methods that you can use to update an alias for a key. You can select a method based on your business requirements.

**Method**

**Operation**

Call an operation

Call the [UpdateAlias](/help/en/kms/key-management-service/developer-reference/api-updatealias#doc-api-Kms-UpdateAlias) operation to update an alias.

Use Alibaba Cloud CLI

Run the aliyun kms UpdateAlias command in Alibaba Cloud CLI to update an alias.

```
aliyun kms UpdateAlias --AliasName alias/example --KeyId 127d2f84-ee5f-4f4d-9d41-dbc1aca2****
```

## Query all aliases

You can query all aliases of a user in a region.

#### **Prerequisites**

If you use a RAM user to query aliases, make sure that a custom policy is created to grant the RAM user the permissions on aliases. For more information, see [Use RAM to manage access to KMS resources](/help/en/kms/key-management-service/security-and-compliance/use-ram-to-manage-access-to-kms-resources/#concept-28953-zh).

The following sample policy allows User 123456 to query all aliases in a region:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:ListAliases"
      ],
      "Resource": [
        "acs:kms:cn-hangzhou:123456:alias"
      ]
    }
  ]
}
```

#### **Procedure**

The following table describes the methods that you can use to query aliases. You can select a method based on your business requirements.

**Method**

**Operation**

Call an operation

Call the [ListAliases](/help/en/kms/key-management-service/developer-reference/api-listaliases#doc-api-Kms-ListAliases) operation to query all aliases of a user in a region.

Use Alibaba Cloud CLI

Run the aliyun kms ListAliases command in Alibaba Cloud CLI to query all aliases of a user in a region.

```
aliyun kms ListAliases
```

## Query the aliases that are associated with a specific key

You can query all aliases that are associated with a specific key.

#### **Prerequisites**

If you use a RAM user to query the aliases that are associated with a key, make sure that a custom policy is created to grant the RAM user the permissions on the key. For more information, see [Use RAM to manage access to KMS resources](/help/en/kms/key-management-service/security-and-compliance/use-ram-to-manage-access-to-kms-resources/#concept-28953-zh).

The following sample policy allows User 123456 to query the aliases that are associated with Key 127d2f84-ee5f-4f4d-9d41-dbc1aca2\*\*\*\*:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:ListAliasesByKeyId"
      ],
      "Resource": [
        "acs:kms:cn-hangzhou:123456:key/127d2f84-ee5f-4f4d-9d41-dbc1aca2****"
      ]
    }
  ]
}
```

#### **Procedure**

The following table describes the methods that you can use to query the aliases that are associated with a key. You can select a method based on your business requirements.

**Method**

**Operation**

Call an operation

Call the [ListAliasesByKeyId](/help/en/kms/key-management-service/developer-reference/api-listaliasesbykeyid#doc-api-Kms-ListAliasesByKeyId) operation to query the aliases that are associated with a key.

Use Alibaba Cloud CLI

Run the aliyun kms ListAliasesByKeyId command in Alibaba Cloud CLI to query the aliases that are associated with a key.

```
aliyun kms ListAliasesByKeyId --KeyId 127d2f84-ee5f-4f4d-9d41-dbc1aca2****
```

## Delete an alias

You can delete an alias that is no longer in use. If you delete an alias, the key with which the alias is associated is not affected.

#### **Prerequisites**

If you use a RAM user to delete an alias, make sure that a custom policy is created to grant the RAM user the required permissions. For more information, see [Use RAM to manage access to KMS resources](/help/en/kms/key-management-service/security-and-compliance/use-ram-to-manage-access-to-kms-resources/#concept-28953-zh).

The following sample policy allows User 123456 to delete an alias named `alias/example` from Key 127d2f84-ee5f-4f4d-9d41-dbc1aca2\*\*\*\*:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:DeleteAlias"
      ],
      "Resource": [
        "acs:kms:cn-hangzhou:123456:key/127d2f84-ee5f-4f4d-9d41-dbc1aca2****",
        "acs:kms:cn-hangzhou:123456:alias/example"
      ]
    }
  ]
}
```

#### **Procedure**

The following table describes the methods that you can use to delete an alias. You can select a method based on your business requirements.

**Method**

**Operation**

Use the KMS console

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Resource** > **Keys**.
    
2.  On the **Customer Master Keys** tab or the **Default Keys** tab, find the required key and click **Details** in the **Actions** column.
    
3.  On the **Alias** tab of the details page, find the alias that you want to delete and click **Delete** in the **Actions** column.
    

Call an operation

Call the [DeleteAlias](/help/en/kms/key-management-service/developer-reference/api-deletealias#doc-api-Kms-DeleteAlias) operation to delete an alias.

Use Alibaba Cloud CLI

Run the aliyun kms DeleteAlias command in Alibaba Cloud CLI to delete an alias.

```
aliyun kms DeleteAlias --AliasName alias/example
```
