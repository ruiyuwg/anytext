-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ProductOrBuilder (0.43.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.3.7

```
public interface ProductOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAssetReferences(int index)

```
public abstract AssetReference getAssetReferences(int index)
```

Output only. A collection of assets referred by a product. This field is set for Terraform Products only.

`repeated .google.cloud.privatecatalog.v1beta1.AssetReference asset_references = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AssetReference](/java/docs/reference/google-cloud-private-catalog/0.43.0/com.google.cloud.privatecatalog.v1beta1.AssetReference)`

### getAssetReferencesCount()

```
public abstract int getAssetReferencesCount()
```

Output only. A collection of assets referred by a product. This field is set for Terraform Products only.

`repeated .google.cloud.privatecatalog.v1beta1.AssetReference asset_references = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAssetReferencesList()

```
public abstract List<AssetReference> getAssetReferencesList()
```

Output only. A collection of assets referred by a product. This field is set for Terraform Products only.

`repeated .google.cloud.privatecatalog.v1beta1.AssetReference asset_references = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[AssetReference](/java/docs/reference/google-cloud-private-catalog/0.43.0/com.google.cloud.privatecatalog.v1beta1.AssetReference)>`

### getAssetReferencesOrBuilder(int index)

```
public abstract AssetReferenceOrBuilder getAssetReferencesOrBuilder(int index)
```

Output only. A collection of assets referred by a product. This field is set for Terraform Products only.

`repeated .google.cloud.privatecatalog.v1beta1.AssetReference asset_references = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AssetReferenceOrBuilder](/java/docs/reference/google-cloud-private-catalog/0.43.0/com.google.cloud.privatecatalog.v1beta1.AssetReferenceOrBuilder)`

### getAssetReferencesOrBuilderList()

```
public abstract List<? extends AssetReferenceOrBuilder> getAssetReferencesOrBuilderList()
```

Output only. A collection of assets referred by a product. This field is set for Terraform Products only.

`repeated .google.cloud.privatecatalog.v1beta1.AssetReference asset_references = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.privatecatalog.v1beta1.AssetReferenceOrBuilder>`

### getAssetType()

```
public abstract String getAssetType()
```

Output only. The type of the product asset. It can be one of the following values:

-   `google.deploymentmanager.Template`
-   `google.cloudprivatecatalog.ListingOnly`
-   `google.cloudprivatecatalog.Terraform`

`string asset_type = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The assetType.

### getAssetTypeBytes()

```
public abstract ByteString getAssetTypeBytes()
```

Output only. The type of the product asset. It can be one of the following values:

-   `google.deploymentmanager.Template`
-   `google.cloudprivatecatalog.ListingOnly`
-   `google.cloudprivatecatalog.Terraform`

`string asset_type = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for assetType.

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The time when the product was created.

`.google.protobuf.Timestamp create_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The time when the product was created.

`.google.protobuf.Timestamp create_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDisplayMetadata()

```
public abstract Struct getDisplayMetadata()
```

Required. Output only. The display metadata to describe the product. The JSON schema of the metadata differs by Product.asset\_type. When the type is `google.deploymentmanager.Template`, the schema is as follows:

