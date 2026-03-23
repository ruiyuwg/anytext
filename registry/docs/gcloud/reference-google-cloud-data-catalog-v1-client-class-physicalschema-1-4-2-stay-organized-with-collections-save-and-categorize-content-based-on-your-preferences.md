-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Data Catalog V1 Client - Class PhysicalSchema (1.4.2) Stay organized with collections Save and categorize content based on your preferences.

2.4.2 (latest) 2.4.1 2.3.2 2.2.4 2.1.0 2.0.2 1.10.3 1.9.1 1.8.2 1.7.1 1.6.0 1.5.1 1.4.2 1.3.9

Reference documentation and code samples for the Google Cloud Data Catalog V1 Client class PhysicalSchema.

Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.

Generated from protobuf message `google.cloud.datacatalog.v1.PhysicalSchema`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ avro`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\AvroSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.AvroSchema)`  

Schema in Avro JSON format.

`↳ thrift`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\ThriftSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.ThriftSchema)`  

Schema in Thrift format.

`↳ protobuf`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\ProtobufSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.ProtobufSchema)`  

Schema in protocol buffer format.

`↳ parquet`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\ParquetSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.ParquetSchema)`  

Marks a Parquet-encoded data source.

`↳ orc`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\OrcSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.OrcSchema)`  

Marks an ORC-encoded data source.

`↳ csv`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\CsvSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.CsvSchema)`  

Marks a CSV-encoded data source.

### getAvro

Schema in Avro JSON format.

**Returns**

**Type**

**Description**

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\AvroSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.AvroSchema)|null`

### hasAvro

### setAvro

Schema in Avro JSON format.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\AvroSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.AvroSchema)`  

**Returns**

**Type**

**Description**

`$this`

### getThrift

Schema in Thrift format.

**Returns**

**Type**

**Description**

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\ThriftSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.ThriftSchema)|null`

### hasThrift

### setThrift

Schema in Thrift format.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\ThriftSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.ThriftSchema)`  

**Returns**

**Type**

**Description**

`$this`

### getProtobuf

Schema in protocol buffer format.

**Returns**

**Type**

**Description**

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\ProtobufSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.ProtobufSchema)|null`

### hasProtobuf

### setProtobuf

Schema in protocol buffer format.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\ProtobufSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.ProtobufSchema)`  

**Returns**

**Type**

**Description**

`$this`

### getParquet

Marks a Parquet-encoded data source.

**Returns**

**Type**

**Description**

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\ParquetSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.ParquetSchema)|null`

### hasParquet

### setParquet

Marks a Parquet-encoded data source.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\ParquetSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.ParquetSchema)`  

**Returns**

**Type**

**Description**

`$this`

### getOrc

Marks an ORC-encoded data source.

**Returns**

**Type**

**Description**

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\OrcSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.OrcSchema)|null`

### hasOrc

### setOrc

Marks an ORC-encoded data source.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\OrcSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.OrcSchema)`  

**Returns**

**Type**

**Description**

`$this`

### getCsv

Marks a CSV-encoded data source.

**Returns**

**Type**

**Description**

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\CsvSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.CsvSchema)|null`

### hasCsv

### setCsv

Marks a CSV-encoded data source.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\DataCatalog\V1\PhysicalSchema\CsvSchema](/php/docs/reference/cloud-data-catalog/1.4.2/V1.PhysicalSchema.CsvSchema)`  

**Returns**

**Type**

**Description**

`$this`

### getSchema

**Returns**

**Type**

**Description**

`string`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
