-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Node.js](https://docs.cloud.google.com/nodejs/docs)
-   [Client libraries](https://docs.cloud.google.com/nodejs/docs/reference)

Send feedback

# Class protos.google.bigtable.v2.CheckAndMutateRowRequest (5.1.2) Stay organized with collections Save and categorize content based on your preferences.

Version 5.1.2keyboard\_arrow\_down

-   [6.0.0 (latest)](/nodejs/docs/reference/bigtable/latest/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [5.1.2](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [5.0.0](/nodejs/docs/reference/bigtable/5.0.0/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [4.6.1](/nodejs/docs/reference/bigtable/4.6.1/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [4.1.0](/nodejs/docs/reference/bigtable/4.1.0/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [4.0.5](/nodejs/docs/reference/bigtable/4.0.5/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [3.10.0](/nodejs/docs/reference/bigtable/3.10.0/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [3.9.4](/nodejs/docs/reference/bigtable/3.9.4/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [3.8.0](/nodejs/docs/reference/bigtable/3.8.0/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [3.7.0](/nodejs/docs/reference/bigtable/3.7.0/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [3.6.0](/nodejs/docs/reference/bigtable/3.6.0/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)
-   [3.5.4](/nodejs/docs/reference/bigtable/3.5.4/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)

Represents a CheckAndMutateRowRequest.

## Package

[@google-cloud/bigtable](https://docs.cloud.google.com/nodejs/docs/reference/bigtable/5.1.2/overview.html)

## Constructors

### (constructor)(properties)

```
constructor(properties?: google.bigtable.v2.ICheckAndMutateRowRequest);
```

Constructs a new CheckAndMutateRowRequest.

**Parameter**

**Name**

**Description**

`properties`

`[ICheckAndMutateRowRequest](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.icheckandmutaterowrequest)`  

Properties to set

## Properties

### appProfileId

```
public appProfileId: string;
```

CheckAndMutateRowRequest appProfileId.

### authorizedViewName

```
public authorizedViewName: string;
```

CheckAndMutateRowRequest authorizedViewName.

### falseMutations

```
public falseMutations: google.bigtable.v2.IMutation[];
```

CheckAndMutateRowRequest falseMutations.

### predicateFilter

```
public predicateFilter?: (google.bigtable.v2.IRowFilter|null);
```

CheckAndMutateRowRequest predicateFilter.

### rowKey

```
public rowKey: (Uint8Array|string);
```

CheckAndMutateRowRequest rowKey.

### tableName

```
public tableName: string;
```

CheckAndMutateRowRequest tableName.

### trueMutations

```
public trueMutations: google.bigtable.v2.IMutation[];
```

CheckAndMutateRowRequest trueMutations.

## Methods

### create(properties)

```
public static create(properties?: google.bigtable.v2.ICheckAndMutateRowRequest): google.bigtable.v2.CheckAndMutateRowRequest;
```

Creates a new CheckAndMutateRowRequest instance using the specified properties.

**Parameter**

**Name**

**Description**

`properties`

`[ICheckAndMutateRowRequest](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.icheckandmutaterowrequest)`  

Properties to set

**Returns**

**Type**

**Description**

`[CheckAndMutateRowRequest](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)`

CheckAndMutateRowRequest instance

### decode(reader, length)

```
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.bigtable.v2.CheckAndMutateRowRequest;
```

Decodes a CheckAndMutateRowRequest message from the specified reader or buffer.

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

`[CheckAndMutateRowRequest](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)`

CheckAndMutateRowRequest

### decodeDelimited(reader)

```
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.bigtable.v2.CheckAndMutateRowRequest;
```

Decodes a CheckAndMutateRowRequest message from the specified reader or buffer, length delimited.

**Parameter**

**Name**

**Description**

`reader`

`(Reader|Uint8Array)`  

Reader or buffer to decode from

**Returns**

**Type**

**Description**

`[CheckAndMutateRowRequest](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)`

CheckAndMutateRowRequest

### encode(message, writer)

```
public static encode(message: google.bigtable.v2.ICheckAndMutateRowRequest, writer?: $protobuf.Writer): $protobuf.Writer;
```

Encodes the specified CheckAndMutateRowRequest message. Does not implicitly messages.

**Parameters**

**Name**

**Description**

`message`

`[ICheckAndMutateRowRequest](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.icheckandmutaterowrequest)`  

CheckAndMutateRowRequest message or plain object to encode

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
public static encodeDelimited(message: google.bigtable.v2.ICheckAndMutateRowRequest, writer?: $protobuf.Writer): $protobuf.Writer;
```

Encodes the specified CheckAndMutateRowRequest message, length delimited. Does not implicitly messages.

**Parameters**

**Name**

**Description**

`message`

`[ICheckAndMutateRowRequest](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.icheckandmutaterowrequest)`  

CheckAndMutateRowRequest message or plain object to encode

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
public static fromObject(object: { [k: string]: any }): google.bigtable.v2.CheckAndMutateRowRequest;
```

Creates a CheckAndMutateRowRequest message from a plain object. Also converts values to their respective internal types.

**Parameter**

**Name**

**Description**

`object`

`{ [k: string]: any }`  

Plain object

**Returns**

**Type**

**Description**

`[CheckAndMutateRowRequest](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)`

CheckAndMutateRowRequest

### getTypeUrl(typeUrlPrefix)

```
public static getTypeUrl(typeUrlPrefix?: string): string;
```

Gets the default type url for CheckAndMutateRowRequest

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

Converts this CheckAndMutateRowRequest to JSON.

**Returns**

**Type**

**Description**

`{ [k: string]: any }`

JSON object

### toObject(message, options)

```
public static toObject(message: google.bigtable.v2.CheckAndMutateRowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
```

Creates a plain object from a CheckAndMutateRowRequest message. Also converts values to other types if specified.

**Parameters**

**Name**

**Description**

`message`

`[CheckAndMutateRowRequest](/nodejs/docs/reference/bigtable/5.1.2/bigtable/protos.google.bigtable.v2.checkandmutaterowrequest)`  

CheckAndMutateRowRequest

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

Verifies a CheckAndMutateRowRequest message.

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

Last updated 2026-03-09 UTC.