\` `` `"$schema": [http://json-schema.org/draft-04/schema#](http://json-schema.org/draft-04/schema) type: object properties: name: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 tagline: type: string minLength: 1 maxLength: 100 support_info: type: string minLength: 1 maxLength: 2048 creator: type: string minLength: 1 maxLength: 100 documentations: type: array items: type: object properties: url: type: string pattern: "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" title: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 required:` ``

`` `-   name -   description additionalProperties: false     ` ``

`When the asset type is` google.cloudprivatecatalog.ListingOnly`, the schema is as follows:`

`` `"$schema": [http://json-schema.org/draft-04/schema#](http://json-schema.org/draft-04/schema) type: object properties: name: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 tagline: type: string minLength: 1 maxLength: 100 support_info: type: string minLength: 1 maxLength: 2048 creator: type: string minLength: 1 maxLength: 100 documentations: type: array items: type: object properties: url: type: string pattern: "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" title: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 signup_url: type: string pattern: "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" required:` ``

-   `` `name` ``
`` `-   description -   signup_url additionalProperties: false     ` ``

`When the asset type is` google.cloudprivatecatalog.Terraform`, the schema is as follows:`

\`\` "$schema": [http://json-schema.org/draft-04/schema#](http://json-schema.org/draft-04/schema) type: object properties: name: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 tagline: type: string minLength: 1 maxLength: 100 support\_info: type: string minLength: 1 maxLength: 2048 creator: type: string minLength: 1 maxLength: 100 documentations: type: array items: type: object properties: url: type: string pattern: "^(https?)://\[-a-zA-Z0-9+&@#/%?=~_|!:,.;\]\*\[-a-zA-Z0-9+&@#/%=~_|\]" title: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 required:

-   name
-   description additionalProperties: true

`.google.protobuf.Struct display_metadata = 3 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)`

The displayMetadata.

### getDisplayMetadataOrBuilder()

```
public abstract StructOrBuilder getDisplayMetadataOrBuilder()
```

Required. Output only. The display metadata to describe the product. The JSON schema of the metadata differs by Product.asset\_type. When the type is `google.deploymentmanager.Template`, the schema is as follows:

\` `` `"$schema": [http://json-schema.org/draft-04/schema#](http://json-schema.org/draft-04/schema) type: object properties: name: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 tagline: type: string minLength: 1 maxLength: 100 support_info: type: string minLength: 1 maxLength: 2048 creator: type: string minLength: 1 maxLength: 100 documentations: type: array items: type: object properties: url: type: string pattern: "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" title: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 required:` ``

`` `-   name -   description additionalProperties: false     ` ``

`When the asset type is` google.cloudprivatecatalog.ListingOnly`, the schema is as follows:`

`` `"$schema": [http://json-schema.org/draft-04/schema#](http://json-schema.org/draft-04/schema) type: object properties: name: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 tagline: type: string minLength: 1 maxLength: 100 support_info: type: string minLength: 1 maxLength: 2048 creator: type: string minLength: 1 maxLength: 100 documentations: type: array items: type: object properties: url: type: string pattern: "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" title: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 signup_url: type: string pattern: "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" required:` ``

-   `` `name` ``
`` `-   description -   signup_url additionalProperties: false     ` ``

`When the asset type is` google.cloudprivatecatalog.Terraform`, the schema is as follows:`

\`\` "$schema": [http://json-schema.org/draft-04/schema#](http://json-schema.org/draft-04/schema) type: object properties: name: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 tagline: type: string minLength: 1 maxLength: 100 support\_info: type: string minLength: 1 maxLength: 2048 creator: type: string minLength: 1 maxLength: 100 documentations: type: array items: type: object properties: url: type: string pattern: "^(https?)://\[-a-zA-Z0-9+&@#/%?=~_|!:,.;\]\*\[-a-zA-Z0-9+&@#/%=~_|\]" title: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 required:

-   name
-   description additionalProperties: true

`.google.protobuf.Struct display_metadata = 3 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[StructOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.StructOrBuilder.html)`

### getIconUri()

```
public abstract String getIconUri()
```

Output only. The icon URI of the product.

`string icon_uri = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The iconUri.

### getIconUriBytes()

```
public abstract ByteString getIconUriBytes()
```

Output only. The icon URI of the product.

`string icon_uri = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for iconUri.

### getName()

```
public abstract String getName()
```

Output only. The resource name of the target product, in the format of \`products/a-z\*\[a-z0-9\]'.

A unique identifier for the product under a catalog.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. The resource name of the target product, in the format of \`products/a-z\*\[a-z0-9\]'.

A unique identifier for the product under a catalog.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The time when the product was last updated.

`.google.protobuf.Timestamp update_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The time when the product was last updated.

`.google.protobuf.Timestamp update_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The time when the product was created.

`.google.protobuf.Timestamp create_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDisplayMetadata()

```
public abstract boolean hasDisplayMetadata()
```

Required. Output only. The display metadata to describe the product. The JSON schema of the metadata differs by Product.asset\_type. When the type is `google.deploymentmanager.Template`, the schema is as follows:

\` `` `"$schema": [http://json-schema.org/draft-04/schema#](http://json-schema.org/draft-04/schema) type: object properties: name: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 tagline: type: string minLength: 1 maxLength: 100 support_info: type: string minLength: 1 maxLength: 2048 creator: type: string minLength: 1 maxLength: 100 documentations: type: array items: type: object properties: url: type: string pattern: "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" title: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 required:` ``

`` `-   name -   description additionalProperties: false     ` ``

`When the asset type is` google.cloudprivatecatalog.ListingOnly`, the schema is as follows:`

`` `"$schema": [http://json-schema.org/draft-04/schema#](http://json-schema.org/draft-04/schema) type: object properties: name: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 tagline: type: string minLength: 1 maxLength: 100 support_info: type: string minLength: 1 maxLength: 2048 creator: type: string minLength: 1 maxLength: 100 documentations: type: array items: type: object properties: url: type: string pattern: "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" title: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 signup_url: type: string pattern: "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]" required:` ``

-   `` `name` ``
`` `-   description -   signup_url additionalProperties: false     ` ``

`When the asset type is` google.cloudprivatecatalog.Terraform`, the schema is as follows:`

\`\` "$schema": [http://json-schema.org/draft-04/schema#](http://json-schema.org/draft-04/schema) type: object properties: name: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 tagline: type: string minLength: 1 maxLength: 100 support\_info: type: string minLength: 1 maxLength: 2048 creator: type: string minLength: 1 maxLength: 100 documentations: type: array items: type: object properties: url: type: string pattern: "^(https?)://\[-a-zA-Z0-9+&@#/%?=~_|!:,.;\]\*\[-a-zA-Z0-9+&@#/%=~_|\]" title: type: string minLength: 1 maxLength: 64 description: type: string minLength: 1 maxLength: 2048 required:

-   name
-   description additionalProperties: true

`.google.protobuf.Struct display_metadata = 3 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the displayMetadata field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The time when the product was last updated.

`.google.protobuf.Timestamp update_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
