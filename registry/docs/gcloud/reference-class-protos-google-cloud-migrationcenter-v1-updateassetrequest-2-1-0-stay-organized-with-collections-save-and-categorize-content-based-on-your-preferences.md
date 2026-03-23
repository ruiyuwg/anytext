-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Node.js](https://docs.cloud.google.com/nodejs/docs)
-   [Client libraries](https://docs.cloud.google.com/nodejs/docs/reference)

Send feedback

# Class protos.google.cloud.migrationcenter.v1.UpdateAssetRequest (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Represents an UpdateAssetRequest.

## Package

[@google-cloud/migrationcenter](https://docs.cloud.google.com/nodejs/docs/reference/migrationcenter/latest/overview.html)

## Constructors

### (constructor)(properties)

```
constructor(properties?: google.cloud.migrationcenter.v1.IUpdateAssetRequest);
```

Constructs a new UpdateAssetRequest.

**Parameter**

**Name**

**Description**

`properties`

`[IUpdateAssetRequest](/nodejs/docs/reference/migrationcenter/latest/migrationcenter/protos.google.cloud.migrationcenter.v1.iupdateassetrequest)`  

Properties to set

## Properties

### asset

```
public asset?: (google.cloud.migrationcenter.v1.IAsset|null);
```

UpdateAssetRequest asset.

### requestId

```
public requestId: string;
```

UpdateAssetRequest requestId.

### updateMask

```
public updateMask?: (google.protobuf.IFieldMask|null);
```

UpdateAssetRequest updateMask.

## Methods

### create(properties)

```
public static create(properties?: google.cloud.migrationcenter.v1.IUpdateAssetRequest): google.cloud.migrationcenter.v1.UpdateAssetRequest;
```

Creates a new UpdateAssetRequest instance using the specified properties.

**Parameter**

**Name**

**Description**

`properties`

`[IUpdateAssetRequest](/nodejs/docs/reference/migrationcenter/latest/migrationcenter/protos.google.cloud.migrationcenter.v1.iupdateassetrequest)`  

Properties to set

**Returns**

**Type**

**Description**

`[UpdateAssetRequest](/nodejs/docs/reference/migrationcenter/latest/migrationcenter/protos.google.cloud.migrationcenter.v1.updateassetrequest)`

UpdateAssetRequest instance

### decode(reader, length)

```
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.migrationcenter.v1.UpdateAssetRequest;
```

Decodes an UpdateAssetRequest message from the specified reader or buffer.

**Parameters**

**Name**

**Description**

`reader`

`(Reader|Uint8Array)`  

Reader or buffer to decode from

`length`

`number`  

Message length if known beforehand

**Returns**

**Type**

**Description**

`[UpdateAssetRequest](/nodejs/docs/reference/migrationcenter/latest/migrationcenter/protos.google.cloud.migrationcenter.v1.updateassetrequest)`

UpdateAssetRequest

### decodeDelimited(reader)

```
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.migrationcenter.v1.UpdateAssetRequest;
```

Decodes an UpdateAssetRequest message from the specified reader or buffer, length delimited.

**Parameter**

**Name**

**Description**

`reader`

`(Reader|Uint8Array)`  

Reader or buffer to decode from

**Returns**

**Type**

**Description**

`[UpdateAssetRequest](/nodejs/docs/reference/migrationcenter/latest/migrationcenter/protos.google.cloud.migrationcenter.v1.updateassetrequest)`

UpdateAssetRequest

### encode(message, writer)

```
public static encode(message: google.cloud.migrationcenter.v1.IUpdateAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;
```

Encodes the specified UpdateAssetRequest message. Does not implicitly messages.

**Parameters**

**Name**

**Description**

`message`

`[IUpdateAssetRequest](/nodejs/docs/reference/migrationcenter/latest/migrationcenter/protos.google.cloud.migrationcenter.v1.iupdateassetrequest)`  

UpdateAssetRequest message or plain object to encode

`writer`

`$protobuf.Writer`  

Writer to encode to

**Returns**

**Type**

**Description**

`$protobuf.Writer`

Writer

### encodeDelimited(message, writer)

```
public static encodeDelimited(message: google.cloud.migrationcenter.v1.IUpdateAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;
```

Encodes the specified UpdateAssetRequest message, length delimited. Does not implicitly messages.

**Parameters**

**Name**

**Description**

`message`

`[IUpdateAssetRequest](/nodejs/docs/reference/migrationcenter/latest/migrationcenter/protos.google.cloud.migrationcenter.v1.iupdateassetrequest)`  

UpdateAssetRequest message or plain object to encode

`writer`

`$protobuf.Writer`  

Writer to encode to

**Returns**

**Type**

**Description**

`$protobuf.Writer`

Writer

### fromObject(object)

```
public static fromObject(object: { [k: string]: any }): google.cloud.migrationcenter.v1.UpdateAssetRequest;
```

Creates an UpdateAssetRequest message from a plain object. Also converts values to their respective internal types.

**Parameter**

**Name**

**Description**

`object`

`{ [k: string]: any }`  

Plain object

**Returns**

**Type**

**Description**

`[UpdateAssetRequest](/nodejs/docs/reference/migrationcenter/latest/migrationcenter/protos.google.cloud.migrationcenter.v1.updateassetrequest)`

UpdateAssetRequest

### getTypeUrl(typeUrlPrefix)

```
public static getTypeUrl(typeUrlPrefix?: string): string;
```

Gets the default type url for UpdateAssetRequest

**Parameter**

**Name**

**Description**

`typeUrlPrefix`

`string`  

your custom typeUrlPrefix(default "type.googleapis.com")

**Returns**

**Type**

**Description**

`string`

The default type url

### toJSON()

```
public toJSON(): { [k: string]: any };
```

Converts this UpdateAssetRequest to JSON.

**Returns**

**Type**

**Description**

`{ [k: string]: any }`

JSON object

### toObject(message, options)

```
public static toObject(message: google.cloud.migrationcenter.v1.UpdateAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
```

Creates a plain object from an UpdateAssetRequest message. Also converts values to other types if specified.

**Parameters**

**Name**

**Description**

`message`

`[UpdateAssetRequest](/nodejs/docs/reference/migrationcenter/latest/migrationcenter/protos.google.cloud.migrationcenter.v1.updateassetrequest)`  

UpdateAssetRequest

`options`

`$protobuf.IConversionOptions`  

Conversion options

**Returns**

**Type**

**Description**

`{ [k: string]: any }`

Plain object

### verify(message)

```
public static verify(message: { [k: string]: any }): (string|null);
```

Verifies an UpdateAssetRequest message.

**Parameter**

**Name**

**Description**

`message`

`{ [k: string]: any }`  

Plain object to verify

**Returns**

**Type**

**Description**

`(string|null)`

`null` if valid, otherwise the reason why it is not

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-10-30 UTC.
